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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/constants/constants.js":
/*!***************************************!*\
  !*** ./src/js/constants/constants.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Constants; });\n\n\nclass Constants {\n  constructor() {\n    this.MEDIA_QUERIES = {\n      TINIER: '(min-width: 20rem)',\n      TINY: '(min-width: 26.66667rem)',\n      SMALLER: '(min-width: 35.55556rem)',\n      SMALL: '(min-width: 42.66667rem)',\n      TABLET: '(min-width: 50rem)',\n      MEDIUM: '(min-width: 61.11111rem)',\n      LARGE: '(min-width: 66.66667rem)',\n      LARGER: '(min-width: 72.22222rem)',\n      XLARGE: '(min-width: 80.55556rem)',\n      XXLARGE: '(min-width: 88.88889rem)',\n      HUGE: '(min-width: 111.11111rem)'\n    };\n  }\n\n}\n\n//# sourceURL=webpack:///./src/js/constants/constants.js?");

/***/ }),

/***/ "./src/js/debug/checks.js":
/*!********************************!*\
  !*** ./src/js/debug/checks.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Checks; });\n/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ \"./src/js/utils/utils.js\");\n\n\n\nclass Checks {\n  constructor() {\n    this.config = {\n      BREAKPOINTS: false\n    };\n    this.Utils = new _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n\n  isJs() {\n    console.log('is js');\n    document.documentElement.classList.add('js');\n  }\n\n  hasTouchScreen() {\n    const checkDevice = () => {\n      console.log('resize');\n\n      if (this.Utils.hasTouchScreen()) {\n        document.documentElement.classList.add('is-touch');\n        document.documentElement.classList.remove('no-touch');\n      } else {\n        document.documentElement.classList.add('no-touch');\n        document.documentElement.classList.remove('is-touch');\n      }\n    };\n\n    window.addEventListener('resize', checkDevice);\n    checkDevice();\n  }\n\n  showBreakpoints() {\n    if (this.config.BREAKPOINTS) {\n      console.log('showing breakpoints');\n      document.querySelector('body').classList.add('show-breakpoints');\n\n      const getWidth = () => {\n        document.querySelector('body').setAttribute('data-width', window.innerWidth + 'px');\n      };\n\n      window.addEventListener('resize', getWidth);\n      getWidth();\n    }\n  }\n\n  init() {\n    this.isJs();\n    this.hasTouchScreen();\n    this.showBreakpoints();\n  }\n\n}\n\n//# sourceURL=webpack:///./src/js/debug/checks.js?");

/***/ }),

/***/ "./src/js/debug/debug.js":
/*!*******************************!*\
  !*** ./src/js/debug/debug.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Debug; });\n\n\nclass Debug {\n  constructor() {\n    this.config = {\n      DEBUG: true\n    };\n  }\n\n  debugControl() {\n    if (!this.config.DEBUG) {\n      this.addCredits();\n      if (!window.console) window.console = {};\n      var methods = ['log', 'debug', 'warn', 'info'];\n\n      for (var i = 0; i < methods.length; i++) {\n        console[methods[i]] = function () {};\n      }\n    }\n  }\n\n  addCredits() {\n    console.log('\\n\\n Design by KinderGarten', 'http://somoskindergarten.com', '\\n\\n');\n    console.log('\\n\\n Code by Iago Barreiro', 'https://iagobarreiro.com', '\\n\\n');\n  }\n\n  init() {\n    this.debugControl();\n  }\n\n}\n\n//# sourceURL=webpack:///./src/js/debug/debug.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _debug_debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debug/debug */ \"./src/js/debug/debug.js\");\n/* harmony import */ var _debug_checks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debug/checks */ \"./src/js/debug/checks.js\");\n/* harmony import */ var _sidemenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidemenu */ \"./src/js/sidemenu.js\");\n/* src/app.js */\n\n\n\n // import Cursor from './cursor/cursor'\n// import Videos from './videos/videos'\n// import Slider from './slider'\n// import Reveal from './reveal'\n\n // import Share from './share'\n// import LazyLoad from './lazy-load/lazy-load'\n// import Overlay from './overlay'\n\nconst initFun = () => {\n  new _debug_debug__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().init();\n  new _debug_checks__WEBPACK_IMPORTED_MODULE_1__[\"default\"]().init(); // new Overlay().init()\n  // new Slider().init()\n  // new Reveal().init()\n\n  new _sidemenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"]().init(); // new Share().init()\n  // new Cursor().init()\n  // new Videos().init()\n  // new LazyLoad().init()\n};\n\nfunction documentReady(fn) {\n  if (document.readyState !== 'loading') {\n    fn();\n  } else if (document.addEventListener) {\n    document.addEventListener('DOMContentLoaded', fn);\n    console.log('Ready!');\n  } else {\n    document.attachEvent('onreadystatechange', function () {\n      if (document.readyState !== 'loading') {\n        fn();\n      }\n    });\n  }\n}\n\ndocumentReady(initFun);\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/sidemenu.js":
/*!****************************!*\
  !*** ./src/js/sidemenu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Sidemenu; });\n\n\nclass Sidemenu {\n  constructor() {\n    this.config = {};\n    this.trigger = document.querySelector('.navbar-toggler'), this.body = document.body, this.content = document.querySelector('main'), this.cross = document.querySelector('.cross');\n    this.navItems = document.querySelectorAll('.nav-link--sidemenu');\n    this.sidemenu = document.querySelector('.side-menu');\n  }\n\n  init() {\n    if (this.sidemenu) {\n      this.trigger.addEventListener('click', () => {\n        this.body.classList.add('open');\n        this.sidemenu.classList.remove('hidden');\n      });\n      this.content.addEventListener('click', () => {\n        this.body.classList.remove('open');\n      });\n      this.cross.addEventListener('click', () => {\n        this.body.classList.remove('open');\n      });\n      this.navItems.forEach((item, i) => {\n        item.addEventListener('click', () => {\n          this.body.classList.remove('open');\n        });\n      });\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./src/js/sidemenu.js?");

/***/ }),

/***/ "./src/js/utils/utils.js":
/*!*******************************!*\
  !*** ./src/js/utils/utils.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Utils; });\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ \"./src/js/constants/constants.js\");\n\n\n\nclass Utils {\n  reloadOnResize() {\n    window.onresize = function () {\n      location.reload();\n    };\n  }\n\n  isElementInViewport(el) {\n    // Special bonus for those using jQuery\n    if (typeof jQuery === \"function\" && el instanceof jQuery) {\n      el = el[0];\n    }\n\n    var rect = el.getBoundingClientRect();\n    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&\n    /* or $(window).height() */\n    rect.right <= (window.innerWidth || document.documentElement.clientWidth)\n    /* or $(window).width() */\n    ;\n  }\n\n  hasTouchScreen() {\n    var hasTouchScreen = false;\n\n    if (\"maxTouchPoints\" in navigator) {\n      hasTouchScreen = navigator.maxTouchPoints > 0;\n    } else if (\"msMaxTouchPoints\" in navigator) {\n      hasTouchScreen = navigator.msMaxTouchPoints > 0;\n    } else {\n      var mQ = window.matchMedia && matchMedia(\"(pointer:coarse)\");\n\n      if (mQ && mQ.media === \"(pointer:coarse)\") {\n        hasTouchScreen = !!mQ.matches;\n      } else if ('orientation' in window) {\n        hasTouchScreen = true; // deprecated, but good fallback\n      } else {\n        // Only as a last resort, fall back to user agent sniffing\n        var UA = navigator.userAgent;\n        hasTouchScreen = /\\b(BlackBerry|webOS|iPhone|IEMobile)\\b/i.test(UA) || /\\b(Android|Windows Phone|iPad|iPod)\\b/i.test(UA);\n      }\n    }\n\n    return hasTouchScreen;\n  }\n\n  throttle(callback, wait, context = this) {\n    let timeout = null;\n    let callbackArgs = null;\n\n    const later = () => {\n      callback.apply(context, callbackArgs);\n      timeout = null;\n    };\n\n    return function () {\n      if (!timeout) {\n        callbackArgs = arguments;\n        timeout = setTimeout(later, wait);\n      }\n    };\n  }\n\n  debounce(callback, wait, context = this) {\n    let timeout = null;\n    let callbackArgs = null;\n\n    const later = () => callback.apply(context, callbackArgs);\n\n    return function () {\n      callbackArgs = arguments;\n      clearTimeout(timeout);\n      timeout = setTimeout(later, wait);\n    };\n  }\n\n  randomNum(min, max) {\n    return Math.floor(Math.random() * (max - min + 1) + min);\n  }\n\n  getScrollDir(downCb, upCb) {\n    let lastScrollTop = 0;\n\n    const getScrollDir = () => {\n      let st = window.pageYOffset || document.documentElement.scrollTop;\n\n      if (st > lastScrollTop) {\n        if (typeof downCb === 'function') {\n          downCb();\n        }\n      } else {\n        if (typeof upCb === 'function') {\n          upCb();\n        }\n      }\n\n      lastScrollTop = st;\n    };\n\n    const throttledFn = this.throttle(() => {\n      getScrollDir();\n    }, 10);\n    window.addEventListener('scroll', throttledFn);\n  } // randomId = () => {\n  //   let text = '';\n  //   const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';\n  //\n  //   for ( let i=0; i < 5; i++ )\n  //     text += possible.charAt(Math.floor(Math.random() * possible.length));\n  //\n  //   return text;\n  // }\n\n\n  matchmediaHandler(mqName, matchFun, unmatchFun) {\n    const mq = new _constants_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().MEDIA_QUERIES[mqName];\n    const mql = window.matchMedia(mq);\n\n    const mediaQueryHandler = mql => {\n      if (mql.matches) {\n        if (typeof matchFun === 'function') {\n          matchFun();\n        }\n      } else {\n        if (typeof unmatchFun === 'function') {\n          unmatchFun();\n        }\n      }\n    };\n\n    mql.addListener(mediaQueryHandler);\n    mediaQueryHandler(mql);\n  }\n\n  customWindowEvent(name, data) {\n    let event;\n\n    (function () {\n      if (typeof window.CustomEvent === 'function') return false;\n\n      function CustomEvent(event, params) {\n        params = params || {\n          bubbles: false,\n          cancelable: false,\n          detail: undefined\n        };\n        var evt = document.createEvent('CustomEvent');\n        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);\n        return evt;\n      }\n\n      CustomEvent.prototype = window.Event.prototype;\n      window.CustomEvent = CustomEvent;\n    })();\n\n    if (window.CustomEvent) {\n      let detail;\n\n      if (data) {\n        detail = {\n          detail: data\n        };\n      }\n\n      event = new CustomEvent(name, detail);\n    } else {\n      event = document.createEvent('CustomEvent');\n      event.initCustomEvent(name, true, true, data);\n    }\n\n    window.dispatchEvent(event);\n  }\n\n  updatePswpEvent() {\n    let event;\n\n    (function () {\n      if (typeof window.CustomEvent === 'function') return false;\n\n      function CustomEvent(event, params) {\n        params = params || {\n          bubbles: false,\n          cancelable: false,\n          detail: undefined\n        };\n        var evt = document.createEvent('CustomEvent');\n        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);\n        return evt;\n      }\n\n      CustomEvent.prototype = window.Event.prototype;\n      window.CustomEvent = CustomEvent;\n    })();\n\n    if (window.CustomEvent) {\n      event = new CustomEvent('update-pswp');\n    } else {\n      event = document.createEvent('CustomEvent');\n      event.initCustomEvent('update-pswp', true, true);\n    }\n\n    window.dispatchEvent(event);\n  } // https://gist.github.com/kflorence/3086552\n\n\n  scrollbarWidth() {\n    const inner = document.createElement('p');\n    inner.style.width = '100%';\n    inner.style.height = '200px';\n    const outer = document.createElement('div');\n    outer.style.position = 'absolute';\n    outer.style.top = '0px';\n    outer.style.left = '0px';\n    outer.style.visibility = 'hidden';\n    outer.style.width = '200px';\n    outer.style.height = '150px';\n    outer.style.overflow = 'hidden';\n    outer.appendChild(inner);\n    document.body.appendChild(outer);\n    const w1 = inner.offsetWidth;\n    outer.style.overflow = 'scroll';\n    let w2 = inner.offsetWidth;\n\n    if (w1 === w2) {\n      w2 = outer.clientWidth;\n    }\n\n    document.body.removeChild(outer);\n    return w1 - w2;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/js/utils/utils.js?");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/styles.scss?");

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/js/main.js ./src/scss/styles.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/main.js */\"./src/js/main.js\");\nmodule.exports = __webpack_require__(/*! ./src/scss/styles.scss */\"./src/scss/styles.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/js/main.js_./src/scss/styles.scss?");

/***/ })

/******/ });