var CACHE_NAME = 'fno-expiry-v1';
var SHELL = [
  '/OptionExpiry/index.html',
  '/OptionExpiry/manifest.json',
  '/OptionExpiry/icon-192.png',
  '/OptionExpiry/icon-512.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(SHELL);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (names) {
      return Promise.all(
        names.filter(function (n) { return n !== CACHE_NAME; })
          .map(function (n) { return caches.delete(n); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function (e) {
  var url = e.request.url;
  if (url.indexOf('query1.finance.yahoo.com') !== -1 ||
      url.indexOf('api.telegram.org') !== -1) {
    e.respondWith(
      fetch(e.request).catch(function () {
        return caches.match(e.request);
      })
    );
    return;
  }
  e.respondWith(
    caches.match(e.request).then(function (cached) {
      var fetched = fetch(e.request).then(function (resp) {
        var clone = resp.clone();
        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(e.request, clone);
        });
        return resp;
      }).catch(function () {
        return cached;
      });
      return cached || fetched;
    })
  );
});
