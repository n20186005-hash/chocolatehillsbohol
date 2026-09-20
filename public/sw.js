/*
 * Chocolate Hills Complex — service worker (PWA)
 * Strategy:
 *  - Precache the app shell (offline fallback page assets).
 *  - Static assets (images, icons, manifest): cache-first.
 *  - Navigations (HTML): network-first, fall back to cached shell when offline.
 *  - Never cache the Cloudflare worker-rendered dynamic responses for other methods.
 */
const VERSION = 'v1';
const SHELL_CACHE = `ch-shell-${VERSION}`;
const ASSET_CACHE = `ch-assets-${VERSION}`;

const PRECACHE_URLS = [
  '/',
  '/en/',
  '/manifest.webmanifest',
  '/favicon.svg',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/apple-touch-icon.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(SHELL_CACHE)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== SHELL_CACHE && key !== ASSET_CACHE)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Same-origin only
  if (url.origin !== self.location.origin) return;

  // Navigations: network-first with offline shell fallback
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(SHELL_CACHE).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() =>
          caches
            .match(request)
            .then((cached) => cached || caches.match('/'))
        )
    );
    return;
  }

  // Static assets: cache-first
  if (
    url.pathname.startsWith('/assets/') ||
    url.pathname.startsWith('/gallery/') ||
    url.pathname.startsWith('/icons/') ||
    url.pathname === '/manifest.webmanifest' ||
    url.pathname === '/favicon.svg' ||
    url.pathname === '/favicon.ico' ||
    url.pathname === '/og-default.svg'
  ) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request).then((response) => {
            const copy = response.clone();
            caches.open(ASSET_CACHE).then((cache) => cache.put(request, copy));
            return response;
          })
      )
    );
  }
});
