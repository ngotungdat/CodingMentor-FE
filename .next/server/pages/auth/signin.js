module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/auth/signin.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.asPath || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  true ? path => {
  if (/\.[^/]+\/?$/.test(path)) {
    return removePathTrailingSlash(path);
  } else if (path.endsWith('/')) {
    return path;
  } else {
    return path + '/';
  }
} : undefined;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;

  try {
    base = new URL(currentPath, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.asPath, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.asPath, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/apiBase/course-detail/course-detail.ts":
/*!****************************************************!*\
  !*** ./src/apiBase/course-detail/course-detail.ts ***!
  \****************************************************/
/*! exports provided: courseDetailApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "courseDetailApi", function() { return courseDetailApi; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = '/api/CourseSchedules/';
const courseDetailApi = {
  // Lấy tất cả data
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  },

  // Cập nhật
  update(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  },

  aheadSchedule(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get('/api/luiLichHoc', {
      params
    });
  }

};

/***/ }),

/***/ "./src/apiBase/course-detail/document-schedule.ts":
/*!********************************************************!*\
  !*** ./src/apiBase/course-detail/document-schedule.ts ***!
  \********************************************************/
/*! exports provided: documentScheduleApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "documentScheduleApi", function() { return documentScheduleApi; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = '/api/DocumentOfCourse/';
const documentScheduleApi = {
  // Cập nhật
  add(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data);
  }

};

/***/ }),

/***/ "./src/apiBase/course-detail/student-list.ts":
/*!***************************************************!*\
  !*** ./src/apiBase/course-detail/student-list.ts ***!
  \***************************************************/
/*! exports provided: studentListInCourseApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studentListInCourseApi", function() { return studentListInCourseApi; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = '/api/StudentInCourse/';
const studentListInCourseApi = {
  // Lấy tất cả data
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  }

};

/***/ }),

/***/ "./src/apiBase/course-online-detail/available-day.ts":
/*!***********************************************************!*\
  !*** ./src/apiBase/course-online-detail/available-day.ts ***!
  \***********************************************************/
/*! exports provided: courseOnlineDetailAvailableDayApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "courseOnlineDetailAvailableDayApi", function() { return courseOnlineDetailAvailableDayApi; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = '/api/AvailableDateOnline/';
const courseOnlineDetailAvailableDayApi = {
  // Lấy tất cả data
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  }

};

/***/ }),

/***/ "./src/apiBase/course-online/lesson.ts":
/*!*********************************************!*\
  !*** ./src/apiBase/course-online/lesson.ts ***!
  \*********************************************/
/*! exports provided: lessonOnlineApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lessonOnlineApi", function() { return lessonOnlineApi; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = '/api/LessonOnline';
const lessonOnlineApi = {
  // Lấy tất cả data
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  }

};

/***/ }),

/***/ "./src/apiBase/course-online/study-day.ts":
/*!************************************************!*\
  !*** ./src/apiBase/course-online/study-day.ts ***!
  \************************************************/
/*! exports provided: studyDayOnlineApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studyDayOnlineApi", function() { return studyDayOnlineApi; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = '/api/StudyDayOnline';
const studyDayOnlineApi = {
  // Lấy tất cả data
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  }

};

/***/ }),

/***/ "./src/apiBase/course/check-room.ts":
/*!******************************************!*\
  !*** ./src/apiBase/course/check-room.ts ***!
  \******************************************/
/*! exports provided: checkRoomApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkRoomApi", function() { return checkRoomApi; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = '/api/CheckRoom/';
const checkRoomApi = {
  // Lấy tất cả data
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  }

};

/***/ }),

/***/ "./src/apiBase/course/check-study-time.ts":
/*!************************************************!*\
  !*** ./src/apiBase/course/check-study-time.ts ***!
  \************************************************/
/*! exports provided: checkStudyTimeApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkStudyTimeApi", function() { return checkStudyTimeApi; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = '/api/CheckStudyTime/';
const checkStudyTimeApi = {
  // Lấy tất cả data
  check(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data);
  }

};

/***/ }),

/***/ "./src/apiBase/course/check-teacher.ts":
/*!*********************************************!*\
  !*** ./src/apiBase/course/check-teacher.ts ***!
  \*********************************************/
/*! exports provided: checkTeacherApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkTeacherApi", function() { return checkTeacherApi; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = '/api/CheckTeacher/';
const checkTeacherApi = {
  // Lấy tất cả data
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  },

  // Lấy tất cả data - edit khóa học
  getAllTeacherAvailable(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get('/api/TeacherAvailable', {
      params
    });
  }

};

/***/ }),

/***/ "./src/apiBase/course/course-of-student-price.ts":
/*!*******************************************************!*\
  !*** ./src/apiBase/course/course-of-student-price.ts ***!
  \*******************************************************/
/*! exports provided: courseOfStudentPriceApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "courseOfStudentPriceApi", function() { return courseOfStudentPriceApi; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = '/api/CourseOfStudentPrice';
const courseOfStudentPriceApi = {
  // Lấy tất cả data
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  },

  // Thêm mới data
  add(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data);
  }

};

/***/ }),

/***/ "./src/apiBase/course/course.ts":
/*!**************************************!*\
  !*** ./src/apiBase/course/course.ts ***!
  \**************************************/
/*! exports provided: courseApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "courseApi", function() { return courseApi; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = '/api/Course/';
const courseApi = {
  // Lấy tất cả data
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  },

  // Thêm mới data
  add(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data);
  },

  // update mới data
  update(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  },

  getById(id) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${url}${id}`);
  }

};

/***/ }),

/***/ "./src/apiBase/course/lesson.ts":
/*!**************************************!*\
  !*** ./src/apiBase/course/lesson.ts ***!
  \**************************************/
/*! exports provided: lessonApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lessonApi", function() { return lessonApi; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");
/* harmony import */ var _appConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/appConfig */ "./src/appConfig.js");


const url = '/api/Lesson/';
const lessonApi = {
  // Lấy tất cả data
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  },

  callAuto(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(`${_appConfig__WEBPACK_IMPORTED_MODULE_1__["default"].API_URL}/api/Push`, null);
  },

  callAutoMinute(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(`${_appConfig__WEBPACK_IMPORTED_MODULE_1__["default"].API_URL}/api/PushOneMinute`, null);
  }

};

/***/ }),

/***/ "./src/apiBase/course/rollup.ts":
/*!**************************************!*\
  !*** ./src/apiBase/course/rollup.ts ***!
  \**************************************/
/*! exports provided: rollUpApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rollUpApi", function() { return rollUpApi; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = '/api/RollUp/';
const rollUpApi = {
  // Lấy tất cả data
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  }

};

/***/ }),

/***/ "./src/apiBase/course/study-day.ts":
/*!*****************************************!*\
  !*** ./src/apiBase/course/study-day.ts ***!
  \*****************************************/
/*! exports provided: studyDayApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studyDayApi", function() { return studyDayApi; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = '/api/StudyDay/';
const studyDayApi = {
  // Lấy tất cả data
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  }

};

/***/ }),

/***/ "./src/apiBase/customer/contract/contract-customer-list.ts":
/*!*****************************************************************!*\
  !*** ./src/apiBase/customer/contract/contract-customer-list.ts ***!
  \*****************************************************************/
/*! exports provided: contractCustomerListApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contractCustomerListApi", function() { return contractCustomerListApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const url = "/api/ContractOfStudent";

class ContractCustomerList {
  constructor() {
    _defineProperty(this, "getAll", Params => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params: Params
    }));

    _defineProperty(this, "getDetail", id => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${url}/${id}`));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data, {}));
  }

}

const contractCustomerListApi = new ContractCustomerList();

/***/ }),

/***/ "./src/apiBase/customer/finance/finance-cashier-invoice.ts":
/*!*****************************************************************!*\
  !*** ./src/apiBase/customer/finance/finance-cashier-invoice.ts ***!
  \*****************************************************************/
/*! exports provided: invoiceApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invoiceApi", function() { return invoiceApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const url = '/api/Invoice';

class Invoice {
  constructor() {
    _defineProperty(this, "getAll", Params => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params: Params
    }));

    _defineProperty(this, "getDetail", id => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${url}/${id}`));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data, {}));

    _defineProperty(this, "export", id => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`/api/ExportInvoice/${id}`));

    _defineProperty(this, "sendMail", id => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(`api/SendMailInvoice/${id}`));
  }

}

const invoiceApi = new Invoice();

/***/ }),

/***/ "./src/apiBase/customer/finance/finance-cashier-payment.ts":
/*!*****************************************************************!*\
  !*** ./src/apiBase/customer/finance/finance-cashier-payment.ts ***!
  \*****************************************************************/
/*! exports provided: voucherApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "voucherApi", function() { return voucherApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const url = '/api/Voucher';

class Voucher {
  constructor() {
    _defineProperty(this, "getAll", Params => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params: Params
    }));

    _defineProperty(this, "getDetail", id => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${url}/${id}`));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data, {}));

    _defineProperty(this, "export", id => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`/api/ExportVoucher/${id}`));

    _defineProperty(this, "sendMail", id => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(`api/SendMailVoucher/${id}`));
  }

}

const voucherApi = new Voucher();

/***/ }),

/***/ "./src/apiBase/customer/finance/finance-cashier-refund.ts":
/*!****************************************************************!*\
  !*** ./src/apiBase/customer/finance/finance-cashier-refund.ts ***!
  \****************************************************************/
/*! exports provided: refundsApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refundsApi", function() { return refundsApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const url = '/api/Refunds';

class Refunds {
  constructor() {
    _defineProperty(this, "getAll", Params => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params: Params
    }));

    _defineProperty(this, "getDetail", id => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${url}/${id}`));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data, {}));
  }

}

const refundsApi = new Refunds();

/***/ }),

/***/ "./src/apiBase/customer/parents/parents.ts":
/*!*************************************************!*\
  !*** ./src/apiBase/customer/parents/parents.ts ***!
  \*************************************************/
/*! exports provided: parentsApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parentsApi", function() { return parentsApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const url = '/api/Parents';

class ParentsApi {
  constructor() {
    _defineProperty(this, "getAll", Params => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params: Params
    }));

    _defineProperty(this, "getDetail", id => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${url}/${id}`));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data, {}));
  }

}

const parentsApi = new ParentsApi();

/***/ }),

/***/ "./src/apiBase/customer/service/service-customer-exam-result.ts":
/*!**********************************************************************!*\
  !*** ./src/apiBase/customer/service/service-customer-exam-result.ts ***!
  \**********************************************************************/
/*! exports provided: serviceCustomerExamResultApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serviceCustomerExamResultApi", function() { return serviceCustomerExamResultApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class ServiceCustomerExamResult {
  constructor() {
    _defineProperty(this, "getAll", todoApi => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get("/api/StudentExamOfServiceResult", {
      params: todoApi
    }));

    _defineProperty(this, "getWithID", ID => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`/api/StudentExamOfServiceResult/${ID}`));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post("/api/StudentExamOfServiceResult/", data, {}));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put("/api/StudentExamOfServiceResult/", data, {}));
  }

}

const serviceCustomerExamResultApi = new ServiceCustomerExamResult();

/***/ }),

/***/ "./src/apiBase/customer/service/service-customer-exam.ts":
/*!***************************************************************!*\
  !*** ./src/apiBase/customer/service/service-customer-exam.ts ***!
  \***************************************************************/
/*! exports provided: serviceCustomerExamApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serviceCustomerExamApi", function() { return serviceCustomerExamApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class ServiceCustomerExam {
  constructor() {
    _defineProperty(this, "getAll", todoApi => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get("/api/StudentExamOfService", {
      params: todoApi
    }));

    _defineProperty(this, "getWithID", ID => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`/api/StudentExamOfService/${ID}`));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post("/api/StudentExamOfService/", data, {}));
  }

}

const serviceCustomerExamApi = new ServiceCustomerExam();

/***/ }),

/***/ "./src/apiBase/customer/service/test-customer-point.tsx":
/*!**************************************************************!*\
  !*** ./src/apiBase/customer/service/test-customer-point.tsx ***!
  \**************************************************************/
/*! exports provided: testCustomerPointApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testCustomerPointApi", function() { return testCustomerPointApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const url = "/api/ExamAppointmentResult/";

class TestCustomerPointApi {
  constructor() {
    _defineProperty(this, "getAll", todoApi => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params: todoApi
    }));

    _defineProperty(this, "getWithID", ID => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url + ID));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data, {}));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data, {}));
  }

}

const testCustomerPointApi = new TestCustomerPointApi();

/***/ }),

/***/ "./src/apiBase/customer/service/test-customer.ts":
/*!*******************************************************!*\
  !*** ./src/apiBase/customer/service/test-customer.ts ***!
  \*******************************************************/
/*! exports provided: testCustomerApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testCustomerApi", function() { return testCustomerApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const url = '/api/ExamAppointment/';

class TestCustomerApi {
  constructor() {
    _defineProperty(this, "getAll", todoApi => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params: todoApi
    }));

    _defineProperty(this, "getWithID", ID => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url + ID));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data, {}));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data, {}));
  }

}

const testCustomerApi = new TestCustomerApi();

/***/ }),

/***/ "./src/apiBase/customer/student/course-student.ts":
/*!********************************************************!*\
  !*** ./src/apiBase/customer/student/course-student.ts ***!
  \********************************************************/
/*! exports provided: courseStudentApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "courseStudentApi", function() { return courseStudentApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const url = "/api/CourseOfStudent";

class CourseStudentApi {
  constructor() {
    _defineProperty(this, "getAll", Params => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params: Params
    }));

    _defineProperty(this, "getDetail", id => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${url}/${id}`));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data, {}));
  }

}

const courseStudentApi = new CourseStudentApi();

/***/ }),

/***/ "./src/apiBase/customer/student/exam-appointment-result.ts":
/*!*****************************************************************!*\
  !*** ./src/apiBase/customer/student/exam-appointment-result.ts ***!
  \*****************************************************************/
/*! exports provided: examAppointmentResultApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "examAppointmentResultApi", function() { return examAppointmentResultApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");

const url = '/api/ExamAppointmentResult/';
const examAppointmentResultApi = {
  // Lấy tất cả data
  getAll(params) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  },

  // Lấy theo id
  getById(id) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${url}${id}`);
  },

  // Thêm mới data
  add(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data);
  },

  // Cập nhật data
  update(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  },

  // Xóa data
  delete(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  },

  getResultExam(params) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get('/api/ExamAppointmentResultDetail', {
      params
    });
  },

  updatePoint(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put('/api/ExamAppointmentExerciseStudent', data);
  },

  // Kiểm tra đề hẹn test này đã được làm hay chưa
  checkIsTested(id) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`/api/ExamAppointmentResultcheckResult/${id}`);
  }

};

/***/ }),

/***/ "./src/apiBase/customer/student/exam-coming-soon.ts":
/*!**********************************************************!*\
  !*** ./src/apiBase/customer/student/exam-coming-soon.ts ***!
  \**********************************************************/
/*! exports provided: examComingSoonApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "examComingSoonApi", function() { return examComingSoonApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class ExamComingSoon {
  constructor() {
    _defineProperty(this, "getAll", todoApi => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get("/api/ExamComingSoon", {
      params: todoApi
    }));
  }

}

const examComingSoonApi = new ExamComingSoon();

/***/ }),

/***/ "./src/apiBase/customer/student/student-advise.ts":
/*!********************************************************!*\
  !*** ./src/apiBase/customer/student/student-advise.ts ***!
  \********************************************************/
/*! exports provided: studentAdviseApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studentAdviseApi", function() { return studentAdviseApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const url = '/api/CustomerConsultation/';

class StudentAdviseApi {
  constructor() {
    _defineProperty(this, "getAll", todoApi => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params: todoApi
    }));

    _defineProperty(this, "getWithID", ID => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url + ID));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data, {}));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data, {}));

    _defineProperty(this, "addNote", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post('/api/NoteOfCustomer', data, {}));

    _defineProperty(this, "updateNote", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put('/api/NoteOfCustomer', data, {}));

    _defineProperty(this, "sendEmail", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post('/api/SendMailCustomer', data, {}));
  }

}

const studentAdviseApi = new StudentAdviseApi();

/***/ }),

/***/ "./src/apiBase/customer/student/student-change-course.ts":
/*!***************************************************************!*\
  !*** ./src/apiBase/customer/student/student-change-course.ts ***!
  \***************************************************************/
/*! exports provided: studentChangeCourseApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studentChangeCourseApi", function() { return studentChangeCourseApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const url = "/api/CourseOfStudentChange/";

class StudentChangeCourseApi {
  constructor() {
    _defineProperty(this, "getAll", todoApi => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params: todoApi
    }));

    _defineProperty(this, "getWithID", ID => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url + ID));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data, {}));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data, {}));

    _defineProperty(this, "changeCourse", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data, {}));
  }

}

const studentChangeCourseApi = new StudentChangeCourseApi();

/***/ }),

/***/ "./src/apiBase/customer/student/student-change.ts":
/*!********************************************************!*\
  !*** ./src/apiBase/customer/student/student-change.ts ***!
  \********************************************************/
/*! exports provided: studentChangeApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studentChangeApi", function() { return studentChangeApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const url = "/api/CounselorsChange/";

class StudentChangeApi {
  constructor() {
    _defineProperty(this, "getAll", todoApi => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params: todoApi
    }));

    _defineProperty(this, "getWithID", ID => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url + ID));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data, {}));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data, {}));
  }

}

const studentChangeApi = new StudentChangeApi();

/***/ }),

/***/ "./src/apiBase/customer/student/student-list.ts":
/*!******************************************************!*\
  !*** ./src/apiBase/customer/student/student-list.ts ***!
  \******************************************************/
/*! exports provided: studentApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studentApi", function() { return studentApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class StudentApi {
  constructor() {
    _defineProperty(this, "getAll", todoApi => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get('/api/Student/', {
      params: todoApi
    }));

    _defineProperty(this, "getWithID", ID => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`/api/Student/${ID}`));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post('/api/Student', data, {}));

    _defineProperty(this, "createAccount", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post('/api/CreateAccount', data, {}));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put('/api/Student/', data, {}));

    _defineProperty(this, "uploadImage", file => {
      let fData = new FormData();
      fData.append('File', file);
      console.log('FDATA: ', fData);
      return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post('/api/UserInformation/uploadImage', fData, {});
    });

    _defineProperty(this, "getCourseOfStudentDetail", ID => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`/api/GetCourseAndTeacherOfStudent/${ID}`));
  }

}

const studentApi = new StudentApi();

/***/ }),

/***/ "./src/apiBase/customer/student/warning.ts":
/*!*************************************************!*\
  !*** ./src/apiBase/customer/student/warning.ts ***!
  \*************************************************/
/*! exports provided: warningApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningApi", function() { return warningApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Warning {
  constructor() {
    _defineProperty(this, "getAll", todoApi => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get("/api/Warning", {
      params: todoApi
    }));
  }

}

const warningApi = new Warning();

/***/ }),

/***/ "./src/apiBase/doing-test/doing-test.ts":
/*!**********************************************!*\
  !*** ./src/apiBase/doing-test/doing-test.ts ***!
  \**********************************************/
/*! exports provided: doingTestApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doingTestApi", function() { return doingTestApi; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = "/api/SetPackageResult";
const doingTestApi = {
  // Lấy tất cả data
  // getAll(params) {
  // 	return instance.get<IApiResultData<IDoingTest[]>>(url, {
  // 		params,
  // 	});
  // },
  // Lấy theo ID
  getByID(ID) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${url}/${ID}`);
  },

  // Thêm mới data
  add(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data);
  } // Cập nhật data
  // update(data) {
  // 	return instance.put(url, data);
  // },
  // Xóa data
  // delete(data) {
  // 	return instance.put(url, data);
  // },


};

/***/ }),

/***/ "./src/apiBase/exam-detail/exam-detail.ts":
/*!************************************************!*\
  !*** ./src/apiBase/exam-detail/exam-detail.ts ***!
  \************************************************/
/*! exports provided: examDetailApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "examDetailApi", function() { return examDetailApi; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = '/api/ExamTopicDetail/';
const examDetailApi = {
  // Lấy tất cả data
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  },

  // Lấy theo ID
  getByID(ID) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${url}${ID}`);
  },

  // Thêm mới data
  add(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data);
  },

  // Cập nhật data
  update(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  },

  // Xóa data
  delete(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  },

  // Tạo câu hỏi tự động
  createAuto(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post('api/AutoCreateExamtopicDetail', data);
  },

  // Đổi vị trí
  changePosition(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put('api/UpdateIndex', data);
  }

};

/***/ }),

/***/ "./src/apiBase/exam/exam-topic.ts":
/*!****************************************!*\
  !*** ./src/apiBase/exam/exam-topic.ts ***!
  \****************************************/
/*! exports provided: examTopicApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "examTopicApi", function() { return examTopicApi; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = "/api/ExamTopic/";
const examTopicApi = {
  // Lấy tất cả data
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  },

  // Lấy theo ID
  getByID(ID) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${url}${ID}`);
  },

  // Thêm mới data
  add(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data);
  },

  // Cập nhật data
  update(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  },

  // Xóa data
  delete(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  }

};

/***/ }),

/***/ "./src/apiBase/exercise/exercise.ts":
/*!******************************************!*\
  !*** ./src/apiBase/exercise/exercise.ts ***!
  \******************************************/
/*! exports provided: exerciseApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exerciseApi", function() { return exerciseApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const url = "/api/Exercise";

class ExerciseApi {
  constructor() {
    _defineProperty(this, "getAll", params => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    }));
  }

  // Thêm mới data
  add(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data);
  } // Cập nhật data


  update(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  } // Xóa data


  delete(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  } // Import Excel


  importExcel(file) {
    let fData = new FormData();
    fData.append("File", file);
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post("/api/ImportExercise", fData, {});
  }

}

const exerciseApi = new ExerciseApi();

/***/ }),

/***/ "./src/apiBase/exercise/exerciseGroup.ts":
/*!***********************************************!*\
  !*** ./src/apiBase/exercise/exerciseGroup.ts ***!
  \***********************************************/
/*! exports provided: exerciseGroupApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exerciseGroupApi", function() { return exerciseGroupApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const url = '/api/ExerciseGroup';

class ExerciseGroupApi {
  constructor() {
    _defineProperty(this, "getAll", params => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    }));

    _defineProperty(this, "getWithID", ID => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${url}/${ID}`));
  }

  // Thêm mới data
  add(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data);
  } // Cập nhật data


  update(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  } // Xóa data


  delete(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  } // Upload file


  UploadAudio(data) {
    let formdata = new FormData();
    formdata.append('file', data);
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post('/api/uploadfileExercise', formdata);
  }

}

const exerciseGroupApi = new ExerciseGroupApi();

/***/ }),

/***/ "./src/apiBase/feed-back/index.ts":
/*!****************************************!*\
  !*** ./src/apiBase/feed-back/index.ts ***!
  \****************************************/
/*! exports provided: FeedbackApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackApi", function() { return FeedbackApi; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = '/api/Feedback';
const FeedbackApi = {
  // Lấy tất cả data
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  },

  add(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data);
  },

  update(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  },

  getByID(ID) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${url}/${ID}`);
  }

};

/***/ }),

/***/ "./src/apiBase/index.ts":
/*!******************************!*\
  !*** ./src/apiBase/index.ts ***!
  \******************************/
/*! exports provided: areaApi, branchApi, contractApi, curriculumApi, curriculumDetailApi, dayOffApi, discountApi, districtApi, gradeApi, jobApi, programApi, puroseApi, roomApi, serviceApi, sourceInfomationApi, staffSalaryApi, studyTimeApi, subjectApi, studentApi, wardApi, supplierApi, userInformationApi, teacherApi, lessonApi, studyDayApi, checkStudyTimeApi, parentsApi, staffApi, notificationApi, rulesApi, examTopicApi, consultationStatusApi, testCustomerPointApi, configZoomApi, scheduleZoomApi, zoomRoomApi, priceFixExamApi, payFixExamApi, payFixListApi, packageResultApi, exerciseGroupApi, checkRoomApi, checkTeacherApi, studentAdviseApi, testCustomerApi, userApi, examComingSoonApi, warningApi, courseApi, courseDetailApi, studentListInCourseApi, studentChangeApi, studentChangeCourseApi, serviceCustomerExamApi, serviceCustomerExamResultApi, refundsApi, contractCustomerListApi, voucherApi, invoiceApi, examAppointmentResultApi, checkBranchScheduleStudy, checkTeacherScheduleStudy, programDetailPointColumnApi, courseStudentApi, rollUpApi, courseOfStudentPriceApi, configApi, newsFeedApi, newsFeedLikeApi, newsFeedCommentApi, newsFeedCommentReplyApi, userBranchApi, groupNewsFeedApi, userGroupNewsFeedApi, exerciseApi, packageApi, staffOfTaskGroupApi, taskApi, taskGroupApi, documentScheduleApi, packageStudentApi, backgroundNewsFeedApi, studyDayOnlineApi, lessonOnlineApi, courseOnlineDetailAvailableDayApi, packageExaminerApi, examDetailApi, saleCampaignApi, saleCampaignDetailApi, saleSalaryApi, salerTotalRevenueApi, salerRevenueApi, VideoCourseListApi, DonePayApi, VideoCourseOfStudent, VideoCourseInteraction, resetPasswordApi, doingTestApi, FeedbackApi, oneSignalAPI, studyRoleApi, comingCourseApi, createSelfCourse, getScheduleSelfCourse, checkStudyTimeSelfCourse, checkTeacherSelfCourse, updateScheduleSelfCourse, cancelScheduleSelfCourse, getRangeTimeSelfCourse, setRangeTimeSelfCourse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _options_area__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options/area */ "./src/apiBase/options/area.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "areaApi", function() { return _options_area__WEBPACK_IMPORTED_MODULE_0__["areaApi"]; });

/* harmony import */ var _options_branch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options/branch */ "./src/apiBase/options/branch.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "branchApi", function() { return _options_branch__WEBPACK_IMPORTED_MODULE_1__["branchApi"]; });

/* harmony import */ var _options_contract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options/contract */ "./src/apiBase/options/contract.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contractApi", function() { return _options_contract__WEBPACK_IMPORTED_MODULE_2__["contractApi"]; });

/* harmony import */ var _options_curriculum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./options/curriculum */ "./src/apiBase/options/curriculum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curriculumApi", function() { return _options_curriculum__WEBPACK_IMPORTED_MODULE_3__["curriculumApi"]; });

/* harmony import */ var _options_curriculum_detail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./options/curriculum-detail */ "./src/apiBase/options/curriculum-detail.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curriculumDetailApi", function() { return _options_curriculum_detail__WEBPACK_IMPORTED_MODULE_4__["curriculumDetailApi"]; });

/* harmony import */ var _options_day_off__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./options/day-off */ "./src/apiBase/options/day-off.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dayOffApi", function() { return _options_day_off__WEBPACK_IMPORTED_MODULE_5__["dayOffApi"]; });

/* harmony import */ var _options_discount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./options/discount */ "./src/apiBase/options/discount.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "discountApi", function() { return _options_discount__WEBPACK_IMPORTED_MODULE_6__["discountApi"]; });

/* harmony import */ var _options_district__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./options/district */ "./src/apiBase/options/district.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "districtApi", function() { return _options_district__WEBPACK_IMPORTED_MODULE_7__["districtApi"]; });

/* harmony import */ var _options_grade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./options/grade */ "./src/apiBase/options/grade.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gradeApi", function() { return _options_grade__WEBPACK_IMPORTED_MODULE_8__["gradeApi"]; });

/* harmony import */ var _options_job__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./options/job */ "./src/apiBase/options/job.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jobApi", function() { return _options_job__WEBPACK_IMPORTED_MODULE_9__["jobApi"]; });

/* harmony import */ var _options_program__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./options/program */ "./src/apiBase/options/program.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "programApi", function() { return _options_program__WEBPACK_IMPORTED_MODULE_10__["programApi"]; });

/* harmony import */ var _options_purose__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./options/purose */ "./src/apiBase/options/purose.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "puroseApi", function() { return _options_purose__WEBPACK_IMPORTED_MODULE_11__["puroseApi"]; });

/* harmony import */ var _options_room__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./options/room */ "./src/apiBase/options/room.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "roomApi", function() { return _options_room__WEBPACK_IMPORTED_MODULE_12__["roomApi"]; });

/* harmony import */ var _options_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./options/service */ "./src/apiBase/options/service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serviceApi", function() { return _options_service__WEBPACK_IMPORTED_MODULE_13__["serviceApi"]; });

/* harmony import */ var _options_source_infomation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./options/source-infomation */ "./src/apiBase/options/source-infomation.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sourceInfomationApi", function() { return _options_source_infomation__WEBPACK_IMPORTED_MODULE_14__["sourceInfomationApi"]; });

/* harmony import */ var _options_staff_salary__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./options/staff-salary */ "./src/apiBase/options/staff-salary.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staffSalaryApi", function() { return _options_staff_salary__WEBPACK_IMPORTED_MODULE_15__["staffSalaryApi"]; });

/* harmony import */ var _options_study_time__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./options/study-time */ "./src/apiBase/options/study-time.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "studyTimeApi", function() { return _options_study_time__WEBPACK_IMPORTED_MODULE_16__["studyTimeApi"]; });

/* harmony import */ var _options_subject__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./options/subject */ "./src/apiBase/options/subject.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subjectApi", function() { return _options_subject__WEBPACK_IMPORTED_MODULE_17__["subjectApi"]; });

/* harmony import */ var _customer_student_student_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./customer/student/student-list */ "./src/apiBase/customer/student/student-list.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "studentApi", function() { return _customer_student_student_list__WEBPACK_IMPORTED_MODULE_18__["studentApi"]; });

/* harmony import */ var _options_ward__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./options/ward */ "./src/apiBase/options/ward.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wardApi", function() { return _options_ward__WEBPACK_IMPORTED_MODULE_19__["wardApi"]; });

/* harmony import */ var _options_supplier__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./options/supplier */ "./src/apiBase/options/supplier.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supplierApi", function() { return _options_supplier__WEBPACK_IMPORTED_MODULE_20__["supplierApi"]; });

/* harmony import */ var _options_userinformation__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./options/userinformation */ "./src/apiBase/options/userinformation.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userInformationApi", function() { return _options_userinformation__WEBPACK_IMPORTED_MODULE_21__["userInformationApi"]; });

/* harmony import */ var _teacher_teacher__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./teacher/teacher */ "./src/apiBase/teacher/teacher.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "teacherApi", function() { return _teacher_teacher__WEBPACK_IMPORTED_MODULE_22__["teacherApi"]; });

/* harmony import */ var _course_lesson__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./course/lesson */ "./src/apiBase/course/lesson.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lessonApi", function() { return _course_lesson__WEBPACK_IMPORTED_MODULE_23__["lessonApi"]; });

/* harmony import */ var _course_study_day__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./course/study-day */ "./src/apiBase/course/study-day.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "studyDayApi", function() { return _course_study_day__WEBPACK_IMPORTED_MODULE_24__["studyDayApi"]; });

/* harmony import */ var _course_check_study_time__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./course/check-study-time */ "./src/apiBase/course/check-study-time.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkStudyTimeApi", function() { return _course_check_study_time__WEBPACK_IMPORTED_MODULE_25__["checkStudyTimeApi"]; });

/* harmony import */ var _customer_parents_parents__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./customer/parents/parents */ "./src/apiBase/customer/parents/parents.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parentsApi", function() { return _customer_parents_parents__WEBPACK_IMPORTED_MODULE_26__["parentsApi"]; });

/* harmony import */ var _staff_manage_staff__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./staff-manage/staff */ "./src/apiBase/staff-manage/staff.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staffApi", function() { return _staff_manage_staff__WEBPACK_IMPORTED_MODULE_27__["staffApi"]; });

/* harmony import */ var _options_notification__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./options/notification */ "./src/apiBase/options/notification.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notificationApi", function() { return _options_notification__WEBPACK_IMPORTED_MODULE_28__["notificationApi"]; });

/* harmony import */ var _options_rules__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./options/rules */ "./src/apiBase/options/rules.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rulesApi", function() { return _options_rules__WEBPACK_IMPORTED_MODULE_29__["rulesApi"]; });

/* harmony import */ var _exam_exam_topic__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./exam/exam-topic */ "./src/apiBase/exam/exam-topic.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "examTopicApi", function() { return _exam_exam_topic__WEBPACK_IMPORTED_MODULE_30__["examTopicApi"]; });

/* harmony import */ var _options_consultation_status__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./options/consultation-status */ "./src/apiBase/options/consultation-status.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "consultationStatusApi", function() { return _options_consultation_status__WEBPACK_IMPORTED_MODULE_31__["consultationStatusApi"]; });

/* harmony import */ var _customer_service_test_customer_point__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./customer/service/test-customer-point */ "./src/apiBase/customer/service/test-customer-point.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "testCustomerPointApi", function() { return _customer_service_test_customer_point__WEBPACK_IMPORTED_MODULE_32__["testCustomerPointApi"]; });

/* harmony import */ var _zoom_config_zoom__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./zoom/config-zoom */ "./src/apiBase/zoom/config-zoom.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "configZoomApi", function() { return _zoom_config_zoom__WEBPACK_IMPORTED_MODULE_33__["configZoomApi"]; });

/* harmony import */ var _zoom_schedule_zoom__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./zoom/schedule-zoom */ "./src/apiBase/zoom/schedule-zoom.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scheduleZoomApi", function() { return _zoom_schedule_zoom__WEBPACK_IMPORTED_MODULE_34__["scheduleZoomApi"]; });

/* harmony import */ var _zoom_zoom_room__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./zoom/zoom-room */ "./src/apiBase/zoom/zoom-room.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomRoomApi", function() { return _zoom_zoom_room__WEBPACK_IMPORTED_MODULE_35__["zoomRoomApi"]; });

/* harmony import */ var _options_price_fix_exam__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./options/price-fix-exam */ "./src/apiBase/options/price-fix-exam.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "priceFixExamApi", function() { return _options_price_fix_exam__WEBPACK_IMPORTED_MODULE_36__["priceFixExamApi"]; });

/* harmony import */ var _package_pay_fix_exam__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./package/pay-fix-exam */ "./src/apiBase/package/pay-fix-exam.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "payFixExamApi", function() { return _package_pay_fix_exam__WEBPACK_IMPORTED_MODULE_37__["payFixExamApi"]; });

/* harmony import */ var _package_pay_fix_list__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./package/pay-fix-list */ "./src/apiBase/package/pay-fix-list.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "payFixListApi", function() { return _package_pay_fix_list__WEBPACK_IMPORTED_MODULE_38__["payFixListApi"]; });

/* harmony import */ var _apiBase_package_package_result__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ~/apiBase/package/package-result */ "./src/apiBase/package/package-result.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "packageResultApi", function() { return _apiBase_package_package_result__WEBPACK_IMPORTED_MODULE_39__["packageResultApi"]; });

/* harmony import */ var _exercise_exerciseGroup__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./exercise/exerciseGroup */ "./src/apiBase/exercise/exerciseGroup.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exerciseGroupApi", function() { return _exercise_exerciseGroup__WEBPACK_IMPORTED_MODULE_40__["exerciseGroupApi"]; });

/* harmony import */ var _course_check_room__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./course/check-room */ "./src/apiBase/course/check-room.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkRoomApi", function() { return _course_check_room__WEBPACK_IMPORTED_MODULE_41__["checkRoomApi"]; });

/* harmony import */ var _course_check_teacher__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./course/check-teacher */ "./src/apiBase/course/check-teacher.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkTeacherApi", function() { return _course_check_teacher__WEBPACK_IMPORTED_MODULE_42__["checkTeacherApi"]; });

/* harmony import */ var _customer_student_student_advise__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./customer/student/student-advise */ "./src/apiBase/customer/student/student-advise.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "studentAdviseApi", function() { return _customer_student_student_advise__WEBPACK_IMPORTED_MODULE_43__["studentAdviseApi"]; });

/* harmony import */ var _customer_service_test_customer__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./customer/service/test-customer */ "./src/apiBase/customer/service/test-customer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "testCustomerApi", function() { return _customer_service_test_customer__WEBPACK_IMPORTED_MODULE_44__["testCustomerApi"]; });

/* harmony import */ var _user_user__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./user/user */ "./src/apiBase/user/user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userApi", function() { return _user_user__WEBPACK_IMPORTED_MODULE_45__["userApi"]; });

/* harmony import */ var _customer_student_exam_coming_soon__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./customer/student/exam-coming-soon */ "./src/apiBase/customer/student/exam-coming-soon.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "examComingSoonApi", function() { return _customer_student_exam_coming_soon__WEBPACK_IMPORTED_MODULE_46__["examComingSoonApi"]; });

/* harmony import */ var _customer_student_warning__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./customer/student/warning */ "./src/apiBase/customer/student/warning.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warningApi", function() { return _customer_student_warning__WEBPACK_IMPORTED_MODULE_47__["warningApi"]; });

/* harmony import */ var _course_course__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./course/course */ "./src/apiBase/course/course.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "courseApi", function() { return _course_course__WEBPACK_IMPORTED_MODULE_48__["courseApi"]; });

/* harmony import */ var _course_detail_course_detail__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./course-detail/course-detail */ "./src/apiBase/course-detail/course-detail.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "courseDetailApi", function() { return _course_detail_course_detail__WEBPACK_IMPORTED_MODULE_49__["courseDetailApi"]; });

/* harmony import */ var _course_detail_student_list__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./course-detail/student-list */ "./src/apiBase/course-detail/student-list.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "studentListInCourseApi", function() { return _course_detail_student_list__WEBPACK_IMPORTED_MODULE_50__["studentListInCourseApi"]; });

/* harmony import */ var _customer_student_student_change__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./customer/student/student-change */ "./src/apiBase/customer/student/student-change.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "studentChangeApi", function() { return _customer_student_student_change__WEBPACK_IMPORTED_MODULE_51__["studentChangeApi"]; });

/* harmony import */ var _customer_student_student_change_course__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./customer/student/student-change-course */ "./src/apiBase/customer/student/student-change-course.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "studentChangeCourseApi", function() { return _customer_student_student_change_course__WEBPACK_IMPORTED_MODULE_52__["studentChangeCourseApi"]; });

/* harmony import */ var _customer_service_service_customer_exam__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./customer/service/service-customer-exam */ "./src/apiBase/customer/service/service-customer-exam.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serviceCustomerExamApi", function() { return _customer_service_service_customer_exam__WEBPACK_IMPORTED_MODULE_53__["serviceCustomerExamApi"]; });

/* harmony import */ var _customer_service_service_customer_exam_result__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./customer/service/service-customer-exam-result */ "./src/apiBase/customer/service/service-customer-exam-result.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serviceCustomerExamResultApi", function() { return _customer_service_service_customer_exam_result__WEBPACK_IMPORTED_MODULE_54__["serviceCustomerExamResultApi"]; });

/* harmony import */ var _customer_finance_finance_cashier_refund__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./customer/finance/finance-cashier-refund */ "./src/apiBase/customer/finance/finance-cashier-refund.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "refundsApi", function() { return _customer_finance_finance_cashier_refund__WEBPACK_IMPORTED_MODULE_55__["refundsApi"]; });

/* harmony import */ var _customer_contract_contract_customer_list__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./customer/contract/contract-customer-list */ "./src/apiBase/customer/contract/contract-customer-list.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contractCustomerListApi", function() { return _customer_contract_contract_customer_list__WEBPACK_IMPORTED_MODULE_56__["contractCustomerListApi"]; });

/* harmony import */ var _customer_finance_finance_cashier_payment__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./customer/finance/finance-cashier-payment */ "./src/apiBase/customer/finance/finance-cashier-payment.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "voucherApi", function() { return _customer_finance_finance_cashier_payment__WEBPACK_IMPORTED_MODULE_57__["voucherApi"]; });

/* harmony import */ var _customer_finance_finance_cashier_invoice__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./customer/finance/finance-cashier-invoice */ "./src/apiBase/customer/finance/finance-cashier-invoice.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invoiceApi", function() { return _customer_finance_finance_cashier_invoice__WEBPACK_IMPORTED_MODULE_58__["invoiceApi"]; });

/* harmony import */ var _customer_student_exam_appointment_result__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./customer/student/exam-appointment-result */ "./src/apiBase/customer/student/exam-appointment-result.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "examAppointmentResultApi", function() { return _customer_student_exam_appointment_result__WEBPACK_IMPORTED_MODULE_59__["examAppointmentResultApi"]; });

/* harmony import */ var _schedule_check_branch_schedule__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./schedule/check-branch-schedule */ "./src/apiBase/schedule/check-branch-schedule.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkBranchScheduleStudy", function() { return _schedule_check_branch_schedule__WEBPACK_IMPORTED_MODULE_60__["checkBranchScheduleStudy"]; });

/* harmony import */ var _schedule_check_teacher_schedule__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./schedule/check-teacher-schedule */ "./src/apiBase/schedule/check-teacher-schedule.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkTeacherScheduleStudy", function() { return _schedule_check_teacher_schedule__WEBPACK_IMPORTED_MODULE_61__["checkTeacherScheduleStudy"]; });

/* harmony import */ var _options_program_detail_point_column__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./options/program-detail-point-column */ "./src/apiBase/options/program-detail-point-column.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "programDetailPointColumnApi", function() { return _options_program_detail_point_column__WEBPACK_IMPORTED_MODULE_62__["programDetailPointColumnApi"]; });

/* harmony import */ var _customer_student_course_student__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./customer/student/course-student */ "./src/apiBase/customer/student/course-student.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "courseStudentApi", function() { return _customer_student_course_student__WEBPACK_IMPORTED_MODULE_63__["courseStudentApi"]; });

/* harmony import */ var _course_rollup__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./course/rollup */ "./src/apiBase/course/rollup.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rollUpApi", function() { return _course_rollup__WEBPACK_IMPORTED_MODULE_64__["rollUpApi"]; });

/* harmony import */ var _course_course_of_student_price__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./course/course-of-student-price */ "./src/apiBase/course/course-of-student-price.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "courseOfStudentPriceApi", function() { return _course_course_of_student_price__WEBPACK_IMPORTED_MODULE_65__["courseOfStudentPriceApi"]; });

/* harmony import */ var _options_config__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./options/config */ "./src/apiBase/options/config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "configApi", function() { return _options_config__WEBPACK_IMPORTED_MODULE_66__["configApi"]; });

/* harmony import */ var _newsfeed_newsfeed__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./newsfeed/newsfeed */ "./src/apiBase/newsfeed/newsfeed.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "newsFeedApi", function() { return _newsfeed_newsfeed__WEBPACK_IMPORTED_MODULE_67__["newsFeedApi"]; });

/* harmony import */ var _newsfeed_newsfeed_like__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./newsfeed/newsfeed-like */ "./src/apiBase/newsfeed/newsfeed-like.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "newsFeedLikeApi", function() { return _newsfeed_newsfeed_like__WEBPACK_IMPORTED_MODULE_68__["newsFeedLikeApi"]; });

/* harmony import */ var _newsfeed_newsfeed_comment__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./newsfeed/newsfeed-comment */ "./src/apiBase/newsfeed/newsfeed-comment.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "newsFeedCommentApi", function() { return _newsfeed_newsfeed_comment__WEBPACK_IMPORTED_MODULE_69__["newsFeedCommentApi"]; });

/* harmony import */ var _newsfeed_newsfeed_commentreply__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./newsfeed/newsfeed-commentreply */ "./src/apiBase/newsfeed/newsfeed-commentreply.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "newsFeedCommentReplyApi", function() { return _newsfeed_newsfeed_commentreply__WEBPACK_IMPORTED_MODULE_70__["newsFeedCommentReplyApi"]; });

/* harmony import */ var _newsfeed_user_branch__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./newsfeed/user-branch */ "./src/apiBase/newsfeed/user-branch.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userBranchApi", function() { return _newsfeed_user_branch__WEBPACK_IMPORTED_MODULE_71__["userBranchApi"]; });

/* harmony import */ var _newsfeed_group_newsfeed__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./newsfeed/group-newsfeed */ "./src/apiBase/newsfeed/group-newsfeed.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupNewsFeedApi", function() { return _newsfeed_group_newsfeed__WEBPACK_IMPORTED_MODULE_72__["groupNewsFeedApi"]; });

/* harmony import */ var _newsfeed_user_group_newsfeed__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./newsfeed/user-group-newsfeed */ "./src/apiBase/newsfeed/user-group-newsfeed.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userGroupNewsFeedApi", function() { return _newsfeed_user_group_newsfeed__WEBPACK_IMPORTED_MODULE_73__["userGroupNewsFeedApi"]; });

/* harmony import */ var _exercise_exercise__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./exercise/exercise */ "./src/apiBase/exercise/exercise.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exerciseApi", function() { return _exercise_exercise__WEBPACK_IMPORTED_MODULE_74__["exerciseApi"]; });

/* harmony import */ var _package_package__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./package/package */ "./src/apiBase/package/package.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "packageApi", function() { return _package_package__WEBPACK_IMPORTED_MODULE_75__["packageApi"]; });

/* harmony import */ var _staff_manage_task__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./staff-manage/task */ "./src/apiBase/staff-manage/task.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staffOfTaskGroupApi", function() { return _staff_manage_task__WEBPACK_IMPORTED_MODULE_76__["staffOfTaskGroupApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "taskApi", function() { return _staff_manage_task__WEBPACK_IMPORTED_MODULE_76__["taskApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "taskGroupApi", function() { return _staff_manage_task__WEBPACK_IMPORTED_MODULE_76__["taskGroupApi"]; });

/* harmony import */ var _course_detail_document_schedule__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./course-detail/document-schedule */ "./src/apiBase/course-detail/document-schedule.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "documentScheduleApi", function() { return _course_detail_document_schedule__WEBPACK_IMPORTED_MODULE_77__["documentScheduleApi"]; });

/* harmony import */ var _package_package_student__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./package/package-student */ "./src/apiBase/package/package-student.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "packageStudentApi", function() { return _package_package_student__WEBPACK_IMPORTED_MODULE_78__["packageStudentApi"]; });

/* harmony import */ var _newsfeed_background_newsfeed__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./newsfeed/background-newsfeed */ "./src/apiBase/newsfeed/background-newsfeed.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backgroundNewsFeedApi", function() { return _newsfeed_background_newsfeed__WEBPACK_IMPORTED_MODULE_79__["backgroundNewsFeedApi"]; });

/* harmony import */ var _course_online_study_day__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./course-online/study-day */ "./src/apiBase/course-online/study-day.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "studyDayOnlineApi", function() { return _course_online_study_day__WEBPACK_IMPORTED_MODULE_80__["studyDayOnlineApi"]; });

/* harmony import */ var _course_online_lesson__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./course-online/lesson */ "./src/apiBase/course-online/lesson.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lessonOnlineApi", function() { return _course_online_lesson__WEBPACK_IMPORTED_MODULE_81__["lessonOnlineApi"]; });

/* harmony import */ var _course_online_detail_available_day__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./course-online-detail/available-day */ "./src/apiBase/course-online-detail/available-day.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "courseOnlineDetailAvailableDayApi", function() { return _course_online_detail_available_day__WEBPACK_IMPORTED_MODULE_82__["courseOnlineDetailAvailableDayApi"]; });

/* harmony import */ var _package_package_examiner__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./package/package-examiner */ "./src/apiBase/package/package-examiner.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "packageExaminerApi", function() { return _package_package_examiner__WEBPACK_IMPORTED_MODULE_83__["packageExaminerApi"]; });

/* harmony import */ var _exam_detail_exam_detail__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./exam-detail/exam-detail */ "./src/apiBase/exam-detail/exam-detail.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "examDetailApi", function() { return _exam_detail_exam_detail__WEBPACK_IMPORTED_MODULE_84__["examDetailApi"]; });

/* harmony import */ var _sale_sale_campaign__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./sale/sale-campaign */ "./src/apiBase/sale/sale-campaign.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saleCampaignApi", function() { return _sale_sale_campaign__WEBPACK_IMPORTED_MODULE_85__["saleCampaignApi"]; });

/* harmony import */ var _sale_sale_campaign_detail__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./sale/sale-campaign-detail */ "./src/apiBase/sale/sale-campaign-detail.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saleCampaignDetailApi", function() { return _sale_sale_campaign_detail__WEBPACK_IMPORTED_MODULE_86__["saleCampaignDetailApi"]; });

/* harmony import */ var _sale_sale_salary__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./sale/sale-salary */ "./src/apiBase/sale/sale-salary.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saleSalaryApi", function() { return _sale_sale_salary__WEBPACK_IMPORTED_MODULE_87__["saleSalaryApi"]; });

/* harmony import */ var _sale_saler_total_revenue__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./sale/saler-total-revenue */ "./src/apiBase/sale/saler-total-revenue.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "salerTotalRevenueApi", function() { return _sale_saler_total_revenue__WEBPACK_IMPORTED_MODULE_88__["salerTotalRevenueApi"]; });

/* harmony import */ var _sale_saler_revenue__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./sale/saler-revenue */ "./src/apiBase/sale/saler-revenue.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "salerRevenueApi", function() { return _sale_saler_revenue__WEBPACK_IMPORTED_MODULE_89__["salerRevenueApi"]; });

/* harmony import */ var _video_course_list__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./video-course-list */ "./src/apiBase/video-course-list/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VideoCourseListApi", function() { return _video_course_list__WEBPACK_IMPORTED_MODULE_90__["VideoCourseListApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DonePayApi", function() { return _video_course_list__WEBPACK_IMPORTED_MODULE_90__["DonePayApi"]; });

/* harmony import */ var _video_learning__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./video-learning */ "./src/apiBase/video-learning/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VideoCourseOfStudent", function() { return _video_learning__WEBPACK_IMPORTED_MODULE_91__["VideoCourseOfStudent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VideoCourseInteraction", function() { return _video_learning__WEBPACK_IMPORTED_MODULE_91__["VideoCourseInteraction"]; });

/* harmony import */ var _reset_password_reset_password__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./reset-password/reset-password */ "./src/apiBase/reset-password/reset-password.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetPasswordApi", function() { return _reset_password_reset_password__WEBPACK_IMPORTED_MODULE_92__["resetPasswordApi"]; });

/* harmony import */ var _doing_test_doing_test__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./doing-test/doing-test */ "./src/apiBase/doing-test/doing-test.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doingTestApi", function() { return _doing_test_doing_test__WEBPACK_IMPORTED_MODULE_93__["doingTestApi"]; });

/* harmony import */ var _feed_back__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./feed-back */ "./src/apiBase/feed-back/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeedbackApi", function() { return _feed_back__WEBPACK_IMPORTED_MODULE_94__["FeedbackApi"]; });

/* harmony import */ var _oneSignal_oneSignal__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./oneSignal/oneSignal */ "./src/apiBase/oneSignal/oneSignal.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "oneSignalAPI", function() { return _oneSignal_oneSignal__WEBPACK_IMPORTED_MODULE_95__["oneSignalAPI"]; });

/* harmony import */ var _study_role_study_role__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./study-role/study-role */ "./src/apiBase/study-role/study-role.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "studyRoleApi", function() { return _study_role_study_role__WEBPACK_IMPORTED_MODULE_96__["studyRoleApi"]; });

/* harmony import */ var _zoom_coming_course__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./zoom/coming-course */ "./src/apiBase/zoom/coming-course.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "comingCourseApi", function() { return _zoom_coming_course__WEBPACK_IMPORTED_MODULE_97__["comingCourseApi"]; });

/* harmony import */ var _self_course__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./self-course */ "./src/apiBase/self-course/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelfCourse", function() { return _self_course__WEBPACK_IMPORTED_MODULE_98__["createSelfCourse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScheduleSelfCourse", function() { return _self_course__WEBPACK_IMPORTED_MODULE_98__["getScheduleSelfCourse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkStudyTimeSelfCourse", function() { return _self_course__WEBPACK_IMPORTED_MODULE_98__["checkStudyTimeSelfCourse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkTeacherSelfCourse", function() { return _self_course__WEBPACK_IMPORTED_MODULE_98__["checkTeacherSelfCourse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateScheduleSelfCourse", function() { return _self_course__WEBPACK_IMPORTED_MODULE_98__["updateScheduleSelfCourse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancelScheduleSelfCourse", function() { return _self_course__WEBPACK_IMPORTED_MODULE_98__["cancelScheduleSelfCourse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRangeTimeSelfCourse", function() { return _self_course__WEBPACK_IMPORTED_MODULE_98__["getRangeTimeSelfCourse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setRangeTimeSelfCourse", function() { return _self_course__WEBPACK_IMPORTED_MODULE_98__["setRangeTimeSelfCourse"]; });





































































































/***/ }),

/***/ "./src/apiBase/instance.ts":
/*!*********************************!*\
  !*** ./src/apiBase/instance.ts ***!
  \*********************************/
/*! exports provided: authHeader_X, authHeader_Bearer, instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authHeader_X", function() { return authHeader_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authHeader_Bearer", function() { return authHeader_Bearer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instance", function() { return instance; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _appConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/appConfig */ "./src/appConfig.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const SHOW_LOG = true;
const NODE_STATUS = "development";

const isShowLog = e => {
  if (e === '/api/Idioms/getRandoms' || e === '/api/Rules') {
    return false;
  } else {
    return NODE_STATUS == 'production' && !!SHOW_LOG ? true : true;
  }
};

function getUrl(config) {
  return !!config.baseURL ? config.url.replace(config.baseURL, '').split('?')[0] : config.url;
}

const authHeader_X = async () => {
  const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_1__["getSession"])();
  return !!session && !!session.accessToken ? {
    token: session.accessToken
  } : {};
};
const authHeader_Bearer = async () => {
  const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_1__["getSession"])();
  return !!session && !!session.accessToken ? {
    Authorization: 'Bearer ' + session.accessToken
  } : {};
};
const instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: _appConfig__WEBPACK_IMPORTED_MODULE_2__["default"].hostURL,
  headers: {
    Accept: 'application/json'
  }
});
instance.interceptors.request.use(async config => {
  const url = getUrl(config);

  if (!url.toString().includes('/auth/')) {
    const authHeader = await authHeader_X();
    config.headers = _objectSpread(_objectSpread({}, config.headers), authHeader);
  }

  isShowLog(url) && console.log(`%c ${config === null || config === void 0 ? void 0 : config.method.toUpperCase()} - ${url}:`, 'color: #0086b3; font-weight: bold', config);
  return config;
}, error => {
  var _error$response, _error$response2;

  isShowLog('') && console.log(`%c ${error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status}  :`, 'color: red; font-weight: bold', error === null || error === void 0 ? void 0 : (_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : _error$response2.data);
  return Promise.reject(error);
});

const checkResponse = error => {
  var _error$response3, _error$response4;

  switch (error === null || error === void 0 ? void 0 : (_error$response3 = error.response) === null || _error$response3 === void 0 ? void 0 : _error$response3.status) {
    case 401:
      setTimeout(() => {
        Object(next_auth_client__WEBPACK_IMPORTED_MODULE_1__["signIn"])();
      }, 1000);
      break;

    case 403:
      console.log(`%ERROR 403:` + `%c DON'T HAVE PERMISSON`, 'color: red; font-weight: bold', 'color: yellow;');
      alert('Bạn không có quyền thực hiện');
      break;

    case 400:
      console.log(error === null || error === void 0 ? void 0 : (_error$response4 = error.response) === null || _error$response4 === void 0 ? void 0 : _error$response4.message);
      break;

    case 500:
      console.log(`% ERROR 500:` + `%c BACK-END`, 'color: red; font-weight: bold', 'color: yellow;');
      break;

    default:
      console.log(`%c ${error === null || error === void 0 ? void 0 : error.response}  :`, 'color: red; font-weight: bold', error === null || error === void 0 ? void 0 : error.response);
  }
};

instance.interceptors.response.use(response => {
  let url = getUrl(response === null || response === void 0 ? void 0 : response.config);
  isShowLog(url) && console.log(` %c ${response === null || response === void 0 ? void 0 : response.status} - ${getUrl(response === null || response === void 0 ? void 0 : response.config)}:`, 'color: #008000; font-weight: bold', response);
  return response;
}, function (error) {
  if (!!(error !== null && error !== void 0 && error.response)) {
    var _error$response5, _error$response6, _error$response7;

    checkResponse(error);
    isShowLog('') && console.log(`%c ${error === null || error === void 0 ? void 0 : (_error$response5 = error.response) === null || _error$response5 === void 0 ? void 0 : _error$response5.status}  :`, 'color: red; font-weight: bold', error === null || error === void 0 ? void 0 : (_error$response6 = error.response) === null || _error$response6 === void 0 ? void 0 : _error$response6.data);
    return !!(error !== null && error !== void 0 && (_error$response7 = error.response) !== null && _error$response7 !== void 0 && _error$response7.data) ? Promise.reject(error.response.data) : Promise.reject(error);
  } else if (error.request) {
    var _error$response8, _error$response9;

    isShowLog('') && console.log(`%c ${JSON.stringify(error)}  :`, 'color: red; font-weight: bold', error === null || error === void 0 ? void 0 : (_error$response8 = error.response) === null || _error$response8 === void 0 ? void 0 : _error$response8.data);
    return !!(error !== null && error !== void 0 && (_error$response9 = error.response) !== null && _error$response9 !== void 0 && _error$response9.data) ? Promise.reject(error.response.data) : Promise.reject(error);
  } else {
    var _error$response10;

    isShowLog('') && console.log(`%c ${JSON.stringify(error)}  :`, 'color: red; font-weight: bold', 'Hình như là setting sai');
    return !!(error !== null && error !== void 0 && (_error$response10 = error.response) !== null && _error$response10 !== void 0 && _error$response10.data) ? Promise.reject(error.response.data) : Promise.reject(error);
  }
});

/***/ }),

/***/ "./src/apiBase/newsfeed/background-newsfeed.ts":
/*!*****************************************************!*\
  !*** ./src/apiBase/newsfeed/background-newsfeed.ts ***!
  \*****************************************************/
/*! exports provided: backgroundNewsFeedApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundNewsFeedApi", function() { return backgroundNewsFeedApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class BackgroundNewsFeed {
  constructor() {
    _defineProperty(this, "getAll", () => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get("/api/Background"));

    _defineProperty(this, "getByID", id => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`/api/Background/${id}`));
  }

}

const backgroundNewsFeedApi = new BackgroundNewsFeed();

/***/ }),

/***/ "./src/apiBase/newsfeed/group-newsfeed.ts":
/*!************************************************!*\
  !*** ./src/apiBase/newsfeed/group-newsfeed.ts ***!
  \************************************************/
/*! exports provided: groupNewsFeedApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupNewsFeedApi", function() { return groupNewsFeedApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class GroupNewsFeed {
  constructor() {
    _defineProperty(this, "getAll", todoApi => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get('/api/GroupNewsFeed', {
      params: todoApi
    }));

    _defineProperty(this, "getByID", id => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`/api/GroupNewsFeed/${id}`));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post('/api/GroupNewsFeed', data));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put('/api/GroupNewsFeed', data, {}));

    _defineProperty(this, "uploadImage", file => {
      let fData = new FormData();
      fData.append('File', file);
      console.log('FDATA: ', fData);
      return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post('/api/uploadfileGroup', fData, {});
    });
  }

}

const groupNewsFeedApi = new GroupNewsFeed();

/***/ }),

/***/ "./src/apiBase/newsfeed/newsfeed-comment.tsx":
/*!***************************************************!*\
  !*** ./src/apiBase/newsfeed/newsfeed-comment.tsx ***!
  \***************************************************/
/*! exports provided: newsFeedCommentApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsFeedCommentApi", function() { return newsFeedCommentApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class NewsFeedComment {
  constructor() {
    _defineProperty(this, "getAll", todoApi => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get("/api/NewsFeedComment", {
      params: todoApi
    }));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post("/api/NewsFeedComment", data));
  }

}

const newsFeedCommentApi = new NewsFeedComment();

/***/ }),

/***/ "./src/apiBase/newsfeed/newsfeed-commentreply.tsx":
/*!********************************************************!*\
  !*** ./src/apiBase/newsfeed/newsfeed-commentreply.tsx ***!
  \********************************************************/
/*! exports provided: newsFeedCommentReplyApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsFeedCommentReplyApi", function() { return newsFeedCommentReplyApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class NewsFeedCommentReply {
  constructor() {
    _defineProperty(this, "getAll", todoApi => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get("/api/CommentReply", {
      params: todoApi
    }));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post("/api/CommentReply", data));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put("/api/CommentReply", data));
  }

}

const newsFeedCommentReplyApi = new NewsFeedCommentReply();

/***/ }),

/***/ "./src/apiBase/newsfeed/newsfeed-like.tsx":
/*!************************************************!*\
  !*** ./src/apiBase/newsfeed/newsfeed-like.tsx ***!
  \************************************************/
/*! exports provided: newsFeedLikeApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsFeedLikeApi", function() { return newsFeedLikeApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class NewsFeedLike {
  constructor() {
    _defineProperty(this, "getAll", todoApi => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get("/api/NewsFeedLike", {
      params: todoApi
    }));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post("/api/NewsFeedLike", data));
  }

}

const newsFeedLikeApi = new NewsFeedLike();

/***/ }),

/***/ "./src/apiBase/newsfeed/newsfeed.tsx":
/*!*******************************************!*\
  !*** ./src/apiBase/newsfeed/newsfeed.tsx ***!
  \*******************************************/
/*! exports provided: newsFeedApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsFeedApi", function() { return newsFeedApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class NewsFeed {
  constructor() {
    _defineProperty(this, "getAll", todoApi => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get('/api/NewsFeed', {
      params: todoApi
    }));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post('/api/NewsFeed', data));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put('/api/NewsFeed', data, {}));

    _defineProperty(this, "delete", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put('/api/NewsFeed', data, {}));

    _defineProperty(this, "uploadFile", file => {
      let fData = new FormData();
      fData.append('File', file);
      console.log('FDATA: ', fData);
      return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post('/api/uploadfile', fData, {});
    });
  }

}

const newsFeedApi = new NewsFeed();

/***/ }),

/***/ "./src/apiBase/newsfeed/user-branch.ts":
/*!*********************************************!*\
  !*** ./src/apiBase/newsfeed/user-branch.ts ***!
  \*********************************************/
/*! exports provided: userBranchApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userBranchApi", function() { return userBranchApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class UserBranch {
  constructor() {
    _defineProperty(this, "getAll", todoApi => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get("/api/UserBranch", {
      params: todoApi
    }));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post("/api/UserBranch", data));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put("/api/UserBranch", data, {}));
  }

}

const userBranchApi = new UserBranch();

/***/ }),

/***/ "./src/apiBase/newsfeed/user-group-newsfeed.ts":
/*!*****************************************************!*\
  !*** ./src/apiBase/newsfeed/user-group-newsfeed.ts ***!
  \*****************************************************/
/*! exports provided: userGroupNewsFeedApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userGroupNewsFeedApi", function() { return userGroupNewsFeedApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class UserGroupNewsFeed {
  constructor() {
    _defineProperty(this, "getAll", todoApi => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get('/api/GroupUserNewsFeed', {
      params: todoApi
    }));

    _defineProperty(this, "getByID", id => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`/api/GroupUserNewsFeed/${id}`));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post('/api/GroupUserNewsFeed', data));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put('/api/GroupUserNewsFeed', data, {}));
  }

}

const userGroupNewsFeedApi = new UserGroupNewsFeed();

/***/ }),

/***/ "./src/apiBase/oneSignal/oneSignal.ts":
/*!********************************************!*\
  !*** ./src/apiBase/oneSignal/oneSignal.ts ***!
  \********************************************/
/*! exports provided: oneSignalAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oneSignalAPI", function() { return oneSignalAPI; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = '/api/Update_OneSignal_DeviceID';
const oneSignalAPI = {
  update(ID) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url + `?oneSignal_deviceId=${ID}`);
  }

};

/***/ }),

/***/ "./src/apiBase/options/area.ts":
/*!*************************************!*\
  !*** ./src/apiBase/options/area.ts ***!
  \*************************************/
/*! exports provided: areaApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaApi", function() { return areaApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const url = "/api/Area";

class AreaApi {
  constructor() {
    _defineProperty(this, "getAll", params => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    }));
  }

  // Thêm mới data
  add(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data);
  } // Cập nhật data


  update(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  } // Xóa data


  delete(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  }

}

const areaApi = new AreaApi();

/***/ }),

/***/ "./src/apiBase/options/branch.ts":
/*!***************************************!*\
  !*** ./src/apiBase/options/branch.ts ***!
  \***************************************/
/*! exports provided: branchApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "branchApi", function() { return branchApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class BranchApi {
  constructor() {
    _defineProperty(this, "getAll", todoApi => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get('/api/Branch', {
      // params: getParams(todoApi),
      params: todoApi
    }));

    _defineProperty(this, "getByID", id => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`/api/Branch/${id}`));

    _defineProperty(this, "changeStatus", id => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(`/api/Branch/Hide/${id}`));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post('/api/Branch', data));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put('/api/Branch', data, {}));
  }

}

const branchApi = new BranchApi();

/***/ }),

/***/ "./src/apiBase/options/config.ts":
/*!***************************************!*\
  !*** ./src/apiBase/options/config.ts ***!
  \***************************************/
/*! exports provided: configApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configApi", function() { return configApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Config {
  constructor() {
    _defineProperty(this, "getAll", params => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get('/api/Config', {
      params
    }));

    _defineProperty(this, "getByID", id => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`/api/Config/${id}`));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post('/api/Config', data));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put('/api/Config', data));

    _defineProperty(this, "delete", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put('/api/Config', data));
  }

}

const configApi = new Config();

/***/ }),

/***/ "./src/apiBase/options/consultation-status.ts":
/*!****************************************************!*\
  !*** ./src/apiBase/options/consultation-status.ts ***!
  \****************************************************/
/*! exports provided: consultationStatusApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consultationStatusApi", function() { return consultationStatusApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const url = "/api/CustomerConsultationStatus";

class ConsultationStatusApi {
  constructor() {
    _defineProperty(this, "getPaged", Params => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params: Params
    }));

    _defineProperty(this, "getAll", Params => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params: Params
    }));

    _defineProperty(this, "getDetail", id => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${url}/${id}`));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data, {}));
  }

}

const consultationStatusApi = new ConsultationStatusApi();

/***/ }),

/***/ "./src/apiBase/options/contract.ts":
/*!*****************************************!*\
  !*** ./src/apiBase/options/contract.ts ***!
  \*****************************************/
/*! exports provided: contractApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contractApi", function() { return contractApi; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = '/api/Contract/';
const contractApi = {
  // Lấy tất cả data
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  },

  // Thêm mới data
  add(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data);
  },

  // Cập nhật data
  update(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  },

  // Xóa data
  delete(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  }

};

/***/ }),

/***/ "./src/apiBase/options/curriculum-detail.ts":
/*!**************************************************!*\
  !*** ./src/apiBase/options/curriculum-detail.ts ***!
  \**************************************************/
/*! exports provided: curriculumDetailApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curriculumDetailApi", function() { return curriculumDetailApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class CurriculumDetailApi {
  constructor() {
    _defineProperty(this, "getAll", todoApi => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get('/api/CurriculumDetail/', {
      params: todoApi
    }));

    _defineProperty(this, "getWithID", ID => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`/api/CurriculumDetail/${ID}`));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post('/api/CurriculumDetail', data, {}));

    _defineProperty(this, "insert", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post('/api/CurriculumDetail/insert', data, {}));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put('/api/CurriculumDetail/', data, {}));
  }

}

const curriculumDetailApi = new CurriculumDetailApi();

/***/ }),

/***/ "./src/apiBase/options/curriculum.ts":
/*!*******************************************!*\
  !*** ./src/apiBase/options/curriculum.ts ***!
  \*******************************************/
/*! exports provided: curriculumApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curriculumApi", function() { return curriculumApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class CurriculumApi {
  constructor() {
    _defineProperty(this, "getAll", todoApi => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get('/api/Curriculum/', {
      params: todoApi
    }));

    _defineProperty(this, "getWithID", ID => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`/api/Curriculum/${ID}`));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post('/api/Curriculum', data, {}));

    _defineProperty(this, "addSubject", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post('/api/UpdateAllSubjectOfCurriculum', data, {}));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put('/api/Curriculum/', data, {}));
  }

}

const curriculumApi = new CurriculumApi();

/***/ }),

/***/ "./src/apiBase/options/day-off.ts":
/*!****************************************!*\
  !*** ./src/apiBase/options/day-off.ts ***!
  \****************************************/
/*! exports provided: dayOffApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dayOffApi", function() { return dayOffApi; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = '/api/DayOff/';
const dayOffApi = {
  // Lấy tất cả data
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  },

  // Thêm mới data
  add(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data);
  },

  // Cập nhật data
  update(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  },

  // Xóa data
  delete(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  }

};

/***/ }),

/***/ "./src/apiBase/options/discount.ts":
/*!*****************************************!*\
  !*** ./src/apiBase/options/discount.ts ***!
  \*****************************************/
/*! exports provided: discountApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "discountApi", function() { return discountApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class DiscountApi {
  constructor() {
    _defineProperty(this, "getAll", todoApi => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get('/api/Discount', {
      params: todoApi
    }));

    _defineProperty(this, "getSuggest", ID => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get('/api/Discount/suggest_discount_code/' + ID));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post('/api/Discount', data, {}));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put('/api/Discount', data, {}));

    _defineProperty(this, "getOfStudent", todoApi => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get('/api/DiscountOfStudent', {
      params: todoApi
    }));

    _defineProperty(this, "discountStudent", todoApi => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get('/api/DiscountStudent', {
      params: todoApi
    }));
  }

}

const discountApi = new DiscountApi();

/***/ }),

/***/ "./src/apiBase/options/district.ts":
/*!*****************************************!*\
  !*** ./src/apiBase/options/district.ts ***!
  \*****************************************/
/*! exports provided: districtApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "districtApi", function() { return districtApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const url = '/api/District';

class DistrictApi {
  constructor() {
    _defineProperty(this, "getAll", params => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    }));

    _defineProperty(this, "getByArea", areaID => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get('/api/District', {
      params: {
        AreaID: areaID
      }
    }));
  }

  // Thêm mới data
  add(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data);
  } // Cập nhật data


  update(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  } // Xóa data


  delete(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  } //   post = (data: IBranch) => instance.post("/api/Branch/InsertBranch", data);
  //   post = (data: IBranch) => instance.post("/api/Branch/InsertBranch", data);


}

const districtApi = new DistrictApi();

/***/ }),

/***/ "./src/apiBase/options/grade.ts":
/*!**************************************!*\
  !*** ./src/apiBase/options/grade.ts ***!
  \**************************************/
/*! exports provided: gradeApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gradeApi", function() { return gradeApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class GradeApi {
  constructor() {
    _defineProperty(this, "getAll", todoApi => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get("/api/Grade/", {
      params: todoApi
    }));

    _defineProperty(this, "getWithID", ID => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`/api/Grade/${ID}`));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post("/api/Grade", data, {}));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put("/api/Grade/", data, {}));
  }

}

const gradeApi = new GradeApi();

/***/ }),

/***/ "./src/apiBase/options/idioms.ts":
/*!***************************************!*\
  !*** ./src/apiBase/options/idioms.ts ***!
  \***************************************/
/*! exports provided: idiomsApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idiomsApi", function() { return idiomsApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const url = "/api/Idioms";

class IdiomsApi {
  constructor() {
    _defineProperty(this, "getPaged", Params => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params: Params
    }));

    _defineProperty(this, "getDetail", id => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${url}/${id}`));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data, {}));

    _defineProperty(this, "getRandom", () => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${url}/getRandoms`));
  }

}

const idiomsApi = new IdiomsApi();

/***/ }),

/***/ "./src/apiBase/options/job.ts":
/*!************************************!*\
  !*** ./src/apiBase/options/job.ts ***!
  \************************************/
/*! exports provided: jobApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jobApi", function() { return jobApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class JobApi {
  constructor() {
    _defineProperty(this, "getAll", jobParams => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get("/api/Job", {
      params: jobParams
    }));

    _defineProperty(this, "getDetail", id => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`/api/Job/${id}`));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post("/api/Job", data));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put("/api/Job", data, {}));
  }

}

const jobApi = new JobApi();

/***/ }),

/***/ "./src/apiBase/options/notification.ts":
/*!*********************************************!*\
  !*** ./src/apiBase/options/notification.ts ***!
  \*********************************************/
/*! exports provided: notificationApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notificationApi", function() { return notificationApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Notification {
  constructor() {
    _defineProperty(this, "getAll", todoApi => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get('/api/Notifications', {
      params: todoApi
    }));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post('/api/Notifications', data));

    _defineProperty(this, "getAllWithUser", todoApi => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get('/api/NotificationUser', {
      params: todoApi
    }));

    _defineProperty(this, "updateSeen", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put('/api/NotificationUser', data, {}));
  }

}

const notificationApi = new Notification();

/***/ }),

/***/ "./src/apiBase/options/price-fix-exam.ts":
/*!***********************************************!*\
  !*** ./src/apiBase/options/price-fix-exam.ts ***!
  \***********************************************/
/*! exports provided: priceFixExamApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "priceFixExamApi", function() { return priceFixExamApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const url = '/api/PriceFixExam';

class PriceFixExamApi {
  constructor() {
    _defineProperty(this, "getAll", Params => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params: Params
    }));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data, {}));
  }

}

const priceFixExamApi = new PriceFixExamApi();

/***/ }),

/***/ "./src/apiBase/options/program-detail-point-column.ts":
/*!************************************************************!*\
  !*** ./src/apiBase/options/program-detail-point-column.ts ***!
  \************************************************************/
/*! exports provided: programDetailPointColumnApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "programDetailPointColumnApi", function() { return programDetailPointColumnApi; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = '/api/PointColumn/';
const programDetailPointColumnApi = {
  // Lấy tất cả data
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  },

  // Thêm mới data
  add(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data);
  },

  // Cập nhật data
  update(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  },

  // Cập nhật data
  delete(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  }

};

/***/ }),

/***/ "./src/apiBase/options/program.ts":
/*!****************************************!*\
  !*** ./src/apiBase/options/program.ts ***!
  \****************************************/
/*! exports provided: programApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "programApi", function() { return programApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class ProgramApi {
  constructor() {
    _defineProperty(this, "getAll", todoApi => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get("/api/Program", {
      params: todoApi
    }));

    _defineProperty(this, "getWithID", ID => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`/api/Program/${ID}`));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post("/api/Program", data, {}));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put("/api/Program", data, {}));
  }

}

const programApi = new ProgramApi();

/***/ }),

/***/ "./src/apiBase/options/purose.ts":
/*!***************************************!*\
  !*** ./src/apiBase/options/purose.ts ***!
  \***************************************/
/*! exports provided: puroseApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "puroseApi", function() { return puroseApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Purose {
  constructor() {
    _defineProperty(this, "getAll", todoApi => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get("/api/Purposes", {
      params: todoApi
    }));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post("/api/Purposes", data));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put("/api/Purposes", data, {}));
  }

}

const puroseApi = new Purose();

/***/ }),

/***/ "./src/apiBase/options/room.ts":
/*!*************************************!*\
  !*** ./src/apiBase/options/room.ts ***!
  \*************************************/
/*! exports provided: roomApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roomApi", function() { return roomApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class RoomApi {
  constructor() {
    _defineProperty(this, "getAll", todoApi => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get("/api/Room/", {
      params: todoApi
    }));

    _defineProperty(this, "getById", id => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`/api/Room/${id}`));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put("/api/Room", data));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post("/api/Room/", data));
  }

}

const roomApi = new RoomApi();

/***/ }),

/***/ "./src/apiBase/options/rules.ts":
/*!**************************************!*\
  !*** ./src/apiBase/options/rules.ts ***!
  \**************************************/
/*! exports provided: rulesApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rulesApi", function() { return rulesApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Rules {
  constructor() {
    _defineProperty(this, "getAll", params => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get('/api/Rules', {
      params
    }));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put('/api/Rules', data, {}));
  }

}

const rulesApi = new Rules();

/***/ }),

/***/ "./src/apiBase/options/service.ts":
/*!****************************************!*\
  !*** ./src/apiBase/options/service.ts ***!
  \****************************************/
/*! exports provided: serviceApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serviceApi", function() { return serviceApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class ServiceApi {
  constructor() {
    _defineProperty(this, "getAll", todoApi => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get("/api/Services", {
      params: todoApi
    }));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post("/api/Services", data, {}));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put("/api/Services", data, {}));
  }

}

const serviceApi = new ServiceApi();

/***/ }),

/***/ "./src/apiBase/options/source-infomation.ts":
/*!**************************************************!*\
  !*** ./src/apiBase/options/source-infomation.ts ***!
  \**************************************************/
/*! exports provided: sourceInfomationApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sourceInfomationApi", function() { return sourceInfomationApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class SourceInfomation {
  constructor() {
    _defineProperty(this, "getAll", todoApi => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get("/api/SourceInformation", {
      params: todoApi
    }));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post("/api/SourceInformation", data));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put("/api/SourceInformation", data, {}));
  }

}

const sourceInfomationApi = new SourceInfomation();

/***/ }),

/***/ "./src/apiBase/options/staff-salary.ts":
/*!*********************************************!*\
  !*** ./src/apiBase/options/staff-salary.ts ***!
  \*********************************************/
/*! exports provided: staffSalaryApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staffSalaryApi", function() { return staffSalaryApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class StaffSalary {
  constructor() {
    _defineProperty(this, "getAll", todoApi => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get('/api/Salary', {
      params: todoApi
    }));

    _defineProperty(this, "getByID", id => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`/api/Salary/${id}`));

    _defineProperty(this, "getHistory", id => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`/api/salary/history/${id}`));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post('/api/Salary', data));

    _defineProperty(this, "addData", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post('/api/Salary', data));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put('/api/Salary', data, {}));
  }

}

const staffSalaryApi = new StaffSalary();

/***/ }),

/***/ "./src/apiBase/options/study-time.ts":
/*!*******************************************!*\
  !*** ./src/apiBase/options/study-time.ts ***!
  \*******************************************/
/*! exports provided: studyTimeApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studyTimeApi", function() { return studyTimeApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class StudyTimeApi {
  constructor() {
    _defineProperty(this, "getAll", todoApi => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get("/api/StudyTime", {
      params: todoApi
    }));

    _defineProperty(this, "getWithID", ID => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`/api/StudyTime/${ID}`));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post("/api/StudyTime", data, {}));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put("/api/StudyTime", data, {}));
  }

}

const studyTimeApi = new StudyTimeApi();

/***/ }),

/***/ "./src/apiBase/options/subject.ts":
/*!****************************************!*\
  !*** ./src/apiBase/options/subject.ts ***!
  \****************************************/
/*! exports provided: subjectApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subjectApi", function() { return subjectApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class SubjectApi {
  constructor() {
    _defineProperty(this, "getAll", todoApi => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get("/api/Subject/", {
      params: todoApi
    }));

    _defineProperty(this, "getWithID", ID => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`/api/Subject/${ID}`));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post("/api/Subject", data, {}));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put("/api/Subject/", data, {}));
  }

}

const subjectApi = new SubjectApi();

/***/ }),

/***/ "./src/apiBase/options/supplier.ts":
/*!*****************************************!*\
  !*** ./src/apiBase/options/supplier.ts ***!
  \*****************************************/
/*! exports provided: supplierApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supplierApi", function() { return supplierApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Supplier {
  constructor() {
    _defineProperty(this, "getAll", todoApi => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get("/api/SupplierServices", {
      params: todoApi
    }));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post("/api/SupplierServices", data));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put("/api/SupplierServices", data, {}));
  }

}

const supplierApi = new Supplier();

/***/ }),

/***/ "./src/apiBase/options/userinformation.ts":
/*!************************************************!*\
  !*** ./src/apiBase/options/userinformation.ts ***!
  \************************************************/
/*! exports provided: userInformationApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userInformationApi", function() { return userInformationApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class UserInformation {
  constructor() {
    _defineProperty(this, "getAllParams", params => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get('/api/UserInformation', {
      params
    }));

    _defineProperty(this, "getAll", () => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get('/api/UserInformation'));

    _defineProperty(this, "getByID", id => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`/api/UserInformation/${id}`));

    _defineProperty(this, "getAllRole", role => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get('/api/UserInformation', {
      params: {
        RoleID: role
      }
    }));

    _defineProperty(this, "getRole", roleType => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get('/api/GetRole', {
      params: {
        style: roleType // 0 lấy tất cả, 1 lấy nhân viên

      }
    }));

    _defineProperty(this, "getName", params => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get('/api/Staff', {
      params: params
    }));
  }

}

const userInformationApi = new UserInformation();

/***/ }),

/***/ "./src/apiBase/options/ward.ts":
/*!*************************************!*\
  !*** ./src/apiBase/options/ward.ts ***!
  \*************************************/
/*! exports provided: wardApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wardApi", function() { return wardApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const url = "/api/Ward";

class WardApi {
  constructor() {
    _defineProperty(this, "getAll", params => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    }));
  }

  // Thêm mới data
  add(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data);
  } // Cập nhật data


  update(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  } // Xóa data


  delete(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  }

}

const wardApi = new WardApi();

/***/ }),

/***/ "./src/apiBase/package/package-examiner.ts":
/*!*************************************************!*\
  !*** ./src/apiBase/package/package-examiner.ts ***!
  \*************************************************/
/*! exports provided: packageExaminerApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packageExaminerApi", function() { return packageExaminerApi; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = '/api/SetPackageTeacher/';
const packageExaminerApi = {
  // Lấy tất cả data
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  },

  // Lấy theo ID
  getByID(ID) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${url}${ID}`);
  },

  // Thêm mới data
  add(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data);
  },

  // Cập nhật data
  update(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  },

  // Xóa data
  delete(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  }

};

/***/ }),

/***/ "./src/apiBase/package/package-result.ts":
/*!***********************************************!*\
  !*** ./src/apiBase/package/package-result.ts ***!
  \***********************************************/
/*! exports provided: packageResultApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packageResultApi", function() { return packageResultApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const url = '/api/SetPackageResult';

class PackageResultApi {
  constructor() {
    _defineProperty(this, "getAll", Params => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params: Params
    }));

    _defineProperty(this, "getAllStudent", Params => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get('/api/SetPackageResultGetStudentExistResult', {
      params: Params
    }));

    _defineProperty(this, "getDetail", id => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${url}/${id}`));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data, {}));

    _defineProperty(this, "updateTeacher", () => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put('/api/UpdateTeacherOfSetPackageResult'));
  }

}

const packageResultApi = new PackageResultApi();

/***/ }),

/***/ "./src/apiBase/package/package-student.ts":
/*!************************************************!*\
  !*** ./src/apiBase/package/package-student.ts ***!
  \************************************************/
/*! exports provided: packageStudentApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packageStudentApi", function() { return packageStudentApi; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = '/api/SetPackageStudent/';
const packageStudentApi = {
  // Lấy tất cả data
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  },

  // Lấy theo ID
  getByID(ID) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${url}${ID}`);
  },

  // Thêm mới data
  add(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data);
  },

  // Cập nhật data
  update(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  },

  // Xóa data
  delete(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  }

};

/***/ }),

/***/ "./src/apiBase/package/package.ts":
/*!****************************************!*\
  !*** ./src/apiBase/package/package.ts ***!
  \****************************************/
/*! exports provided: packageApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packageApi", function() { return packageApi; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = '/api/SetPackage/';
const packageApi = {
  // Lấy tất cả data
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  },

  // Lấy theo ID
  getByID(ID) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${url}${ID}`);
  },

  // Thêm mới data
  add(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data);
  },

  // Cập nhật data
  update(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  },

  // Xóa data
  delete(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  },

  // Xóa data
  uploadImg(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post('api/SetPackageUpLoad', data);
  }

};

/***/ }),

/***/ "./src/apiBase/package/pay-fix-exam.ts":
/*!*********************************************!*\
  !*** ./src/apiBase/package/pay-fix-exam.ts ***!
  \*********************************************/
/*! exports provided: payFixExamApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "payFixExamApi", function() { return payFixExamApi; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = '/api/PayFixExam/';
const payFixExamApi = {
  // Lấy tất cả data
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  },

  // Lấy theo ID
  getByID(ID) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${url}${ID}`);
  },

  // Thêm mới data
  add(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data);
  },

  // Cập nhật data
  update(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  },

  // Xóa data
  delete(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  }

};

/***/ }),

/***/ "./src/apiBase/package/pay-fix-list.ts":
/*!*********************************************!*\
  !*** ./src/apiBase/package/pay-fix-list.ts ***!
  \*********************************************/
/*! exports provided: payFixListApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "payFixListApi", function() { return payFixListApi; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = '/api/StudenFixExam';
const payFixListApi = {
  // Lấy tất cả data
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  },

  // Lấy theo ID
  getByID(ID) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${url}${ID}`);
  },

  // Thêm mới data
  add(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data);
  },

  // Cập nhật data
  update(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  },

  // Xóa data
  delete(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  }

};

/***/ }),

/***/ "./src/apiBase/reset-password/reset-password.ts":
/*!******************************************************!*\
  !*** ./src/apiBase/reset-password/reset-password.ts ***!
  \******************************************************/
/*! exports provided: resetPasswordApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetPasswordApi", function() { return resetPasswordApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");

const url = "/api/ResetPassword/SendMail";
const resetPasswordApi = {
  // Gửi email
  sendEmail(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data);
  },

  // Xác nhận
  confirm(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put("/api/ResetPassword/UpdatePass", "", {
      params: data
    });
  }

};

/***/ }),

/***/ "./src/apiBase/sale/sale-campaign-detail.ts":
/*!**************************************************!*\
  !*** ./src/apiBase/sale/sale-campaign-detail.ts ***!
  \**************************************************/
/*! exports provided: saleCampaignDetailApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saleCampaignDetailApi", function() { return saleCampaignDetailApi; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = '/api/SaleCampaignDetail/';
const saleCampaignDetailApi = {
  // Lấy tất cả data
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  },

  // Lấy theo ID
  getByID(ID) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${url}${ID}`);
  }

};

/***/ }),

/***/ "./src/apiBase/sale/sale-campaign.ts":
/*!*******************************************!*\
  !*** ./src/apiBase/sale/sale-campaign.ts ***!
  \*******************************************/
/*! exports provided: saleCampaignApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saleCampaignApi", function() { return saleCampaignApi; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = '/api/SaleCampaign/';
const saleCampaignApi = {
  // Lấy tất cả data
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  },

  // Lấy theo ID
  getByID(ID) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${url}${ID}`);
  },

  // Thêm mới data
  add(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data);
  },

  // Cập nhật data
  update(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  },

  // Xóa data
  delete(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  }

};

/***/ }),

/***/ "./src/apiBase/sale/sale-salary.ts":
/*!*****************************************!*\
  !*** ./src/apiBase/sale/sale-salary.ts ***!
  \*****************************************/
/*! exports provided: saleSalaryApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saleSalaryApi", function() { return saleSalaryApi; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = '/api/SaleSalary/';
const saleSalaryApi = {
  // Lấy tất cả data
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  },

  // Lấy theo ID
  getByID(ID) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${url}${ID}`);
  },

  // Thêm mới data
  add(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data);
  },

  // Cập nhật data
  update(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  }

};

/***/ }),

/***/ "./src/apiBase/sale/saler-revenue.ts":
/*!*******************************************!*\
  !*** ./src/apiBase/sale/saler-revenue.ts ***!
  \*******************************************/
/*! exports provided: salerRevenueApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "salerRevenueApi", function() { return salerRevenueApi; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = '/api/SaleCampaignRevenue/';
const salerRevenueApi = {
  // Lấy tất cả data
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  },

  // Lấy theo ID
  getByID(ID) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${url}${ID}`);
  }

};

/***/ }),

/***/ "./src/apiBase/sale/saler-total-revenue.ts":
/*!*************************************************!*\
  !*** ./src/apiBase/sale/saler-total-revenue.ts ***!
  \*************************************************/
/*! exports provided: salerTotalRevenueApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "salerTotalRevenueApi", function() { return salerTotalRevenueApi; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = '/api/CounselorsRevenue/';
const salerTotalRevenueApi = {
  // Lấy tất cả data
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  },

  // Lấy theo ID
  getByID(ID) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${url}${ID}`);
  }

};

/***/ }),

/***/ "./src/apiBase/schedule/check-branch-schedule.tsx":
/*!********************************************************!*\
  !*** ./src/apiBase/schedule/check-branch-schedule.tsx ***!
  \********************************************************/
/*! exports provided: checkBranchScheduleStudy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkBranchScheduleStudy", function() { return checkBranchScheduleStudy; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = 'api/CourseScheduleOfBranch';
const checkBranchScheduleStudy = {
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  }

};

/***/ }),

/***/ "./src/apiBase/schedule/check-teacher-schedule.tsx":
/*!*********************************************************!*\
  !*** ./src/apiBase/schedule/check-teacher-schedule.tsx ***!
  \*********************************************************/
/*! exports provided: checkTeacherScheduleStudy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkTeacherScheduleStudy", function() { return checkTeacherScheduleStudy; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = 'api/ScheduleByMultipleTeacher/';
const checkTeacherScheduleStudy = {
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  }

};

/***/ }),

/***/ "./src/apiBase/self-course/index.ts":
/*!******************************************!*\
  !*** ./src/apiBase/self-course/index.ts ***!
  \******************************************/
/*! exports provided: createSelfCourse, getScheduleSelfCourse, checkStudyTimeSelfCourse, checkTeacherSelfCourse, updateScheduleSelfCourse, cancelScheduleSelfCourse, getRangeTimeSelfCourse, setRangeTimeSelfCourse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelfCourse", function() { return createSelfCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScheduleSelfCourse", function() { return getScheduleSelfCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkStudyTimeSelfCourse", function() { return checkStudyTimeSelfCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkTeacherSelfCourse", function() { return checkTeacherSelfCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateScheduleSelfCourse", function() { return updateScheduleSelfCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelScheduleSelfCourse", function() { return cancelScheduleSelfCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRangeTimeSelfCourse", function() { return getRangeTimeSelfCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRangeTimeSelfCourse", function() { return setRangeTimeSelfCourse; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const createSelfCourse = data => _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post('/api/CreateCourse1vs1/', data);
const getScheduleSelfCourse = id => _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`/api/courseNotScheduleYet/${id}`);
const checkStudyTimeSelfCourse = data => _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`/api/GetStudyTimeByDateAndStudentID?date=${data.date}&curriculumsDetailID=${data.curriculumsDetailID}`);
const checkTeacherSelfCourse = data => _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`/api/GetTeacherByDateAndStudyTimeAndCurriculumDetail?date=${data.date}&curriculumsDetailID=${data.curriculumsDetailID}&studyTimeID=${data.studyTimeID}`);
const updateScheduleSelfCourse = data => _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put('/api/UpdateCourseSchedule', data);
const cancelScheduleSelfCourse = id => _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(`/api/RemoveCourseSchedule/${id}`);
const getRangeTimeSelfCourse = () => _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get('/api/TimeBook');
const setRangeTimeSelfCourse = data => _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put('/api/TimeBook', data);

/***/ }),

/***/ "./src/apiBase/staff-manage/staff.ts":
/*!*******************************************!*\
  !*** ./src/apiBase/staff-manage/staff.ts ***!
  \*******************************************/
/*! exports provided: staffApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staffApi", function() { return staffApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const url = '/api/Staff';

class StaffApi {
  constructor() {
    _defineProperty(this, "getAll", params => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    }));
  }

  // Thêm mới data
  add(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data);
  } // Cập nhật data


  update(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  } // Xóa data


  delete(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  }

}

const staffApi = new StaffApi();

/***/ }),

/***/ "./src/apiBase/staff-manage/task.ts":
/*!******************************************!*\
  !*** ./src/apiBase/staff-manage/task.ts ***!
  \******************************************/
/*! exports provided: taskGroupApi, taskApi, staffOfTaskGroupApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskGroupApi", function() { return taskGroupApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskApi", function() { return taskApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staffOfTaskGroupApi", function() { return staffOfTaskGroupApi; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = '/api/TaskGroup/';
const taskGroupApi = {
  // Lấy tất cả data
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  },

  // Thêm
  add(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data);
  },

  // Cập nhật
  update(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  },

  // Xóa
  delete(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  }

};
const url2 = '/api/Task/';
const taskApi = {
  // Lấy tất cả data
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url2, {
      params
    });
  },

  // Thêm
  add(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url2, data);
  },

  // Cập nhật
  update(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url2, data);
  },

  // Xóa
  delete(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url2, data);
  }

};
const url3 = '/api/StaffOfTaskGroup/';
const staffOfTaskGroupApi = {
  // Lấy tất cả data
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url3, {
      params
    });
  },

  // Thêm
  add(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url3, data);
  },

  // Cập nhật
  update(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url3, data);
  },

  // Xóa
  delete(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url3, data);
  }

};

/***/ }),

/***/ "./src/apiBase/study-role/study-role.ts":
/*!**********************************************!*\
  !*** ./src/apiBase/study-role/study-role.ts ***!
  \**********************************************/
/*! exports provided: studyRoleApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studyRoleApi", function() { return studyRoleApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const url = '/api/StudyRoute';

class StudyRoleApi {
  constructor() {
    _defineProperty(this, "getAll", Params => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params: Params
    }));

    _defineProperty(this, "getDetail", id => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${url}/${id}`));

    _defineProperty(this, "add", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data));

    _defineProperty(this, "update", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data, {}));

    _defineProperty(this, "changePosition", data => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(`/api/StudyRouteChangePlaces`, data, {}));
  }

}

const studyRoleApi = new StudyRoleApi();

/***/ }),

/***/ "./src/apiBase/teacher/teacher.ts":
/*!****************************************!*\
  !*** ./src/apiBase/teacher/teacher.ts ***!
  \****************************************/
/*! exports provided: teacherApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teacherApi", function() { return teacherApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");

const url = '/api/Teacher/';
const teacherApi = {
  // Lấy tất cả data
  getAll(params) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  },

  // Lấy theo id
  getById(id) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${url}${id}`);
  },

  // Thêm mới data
  add(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data);
  },

  // Cập nhật data
  update(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  },

  // Cập nhật data
  updateBranch(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put('/api/UserBranch/', data);
  },

  updateRole(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put('/api/Teacher/', data);
  },

  // Xóa data
  delete(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  },

  // Thông tin lớp học
  getAllTeacherForSubject(id) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`/api/AssignTeacherForSubject/${id}`);
  },

  updateTeacherForSubject(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put('/api/AssignTeacherForSubject', data);
  },

  updateTeacherForAllSubject(params) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put('/api/AssignTeacherForAllSubject', params);
  },

  getTeacherByProgram(params) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get('/api/TeacherByProgram', {
      params
    });
  },

  // Lấy theo id
  getCurriculum(id) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`/api/assignteachercurriculum/getbyteacher/${id}`);
  },

  // Thêm mới data
  assign(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post('/api/assignteachercurriculum/assign', data);
  }

};

/***/ }),

/***/ "./src/apiBase/user/user.ts":
/*!**********************************!*\
  !*** ./src/apiBase/user/user.ts ***!
  \**********************************/
/*! exports provided: userApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userApi", function() { return userApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const url = '/api/UserInformation/';

class UserApi {
  constructor() {
    _defineProperty(this, "getAll", params => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    }));

    _defineProperty(this, "getNew", () => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url + '0'));

    _defineProperty(this, "getByID", params => _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url + params));
  }

  // Thêm mới data
  add(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data);
  } // Cập nhật data


  update(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  } // Xóa data


  delete(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  } // Đổi mật khẩu


  changePassword(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put('/api/Account', data);
  } // Tạo mới tài khoản


  createAccount(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post('/api/CreateAccount', data);
  }

}

const userApi = new UserApi();

/***/ }),

/***/ "./src/apiBase/video-course-list/index.ts":
/*!************************************************!*\
  !*** ./src/apiBase/video-course-list/index.ts ***!
  \************************************************/
/*! exports provided: VideoCourseListApi, DonePayApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCourseListApi", function() { return VideoCourseListApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonePayApi", function() { return DonePayApi; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = '/api/VideoCourseOfStudent/';
const VideoCourseListApi = {
  // Lấy tất cả data
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${url}GetAll?pageIndex=${params.pageIndex}&pageSize=${params.pageSize}&search=${params.search}`);
  },

  // Lấy data theo user
  getByUser(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${url}GetByUser?pageIndex=${params.pageIndex}&pageSize=${params.pageSize}&search=${params.search}`);
  },

  // Cập nhật data
  update(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url + 'StudentEvaluation', data);
  },

  // Cập nhật data
  updateActiveCode(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url + 'UpdateActiveCode', data);
  },

  updateLimitBooking(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url + 'UpdateLimitBooking', data);
  }

};
const donePayUrl = '/api/Order/';
const DonePayApi = {
  // Lấy tất cả data
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${donePayUrl}GetListOrder?pageIndex=${params.pageIndex}&pageSize=${params.pageSize}&search=${params.search}&PaymentStatus=${params.PaymentStatus}`);
  },

  // Cập nhật data
  update(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(donePayUrl + 'UpdatePaidPayment', data);
  }

};

/***/ }),

/***/ "./src/apiBase/video-learning/index.ts":
/*!*********************************************!*\
  !*** ./src/apiBase/video-learning/index.ts ***!
  \*********************************************/
/*! exports provided: VideoCourseOfStudent, VideoCourseInteraction, VideoCourses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCourseOfStudent", function() { return VideoCourseOfStudent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCourseInteraction", function() { return VideoCourseInteraction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCourses", function() { return VideoCourses; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = '/api/VideoCourseOfStudent/';
const VideoCourseOfStudent = {
  // Lấy tất cả data
  getAll(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  },

  // Lấy data theo user
  GetByID(ID) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${url + 'GetByID/'}${ID}`);
  },

  // Cập nhật data
  UpdateSeenAndTimeWatchedVideo(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url + '/UpdateSeenAndTimeWatchedVideo', data);
  },

  // Lấy data GetLessonInProgress
  GetLessonInProgress() {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url + 'GetLessonInProgress/');
  }

};
const urlInteractio = '/api/VideoCourseInteraction/';
const VideoCourseInteraction = {
  GetByID(ID) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${urlInteractio + 'GetByID/'}${ID}`);
  },

  ListQA(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(urlInteractio + 'ListQA', {
      params
    });
  },

  ListNote(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(urlInteractio + 'ListNote', {
      params
    });
  },

  ListListAnnouncement(videocourseID) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(urlInteractio + 'ListAnnouncement/' + videocourseID);
  },

  add(data) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(urlInteractio + 'Insert', data);
  }

};
const urlVideoCourses = '/api/VideoCourses/';
const VideoCourses = {
  ListSection(ID) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${urlVideoCourses + 'ListSection/'}${ID}`);
  },

  ListLesson(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(urlVideoCourses + 'ListLesson', {
      params
    });
  },

  ListQA(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(urlVideoCourses + 'ListQA', {
      params
    });
  },

  LessonDetail(params) {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(urlVideoCourses + 'LessonDetail', {
      params
    });
  }

};

/***/ }),

/***/ "./src/apiBase/zoom/coming-course.ts":
/*!*******************************************!*\
  !*** ./src/apiBase/zoom/coming-course.ts ***!
  \*******************************************/
/*! exports provided: comingCourseApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comingCourseApi", function() { return comingCourseApi; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../instance */ "./src/apiBase/instance.ts");

const url = '/api/ComingSoonCourseSchedule/';
const comingCourseApi = {
  // Lấy tất cả data
  getAll() {
    return _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url);
  }

};

/***/ }),

/***/ "./src/apiBase/zoom/config-zoom.ts":
/*!*****************************************!*\
  !*** ./src/apiBase/zoom/config-zoom.ts ***!
  \*****************************************/
/*! exports provided: configZoomApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configZoomApi", function() { return configZoomApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");

const url = '/api/ZoomTeacherAPI/';
const configZoomApi = {
  // Lấy tất cả data
  getAll(params) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  },

  // Lấy theo id
  getById(id) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${url}${id}`);
  },

  // Thêm mới data
  add(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data);
  },

  // Cập nhật data
  update(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  },

  // Xóa data
  delete(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  },

  getInactiveConfigZoom() {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get('/api/GetZoomTeacherAPIinActive');
  }

};

/***/ }),

/***/ "./src/apiBase/zoom/schedule-zoom.ts":
/*!*******************************************!*\
  !*** ./src/apiBase/zoom/schedule-zoom.ts ***!
  \*******************************************/
/*! exports provided: scheduleZoomApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduleZoomApi", function() { return scheduleZoomApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");

const url = '/api/UserSchedule/';
const scheduleZoomApi = {
  // Lấy tất cả data
  getAll(params) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  },

  // Lấy theo id
  getById(id) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${url}${id}`);
  }

};

/***/ }),

/***/ "./src/apiBase/zoom/zoom-room.ts":
/*!***************************************!*\
  !*** ./src/apiBase/zoom/zoom-room.ts ***!
  \***************************************/
/*! exports provided: zoomRoomApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomRoomApi", function() { return zoomRoomApi; });
/* harmony import */ var _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/apiBase/instance */ "./src/apiBase/instance.ts");

const url = '/api/ZoomRoomSchedule/';
const zoomRoomApi = {
  // Lấy tất cả data
  getAll(params) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(url, {
      params
    });
  },

  // Lấy theo id
  getById(id) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`${url}${id}`);
  },

  // Thêm mới data
  add(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(url, data);
  },

  // Cập nhật data
  update(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  },

  // Xóa data
  delete(data) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(url, data);
  },

  // Tạo phòng
  createRoom(scheduleID) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post(`api/CreateRoom/${scheduleID}`);
  },

  // Đóng phòng
  closeRoom(scheduleID) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].put(`api/CloseRoom/${scheduleID}`);
  },

  getRecord(scheduleID) {
    return _apiBase_instance__WEBPACK_IMPORTED_MODULE_0__["instance"].get(`api/GetRecording/${scheduleID}`);
  }

};

/***/ }),

/***/ "./src/appConfig.js":
/*!**************************!*\
  !*** ./src/appConfig.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const _ = {
  primaryColor: '#50684B',
  secondColor: '#eaede8',
  chromeTitle: 'Coding Mentor',
  description: 'Coding Mentor',
  hostURL: "https://api-codingmentor.monamedia.net"
};
/* harmony default export */ __webpack_exports__["default"] = (_);

/***/ }),

/***/ "./src/components/AuthLayout/AuthLayout.module.scss":
/*!**********************************************************!*\
  !*** ./src/components/AuthLayout/AuthLayout.module.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "AuthLayout_wrapper__23o0O",
	"image-wrapper": "AuthLayout_image-wrapper__1sjAo",
	"calendar-wrapper": "AuthLayout_calendar-wrapper__3UsC8",
	"image": "AuthLayout_image__1T5Y6",
	"calendar": "AuthLayout_calendar__2DdYS",
	"month_year": "AuthLayout_month_year__3UCi0",
	"date": "AuthLayout_date__3TBsc",
	"time": "AuthLayout_time__17Kj6",
	"slogan": "AuthLayout_slogan__1bSoa",
	"content": "AuthLayout_content__3t24W",
	"footer": "AuthLayout_footer__1TlMw",
	"footer__left": "AuthLayout_footer__left__H03Q6"
};


/***/ }),

/***/ "./src/components/AuthLayout/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/AuthLayout/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apiBase_options_idioms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/apiBase/options/idioms */ "./src/apiBase/options/idioms.ts");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/utils/functions */ "./src/utils/functions/index.tsx");
/* harmony import */ var _AuthLayout_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AuthLayout.module.scss */ "./src/components/AuthLayout/AuthLayout.module.scss");
/* harmony import */ var _AuthLayout_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_AuthLayout_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-html-parser */ "react-html-parser");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _apiBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/apiBase */ "./src/apiBase/index.ts");


var _jsxFileName = "D:\\MonaMedia\\Project\\CodingMentor\\CodingMentor-FE\\src\\components\\AuthLayout\\index.tsx";







const SHOW_FOOTER = false;

function AuthLayout({
  children
}) {
  const {
    0: idiom,
    1: setIdiom
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    content: '',
    author: ''
  });
  const {
    0: dateState,
    1: setDateState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(new Date());
  const {
    0: isVisible,
    1: setIsVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: termContent,
    1: setTermContent
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);

  async function getFirstIdiom() {
    try {
      const res = await _apiBase_options_idioms__WEBPACK_IMPORTED_MODULE_2__["idiomsApi"].getRandom();

      if (res.status == 200) {
        var _res$data, _res$data$data, _res$data2, _res$data2$data;

        const content = res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : (_res$data$data = _res$data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.Idioms;
        const author = res === null || res === void 0 ? void 0 : (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : (_res$data2$data = _res$data2.data) === null || _res$data2$data === void 0 ? void 0 : _res$data2$data.CreatedBy;
        setIdiom({
          content,
          author
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getTermsInformation = async () => {
    try {
      let res = await _apiBase__WEBPACK_IMPORTED_MODULE_7__["rulesApi"].getAll({});
      !!(res !== null && res !== void 0 && res.status) && setTermContent(res.data.data);
    } catch (error) {
      console.log('/api/Rules: ', error);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const timeID = setInterval(() => {
      setDateState(Object(_utils_functions__WEBPACK_IMPORTED_MODULE_3__["createDateObject"])(new Date(), 'en'));
    }, 1000);
    return () => {
      clearInterval(timeID);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    getFirstIdiom();
    getTermsInformation();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
      style: {
        overflow: 'hidden'
      },
      zIndex: 99999,
      width: 1000,
      footer: false,
      visible: isVisible,
      onCancel: () => setIsVisible(false),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row ",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-12 term__service mb-4",
          children: react_html_parser__WEBPACK_IMPORTED_MODULE_6___default()(termContent && termContent.RulesContent)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-12",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "btn btn-primary w-100",
            onClick: () => setIsVisible(false),
            children: "X\xE1c nh\u1EADn"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _AuthLayout_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.wrapper,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _AuthLayout_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['image-wrapper'],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _AuthLayout_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['calendar-wrapper'],
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _AuthLayout_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.calendar,
            children: [(dateState === null || dateState === void 0 ? void 0 : dateState.hour) !== undefined ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: _AuthLayout_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.month_year,
                children: dateState.date
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 10
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: _AuthLayout_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.time,
                children: [dateState.month, " ", dateState.year]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 10
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: _AuthLayout_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.month_year,
                children: [dateState.hour, " : ", dateState.minute, " : ", dateState.second]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 10
              }, this)]
            }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: _AuthLayout_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.month_year,
                children: dateState.getDate()
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 10
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: _AuthLayout_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.time,
                children: [dateState.toLocaleDateString('en', {
                  month: 'long'
                }), " ", dateState.getFullYear()]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 10
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: _AuthLayout_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.month_year,
                children: [('0' + dateState.getHours()).slice(-2), " : ", ('0' + dateState.getMinutes()).slice(-2), " : 00"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 10
              }, this)]
            }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _AuthLayout_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.slogan,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _AuthLayout_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.text,
                children: react_html_parser__WEBPACK_IMPORTED_MODULE_6___default()(idiom.content.replace('rgb(0, 23, 55)', 'rgba(255, 255, 255, 0.9)').replace('rgb(0, 23, 55)', 'rgba(255, 255, 255, 0.9)').replace('rgb(0, 23, 55)', 'rgba(255, 255, 255, 0.9)'))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _AuthLayout_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.content,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 4
    }, this), SHOW_FOOTER && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `${_AuthLayout_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.footer}${' row'}`,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: `${_AuthLayout_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.footer__left}`,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "fas fa-map-marker-alt",
          style: {
            color: '#fff'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "ml-3",
          children: "\u0110\u1ECBa ch\u1EC9"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 6
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: `${_AuthLayout_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.footer__left}`,
        style: {
          cursor: 'pointer'
        },
        onClick: () => setIsVisible(true),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "fas fa-book",
          style: {
            color: '#fff'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "ml-3",
          children: "\u0111i\u1EC1u kho\u1EA3n"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 6
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (AuthLayout);

/***/ }),

/***/ "./src/components/LoginForm/LoginForm.module.scss":
/*!********************************************************!*\
  !*** ./src/components/LoginForm/LoginForm.module.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "LoginForm_container__14TKb",
	"fcontrol": "LoginForm_fcontrol__3mzAB",
	"wrapBox": "LoginForm_wrapBox__3pFsD",
	"wrapForm": "LoginForm_wrapForm__2-7fS",
	"imgLogin": "LoginForm_imgLogin__3AXlN",
	"wrapIcon": "LoginForm_wrapIcon__1hkxq",
	"loginForm": "LoginForm_loginForm__JbCcg",
	"title": "LoginForm_title__DE1xD",
	"App": "LoginForm_App__FJ6Yd",
	"form": "LoginForm_form__2IZui",
	"loginFormImg": "LoginForm_loginFormImg__2msMQ",
	"checkbox": "LoginForm_checkbox__rToFa",
	"forgetPass": "LoginForm_forgetPass__34HO1",
	"boxSignup": "LoginForm_boxSignup__3QD3k",
	"boxDemo": "LoginForm_boxDemo__1GmAQ",
	"boxSocial": "LoginForm_boxSocial__16Rn8",
	"noteLogin": "LoginForm_noteLogin__3yVIg"
};


/***/ }),

/***/ "./src/components/LoginForm/index.tsx":
/*!********************************************!*\
  !*** ./src/components/LoginForm/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoginForm.module.scss */ "./src/components/LoginForm/LoginForm.module.scss");
/* harmony import */ var _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "D:\\MonaMedia\\Project\\CodingMentor\\CodingMentor-FE\\src\\components\\LoginForm\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function index(props) {
  var _router$query, _router$query2, _JSON$parse, _router$query3;

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const _Submit = async data => {
    setLoading(true);
    props === null || props === void 0 ? void 0 : props.onSubmit(data);
  };

  const moveToSignUp = e => {
    e.preventDefault();
    router.push('/account/register');
  }; // RENDER


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
      style: {
        marginTop: 0
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.wrapBox,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.wrapForm,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            onSubmit: handleSubmit(_Submit),
            className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.loginForm,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.loginFormImg,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/images/logo-final.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.title,
              children: "\u0110\u0103ng nh\u1EADp"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              name: "csrfToken",
              type: "hidden",
              defaultValue: props === null || props === void 0 ? void 0 : props.csrfToken
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.fcontrol,
              children: "T\xEAn \u0111\u0103ng nh\u1EADp"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread(_objectSpread({
              name: "username",
              defaultValue: ""
            }, register('username', {
              required: true,
              validate: value => {
                return !!value.trim();
              },
              setValueAs: value => value.trim()
            })), {}, {
              placeholder: "Nh\u1EADp t\xEAn \u0111\u0103ng nh\u1EADp"
            }), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 8
            }, this), errors.username && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "form-error",
              children: "H\xE3y \u0111i\u1EC1n t\xEAn \u0111\u0103ng nh\u1EADp"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 28
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.fcontrol,
              children: "M\u1EADt kh\u1EA9u"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread(_objectSpread({
              name: "password",
              type: "password",
              defaultValue: ""
            }, register('password', {
              required: true
            })), {}, {
              placeholder: "Nh\u1EADp m\u1EADt kh\u1EA9u"
            }), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 8
            }, this), errors.password && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "form-error",
              children: "H\xE3y \u0111i\u1EC1n m\u1EADt kh\u1EA9u"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 28
            }, this), !!((_router$query = router.query) !== null && _router$query !== void 0 && _router$query.error) && ((_router$query2 = router.query) === null || _router$query2 === void 0 ? void 0 : _router$query2.error) != 'undefined' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "form-error",
              children: (_JSON$parse = JSON.parse((_router$query3 = router.query) === null || _router$query3 === void 0 ? void 0 : _router$query3.error.toString())) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.message
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "mt-2 d-flex justify-content-end",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.forgetPass,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
                  href: "/reset-password",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    children: "Qu\xEAn m\u1EADt kh\u1EA9u?"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 79,
                    columnNumber: 11
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "position-relative",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "submit",
                value: 'Đăng nhập'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 9
              }, this), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Spin"], {
                className: "loading-login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "w-100 m-1 text-center color-red fw-bold",
                children: props.error && props.error
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.boxSignup,
              children: ["B\u1EA1n ch\u01B0a c\xF3 t\xE0i kho\u1EA3n?", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "",
                onClick: moveToSignUp,
                children: "\u0110\u0103ng k\xED"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./src/context/wrap.tsx":
/*!******************************!*\
  !*** ./src/context/wrap.tsx ***!
  \******************************/
/*! exports provided: WrapProvider, useWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapProvider", function() { return WrapProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWrap", function() { return useWrap; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apiBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/apiBase */ "./src/apiBase/index.ts");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_onesignal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-onesignal */ "react-onesignal");
/* harmony import */ var react_onesignal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_onesignal__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "D:\\MonaMedia\\Project\\CodingMentor\\CodingMentor-FE\\src\\context\\wrap.tsx";








const WrapContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({
  titlePage: '',
  getRouter: '',
  getTitlePage: () => {},
  showNoti: () => {},
  getDataUser: () => {},
  userInformation: null,
  useAllRoles: null,
  useStaffRoles: null,
  pageSize: 30,
  isAdmin: false,
  reloadNotification: false,
  handleReloadNoti: Function,
  reloadCart: false,
  handleReloadCart: Function
});
const WrapProvider = ({
  children
}) => {
  // Get path and slug
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const getRouter = router.pathname;
  let path = router.pathname;
  const [session, loading] = Object(next_auth_client__WEBPACK_IMPORTED_MODULE_7__["useSession"])();
  const {
    0: titlePage,
    1: setTitlePage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: userInfo,
    1: setUserInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: roles,
    1: setRoles
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: staffRoles,
    1: setStaffRoles
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: isAdmin,
    1: setIsAdmin
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: reloadNotification,
    1: setReloadNotification
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: reloadCart,
    1: setReloadCart
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false); // --- Get Title Page ---

  const getTitlePage = title => {
    setTitlePage(title);
  }; // --- Show Notification ---


  const showNoti = (type, content) => {
    const nodeNoti = () => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: `noti-box`,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "noti-box__content",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "icon",
            children: type == 'danger' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["WarningOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 50
            }, undefined) : type == 'success' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["CheckCircleOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 93
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "text",
            children: content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 5
      }, undefined);
    };

    switch (type) {
      case 'success':
        react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].success(nodeNoti);
        break;

      case 'danger':
        react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error(nodeNoti);
        break;

      case 'warning':
        react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].warning(nodeNoti);
        break;

      default:
        break;
    }
  };

  const getRoles = async roleType => {// try {
    // 	let res = await userInformationApi.getRole(roleType)
    // 	res.status == 200 && roleType == 0 ? setRoles(res.data.data) : setStaffRoles(res.data.data)
    // } catch (error) {
    // 	console.log('Lỗi lấy thông tin roles: ', error)
    // }
  }; // --- Get Data User ---


  const getDataUser = data => {
    data && setUserInfo(data);
  }; // --- Check is Admin ---


  const checkIsAdmin = data => {
    let role = data.RoleID;

    if (role == 1 || role == 5) {
      setIsAdmin(true);
    }
  }; // --- Get New Data Use ---


  const getNewDataUser = async () => {
    try {
      let res = await _apiBase__WEBPACK_IMPORTED_MODULE_6__["userApi"].getNew();
      res.status == 200 && (setUserInfo(res.data.data), checkIsAdmin(res.data.data));
    } catch (error) {
      console.log('Lỗi lấy thông tin user: ', error);
    }
  }; // --- Handle Reload Notification ---


  const handleReloadNoti = () => {
    setReloadNotification(!reloadNotification);
  }; // --- Handle Reload Card ---


  const handleReloadCart = () => {
    setReloadCart(!reloadCart);
  };

  const postOnesignalID = async () => {
    try {
      const userId = await react_onesignal__WEBPACK_IMPORTED_MODULE_8___default.a.getUserId();
      let res = await _apiBase__WEBPACK_IMPORTED_MODULE_6__["oneSignalAPI"].update(userId);
    } catch (error) {
      console.log('Lỗi lấy thông tin user: ', error);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (loading && typeof session !== 'undefined' && session !== null) {
      if (path.search('signin') < 1) {
        getNewDataUser();
        getRoles(0);
        getRoles(1);
        postOnesignalID();
      }
    }
  }, [session]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(WrapContext.Provider, {
      value: {
        pageSize: 30,
        titlePage: titlePage,
        getTitlePage,
        getRouter,
        showNoti,
        getDataUser,
        userInformation: userInfo,
        useAllRoles: roles,
        useStaffRoles: staffRoles,
        isAdmin: isAdmin,
        reloadNotification: reloadNotification,
        handleReloadNoti: handleReloadNoti,
        reloadCart: reloadCart,
        handleReloadCart: handleReloadCart
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_4__["ToastContainer"], {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        newestOnTop: false,
        closeOnClick: true,
        rtl: false,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 5
      }, undefined), children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 4
    }, undefined)
  }, void 0, false);
};
const useWrap = () => Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(WrapContext);

/***/ }),

/***/ "./src/pages/auth/signin.tsx":
/*!***********************************!*\
  !*** ./src/pages/auth/signin.tsx ***!
  \***********************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/components/LoginForm */ "./src/components/LoginForm/index.tsx");
/* harmony import */ var _context_wrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/context/wrap */ "./src/context/wrap.tsx");
/* harmony import */ var _components_AuthLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/AuthLayout */ "./src/components/AuthLayout/index.tsx");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/utils/functions */ "./src/utils/functions/index.tsx");


var _jsxFileName = "D:\\MonaMedia\\Project\\CodingMentor\\CodingMentor-FE\\src\\pages\\auth\\signin.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function SignIn({
  csrfToken
}) {
  const {
    showNoti
  } = Object(_context_wrap__WEBPACK_IMPORTED_MODULE_5__["useWrap"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    0: haveError,
    1: setHaveError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    var _router$query;

    if ((_router$query = router.query) !== null && _router$query !== void 0 && _router$query.error) {
      const {
        error
      } = router.query;
      const erData = error.includes('Error:') ? JSON.parse(error.toString().split('Error:')[0]) : {
        status: 69
      };

      switch (erData === null || erData === void 0 ? void 0 : erData.status) {
        case 200:
          showNoti('success', 'Đăng nhập thành công');
          break;

        case 400:
          showNoti('danger', 'Tên đăng nhập hoặc mật khẩu không đúng');
          setHaveError(erData.message);
          break;

        case 404:
          console.log('Không truy cập được API');
          break;

        case 500:
          console.log('Lỗi API');

        case 69:
          console.log(`%ERROR 69:` + `%c URL`, 'color: red; font-weight: bold', 'color: yellow;');

        default:
          console.log(JSON.stringify(erData));
          break;
      }
    }

    return () => {};
  }, []);
  const {
    0: currentUrl,
    1: setCurrentUrl
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const _Submit = data => {
    let type = Object(_utils_functions__WEBPACK_IMPORTED_MODULE_7__["getTypeURL"])(currentUrl);
    Object(next_auth_client__WEBPACK_IMPORTED_MODULE_2__["signIn"])('credentials-signin', _objectSpread(_objectSpread({}, data), {}, {
      callbackUrl: type == 'LOCALHOST' ? 'http://localhost:3003' : type == 'DEMO' ? 'nguyenhuyen.monamedia.net' : 'https://pea-elms.herokuapp.com',
      redirect: true
    }));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LoginForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onSubmit: _Submit,
      csrfToken: csrfToken,
      error: haveError
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 4
    }, this)
  }, void 0, false);
}

SignIn.layout = _components_AuthLayout__WEBPACK_IMPORTED_MODULE_6__["default"];
/* harmony default export */ __webpack_exports__["default"] = (SignIn);
async function getServerSideProps(context) {
  const providers = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_2__["getProviders"])();
  return {
    props: {
      providers
    }
  };
}

/***/ }),

/***/ "./src/utils/functions/index.tsx":
/*!***************************************!*\
  !*** ./src/utils/functions/index.tsx ***!
  \***************************************/
/*! exports provided: fmSelectArr, removeRepeatElementSorted, clearOptionsDuplicate, fmArrayToObjectWithSpecialKey, numberWithCommas, mathRound, fmDateFromNow, parsePriceStrToNumber, usePageVisibility, parseToMoney, createDateObject, getTypeURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fmSelectArr", function() { return fmSelectArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeRepeatElementSorted", function() { return removeRepeatElementSorted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearOptionsDuplicate", function() { return clearOptionsDuplicate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fmArrayToObjectWithSpecialKey", function() { return fmArrayToObjectWithSpecialKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberWithCommas", function() { return numberWithCommas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mathRound", function() { return mathRound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fmDateFromNow", function() { return fmDateFromNow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePriceStrToNumber", function() { return parsePriceStrToNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePageVisibility", function() { return usePageVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseToMoney", function() { return parseToMoney; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDateObject", function() { return createDateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTypeURL", function() { return getTypeURL; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 //  ---------EXPORT TO ARRAY FOR SELECT FIELD---------

const fmSelectArr = (arr, title, value, options = []) => {
  if (Array.isArray(arr) && arr.length > 0) {
    return arr.filter(x => x.Enable === false ? false : x).map(x => ({
      title: x[title],
      value: x[value],
      options: options.reduce((obj, o) => _objectSpread(_objectSpread({}, obj), {}, {
        [o]: x[o]
      }), {})
    }));
  }

  return [];
};
function removeRepeatElementSorted(arr, n) {
  if (n == 0 || n == 1) return n;
  let temp = [arr[0]]; // Start traversing elements

  let j = 0;

  for (let i = 0; i < n - 1; i++) if (arr[i] != arr[i + 1]) temp.push(arr[i + 1]);

  return temp;
}
const clearOptionsDuplicate = arr => {
  return arr.reduce((newArr, o) => {
    if (!newArr.some(o2 => o2.value === o.value)) {
      newArr.push(o);
    }

    return newArr;
  }, []);
};
const fmArrayToObjectWithSpecialKey = (arr, key) => {
  return arr.reduce((newObj, s) => {
    newObj[s[key]] ? newObj[s[key]].push(s) : newObj[s[key]] = [s];
    return newObj;
  }, {});
};
const numberWithCommas = number => {
  if (number == '' || number == undefined || number == null) {
    return '';
  }

  number += '';
  let x = number.split('.');
  let x1 = x[0];
  let x2 = x.length > 1 ? '.' + x[1] : '';
  let rgx = /(\d+)(\d{3})/;

  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }

  return x1 + x2;
};
const mathRound = number => {
  return Math.round(number * 100) / 100;
};
const fmDateFromNow = date => {
  const local = moment__WEBPACK_IMPORTED_MODULE_0___default()(date).local();
  let formattedDate = '';
  const days = moment__WEBPACK_IMPORTED_MODULE_0___default()().diff(local, 'days');

  if (days >= 2) {
    formattedDate = local.locale('vi').format('DD/MM/YYYY HH:mm');
  } else {
    formattedDate = local.locale('vi').fromNow();
  }

  return formattedDate;
};
const parsePriceStrToNumber = str => parseInt(str.toString().replace(/\D/g, '')) || 0; // GET VISIBLE STATUS

function usePageVisibility(cb) {
  const timeoutId = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  let delay = 0;

  const browserCompatApi = () => {
    let hidden, visibilityChange;

    if ('hidden' in document) {
      hidden = 'hidden';
      visibilityChange = 'visibilitychange';
    } else if ('mozHidden' in document) {
      // Firefox up to v17
      hidden = 'mozHidden';
      visibilityChange = 'mozvisibilitychange';
    } else if ('webkitHidden' in document) {
      // Chrome up to v32, Android up to v4.4, Blackberry up to v10
      hidden = 'webkitHidden';
      visibilityChange = 'webkitvisibilitychange';
    }

    return {
      hidden,
      visibilityChange
    };
  };

  const cleanupTimeout = () => clearTimeout(timeoutId.current);

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const {
      hidden,
      visibilityChange
    } = browserCompatApi();
    if (typeof cb !== 'function') throw new Error('callback must be a function');

    const handleVisibilityChange = () => {
      if (delay) {
        if (typeof delay !== 'number' || delay < 0) {
          throw new Error('delay must be a positive integer');
        }

        if (timeoutId.current) cleanupTimeout();
        timeoutId.current = setTimeout(() => cb(!document[hidden]), delay);
      } else {
        cb(!document[hidden]);
      }
    };

    document.addEventListener(visibilityChange, handleVisibilityChange);
    return () => {
      document.removeEventListener(visibilityChange, handleVisibilityChange);
    };
  }, [cb]);
}
const parseToMoney = value => {
  if (value == '' || value == undefined || value == null) {
    return '';
  }

  value += '';
  let x = value.split('.');
  let x1 = x[0];
  let x2 = x.length > 1 ? '.' + x[1] : '';
  let rgx = /(\d+)(\d{3})/;

  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }

  return x1 + x2;
};
const createDateObject = (dateState, locale) => {
  const year = dateState.getFullYear();
  const month = dateState.toLocaleDateString(locale, {
    month: 'long'
  });
  const date = dateState.getDate();
  const hour = ('0' + dateState.getHours()).slice(-2);
  const minute = ('0' + dateState.getMinutes()).slice(-2);
  const second = ('0' + dateState.getSeconds()).slice(-2);
  return {
    year,
    month,
    date,
    hour,
    minute,
    second
  };
};
const getTypeURL = param => {
  if (param !== undefined && param !== null && param !== '') {
    if (param[4] == ':') {
      return 'LOCALHOST';
    } else {
      if (param[4] == 's' && param[8] == 'a' && param[9] == 'p' && param[10] == 'p') {
        return 'LIVE';
      } else {
        return 'HEROKU';
      }
    }
  }
};

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth/client");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "react-html-parser":
/*!************************************!*\
  !*** external "react-html-parser" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-html-parser");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-onesignal":
/*!**********************************!*\
  !*** external "react-onesignal" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-onesignal");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy1ub29wLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY291cnNlLWRldGFpbC9jb3Vyc2UtZGV0YWlsLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2NvdXJzZS1kZXRhaWwvZG9jdW1lbnQtc2NoZWR1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY291cnNlLWRldGFpbC9zdHVkZW50LWxpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY291cnNlLW9ubGluZS1kZXRhaWwvYXZhaWxhYmxlLWRheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jb3Vyc2Utb25saW5lL2xlc3Nvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jb3Vyc2Utb25saW5lL3N0dWR5LWRheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jb3Vyc2UvY2hlY2stcm9vbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jb3Vyc2UvY2hlY2stc3R1ZHktdGltZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jb3Vyc2UvY2hlY2stdGVhY2hlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jb3Vyc2UvY291cnNlLW9mLXN0dWRlbnQtcHJpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY291cnNlL2NvdXJzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jb3Vyc2UvbGVzc29uLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2NvdXJzZS9yb2xsdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY291cnNlL3N0dWR5LWRheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jdXN0b21lci9jb250cmFjdC9jb250cmFjdC1jdXN0b21lci1saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2N1c3RvbWVyL2ZpbmFuY2UvZmluYW5jZS1jYXNoaWVyLWludm9pY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY3VzdG9tZXIvZmluYW5jZS9maW5hbmNlLWNhc2hpZXItcGF5bWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jdXN0b21lci9maW5hbmNlL2ZpbmFuY2UtY2FzaGllci1yZWZ1bmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY3VzdG9tZXIvcGFyZW50cy9wYXJlbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2N1c3RvbWVyL3NlcnZpY2Uvc2VydmljZS1jdXN0b21lci1leGFtLXJlc3VsdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jdXN0b21lci9zZXJ2aWNlL3NlcnZpY2UtY3VzdG9tZXItZXhhbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jdXN0b21lci9zZXJ2aWNlL3Rlc3QtY3VzdG9tZXItcG9pbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2N1c3RvbWVyL3NlcnZpY2UvdGVzdC1jdXN0b21lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jdXN0b21lci9zdHVkZW50L2NvdXJzZS1zdHVkZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2N1c3RvbWVyL3N0dWRlbnQvZXhhbS1hcHBvaW50bWVudC1yZXN1bHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY3VzdG9tZXIvc3R1ZGVudC9leGFtLWNvbWluZy1zb29uLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2N1c3RvbWVyL3N0dWRlbnQvc3R1ZGVudC1hZHZpc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY3VzdG9tZXIvc3R1ZGVudC9zdHVkZW50LWNoYW5nZS1jb3Vyc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY3VzdG9tZXIvc3R1ZGVudC9zdHVkZW50LWNoYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jdXN0b21lci9zdHVkZW50L3N0dWRlbnQtbGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jdXN0b21lci9zdHVkZW50L3dhcm5pbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvZG9pbmctdGVzdC9kb2luZy10ZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2V4YW0tZGV0YWlsL2V4YW0tZGV0YWlsLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2V4YW0vZXhhbS10b3BpYy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9leGVyY2lzZS9leGVyY2lzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9leGVyY2lzZS9leGVyY2lzZUdyb3VwLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2ZlZWQtYmFjay9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9pbnN0YW5jZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9uZXdzZmVlZC9iYWNrZ3JvdW5kLW5ld3NmZWVkLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL25ld3NmZWVkL2dyb3VwLW5ld3NmZWVkLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL25ld3NmZWVkL25ld3NmZWVkLWNvbW1lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL25ld3NmZWVkL25ld3NmZWVkLWNvbW1lbnRyZXBseS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvbmV3c2ZlZWQvbmV3c2ZlZWQtbGlrZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvbmV3c2ZlZWQvbmV3c2ZlZWQudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL25ld3NmZWVkL3VzZXItYnJhbmNoLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL25ld3NmZWVkL3VzZXItZ3JvdXAtbmV3c2ZlZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb25lU2lnbmFsL29uZVNpZ25hbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9vcHRpb25zL2FyZWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9icmFuY2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9jb25zdWx0YXRpb24tc3RhdHVzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvY29udHJhY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9jdXJyaWN1bHVtLWRldGFpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9vcHRpb25zL2N1cnJpY3VsdW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9kYXktb2ZmLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvZGlzY291bnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9kaXN0cmljdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9vcHRpb25zL2dyYWRlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvaWRpb21zLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvam9iLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvbm90aWZpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvcHJpY2UtZml4LWV4YW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9wcm9ncmFtLWRldGFpbC1wb2ludC1jb2x1bW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9wcm9ncmFtLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvcHVyb3NlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvcm9vbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9vcHRpb25zL3J1bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9vcHRpb25zL3NvdXJjZS1pbmZvbWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvc3RhZmYtc2FsYXJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvc3R1ZHktdGltZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9vcHRpb25zL3N1YmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9zdXBwbGllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9vcHRpb25zL3VzZXJpbmZvcm1hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9vcHRpb25zL3dhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvcGFja2FnZS9wYWNrYWdlLWV4YW1pbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3BhY2thZ2UvcGFja2FnZS1yZXN1bHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvcGFja2FnZS9wYWNrYWdlLXN0dWRlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvcGFja2FnZS9wYWNrYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3BhY2thZ2UvcGF5LWZpeC1leGFtLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3BhY2thZ2UvcGF5LWZpeC1saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3NhbGUvc2FsZS1jYW1wYWlnbi1kZXRhaWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvc2FsZS9zYWxlLWNhbXBhaWduLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3NhbGUvc2FsZS1zYWxhcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvc2FsZS9zYWxlci1yZXZlbnVlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3NhbGUvc2FsZXItdG90YWwtcmV2ZW51ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9zY2hlZHVsZS9jaGVjay1icmFuY2gtc2NoZWR1bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3NjaGVkdWxlL2NoZWNrLXRlYWNoZXItc2NoZWR1bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3NlbGYtY291cnNlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3N0YWZmLW1hbmFnZS9zdGFmZi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9zdGFmZi1tYW5hZ2UvdGFzay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9zdHVkeS1yb2xlL3N0dWR5LXJvbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvdGVhY2hlci90ZWFjaGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3VzZXIvdXNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS92aWRlby1jb3Vyc2UtbGlzdC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS92aWRlby1sZWFybmluZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS96b29tL2NvbWluZy1jb3Vyc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvem9vbS9jb25maWctem9vbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS96b29tL3NjaGVkdWxlLXpvb20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvem9vbS96b29tLXJvb20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcENvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BdXRoTGF5b3V0L0F1dGhMYXlvdXQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXV0aExheW91dC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9naW5Gb3JtL0xvZ2luRm9ybS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbkZvcm0vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0L3dyYXAudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9hdXRoL3NpZ25pbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2Z1bmN0aW9ucy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWhvb2stZm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWh0bWwtcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1vbmVzaWduYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbInByZWZldGNoZWQiLCJyb3V0ZXIiLCJlcnIiLCJjdXJMb2NhbGUiLCJvcHRpb25zIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwibG9jYWxlIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJSZWFjdCIsImNvbnNvbGUiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEFzIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJyb290TWFyZ2luIiwic2V0UmVmIiwiZWwiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzVmlzaWJsZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsIk1TX01BWF9JRExFX0RFTEFZIiwiZW50cnkiLCJtYXAiLCJQcm9taXNlIiwicHJvbSIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1dHVyZSIsImdlbmVyYXRvciIsInZhbHVlIiwibGluayIsImRvY3VtZW50Iiwid2luZG93IiwiY2FuUHJlZmV0Y2giLCJoYXNQcmVmZXRjaCIsInJlcyIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJzY3JpcHQiLCJyZWplY3QiLCJtYXJrQXNzZXRFcnJvciIsInNyYyIsImNhbmNlbGxlZCIsInIiLCJvbkJ1aWxkTWFuaWZlc3QiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0Iiwic2NyaXB0cyIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJIiwiY3NzIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIm1hbmlmZXN0Iiwicm91dGUiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsImFwcGVuZFNjcmlwdCIsImZldGNoIiwidGV4dCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIndpdGhGdXR1cmUiLCJvbkVudHJ5cG9pbnQiLCJmbiIsImV4cG9ydHMiLCJjb21wb25lbnQiLCJlcnJvciIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImVudHJ5cG9pbnQiLCJzdHlsZXMiLCJjbiIsIm5hdmlnYXRvciIsIm91dHB1dCIsInByZWZldGNoVmlhRG9tIiwiY3JlYXRlUm91dGVMb2FkZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsImRpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJpZCIsImVudHJpZXMiLCJjYWxsYmFjayIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwicGF0aG5hbWVQYXJ0cyIsImxvY2FsZXMiLCJkZXRlY3RlZExvY2FsZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImlzTG9jYWxVUkwiLCJyZXNvbHZlQXMiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJvcmlnaW4iLCJyZXNvbHZlSHJlZiIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInN0cmlwT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJhZGRCYXNlUGF0aCIsInByZXBhcmVkQXMiLCJjbGVhblBhdGhuYW1lIiwicGFnZXMiLCJwYWdlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJjcmVkZW50aWFscyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImRhdGEiLCJub3RGb3VuZCIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic2RyIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJkZWZhdWx0TG9jYWxlIiwiZG9tYWluTG9jYWxlcyIsImlzUmVhZHkiLCJpc1ByZXZpZXciLCJpc0xvY2FsZURvbWFpbiIsIl9pZHgiLCJzdGF0ZSIsImluaXRpYWwiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsImF1dG9FeHBvcnREeW5hbWljIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJwcmVwYXJlVXJsQXMiLCJzaG91bGRSZXNvbHZlSHJlZiIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyb3V0ZVByb3BzIiwiYWRkTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJwYXJzZWQiLCJfX3Jld3JpdGVzIiwibWV0aG9kIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJub3RGb3VuZFJvdXRlIiwiYXBwQ29tcCIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJmb3JjZWRTY3JvbGwiLCJ4IiwieSIsImNoYW5nZVN0YXRlIiwiX19OIiwiaWR4IiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsImNvdXJzZURldGFpbEFwaSIsImdldEFsbCIsInVwZGF0ZSIsInB1dCIsImFoZWFkU2NoZWR1bGUiLCJkb2N1bWVudFNjaGVkdWxlQXBpIiwiYWRkIiwicG9zdCIsInN0dWRlbnRMaXN0SW5Db3Vyc2VBcGkiLCJjb3Vyc2VPbmxpbmVEZXRhaWxBdmFpbGFibGVEYXlBcGkiLCJsZXNzb25PbmxpbmVBcGkiLCJzdHVkeURheU9ubGluZUFwaSIsImNoZWNrUm9vbUFwaSIsImNoZWNrU3R1ZHlUaW1lQXBpIiwiY2hlY2siLCJjaGVja1RlYWNoZXJBcGkiLCJnZXRBbGxUZWFjaGVyQXZhaWxhYmxlIiwiY291cnNlT2ZTdHVkZW50UHJpY2VBcGkiLCJjb3Vyc2VBcGkiLCJnZXRCeUlkIiwibGVzc29uQXBpIiwiY2FsbEF1dG8iLCJBUElfVVJMIiwiY2FsbEF1dG9NaW51dGUiLCJyb2xsVXBBcGkiLCJzdHVkeURheUFwaSIsIkNvbnRyYWN0Q3VzdG9tZXJMaXN0IiwiUGFyYW1zIiwiY29udHJhY3RDdXN0b21lckxpc3RBcGkiLCJJbnZvaWNlIiwiaW52b2ljZUFwaSIsIlZvdWNoZXIiLCJ2b3VjaGVyQXBpIiwiUmVmdW5kcyIsInJlZnVuZHNBcGkiLCJQYXJlbnRzQXBpIiwicGFyZW50c0FwaSIsIlNlcnZpY2VDdXN0b21lckV4YW1SZXN1bHQiLCJ0b2RvQXBpIiwiSUQiLCJzZXJ2aWNlQ3VzdG9tZXJFeGFtUmVzdWx0QXBpIiwiU2VydmljZUN1c3RvbWVyRXhhbSIsInNlcnZpY2VDdXN0b21lckV4YW1BcGkiLCJUZXN0Q3VzdG9tZXJQb2ludEFwaSIsInRlc3RDdXN0b21lclBvaW50QXBpIiwiVGVzdEN1c3RvbWVyQXBpIiwidGVzdEN1c3RvbWVyQXBpIiwiQ291cnNlU3R1ZGVudEFwaSIsImNvdXJzZVN0dWRlbnRBcGkiLCJleGFtQXBwb2ludG1lbnRSZXN1bHRBcGkiLCJkZWxldGUiLCJnZXRSZXN1bHRFeGFtIiwidXBkYXRlUG9pbnQiLCJjaGVja0lzVGVzdGVkIiwiRXhhbUNvbWluZ1Nvb24iLCJleGFtQ29taW5nU29vbkFwaSIsIlN0dWRlbnRBZHZpc2VBcGkiLCJzdHVkZW50QWR2aXNlQXBpIiwiU3R1ZGVudENoYW5nZUNvdXJzZUFwaSIsInN0dWRlbnRDaGFuZ2VDb3Vyc2VBcGkiLCJTdHVkZW50Q2hhbmdlQXBpIiwic3R1ZGVudENoYW5nZUFwaSIsIlN0dWRlbnRBcGkiLCJmaWxlIiwiZkRhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImxvZyIsInN0dWRlbnRBcGkiLCJXYXJuaW5nIiwid2FybmluZ0FwaSIsImRvaW5nVGVzdEFwaSIsImdldEJ5SUQiLCJleGFtRGV0YWlsQXBpIiwiY3JlYXRlQXV0byIsImNoYW5nZVBvc2l0aW9uIiwiZXhhbVRvcGljQXBpIiwiRXhlcmNpc2VBcGkiLCJpbXBvcnRFeGNlbCIsImV4ZXJjaXNlQXBpIiwiRXhlcmNpc2VHcm91cEFwaSIsIlVwbG9hZEF1ZGlvIiwiZm9ybWRhdGEiLCJleGVyY2lzZUdyb3VwQXBpIiwiRmVlZGJhY2tBcGkiLCJTSE9XX0xPRyIsIk5PREVfU1RBVFVTIiwiaXNTaG93TG9nIiwiZ2V0VXJsIiwiY29uZmlnIiwiYmFzZVVSTCIsInNwbGl0IiwiYXV0aEhlYWRlcl9YIiwic2Vzc2lvbiIsImdldFNlc3Npb24iLCJhY2Nlc3NUb2tlbiIsInRva2VuIiwiYXV0aEhlYWRlcl9CZWFyZXIiLCJBdXRob3JpemF0aW9uIiwiYXhpb3MiLCJjcmVhdGUiLCJob3N0VVJMIiwiaGVhZGVycyIsIkFjY2VwdCIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJ0b1N0cmluZyIsImluY2x1ZGVzIiwiYXV0aEhlYWRlciIsInRvVXBwZXJDYXNlIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJjaGVja1Jlc3BvbnNlIiwic2lnbkluIiwiYWxlcnQiLCJKU09OIiwic3RyaW5naWZ5IiwiQmFja2dyb3VuZE5ld3NGZWVkIiwiYmFja2dyb3VuZE5ld3NGZWVkQXBpIiwiR3JvdXBOZXdzRmVlZCIsImdyb3VwTmV3c0ZlZWRBcGkiLCJOZXdzRmVlZENvbW1lbnQiLCJuZXdzRmVlZENvbW1lbnRBcGkiLCJOZXdzRmVlZENvbW1lbnRSZXBseSIsIm5ld3NGZWVkQ29tbWVudFJlcGx5QXBpIiwiTmV3c0ZlZWRMaWtlIiwibmV3c0ZlZWRMaWtlQXBpIiwiTmV3c0ZlZWQiLCJuZXdzRmVlZEFwaSIsIlVzZXJCcmFuY2giLCJ1c2VyQnJhbmNoQXBpIiwiVXNlckdyb3VwTmV3c0ZlZWQiLCJ1c2VyR3JvdXBOZXdzRmVlZEFwaSIsIm9uZVNpZ25hbEFQSSIsIkFyZWFBcGkiLCJhcmVhQXBpIiwiQnJhbmNoQXBpIiwiYnJhbmNoQXBpIiwiQ29uZmlnIiwiY29uZmlnQXBpIiwiQ29uc3VsdGF0aW9uU3RhdHVzQXBpIiwiY29uc3VsdGF0aW9uU3RhdHVzQXBpIiwiY29udHJhY3RBcGkiLCJDdXJyaWN1bHVtRGV0YWlsQXBpIiwiY3VycmljdWx1bURldGFpbEFwaSIsIkN1cnJpY3VsdW1BcGkiLCJjdXJyaWN1bHVtQXBpIiwiZGF5T2ZmQXBpIiwiRGlzY291bnRBcGkiLCJkaXNjb3VudEFwaSIsIkRpc3RyaWN0QXBpIiwiYXJlYUlEIiwiQXJlYUlEIiwiZGlzdHJpY3RBcGkiLCJHcmFkZUFwaSIsImdyYWRlQXBpIiwiSWRpb21zQXBpIiwiaWRpb21zQXBpIiwiSm9iQXBpIiwiam9iUGFyYW1zIiwiam9iQXBpIiwiTm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9uQXBpIiwiUHJpY2VGaXhFeGFtQXBpIiwicHJpY2VGaXhFeGFtQXBpIiwicHJvZ3JhbURldGFpbFBvaW50Q29sdW1uQXBpIiwiUHJvZ3JhbUFwaSIsInByb2dyYW1BcGkiLCJQdXJvc2UiLCJwdXJvc2VBcGkiLCJSb29tQXBpIiwicm9vbUFwaSIsIlJ1bGVzIiwicnVsZXNBcGkiLCJTZXJ2aWNlQXBpIiwic2VydmljZUFwaSIsIlNvdXJjZUluZm9tYXRpb24iLCJzb3VyY2VJbmZvbWF0aW9uQXBpIiwiU3RhZmZTYWxhcnkiLCJzdGFmZlNhbGFyeUFwaSIsIlN0dWR5VGltZUFwaSIsInN0dWR5VGltZUFwaSIsIlN1YmplY3RBcGkiLCJzdWJqZWN0QXBpIiwiU3VwcGxpZXIiLCJzdXBwbGllckFwaSIsIlVzZXJJbmZvcm1hdGlvbiIsInJvbGUiLCJSb2xlSUQiLCJyb2xlVHlwZSIsInN0eWxlIiwidXNlckluZm9ybWF0aW9uQXBpIiwiV2FyZEFwaSIsIndhcmRBcGkiLCJwYWNrYWdlRXhhbWluZXJBcGkiLCJQYWNrYWdlUmVzdWx0QXBpIiwicGFja2FnZVJlc3VsdEFwaSIsInBhY2thZ2VTdHVkZW50QXBpIiwicGFja2FnZUFwaSIsInVwbG9hZEltZyIsInBheUZpeEV4YW1BcGkiLCJwYXlGaXhMaXN0QXBpIiwicmVzZXRQYXNzd29yZEFwaSIsInNlbmRFbWFpbCIsImNvbmZpcm0iLCJzYWxlQ2FtcGFpZ25EZXRhaWxBcGkiLCJzYWxlQ2FtcGFpZ25BcGkiLCJzYWxlU2FsYXJ5QXBpIiwic2FsZXJSZXZlbnVlQXBpIiwic2FsZXJUb3RhbFJldmVudWVBcGkiLCJjaGVja0JyYW5jaFNjaGVkdWxlU3R1ZHkiLCJjaGVja1RlYWNoZXJTY2hlZHVsZVN0dWR5IiwiY3JlYXRlU2VsZkNvdXJzZSIsImdldFNjaGVkdWxlU2VsZkNvdXJzZSIsImNoZWNrU3R1ZHlUaW1lU2VsZkNvdXJzZSIsImRhdGUiLCJjdXJyaWN1bHVtc0RldGFpbElEIiwiY2hlY2tUZWFjaGVyU2VsZkNvdXJzZSIsInN0dWR5VGltZUlEIiwidXBkYXRlU2NoZWR1bGVTZWxmQ291cnNlIiwiY2FuY2VsU2NoZWR1bGVTZWxmQ291cnNlIiwiZ2V0UmFuZ2VUaW1lU2VsZkNvdXJzZSIsInNldFJhbmdlVGltZVNlbGZDb3Vyc2UiLCJTdGFmZkFwaSIsInN0YWZmQXBpIiwidGFza0dyb3VwQXBpIiwidXJsMiIsInRhc2tBcGkiLCJ1cmwzIiwic3RhZmZPZlRhc2tHcm91cEFwaSIsIlN0dWR5Um9sZUFwaSIsInN0dWR5Um9sZUFwaSIsInRlYWNoZXJBcGkiLCJ1cGRhdGVCcmFuY2giLCJ1cGRhdGVSb2xlIiwiZ2V0QWxsVGVhY2hlckZvclN1YmplY3QiLCJ1cGRhdGVUZWFjaGVyRm9yU3ViamVjdCIsInVwZGF0ZVRlYWNoZXJGb3JBbGxTdWJqZWN0IiwiZ2V0VGVhY2hlckJ5UHJvZ3JhbSIsImdldEN1cnJpY3VsdW0iLCJhc3NpZ24iLCJVc2VyQXBpIiwiY2hhbmdlUGFzc3dvcmQiLCJjcmVhdGVBY2NvdW50IiwidXNlckFwaSIsIlZpZGVvQ291cnNlTGlzdEFwaSIsInBhZ2VJbmRleCIsInBhZ2VTaXplIiwiZ2V0QnlVc2VyIiwidXBkYXRlQWN0aXZlQ29kZSIsInVwZGF0ZUxpbWl0Qm9va2luZyIsImRvbmVQYXlVcmwiLCJEb25lUGF5QXBpIiwiUGF5bWVudFN0YXR1cyIsIlZpZGVvQ291cnNlT2ZTdHVkZW50IiwiR2V0QnlJRCIsIlVwZGF0ZVNlZW5BbmRUaW1lV2F0Y2hlZFZpZGVvIiwiR2V0TGVzc29uSW5Qcm9ncmVzcyIsInVybEludGVyYWN0aW8iLCJWaWRlb0NvdXJzZUludGVyYWN0aW9uIiwiTGlzdFFBIiwiTGlzdE5vdGUiLCJMaXN0TGlzdEFubm91bmNlbWVudCIsInZpZGVvY291cnNlSUQiLCJ1cmxWaWRlb0NvdXJzZXMiLCJWaWRlb0NvdXJzZXMiLCJMaXN0U2VjdGlvbiIsIkxpc3RMZXNzb24iLCJMZXNzb25EZXRhaWwiLCJjb21pbmdDb3Vyc2VBcGkiLCJjb25maWdab29tQXBpIiwiZ2V0SW5hY3RpdmVDb25maWdab29tIiwic2NoZWR1bGVab29tQXBpIiwiem9vbVJvb21BcGkiLCJjcmVhdGVSb29tIiwic2NoZWR1bGVJRCIsImNsb3NlUm9vbSIsImdldFJlY29yZCIsInByaW1hcnlDb2xvciIsInNlY29uZENvbG9yIiwiY2hyb21lVGl0bGUiLCJkZXNjcmlwdGlvbiIsIk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVCIsIlNIT1dfRk9PVEVSIiwiQXV0aExheW91dCIsImlkaW9tIiwic2V0SWRpb20iLCJ1c2VTdGF0ZSIsImF1dGhvciIsImRhdGVTdGF0ZSIsInNldERhdGVTdGF0ZSIsInNldElzVmlzaWJsZSIsInRlcm1Db250ZW50Iiwic2V0VGVybUNvbnRlbnQiLCJnZXRGaXJzdElkaW9tIiwiZ2V0UmFuZG9tIiwiSWRpb21zIiwiQ3JlYXRlZEJ5IiwiZ2V0VGVybXNJbmZvcm1hdGlvbiIsInVzZUVmZmVjdCIsInRpbWVJRCIsInNldEludGVydmFsIiwiY3JlYXRlRGF0ZU9iamVjdCIsImNsZWFySW50ZXJ2YWwiLCJvdmVyZmxvdyIsIlJlYWN0SHRtbFBhcnNlciIsIlJ1bGVzQ29udGVudCIsIndyYXBwZXIiLCJjYWxlbmRhciIsImhvdXIiLCJ1bmRlZmluZWQiLCJtb250aF95ZWFyIiwidGltZSIsIm1vbnRoIiwieWVhciIsIm1pbnV0ZSIsInNlY29uZCIsImdldERhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJnZXRGdWxsWWVhciIsImdldEhvdXJzIiwic2xpY2UiLCJnZXRNaW51dGVzIiwic2xvZ2FuIiwiZm9vdGVyIiwiZm9vdGVyX19sZWZ0IiwiY29sb3IiLCJjdXJzb3IiLCJpbmRleCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwidXNlRm9ybSIsInVzZVJvdXRlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiX1N1Ym1pdCIsIm9uU3VibWl0IiwibW92ZVRvU2lnblVwIiwicHJldmVudERlZmF1bHQiLCJjb250YWluZXIiLCJtYXJnaW5Ub3AiLCJ3cmFwQm94Iiwid3JhcEZvcm0iLCJsb2dpbkZvcm0iLCJsb2dpbkZvcm1JbWciLCJ0aXRsZSIsImNzcmZUb2tlbiIsImZjb250cm9sIiwicmVxdWlyZWQiLCJ2YWxpZGF0ZSIsInRyaW0iLCJzZXRWYWx1ZUFzIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInBhcnNlIiwiZm9yZ2V0UGFzcyIsImJveFNpZ251cCIsIldyYXBDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInRpdGxlUGFnZSIsImdldFRpdGxlUGFnZSIsInNob3dOb3RpIiwiZ2V0RGF0YVVzZXIiLCJ1c2VySW5mb3JtYXRpb24iLCJ1c2VBbGxSb2xlcyIsInVzZVN0YWZmUm9sZXMiLCJpc0FkbWluIiwicmVsb2FkTm90aWZpY2F0aW9uIiwiaGFuZGxlUmVsb2FkTm90aSIsIkZ1bmN0aW9uIiwicmVsb2FkQ2FydCIsImhhbmRsZVJlbG9hZENhcnQiLCJXcmFwUHJvdmlkZXIiLCJ1c2VTZXNzaW9uIiwic2V0VGl0bGVQYWdlIiwidXNlckluZm8iLCJzZXRVc2VySW5mbyIsInJvbGVzIiwic2V0Um9sZXMiLCJzdGFmZlJvbGVzIiwic2V0U3RhZmZSb2xlcyIsInNldElzQWRtaW4iLCJzZXRSZWxvYWROb3RpZmljYXRpb24iLCJzZXRSZWxvYWRDYXJ0IiwidHlwZSIsIm5vZGVOb3RpIiwidG9hc3QiLCJzdWNjZXNzIiwid2FybmluZyIsImdldFJvbGVzIiwiY2hlY2tJc0FkbWluIiwiZ2V0TmV3RGF0YVVzZXIiLCJnZXROZXciLCJwb3N0T25lc2lnbmFsSUQiLCJ1c2VySWQiLCJPbmVTaWduYWwiLCJnZXRVc2VySWQiLCJ1c2VXcmFwIiwidXNlQ29udGV4dCIsIlNpZ25JbiIsImhhdmVFcnJvciIsInNldEhhdmVFcnJvciIsImVyRGF0YSIsImN1cnJlbnRVcmwiLCJzZXRDdXJyZW50VXJsIiwibG9jYXRpb24iLCJnZXRUeXBlVVJMIiwiY2FsbGJhY2tVcmwiLCJyZWRpcmVjdCIsImxheW91dCIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJwcm92aWRlcnMiLCJnZXRQcm92aWRlcnMiLCJmbVNlbGVjdEFyciIsImFyciIsImlzQXJyYXkiLCJsZW5ndGgiLCJmaWx0ZXIiLCJFbmFibGUiLCJyZWR1Y2UiLCJvYmoiLCJvIiwicmVtb3ZlUmVwZWF0RWxlbWVudFNvcnRlZCIsIm4iLCJ0ZW1wIiwiaiIsImNsZWFyT3B0aW9uc0R1cGxpY2F0ZSIsIm5ld0FyciIsInNvbWUiLCJvMiIsImZtQXJyYXlUb09iamVjdFdpdGhTcGVjaWFsS2V5IiwibmV3T2JqIiwicyIsIm51bWJlcldpdGhDb21tYXMiLCJudW1iZXIiLCJ4MSIsIngyIiwicmd4IiwidGVzdCIsIm1hdGhSb3VuZCIsInJvdW5kIiwiZm1EYXRlRnJvbU5vdyIsImxvY2FsIiwibW9tZW50IiwiZm9ybWF0dGVkRGF0ZSIsImRheXMiLCJkaWZmIiwiZm9ybWF0IiwiZnJvbU5vdyIsInBhcnNlUHJpY2VTdHJUb051bWJlciIsInVzZVBhZ2VWaXNpYmlsaXR5IiwidGltZW91dElkIiwidXNlUmVmIiwiZGVsYXkiLCJicm93c2VyQ29tcGF0QXBpIiwiaGlkZGVuIiwidmlzaWJpbGl0eUNoYW5nZSIsImNsZWFudXBUaW1lb3V0IiwiY3VycmVudCIsIkVycm9yIiwiaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicGFyc2VUb01vbmV5IiwiZ2V0U2Vjb25kcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBLGdHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0FBRUE7O0FBU0E7O0FBQ0E7O0FBdUJBLE1BQU1BLFVBQTJDLEdBQWpEOztBQUVBLDZDQUtRO0FBQ04sTUFBSSxJQUFKLEVBQThDO0FBQzlDLE1B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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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TTNCLFNBQVMsQ0FBQ2tMLFVBQVYsRUFBUCxFQUErQmxKLEtBQS9CLENBQXFDLENBQUMsQ0FBdEMsQ0FBZjtBQUNBLFNBQU87QUFBRVAsUUFBRjtBQUFRRCxTQUFSO0FBQWVsRyxRQUFmO0FBQXFCOEYsUUFBckI7QUFBMkJNLFVBQTNCO0FBQW1DQztBQUFuQyxHQUFQO0FBQ0EsQ0FSTTtBQVVBLE1BQU00RixVQUFVLEdBQUk3a0IsS0FBRCxJQUFnQjtBQUN6QyxNQUFJQSxLQUFLLEtBQUsyZSxTQUFWLElBQXVCM2UsS0FBSyxLQUFLLElBQWpDLElBQXlDQSxLQUFLLEtBQUssRUFBdkQsRUFBMkQ7QUFDMUQsUUFBSUEsS0FBSyxDQUFDLENBQUQsQ0FBTCxJQUFZLEdBQWhCLEVBQXFCO0FBQ3BCLGFBQU8sV0FBUDtBQUNBLEtBRkQsTUFFTztBQUNOLFVBQUlBLEtBQUssQ0FBQyxDQUFELENBQUwsSUFBWSxHQUFaLElBQW1CQSxLQUFLLENBQUMsQ0FBRCxDQUFMLElBQVksR0FBL0IsSUFBc0NBLEtBQUssQ0FBQyxDQUFELENBQUwsSUFBWSxHQUFsRCxJQUF5REEsS0FBSyxDQUFDLEVBQUQsQ0FBTCxJQUFhLEdBQTFFLEVBQStFO0FBQzlFLGVBQU8sTUFBUDtBQUNBLE9BRkQsTUFFTztBQUNOLGVBQU8sUUFBUDtBQUNBO0FBQ0Q7QUFDRDtBQUNELENBWk0sQzs7Ozs7Ozs7Ozs7QUN2SlAsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvYXV0aC9zaWduaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9hdXRoL3NpZ25pbi50c3hcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGdldERvbWFpbkxvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICBjb25zdCBjdXJMb2NhbGUgPVxuICAgIG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCk6IGJvb2xlYW4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgc2hhbGxvdyxcbiAgICBsb2NhbGUsXG4gICAgc2Nyb2xsLFxuICB9KVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLmFzUGF0aCkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRSZWY6IGFueSA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmXG5cbiAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9IHVzZUludGVyc2VjdGlvbih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgfSlcbiAgY29uc3Qgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NoaWxkUmVmLCBzZXRJbnRlcnNlY3Rpb25SZWZdXG4gIClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmIGlzTG9jYWxVUkwoaHJlZilcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldXG4gICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGUsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2FzLCBocmVmLCBpc1Zpc2libGUsIGxvY2FsZSwgcCwgcm91dGVyXSlcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgfVxuICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgY29uc3QgbG9jYWxlRG9tYWluID1cbiAgICAgIHJvdXRlciAmJlxuICAgICAgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICBnZXREb21haW5Mb2NhbGUoXG4gICAgICAgIGFzLFxuICAgICAgICBjdXJMb2NhbGUsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcyxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzXG4gICAgICApXG5cbiAgICBjaGlsZFByb3BzLmhyZWYgPVxuICAgICAgbG9jYWxlRG9tYWluIHx8XG4gICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSlcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICAgIGNhbmNlbElkbGVDYWxsYmFjazogKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSA9PiB2b2lkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcbiAgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2xpZW50QnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL2J1aWxkL3dlYnBhY2svcGx1Z2lucy9idWlsZC1tYW5pZmVzdC1wbHVnaW4nXG5pbXBvcnQgZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZSdcbmltcG9ydCB7IHJlcXVlc3RJZGxlQ2FsbGJhY2sgfSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fQlVJTERfTUFOSUZFU1Q/OiBDbGllbnRCdWlsZE1hbmlmZXN0XG4gICAgX19CVUlMRF9NQU5JRkVTVF9DQj86IEZ1bmN0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBleHBvcnRzOiBhbnlcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludEZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVFbnRyeXBvaW50ID0gTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3MgfCBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlU3R5bGVTaGVldCB7XG4gIGhyZWY6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIHN0eWxlczogUm91dGVTdHlsZVNoZWV0W11cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlTG9hZGVyRW50cnkgPSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgfCBMb2FkZWRSb3V0ZUZhaWx1cmVcblxuZXhwb3J0IHR5cGUgRnV0dXJlPFY+ID0ge1xuICByZXNvbHZlOiAoZW50cnlwb2ludDogVikgPT4gdm9pZFxuICBmdXR1cmU6IFByb21pc2U8Vj5cbn1cbmZ1bmN0aW9uIHdpdGhGdXR1cmU8VD4oXG4gIGtleTogc3RyaW5nLFxuICBtYXA6IE1hcDxzdHJpbmcsIEZ1dHVyZTxUPiB8IFQ+LFxuICBnZW5lcmF0b3I/OiAoKSA9PiBQcm9taXNlPFQ+XG4pOiBQcm9taXNlPFQ+IHtcbiAgbGV0IGVudHJ5OiBGdXR1cmU8VD4gfCBUIHwgdW5kZWZpbmVkID0gbWFwLmdldChrZXkpXG4gIGlmIChlbnRyeSkge1xuICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KVxuICB9XG4gIGxldCByZXNvbHZlcjogKGVudHJ5cG9pbnQ6IFQpID0+IHZvaWRcbiAgY29uc3QgcHJvbTogUHJvbWlzZTxUPiA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZXIgPSByZXNvbHZlXG4gIH0pXG4gIG1hcC5zZXQoa2V5LCAoZW50cnkgPSB7IHJlc29sdmU6IHJlc29sdmVyISwgZnV0dXJlOiBwcm9tIH0pKVxuICByZXR1cm4gZ2VuZXJhdG9yXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSkgPT4gKHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpKVxuICAgIDogcHJvbVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlTG9hZGVyIHtcbiAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVFbnRyeXBvaW50PlxuICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bik6IHZvaWRcbiAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcsIHByZWZldGNoPzogYm9vbGVhbik6IFByb21pc2U8Um91dGVMb2FkZXJFbnRyeT5cbiAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cbn1cblxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaz86IEhUTUxMaW5rRWxlbWVudCk6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcbiAgICByZXR1cm4gKFxuICAgICAgLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhKGRvY3VtZW50IGFzIGFueSkuZG9jdW1lbnRNb2RlKSB8fFxuICAgICAgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpXG4gICAgKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5jb25zdCBjYW5QcmVmZXRjaDogYm9vbGVhbiA9IGhhc1ByZWZldGNoKClcblxuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgbGluaz86IEhUTUxMaW5rRWxlbWVudFxuKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICByZXR1cm4gcmVzKClcbiAgICB9XG5cbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgIGlmIChhcykgbGluayEuYXMgPSBhc1xuICAgIGxpbmshLnJlbCA9IGBwcmVmZXRjaGBcbiAgICBsaW5rIS5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG4gICAgbGluayEub25sb2FkID0gcmVzXG4gICAgbGluayEub25lcnJvciA9IHJlalxuXG4gICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICBsaW5rIS5ocmVmID0gaHJlZlxuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKVxuICB9KVxufVxuXG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJylcbi8vIFRPRE86IHVuZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHt9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycj86IEVycm9yKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnJcbn1cblxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KFxuICBzcmM6IHN0cmluZyxcbiAgc2NyaXB0PzogSFRNTFNjcmlwdEVsZW1lbnRcbik6IFByb21pc2U8dW5rbm93bj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZVxuICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT5cbiAgICAgIHJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuXG4gICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcblxuICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgc2NyaXB0LnNyYyA9IHNyY1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICB9KVxufVxuXG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxUPihcbiAgcDogUHJvbWlzZTxUPixcbiAgbXM6IG51bWJlcixcbiAgZXJyOiBFcnJvclxuKTogUHJvbWlzZTxUPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG5cbiAgICBwLnRoZW4oKHIpID0+IHtcbiAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHJlc29sdmUocilcbiAgICB9KS5jYXRjaChyZWplY3QpXG5cbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9LCBtcylcbiAgICApXG4gIH0pXG59XG5cbi8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpOiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+IHtcbiAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICB9XG5cbiAgY29uc3Qgb25CdWlsZE1hbmlmZXN0OiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+ID0gbmV3IFByb21pc2U8XG4gICAgQ2xpZW50QnVpbGRNYW5pZmVzdFxuICA+KChyZXNvbHZlKSA9PiB7XG4gICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCXG4gICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QhKVxuICAgICAgY2IgJiYgY2IoKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxDbGllbnRCdWlsZE1hbmlmZXN0PihcbiAgICBvbkJ1aWxkTWFuaWZlc3QsXG4gICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSlcbiAgKVxufVxuXG5pbnRlcmZhY2UgUm91dGVGaWxlcyB7XG4gIHNjcmlwdHM6IHN0cmluZ1tdXG4gIGNzczogc3RyaW5nW11cbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoXG4gIGFzc2V0UHJlZml4OiBzdHJpbmcsXG4gIHJvdXRlOiBzdHJpbmdcbik6IFByb21pc2U8Um91dGVGaWxlcz4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgK1xuICAgICAgICAgIGVuY29kZVVSSShnZXRBc3NldFBhdGhGcm9tUm91dGUocm91dGUsICcuanMnKSksXG4gICAgICBdLFxuICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgY3NzOiBbXSxcbiAgICB9KVxuICB9XG4gIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpID0+IHtcbiAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSlcbiAgICB9XG4gICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKFxuICAgICAgKGVudHJ5KSA9PiBhc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICApXG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmpzJykpLFxuICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5jc3MnKSksXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeDogc3RyaW5nKTogUm91dGVMb2FkZXIge1xuICBjb25zdCBlbnRyeXBvaW50czogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVFbnRyeXBvaW50PiB8IFJvdXRlRW50cnlwb2ludFxuICA+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IGxvYWRlZFNjcmlwdHM6IE1hcDxzdHJpbmcsIFByb21pc2U8dW5rbm93bj4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHN0eWxlU2hlZXRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHJvdXRlczogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4gfCBSb3V0ZUxvYWRlckVudHJ5XG4gID4gPSBuZXcgTWFwKClcblxuICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjOiBzdHJpbmcpOiBQcm9taXNlPHVua25vd24+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTx1bmtub3duPiB8IHVuZGVmaW5lZCA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYylcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgIH1cblxuICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgKHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSkpXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4gfCB1bmRlZmluZWQgPSBzdHlsZVNoZWV0cy5nZXQoaHJlZilcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICBzdHlsZVNoZWV0cy5zZXQoXG4gICAgICBocmVmLFxuICAgICAgKHByb20gPSBmZXRjaChocmVmKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpID0+ICh7IGhyZWY6IGhyZWYsIGNvbnRlbnQ6IHRleHQgfSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgICAgICB9KSlcbiAgICApXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKVxuICAgIH0sXG4gICAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKVxuICAgICAgICAudGhlbigoZm4pID0+IGZuKCkpXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIChleHBvcnRzOiBhbnkpID0+ICh7XG4gICAgICAgICAgICBjb21wb25lbnQ6IChleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCkgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHMsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgKGVycikgPT4gKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICApXG4gICAgICAgIC50aGVuKChpbnB1dDogUm91dGVFbnRyeXBvaW50KSA9PiB7XG4gICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKVxuICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpXG4gICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dClcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nLCBwcmVmZXRjaD86IGJvb2xlYW4pIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+KHJvdXRlLCByb3V0ZXMsICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoXG4gICAgICAgICAgZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgICAgICAudGhlbigoeyBzY3JpcHRzLCBjc3MgfSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSlcbiAgICAgICAgICAgICAgICAgID8gW11cbiAgICAgICAgICAgICAgICAgIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSxcbiAgICAgICAgICAgICAgXSBhcyBjb25zdClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKChlbnRyeXBvaW50KSA9PiAoe1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnQsXG4gICAgICAgICAgICAgICAgc3R5bGVzOiByZXNbMV0sXG4gICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICAgICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpXG4gICAgICAgIClcbiAgICAgICAgICAudGhlbigoeyBlbnRyeXBvaW50LCBzdHlsZXMgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzOiBSb3V0ZUxvYWRlckVudHJ5ID0gT2JqZWN0LmFzc2lnbjxcbiAgICAgICAgICAgICAgeyBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdIH0sXG4gICAgICAgICAgICAgIFJvdXRlRW50cnlwb2ludFxuICAgICAgICAgICAgPih7IHN0eWxlczogc3R5bGVzISB9LCBlbnRyeXBvaW50KVxuICAgICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXNcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG4gICAgICAgICAgICAgIHRocm93IGVyclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9XG4gICAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUsIHRydWUpLmNhdGNoKCgpID0+IHt9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKFxuICAgICAgICAgIC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgKVxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUm91dGVMb2FkZXJcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG4gICdpc1JlYWR5JyxcbiAgJ2lzUHJldmlldycsXG4gICdpc0xvY2FsZURvbWFpbicsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50OiBzdHJpbmcpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgcmVxdWVzdElkbGVDYWxsYmFjayxcbiAgY2FuY2VsSWRsZUNhbGxiYWNrLFxufSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuKToge1xuICBkZXRlY3RlZExvY2FsZT86IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG59IHtcbiAgbGV0IGRldGVjdGVkTG9jYWxlOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgLy8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG4gIGNvbnN0IHBhdGhuYW1lUGFydHMgPSBwYXRobmFtZS5zcGxpdCgnLycpXG5cbiAgOyhsb2NhbGVzIHx8IFtdKS5zb21lKChsb2NhbGUpID0+IHtcbiAgICBpZiAocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpID09PSBsb2NhbGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgZGV0ZWN0ZWRMb2NhbGUgPSBsb2NhbGVcbiAgICAgIHBhdGhuYW1lUGFydHMuc3BsaWNlKDEsIDEpXG4gICAgICBwYXRobmFtZSA9IHBhdGhuYW1lUGFydHMuam9pbignLycpIHx8ICcvJ1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBkZXRlY3RlZExvY2FsZSxcbiAgfVxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIE5FWFRfREFUQSxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvKiBwcm9kICovXG4gICAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIH1cbn1cblxuaW50ZXJmYWNlIFJvdXRlUHJvcGVydGllcyB7XG4gIHNoYWxsb3c6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2VcbiAgc2Nyb2xsPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPVxuICB8IG51bGxcbiAgfCB7IF9fTjogZmFsc2UgfVxuICB8ICh7IF9fTjogdHJ1ZTsgaWR4OiBudW1iZXIgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmxldCBkZXRlY3REb21haW5Mb2NhbGU6IHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGVcblxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpXG4gICAgLmRldGVjdERvbWFpbkxvY2FsZVxufVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21haW5Mb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXSxcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGxvY2FsZSA9IGxvY2FsZSB8fCBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlXG5cbiAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSlcblxuICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtcbiAgICAgICAgYmFzZVBhdGggfHwgJydcbiAgICAgIH0ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpXG5cbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiZcbiAgICAgICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiZcbiAgICAgIHBhdGhMb3dlciAhPT0gJy8nICsgbG9jYWxlTG93ZXJcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKClcblxuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIChwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgfHxcbiAgICAgICAgcGF0aExvd2VyID09PSAnLycgKyBsb2NhbGVMb3dlcilcbiAgICAgID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgK1xuICAgICAgICAgIHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcblxuICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aClcbiAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWBcbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pXG4gICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIChzZWdtZW50KSA9PiBlbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgbGV0IGJhc2U6IFVSTFxuXG4gIHRyeSB7XG4gICAgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICAvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuICAgIGJhc2UgPSBuZXcgVVJMKCcvJywgJ2h0dHA6Ly9uJylcbiAgfVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybDogc3RyaW5nKSB7XG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcblxuICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmxcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzPzogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIuYXNQYXRoLCB1cmwsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbilcbiAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pXG5cbiAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKVxuICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBc1xuXG4gIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZilcbiAgY29uc3QgcHJlcGFyZWRBcyA9IGFzXG4gICAgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIuYXNQYXRoLCBhcykpXG4gICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuXG4gIHJldHVybiB7XG4gICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcyksXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTogc3RyaW5nLCBwYWdlczogc3RyaW5nW10pIHtcbiAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUhKSlcblxuICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgIHJldHVybiBwYXRobmFtZVxuICB9XG5cbiAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocGFnZSkgJiYgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhZ2VcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgICB8ICdpc1JlYWR5J1xuICAgIHwgJ2lzUHJldmlldydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID1cbiAgfCAoT21pdDxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdzdHlsZVNoZWV0cyc+ICYgeyBpbml0aWFsOiB0cnVlIH0pXG4gIHwgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvXG5cbmV4cG9ydCB0eXBlIENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoXG4gIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gIEFwcDogQXBwQ29tcG9uZW50LFxuICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiZcbiAgISEoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdiA9ICdfX25leHQnXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZVxuICAgIH0gY2F0Y2ggKG4pIHt9XG4gIH0pKClcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORCB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgc2RyOiB7IFthc1BhdGg6IHN0cmluZ106IFByb21pc2U8b2JqZWN0PiB9ID0ge31cblxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzUmVhZHk6IGJvb2xlYW5cbiAgaXNQcmV2aWV3OiBib29sZWFuXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG5cbiAgcHJpdmF0ZSBfaWR4OiBudW1iZXIgPSAwXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgIGlzUHJldmlldyxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKFdyYXBBcHBDb21wb25lbnQ6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICAgIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gICAgICBpc1ByZXZpZXc/OiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9XG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnRcblxuICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICB0aGlzLmlzUmVhZHkgPSAhIShcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8XG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8XG4gICAgICAoIWF1dG9FeHBvcnREeW5hbWljICYmXG4gICAgICAgICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJlxuICAgICAgICAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUylcbiAgICApXG4gICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlld1xuICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzXG4gICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWVcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpLFxuICAgICAgICAgIHsgbG9jYWxlIH1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGZvcmNlZFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgdW5kZWZpbmVkXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zLCBpZHggfSA9IHN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBjYXRjaCB7fVxuXG4gICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KVxuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2ISlcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHsgeDogMCwgeTogMCB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2lkeCA9IGlkeFxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ248e30sIFRyYW5zaXRpb25PcHRpb25zLCBUcmFuc2l0aW9uT3B0aW9ucz4oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSksXG4gICAgICBmb3JjZWRTY3JvbGxcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaCB7fVxuICAgICAgfVxuICAgIH1cbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zLFxuICAgIGZvcmNlZFNjcm9sbD86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBjb25zdCBzaG91bGRSZXNvbHZlSHJlZiA9IHVybCA9PT0gYXMgfHwgKG9wdGlvbnMgYXMgYW55KS5faFxuXG4gICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgaWYgKChvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHRvIHNjcm9sbCByZXNldCBiZWhhdmlvciB1bmxlc3MgZXhwbGljaXRseSBzcGVjaWZpZWQgdG8gYmVcbiAgICAvLyBgZmFsc2VgISBUaGlzIG1ha2VzIHRoZSBiZWhhdmlvciBiZXR3ZWVuIHVzaW5nIGBSb3V0ZXIjcHVzaGAgYW5kIGFcbiAgICAvLyBgPExpbmsgLz5gIGNvbnNpc3RlbnQuXG4gICAgb3B0aW9ucy5zY3JvbGwgPSAhIShvcHRpb25zLnNjcm9sbCA/PyB0cnVlKVxuXG4gICAgbGV0IGxvY2FsZUNoYW5nZSA9IG9wdGlvbnMubG9jYWxlICE9PSB0aGlzLmxvY2FsZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID1cbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlXG4gICAgICAgICAgPyB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKVxuICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpXG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgICBoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCxcbiAgICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICAgICkucGF0aG5hbWVcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2VcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsZXM/LmluY2x1ZGVzKHRoaXMubG9jYWxlISkpIHtcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgKVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICFkaWROYXZpZ2F0ZSAmJlxuICAgICAgICAgIGRldGVjdGVkRG9tYWluICYmXG4gICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcylcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtcbiAgICAgICAgICAgIGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICAgIH0ke2FkZEJhc2VQYXRoKFxuICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgIHRoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgIDogYC8ke3RoaXMubG9jYWxlfWBcbiAgICAgICAgICAgIH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLydcbiAgICAgICAgICApfWBcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcbiAgICBjb25zdCByb3V0ZVByb3BzID0geyBzaGFsbG93IH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKVxuICAgIH1cblxuICAgIGFzID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgICBvcHRpb25zLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBsZXQgcGFnZXM6IGFueSwgcmV3cml0ZXM6IGFueVxuICAgIHRyeSB7XG4gICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsIHRoaXMubG9jYWxlKSksXG4gICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aFxuXG4gICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgK1xuICAgICAgICAgICAgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcblxuICAgIHRyeSB7XG4gICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICBpZiAoKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShcbiAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSxcbiAgICAgICAgICAgICAgcGFnZXNcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwsIGFzOiBuZXdBcyB9ID0gcHJlcGFyZVVybEFzKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVdcblxuICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGVcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0JylcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCdcbiAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgeyBzaGFsbG93OiBmYWxzZSB9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZVxuXG4gICAgICBpZiAoXG4gICAgICAgIChvcHRpb25zIGFzIGFueSkuX2ggJiZcbiAgICAgICAgcGF0aG5hbWUgPT09ICcvX2Vycm9yJyAmJlxuICAgICAgICBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHM/LnBhZ2VQcm9wcz8uc3RhdHVzQ29kZSA9PT0gNTAwICYmXG4gICAgICAgIHByb3BzPy5wYWdlUHJvcHNcbiAgICAgICkge1xuICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMFxuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lISxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGNsZWFuZWRBcyxcbiAgICAgICAgcm91dGVJbmZvLFxuICAgICAgICBmb3JjZWRTY3JvbGwgfHxcbiAgICAgICAgICAoaXNWYWxpZFNoYWxsb3dSb3V0ZSB8fCAhb3B0aW9ucy5zY3JvbGwgPyBudWxsIDogeyB4OiAwLCB5OiAwIH0pXG4gICAgICApLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgfSlcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB9IGFzIGFueSlcbiAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgICAgIHJvdXRlSW5mb0VycixcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wcyxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJlc29sdmVkQXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXNcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID0gdGhpcy5jb21wb25lbnRzW1xuICAgICAgICByb3V0ZVxuICAgICAgXVxuICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPVxuICAgICAgICBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgIDogZXhpc3RpbmdSb3V0ZUluZm9cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICBsb2NhbGVzOiB0aGlzLmxvY2FsZXMsXG4gICAgICAgICAgICAgICAgZGVmYXVsdExvY2FsZTogdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbClcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBub3JtYWxpemVMb2NhbGVQYXRoIShwYXRobmFtZSwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZVxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG5cbiAgICAgICAgbGV0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpXG4gICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoIShcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICBhc1BhdGggPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGhcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGxldCByZXdyaXRlczogYW55XG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcblxuICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsIHRoaXMubG9jYWxlKSksXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcGFyc2VkLnF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG4gICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksIHRoaXMubG9jYWxlKVxuXG4gICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSwgcGFnZXMpXG5cbiAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbigoaXNTc2c6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgcmV0dXJuIGlzU3NnXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICAgICAgICAgICAgICA6IHRoaXMubG9jYWxlXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IGZhbHNlXG4gICAgICB9KSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiZcbiAgICAgICF0aGlzLmlzUHJldmlldyAmJlxuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldXG4gICAgKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICB9XG4gICAgcmV0dXJuICh0aGlzLnNkcltyZXNvdXJjZUtleV0gPSBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9KSlcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcsIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KFxuICAgICAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgICAgIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihcbiAgICAgIGRhdGEsXG4gICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudCxcbiAgICAgIHJlc2V0U2Nyb2xsXG4gICAgKVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCBnbG9iYWxCYXNlID0gbmV3IFVSTChcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIClcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgZ2xvYmFsQmFzZSkgOiBnbG9iYWxCYXNlXG4gIGNvbnN0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcywgc2VhcmNoLCBoYXNoLCBocmVmLCBvcmlnaW4gfSA9IG5ldyBVUkwoXG4gICAgdXJsLFxuICAgIHJlc29sdmVkQmFzZVxuICApXG4gIGlmIChvcmlnaW4gIT09IGdsb2JhbEJhc2Uub3JpZ2luKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YClcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKCkge31cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IFByZXZpZXdEYXRhIH0gZnJvbSAnbmV4dC90eXBlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IChzdHJpbmcgfCBudW1iZXIpW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBzY3JpcHRMb2FkZXI/OiBhbnlbXVxuICBpc1ByZXZpZXc/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBUaGUgY3VycmVudGx5IGFjdGl2ZSBsb2NhbGVcbiAgICovXG4gIGxvY2FsZT86IHN0cmluZ1xuICAvKipcbiAgICogQWxsIGNvbmZpZ3VyZWQgbG9jYWxlc1xuICAgKi9cbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIC8qKlxuICAgKiBUaGUgY29uZmlndXJlZCBkZWZhdWx0IGxvY2FsZVxuICAgKi9cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IHN0cmluZ1tdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgdW5zdGFibGVfSnNQcmVsb2FkPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBzY3JpcHRMb2FkZXI6IHsgYWZ0ZXJJbnRlcmFjdGl2ZT86IHN0cmluZ1tdOyBiZWZvcmVJbnRlcmFjdGl2ZT86IGFueVtdIH1cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nPzogYm9vbGVhblxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBQcmV2aWV3RGF0YVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICcuLi9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9Db3Vyc2VTY2hlZHVsZXMvJztcclxuXHJcbnR5cGUgSVR5cGVGb3JPcHRpb25GZXRjaEF2YWlsYWJsZVNjaGVkdWxlID0ge1xyXG5cdGlkOiBudW1iZXI7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdHNlbGVjdDogYm9vbGVhbjtcclxufTtcclxuZXhwb3J0IHR5cGUgSUFwaUNvdXJzZVNjaGVkdWxlPFQgPSBhbnk+ID0ge1xyXG5cdGRhdGE6IFQ7XHJcblx0bWVzc2FnZTogc3RyaW5nO1xyXG5cdHRvdGFsUm93OiBudW1iZXI7XHJcblx0c3R1ZHlUaW1lczogSVR5cGVGb3JPcHRpb25GZXRjaEF2YWlsYWJsZVNjaGVkdWxlW107XHJcblx0cm9vbXM6IElUeXBlRm9yT3B0aW9uRmV0Y2hBdmFpbGFibGVTY2hlZHVsZVtdO1xyXG59O1xyXG5leHBvcnQgY29uc3QgY291cnNlRGV0YWlsQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaUNvdXJzZVNjaGVkdWxlPElDb3Vyc2VEZXRhaWxTY2hlZHVsZVtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtc1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyBD4bqtcCBuaOG6rXRcclxuXHR1cGRhdGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblx0YWhlYWRTY2hlZHVsZShwYXJhbXM6IHsgY291cnNlU2NoZWR1bGVJZDogbnVtYmVyOyB0ZWFjaGVySWQ6IG51bWJlciB9KSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlDb3Vyc2VTY2hlZHVsZTxJQ291cnNlRGV0YWlsU2NoZWR1bGVbXT4+KCcvYXBpL2x1aUxpY2hIb2MnLCB7IHBhcmFtcyB9KTtcclxuXHR9XHJcbn07XHJcbiIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL0RvY3VtZW50T2ZDb3Vyc2UvJztcclxuZXhwb3J0IGNvbnN0IGRvY3VtZW50U2NoZWR1bGVBcGkgPSB7XHJcblx0Ly8gQ+G6rXAgbmjhuq10XHJcblx0YWRkKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblx0fSxcclxufTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICcuLi9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9TdHVkZW50SW5Db3Vyc2UvJztcclxudHlwZSBJQXBpUmVzdWx0U3R1ZGVudEluQ291cnNlPFQgPSBhbnk+ID0ge1xyXG5cdHN0dWRlbnRMaXN0OiBUO1xyXG5cdG1lc3NhZ2U6IHN0cmluZztcclxuXHRUb3RhbFJvdzogbnVtYmVyO1xyXG59O1xyXG5leHBvcnQgY29uc3Qgc3R1ZGVudExpc3RJbkNvdXJzZUFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHRTdHVkZW50SW5Db3Vyc2U8SVN0dWRlbnRMaXN0SW5Db3Vyc2VbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXNcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuIiwiaW1wb3J0IHtpbnN0YW5jZX0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvQXZhaWxhYmxlRGF0ZU9ubGluZS8nO1xyXG5leHBvcnQgY29uc3QgY291cnNlT25saW5lRGV0YWlsQXZhaWxhYmxlRGF5QXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUNvdXJzZURldGFpbEF2YWlsYWJsZURheVtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtcyxcclxuXHRcdH0pO1xyXG5cdH0sXHJcbn07XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnLi4vaW5zdGFuY2UnXHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9MZXNzb25PbmxpbmUnXHJcbmV4cG9ydCBjb25zdCBsZXNzb25PbmxpbmVBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJTGVzc29uPih1cmwsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJy4uL2luc3RhbmNlJ1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvU3R1ZHlEYXlPbmxpbmUnXHJcbmV4cG9ydCBjb25zdCBzdHVkeURheU9ubGluZUFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdHVkeURheVtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtc1xyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICcuLi9pbnN0YW5jZSdcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL0NoZWNrUm9vbS8nXHJcbmV4cG9ydCBjb25zdCBjaGVja1Jvb21BcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJQ2hlY2tTY2hlZHVsZVtdPj4odXJsLCB7IHBhcmFtcyB9KVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQge2luc3RhbmNlfSBmcm9tICcuLi9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9DaGVja1N0dWR5VGltZS8nO1xyXG5leHBvcnQgY29uc3QgY2hlY2tTdHVkeVRpbWVBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Y2hlY2soZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3Q8SUFwaVJlc3VsdERhdGE8SUNoZWNrU3R1ZHlUaW1lW10+Pih1cmwsIGRhdGEpO1xyXG5cdH0sXHJcbn07XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvQ2hlY2tUZWFjaGVyLyc7XHJcbmV4cG9ydCBjb25zdCBjaGVja1RlYWNoZXJBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJQ2hlY2tTY2hlZHVsZVtdPj4odXJsLCB7IHBhcmFtcyB9KTtcclxuXHR9LFxyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YSAtIGVkaXQga2jDs2EgaOG7jWNcclxuXHRnZXRBbGxUZWFjaGVyQXZhaWxhYmxlKHBhcmFtczogeyBDb3Vyc2VJRDogbnVtYmVyOyBTdHVkeVRpbWVJRDogbnVtYmVyOyBQcm9ncmFtSUQ6IG51bWJlcjsgQnJhbmNoSUQ6IG51bWJlcjsgRGF0ZTogc3RyaW5nIH0pIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8eyBVc2VySW5mb3JtYXRpb25JRDogbnVtYmVyOyBGdWxsTmFtZVVuaWNvZGU6IHN0cmluZyB9W10+PignL2FwaS9UZWFjaGVyQXZhaWxhYmxlJywgeyBwYXJhbXMgfSk7XHJcblx0fVxyXG59O1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL0NvdXJzZU9mU3R1ZGVudFByaWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBjb3Vyc2VPZlN0dWRlbnRQcmljZUFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPGFueT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXNcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFkZChkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG5cdH1cclxufTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICcuLi9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9Db3Vyc2UvJztcclxuZXhwb3J0IGNvbnN0IGNvdXJzZUFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElDb3Vyc2VbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXNcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFkZChkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gdXBkYXRlIG3hu5tpIGRhdGFcclxuXHR1cGRhdGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblxyXG5cdGdldEJ5SWQoaWQ6IG51bWJlcikge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJQ291cnNlRGV0YWlsPj4oYCR7dXJsfSR7aWR9YCk7XHJcblx0fVxyXG59O1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJy4uL2luc3RhbmNlJ1xyXG5pbXBvcnQgXyBmcm9tICd+L2FwcENvbmZpZydcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL0xlc3Nvbi8nXHJcbmV4cG9ydCBjb25zdCBsZXNzb25BcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJTGVzc29uPih1cmwsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KVxyXG5cdH0sXHJcblxyXG5cdGNhbGxBdXRvKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQoYCR7Xy5BUElfVVJMfS9hcGkvUHVzaGAsIG51bGwpXHJcblx0fSxcclxuXHJcblx0Y2FsbEF1dG9NaW51dGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dChgJHtfLkFQSV9VUkx9L2FwaS9QdXNoT25lTWludXRlYCwgbnVsbClcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHtpbnN0YW5jZX0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvUm9sbFVwLyc7XHJcbmV4cG9ydCBjb25zdCByb2xsVXBBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJUm9sbFVwW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zLFxyXG5cdFx0fSk7XHJcblx0fSxcclxufTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICcuLi9pbnN0YW5jZSdcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1N0dWR5RGF5LydcclxuZXhwb3J0IGNvbnN0IHN0dWR5RGF5QXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVN0dWR5RGF5W10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNvbnN0IHVybCA9IFwiL2FwaS9Db250cmFjdE9mU3R1ZGVudFwiO1xyXG5cclxuY2xhc3MgQ29udHJhY3RDdXN0b21lckxpc3Qge1xyXG4gIGdldEFsbCA9IChQYXJhbXM6IGFueSkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJQ29udHJhY3RDdXN0b21lckxpc3RbXT4+KHVybCwge1xyXG4gICAgICBwYXJhbXM6IFBhcmFtcyxcclxuICAgIH0pO1xyXG5cclxuICBnZXREZXRhaWwgPSAoaWQ6IG51bWJlcikgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJQ29udHJhY3RDdXN0b21lckxpc3Q+PihgJHt1cmx9LyR7aWR9YCk7XHJcblxyXG4gIHVwZGF0ZSA9IChkYXRhKSA9PiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhLCB7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb250cmFjdEN1c3RvbWVyTGlzdEFwaSA9IG5ldyBDb250cmFjdEN1c3RvbWVyTGlzdCgpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9JbnZvaWNlJztcclxuXHJcbmNsYXNzIEludm9pY2Uge1xyXG5cdGdldEFsbCA9IChQYXJhbXM6IGFueSkgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJSW52b2ljZVtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtczogUGFyYW1zXHJcblx0XHR9KTtcclxuXHJcblx0Z2V0RGV0YWlsID0gKGlkOiBudW1iZXIpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJSW52b2ljZT4+KGAke3VybH0vJHtpZH1gKTtcclxuXHJcblx0dXBkYXRlID0gKGRhdGEpID0+IGluc3RhbmNlLnB1dCh1cmwsIGRhdGEsIHt9KTtcclxuXHJcblx0ZXhwb3J0ID0gKGlkKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE+KGAvYXBpL0V4cG9ydEludm9pY2UvJHtpZH1gKTtcclxuXHJcblx0c2VuZE1haWwgPSAoaWQpID0+IGluc3RhbmNlLnBvc3QoYGFwaS9TZW5kTWFpbEludm9pY2UvJHtpZH1gKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGludm9pY2VBcGkgPSBuZXcgSW52b2ljZSgpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9Wb3VjaGVyJztcclxuXHJcbmNsYXNzIFZvdWNoZXIge1xyXG5cdGdldEFsbCA9IChQYXJhbXM6IGFueSkgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVm91Y2hlcltdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtczogUGFyYW1zXHJcblx0XHR9KTtcclxuXHJcblx0Z2V0RGV0YWlsID0gKGlkOiBudW1iZXIpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVm91Y2hlcj4+KGAke3VybH0vJHtpZH1gKTtcclxuXHJcblx0dXBkYXRlID0gKGRhdGEpID0+IGluc3RhbmNlLnB1dCh1cmwsIGRhdGEsIHt9KTtcclxuXHJcblx0ZXhwb3J0ID0gKGlkKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE+KGAvYXBpL0V4cG9ydFZvdWNoZXIvJHtpZH1gKTtcclxuXHJcblx0c2VuZE1haWwgPSAoaWQpID0+IGluc3RhbmNlLnBvc3QoYGFwaS9TZW5kTWFpbFZvdWNoZXIvJHtpZH1gKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHZvdWNoZXJBcGkgPSBuZXcgVm91Y2hlcigpO1xyXG4iLCJpbXBvcnQge2luc3RhbmNlfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvUmVmdW5kcyc7XHJcblxyXG5jbGFzcyBSZWZ1bmRzIHtcclxuXHRnZXRBbGwgPSAoUGFyYW1zOiBhbnkpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVJlZnVuZHNbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXM6IFBhcmFtcyxcclxuXHRcdH0pO1xyXG5cclxuXHRnZXREZXRhaWwgPSAoaWQ6IG51bWJlcikgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJUmVmdW5kcz4+KGAke3VybH0vJHtpZH1gKTtcclxuXHJcblx0YWRkID0gKGRhdGEpID0+IGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuXHJcblx0dXBkYXRlID0gKGRhdGEpID0+IGluc3RhbmNlLnB1dCh1cmwsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZnVuZHNBcGkgPSBuZXcgUmVmdW5kcygpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9QYXJlbnRzJztcclxuXHJcbmNsYXNzIFBhcmVudHNBcGkge1xyXG5cdGdldEFsbCA9IChQYXJhbXM6IGFueSkgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJUGFyZW50c1tdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtczogUGFyYW1zXHJcblx0XHR9KTtcclxuXHJcblx0Z2V0RGV0YWlsID0gKGlkOiBudW1iZXIpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJUGFyZW50cz4+KGAke3VybH0vJHtpZH1gKTtcclxuXHJcblx0YWRkID0gKGRhdGE6IElQYXJlbnRzKSA9PiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblxyXG5cdHVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dCh1cmwsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBhcmVudHNBcGkgPSBuZXcgUGFyZW50c0FwaSgpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNsYXNzIFNlcnZpY2VDdXN0b21lckV4YW1SZXN1bHQge1xyXG4gIGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVNlcnZpY2VDdXN0b21lckV4YW1SZXN1bHRbXT4+KFwiL2FwaS9TdHVkZW50RXhhbU9mU2VydmljZVJlc3VsdFwiLCB7XHJcbiAgICAgIHBhcmFtczogdG9kb0FwaSxcclxuICAgIH0pO1xyXG5cclxuICBnZXRXaXRoSUQgPSAoSUQ6IG51bWJlcikgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0PElTZXJ2aWNlQ3VzdG9tZXJFeGFtUmVzdWx0W10+PihgL2FwaS9TdHVkZW50RXhhbU9mU2VydmljZVJlc3VsdC8ke0lEfWApO1xyXG5cclxuICBhZGQgPSAoZGF0YTogSVNlcnZpY2VDdXN0b21lckV4YW1SZXN1bHQpID0+IGluc3RhbmNlLnBvc3QoXCIvYXBpL1N0dWRlbnRFeGFtT2ZTZXJ2aWNlUmVzdWx0L1wiLCBkYXRhLCB7fSk7XHJcblxyXG4gIHVwZGF0ZSA9IChkYXRhKSA9PiBpbnN0YW5jZS5wdXQoXCIvYXBpL1N0dWRlbnRFeGFtT2ZTZXJ2aWNlUmVzdWx0L1wiLCBkYXRhLCB7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXJ2aWNlQ3VzdG9tZXJFeGFtUmVzdWx0QXBpID0gbmV3IFNlcnZpY2VDdXN0b21lckV4YW1SZXN1bHQoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jbGFzcyBTZXJ2aWNlQ3VzdG9tZXJFeGFtIHtcclxuICBnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTZXJ2aWNlQ3VzdG9tZXJFeGFtW10+PihcIi9hcGkvU3R1ZGVudEV4YW1PZlNlcnZpY2VcIiwge1xyXG4gICAgICBwYXJhbXM6IHRvZG9BcGksXHJcbiAgICB9KTtcclxuXHJcbiAgZ2V0V2l0aElEID0gKElEOiBudW1iZXIpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdDxJU2VydmljZUN1c3RvbWVyRXhhbVtdPj4oYC9hcGkvU3R1ZGVudEV4YW1PZlNlcnZpY2UvJHtJRH1gKTtcclxuXHJcbiAgYWRkID0gKGRhdGE6IElTZXJ2aWNlQ3VzdG9tZXJFeGFtKSA9PiBpbnN0YW5jZS5wb3N0KFwiL2FwaS9TdHVkZW50RXhhbU9mU2VydmljZS9cIiwgZGF0YSwge30pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2VydmljZUN1c3RvbWVyRXhhbUFwaSA9IG5ldyBTZXJ2aWNlQ3VzdG9tZXJFeGFtKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY29uc3QgdXJsID0gXCIvYXBpL0V4YW1BcHBvaW50bWVudFJlc3VsdC9cIjtcclxuY2xhc3MgVGVzdEN1c3RvbWVyUG9pbnRBcGkge1xyXG4gIGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVRlc3RDdXN0b21lclBvaW50W10+Pih1cmwsIHtcclxuICAgICAgcGFyYW1zOiB0b2RvQXBpLFxyXG4gICAgfSk7XHJcblxyXG4gIGdldFdpdGhJRCA9IChJRDogbnVtYmVyKSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElUZXN0Q3VzdG9tZXJQb2ludD4+KHVybCArIElEKTtcclxuXHJcbiAgYWRkID0gKGRhdGE6IElTdHVkZW50KSA9PiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSwge30pO1xyXG5cclxuICB1cGRhdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhLCB7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0ZXN0Q3VzdG9tZXJQb2ludEFwaSA9IG5ldyBUZXN0Q3VzdG9tZXJQb2ludEFwaSgpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9FeGFtQXBwb2ludG1lbnQvJztcclxuY2xhc3MgVGVzdEN1c3RvbWVyQXBpIHtcclxuXHRnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElUZXN0Q3VzdG9tZXJbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXM6IHRvZG9BcGlcclxuXHRcdH0pO1xyXG5cclxuXHRnZXRXaXRoSUQgPSAoSUQ6IG51bWJlcikgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHQ8SVRlc3RDdXN0b21lcj4+KHVybCArIElEKTtcclxuXHJcblx0YWRkID0gKGRhdGE6IElTdHVkZW50KSA9PiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSwge30pO1xyXG5cclxuXHR1cGRhdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhLCB7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0ZXN0Q3VzdG9tZXJBcGkgPSBuZXcgVGVzdEN1c3RvbWVyQXBpKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY29uc3QgdXJsID0gXCIvYXBpL0NvdXJzZU9mU3R1ZGVudFwiO1xyXG5cclxuY2xhc3MgQ291cnNlU3R1ZGVudEFwaSB7XHJcbiAgZ2V0QWxsID0gKFBhcmFtczogYW55KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElDb3Vyc2VPZlN0dWRlbnRbXT4+KHVybCwge1xyXG4gICAgICBwYXJhbXM6IFBhcmFtcyxcclxuICAgIH0pO1xyXG5cclxuICBnZXREZXRhaWwgPSAoaWQ6IG51bWJlcikgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJQ291cnNlT2ZTdHVkZW50Pj4oYCR7dXJsfS8ke2lkfWApO1xyXG5cclxuICB1cGRhdGUgPSAoZGF0YTogSUNvdXJzZU9mU3R1ZGVudCkgPT4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSwge30pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY291cnNlU3R1ZGVudEFwaSA9IG5ldyBDb3Vyc2VTdHVkZW50QXBpKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL0V4YW1BcHBvaW50bWVudFJlc3VsdC8nO1xyXG5leHBvcnQgY29uc3QgZXhhbUFwcG9pbnRtZW50UmVzdWx0QXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUV4YW1BcHBvaW50bWVudFJlc3VsdFtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtc1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyBM4bqleSB0aGVvIGlkXHJcblx0Z2V0QnlJZChpZDogbnVtYmVyKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElFeGFtQXBwb2ludG1lbnRSZXN1bHQ+PihgJHt1cmx9JHtpZH1gKTtcclxuXHR9LFxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIFjDs2EgZGF0YVxyXG5cdGRlbGV0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHJcblx0Z2V0UmVzdWx0RXhhbShwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8YW55PignL2FwaS9FeGFtQXBwb2ludG1lbnRSZXN1bHREZXRhaWwnLCB7XHJcblx0XHRcdHBhcmFtc1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHJcblx0dXBkYXRlUG9pbnQoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCgnL2FwaS9FeGFtQXBwb2ludG1lbnRFeGVyY2lzZVN0dWRlbnQnLCBkYXRhKTtcclxuXHR9LFxyXG5cclxuXHQvLyBLaeG7g20gdHJhIMSR4buBIGjhurluIHRlc3QgbsOgeSDEkcOjIMSRxrDhu6NjIGzDoG0gaGF5IGNoxrBhXHJcblx0Y2hlY2tJc1Rlc3RlZChpZCkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJRXhhbUFwcG9pbnRtZW50UmVzdWx0W10+PihgL2FwaS9FeGFtQXBwb2ludG1lbnRSZXN1bHRjaGVja1Jlc3VsdC8ke2lkfWApO1xyXG5cdH1cclxufTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jbGFzcyBFeGFtQ29taW5nU29vbiB7XHJcbiAgZ2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJRXhhbUNvbWluZ1Nvb25bXT4+KFwiL2FwaS9FeGFtQ29taW5nU29vblwiLCB7XHJcbiAgICAgIHBhcmFtczogdG9kb0FwaSxcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZXhhbUNvbWluZ1Nvb25BcGkgPSBuZXcgRXhhbUNvbWluZ1Nvb24oKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvQ3VzdG9tZXJDb25zdWx0YXRpb24vJztcclxuY2xhc3MgU3R1ZGVudEFkdmlzZUFwaSB7XHJcblx0Z2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU3R1ZGVudEFkdmlzZVtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtczogdG9kb0FwaVxyXG5cdFx0fSk7XHJcblxyXG5cdGdldFdpdGhJRCA9IChJRDogbnVtYmVyKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVN0dWRlbnRBZHZpc2U+Pih1cmwgKyBJRCk7XHJcblxyXG5cdGFkZCA9IChkYXRhOiBJU3R1ZGVudCkgPT4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEsIHt9KTtcclxuXHJcblx0dXBkYXRlID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSwge30pO1xyXG5cclxuXHRhZGROb3RlID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucG9zdCgnL2FwaS9Ob3RlT2ZDdXN0b21lcicsIGRhdGEsIHt9KTtcclxuXHJcblx0dXBkYXRlTm90ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dCgnL2FwaS9Ob3RlT2ZDdXN0b21lcicsIGRhdGEsIHt9KTtcclxuXHJcblx0c2VuZEVtYWlsID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucG9zdCgnL2FwaS9TZW5kTWFpbEN1c3RvbWVyJywgZGF0YSwge30pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3R1ZGVudEFkdmlzZUFwaSA9IG5ldyBTdHVkZW50QWR2aXNlQXBpKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY29uc3QgdXJsID0gXCIvYXBpL0NvdXJzZU9mU3R1ZGVudENoYW5nZS9cIjtcclxuXHJcbmNsYXNzIFN0dWRlbnRDaGFuZ2VDb3Vyc2VBcGkge1xyXG4gIGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVN0dWRlbnRDaGFuZ2VDb3Vyc2VbXT4+KHVybCwge1xyXG4gICAgICBwYXJhbXM6IHRvZG9BcGksXHJcbiAgICB9KTtcclxuXHJcbiAgZ2V0V2l0aElEID0gKElEOiBudW1iZXIpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVN0dWRlbnRDaGFuZ2VDb3Vyc2U+Pih1cmwgKyBJRCk7XHJcblxyXG4gIGFkZCA9IChkYXRhOiBJU3R1ZGVudCkgPT4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEsIHt9KTtcclxuXHJcbiAgdXBkYXRlID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSwge30pO1xyXG5cclxuICBjaGFuZ2VDb3Vyc2UgPSAoZGF0YTogSUNvdXJzZU9mU3R1ZGVudENoYW5nZSkgPT4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN0dWRlbnRDaGFuZ2VDb3Vyc2VBcGkgPSBuZXcgU3R1ZGVudENoYW5nZUNvdXJzZUFwaSgpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNvbnN0IHVybCA9IFwiL2FwaS9Db3Vuc2Vsb3JzQ2hhbmdlL1wiO1xyXG5cclxuY2xhc3MgU3R1ZGVudENoYW5nZUFwaSB7XHJcbiAgZ2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU3R1ZGVudENoYW5nZVtdPj4odXJsLCB7XHJcbiAgICAgIHBhcmFtczogdG9kb0FwaSxcclxuICAgIH0pO1xyXG5cclxuICBnZXRXaXRoSUQgPSAoSUQ6IG51bWJlcikgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU3R1ZGVudENoYW5nZT4+KHVybCArIElEKTtcclxuXHJcbiAgYWRkID0gKGRhdGE6IElTdHVkZW50KSA9PiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSwge30pO1xyXG5cclxuICB1cGRhdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhLCB7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzdHVkZW50Q2hhbmdlQXBpID0gbmV3IFN0dWRlbnRDaGFuZ2VBcGkoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnO1xyXG5cclxuY2xhc3MgU3R1ZGVudEFwaSB7XHJcblx0Z2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU3R1ZGVudFtdPj4oJy9hcGkvU3R1ZGVudC8nLCB7XHJcblx0XHRcdHBhcmFtczogdG9kb0FwaVxyXG5cdFx0fSk7XHJcblxyXG5cdGdldFdpdGhJRCA9IChJRDogbnVtYmVyKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVN0dWRlbnQ+PihgL2FwaS9TdHVkZW50LyR7SUR9YCk7XHJcblxyXG5cdGFkZCA9IChkYXRhOiBJU3R1ZGVudCkgPT4gaW5zdGFuY2UucG9zdCgnL2FwaS9TdHVkZW50JywgZGF0YSwge30pO1xyXG5cclxuXHRjcmVhdGVBY2NvdW50ID0gKGRhdGE6IElTdHVkZW50KSA9PiBpbnN0YW5jZS5wb3N0KCcvYXBpL0NyZWF0ZUFjY291bnQnLCBkYXRhLCB7fSk7XHJcblxyXG5cdHVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dCgnL2FwaS9TdHVkZW50LycsIGRhdGEsIHt9KTtcclxuXHJcblx0Ly8gdXBsb2FkSW1hZ2UgPSAoZmlsZTogYW55KSA9PlxyXG5cclxuXHQvLyAgIGluc3RhbmNlLnBvc3QoXCIvYXBpL1VzZXJJbmZvcm1hdGlvbi91cGxvYWRJbWFnZVwiLCBmaWxlLCB7fSk7XHJcblxyXG5cdHVwbG9hZEltYWdlID0gKGZpbGU6IGFueSkgPT4ge1xyXG5cdFx0bGV0IGZEYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblx0XHRmRGF0YS5hcHBlbmQoJ0ZpbGUnLCBmaWxlKTtcclxuXHRcdGNvbnNvbGUubG9nKCdGREFUQTogJywgZkRhdGEpO1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QoJy9hcGkvVXNlckluZm9ybWF0aW9uL3VwbG9hZEltYWdlJywgZkRhdGEsIHt9KTtcclxuXHR9O1xyXG5cclxuXHRnZXRDb3Vyc2VPZlN0dWRlbnREZXRhaWwgPSAoSUQ6IG51bWJlcikgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdHVkZW50Pj4oYC9hcGkvR2V0Q291cnNlQW5kVGVhY2hlck9mU3R1ZGVudC8ke0lEfWApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3R1ZGVudEFwaSA9IG5ldyBTdHVkZW50QXBpKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY2xhc3MgV2FybmluZyB7XHJcbiAgZ2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJV2FybmluZ1tdPj4oXCIvYXBpL1dhcm5pbmdcIiwge1xyXG4gICAgICBwYXJhbXM6IHRvZG9BcGksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB3YXJuaW5nQXBpID0gbmV3IFdhcm5pbmcoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwiLi4vaW5zdGFuY2VcIjtcclxuXHJcbmNvbnN0IHVybCA9IFwiL2FwaS9TZXRQYWNrYWdlUmVzdWx0XCI7XHJcbmV4cG9ydCBjb25zdCBkb2luZ1Rlc3RBcGkgPSB7XHJcbiAgLy8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcbiAgLy8gZ2V0QWxsKHBhcmFtcykge1xyXG4gIC8vIFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJRG9pbmdUZXN0W10+Pih1cmwsIHtcclxuICAvLyBcdFx0cGFyYW1zLFxyXG4gIC8vIFx0fSk7XHJcbiAgLy8gfSxcclxuICAvLyBM4bqleSB0aGVvIElEXHJcbiAgZ2V0QnlJRChJRCkge1xyXG4gICAgcmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJRG9pbmdUZXN0Pj4oYCR7dXJsfS8ke0lEfWApO1xyXG4gIH0sXHJcbiAgLy8gVGjDqm0gbeG7m2kgZGF0YVxyXG4gIGFkZChkYXRhKSB7XHJcbiAgICByZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG4gIH0sXHJcbiAgLy8gQ+G6rXAgbmjhuq10IGRhdGFcclxuICAvLyB1cGRhdGUoZGF0YSkge1xyXG4gIC8vIFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG4gIC8vIH0sXHJcbiAgLy8gWMOzYSBkYXRhXHJcbiAgLy8gZGVsZXRlKGRhdGEpIHtcclxuICAvLyBcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuICAvLyB9LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJy4uL2luc3RhbmNlJ1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvRXhhbVRvcGljRGV0YWlsLydcclxuZXhwb3J0IGNvbnN0IGV4YW1EZXRhaWxBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJRXhhbURldGFpbFtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtc1xyXG5cdFx0fSlcclxuXHR9LFxyXG5cdC8vIEzhuqV5IHRoZW8gSURcclxuXHRnZXRCeUlEKElEKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElFeGFtRGV0YWlsPj4oYCR7dXJsfSR7SUR9YClcclxuXHR9LFxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQoZGF0YTogYW55KSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpXHJcblx0fSxcclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZShkYXRhOiBhbnkpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKVxyXG5cdH0sXHJcblx0Ly8gWMOzYSBkYXRhXHJcblx0ZGVsZXRlKGRhdGE6IGFueSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpXHJcblx0fSxcclxuXHQvLyBU4bqhbyBjw6J1IGjhu49pIHThu7EgxJHhu5luZ1xyXG5cdGNyZWF0ZUF1dG8oZGF0YTogYW55KSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCgnYXBpL0F1dG9DcmVhdGVFeGFtdG9waWNEZXRhaWwnLCBkYXRhKVxyXG5cdH0sXHJcblx0Ly8gxJDhu5VpIHbhu4sgdHLDrVxyXG5cdGNoYW5nZVBvc2l0aW9uKGRhdGE6IGFueSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCgnYXBpL1VwZGF0ZUluZGV4JywgZGF0YSlcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwiLi4vaW5zdGFuY2VcIjtcclxuXHJcbmNvbnN0IHVybCA9IFwiL2FwaS9FeGFtVG9waWMvXCI7XHJcbmV4cG9ydCBjb25zdCBleGFtVG9waWNBcGkgPSB7XHJcbiAgLy8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcbiAgZ2V0QWxsKHBhcmFtcykge1xyXG4gICAgcmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJRXhhbVRvcGljW10+Pih1cmwsIHtcclxuICAgICAgcGFyYW1zLFxyXG4gICAgfSk7XHJcbiAgfSxcclxuICAvLyBM4bqleSB0aGVvIElEXHJcbiAgZ2V0QnlJRChJRCkge1xyXG4gICAgcmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJRXhhbVRvcGljPj4oYCR7dXJsfSR7SUR9YCk7XHJcbiAgfSxcclxuICAvLyBUaMOqbSBt4bubaSBkYXRhXHJcbiAgYWRkKGRhdGEpIHtcclxuICAgIHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcbiAgfSxcclxuICAvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG4gIHVwZGF0ZShkYXRhKSB7XHJcbiAgICByZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcbiAgfSxcclxuICAvLyBYw7NhIGRhdGFcclxuICBkZWxldGUoZGF0YSkge1xyXG4gICAgcmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCB7IFVwbG9hZCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY29uc3QgdXJsID0gXCIvYXBpL0V4ZXJjaXNlXCI7XHJcbmNsYXNzIEV4ZXJjaXNlQXBpIHtcclxuICAvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuICBnZXRBbGwgPSAocGFyYW1zKSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElFeGVyY2lzZVtdPj4odXJsLCB7IHBhcmFtcyB9KTtcclxuXHJcbiAgLy8gVGjDqm0gbeG7m2kgZGF0YVxyXG4gIGFkZChkYXRhOiBJRXhlcmNpc2UpIHtcclxuICAgIHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcbiAgfVxyXG4gIC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcbiAgdXBkYXRlKGRhdGE6IElFeGVyY2lzZSkge1xyXG4gICAgcmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG4gIH1cclxuICAvLyBYw7NhIGRhdGFcclxuICBkZWxldGUoZGF0YTogSUV4ZXJjaXNlKSB7XHJcbiAgICByZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvLyBJbXBvcnQgRXhjZWxcclxuICBpbXBvcnRFeGNlbChmaWxlOiBGaWxlKSB7XHJcbiAgICBsZXQgZkRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZEYXRhLmFwcGVuZChcIkZpbGVcIiwgZmlsZSk7XHJcbiAgICByZXR1cm4gaW5zdGFuY2UucG9zdChcIi9hcGkvSW1wb3J0RXhlcmNpc2VcIiwgZkRhdGEsIHt9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBleGVyY2lzZUFwaSA9IG5ldyBFeGVyY2lzZUFwaSgpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSdcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL0V4ZXJjaXNlR3JvdXAnXHJcbmNsYXNzIEV4ZXJjaXNlR3JvdXBBcGkge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbCA9IChwYXJhbXMpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJRXhlcmNpc2VHcm91cFtdPj4odXJsLCB7IHBhcmFtcyB9KVxyXG5cclxuXHQvLyBM4bqleSAxIGRhdGFcclxuXHRnZXRXaXRoSUQgPSAoSUQpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJRXhlcmNpc2VHcm91cD4+KGAke3VybH0vJHtJRH1gKVxyXG5cclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSlcclxuXHR9XHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpXHJcblx0fVxyXG5cdC8vIFjDs2EgZGF0YVxyXG5cdGRlbGV0ZShkYXRhOiBJRXhlcmNpc2VHcm91cCkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpXHJcblx0fVxyXG5cclxuXHQvLyBVcGxvYWQgZmlsZVxyXG5cdFVwbG9hZEF1ZGlvKGRhdGEpIHtcclxuXHRcdGxldCBmb3JtZGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcblx0XHRmb3JtZGF0YS5hcHBlbmQoJ2ZpbGUnLCBkYXRhKVxyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QoJy9hcGkvdXBsb2FkZmlsZUV4ZXJjaXNlJywgZm9ybWRhdGEpXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZXhlcmNpc2VHcm91cEFwaSA9IG5ldyBFeGVyY2lzZUdyb3VwQXBpKClcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICcuLi9pbnN0YW5jZSc7XHJcbmltcG9ydCB7IElGZWVkQmFjayB9IGZyb20gJy4uL3R5cGVzL2ZlZWQtYmFjay9mZWVkLWJhY2snO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvRmVlZGJhY2snO1xyXG5leHBvcnQgY29uc3QgRmVlZGJhY2tBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJRmVlZEJhY2tbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXNcclxuXHRcdH0pO1xyXG5cdH0sXHJcblxyXG5cdGFkZChkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblxyXG5cdHVwZGF0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHJcblx0Z2V0QnlJRChJRCkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJRmVlZEJhY2s+PihgJHt1cmx9LyR7SUR9YCk7XHJcblx0fVxyXG59O1xyXG4iLCJpbXBvcnQgeyBvbmVTaWduYWxBUEkgfSBmcm9tICcuL29uZVNpZ25hbC9vbmVTaWduYWwnO1xyXG5leHBvcnQgeyBhcmVhQXBpIH0gZnJvbSAnLi9vcHRpb25zL2FyZWEnO1xyXG5leHBvcnQgeyBicmFuY2hBcGkgfSBmcm9tICcuL29wdGlvbnMvYnJhbmNoJztcclxuZXhwb3J0IHsgY29udHJhY3RBcGkgfSBmcm9tICcuL29wdGlvbnMvY29udHJhY3QnO1xyXG5leHBvcnQgeyBjdXJyaWN1bHVtQXBpIH0gZnJvbSAnLi9vcHRpb25zL2N1cnJpY3VsdW0nO1xyXG5leHBvcnQgeyBjdXJyaWN1bHVtRGV0YWlsQXBpIH0gZnJvbSAnLi9vcHRpb25zL2N1cnJpY3VsdW0tZGV0YWlsJztcclxuZXhwb3J0IHsgZGF5T2ZmQXBpIH0gZnJvbSAnLi9vcHRpb25zL2RheS1vZmYnO1xyXG5leHBvcnQgeyBkaXNjb3VudEFwaSB9IGZyb20gJy4vb3B0aW9ucy9kaXNjb3VudCc7XHJcbmV4cG9ydCB7IGRpc3RyaWN0QXBpIH0gZnJvbSAnLi9vcHRpb25zL2Rpc3RyaWN0JztcclxuZXhwb3J0IHsgZ3JhZGVBcGkgfSBmcm9tICcuL29wdGlvbnMvZ3JhZGUnO1xyXG5leHBvcnQgeyBqb2JBcGkgfSBmcm9tICcuL29wdGlvbnMvam9iJztcclxuZXhwb3J0IHsgcHJvZ3JhbUFwaSB9IGZyb20gJy4vb3B0aW9ucy9wcm9ncmFtJztcclxuZXhwb3J0IHsgcHVyb3NlQXBpIH0gZnJvbSAnLi9vcHRpb25zL3B1cm9zZSc7XHJcbmV4cG9ydCB7IHJvb21BcGkgfSBmcm9tICcuL29wdGlvbnMvcm9vbSc7XHJcbmV4cG9ydCB7IHNlcnZpY2VBcGkgfSBmcm9tICcuL29wdGlvbnMvc2VydmljZSc7XHJcbmV4cG9ydCB7IHNvdXJjZUluZm9tYXRpb25BcGkgfSBmcm9tICcuL29wdGlvbnMvc291cmNlLWluZm9tYXRpb24nO1xyXG5leHBvcnQgeyBzdGFmZlNhbGFyeUFwaSB9IGZyb20gJy4vb3B0aW9ucy9zdGFmZi1zYWxhcnknO1xyXG5leHBvcnQgeyBzdHVkeVRpbWVBcGkgfSBmcm9tICcuL29wdGlvbnMvc3R1ZHktdGltZSc7XHJcbmV4cG9ydCB7IHN1YmplY3RBcGkgfSBmcm9tICcuL29wdGlvbnMvc3ViamVjdCc7XHJcbmV4cG9ydCB7IHN0dWRlbnRBcGkgfSBmcm9tICcuL2N1c3RvbWVyL3N0dWRlbnQvc3R1ZGVudC1saXN0JztcclxuZXhwb3J0IHsgd2FyZEFwaSB9IGZyb20gJy4vb3B0aW9ucy93YXJkJztcclxuZXhwb3J0IHsgc3VwcGxpZXJBcGkgfSBmcm9tICcuL29wdGlvbnMvc3VwcGxpZXInO1xyXG5leHBvcnQgeyB1c2VySW5mb3JtYXRpb25BcGkgfSBmcm9tICcuL29wdGlvbnMvdXNlcmluZm9ybWF0aW9uJztcclxuZXhwb3J0IHsgdGVhY2hlckFwaSB9IGZyb20gJy4vdGVhY2hlci90ZWFjaGVyJztcclxuZXhwb3J0IHsgbGVzc29uQXBpIH0gZnJvbSAnLi9jb3Vyc2UvbGVzc29uJztcclxuZXhwb3J0IHsgc3R1ZHlEYXlBcGkgfSBmcm9tICcuL2NvdXJzZS9zdHVkeS1kYXknO1xyXG5leHBvcnQgeyBjaGVja1N0dWR5VGltZUFwaSB9IGZyb20gJy4vY291cnNlL2NoZWNrLXN0dWR5LXRpbWUnO1xyXG5leHBvcnQgeyBwYXJlbnRzQXBpIH0gZnJvbSAnLi9jdXN0b21lci9wYXJlbnRzL3BhcmVudHMnO1xyXG5leHBvcnQgeyBzdGFmZkFwaSB9IGZyb20gJy4vc3RhZmYtbWFuYWdlL3N0YWZmJztcclxuZXhwb3J0IHsgbm90aWZpY2F0aW9uQXBpIH0gZnJvbSAnLi9vcHRpb25zL25vdGlmaWNhdGlvbic7XHJcbmV4cG9ydCB7IHJ1bGVzQXBpIH0gZnJvbSAnLi9vcHRpb25zL3J1bGVzJztcclxuXHJcbmV4cG9ydCB7IGV4YW1Ub3BpY0FwaSB9IGZyb20gJy4vZXhhbS9leGFtLXRvcGljJztcclxuZXhwb3J0IHsgY29uc3VsdGF0aW9uU3RhdHVzQXBpIH0gZnJvbSAnLi9vcHRpb25zL2NvbnN1bHRhdGlvbi1zdGF0dXMnO1xyXG5leHBvcnQgeyB0ZXN0Q3VzdG9tZXJQb2ludEFwaSB9IGZyb20gJy4vY3VzdG9tZXIvc2VydmljZS90ZXN0LWN1c3RvbWVyLXBvaW50JztcclxuXHJcbmV4cG9ydCB7IGNvbmZpZ1pvb21BcGkgfSBmcm9tICcuL3pvb20vY29uZmlnLXpvb20nO1xyXG5leHBvcnQgeyBzY2hlZHVsZVpvb21BcGkgfSBmcm9tICcuL3pvb20vc2NoZWR1bGUtem9vbSc7XHJcbmV4cG9ydCB7IHpvb21Sb29tQXBpIH0gZnJvbSAnLi96b29tL3pvb20tcm9vbSc7XHJcblxyXG5leHBvcnQgeyBwcmljZUZpeEV4YW1BcGkgfSBmcm9tICcuL29wdGlvbnMvcHJpY2UtZml4LWV4YW0nO1xyXG5leHBvcnQgeyBwYXlGaXhFeGFtQXBpIH0gZnJvbSAnLi9wYWNrYWdlL3BheS1maXgtZXhhbSc7XHJcbmV4cG9ydCB7IHBheUZpeExpc3RBcGkgfSBmcm9tICcuL3BhY2thZ2UvcGF5LWZpeC1saXN0JztcclxuZXhwb3J0IHsgcGFja2FnZVJlc3VsdEFwaSB9IGZyb20gJ34vYXBpQmFzZS9wYWNrYWdlL3BhY2thZ2UtcmVzdWx0JztcclxuZXhwb3J0IHsgZXhlcmNpc2VHcm91cEFwaSB9IGZyb20gJy4vZXhlcmNpc2UvZXhlcmNpc2VHcm91cCc7XHJcbmV4cG9ydCB7IGNoZWNrUm9vbUFwaSB9IGZyb20gJy4vY291cnNlL2NoZWNrLXJvb20nO1xyXG5leHBvcnQgeyBjaGVja1RlYWNoZXJBcGkgfSBmcm9tICcuL2NvdXJzZS9jaGVjay10ZWFjaGVyJztcclxuZXhwb3J0IHsgc3R1ZGVudEFkdmlzZUFwaSB9IGZyb20gJy4vY3VzdG9tZXIvc3R1ZGVudC9zdHVkZW50LWFkdmlzZSc7XHJcbmV4cG9ydCB7IHRlc3RDdXN0b21lckFwaSB9IGZyb20gJy4vY3VzdG9tZXIvc2VydmljZS90ZXN0LWN1c3RvbWVyJztcclxuZXhwb3J0IHsgdXNlckFwaSB9IGZyb20gJy4vdXNlci91c2VyJztcclxuZXhwb3J0IHsgZXhhbUNvbWluZ1Nvb25BcGkgfSBmcm9tICcuL2N1c3RvbWVyL3N0dWRlbnQvZXhhbS1jb21pbmctc29vbic7XHJcbmV4cG9ydCB7IHdhcm5pbmdBcGkgfSBmcm9tICcuL2N1c3RvbWVyL3N0dWRlbnQvd2FybmluZyc7XHJcbmV4cG9ydCB7IGNvdXJzZUFwaSB9IGZyb20gJy4vY291cnNlL2NvdXJzZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY291cnNlLWRldGFpbC9jb3Vyc2UtZGV0YWlsJztcclxuZXhwb3J0IHsgc3R1ZGVudExpc3RJbkNvdXJzZUFwaSB9IGZyb20gJy4vY291cnNlLWRldGFpbC9zdHVkZW50LWxpc3QnO1xyXG5leHBvcnQgeyBzdHVkZW50Q2hhbmdlQXBpIH0gZnJvbSAnLi9jdXN0b21lci9zdHVkZW50L3N0dWRlbnQtY2hhbmdlJztcclxuZXhwb3J0IHsgc3R1ZGVudENoYW5nZUNvdXJzZUFwaSB9IGZyb20gJy4vY3VzdG9tZXIvc3R1ZGVudC9zdHVkZW50LWNoYW5nZS1jb3Vyc2UnO1xyXG5leHBvcnQgeyBzZXJ2aWNlQ3VzdG9tZXJFeGFtQXBpIH0gZnJvbSAnLi9jdXN0b21lci9zZXJ2aWNlL3NlcnZpY2UtY3VzdG9tZXItZXhhbSc7XHJcbmV4cG9ydCB7IHNlcnZpY2VDdXN0b21lckV4YW1SZXN1bHRBcGkgfSBmcm9tICcuL2N1c3RvbWVyL3NlcnZpY2Uvc2VydmljZS1jdXN0b21lci1leGFtLXJlc3VsdCc7XHJcbmV4cG9ydCB7IHJlZnVuZHNBcGkgfSBmcm9tICcuL2N1c3RvbWVyL2ZpbmFuY2UvZmluYW5jZS1jYXNoaWVyLXJlZnVuZCc7XHJcbmV4cG9ydCB7IGNvbnRyYWN0Q3VzdG9tZXJMaXN0QXBpIH0gZnJvbSAnLi9jdXN0b21lci9jb250cmFjdC9jb250cmFjdC1jdXN0b21lci1saXN0JztcclxuZXhwb3J0IHsgdm91Y2hlckFwaSB9IGZyb20gJy4vY3VzdG9tZXIvZmluYW5jZS9maW5hbmNlLWNhc2hpZXItcGF5bWVudCc7XHJcbmV4cG9ydCB7IGludm9pY2VBcGkgfSBmcm9tICcuL2N1c3RvbWVyL2ZpbmFuY2UvZmluYW5jZS1jYXNoaWVyLWludm9pY2UnO1xyXG5leHBvcnQgeyBleGFtQXBwb2ludG1lbnRSZXN1bHRBcGkgfSBmcm9tICcuL2N1c3RvbWVyL3N0dWRlbnQvZXhhbS1hcHBvaW50bWVudC1yZXN1bHQnO1xyXG5leHBvcnQgeyBjaGVja0JyYW5jaFNjaGVkdWxlU3R1ZHkgfSBmcm9tICcuL3NjaGVkdWxlL2NoZWNrLWJyYW5jaC1zY2hlZHVsZSc7XHJcbmV4cG9ydCB7IGNoZWNrVGVhY2hlclNjaGVkdWxlU3R1ZHkgfSBmcm9tICcuL3NjaGVkdWxlL2NoZWNrLXRlYWNoZXItc2NoZWR1bGUnO1xyXG5leHBvcnQgeyBwcm9ncmFtRGV0YWlsUG9pbnRDb2x1bW5BcGkgfSBmcm9tICcuL29wdGlvbnMvcHJvZ3JhbS1kZXRhaWwtcG9pbnQtY29sdW1uJztcclxuZXhwb3J0IHsgY291cnNlU3R1ZGVudEFwaSB9IGZyb20gJy4vY3VzdG9tZXIvc3R1ZGVudC9jb3Vyc2Utc3R1ZGVudCc7XHJcbmV4cG9ydCB7IHJvbGxVcEFwaSB9IGZyb20gJy4vY291cnNlL3JvbGx1cCc7XHJcbmV4cG9ydCB7IGNvdXJzZU9mU3R1ZGVudFByaWNlQXBpIH0gZnJvbSAnLi9jb3Vyc2UvY291cnNlLW9mLXN0dWRlbnQtcHJpY2UnO1xyXG5leHBvcnQgeyBjb25maWdBcGkgfSBmcm9tICcuL29wdGlvbnMvY29uZmlnJztcclxuZXhwb3J0IHsgbmV3c0ZlZWRBcGkgfSBmcm9tICcuL25ld3NmZWVkL25ld3NmZWVkJztcclxuZXhwb3J0IHsgbmV3c0ZlZWRMaWtlQXBpIH0gZnJvbSAnLi9uZXdzZmVlZC9uZXdzZmVlZC1saWtlJztcclxuZXhwb3J0IHsgbmV3c0ZlZWRDb21tZW50QXBpIH0gZnJvbSAnLi9uZXdzZmVlZC9uZXdzZmVlZC1jb21tZW50JztcclxuZXhwb3J0IHsgbmV3c0ZlZWRDb21tZW50UmVwbHlBcGkgfSBmcm9tICcuL25ld3NmZWVkL25ld3NmZWVkLWNvbW1lbnRyZXBseSc7XHJcbmV4cG9ydCB7IHVzZXJCcmFuY2hBcGkgfSBmcm9tICcuL25ld3NmZWVkL3VzZXItYnJhbmNoJztcclxuZXhwb3J0IHsgZ3JvdXBOZXdzRmVlZEFwaSB9IGZyb20gJy4vbmV3c2ZlZWQvZ3JvdXAtbmV3c2ZlZWQnO1xyXG5leHBvcnQgeyB1c2VyR3JvdXBOZXdzRmVlZEFwaSB9IGZyb20gJy4vbmV3c2ZlZWQvdXNlci1ncm91cC1uZXdzZmVlZCc7XHJcbmV4cG9ydCB7IGV4ZXJjaXNlQXBpIH0gZnJvbSAnLi9leGVyY2lzZS9leGVyY2lzZSc7XHJcbmV4cG9ydCB7IHBhY2thZ2VBcGkgfSBmcm9tICcuL3BhY2thZ2UvcGFja2FnZSc7XHJcbmV4cG9ydCB7IHN0YWZmT2ZUYXNrR3JvdXBBcGksIHRhc2tBcGksIHRhc2tHcm91cEFwaSB9IGZyb20gJy4vc3RhZmYtbWFuYWdlL3Rhc2snO1xyXG5leHBvcnQgeyBkb2N1bWVudFNjaGVkdWxlQXBpIH0gZnJvbSAnLi9jb3Vyc2UtZGV0YWlsL2RvY3VtZW50LXNjaGVkdWxlJztcclxuZXhwb3J0IHsgcGFja2FnZVN0dWRlbnRBcGkgfSBmcm9tICcuL3BhY2thZ2UvcGFja2FnZS1zdHVkZW50JztcclxuZXhwb3J0IHsgYmFja2dyb3VuZE5ld3NGZWVkQXBpIH0gZnJvbSAnLi9uZXdzZmVlZC9iYWNrZ3JvdW5kLW5ld3NmZWVkJztcclxuZXhwb3J0IHsgc3R1ZHlEYXlPbmxpbmVBcGkgfSBmcm9tICcuL2NvdXJzZS1vbmxpbmUvc3R1ZHktZGF5JztcclxuZXhwb3J0IHsgbGVzc29uT25saW5lQXBpIH0gZnJvbSAnLi9jb3Vyc2Utb25saW5lL2xlc3Nvbic7XHJcbmV4cG9ydCB7IGNvdXJzZU9ubGluZURldGFpbEF2YWlsYWJsZURheUFwaSB9IGZyb20gJy4vY291cnNlLW9ubGluZS1kZXRhaWwvYXZhaWxhYmxlLWRheSc7XHJcbmV4cG9ydCB7IHBhY2thZ2VFeGFtaW5lckFwaSB9IGZyb20gJy4vcGFja2FnZS9wYWNrYWdlLWV4YW1pbmVyJztcclxuZXhwb3J0IHsgZXhhbURldGFpbEFwaSB9IGZyb20gJy4vZXhhbS1kZXRhaWwvZXhhbS1kZXRhaWwnO1xyXG5leHBvcnQgeyBzYWxlQ2FtcGFpZ25BcGkgfSBmcm9tICcuL3NhbGUvc2FsZS1jYW1wYWlnbic7XHJcbmV4cG9ydCB7IHNhbGVDYW1wYWlnbkRldGFpbEFwaSB9IGZyb20gJy4vc2FsZS9zYWxlLWNhbXBhaWduLWRldGFpbCc7XHJcbmV4cG9ydCB7IHNhbGVTYWxhcnlBcGkgfSBmcm9tICcuL3NhbGUvc2FsZS1zYWxhcnknO1xyXG5leHBvcnQgeyBzYWxlclRvdGFsUmV2ZW51ZUFwaSB9IGZyb20gJy4vc2FsZS9zYWxlci10b3RhbC1yZXZlbnVlJztcclxuZXhwb3J0IHsgc2FsZXJSZXZlbnVlQXBpIH0gZnJvbSAnLi9zYWxlL3NhbGVyLXJldmVudWUnO1xyXG5leHBvcnQgeyBWaWRlb0NvdXJzZUxpc3RBcGksIERvbmVQYXlBcGkgfSBmcm9tICcuL3ZpZGVvLWNvdXJzZS1saXN0JztcclxuZXhwb3J0IHsgVmlkZW9Db3Vyc2VPZlN0dWRlbnQsIFZpZGVvQ291cnNlSW50ZXJhY3Rpb24gfSBmcm9tICcuL3ZpZGVvLWxlYXJuaW5nJztcclxuZXhwb3J0IHsgcmVzZXRQYXNzd29yZEFwaSB9IGZyb20gJy4vcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQnO1xyXG5leHBvcnQgeyBkb2luZ1Rlc3RBcGkgfSBmcm9tICcuL2RvaW5nLXRlc3QvZG9pbmctdGVzdCc7XHJcbmV4cG9ydCB7IEZlZWRiYWNrQXBpIH0gZnJvbSAnLi9mZWVkLWJhY2snO1xyXG5leHBvcnQgeyBvbmVTaWduYWxBUEkgfSBmcm9tICcuL29uZVNpZ25hbC9vbmVTaWduYWwnO1xyXG5leHBvcnQgeyBzdHVkeVJvbGVBcGkgfSBmcm9tICcuL3N0dWR5LXJvbGUvc3R1ZHktcm9sZSc7XHJcbmV4cG9ydCB7IGNvbWluZ0NvdXJzZUFwaSB9IGZyb20gJy4vem9vbS9jb21pbmctY291cnNlJztcclxuZXhwb3J0ICogZnJvbSAnLi9zZWxmLWNvdXJzZSc7XHJcbiIsImltcG9ydCBheGlvcywgeyBBeGlvc1JlcXVlc3RDb25maWcsIEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiwgc2lnbkluIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCdcclxuaW1wb3J0IF8gZnJvbSAnfi9hcHBDb25maWcnXHJcblxyXG5jb25zdCBTSE9XX0xPRyA9IHRydWVcclxuY29uc3QgTk9ERV9TVEFUVVM6IGFueSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WXHJcblxyXG5jb25zdCBpc1Nob3dMb2cgPSAoZTogYW55KSA9PiB7XHJcblx0aWYgKGUgPT09ICcvYXBpL0lkaW9tcy9nZXRSYW5kb21zJyB8fCBlID09PSAnL2FwaS9SdWxlcycpIHtcclxuXHRcdHJldHVybiBmYWxzZVxyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gTk9ERV9TVEFUVVMgPT0gJ3Byb2R1Y3Rpb24nICYmICEhU0hPV19MT0cgPyB0cnVlIDogdHJ1ZVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VXJsKGNvbmZpZzogYW55KSB7XHJcblx0cmV0dXJuICEhY29uZmlnLmJhc2VVUkwgPyBjb25maWcudXJsLnJlcGxhY2UoY29uZmlnLmJhc2VVUkwsICcnKS5zcGxpdCgnPycpWzBdIDogY29uZmlnLnVybFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aEhlYWRlcl9YID0gYXN5bmMgKCkgPT4ge1xyXG5cdGNvbnN0IHNlc3Npb246IGFueSA9IGF3YWl0IGdldFNlc3Npb24oKVxyXG5cdHJldHVybiAhIXNlc3Npb24gJiYgISFzZXNzaW9uLmFjY2Vzc1Rva2VuID8geyB0b2tlbjogc2Vzc2lvbi5hY2Nlc3NUb2tlbiB9IDoge31cclxufVxyXG5leHBvcnQgY29uc3QgYXV0aEhlYWRlcl9CZWFyZXIgPSBhc3luYyAoKSA9PiB7XHJcblx0Y29uc3Qgc2Vzc2lvbjogYW55ID0gYXdhaXQgZ2V0U2Vzc2lvbigpXHJcblx0cmV0dXJuICEhc2Vzc2lvbiAmJiAhIXNlc3Npb24uYWNjZXNzVG9rZW4gPyB7IEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHNlc3Npb24uYWNjZXNzVG9rZW4gfSA6IHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcblx0YmFzZVVSTDogXy5ob3N0VVJMLFxyXG5cdGhlYWRlcnM6IHtcclxuXHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXHJcblx0fVxyXG59KVxyXG5cclxuaW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxyXG5cdGFzeW5jIChjb25maWc6IEF4aW9zUmVxdWVzdENvbmZpZykgPT4ge1xyXG5cdFx0Y29uc3QgdXJsOiBhbnkgPSBnZXRVcmwoY29uZmlnKVxyXG5cdFx0aWYgKCF1cmwudG9TdHJpbmcoKS5pbmNsdWRlcygnL2F1dGgvJykpIHtcclxuXHRcdFx0Y29uc3QgYXV0aEhlYWRlcjogYW55ID0gYXdhaXQgYXV0aEhlYWRlcl9YKClcclxuXHRcdFx0Y29uZmlnLmhlYWRlcnMgPSB7XHJcblx0XHRcdFx0Li4uY29uZmlnLmhlYWRlcnMsXHJcblx0XHRcdFx0Li4uYXV0aEhlYWRlclxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpc1Nob3dMb2codXJsKSAmJiBjb25zb2xlLmxvZyhgJWMgJHtjb25maWc/Lm1ldGhvZC50b1VwcGVyQ2FzZSgpfSAtICR7dXJsfTpgLCAnY29sb3I6ICMwMDg2YjM7IGZvbnQtd2VpZ2h0OiBib2xkJywgY29uZmlnKVxyXG5cdFx0cmV0dXJuIGNvbmZpZ1xyXG5cdH0sXHJcblx0KGVycm9yOiBhbnkpID0+IHtcclxuXHRcdGlzU2hvd0xvZygnJykgJiYgY29uc29sZS5sb2coYCVjICR7ZXJyb3I/LnJlc3BvbnNlPy5zdGF0dXN9ICA6YCwgJ2NvbG9yOiByZWQ7IGZvbnQtd2VpZ2h0OiBib2xkJywgZXJyb3I/LnJlc3BvbnNlPy5kYXRhKVxyXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxyXG5cdH1cclxuKVxyXG5cclxuY29uc3QgY2hlY2tSZXNwb25zZSA9IChlcnJvcjogYW55KSA9PiB7XHJcblx0c3dpdGNoIChlcnJvcj8ucmVzcG9uc2U/LnN0YXR1cykge1xyXG5cdFx0Y2FzZSA0MDE6XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHNpZ25JbigpXHJcblx0XHRcdH0sIDEwMDApXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIDQwMzpcclxuXHRcdFx0Y29uc29sZS5sb2coYCVFUlJPUiA0MDM6YCArIGAlYyBET04nVCBIQVZFIFBFUk1JU1NPTmAsICdjb2xvcjogcmVkOyBmb250LXdlaWdodDogYm9sZCcsICdjb2xvcjogeWVsbG93OycpXHJcblx0XHRcdGFsZXJ0KCdC4bqhbiBraMO0bmcgY8OzIHF1eeG7gW4gdGjhu7FjIGhp4buHbicpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIDQwMDpcclxuXHRcdFx0Y29uc29sZS5sb2coZXJyb3I/LnJlc3BvbnNlPy5tZXNzYWdlKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSA1MDA6XHJcblx0XHRcdGNvbnNvbGUubG9nKGAlIEVSUk9SIDUwMDpgICsgYCVjIEJBQ0stRU5EYCwgJ2NvbG9yOiByZWQ7IGZvbnQtd2VpZ2h0OiBib2xkJywgJ2NvbG9yOiB5ZWxsb3c7JylcclxuXHRcdFx0YnJlYWtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdGNvbnNvbGUubG9nKGAlYyAke2Vycm9yPy5yZXNwb25zZX0gIDpgLCAnY29sb3I6IHJlZDsgZm9udC13ZWlnaHQ6IGJvbGQnLCBlcnJvcj8ucmVzcG9uc2UpXHJcblx0fVxyXG59XHJcblxyXG5pbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxyXG5cdChyZXNwb25zZTogQXhpb3NSZXNwb25zZSkgPT4ge1xyXG5cdFx0bGV0IHVybDogYW55ID0gZ2V0VXJsKHJlc3BvbnNlPy5jb25maWcpXHJcblx0XHRpc1Nob3dMb2codXJsKSAmJiBjb25zb2xlLmxvZyhgICVjICR7cmVzcG9uc2U/LnN0YXR1c30gLSAke2dldFVybChyZXNwb25zZT8uY29uZmlnKX06YCwgJ2NvbG9yOiAjMDA4MDAwOyBmb250LXdlaWdodDogYm9sZCcsIHJlc3BvbnNlKVxyXG5cdFx0cmV0dXJuIHJlc3BvbnNlXHJcblx0fSxcclxuXHRmdW5jdGlvbiAoZXJyb3I6IGFueSkge1xyXG5cdFx0aWYgKCEhZXJyb3I/LnJlc3BvbnNlKSB7XHJcblx0XHRcdGNoZWNrUmVzcG9uc2UoZXJyb3IpXHJcblx0XHRcdGlzU2hvd0xvZygnJykgJiYgY29uc29sZS5sb2coYCVjICR7ZXJyb3I/LnJlc3BvbnNlPy5zdGF0dXN9ICA6YCwgJ2NvbG9yOiByZWQ7IGZvbnQtd2VpZ2h0OiBib2xkJywgZXJyb3I/LnJlc3BvbnNlPy5kYXRhKVxyXG5cdFx0XHRyZXR1cm4gISFlcnJvcj8ucmVzcG9uc2U/LmRhdGEgPyBQcm9taXNlLnJlamVjdChlcnJvci5yZXNwb25zZS5kYXRhKSA6IFByb21pc2UucmVqZWN0KGVycm9yKVxyXG5cdFx0fSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XHJcblx0XHRcdGlzU2hvd0xvZygnJykgJiYgY29uc29sZS5sb2coYCVjICR7SlNPTi5zdHJpbmdpZnkoZXJyb3IpfSAgOmAsICdjb2xvcjogcmVkOyBmb250LXdlaWdodDogYm9sZCcsIGVycm9yPy5yZXNwb25zZT8uZGF0YSlcclxuXHRcdFx0cmV0dXJuICEhZXJyb3I/LnJlc3BvbnNlPy5kYXRhID8gUHJvbWlzZS5yZWplY3QoZXJyb3IucmVzcG9uc2UuZGF0YSkgOiBQcm9taXNlLnJlamVjdChlcnJvcilcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlzU2hvd0xvZygnJykgJiYgY29uc29sZS5sb2coYCVjICR7SlNPTi5zdHJpbmdpZnkoZXJyb3IpfSAgOmAsICdjb2xvcjogcmVkOyBmb250LXdlaWdodDogYm9sZCcsICdIw6xuaCBuaMawIGzDoCBzZXR0aW5nIHNhaScpXHJcblx0XHRcdHJldHVybiAhIWVycm9yPy5yZXNwb25zZT8uZGF0YSA/IFByb21pc2UucmVqZWN0KGVycm9yLnJlc3BvbnNlLmRhdGEpIDogUHJvbWlzZS5yZWplY3QoZXJyb3IpXHJcblx0XHR9XHJcblx0fVxyXG4pXHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY2xhc3MgQmFja2dyb3VuZE5ld3NGZWVkIHtcclxuICAgIC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG4gICAgZ2V0QWxsID0gKCkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJQmFja2dyb3VuZE5ld3NGZWVkW10+PihcIi9hcGkvQmFja2dyb3VuZFwiKTtcclxuXHJcbiAgICAvLyBM4bqleSB0aGVvIGlkXHJcbiAgICBnZXRCeUlEID0gKGlkOm51bWJlcikgPT4gXHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERldGFpbD4oYC9hcGkvQmFja2dyb3VuZC8ke2lkfWApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYmFja2dyb3VuZE5ld3NGZWVkQXBpID0gbmV3IEJhY2tncm91bmROZXdzRmVlZCgpOyIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSc7XHJcblxyXG5jbGFzcyBHcm91cE5ld3NGZWVkIHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElHcm91cE5ld3NGZWVkW10+PignL2FwaS9Hcm91cE5ld3NGZWVkJywge1xyXG5cdFx0XHRwYXJhbXM6IHRvZG9BcGksXHJcblx0XHR9KTtcclxuXHJcblx0Ly8gTOG6pXkgdGhlbyBpZFxyXG5cdGdldEJ5SUQgPSAoaWQ6IG51bWJlcikgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJR3JvdXBOZXdzRmVlZD4+KGAvYXBpL0dyb3VwTmV3c0ZlZWQvJHtpZH1gKTtcclxuXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFkZCA9IChkYXRhKSA9PiBpbnN0YW5jZS5wb3N0KCcvYXBpL0dyb3VwTmV3c0ZlZWQnLCBkYXRhKTtcclxuXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQoJy9hcGkvR3JvdXBOZXdzRmVlZCcsIGRhdGEsIHt9KTtcclxuXHJcblx0Ly8gVXBsb2FkIGJhY2tncm91bmRcclxuXHR1cGxvYWRJbWFnZSA9IChmaWxlOiBhbnkpID0+IHtcclxuXHRcdGxldCBmRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cdFx0ZkRhdGEuYXBwZW5kKCdGaWxlJywgZmlsZSk7XHJcblx0XHRjb25zb2xlLmxvZygnRkRBVEE6ICcsIGZEYXRhKTtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KCcvYXBpL3VwbG9hZGZpbGVHcm91cCcsIGZEYXRhLCB7fSk7XHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdyb3VwTmV3c0ZlZWRBcGkgPSBuZXcgR3JvdXBOZXdzRmVlZCgpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNsYXNzIE5ld3NGZWVkQ29tbWVudCB7XHJcbiAgICAvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuICAgIGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SU5ld3NGZWVkQ29tbWVudFtdPj4oXCIvYXBpL05ld3NGZWVkQ29tbWVudFwiLCB7XHJcbiAgICAgICAgcGFyYW1zOiB0b2RvQXBpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVGjDqm0gbeG7m2kgZGF0YVxyXG4gICAgYWRkID0gKCBkYXRhOiBhbnkgKSA9PiBpbnN0YW5jZS5wb3N0KFwiL2FwaS9OZXdzRmVlZENvbW1lbnRcIiwgZGF0YSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbmV3c0ZlZWRDb21tZW50QXBpID0gbmV3IE5ld3NGZWVkQ29tbWVudCgpOyIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY2xhc3MgTmV3c0ZlZWRDb21tZW50UmVwbHkge1xyXG4gICAgLy8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcbiAgICBnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElOZXdzRmVlZENvbW1lbnRSZXBseVtdPj4oXCIvYXBpL0NvbW1lbnRSZXBseVwiLCB7XHJcbiAgICAgICAgcGFyYW1zOiB0b2RvQXBpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVGjDqm0gbeG7m2kgZGF0YVxyXG4gICAgYWRkID0gKCBkYXRhOiBJTmV3c0ZlZWRDb21tZW50UmVwbHkgKSA9PiBpbnN0YW5jZS5wb3N0KFwiL2FwaS9Db21tZW50UmVwbHlcIiwgZGF0YSk7XHJcblxyXG4gICAgLy8gVXBkYXRlIGRhdGFcclxuICAgIHVwZGF0ZSA9ICggZGF0YTphbnkgKSA9PiBpbnN0YW5jZS5wdXQoXCIvYXBpL0NvbW1lbnRSZXBseVwiLCBkYXRhKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBuZXdzRmVlZENvbW1lbnRSZXBseUFwaSA9IG5ldyBOZXdzRmVlZENvbW1lbnRSZXBseSgpOyIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY2xhc3MgTmV3c0ZlZWRMaWtlIHtcclxuICAgIC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG4gICAgZ2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJTmV3c0ZlZWRMaWtlW10+PihcIi9hcGkvTmV3c0ZlZWRMaWtlXCIsIHtcclxuICAgICAgICBwYXJhbXM6IHRvZG9BcGksXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBUaMOqbSBt4bubaSBkYXRhXHJcbiAgICBhZGQgPSAoIGRhdGE6IGFueSApID0+IGluc3RhbmNlLnBvc3QoXCIvYXBpL05ld3NGZWVkTGlrZVwiLCBkYXRhKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBuZXdzRmVlZExpa2VBcGkgPSBuZXcgTmV3c0ZlZWRMaWtlKCk7IiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnO1xyXG5cclxuY2xhc3MgTmV3c0ZlZWQge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SU5ld3NGZWVkW10+PignL2FwaS9OZXdzRmVlZCcsIHtcclxuXHRcdFx0cGFyYW1zOiB0b2RvQXBpXHJcblx0XHR9KTtcclxuXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFkZCA9IChkYXRhKSA9PiBpbnN0YW5jZS5wb3N0KCcvYXBpL05ld3NGZWVkJywgZGF0YSk7XHJcblxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucHV0KCcvYXBpL05ld3NGZWVkJywgZGF0YSwge30pO1xyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0ZGVsZXRlID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucHV0KCcvYXBpL05ld3NGZWVkJywgZGF0YSwge30pO1xyXG5cclxuXHQvLyBVcGxvYWQgZmlsZVxyXG5cdHVwbG9hZEZpbGUgPSAoZmlsZTogYW55KSA9PiB7XHJcblx0XHRsZXQgZkRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHRcdGZEYXRhLmFwcGVuZCgnRmlsZScsIGZpbGUpO1xyXG5cdFx0Y29uc29sZS5sb2coJ0ZEQVRBOiAnLCBmRGF0YSk7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCgnL2FwaS91cGxvYWRmaWxlJywgZkRhdGEsIHt9KTtcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbmV3c0ZlZWRBcGkgPSBuZXcgTmV3c0ZlZWQoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jbGFzcyBVc2VyQnJhbmNoIHtcclxuICAgIC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG4gICAgZ2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVXNlckJyYW5jaFtdPj4oXCIvYXBpL1VzZXJCcmFuY2hcIiwge1xyXG4gICAgICAgIHBhcmFtczogdG9kb0FwaSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFRow6ptIG3hu5tpIGRhdGFcclxuICAgIGFkZCA9ICggZGF0YTogSVVzZXJCcmFuY2ggKSA9PiBpbnN0YW5jZS5wb3N0KFwiL2FwaS9Vc2VyQnJhbmNoXCIsIGRhdGEpO1xyXG5cclxuICAgIC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcbiAgICB1cGRhdGUgPSAoIGRhdGE6IGFueSApID0+IGluc3RhbmNlLnB1dChcIi9hcGkvVXNlckJyYW5jaFwiLCBkYXRhLCB7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyQnJhbmNoQXBpID0gbmV3IFVzZXJCcmFuY2goKTsiLCJpbXBvcnQge2luc3RhbmNlfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnO1xyXG5cclxuY2xhc3MgVXNlckdyb3VwTmV3c0ZlZWQge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVVzZXJHcm91cE5ld3NGZWVkW10+PihcclxuXHRcdFx0Jy9hcGkvR3JvdXBVc2VyTmV3c0ZlZWQnLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGFyYW1zOiB0b2RvQXBpLFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cclxuXHQvLyBM4bqleSB0aGVvIGlkXHJcblx0Z2V0QnlJRCA9IChpZDogbnVtYmVyKSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElVc2VyR3JvdXBOZXdzRmVlZFtdPj4oXHJcblx0XHRcdGAvYXBpL0dyb3VwVXNlck5ld3NGZWVkLyR7aWR9YFxyXG5cdFx0KTtcclxuXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFkZCA9IChkYXRhKSA9PiBpbnN0YW5jZS5wb3N0KCcvYXBpL0dyb3VwVXNlck5ld3NGZWVkJywgZGF0YSk7XHJcblxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucHV0KCcvYXBpL0dyb3VwVXNlck5ld3NGZWVkJywgZGF0YSwge30pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlckdyb3VwTmV3c0ZlZWRBcGkgPSBuZXcgVXNlckdyb3VwTmV3c0ZlZWQoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICcuLi9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9VcGRhdGVfT25lU2lnbmFsX0RldmljZUlEJztcclxuZXhwb3J0IGNvbnN0IG9uZVNpZ25hbEFQSSA9IHtcclxuXHR1cGRhdGUoSUQpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsICsgYD9vbmVTaWduYWxfZGV2aWNlSWQ9JHtJRH1gKTtcclxuXHR9XHJcbn07XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY29uc3QgdXJsID0gXCIvYXBpL0FyZWFcIjtcclxuY2xhc3MgQXJlYUFwaSB7XHJcbiAgLy8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcbiAgZ2V0QWxsID0gKHBhcmFtcykgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElBcmVhW10+Pih1cmwsIHsgcGFyYW1zIH0pO1xyXG5cclxuICAvLyBUaMOqbSBt4bubaSBkYXRhXHJcbiAgYWRkKGRhdGE6IElBcmVhKSB7XHJcbiAgICByZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG4gIH1cclxuICAvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG4gIHVwZGF0ZShkYXRhOiBJQXJlYSkge1xyXG4gICAgcmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG4gIH1cclxuICAvLyBYw7NhIGRhdGFcclxuICBkZWxldGUoZGF0YTogSUFyZWEpIHtcclxuICAgIHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhcmVhQXBpID0gbmV3IEFyZWFBcGkoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnXHJcblxyXG5jbGFzcyBCcmFuY2hBcGkge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YSBjw7MgcGjDom4gdHJhbmdcclxuXHRnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElCcmFuY2hbXT4+KCcvYXBpL0JyYW5jaCcsIHtcclxuXHRcdFx0Ly8gcGFyYW1zOiBnZXRQYXJhbXModG9kb0FwaSksXHJcblx0XHRcdHBhcmFtczogdG9kb0FwaVxyXG5cdFx0fSlcclxuXHJcblx0Ly8gTOG6pXkgY2hpIHRp4bq/dCBkYXRhIHRoZW8gSURcclxuXHRnZXRCeUlEID0gKGlkOiBudW1iZXIpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJQnJhbmNoPj4oYC9hcGkvQnJhbmNoLyR7aWR9YClcclxuXHJcblx0Ly8gQ+G6rXAgbmjhuq10IHRy4bqhbmcgdGjDoWkg4bqpbi9oaeG7h25cclxuXHRjaGFuZ2VTdGF0dXMgPSAoaWQ6IG51bWJlcikgPT4gaW5zdGFuY2UucHV0PElBcGlSZXN1bHREYXRhPElCcmFuY2hbXT4+KGAvYXBpL0JyYW5jaC9IaWRlLyR7aWR9YClcclxuXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFkZCA9IChkYXRhOiBJQnJhbmNoKSA9PiBpbnN0YW5jZS5wb3N0KCcvYXBpL0JyYW5jaCcsIGRhdGEpXHJcblxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucHV0KCcvYXBpL0JyYW5jaCcsIGRhdGEsIHt9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYnJhbmNoQXBpID0gbmV3IEJyYW5jaEFwaSgpXHJcbiIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSc7XHJcblxyXG5jbGFzcyBDb25maWcge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YSBjw7MgcGjDom4gdHJhbmdcclxuXHRnZXRBbGwgPSAocGFyYW1zKSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElDb25maWdbXT4+KCcvYXBpL0NvbmZpZycsIHtwYXJhbXN9KTtcclxuXHJcblx0Ly8gTOG6pXkgY2hpIHRp4bq/dCBkYXRhIHRoZW8gSURcclxuXHRnZXRCeUlEID0gKGlkOiBudW1iZXIpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUNvbmZpZz4+KGAvYXBpL0NvbmZpZy8ke2lkfWApO1xyXG5cclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkID0gKGRhdGEpID0+IGluc3RhbmNlLnBvc3QoJy9hcGkvQ29uZmlnJywgZGF0YSk7XHJcblxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlID0gKGRhdGEpID0+IGluc3RhbmNlLnB1dCgnL2FwaS9Db25maWcnLCBkYXRhKTtcclxuXHQvLyBYw7NhIGRhdGFcclxuXHRkZWxldGUgPSAoZGF0YSkgPT4gaW5zdGFuY2UucHV0KCcvYXBpL0NvbmZpZycsIGRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnQXBpID0gbmV3IENvbmZpZygpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNvbnN0IHVybCA9IFwiL2FwaS9DdXN0b21lckNvbnN1bHRhdGlvblN0YXR1c1wiO1xyXG5cclxuY2xhc3MgQ29uc3VsdGF0aW9uU3RhdHVzQXBpIHtcclxuICBnZXRQYWdlZCA9IChQYXJhbXM6IGFueSkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJQ29uc3VsdGF0aW9uU3RhdHVzW10+Pih1cmwsIHtcclxuICAgICAgcGFyYW1zOiBQYXJhbXMsXHJcbiAgICB9KTtcclxuXHJcbiAgZ2V0QWxsID0gKFBhcmFtczogYW55KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElDb25zdWx0YXRpb25TdGF0dXNbXT4+KHVybCwge1xyXG4gICAgICBwYXJhbXM6IFBhcmFtcyxcclxuICAgIH0pO1xyXG5cclxuICBnZXREZXRhaWwgPSAoaWQ6IG51bWJlcikgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJQ29uc3VsdGF0aW9uU3RhdHVzPj4oYCR7dXJsfS8ke2lkfWApO1xyXG5cclxuICBhZGQgPSAoZGF0YTogSUNvbnN1bHRhdGlvblN0YXR1cykgPT4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG5cclxuICB1cGRhdGUgPSAoZGF0YTogSUNvbnN1bHRhdGlvblN0YXR1cykgPT4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSwge30pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY29uc3VsdGF0aW9uU3RhdHVzQXBpID0gbmV3IENvbnN1bHRhdGlvblN0YXR1c0FwaSgpO1xyXG4iLCJpbXBvcnQge2luc3RhbmNlfSBmcm9tICcuLi9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9Db250cmFjdC8nO1xyXG5leHBvcnQgY29uc3QgY29udHJhY3RBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJQ29udHJhY3RbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXMsXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQoZGF0YTogSUNvbnRyYWN0KSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUoZGF0YTogSUNvbnRyYWN0KSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBYw7NhIGRhdGFcclxuXHRkZWxldGUoZGF0YTogSUNvbnRyYWN0KSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxufTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnXHJcblxyXG5jbGFzcyBDdXJyaWN1bHVtRGV0YWlsQXBpIHtcclxuXHRnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElDdXJyaWN1bHVtRGV0YWlsW10+PignL2FwaS9DdXJyaWN1bHVtRGV0YWlsLycsIHtcclxuXHRcdFx0cGFyYW1zOiB0b2RvQXBpXHJcblx0XHR9KVxyXG5cclxuXHRnZXRXaXRoSUQgPSAoSUQ6IG51bWJlcikgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHQ8SUN1cnJpY3VsdW1EZXRhaWxbXT4+KGAvYXBpL0N1cnJpY3VsdW1EZXRhaWwvJHtJRH1gKVxyXG5cclxuXHRhZGQgPSAoZGF0YTogSUN1cnJpY3VsdW1EZXRhaWwpID0+IGluc3RhbmNlLnBvc3QoJy9hcGkvQ3VycmljdWx1bURldGFpbCcsIGRhdGEsIHt9KVxyXG5cclxuXHRpbnNlcnQgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wb3N0KCcvYXBpL0N1cnJpY3VsdW1EZXRhaWwvaW5zZXJ0JywgZGF0YSwge30pXHJcblxyXG5cdHVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dCgnL2FwaS9DdXJyaWN1bHVtRGV0YWlsLycsIGRhdGEsIHt9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3VycmljdWx1bURldGFpbEFwaSA9IG5ldyBDdXJyaWN1bHVtRGV0YWlsQXBpKClcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnO1xyXG5cclxuY2xhc3MgQ3VycmljdWx1bUFwaSB7XHJcblx0Z2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJQ3VycmljdWx1bVtdPj4oJy9hcGkvQ3VycmljdWx1bS8nLCB7XHJcblx0XHRcdHBhcmFtczogdG9kb0FwaVxyXG5cdFx0fSk7XHJcblxyXG5cdGdldFdpdGhJRCA9IChJRDogbnVtYmVyKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdDxJQ3VycmljdWx1bVtdPj4oYC9hcGkvQ3VycmljdWx1bS8ke0lEfWApO1xyXG5cclxuXHRhZGQgPSAoZGF0YTogSUN1cnJpY3VsdW0pID0+IGluc3RhbmNlLnBvc3QoJy9hcGkvQ3VycmljdWx1bScsIGRhdGEsIHt9KTtcclxuXHJcblx0YWRkU3ViamVjdCA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnBvc3QoJy9hcGkvVXBkYXRlQWxsU3ViamVjdE9mQ3VycmljdWx1bScsIGRhdGEsIHt9KTtcclxuXHJcblx0dXBkYXRlID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucHV0KCcvYXBpL0N1cnJpY3VsdW0vJywgZGF0YSwge30pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3VycmljdWx1bUFwaSA9IG5ldyBDdXJyaWN1bHVtQXBpKCk7XHJcbiIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL0RheU9mZi8nO1xyXG5leHBvcnQgY29uc3QgZGF5T2ZmQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SURheU9mZltdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtcyxcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFkZChkYXRhOiBJRGF5T2ZmKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUoZGF0YTogSURheU9mZikge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gWMOzYSBkYXRhXHJcblx0ZGVsZXRlKGRhdGE6IElEYXlPZmYpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSdcclxuXHJcbmNsYXNzIERpc2NvdW50QXBpIHtcclxuXHRnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElEaXNjb3VudFtdPj4oJy9hcGkvRGlzY291bnQnLCB7XHJcblx0XHRcdHBhcmFtczogdG9kb0FwaVxyXG5cdFx0fSlcclxuXHJcblx0Z2V0U3VnZ2VzdCA9IChJRDogYW55KSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SURpc2NvdW50W10+PignL2FwaS9EaXNjb3VudC9zdWdnZXN0X2Rpc2NvdW50X2NvZGUvJyArIElEKVxyXG5cclxuXHRhZGQgPSAoZGF0YTogSURpc2NvdW50KSA9PiBpbnN0YW5jZS5wb3N0KCcvYXBpL0Rpc2NvdW50JywgZGF0YSwge30pXHJcblxyXG5cdHVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dCgnL2FwaS9EaXNjb3VudCcsIGRhdGEsIHt9KVxyXG5cclxuXHRnZXRPZlN0dWRlbnQgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPGFueT4+KCcvYXBpL0Rpc2NvdW50T2ZTdHVkZW50Jywge1xyXG5cdFx0XHRwYXJhbXM6IHRvZG9BcGlcclxuXHRcdH0pXHJcblxyXG5cdGRpc2NvdW50U3R1ZGVudCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8YW55Pj4oJy9hcGkvRGlzY291bnRTdHVkZW50Jywge1xyXG5cdFx0XHRwYXJhbXM6IHRvZG9BcGlcclxuXHRcdH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkaXNjb3VudEFwaSA9IG5ldyBEaXNjb3VudEFwaSgpXHJcbiIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9EaXN0cmljdCc7XHJcbmNsYXNzIERpc3RyaWN0QXBpIHtcclxuXHRnZXRBbGwgPSAocGFyYW1zKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SURpc3RyaWN0W10+Pih1cmwsIHtwYXJhbXN9KTtcclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkKGRhdGE6IElEaXN0cmljdCkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuXHR9XHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUoZGF0YTogSURpc3RyaWN0KSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fVxyXG5cdC8vIFjDs2EgZGF0YVxyXG5cdGRlbGV0ZShkYXRhOiBJRGlzdHJpY3QpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdC8vICAgcG9zdCA9IChkYXRhOiBJQnJhbmNoKSA9PiBpbnN0YW5jZS5wb3N0KFwiL2FwaS9CcmFuY2gvSW5zZXJ0QnJhbmNoXCIsIGRhdGEpO1xyXG5cdGdldEJ5QXJlYSA9IChhcmVhSUQ6IG51bWJlcikgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJRGlzdHJpY3RbXT4+KCcvYXBpL0Rpc3RyaWN0Jywge1xyXG5cdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRBcmVhSUQ6IGFyZWFJRCxcclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cclxuXHQvLyAgIHBvc3QgPSAoZGF0YTogSUJyYW5jaCkgPT4gaW5zdGFuY2UucG9zdChcIi9hcGkvQnJhbmNoL0luc2VydEJyYW5jaFwiLCBkYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRpc3RyaWN0QXBpID0gbmV3IERpc3RyaWN0QXBpKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY2xhc3MgR3JhZGVBcGkge1xyXG4gIGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUdyYWRlW10+PihcIi9hcGkvR3JhZGUvXCIsIHtcclxuICAgICAgcGFyYW1zOiB0b2RvQXBpLFxyXG4gICAgfSk7XHJcblxyXG4gIGdldFdpdGhJRCA9IChJRDogbnVtYmVyKSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHQ8SUdyYWRlW10+PihgL2FwaS9HcmFkZS8ke0lEfWApO1xyXG5cclxuICBhZGQgPSAoZGF0YTogSUdyYWRlKSA9PiBpbnN0YW5jZS5wb3N0KFwiL2FwaS9HcmFkZVwiLCBkYXRhLCB7fSk7XHJcblxyXG4gIHVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dChcIi9hcGkvR3JhZGUvXCIsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdyYWRlQXBpID0gbmV3IEdyYWRlQXBpKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY29uc3QgdXJsID0gXCIvYXBpL0lkaW9tc1wiO1xyXG5jbGFzcyBJZGlvbXNBcGkge1xyXG4gIGdldFBhZ2VkID0gKFBhcmFtczogYW55KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElJZGlvbXNbXT4+KHVybCwge1xyXG4gICAgICBwYXJhbXM6IFBhcmFtcyxcclxuICAgIH0pO1xyXG5cclxuICBnZXREZXRhaWwgPSAoaWQ6IG51bWJlcikgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJSWRpb21zPj4oYCR7dXJsfS8ke2lkfWApO1xyXG5cclxuICBhZGQgPSAoZGF0YTogSUlkaW9tcykgPT4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG5cclxuICB1cGRhdGUgPSAoZGF0YTogSUlkaW9tcykgPT4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSwge30pO1xyXG4gIGdldFJhbmRvbSA9ICgpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJSWRpb21zPj4oYCR7dXJsfS9nZXRSYW5kb21zYClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGlkaW9tc0FwaSA9IG5ldyBJZGlvbXNBcGkoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jbGFzcyBKb2JBcGkge1xyXG4gIGdldEFsbCA9IChqb2JQYXJhbXM6IGFueSkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJSm9iW10+PihcIi9hcGkvSm9iXCIsIHtcclxuICAgICAgcGFyYW1zOiBqb2JQYXJhbXMsXHJcbiAgICB9KTtcclxuXHJcbiAgZ2V0RGV0YWlsID0gKGlkOiBudW1iZXIpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0PElKb2I+PihgL2FwaS9Kb2IvJHtpZH1gKTtcclxuXHJcbiAgYWRkID0gKGRhdGE6IElKb2IpID0+IGluc3RhbmNlLnBvc3QoXCIvYXBpL0pvYlwiLCBkYXRhKTtcclxuXHJcbiAgdXBkYXRlID0gKGRhdGE6IElKb2IpID0+IGluc3RhbmNlLnB1dChcIi9hcGkvSm9iXCIsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGpvYkFwaSA9IG5ldyBKb2JBcGkoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnXHJcblxyXG5jbGFzcyBOb3RpZmljYXRpb24ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SU5vdGlmaWNhdGlvbltdPj4oJy9hcGkvTm90aWZpY2F0aW9ucycsIHtcclxuXHRcdFx0cGFyYW1zOiB0b2RvQXBpXHJcblx0XHR9KVxyXG5cclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkID0gKGRhdGEpID0+IGluc3RhbmNlLnBvc3QoJy9hcGkvTm90aWZpY2F0aW9ucycsIGRhdGEpXHJcblxyXG5cdC8vIEzhuqV5IGRhdGEgd2l0aCB1c2VyXHJcblx0Z2V0QWxsV2l0aFVzZXIgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPignL2FwaS9Ob3RpZmljYXRpb25Vc2VyJywge1xyXG5cdFx0XHRwYXJhbXM6IHRvZG9BcGlcclxuXHRcdH0pXHJcblxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhIMSRw6MgeGVtXHJcblx0dXBkYXRlU2VlbiA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dCgnL2FwaS9Ob3RpZmljYXRpb25Vc2VyJywgZGF0YSwge30pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBub3RpZmljYXRpb25BcGkgPSBuZXcgTm90aWZpY2F0aW9uKClcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvUHJpY2VGaXhFeGFtJztcclxuXHJcbmNsYXNzIFByaWNlRml4RXhhbUFwaSB7XHJcblx0Z2V0QWxsID0gKFBhcmFtczogYW55KSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElQcmljZUZpeEV4YW1bXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXM6IFBhcmFtc1xyXG5cdFx0fSk7XHJcblxyXG5cdC8vICAgZ2V0RGV0YWlsID0gKGlkOiBudW1iZXIpID0+XHJcblx0Ly8gICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJUGF5bWVudE1ldGhvZD4+KGAke3VybH0vJHtpZH1gKTtcclxuXHJcblx0YWRkID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG5cclxuXHR1cGRhdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhLCB7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwcmljZUZpeEV4YW1BcGkgPSBuZXcgUHJpY2VGaXhFeGFtQXBpKCk7XHJcbiIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1BvaW50Q29sdW1uLyc7XHJcbmV4cG9ydCBjb25zdCBwcm9ncmFtRGV0YWlsUG9pbnRDb2x1bW5BcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJUHJvZ3JhbURldGFpbFBvaW50Q29sdW1uW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zLFxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkKGRhdGE6IElQcm9ncmFtRGV0YWlsUG9pbnRDb2x1bW4pIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZShkYXRhOiBJUHJvZ3JhbURldGFpbFBvaW50Q29sdW1uKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdGRlbGV0ZShkYXRhOiBJUHJvZ3JhbURldGFpbFBvaW50Q29sdW1uKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxufTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jbGFzcyBQcm9ncmFtQXBpIHtcclxuICBnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElQcm9ncmFtW10+PihcIi9hcGkvUHJvZ3JhbVwiLCB7XHJcbiAgICAgIHBhcmFtczogdG9kb0FwaSxcclxuICAgIH0pO1xyXG5cclxuICBnZXRXaXRoSUQgPSAoSUQ6IG51bWJlcikgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0PElHcmFkZVtdPj4oYC9hcGkvUHJvZ3JhbS8ke0lEfWApO1xyXG5cclxuICBhZGQgPSAoZGF0YTogSVByb2dyYW0pID0+IGluc3RhbmNlLnBvc3QoXCIvYXBpL1Byb2dyYW1cIiwgZGF0YSwge30pO1xyXG5cclxuICB1cGRhdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQoXCIvYXBpL1Byb2dyYW1cIiwgZGF0YSwge30pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZ3JhbUFwaSA9IG5ldyBQcm9ncmFtQXBpKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY2xhc3MgUHVyb3NlIHtcclxuICAgIC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG4gICAgZ2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJUHVycG9zZVtdPj4oXCIvYXBpL1B1cnBvc2VzXCIsIHtcclxuICAgICAgICBwYXJhbXM6IHRvZG9BcGksXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBUaMOqbSBt4bubaSBkYXRhXHJcbiAgICBhZGQgPSAoIGRhdGE6IElQdXJwb3NlICkgPT4gaW5zdGFuY2UucG9zdChcIi9hcGkvUHVycG9zZXNcIiwgZGF0YSk7XHJcblxyXG4gICAgLy8gQ+G6rXAgbmjhuq10IGRhdGFcclxuICAgIHVwZGF0ZSA9ICggZGF0YTogYW55ICkgPT4gaW5zdGFuY2UucHV0KFwiL2FwaS9QdXJwb3Nlc1wiLCBkYXRhLCB7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwdXJvc2VBcGkgPSBuZXcgUHVyb3NlKCk7IiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jbGFzcyBSb29tQXBpIHtcclxuICAvLyBM4bqleSB04bqldCBj4bqjXHJcbiAgZ2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJUm9vbVtdPj4oXCIvYXBpL1Jvb20vXCIsIHtcclxuICAgICAgcGFyYW1zOiB0b2RvQXBpLFxyXG4gICAgfSk7XHJcblxyXG4gIC8vIEdldCBieSBJRFxyXG4gIGdldEJ5SWQgPSAoaWQ6IGFueSkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJUm9vbVtdPj4oYC9hcGkvUm9vbS8ke2lkfWApO1xyXG5cclxuICAvLyBVcGRhdGUgZGF0YVxyXG4gIHVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dChcIi9hcGkvUm9vbVwiLCBkYXRhKTtcclxuXHJcbiAgLy8gQWRkIGRhdGFcclxuICBhZGQgPSAoZGF0YTogSVJvb20pID0+IGluc3RhbmNlLnBvc3QoXCIvYXBpL1Jvb20vXCIsIGRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgcm9vbUFwaSA9IG5ldyBSb29tQXBpKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJ1xyXG5cclxuY2xhc3MgUnVsZXMge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbCA9IChwYXJhbXMpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVJ1bGVzW10+PignL2FwaS9SdWxlcycsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KVxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucHV0KCcvYXBpL1J1bGVzJywgZGF0YSwge30pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBydWxlc0FwaSA9IG5ldyBSdWxlcygpXHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY2xhc3MgU2VydmljZUFwaSB7XHJcbiAgICAvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuICAgIGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcbiAgICAgICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTZXJ2aWNlW10+PihcIi9hcGkvU2VydmljZXNcIiwge1xyXG4gICAgICAgICAgICBwYXJhbXM6IHRvZG9BcGksXHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgIC8vIFRow6ptIG3hu5tpIGRhdGFcclxuICAgIGFkZCA9IChkYXRhOiBJU2VydmljZSkgPT4gaW5zdGFuY2UucG9zdChcIi9hcGkvU2VydmljZXNcIiwgZGF0YSwge30pO1xyXG5cclxuICAgIC8vIEPhuq1wIG5o4bqtdCBkYXRhIFxyXG4gICAgdXBkYXRlID0gKCBkYXRhOiBhbnkgKSA9PiBpbnN0YW5jZS5wdXQoXCIvYXBpL1NlcnZpY2VzXCIsIGRhdGEsIHt9KTsgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXJ2aWNlQXBpID0gbmV3IFNlcnZpY2VBcGkoKTsiLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNsYXNzIFNvdXJjZUluZm9tYXRpb24ge1xyXG4gICAgLy8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcbiAgICBnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTb3VyY2VJbmZvbWF0aW9uW10+PihcIi9hcGkvU291cmNlSW5mb3JtYXRpb25cIiwge1xyXG4gICAgICAgIHBhcmFtczogdG9kb0FwaSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFRow6ptIG3hu5tpIGRhdGFcclxuICAgIGFkZCA9ICggZGF0YTogSVNvdXJjZUluZm9tYXRpb24gKSA9PiBpbnN0YW5jZS5wb3N0KFwiL2FwaS9Tb3VyY2VJbmZvcm1hdGlvblwiLCBkYXRhKTtcclxuXHJcbiAgICAvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG4gICAgdXBkYXRlID0gKCBkYXRhOiBhbnkgKSA9PiBpbnN0YW5jZS5wdXQoXCIvYXBpL1NvdXJjZUluZm9ybWF0aW9uXCIsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNvdXJjZUluZm9tYXRpb25BcGkgPSBuZXcgU291cmNlSW5mb21hdGlvbigpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSdcclxuXHJcbmNsYXNzIFN0YWZmU2FsYXJ5IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdGFmZlNhbGFyeVtdPj4oJy9hcGkvU2FsYXJ5Jywge1xyXG5cdFx0XHRwYXJhbXM6IHRvZG9BcGlcclxuXHRcdH0pXHJcblxyXG5cdC8vIEzhuqV5IGTDonQgdGhlbyBpZFxyXG5cclxuXHRnZXRCeUlEID0gKGlkOiBudW1iZXIpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU3RhZmZTYWxhcnlbXT4+KGAvYXBpL1NhbGFyeS8ke2lkfWApXHJcblxyXG5cdGdldEhpc3RvcnkgPSAoaWQ6IG51bWJlcikgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdGFmZlNhbGFyeUhpc3RvcnlbXT4+KGAvYXBpL3NhbGFyeS9oaXN0b3J5LyR7aWR9YClcclxuXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFkZCA9IChkYXRhOiBJU3RhZmZTYWxhcnkpID0+IGluc3RhbmNlLnBvc3QoJy9hcGkvU2FsYXJ5JywgZGF0YSlcclxuXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YSBubyB0eXBlXHJcblx0YWRkRGF0YSA9IChkYXRhKSA9PiBpbnN0YW5jZS5wb3N0KCcvYXBpL1NhbGFyeScsIGRhdGEpXHJcblxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucHV0KCcvYXBpL1NhbGFyeScsIGRhdGEsIHt9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3RhZmZTYWxhcnlBcGkgPSBuZXcgU3RhZmZTYWxhcnkoKVxyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNsYXNzIFN0dWR5VGltZUFwaSB7XHJcbiAgZ2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU3R1ZHlUaW1lW10+PihcIi9hcGkvU3R1ZHlUaW1lXCIsIHtcclxuICAgICAgcGFyYW1zOiB0b2RvQXBpLFxyXG4gICAgfSk7XHJcblxyXG4gIGdldFdpdGhJRCA9IChJRDogbnVtYmVyKSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHQ8SVN0dWR5VGltZVtdPj4oYC9hcGkvU3R1ZHlUaW1lLyR7SUR9YCk7XHJcblxyXG4gIGFkZCA9IChkYXRhOiBJU3R1ZHlUaW1lKSA9PiBpbnN0YW5jZS5wb3N0KFwiL2FwaS9TdHVkeVRpbWVcIiwgZGF0YSwge30pO1xyXG5cclxuICB1cGRhdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQoXCIvYXBpL1N0dWR5VGltZVwiLCBkYXRhLCB7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzdHVkeVRpbWVBcGkgPSBuZXcgU3R1ZHlUaW1lQXBpKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY2xhc3MgU3ViamVjdEFwaSB7XHJcbiAgZ2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU3ViamVjdFtdPj4oXCIvYXBpL1N1YmplY3QvXCIsIHtcclxuICAgICAgcGFyYW1zOiB0b2RvQXBpLFxyXG4gICAgfSk7XHJcblxyXG4gIGdldFdpdGhJRCA9IChJRDogbnVtYmVyKSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdWJqZWN0Pj4oYC9hcGkvU3ViamVjdC8ke0lEfWApO1xyXG5cclxuICBhZGQgPSAoZGF0YTogSVN1YmplY3QpID0+IGluc3RhbmNlLnBvc3QoXCIvYXBpL1N1YmplY3RcIiwgZGF0YSwge30pO1xyXG5cclxuICB1cGRhdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQoXCIvYXBpL1N1YmplY3QvXCIsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN1YmplY3RBcGkgPSBuZXcgU3ViamVjdEFwaSgpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNsYXNzIFN1cHBsaWVyIHtcclxuICAgIC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG4gICAgZ2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU3VwcGxpZXJbXT4+KFwiL2FwaS9TdXBwbGllclNlcnZpY2VzXCIsIHtcclxuICAgICAgICBwYXJhbXM6IHRvZG9BcGksXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBUaMOqbSBt4bubaSBkYXRhXHJcbiAgICBhZGQgPSAoIGRhdGE6IElTdXBwbGllciApID0+IGluc3RhbmNlLnBvc3QoXCIvYXBpL1N1cHBsaWVyU2VydmljZXNcIiwgZGF0YSk7XHJcblxyXG4gICAgLy8gQ+G6rXAgbmjhuq10IGRhdGFcclxuICAgIHVwZGF0ZSA9ICggZGF0YTogYW55ICkgPT4gaW5zdGFuY2UucHV0KFwiL2FwaS9TdXBwbGllclNlcnZpY2VzXCIsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN1cHBsaWVyQXBpID0gbmV3IFN1cHBsaWVyKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJztcclxuXHJcbmNsYXNzIFVzZXJJbmZvcm1hdGlvbiB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsUGFyYW1zID0gKHBhcmFtcykgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVXNlcmluZm9ybWF0aW9uW10+PignL2FwaS9Vc2VySW5mb3JtYXRpb24nLCB7XHJcblx0XHRcdHBhcmFtc1xyXG5cdFx0fSk7XHJcblx0Z2V0QWxsID0gKCkgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElVc2VyaW5mb3JtYXRpb25bXT4+KCcvYXBpL1VzZXJJbmZvcm1hdGlvbicpO1xyXG5cclxuXHQvLyBM4bqleSBjaGkgdGnhur90IGRhdGEgdGhlbyBJRFxyXG5cdGdldEJ5SUQgPSAoaWQ6IG51bWJlcikgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdGFmZlNhbGFyeVtdPj4oYC9hcGkvVXNlckluZm9ybWF0aW9uLyR7aWR9YCk7XHJcblxyXG5cdC8vIEzhuqV5IHRoZW8gcm9sZVxyXG5cdGdldEFsbFJvbGUgPSAocm9sZSkgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVXNlcmluZm9ybWF0aW9uW10+PignL2FwaS9Vc2VySW5mb3JtYXRpb24nLCB7XHJcblx0XHRcdHBhcmFtczoge1xyXG5cdFx0XHRcdFJvbGVJRDogcm9sZVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRnZXRSb2xlID0gKHJvbGVUeXBlKSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElSb2xlW10+PignL2FwaS9HZXRSb2xlJywge1xyXG5cdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRzdHlsZTogcm9sZVR5cGUgLy8gMCBs4bqleSB04bqldCBj4bqjLCAxIGzhuqV5IG5ow6JuIHZpw6puXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdGdldE5hbWUgPSAocGFyYW1zKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVVzZXJpbmZvcm1hdGlvbltdPj4oJy9hcGkvU3RhZmYnLCB7IHBhcmFtczogcGFyYW1zIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlckluZm9ybWF0aW9uQXBpID0gbmV3IFVzZXJJbmZvcm1hdGlvbigpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNvbnN0IHVybCA9IFwiL2FwaS9XYXJkXCI7XHJcbmNsYXNzIFdhcmRBcGkge1xyXG4gIC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG4gIGdldEFsbCA9IChwYXJhbXMpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJV2FyZFtdPj4odXJsLCB7IHBhcmFtcyB9KTtcclxuXHJcbiAgLy8gVGjDqm0gbeG7m2kgZGF0YVxyXG4gIGFkZChkYXRhOiBJV2FyZCkge1xyXG4gICAgcmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuICB9XHJcbiAgLy8gQ+G6rXAgbmjhuq10IGRhdGFcclxuICB1cGRhdGUoZGF0YTogSVdhcmQpIHtcclxuICAgIHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuICB9XHJcbiAgLy8gWMOzYSBkYXRhXHJcbiAgZGVsZXRlKGRhdGE6IElXYXJkKSB7XHJcbiAgICByZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgd2FyZEFwaSA9IG5ldyBXYXJkQXBpKCk7XHJcbiIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1NldFBhY2thZ2VUZWFjaGVyLyc7XHJcbmV4cG9ydCBjb25zdCBwYWNrYWdlRXhhbWluZXJBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJUGFja2FnZUV4YW1pbmVyW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zLFxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyBM4bqleSB0aGVvIElEXHJcblx0Z2V0QnlJRChJRCkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJUGFja2FnZUV4YW1pbmVyPj4oYCR7dXJsfSR7SUR9YCk7XHJcblx0fSxcclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBYw7NhIGRhdGFcclxuXHRkZWxldGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcbn07XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1NldFBhY2thZ2VSZXN1bHQnO1xyXG5cclxuY2xhc3MgUGFja2FnZVJlc3VsdEFwaSB7XHJcblx0Z2V0QWxsID0gKFBhcmFtczogYW55KSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTZXRQYWNrYWdlUmVzdWx0W10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zOiBQYXJhbXNcclxuXHRcdH0pO1xyXG5cclxuXHRnZXRBbGxTdHVkZW50ID0gKFBhcmFtczogYW55KSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPGFueT4+KCcvYXBpL1NldFBhY2thZ2VSZXN1bHRHZXRTdHVkZW50RXhpc3RSZXN1bHQnLCB7XHJcblx0XHRcdHBhcmFtczogUGFyYW1zXHJcblx0XHR9KTtcclxuXHJcblx0Z2V0RGV0YWlsID0gKGlkOiBudW1iZXIpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU2V0UGFja2FnZVJlc3VsdD4+KGAke3VybH0vJHtpZH1gKTtcclxuXHJcblx0YWRkID0gKGRhdGE6IElTZXRQYWNrYWdlUmVzdWx0KSA9PiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblxyXG5cdHVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dCh1cmwsIGRhdGEsIHt9KTtcclxuXHJcblx0Ly8gdOG7sSDEkeG7mW5nIGNoaWEgxJHhu4F1IGdpw6FvIHZpw6puIGNo4bqlbSBiw6BpXHJcblxyXG5cdHVwZGF0ZVRlYWNoZXIgPSAoKSA9PiBpbnN0YW5jZS5wdXQoJy9hcGkvVXBkYXRlVGVhY2hlck9mU2V0UGFja2FnZVJlc3VsdCcpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGFja2FnZVJlc3VsdEFwaSA9IG5ldyBQYWNrYWdlUmVzdWx0QXBpKCk7XHJcbiIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1NldFBhY2thZ2VTdHVkZW50Lyc7XHJcbmV4cG9ydCBjb25zdCBwYWNrYWdlU3R1ZGVudEFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElQYWNrYWdlU3R1ZGVudFtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtcyxcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8gTOG6pXkgdGhlbyBJRFxyXG5cdGdldEJ5SUQoSUQpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVBhY2thZ2VTdHVkZW50Pj4oYCR7dXJsfSR7SUR9YCk7XHJcblx0fSxcclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBYw7NhIGRhdGFcclxuXHRkZWxldGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcbn07XHJcbiIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1NldFBhY2thZ2UvJztcclxuZXhwb3J0IGNvbnN0IHBhY2thZ2VBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJUGFja2FnZVtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtcyxcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8gTOG6pXkgdGhlbyBJRFxyXG5cdGdldEJ5SUQoSUQpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVBhY2thZ2U+PihgJHt1cmx9JHtJRH1gKTtcclxuXHR9LFxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIFjDs2EgZGF0YVxyXG5cdGRlbGV0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBYw7NhIGRhdGFcclxuXHR1cGxvYWRJbWcoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QoJ2FwaS9TZXRQYWNrYWdlVXBMb2FkJywgZGF0YSk7XHJcblx0fSxcclxufTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICcuLi9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9QYXlGaXhFeGFtLyc7XHJcbmV4cG9ydCBjb25zdCBwYXlGaXhFeGFtQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVBheUZpeEV4YW1bXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXNcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8gTOG6pXkgdGhlbyBJRFxyXG5cdGdldEJ5SUQoSUQpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVBheUZpeEV4YW0+PihgJHt1cmx9JHtJRH1gKTtcclxuXHR9LFxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIFjDs2EgZGF0YVxyXG5cdGRlbGV0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fVxyXG59O1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1N0dWRlbkZpeEV4YW0nO1xyXG5leHBvcnQgY29uc3QgcGF5Rml4TGlzdEFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElQYXlGaXhMaXN0W10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIEzhuqV5IHRoZW8gSURcclxuXHRnZXRCeUlEKElEKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElQYXlGaXhMaXN0Pj4oYCR7dXJsfSR7SUR9YCk7XHJcblx0fSxcclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBYw7NhIGRhdGFcclxuXHRkZWxldGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH1cclxufTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jb25zdCB1cmwgPSBcIi9hcGkvUmVzZXRQYXNzd29yZC9TZW5kTWFpbFwiO1xyXG5leHBvcnQgY29uc3QgcmVzZXRQYXNzd29yZEFwaSA9IHtcclxuICAvLyBH4butaSBlbWFpbFxyXG4gIHNlbmRFbWFpbChkYXRhKSB7XHJcbiAgICByZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG4gIH0sXHJcblxyXG4gIC8vIFjDoWMgbmjhuq1uXHJcbiAgY29uZmlybShkYXRhKSB7XHJcbiAgICByZXR1cm4gaW5zdGFuY2UucHV0KFwiL2FwaS9SZXNldFBhc3N3b3JkL1VwZGF0ZVBhc3NcIiwgXCJcIiwge1xyXG4gICAgICBwYXJhbXM6IGRhdGEsXHJcbiAgICB9KTtcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQge2luc3RhbmNlfSBmcm9tICcuLi9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9TYWxlQ2FtcGFpZ25EZXRhaWwvJztcclxuZXhwb3J0IGNvbnN0IHNhbGVDYW1wYWlnbkRldGFpbEFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTYWxlQ2FtcGFpZ25EZXRhaWxbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXMsXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIEzhuqV5IHRoZW8gSURcclxuXHRnZXRCeUlEKElEKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTYWxlQ2FtcGFpZ25EZXRhaWw+PihgJHt1cmx9JHtJRH1gKTtcclxuXHR9LFxyXG59O1xyXG4iLCJpbXBvcnQge2luc3RhbmNlfSBmcm9tICcuLi9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9TYWxlQ2FtcGFpZ24vJztcclxuZXhwb3J0IGNvbnN0IHNhbGVDYW1wYWlnbkFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTYWxlQ2FtcGFpZ25bXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXMsXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIEzhuqV5IHRoZW8gSURcclxuXHRnZXRCeUlEKElEKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTYWxlQ2FtcGFpZ24+PihgJHt1cmx9JHtJRH1gKTtcclxuXHR9LFxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIFjDs2EgZGF0YVxyXG5cdGRlbGV0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxufTtcclxuIiwiaW1wb3J0IHtpbnN0YW5jZX0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvU2FsZVNhbGFyeS8nO1xyXG5leHBvcnQgY29uc3Qgc2FsZVNhbGFyeUFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTYWxlU2FsYXJ5W10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zLFxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyBM4bqleSB0aGVvIElEXHJcblx0Z2V0QnlJRChJRCkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU2FsZVNhbGFyeT4+KGAke3VybH0ke0lEfWApO1xyXG5cdH0sXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFkZChkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcbn07XHJcbiIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1NhbGVDYW1wYWlnblJldmVudWUvJztcclxuZXhwb3J0IGNvbnN0IHNhbGVyUmV2ZW51ZUFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTYWxlclJldmVudWVbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXMsXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIEzhuqV5IHRoZW8gSURcclxuXHRnZXRCeUlEKElEKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTYWxlclJldmVudWU+PihgJHt1cmx9JHtJRH1gKTtcclxuXHR9LFxyXG59O1xyXG4iLCJpbXBvcnQge2luc3RhbmNlfSBmcm9tICcuLi9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9Db3Vuc2Vsb3JzUmV2ZW51ZS8nO1xyXG5leHBvcnQgY29uc3Qgc2FsZXJUb3RhbFJldmVudWVBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU2FsZXJUb3RhbFJldmVudWVbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXMsXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIEzhuqV5IHRoZW8gSURcclxuXHRnZXRCeUlEKElEKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTYWxlclRvdGFsUmV2ZW51ZT4+KGAke3VybH0ke0lEfWApO1xyXG5cdH0sXHJcbn07XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJ2FwaS9Db3Vyc2VTY2hlZHVsZU9mQnJhbmNoJztcclxuZXhwb3J0IGNvbnN0IGNoZWNrQnJhbmNoU2NoZWR1bGVTdHVkeSA9IHtcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElDaGVja0JyYW5jaFNjaGVkdWxlU3R1ZHlEYXRhW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcbiIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICdhcGkvU2NoZWR1bGVCeU11bHRpcGxlVGVhY2hlci8nO1xyXG5leHBvcnQgY29uc3QgY2hlY2tUZWFjaGVyU2NoZWR1bGVTdHVkeSA9IHtcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElDaGVja1RlYWNoZXJTY2hlZHVsZVN0dWR5W10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zLFxyXG5cdFx0fSk7XHJcblx0fSxcclxufTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICcuLi9pbnN0YW5jZSc7XHJcblxyXG50eXBlIFNjaGVkdWxlU2VsZkNvdXJzZVJlc3VsdDxUID0gYW55PiA9IHtcclxuXHRjb3Vyc2VTY2hlZHVsZXNBcnJhbmdlZDogVDtcclxuXHRjb3Vyc2VTY2hlZHVsZXNJbmFycmFuZ2VkOiBUO1xyXG5cdG1lc3NhZ2U6IHN0cmluZztcclxufTtcclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVNlbGZDb3Vyc2UgPSAoZGF0YTogSVNDUG9zdCkgPT4gaW5zdGFuY2UucG9zdDxJQXBpUmVzdWx0RGF0YTxJU2NoZWR1bGVab29tRGV0YWlsPj4oJy9hcGkvQ3JlYXRlQ291cnNlMXZzMS8nLCBkYXRhKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTY2hlZHVsZVNlbGZDb3Vyc2UgPSAoaWQ6IG51bWJlcikgPT5cclxuXHRpbnN0YW5jZS5nZXQ8U2NoZWR1bGVTZWxmQ291cnNlUmVzdWx0PElTQ1NjaGVkdWxlW10+PihgL2FwaS9jb3Vyc2VOb3RTY2hlZHVsZVlldC8ke2lkfWApO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrU3R1ZHlUaW1lU2VsZkNvdXJzZSA9IChkYXRhOiBPbWl0PElTQ0NoZWNrVGVhY2hlciwgJ3N0dWR5VGltZUlEJz4pID0+XHJcblx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdHVkeVRpbWVbXT4+KFxyXG5cdFx0YC9hcGkvR2V0U3R1ZHlUaW1lQnlEYXRlQW5kU3R1ZGVudElEP2RhdGU9JHtkYXRhLmRhdGV9JmN1cnJpY3VsdW1zRGV0YWlsSUQ9JHtkYXRhLmN1cnJpY3VsdW1zRGV0YWlsSUR9YFxyXG5cdCk7XHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tUZWFjaGVyU2VsZkNvdXJzZSA9IChkYXRhOiBJU0NDaGVja1RlYWNoZXIpID0+XHJcblx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElVc2VyW10+PihcclxuXHRcdGAvYXBpL0dldFRlYWNoZXJCeURhdGVBbmRTdHVkeVRpbWVBbmRDdXJyaWN1bHVtRGV0YWlsP2RhdGU9JHtkYXRhLmRhdGV9JmN1cnJpY3VsdW1zRGV0YWlsSUQ9JHtkYXRhLmN1cnJpY3VsdW1zRGV0YWlsSUR9JnN0dWR5VGltZUlEPSR7ZGF0YS5zdHVkeVRpbWVJRH1gXHJcblx0KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVTY2hlZHVsZVNlbGZDb3Vyc2UgPSAoZGF0YTogSUNTU2NoZWR1bGVUb1NhdmUpID0+IGluc3RhbmNlLnB1dDxJQXBpUmVzdWx0RGF0YT4oJy9hcGkvVXBkYXRlQ291cnNlU2NoZWR1bGUnLCBkYXRhKTtcclxuZXhwb3J0IGNvbnN0IGNhbmNlbFNjaGVkdWxlU2VsZkNvdXJzZSA9IChpZDogbnVtYmVyKSA9PiBpbnN0YW5jZS5wdXQ8SUFwaVJlc3VsdERhdGE+KGAvYXBpL1JlbW92ZUNvdXJzZVNjaGVkdWxlLyR7aWR9YCk7XHJcbmV4cG9ydCBjb25zdCBnZXRSYW5nZVRpbWVTZWxmQ291cnNlID0gKCkgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPignL2FwaS9UaW1lQm9vaycpO1xyXG5leHBvcnQgY29uc3Qgc2V0UmFuZ2VUaW1lU2VsZkNvdXJzZSA9IChkYXRhOiBJU0NUaW1lKSA9PiBpbnN0YW5jZS5wdXQ8SUFwaVJlc3VsdERhdGE+KCcvYXBpL1RpbWVCb29rJywgZGF0YSk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1N0YWZmJztcclxuY2xhc3MgU3RhZmZBcGkge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbCA9IChwYXJhbXMpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU3RhZmZbXT4+KHVybCwgeyBwYXJhbXMgfSk7XHJcblxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQoZGF0YTogSVN0YWZmKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG5cdH1cclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZShkYXRhOiBhbnkpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9XHJcblx0Ly8gWMOzYSBkYXRhXHJcblx0ZGVsZXRlKGRhdGE6IElTdGFmZikge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN0YWZmQXBpID0gbmV3IFN0YWZmQXBpKCk7XHJcbiIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1Rhc2tHcm91cC8nO1xyXG5leHBvcnQgY29uc3QgdGFza0dyb3VwQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVRhc2tHcm91cFtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtcyxcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8gVGjDqm1cclxuXHRhZGQoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIEPhuq1wIG5o4bqtdFxyXG5cdHVwZGF0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBYw7NhXHJcblx0ZGVsZXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG59O1xyXG5cclxuY29uc3QgdXJsMiA9ICcvYXBpL1Rhc2svJztcclxuZXhwb3J0IGNvbnN0IHRhc2tBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YT4odXJsMiwge1xyXG5cdFx0XHRwYXJhbXMsXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIFRow6ptXHJcblx0YWRkKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybDIsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gQ+G6rXAgbmjhuq10XHJcblx0dXBkYXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsMiwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBYw7NhXHJcblx0ZGVsZXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsMiwgZGF0YSk7XHJcblx0fSxcclxufTtcclxuXHJcbmNvbnN0IHVybDMgPSAnL2FwaS9TdGFmZk9mVGFza0dyb3VwLyc7XHJcbmV4cG9ydCBjb25zdCBzdGFmZk9mVGFza0dyb3VwQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE+KHVybDMsIHtcclxuXHRcdFx0cGFyYW1zLFxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyBUaMOqbVxyXG5cdGFkZChkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwzLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIEPhuq1wIG5o4bqtdFxyXG5cdHVwZGF0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybDMsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gWMOzYVxyXG5cdGRlbGV0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybDMsIGRhdGEpO1xyXG5cdH0sXHJcbn07XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1N0dWR5Um91dGUnO1xyXG5cclxuY2xhc3MgU3R1ZHlSb2xlQXBpIHtcclxuXHRnZXRBbGwgPSAoUGFyYW1zOiBhbnkpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVN0dWR5Um9sZVtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtczogUGFyYW1zXHJcblx0XHR9KTtcclxuXHJcblx0Z2V0RGV0YWlsID0gKGlkOiBudW1iZXIpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU3R1ZHlSb2xlPj4oYCR7dXJsfS8ke2lkfWApO1xyXG5cclxuXHRhZGQgPSAoZGF0YTogSVN0dWR5Um9sZSkgPT4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG5cclxuXHR1cGRhdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhLCB7fSk7XHJcblxyXG5cdGNoYW5nZVBvc2l0aW9uID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucHV0KGAvYXBpL1N0dWR5Um91dGVDaGFuZ2VQbGFjZXNgLCBkYXRhLCB7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzdHVkeVJvbGVBcGkgPSBuZXcgU3R1ZHlSb2xlQXBpKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJ1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvVGVhY2hlci8nXHJcbmV4cG9ydCBjb25zdCB0ZWFjaGVyQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVRlYWNoZXJbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXNcclxuXHRcdH0pXHJcblx0fSxcclxuXHQvLyBM4bqleSB0aGVvIGlkXHJcblx0Z2V0QnlJZChpZDogbnVtYmVyKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElUZWFjaGVyPj4oYCR7dXJsfSR7aWR9YClcclxuXHR9LFxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQoZGF0YTogSVRlYWNoZXIpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSlcclxuXHR9LFxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlKGRhdGE6IElUZWFjaGVyKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSlcclxuXHR9LFxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlQnJhbmNoKGRhdGE6IHsgVXNlckluZm9tYXRpb25JRDogbnVtYmVyOyBCcmFuY2hJRDogc3RyaW5nOyBFbmFibGU6IGJvb2xlYW4gfSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCgnL2FwaS9Vc2VyQnJhbmNoLycsIGRhdGEpXHJcblx0fSxcclxuXHR1cGRhdGVSb2xlKGRhdGE6IHsgUm9sZUlEOiBudW1iZXI7IFVzZXJJbmZvcm1hdGlvbklEOiBudW1iZXIgfSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCgnL2FwaS9UZWFjaGVyLycsIGRhdGEpXHJcblx0fSxcclxuXHQvLyBYw7NhIGRhdGFcclxuXHRkZWxldGUoZGF0YTogSVRlYWNoZXIpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKVxyXG5cdH0sXHJcblx0Ly8gVGjDtG5nIHRpbiBs4bubcCBo4buNY1xyXG5cdGdldEFsbFRlYWNoZXJGb3JTdWJqZWN0KGlkOiBudW1iZXIpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE+KGAvYXBpL0Fzc2lnblRlYWNoZXJGb3JTdWJqZWN0LyR7aWR9YClcclxuXHR9LFxyXG5cdHVwZGF0ZVRlYWNoZXJGb3JTdWJqZWN0KGRhdGE6IGFueSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCgnL2FwaS9Bc3NpZ25UZWFjaGVyRm9yU3ViamVjdCcsIGRhdGEpXHJcblx0fSxcclxuXHR1cGRhdGVUZWFjaGVyRm9yQWxsU3ViamVjdChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQoJy9hcGkvQXNzaWduVGVhY2hlckZvckFsbFN1YmplY3QnLCBwYXJhbXMpXHJcblx0fSxcclxuXHRnZXRUZWFjaGVyQnlQcm9ncmFtKHBhcmFtczogeyBQcm9ncmFtSUQ6IG51bWJlcjsgQnJhbmNoSUQ6IG51bWJlciB9KSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPHsgVXNlckluZm9ybWF0aW9uSUQ6IG51bWJlcjsgRnVsbE5hbWVVbmljb2RlOiBzdHJpbmcgfVtdPj4oJy9hcGkvVGVhY2hlckJ5UHJvZ3JhbScsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KVxyXG5cdH0sIC8vIEzhuqV5IHRoZW8gaWRcclxuXHRnZXRDdXJyaWN1bHVtKGlkOiBudW1iZXIpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8YW55PihgL2FwaS9hc3NpZ250ZWFjaGVyY3VycmljdWx1bS9nZXRieXRlYWNoZXIvJHtpZH1gKVxyXG5cdH0sXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFzc2lnbihkYXRhOiBhbnkpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KCcvYXBpL2Fzc2lnbnRlYWNoZXJjdXJyaWN1bHVtL2Fzc2lnbicsIGRhdGEpXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1VzZXJJbmZvcm1hdGlvbi8nO1xyXG5jbGFzcyBVc2VyQXBpIHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwgPSAocGFyYW1zKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVVzZXJbXT4+KHVybCwgeyBwYXJhbXMgfSk7XHJcblxyXG5cdC8vIEzhuqV5IGRhdGEgbeG7m2kgbmjhuqV0XHJcblx0Z2V0TmV3ID0gKCkgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElVc2VyPj4odXJsICsgJzAnKTtcclxuXHJcblx0Ly8gTOG6pXkgZGF0YSBt4bubaSBuaOG6pXRcclxuXHRnZXRCeUlEID0gKHBhcmFtcykgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElVc2VyPj4odXJsICsgcGFyYW1zKTtcclxuXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFkZChkYXRhOiBJVXNlcikge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuXHR9XHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUoZGF0YTogSVVzZXIpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9XHJcblx0Ly8gWMOzYSBkYXRhXHJcblx0ZGVsZXRlKGRhdGE6IElVc2VyKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHQvLyDEkOG7lWkgbeG6rXQga2jhuql1XHJcblx0Y2hhbmdlUGFzc3dvcmQoZGF0YTogYW55KSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KCcvYXBpL0FjY291bnQnLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdC8vIFThuqFvIG3hu5tpIHTDoGkga2hv4bqjblxyXG5cdGNyZWF0ZUFjY291bnQoZGF0YTogYW55KSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCgnL2FwaS9DcmVhdGVBY2NvdW50JywgZGF0YSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlckFwaSA9IG5ldyBVc2VyQXBpKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnLi4vaW5zdGFuY2UnXHJcbmltcG9ydCB7IElWaWRlb0NvdXJzZUxpc3QgfSBmcm9tICcuLi90eXBlcy92aWRlby1jb3Vyc2UtbGlzdC92aWRlby1jb3Vyc2UtbGlzdCdcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1ZpZGVvQ291cnNlT2ZTdHVkZW50LydcclxuXHJcbmV4cG9ydCBjb25zdCBWaWRlb0NvdXJzZUxpc3RBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVmlkZW9Db3Vyc2VMaXN0W10+PihcclxuXHRcdFx0YCR7dXJsfUdldEFsbD9wYWdlSW5kZXg9JHtwYXJhbXMucGFnZUluZGV4fSZwYWdlU2l6ZT0ke3BhcmFtcy5wYWdlU2l6ZX0mc2VhcmNoPSR7cGFyYW1zLnNlYXJjaH1gXHJcblx0XHQpXHJcblx0fSxcclxuXHQvLyBM4bqleSBkYXRhIHRoZW8gdXNlclxyXG5cdGdldEJ5VXNlcihwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVZpZGVvQ291cnNlTGlzdFtdPj4oXHJcblx0XHRcdGAke3VybH1HZXRCeVVzZXI/cGFnZUluZGV4PSR7cGFyYW1zLnBhZ2VJbmRleH0mcGFnZVNpemU9JHtwYXJhbXMucGFnZVNpemV9JnNlYXJjaD0ke3BhcmFtcy5zZWFyY2h9YFxyXG5cdFx0KVxyXG5cdH0sXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwgKyAnU3R1ZGVudEV2YWx1YXRpb24nLCBkYXRhKVxyXG5cdH0sXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGVBY3RpdmVDb2RlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsICsgJ1VwZGF0ZUFjdGl2ZUNvZGUnLCBkYXRhKVxyXG5cdH0sXHJcblx0dXBkYXRlTGltaXRCb29raW5nKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsICsgJ1VwZGF0ZUxpbWl0Qm9va2luZycsIGRhdGEpXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBkb25lUGF5VXJsID0gJy9hcGkvT3JkZXIvJ1xyXG5leHBvcnQgY29uc3QgRG9uZVBheUFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElWaWRlb0NvdXJzZUxpc3RbXT4+KFxyXG5cdFx0XHRgJHtkb25lUGF5VXJsfUdldExpc3RPcmRlcj9wYWdlSW5kZXg9JHtwYXJhbXMucGFnZUluZGV4fSZwYWdlU2l6ZT0ke3BhcmFtcy5wYWdlU2l6ZX0mc2VhcmNoPSR7cGFyYW1zLnNlYXJjaH0mUGF5bWVudFN0YXR1cz0ke3BhcmFtcy5QYXltZW50U3RhdHVzfWBcclxuXHRcdClcclxuXHR9LFxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQoZG9uZVBheVVybCArICdVcGRhdGVQYWlkUGF5bWVudCcsIGRhdGEpXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnLi4vaW5zdGFuY2UnXHJcbmltcG9ydCB7IElWaWRlb0xlYXJuaW5nIH0gZnJvbSAnLi4vdHlwZXMvdmlkZW8tbGVhcm5pbmcvdmlkZW8tbGVhcm5pbmcnXHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9WaWRlb0NvdXJzZU9mU3R1ZGVudC8nXHJcbmV4cG9ydCBjb25zdCBWaWRlb0NvdXJzZU9mU3R1ZGVudCA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElWaWRlb0xlYXJuaW5nW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KVxyXG5cdH0sXHJcblxyXG5cdC8vIEzhuqV5IGRhdGEgdGhlbyB1c2VyXHJcblx0R2V0QnlJRChJRCkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVmlkZW9MZWFybmluZ1tdPj4oYCR7dXJsICsgJ0dldEJ5SUQvJ30ke0lEfWApXHJcblx0fSxcclxuXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHRVcGRhdGVTZWVuQW5kVGltZVdhdGNoZWRWaWRlbyhkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCArICcvVXBkYXRlU2VlbkFuZFRpbWVXYXRjaGVkVmlkZW8nLCBkYXRhKVxyXG5cdH0sXHJcblxyXG5cdC8vIEzhuqV5IGRhdGEgR2V0TGVzc29uSW5Qcm9ncmVzc1xyXG5cdEdldExlc3NvbkluUHJvZ3Jlc3MoKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElWaWRlb0xlYXJuaW5nW10+Pih1cmwgKyAnR2V0TGVzc29uSW5Qcm9ncmVzcy8nKVxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgdXJsSW50ZXJhY3RpbyA9ICcvYXBpL1ZpZGVvQ291cnNlSW50ZXJhY3Rpb24vJ1xyXG5leHBvcnQgY29uc3QgVmlkZW9Db3Vyc2VJbnRlcmFjdGlvbiA9IHtcclxuXHRHZXRCeUlEKElEKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElWaWRlb0xlYXJuaW5nW10+PihgJHt1cmxJbnRlcmFjdGlvICsgJ0dldEJ5SUQvJ30ke0lEfWApXHJcblx0fSxcclxuXHJcblx0TGlzdFFBKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVmlkZW9MZWFybmluZ1tdPj4odXJsSW50ZXJhY3RpbyArICdMaXN0UUEnLCB7XHJcblx0XHRcdHBhcmFtc1xyXG5cdFx0fSlcclxuXHR9LFxyXG5cclxuXHRMaXN0Tm90ZShwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVZpZGVvTGVhcm5pbmdbXT4+KHVybEludGVyYWN0aW8gKyAnTGlzdE5vdGUnLCB7XHJcblx0XHRcdHBhcmFtc1xyXG5cdFx0fSlcclxuXHR9LFxyXG5cclxuXHRMaXN0TGlzdEFubm91bmNlbWVudCh2aWRlb2NvdXJzZUlEKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElWaWRlb0xlYXJuaW5nW10+Pih1cmxJbnRlcmFjdGlvICsgJ0xpc3RBbm5vdW5jZW1lbnQvJyArIHZpZGVvY291cnNlSUQpXHJcblx0fSxcclxuXHJcblx0YWRkKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybEludGVyYWN0aW8gKyAnSW5zZXJ0JywgZGF0YSlcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHVybFZpZGVvQ291cnNlcyA9ICcvYXBpL1ZpZGVvQ291cnNlcy8nXHJcbmV4cG9ydCBjb25zdCBWaWRlb0NvdXJzZXMgPSB7XHJcblx0TGlzdFNlY3Rpb24oSUQpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVZpZGVvTGVhcm5pbmdbXT4+KGAke3VybFZpZGVvQ291cnNlcyArICdMaXN0U2VjdGlvbi8nfSR7SUR9YClcclxuXHR9LFxyXG5cclxuXHRMaXN0TGVzc29uKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVmlkZW9MZWFybmluZ1tdPj4odXJsVmlkZW9Db3Vyc2VzICsgJ0xpc3RMZXNzb24nLCB7XHJcblx0XHRcdHBhcmFtc1xyXG5cdFx0fSlcclxuXHR9LFxyXG5cclxuXHRMaXN0UUEocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElWaWRlb0xlYXJuaW5nW10+Pih1cmxWaWRlb0NvdXJzZXMgKyAnTGlzdFFBJywge1xyXG5cdFx0XHRwYXJhbXNcclxuXHRcdH0pXHJcblx0fSxcclxuXHJcblx0TGVzc29uRGV0YWlsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVmlkZW9MZWFybmluZ1tdPj4odXJsVmlkZW9Db3Vyc2VzICsgJ0xlc3NvbkRldGFpbCcsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL0NvbWluZ1Nvb25Db3Vyc2VTY2hlZHVsZS8nO1xyXG5leHBvcnQgY29uc3QgY29taW5nQ291cnNlQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbCgpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUNvbWluZ0NvdXJzZT4+KHVybCk7XHJcblx0fVxyXG59O1xyXG4iLCJpbXBvcnQge2luc3RhbmNlfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvWm9vbVRlYWNoZXJBUEkvJztcclxuZXhwb3J0IGNvbnN0IGNvbmZpZ1pvb21BcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJQ29uZmlnWm9vbVtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtcyxcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8gTOG6pXkgdGhlbyBpZFxyXG5cdGdldEJ5SWQoaWQ6IG51bWJlcikge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJQ29uZmlnWm9vbT4+KGAke3VybH0ke2lkfWApO1xyXG5cdH0sXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFkZChkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gWMOzYSBkYXRhXHJcblx0ZGVsZXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdGdldEluYWN0aXZlQ29uZmlnWm9vbSgpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUNvbmZpZ1pvb20+PihcclxuXHRcdFx0Jy9hcGkvR2V0Wm9vbVRlYWNoZXJBUElpbkFjdGl2ZSdcclxuXHRcdCk7XHJcblx0fSxcclxufTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvVXNlclNjaGVkdWxlLyc7XHJcbmV4cG9ydCBjb25zdCBzY2hlZHVsZVpvb21BcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtczogeyBTdGFydFRpbWU6IHN0cmluZzsgRW5kVGltZTogc3RyaW5nIH0pIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVNjaGVkdWxlWm9vbVtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtc1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyBM4bqleSB0aGVvIGlkXHJcblx0Z2V0QnlJZChpZDogbnVtYmVyKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTY2hlZHVsZVpvb21EZXRhaWw+PihgJHt1cmx9JHtpZH1gKTtcclxuXHR9XHJcbn07XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1pvb21Sb29tU2NoZWR1bGUvJztcclxuZXhwb3J0IGNvbnN0IHpvb21Sb29tQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVpvb21Sb29tW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIEzhuqV5IHRoZW8gaWRcclxuXHRnZXRCeUlkKGlkOiBudW1iZXIpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVpvb21Sb29tPj4oYCR7dXJsfSR7aWR9YCk7XHJcblx0fSxcclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBYw7NhIGRhdGFcclxuXHRkZWxldGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gVOG6oW8gcGjDsm5nXHJcblx0Y3JlYXRlUm9vbShzY2hlZHVsZUlEOiBudW1iZXIpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KGBhcGkvQ3JlYXRlUm9vbS8ke3NjaGVkdWxlSUR9YCk7XHJcblx0fSxcclxuXHQvLyDEkMOzbmcgcGjDsm5nXHJcblx0Y2xvc2VSb29tKHNjaGVkdWxlSUQ6IG51bWJlcikge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dChgYXBpL0Nsb3NlUm9vbS8ke3NjaGVkdWxlSUR9YCk7XHJcblx0fSxcclxuXHRnZXRSZWNvcmQoc2NoZWR1bGVJRDogbnVtYmVyKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElab29tUmVjb3JkW10+PihgYXBpL0dldFJlY29yZGluZy8ke3NjaGVkdWxlSUR9YCk7XHJcblx0fVxyXG59O1xyXG4iLCJjb25zdCBfID0ge1xyXG5cdHByaW1hcnlDb2xvcjogJyM1MDY4NEInLFxyXG5cdHNlY29uZENvbG9yOiAnI2VhZWRlOCcsXHJcblx0Y2hyb21lVGl0bGU6ICdDb2RpbmcgTWVudG9yJyxcclxuXHRkZXNjcmlwdGlvbjogJ0NvZGluZyBNZW50b3InLFxyXG5cdGhvc3RVUkw6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyYXBwZXJcIjogXCJBdXRoTGF5b3V0X3dyYXBwZXJfXzIzbzBPXCIsXG5cdFwiaW1hZ2Utd3JhcHBlclwiOiBcIkF1dGhMYXlvdXRfaW1hZ2Utd3JhcHBlcl9fMXNqQW9cIixcblx0XCJjYWxlbmRhci13cmFwcGVyXCI6IFwiQXV0aExheW91dF9jYWxlbmRhci13cmFwcGVyX18zVXNDOFwiLFxuXHRcImltYWdlXCI6IFwiQXV0aExheW91dF9pbWFnZV9fMVQ1WTZcIixcblx0XCJjYWxlbmRhclwiOiBcIkF1dGhMYXlvdXRfY2FsZW5kYXJfXzJEZFlTXCIsXG5cdFwibW9udGhfeWVhclwiOiBcIkF1dGhMYXlvdXRfbW9udGhfeWVhcl9fM1VDaTBcIixcblx0XCJkYXRlXCI6IFwiQXV0aExheW91dF9kYXRlX18zVEJzY1wiLFxuXHRcInRpbWVcIjogXCJBdXRoTGF5b3V0X3RpbWVfXzE3S2o2XCIsXG5cdFwic2xvZ2FuXCI6IFwiQXV0aExheW91dF9zbG9nYW5fXzFiU29hXCIsXG5cdFwiY29udGVudFwiOiBcIkF1dGhMYXlvdXRfY29udGVudF9fM3QyNFdcIixcblx0XCJmb290ZXJcIjogXCJBdXRoTGF5b3V0X2Zvb3Rlcl9fMVRsTXdcIixcblx0XCJmb290ZXJfX2xlZnRcIjogXCJBdXRoTGF5b3V0X2Zvb3Rlcl9fbGVmdF9fSDAzUTZcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGlkaW9tc0FwaSB9IGZyb20gJ34vYXBpQmFzZS9vcHRpb25zL2lkaW9tcydcclxuaW1wb3J0IHsgY3JlYXRlRGF0ZU9iamVjdCB9IGZyb20gJ34vdXRpbHMvZnVuY3Rpb25zJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQXV0aExheW91dC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IF8gZnJvbSAnfi9hcHBDb25maWcnXHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IFJlYWN0SHRtbFBhcnNlciBmcm9tICdyZWFjdC1odG1sLXBhcnNlcidcclxuaW1wb3J0IHsgcnVsZXNBcGkgfSBmcm9tICd+L2FwaUJhc2UnXHJcblxyXG5jb25zdCBTSE9XX0ZPT1RFUiA9IGZhbHNlXHJcblxyXG5mdW5jdGlvbiBBdXRoTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG5cdGNvbnN0IFtpZGlvbSwgc2V0SWRpb21dID0gdXNlU3RhdGU8eyBjb250ZW50OiBzdHJpbmc7IGF1dGhvcjogc3RyaW5nIH0+KHsgY29udGVudDogJycsIGF1dGhvcjogJycgfSlcclxuXHRjb25zdCBbZGF0ZVN0YXRlLCBzZXREYXRlU3RhdGVdID0gdXNlU3RhdGU8YW55PihuZXcgRGF0ZSgpKVxyXG5cdGNvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuXHRjb25zdCBbdGVybUNvbnRlbnQsIHNldFRlcm1Db250ZW50XSA9IHVzZVN0YXRlPGFueT4obnVsbClcclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gZ2V0Rmlyc3RJZGlvbSgpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IHJlczogYW55ID0gYXdhaXQgaWRpb21zQXBpLmdldFJhbmRvbSgpXHJcblx0XHRcdGlmIChyZXMuc3RhdHVzID09IDIwMCkge1xyXG5cdFx0XHRcdGNvbnN0IGNvbnRlbnQ6IGFueSA9IHJlcz8uZGF0YT8uZGF0YT8uSWRpb21zXHJcblx0XHRcdFx0Y29uc3QgYXV0aG9yOiBhbnkgPSByZXM/LmRhdGE/LmRhdGE/LkNyZWF0ZWRCeVxyXG5cdFx0XHRcdHNldElkaW9tKHsgY29udGVudCwgYXV0aG9yIH0pXHJcblx0XHRcdH1cclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgZ2V0VGVybXNJbmZvcm1hdGlvbiA9IGFzeW5jICgpID0+IHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGxldCByZXMgPSBhd2FpdCBydWxlc0FwaS5nZXRBbGwoe30pXHJcblx0XHRcdCEhcmVzPy5zdGF0dXMgJiYgc2V0VGVybUNvbnRlbnQocmVzLmRhdGEuZGF0YSlcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCcvYXBpL1J1bGVzOiAnLCBlcnJvcilcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCB0aW1lSUQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblx0XHRcdHNldERhdGVTdGF0ZShjcmVhdGVEYXRlT2JqZWN0KG5ldyBEYXRlKCksICdlbicpKVxyXG5cdFx0fSwgMTAwMClcclxuXHRcdHJldHVybiAoKSA9PiB7XHJcblx0XHRcdGNsZWFySW50ZXJ2YWwodGltZUlEKVxyXG5cdFx0fVxyXG5cdH0sIFtdKVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Z2V0Rmlyc3RJZGlvbSgpXHJcblx0XHRnZXRUZXJtc0luZm9ybWF0aW9uKClcclxuXHR9LCBbXSlcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxNb2RhbFxyXG5cdFx0XHRcdHN0eWxlPXt7IG92ZXJmbG93OiAnaGlkZGVuJyB9fVxyXG5cdFx0XHRcdHpJbmRleD17OTk5OTl9XHJcblx0XHRcdFx0d2lkdGg9ezEwMDB9XHJcblx0XHRcdFx0Zm9vdGVyPXtmYWxzZX1cclxuXHRcdFx0XHR2aXNpYmxlPXtpc1Zpc2libGV9XHJcblx0XHRcdFx0b25DYW5jZWw9eygpID0+IHNldElzVmlzaWJsZShmYWxzZSl9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHRlcm1fX3NlcnZpY2UgbWItNFwiPntSZWFjdEh0bWxQYXJzZXIodGVybUNvbnRlbnQgJiYgdGVybUNvbnRlbnQuUnVsZXNDb250ZW50KX08L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCIgb25DbGljaz17KCkgPT4gc2V0SXNWaXNpYmxlKGZhbHNlKX0+XHJcblx0XHRcdFx0XHRcdFx0WMOhYyBuaOG6rW5cclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9Nb2RhbD5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlc1snaW1hZ2Utd3JhcHBlciddfT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2NhbGVuZGFyLXdyYXBwZXInXX0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FsZW5kYXJ9PlxyXG5cdFx0XHRcdFx0XHRcdHtkYXRlU3RhdGU/LmhvdXIgIT09IHVuZGVmaW5lZCA/IChcclxuXHRcdFx0XHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17c3R5bGVzLm1vbnRoX3llYXJ9PntkYXRlU3RhdGUuZGF0ZX08L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpbWV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtkYXRlU3RhdGUubW9udGh9IHtkYXRlU3RhdGUueWVhcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e3N0eWxlcy5tb250aF95ZWFyfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7ZGF0ZVN0YXRlLmhvdXJ9IDoge2RhdGVTdGF0ZS5taW51dGV9IDoge2RhdGVTdGF0ZS5zZWNvbmR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e3N0eWxlcy5tb250aF95ZWFyfT57ZGF0ZVN0YXRlLmdldERhdGUoKX08L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpbWV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtkYXRlU3RhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbicsIHsgbW9udGg6ICdsb25nJyB9KX0ge2RhdGVTdGF0ZS5nZXRGdWxsWWVhcigpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17c3R5bGVzLm1vbnRoX3llYXJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsoJzAnICsgZGF0ZVN0YXRlLmdldEhvdXJzKCkpLnNsaWNlKC0yKX0gOiB7KCcwJyArIGRhdGVTdGF0ZS5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKX0gOiAwMFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2xvZ2FufT5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtSZWFjdEh0bWxQYXJzZXIoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWRpb20uY29udGVudFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LnJlcGxhY2UoJ3JnYigwLCAyMywgNTUpJywgJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC45KScpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQucmVwbGFjZSgncmdiKDAsIDIzLCA1NSknLCAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpJylcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5yZXBsYWNlKCdyZ2IoMCwgMjMsIDU1KScsICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSknKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT57Y2hpbGRyZW59PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0e1NIT1dfRk9PVEVSICYmIChcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmZvb3Rlcn0keycgcm93J31gfT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZm9vdGVyX19sZWZ0fWB9PlxyXG5cdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtbWFwLW1hcmtlci1hbHRcIiBzdHlsZT17eyBjb2xvcjogJyNmZmYnIH19PjwvaT5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibWwtM1wiPsSQ4buLYSBjaOG7iTwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5mb290ZXJfX2xlZnR9YH0gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17KCkgPT4gc2V0SXNWaXNpYmxlKHRydWUpfT5cclxuXHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJvb2tcIiBzdHlsZT17eyBjb2xvcjogJyNmZmYnIH19PjwvaT5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibWwtM1wiPsSRaeG7gXUga2hv4bqjbjwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpfVxyXG5cdFx0PC8+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoTGF5b3V0XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkxvZ2luRm9ybV9jb250YWluZXJfXzE0VEtiXCIsXG5cdFwiZmNvbnRyb2xcIjogXCJMb2dpbkZvcm1fZmNvbnRyb2xfXzNtekFCXCIsXG5cdFwid3JhcEJveFwiOiBcIkxvZ2luRm9ybV93cmFwQm94X18zcEZzRFwiLFxuXHRcIndyYXBGb3JtXCI6IFwiTG9naW5Gb3JtX3dyYXBGb3JtX18yLTdmU1wiLFxuXHRcImltZ0xvZ2luXCI6IFwiTG9naW5Gb3JtX2ltZ0xvZ2luX18zQVhsTlwiLFxuXHRcIndyYXBJY29uXCI6IFwiTG9naW5Gb3JtX3dyYXBJY29uX18xaGt4cVwiLFxuXHRcImxvZ2luRm9ybVwiOiBcIkxvZ2luRm9ybV9sb2dpbkZvcm1fX0piQ2NnXCIsXG5cdFwidGl0bGVcIjogXCJMb2dpbkZvcm1fdGl0bGVfX0RFMXhEXCIsXG5cdFwiQXBwXCI6IFwiTG9naW5Gb3JtX0FwcF9fRko2WWRcIixcblx0XCJmb3JtXCI6IFwiTG9naW5Gb3JtX2Zvcm1fXzJJWnVpXCIsXG5cdFwibG9naW5Gb3JtSW1nXCI6IFwiTG9naW5Gb3JtX2xvZ2luRm9ybUltZ19fMm1zTVFcIixcblx0XCJjaGVja2JveFwiOiBcIkxvZ2luRm9ybV9jaGVja2JveF9fclRvRmFcIixcblx0XCJmb3JnZXRQYXNzXCI6IFwiTG9naW5Gb3JtX2ZvcmdldFBhc3NfXzM0SE8xXCIsXG5cdFwiYm94U2lnbnVwXCI6IFwiTG9naW5Gb3JtX2JveFNpZ251cF9fM1FEM2tcIixcblx0XCJib3hEZW1vXCI6IFwiTG9naW5Gb3JtX2JveERlbW9fXzFHbUFRXCIsXG5cdFwiYm94U29jaWFsXCI6IFwiTG9naW5Gb3JtX2JveFNvY2lhbF9fMTZSbjhcIixcblx0XCJub3RlTG9naW5cIjogXCJMb2dpbkZvcm1fbm90ZUxvZ2luX18zeVZJZ1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Mb2dpbkZvcm0ubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBTcGluIH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxudHlwZSBJbnB1dHMgPSB7XHJcblx0dGV4dDogc3RyaW5nXHJcblx0dGV4dFJlcXVpcmVkOiBzdHJpbmdcclxufVxyXG5cclxuaW50ZXJmYWNlIExvZ2luSW5wdXRzIHtcclxuXHR1c2VybmFtZTogSW5wdXRzXHJcblx0cGFzc3dvcmQ6IElucHV0c1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbmRleChwcm9wczogYW55KSB7XHJcblx0Y29uc3Qge1xyXG5cdFx0cmVnaXN0ZXIsXHJcblx0XHRoYW5kbGVTdWJtaXQsXHJcblx0XHRmb3JtU3RhdGU6IHsgZXJyb3JzIH1cclxuXHR9ID0gdXNlRm9ybTxMb2dpbklucHV0cz4oKVxyXG5cclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuXHRjb25zdCBfU3VibWl0ID0gYXN5bmMgKGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0c2V0TG9hZGluZyh0cnVlKVxyXG5cdFx0cHJvcHM/Lm9uU3VibWl0KGRhdGEpXHJcblx0fVxyXG5cclxuXHRjb25zdCBtb3ZlVG9TaWduVXAgPSAoZTogYW55KSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KClcclxuXHRcdHJvdXRlci5wdXNoKCcvYWNjb3VudC9yZWdpc3RlcicpXHJcblx0fVxyXG5cclxuXHQvLyBSRU5ERVJcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IHN0eWxlPXt7IG1hcmdpblRvcDogMCB9fT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBCb3h9PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwRm9ybX0+XHJcblx0XHRcdFx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoX1N1Ym1pdCl9IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luRm9ybX0+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbkZvcm1JbWd9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28tZmluYWwucG5nXCIgYWx0PVwiXCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8aDYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PsSQxINuZyBuaOG6rXA8L2g2PlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dCBuYW1lPVwiY3NyZlRva2VuXCIgdHlwZT1cImhpZGRlblwiIGRlZmF1bHRWYWx1ZT17cHJvcHM/LmNzcmZUb2tlbn0gLz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMuZmNvbnRyb2x9PlTDqm4gxJHEg25nIG5o4bqtcDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwidXNlcm5hbWVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPVwiXCJcclxuXHRcdFx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcigndXNlcm5hbWUnLCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWxpZGF0ZTogKHZhbHVlOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gISF2YWx1ZS50cmltKClcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VmFsdWVBczogKHZhbHVlKSA9PiB2YWx1ZS50cmltKClcclxuXHRcdFx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJOaOG6rXAgdMOqbiDEkcSDbmcgbmjhuq1wXCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdHtlcnJvcnMudXNlcm5hbWUgJiYgPHNwYW4gY2xhc3NOYW1lPVwiZm9ybS1lcnJvclwiPkjDo3kgxJFp4buBbiB0w6puIMSRxINuZyBuaOG6rXA8L3NwYW4+fVxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5mY29udHJvbH0+TeG6rXQga2jhuql1PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJwYXNzd29yZFwiXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPVwiXCJcclxuXHRcdFx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcigncGFzc3dvcmQnLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJOaOG6rXAgbeG6rXQga2jhuql1XCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdHtlcnJvcnMucGFzc3dvcmQgJiYgPHNwYW4gY2xhc3NOYW1lPVwiZm9ybS1lcnJvclwiPkjDo3kgxJFp4buBbiBt4bqtdCBraOG6qXU8L3NwYW4+fVxyXG5cdFx0XHRcdFx0XHRcdHshIXJvdXRlci5xdWVyeT8uZXJyb3IgJiYgcm91dGVyLnF1ZXJ5Py5lcnJvciAhPSAndW5kZWZpbmVkJyAmJiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+e0pTT04ucGFyc2Uocm91dGVyLnF1ZXJ5Py5lcnJvci50b1N0cmluZygpKT8ubWVzc2FnZX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm10LTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9yZ2V0UGFzc30+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvcmVzZXQtcGFzc3dvcmRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5RdcOqbiBt4bqtdCBraOG6qXU/PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPXsnxJDEg25nIG5o4bqtcCd9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHR7bG9hZGluZyAmJiA8U3BpbiBjbGFzc05hbWU9XCJsb2FkaW5nLWxvZ2luXCIgLz59XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctMTAwIG0tMSB0ZXh0LWNlbnRlciBjb2xvci1yZWQgZnctYm9sZFwiPntwcm9wcy5lcnJvciAmJiBwcm9wcy5lcnJvcn08L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveFNpZ251cH0+XHJcblx0XHRcdFx0XHRcdFx0XHRC4bqhbiBjaMawYSBjw7MgdMOgaSBraG/huqNuP3snICd9XHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiXCIgb25DbGljaz17bW92ZVRvU2lnblVwfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0xJDEg25nIGvDrVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8Lz5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4XHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBDaGVja0NpcmNsZU91dGxpbmVkLCBXYXJuaW5nT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucydcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcydcclxuaW1wb3J0IHsgb25lU2lnbmFsQVBJLCB1c2VyQXBpIH0gZnJvbSAnfi9hcGlCYXNlJ1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCdcclxuaW1wb3J0IE9uZVNpZ25hbCBmcm9tICdyZWFjdC1vbmVzaWduYWwnXHJcblxyXG5leHBvcnQgdHlwZSBJUHJvcHMgPSB7XHJcblx0dGl0bGVQYWdlOiBzdHJpbmdcclxuXHRnZXRSb3V0ZXI6IGFueVxyXG5cdGdldFRpdGxlUGFnZTogRnVuY3Rpb25cclxuXHRzaG93Tm90aTogRnVuY3Rpb25cclxuXHRnZXREYXRhVXNlcjogRnVuY3Rpb25cclxuXHR1c2VySW5mb3JtYXRpb246IElVc2VyXHJcblx0dXNlQWxsUm9sZXM6IElSb2xlW11cclxuXHR1c2VTdGFmZlJvbGVzOiBJUm9sZVtdXHJcblx0cGFnZVNpemU6IG51bWJlclxyXG5cdGlzQWRtaW46IGJvb2xlYW5cclxuXHRyZWxvYWROb3RpZmljYXRpb246IGJvb2xlYW5cclxuXHRoYW5kbGVSZWxvYWROb3RpOiBGdW5jdGlvblxyXG5cdHJlbG9hZENhcnQ6IGJvb2xlYW5cclxuXHRoYW5kbGVSZWxvYWRDYXJ0OiBGdW5jdGlvblxyXG59XHJcblxyXG5jb25zdCBXcmFwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8SVByb3BzPih7XHJcblx0dGl0bGVQYWdlOiAnJyxcclxuXHRnZXRSb3V0ZXI6ICcnLFxyXG5cdGdldFRpdGxlUGFnZTogKCkgPT4ge30sXHJcblx0c2hvd05vdGk6ICgpID0+IHt9LFxyXG5cdGdldERhdGFVc2VyOiAoKSA9PiB7fSxcclxuXHR1c2VySW5mb3JtYXRpb246IG51bGwsXHJcblx0dXNlQWxsUm9sZXM6IG51bGwsXHJcblx0dXNlU3RhZmZSb2xlczogbnVsbCxcclxuXHRwYWdlU2l6ZTogMzAsXHJcblx0aXNBZG1pbjogZmFsc2UsXHJcblx0cmVsb2FkTm90aWZpY2F0aW9uOiBmYWxzZSxcclxuXHRoYW5kbGVSZWxvYWROb3RpOiBGdW5jdGlvbixcclxuXHRyZWxvYWRDYXJ0OiBmYWxzZSxcclxuXHRoYW5kbGVSZWxvYWRDYXJ0OiBGdW5jdGlvblxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IFdyYXBQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuXHQvLyBHZXQgcGF0aCBhbmQgc2x1Z1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblx0Y29uc3QgZ2V0Um91dGVyID0gcm91dGVyLnBhdGhuYW1lXHJcblx0bGV0IHBhdGg6IHN0cmluZyA9IHJvdXRlci5wYXRobmFtZVxyXG5cdGNvbnN0IFtzZXNzaW9uLCBsb2FkaW5nXSA9IHVzZVNlc3Npb24oKVxyXG5cdGNvbnN0IFt0aXRsZVBhZ2UsIHNldFRpdGxlUGFnZV0gPSB1c2VTdGF0ZSgnJylcclxuXHRjb25zdCBbdXNlckluZm8sIHNldFVzZXJJbmZvXSA9IHVzZVN0YXRlPElVc2VyPihudWxsKVxyXG5cdGNvbnN0IFtyb2xlcywgc2V0Um9sZXNdID0gdXNlU3RhdGU8SVJvbGVbXT4obnVsbClcclxuXHRjb25zdCBbc3RhZmZSb2xlcywgc2V0U3RhZmZSb2xlc10gPSB1c2VTdGF0ZTxJUm9sZVtdPihudWxsKVxyXG5cdGNvbnN0IFtpc0FkbWluLCBzZXRJc0FkbWluXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cdGNvbnN0IFtyZWxvYWROb3RpZmljYXRpb24sIHNldFJlbG9hZE5vdGlmaWNhdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHRjb25zdCBbcmVsb2FkQ2FydCwgc2V0UmVsb2FkQ2FydF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcblx0Ly8gLS0tIEdldCBUaXRsZSBQYWdlIC0tLVxyXG5cdGNvbnN0IGdldFRpdGxlUGFnZSA9ICh0aXRsZSkgPT4ge1xyXG5cdFx0c2V0VGl0bGVQYWdlKHRpdGxlKVxyXG5cdH1cclxuXHJcblx0Ly8gLS0tIFNob3cgTm90aWZpY2F0aW9uIC0tLVxyXG5cdGNvbnN0IHNob3dOb3RpID0gKHR5cGU6IHN0cmluZywgY29udGVudDogc3RyaW5nKSA9PiB7XHJcblx0XHRjb25zdCBub2RlTm90aSA9ICgpID0+IHtcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YG5vdGktYm94YH0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdGktYm94X19jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImljb25cIj57dHlwZSA9PSAnZGFuZ2VyJyA/IDxXYXJuaW5nT3V0bGluZWQgLz4gOiB0eXBlID09ICdzdWNjZXNzJyAmJiA8Q2hlY2tDaXJjbGVPdXRsaW5lZCAvPn08L3NwYW4+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHRcIj57Y29udGVudH08L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KVxyXG5cdFx0fVxyXG5cclxuXHRcdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0XHRjYXNlICdzdWNjZXNzJzpcclxuXHRcdFx0XHR0b2FzdC5zdWNjZXNzKG5vZGVOb3RpKVxyXG5cdFx0XHRcdGJyZWFrXHJcblx0XHRcdGNhc2UgJ2Rhbmdlcic6XHJcblx0XHRcdFx0dG9hc3QuZXJyb3Iobm9kZU5vdGkpXHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0Y2FzZSAnd2FybmluZyc6XHJcblx0XHRcdFx0dG9hc3Qud2FybmluZyhub2RlTm90aSlcclxuXHRcdFx0XHRicmVha1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGJyZWFrXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBnZXRSb2xlcyA9IGFzeW5jIChyb2xlVHlwZSkgPT4ge1xyXG5cdFx0Ly8gdHJ5IHtcclxuXHRcdC8vIFx0bGV0IHJlcyA9IGF3YWl0IHVzZXJJbmZvcm1hdGlvbkFwaS5nZXRSb2xlKHJvbGVUeXBlKVxyXG5cdFx0Ly8gXHRyZXMuc3RhdHVzID09IDIwMCAmJiByb2xlVHlwZSA9PSAwID8gc2V0Um9sZXMocmVzLmRhdGEuZGF0YSkgOiBzZXRTdGFmZlJvbGVzKHJlcy5kYXRhLmRhdGEpXHJcblx0XHQvLyB9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0Ly8gXHRjb25zb2xlLmxvZygnTOG7l2kgbOG6pXkgdGjDtG5nIHRpbiByb2xlczogJywgZXJyb3IpXHJcblx0XHQvLyB9XHJcblx0fVxyXG5cclxuXHQvLyAtLS0gR2V0IERhdGEgVXNlciAtLS1cclxuXHRjb25zdCBnZXREYXRhVXNlciA9IChkYXRhKSA9PiB7XHJcblx0XHRkYXRhICYmIHNldFVzZXJJbmZvKGRhdGEpXHJcblx0fVxyXG5cclxuXHQvLyAtLS0gQ2hlY2sgaXMgQWRtaW4gLS0tXHJcblx0Y29uc3QgY2hlY2tJc0FkbWluID0gKGRhdGEpID0+IHtcclxuXHRcdGxldCByb2xlID0gZGF0YS5Sb2xlSURcclxuXHRcdGlmIChyb2xlID09IDEgfHwgcm9sZSA9PSA1KSB7XHJcblx0XHRcdHNldElzQWRtaW4odHJ1ZSlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIC0tLSBHZXQgTmV3IERhdGEgVXNlIC0tLVxyXG5cdGNvbnN0IGdldE5ld0RhdGFVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0bGV0IHJlcyA9IGF3YWl0IHVzZXJBcGkuZ2V0TmV3KClcclxuXHRcdFx0cmVzLnN0YXR1cyA9PSAyMDAgJiYgKHNldFVzZXJJbmZvKHJlcy5kYXRhLmRhdGEpLCBjaGVja0lzQWRtaW4ocmVzLmRhdGEuZGF0YSkpXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnTOG7l2kgbOG6pXkgdGjDtG5nIHRpbiB1c2VyOiAnLCBlcnJvcilcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIC0tLSBIYW5kbGUgUmVsb2FkIE5vdGlmaWNhdGlvbiAtLS1cclxuXHRjb25zdCBoYW5kbGVSZWxvYWROb3RpID0gKCkgPT4ge1xyXG5cdFx0c2V0UmVsb2FkTm90aWZpY2F0aW9uKCFyZWxvYWROb3RpZmljYXRpb24pXHJcblx0fVxyXG5cclxuXHQvLyAtLS0gSGFuZGxlIFJlbG9hZCBDYXJkIC0tLVxyXG5cdGNvbnN0IGhhbmRsZVJlbG9hZENhcnQgPSAoKSA9PiB7XHJcblx0XHRzZXRSZWxvYWRDYXJ0KCFyZWxvYWRDYXJ0KVxyXG5cdH1cclxuXHJcblx0Y29uc3QgcG9zdE9uZXNpZ25hbElEID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgdXNlcklkID0gYXdhaXQgT25lU2lnbmFsLmdldFVzZXJJZCgpXHJcblx0XHRcdGxldCByZXMgPSBhd2FpdCBvbmVTaWduYWxBUEkudXBkYXRlKHVzZXJJZClcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdM4buXaSBs4bqleSB0aMO0bmcgdGluIHVzZXI6ICcsIGVycm9yKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmIChsb2FkaW5nICYmIHR5cGVvZiBzZXNzaW9uICE9PSAndW5kZWZpbmVkJyAmJiBzZXNzaW9uICE9PSBudWxsKSB7XHJcblx0XHRcdGlmIChwYXRoLnNlYXJjaCgnc2lnbmluJykgPCAxKSB7XHJcblx0XHRcdFx0Z2V0TmV3RGF0YVVzZXIoKVxyXG5cdFx0XHRcdGdldFJvbGVzKDApXHJcblx0XHRcdFx0Z2V0Um9sZXMoMSlcclxuXHRcdFx0XHRwb3N0T25lc2lnbmFsSUQoKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSwgW3Nlc3Npb25dKVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PFdyYXBDb250ZXh0LlByb3ZpZGVyXHJcblx0XHRcdFx0dmFsdWU9e3tcclxuXHRcdFx0XHRcdHBhZ2VTaXplOiAzMCxcclxuXHRcdFx0XHRcdHRpdGxlUGFnZTogdGl0bGVQYWdlLFxyXG5cdFx0XHRcdFx0Z2V0VGl0bGVQYWdlLFxyXG5cdFx0XHRcdFx0Z2V0Um91dGVyLFxyXG5cdFx0XHRcdFx0c2hvd05vdGksXHJcblx0XHRcdFx0XHRnZXREYXRhVXNlcixcclxuXHRcdFx0XHRcdHVzZXJJbmZvcm1hdGlvbjogdXNlckluZm8sXHJcblx0XHRcdFx0XHR1c2VBbGxSb2xlczogcm9sZXMsXHJcblx0XHRcdFx0XHR1c2VTdGFmZlJvbGVzOiBzdGFmZlJvbGVzLFxyXG5cdFx0XHRcdFx0aXNBZG1pbjogaXNBZG1pbixcclxuXHRcdFx0XHRcdHJlbG9hZE5vdGlmaWNhdGlvbjogcmVsb2FkTm90aWZpY2F0aW9uLFxyXG5cdFx0XHRcdFx0aGFuZGxlUmVsb2FkTm90aTogaGFuZGxlUmVsb2FkTm90aSxcclxuXHRcdFx0XHRcdHJlbG9hZENhcnQ6IHJlbG9hZENhcnQsXHJcblx0XHRcdFx0XHRoYW5kbGVSZWxvYWRDYXJ0OiBoYW5kbGVSZWxvYWRDYXJ0XHJcblx0XHRcdFx0fX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxUb2FzdENvbnRhaW5lclxyXG5cdFx0XHRcdFx0cG9zaXRpb249XCJ0b3AtcmlnaHRcIlxyXG5cdFx0XHRcdFx0YXV0b0Nsb3NlPXszMDAwfVxyXG5cdFx0XHRcdFx0aGlkZVByb2dyZXNzQmFyPXtmYWxzZX1cclxuXHRcdFx0XHRcdG5ld2VzdE9uVG9wPXtmYWxzZX1cclxuXHRcdFx0XHRcdGNsb3NlT25DbGlja1xyXG5cdFx0XHRcdFx0cnRsPXtmYWxzZX1cclxuXHRcdFx0XHRcdHBhdXNlT25Gb2N1c0xvc3NcclxuXHRcdFx0XHRcdGRyYWdnYWJsZVxyXG5cdFx0XHRcdFx0cGF1c2VPbkhvdmVyXHJcblx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0XHQ8L1dyYXBDb250ZXh0LlByb3ZpZGVyPlxyXG5cdFx0PC8+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlV3JhcCA9ICgpID0+IHVzZUNvbnRleHQoV3JhcENvbnRleHQpXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHNpZ25JbiwgZ2V0UHJvdmlkZXJzIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnfi9jb21wb25lbnRzL0xvZ2luRm9ybSdcclxuaW1wb3J0IHsgdXNlV3JhcCB9IGZyb20gJ34vY29udGV4dC93cmFwJ1xyXG5pbXBvcnQgQXV0aExheW91dCBmcm9tICd+L2NvbXBvbmVudHMvQXV0aExheW91dCdcclxuaW1wb3J0IHsgZ2V0VHlwZVVSTCB9IGZyb20gJ34vdXRpbHMvZnVuY3Rpb25zJ1xyXG5cclxuZnVuY3Rpb24gU2lnbkluKHsgY3NyZlRva2VuIH0pIHtcclxuXHRjb25zdCB7IHNob3dOb3RpIH0gPSB1c2VXcmFwKClcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cdGNvbnN0IFtoYXZlRXJyb3IsIHNldEhhdmVFcnJvcl0gPSB1c2VTdGF0ZSgnJylcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmIChyb3V0ZXIucXVlcnk/LmVycm9yKSB7XHJcblx0XHRcdGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlci5xdWVyeVxyXG5cdFx0XHRjb25zdCBlckRhdGEgPSBlcnJvci5pbmNsdWRlcygnRXJyb3I6JykgPyBKU09OLnBhcnNlKGVycm9yLnRvU3RyaW5nKCkuc3BsaXQoJ0Vycm9yOicpWzBdKSA6IHsgc3RhdHVzOiA2OSB9XHJcblx0XHRcdHN3aXRjaCAoZXJEYXRhPy5zdGF0dXMpIHtcclxuXHRcdFx0XHRjYXNlIDIwMDpcclxuXHRcdFx0XHRcdHNob3dOb3RpKCdzdWNjZXNzJywgJ8SQxINuZyBuaOG6rXAgdGjDoG5oIGPDtG5nJylcclxuXHRcdFx0XHRcdGJyZWFrXHJcblx0XHRcdFx0Y2FzZSA0MDA6XHJcblx0XHRcdFx0XHRzaG93Tm90aSgnZGFuZ2VyJywgJ1TDqm4gxJHEg25nIG5o4bqtcCBob+G6t2MgbeG6rXQga2jhuql1IGtow7RuZyDEkcO6bmcnKVxyXG5cdFx0XHRcdFx0c2V0SGF2ZUVycm9yKGVyRGF0YS5tZXNzYWdlKVxyXG5cdFx0XHRcdFx0YnJlYWtcclxuXHRcdFx0XHRjYXNlIDQwNDpcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdLaMO0bmcgdHJ1eSBj4bqtcCDEkcaw4bujYyBBUEknKVxyXG5cdFx0XHRcdFx0YnJlYWtcclxuXHRcdFx0XHRjYXNlIDUwMDpcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdM4buXaSBBUEknKVxyXG5cdFx0XHRcdGNhc2UgNjk6XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhgJUVSUk9SIDY5OmAgKyBgJWMgVVJMYCwgJ2NvbG9yOiByZWQ7IGZvbnQtd2VpZ2h0OiBib2xkJywgJ2NvbG9yOiB5ZWxsb3c7JylcclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJEYXRhKSlcclxuXHRcdFx0XHRcdGJyZWFrXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiAoKSA9PiB7fVxyXG5cdH0sIFtdKVxyXG5cclxuXHRjb25zdCBbY3VycmVudFVybCwgc2V0Q3VycmVudFVybF0gPSB1c2VTdGF0ZSgnJylcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNldEN1cnJlbnRVcmwod2luZG93LmxvY2F0aW9uLmhyZWYpXHJcblx0fSwgW10pXHJcblxyXG5cdGNvbnN0IF9TdWJtaXQgPSAoZGF0YTogYW55KSA9PiB7XHJcblx0XHRsZXQgdHlwZSA9IGdldFR5cGVVUkwoY3VycmVudFVybClcclxuXHRcdHNpZ25JbignY3JlZGVudGlhbHMtc2lnbmluJywge1xyXG5cdFx0XHQuLi5kYXRhLFxyXG5cdFx0XHRjYWxsYmFja1VybDpcclxuXHRcdFx0XHR0eXBlID09ICdMT0NBTEhPU1QnID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMycgOiB0eXBlID09ICdERU1PJyA/ICduZ3V5ZW5odXllbi5tb25hbWVkaWEubmV0JyA6ICdodHRwczovL3BlYS1lbG1zLmhlcm9rdWFwcC5jb20nLFxyXG5cdFx0XHRyZWRpcmVjdDogdHJ1ZVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8TG9naW5Gb3JtIG9uU3VibWl0PXtfU3VibWl0fSBjc3JmVG9rZW49e2NzcmZUb2tlbn0gZXJyb3I9e2hhdmVFcnJvcn0gLz5cclxuXHRcdDwvPlxyXG5cdClcclxufVxyXG5cclxuU2lnbkluLmxheW91dCA9IEF1dGhMYXlvdXRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25JblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcblx0Y29uc3QgcHJvdmlkZXJzID0gYXdhaXQgZ2V0UHJvdmlkZXJzKClcclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHsgcHJvdmlkZXJzIH1cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5cclxuLy8gIC0tLS0tLS0tLUVYUE9SVCBUTyBBUlJBWSBGT1IgU0VMRUNUIEZJRUxELS0tLS0tLS0tXHJcbmV4cG9ydCBjb25zdCBmbVNlbGVjdEFyciA9IChhcnI6IEFycmF5PHsgW2tleTogc3RyaW5nXTogYW55IH0+LCB0aXRsZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBvcHRpb25zID0gW10pID0+IHtcclxuXHRpZiAoQXJyYXkuaXNBcnJheShhcnIpICYmIGFyci5sZW5ndGggPiAwKSB7XHJcblx0XHRyZXR1cm4gYXJyXHJcblx0XHRcdC5maWx0ZXIoKHgpID0+ICh4LkVuYWJsZSA9PT0gZmFsc2UgPyBmYWxzZSA6IHgpKVxyXG5cdFx0XHQubWFwKCh4KSA9PiAoe1xyXG5cdFx0XHRcdHRpdGxlOiB4W3RpdGxlXSxcclxuXHRcdFx0XHR2YWx1ZTogeFt2YWx1ZV0sXHJcblx0XHRcdFx0b3B0aW9uczogb3B0aW9ucy5yZWR1Y2UoKG9iaiwgbykgPT4gKHsgLi4ub2JqLCBbb106IHhbb10gfSksIHt9KVxyXG5cdFx0XHR9KSlcclxuXHR9XHJcblx0cmV0dXJuIFtdXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVJlcGVhdEVsZW1lbnRTb3J0ZWQoYXJyLCBuKSB7XHJcblx0aWYgKG4gPT0gMCB8fCBuID09IDEpIHJldHVybiBuXHJcblxyXG5cdGxldCB0ZW1wID0gW2FyclswXV1cclxuXHQvLyBTdGFydCB0cmF2ZXJzaW5nIGVsZW1lbnRzXHJcblx0bGV0IGogPSAwXHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuIC0gMTsgaSsrKSBpZiAoYXJyW2ldICE9IGFycltpICsgMV0pIHRlbXAucHVzaChhcnJbaSArIDFdKVxyXG5cdHJldHVybiB0ZW1wXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjbGVhck9wdGlvbnNEdXBsaWNhdGUgPSAoYXJyOiBJT3B0aW9uQ29tbW9uW10pID0+IHtcclxuXHRyZXR1cm4gYXJyLnJlZHVjZSgobmV3QXJyLCBvKSA9PiB7XHJcblx0XHRpZiAoIW5ld0Fyci5zb21lKChvMikgPT4gbzIudmFsdWUgPT09IG8udmFsdWUpKSB7XHJcblx0XHRcdG5ld0Fyci5wdXNoKG8pXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbmV3QXJyXHJcblx0fSwgW10pXHJcbn1cclxuZXhwb3J0IGNvbnN0IGZtQXJyYXlUb09iamVjdFdpdGhTcGVjaWFsS2V5ID0gKGFyciwga2V5KSA9PiB7XHJcblx0cmV0dXJuIGFyci5yZWR1Y2UoKG5ld09iaiwgcykgPT4ge1xyXG5cdFx0bmV3T2JqW3Nba2V5XV0gPyBuZXdPYmpbc1trZXldXS5wdXNoKHMpIDogKG5ld09ialtzW2tleV1dID0gW3NdKVxyXG5cdFx0cmV0dXJuIG5ld09ialxyXG5cdH0sIHt9KVxyXG59XHJcbmV4cG9ydCBjb25zdCBudW1iZXJXaXRoQ29tbWFzID0gKG51bWJlcjogYW55KSA9PiB7XHJcblx0aWYgKG51bWJlciA9PSAnJyB8fCBudW1iZXIgPT0gdW5kZWZpbmVkIHx8IG51bWJlciA9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gJydcclxuXHR9XHJcblxyXG5cdG51bWJlciArPSAnJ1xyXG5cdGxldCB4ID0gbnVtYmVyLnNwbGl0KCcuJylcclxuXHRsZXQgeDEgPSB4WzBdXHJcblx0bGV0IHgyID0geC5sZW5ndGggPiAxID8gJy4nICsgeFsxXSA6ICcnXHJcblx0bGV0IHJneCA9IC8oXFxkKykoXFxkezN9KS9cclxuXHR3aGlsZSAocmd4LnRlc3QoeDEpKSB7XHJcblx0XHR4MSA9IHgxLnJlcGxhY2Uocmd4LCAnJDEnICsgJywnICsgJyQyJylcclxuXHR9XHJcblx0cmV0dXJuIHgxICsgeDJcclxufVxyXG5leHBvcnQgY29uc3QgbWF0aFJvdW5kID0gKG51bWJlcikgPT4ge1xyXG5cdHJldHVybiBNYXRoLnJvdW5kKG51bWJlciAqIDEwMCkgLyAxMDBcclxufVxyXG5leHBvcnQgY29uc3QgZm1EYXRlRnJvbU5vdyA9IChkYXRlKSA9PiB7XHJcblx0Y29uc3QgbG9jYWwgPSBtb21lbnQoZGF0ZSkubG9jYWwoKVxyXG5cdGxldCBmb3JtYXR0ZWREYXRlID0gJydcclxuXHRjb25zdCBkYXlzID0gbW9tZW50KCkuZGlmZihsb2NhbCwgJ2RheXMnKVxyXG5cdGlmIChkYXlzID49IDIpIHtcclxuXHRcdGZvcm1hdHRlZERhdGUgPSBsb2NhbC5sb2NhbGUoJ3ZpJykuZm9ybWF0KCdERC9NTS9ZWVlZIEhIOm1tJylcclxuXHR9IGVsc2Uge1xyXG5cdFx0Zm9ybWF0dGVkRGF0ZSA9IGxvY2FsLmxvY2FsZSgndmknKS5mcm9tTm93KClcclxuXHR9XHJcblx0cmV0dXJuIGZvcm1hdHRlZERhdGVcclxufVxyXG5leHBvcnQgY29uc3QgcGFyc2VQcmljZVN0clRvTnVtYmVyID0gKHN0cjogbnVtYmVyIHwgc3RyaW5nKSA9PiBwYXJzZUludChzdHIudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEQvZywgJycpKSB8fCAwXHJcblxyXG4vLyBHRVQgVklTSUJMRSBTVEFUVVNcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBhZ2VWaXNpYmlsaXR5KGNiKSB7XHJcblx0Y29uc3QgdGltZW91dElkID0gdXNlUmVmKG51bGwpXHJcblxyXG5cdGxldCBkZWxheSA9IDBcclxuXHJcblx0Y29uc3QgYnJvd3NlckNvbXBhdEFwaSA9ICgpID0+IHtcclxuXHRcdGxldCBoaWRkZW4sIHZpc2liaWxpdHlDaGFuZ2VcclxuXHRcdGlmICgnaGlkZGVuJyBpbiBkb2N1bWVudCkge1xyXG5cdFx0XHRoaWRkZW4gPSAnaGlkZGVuJ1xyXG5cdFx0XHR2aXNpYmlsaXR5Q2hhbmdlID0gJ3Zpc2liaWxpdHljaGFuZ2UnXHJcblx0XHR9IGVsc2UgaWYgKCdtb3pIaWRkZW4nIGluIGRvY3VtZW50KSB7XHJcblx0XHRcdC8vIEZpcmVmb3ggdXAgdG8gdjE3XHJcblx0XHRcdGhpZGRlbiA9ICdtb3pIaWRkZW4nXHJcblx0XHRcdHZpc2liaWxpdHlDaGFuZ2UgPSAnbW96dmlzaWJpbGl0eWNoYW5nZSdcclxuXHRcdH0gZWxzZSBpZiAoJ3dlYmtpdEhpZGRlbicgaW4gZG9jdW1lbnQpIHtcclxuXHRcdFx0Ly8gQ2hyb21lIHVwIHRvIHYzMiwgQW5kcm9pZCB1cCB0byB2NC40LCBCbGFja2JlcnJ5IHVwIHRvIHYxMFxyXG5cdFx0XHRoaWRkZW4gPSAnd2Via2l0SGlkZGVuJ1xyXG5cdFx0XHR2aXNpYmlsaXR5Q2hhbmdlID0gJ3dlYmtpdHZpc2liaWxpdHljaGFuZ2UnXHJcblx0XHR9XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRoaWRkZW4sXHJcblx0XHRcdHZpc2liaWxpdHlDaGFuZ2VcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IGNsZWFudXBUaW1lb3V0ID0gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXRJZC5jdXJyZW50KVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgeyBoaWRkZW4sIHZpc2liaWxpdHlDaGFuZ2UgfSA9IGJyb3dzZXJDb21wYXRBcGkoKVxyXG5cclxuXHRcdGlmICh0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpIHRocm93IG5ldyBFcnJvcignY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uJylcclxuXHJcblx0XHRjb25zdCBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlID0gKCkgPT4ge1xyXG5cdFx0XHRpZiAoZGVsYXkpIHtcclxuXHRcdFx0XHRpZiAodHlwZW9mIGRlbGF5ICE9PSAnbnVtYmVyJyB8fCBkZWxheSA8IDApIHtcclxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcignZGVsYXkgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXInKVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKHRpbWVvdXRJZC5jdXJyZW50KSBjbGVhbnVwVGltZW91dCgpXHJcblx0XHRcdFx0dGltZW91dElkLmN1cnJlbnQgPSBzZXRUaW1lb3V0KCgpID0+IGNiKCFkb2N1bWVudFtoaWRkZW5dKSwgZGVsYXkpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y2IoIWRvY3VtZW50W2hpZGRlbl0pXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHZpc2liaWxpdHlDaGFuZ2UsIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UpXHJcblxyXG5cdFx0cmV0dXJuICgpID0+IHtcclxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih2aXNpYmlsaXR5Q2hhbmdlLCBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlKVxyXG5cdFx0fVxyXG5cdH0sIFtjYl0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwYXJzZVRvTW9uZXkgPSAodmFsdWU6IGFueSkgPT4ge1xyXG5cdGlmICh2YWx1ZSA9PSAnJyB8fCB2YWx1ZSA9PSB1bmRlZmluZWQgfHwgdmFsdWUgPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuICcnXHJcblx0fVxyXG5cclxuXHR2YWx1ZSArPSAnJ1xyXG5cdGxldCB4ID0gdmFsdWUuc3BsaXQoJy4nKVxyXG5cdGxldCB4MSA9IHhbMF1cclxuXHRsZXQgeDIgPSB4Lmxlbmd0aCA+IDEgPyAnLicgKyB4WzFdIDogJydcclxuXHRsZXQgcmd4ID0gLyhcXGQrKShcXGR7M30pL1xyXG5cdHdoaWxlIChyZ3gudGVzdCh4MSkpIHtcclxuXHRcdHgxID0geDEucmVwbGFjZShyZ3gsICckMScgKyAnLCcgKyAnJDInKVxyXG5cdH1cclxuXHRyZXR1cm4geDEgKyB4MlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlRGF0ZU9iamVjdCA9IChkYXRlU3RhdGUsIGxvY2FsZSkgPT4ge1xyXG5cdGNvbnN0IHllYXIgPSBkYXRlU3RhdGUuZ2V0RnVsbFllYXIoKVxyXG5cdGNvbnN0IG1vbnRoID0gZGF0ZVN0YXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhsb2NhbGUsIHsgbW9udGg6ICdsb25nJyB9KVxyXG5cdGNvbnN0IGRhdGUgPSBkYXRlU3RhdGUuZ2V0RGF0ZSgpXHJcblx0Y29uc3QgaG91ciA9ICgnMCcgKyBkYXRlU3RhdGUuZ2V0SG91cnMoKSkuc2xpY2UoLTIpXHJcblx0Y29uc3QgbWludXRlID0gKCcwJyArIGRhdGVTdGF0ZS5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKVxyXG5cdGNvbnN0IHNlY29uZCA9ICgnMCcgKyBkYXRlU3RhdGUuZ2V0U2Vjb25kcygpKS5zbGljZSgtMilcclxuXHRyZXR1cm4geyB5ZWFyLCBtb250aCwgZGF0ZSwgaG91ciwgbWludXRlLCBzZWNvbmQgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VHlwZVVSTCA9IChwYXJhbTogYW55KSA9PiB7XHJcblx0aWYgKHBhcmFtICE9PSB1bmRlZmluZWQgJiYgcGFyYW0gIT09IG51bGwgJiYgcGFyYW0gIT09ICcnKSB7XHJcblx0XHRpZiAocGFyYW1bNF0gPT0gJzonKSB7XHJcblx0XHRcdHJldHVybiAnTE9DQUxIT1NUJ1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHBhcmFtWzRdID09ICdzJyAmJiBwYXJhbVs4XSA9PSAnYScgJiYgcGFyYW1bOV0gPT0gJ3AnICYmIHBhcmFtWzEwXSA9PSAncCcpIHtcclxuXHRcdFx0XHRyZXR1cm4gJ0xJVkUnXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuICdIRVJPS1UnXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ob29rLWZvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaHRtbC1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtb25lc2lnbmFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9