self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
    // Perform install steps
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activating.');
    // Perform activate steps
});

self.addEventListener('fetch', (event) => {
    console.log('Fetching:', event.request.url);
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
