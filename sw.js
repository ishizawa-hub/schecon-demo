/**
 * ScheCon Service Worker (network-first, always fresh)
 *
 * 修正 No.51 (2026-04-24): 通常ブラウザーで「キャッシュが残って最新版が見られない」問題の解消。
 *  - 旧仕様: JS/CSS を stale-while-revalidate (= キャッシュ優先) → 新デプロイが反映まで 1-2 リロード必要
 *  - 新仕様: すべて network-first にして常に最新を取得、オフライン時のみキャッシュにフォールバック
 *
 * 責務:
 *  1. 常に最新版を配信 (キャッシュは「オフライン時の保険」のみ)
 *  2. SW 更新時は旧キャッシュを全破棄 + skipWaiting + clients.claim で即時反映
 *  3. Push 通知受信準備 / 通知クリックで対象ページへ誘導
 */

// BUILD_VERSION は各デプロイで更新して旧キャッシュを強制破棄する
const BUILD_VERSION = '20260429-194717';
const CACHE_VERSION = `schecon-${BUILD_VERSION}`;
const APP_SHELL = [
  '/schecon-demo/',
  '/schecon-demo/index.html',
  '/schecon-demo/manifest.webmanifest',
];

self.addEventListener('install', (event) => {
  // 新しい SW は待機せず即座にアクティブ化 (キャッシュ更新を高速化)
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) =>
      cache.addAll(APP_SHELL).catch(() => {})
    )
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      // 旧バージョンのキャッシュを全削除 → 次回 fetch は必ず network から取り直す
      caches.keys().then((keys) =>
        Promise.all(
          keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))
        )
      ),
      // 既存のタブもこの SW に乗り換え (reload 不要で最新版配信)
      self.clients.claim(),
    ])
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // 同一オリジン以外 / GET 以外はパススルー
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;

  // API/チャット系はキャッシュしない (リアルタイム性優先)
  if (url.pathname.includes('/api/') || url.pathname.includes('/chat/')) return;

  /* fix (2026-04-29): TOP ページで「一瞬前のキャッシュが表示されてから新版に切替」問題対策.
     原因: GitHub Pages が Cache-Control: max-age=600 を返すため Browser HTTP Cache が古い HTML を保持
          + SW が parallel に network/cache 両方走らせて稀に旧キャッシュ → 新の表示が起こる.
     対策:
       1. HTML/index.html (navigation request) は **常に network-only** で SW キャッシュを使わない.
       2. fetch 時に明示的に cache: 'no-store' を付与し Browser HTTP Cache も無効化.
       3. オフライン時のみキャッシュ index.html を fallback.
     これで HTML は常に最新版が読み込まれ、旧キャッシュからの flash がなくなる. */
  const isHtml = req.mode === 'navigate'
    || req.destination === 'document'
    || (req.headers.get('accept') || '').includes('text/html');

  if (isHtml) {
    event.respondWith(
      // cache: 'no-store' で Browser HTTP Cache を bypass、常にサーバから最新取得
      fetch(req, { cache: 'no-store' })
        .then((res) => {
          // 成功時はキャッシュ更新もしない (常に最新を要求するので不要)
          return res;
        })
        .catch(() =>
          // ネットワーク失敗 (オフライン) のみキャッシュ index.html フォールバック
          caches.match('/schecon-demo/index.html').then((m) => m || Response.error())
        )
    );
    return;
  }

  // ハッシュ付きアセット (JS/CSS chunk) は network-first だが Browser HTTP Cache OK
  // ハッシュが変わると別 URL になるため stale 配信のリスクなし
  event.respondWith(
    fetch(req)
      .then((res) => {
        // 正常レスポンスはキャッシュ更新 (オフライン時の保険)
        if (res && res.ok && res.type === 'basic') {
          const clone = res.clone();
          caches.open(CACHE_VERSION).then((c) => c.put(req, clone)).catch(() => {});
        }
        return res;
      })
      .catch(() =>
        caches.match(req).then(
          (m) => m || (req.mode === 'navigate' ? caches.match('/schecon-demo/index.html') : Response.error())
        )
      )
  );
});

// クライアントからの skipWaiting メッセージに応答 (更新検知時の即時適用用)
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// ========================================================================
// Push 通知 (将来のサーバ Push 対応準備)
// ========================================================================
self.addEventListener('push', (event) => {
  let data = { title: '新着メッセージ', body: '', roomId: null };
  try {
    if (event.data) data = event.data.json();
  } catch {}
  const title = data.title || 'スケコン';
  const options = {
    body: data.body || '未読メッセージを確認してください',
    icon: 'https://schecon.com/assets/icons/icon-192x192.png',
    badge: 'https://schecon.com/assets/icons/icon-192x192.png',
    tag: 'schecon-chat',
    renotify: false,
    data: { roomId: data.roomId },
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const roomId = event.notification.data?.roomId;
  const url = roomId
    ? `/schecon-demo/chat/${roomId}`
    : '/schecon-demo/chat';
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clients) => {
      for (const client of clients) {
        if (client.url.includes('/schecon-demo/') && 'focus' in client) {
          client.navigate(url);
          return client.focus();
        }
      }
      if (self.clients.openWindow) return self.clients.openWindow(url);
    })
  );
});
