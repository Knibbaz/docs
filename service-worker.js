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
    "url": "assets/css/0.styles.3128725f.css",
    "revision": "48bfea72647eae5cf40d5dab3b3902ee"
  },
  {
    "url": "assets/img/address-bar.a15ff370.png",
    "revision": "a15ff370eed2f8f0b8219ea3d4976318"
  },
  {
    "url": "assets/img/architecture.30de09c7.png",
    "revision": "30de09c7c6530bc11ece7d9553497563"
  },
  {
    "url": "assets/img/connex.186d320e.jpg",
    "revision": "186d320e35a63378da3873e4c359aae7"
  },
  {
    "url": "assets/img/mpp.58a89201.png",
    "revision": "58a892017c66b562945baeee15505c80"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/wallet-detail-activity.0f9d89a3.png",
    "revision": "0f9d89a34631323541d04818f4a00ac4"
  },
  {
    "url": "assets/js/10.ea619ca3.js",
    "revision": "5fbda109f5d4759a5770f24f7797f575"
  },
  {
    "url": "assets/js/11.2e96fa7e.js",
    "revision": "86ba77044b6a1473b1402b7ae68a3bd4"
  },
  {
    "url": "assets/js/12.63026fb4.js",
    "revision": "5eac7df6811f199296b3927bf5714393"
  },
  {
    "url": "assets/js/13.05a62c52.js",
    "revision": "e6d96006ca0925cf6fbac9b4454e0341"
  },
  {
    "url": "assets/js/14.e4baec31.js",
    "revision": "ed6483ad4273f0c78229791ac87df099"
  },
  {
    "url": "assets/js/15.3015f051.js",
    "revision": "cdbffb4118046ffd2440a744a0f4b2ee"
  },
  {
    "url": "assets/js/16.a05bb904.js",
    "revision": "82e6aed3cd5823304f63f3e0d29fc93b"
  },
  {
    "url": "assets/js/17.9da18bbc.js",
    "revision": "474ca68b36ea7792b52c0d89cb467a44"
  },
  {
    "url": "assets/js/18.db5b11a0.js",
    "revision": "eed29e24be0a2153f86a6518c81a53e2"
  },
  {
    "url": "assets/js/19.6734d434.js",
    "revision": "dffa91c0953aec16c2cede8a724617d7"
  },
  {
    "url": "assets/js/20.4c89bee9.js",
    "revision": "354168c92d013135b813c4fc8601e753"
  },
  {
    "url": "assets/js/21.525fe7f9.js",
    "revision": "b7f2ff6f098ade23cac2075bdf54abd4"
  },
  {
    "url": "assets/js/22.6dff57a3.js",
    "revision": "1903f83ead913a9e14dd01cca6d36312"
  },
  {
    "url": "assets/js/23.6bfb969d.js",
    "revision": "4f70653403ec62380e2e83b0ec0e95f3"
  },
  {
    "url": "assets/js/24.44b7716f.js",
    "revision": "6693e8c28f8b9347c6d592355885ba02"
  },
  {
    "url": "assets/js/25.573fc9c5.js",
    "revision": "5880abf6f4b98d1915fa8c99fbf9a6ce"
  },
  {
    "url": "assets/js/26.c9d896a1.js",
    "revision": "2670845563160d22434f0ad59ac747e1"
  },
  {
    "url": "assets/js/27.b867b2da.js",
    "revision": "955bc8aba7d0cde4ed53c38d7d81b464"
  },
  {
    "url": "assets/js/28.e6063fef.js",
    "revision": "b4d2c17f1a15ac093271d86acd4e8644"
  },
  {
    "url": "assets/js/29.5fd52193.js",
    "revision": "e1f5fa279700cd83d9efdf0a664f2098"
  },
  {
    "url": "assets/js/3.bc561988.js",
    "revision": "1454d9f6fce0e672a1336bd7f0656a38"
  },
  {
    "url": "assets/js/30.4a2b4d12.js",
    "revision": "9611b5b90d7a67ece0c331a01df23717"
  },
  {
    "url": "assets/js/31.25b0165d.js",
    "revision": "4356e7a459e5330e0e24d5ae14d24aa5"
  },
  {
    "url": "assets/js/32.c6982e54.js",
    "revision": "5cf2fe8e3764756621989d0aa0c1a855"
  },
  {
    "url": "assets/js/33.c1ce93b2.js",
    "revision": "3306eb441ef6bc7bc059e59aec04e4d6"
  },
  {
    "url": "assets/js/34.63d5aaad.js",
    "revision": "6c50487f24af1bb4389aef71783b2be9"
  },
  {
    "url": "assets/js/35.95dcba5e.js",
    "revision": "e3a75460952c5c3aead54a680e5839a3"
  },
  {
    "url": "assets/js/36.54b1fe82.js",
    "revision": "9994436c51337569d07eb32e664848d8"
  },
  {
    "url": "assets/js/37.bbf14b99.js",
    "revision": "1fa3b9b461bcd226a9d7c5b61ec03f86"
  },
  {
    "url": "assets/js/38.7d53e192.js",
    "revision": "5410d7808e5179f05437dad1bdc337c8"
  },
  {
    "url": "assets/js/39.1dfab5b6.js",
    "revision": "7361b8059d191dcc960562ced788ec39"
  },
  {
    "url": "assets/js/4.7f114b4f.js",
    "revision": "b13850004bba9f896ae6456cfe948a3b"
  },
  {
    "url": "assets/js/40.ffcf8941.js",
    "revision": "e8f3886115ae3751d566196d75c07482"
  },
  {
    "url": "assets/js/41.d1d9158b.js",
    "revision": "659d357d2c9e3648ab57ac3c923b3d5e"
  },
  {
    "url": "assets/js/42.ba529dcf.js",
    "revision": "60a741ab18d45e268f1d120a70a39a9f"
  },
  {
    "url": "assets/js/43.b32cbe1f.js",
    "revision": "174321de191910140918e289ab0f5371"
  },
  {
    "url": "assets/js/44.8bd65a8b.js",
    "revision": "5250438062f991f3740c35656ddd884c"
  },
  {
    "url": "assets/js/45.4f15ee9d.js",
    "revision": "318b24fa44f0d09a005bc1ee600f0424"
  },
  {
    "url": "assets/js/46.3e43704f.js",
    "revision": "7ef836737b37ac4a9411423379e6fb5a"
  },
  {
    "url": "assets/js/47.d5b1169f.js",
    "revision": "a2c94a3313d8b22c38c46a42f816b3fb"
  },
  {
    "url": "assets/js/48.19c560d9.js",
    "revision": "d30c60bc8cb5524d8f2980079218b30d"
  },
  {
    "url": "assets/js/5.6dfafbd1.js",
    "revision": "ac5fcd43f141fe6d40a016c353f5e240"
  },
  {
    "url": "assets/js/6.f388426f.js",
    "revision": "9dae5b14a24ea3c3a37bf9b0d1a35e1e"
  },
  {
    "url": "assets/js/7.0033acfd.js",
    "revision": "0a6e5fd94a761fc26fdb59a2ed4ab157"
  },
  {
    "url": "assets/js/8.77fe2b1e.js",
    "revision": "c4b451fe69490443fd7f63303041b222"
  },
  {
    "url": "assets/js/9.885e62d8.js",
    "revision": "0d32aa145c7441df6b83c6a7e98afb2c"
  },
  {
    "url": "assets/js/app.bbbacd37.js",
    "revision": "ca26bea81cfe1cc81f8d335360702827"
  },
  {
    "url": "assets/js/vendors~docsearch.f7385de5.js",
    "revision": "0e139e7e3e0d0e8bc373456260e50940"
  },
  {
    "url": "connex/api.html",
    "revision": "3e03b202d3638361c50bfbac7632a6ac"
  },
  {
    "url": "connex/implementation.html",
    "revision": "c47bae548803cb4666f6f8ff443f216a"
  },
  {
    "url": "connex/index.html",
    "revision": "7f0148b79fc8c9c56a8f1f4ac8045f73"
  },
  {
    "url": "icons/144.png",
    "revision": "ef022f52c54f8ee6ccc8f005d52b99de"
  },
  {
    "url": "icons/168.png",
    "revision": "cd596353879cab531903b1f9c0f8d6dc"
  },
  {
    "url": "icons/192.png",
    "revision": "6aaa85947b9a315ac47970a54c3a66f4"
  },
  {
    "url": "icons/48.png",
    "revision": "2d20f253068748053fc7082400c88f4b"
  },
  {
    "url": "icons/72.png",
    "revision": "02b333d138cc4764e770eb1d7274e7ea"
  },
  {
    "url": "icons/96.png",
    "revision": "b3240f2ffb00f383cbc3783370a782cc"
  },
  {
    "url": "index.html",
    "revision": "a906db9abc63348fb6607c1f84185f4d"
  },
  {
    "url": "logo.png",
    "revision": "1f7569a7fb96e141f556669c77877f1f"
  },
  {
    "url": "others/demos-and-services.html",
    "revision": "7efaadba12a1ebb07addb72022860e11"
  },
  {
    "url": "others/miscellaneous.html",
    "revision": "4f9a282e7e2d01aee8afc12bee7b595c"
  },
  {
    "url": "sync/download-and-install.html",
    "revision": "a02e7660c5c362ea1d2d8fe4e29f0939"
  },
  {
    "url": "sync/faq.html",
    "revision": "f25feb13bbb0358f8b6c70221375d6b7"
  },
  {
    "url": "sync/user-guide/activities.html",
    "revision": "f6f892410ca90739f4047eecaaffbeaa"
  },
  {
    "url": "sync/user-guide/browse-dapp-and-web.html",
    "revision": "0b21482d5d6c949667ce44621b8d3d61"
  },
  {
    "url": "sync/user-guide/contribute.html",
    "revision": "a35e40cadc1a1d4ab9f7fa04621b1bb1"
  },
  {
    "url": "sync/user-guide/contributing.html",
    "revision": "b6bcde6873ba8386122d4ee34867dca8"
  },
  {
    "url": "sync/user-guide/import-ledger.html",
    "revision": "63566e989563e62c18ce20e6cfb9776e"
  },
  {
    "url": "sync/user-guide/index.html",
    "revision": "0c62cd6a4773b61c62416de5bdfadece"
  },
  {
    "url": "sync/user-guide/interact-with-dapps.html",
    "revision": "f33f6c0bfeae2b216fcd7c9d71041585"
  },
  {
    "url": "sync/user-guide/report-issue.html",
    "revision": "452941bcf6e46889a9c1dc3a1596ebe9"
  },
  {
    "url": "sync/user-guide/settings.html",
    "revision": "cf94bb868204258758e3058faef51459"
  },
  {
    "url": "thor/get-started/api.html",
    "revision": "c3bb10005b57e4cbf9c86cc787f81d76"
  },
  {
    "url": "thor/get-started/custom-network.html",
    "revision": "062de7f49ff7926ddec25e48e5bcc734"
  },
  {
    "url": "thor/get-started/installation.html",
    "revision": "f99617170809dd670dcaa7e1640cff7a"
  },
  {
    "url": "thor/learn/block.html",
    "revision": "84b385a6c66bb75f3005519b1c68946f"
  },
  {
    "url": "thor/learn/builtin-contracts.html",
    "revision": "5399c33847b712b2107e6bbfd8b50208"
  },
  {
    "url": "thor/learn/faq.html",
    "revision": "cf6bd0646bcc9760bea8db5ad67b4dcd"
  },
  {
    "url": "thor/learn/fee-delegation.html",
    "revision": "634871db43b4a45128e2c50decbfa0ec"
  },
  {
    "url": "thor/learn/index.html",
    "revision": "9c0766be51c98c422d741a54a6f19ecd"
  },
  {
    "url": "thor/learn/proof-of-authority.html",
    "revision": "9601f6f114e7034832e137a81638bd19"
  },
  {
    "url": "thor/learn/transaction-calculation.html",
    "revision": "9ea5d3d9eea69bb76ee8308ddb2dc49a"
  },
  {
    "url": "thor/learn/transaction-model.html",
    "revision": "df07abed2ecf80c7c31c8dde5bccd21b"
  },
  {
    "url": "thor/learn/two-token-design.html",
    "revision": "5dd52cf8da62fac4e85773ab741b45af"
  },
  {
    "url": "tutorials/contribute.html",
    "revision": "aed0b321e187c456cfbe364074b1f5a4"
  },
  {
    "url": "tutorials/designated-fee-delegation.html",
    "revision": "6dee6602f354a9a527752854681af7b0"
  },
  {
    "url": "tutorials/forcible-transaction-dependency.html",
    "revision": "99936b4b13f54e2b3d232d7eccf944c4"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-1.html",
    "revision": "00fe30ed7527345df609917cd4b2eac7"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-2.html",
    "revision": "40a00b589436c5e9e1a18da2ed44d5d2"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-3.html",
    "revision": "07cf8ce54db388f1d1466d5026596f87"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-1.html",
    "revision": "b6951d8641700badcc15562bf8674fcf"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-2.html",
    "revision": "f23491d8f4dcfce500cbd00da9177f87"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-3.html",
    "revision": "fe99de5611889379417c6ef2a4ccc679"
  },
  {
    "url": "tutorials/index.html",
    "revision": "3fc1cf61380863e9972ee886f167bdc2"
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
