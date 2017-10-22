importScripts('workbox-sw.prod.v2.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "index.html",
    "revision": "689e97b1daf73a8284ce6dda3aac8e8c"
  },
  {
    "url": "inline.ca0d1a4299a0faedc737.bundle.js",
    "revision": "235df421e812cc708d77440dfb6b674c"
  },
  {
    "url": "main.a6fe7acf70ec09cd2314.bundle.js",
    "revision": "16315cf3a2a0003d3bbf4eabffd07a6b"
  },
  {
    "url": "polyfills.8eba0ab53b5457105d75.bundle.js",
    "revision": "a1a42d9eb5149e7037b56e5b0ac3d08e"
  },
  {
    "url": "styles.ab04240455d1610de105.bundle.css",
    "revision": "ab04240455d1610de1059cb529fbdbbd"
  },
  {
    "url": "vendor.c2084990b1ec12db5feb.bundle.js",
    "revision": "ae0d389c372acefbaddbe36da876d05b"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
workboxSW.router.registerNavigationRoute("index.html");
