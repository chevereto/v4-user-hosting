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
    "revision": "9e233423f8ac63dfa9473ddbc590dce3"
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
    "url": "assets/js/15.6e10cdb5.js",
    "revision": "62b0af5d6ada3c86d522f7dbd4ce3c43"
  },
  {
    "url": "assets/js/16.76adf6ee.js",
    "revision": "a1718a6a81fbe27baab4a7c04af502f0"
  },
  {
    "url": "assets/js/17.d38d40a9.js",
    "revision": "b6acdbfa1d28bbe1bfc84e146198d4af"
  },
  {
    "url": "assets/js/18.12ba5714.js",
    "revision": "01974877ba769fd5643ae3ae1fde815d"
  },
  {
    "url": "assets/js/19.542b7def.js",
    "revision": "d168e26a12f4feb5c751b484d9b6685d"
  },
  {
    "url": "assets/js/2.0a78f969.js",
    "revision": "e86254dfb92c1dfe8a23992ee1711d84"
  },
  {
    "url": "assets/js/20.3abaaadd.js",
    "revision": "91496126ed0aa74945d576c6e4cc60d8"
  },
  {
    "url": "assets/js/21.0bb523cb.js",
    "revision": "85c4528850501225914eaad869d2dfc2"
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
    "url": "assets/js/3.b915a6e8.js",
    "revision": "4b46827fdedd40ed7b16c7a86d2d86d5"
  },
  {
    "url": "assets/js/30.b5e4bffb.js",
    "revision": "ed0c043bee0552532bd60bde77a68b04"
  },
  {
    "url": "assets/js/31.c8911085.js",
    "revision": "4517c9d3c057ef2dad6617dd0e8b4564"
  },
  {
    "url": "assets/js/32.07e2be21.js",
    "revision": "770388b6c49d57e4fdc08cd30ecbdd53"
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
    "url": "assets/js/8.42988dc7.js",
    "revision": "8e563e1284644aab972bf49b723b6d46"
  },
  {
    "url": "assets/js/9.07211de2.js",
    "revision": "f89c867b587c97fd1bac2b743f21e64a"
  },
  {
    "url": "assets/js/app.ae86fbbf.js",
    "revision": "7a424a1f86f2561a08b592804d8aefa2"
  },
  {
    "url": "features/content/image.html",
    "revision": "28b37dba349ab9c361fa1f9cf77dcdaf"
  },
  {
    "url": "features/explore/categories.html",
    "revision": "56c19a36e9c380a6d9e605fbbab88f74"
  },
  {
    "url": "features/explore/discovery.html",
    "revision": "e13aea69f6ea330b9f515b737838e2ba"
  },
  {
    "url": "features/explore/menu.html",
    "revision": "b130ef6dba85d428b1026567c8a433df"
  },
  {
    "url": "features/explore/random.html",
    "revision": "e5cdc2d35b15d1b138a72170f4a06a86"
  },
  {
    "url": "features/listings/actions.html",
    "revision": "3275af1f069f717be98b030fa84c5a3a"
  },
  {
    "url": "features/listings/content.html",
    "revision": "69dfb774666c1bdb4556ae565428de2f"
  },
  {
    "url": "features/listings/editing.html",
    "revision": "7851b78cb452ab3ae6237258417a647b"
  },
  {
    "url": "features/listings/viewer.html",
    "revision": "d4c2e39c713d77abe4184a47d8851ec0"
  },
  {
    "url": "features/search/advanced.html",
    "revision": "d8e78cc1351eae9c402f46c7e38ea31f"
  },
  {
    "url": "features/search/basic.html",
    "revision": "5d841dc9bebe4c068b5543102205e62d"
  },
  {
    "url": "features/upload/formats.html",
    "revision": "5acf16e0134aa307925ebb9af1bd2882"
  },
  {
    "url": "features/upload/local.html",
    "revision": "971467ebb538b5c9a72bc2bdcbe4d654"
  },
  {
    "url": "features/upload/url.html",
    "revision": "f4b22f297a6c75df4f018c7a6587fcfa"
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
    "revision": "3ed501a473710e42fd089a0ace2ce7cf"
  },
  {
    "url": "integrations/pup.html",
    "revision": "8aed96ae32c60179760efa87cef1f8e8"
  },
  {
    "url": "integrations/sharex.html",
    "revision": "42df544eb48375dcbff0c337a2a10e1f"
  },
  {
    "url": "logo.svg",
    "revision": "fbf1f71e002568a8b5a8ec28c3caa73a"
  },
  {
    "url": "user/account/login.html",
    "revision": "09b1b814068a59320506958a4e467195"
  },
  {
    "url": "user/account/password-forgot.html",
    "revision": "7a161b8c4afb6f0a0a01e87342d560da"
  },
  {
    "url": "user/account/signup.html",
    "revision": "af56bd303f469bfdb8d6106b8d6300cf"
  },
  {
    "url": "user/profile/albums.html",
    "revision": "583988a3785b6204a3a86874500430cc"
  },
  {
    "url": "user/profile/color-palette.html",
    "revision": "5019271a1843a42e5766deff058beb77"
  },
  {
    "url": "user/profile/followers.html",
    "revision": "c3821f10dca6c9e12cc2d60e6b0690e7"
  },
  {
    "url": "user/profile/following.html",
    "revision": "9a32bf59bb5cc7e2381a30a00dc8b143"
  },
  {
    "url": "user/profile/liked.html",
    "revision": "f06e7ea74572bf5151253a8cd3f4f5f8"
  },
  {
    "url": "user/profile/notifications.html",
    "revision": "a06e07bba9be4cb458c44b266c96654c"
  },
  {
    "url": "user/profile/user-profile.html",
    "revision": "cf6ae6872422f5908b74dac827ce24f6"
  },
  {
    "url": "user/settings/account.html",
    "revision": "cedd5396cfa98dacd3e392dcbc1b162b"
  },
  {
    "url": "user/settings/api.html",
    "revision": "a3fce5456e71f80de52052fe8702a5ec"
  },
  {
    "url": "user/settings/password.html",
    "revision": "1b69b44168138d080da3aef8c90b2bd6"
  },
  {
    "url": "user/settings/profile.html",
    "revision": "21aad329cb41ed742fe7c8d3abd4d862"
  },
  {
    "url": "user/settings/security.html",
    "revision": "cbf5f7dcb9634fef8a5d921b97747474"
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
