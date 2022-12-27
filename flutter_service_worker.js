'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e988a8ce9636fda87222a128912b7c1f",
"index.html": "cff8a88eadbf8c289cdb6165a1b3ad26",
"/": "cff8a88eadbf8c289cdb6165a1b3ad26",
"main.dart.js": "94262504efd86e9d245e3270cd64fcc8",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"README.md": "3f52748a3a5ef454f825704081804798",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b326057eb8eeb78abfa5de2845b04054",
".git/config": "89eeaaba7f21d09587e971050f513708",
".git/objects/68/d99e7b7b1e805854af7cd8443972e0ee46ace1": "48cd98c0c768d30e6ecf2a7bea1d3df9",
".git/objects/3b/d55e7b0dfa22e4a15f728abbcbaae0ab4a5df9": "acb00a8423717181a7c99ae6d5794a5c",
".git/objects/0b/e2ad0e5418879b1a3b60e4cfdc6eed5062ea26": "3d431eb8951cc5bb6f78c9755b1a948f",
".git/objects/05/1c381d1c8f2898e6dfd13c368759b921ae24ca": "d56eb8a76cea29e87db66bf4f479cd86",
".git/objects/9c/b704614124637cd91104752a82068c5d89620d": "455ac53a6eeac814c450099bdadabd27",
".git/objects/b5/14f8e885c39694e19e025c56c97b9fe7f30a1e": "6a458daacf24648d3d524f0b72364b67",
".git/objects/ac/a7386764c3f7425bf0152b48215114002fe0d3": "d2f7c8c0e5b03a5ff3bb54a8a10d819a",
".git/objects/a2/54d82b253889f8152aa71c09f9fde6c843ce07": "463ff81c2b93f1a12c3aebe894c4b6f1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/b1fd242ec62e997780736e75d4a9a9de61697a": "a6649792bdb511c0b6f8646549ba5e1d",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/a4c3681e8b68dde77efc433961adad9245e2e1": "f4f371f11dd4498c967659227385ff3b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/82b398b0e7d152b701e97fcd2c4ec556288d17": "76b9f38eec290a70c2f8fa3a081ed63b",
".git/objects/ca/49b7a4288aa1b545de1158395df59faa7d1a23": "00124b0f707e3db34103e3c06c3ebb90",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/16/43d98d5377b20e582d450bd3e01e9521174fd3": "70f9c70d3ab7267ac65f109c1eb7c76f",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/28/a32a4a0614ad247d427b64fa861af28d85d13a": "2b77ed8b94c327ee23d50afcaa144fd6",
".git/objects/17/ab1e65e14e73f46957e979bbd0049d1e937ae6": "acd275feb040778d8744b3a464777d23",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/92dbe7e14b3c58bb8fb61cb88e9335021bdf88": "da5e646082f8aee522bd114fe472a62f",
".git/objects/44/f0fd5fe18664df73b346096044411482ebabf4": "09bac91f0aca4829147a7feeccd792ec",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/252f07b60439e06225e0ace1e16201c83a6233": "1d79415b95f90ff4c72d133758818d9f",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/63/2901ff157894d2c0cdb999e285cf4593aa8b6d": "e7ccc188feeb1a0c3ffebf6d205b7f60",
".git/objects/dd/5938f2a8cbc7a00ce0e5b2d6e834847684fd37": "eb148b0ec58241d40fa21e7a06ec27fd",
".git/objects/dd/03d201ac9e58b8522f145cd2a64737a5871a32": "e847e8bd1a12f6564a3dd6f7851783d3",
".git/objects/a9/cb67eae0b019f68795e478bd43c34d3f9470d2": "afb9b4a6d7d6ad7092b2621d92e1c891",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e1/5571ce39c7bb879107e976a6bcdf6e3c952874": "f2f721e4404c51fb39e5d79da2794162",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/ff/6ee6031a6377b1ccb76799c4ed7cbc931f507e": "2dacd3974e0de27257fe44c002e5036b",
".git/objects/c5/7b080e7113bacbeca348dee5a6714a25004d1f": "d9205e5b4839242331802a4a0d5c9f1f",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/c395ddca1b8797f0a185ec48532346ab1403e1": "29a033c04d26f3751534be9d1c8be8af",
".git/objects/41/285e5aa2072e45fc4307bf9486019836bcf610": "a49d971cc63bf7a6c69bdd784afecf0e",
".git/objects/24/afb440695d914cd2b46cb6b866ea9fe1e3df04": "3f9a09b11eb87815ef4e9ab57833ce0f",
".git/objects/71/e2da139cfccdcc4d05adbb6ff485b91fd3b480": "64e3082a295781f71854b123ae868147",
".git/objects/76/7087716a4ca38ce0cad0550943bdf183c469ca": "3135eab358147c2ee2e349c044527e96",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/13/dd2666063539e0e7fbae8f6d3846e54cd9fea4": "8a4446052bc0c47afd9b8fa5956996e8",
".git/objects/22/357128ffd4ebf94db97d0082880b3a3b79a00e": "a70d32df1784a8b921f2646981428bef",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a8550ead0c3feead684714184ff42133",
".git/logs/refs/heads/main": "a8550ead0c3feead684714184ff42133",
".git/logs/refs/remotes/origin/main": "f81a535b11485b05995088197d7e5f79",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "3fc1570defd4f4ae7f8775721b5b4d84",
".git/refs/remotes/origin/main": "3fc1570defd4f4ae7f8775721b5b4d84",
".git/index": "fed58e3bd5e76d3208397baa2a352974",
".git/COMMIT_EDITMSG": "9db9a90da5789f212a2c8de6f795e92d",
".git/FETCH_HEAD": "6f27257a1f24684b51d996ed6a6e4ee2",
"assets/AssetManifest.json": "e3626347ab91a74babb388f325daae03",
"assets/NOTICES": "7630655f8655879aeaa5167585bbd959",
"assets/FontManifest.json": "4dcd33f7eb2ce19c7b4f7ac6e7af7431",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ac5d736bd41cab93d7dda46924fbc682",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/fonts/customfont.ttf": "ef90e02223b26fc1c4d54b244852bf8c",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
