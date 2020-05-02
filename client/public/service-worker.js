const CACHE_NAME = 'react';

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then((keyList) => Promise.all(keyList.map((key) => {
        if (!cacheWhitelist.includes(key)) {
          return caches.delete(key);
        }
      }))),
  );
});

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        fetch('asset-manifest.json')
          .then((response) => response.json())
          .then((assets) => {
            const urlsToCache = Object.keys(assets.files);
            cache.addAll(urlsToCache);
          });
      }),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request)),
  );
});
