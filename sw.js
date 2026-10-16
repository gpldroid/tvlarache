const CACHE_NAME = 'larache-tv-shell-v1';
const APP_SHELL = ['./', './index.html', './css/style.css', './js/main.js', './manifest.webmanifest', './assets/tvlarache.svg'];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener('fetch', event => {
  const request = event.request, url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin || /\\.m3u8?(?:$|\\?)/i.test(url.pathname + url.search)) return;
  event.respondWith(fetch(request).then(response => {
    if (response.ok && (request.mode === 'navigate' || APP_SHELL.some(path => new URL(path, self.location.href).pathname === url.pathname))) {
      const copy = response.clone(); caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
    }
    return response;
  }).catch(() => caches.match(request).then(cached => cached || caches.match('./index.html'))));
});