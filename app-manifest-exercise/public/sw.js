self.addEventListener('install', function(event) {
  console.log('[Servier Worker] Installing Service Worker...', event);
});

self.addEventListener('active', function(event) {
  console.log('[Servier Worker] Activating Service Worker...' + event);
  return self.ClientRectList.claim();
});