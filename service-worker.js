const cacheName = 'nosh-inventory-v1';
const filesToCache = [
  '/',
  '/inventory-pwa/index.html',
  '/inventory-pwa/manifest.json',
  '/inventory-pwa/icon-192.png',
  '/inventory-pwa/icon-512.png',
  '/inventory-pwa/apple-touch-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
