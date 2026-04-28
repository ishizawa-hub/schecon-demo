import {
  BehaviorSubject,
  NgZone,
  Subject,
  __async,
  __spreadProps,
  __spreadValues,
  filter,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-3YYMYGX4.js";

// src/app/shared/services/browser-notification.service.ts
var STORAGE_KEYS = {
  /** 権限要求プロンプトを表示した最後の時刻 (回数制限) */
  LAST_PROMPT_TIME: "schecon.notify.lastPrompt.v1",
  /** ユーザーが「あとで」を押した回数 */
  DISMISS_COUNT: "schecon.notify.dismissCount.v1",
  /** ユーザーが「もう出さない」を押したか */
  SUPPRESSED: "schecon.notify.suppressed.v1",
  /** ルーム別: 最後に通知した時刻 (クールダウン用) */
  ROOM_LAST_NOTIFY: "schecon.notify.roomLast.v1",
  /** グローバル: アプリ内の通知 ON/OFF (権限は granted でもユーザーがアプリ側で OFF にできる) */
  APP_ENABLED: "schecon.notify.appEnabled.v1"
};
var AGGREGATION_WINDOW_MS = 3e3;
var ROOM_COOLDOWN_MS = 30 * 1e3;
var MAX_NOTIFY_PER_MINUTE = 3;
var DISMISS_SNOOZE_STEPS_MS = [
  60 * 60 * 1e3,
  // 1 時間 (初回あとで)
  4 * 60 * 60 * 1e3,
  // 4 時間 (2 回目)
  24 * 60 * 60 * 1e3
  // 24 時間 (3 回目以降)
];
var BrowserNotificationService = class _BrowserNotificationService {
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.pendingByRoom = /* @__PURE__ */ new Map();
    this.flushTimer = null;
    this.recentNotifyTimes = [];
    this.permission$ = new BehaviorSubject(this.readPermission());
    this.appEnabled$ = new BehaviorSubject(this.readAppEnabled());
    this.activeRoomId = null;
    this._audioCtx = null;
    if (typeof document !== "undefined") {
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") {
          this.refreshPermission();
        }
      });
    }
    this.subscribeToPermissionsApi();
  }
  subscribeToPermissionsApi() {
    try {
      const anyNav = typeof navigator !== "undefined" ? navigator : null;
      if (!anyNav || !anyNav.permissions || !anyNav.permissions.query)
        return;
      anyNav.permissions.query({ name: "notifications" }).then((status) => {
        this.ngZone.run(() => this.permission$.next(status.state));
        status.onchange = () => {
          this.ngZone.run(() => this.permission$.next(status.state));
        };
      }).catch(() => {
      });
    } catch {
    }
  }
  // ==================================================================
  // 権限状態
  // ==================================================================
  getPermission() {
    return this.readPermission();
  }
  getPermission$() {
    return this.permission$.asObservable();
  }
  readPermission() {
    if (typeof window === "undefined" || !("Notification" in window))
      return "unsupported";
    return Notification.permission;
  }
  refreshPermission() {
    const cur = this.readPermission();
    if (cur !== this.permission$.value) {
      this.ngZone.run(() => this.permission$.next(cur));
    }
  }
  // ==================================================================
  // アプリ内 ON/OFF (権限とは別軸)
  // ==================================================================
  isAppEnabled() {
    return this.appEnabled$.value;
  }
  getAppEnabled$() {
    return this.appEnabled$.asObservable();
  }
  setAppEnabled(enabled) {
    this.writeAppEnabled(enabled);
    this.appEnabled$.next(enabled);
  }
  readAppEnabled() {
    if (typeof window === "undefined" || !window.localStorage)
      return true;
    const v = window.localStorage.getItem(STORAGE_KEYS.APP_ENABLED);
    if (v === null)
      return true;
    return v === "1";
  }
  writeAppEnabled(enabled) {
    if (typeof window === "undefined" || !window.localStorage)
      return;
    try {
      window.localStorage.setItem(STORAGE_KEYS.APP_ENABLED, enabled ? "1" : "0");
    } catch {
    }
  }
  // ==================================================================
  // 権限要求: Slack 風にエンゲージメント後にリクエスト
  // ==================================================================
  /**
   * バナーを今表示すべきかの判定
   * - 権限が default
   * - suppressed (もう出さない) ではない
   * - 前回の dismiss から snooze 期間経過
   */
  shouldShowBanner() {
    const p = this.getPermission();
    if (p !== "default")
      return false;
    if (typeof window === "undefined" || !window.localStorage)
      return true;
    try {
      if (window.localStorage.getItem(STORAGE_KEYS.SUPPRESSED) === "1")
        return false;
      const last = Number(window.localStorage.getItem(STORAGE_KEYS.LAST_PROMPT_TIME) || "0");
      const dismissCount = Number(window.localStorage.getItem(STORAGE_KEYS.DISMISS_COUNT) || "0");
      if (!last)
        return true;
      const snoozeMs = DISMISS_SNOOZE_STEPS_MS[Math.min(dismissCount, DISMISS_SNOOZE_STEPS_MS.length - 1)];
      return Date.now() - last > snoozeMs;
    } catch {
      return true;
    }
  }
  /** バナー表示を記録 (次回 snooze 計算用) */
  markBannerShown() {
    if (typeof window === "undefined" || !window.localStorage)
      return;
    try {
      window.localStorage.setItem(STORAGE_KEYS.LAST_PROMPT_TIME, String(Date.now()));
    } catch {
    }
  }
  /** あとで: snooze を進める */
  dismissBanner() {
    if (typeof window === "undefined" || !window.localStorage)
      return;
    try {
      const cur = Number(window.localStorage.getItem(STORAGE_KEYS.DISMISS_COUNT) || "0");
      window.localStorage.setItem(STORAGE_KEYS.DISMISS_COUNT, String(cur + 1));
      window.localStorage.setItem(STORAGE_KEYS.LAST_PROMPT_TIME, String(Date.now()));
    } catch {
    }
  }
  /** もう出さない: 恒久停止 */
  suppressBannerForever() {
    if (typeof window === "undefined" || !window.localStorage)
      return;
    try {
      window.localStorage.setItem(STORAGE_KEYS.SUPPRESSED, "1");
    } catch {
    }
  }
  /**
   * 権限を要求。reason は分析・デバッグ用。
   * 注意: Chrome/Edge ではページ読込直後の要求を禁じている実装があるため、
   * 必ずユーザーアクション (クリック等) 内で呼ぶこと。
   *
   * 既に denied の場合でもブラウザによっては再プロンプトできる可能性があるため、
   * 呼び出しは試行する。成功しない場合は呼び出し側で手動解除フローへ誘導する。
   */
  requestPermission(_reason) {
    return __async(this, null, function* () {
      if (typeof window === "undefined" || !("Notification" in window))
        return "unsupported";
      try {
        const p = yield Notification.requestPermission();
        this.markBannerShown();
        this.permission$.next(p);
        return p;
      } catch {
        return "denied";
      }
    });
  }
  /**
   * ブラウザ設定で手動解除できたかを確認するための再チェック (ユーザー指示 2026-04-21)
   * denied モーダルから呼ばれる。許可された場合は permission$ を更新してテスト通知を送る。
   */
  recheckPermission() {
    return __async(this, null, function* () {
      const cur = this.readPermission();
      if (cur !== this.permission$.value) {
        this.permission$.next(cur);
      }
      return cur;
    });
  }
  /**
   * テスト通知を送出 (ユーザー指示 2026-04-21): 「正しいボタン」で
   * 通知が本当に届くかをその場で確認できる。
   */
  sendTestNotification() {
    if (this.getPermission() !== "granted")
      return false;
    try {
      const n = new Notification("\u30B9\u30B1\u30B3\u30F3: \u901A\u77E5\u30C6\u30B9\u30C8", {
        body: "\u901A\u77E5\u306F\u6B63\u3057\u304F\u5C4A\u304D\u307E\u3059\u3002\u30C1\u30E3\u30C3\u30C8\u306E\u65B0\u7740\u30E1\u30C3\u30BB\u30FC\u30B8\u306A\u3069\u3067\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002",
        icon: "/schecon-demo/assets/imgs/common/schecon-favicon.png",
        tag: "schecon-test"
      });
      n.onclick = () => {
        try {
          window.focus();
        } finally {
          n.close();
        }
      };
      this.playNotificationChime();
      return true;
    } catch {
      return false;
    }
  }
  // ==================================================================
  // 通知送出 (核心)
  // ==================================================================
  /**
   * 受信メッセージをキューに入れる。
   * - 画面が visible かつ activeRoom が一致 → 通知しない (Slack 風)
   * - 権限 ≠ granted → 通知しない
   * - ルームごとのクールダウン内 → 集約のみ
   * - レート制限を超える → 集約のみ
   * - 上記全てクリアで 3 秒後にサマリ送出
   */
  enqueue(payload) {
    if (this.getPermission() !== "granted")
      return;
    if (!this.isAppEnabled())
      return;
    if (!this.shouldDeliver(payload))
      return;
    const list = this.pendingByRoom.get(payload.roomId) || [];
    list.push(payload);
    this.pendingByRoom.set(payload.roomId, list);
    this.scheduleFlush();
  }
  /** 現在ユーザーが開いているルームを通知サービスへ伝える (重複通知回避) */
  setActiveRoom(roomId) {
    this.activeRoomId = roomId;
  }
  /**
   * 画面が visible かつ対象ルームを開いているときは通知しない (Slack 風)
   */
  shouldDeliver(p) {
    if (typeof document !== "undefined" && document.visibilityState === "visible") {
      if (this.activeRoomId && this.activeRoomId === p.roomId)
        return false;
    }
    return true;
  }
  scheduleFlush() {
    if (this.flushTimer)
      return;
    this.flushTimer = setTimeout(() => {
      this.flushTimer = null;
      this.flush();
    }, AGGREGATION_WINDOW_MS);
  }
  flush() {
    const now = Date.now();
    this.recentNotifyTimes = this.recentNotifyTimes.filter((t) => now - t < 6e4);
    if (this.recentNotifyTimes.length >= MAX_NOTIFY_PER_MINUTE) {
      this.fireSummary();
      this.pendingByRoom.clear();
      return;
    }
    const rooms = Array.from(this.pendingByRoom.entries());
    if (!rooms.length)
      return;
    const totalMsgs = rooms.reduce((s, [, arr]) => s + arr.length, 0);
    if (rooms.length === 1) {
      const [roomId, msgs] = rooms[0];
      if (this.shouldRespectRoomCooldown(roomId, now)) {
        this.fireSummary();
      } else {
        this.fireForRoom(roomId, msgs);
      }
    } else {
      this.fireSummary();
    }
    this.pendingByRoom.clear();
  }
  shouldRespectRoomCooldown(roomId, now) {
    if (typeof window === "undefined" || !window.localStorage)
      return false;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEYS.ROOM_LAST_NOTIFY);
      const map = raw ? JSON.parse(raw) : {};
      const last = map[roomId] || 0;
      return now - last < ROOM_COOLDOWN_MS;
    } catch {
      return false;
    }
  }
  recordRoomNotify(roomId, now) {
    if (typeof window === "undefined" || !window.localStorage)
      return;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEYS.ROOM_LAST_NOTIFY);
      const map = raw ? JSON.parse(raw) : {};
      map[roomId] = now;
      window.localStorage.setItem(STORAGE_KEYS.ROOM_LAST_NOTIFY, JSON.stringify(map));
    } catch {
    }
  }
  fireForRoom(roomId, msgs) {
    const count = msgs.length;
    const last = msgs[msgs.length - 1];
    const title = count > 1 ? `${last.senderName}\u3055\u3093\u304B\u3089${count}\u4EF6\u306E\u65B0\u7740\u30E1\u30C3\u30BB\u30FC\u30B8` : `${last.senderName}\u3055\u3093\u304B\u3089\u65B0\u7740\u30E1\u30C3\u30BB\u30FC\u30B8`;
    const body = count > 1 ? `\u6700\u65B0: ${last.preview}` : last.preview;
    this.fireNative(title, body, { roomId }, last.senderAvatar);
    this.recordRoomNotify(roomId, Date.now());
  }
  fireSummary() {
    const totalRooms = this.pendingByRoom.size;
    const totalMsgs = Array.from(this.pendingByRoom.values()).reduce((s, a) => s + a.length, 0);
    const title = totalMsgs === 1 ? "\u65B0\u7740\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u3042\u308A\u307E\u3059" : `${totalRooms}\u4EF6\u306E\u30C1\u30E3\u30C3\u30C8\u3067${totalMsgs}\u4EF6\u306E\u65B0\u7740`;
    const body = "\u672A\u8AAD\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044";
    this.fireNative(title, body, { roomId: null });
  }
  fireNative(title, body, data, icon) {
    if (this.getPermission() !== "granted")
      return;
    try {
      const opts = {
        body,
        icon: icon || "/schecon-demo/assets/imgs/common/schecon-favicon.png",
        badge: "/schecon-demo/assets/imgs/common/schecon-favicon.png",
        tag: "schecon-chat",
        // 同じ tag で上書き (累積させない)
        renotify: false,
        // 上書き時は再度音/バイブしない
        silent: false
      };
      const n = new Notification(title, opts);
      n.onclick = () => {
        try {
          window.focus();
          const base = (document.querySelector("base")?.getAttribute("href") || "/").replace(/\/$/, "");
          const target = data.roomId ? `${base}/chat/${data.roomId}` : `${base}/chat`;
          window.location.href = target;
        } finally {
          n.close();
        }
      };
      this.recentNotifyTimes.push(Date.now());
      this.playNotificationChime();
    } catch {
    }
  }
  /**
   * Slack 風通知音 (2 音チャイム: 高→低の短いグリッサンド)。
   * WebAudio で動的に合成するため音声ファイル不要。
   * 耳障りにならないよう 300ms 以内・マスターボリューム 0.15。
   */
  playNotificationChime() {
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx)
        return;
      const ctx = this._audioCtx || new Ctx();
      this._audioCtx = ctx;
      if (ctx.state === "suspended") {
        ctx.resume().catch(() => {
        });
      }
      const now = ctx.currentTime;
      const master = ctx.createGain();
      master.gain.value = 0.15;
      master.connect(ctx.destination);
      const freqs = [1109, 831];
      freqs.forEach((freq, idx) => {
        const start = now + idx * 0.08;
        const dur = 0.18;
        const osc = ctx.createOscillator();
        osc.type = "sine";
        osc.frequency.value = freq;
        const g = ctx.createGain();
        g.gain.setValueAtTime(0, start);
        g.gain.linearRampToValueAtTime(1, start + 0.01);
        g.gain.exponentialRampToValueAtTime(1e-3, start + dur);
        osc.connect(g).connect(master);
        osc.start(start);
        osc.stop(start + dur + 0.02);
      });
    } catch {
    }
  }
  // ==================================================================
  // denied 時の再設定ガイダンス (URL 提供)
  // ==================================================================
  /**
   * Chrome / Edge のサイト設定ページへのディープリンクは
   * chrome://settings / edge://settings で直接開けない制約があるため、
   * UI から手順を案内するためのメタ情報を返す。
   */
  getDeniedReenableGuide() {
    const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
    const isEdge = /Edg\//.test(ua);
    const isChrome = /Chrome\//.test(ua) && !isEdge;
    if (isChrome) {
      return {
        browser: "chrome",
        steps: [
          "\u30A2\u30C9\u30EC\u30B9\u30D0\u30FC\u5DE6\u306E\u{1F512}\u30A2\u30A4\u30B3\u30F3\u3092\u30AF\u30EA\u30C3\u30AF",
          "\u300C\u30B5\u30A4\u30C8\u306E\u8A2D\u5B9A\u300D\u3092\u9078\u629E",
          "\u300C\u901A\u77E5\u300D\u3092\u300C\u8A31\u53EF\u300D\u306B\u5909\u66F4",
          "\u3053\u306E\u30DA\u30FC\u30B8\u3092\u518D\u8AAD\u307F\u8FBC\u307F (F5)"
        ]
      };
    }
    if (isEdge) {
      return {
        browser: "edge",
        steps: [
          "\u30A2\u30C9\u30EC\u30B9\u30D0\u30FC\u5DE6\u306E\u{1F512}\u30A2\u30A4\u30B3\u30F3\u3092\u30AF\u30EA\u30C3\u30AF",
          "\u300C\u3053\u306E\u30B5\u30A4\u30C8\u306E\u30A2\u30AF\u30BB\u30B9\u8A31\u53EF\u300D\u3092\u958B\u304F",
          "\u300C\u901A\u77E5\u300D\u3092\u300C\u8A31\u53EF\u300D\u306B\u5909\u66F4",
          "\u3053\u306E\u30DA\u30FC\u30B8\u3092\u518D\u8AAD\u307F\u8FBC\u307F (F5)"
        ]
      };
    }
    return {
      browser: "other",
      steps: [
        "\u30D6\u30E9\u30A6\u30B6\u306E\u30A2\u30C9\u30EC\u30B9\u30D0\u30FC\u5DE6\u5074\u306E\u30A2\u30A4\u30B3\u30F3\u304B\u3089\u30B5\u30A4\u30C8\u6A29\u9650\u3092\u958B\u304F",
        "\u300C\u901A\u77E5\u300D\u3092\u8A31\u53EF\u306B\u5909\u66F4",
        "\u30DA\u30FC\u30B8\u3092\u518D\u8AAD\u307F\u8FBC\u307F"
      ]
    };
  }
  static {
    this.\u0275fac = function BrowserNotificationService_Factory(t) {
      return new (t || _BrowserNotificationService)(\u0275\u0275inject(NgZone));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BrowserNotificationService, factory: _BrowserNotificationService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/services/realtime-gateway.service.ts
var CHANNEL_NAME = "schecon-chat-v1";
var CLIENT_ID_STORAGE = "schecon.realtime.clientId.v1";
var WS_URL_STORAGE = "schecon.realtime.wsUrl";
var LAST_SEEN_STORAGE = "schecon.realtime.lastSeenAt";
var WS_RECONNECT_MAX_MS = 3e4;
var WS_RECONNECT_INITIAL_MS = 1e3;
var RealtimeGatewayService = class _RealtimeGatewayService {
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.channel = null;
    this.fallbackStorageHandler = null;
    this.ws = null;
    this.wsBackoffMs = WS_RECONNECT_INITIAL_MS;
    this.wsReconnectTimer = null;
    this.wsHeartbeatTimer = null;
    this.lastSeenAt = 0;
    this.events$ = new Subject();
    this.status$ = new BehaviorSubject("idle");
    this.sentClientIds = /* @__PURE__ */ new Set();
    this.clientIdsSweepTimer = null;
    this.onChannelMessage = (e) => {
      this.handleEvent(e.data);
    };
    this.tabId = this.createTabId();
    this.lastSeenAt = this.loadLastSeen();
    this.connect();
  }
  ngOnDestroy() {
    this.disconnect();
  }
  loadLastSeen() {
    try {
      return Number(localStorage.getItem(LAST_SEEN_STORAGE) || "0") || 0;
    } catch {
      return 0;
    }
  }
  saveLastSeen(ts) {
    try {
      localStorage.setItem(LAST_SEEN_STORAGE, String(ts));
    } catch {
    }
  }
  // ======================================================================
  // 接続管理
  // ======================================================================
  connect() {
    if (this.status$.value === "open" || this.status$.value === "connecting")
      return;
    this.setStatus("connecting");
    if (typeof BroadcastChannel !== "undefined") {
      try {
        this.channel = new BroadcastChannel(CHANNEL_NAME);
        this.channel.addEventListener("message", this.onChannelMessage);
        this.setStatus("open");
        this.events$.next({ type: "connection.open" });
      } catch (e) {
        this.fallbackToStorage();
      }
    } else {
      this.fallbackToStorage();
    }
    this.tryConnectWebSocket();
    this.clientIdsSweepTimer = setInterval(() => {
      if (this.sentClientIds.size > 300) {
        const arr = Array.from(this.sentClientIds).slice(-200);
        this.sentClientIds = new Set(arr);
      }
    }, 5 * 60 * 1e3);
  }
  // ======================================================================
  // Phase 2: WebSocket 接続管理
  // ======================================================================
  tryConnectWebSocket() {
    if (typeof WebSocket === "undefined" || typeof localStorage === "undefined")
      return;
    let url = null;
    try {
      url = localStorage.getItem(WS_URL_STORAGE);
    } catch {
    }
    if (!url)
      return;
    if (this.ws) {
      try {
        this.ws.close(1e3, "reconnect");
      } catch {
      }
      this.ws = null;
    }
    try {
      this.ws = new WebSocket(url);
    } catch (e) {
      this.events$.next({ type: "connection.error", error: e });
      this.scheduleWsReconnect();
      return;
    }
    this.ws.onopen = () => {
      this.wsBackoffMs = WS_RECONNECT_INITIAL_MS;
      try {
        this.ws.send(JSON.stringify({ type: "sync.since", since: this.lastSeenAt }));
      } catch {
      }
      this.wsHeartbeatTimer = setInterval(() => {
        if (this.ws?.readyState === WebSocket.OPEN) {
          try {
            this.ws.send(JSON.stringify({ type: "ping" }));
          } catch {
          }
        }
      }, 25e3);
    };
    this.ws.onmessage = (e) => {
      let data;
      try {
        data = JSON.parse(e.data);
      } catch {
        return;
      }
      if (!data || !data.type)
        return;
      this.lastSeenAt = Date.now();
      this.saveLastSeen(this.lastSeenAt);
      this.handleEvent(data);
    };
    this.ws.onclose = (e) => {
      if (this.wsHeartbeatTimer) {
        clearInterval(this.wsHeartbeatTimer);
        this.wsHeartbeatTimer = null;
      }
      this.ws = null;
      this.events$.next({ type: "connection.close", reason: `ws-closed:${e.code}` });
      if (e.code !== 1e3) {
        this.scheduleWsReconnect();
      }
    };
    this.ws.onerror = (err) => {
      this.events$.next({ type: "connection.error", error: err });
    };
  }
  scheduleWsReconnect() {
    if (this.wsReconnectTimer)
      return;
    const delay = this.wsBackoffMs;
    this.wsReconnectTimer = setTimeout(() => {
      this.wsReconnectTimer = null;
      this.tryConnectWebSocket();
    }, delay);
    this.wsBackoffMs = Math.min(this.wsBackoffMs * 2, WS_RECONNECT_MAX_MS);
  }
  fallbackToStorage() {
    if (typeof window === "undefined" || !window.localStorage) {
      this.setStatus("error");
      this.events$.next({ type: "connection.error", error: "no-storage" });
      return;
    }
    this.fallbackStorageHandler = (e) => {
      if (e.key !== CHANNEL_NAME || !e.newValue)
        return;
      try {
        const data = JSON.parse(e.newValue);
        if (data.from === this.tabId)
          return;
        this.handleEvent(data.event);
      } catch {
      }
    };
    window.addEventListener("storage", this.fallbackStorageHandler);
    this.setStatus("open");
    this.events$.next({ type: "connection.open" });
  }
  disconnect() {
    if (this.channel) {
      try {
        this.channel.removeEventListener("message", this.onChannelMessage);
      } catch {
      }
      try {
        this.channel.close();
      } catch {
      }
      this.channel = null;
    }
    if (this.fallbackStorageHandler && typeof window !== "undefined") {
      window.removeEventListener("storage", this.fallbackStorageHandler);
      this.fallbackStorageHandler = null;
    }
    if (this.ws) {
      try {
        this.ws.close(1e3, "disconnect");
      } catch {
      }
      this.ws = null;
    }
    if (this.wsReconnectTimer) {
      clearTimeout(this.wsReconnectTimer);
      this.wsReconnectTimer = null;
    }
    if (this.wsHeartbeatTimer) {
      clearInterval(this.wsHeartbeatTimer);
      this.wsHeartbeatTimer = null;
    }
    if (this.clientIdsSweepTimer) {
      clearInterval(this.clientIdsSweepTimer);
      this.clientIdsSweepTimer = null;
    }
    this.setStatus("closed");
    this.events$.next({ type: "connection.close", reason: "manual" });
  }
  setStatus(s) {
    if (this.status$.value === s)
      return;
    this.ngZone.run(() => this.status$.next(s));
  }
  getStatus() {
    return this.status$.value;
  }
  getStatus$() {
    return this.status$.asObservable();
  }
  // ======================================================================
  // 送信 / 購読
  // ======================================================================
  /**
   * イベントを他タブへ発行する。
   * 自分自身の送信は sentClientIds に記録し、echo back をスキップする。
   */
  publish(event) {
    const eventWithId = this.ensureClientMsgId(event);
    const id = eventWithId.clientMsgId;
    if (id)
      this.sentClientIds.add(id);
    try {
      if (this.channel) {
        this.channel.postMessage(eventWithId);
      } else if (typeof window !== "undefined" && window.localStorage) {
        const payload = { ts: Date.now(), event: eventWithId, from: this.tabId };
        window.localStorage.setItem(CHANNEL_NAME, JSON.stringify(payload));
        setTimeout(() => {
          try {
            window.localStorage.removeItem(CHANNEL_NAME);
          } catch {
          }
        }, 0);
      }
      if (this.ws?.readyState === WebSocket.OPEN) {
        this.ws.send(JSON.stringify(eventWithId));
      }
    } catch (e) {
      this.events$.next({ type: "connection.error", error: e });
    }
  }
  /** 全イベントの購読 */
  getEvents$() {
    return this.events$.asObservable();
  }
  /** 型付きで特定のイベントだけ購読 */
  on(type) {
    return this.events$.pipe(filter((e) => e.type === type));
  }
  handleEvent(event) {
    const anyEvent = event;
    if (anyEvent.clientMsgId && this.sentClientIds.has(anyEvent.clientMsgId)) {
      return;
    }
    this.ngZone.run(() => this.events$.next(event));
  }
  ensureClientMsgId(event) {
    if (event.type.startsWith("connection."))
      return event;
    const anyEvt = event;
    if (!anyEvt.clientMsgId) {
      anyEvt.clientMsgId = this.createClientMsgId();
    }
    return event;
  }
  createClientMsgId() {
    return "cid-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10);
  }
  createTabId() {
    try {
      if (typeof window !== "undefined" && window.sessionStorage) {
        const existing = window.sessionStorage.getItem(CLIENT_ID_STORAGE);
        if (existing)
          return existing;
        const next = "tab-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10);
        window.sessionStorage.setItem(CLIENT_ID_STORAGE, next);
        return next;
      }
    } catch {
    }
    return "tab-" + Date.now().toString(36);
  }
  static {
    this.\u0275fac = function RealtimeGatewayService_Factory(t) {
      return new (t || _RealtimeGatewayService)(\u0275\u0275inject(NgZone));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RealtimeGatewayService, factory: _RealtimeGatewayService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/services/chat-state.service.ts
var ROOMS_KEY = "schecon.userRooms.v1";
var MESSAGES_KEY_PREFIX = "schecon.miniMessages.v1.";
var ChatStateService = class _ChatStateService {
  constructor(browserNotify, gateway) {
    this.browserNotify = browserNotify;
    this.gateway = gateway;
    this.userRooms$ = new BehaviorSubject(this.loadRooms());
    this.messagesByRoom$ = new BehaviorSubject(this.loadAllMessages());
    this.wireRealtimeSubscriptions();
  }
  /**
   * RealtimeGateway からのイベントを受けて、自タブの状態を更新する。
   * 自タブの publish は clientMsgId により既に除外されているため、
   * ここに到達するイベントは全て "他タブ発" と扱える。
   */
  wireRealtimeSubscriptions() {
    this.gateway.on("message.created").subscribe(({ roomId, message }) => {
      const map = __spreadValues({}, this.messagesByRoom$.value);
      const list = map[roomId] || [];
      if (list.some((m) => m.id === message.id))
        return;
      map[roomId] = [...list, {
        id: message.id,
        roomId,
        text: message.text,
        time: message.time,
        isMe: message.isMe,
        senderName: message.senderName
      }];
      this.messagesByRoom$.next(map);
      this.saveMessagesForRoom(roomId, map[roomId]);
      if (!message.isMe) {
        const existing = this.userRooms$.value.find((r) => r.id === roomId);
        const currentUnread = existing?.unreadCount || 0;
        this.updateUserRoom(roomId, {
          lastMessage: message.text.slice(0, 60),
          timestamp: message.time,
          updatedAt: Date.now(),
          unreadCount: currentUnread + 1
        });
        this.browserNotify.enqueue({
          roomId,
          senderName: message.senderName || "\u76F8\u624B",
          preview: message.text,
          timestamp: Date.now(),
          roomName: existing?.name,
          senderAvatar: existing?.avatarImage
        });
      } else {
        this.updateUserRoom(roomId, {
          lastMessage: message.text.slice(0, 60),
          timestamp: message.time,
          updatedAt: Date.now()
        });
      }
    });
    this.gateway.on("thread.created").subscribe(({ room }) => {
      if (this.userRooms$.value.some((r) => r.id === room.id))
        return;
      const next = [{
        id: room.id,
        name: room.name,
        initial: room.initial,
        avatarColor: room.avatarColor,
        avatarImage: room.avatarImage,
        type: room.type,
        lastMessage: room.lastMessage,
        timestamp: room.timestamp,
        updatedAt: room.updatedAt || Date.now(),
        unreadCount: room.unreadCount || 0
      }, ...this.userRooms$.value];
      this.userRooms$.next(next);
      this.saveRooms(next);
    });
    this.gateway.on("thread.updated").subscribe(({ roomId, patch }) => {
      const cur = this.userRooms$.value;
      if (!cur.some((r) => r.id === roomId))
        return;
      const next = cur.map((r) => r.id === roomId ? __spreadValues(__spreadValues({}, r), patch) : r);
      this.userRooms$.next(next);
      this.saveRooms(next);
    });
    this.gateway.on("unread.updated").subscribe(({ roomId, unreadCount }) => {
      const cur = this.userRooms$.value;
      if (!cur.some((r) => r.id === roomId))
        return;
      const next = cur.map((r) => r.id === roomId ? __spreadProps(__spreadValues({}, r), { unreadCount }) : r);
      this.userRooms$.next(next);
      this.saveRooms(next);
    });
  }
  getGateway() {
    return this.gateway;
  }
  /** 追加されたルーム (Observable) */
  getUserRooms() {
    return this.userRooms$.asObservable();
  }
  snapshotUserRooms() {
    return this.userRooms$.value;
  }
  addUserRoom(room) {
    const cur = this.userRooms$.value;
    if (cur.some((r) => r.id === room.id))
      return;
    const next = [room, ...cur];
    this.userRooms$.next(next);
    this.saveRooms(next);
    this.gateway.publish({
      type: "thread.created",
      room: {
        id: room.id,
        name: room.name,
        initial: room.initial,
        avatarColor: room.avatarColor,
        avatarImage: room.avatarImage,
        type: room.type,
        lastMessage: room.lastMessage,
        timestamp: room.timestamp,
        updatedAt: room.updatedAt,
        unreadCount: room.unreadCount
      }
    });
  }
  updateUserRoom(roomId, patch) {
    const next = this.userRooms$.value.map((r) => r.id === roomId ? __spreadValues(__spreadValues({}, r), patch) : r);
    this.userRooms$.next(next);
    this.saveRooms(next);
    const rtPatch = {};
    if (patch.name !== void 0)
      rtPatch.name = patch.name;
    if (patch.lastMessage !== void 0)
      rtPatch.lastMessage = patch.lastMessage;
    if (patch.timestamp !== void 0)
      rtPatch.timestamp = patch.timestamp;
    if (patch.updatedAt !== void 0)
      rtPatch.updatedAt = patch.updatedAt;
    if (patch.unreadCount !== void 0)
      rtPatch.unreadCount = patch.unreadCount;
    if (patch.avatarColor !== void 0)
      rtPatch.avatarColor = patch.avatarColor;
    if (patch.avatarImage !== void 0)
      rtPatch.avatarImage = patch.avatarImage;
    if (Object.keys(rtPatch).length > 0) {
      this.gateway.publish({ type: "thread.updated", roomId, patch: rtPatch });
    }
  }
  /** 特定のルームのメッセージ */
  getMessages(roomId) {
    return this.messagesByRoom$.value[roomId] || [];
  }
  getAllMessages$() {
    return this.messagesByRoom$.asObservable();
  }
  /* 修正 No.53 (2026-04-24): 永続化されたメッセージをシードチャットへ復元するために
     全ルームのメッセージスナップショットを返す。
     ChatPageComponent の ngOnInit で this.messages にマージして
     リロード / ルーム遷移後も投稿が消えない状態にする。 */
  getAllMessagesSnapshot() {
    return this.messagesByRoom$.value;
  }
  sendMessage(roomId, text, senderName) {
    const trimmed = text.trim();
    if (!trimmed) {
      return { id: "", roomId, text: "", time: "", isMe: true };
    }
    const now = /* @__PURE__ */ new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    const msg = {
      id: "mini-" + Date.now() + "-" + Math.random().toString(36).slice(2, 6),
      roomId,
      text: trimmed,
      time: `${hh}:${mm}`,
      isMe: true,
      senderName: senderName || "\u77F3\u6FA4\uFF08\u81EA\u5206\uFF09"
    };
    const map = __spreadValues({}, this.messagesByRoom$.value);
    map[roomId] = [...map[roomId] || [], msg];
    this.messagesByRoom$.next(map);
    this.saveMessagesForRoom(roomId, map[roomId]);
    this.updateUserRoom(roomId, {
      lastMessage: trimmed.slice(0, 60),
      timestamp: `${hh}:${mm}`,
      updatedAt: Date.now()
    });
    this.gateway.publish({
      type: "message.created",
      roomId,
      message: {
        id: msg.id,
        roomId,
        text: msg.text,
        time: msg.time,
        isMe: true,
        senderName: msg.senderName
      }
    });
    return msg;
  }
  /** 相手 (AI もしくはシミュレート) からの受信メッセージ */
  receiveMessage(roomId, text, senderName = "\u76F8\u624B") {
    const trimmed = text.trim();
    if (!trimmed) {
      return { id: "", roomId, text: "", time: "", isMe: false };
    }
    const now = /* @__PURE__ */ new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    const msg = {
      id: "mini-recv-" + Date.now() + "-" + Math.random().toString(36).slice(2, 6),
      roomId,
      text: trimmed,
      time: `${hh}:${mm}`,
      isMe: false,
      senderName
    };
    const map = __spreadValues({}, this.messagesByRoom$.value);
    map[roomId] = [...map[roomId] || [], msg];
    this.messagesByRoom$.next(map);
    this.saveMessagesForRoom(roomId, map[roomId]);
    const existing = this.userRooms$.value.find((r) => r.id === roomId);
    const currentUnread = existing?.unreadCount || 0;
    this.updateUserRoom(roomId, {
      lastMessage: trimmed.slice(0, 60),
      timestamp: `${hh}:${mm}`,
      updatedAt: Date.now(),
      unreadCount: currentUnread + 1
    });
    this.browserNotify.enqueue({
      roomId,
      senderName,
      preview: trimmed,
      timestamp: Date.now(),
      roomName: existing?.name,
      senderAvatar: existing?.avatarImage
    });
    this.gateway.publish({
      type: "message.created",
      roomId,
      message: {
        id: msg.id,
        roomId,
        text: msg.text,
        time: msg.time,
        isMe: false,
        senderName
      }
    });
    return msg;
  }
  /** 互換: 旧コードで injectAutoReply 呼び出しがあるため receiveMessage の別名として残す */
  injectAutoReply(roomId, text, senderName = "\u30B9\u30B1\u30B3\u30F3AI") {
    this.receiveMessage(roomId, text, senderName);
  }
  /**
   * 既存 ID を保ったままメッセージを登録 (全画面チャットで送信した際、
   * chat-page.messages と ChatStateService を完全に同じ ID で揃える用)。
   * 他タブへも message.created でブロードキャストする。
   */
  registerExternalMessage(msg) {
    const map = __spreadValues({}, this.messagesByRoom$.value);
    const list = map[msg.roomId] || [];
    if (list.some((m) => m.id === msg.id))
      return;
    map[msg.roomId] = [...list, msg];
    this.messagesByRoom$.next(map);
    this.saveMessagesForRoom(msg.roomId, map[msg.roomId]);
    this.gateway.publish({
      type: "message.created",
      roomId: msg.roomId,
      message: {
        id: msg.id,
        roomId: msg.roomId,
        text: msg.text,
        time: msg.time,
        isMe: msg.isMe,
        senderName: msg.senderName
      }
    });
  }
  /** ルームを既読にする (unreadCount = 0)。他タブへも unread.updated を飛ばす */
  markRoomAsRead(roomId) {
    const existing = this.userRooms$.value.find((r) => r.id === roomId);
    if (!existing || !existing.unreadCount)
      return;
    this.updateUserRoom(roomId, { unreadCount: 0 });
    this.gateway.publish({ type: "unread.updated", roomId, unreadCount: 0 });
    this.gateway.publish({ type: "message.read", roomId, at: Date.now() });
  }
  /** 全ルームの未読合計 */
  totalUnread() {
    return this.userRooms$.value.reduce((s, r) => s + (r.unreadCount || 0), 0);
  }
  // 通知ロジックは BrowserNotificationService に分離済み
  // (権限取得 / クールダウン / サマリ化 / アクティブルーム判定 / レート制限 / denied 再設定ガイド)
  // ====== localStorage helpers ======
  loadRooms() {
    if (typeof window === "undefined" || !window.localStorage)
      return [];
    try {
      const raw = window.localStorage.getItem(ROOMS_KEY);
      if (!raw)
        return [];
      const arr = JSON.parse(raw);
      return Array.isArray(arr) ? arr : [];
    } catch {
      return [];
    }
  }
  saveRooms(rooms) {
    if (typeof window === "undefined" || !window.localStorage)
      return;
    try {
      window.localStorage.setItem(ROOMS_KEY, JSON.stringify(rooms));
    } catch {
    }
  }
  loadAllMessages() {
    if (typeof window === "undefined" || !window.localStorage)
      return {};
    const result = {};
    try {
      for (let i = 0; i < window.localStorage.length; i++) {
        const key = window.localStorage.key(i);
        if (!key || !key.startsWith(MESSAGES_KEY_PREFIX))
          continue;
        const roomId = key.substring(MESSAGES_KEY_PREFIX.length);
        const raw = window.localStorage.getItem(key);
        if (!raw)
          continue;
        try {
          const msgs = JSON.parse(raw);
          if (Array.isArray(msgs))
            result[roomId] = msgs;
        } catch {
        }
      }
    } catch {
    }
    return result;
  }
  saveMessagesForRoom(roomId, msgs) {
    if (typeof window === "undefined" || !window.localStorage)
      return;
    try {
      window.localStorage.setItem(MESSAGES_KEY_PREFIX + roomId, JSON.stringify(msgs));
    } catch {
    }
  }
  static {
    this.\u0275fac = function ChatStateService_Factory(t) {
      return new (t || _ChatStateService)(\u0275\u0275inject(BrowserNotificationService), \u0275\u0275inject(RealtimeGatewayService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChatStateService, factory: _ChatStateService.\u0275fac, providedIn: "root" });
  }
};

export {
  BrowserNotificationService,
  RealtimeGatewayService,
  ChatStateService
};
//# sourceMappingURL=chunk-JXBPGVLI.js.map
