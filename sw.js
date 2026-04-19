/**
 * ScheCon Service Worker (minimal runtime cache + push-ready)
 *
 * 責務:
 *  1. アプリシェルのランタイムキャッシュ (offline でも UI が起動する)
 *  2. Push 通知受信準備 (将来の Push API 対応ポイント)
 *  3. Notification click → 対象ページへの client.openWindow()
 *
 * 設計方針:
 *  - HTML: network-first (最新版優先、失敗時はキャッシュ)
 *  - JS/CSS: stale-while-revalidate (高速 + 裏で更新)
 *  - API/chat 関連: キャッシュしない (リアルタイム性優先)
 */

const CACHE_VERSION = 'schecon-v3';
const APP_SHELL = [
  '/schecon-demo/',
  '/schecon-demo/index.html',
  '/schecon-demo/manifest.webmanifest',
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) =>
      // 先行キャッシュは失敗しても起動は続行 (best-effort)
      cache.addAll(APP_SHELL).catch(() => {})
    )
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    // 旧バージョンのキャッシュを削除
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // 同一オリジン以外・GET 以外はキャッシュ対象外
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;

  // チャット / API 系はキャッシュしない (常に network)
  if (url.pathname.includes('/api/') || url.pathname.includes('/chat/')) return;

  // HTML: network-first
  if (req.mode === 'navigate' || req.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const clone = res.clone();
          caches.open(CACHE_VERSION).then((c) => c.put(req, clone));
          return res;
        })
        .catch(() => caches.match(req).then((m) => m || caches.match('/schecon-demo/index.html')))
    );
    return;
  }

  // JS/CSS/画像: stale-while-revalidate
  event.respondWith(
    caches.match(req).then((cached) => {
      const networkFetch = fetch(req).then((res) => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE_VERSION).then((c) => c.put(req, clone));
        }
        return res;
      }).catch(() => cached);
      return cached || networkFetch;
    })
  );
});

// ========================================================================
// Push 通知 (将来のサーバ Push 対応準備)
//   現時点では Push サーバがないため、この listener が発火することはない。
//   Phase 3 で VAPID キー発行 + /api/push/subscribe 実装が揃えば動作する。
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

// 通知クリックで対象チャットへディープリンク
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const roomId = event.notification.data?.roomId;
  const url = roomId
    ? `/schecon-demo/chat/${roomId}`
    : '/schecon-demo/chat';
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clients) => {
      // 既に開いているタブがあればフォーカス
      for (const client of clients) {
        if (client.url.includes('/schecon-demo/') && 'focus' in client) {
          client.navigate(url);
          return client.focus();
        }
      }
      // 無ければ新規ウィンドウ
      if (self.clients.openWindow) return self.clients.openWindow(url);
    })
  );
});
