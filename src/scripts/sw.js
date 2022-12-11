import CacheHelper from './utils/cache-helper';
 
// Daftar asset yang akan dicaching
const assetsToCache = [
  './',
  './images/icons/icon-128x128.jpg',
  './images/icons/icon-144x144.jpg',
  './images/icons/icon-152x152.jpg',
  './images/icons/icon-192x292.jpg',
  './images/icons/icon-384x384.jpg',
  './images/icons/icon-512x512.jpg',
  './images/icons/icon-72x72.jpg',
  './images/icons/icon-96x96.jpg',
  './index.html',
  './favicon.jpg',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];





self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...');
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});
 
self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker ...');
  event.waitUntil(CacheHelper.deleteOldCache());
});
 
self.addEventListener('fetch', (event) => {
  console.log(event.request);
 
  event.respondWith(fetch(event.request));
  event.respondWith(CacheHelper.revalidateCache(event.request));
});