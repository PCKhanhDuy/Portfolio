self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("pckd-portfolio").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./assets/logo.png",
        "./assets/avt-2.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
