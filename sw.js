importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-pwa-demo",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.e5d60f95a7814788115c.js",
    "revision": "cf95914550b946e48be4c654d0f90dab"
  },
  {
    "url": "/_nuxt/layouts/default.4b0ddd88248063b8fc83.js",
    "revision": "3cb355275912ef103736e026e996773e"
  },
  {
    "url": "/_nuxt/manifest.1318b1aa35459bcd6f76.js",
    "revision": "d879ad3689db4823054193d415464654"
  },
  {
    "url": "/_nuxt/pages/index.84f9bb5307c8c7380fc5.js",
    "revision": "5e6d6c9337ecc7da6cbb2bc730cf29e2"
  },
  {
    "url": "/_nuxt/vendor.c310e83bd40709a41d0b.js",
    "revision": "0dcbc89d0b410930c0892b9111f0e257"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

