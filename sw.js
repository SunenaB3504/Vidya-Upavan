// Vidya Upavan — Service Worker
// Caches all core app files for offline use.
// YouTube videos still require internet (by design).

const CACHE_NAME = 'vidyaupavan-v1';
const ASSETS_TO_CACHE = [
  '/nia-language-adventure-index.html',
  '/quiz-system.js',
  '/quiz-data.js',
  '/s1-guide.html',
  '/m1-guide.html',
  '/s2-guide.html',
  '/m2-guide.html',
  '/s3-guide.html',
  '/m3-guide.html',
  '/s4-guide.html',
  '/m4-guide.html',
  '/manifest.json'
];

// Install: cache all core assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate: clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: serve from cache, fall back to network
self.addEventListener('fetch', event => {
  // Don't cache YouTube or external requests
  if (event.request.url.includes('youtube.com') ||
      event.request.url.includes('googleapis.com') ||
      event.request.url.includes('googlesyndication.com')) {
    return;
  }
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      });
    }).catch(() => caches.match('/nia-language-adventure-index.html'))
  );
});
