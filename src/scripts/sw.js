self.addEventListener('install', (event) => {
    console.log('Installing service Worker');

    // TODO
});

self.addEventListener('activate', (event) => {
    console.log('Activate Service Worker');

    // TODO
});

self.addEventListener('fetch', (event) => {
    console.log(event.request);

    event.respondWith(fetch(event.request));
    // TODO
});