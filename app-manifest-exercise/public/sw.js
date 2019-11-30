self.addEventListener('install', function(event) {
  console.log('[Servier Worker] Installing Service Worker...', event);
});

self.addEventListener('active', function(event) {
  console.log('[Servier Worker] Activating Service Worker...' + event);
  return self.ClientRectList.claim();
});

self.addEventListener('fetch', function(event) {
  console.log('[Service worker] Fetching someting...', event);
  event.respondWith(fetch(event.request));
});
