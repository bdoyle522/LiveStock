var serviceWorkerOption = {
  "assets": [
    "/main.js",
    "/index.html"
  ]
};
        
        /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/worker_cache.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanM/Y2QwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/webpack/buildin/global.js\n");

/***/ }),

/***/ "./src/worker_cache.js":
/*!*****************************!*\
  !*** ./src/worker_cache.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar DEBUG = false; // When the user navigates to your site,\n// the browser tries to redownload the script file that defined the service\n// worker in the background.\n// If there is even a byte's difference in the service worker file compared\n// to what it currently has, it considers it 'new'.\n\nvar assets = global.serviceWorkerOption.assets;\nvar CACHE_NAME = new Date().toISOString();\n\nvar assetsToCache = _toConsumableArray(assets).concat(['./']);\n\nassetsToCache = assetsToCache.map(function (path) {\n  return new URL(path, global.location).toString();\n}); // When the service worker is first added to a computer.\n\nself.addEventListener('install', function (event) {\n  // Perform install steps.\n  if (DEBUG) {\n    console.log('[SW] Install event');\n  } // Add core website files to cache during serviceworker installation.\n\n\n  event.waitUntil(global.caches.open(CACHE_NAME).then(function (cache) {\n    return cache.addAll(assetsToCache);\n  }).then(function () {\n    if (DEBUG) {\n      console.log('Cached assets: main', assetsToCache);\n    }\n  }).catch(function (error) {\n    console.error(error);\n    throw error;\n  }));\n}); // After the install event.\n\nself.addEventListener('activate', function (event) {\n  if (DEBUG) {\n    console.log('[SW] Activate event');\n  } // Clean the caches\n\n\n  event.waitUntil(global.caches.keys().then(function (cacheNames) {\n    return Promise.all(cacheNames.map(function (cacheName) {\n      // Delete the caches that are not the current one.\n      if (cacheName.indexOf(CACHE_NAME) === 0) {\n        return null;\n      }\n\n      return global.caches.delete(cacheName);\n    }));\n  }));\n});\nself.addEventListener('message', function (event) {\n  switch (event.data.action) {\n    case 'skipWaiting':\n      if (self.skipWaiting) {\n        self.skipWaiting();\n        self.clients.claim();\n      }\n\n      break;\n\n    default:\n      break;\n  }\n});\nself.addEventListener('fetch', function (event) {\n  var request = event.request; // Ignore not GET request.\n\n  if (request.method !== 'GET') {\n    if (DEBUG) {\n      console.log(\"[SW] Ignore non GET request \".concat(request.method));\n    }\n\n    return;\n  }\n\n  var requestUrl = new URL(request.url); // Ignore difference origin.\n\n  if (requestUrl.origin !== location.origin) {\n    if (DEBUG) {\n      console.log(\"[SW] Ignore difference origin \".concat(requestUrl.origin));\n    }\n\n    return;\n  }\n\n  var resource = global.caches.match(request).then(function (response) {\n    if (response) {\n      if (DEBUG) {\n        console.log(\"[SW] fetch URL \".concat(requestUrl.href, \" from cache\"));\n      }\n\n      return response;\n    } // Load and cache known assets.\n\n\n    return fetch(request).then(function (responseNetwork) {\n      if (!responseNetwork || !responseNetwork.ok) {\n        if (DEBUG) {\n          console.log(\"[SW] URL [\".concat(requestUrl.toString(), \"] wrong responseNetwork: \").concat(responseNetwork.status, \" \").concat(responseNetwork.type));\n        }\n\n        return responseNetwork;\n      }\n\n      if (DEBUG) {\n        console.log(\"[SW] URL \".concat(requestUrl.href, \" fetched\"));\n      }\n\n      var responseCache = responseNetwork.clone();\n      global.caches.open(CACHE_NAME).then(function (cache) {\n        return cache.put(request, responseCache);\n      }).then(function () {\n        if (DEBUG) {\n          console.log(\"[SW] Cache asset: \".concat(requestUrl.href));\n        }\n      });\n      return responseNetwork;\n    }).catch(function () {\n      // User is landing on our page.\n      if (event.request.mode === 'navigate') {\n        return global.caches.match('./');\n      }\n\n      return null;\n    });\n  });\n  event.respondWith(resource);\n}); // const cacheName = 'v1';\n// const cacheAssets = [\n//     '../dist/main.js',\n//     '../dist/index.html'\n// ]\n// self.addEventListener('install', (e) => {\n//     console.log(\"Service worker: installed\");\n//     e.waitUntil(\n//         caches.open(cacheAssets)\n//         .then(cache => {\n//             console.log(\"Service Worker: Caching files\");\n//             cache.addAll(cacheAssets).catch(err => console.log(\"Cache err: \" + err));\n//         })\n//         .then(() => self.skipWaiting())\n//         .catch(err => console.log(\"skip err: \" + err))\n//     )\n// })\n// self.addEventListener('activate', (e) => {\n//     console.log(\"Service worker: activated\");\n// })\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvd29ya2VyX2NhY2hlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmtlcl9jYWNoZS5qcz8xMDJhIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCBERUJVRyA9IGZhbHNlXG5cbi8vIFdoZW4gdGhlIHVzZXIgbmF2aWdhdGVzIHRvIHlvdXIgc2l0ZSxcbi8vIHRoZSBicm93c2VyIHRyaWVzIHRvIHJlZG93bmxvYWQgdGhlIHNjcmlwdCBmaWxlIHRoYXQgZGVmaW5lZCB0aGUgc2VydmljZVxuLy8gd29ya2VyIGluIHRoZSBiYWNrZ3JvdW5kLlxuLy8gSWYgdGhlcmUgaXMgZXZlbiBhIGJ5dGUncyBkaWZmZXJlbmNlIGluIHRoZSBzZXJ2aWNlIHdvcmtlciBmaWxlIGNvbXBhcmVkXG4vLyB0byB3aGF0IGl0IGN1cnJlbnRseSBoYXMsIGl0IGNvbnNpZGVycyBpdCAnbmV3Jy5cbmNvbnN0IHsgYXNzZXRzIH0gPSBnbG9iYWwuc2VydmljZVdvcmtlck9wdGlvblxuXG5jb25zdCBDQUNIRV9OQU1FID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG5cbmxldCBhc3NldHNUb0NhY2hlID0gWy4uLmFzc2V0cywgJy4vJ11cblxuYXNzZXRzVG9DYWNoZSA9IGFzc2V0c1RvQ2FjaGUubWFwKHBhdGggPT4ge1xuICByZXR1cm4gbmV3IFVSTChwYXRoLCBnbG9iYWwubG9jYXRpb24pLnRvU3RyaW5nKClcbn0pXG5cbi8vIFdoZW4gdGhlIHNlcnZpY2Ugd29ya2VyIGlzIGZpcnN0IGFkZGVkIHRvIGEgY29tcHV0ZXIuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCBldmVudCA9PiB7XG4gIC8vIFBlcmZvcm0gaW5zdGFsbCBzdGVwcy5cbiAgaWYgKERFQlVHKSB7XG4gICAgY29uc29sZS5sb2coJ1tTV10gSW5zdGFsbCBldmVudCcpXG4gIH1cblxuICAvLyBBZGQgY29yZSB3ZWJzaXRlIGZpbGVzIHRvIGNhY2hlIGR1cmluZyBzZXJ2aWNld29ya2VyIGluc3RhbGxhdGlvbi5cbiAgZXZlbnQud2FpdFVudGlsKFxuICAgIGdsb2JhbC5jYWNoZXNcbiAgICAgIC5vcGVuKENBQ0hFX05BTUUpXG4gICAgICAudGhlbihjYWNoZSA9PiB7XG4gICAgICAgIHJldHVybiBjYWNoZS5hZGRBbGwoYXNzZXRzVG9DYWNoZSlcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGlmIChERUJVRykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdDYWNoZWQgYXNzZXRzOiBtYWluJywgYXNzZXRzVG9DYWNoZSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9KVxuICApXG59KVxuXG4vLyBBZnRlciB0aGUgaW5zdGFsbCBldmVudC5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignYWN0aXZhdGUnLCBldmVudCA9PiB7XG4gIGlmIChERUJVRykge1xuICAgIGNvbnNvbGUubG9nKCdbU1ddIEFjdGl2YXRlIGV2ZW50JylcbiAgfVxuXG4gIC8vIENsZWFuIHRoZSBjYWNoZXNcbiAgZXZlbnQud2FpdFVudGlsKFxuICAgIGdsb2JhbC5jYWNoZXMua2V5cygpLnRoZW4oY2FjaGVOYW1lcyA9PiB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwoXG4gICAgICAgIGNhY2hlTmFtZXMubWFwKGNhY2hlTmFtZSA9PiB7XG4gICAgICAgICAgLy8gRGVsZXRlIHRoZSBjYWNoZXMgdGhhdCBhcmUgbm90IHRoZSBjdXJyZW50IG9uZS5cbiAgICAgICAgICBpZiAoY2FjaGVOYW1lLmluZGV4T2YoQ0FDSEVfTkFNRSkgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGdsb2JhbC5jYWNoZXMuZGVsZXRlKGNhY2hlTmFtZSlcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICB9KVxuICApXG59KVxuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBldmVudCA9PiB7XG4gIHN3aXRjaCAoZXZlbnQuZGF0YS5hY3Rpb24pIHtcbiAgICBjYXNlICdza2lwV2FpdGluZyc6XG4gICAgICBpZiAoc2VsZi5za2lwV2FpdGluZykge1xuICAgICAgICBzZWxmLnNraXBXYWl0aW5nKClcbiAgICAgICAgc2VsZi5jbGllbnRzLmNsYWltKClcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrXG4gIH1cbn0pXG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignZmV0Y2gnLCBldmVudCA9PiB7XG4gIGNvbnN0IHJlcXVlc3QgPSBldmVudC5yZXF1ZXN0XG5cbiAgLy8gSWdub3JlIG5vdCBHRVQgcmVxdWVzdC5cbiAgaWYgKHJlcXVlc3QubWV0aG9kICE9PSAnR0VUJykge1xuICAgIGlmIChERUJVRykge1xuICAgICAgY29uc29sZS5sb2coYFtTV10gSWdub3JlIG5vbiBHRVQgcmVxdWVzdCAke3JlcXVlc3QubWV0aG9kfWApXG4gICAgfVxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgcmVxdWVzdFVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpXG5cbiAgLy8gSWdub3JlIGRpZmZlcmVuY2Ugb3JpZ2luLlxuICBpZiAocmVxdWVzdFVybC5vcmlnaW4gIT09IGxvY2F0aW9uLm9yaWdpbikge1xuICAgIGlmIChERUJVRykge1xuICAgICAgY29uc29sZS5sb2coYFtTV10gSWdub3JlIGRpZmZlcmVuY2Ugb3JpZ2luICR7cmVxdWVzdFVybC5vcmlnaW59YClcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCByZXNvdXJjZSA9IGdsb2JhbC5jYWNoZXMubWF0Y2gocmVxdWVzdCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgY29uc29sZS5sb2coYFtTV10gZmV0Y2ggVVJMICR7cmVxdWVzdFVybC5ocmVmfSBmcm9tIGNhY2hlYClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgfVxuXG4gICAgLy8gTG9hZCBhbmQgY2FjaGUga25vd24gYXNzZXRzLlxuICAgIHJldHVybiBmZXRjaChyZXF1ZXN0KVxuICAgICAgLnRoZW4ocmVzcG9uc2VOZXR3b3JrID0+IHtcbiAgICAgICAgaWYgKCFyZXNwb25zZU5ldHdvcmsgfHwgIXJlc3BvbnNlTmV0d29yay5vaykge1xuICAgICAgICAgIGlmIChERUJVRykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgIGBbU1ddIFVSTCBbJHtyZXF1ZXN0VXJsLnRvU3RyaW5nKCl9XSB3cm9uZyByZXNwb25zZU5ldHdvcms6ICR7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VOZXR3b3JrLnN0YXR1c1xuICAgICAgICAgICAgICB9ICR7cmVzcG9uc2VOZXR3b3JrLnR5cGV9YFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiByZXNwb25zZU5ldHdvcmtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChERUJVRykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBbU1ddIFVSTCAke3JlcXVlc3RVcmwuaHJlZn0gZmV0Y2hlZGApXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXNwb25zZUNhY2hlID0gcmVzcG9uc2VOZXR3b3JrLmNsb25lKClcblxuICAgICAgICBnbG9iYWwuY2FjaGVzXG4gICAgICAgICAgLm9wZW4oQ0FDSEVfTkFNRSlcbiAgICAgICAgICAudGhlbihjYWNoZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGUucHV0KHJlcXVlc3QsIHJlc3BvbnNlQ2FjaGUpXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYFtTV10gQ2FjaGUgYXNzZXQ6ICR7cmVxdWVzdFVybC5ocmVmfWApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcmVzcG9uc2VOZXR3b3JrXG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgLy8gVXNlciBpcyBsYW5kaW5nIG9uIG91ciBwYWdlLlxuICAgICAgICBpZiAoZXZlbnQucmVxdWVzdC5tb2RlID09PSAnbmF2aWdhdGUnKSB7XG4gICAgICAgICAgcmV0dXJuIGdsb2JhbC5jYWNoZXMubWF0Y2goJy4vJylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9KVxuICB9KVxuXG4gIGV2ZW50LnJlc3BvbmRXaXRoKHJlc291cmNlKVxufSlcbi8vIGNvbnN0IGNhY2hlTmFtZSA9ICd2MSc7XG4vLyBjb25zdCBjYWNoZUFzc2V0cyA9IFtcbi8vICAgICAnLi4vZGlzdC9tYWluLmpzJyxcbi8vICAgICAnLi4vZGlzdC9pbmRleC5odG1sJ1xuLy8gXVxuXG4vLyBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCAoZSkgPT4ge1xuXG4vLyAgICAgY29uc29sZS5sb2coXCJTZXJ2aWNlIHdvcmtlcjogaW5zdGFsbGVkXCIpO1xuXG4vLyAgICAgZS53YWl0VW50aWwoXG4vLyAgICAgICAgIGNhY2hlcy5vcGVuKGNhY2hlQXNzZXRzKVxuLy8gICAgICAgICAudGhlbihjYWNoZSA9PiB7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2UgV29ya2VyOiBDYWNoaW5nIGZpbGVzXCIpO1xuLy8gICAgICAgICAgICAgY2FjaGUuYWRkQWxsKGNhY2hlQXNzZXRzKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coXCJDYWNoZSBlcnI6IFwiICsgZXJyKSk7XG4vLyAgICAgICAgIH0pXG4vLyAgICAgICAgIC50aGVuKCgpID0+IHNlbGYuc2tpcFdhaXRpbmcoKSlcbi8vICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhcInNraXAgZXJyOiBcIiArIGVycikpXG4vLyAgICAgKVxuLy8gfSlcblxuLy8gc2VsZi5hZGRFdmVudExpc3RlbmVyKCdhY3RpdmF0ZScsIChlKSA9PiB7XG5cbi8vICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2Ugd29ya2VyOiBhY3RpdmF0ZWRcIik7XG4vLyB9KVxuXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBUkE7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/worker_cache.js\n");

/***/ })

/******/ });