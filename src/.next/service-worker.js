self.__precacheManifest = [
  {
    "url": "/_next/static/ARQbDlXQ9xhZrVZTlNiRb/_buildManifest.js",
    "revision": "fb96ae7926f5104f50f0cf1b3a23a9b5"
  },
  {
    "url": "/_next/static/ARQbDlXQ9xhZrVZTlNiRb/pages/_app.js",
    "revision": "6ee0831d0de272f7dba1"
  },
  {
    "url": "/_next/static/ARQbDlXQ9xhZrVZTlNiRb/pages/_error.js",
    "revision": "1e0c2975a092939a3314"
  },
  {
    "url": "/_next/static/ARQbDlXQ9xhZrVZTlNiRb/pages/index.js",
    "revision": "66bb65ea67048facd6bd"
  },
  {
    "url": "/_next/static/chunks/532c285ad55b9c4aaa6496be90551756532fc50a.20e917ddde0882a5174a.js",
    "revision": "269f003c9d298bc9682a"
  },
  {
    "url": "/_next/static/chunks/c1e9158dd27effe995e89c357126125e33883af2.76cdf2a50b1f7c3e4bea.js",
    "revision": "b97d1a8d09af98d5d3bb"
  },
  {
    "url": "/_next/static/chunks/commons.66db0b29d39615636e4b.js",
    "revision": "44166fb567f450f1f79b"
  },
  {
    "url": "/_next/static/chunks/framework.308e38c37968bd8b614c.js",
    "revision": "515aa09bdc670ff4e4fa"
  },
  {
    "url": "/_next/static/runtime/main-c37780880fdd4ae06206.js",
    "revision": "3001384ce758523048d2"
  },
  {
    "url": "/_next/static/runtime/polyfills-ca767adcfe74e5592607.js",
    "revision": "414429836adf943b8800"
  },
  {
    "url": "/_next/static/runtime/webpack-91b117697e716c22a78b.js",
    "revision": "959f28c20c788af74930"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
