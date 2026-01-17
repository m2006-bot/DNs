const CACHE_NAME = 'wateen-v1-cache';
const urlsToCache = [
  'index.html',
  'https://iili.io/fkhg119.jpg',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Tajawal:wght@700;900&display=swap'
];

// تثبيت ملف الـ Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// استدعاء البيانات من الكاش عند انقطاع الشبكة
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
