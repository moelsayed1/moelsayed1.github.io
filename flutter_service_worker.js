'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0e972995266397fee9e7a511e914f56e",
"assets/AssetManifest.bin.json": "ed05a0c88704bb68fbd5fa54b8d6135c",
"assets/AssetManifest.json": "102fdde9cc604a77405971527d0afe38",
"assets/assets/images/added_successfuly_khedr.jpeg": "1d74d00e5cce380388009daae73ea268",
"assets/assets/images/Add_to_cart_khedr.jpeg": "9e4bf071e20a7cc87b8c1dcf0f1b108e",
"assets/assets/images/add_to_khedr_screen2.jpeg": "258d0c767d85fc76e1043ed17c64d840",
"assets/assets/images/anime.jpg": "7a68c177fedd21f16e05dc4de7731527",
"assets/assets/images/appointments_sun.png": "cda3c2eb242643617b0173a17b970516",
"assets/assets/images/appointments_sun2.png": "31b51aaf2eee9cc8718560a6a3159b02",
"assets/assets/images/Attandence%2520History.jpg": "ae5b30905ab19ca9f3f8380ef243ddee",
"assets/assets/images/batman.jpeg": "982b2e8b35c837b1a2be1c170f98fa52",
"assets/assets/images/bawq.png": "f15cfe54a30ebcea614e06145942c4b1",
"assets/assets/images/bawq2.png": "8c6e1f620a850933b64379947f7ee1b6",
"assets/assets/images/camera.jpg": "13c4aef1f32e97f9de57a3436fd493f0",
"assets/assets/images/categories_khedr.jpeg": "c028b9b88470cfe69f9cec4d5fd2184d",
"assets/assets/images/Challenges_choose_sun.png": "77ef463aaac7178b7061c7edd14bd97c",
"assets/assets/images/Checkout_sun.png": "ce49ee44215cba02553299af2e49dd1a",
"assets/assets/images/collect_k.jpeg": "884ab63084b2f89327add425cfded62e",
"assets/assets/images/collect_k_done.jpeg": "f439e1127bdc3c7ccf58375c709a48c8",
"assets/assets/images/contact_us_khedr.jpeg": "4315c9d07411093621391b8c211c9ff8",
"assets/assets/images/Dashboard.jpg": "1e8a711211cd37f16863a3f36c481845",
"assets/assets/images/Doctors_sun.png": "2ce602b002eebe31a53c0b43c408f7cb",
"assets/assets/images/Doctor_book_sun.png": "10a527542658a3a0a4052f373e18f853",
"assets/assets/images/Doctor_review_sun.png": "ea7ddb0583f97c1be74ad2b314b1e8f9",
"assets/assets/images/done_k.jpeg": "9eb890de534bc51e2a2fdb02b62cf7ce",
"assets/assets/images/exercise1.png": "a02796d14860ad6e85f1882a11fe587e",
"assets/assets/images/exercise_aveng.png": "459157d982200d75969a89d415c0882b",
"assets/assets/images/exercise_details.png": "9d7412905d1befc38320f612ff8b5d43",
"assets/assets/images/exercise_fit.png": "b792f756e87e38e641c2dfd6a6a78ae9",
"assets/assets/images/facebook.png": "8c89ef8ab45d47ae9a954822532889f7",
"assets/assets/images/forget_password_khedr.jpeg": "461b497ae7b6bb96048092d716d37751",
"assets/assets/images/home_aveng.png": "fbf01df03d9fc502415baab9bad66867",
"assets/assets/images/home_fit.jpeg": "e93eb9138413bc910f59bfd5541f6513",
"assets/assets/images/home_fit.png": "2561f7db626e6e1d4c2000d573c0a8d4",
"assets/assets/images/home_k.jpeg": "1fe5653cb728f62635de32d4c44a3b6a",
"assets/assets/images/home_screen_khedr.jpeg": "f67cb34b02d1619d94f3204ed2f9399b",
"assets/assets/images/home_screen_khedr2.jpeg": "2bcbbe69a76e7f3a25b4878723fa2ee8",
"assets/assets/images/home_start2.png": "6e67e477b4d137177903b51cf11612fd",
"assets/assets/images/home_start_fit%2520(2).png": "686bf6308beef051625ad2ee6713221e",
"assets/assets/images/Home_start_fit.png": "9428093b67722e5782ab4da52bbb2d6c",
"assets/assets/images/Home_sun.png": "8af4ee167082915d904de049f1e0a46e",
"assets/assets/images/icon_bg.png": "2a387023dac2a7e3710366aaf3a4bf6d",
"assets/assets/images/instagram.png": "8ce47fd872187bfa8d11505b3bd8944e",
"assets/assets/images/joker.jpeg": "49571c814a8bf367ab0fb0683456caea",
"assets/assets/images/Khedr_market_cover.png": "46ba1f787dff9422f59b0b20a1e9b7fd",
"assets/assets/images/killua.png": "7e8303b89035bc64f8bade8234295e67",
"assets/assets/images/kilua.jpg": "98864f12a23038ede4f87c65dff92d9c",
"assets/assets/images/landing_k.jpeg": "c2376dd8bb23db439a9048682be06beb",
"assets/assets/images/leave.jpg": "6072068650fdb7dca56c800aa4fc532f",
"assets/assets/images/linkedin.png": "d492efc706db983e74258dbd348f2208",
"assets/assets/images/login.jpeg": "fe734dee14ecc4c23b4df69b24888c1c",
"assets/assets/images/login_aveng.png": "6c7743386d9ada2cb640df100c2b424a",
"assets/assets/images/login_fit.png": "2c427fd38000c0fdf5dc109bc2a44e89",
"assets/assets/images/login_k.jpeg": "22689ea1c9da53cbdfaf45e17d06a58d",
"assets/assets/images/login_khedr.jpeg": "f98babb82b41ca6122fe2f1a6123b956",
"assets/assets/images/login_sun.png": "adf7d483e959feae79dfa61d55d2d53e",
"assets/assets/images/logoPng.jpg": "5d443beeab9c36971755847a89c1ac09",
"assets/assets/images/logout_k.jpeg": "6059708bb305ce3f9d5689b9fa6397c8",
"assets/assets/images/meals.png": "e85ff5d9161842d15a7b33447cacbde9",
"assets/assets/images/meals2.png": "aa59389657a8b8a2d1b2227c2b365316",
"assets/assets/images/meals_aveng.png": "3747cde55faef3eeace2bcfa5c4cd110",
"assets/assets/images/meals_aveng2.png": "3ae50590189ccd4bed30dea49180ad7b",
"assets/assets/images/mobile.png": "18e64e2a8e51d85a34e9d6d4b1e7de11",
"assets/assets/images/my_image.png": "09e26888f8967457d8c05e3d863c907b",
"assets/assets/images/my_image_bg.png": "0962a85e310974f7b037a2381216345c",
"assets/assets/images/my_transaction_khedr.jpeg": "176d96a0a5d028a7dcde424bde666063",
"assets/assets/images/name_logo.png": "36030df6832991c724793c0f1a9e0014",
"assets/assets/images/Nassar.jpg": "92886b7b213bd472c4eb3357f3e2993b",
"assets/assets/images/Notifications_aveng.png": "20a85a5abf1a38003c8f4c3856334d4f",
"assets/assets/images/notifications_sun.png": "683362498698ea14b9238c0aeb75e642",
"assets/assets/images/notification_khedr.jpeg": "33a9c3fe3ed1c18bf2a790da56f1788f",
"assets/assets/images/onboarding_sun.png": "dc38aae9167e14f0d72be79a486f68f2",
"assets/assets/images/on_boarding_aveng.png": "dea11b0c9e3f7879ee4e49b04ee3886e",
"assets/assets/images/on_boarding_fit.png": "9f3760f192a26ecc92a4f850cc3064e7",
"assets/assets/images/on_boarding_fit2.png": "c849713ba79c6dc3610879ce258e08c8",
"assets/assets/images/orders_k.jpeg": "0b4a2068b8444c4faafc97522c43b41f",
"assets/assets/images/orders_khedr.jpeg": "dc1c5435fabcfb1084ccaa474af1662e",
"assets/assets/images/order_khedr.jpeg": "68e4fd7f7c8addc5741c43db620a76a7",
"assets/assets/images/order_place_khedr2.jpeg": "e47893918faaf94ba66a8f52a1d35edc",
"assets/assets/images/order_screen_khedr.jpeg": "966b518344258ba24960ff394bd63e8a",
"assets/assets/images/Pay_aveng.png": "14d044b536b1b3613f17b94a282b9b16",
"assets/assets/images/pay_done_k.jpeg": "7488af193cb12261859614fbe20471e3",
"assets/assets/images/pay_k1.jpeg": "e0ac247dbbdfb2f2cfbb2c8c2dc96c7c",
"assets/assets/images/pay_k2.jpeg": "f159ee96f62caad17162841e3612dd0d",
"assets/assets/images/plan_aveng1.png": "eb4792e3d4cc13c1b15566f5185cc3e0",
"assets/assets/images/plan_aveng2.png": "086b6840c6fde2758da8cb085e8b5784",
"assets/assets/images/plan_aveng3.png": "4b5130225a93abfb6dd3b2e893b6ad25",
"assets/assets/images/plan_fit.png": "01603584c3726144fd25844fc7cfd38b",
"assets/assets/images/Plan_sun.png": "a0c056b1789a400785f168dd43ec6241",
"assets/assets/images/previous_recieved_k.jpeg": "4b68bac5ededcc59406443d3062363ec",
"assets/assets/images/profile.jpg": "9813a03895accf34419970b7d627ce83",
"assets/assets/images/profile_aveng.png": "93322b3047b0c2bc61b77bf69f5d4bc6",
"assets/assets/images/profile_fit.jpeg": "44c58fe5a314c84ec69e081315c86dfd",
"assets/assets/images/profile_fit.png": "22e3e1ba2f75d51265d50103d921a651",
"assets/assets/images/profile_k.jpeg": "c245b9738247c13c07535ed4baf7a31f",
"assets/assets/images/profile_khedr.jpeg": "47b053de46c6483212cdd16b529d2e25",
"assets/assets/images/Profile_sun.png": "d8831ece897b12254d11b8159fae951c",
"assets/assets/images/Q1_aveng.png": "86ac1d7d1bc797418f6a20bc4bddb210",
"assets/assets/images/Q2_aveng.png": "09e315735f2c85e11211c2c5450f8fa9",
"assets/assets/images/Q_fit.png": "e1d5f7940f158d3f48a183468d83700d",
"assets/assets/images/reading.jfif": "40688ef5e2367524b75ddd7d97835d8d",
"assets/assets/images/reading.jpg": "6a4b3b5d79944cfd737615ab71935832",
"assets/assets/images/recieved_k.jpeg": "84f206f7905c9a6670c144e5188290b4",
"assets/assets/images/report_fit.png": "84de86c952116d805e93a3770751145f",
"assets/assets/images/returned_k.jpeg": "ceb321f2ea9436f3437193c141bcef90",
"assets/assets/images/sahseh_android.png": "f611990a8aeddd7c495e28f4452574e9",
"assets/assets/images/Sessions_sun.png": "99e9ee496ce2c66c87288df10ebd00f2",
"assets/assets/images/Settings.jpg": "e9e3ddab1a9bafaa416ddf74d2ac97bb",
"assets/assets/images/Shop_sun.png": "bcfe161f1a5ffdfeebea77ccde081622",
"assets/assets/images/signup_khedr.jpeg": "689c82a94d2d424a48410577f810d5be",
"assets/assets/images/slider_k.jpeg": "624c2df91e0ec40456bd4bea93d86ad2",
"assets/assets/images/Splash_aveng.png": "4c5f69aa4571018ee2bec286dff09fea",
"assets/assets/images/splash_fit.png": "8b1ddae06c71d303bc8557440a9330ad",
"assets/assets/images/Splash_sun.png": "3220064d54c3d25b6155d24499905c84",
"assets/assets/images/Store3.png": "6fd0e3175d43878a0af36d137aaf8523",
"assets/assets/images/Store_aveng.png": "a1f4f38ab99876501ea39557c018c04c",
"assets/assets/images/Store_fit.png": "b86f0ec8caa51aa31321c31fde582022",
"assets/assets/images/today_recieved_k.jpeg": "4fb66e47d69d441baa41737964b0d50f",
"assets/assets/images/transaction2_khedr.jpeg": "a3b83a8fe4f69a00ec2802f5a5f9b637",
"assets/assets/images/transaction_khedr.jpeg": "31e2181a97a55baca4258397cdfedf9c",
"assets/assets/images/workout_aveng.png": "ccc9f645c4b8f0c73ea1a5a50aeb9ec3",
"assets/assets/images/yassir_android.png": "41eeab2bb69526cfbb260a22b2f4b408",
"assets/assets/images/yasuo.png": "9531f59930155500573b3a50cfdbb59b",
"assets/assets/svgs/football.svg": "eb5b04993dafd76cd6263de91478e423",
"assets/assets/svgs/forward_arrow.svg": "291f6a292147a1a0066e385e10475ec9",
"assets/assets/svgs/gym.svg": "8bed2a988ee88ba8dabc09f01dea25a9",
"assets/assets/svgs/logo.svg": "c90058b4a9b04528685516715e0b4e0a",
"assets/assets/svgs/menu_black.svg": "378959d3383859cb84ee895a8694b43a",
"assets/assets/svgs/youtube.svg": "7a44696754509db83fd9e8cae4d62e88",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3ffd96b771428af05dfb442a5046de7c",
"assets/NOTICES": "e01326c03ff2952192dcd820f89685ab",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "55a6e604a4ba696655f52fa7ca5dc47b",
"icons/coding.png": "49a53b9141e042468dfc38b8ec38ef6f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "620a9c796e9100ed0a65be4578ad5d77",
"/": "620a9c796e9100ed0a65be4578ad5d77",
"main.dart.js": "852f60d4ffdda2f3eba21a1583e009e6",
"manifest.json": "865986794e884f776f10ea080ad8621d",
"version.json": "ce923c56888a1f731d2b68b3ab95c19d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
