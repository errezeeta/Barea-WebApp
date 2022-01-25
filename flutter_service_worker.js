'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "4d75dabf74c2dc129325422850f38031",
"assets/assets/icons/chat.svg": "6603c9da23d55c3ab75cf052cf2e5b53",
"assets/assets/icons/facebook.svg": "e44d4dd6594e6ae6718a89059f29cdc7",
"assets/assets/icons/google-plus.svg": "4651560e3dee407a0a545610d5987ea3",
"assets/assets/icons/login.svg": "4dff67cef2951852255d2d701724a565",
"assets/assets/icons/signup.svg": "a65b5ac5ceb4fe74bdaa5a83e190680e",
"assets/assets/icons/twitter.svg": "ce897e80d1e04fc007bce0cc770f07e7",
"assets/assets/icons/upc_logo.svg": "91380822a54e15648d8ea0d4528df812",
"assets/assets/images/azul_circle.png": "c300ff9980dd105cb396e785ab6281ab",
"assets/assets/images/bar.png": "237624e0c008a7f6f43586840a3e91e2",
"assets/assets/images/bar_relleno.png": "587065ae7307f8d8efe009892e315c25",
"assets/assets/images/black.png": "48d0e9da16a866e1eb5fd87f75389d6b",
"assets/assets/images/black_relleno.png": "fe845a662eaa9e42c4b395d83faa4b91",
"assets/assets/images/blanco_circle.png": "5a17b0bbe2507c0227ff0b6997b8e116",
"assets/assets/images/blue_circle.png": "78d5790c04aadcf47c4bd9a7bb3ad9fd",
"assets/assets/images/comunidad.png": "5336fb317219e171985af6154358e15a",
"assets/assets/images/comunidad_relleno.png": "2367ba53092ea030fe50a3fab57dc460",
"assets/assets/images/corona.png": "b6ad7cbe201c7aad0aa27fa02678865d",
"assets/assets/images/estrella.png": "caaf3a4206820b48a3ad1dbc8f27d3c5",
"assets/assets/images/estrella_relleno.png": "84bcdcb89d9307fa20ef54c69555cca6",
"assets/assets/images/insignia10_activada.png": "31b0303a6be080a3ce3ae60569dd9deb",
"assets/assets/images/insignia10_desactivada.png": "8eca713080d9f8b01a90904a4a8b54b1",
"assets/assets/images/insignia11_activada.png": "cd2456441ec9f535e344a25c44c9565a",
"assets/assets/images/insignia11_desactivada.png": "f1113bc31f380399578c5934556e3738",
"assets/assets/images/insignia12_activada.png": "20ff96ab7a768f03113ce2225de507cd",
"assets/assets/images/insignia12_desactivada.png": "2b488d382e95d9ba9a653ce02e8006e8",
"assets/assets/images/insignia1_activada.png": "6300a6c47f30d9a3d936783eb7308374",
"assets/assets/images/insignia1_desactivada.png": "0425f8d77ae5987eb90bcfed398c085d",
"assets/assets/images/insignia2_activada.png": "cf562e9b87124f960c603f18526d4d22",
"assets/assets/images/insignia2_desactivada.png": "484908446b96b5ee3ec977e4ebf50863",
"assets/assets/images/insignia3_activada.png": "064000e474eb35b1149ed0e0247ba0b3",
"assets/assets/images/insignia3_desactivada.png": "9cf3e6e19c932a32adfbefb5e69c7c33",
"assets/assets/images/insignia4_activada.png": "d5dda17d9cdab4c5a6b4db191d9155ba",
"assets/assets/images/insignia4_desactivada.png": "a7525ce0beb99959aca14033d7ecc0ce",
"assets/assets/images/insignia5_activada.png": "f6dfae0ab509c892e908ee1f2db564ed",
"assets/assets/images/insignia5_desactivada.png": "bcee149bda934aa852cfd3c5f6cd28ca",
"assets/assets/images/insignia6_activada.png": "03005f550f49f3e4031bd11bccfdfbb1",
"assets/assets/images/insignia6_desactivada.png": "8a1105ae7caa4df5e39d326a9d1ab548",
"assets/assets/images/insignia7_activada.png": "77733386f104ba1c0adf9e2fbbb5a2e5",
"assets/assets/images/insignia7_desactivada.png": "be51e931921cec6b163bca820ed9774e",
"assets/assets/images/insignia8_activada.png": "e28614d09c0a3d8197d41c7b5372cc3e",
"assets/assets/images/insignia8_desactivada.png": "924f28284cc1955682fe86d7daef3883",
"assets/assets/images/insignia9_activada.png": "58b28bd8b272537b2c99aae84f1139db",
"assets/assets/images/insignia9_desactivada.png": "fe850992e2dac048b2f32b740547c737",
"assets/assets/images/logo_verde.png": "fb45aac97fd399f1c47bb81e84370792",
"assets/assets/images/mujer.png": "7dccb54aa7561d1877615d9dd36acdfc",
"assets/assets/images/mujer_relleno.png": "1a0a82f4e1485f3801dae3ee7d2d880b",
"assets/assets/images/otro.png": "6eb01711dff88bad3db60f2bb962f6e2",
"assets/assets/images/otro_relleno.png": "032cd885691d4dc6781af0e1b0dedd41",
"assets/assets/images/pink_circle.png": "b579f99c1318cdf395f8463ba487274e",
"assets/assets/images/pride.png": "50880061132af8a20939e5ffdae7b6ae",
"assets/assets/images/pride_relleno.png": "a7a14a91556a4e64a858120172f1b49b",
"assets/assets/images/rosa_circle.png": "9c9ee4efc65bdc53076d2c7628a7a766",
"assets/assets/images/trans.png": "299d2a2087a15601855caba3176aab79",
"assets/assets/images/usuario.png": "60551d91f46d1cfc7535d0296b2e46b1",
"assets/assets/images/usuario_relleno.png": "ef0f11b27c3c4107bc01e8a7f4d82d09",
"assets/assets/images/white_circle.png": "4940d725b5499bc8c86c60113f2767be",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "81db3c8159f294ad86e73ad3f101fae0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "b62641afc9ab487008e996a5c5865e56",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "14420a173898fe09afeac9cf96664a93",
"/": "14420a173898fe09afeac9cf96664a93",
"main.dart.js": "9d3b92ba0b47cea9e2d310be099d6be1",
"manifest.json": "68d27c68f9b4cc55fbdabc01352eefcd",
"version.json": "49bdd9afd23988815847a339b7fa5284"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
