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
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "155d301f8fe745274d763f28975950ec"
  },
  {
    "url": "assets/css/0.styles.28f76b5c.css",
    "revision": "f6ff8a3157b7d82586c903f8e982b46c"
  },
  {
    "url": "assets/img/advanced.22f50a53.png",
    "revision": "22f50a539a6f10027a8d1fd9e6c0ddec"
  },
  {
    "url": "assets/img/API.4e2d4821.png",
    "revision": "4e2d482122bec9ad8c4113a3723b4ed3"
  },
  {
    "url": "assets/img/APIOC.8771283e.png",
    "revision": "8771283e341ff07a8d2ba166ceafb36a"
  },
  {
    "url": "assets/img/assing.f2476ebd.png",
    "revision": "f2476ebdb8a6502b70c75fb06cffe519"
  },
  {
    "url": "assets/img/autodelete.17244bfe.png",
    "revision": "17244bfe2ad46b7cc03db78edaa175cf"
  },
  {
    "url": "assets/img/back-change.9f32157a.png",
    "revision": "9f32157adf62d88ee77d49444acf45c6"
  },
  {
    "url": "assets/img/background.2ad9a1c7.png",
    "revision": "2ad9a1c7faa55f9d17a5cc497b28ca3d"
  },
  {
    "url": "assets/img/bio.01d70f17.png",
    "revision": "01d70f1732c43e0a3c2a9560b81c40c4"
  },
  {
    "url": "assets/img/botones.9f1cfcc6.png",
    "revision": "9f1cfcc617bfdf68bf96e36c9bbc24b5"
  },
  {
    "url": "assets/img/bt-create.ccfa465e.png",
    "revision": "ccfa465e08e9d2529b50c7e8505e9481"
  },
  {
    "url": "assets/img/bt-del.dd9e747e.png",
    "revision": "dd9e747ec867d3af1a965451e6d22792"
  },
  {
    "url": "assets/img/bt-edit.c8d50c6e.png",
    "revision": "c8d50c6e72bd1c582ab528f6910efb33"
  },
  {
    "url": "assets/img/bt-move.14a61c4c.png",
    "revision": "14a61c4cc518a7145dc8fd622ab78e10"
  },
  {
    "url": "assets/img/categories.c1c3218e.png",
    "revision": "c1c3218e25d49cd30508424e67d25faa"
  },
  {
    "url": "assets/img/code.4a89e40d.png",
    "revision": "4a89e40d30b7095380f6323e4ec40a12"
  },
  {
    "url": "assets/img/codes-imgs.634940b6.png",
    "revision": "634940b639b2499ac262b32b6092d28c"
  },
  {
    "url": "assets/img/content.7b8be358.png",
    "revision": "7b8be3585dfa82974cfea0cae1445ee4"
  },
  {
    "url": "assets/img/cover.052b7621.png",
    "revision": "052b7621cf5e4c8eaf7a0d717a3d1fc2"
  },
  {
    "url": "assets/img/create-album.a8ba1380.png",
    "revision": "a8ba13800b9ead46b168edb7a7039a43"
  },
  {
    "url": "assets/img/create-subalbum.5f0a8d40.png",
    "revision": "5f0a8d40bfd3fe43e21b3b18c5263ea8"
  },
  {
    "url": "assets/img/delete-album.8c1616ee.png",
    "revision": "8c1616ee4c31254b15f387770a29b835"
  },
  {
    "url": "assets/img/edit-del.ad4cfdd2.png",
    "revision": "ad4cfdd267a64d722511a6d52287853b"
  },
  {
    "url": "assets/img/edit.e5b1e4cd.png",
    "revision": "e5b1e4cd7c0fffb6a802bf1525e4f1ad"
  },
  {
    "url": "assets/img/email.cd3f5fe8.png",
    "revision": "cd3f5fe8e2c7f266a337073bc03a10f7"
  },
  {
    "url": "assets/img/exif.439cb022.png",
    "revision": "439cb022f0e77da99da558b68b419240"
  },
  {
    "url": "assets/img/exp-all.6c202777.png",
    "revision": "6c202777e444ab18c2bba4de18f529e6"
  },
  {
    "url": "assets/img/explorer.021be3a9.png",
    "revision": "021be3a90c192876f784684b8be9fcc8"
  },
  {
    "url": "assets/img/flag.7666e213.png",
    "revision": "7666e213f5a1cc655433d69615e8b137"
  },
  {
    "url": "assets/img/imgs-album.8dcd54f4.png",
    "revision": "8dcd54f42f58042f7cc10368c076ac9a"
  },
  {
    "url": "assets/img/language.ecddb64d.png",
    "revision": "ecddb64d01448ce18026de76ebd704c1"
  },
  {
    "url": "assets/img/like.2c02f7bd.png",
    "revision": "2c02f7bd2e453a2a77aa24a687b82f7e"
  },
  {
    "url": "assets/img/move-album.b42346da.png",
    "revision": "b42346da5a88791813bba2f47008a3df"
  },
  {
    "url": "assets/img/name.ab2c9bbb.png",
    "revision": "ab2c9bbb44e326bf5609b728eae538d9"
  },
  {
    "url": "assets/img/notification-ex.e559d808.png",
    "revision": "e559d808af23ef56778813e462efc6ad"
  },
  {
    "url": "assets/img/order.a3f9a3e4.png",
    "revision": "a3f9a3e48560eae8b9e0c21b177d8026"
  },
  {
    "url": "assets/img/password.a5478216.png",
    "revision": "a54782169f732752165628f483bcb593"
  },
  {
    "url": "assets/img/privacy.0a37ab50.png",
    "revision": "0a37ab5056449e861d086e6eff323c81"
  },
  {
    "url": "assets/img/privacy.92e5d293.png",
    "revision": "92e5d293b70daada43df5638e99a0883"
  },
  {
    "url": "assets/img/random.29032136.png",
    "revision": "2903213612bc025de700f6fab1710669"
  },
  {
    "url": "assets/img/search-av.9da39515.png",
    "revision": "9da39515bc3ef0eba7c2d01d0fa899cd"
  },
  {
    "url": "assets/img/search-avz.218c1290.png",
    "revision": "218c1290fb0c25687a37a60b41325198"
  },
  {
    "url": "assets/img/search.3c9d206a.png",
    "revision": "3c9d206a0687e36cea3b16b1d720c58e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/search.ecc99e15.png",
    "revision": "ecc99e151a6577c7e81d6fcda0385215"
  },
  {
    "url": "assets/img/set-api.e57b0c1a.png",
    "revision": "e57b0c1afb8e3448ff188a862ef5fd86"
  },
  {
    "url": "assets/img/set-edit.eaa2b562.png",
    "revision": "eaa2b562749d555a28cb52a670e29dc5"
  },
  {
    "url": "assets/img/settings.25f62fbc.png",
    "revision": "25f62fbc026e57cab2347ed6bf3b0277"
  },
  {
    "url": "assets/img/share-album.40c0f571.png",
    "revision": "40c0f5716b6b75a8e0b0ca010fda8c34"
  },
  {
    "url": "assets/img/sub-album.c669516d.png",
    "revision": "c669516d946d43f8806fa8da310a2505"
  },
  {
    "url": "assets/img/timezone.9f660a69.png",
    "revision": "9f660a692675757375515e1aea165e8e"
  },
  {
    "url": "assets/img/upload_adv.8873655f.png",
    "revision": "8873655f434b56f55cd56c47d2b342d1"
  },
  {
    "url": "assets/img/upload-album.3e4689a1.png",
    "revision": "3e4689a105e1714e8642aacde287dbcc"
  },
  {
    "url": "assets/img/url.61683720.png",
    "revision": "61683720d7c0b10fc14c06380cb43755"
  },
  {
    "url": "assets/img/user-content.853c605e.png",
    "revision": "853c605e352fe0085b9060ab4c57ac6e"
  },
  {
    "url": "assets/img/username.81b79c58.png",
    "revision": "81b79c58e288f8b8bea88815de1a1ca5"
  },
  {
    "url": "assets/img/web.4131555e.png",
    "revision": "4131555ee386433f6b1d1b6066cd4e01"
  },
  {
    "url": "assets/js/10.4ec58858.js",
    "revision": "43899580309afbdcc3d83334394ea54e"
  },
  {
    "url": "assets/js/11.3dc497e7.js",
    "revision": "f1c20e0d3d5f3399b2bf9d50d425fdb9"
  },
  {
    "url": "assets/js/12.44fc7178.js",
    "revision": "90bb6c070ca3e67c523c8ac63b139614"
  },
  {
    "url": "assets/js/13.e7c14b54.js",
    "revision": "8526e9ee2d6e20916406ac0c8ad1a415"
  },
  {
    "url": "assets/js/14.c022c342.js",
    "revision": "0acbfa3477c5bc6dec184babbc23868e"
  },
  {
    "url": "assets/js/15.5e6e05f1.js",
    "revision": "8f2492d9646eb01a77c5180140f0ce10"
  },
  {
    "url": "assets/js/16.67eb402c.js",
    "revision": "5c5ab9f2ed4a4a3531f0a876b748c7b8"
  },
  {
    "url": "assets/js/17.c5ff5d1f.js",
    "revision": "cea5e50c950a2bd1d908cb7754e0bc2f"
  },
  {
    "url": "assets/js/18.538790fb.js",
    "revision": "66691bba3d5820638f3b2817bba1cf91"
  },
  {
    "url": "assets/js/19.317e30e2.js",
    "revision": "bef5a669ef059b9e0782b8d8fc4c053d"
  },
  {
    "url": "assets/js/2.0a78f969.js",
    "revision": "e86254dfb92c1dfe8a23992ee1711d84"
  },
  {
    "url": "assets/js/20.7c5b4205.js",
    "revision": "985eedcda9ae226d1b8f9f1467cc342b"
  },
  {
    "url": "assets/js/21.7b156898.js",
    "revision": "129224a811b7310eb03fec2179811aee"
  },
  {
    "url": "assets/js/22.9ebf87a4.js",
    "revision": "a3f5ea6b4a62346b054e9419675bed39"
  },
  {
    "url": "assets/js/23.5424fb40.js",
    "revision": "516d1e01abb9f603af98de58dbad604f"
  },
  {
    "url": "assets/js/24.bb1c1c83.js",
    "revision": "11a7421477ca769ad234beab663c6372"
  },
  {
    "url": "assets/js/25.9af36f63.js",
    "revision": "a46bf25f53176d49000d09a16a834287"
  },
  {
    "url": "assets/js/26.ccc306ea.js",
    "revision": "40821af13884d34190def52847a0a5c0"
  },
  {
    "url": "assets/js/27.d9357e5b.js",
    "revision": "e61ea0fc4946a11205471e1ff6e1cd9c"
  },
  {
    "url": "assets/js/28.4434dc1d.js",
    "revision": "3da40b32009bbfb179c3ac6e4b2b27e4"
  },
  {
    "url": "assets/js/29.41025f6f.js",
    "revision": "e0fa4ee29cd58a9efa601d952ae72553"
  },
  {
    "url": "assets/js/3.b9379efd.js",
    "revision": "896edb4a1cef1ddb6e33e0ec37ea4d2b"
  },
  {
    "url": "assets/js/30.62443324.js",
    "revision": "ddd8b42550026052c9e9aaa7d2a1c60a"
  },
  {
    "url": "assets/js/31.e92298ec.js",
    "revision": "737e3673dbf6db08a0acad8579bab20e"
  },
  {
    "url": "assets/js/32.d0d7ff50.js",
    "revision": "317c8a190e6ded4b0554b4391386c644"
  },
  {
    "url": "assets/js/33.5bef2b18.js",
    "revision": "5b2870ca43790579c6bfc6c6fb82fcc4"
  },
  {
    "url": "assets/js/34.4eb92175.js",
    "revision": "7c57543a7ab0f272dfcbc9a7ac0e52b9"
  },
  {
    "url": "assets/js/35.1902fa10.js",
    "revision": "87102e71ac9f24ed0b4d8b715bd58bd0"
  },
  {
    "url": "assets/js/36.9e650274.js",
    "revision": "8e4dfb5d099ebe76ed6af2ebcd99a35d"
  },
  {
    "url": "assets/js/37.e82218cc.js",
    "revision": "52ae01dc6fa2d0997755997db846b79e"
  },
  {
    "url": "assets/js/38.85044fa3.js",
    "revision": "80991001f650fba44b93370a57af9d41"
  },
  {
    "url": "assets/js/39.2d39ab29.js",
    "revision": "45ec2de4de1b7887758298929f054cc5"
  },
  {
    "url": "assets/js/4.c05735a6.js",
    "revision": "dd21d97b5df3b6ba6103175e42487210"
  },
  {
    "url": "assets/js/40.b42569ef.js",
    "revision": "e7d54b7c97897879ecc1ecc59606d1cf"
  },
  {
    "url": "assets/js/5.c13d074d.js",
    "revision": "1211883ab1aa86910eeeff16a5e9e817"
  },
  {
    "url": "assets/js/6.5f7d16b9.js",
    "revision": "9f9f6cf37fa0370db4bd7edef8961810"
  },
  {
    "url": "assets/js/7.73acafc3.js",
    "revision": "729ec9aa3b98ad9ad7ca5abfb90d557f"
  },
  {
    "url": "assets/js/8.ba062682.js",
    "revision": "634e9df449f54fd14f7cc6d2bea5e388"
  },
  {
    "url": "assets/js/9.d0d6d4d9.js",
    "revision": "74b2f2945f6d55a221be0ef55d1a82ab"
  },
  {
    "url": "assets/js/app.4cef29b0.js",
    "revision": "6be9e4585470d6d23f4a946e72fbdd6d"
  },
  {
    "url": "features/content/image.html",
    "revision": "da50b30d0c7e7ea4881191c316cd11bf"
  },
  {
    "url": "features/explore/categories.html",
    "revision": "f0b2dd0f9aa5efdff74b1131cf8ac0b6"
  },
  {
    "url": "features/explore/discovery.html",
    "revision": "b36f7aca2a14e352366fdf2709bccc83"
  },
  {
    "url": "features/explore/menu.html",
    "revision": "e7e9188a7ebc1d2181d1ad8f87abe09b"
  },
  {
    "url": "features/explore/random.html",
    "revision": "7ea13b67ee5ff9205c50d4fd22c9da23"
  },
  {
    "url": "features/listings/actions.html",
    "revision": "b460f50dc97ce06a8327473f26517fc4"
  },
  {
    "url": "features/listings/content.html",
    "revision": "9a2aa8627b37394a38a6eaa410847e8c"
  },
  {
    "url": "features/listings/editing.html",
    "revision": "f0ec8cf446dabf0d4bdfd9d3acd6ae3a"
  },
  {
    "url": "features/listings/viewer.html",
    "revision": "0e801a861bba5eea35dc87202996e368"
  },
  {
    "url": "features/search/advanced.html",
    "revision": "4dedc3f582671adbacba2af6cc495e47"
  },
  {
    "url": "features/search/basic.html",
    "revision": "0555d50485dbcb746b83f2027eef5c77"
  },
  {
    "url": "features/upload/formats.html",
    "revision": "e76132f348c7b295de622564161cd63a"
  },
  {
    "url": "features/upload/local.html",
    "revision": "1e43223a127379690d080b17ea98f15d"
  },
  {
    "url": "features/upload/url.html",
    "revision": "15653ecb71bbe4711410d804020d4596"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "e8b5fa3160306f249145821b4cfeae43"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "8ac630b2b40dca3cd21aadc83f4a26b0"
  },
  {
    "url": "index.html",
    "revision": "66a9eb0443054428956b2b7ae2d1fa5e"
  },
  {
    "url": "integrations/pup.html",
    "revision": "2e67348ff5145ddd6c5d204a3299e83a"
  },
  {
    "url": "integrations/sharex.html",
    "revision": "6bc55448c192666fbe5135550b5c7325"
  },
  {
    "url": "logo.svg",
    "revision": "fbf1f71e002568a8b5a8ec28c3caa73a"
  },
  {
    "url": "user/account/login.html",
    "revision": "9f5efb40bf1811ff9c5092cf05b0bbb1"
  },
  {
    "url": "user/account/password-forgot.html",
    "revision": "e047eed7c2164a9a22d00e259fb5817a"
  },
  {
    "url": "user/account/signup.html",
    "revision": "b9ff3b745beca22b8fada299ad499ae7"
  },
  {
    "url": "user/profile/albums.html",
    "revision": "de1a3f9ef528226d3cb945ee14279417"
  },
  {
    "url": "user/profile/color-palette.html",
    "revision": "b78a863ea1c026137788ad138ab61e33"
  },
  {
    "url": "user/profile/followers.html",
    "revision": "086b36933e5945e219ddb8d5753d19a5"
  },
  {
    "url": "user/profile/following.html",
    "revision": "83e36743aace5c4c8229e032877f09b8"
  },
  {
    "url": "user/profile/liked.html",
    "revision": "6d061b834be80c94c35e28cfdc4ae522"
  },
  {
    "url": "user/profile/notifications.html",
    "revision": "e1c9abe1f8f7e3cb4fab1441b7d59750"
  },
  {
    "url": "user/profile/user-profile.html",
    "revision": "412c7fa89b96ae2b0375d9ca47cc73f2"
  },
  {
    "url": "user/settings/account.html",
    "revision": "46f56e08781262281345f6f816015990"
  },
  {
    "url": "user/settings/api.html",
    "revision": "2aefdd29bb9d685088b1a80a2a3816c6"
  },
  {
    "url": "user/settings/password.html",
    "revision": "b88a080823c3642301424907bb2a6ca8"
  },
  {
    "url": "user/settings/profile.html",
    "revision": "4fd9634a3e537cd35b89a059017f70d2"
  },
  {
    "url": "user/settings/security.html",
    "revision": "f12ddd4d07c04528e073b6095cafa9b9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
