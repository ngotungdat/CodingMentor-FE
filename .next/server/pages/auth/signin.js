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
  chromeTitle: 'IELTS NGUYỄN HUYỀN - Always Try Your Best',
  description: 'IELTS NGUYỄN HUYỀN',
  hostURL: "https://ielts-nguyenhuyen.monamedia.net"
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


var _jsxFileName = "D:\\MonaMedia\\Project\\IELTS-NguyenHuyen-FE\\IELTS-Nguyen-Huyen\\src\\components\\AuthLayout\\index.tsx";







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


var _jsxFileName = "D:\\MonaMedia\\Project\\IELTS-NguyenHuyen-FE\\IELTS-Nguyen-Huyen\\src\\components\\LoginForm\\index.tsx";

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
        marginTop: 100
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
                src: "/images/logo.jpg",
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


var _jsxFileName = "D:\\MonaMedia\\Project\\IELTS-NguyenHuyen-FE\\IELTS-Nguyen-Huyen\\src\\context\\wrap.tsx";








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


var _jsxFileName = "D:\\MonaMedia\\Project\\IELTS-NguyenHuyen-FE\\IELTS-Nguyen-Huyen\\src\\pages\\auth\\signin.tsx";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy1ub29wLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY291cnNlLWRldGFpbC9jb3Vyc2UtZGV0YWlsLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2NvdXJzZS1kZXRhaWwvZG9jdW1lbnQtc2NoZWR1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY291cnNlLWRldGFpbC9zdHVkZW50LWxpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY291cnNlLW9ubGluZS1kZXRhaWwvYXZhaWxhYmxlLWRheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jb3Vyc2Utb25saW5lL2xlc3Nvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jb3Vyc2Utb25saW5lL3N0dWR5LWRheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jb3Vyc2UvY2hlY2stcm9vbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jb3Vyc2UvY2hlY2stc3R1ZHktdGltZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jb3Vyc2UvY2hlY2stdGVhY2hlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jb3Vyc2UvY291cnNlLW9mLXN0dWRlbnQtcHJpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY291cnNlL2NvdXJzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jb3Vyc2UvbGVzc29uLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2NvdXJzZS9yb2xsdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY291cnNlL3N0dWR5LWRheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jdXN0b21lci9jb250cmFjdC9jb250cmFjdC1jdXN0b21lci1saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2N1c3RvbWVyL2ZpbmFuY2UvZmluYW5jZS1jYXNoaWVyLWludm9pY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY3VzdG9tZXIvZmluYW5jZS9maW5hbmNlLWNhc2hpZXItcGF5bWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jdXN0b21lci9maW5hbmNlL2ZpbmFuY2UtY2FzaGllci1yZWZ1bmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY3VzdG9tZXIvcGFyZW50cy9wYXJlbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2N1c3RvbWVyL3NlcnZpY2Uvc2VydmljZS1jdXN0b21lci1leGFtLXJlc3VsdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jdXN0b21lci9zZXJ2aWNlL3NlcnZpY2UtY3VzdG9tZXItZXhhbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jdXN0b21lci9zZXJ2aWNlL3Rlc3QtY3VzdG9tZXItcG9pbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2N1c3RvbWVyL3NlcnZpY2UvdGVzdC1jdXN0b21lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jdXN0b21lci9zdHVkZW50L2NvdXJzZS1zdHVkZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2N1c3RvbWVyL3N0dWRlbnQvZXhhbS1hcHBvaW50bWVudC1yZXN1bHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY3VzdG9tZXIvc3R1ZGVudC9leGFtLWNvbWluZy1zb29uLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2N1c3RvbWVyL3N0dWRlbnQvc3R1ZGVudC1hZHZpc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY3VzdG9tZXIvc3R1ZGVudC9zdHVkZW50LWNoYW5nZS1jb3Vyc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY3VzdG9tZXIvc3R1ZGVudC9zdHVkZW50LWNoYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jdXN0b21lci9zdHVkZW50L3N0dWRlbnQtbGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jdXN0b21lci9zdHVkZW50L3dhcm5pbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvZG9pbmctdGVzdC9kb2luZy10ZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2V4YW0tZGV0YWlsL2V4YW0tZGV0YWlsLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2V4YW0vZXhhbS10b3BpYy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9leGVyY2lzZS9leGVyY2lzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9leGVyY2lzZS9leGVyY2lzZUdyb3VwLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2ZlZWQtYmFjay9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9pbnN0YW5jZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9uZXdzZmVlZC9iYWNrZ3JvdW5kLW5ld3NmZWVkLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL25ld3NmZWVkL2dyb3VwLW5ld3NmZWVkLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL25ld3NmZWVkL25ld3NmZWVkLWNvbW1lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL25ld3NmZWVkL25ld3NmZWVkLWNvbW1lbnRyZXBseS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvbmV3c2ZlZWQvbmV3c2ZlZWQtbGlrZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvbmV3c2ZlZWQvbmV3c2ZlZWQudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL25ld3NmZWVkL3VzZXItYnJhbmNoLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL25ld3NmZWVkL3VzZXItZ3JvdXAtbmV3c2ZlZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb25lU2lnbmFsL29uZVNpZ25hbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9vcHRpb25zL2FyZWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9icmFuY2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9jb25zdWx0YXRpb24tc3RhdHVzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvY29udHJhY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9jdXJyaWN1bHVtLWRldGFpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9vcHRpb25zL2N1cnJpY3VsdW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9kYXktb2ZmLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvZGlzY291bnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9kaXN0cmljdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9vcHRpb25zL2dyYWRlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvaWRpb21zLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvam9iLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvbm90aWZpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvcHJpY2UtZml4LWV4YW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9wcm9ncmFtLWRldGFpbC1wb2ludC1jb2x1bW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9wcm9ncmFtLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvcHVyb3NlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvcm9vbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9vcHRpb25zL3J1bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9vcHRpb25zL3NvdXJjZS1pbmZvbWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvc3RhZmYtc2FsYXJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvc3R1ZHktdGltZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9vcHRpb25zL3N1YmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9zdXBwbGllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9vcHRpb25zL3VzZXJpbmZvcm1hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9vcHRpb25zL3dhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvcGFja2FnZS9wYWNrYWdlLWV4YW1pbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3BhY2thZ2UvcGFja2FnZS1yZXN1bHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvcGFja2FnZS9wYWNrYWdlLXN0dWRlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvcGFja2FnZS9wYWNrYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3BhY2thZ2UvcGF5LWZpeC1leGFtLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3BhY2thZ2UvcGF5LWZpeC1saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3NhbGUvc2FsZS1jYW1wYWlnbi1kZXRhaWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvc2FsZS9zYWxlLWNhbXBhaWduLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3NhbGUvc2FsZS1zYWxhcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvc2FsZS9zYWxlci1yZXZlbnVlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3NhbGUvc2FsZXItdG90YWwtcmV2ZW51ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9zY2hlZHVsZS9jaGVjay1icmFuY2gtc2NoZWR1bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3NjaGVkdWxlL2NoZWNrLXRlYWNoZXItc2NoZWR1bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3NlbGYtY291cnNlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3N0YWZmLW1hbmFnZS9zdGFmZi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9zdGFmZi1tYW5hZ2UvdGFzay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9zdHVkeS1yb2xlL3N0dWR5LXJvbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvdGVhY2hlci90ZWFjaGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3VzZXIvdXNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS92aWRlby1jb3Vyc2UtbGlzdC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS92aWRlby1sZWFybmluZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS96b29tL2NvbWluZy1jb3Vyc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvem9vbS9jb25maWctem9vbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS96b29tL3NjaGVkdWxlLXpvb20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvem9vbS96b29tLXJvb20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcENvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BdXRoTGF5b3V0L0F1dGhMYXlvdXQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXV0aExheW91dC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9naW5Gb3JtL0xvZ2luRm9ybS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbkZvcm0vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0L3dyYXAudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9hdXRoL3NpZ25pbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2Z1bmN0aW9ucy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWhvb2stZm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWh0bWwtcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1vbmVzaWduYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbInByZWZldGNoZWQiLCJyb3V0ZXIiLCJlcnIiLCJjdXJMb2NhbGUiLCJvcHRpb25zIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwibG9jYWxlIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJSZWFjdCIsImNvbnNvbGUiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEFzIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJyb290TWFyZ2luIiwic2V0UmVmIiwiZWwiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzVmlzaWJsZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsIk1TX01BWF9JRExFX0RFTEFZIiwiZW50cnkiLCJtYXAiLCJQcm9taXNlIiwicHJvbSIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1dHVyZSIsImdlbmVyYXRvciIsInZhbHVlIiwibGluayIsImRvY3VtZW50Iiwid2luZG93IiwiY2FuUHJlZmV0Y2giLCJoYXNQcmVmZXRjaCIsInJlcyIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJzY3JpcHQiLCJyZWplY3QiLCJtYXJrQXNzZXRFcnJvciIsInNyYyIsImNhbmNlbGxlZCIsInIiLCJvbkJ1aWxkTWFuaWZlc3QiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0Iiwic2NyaXB0cyIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJIiwiY3NzIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIm1hbmlmZXN0Iiwicm91dGUiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsImFwcGVuZFNjcmlwdCIsImZldGNoIiwidGV4dCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIndpdGhGdXR1cmUiLCJvbkVudHJ5cG9pbnQiLCJmbiIsImV4cG9ydHMiLCJjb21wb25lbnQiLCJlcnJvciIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImVudHJ5cG9pbnQiLCJzdHlsZXMiLCJjbiIsIm5hdmlnYXRvciIsIm91dHB1dCIsInByZWZldGNoVmlhRG9tIiwiY3JlYXRlUm91dGVMb2FkZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsImRpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJpZCIsImVudHJpZXMiLCJjYWxsYmFjayIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwicGF0aG5hbWVQYXJ0cyIsImxvY2FsZXMiLCJkZXRlY3RlZExvY2FsZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImlzTG9jYWxVUkwiLCJyZXNvbHZlQXMiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJvcmlnaW4iLCJyZXNvbHZlSHJlZiIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInN0cmlwT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJhZGRCYXNlUGF0aCIsInByZXBhcmVkQXMiLCJjbGVhblBhdGhuYW1lIiwicGFnZXMiLCJwYWdlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJjcmVkZW50aWFscyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImRhdGEiLCJub3RGb3VuZCIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic2RyIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJkZWZhdWx0TG9jYWxlIiwiZG9tYWluTG9jYWxlcyIsImlzUmVhZHkiLCJpc1ByZXZpZXciLCJpc0xvY2FsZURvbWFpbiIsIl9pZHgiLCJzdGF0ZSIsImluaXRpYWwiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsImF1dG9FeHBvcnREeW5hbWljIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJwcmVwYXJlVXJsQXMiLCJzaG91bGRSZXNvbHZlSHJlZiIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyb3V0ZVByb3BzIiwiYWRkTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJwYXJzZWQiLCJfX3Jld3JpdGVzIiwibWV0aG9kIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJub3RGb3VuZFJvdXRlIiwiYXBwQ29tcCIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJmb3JjZWRTY3JvbGwiLCJ4IiwieSIsImNoYW5nZVN0YXRlIiwiX19OIiwiaWR4IiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsImNvdXJzZURldGFpbEFwaSIsImdldEFsbCIsInVwZGF0ZSIsInB1dCIsImFoZWFkU2NoZWR1bGUiLCJkb2N1bWVudFNjaGVkdWxlQXBpIiwiYWRkIiwicG9zdCIsInN0dWRlbnRMaXN0SW5Db3Vyc2VBcGkiLCJjb3Vyc2VPbmxpbmVEZXRhaWxBdmFpbGFibGVEYXlBcGkiLCJsZXNzb25PbmxpbmVBcGkiLCJzdHVkeURheU9ubGluZUFwaSIsImNoZWNrUm9vbUFwaSIsImNoZWNrU3R1ZHlUaW1lQXBpIiwiY2hlY2siLCJjaGVja1RlYWNoZXJBcGkiLCJnZXRBbGxUZWFjaGVyQXZhaWxhYmxlIiwiY291cnNlT2ZTdHVkZW50UHJpY2VBcGkiLCJjb3Vyc2VBcGkiLCJnZXRCeUlkIiwibGVzc29uQXBpIiwiY2FsbEF1dG8iLCJBUElfVVJMIiwiY2FsbEF1dG9NaW51dGUiLCJyb2xsVXBBcGkiLCJzdHVkeURheUFwaSIsIkNvbnRyYWN0Q3VzdG9tZXJMaXN0IiwiUGFyYW1zIiwiY29udHJhY3RDdXN0b21lckxpc3RBcGkiLCJJbnZvaWNlIiwiaW52b2ljZUFwaSIsIlZvdWNoZXIiLCJ2b3VjaGVyQXBpIiwiUmVmdW5kcyIsInJlZnVuZHNBcGkiLCJQYXJlbnRzQXBpIiwicGFyZW50c0FwaSIsIlNlcnZpY2VDdXN0b21lckV4YW1SZXN1bHQiLCJ0b2RvQXBpIiwiSUQiLCJzZXJ2aWNlQ3VzdG9tZXJFeGFtUmVzdWx0QXBpIiwiU2VydmljZUN1c3RvbWVyRXhhbSIsInNlcnZpY2VDdXN0b21lckV4YW1BcGkiLCJUZXN0Q3VzdG9tZXJQb2ludEFwaSIsInRlc3RDdXN0b21lclBvaW50QXBpIiwiVGVzdEN1c3RvbWVyQXBpIiwidGVzdEN1c3RvbWVyQXBpIiwiQ291cnNlU3R1ZGVudEFwaSIsImNvdXJzZVN0dWRlbnRBcGkiLCJleGFtQXBwb2ludG1lbnRSZXN1bHRBcGkiLCJkZWxldGUiLCJnZXRSZXN1bHRFeGFtIiwidXBkYXRlUG9pbnQiLCJjaGVja0lzVGVzdGVkIiwiRXhhbUNvbWluZ1Nvb24iLCJleGFtQ29taW5nU29vbkFwaSIsIlN0dWRlbnRBZHZpc2VBcGkiLCJzdHVkZW50QWR2aXNlQXBpIiwiU3R1ZGVudENoYW5nZUNvdXJzZUFwaSIsInN0dWRlbnRDaGFuZ2VDb3Vyc2VBcGkiLCJTdHVkZW50Q2hhbmdlQXBpIiwic3R1ZGVudENoYW5nZUFwaSIsIlN0dWRlbnRBcGkiLCJmaWxlIiwiZkRhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImxvZyIsInN0dWRlbnRBcGkiLCJXYXJuaW5nIiwid2FybmluZ0FwaSIsImRvaW5nVGVzdEFwaSIsImdldEJ5SUQiLCJleGFtRGV0YWlsQXBpIiwiY3JlYXRlQXV0byIsImNoYW5nZVBvc2l0aW9uIiwiZXhhbVRvcGljQXBpIiwiRXhlcmNpc2VBcGkiLCJpbXBvcnRFeGNlbCIsImV4ZXJjaXNlQXBpIiwiRXhlcmNpc2VHcm91cEFwaSIsIlVwbG9hZEF1ZGlvIiwiZm9ybWRhdGEiLCJleGVyY2lzZUdyb3VwQXBpIiwiRmVlZGJhY2tBcGkiLCJTSE9XX0xPRyIsIk5PREVfU1RBVFVTIiwiaXNTaG93TG9nIiwiZ2V0VXJsIiwiY29uZmlnIiwiYmFzZVVSTCIsInNwbGl0IiwiYXV0aEhlYWRlcl9YIiwic2Vzc2lvbiIsImdldFNlc3Npb24iLCJhY2Nlc3NUb2tlbiIsInRva2VuIiwiYXV0aEhlYWRlcl9CZWFyZXIiLCJBdXRob3JpemF0aW9uIiwiYXhpb3MiLCJjcmVhdGUiLCJob3N0VVJMIiwiaGVhZGVycyIsIkFjY2VwdCIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJ0b1N0cmluZyIsImluY2x1ZGVzIiwiYXV0aEhlYWRlciIsInRvVXBwZXJDYXNlIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJjaGVja1Jlc3BvbnNlIiwic2lnbkluIiwiYWxlcnQiLCJKU09OIiwic3RyaW5naWZ5IiwiQmFja2dyb3VuZE5ld3NGZWVkIiwiYmFja2dyb3VuZE5ld3NGZWVkQXBpIiwiR3JvdXBOZXdzRmVlZCIsImdyb3VwTmV3c0ZlZWRBcGkiLCJOZXdzRmVlZENvbW1lbnQiLCJuZXdzRmVlZENvbW1lbnRBcGkiLCJOZXdzRmVlZENvbW1lbnRSZXBseSIsIm5ld3NGZWVkQ29tbWVudFJlcGx5QXBpIiwiTmV3c0ZlZWRMaWtlIiwibmV3c0ZlZWRMaWtlQXBpIiwiTmV3c0ZlZWQiLCJuZXdzRmVlZEFwaSIsIlVzZXJCcmFuY2giLCJ1c2VyQnJhbmNoQXBpIiwiVXNlckdyb3VwTmV3c0ZlZWQiLCJ1c2VyR3JvdXBOZXdzRmVlZEFwaSIsIm9uZVNpZ25hbEFQSSIsIkFyZWFBcGkiLCJhcmVhQXBpIiwiQnJhbmNoQXBpIiwiYnJhbmNoQXBpIiwiQ29uZmlnIiwiY29uZmlnQXBpIiwiQ29uc3VsdGF0aW9uU3RhdHVzQXBpIiwiY29uc3VsdGF0aW9uU3RhdHVzQXBpIiwiY29udHJhY3RBcGkiLCJDdXJyaWN1bHVtRGV0YWlsQXBpIiwiY3VycmljdWx1bURldGFpbEFwaSIsIkN1cnJpY3VsdW1BcGkiLCJjdXJyaWN1bHVtQXBpIiwiZGF5T2ZmQXBpIiwiRGlzY291bnRBcGkiLCJkaXNjb3VudEFwaSIsIkRpc3RyaWN0QXBpIiwiYXJlYUlEIiwiQXJlYUlEIiwiZGlzdHJpY3RBcGkiLCJHcmFkZUFwaSIsImdyYWRlQXBpIiwiSWRpb21zQXBpIiwiaWRpb21zQXBpIiwiSm9iQXBpIiwiam9iUGFyYW1zIiwiam9iQXBpIiwiTm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9uQXBpIiwiUHJpY2VGaXhFeGFtQXBpIiwicHJpY2VGaXhFeGFtQXBpIiwicHJvZ3JhbURldGFpbFBvaW50Q29sdW1uQXBpIiwiUHJvZ3JhbUFwaSIsInByb2dyYW1BcGkiLCJQdXJvc2UiLCJwdXJvc2VBcGkiLCJSb29tQXBpIiwicm9vbUFwaSIsIlJ1bGVzIiwicnVsZXNBcGkiLCJTZXJ2aWNlQXBpIiwic2VydmljZUFwaSIsIlNvdXJjZUluZm9tYXRpb24iLCJzb3VyY2VJbmZvbWF0aW9uQXBpIiwiU3RhZmZTYWxhcnkiLCJzdGFmZlNhbGFyeUFwaSIsIlN0dWR5VGltZUFwaSIsInN0dWR5VGltZUFwaSIsIlN1YmplY3RBcGkiLCJzdWJqZWN0QXBpIiwiU3VwcGxpZXIiLCJzdXBwbGllckFwaSIsIlVzZXJJbmZvcm1hdGlvbiIsInJvbGUiLCJSb2xlSUQiLCJyb2xlVHlwZSIsInN0eWxlIiwidXNlckluZm9ybWF0aW9uQXBpIiwiV2FyZEFwaSIsIndhcmRBcGkiLCJwYWNrYWdlRXhhbWluZXJBcGkiLCJQYWNrYWdlUmVzdWx0QXBpIiwicGFja2FnZVJlc3VsdEFwaSIsInBhY2thZ2VTdHVkZW50QXBpIiwicGFja2FnZUFwaSIsInVwbG9hZEltZyIsInBheUZpeEV4YW1BcGkiLCJwYXlGaXhMaXN0QXBpIiwicmVzZXRQYXNzd29yZEFwaSIsInNlbmRFbWFpbCIsImNvbmZpcm0iLCJzYWxlQ2FtcGFpZ25EZXRhaWxBcGkiLCJzYWxlQ2FtcGFpZ25BcGkiLCJzYWxlU2FsYXJ5QXBpIiwic2FsZXJSZXZlbnVlQXBpIiwic2FsZXJUb3RhbFJldmVudWVBcGkiLCJjaGVja0JyYW5jaFNjaGVkdWxlU3R1ZHkiLCJjaGVja1RlYWNoZXJTY2hlZHVsZVN0dWR5IiwiY3JlYXRlU2VsZkNvdXJzZSIsImdldFNjaGVkdWxlU2VsZkNvdXJzZSIsImNoZWNrU3R1ZHlUaW1lU2VsZkNvdXJzZSIsImRhdGUiLCJjdXJyaWN1bHVtc0RldGFpbElEIiwiY2hlY2tUZWFjaGVyU2VsZkNvdXJzZSIsInN0dWR5VGltZUlEIiwidXBkYXRlU2NoZWR1bGVTZWxmQ291cnNlIiwiY2FuY2VsU2NoZWR1bGVTZWxmQ291cnNlIiwiZ2V0UmFuZ2VUaW1lU2VsZkNvdXJzZSIsInNldFJhbmdlVGltZVNlbGZDb3Vyc2UiLCJTdGFmZkFwaSIsInN0YWZmQXBpIiwidGFza0dyb3VwQXBpIiwidXJsMiIsInRhc2tBcGkiLCJ1cmwzIiwic3RhZmZPZlRhc2tHcm91cEFwaSIsIlN0dWR5Um9sZUFwaSIsInN0dWR5Um9sZUFwaSIsInRlYWNoZXJBcGkiLCJ1cGRhdGVCcmFuY2giLCJ1cGRhdGVSb2xlIiwiZ2V0QWxsVGVhY2hlckZvclN1YmplY3QiLCJ1cGRhdGVUZWFjaGVyRm9yU3ViamVjdCIsInVwZGF0ZVRlYWNoZXJGb3JBbGxTdWJqZWN0IiwiZ2V0VGVhY2hlckJ5UHJvZ3JhbSIsImdldEN1cnJpY3VsdW0iLCJhc3NpZ24iLCJVc2VyQXBpIiwiY2hhbmdlUGFzc3dvcmQiLCJjcmVhdGVBY2NvdW50IiwidXNlckFwaSIsIlZpZGVvQ291cnNlTGlzdEFwaSIsInBhZ2VJbmRleCIsInBhZ2VTaXplIiwiZ2V0QnlVc2VyIiwidXBkYXRlQWN0aXZlQ29kZSIsInVwZGF0ZUxpbWl0Qm9va2luZyIsImRvbmVQYXlVcmwiLCJEb25lUGF5QXBpIiwiUGF5bWVudFN0YXR1cyIsIlZpZGVvQ291cnNlT2ZTdHVkZW50IiwiR2V0QnlJRCIsIlVwZGF0ZVNlZW5BbmRUaW1lV2F0Y2hlZFZpZGVvIiwiR2V0TGVzc29uSW5Qcm9ncmVzcyIsInVybEludGVyYWN0aW8iLCJWaWRlb0NvdXJzZUludGVyYWN0aW9uIiwiTGlzdFFBIiwiTGlzdE5vdGUiLCJMaXN0TGlzdEFubm91bmNlbWVudCIsInZpZGVvY291cnNlSUQiLCJ1cmxWaWRlb0NvdXJzZXMiLCJWaWRlb0NvdXJzZXMiLCJMaXN0U2VjdGlvbiIsIkxpc3RMZXNzb24iLCJMZXNzb25EZXRhaWwiLCJjb21pbmdDb3Vyc2VBcGkiLCJjb25maWdab29tQXBpIiwiZ2V0SW5hY3RpdmVDb25maWdab29tIiwic2NoZWR1bGVab29tQXBpIiwiem9vbVJvb21BcGkiLCJjcmVhdGVSb29tIiwic2NoZWR1bGVJRCIsImNsb3NlUm9vbSIsImdldFJlY29yZCIsInByaW1hcnlDb2xvciIsInNlY29uZENvbG9yIiwiY2hyb21lVGl0bGUiLCJkZXNjcmlwdGlvbiIsIk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVCIsIlNIT1dfRk9PVEVSIiwiQXV0aExheW91dCIsImlkaW9tIiwic2V0SWRpb20iLCJ1c2VTdGF0ZSIsImF1dGhvciIsImRhdGVTdGF0ZSIsInNldERhdGVTdGF0ZSIsInNldElzVmlzaWJsZSIsInRlcm1Db250ZW50Iiwic2V0VGVybUNvbnRlbnQiLCJnZXRGaXJzdElkaW9tIiwiZ2V0UmFuZG9tIiwiSWRpb21zIiwiQ3JlYXRlZEJ5IiwiZ2V0VGVybXNJbmZvcm1hdGlvbiIsInVzZUVmZmVjdCIsInRpbWVJRCIsInNldEludGVydmFsIiwiY3JlYXRlRGF0ZU9iamVjdCIsImNsZWFySW50ZXJ2YWwiLCJvdmVyZmxvdyIsIlJlYWN0SHRtbFBhcnNlciIsIlJ1bGVzQ29udGVudCIsIndyYXBwZXIiLCJjYWxlbmRhciIsImhvdXIiLCJ1bmRlZmluZWQiLCJtb250aF95ZWFyIiwidGltZSIsIm1vbnRoIiwieWVhciIsIm1pbnV0ZSIsInNlY29uZCIsImdldERhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJnZXRGdWxsWWVhciIsImdldEhvdXJzIiwic2xpY2UiLCJnZXRNaW51dGVzIiwic2xvZ2FuIiwiZm9vdGVyIiwiZm9vdGVyX19sZWZ0IiwiY29sb3IiLCJjdXJzb3IiLCJpbmRleCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwidXNlRm9ybSIsInVzZVJvdXRlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiX1N1Ym1pdCIsIm9uU3VibWl0IiwibW92ZVRvU2lnblVwIiwicHJldmVudERlZmF1bHQiLCJjb250YWluZXIiLCJtYXJnaW5Ub3AiLCJ3cmFwQm94Iiwid3JhcEZvcm0iLCJsb2dpbkZvcm0iLCJsb2dpbkZvcm1JbWciLCJ0aXRsZSIsImNzcmZUb2tlbiIsImZjb250cm9sIiwicmVxdWlyZWQiLCJ2YWxpZGF0ZSIsInRyaW0iLCJzZXRWYWx1ZUFzIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInBhcnNlIiwiZm9yZ2V0UGFzcyIsImJveFNpZ251cCIsIldyYXBDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInRpdGxlUGFnZSIsImdldFRpdGxlUGFnZSIsInNob3dOb3RpIiwiZ2V0RGF0YVVzZXIiLCJ1c2VySW5mb3JtYXRpb24iLCJ1c2VBbGxSb2xlcyIsInVzZVN0YWZmUm9sZXMiLCJpc0FkbWluIiwicmVsb2FkTm90aWZpY2F0aW9uIiwiaGFuZGxlUmVsb2FkTm90aSIsIkZ1bmN0aW9uIiwicmVsb2FkQ2FydCIsImhhbmRsZVJlbG9hZENhcnQiLCJXcmFwUHJvdmlkZXIiLCJ1c2VTZXNzaW9uIiwic2V0VGl0bGVQYWdlIiwidXNlckluZm8iLCJzZXRVc2VySW5mbyIsInJvbGVzIiwic2V0Um9sZXMiLCJzdGFmZlJvbGVzIiwic2V0U3RhZmZSb2xlcyIsInNldElzQWRtaW4iLCJzZXRSZWxvYWROb3RpZmljYXRpb24iLCJzZXRSZWxvYWRDYXJ0IiwidHlwZSIsIm5vZGVOb3RpIiwidG9hc3QiLCJzdWNjZXNzIiwid2FybmluZyIsImdldFJvbGVzIiwiY2hlY2tJc0FkbWluIiwiZ2V0TmV3RGF0YVVzZXIiLCJnZXROZXciLCJwb3N0T25lc2lnbmFsSUQiLCJ1c2VySWQiLCJPbmVTaWduYWwiLCJnZXRVc2VySWQiLCJ1c2VXcmFwIiwidXNlQ29udGV4dCIsIlNpZ25JbiIsImhhdmVFcnJvciIsInNldEhhdmVFcnJvciIsImVyRGF0YSIsImN1cnJlbnRVcmwiLCJzZXRDdXJyZW50VXJsIiwibG9jYXRpb24iLCJnZXRUeXBlVVJMIiwiY2FsbGJhY2tVcmwiLCJyZWRpcmVjdCIsImxheW91dCIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJwcm92aWRlcnMiLCJnZXRQcm92aWRlcnMiLCJmbVNlbGVjdEFyciIsImFyciIsImlzQXJyYXkiLCJsZW5ndGgiLCJmaWx0ZXIiLCJFbmFibGUiLCJyZWR1Y2UiLCJvYmoiLCJvIiwicmVtb3ZlUmVwZWF0RWxlbWVudFNvcnRlZCIsIm4iLCJ0ZW1wIiwiaiIsImNsZWFyT3B0aW9uc0R1cGxpY2F0ZSIsIm5ld0FyciIsInNvbWUiLCJvMiIsImZtQXJyYXlUb09iamVjdFdpdGhTcGVjaWFsS2V5IiwibmV3T2JqIiwicyIsIm51bWJlcldpdGhDb21tYXMiLCJudW1iZXIiLCJ4MSIsIngyIiwicmd4IiwidGVzdCIsIm1hdGhSb3VuZCIsInJvdW5kIiwiZm1EYXRlRnJvbU5vdyIsImxvY2FsIiwibW9tZW50IiwiZm9ybWF0dGVkRGF0ZSIsImRheXMiLCJkaWZmIiwiZm9ybWF0IiwiZnJvbU5vdyIsInBhcnNlUHJpY2VTdHJUb051bWJlciIsInVzZVBhZ2VWaXNpYmlsaXR5IiwidGltZW91dElkIiwidXNlUmVmIiwiZGVsYXkiLCJicm93c2VyQ29tcGF0QXBpIiwiaGlkZGVuIiwidmlzaWJpbGl0eUNoYW5nZSIsImNsZWFudXBUaW1lb3V0IiwiY3VycmVudCIsIkVycm9yIiwiaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicGFyc2VUb01vbmV5IiwiZ2V0U2Vjb25kcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBLGdHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0FBRUE7O0FBU0E7O0FBQ0E7O0FBdUJBLE1BQU1BLFVBQTJDLEdBQWpEOztBQUVBLDZDQUtRO0FBQ04sTUFBSSxJQUFKLEVBQThDO0FBQzlDLE1B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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFNM0IsU0FBUyxDQUFDa0wsVUFBVixFQUFQLEVBQStCbEosS0FBL0IsQ0FBcUMsQ0FBQyxDQUF0QyxDQUFmO0FBQ0EsU0FBTztBQUFFUCxRQUFGO0FBQVFELFNBQVI7QUFBZWxHLFFBQWY7QUFBcUI4RixRQUFyQjtBQUEyQk0sVUFBM0I7QUFBbUNDO0FBQW5DLEdBQVA7QUFDQSxDQVJNO0FBVUEsTUFBTTRGLFVBQVUsR0FBSTdrQixLQUFELElBQWdCO0FBQ3pDLE1BQUlBLEtBQUssS0FBSzJlLFNBQVYsSUFBdUIzZSxLQUFLLEtBQUssSUFBakMsSUFBeUNBLEtBQUssS0FBSyxFQUF2RCxFQUEyRDtBQUMxRCxRQUFJQSxLQUFLLENBQUMsQ0FBRCxDQUFMLElBQVksR0FBaEIsRUFBcUI7QUFDcEIsYUFBTyxXQUFQO0FBQ0EsS0FGRCxNQUVPO0FBQ04sVUFBSUEsS0FBSyxDQUFDLENBQUQsQ0FBTCxJQUFZLEdBQVosSUFBbUJBLEtBQUssQ0FBQyxDQUFELENBQUwsSUFBWSxHQUEvQixJQUFzQ0EsS0FBSyxDQUFDLENBQUQsQ0FBTCxJQUFZLEdBQWxELElBQXlEQSxLQUFLLENBQUMsRUFBRCxDQUFMLElBQWEsR0FBMUUsRUFBK0U7QUFDOUUsZUFBTyxNQUFQO0FBQ0EsT0FGRCxNQUVPO0FBQ04sZUFBTyxRQUFQO0FBQ0E7QUFDRDtBQUNEO0FBQ0QsQ0FaTSxDOzs7Ozs7Ozs7OztBQ3ZKUCw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9hdXRoL3NpZ25pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2F1dGgvc2lnbmluLnRzeFwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIuYXNQYXRoKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG5cbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFJlZjogYW55ID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWZcblxuICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gdXNlSW50ZXJzZWN0aW9uKHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICB9KVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIHNldEludGVyc2VjdGlvblJlZihlbClcbiAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2hpbGRSZWYsIHNldEludGVyc2VjdGlvblJlZl1cbiAgKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgaXNMb2NhbFVSTChocmVmKVxuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG4gICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV1cbiAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZSxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbYXMsIGhyZWYsIGlzVmlzaWJsZSwgbG9jYWxlLCBwLCByb3V0ZXJdKVxuXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogc2V0UmVmLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICB9XG4gICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICBjb25zdCBsb2NhbGVEb21haW4gPVxuICAgICAgcm91dGVyICYmXG4gICAgICByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgIGdldERvbWFpbkxvY2FsZShcbiAgICAgICAgYXMsXG4gICAgICAgIGN1ckxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXNcbiAgICAgIClcblxuICAgIGNoaWxkUHJvcHMuaHJlZiA9XG4gICAgICBsb2NhbGVEb21haW4gfHxcbiAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gICAgY2FuY2VsSWRsZUNhbGxiYWNrOiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpID0+IHZvaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKVxuICB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbGllbnRCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vYnVpbGQvd2VicGFjay9wbHVnaW5zL2J1aWxkLW1hbmlmZXN0LXBsdWdpbidcbmltcG9ydCBnZXRBc3NldFBhdGhGcm9tUm91dGUgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlJ1xuaW1wb3J0IHsgcmVxdWVzdElkbGVDYWxsYmFjayB9IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX19CVUlMRF9NQU5JRkVTVD86IENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgICBfX0JVSUxEX01BTklGRVNUX0NCPzogRnVuY3Rpb25cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIGV4cG9ydHM6IGFueVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUVudHJ5cG9pbnQgPSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB8IExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVTdHlsZVNoZWV0IHtcbiAgaHJlZjogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlU3VjY2VzcyBleHRlbmRzIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZUZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVMb2FkZXJFbnRyeSA9IExvYWRlZFJvdXRlU3VjY2VzcyB8IExvYWRlZFJvdXRlRmFpbHVyZVxuXG5leHBvcnQgdHlwZSBGdXR1cmU8Vj4gPSB7XG4gIHJlc29sdmU6IChlbnRyeXBvaW50OiBWKSA9PiB2b2lkXG4gIGZ1dHVyZTogUHJvbWlzZTxWPlxufVxuZnVuY3Rpb24gd2l0aEZ1dHVyZTxUPihcbiAga2V5OiBzdHJpbmcsXG4gIG1hcDogTWFwPHN0cmluZywgRnV0dXJlPFQ+IHwgVD4sXG4gIGdlbmVyYXRvcj86ICgpID0+IFByb21pc2U8VD5cbik6IFByb21pc2U8VD4ge1xuICBsZXQgZW50cnk6IEZ1dHVyZTxUPiB8IFQgfCB1bmRlZmluZWQgPSBtYXAuZ2V0KGtleSlcbiAgaWYgKGVudHJ5KSB7XG4gICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICByZXR1cm4gZW50cnkuZnV0dXJlXG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpXG4gIH1cbiAgbGV0IHJlc29sdmVyOiAoZW50cnlwb2ludDogVCkgPT4gdm9pZFxuICBjb25zdCBwcm9tOiBQcm9taXNlPFQ+ID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUpID0+IHtcbiAgICByZXNvbHZlciA9IHJlc29sdmVcbiAgfSlcbiAgbWFwLnNldChrZXksIChlbnRyeSA9IHsgcmVzb2x2ZTogcmVzb2x2ZXIhLCBmdXR1cmU6IHByb20gfSkpXG4gIHJldHVybiBnZW5lcmF0b3JcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKSA9PiAocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSkpXG4gICAgOiBwcm9tXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVMb2FkZXIge1xuICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUVudHJ5cG9pbnQ+XG4gIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKTogdm9pZFxuICBsb2FkUm91dGUocm91dGU6IHN0cmluZywgcHJlZmV0Y2g/OiBib29sZWFuKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PFQ+KFxuICBwOiBQcm9taXNlPFQ+LFxuICBtczogbnVtYmVyLFxuICBlcnI6IEVycm9yXG4pOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcblxuICAgIHAudGhlbigocikgPT4ge1xuICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgcmVzb2x2ZShyKVxuICAgIH0pLmNhdGNoKHJlamVjdClcblxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0sIG1zKVxuICAgIClcbiAgfSlcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPSBuZXcgUHJvbWlzZTxcbiAgICBDbGllbnRCdWlsZE1hbmlmZXN0XG4gID4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCEpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICApXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb206IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB8IHVuZGVmaW5lZCA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcsIHByZWZldGNoPzogYm9vbGVhbikge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgKCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChcbiAgICAgICAgICBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICAgIC50aGVuKCh7IHNjcmlwdHMsIGNzcyB9KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICAgICAgOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgICAgICBdIGFzIGNvbnN0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpID0+ICh7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXSxcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSlcbiAgICAgICAgKVxuICAgICAgICAgIC50aGVuKCh7IGVudHJ5cG9pbnQsIHN0eWxlcyB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgICAgUm91dGVFbnRyeXBvaW50XG4gICAgICAgICAgICA+KHsgc3R5bGVzOiBzdHlsZXMhIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCkgPT4ge30pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuICAnaXNQcmV2aWV3JyxcbiAgJ2lzTG9jYWxlRG9tYWluJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgTkVYVF9EQVRBLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgfVxufVxuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuICBzY3JvbGw/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9XG4gIHwgbnVsbFxuICB8IHsgX19OOiBmYWxzZSB9XG4gIHwgKHsgX19OOiB0cnVlOyBpZHg6IG51bWJlciB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxubGV0IGRldGVjdERvbWFpbkxvY2FsZTogdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJylcbiAgICAuZGV0ZWN0RG9tYWluTG9jYWxlXG59XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgbG9jYWxlcz86IHN0cmluZ1tdLFxuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKClcblxuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJlxuICAgICAgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlclxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKVxuXG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fFxuICAgICAgICBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKVxuICAgICAgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArXG4gICAgICAgICAgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgICAgICAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgKHNlZ21lbnQpID0+IGVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBsZXQgYmFzZTogVVJMXG5cbiAgdHJ5IHtcbiAgICBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgfSBjYXRjaCAoXykge1xuICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgYmFzZSA9IG5ldyBVUkwoJy8nLCAnaHR0cDovL24nKVxuICB9XG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5hc1BhdGgsIHVybCwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKVxuICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbilcblxuICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpXG4gIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzXG5cbiAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKVxuICBjb25zdCBwcmVwYXJlZEFzID0gYXNcbiAgICA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlci5hc1BhdGgsIGFzKSlcbiAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKSxcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lOiBzdHJpbmcsIHBhZ2VzOiBzdHJpbmdbXSkge1xuICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSEpKVxuXG4gIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgcmV0dXJuIHBhdGhuYW1lXG4gIH1cblxuICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAgIHBhdGhuYW1lID0gcGFnZVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICAgIHwgJ2lzUmVhZHknXG4gICAgfCAnaXNQcmV2aWV3J1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChcbiAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgQXBwOiBBcHBDb21wb25lbnQsXG4gIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4pID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJlxuICAhIShmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB2ID0gJ19fbmV4dCdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlXG4gICAgfSBjYXRjaCAobikge31cbiAgfSkoKVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICBzZHI6IHsgW2FzUGF0aDogc3RyaW5nXTogUHJvbWlzZTxvYmplY3Q+IH0gPSB7fVxuXG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNSZWFkeTogYm9vbGVhblxuICBpc1ByZXZpZXc6IGJvb2xlYW5cbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cblxuICBwcml2YXRlIF9pZHg6IG51bWJlciA9IDBcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgaXNQcmV2aWV3LFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoV3JhcEFwcENvbXBvbmVudDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgICAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgICAgIGlzUHJldmlldz86IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID1cbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydFxuXG4gICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIHRoaXMuaXNSZWFkeSA9ICEhKFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHxcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHxcbiAgICAgICghYXV0b0V4cG9ydER5bmFtaWMgJiZcbiAgICAgICAgIXNlbGYubG9jYXRpb24uc2VhcmNoICYmXG4gICAgICAgICFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKVxuICAgIClcbiAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3XG4gICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXNcbiAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZm9yY2VkU2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIGlkeCB9ID0gc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpXG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYhKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faWR4ID0gaWR4XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbjx7fSwgVHJhbnNpdGlvbk9wdGlvbnMsIFRyYW5zaXRpb25PcHRpb25zPih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KSxcbiAgICAgIGZvcmNlZFNjcm9sbFxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMsXG4gICAgZm9yY2VkU2Nyb2xsPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGNvbnN0IHNob3VsZFJlc29sdmVIcmVmID0gdXJsID09PSBhcyB8fCAob3B0aW9ucyBhcyBhbnkpLl9oXG5cbiAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICBpZiAoKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gc2Nyb2xsIHJlc2V0IGJlaGF2aW9yIHVubGVzcyBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBiZVxuICAgIC8vIGBmYWxzZWAhIFRoaXMgbWFrZXMgdGhlIGJlaGF2aW9yIGJldHdlZW4gdXNpbmcgYFJvdXRlciNwdXNoYCBhbmQgYVxuICAgIC8vIGA8TGluayAvPmAgY29uc2lzdGVudC5cbiAgICBvcHRpb25zLnNjcm9sbCA9ICEhKG9wdGlvbnMuc2Nyb2xsID8/IHRydWUpXG5cbiAgICBsZXQgbG9jYWxlQ2hhbmdlID0gb3B0aW9ucy5sb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSlcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoXG4gICAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgKS5wYXRobmFtZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMubG9jYWxlXG4gICAgICApXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWRpZE5hdmlnYXRlICYmXG4gICAgICAgICAgZGV0ZWN0ZWREb21haW4gJiZcbiAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke1xuICAgICAgICAgICAgZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICAgfSR7YWRkQmFzZVBhdGgoXG4gICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiBgLyR7dGhpcy5sb2NhbGV9YFxuICAgICAgICAgICAgfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJ1xuICAgICAgICAgICl9YFxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7IHNoYWxsb3cgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGxldCBwYWdlczogYW55LCByZXdyaXRlczogYW55XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIGlmIChzaG91bGRSZXNvbHZlSHJlZiAmJiBwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG5cbiAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArXG4gICAgICAgICAgICBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKFxuICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lLFxuICAgICAgICAgICAgICBwYWdlc1xuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFV1xuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlXG5cbiAgICAgIGlmIChcbiAgICAgICAgKG9wdGlvbnMgYXMgYW55KS5faCAmJlxuICAgICAgICBwYXRobmFtZSA9PT0gJy9fZXJyb3InICYmXG4gICAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcz8ucGFnZVByb3BzPy5zdGF0dXNDb2RlID09PSA1MDAgJiZcbiAgICAgICAgcHJvcHM/LnBhZ2VQcm9wc1xuICAgICAgKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUhLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgY2xlYW5lZEFzLFxuICAgICAgICByb3V0ZUluZm8sXG4gICAgICAgIGZvcmNlZFNjcm9sbCB8fFxuICAgICAgICAgIChpc1ZhbGlkU2hhbGxvd1JvdXRlIHx8ICFvcHRpb25zLnNjcm9sbCA/IG51bGwgOiB7IHg6IDAsIHk6IDAgfSlcbiAgICAgICkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICAgICAgcm91dGVJbmZvRXJyLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcmVzb2x2ZWRBczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPSB0aGlzLmNvbXBvbmVudHNbXG4gICAgICAgIHJvdXRlXG4gICAgICBdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgbGV0IHJld3JpdGVzOiBhbnlcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuXG4gICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBwYXJzZWQucXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcbiAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgIXRoaXMuaXNQcmV2aWV3ICYmXG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV1cbiAgICApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgIH1cbiAgICByZXR1cm4gKHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoKSB7fVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgUHJldmlld0RhdGEgfSBmcm9tICduZXh0L3R5cGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogKHN0cmluZyB8IG51bWJlcilbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIHNjcmlwdExvYWRlcj86IGFueVtdXG4gIGlzUHJldmlldz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGxvY2FsZVxuICAgKi9cbiAgbG9jYWxlPzogc3RyaW5nXG4gIC8qKlxuICAgKiBBbGwgY29uZmlndXJlZCBsb2NhbGVzXG4gICAqL1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgLyoqXG4gICAqIFRoZSBjb25maWd1cmVkIGRlZmF1bHQgbG9jYWxlXG4gICAqL1xuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogc3RyaW5nW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICB1bnN0YWJsZV9Kc1ByZWxvYWQ/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIHNjcmlwdExvYWRlcjogeyBhZnRlckludGVyYWN0aXZlPzogc3RyaW5nW107IGJlZm9yZUludGVyYWN0aXZlPzogYW55W10gfVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgZGlzYWJsZU9wdGltaXplZExvYWRpbmc/OiBib29sZWFuXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IFByZXZpZXdEYXRhXG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL0NvdXJzZVNjaGVkdWxlcy8nO1xyXG5cclxudHlwZSBJVHlwZUZvck9wdGlvbkZldGNoQXZhaWxhYmxlU2NoZWR1bGUgPSB7XHJcblx0aWQ6IG51bWJlcjtcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0c2VsZWN0OiBib29sZWFuO1xyXG59O1xyXG5leHBvcnQgdHlwZSBJQXBpQ291cnNlU2NoZWR1bGU8VCA9IGFueT4gPSB7XHJcblx0ZGF0YTogVDtcclxuXHRtZXNzYWdlOiBzdHJpbmc7XHJcblx0dG90YWxSb3c6IG51bWJlcjtcclxuXHRzdHVkeVRpbWVzOiBJVHlwZUZvck9wdGlvbkZldGNoQXZhaWxhYmxlU2NoZWR1bGVbXTtcclxuXHRyb29tczogSVR5cGVGb3JPcHRpb25GZXRjaEF2YWlsYWJsZVNjaGVkdWxlW107XHJcbn07XHJcbmV4cG9ydCBjb25zdCBjb3Vyc2VEZXRhaWxBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpQ291cnNlU2NoZWR1bGU8SUNvdXJzZURldGFpbFNjaGVkdWxlW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIEPhuq1wIG5o4bqtdFxyXG5cdHVwZGF0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHRhaGVhZFNjaGVkdWxlKHBhcmFtczogeyBjb3Vyc2VTY2hlZHVsZUlkOiBudW1iZXI7IHRlYWNoZXJJZDogbnVtYmVyIH0pIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaUNvdXJzZVNjaGVkdWxlPElDb3Vyc2VEZXRhaWxTY2hlZHVsZVtdPj4oJy9hcGkvbHVpTGljaEhvYycsIHsgcGFyYW1zIH0pO1xyXG5cdH1cclxufTtcclxuIiwiaW1wb3J0IHtpbnN0YW5jZX0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvRG9jdW1lbnRPZkNvdXJzZS8nO1xyXG5leHBvcnQgY29uc3QgZG9jdW1lbnRTY2hlZHVsZUFwaSA9IHtcclxuXHQvLyBD4bqtcCBuaOG6rXRcclxuXHRhZGQoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuXHR9LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1N0dWRlbnRJbkNvdXJzZS8nO1xyXG50eXBlIElBcGlSZXN1bHRTdHVkZW50SW5Db3Vyc2U8VCA9IGFueT4gPSB7XHJcblx0c3R1ZGVudExpc3Q6IFQ7XHJcblx0bWVzc2FnZTogc3RyaW5nO1xyXG5cdFRvdGFsUm93OiBudW1iZXI7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBzdHVkZW50TGlzdEluQ291cnNlQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdFN0dWRlbnRJbkNvdXJzZTxJU3R1ZGVudExpc3RJbkNvdXJzZVtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtc1xyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG4iLCJpbXBvcnQge2luc3RhbmNlfSBmcm9tICcuLi9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9BdmFpbGFibGVEYXRlT25saW5lLyc7XHJcbmV4cG9ydCBjb25zdCBjb3Vyc2VPbmxpbmVEZXRhaWxBdmFpbGFibGVEYXlBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJQ291cnNlRGV0YWlsQXZhaWxhYmxlRGF5W10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zLFxyXG5cdFx0fSk7XHJcblx0fSxcclxufTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICcuLi9pbnN0YW5jZSdcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL0xlc3Nvbk9ubGluZSdcclxuZXhwb3J0IGNvbnN0IGxlc3Nvbk9ubGluZUFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElMZXNzb24+KHVybCwge1xyXG5cdFx0XHRwYXJhbXNcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnLi4vaW5zdGFuY2UnXHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9TdHVkeURheU9ubGluZSdcclxuZXhwb3J0IGNvbnN0IHN0dWR5RGF5T25saW5lQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVN0dWR5RGF5W10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJy4uL2luc3RhbmNlJ1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvQ2hlY2tSb29tLydcclxuZXhwb3J0IGNvbnN0IGNoZWNrUm9vbUFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElDaGVja1NjaGVkdWxlW10+Pih1cmwsIHsgcGFyYW1zIH0pXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL0NoZWNrU3R1ZHlUaW1lLyc7XHJcbmV4cG9ydCBjb25zdCBjaGVja1N0dWR5VGltZUFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRjaGVjayhkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdDxJQXBpUmVzdWx0RGF0YTxJQ2hlY2tTdHVkeVRpbWVbXT4+KHVybCwgZGF0YSk7XHJcblx0fSxcclxufTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICcuLi9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9DaGVja1RlYWNoZXIvJztcclxuZXhwb3J0IGNvbnN0IGNoZWNrVGVhY2hlckFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElDaGVja1NjaGVkdWxlW10+Pih1cmwsIHsgcGFyYW1zIH0pO1xyXG5cdH0sXHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhIC0gZWRpdCBraMOzYSBo4buNY1xyXG5cdGdldEFsbFRlYWNoZXJBdmFpbGFibGUocGFyYW1zOiB7IENvdXJzZUlEOiBudW1iZXI7IFN0dWR5VGltZUlEOiBudW1iZXI7IFByb2dyYW1JRDogbnVtYmVyOyBCcmFuY2hJRDogbnVtYmVyOyBEYXRlOiBzdHJpbmcgfSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTx7IFVzZXJJbmZvcm1hdGlvbklEOiBudW1iZXI7IEZ1bGxOYW1lVW5pY29kZTogc3RyaW5nIH1bXT4+KCcvYXBpL1RlYWNoZXJBdmFpbGFibGUnLCB7IHBhcmFtcyB9KTtcclxuXHR9XHJcbn07XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvQ291cnNlT2ZTdHVkZW50UHJpY2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvdXJzZU9mU3R1ZGVudFByaWNlQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8YW55Pj4odXJsLCB7XHJcblx0XHRcdHBhcmFtc1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblx0fVxyXG59O1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL0NvdXJzZS8nO1xyXG5leHBvcnQgY29uc3QgY291cnNlQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUNvdXJzZVtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtc1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyB1cGRhdGUgbeG7m2kgZGF0YVxyXG5cdHVwZGF0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHJcblx0Z2V0QnlJZChpZDogbnVtYmVyKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElDb3Vyc2VEZXRhaWw+PihgJHt1cmx9JHtpZH1gKTtcclxuXHR9XHJcbn07XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnLi4vaW5zdGFuY2UnXHJcbmltcG9ydCBfIGZyb20gJ34vYXBwQ29uZmlnJ1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvTGVzc29uLydcclxuZXhwb3J0IGNvbnN0IGxlc3NvbkFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElMZXNzb24+KHVybCwge1xyXG5cdFx0XHRwYXJhbXNcclxuXHRcdH0pXHJcblx0fSxcclxuXHJcblx0Y2FsbEF1dG8oZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dChgJHtfLkFQSV9VUkx9L2FwaS9QdXNoYCwgbnVsbClcclxuXHR9LFxyXG5cclxuXHRjYWxsQXV0b01pbnV0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KGAke18uQVBJX1VSTH0vYXBpL1B1c2hPbmVNaW51dGVgLCBudWxsKVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQge2luc3RhbmNlfSBmcm9tICcuLi9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9Sb2xsVXAvJztcclxuZXhwb3J0IGNvbnN0IHJvbGxVcEFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElSb2xsVXBbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXMsXHJcblx0XHR9KTtcclxuXHR9LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJy4uL2luc3RhbmNlJ1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvU3R1ZHlEYXkvJ1xyXG5leHBvcnQgY29uc3Qgc3R1ZHlEYXlBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU3R1ZHlEYXlbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXNcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY29uc3QgdXJsID0gXCIvYXBpL0NvbnRyYWN0T2ZTdHVkZW50XCI7XHJcblxyXG5jbGFzcyBDb250cmFjdEN1c3RvbWVyTGlzdCB7XHJcbiAgZ2V0QWxsID0gKFBhcmFtczogYW55KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElDb250cmFjdEN1c3RvbWVyTGlzdFtdPj4odXJsLCB7XHJcbiAgICAgIHBhcmFtczogUGFyYW1zLFxyXG4gICAgfSk7XHJcblxyXG4gIGdldERldGFpbCA9IChpZDogbnVtYmVyKSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElDb250cmFjdEN1c3RvbWVyTGlzdD4+KGAke3VybH0vJHtpZH1gKTtcclxuXHJcbiAgdXBkYXRlID0gKGRhdGEpID0+IGluc3RhbmNlLnB1dCh1cmwsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnRyYWN0Q3VzdG9tZXJMaXN0QXBpID0gbmV3IENvbnRyYWN0Q3VzdG9tZXJMaXN0KCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL0ludm9pY2UnO1xyXG5cclxuY2xhc3MgSW52b2ljZSB7XHJcblx0Z2V0QWxsID0gKFBhcmFtczogYW55KSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElJbnZvaWNlW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zOiBQYXJhbXNcclxuXHRcdH0pO1xyXG5cclxuXHRnZXREZXRhaWwgPSAoaWQ6IG51bWJlcikgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElJbnZvaWNlPj4oYCR7dXJsfS8ke2lkfWApO1xyXG5cclxuXHR1cGRhdGUgPSAoZGF0YSkgPT4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSwge30pO1xyXG5cclxuXHRleHBvcnQgPSAoaWQpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YT4oYC9hcGkvRXhwb3J0SW52b2ljZS8ke2lkfWApO1xyXG5cclxuXHRzZW5kTWFpbCA9IChpZCkgPT4gaW5zdGFuY2UucG9zdChgYXBpL1NlbmRNYWlsSW52b2ljZS8ke2lkfWApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW52b2ljZUFwaSA9IG5ldyBJbnZvaWNlKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1ZvdWNoZXInO1xyXG5cclxuY2xhc3MgVm91Y2hlciB7XHJcblx0Z2V0QWxsID0gKFBhcmFtczogYW55KSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElWb3VjaGVyW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zOiBQYXJhbXNcclxuXHRcdH0pO1xyXG5cclxuXHRnZXREZXRhaWwgPSAoaWQ6IG51bWJlcikgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElWb3VjaGVyPj4oYCR7dXJsfS8ke2lkfWApO1xyXG5cclxuXHR1cGRhdGUgPSAoZGF0YSkgPT4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSwge30pO1xyXG5cclxuXHRleHBvcnQgPSAoaWQpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YT4oYC9hcGkvRXhwb3J0Vm91Y2hlci8ke2lkfWApO1xyXG5cclxuXHRzZW5kTWFpbCA9IChpZCkgPT4gaW5zdGFuY2UucG9zdChgYXBpL1NlbmRNYWlsVm91Y2hlci8ke2lkfWApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgdm91Y2hlckFwaSA9IG5ldyBWb3VjaGVyKCk7XHJcbiIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9SZWZ1bmRzJztcclxuXHJcbmNsYXNzIFJlZnVuZHMge1xyXG5cdGdldEFsbCA9IChQYXJhbXM6IGFueSkgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJUmVmdW5kc1tdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtczogUGFyYW1zLFxyXG5cdFx0fSk7XHJcblxyXG5cdGdldERldGFpbCA9IChpZDogbnVtYmVyKSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElSZWZ1bmRzPj4oYCR7dXJsfS8ke2lkfWApO1xyXG5cclxuXHRhZGQgPSAoZGF0YSkgPT4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG5cclxuXHR1cGRhdGUgPSAoZGF0YSkgPT4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSwge30pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVmdW5kc0FwaSA9IG5ldyBSZWZ1bmRzKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1BhcmVudHMnO1xyXG5cclxuY2xhc3MgUGFyZW50c0FwaSB7XHJcblx0Z2V0QWxsID0gKFBhcmFtczogYW55KSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElQYXJlbnRzW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zOiBQYXJhbXNcclxuXHRcdH0pO1xyXG5cclxuXHRnZXREZXRhaWwgPSAoaWQ6IG51bWJlcikgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElQYXJlbnRzPj4oYCR7dXJsfS8ke2lkfWApO1xyXG5cclxuXHRhZGQgPSAoZGF0YTogSVBhcmVudHMpID0+IGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuXHJcblx0dXBkYXRlID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSwge30pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGFyZW50c0FwaSA9IG5ldyBQYXJlbnRzQXBpKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY2xhc3MgU2VydmljZUN1c3RvbWVyRXhhbVJlc3VsdCB7XHJcbiAgZ2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU2VydmljZUN1c3RvbWVyRXhhbVJlc3VsdFtdPj4oXCIvYXBpL1N0dWRlbnRFeGFtT2ZTZXJ2aWNlUmVzdWx0XCIsIHtcclxuICAgICAgcGFyYW1zOiB0b2RvQXBpLFxyXG4gICAgfSk7XHJcblxyXG4gIGdldFdpdGhJRCA9IChJRDogbnVtYmVyKSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHQ8SVNlcnZpY2VDdXN0b21lckV4YW1SZXN1bHRbXT4+KGAvYXBpL1N0dWRlbnRFeGFtT2ZTZXJ2aWNlUmVzdWx0LyR7SUR9YCk7XHJcblxyXG4gIGFkZCA9IChkYXRhOiBJU2VydmljZUN1c3RvbWVyRXhhbVJlc3VsdCkgPT4gaW5zdGFuY2UucG9zdChcIi9hcGkvU3R1ZGVudEV4YW1PZlNlcnZpY2VSZXN1bHQvXCIsIGRhdGEsIHt9KTtcclxuXHJcbiAgdXBkYXRlID0gKGRhdGEpID0+IGluc3RhbmNlLnB1dChcIi9hcGkvU3R1ZGVudEV4YW1PZlNlcnZpY2VSZXN1bHQvXCIsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlcnZpY2VDdXN0b21lckV4YW1SZXN1bHRBcGkgPSBuZXcgU2VydmljZUN1c3RvbWVyRXhhbVJlc3VsdCgpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNsYXNzIFNlcnZpY2VDdXN0b21lckV4YW0ge1xyXG4gIGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVNlcnZpY2VDdXN0b21lckV4YW1bXT4+KFwiL2FwaS9TdHVkZW50RXhhbU9mU2VydmljZVwiLCB7XHJcbiAgICAgIHBhcmFtczogdG9kb0FwaSxcclxuICAgIH0pO1xyXG5cclxuICBnZXRXaXRoSUQgPSAoSUQ6IG51bWJlcikgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0PElTZXJ2aWNlQ3VzdG9tZXJFeGFtW10+PihgL2FwaS9TdHVkZW50RXhhbU9mU2VydmljZS8ke0lEfWApO1xyXG5cclxuICBhZGQgPSAoZGF0YTogSVNlcnZpY2VDdXN0b21lckV4YW0pID0+IGluc3RhbmNlLnBvc3QoXCIvYXBpL1N0dWRlbnRFeGFtT2ZTZXJ2aWNlL1wiLCBkYXRhLCB7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXJ2aWNlQ3VzdG9tZXJFeGFtQXBpID0gbmV3IFNlcnZpY2VDdXN0b21lckV4YW0oKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jb25zdCB1cmwgPSBcIi9hcGkvRXhhbUFwcG9pbnRtZW50UmVzdWx0L1wiO1xyXG5jbGFzcyBUZXN0Q3VzdG9tZXJQb2ludEFwaSB7XHJcbiAgZ2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVGVzdEN1c3RvbWVyUG9pbnRbXT4+KHVybCwge1xyXG4gICAgICBwYXJhbXM6IHRvZG9BcGksXHJcbiAgICB9KTtcclxuXHJcbiAgZ2V0V2l0aElEID0gKElEOiBudW1iZXIpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVRlc3RDdXN0b21lclBvaW50Pj4odXJsICsgSUQpO1xyXG5cclxuICBhZGQgPSAoZGF0YTogSVN0dWRlbnQpID0+IGluc3RhbmNlLnBvc3QodXJsLCBkYXRhLCB7fSk7XHJcblxyXG4gIHVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dCh1cmwsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRlc3RDdXN0b21lclBvaW50QXBpID0gbmV3IFRlc3RDdXN0b21lclBvaW50QXBpKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL0V4YW1BcHBvaW50bWVudC8nO1xyXG5jbGFzcyBUZXN0Q3VzdG9tZXJBcGkge1xyXG5cdGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVRlc3RDdXN0b21lcltdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtczogdG9kb0FwaVxyXG5cdFx0fSk7XHJcblxyXG5cdGdldFdpdGhJRCA9IChJRDogbnVtYmVyKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdDxJVGVzdEN1c3RvbWVyPj4odXJsICsgSUQpO1xyXG5cclxuXHRhZGQgPSAoZGF0YTogSVN0dWRlbnQpID0+IGluc3RhbmNlLnBvc3QodXJsLCBkYXRhLCB7fSk7XHJcblxyXG5cdHVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dCh1cmwsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRlc3RDdXN0b21lckFwaSA9IG5ldyBUZXN0Q3VzdG9tZXJBcGkoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jb25zdCB1cmwgPSBcIi9hcGkvQ291cnNlT2ZTdHVkZW50XCI7XHJcblxyXG5jbGFzcyBDb3Vyc2VTdHVkZW50QXBpIHtcclxuICBnZXRBbGwgPSAoUGFyYW1zOiBhbnkpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUNvdXJzZU9mU3R1ZGVudFtdPj4odXJsLCB7XHJcbiAgICAgIHBhcmFtczogUGFyYW1zLFxyXG4gICAgfSk7XHJcblxyXG4gIGdldERldGFpbCA9IChpZDogbnVtYmVyKSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElDb3Vyc2VPZlN0dWRlbnQ+PihgJHt1cmx9LyR7aWR9YCk7XHJcblxyXG4gIHVwZGF0ZSA9IChkYXRhOiBJQ291cnNlT2ZTdHVkZW50KSA9PiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhLCB7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb3Vyc2VTdHVkZW50QXBpID0gbmV3IENvdXJzZVN0dWRlbnRBcGkoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvRXhhbUFwcG9pbnRtZW50UmVzdWx0Lyc7XHJcbmV4cG9ydCBjb25zdCBleGFtQXBwb2ludG1lbnRSZXN1bHRBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJRXhhbUFwcG9pbnRtZW50UmVzdWx0W10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIEzhuqV5IHRoZW8gaWRcclxuXHRnZXRCeUlkKGlkOiBudW1iZXIpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUV4YW1BcHBvaW50bWVudFJlc3VsdD4+KGAke3VybH0ke2lkfWApO1xyXG5cdH0sXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFkZChkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gWMOzYSBkYXRhXHJcblx0ZGVsZXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cclxuXHRnZXRSZXN1bHRFeGFtKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxhbnk+KCcvYXBpL0V4YW1BcHBvaW50bWVudFJlc3VsdERldGFpbCcsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cclxuXHR1cGRhdGVQb2ludChkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KCcvYXBpL0V4YW1BcHBvaW50bWVudEV4ZXJjaXNlU3R1ZGVudCcsIGRhdGEpO1xyXG5cdH0sXHJcblxyXG5cdC8vIEtp4buDbSB0cmEgxJHhu4EgaOG6uW4gdGVzdCBuw6B5IMSRw6MgxJHGsOG7o2MgbMOgbSBoYXkgY2jGsGFcclxuXHRjaGVja0lzVGVzdGVkKGlkKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElFeGFtQXBwb2ludG1lbnRSZXN1bHRbXT4+KGAvYXBpL0V4YW1BcHBvaW50bWVudFJlc3VsdGNoZWNrUmVzdWx0LyR7aWR9YCk7XHJcblx0fVxyXG59O1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNsYXNzIEV4YW1Db21pbmdTb29uIHtcclxuICBnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElFeGFtQ29taW5nU29vbltdPj4oXCIvYXBpL0V4YW1Db21pbmdTb29uXCIsIHtcclxuICAgICAgcGFyYW1zOiB0b2RvQXBpLFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBleGFtQ29taW5nU29vbkFwaSA9IG5ldyBFeGFtQ29taW5nU29vbigpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9DdXN0b21lckNvbnN1bHRhdGlvbi8nO1xyXG5jbGFzcyBTdHVkZW50QWR2aXNlQXBpIHtcclxuXHRnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdHVkZW50QWR2aXNlW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zOiB0b2RvQXBpXHJcblx0XHR9KTtcclxuXHJcblx0Z2V0V2l0aElEID0gKElEOiBudW1iZXIpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU3R1ZGVudEFkdmlzZT4+KHVybCArIElEKTtcclxuXHJcblx0YWRkID0gKGRhdGE6IElTdHVkZW50KSA9PiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSwge30pO1xyXG5cclxuXHR1cGRhdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhLCB7fSk7XHJcblxyXG5cdGFkZE5vdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wb3N0KCcvYXBpL05vdGVPZkN1c3RvbWVyJywgZGF0YSwge30pO1xyXG5cclxuXHR1cGRhdGVOb3RlID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucHV0KCcvYXBpL05vdGVPZkN1c3RvbWVyJywgZGF0YSwge30pO1xyXG5cclxuXHRzZW5kRW1haWwgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wb3N0KCcvYXBpL1NlbmRNYWlsQ3VzdG9tZXInLCBkYXRhLCB7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzdHVkZW50QWR2aXNlQXBpID0gbmV3IFN0dWRlbnRBZHZpc2VBcGkoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jb25zdCB1cmwgPSBcIi9hcGkvQ291cnNlT2ZTdHVkZW50Q2hhbmdlL1wiO1xyXG5cclxuY2xhc3MgU3R1ZGVudENoYW5nZUNvdXJzZUFwaSB7XHJcbiAgZ2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU3R1ZGVudENoYW5nZUNvdXJzZVtdPj4odXJsLCB7XHJcbiAgICAgIHBhcmFtczogdG9kb0FwaSxcclxuICAgIH0pO1xyXG5cclxuICBnZXRXaXRoSUQgPSAoSUQ6IG51bWJlcikgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU3R1ZGVudENoYW5nZUNvdXJzZT4+KHVybCArIElEKTtcclxuXHJcbiAgYWRkID0gKGRhdGE6IElTdHVkZW50KSA9PiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSwge30pO1xyXG5cclxuICB1cGRhdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhLCB7fSk7XHJcblxyXG4gIGNoYW5nZUNvdXJzZSA9IChkYXRhOiBJQ291cnNlT2ZTdHVkZW50Q2hhbmdlKSA9PiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSwge30pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3R1ZGVudENoYW5nZUNvdXJzZUFwaSA9IG5ldyBTdHVkZW50Q2hhbmdlQ291cnNlQXBpKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY29uc3QgdXJsID0gXCIvYXBpL0NvdW5zZWxvcnNDaGFuZ2UvXCI7XHJcblxyXG5jbGFzcyBTdHVkZW50Q2hhbmdlQXBpIHtcclxuICBnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdHVkZW50Q2hhbmdlW10+Pih1cmwsIHtcclxuICAgICAgcGFyYW1zOiB0b2RvQXBpLFxyXG4gICAgfSk7XHJcblxyXG4gIGdldFdpdGhJRCA9IChJRDogbnVtYmVyKSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdHVkZW50Q2hhbmdlPj4odXJsICsgSUQpO1xyXG5cclxuICBhZGQgPSAoZGF0YTogSVN0dWRlbnQpID0+IGluc3RhbmNlLnBvc3QodXJsLCBkYXRhLCB7fSk7XHJcblxyXG4gIHVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dCh1cmwsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN0dWRlbnRDaGFuZ2VBcGkgPSBuZXcgU3R1ZGVudENoYW5nZUFwaSgpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSc7XHJcblxyXG5jbGFzcyBTdHVkZW50QXBpIHtcclxuXHRnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdHVkZW50W10+PignL2FwaS9TdHVkZW50LycsIHtcclxuXHRcdFx0cGFyYW1zOiB0b2RvQXBpXHJcblx0XHR9KTtcclxuXHJcblx0Z2V0V2l0aElEID0gKElEOiBudW1iZXIpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU3R1ZGVudD4+KGAvYXBpL1N0dWRlbnQvJHtJRH1gKTtcclxuXHJcblx0YWRkID0gKGRhdGE6IElTdHVkZW50KSA9PiBpbnN0YW5jZS5wb3N0KCcvYXBpL1N0dWRlbnQnLCBkYXRhLCB7fSk7XHJcblxyXG5cdGNyZWF0ZUFjY291bnQgPSAoZGF0YTogSVN0dWRlbnQpID0+IGluc3RhbmNlLnBvc3QoJy9hcGkvQ3JlYXRlQWNjb3VudCcsIGRhdGEsIHt9KTtcclxuXHJcblx0dXBkYXRlID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucHV0KCcvYXBpL1N0dWRlbnQvJywgZGF0YSwge30pO1xyXG5cclxuXHQvLyB1cGxvYWRJbWFnZSA9IChmaWxlOiBhbnkpID0+XHJcblxyXG5cdC8vICAgaW5zdGFuY2UucG9zdChcIi9hcGkvVXNlckluZm9ybWF0aW9uL3VwbG9hZEltYWdlXCIsIGZpbGUsIHt9KTtcclxuXHJcblx0dXBsb2FkSW1hZ2UgPSAoZmlsZTogYW55KSA9PiB7XHJcblx0XHRsZXQgZkRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHRcdGZEYXRhLmFwcGVuZCgnRmlsZScsIGZpbGUpO1xyXG5cdFx0Y29uc29sZS5sb2coJ0ZEQVRBOiAnLCBmRGF0YSk7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCgnL2FwaS9Vc2VySW5mb3JtYXRpb24vdXBsb2FkSW1hZ2UnLCBmRGF0YSwge30pO1xyXG5cdH07XHJcblxyXG5cdGdldENvdXJzZU9mU3R1ZGVudERldGFpbCA9IChJRDogbnVtYmVyKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVN0dWRlbnQ+PihgL2FwaS9HZXRDb3Vyc2VBbmRUZWFjaGVyT2ZTdHVkZW50LyR7SUR9YCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzdHVkZW50QXBpID0gbmV3IFN0dWRlbnRBcGkoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jbGFzcyBXYXJuaW5nIHtcclxuICBnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElXYXJuaW5nW10+PihcIi9hcGkvV2FybmluZ1wiLCB7XHJcbiAgICAgIHBhcmFtczogdG9kb0FwaSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHdhcm5pbmdBcGkgPSBuZXcgV2FybmluZygpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCIuLi9pbnN0YW5jZVwiO1xyXG5cclxuY29uc3QgdXJsID0gXCIvYXBpL1NldFBhY2thZ2VSZXN1bHRcIjtcclxuZXhwb3J0IGNvbnN0IGRvaW5nVGVzdEFwaSA9IHtcclxuICAvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuICAvLyBnZXRBbGwocGFyYW1zKSB7XHJcbiAgLy8gXHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElEb2luZ1Rlc3RbXT4+KHVybCwge1xyXG4gIC8vIFx0XHRwYXJhbXMsXHJcbiAgLy8gXHR9KTtcclxuICAvLyB9LFxyXG4gIC8vIEzhuqV5IHRoZW8gSURcclxuICBnZXRCeUlEKElEKSB7XHJcbiAgICByZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElEb2luZ1Rlc3Q+PihgJHt1cmx9LyR7SUR9YCk7XHJcbiAgfSxcclxuICAvLyBUaMOqbSBt4bubaSBkYXRhXHJcbiAgYWRkKGRhdGEpIHtcclxuICAgIHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcbiAgfSxcclxuICAvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG4gIC8vIHVwZGF0ZShkYXRhKSB7XHJcbiAgLy8gXHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcbiAgLy8gfSxcclxuICAvLyBYw7NhIGRhdGFcclxuICAvLyBkZWxldGUoZGF0YSkge1xyXG4gIC8vIFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG4gIC8vIH0sXHJcbn07XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnLi4vaW5zdGFuY2UnXHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9FeGFtVG9waWNEZXRhaWwvJ1xyXG5leHBvcnQgY29uc3QgZXhhbURldGFpbEFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElFeGFtRGV0YWlsW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KVxyXG5cdH0sXHJcblx0Ly8gTOG6pXkgdGhlbyBJRFxyXG5cdGdldEJ5SUQoSUQpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUV4YW1EZXRhaWw+PihgJHt1cmx9JHtJRH1gKVxyXG5cdH0sXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFkZChkYXRhOiBhbnkpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSlcclxuXHR9LFxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlKGRhdGE6IGFueSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpXHJcblx0fSxcclxuXHQvLyBYw7NhIGRhdGFcclxuXHRkZWxldGUoZGF0YTogYW55KSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSlcclxuXHR9LFxyXG5cdC8vIFThuqFvIGPDonUgaOG7j2kgdOG7sSDEkeG7mW5nXHJcblx0Y3JlYXRlQXV0byhkYXRhOiBhbnkpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KCdhcGkvQXV0b0NyZWF0ZUV4YW10b3BpY0RldGFpbCcsIGRhdGEpXHJcblx0fSxcclxuXHQvLyDEkOG7lWkgduG7iyB0csOtXHJcblx0Y2hhbmdlUG9zaXRpb24oZGF0YTogYW55KSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KCdhcGkvVXBkYXRlSW5kZXgnLCBkYXRhKVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCIuLi9pbnN0YW5jZVwiO1xyXG5cclxuY29uc3QgdXJsID0gXCIvYXBpL0V4YW1Ub3BpYy9cIjtcclxuZXhwb3J0IGNvbnN0IGV4YW1Ub3BpY0FwaSA9IHtcclxuICAvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuICBnZXRBbGwocGFyYW1zKSB7XHJcbiAgICByZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElFeGFtVG9waWNbXT4+KHVybCwge1xyXG4gICAgICBwYXJhbXMsXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIC8vIEzhuqV5IHRoZW8gSURcclxuICBnZXRCeUlEKElEKSB7XHJcbiAgICByZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElFeGFtVG9waWM+PihgJHt1cmx9JHtJRH1gKTtcclxuICB9LFxyXG4gIC8vIFRow6ptIG3hu5tpIGRhdGFcclxuICBhZGQoZGF0YSkge1xyXG4gICAgcmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuICB9LFxyXG4gIC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcbiAgdXBkYXRlKGRhdGEpIHtcclxuICAgIHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuICB9LFxyXG4gIC8vIFjDs2EgZGF0YVxyXG4gIGRlbGV0ZShkYXRhKSB7XHJcbiAgICByZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IHsgVXBsb2FkIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jb25zdCB1cmwgPSBcIi9hcGkvRXhlcmNpc2VcIjtcclxuY2xhc3MgRXhlcmNpc2VBcGkge1xyXG4gIC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG4gIGdldEFsbCA9IChwYXJhbXMpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUV4ZXJjaXNlW10+Pih1cmwsIHsgcGFyYW1zIH0pO1xyXG5cclxuICAvLyBUaMOqbSBt4bubaSBkYXRhXHJcbiAgYWRkKGRhdGE6IElFeGVyY2lzZSkge1xyXG4gICAgcmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuICB9XHJcbiAgLy8gQ+G6rXAgbmjhuq10IGRhdGFcclxuICB1cGRhdGUoZGF0YTogSUV4ZXJjaXNlKSB7XHJcbiAgICByZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcbiAgfVxyXG4gIC8vIFjDs2EgZGF0YVxyXG4gIGRlbGV0ZShkYXRhOiBJRXhlcmNpc2UpIHtcclxuICAgIHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIC8vIEltcG9ydCBFeGNlbFxyXG4gIGltcG9ydEV4Y2VsKGZpbGU6IEZpbGUpIHtcclxuICAgIGxldCBmRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZkRhdGEuYXBwZW5kKFwiRmlsZVwiLCBmaWxlKTtcclxuICAgIHJldHVybiBpbnN0YW5jZS5wb3N0KFwiL2FwaS9JbXBvcnRFeGVyY2lzZVwiLCBmRGF0YSwge30pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGV4ZXJjaXNlQXBpID0gbmV3IEV4ZXJjaXNlQXBpKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJ1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvRXhlcmNpc2VHcm91cCdcclxuY2xhc3MgRXhlcmNpc2VHcm91cEFwaSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsID0gKHBhcmFtcykgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElFeGVyY2lzZUdyb3VwW10+Pih1cmwsIHsgcGFyYW1zIH0pXHJcblxyXG5cdC8vIEzhuqV5IDEgZGF0YVxyXG5cdGdldFdpdGhJRCA9IChJRCkgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElFeGVyY2lzZUdyb3VwPj4oYCR7dXJsfS8ke0lEfWApXHJcblxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKVxyXG5cdH1cclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSlcclxuXHR9XHJcblx0Ly8gWMOzYSBkYXRhXHJcblx0ZGVsZXRlKGRhdGE6IElFeGVyY2lzZUdyb3VwKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSlcclxuXHR9XHJcblxyXG5cdC8vIFVwbG9hZCBmaWxlXHJcblx0VXBsb2FkQXVkaW8oZGF0YSkge1xyXG5cdFx0bGV0IGZvcm1kYXRhID0gbmV3IEZvcm1EYXRhKClcclxuXHRcdGZvcm1kYXRhLmFwcGVuZCgnZmlsZScsIGRhdGEpXHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCgnL2FwaS91cGxvYWRmaWxlRXhlcmNpc2UnLCBmb3JtZGF0YSlcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBleGVyY2lzZUdyb3VwQXBpID0gbmV3IEV4ZXJjaXNlR3JvdXBBcGkoKVxyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJy4uL2luc3RhbmNlJztcclxuaW1wb3J0IHsgSUZlZWRCYWNrIH0gZnJvbSAnLi4vdHlwZXMvZmVlZC1iYWNrL2ZlZWQtYmFjayc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9GZWVkYmFjayc7XHJcbmV4cG9ydCBjb25zdCBGZWVkYmFja0FwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElGZWVkQmFja1tdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtc1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHJcblx0YWRkKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHJcblx0dXBkYXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cclxuXHRnZXRCeUlEKElEKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElGZWVkQmFjaz4+KGAke3VybH0vJHtJRH1gKTtcclxuXHR9XHJcbn07XHJcbiIsImltcG9ydCB7IG9uZVNpZ25hbEFQSSB9IGZyb20gJy4vb25lU2lnbmFsL29uZVNpZ25hbCc7XHJcbmV4cG9ydCB7IGFyZWFBcGkgfSBmcm9tICcuL29wdGlvbnMvYXJlYSc7XHJcbmV4cG9ydCB7IGJyYW5jaEFwaSB9IGZyb20gJy4vb3B0aW9ucy9icmFuY2gnO1xyXG5leHBvcnQgeyBjb250cmFjdEFwaSB9IGZyb20gJy4vb3B0aW9ucy9jb250cmFjdCc7XHJcbmV4cG9ydCB7IGN1cnJpY3VsdW1BcGkgfSBmcm9tICcuL29wdGlvbnMvY3VycmljdWx1bSc7XHJcbmV4cG9ydCB7IGN1cnJpY3VsdW1EZXRhaWxBcGkgfSBmcm9tICcuL29wdGlvbnMvY3VycmljdWx1bS1kZXRhaWwnO1xyXG5leHBvcnQgeyBkYXlPZmZBcGkgfSBmcm9tICcuL29wdGlvbnMvZGF5LW9mZic7XHJcbmV4cG9ydCB7IGRpc2NvdW50QXBpIH0gZnJvbSAnLi9vcHRpb25zL2Rpc2NvdW50JztcclxuZXhwb3J0IHsgZGlzdHJpY3RBcGkgfSBmcm9tICcuL29wdGlvbnMvZGlzdHJpY3QnO1xyXG5leHBvcnQgeyBncmFkZUFwaSB9IGZyb20gJy4vb3B0aW9ucy9ncmFkZSc7XHJcbmV4cG9ydCB7IGpvYkFwaSB9IGZyb20gJy4vb3B0aW9ucy9qb2InO1xyXG5leHBvcnQgeyBwcm9ncmFtQXBpIH0gZnJvbSAnLi9vcHRpb25zL3Byb2dyYW0nO1xyXG5leHBvcnQgeyBwdXJvc2VBcGkgfSBmcm9tICcuL29wdGlvbnMvcHVyb3NlJztcclxuZXhwb3J0IHsgcm9vbUFwaSB9IGZyb20gJy4vb3B0aW9ucy9yb29tJztcclxuZXhwb3J0IHsgc2VydmljZUFwaSB9IGZyb20gJy4vb3B0aW9ucy9zZXJ2aWNlJztcclxuZXhwb3J0IHsgc291cmNlSW5mb21hdGlvbkFwaSB9IGZyb20gJy4vb3B0aW9ucy9zb3VyY2UtaW5mb21hdGlvbic7XHJcbmV4cG9ydCB7IHN0YWZmU2FsYXJ5QXBpIH0gZnJvbSAnLi9vcHRpb25zL3N0YWZmLXNhbGFyeSc7XHJcbmV4cG9ydCB7IHN0dWR5VGltZUFwaSB9IGZyb20gJy4vb3B0aW9ucy9zdHVkeS10aW1lJztcclxuZXhwb3J0IHsgc3ViamVjdEFwaSB9IGZyb20gJy4vb3B0aW9ucy9zdWJqZWN0JztcclxuZXhwb3J0IHsgc3R1ZGVudEFwaSB9IGZyb20gJy4vY3VzdG9tZXIvc3R1ZGVudC9zdHVkZW50LWxpc3QnO1xyXG5leHBvcnQgeyB3YXJkQXBpIH0gZnJvbSAnLi9vcHRpb25zL3dhcmQnO1xyXG5leHBvcnQgeyBzdXBwbGllckFwaSB9IGZyb20gJy4vb3B0aW9ucy9zdXBwbGllcic7XHJcbmV4cG9ydCB7IHVzZXJJbmZvcm1hdGlvbkFwaSB9IGZyb20gJy4vb3B0aW9ucy91c2VyaW5mb3JtYXRpb24nO1xyXG5leHBvcnQgeyB0ZWFjaGVyQXBpIH0gZnJvbSAnLi90ZWFjaGVyL3RlYWNoZXInO1xyXG5leHBvcnQgeyBsZXNzb25BcGkgfSBmcm9tICcuL2NvdXJzZS9sZXNzb24nO1xyXG5leHBvcnQgeyBzdHVkeURheUFwaSB9IGZyb20gJy4vY291cnNlL3N0dWR5LWRheSc7XHJcbmV4cG9ydCB7IGNoZWNrU3R1ZHlUaW1lQXBpIH0gZnJvbSAnLi9jb3Vyc2UvY2hlY2stc3R1ZHktdGltZSc7XHJcbmV4cG9ydCB7IHBhcmVudHNBcGkgfSBmcm9tICcuL2N1c3RvbWVyL3BhcmVudHMvcGFyZW50cyc7XHJcbmV4cG9ydCB7IHN0YWZmQXBpIH0gZnJvbSAnLi9zdGFmZi1tYW5hZ2Uvc3RhZmYnO1xyXG5leHBvcnQgeyBub3RpZmljYXRpb25BcGkgfSBmcm9tICcuL29wdGlvbnMvbm90aWZpY2F0aW9uJztcclxuZXhwb3J0IHsgcnVsZXNBcGkgfSBmcm9tICcuL29wdGlvbnMvcnVsZXMnO1xyXG5cclxuZXhwb3J0IHsgZXhhbVRvcGljQXBpIH0gZnJvbSAnLi9leGFtL2V4YW0tdG9waWMnO1xyXG5leHBvcnQgeyBjb25zdWx0YXRpb25TdGF0dXNBcGkgfSBmcm9tICcuL29wdGlvbnMvY29uc3VsdGF0aW9uLXN0YXR1cyc7XHJcbmV4cG9ydCB7IHRlc3RDdXN0b21lclBvaW50QXBpIH0gZnJvbSAnLi9jdXN0b21lci9zZXJ2aWNlL3Rlc3QtY3VzdG9tZXItcG9pbnQnO1xyXG5cclxuZXhwb3J0IHsgY29uZmlnWm9vbUFwaSB9IGZyb20gJy4vem9vbS9jb25maWctem9vbSc7XHJcbmV4cG9ydCB7IHNjaGVkdWxlWm9vbUFwaSB9IGZyb20gJy4vem9vbS9zY2hlZHVsZS16b29tJztcclxuZXhwb3J0IHsgem9vbVJvb21BcGkgfSBmcm9tICcuL3pvb20vem9vbS1yb29tJztcclxuXHJcbmV4cG9ydCB7IHByaWNlRml4RXhhbUFwaSB9IGZyb20gJy4vb3B0aW9ucy9wcmljZS1maXgtZXhhbSc7XHJcbmV4cG9ydCB7IHBheUZpeEV4YW1BcGkgfSBmcm9tICcuL3BhY2thZ2UvcGF5LWZpeC1leGFtJztcclxuZXhwb3J0IHsgcGF5Rml4TGlzdEFwaSB9IGZyb20gJy4vcGFja2FnZS9wYXktZml4LWxpc3QnO1xyXG5leHBvcnQgeyBwYWNrYWdlUmVzdWx0QXBpIH0gZnJvbSAnfi9hcGlCYXNlL3BhY2thZ2UvcGFja2FnZS1yZXN1bHQnO1xyXG5leHBvcnQgeyBleGVyY2lzZUdyb3VwQXBpIH0gZnJvbSAnLi9leGVyY2lzZS9leGVyY2lzZUdyb3VwJztcclxuZXhwb3J0IHsgY2hlY2tSb29tQXBpIH0gZnJvbSAnLi9jb3Vyc2UvY2hlY2stcm9vbSc7XHJcbmV4cG9ydCB7IGNoZWNrVGVhY2hlckFwaSB9IGZyb20gJy4vY291cnNlL2NoZWNrLXRlYWNoZXInO1xyXG5leHBvcnQgeyBzdHVkZW50QWR2aXNlQXBpIH0gZnJvbSAnLi9jdXN0b21lci9zdHVkZW50L3N0dWRlbnQtYWR2aXNlJztcclxuZXhwb3J0IHsgdGVzdEN1c3RvbWVyQXBpIH0gZnJvbSAnLi9jdXN0b21lci9zZXJ2aWNlL3Rlc3QtY3VzdG9tZXInO1xyXG5leHBvcnQgeyB1c2VyQXBpIH0gZnJvbSAnLi91c2VyL3VzZXInO1xyXG5leHBvcnQgeyBleGFtQ29taW5nU29vbkFwaSB9IGZyb20gJy4vY3VzdG9tZXIvc3R1ZGVudC9leGFtLWNvbWluZy1zb29uJztcclxuZXhwb3J0IHsgd2FybmluZ0FwaSB9IGZyb20gJy4vY3VzdG9tZXIvc3R1ZGVudC93YXJuaW5nJztcclxuZXhwb3J0IHsgY291cnNlQXBpIH0gZnJvbSAnLi9jb3Vyc2UvY291cnNlJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb3Vyc2UtZGV0YWlsL2NvdXJzZS1kZXRhaWwnO1xyXG5leHBvcnQgeyBzdHVkZW50TGlzdEluQ291cnNlQXBpIH0gZnJvbSAnLi9jb3Vyc2UtZGV0YWlsL3N0dWRlbnQtbGlzdCc7XHJcbmV4cG9ydCB7IHN0dWRlbnRDaGFuZ2VBcGkgfSBmcm9tICcuL2N1c3RvbWVyL3N0dWRlbnQvc3R1ZGVudC1jaGFuZ2UnO1xyXG5leHBvcnQgeyBzdHVkZW50Q2hhbmdlQ291cnNlQXBpIH0gZnJvbSAnLi9jdXN0b21lci9zdHVkZW50L3N0dWRlbnQtY2hhbmdlLWNvdXJzZSc7XHJcbmV4cG9ydCB7IHNlcnZpY2VDdXN0b21lckV4YW1BcGkgfSBmcm9tICcuL2N1c3RvbWVyL3NlcnZpY2Uvc2VydmljZS1jdXN0b21lci1leGFtJztcclxuZXhwb3J0IHsgc2VydmljZUN1c3RvbWVyRXhhbVJlc3VsdEFwaSB9IGZyb20gJy4vY3VzdG9tZXIvc2VydmljZS9zZXJ2aWNlLWN1c3RvbWVyLWV4YW0tcmVzdWx0JztcclxuZXhwb3J0IHsgcmVmdW5kc0FwaSB9IGZyb20gJy4vY3VzdG9tZXIvZmluYW5jZS9maW5hbmNlLWNhc2hpZXItcmVmdW5kJztcclxuZXhwb3J0IHsgY29udHJhY3RDdXN0b21lckxpc3RBcGkgfSBmcm9tICcuL2N1c3RvbWVyL2NvbnRyYWN0L2NvbnRyYWN0LWN1c3RvbWVyLWxpc3QnO1xyXG5leHBvcnQgeyB2b3VjaGVyQXBpIH0gZnJvbSAnLi9jdXN0b21lci9maW5hbmNlL2ZpbmFuY2UtY2FzaGllci1wYXltZW50JztcclxuZXhwb3J0IHsgaW52b2ljZUFwaSB9IGZyb20gJy4vY3VzdG9tZXIvZmluYW5jZS9maW5hbmNlLWNhc2hpZXItaW52b2ljZSc7XHJcbmV4cG9ydCB7IGV4YW1BcHBvaW50bWVudFJlc3VsdEFwaSB9IGZyb20gJy4vY3VzdG9tZXIvc3R1ZGVudC9leGFtLWFwcG9pbnRtZW50LXJlc3VsdCc7XHJcbmV4cG9ydCB7IGNoZWNrQnJhbmNoU2NoZWR1bGVTdHVkeSB9IGZyb20gJy4vc2NoZWR1bGUvY2hlY2stYnJhbmNoLXNjaGVkdWxlJztcclxuZXhwb3J0IHsgY2hlY2tUZWFjaGVyU2NoZWR1bGVTdHVkeSB9IGZyb20gJy4vc2NoZWR1bGUvY2hlY2stdGVhY2hlci1zY2hlZHVsZSc7XHJcbmV4cG9ydCB7IHByb2dyYW1EZXRhaWxQb2ludENvbHVtbkFwaSB9IGZyb20gJy4vb3B0aW9ucy9wcm9ncmFtLWRldGFpbC1wb2ludC1jb2x1bW4nO1xyXG5leHBvcnQgeyBjb3Vyc2VTdHVkZW50QXBpIH0gZnJvbSAnLi9jdXN0b21lci9zdHVkZW50L2NvdXJzZS1zdHVkZW50JztcclxuZXhwb3J0IHsgcm9sbFVwQXBpIH0gZnJvbSAnLi9jb3Vyc2Uvcm9sbHVwJztcclxuZXhwb3J0IHsgY291cnNlT2ZTdHVkZW50UHJpY2VBcGkgfSBmcm9tICcuL2NvdXJzZS9jb3Vyc2Utb2Ytc3R1ZGVudC1wcmljZSc7XHJcbmV4cG9ydCB7IGNvbmZpZ0FwaSB9IGZyb20gJy4vb3B0aW9ucy9jb25maWcnO1xyXG5leHBvcnQgeyBuZXdzRmVlZEFwaSB9IGZyb20gJy4vbmV3c2ZlZWQvbmV3c2ZlZWQnO1xyXG5leHBvcnQgeyBuZXdzRmVlZExpa2VBcGkgfSBmcm9tICcuL25ld3NmZWVkL25ld3NmZWVkLWxpa2UnO1xyXG5leHBvcnQgeyBuZXdzRmVlZENvbW1lbnRBcGkgfSBmcm9tICcuL25ld3NmZWVkL25ld3NmZWVkLWNvbW1lbnQnO1xyXG5leHBvcnQgeyBuZXdzRmVlZENvbW1lbnRSZXBseUFwaSB9IGZyb20gJy4vbmV3c2ZlZWQvbmV3c2ZlZWQtY29tbWVudHJlcGx5JztcclxuZXhwb3J0IHsgdXNlckJyYW5jaEFwaSB9IGZyb20gJy4vbmV3c2ZlZWQvdXNlci1icmFuY2gnO1xyXG5leHBvcnQgeyBncm91cE5ld3NGZWVkQXBpIH0gZnJvbSAnLi9uZXdzZmVlZC9ncm91cC1uZXdzZmVlZCc7XHJcbmV4cG9ydCB7IHVzZXJHcm91cE5ld3NGZWVkQXBpIH0gZnJvbSAnLi9uZXdzZmVlZC91c2VyLWdyb3VwLW5ld3NmZWVkJztcclxuZXhwb3J0IHsgZXhlcmNpc2VBcGkgfSBmcm9tICcuL2V4ZXJjaXNlL2V4ZXJjaXNlJztcclxuZXhwb3J0IHsgcGFja2FnZUFwaSB9IGZyb20gJy4vcGFja2FnZS9wYWNrYWdlJztcclxuZXhwb3J0IHsgc3RhZmZPZlRhc2tHcm91cEFwaSwgdGFza0FwaSwgdGFza0dyb3VwQXBpIH0gZnJvbSAnLi9zdGFmZi1tYW5hZ2UvdGFzayc7XHJcbmV4cG9ydCB7IGRvY3VtZW50U2NoZWR1bGVBcGkgfSBmcm9tICcuL2NvdXJzZS1kZXRhaWwvZG9jdW1lbnQtc2NoZWR1bGUnO1xyXG5leHBvcnQgeyBwYWNrYWdlU3R1ZGVudEFwaSB9IGZyb20gJy4vcGFja2FnZS9wYWNrYWdlLXN0dWRlbnQnO1xyXG5leHBvcnQgeyBiYWNrZ3JvdW5kTmV3c0ZlZWRBcGkgfSBmcm9tICcuL25ld3NmZWVkL2JhY2tncm91bmQtbmV3c2ZlZWQnO1xyXG5leHBvcnQgeyBzdHVkeURheU9ubGluZUFwaSB9IGZyb20gJy4vY291cnNlLW9ubGluZS9zdHVkeS1kYXknO1xyXG5leHBvcnQgeyBsZXNzb25PbmxpbmVBcGkgfSBmcm9tICcuL2NvdXJzZS1vbmxpbmUvbGVzc29uJztcclxuZXhwb3J0IHsgY291cnNlT25saW5lRGV0YWlsQXZhaWxhYmxlRGF5QXBpIH0gZnJvbSAnLi9jb3Vyc2Utb25saW5lLWRldGFpbC9hdmFpbGFibGUtZGF5JztcclxuZXhwb3J0IHsgcGFja2FnZUV4YW1pbmVyQXBpIH0gZnJvbSAnLi9wYWNrYWdlL3BhY2thZ2UtZXhhbWluZXInO1xyXG5leHBvcnQgeyBleGFtRGV0YWlsQXBpIH0gZnJvbSAnLi9leGFtLWRldGFpbC9leGFtLWRldGFpbCc7XHJcbmV4cG9ydCB7IHNhbGVDYW1wYWlnbkFwaSB9IGZyb20gJy4vc2FsZS9zYWxlLWNhbXBhaWduJztcclxuZXhwb3J0IHsgc2FsZUNhbXBhaWduRGV0YWlsQXBpIH0gZnJvbSAnLi9zYWxlL3NhbGUtY2FtcGFpZ24tZGV0YWlsJztcclxuZXhwb3J0IHsgc2FsZVNhbGFyeUFwaSB9IGZyb20gJy4vc2FsZS9zYWxlLXNhbGFyeSc7XHJcbmV4cG9ydCB7IHNhbGVyVG90YWxSZXZlbnVlQXBpIH0gZnJvbSAnLi9zYWxlL3NhbGVyLXRvdGFsLXJldmVudWUnO1xyXG5leHBvcnQgeyBzYWxlclJldmVudWVBcGkgfSBmcm9tICcuL3NhbGUvc2FsZXItcmV2ZW51ZSc7XHJcbmV4cG9ydCB7IFZpZGVvQ291cnNlTGlzdEFwaSwgRG9uZVBheUFwaSB9IGZyb20gJy4vdmlkZW8tY291cnNlLWxpc3QnO1xyXG5leHBvcnQgeyBWaWRlb0NvdXJzZU9mU3R1ZGVudCwgVmlkZW9Db3Vyc2VJbnRlcmFjdGlvbiB9IGZyb20gJy4vdmlkZW8tbGVhcm5pbmcnO1xyXG5leHBvcnQgeyByZXNldFBhc3N3b3JkQXBpIH0gZnJvbSAnLi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZCc7XHJcbmV4cG9ydCB7IGRvaW5nVGVzdEFwaSB9IGZyb20gJy4vZG9pbmctdGVzdC9kb2luZy10ZXN0JztcclxuZXhwb3J0IHsgRmVlZGJhY2tBcGkgfSBmcm9tICcuL2ZlZWQtYmFjayc7XHJcbmV4cG9ydCB7IG9uZVNpZ25hbEFQSSB9IGZyb20gJy4vb25lU2lnbmFsL29uZVNpZ25hbCc7XHJcbmV4cG9ydCB7IHN0dWR5Um9sZUFwaSB9IGZyb20gJy4vc3R1ZHktcm9sZS9zdHVkeS1yb2xlJztcclxuZXhwb3J0IHsgY29taW5nQ291cnNlQXBpIH0gZnJvbSAnLi96b29tL2NvbWluZy1jb3Vyc2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL3NlbGYtY291cnNlJztcclxuIiwiaW1wb3J0IGF4aW9zLCB7IEF4aW9zUmVxdWVzdENvbmZpZywgQXhpb3NSZXNwb25zZSB9IGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBnZXRTZXNzaW9uLCBzaWduSW4gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50J1xyXG5pbXBvcnQgXyBmcm9tICd+L2FwcENvbmZpZydcclxuXHJcbmNvbnN0IFNIT1dfTE9HID0gdHJ1ZVxyXG5jb25zdCBOT0RFX1NUQVRVUzogYW55ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlZcclxuXHJcbmNvbnN0IGlzU2hvd0xvZyA9IChlOiBhbnkpID0+IHtcclxuXHRpZiAoZSA9PT0gJy9hcGkvSWRpb21zL2dldFJhbmRvbXMnIHx8IGUgPT09ICcvYXBpL1J1bGVzJykge1xyXG5cdFx0cmV0dXJuIGZhbHNlXHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiBOT0RFX1NUQVRVUyA9PSAncHJvZHVjdGlvbicgJiYgISFTSE9XX0xPRyA/IHRydWUgOiB0cnVlXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRVcmwoY29uZmlnOiBhbnkpIHtcclxuXHRyZXR1cm4gISFjb25maWcuYmFzZVVSTCA/IGNvbmZpZy51cmwucmVwbGFjZShjb25maWcuYmFzZVVSTCwgJycpLnNwbGl0KCc/JylbMF0gOiBjb25maWcudXJsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoSGVhZGVyX1ggPSBhc3luYyAoKSA9PiB7XHJcblx0Y29uc3Qgc2Vzc2lvbjogYW55ID0gYXdhaXQgZ2V0U2Vzc2lvbigpXHJcblx0cmV0dXJuICEhc2Vzc2lvbiAmJiAhIXNlc3Npb24uYWNjZXNzVG9rZW4gPyB7IHRva2VuOiBzZXNzaW9uLmFjY2Vzc1Rva2VuIH0gOiB7fVxyXG59XHJcbmV4cG9ydCBjb25zdCBhdXRoSGVhZGVyX0JlYXJlciA9IGFzeW5jICgpID0+IHtcclxuXHRjb25zdCBzZXNzaW9uOiBhbnkgPSBhd2FpdCBnZXRTZXNzaW9uKClcclxuXHRyZXR1cm4gISFzZXNzaW9uICYmICEhc2Vzc2lvbi5hY2Nlc3NUb2tlbiA/IHsgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgc2Vzc2lvbi5hY2Nlc3NUb2tlbiB9IDoge31cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcclxuXHRiYXNlVVJMOiBfLmhvc3RVUkwsXHJcblx0aGVhZGVyczoge1xyXG5cdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcclxuXHR9XHJcbn0pXHJcblxyXG5pbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoXHJcblx0YXN5bmMgKGNvbmZpZzogQXhpb3NSZXF1ZXN0Q29uZmlnKSA9PiB7XHJcblx0XHRjb25zdCB1cmw6IGFueSA9IGdldFVybChjb25maWcpXHJcblx0XHRpZiAoIXVybC50b1N0cmluZygpLmluY2x1ZGVzKCcvYXV0aC8nKSkge1xyXG5cdFx0XHRjb25zdCBhdXRoSGVhZGVyOiBhbnkgPSBhd2FpdCBhdXRoSGVhZGVyX1goKVxyXG5cdFx0XHRjb25maWcuaGVhZGVycyA9IHtcclxuXHRcdFx0XHQuLi5jb25maWcuaGVhZGVycyxcclxuXHRcdFx0XHQuLi5hdXRoSGVhZGVyXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlzU2hvd0xvZyh1cmwpICYmIGNvbnNvbGUubG9nKGAlYyAke2NvbmZpZz8ubWV0aG9kLnRvVXBwZXJDYXNlKCl9IC0gJHt1cmx9OmAsICdjb2xvcjogIzAwODZiMzsgZm9udC13ZWlnaHQ6IGJvbGQnLCBjb25maWcpXHJcblx0XHRyZXR1cm4gY29uZmlnXHJcblx0fSxcclxuXHQoZXJyb3I6IGFueSkgPT4ge1xyXG5cdFx0aXNTaG93TG9nKCcnKSAmJiBjb25zb2xlLmxvZyhgJWMgJHtlcnJvcj8ucmVzcG9uc2U/LnN0YXR1c30gIDpgLCAnY29sb3I6IHJlZDsgZm9udC13ZWlnaHQ6IGJvbGQnLCBlcnJvcj8ucmVzcG9uc2U/LmRhdGEpXHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXHJcblx0fVxyXG4pXHJcblxyXG5jb25zdCBjaGVja1Jlc3BvbnNlID0gKGVycm9yOiBhbnkpID0+IHtcclxuXHRzd2l0Y2ggKGVycm9yPy5yZXNwb25zZT8uc3RhdHVzKSB7XHJcblx0XHRjYXNlIDQwMTpcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0c2lnbkluKClcclxuXHRcdFx0fSwgMTAwMClcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgNDAzOlxyXG5cdFx0XHRjb25zb2xlLmxvZyhgJUVSUk9SIDQwMzpgICsgYCVjIERPTidUIEhBVkUgUEVSTUlTU09OYCwgJ2NvbG9yOiByZWQ7IGZvbnQtd2VpZ2h0OiBib2xkJywgJ2NvbG9yOiB5ZWxsb3c7JylcclxuXHRcdFx0YWxlcnQoJ0LhuqFuIGtow7RuZyBjw7MgcXV54buBbiB0aOG7sWMgaGnhu4duJylcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgNDAwOlxyXG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcj8ucmVzcG9uc2U/Lm1lc3NhZ2UpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIDUwMDpcclxuXHRcdFx0Y29uc29sZS5sb2coYCUgRVJST1IgNTAwOmAgKyBgJWMgQkFDSy1FTkRgLCAnY29sb3I6IHJlZDsgZm9udC13ZWlnaHQ6IGJvbGQnLCAnY29sb3I6IHllbGxvdzsnKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0Y29uc29sZS5sb2coYCVjICR7ZXJyb3I/LnJlc3BvbnNlfSAgOmAsICdjb2xvcjogcmVkOyBmb250LXdlaWdodDogYm9sZCcsIGVycm9yPy5yZXNwb25zZSlcclxuXHR9XHJcbn1cclxuXHJcbmluc3RhbmNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXHJcblx0KHJlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlKSA9PiB7XHJcblx0XHRsZXQgdXJsOiBhbnkgPSBnZXRVcmwocmVzcG9uc2U/LmNvbmZpZylcclxuXHRcdGlzU2hvd0xvZyh1cmwpICYmIGNvbnNvbGUubG9nKGAgJWMgJHtyZXNwb25zZT8uc3RhdHVzfSAtICR7Z2V0VXJsKHJlc3BvbnNlPy5jb25maWcpfTpgLCAnY29sb3I6ICMwMDgwMDA7IGZvbnQtd2VpZ2h0OiBib2xkJywgcmVzcG9uc2UpXHJcblx0XHRyZXR1cm4gcmVzcG9uc2VcclxuXHR9LFxyXG5cdGZ1bmN0aW9uIChlcnJvcjogYW55KSB7XHJcblx0XHRpZiAoISFlcnJvcj8ucmVzcG9uc2UpIHtcclxuXHRcdFx0Y2hlY2tSZXNwb25zZShlcnJvcilcclxuXHRcdFx0aXNTaG93TG9nKCcnKSAmJiBjb25zb2xlLmxvZyhgJWMgJHtlcnJvcj8ucmVzcG9uc2U/LnN0YXR1c30gIDpgLCAnY29sb3I6IHJlZDsgZm9udC13ZWlnaHQ6IGJvbGQnLCBlcnJvcj8ucmVzcG9uc2U/LmRhdGEpXHJcblx0XHRcdHJldHVybiAhIWVycm9yPy5yZXNwb25zZT8uZGF0YSA/IFByb21pc2UucmVqZWN0KGVycm9yLnJlc3BvbnNlLmRhdGEpIDogUHJvbWlzZS5yZWplY3QoZXJyb3IpXHJcblx0XHR9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcclxuXHRcdFx0aXNTaG93TG9nKCcnKSAmJiBjb25zb2xlLmxvZyhgJWMgJHtKU09OLnN0cmluZ2lmeShlcnJvcil9ICA6YCwgJ2NvbG9yOiByZWQ7IGZvbnQtd2VpZ2h0OiBib2xkJywgZXJyb3I/LnJlc3BvbnNlPy5kYXRhKVxyXG5cdFx0XHRyZXR1cm4gISFlcnJvcj8ucmVzcG9uc2U/LmRhdGEgPyBQcm9taXNlLnJlamVjdChlcnJvci5yZXNwb25zZS5kYXRhKSA6IFByb21pc2UucmVqZWN0KGVycm9yKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aXNTaG93TG9nKCcnKSAmJiBjb25zb2xlLmxvZyhgJWMgJHtKU09OLnN0cmluZ2lmeShlcnJvcil9ICA6YCwgJ2NvbG9yOiByZWQ7IGZvbnQtd2VpZ2h0OiBib2xkJywgJ0jDrG5oIG5oxrAgbMOgIHNldHRpbmcgc2FpJylcclxuXHRcdFx0cmV0dXJuICEhZXJyb3I/LnJlc3BvbnNlPy5kYXRhID8gUHJvbWlzZS5yZWplY3QoZXJyb3IucmVzcG9uc2UuZGF0YSkgOiBQcm9taXNlLnJlamVjdChlcnJvcilcclxuXHRcdH1cclxuXHR9XHJcbilcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jbGFzcyBCYWNrZ3JvdW5kTmV3c0ZlZWQge1xyXG4gICAgLy8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcbiAgICBnZXRBbGwgPSAoKSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElCYWNrZ3JvdW5kTmV3c0ZlZWRbXT4+KFwiL2FwaS9CYWNrZ3JvdW5kXCIpO1xyXG5cclxuICAgIC8vIEzhuqV5IHRoZW8gaWRcclxuICAgIGdldEJ5SUQgPSAoaWQ6bnVtYmVyKSA9PiBcclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGV0YWlsPihgL2FwaS9CYWNrZ3JvdW5kLyR7aWR9YCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBiYWNrZ3JvdW5kTmV3c0ZlZWRBcGkgPSBuZXcgQmFja2dyb3VuZE5ld3NGZWVkKCk7IiwiaW1wb3J0IHtpbnN0YW5jZX0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJztcclxuXHJcbmNsYXNzIEdyb3VwTmV3c0ZlZWQge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUdyb3VwTmV3c0ZlZWRbXT4+KCcvYXBpL0dyb3VwTmV3c0ZlZWQnLCB7XHJcblx0XHRcdHBhcmFtczogdG9kb0FwaSxcclxuXHRcdH0pO1xyXG5cclxuXHQvLyBM4bqleSB0aGVvIGlkXHJcblx0Z2V0QnlJRCA9IChpZDogbnVtYmVyKSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElHcm91cE5ld3NGZWVkPj4oYC9hcGkvR3JvdXBOZXdzRmVlZC8ke2lkfWApO1xyXG5cclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkID0gKGRhdGEpID0+IGluc3RhbmNlLnBvc3QoJy9hcGkvR3JvdXBOZXdzRmVlZCcsIGRhdGEpO1xyXG5cclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dCgnL2FwaS9Hcm91cE5ld3NGZWVkJywgZGF0YSwge30pO1xyXG5cclxuXHQvLyBVcGxvYWQgYmFja2dyb3VuZFxyXG5cdHVwbG9hZEltYWdlID0gKGZpbGU6IGFueSkgPT4ge1xyXG5cdFx0bGV0IGZEYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblx0XHRmRGF0YS5hcHBlbmQoJ0ZpbGUnLCBmaWxlKTtcclxuXHRcdGNvbnNvbGUubG9nKCdGREFUQTogJywgZkRhdGEpO1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QoJy9hcGkvdXBsb2FkZmlsZUdyb3VwJywgZkRhdGEsIHt9KTtcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ3JvdXBOZXdzRmVlZEFwaSA9IG5ldyBHcm91cE5ld3NGZWVkKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY2xhc3MgTmV3c0ZlZWRDb21tZW50IHtcclxuICAgIC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG4gICAgZ2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJTmV3c0ZlZWRDb21tZW50W10+PihcIi9hcGkvTmV3c0ZlZWRDb21tZW50XCIsIHtcclxuICAgICAgICBwYXJhbXM6IHRvZG9BcGksXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBUaMOqbSBt4bubaSBkYXRhXHJcbiAgICBhZGQgPSAoIGRhdGE6IGFueSApID0+IGluc3RhbmNlLnBvc3QoXCIvYXBpL05ld3NGZWVkQ29tbWVudFwiLCBkYXRhKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBuZXdzRmVlZENvbW1lbnRBcGkgPSBuZXcgTmV3c0ZlZWRDb21tZW50KCk7IiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jbGFzcyBOZXdzRmVlZENvbW1lbnRSZXBseSB7XHJcbiAgICAvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuICAgIGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SU5ld3NGZWVkQ29tbWVudFJlcGx5W10+PihcIi9hcGkvQ29tbWVudFJlcGx5XCIsIHtcclxuICAgICAgICBwYXJhbXM6IHRvZG9BcGksXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBUaMOqbSBt4bubaSBkYXRhXHJcbiAgICBhZGQgPSAoIGRhdGE6IElOZXdzRmVlZENvbW1lbnRSZXBseSApID0+IGluc3RhbmNlLnBvc3QoXCIvYXBpL0NvbW1lbnRSZXBseVwiLCBkYXRhKTtcclxuXHJcbiAgICAvLyBVcGRhdGUgZGF0YVxyXG4gICAgdXBkYXRlID0gKCBkYXRhOmFueSApID0+IGluc3RhbmNlLnB1dChcIi9hcGkvQ29tbWVudFJlcGx5XCIsIGRhdGEpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG5ld3NGZWVkQ29tbWVudFJlcGx5QXBpID0gbmV3IE5ld3NGZWVkQ29tbWVudFJlcGx5KCk7IiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jbGFzcyBOZXdzRmVlZExpa2Uge1xyXG4gICAgLy8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcbiAgICBnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElOZXdzRmVlZExpa2VbXT4+KFwiL2FwaS9OZXdzRmVlZExpa2VcIiwge1xyXG4gICAgICAgIHBhcmFtczogdG9kb0FwaSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFRow6ptIG3hu5tpIGRhdGFcclxuICAgIGFkZCA9ICggZGF0YTogYW55ICkgPT4gaW5zdGFuY2UucG9zdChcIi9hcGkvTmV3c0ZlZWRMaWtlXCIsIGRhdGEpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG5ld3NGZWVkTGlrZUFwaSA9IG5ldyBOZXdzRmVlZExpa2UoKTsiLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSc7XHJcblxyXG5jbGFzcyBOZXdzRmVlZCB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJTmV3c0ZlZWRbXT4+KCcvYXBpL05ld3NGZWVkJywge1xyXG5cdFx0XHRwYXJhbXM6IHRvZG9BcGlcclxuXHRcdH0pO1xyXG5cclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkID0gKGRhdGEpID0+IGluc3RhbmNlLnBvc3QoJy9hcGkvTmV3c0ZlZWQnLCBkYXRhKTtcclxuXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQoJy9hcGkvTmV3c0ZlZWQnLCBkYXRhLCB7fSk7XHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHRkZWxldGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQoJy9hcGkvTmV3c0ZlZWQnLCBkYXRhLCB7fSk7XHJcblxyXG5cdC8vIFVwbG9hZCBmaWxlXHJcblx0dXBsb2FkRmlsZSA9IChmaWxlOiBhbnkpID0+IHtcclxuXHRcdGxldCBmRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cdFx0ZkRhdGEuYXBwZW5kKCdGaWxlJywgZmlsZSk7XHJcblx0XHRjb25zb2xlLmxvZygnRkRBVEE6ICcsIGZEYXRhKTtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KCcvYXBpL3VwbG9hZGZpbGUnLCBmRGF0YSwge30pO1xyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBuZXdzRmVlZEFwaSA9IG5ldyBOZXdzRmVlZCgpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNsYXNzIFVzZXJCcmFuY2gge1xyXG4gICAgLy8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcbiAgICBnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElVc2VyQnJhbmNoW10+PihcIi9hcGkvVXNlckJyYW5jaFwiLCB7XHJcbiAgICAgICAgcGFyYW1zOiB0b2RvQXBpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVGjDqm0gbeG7m2kgZGF0YVxyXG4gICAgYWRkID0gKCBkYXRhOiBJVXNlckJyYW5jaCApID0+IGluc3RhbmNlLnBvc3QoXCIvYXBpL1VzZXJCcmFuY2hcIiwgZGF0YSk7XHJcblxyXG4gICAgLy8gQ+G6rXAgbmjhuq10IGRhdGFcclxuICAgIHVwZGF0ZSA9ICggZGF0YTogYW55ICkgPT4gaW5zdGFuY2UucHV0KFwiL2FwaS9Vc2VyQnJhbmNoXCIsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJCcmFuY2hBcGkgPSBuZXcgVXNlckJyYW5jaCgpOyIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSc7XHJcblxyXG5jbGFzcyBVc2VyR3JvdXBOZXdzRmVlZCB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVXNlckdyb3VwTmV3c0ZlZWRbXT4+KFxyXG5cdFx0XHQnL2FwaS9Hcm91cFVzZXJOZXdzRmVlZCcsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXJhbXM6IHRvZG9BcGksXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdC8vIEzhuqV5IHRoZW8gaWRcclxuXHRnZXRCeUlEID0gKGlkOiBudW1iZXIpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVVzZXJHcm91cE5ld3NGZWVkW10+PihcclxuXHRcdFx0YC9hcGkvR3JvdXBVc2VyTmV3c0ZlZWQvJHtpZH1gXHJcblx0XHQpO1xyXG5cclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkID0gKGRhdGEpID0+IGluc3RhbmNlLnBvc3QoJy9hcGkvR3JvdXBVc2VyTmV3c0ZlZWQnLCBkYXRhKTtcclxuXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQoJy9hcGkvR3JvdXBVc2VyTmV3c0ZlZWQnLCBkYXRhLCB7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyR3JvdXBOZXdzRmVlZEFwaSA9IG5ldyBVc2VyR3JvdXBOZXdzRmVlZCgpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1VwZGF0ZV9PbmVTaWduYWxfRGV2aWNlSUQnO1xyXG5leHBvcnQgY29uc3Qgb25lU2lnbmFsQVBJID0ge1xyXG5cdHVwZGF0ZShJRCkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwgKyBgP29uZVNpZ25hbF9kZXZpY2VJZD0ke0lEfWApO1xyXG5cdH1cclxufTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jb25zdCB1cmwgPSBcIi9hcGkvQXJlYVwiO1xyXG5jbGFzcyBBcmVhQXBpIHtcclxuICAvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuICBnZXRBbGwgPSAocGFyYW1zKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUFyZWFbXT4+KHVybCwgeyBwYXJhbXMgfSk7XHJcblxyXG4gIC8vIFRow6ptIG3hu5tpIGRhdGFcclxuICBhZGQoZGF0YTogSUFyZWEpIHtcclxuICAgIHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcbiAgfVxyXG4gIC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcbiAgdXBkYXRlKGRhdGE6IElBcmVhKSB7XHJcbiAgICByZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcbiAgfVxyXG4gIC8vIFjDs2EgZGF0YVxyXG4gIGRlbGV0ZShkYXRhOiBJQXJlYSkge1xyXG4gICAgcmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFyZWFBcGkgPSBuZXcgQXJlYUFwaSgpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSdcclxuXHJcbmNsYXNzIEJyYW5jaEFwaSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhIGPDsyBwaMOibiB0cmFuZ1xyXG5cdGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUJyYW5jaFtdPj4oJy9hcGkvQnJhbmNoJywge1xyXG5cdFx0XHQvLyBwYXJhbXM6IGdldFBhcmFtcyh0b2RvQXBpKSxcclxuXHRcdFx0cGFyYW1zOiB0b2RvQXBpXHJcblx0XHR9KVxyXG5cclxuXHQvLyBM4bqleSBjaGkgdGnhur90IGRhdGEgdGhlbyBJRFxyXG5cdGdldEJ5SUQgPSAoaWQ6IG51bWJlcikgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElCcmFuY2g+PihgL2FwaS9CcmFuY2gvJHtpZH1gKVxyXG5cclxuXHQvLyBD4bqtcCBuaOG6rXQgdHLhuqFuZyB0aMOhaSDhuqluL2hp4buHblxyXG5cdGNoYW5nZVN0YXR1cyA9IChpZDogbnVtYmVyKSA9PiBpbnN0YW5jZS5wdXQ8SUFwaVJlc3VsdERhdGE8SUJyYW5jaFtdPj4oYC9hcGkvQnJhbmNoL0hpZGUvJHtpZH1gKVxyXG5cclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkID0gKGRhdGE6IElCcmFuY2gpID0+IGluc3RhbmNlLnBvc3QoJy9hcGkvQnJhbmNoJywgZGF0YSlcclxuXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQoJy9hcGkvQnJhbmNoJywgZGF0YSwge30pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBicmFuY2hBcGkgPSBuZXcgQnJhbmNoQXBpKClcclxuIiwiaW1wb3J0IHtpbnN0YW5jZX0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJztcclxuXHJcbmNsYXNzIENvbmZpZyB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhIGPDsyBwaMOibiB0cmFuZ1xyXG5cdGdldEFsbCA9IChwYXJhbXMpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUNvbmZpZ1tdPj4oJy9hcGkvQ29uZmlnJywge3BhcmFtc30pO1xyXG5cclxuXHQvLyBM4bqleSBjaGkgdGnhur90IGRhdGEgdGhlbyBJRFxyXG5cdGdldEJ5SUQgPSAoaWQ6IG51bWJlcikgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJQ29uZmlnPj4oYC9hcGkvQ29uZmlnLyR7aWR9YCk7XHJcblxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQgPSAoZGF0YSkgPT4gaW5zdGFuY2UucG9zdCgnL2FwaS9Db25maWcnLCBkYXRhKTtcclxuXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUgPSAoZGF0YSkgPT4gaW5zdGFuY2UucHV0KCcvYXBpL0NvbmZpZycsIGRhdGEpO1xyXG5cdC8vIFjDs2EgZGF0YVxyXG5cdGRlbGV0ZSA9IChkYXRhKSA9PiBpbnN0YW5jZS5wdXQoJy9hcGkvQ29uZmlnJywgZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWdBcGkgPSBuZXcgQ29uZmlnKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY29uc3QgdXJsID0gXCIvYXBpL0N1c3RvbWVyQ29uc3VsdGF0aW9uU3RhdHVzXCI7XHJcblxyXG5jbGFzcyBDb25zdWx0YXRpb25TdGF0dXNBcGkge1xyXG4gIGdldFBhZ2VkID0gKFBhcmFtczogYW55KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElDb25zdWx0YXRpb25TdGF0dXNbXT4+KHVybCwge1xyXG4gICAgICBwYXJhbXM6IFBhcmFtcyxcclxuICAgIH0pO1xyXG5cclxuICBnZXRBbGwgPSAoUGFyYW1zOiBhbnkpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUNvbnN1bHRhdGlvblN0YXR1c1tdPj4odXJsLCB7XHJcbiAgICAgIHBhcmFtczogUGFyYW1zLFxyXG4gICAgfSk7XHJcblxyXG4gIGdldERldGFpbCA9IChpZDogbnVtYmVyKSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElDb25zdWx0YXRpb25TdGF0dXM+PihgJHt1cmx9LyR7aWR9YCk7XHJcblxyXG4gIGFkZCA9IChkYXRhOiBJQ29uc3VsdGF0aW9uU3RhdHVzKSA9PiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblxyXG4gIHVwZGF0ZSA9IChkYXRhOiBJQ29uc3VsdGF0aW9uU3RhdHVzKSA9PiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhLCB7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb25zdWx0YXRpb25TdGF0dXNBcGkgPSBuZXcgQ29uc3VsdGF0aW9uU3RhdHVzQXBpKCk7XHJcbiIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL0NvbnRyYWN0Lyc7XHJcbmV4cG9ydCBjb25zdCBjb250cmFjdEFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElDb250cmFjdFtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtcyxcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFkZChkYXRhOiBJQ29udHJhY3QpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZShkYXRhOiBJQ29udHJhY3QpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIFjDs2EgZGF0YVxyXG5cdGRlbGV0ZShkYXRhOiBJQ29udHJhY3QpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSdcclxuXHJcbmNsYXNzIEN1cnJpY3VsdW1EZXRhaWxBcGkge1xyXG5cdGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUN1cnJpY3VsdW1EZXRhaWxbXT4+KCcvYXBpL0N1cnJpY3VsdW1EZXRhaWwvJywge1xyXG5cdFx0XHRwYXJhbXM6IHRvZG9BcGlcclxuXHRcdH0pXHJcblxyXG5cdGdldFdpdGhJRCA9IChJRDogbnVtYmVyKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdDxJQ3VycmljdWx1bURldGFpbFtdPj4oYC9hcGkvQ3VycmljdWx1bURldGFpbC8ke0lEfWApXHJcblxyXG5cdGFkZCA9IChkYXRhOiBJQ3VycmljdWx1bURldGFpbCkgPT4gaW5zdGFuY2UucG9zdCgnL2FwaS9DdXJyaWN1bHVtRGV0YWlsJywgZGF0YSwge30pXHJcblxyXG5cdGluc2VydCA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnBvc3QoJy9hcGkvQ3VycmljdWx1bURldGFpbC9pbnNlcnQnLCBkYXRhLCB7fSlcclxuXHJcblx0dXBkYXRlID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucHV0KCcvYXBpL0N1cnJpY3VsdW1EZXRhaWwvJywgZGF0YSwge30pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjdXJyaWN1bHVtRGV0YWlsQXBpID0gbmV3IEN1cnJpY3VsdW1EZXRhaWxBcGkoKVxyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSc7XHJcblxyXG5jbGFzcyBDdXJyaWN1bHVtQXBpIHtcclxuXHRnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElDdXJyaWN1bHVtW10+PignL2FwaS9DdXJyaWN1bHVtLycsIHtcclxuXHRcdFx0cGFyYW1zOiB0b2RvQXBpXHJcblx0XHR9KTtcclxuXHJcblx0Z2V0V2l0aElEID0gKElEOiBudW1iZXIpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0PElDdXJyaWN1bHVtW10+PihgL2FwaS9DdXJyaWN1bHVtLyR7SUR9YCk7XHJcblxyXG5cdGFkZCA9IChkYXRhOiBJQ3VycmljdWx1bSkgPT4gaW5zdGFuY2UucG9zdCgnL2FwaS9DdXJyaWN1bHVtJywgZGF0YSwge30pO1xyXG5cclxuXHRhZGRTdWJqZWN0ID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucG9zdCgnL2FwaS9VcGRhdGVBbGxTdWJqZWN0T2ZDdXJyaWN1bHVtJywgZGF0YSwge30pO1xyXG5cclxuXHR1cGRhdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQoJy9hcGkvQ3VycmljdWx1bS8nLCBkYXRhLCB7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjdXJyaWN1bHVtQXBpID0gbmV3IEN1cnJpY3VsdW1BcGkoKTtcclxuIiwiaW1wb3J0IHtpbnN0YW5jZX0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvRGF5T2ZmLyc7XHJcbmV4cG9ydCBjb25zdCBkYXlPZmZBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJRGF5T2ZmW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zLFxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkKGRhdGE6IElEYXlPZmYpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZShkYXRhOiBJRGF5T2ZmKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBYw7NhIGRhdGFcclxuXHRkZWxldGUoZGF0YTogSURheU9mZikge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcbn07XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJ1xyXG5cclxuY2xhc3MgRGlzY291bnRBcGkge1xyXG5cdGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SURpc2NvdW50W10+PignL2FwaS9EaXNjb3VudCcsIHtcclxuXHRcdFx0cGFyYW1zOiB0b2RvQXBpXHJcblx0XHR9KVxyXG5cclxuXHRnZXRTdWdnZXN0ID0gKElEOiBhbnkpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJRGlzY291bnRbXT4+KCcvYXBpL0Rpc2NvdW50L3N1Z2dlc3RfZGlzY291bnRfY29kZS8nICsgSUQpXHJcblxyXG5cdGFkZCA9IChkYXRhOiBJRGlzY291bnQpID0+IGluc3RhbmNlLnBvc3QoJy9hcGkvRGlzY291bnQnLCBkYXRhLCB7fSlcclxuXHJcblx0dXBkYXRlID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucHV0KCcvYXBpL0Rpc2NvdW50JywgZGF0YSwge30pXHJcblxyXG5cdGdldE9mU3R1ZGVudCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8YW55Pj4oJy9hcGkvRGlzY291bnRPZlN0dWRlbnQnLCB7XHJcblx0XHRcdHBhcmFtczogdG9kb0FwaVxyXG5cdFx0fSlcclxuXHJcblx0ZGlzY291bnRTdHVkZW50ID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxhbnk+PignL2FwaS9EaXNjb3VudFN0dWRlbnQnLCB7XHJcblx0XHRcdHBhcmFtczogdG9kb0FwaVxyXG5cdFx0fSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRpc2NvdW50QXBpID0gbmV3IERpc2NvdW50QXBpKClcclxuIiwiaW1wb3J0IHtpbnN0YW5jZX0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL0Rpc3RyaWN0JztcclxuY2xhc3MgRGlzdHJpY3RBcGkge1xyXG5cdGdldEFsbCA9IChwYXJhbXMpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJRGlzdHJpY3RbXT4+KHVybCwge3BhcmFtc30pO1xyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQoZGF0YTogSURpc3RyaWN0KSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG5cdH1cclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZShkYXRhOiBJRGlzdHJpY3QpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9XHJcblx0Ly8gWMOzYSBkYXRhXHJcblx0ZGVsZXRlKGRhdGE6IElEaXN0cmljdCkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0Ly8gICBwb3N0ID0gKGRhdGE6IElCcmFuY2gpID0+IGluc3RhbmNlLnBvc3QoXCIvYXBpL0JyYW5jaC9JbnNlcnRCcmFuY2hcIiwgZGF0YSk7XHJcblx0Z2V0QnlBcmVhID0gKGFyZWFJRDogbnVtYmVyKSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElEaXN0cmljdFtdPj4oJy9hcGkvRGlzdHJpY3QnLCB7XHJcblx0XHRcdHBhcmFtczoge1xyXG5cdFx0XHRcdEFyZWFJRDogYXJlYUlELFxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblxyXG5cdC8vICAgcG9zdCA9IChkYXRhOiBJQnJhbmNoKSA9PiBpbnN0YW5jZS5wb3N0KFwiL2FwaS9CcmFuY2gvSW5zZXJ0QnJhbmNoXCIsIGRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGlzdHJpY3RBcGkgPSBuZXcgRGlzdHJpY3RBcGkoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jbGFzcyBHcmFkZUFwaSB7XHJcbiAgZ2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJR3JhZGVbXT4+KFwiL2FwaS9HcmFkZS9cIiwge1xyXG4gICAgICBwYXJhbXM6IHRvZG9BcGksXHJcbiAgICB9KTtcclxuXHJcbiAgZ2V0V2l0aElEID0gKElEOiBudW1iZXIpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdDxJR3JhZGVbXT4+KGAvYXBpL0dyYWRlLyR7SUR9YCk7XHJcblxyXG4gIGFkZCA9IChkYXRhOiBJR3JhZGUpID0+IGluc3RhbmNlLnBvc3QoXCIvYXBpL0dyYWRlXCIsIGRhdGEsIHt9KTtcclxuXHJcbiAgdXBkYXRlID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucHV0KFwiL2FwaS9HcmFkZS9cIiwgZGF0YSwge30pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ3JhZGVBcGkgPSBuZXcgR3JhZGVBcGkoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jb25zdCB1cmwgPSBcIi9hcGkvSWRpb21zXCI7XHJcbmNsYXNzIElkaW9tc0FwaSB7XHJcbiAgZ2V0UGFnZWQgPSAoUGFyYW1zOiBhbnkpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUlkaW9tc1tdPj4odXJsLCB7XHJcbiAgICAgIHBhcmFtczogUGFyYW1zLFxyXG4gICAgfSk7XHJcblxyXG4gIGdldERldGFpbCA9IChpZDogbnVtYmVyKSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElJZGlvbXM+PihgJHt1cmx9LyR7aWR9YCk7XHJcblxyXG4gIGFkZCA9IChkYXRhOiBJSWRpb21zKSA9PiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblxyXG4gIHVwZGF0ZSA9IChkYXRhOiBJSWRpb21zKSA9PiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhLCB7fSk7XHJcbiAgZ2V0UmFuZG9tID0gKCkgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElJZGlvbXM+PihgJHt1cmx9L2dldFJhbmRvbXNgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaWRpb21zQXBpID0gbmV3IElkaW9tc0FwaSgpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNsYXNzIEpvYkFwaSB7XHJcbiAgZ2V0QWxsID0gKGpvYlBhcmFtczogYW55KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElKb2JbXT4+KFwiL2FwaS9Kb2JcIiwge1xyXG4gICAgICBwYXJhbXM6IGpvYlBhcmFtcyxcclxuICAgIH0pO1xyXG5cclxuICBnZXREZXRhaWwgPSAoaWQ6IG51bWJlcikgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHQ8SUpvYj4+KGAvYXBpL0pvYi8ke2lkfWApO1xyXG5cclxuICBhZGQgPSAoZGF0YTogSUpvYikgPT4gaW5zdGFuY2UucG9zdChcIi9hcGkvSm9iXCIsIGRhdGEpO1xyXG5cclxuICB1cGRhdGUgPSAoZGF0YTogSUpvYikgPT4gaW5zdGFuY2UucHV0KFwiL2FwaS9Kb2JcIiwgZGF0YSwge30pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgam9iQXBpID0gbmV3IEpvYkFwaSgpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSdcclxuXHJcbmNsYXNzIE5vdGlmaWNhdGlvbiB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJTm90aWZpY2F0aW9uW10+PignL2FwaS9Ob3RpZmljYXRpb25zJywge1xyXG5cdFx0XHRwYXJhbXM6IHRvZG9BcGlcclxuXHRcdH0pXHJcblxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQgPSAoZGF0YSkgPT4gaW5zdGFuY2UucG9zdCgnL2FwaS9Ob3RpZmljYXRpb25zJywgZGF0YSlcclxuXHJcblx0Ly8gTOG6pXkgZGF0YSB3aXRoIHVzZXJcclxuXHRnZXRBbGxXaXRoVXNlciA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE+KCcvYXBpL05vdGlmaWNhdGlvblVzZXInLCB7XHJcblx0XHRcdHBhcmFtczogdG9kb0FwaVxyXG5cdFx0fSlcclxuXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGEgxJHDoyB4ZW1cclxuXHR1cGRhdGVTZWVuID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucHV0KCcvYXBpL05vdGlmaWNhdGlvblVzZXInLCBkYXRhLCB7fSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG5vdGlmaWNhdGlvbkFwaSA9IG5ldyBOb3RpZmljYXRpb24oKVxyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9QcmljZUZpeEV4YW0nO1xyXG5cclxuY2xhc3MgUHJpY2VGaXhFeGFtQXBpIHtcclxuXHRnZXRBbGwgPSAoUGFyYW1zOiBhbnkpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVByaWNlRml4RXhhbVtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtczogUGFyYW1zXHJcblx0XHR9KTtcclxuXHJcblx0Ly8gICBnZXREZXRhaWwgPSAoaWQ6IG51bWJlcikgPT5cclxuXHQvLyAgICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElQYXltZW50TWV0aG9kPj4oYCR7dXJsfS8ke2lkfWApO1xyXG5cclxuXHRhZGQgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblxyXG5cdHVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dCh1cmwsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByaWNlRml4RXhhbUFwaSA9IG5ldyBQcmljZUZpeEV4YW1BcGkoKTtcclxuIiwiaW1wb3J0IHtpbnN0YW5jZX0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvUG9pbnRDb2x1bW4vJztcclxuZXhwb3J0IGNvbnN0IHByb2dyYW1EZXRhaWxQb2ludENvbHVtbkFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElQcm9ncmFtRGV0YWlsUG9pbnRDb2x1bW5bXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXMsXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQoZGF0YTogSVByb2dyYW1EZXRhaWxQb2ludENvbHVtbikge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlKGRhdGE6IElQcm9ncmFtRGV0YWlsUG9pbnRDb2x1bW4pIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0ZGVsZXRlKGRhdGE6IElQcm9ncmFtRGV0YWlsUG9pbnRDb2x1bW4pIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNsYXNzIFByb2dyYW1BcGkge1xyXG4gIGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVByb2dyYW1bXT4+KFwiL2FwaS9Qcm9ncmFtXCIsIHtcclxuICAgICAgcGFyYW1zOiB0b2RvQXBpLFxyXG4gICAgfSk7XHJcblxyXG4gIGdldFdpdGhJRCA9IChJRDogbnVtYmVyKSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHQ8SUdyYWRlW10+PihgL2FwaS9Qcm9ncmFtLyR7SUR9YCk7XHJcblxyXG4gIGFkZCA9IChkYXRhOiBJUHJvZ3JhbSkgPT4gaW5zdGFuY2UucG9zdChcIi9hcGkvUHJvZ3JhbVwiLCBkYXRhLCB7fSk7XHJcblxyXG4gIHVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dChcIi9hcGkvUHJvZ3JhbVwiLCBkYXRhLCB7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9ncmFtQXBpID0gbmV3IFByb2dyYW1BcGkoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jbGFzcyBQdXJvc2Uge1xyXG4gICAgLy8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcbiAgICBnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElQdXJwb3NlW10+PihcIi9hcGkvUHVycG9zZXNcIiwge1xyXG4gICAgICAgIHBhcmFtczogdG9kb0FwaSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFRow6ptIG3hu5tpIGRhdGFcclxuICAgIGFkZCA9ICggZGF0YTogSVB1cnBvc2UgKSA9PiBpbnN0YW5jZS5wb3N0KFwiL2FwaS9QdXJwb3Nlc1wiLCBkYXRhKTtcclxuXHJcbiAgICAvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG4gICAgdXBkYXRlID0gKCBkYXRhOiBhbnkgKSA9PiBpbnN0YW5jZS5wdXQoXCIvYXBpL1B1cnBvc2VzXCIsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHB1cm9zZUFwaSA9IG5ldyBQdXJvc2UoKTsiLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNsYXNzIFJvb21BcGkge1xyXG4gIC8vIEzhuqV5IHThuqV0IGPhuqNcclxuICBnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElSb29tW10+PihcIi9hcGkvUm9vbS9cIiwge1xyXG4gICAgICBwYXJhbXM6IHRvZG9BcGksXHJcbiAgICB9KTtcclxuXHJcbiAgLy8gR2V0IGJ5IElEXHJcbiAgZ2V0QnlJZCA9IChpZDogYW55KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElSb29tW10+PihgL2FwaS9Sb29tLyR7aWR9YCk7XHJcblxyXG4gIC8vIFVwZGF0ZSBkYXRhXHJcbiAgdXBkYXRlID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucHV0KFwiL2FwaS9Sb29tXCIsIGRhdGEpO1xyXG5cclxuICAvLyBBZGQgZGF0YVxyXG4gIGFkZCA9IChkYXRhOiBJUm9vbSkgPT4gaW5zdGFuY2UucG9zdChcIi9hcGkvUm9vbS9cIiwgZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByb29tQXBpID0gbmV3IFJvb21BcGkoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnXHJcblxyXG5jbGFzcyBSdWxlcyB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsID0gKHBhcmFtcykgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJUnVsZXNbXT4+KCcvYXBpL1J1bGVzJywge1xyXG5cdFx0XHRwYXJhbXNcclxuXHRcdH0pXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQoJy9hcGkvUnVsZXMnLCBkYXRhLCB7fSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJ1bGVzQXBpID0gbmV3IFJ1bGVzKClcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jbGFzcyBTZXJ2aWNlQXBpIHtcclxuICAgIC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG4gICAgZ2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuICAgICAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVNlcnZpY2VbXT4+KFwiL2FwaS9TZXJ2aWNlc1wiLCB7XHJcbiAgICAgICAgICAgIHBhcmFtczogdG9kb0FwaSxcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgLy8gVGjDqm0gbeG7m2kgZGF0YVxyXG4gICAgYWRkID0gKGRhdGE6IElTZXJ2aWNlKSA9PiBpbnN0YW5jZS5wb3N0KFwiL2FwaS9TZXJ2aWNlc1wiLCBkYXRhLCB7fSk7XHJcblxyXG4gICAgLy8gQ+G6rXAgbmjhuq10IGRhdGEgXHJcbiAgICB1cGRhdGUgPSAoIGRhdGE6IGFueSApID0+IGluc3RhbmNlLnB1dChcIi9hcGkvU2VydmljZXNcIiwgZGF0YSwge30pOyBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlcnZpY2VBcGkgPSBuZXcgU2VydmljZUFwaSgpOyIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY2xhc3MgU291cmNlSW5mb21hdGlvbiB7XHJcbiAgICAvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuICAgIGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVNvdXJjZUluZm9tYXRpb25bXT4+KFwiL2FwaS9Tb3VyY2VJbmZvcm1hdGlvblwiLCB7XHJcbiAgICAgICAgcGFyYW1zOiB0b2RvQXBpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVGjDqm0gbeG7m2kgZGF0YVxyXG4gICAgYWRkID0gKCBkYXRhOiBJU291cmNlSW5mb21hdGlvbiApID0+IGluc3RhbmNlLnBvc3QoXCIvYXBpL1NvdXJjZUluZm9ybWF0aW9uXCIsIGRhdGEpO1xyXG5cclxuICAgIC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcbiAgICB1cGRhdGUgPSAoIGRhdGE6IGFueSApID0+IGluc3RhbmNlLnB1dChcIi9hcGkvU291cmNlSW5mb3JtYXRpb25cIiwgZGF0YSwge30pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc291cmNlSW5mb21hdGlvbkFwaSA9IG5ldyBTb3VyY2VJbmZvbWF0aW9uKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJ1xyXG5cclxuY2xhc3MgU3RhZmZTYWxhcnkge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVN0YWZmU2FsYXJ5W10+PignL2FwaS9TYWxhcnknLCB7XHJcblx0XHRcdHBhcmFtczogdG9kb0FwaVxyXG5cdFx0fSlcclxuXHJcblx0Ly8gTOG6pXkgZMOidCB0aGVvIGlkXHJcblxyXG5cdGdldEJ5SUQgPSAoaWQ6IG51bWJlcikgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdGFmZlNhbGFyeVtdPj4oYC9hcGkvU2FsYXJ5LyR7aWR9YClcclxuXHJcblx0Z2V0SGlzdG9yeSA9IChpZDogbnVtYmVyKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVN0YWZmU2FsYXJ5SGlzdG9yeVtdPj4oYC9hcGkvc2FsYXJ5L2hpc3RvcnkvJHtpZH1gKVxyXG5cclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkID0gKGRhdGE6IElTdGFmZlNhbGFyeSkgPT4gaW5zdGFuY2UucG9zdCgnL2FwaS9TYWxhcnknLCBkYXRhKVxyXG5cclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhIG5vIHR5cGVcclxuXHRhZGREYXRhID0gKGRhdGEpID0+IGluc3RhbmNlLnBvc3QoJy9hcGkvU2FsYXJ5JywgZGF0YSlcclxuXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQoJy9hcGkvU2FsYXJ5JywgZGF0YSwge30pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzdGFmZlNhbGFyeUFwaSA9IG5ldyBTdGFmZlNhbGFyeSgpXHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY2xhc3MgU3R1ZHlUaW1lQXBpIHtcclxuICBnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdHVkeVRpbWVbXT4+KFwiL2FwaS9TdHVkeVRpbWVcIiwge1xyXG4gICAgICBwYXJhbXM6IHRvZG9BcGksXHJcbiAgICB9KTtcclxuXHJcbiAgZ2V0V2l0aElEID0gKElEOiBudW1iZXIpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdDxJU3R1ZHlUaW1lW10+PihgL2FwaS9TdHVkeVRpbWUvJHtJRH1gKTtcclxuXHJcbiAgYWRkID0gKGRhdGE6IElTdHVkeVRpbWUpID0+IGluc3RhbmNlLnBvc3QoXCIvYXBpL1N0dWR5VGltZVwiLCBkYXRhLCB7fSk7XHJcblxyXG4gIHVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dChcIi9hcGkvU3R1ZHlUaW1lXCIsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN0dWR5VGltZUFwaSA9IG5ldyBTdHVkeVRpbWVBcGkoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jbGFzcyBTdWJqZWN0QXBpIHtcclxuICBnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdWJqZWN0W10+PihcIi9hcGkvU3ViamVjdC9cIiwge1xyXG4gICAgICBwYXJhbXM6IHRvZG9BcGksXHJcbiAgICB9KTtcclxuXHJcbiAgZ2V0V2l0aElEID0gKElEOiBudW1iZXIpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVN1YmplY3Q+PihgL2FwaS9TdWJqZWN0LyR7SUR9YCk7XHJcblxyXG4gIGFkZCA9IChkYXRhOiBJU3ViamVjdCkgPT4gaW5zdGFuY2UucG9zdChcIi9hcGkvU3ViamVjdFwiLCBkYXRhLCB7fSk7XHJcblxyXG4gIHVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dChcIi9hcGkvU3ViamVjdC9cIiwgZGF0YSwge30pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3ViamVjdEFwaSA9IG5ldyBTdWJqZWN0QXBpKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY2xhc3MgU3VwcGxpZXIge1xyXG4gICAgLy8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcbiAgICBnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdXBwbGllcltdPj4oXCIvYXBpL1N1cHBsaWVyU2VydmljZXNcIiwge1xyXG4gICAgICAgIHBhcmFtczogdG9kb0FwaSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFRow6ptIG3hu5tpIGRhdGFcclxuICAgIGFkZCA9ICggZGF0YTogSVN1cHBsaWVyICkgPT4gaW5zdGFuY2UucG9zdChcIi9hcGkvU3VwcGxpZXJTZXJ2aWNlc1wiLCBkYXRhKTtcclxuXHJcbiAgICAvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG4gICAgdXBkYXRlID0gKCBkYXRhOiBhbnkgKSA9PiBpbnN0YW5jZS5wdXQoXCIvYXBpL1N1cHBsaWVyU2VydmljZXNcIiwgZGF0YSwge30pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3VwcGxpZXJBcGkgPSBuZXcgU3VwcGxpZXIoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnO1xyXG5cclxuY2xhc3MgVXNlckluZm9ybWF0aW9uIHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGxQYXJhbXMgPSAocGFyYW1zKSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElVc2VyaW5mb3JtYXRpb25bXT4+KCcvYXBpL1VzZXJJbmZvcm1hdGlvbicsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KTtcclxuXHRnZXRBbGwgPSAoKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVVzZXJpbmZvcm1hdGlvbltdPj4oJy9hcGkvVXNlckluZm9ybWF0aW9uJyk7XHJcblxyXG5cdC8vIEzhuqV5IGNoaSB0aeG6v3QgZGF0YSB0aGVvIElEXHJcblx0Z2V0QnlJRCA9IChpZDogbnVtYmVyKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVN0YWZmU2FsYXJ5W10+PihgL2FwaS9Vc2VySW5mb3JtYXRpb24vJHtpZH1gKTtcclxuXHJcblx0Ly8gTOG6pXkgdGhlbyByb2xlXHJcblx0Z2V0QWxsUm9sZSA9IChyb2xlKSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElVc2VyaW5mb3JtYXRpb25bXT4+KCcvYXBpL1VzZXJJbmZvcm1hdGlvbicsIHtcclxuXHRcdFx0cGFyYW1zOiB7XHJcblx0XHRcdFx0Um9sZUlEOiByb2xlXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdGdldFJvbGUgPSAocm9sZVR5cGUpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVJvbGVbXT4+KCcvYXBpL0dldFJvbGUnLCB7XHJcblx0XHRcdHBhcmFtczoge1xyXG5cdFx0XHRcdHN0eWxlOiByb2xlVHlwZSAvLyAwIGzhuqV5IHThuqV0IGPhuqMsIDEgbOG6pXkgbmjDom4gdmnDqm5cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0Z2V0TmFtZSA9IChwYXJhbXMpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVXNlcmluZm9ybWF0aW9uW10+PignL2FwaS9TdGFmZicsIHsgcGFyYW1zOiBwYXJhbXMgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VySW5mb3JtYXRpb25BcGkgPSBuZXcgVXNlckluZm9ybWF0aW9uKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY29uc3QgdXJsID0gXCIvYXBpL1dhcmRcIjtcclxuY2xhc3MgV2FyZEFwaSB7XHJcbiAgLy8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcbiAgZ2V0QWxsID0gKHBhcmFtcykgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElXYXJkW10+Pih1cmwsIHsgcGFyYW1zIH0pO1xyXG5cclxuICAvLyBUaMOqbSBt4bubaSBkYXRhXHJcbiAgYWRkKGRhdGE6IElXYXJkKSB7XHJcbiAgICByZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG4gIH1cclxuICAvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG4gIHVwZGF0ZShkYXRhOiBJV2FyZCkge1xyXG4gICAgcmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG4gIH1cclxuICAvLyBYw7NhIGRhdGFcclxuICBkZWxldGUoZGF0YTogSVdhcmQpIHtcclxuICAgIHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB3YXJkQXBpID0gbmV3IFdhcmRBcGkoKTtcclxuIiwiaW1wb3J0IHtpbnN0YW5jZX0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvU2V0UGFja2FnZVRlYWNoZXIvJztcclxuZXhwb3J0IGNvbnN0IHBhY2thZ2VFeGFtaW5lckFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElQYWNrYWdlRXhhbWluZXJbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXMsXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIEzhuqV5IHRoZW8gSURcclxuXHRnZXRCeUlEKElEKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElQYWNrYWdlRXhhbWluZXI+PihgJHt1cmx9JHtJRH1gKTtcclxuXHR9LFxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIFjDs2EgZGF0YVxyXG5cdGRlbGV0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxufTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvU2V0UGFja2FnZVJlc3VsdCc7XHJcblxyXG5jbGFzcyBQYWNrYWdlUmVzdWx0QXBpIHtcclxuXHRnZXRBbGwgPSAoUGFyYW1zOiBhbnkpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVNldFBhY2thZ2VSZXN1bHRbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXM6IFBhcmFtc1xyXG5cdFx0fSk7XHJcblxyXG5cdGdldEFsbFN0dWRlbnQgPSAoUGFyYW1zOiBhbnkpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8YW55Pj4oJy9hcGkvU2V0UGFja2FnZVJlc3VsdEdldFN0dWRlbnRFeGlzdFJlc3VsdCcsIHtcclxuXHRcdFx0cGFyYW1zOiBQYXJhbXNcclxuXHRcdH0pO1xyXG5cclxuXHRnZXREZXRhaWwgPSAoaWQ6IG51bWJlcikgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTZXRQYWNrYWdlUmVzdWx0Pj4oYCR7dXJsfS8ke2lkfWApO1xyXG5cclxuXHRhZGQgPSAoZGF0YTogSVNldFBhY2thZ2VSZXN1bHQpID0+IGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuXHJcblx0dXBkYXRlID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSwge30pO1xyXG5cclxuXHQvLyB04buxIMSR4buZbmcgY2hpYSDEkeG7gXUgZ2nDoW8gdmnDqm4gY2jhuqVtIGLDoGlcclxuXHJcblx0dXBkYXRlVGVhY2hlciA9ICgpID0+IGluc3RhbmNlLnB1dCgnL2FwaS9VcGRhdGVUZWFjaGVyT2ZTZXRQYWNrYWdlUmVzdWx0Jyk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwYWNrYWdlUmVzdWx0QXBpID0gbmV3IFBhY2thZ2VSZXN1bHRBcGkoKTtcclxuIiwiaW1wb3J0IHtpbnN0YW5jZX0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvU2V0UGFja2FnZVN0dWRlbnQvJztcclxuZXhwb3J0IGNvbnN0IHBhY2thZ2VTdHVkZW50QXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVBhY2thZ2VTdHVkZW50W10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zLFxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyBM4bqleSB0aGVvIElEXHJcblx0Z2V0QnlJRChJRCkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJUGFja2FnZVN0dWRlbnQ+PihgJHt1cmx9JHtJRH1gKTtcclxuXHR9LFxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIFjDs2EgZGF0YVxyXG5cdGRlbGV0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxufTtcclxuIiwiaW1wb3J0IHtpbnN0YW5jZX0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvU2V0UGFja2FnZS8nO1xyXG5leHBvcnQgY29uc3QgcGFja2FnZUFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElQYWNrYWdlW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zLFxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyBM4bqleSB0aGVvIElEXHJcblx0Z2V0QnlJRChJRCkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJUGFja2FnZT4+KGAke3VybH0ke0lEfWApO1xyXG5cdH0sXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFkZChkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gWMOzYSBkYXRhXHJcblx0ZGVsZXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIFjDs2EgZGF0YVxyXG5cdHVwbG9hZEltZyhkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCgnYXBpL1NldFBhY2thZ2VVcExvYWQnLCBkYXRhKTtcclxuXHR9LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1BheUZpeEV4YW0vJztcclxuZXhwb3J0IGNvbnN0IHBheUZpeEV4YW1BcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJUGF5Rml4RXhhbVtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtc1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyBM4bqleSB0aGVvIElEXHJcblx0Z2V0QnlJRChJRCkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJUGF5Rml4RXhhbT4+KGAke3VybH0ke0lEfWApO1xyXG5cdH0sXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFkZChkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gWMOzYSBkYXRhXHJcblx0ZGVsZXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9XHJcbn07XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvU3R1ZGVuRml4RXhhbSc7XHJcbmV4cG9ydCBjb25zdCBwYXlGaXhMaXN0QXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVBheUZpeExpc3RbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXNcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8gTOG6pXkgdGhlbyBJRFxyXG5cdGdldEJ5SUQoSUQpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVBheUZpeExpc3Q+PihgJHt1cmx9JHtJRH1gKTtcclxuXHR9LFxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIFjDs2EgZGF0YVxyXG5cdGRlbGV0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fVxyXG59O1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNvbnN0IHVybCA9IFwiL2FwaS9SZXNldFBhc3N3b3JkL1NlbmRNYWlsXCI7XHJcbmV4cG9ydCBjb25zdCByZXNldFBhc3N3b3JkQXBpID0ge1xyXG4gIC8vIEfhu61pIGVtYWlsXHJcbiAgc2VuZEVtYWlsKGRhdGEpIHtcclxuICAgIHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcbiAgfSxcclxuXHJcbiAgLy8gWMOhYyBuaOG6rW5cclxuICBjb25maXJtKGRhdGEpIHtcclxuICAgIHJldHVybiBpbnN0YW5jZS5wdXQoXCIvYXBpL1Jlc2V0UGFzc3dvcmQvVXBkYXRlUGFzc1wiLCBcIlwiLCB7XHJcbiAgICAgIHBhcmFtczogZGF0YSxcclxuICAgIH0pO1xyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1NhbGVDYW1wYWlnbkRldGFpbC8nO1xyXG5leHBvcnQgY29uc3Qgc2FsZUNhbXBhaWduRGV0YWlsQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVNhbGVDYW1wYWlnbkRldGFpbFtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtcyxcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8gTOG6pXkgdGhlbyBJRFxyXG5cdGdldEJ5SUQoSUQpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVNhbGVDYW1wYWlnbkRldGFpbD4+KGAke3VybH0ke0lEfWApO1xyXG5cdH0sXHJcbn07XHJcbiIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1NhbGVDYW1wYWlnbi8nO1xyXG5leHBvcnQgY29uc3Qgc2FsZUNhbXBhaWduQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVNhbGVDYW1wYWlnbltdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtcyxcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8gTOG6pXkgdGhlbyBJRFxyXG5cdGdldEJ5SUQoSUQpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVNhbGVDYW1wYWlnbj4+KGAke3VybH0ke0lEfWApO1xyXG5cdH0sXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFkZChkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gWMOzYSBkYXRhXHJcblx0ZGVsZXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG59O1xyXG4iLCJpbXBvcnQge2luc3RhbmNlfSBmcm9tICcuLi9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9TYWxlU2FsYXJ5Lyc7XHJcbmV4cG9ydCBjb25zdCBzYWxlU2FsYXJ5QXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVNhbGVTYWxhcnlbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXMsXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIEzhuqV5IHRoZW8gSURcclxuXHRnZXRCeUlEKElEKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTYWxlU2FsYXJ5Pj4oYCR7dXJsfSR7SUR9YCk7XHJcblx0fSxcclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxufTtcclxuIiwiaW1wb3J0IHtpbnN0YW5jZX0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvU2FsZUNhbXBhaWduUmV2ZW51ZS8nO1xyXG5leHBvcnQgY29uc3Qgc2FsZXJSZXZlbnVlQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVNhbGVyUmV2ZW51ZVtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtcyxcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8gTOG6pXkgdGhlbyBJRFxyXG5cdGdldEJ5SUQoSUQpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVNhbGVyUmV2ZW51ZT4+KGAke3VybH0ke0lEfWApO1xyXG5cdH0sXHJcbn07XHJcbiIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL0NvdW5zZWxvcnNSZXZlbnVlLyc7XHJcbmV4cG9ydCBjb25zdCBzYWxlclRvdGFsUmV2ZW51ZUFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTYWxlclRvdGFsUmV2ZW51ZVtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtcyxcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8gTOG6pXkgdGhlbyBJRFxyXG5cdGdldEJ5SUQoSUQpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVNhbGVyVG90YWxSZXZlbnVlPj4oYCR7dXJsfSR7SUR9YCk7XHJcblx0fSxcclxufTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICcuLi9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnYXBpL0NvdXJzZVNjaGVkdWxlT2ZCcmFuY2gnO1xyXG5leHBvcnQgY29uc3QgY2hlY2tCcmFuY2hTY2hlZHVsZVN0dWR5ID0ge1xyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUNoZWNrQnJhbmNoU2NoZWR1bGVTdHVkeURhdGFbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXNcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuIiwiaW1wb3J0IHtpbnN0YW5jZX0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJ2FwaS9TY2hlZHVsZUJ5TXVsdGlwbGVUZWFjaGVyLyc7XHJcbmV4cG9ydCBjb25zdCBjaGVja1RlYWNoZXJTY2hlZHVsZVN0dWR5ID0ge1xyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUNoZWNrVGVhY2hlclNjaGVkdWxlU3R1ZHlbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXMsXHJcblx0XHR9KTtcclxuXHR9LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbnR5cGUgU2NoZWR1bGVTZWxmQ291cnNlUmVzdWx0PFQgPSBhbnk+ID0ge1xyXG5cdGNvdXJzZVNjaGVkdWxlc0FycmFuZ2VkOiBUO1xyXG5cdGNvdXJzZVNjaGVkdWxlc0luYXJyYW5nZWQ6IFQ7XHJcblx0bWVzc2FnZTogc3RyaW5nO1xyXG59O1xyXG5leHBvcnQgY29uc3QgY3JlYXRlU2VsZkNvdXJzZSA9IChkYXRhOiBJU0NQb3N0KSA9PiBpbnN0YW5jZS5wb3N0PElBcGlSZXN1bHREYXRhPElTY2hlZHVsZVpvb21EZXRhaWw+PignL2FwaS9DcmVhdGVDb3Vyc2UxdnMxLycsIGRhdGEpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNjaGVkdWxlU2VsZkNvdXJzZSA9IChpZDogbnVtYmVyKSA9PlxyXG5cdGluc3RhbmNlLmdldDxTY2hlZHVsZVNlbGZDb3Vyc2VSZXN1bHQ8SVNDU2NoZWR1bGVbXT4+KGAvYXBpL2NvdXJzZU5vdFNjaGVkdWxlWWV0LyR7aWR9YCk7XHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tTdHVkeVRpbWVTZWxmQ291cnNlID0gKGRhdGE6IE9taXQ8SVNDQ2hlY2tUZWFjaGVyLCAnc3R1ZHlUaW1lSUQnPikgPT5cclxuXHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVN0dWR5VGltZVtdPj4oXHJcblx0XHRgL2FwaS9HZXRTdHVkeVRpbWVCeURhdGVBbmRTdHVkZW50SUQ/ZGF0ZT0ke2RhdGEuZGF0ZX0mY3VycmljdWx1bXNEZXRhaWxJRD0ke2RhdGEuY3VycmljdWx1bXNEZXRhaWxJRH1gXHJcblx0KTtcclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja1RlYWNoZXJTZWxmQ291cnNlID0gKGRhdGE6IElTQ0NoZWNrVGVhY2hlcikgPT5cclxuXHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVVzZXJbXT4+KFxyXG5cdFx0YC9hcGkvR2V0VGVhY2hlckJ5RGF0ZUFuZFN0dWR5VGltZUFuZEN1cnJpY3VsdW1EZXRhaWw/ZGF0ZT0ke2RhdGEuZGF0ZX0mY3VycmljdWx1bXNEZXRhaWxJRD0ke2RhdGEuY3VycmljdWx1bXNEZXRhaWxJRH0mc3R1ZHlUaW1lSUQ9JHtkYXRhLnN0dWR5VGltZUlEfWBcclxuXHQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNjaGVkdWxlU2VsZkNvdXJzZSA9IChkYXRhOiBJQ1NTY2hlZHVsZVRvU2F2ZSkgPT4gaW5zdGFuY2UucHV0PElBcGlSZXN1bHREYXRhPignL2FwaS9VcGRhdGVDb3Vyc2VTY2hlZHVsZScsIGRhdGEpO1xyXG5leHBvcnQgY29uc3QgY2FuY2VsU2NoZWR1bGVTZWxmQ291cnNlID0gKGlkOiBudW1iZXIpID0+IGluc3RhbmNlLnB1dDxJQXBpUmVzdWx0RGF0YT4oYC9hcGkvUmVtb3ZlQ291cnNlU2NoZWR1bGUvJHtpZH1gKTtcclxuZXhwb3J0IGNvbnN0IGdldFJhbmdlVGltZVNlbGZDb3Vyc2UgPSAoKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE+KCcvYXBpL1RpbWVCb29rJyk7XHJcbmV4cG9ydCBjb25zdCBzZXRSYW5nZVRpbWVTZWxmQ291cnNlID0gKGRhdGE6IElTQ1RpbWUpID0+IGluc3RhbmNlLnB1dDxJQXBpUmVzdWx0RGF0YT4oJy9hcGkvVGltZUJvb2snLCBkYXRhKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvU3RhZmYnO1xyXG5jbGFzcyBTdGFmZkFwaSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsID0gKHBhcmFtcykgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdGFmZltdPj4odXJsLCB7IHBhcmFtcyB9KTtcclxuXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFkZChkYXRhOiBJU3RhZmYpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblx0fVxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlKGRhdGE6IGFueSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH1cclxuXHQvLyBYw7NhIGRhdGFcclxuXHRkZWxldGUoZGF0YTogSVN0YWZmKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3RhZmZBcGkgPSBuZXcgU3RhZmZBcGkoKTtcclxuIiwiaW1wb3J0IHtpbnN0YW5jZX0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvVGFza0dyb3VwLyc7XHJcbmV4cG9ydCBjb25zdCB0YXNrR3JvdXBBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVGFza0dyb3VwW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zLFxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyBUaMOqbVxyXG5cdGFkZChkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gQ+G6rXAgbmjhuq10XHJcblx0dXBkYXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIFjDs2FcclxuXHRkZWxldGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcbn07XHJcblxyXG5jb25zdCB1cmwyID0gJy9hcGkvVGFzay8nO1xyXG5leHBvcnQgY29uc3QgdGFza0FwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPih1cmwyLCB7XHJcblx0XHRcdHBhcmFtcyxcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8gVGjDqm1cclxuXHRhZGQoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsMiwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBD4bqtcCBuaOG6rXRcclxuXHR1cGRhdGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwyLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIFjDs2FcclxuXHRkZWxldGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwyLCBkYXRhKTtcclxuXHR9LFxyXG59O1xyXG5cclxuY29uc3QgdXJsMyA9ICcvYXBpL1N0YWZmT2ZUYXNrR3JvdXAvJztcclxuZXhwb3J0IGNvbnN0IHN0YWZmT2ZUYXNrR3JvdXBBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YT4odXJsMywge1xyXG5cdFx0XHRwYXJhbXMsXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIFRow6ptXHJcblx0YWRkKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybDMsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gQ+G6rXAgbmjhuq10XHJcblx0dXBkYXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsMywgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBYw7NhXHJcblx0ZGVsZXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsMywgZGF0YSk7XHJcblx0fSxcclxufTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvU3R1ZHlSb3V0ZSc7XHJcblxyXG5jbGFzcyBTdHVkeVJvbGVBcGkge1xyXG5cdGdldEFsbCA9IChQYXJhbXM6IGFueSkgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU3R1ZHlSb2xlW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zOiBQYXJhbXNcclxuXHRcdH0pO1xyXG5cclxuXHRnZXREZXRhaWwgPSAoaWQ6IG51bWJlcikgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdHVkeVJvbGU+PihgJHt1cmx9LyR7aWR9YCk7XHJcblxyXG5cdGFkZCA9IChkYXRhOiBJU3R1ZHlSb2xlKSA9PiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblxyXG5cdHVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dCh1cmwsIGRhdGEsIHt9KTtcclxuXHJcblx0Y2hhbmdlUG9zaXRpb24gPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQoYC9hcGkvU3R1ZHlSb3V0ZUNoYW5nZVBsYWNlc2AsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN0dWR5Um9sZUFwaSA9IG5ldyBTdHVkeVJvbGVBcGkoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnXHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9UZWFjaGVyLydcclxuZXhwb3J0IGNvbnN0IHRlYWNoZXJBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVGVhY2hlcltdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtc1xyXG5cdFx0fSlcclxuXHR9LFxyXG5cdC8vIEzhuqV5IHRoZW8gaWRcclxuXHRnZXRCeUlkKGlkOiBudW1iZXIpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVRlYWNoZXI+PihgJHt1cmx9JHtpZH1gKVxyXG5cdH0sXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFkZChkYXRhOiBJVGVhY2hlcikge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKVxyXG5cdH0sXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUoZGF0YTogSVRlYWNoZXIpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKVxyXG5cdH0sXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGVCcmFuY2goZGF0YTogeyBVc2VySW5mb21hdGlvbklEOiBudW1iZXI7IEJyYW5jaElEOiBzdHJpbmc7IEVuYWJsZTogYm9vbGVhbiB9KSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KCcvYXBpL1VzZXJCcmFuY2gvJywgZGF0YSlcclxuXHR9LFxyXG5cdHVwZGF0ZVJvbGUoZGF0YTogeyBSb2xlSUQ6IG51bWJlcjsgVXNlckluZm9ybWF0aW9uSUQ6IG51bWJlciB9KSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KCcvYXBpL1RlYWNoZXIvJywgZGF0YSlcclxuXHR9LFxyXG5cdC8vIFjDs2EgZGF0YVxyXG5cdGRlbGV0ZShkYXRhOiBJVGVhY2hlcikge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpXHJcblx0fSxcclxuXHQvLyBUaMO0bmcgdGluIGzhu5twIGjhu41jXHJcblx0Z2V0QWxsVGVhY2hlckZvclN1YmplY3QoaWQ6IG51bWJlcikge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YT4oYC9hcGkvQXNzaWduVGVhY2hlckZvclN1YmplY3QvJHtpZH1gKVxyXG5cdH0sXHJcblx0dXBkYXRlVGVhY2hlckZvclN1YmplY3QoZGF0YTogYW55KSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KCcvYXBpL0Fzc2lnblRlYWNoZXJGb3JTdWJqZWN0JywgZGF0YSlcclxuXHR9LFxyXG5cdHVwZGF0ZVRlYWNoZXJGb3JBbGxTdWJqZWN0KHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCgnL2FwaS9Bc3NpZ25UZWFjaGVyRm9yQWxsU3ViamVjdCcsIHBhcmFtcylcclxuXHR9LFxyXG5cdGdldFRlYWNoZXJCeVByb2dyYW0ocGFyYW1zOiB7IFByb2dyYW1JRDogbnVtYmVyOyBCcmFuY2hJRDogbnVtYmVyIH0pIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8eyBVc2VySW5mb3JtYXRpb25JRDogbnVtYmVyOyBGdWxsTmFtZVVuaWNvZGU6IHN0cmluZyB9W10+PignL2FwaS9UZWFjaGVyQnlQcm9ncmFtJywge1xyXG5cdFx0XHRwYXJhbXNcclxuXHRcdH0pXHJcblx0fSwgLy8gTOG6pXkgdGhlbyBpZFxyXG5cdGdldEN1cnJpY3VsdW0oaWQ6IG51bWJlcikge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxhbnk+KGAvYXBpL2Fzc2lnbnRlYWNoZXJjdXJyaWN1bHVtL2dldGJ5dGVhY2hlci8ke2lkfWApXHJcblx0fSxcclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YXNzaWduKGRhdGE6IGFueSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QoJy9hcGkvYXNzaWdudGVhY2hlcmN1cnJpY3VsdW0vYXNzaWduJywgZGF0YSlcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvVXNlckluZm9ybWF0aW9uLyc7XHJcbmNsYXNzIFVzZXJBcGkge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbCA9IChwYXJhbXMpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVXNlcltdPj4odXJsLCB7IHBhcmFtcyB9KTtcclxuXHJcblx0Ly8gTOG6pXkgZGF0YSBt4bubaSBuaOG6pXRcclxuXHRnZXROZXcgPSAoKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVVzZXI+Pih1cmwgKyAnMCcpO1xyXG5cclxuXHQvLyBM4bqleSBkYXRhIG3hu5tpIG5o4bqldFxyXG5cdGdldEJ5SUQgPSAocGFyYW1zKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVVzZXI+Pih1cmwgKyBwYXJhbXMpO1xyXG5cclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkKGRhdGE6IElVc2VyKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG5cdH1cclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZShkYXRhOiBJVXNlcikge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH1cclxuXHQvLyBYw7NhIGRhdGFcclxuXHRkZWxldGUoZGF0YTogSVVzZXIpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdC8vIMSQ4buVaSBt4bqtdCBraOG6qXVcclxuXHRjaGFuZ2VQYXNzd29yZChkYXRhOiBhbnkpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQoJy9hcGkvQWNjb3VudCcsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0Ly8gVOG6oW8gbeG7m2kgdMOgaSBraG/huqNuXHJcblx0Y3JlYXRlQWNjb3VudChkYXRhOiBhbnkpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KCcvYXBpL0NyZWF0ZUFjY291bnQnLCBkYXRhKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyQXBpID0gbmV3IFVzZXJBcGkoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICcuLi9pbnN0YW5jZSdcclxuaW1wb3J0IHsgSVZpZGVvQ291cnNlTGlzdCB9IGZyb20gJy4uL3R5cGVzL3ZpZGVvLWNvdXJzZS1saXN0L3ZpZGVvLWNvdXJzZS1saXN0J1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvVmlkZW9Db3Vyc2VPZlN0dWRlbnQvJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFZpZGVvQ291cnNlTGlzdEFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElWaWRlb0NvdXJzZUxpc3RbXT4+KFxyXG5cdFx0XHRgJHt1cmx9R2V0QWxsP3BhZ2VJbmRleD0ke3BhcmFtcy5wYWdlSW5kZXh9JnBhZ2VTaXplPSR7cGFyYW1zLnBhZ2VTaXplfSZzZWFyY2g9JHtwYXJhbXMuc2VhcmNofWBcclxuXHRcdClcclxuXHR9LFxyXG5cdC8vIEzhuqV5IGRhdGEgdGhlbyB1c2VyXHJcblx0Z2V0QnlVc2VyKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVmlkZW9Db3Vyc2VMaXN0W10+PihcclxuXHRcdFx0YCR7dXJsfUdldEJ5VXNlcj9wYWdlSW5kZXg9JHtwYXJhbXMucGFnZUluZGV4fSZwYWdlU2l6ZT0ke3BhcmFtcy5wYWdlU2l6ZX0mc2VhcmNoPSR7cGFyYW1zLnNlYXJjaH1gXHJcblx0XHQpXHJcblx0fSxcclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCArICdTdHVkZW50RXZhbHVhdGlvbicsIGRhdGEpXHJcblx0fSxcclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZUFjdGl2ZUNvZGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwgKyAnVXBkYXRlQWN0aXZlQ29kZScsIGRhdGEpXHJcblx0fSxcclxuXHR1cGRhdGVMaW1pdEJvb2tpbmcoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwgKyAnVXBkYXRlTGltaXRCb29raW5nJywgZGF0YSlcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IGRvbmVQYXlVcmwgPSAnL2FwaS9PcmRlci8nXHJcbmV4cG9ydCBjb25zdCBEb25lUGF5QXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVZpZGVvQ291cnNlTGlzdFtdPj4oXHJcblx0XHRcdGAke2RvbmVQYXlVcmx9R2V0TGlzdE9yZGVyP3BhZ2VJbmRleD0ke3BhcmFtcy5wYWdlSW5kZXh9JnBhZ2VTaXplPSR7cGFyYW1zLnBhZ2VTaXplfSZzZWFyY2g9JHtwYXJhbXMuc2VhcmNofSZQYXltZW50U3RhdHVzPSR7cGFyYW1zLlBheW1lbnRTdGF0dXN9YFxyXG5cdFx0KVxyXG5cdH0sXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dChkb25lUGF5VXJsICsgJ1VwZGF0ZVBhaWRQYXltZW50JywgZGF0YSlcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICcuLi9pbnN0YW5jZSdcclxuaW1wb3J0IHsgSVZpZGVvTGVhcm5pbmcgfSBmcm9tICcuLi90eXBlcy92aWRlby1sZWFybmluZy92aWRlby1sZWFybmluZydcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1ZpZGVvQ291cnNlT2ZTdHVkZW50LydcclxuZXhwb3J0IGNvbnN0IFZpZGVvQ291cnNlT2ZTdHVkZW50ID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVZpZGVvTGVhcm5pbmdbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXNcclxuXHRcdH0pXHJcblx0fSxcclxuXHJcblx0Ly8gTOG6pXkgZGF0YSB0aGVvIHVzZXJcclxuXHRHZXRCeUlEKElEKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElWaWRlb0xlYXJuaW5nW10+PihgJHt1cmwgKyAnR2V0QnlJRC8nfSR7SUR9YClcclxuXHR9LFxyXG5cclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdFVwZGF0ZVNlZW5BbmRUaW1lV2F0Y2hlZFZpZGVvKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsICsgJy9VcGRhdGVTZWVuQW5kVGltZVdhdGNoZWRWaWRlbycsIGRhdGEpXHJcblx0fSxcclxuXHJcblx0Ly8gTOG6pXkgZGF0YSBHZXRMZXNzb25JblByb2dyZXNzXHJcblx0R2V0TGVzc29uSW5Qcm9ncmVzcygpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVZpZGVvTGVhcm5pbmdbXT4+KHVybCArICdHZXRMZXNzb25JblByb2dyZXNzLycpXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCB1cmxJbnRlcmFjdGlvID0gJy9hcGkvVmlkZW9Db3Vyc2VJbnRlcmFjdGlvbi8nXHJcbmV4cG9ydCBjb25zdCBWaWRlb0NvdXJzZUludGVyYWN0aW9uID0ge1xyXG5cdEdldEJ5SUQoSUQpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVZpZGVvTGVhcm5pbmdbXT4+KGAke3VybEludGVyYWN0aW8gKyAnR2V0QnlJRC8nfSR7SUR9YClcclxuXHR9LFxyXG5cclxuXHRMaXN0UUEocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElWaWRlb0xlYXJuaW5nW10+Pih1cmxJbnRlcmFjdGlvICsgJ0xpc3RRQScsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KVxyXG5cdH0sXHJcblxyXG5cdExpc3ROb3RlKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVmlkZW9MZWFybmluZ1tdPj4odXJsSW50ZXJhY3RpbyArICdMaXN0Tm90ZScsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KVxyXG5cdH0sXHJcblxyXG5cdExpc3RMaXN0QW5ub3VuY2VtZW50KHZpZGVvY291cnNlSUQpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVZpZGVvTGVhcm5pbmdbXT4+KHVybEludGVyYWN0aW8gKyAnTGlzdEFubm91bmNlbWVudC8nICsgdmlkZW9jb3Vyc2VJRClcclxuXHR9LFxyXG5cclxuXHRhZGQoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsSW50ZXJhY3RpbyArICdJbnNlcnQnLCBkYXRhKVxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgdXJsVmlkZW9Db3Vyc2VzID0gJy9hcGkvVmlkZW9Db3Vyc2VzLydcclxuZXhwb3J0IGNvbnN0IFZpZGVvQ291cnNlcyA9IHtcclxuXHRMaXN0U2VjdGlvbihJRCkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVmlkZW9MZWFybmluZ1tdPj4oYCR7dXJsVmlkZW9Db3Vyc2VzICsgJ0xpc3RTZWN0aW9uLyd9JHtJRH1gKVxyXG5cdH0sXHJcblxyXG5cdExpc3RMZXNzb24ocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElWaWRlb0xlYXJuaW5nW10+Pih1cmxWaWRlb0NvdXJzZXMgKyAnTGlzdExlc3NvbicsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KVxyXG5cdH0sXHJcblxyXG5cdExpc3RRQShwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVZpZGVvTGVhcm5pbmdbXT4+KHVybFZpZGVvQ291cnNlcyArICdMaXN0UUEnLCB7XHJcblx0XHRcdHBhcmFtc1xyXG5cdFx0fSlcclxuXHR9LFxyXG5cclxuXHRMZXNzb25EZXRhaWwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElWaWRlb0xlYXJuaW5nW10+Pih1cmxWaWRlb0NvdXJzZXMgKyAnTGVzc29uRGV0YWlsJywge1xyXG5cdFx0XHRwYXJhbXNcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvQ29taW5nU29vbkNvdXJzZVNjaGVkdWxlLyc7XHJcbmV4cG9ydCBjb25zdCBjb21pbmdDb3Vyc2VBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKCkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJQ29taW5nQ291cnNlPj4odXJsKTtcclxuXHR9XHJcbn07XHJcbiIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9ab29tVGVhY2hlckFQSS8nO1xyXG5leHBvcnQgY29uc3QgY29uZmlnWm9vbUFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElDb25maWdab29tW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zLFxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyBM4bqleSB0aGVvIGlkXHJcblx0Z2V0QnlJZChpZDogbnVtYmVyKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElDb25maWdab29tPj4oYCR7dXJsfSR7aWR9YCk7XHJcblx0fSxcclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBYw7NhIGRhdGFcclxuXHRkZWxldGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblx0Z2V0SW5hY3RpdmVDb25maWdab29tKCkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJQ29uZmlnWm9vbT4+KFxyXG5cdFx0XHQnL2FwaS9HZXRab29tVGVhY2hlckFQSWluQWN0aXZlJ1xyXG5cdFx0KTtcclxuXHR9LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9Vc2VyU2NoZWR1bGUvJztcclxuZXhwb3J0IGNvbnN0IHNjaGVkdWxlWm9vbUFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zOiB7IFN0YXJ0VGltZTogc3RyaW5nOyBFbmRUaW1lOiBzdHJpbmcgfSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU2NoZWR1bGVab29tW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIEzhuqV5IHRoZW8gaWRcclxuXHRnZXRCeUlkKGlkOiBudW1iZXIpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVNjaGVkdWxlWm9vbURldGFpbD4+KGAke3VybH0ke2lkfWApO1xyXG5cdH1cclxufTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvWm9vbVJvb21TY2hlZHVsZS8nO1xyXG5leHBvcnQgY29uc3Qgem9vbVJvb21BcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJWm9vbVJvb21bXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXNcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8gTOG6pXkgdGhlbyBpZFxyXG5cdGdldEJ5SWQoaWQ6IG51bWJlcikge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJWm9vbVJvb20+PihgJHt1cmx9JHtpZH1gKTtcclxuXHR9LFxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIFjDs2EgZGF0YVxyXG5cdGRlbGV0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBU4bqhbyBwaMOybmdcclxuXHRjcmVhdGVSb29tKHNjaGVkdWxlSUQ6IG51bWJlcikge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QoYGFwaS9DcmVhdGVSb29tLyR7c2NoZWR1bGVJRH1gKTtcclxuXHR9LFxyXG5cdC8vIMSQw7NuZyBwaMOybmdcclxuXHRjbG9zZVJvb20oc2NoZWR1bGVJRDogbnVtYmVyKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KGBhcGkvQ2xvc2VSb29tLyR7c2NoZWR1bGVJRH1gKTtcclxuXHR9LFxyXG5cdGdldFJlY29yZChzY2hlZHVsZUlEOiBudW1iZXIpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVpvb21SZWNvcmRbXT4+KGBhcGkvR2V0UmVjb3JkaW5nLyR7c2NoZWR1bGVJRH1gKTtcclxuXHR9XHJcbn07XHJcbiIsImNvbnN0IF8gPSB7XHJcblx0cHJpbWFyeUNvbG9yOiAnIzUwNjg0QicsXHJcblx0c2Vjb25kQ29sb3I6ICcjZWFlZGU4JyxcclxuXHRjaHJvbWVUaXRsZTogJ0lFTFRTIE5HVVnhu4ROIEhVWeG7gE4gLSBBbHdheXMgVHJ5IFlvdXIgQmVzdCcsXHJcblx0ZGVzY3JpcHRpb246ICdJRUxUUyBOR1VZ4buETiBIVVnhu4BOJyxcclxuXHRob3N0VVJMOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgX1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwiQXV0aExheW91dF93cmFwcGVyX18yM28wT1wiLFxuXHRcImltYWdlLXdyYXBwZXJcIjogXCJBdXRoTGF5b3V0X2ltYWdlLXdyYXBwZXJfXzFzakFvXCIsXG5cdFwiY2FsZW5kYXItd3JhcHBlclwiOiBcIkF1dGhMYXlvdXRfY2FsZW5kYXItd3JhcHBlcl9fM1VzQzhcIixcblx0XCJpbWFnZVwiOiBcIkF1dGhMYXlvdXRfaW1hZ2VfXzFUNVk2XCIsXG5cdFwiY2FsZW5kYXJcIjogXCJBdXRoTGF5b3V0X2NhbGVuZGFyX18yRGRZU1wiLFxuXHRcIm1vbnRoX3llYXJcIjogXCJBdXRoTGF5b3V0X21vbnRoX3llYXJfXzNVQ2kwXCIsXG5cdFwiZGF0ZVwiOiBcIkF1dGhMYXlvdXRfZGF0ZV9fM1RCc2NcIixcblx0XCJ0aW1lXCI6IFwiQXV0aExheW91dF90aW1lX18xN0tqNlwiLFxuXHRcInNsb2dhblwiOiBcIkF1dGhMYXlvdXRfc2xvZ2FuX18xYlNvYVwiLFxuXHRcImNvbnRlbnRcIjogXCJBdXRoTGF5b3V0X2NvbnRlbnRfXzN0MjRXXCIsXG5cdFwiZm9vdGVyXCI6IFwiQXV0aExheW91dF9mb290ZXJfXzFUbE13XCIsXG5cdFwiZm9vdGVyX19sZWZ0XCI6IFwiQXV0aExheW91dF9mb290ZXJfX2xlZnRfX0gwM1E2XCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBpZGlvbXNBcGkgfSBmcm9tICd+L2FwaUJhc2Uvb3B0aW9ucy9pZGlvbXMnXHJcbmltcG9ydCB7IGNyZWF0ZURhdGVPYmplY3QgfSBmcm9tICd+L3V0aWxzL2Z1bmN0aW9ucydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0F1dGhMYXlvdXQubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBfIGZyb20gJ34vYXBwQ29uZmlnJ1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCBSZWFjdEh0bWxQYXJzZXIgZnJvbSAncmVhY3QtaHRtbC1wYXJzZXInXHJcbmltcG9ydCB7IHJ1bGVzQXBpIH0gZnJvbSAnfi9hcGlCYXNlJ1xyXG5cclxuY29uc3QgU0hPV19GT09URVIgPSBmYWxzZVxyXG5cclxuZnVuY3Rpb24gQXV0aExheW91dCh7IGNoaWxkcmVuIH0pIHtcclxuXHRjb25zdCBbaWRpb20sIHNldElkaW9tXSA9IHVzZVN0YXRlPHsgY29udGVudDogc3RyaW5nOyBhdXRob3I6IHN0cmluZyB9Pih7IGNvbnRlbnQ6ICcnLCBhdXRob3I6ICcnIH0pXHJcblx0Y29uc3QgW2RhdGVTdGF0ZSwgc2V0RGF0ZVN0YXRlXSA9IHVzZVN0YXRlPGFueT4obmV3IERhdGUoKSlcclxuXHRjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcblx0Y29uc3QgW3Rlcm1Db250ZW50LCBzZXRUZXJtQ29udGVudF0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpXHJcblxyXG5cdGFzeW5jIGZ1bmN0aW9uIGdldEZpcnN0SWRpb20oKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCByZXM6IGFueSA9IGF3YWl0IGlkaW9tc0FwaS5nZXRSYW5kb20oKVxyXG5cdFx0XHRpZiAocmVzLnN0YXR1cyA9PSAyMDApIHtcclxuXHRcdFx0XHRjb25zdCBjb250ZW50OiBhbnkgPSByZXM/LmRhdGE/LmRhdGE/LklkaW9tc1xyXG5cdFx0XHRcdGNvbnN0IGF1dGhvcjogYW55ID0gcmVzPy5kYXRhPy5kYXRhPy5DcmVhdGVkQnlcclxuXHRcdFx0XHRzZXRJZGlvbSh7IGNvbnRlbnQsIGF1dGhvciB9KVxyXG5cdFx0XHR9XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcilcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IGdldFRlcm1zSW5mb3JtYXRpb24gPSBhc3luYyAoKSA9PiB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRsZXQgcmVzID0gYXdhaXQgcnVsZXNBcGkuZ2V0QWxsKHt9KVxyXG5cdFx0XHQhIXJlcz8uc3RhdHVzICYmIHNldFRlcm1Db250ZW50KHJlcy5kYXRhLmRhdGEpXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnL2FwaS9SdWxlczogJywgZXJyb3IpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgdGltZUlEID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRzZXREYXRlU3RhdGUoY3JlYXRlRGF0ZU9iamVjdChuZXcgRGF0ZSgpLCAnZW4nKSlcclxuXHRcdH0sIDEwMDApXHJcblx0XHRyZXR1cm4gKCkgPT4ge1xyXG5cdFx0XHRjbGVhckludGVydmFsKHRpbWVJRClcclxuXHRcdH1cclxuXHR9LCBbXSlcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGdldEZpcnN0SWRpb20oKVxyXG5cdFx0Z2V0VGVybXNJbmZvcm1hdGlvbigpXHJcblx0fSwgW10pXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8TW9kYWxcclxuXHRcdFx0XHRzdHlsZT17eyBvdmVyZmxvdzogJ2hpZGRlbicgfX1cclxuXHRcdFx0XHR6SW5kZXg9ezk5OTk5fVxyXG5cdFx0XHRcdHdpZHRoPXsxMDAwfVxyXG5cdFx0XHRcdGZvb3Rlcj17ZmFsc2V9XHJcblx0XHRcdFx0dmlzaWJsZT17aXNWaXNpYmxlfVxyXG5cdFx0XHRcdG9uQ2FuY2VsPXsoKSA9PiBzZXRJc1Zpc2libGUoZmFsc2UpfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiB0ZXJtX19zZXJ2aWNlIG1iLTRcIj57UmVhY3RIdG1sUGFyc2VyKHRlcm1Db250ZW50ICYmIHRlcm1Db250ZW50LlJ1bGVzQ29udGVudCl9PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiIG9uQ2xpY2s9eygpID0+IHNldElzVmlzaWJsZShmYWxzZSl9PlxyXG5cdFx0XHRcdFx0XHRcdFjDoWMgbmjhuq1uXHJcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvTW9kYWw+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2ltYWdlLXdyYXBwZXInXX0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydjYWxlbmRhci13cmFwcGVyJ119PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhbGVuZGFyfT5cclxuXHRcdFx0XHRcdFx0XHR7ZGF0ZVN0YXRlPy5ob3VyICE9PSB1bmRlZmluZWQgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e3N0eWxlcy5tb250aF95ZWFyfT57ZGF0ZVN0YXRlLmRhdGV9PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e3N0eWxlcy50aW1lfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7ZGF0ZVN0YXRlLm1vbnRofSB7ZGF0ZVN0YXRlLnllYXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtzdHlsZXMubW9udGhfeWVhcn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e2RhdGVTdGF0ZS5ob3VyfSA6IHtkYXRlU3RhdGUubWludXRlfSA6IHtkYXRlU3RhdGUuc2Vjb25kfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtzdHlsZXMubW9udGhfeWVhcn0+e2RhdGVTdGF0ZS5nZXREYXRlKCl9PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e3N0eWxlcy50aW1lfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7ZGF0ZVN0YXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4nLCB7IG1vbnRoOiAnbG9uZycgfSl9IHtkYXRlU3RhdGUuZ2V0RnVsbFllYXIoKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e3N0eWxlcy5tb250aF95ZWFyfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7KCcwJyArIGRhdGVTdGF0ZS5nZXRIb3VycygpKS5zbGljZSgtMil9IDogeygnMCcgKyBkYXRlU3RhdGUuZ2V0TWludXRlcygpKS5zbGljZSgtMil9IDogMDBcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNsb2dhbn0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7UmVhY3RIdG1sUGFyc2VyKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlkaW9tLmNvbnRlbnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5yZXBsYWNlKCdyZ2IoMCwgMjMsIDU1KScsICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSknKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LnJlcGxhY2UoJ3JnYigwLCAyMywgNTUpJywgJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC45KScpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQucmVwbGFjZSgncmdiKDAsIDIzLCA1NSknLCAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpJylcclxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+e2NoaWxkcmVufTwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdHtTSE9XX0ZPT1RFUiAmJiAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5mb290ZXJ9JHsnIHJvdyd9YH0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmZvb3Rlcl9fbGVmdH1gfT5cclxuXHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLW1hcC1tYXJrZXItYWx0XCIgc3R5bGU9e3sgY29sb3I6ICcjZmZmJyB9fT48L2k+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm1sLTNcIj7EkOG7i2EgY2jhu4k8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZm9vdGVyX19sZWZ0fWB9IHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9eygpID0+IHNldElzVmlzaWJsZSh0cnVlKX0+XHJcblx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib29rXCIgc3R5bGU9e3sgY29sb3I6ICcjZmZmJyB9fT48L2k+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm1sLTNcIj7EkWnhu4F1IGtob+G6o248L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KX1cclxuXHRcdDwvPlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aExheW91dFxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJMb2dpbkZvcm1fY29udGFpbmVyX18xNFRLYlwiLFxuXHRcImZjb250cm9sXCI6IFwiTG9naW5Gb3JtX2Zjb250cm9sX18zbXpBQlwiLFxuXHRcIndyYXBCb3hcIjogXCJMb2dpbkZvcm1fd3JhcEJveF9fM3BGc0RcIixcblx0XCJ3cmFwRm9ybVwiOiBcIkxvZ2luRm9ybV93cmFwRm9ybV9fMi03ZlNcIixcblx0XCJpbWdMb2dpblwiOiBcIkxvZ2luRm9ybV9pbWdMb2dpbl9fM0FYbE5cIixcblx0XCJ3cmFwSWNvblwiOiBcIkxvZ2luRm9ybV93cmFwSWNvbl9fMWhreHFcIixcblx0XCJsb2dpbkZvcm1cIjogXCJMb2dpbkZvcm1fbG9naW5Gb3JtX19KYkNjZ1wiLFxuXHRcInRpdGxlXCI6IFwiTG9naW5Gb3JtX3RpdGxlX19ERTF4RFwiLFxuXHRcIkFwcFwiOiBcIkxvZ2luRm9ybV9BcHBfX0ZKNllkXCIsXG5cdFwiZm9ybVwiOiBcIkxvZ2luRm9ybV9mb3JtX18ySVp1aVwiLFxuXHRcImxvZ2luRm9ybUltZ1wiOiBcIkxvZ2luRm9ybV9sb2dpbkZvcm1JbWdfXzJtc01RXCIsXG5cdFwiY2hlY2tib3hcIjogXCJMb2dpbkZvcm1fY2hlY2tib3hfX3JUb0ZhXCIsXG5cdFwiZm9yZ2V0UGFzc1wiOiBcIkxvZ2luRm9ybV9mb3JnZXRQYXNzX18zNEhPMVwiLFxuXHRcImJveFNpZ251cFwiOiBcIkxvZ2luRm9ybV9ib3hTaWdudXBfXzNRRDNrXCIsXG5cdFwiYm94RGVtb1wiOiBcIkxvZ2luRm9ybV9ib3hEZW1vX18xR21BUVwiLFxuXHRcImJveFNvY2lhbFwiOiBcIkxvZ2luRm9ybV9ib3hTb2NpYWxfXzE2Um44XCIsXG5cdFwibm90ZUxvZ2luXCI6IFwiTG9naW5Gb3JtX25vdGVMb2dpbl9fM3lWSWdcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTG9naW5Gb3JtLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgU3BpbiB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbnR5cGUgSW5wdXRzID0ge1xyXG5cdHRleHQ6IHN0cmluZ1xyXG5cdHRleHRSZXF1aXJlZDogc3RyaW5nXHJcbn1cclxuXHJcbmludGVyZmFjZSBMb2dpbklucHV0cyB7XHJcblx0dXNlcm5hbWU6IElucHV0c1xyXG5cdHBhc3N3b3JkOiBJbnB1dHNcclxufVxyXG5cclxuZnVuY3Rpb24gaW5kZXgocHJvcHM6IGFueSkge1xyXG5cdGNvbnN0IHtcclxuXHRcdHJlZ2lzdGVyLFxyXG5cdFx0aGFuZGxlU3VibWl0LFxyXG5cdFx0Zm9ybVN0YXRlOiB7IGVycm9ycyB9XHJcblx0fSA9IHVzZUZvcm08TG9naW5JbnB1dHM+KClcclxuXHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcblx0Y29uc3QgX1N1Ym1pdCA9IGFzeW5jIChkYXRhOiBhbnkpID0+IHtcclxuXHRcdHNldExvYWRpbmcodHJ1ZSlcclxuXHRcdHByb3BzPy5vblN1Ym1pdChkYXRhKVxyXG5cdH1cclxuXHJcblx0Y29uc3QgbW92ZVRvU2lnblVwID0gKGU6IGFueSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXHJcblx0XHRyb3V0ZXIucHVzaCgnL2FjY291bnQvcmVnaXN0ZXInKVxyXG5cdH1cclxuXHJcblx0Ly8gUkVOREVSXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwMCB9fT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBCb3h9PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwRm9ybX0+XHJcblx0XHRcdFx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoX1N1Ym1pdCl9IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luRm9ybX0+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbkZvcm1JbWd9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28uanBnXCIgYWx0PVwiXCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8aDYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PsSQxINuZyBuaOG6rXA8L2g2PlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dCBuYW1lPVwiY3NyZlRva2VuXCIgdHlwZT1cImhpZGRlblwiIGRlZmF1bHRWYWx1ZT17cHJvcHM/LmNzcmZUb2tlbn0gLz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMuZmNvbnRyb2x9PlTDqm4gxJHEg25nIG5o4bqtcDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwidXNlcm5hbWVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPVwiXCJcclxuXHRcdFx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcigndXNlcm5hbWUnLCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWxpZGF0ZTogKHZhbHVlOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gISF2YWx1ZS50cmltKClcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VmFsdWVBczogKHZhbHVlKSA9PiB2YWx1ZS50cmltKClcclxuXHRcdFx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJOaOG6rXAgdMOqbiDEkcSDbmcgbmjhuq1wXCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdHtlcnJvcnMudXNlcm5hbWUgJiYgPHNwYW4gY2xhc3NOYW1lPVwiZm9ybS1lcnJvclwiPkjDo3kgxJFp4buBbiB0w6puIMSRxINuZyBuaOG6rXA8L3NwYW4+fVxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5mY29udHJvbH0+TeG6rXQga2jhuql1PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJwYXNzd29yZFwiXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPVwiXCJcclxuXHRcdFx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcigncGFzc3dvcmQnLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJOaOG6rXAgbeG6rXQga2jhuql1XCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdHtlcnJvcnMucGFzc3dvcmQgJiYgPHNwYW4gY2xhc3NOYW1lPVwiZm9ybS1lcnJvclwiPkjDo3kgxJFp4buBbiBt4bqtdCBraOG6qXU8L3NwYW4+fVxyXG5cdFx0XHRcdFx0XHRcdHshIXJvdXRlci5xdWVyeT8uZXJyb3IgJiYgcm91dGVyLnF1ZXJ5Py5lcnJvciAhPSAndW5kZWZpbmVkJyAmJiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+e0pTT04ucGFyc2Uocm91dGVyLnF1ZXJ5Py5lcnJvci50b1N0cmluZygpKT8ubWVzc2FnZX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm10LTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9yZ2V0UGFzc30+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvcmVzZXQtcGFzc3dvcmRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5RdcOqbiBt4bqtdCBraOG6qXU/PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPXsnxJDEg25nIG5o4bqtcCd9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHR7bG9hZGluZyAmJiA8U3BpbiBjbGFzc05hbWU9XCJsb2FkaW5nLWxvZ2luXCIgLz59XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctMTAwIG0tMSB0ZXh0LWNlbnRlciBjb2xvci1yZWQgZnctYm9sZFwiPntwcm9wcy5lcnJvciAmJiBwcm9wcy5lcnJvcn08L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveFNpZ251cH0+XHJcblx0XHRcdFx0XHRcdFx0XHRC4bqhbiBjaMawYSBjw7MgdMOgaSBraG/huqNuP3snICd9XHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiXCIgb25DbGljaz17bW92ZVRvU2lnblVwfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0xJDEg25nIGvDrVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8Lz5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4XHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBDaGVja0NpcmNsZU91dGxpbmVkLCBXYXJuaW5nT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucydcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcydcclxuaW1wb3J0IHsgb25lU2lnbmFsQVBJLCB1c2VyQXBpIH0gZnJvbSAnfi9hcGlCYXNlJ1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCdcclxuaW1wb3J0IE9uZVNpZ25hbCBmcm9tICdyZWFjdC1vbmVzaWduYWwnXHJcblxyXG5leHBvcnQgdHlwZSBJUHJvcHMgPSB7XHJcblx0dGl0bGVQYWdlOiBzdHJpbmdcclxuXHRnZXRSb3V0ZXI6IGFueVxyXG5cdGdldFRpdGxlUGFnZTogRnVuY3Rpb25cclxuXHRzaG93Tm90aTogRnVuY3Rpb25cclxuXHRnZXREYXRhVXNlcjogRnVuY3Rpb25cclxuXHR1c2VySW5mb3JtYXRpb246IElVc2VyXHJcblx0dXNlQWxsUm9sZXM6IElSb2xlW11cclxuXHR1c2VTdGFmZlJvbGVzOiBJUm9sZVtdXHJcblx0cGFnZVNpemU6IG51bWJlclxyXG5cdGlzQWRtaW46IGJvb2xlYW5cclxuXHRyZWxvYWROb3RpZmljYXRpb246IGJvb2xlYW5cclxuXHRoYW5kbGVSZWxvYWROb3RpOiBGdW5jdGlvblxyXG5cdHJlbG9hZENhcnQ6IGJvb2xlYW5cclxuXHRoYW5kbGVSZWxvYWRDYXJ0OiBGdW5jdGlvblxyXG59XHJcblxyXG5jb25zdCBXcmFwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8SVByb3BzPih7XHJcblx0dGl0bGVQYWdlOiAnJyxcclxuXHRnZXRSb3V0ZXI6ICcnLFxyXG5cdGdldFRpdGxlUGFnZTogKCkgPT4ge30sXHJcblx0c2hvd05vdGk6ICgpID0+IHt9LFxyXG5cdGdldERhdGFVc2VyOiAoKSA9PiB7fSxcclxuXHR1c2VySW5mb3JtYXRpb246IG51bGwsXHJcblx0dXNlQWxsUm9sZXM6IG51bGwsXHJcblx0dXNlU3RhZmZSb2xlczogbnVsbCxcclxuXHRwYWdlU2l6ZTogMzAsXHJcblx0aXNBZG1pbjogZmFsc2UsXHJcblx0cmVsb2FkTm90aWZpY2F0aW9uOiBmYWxzZSxcclxuXHRoYW5kbGVSZWxvYWROb3RpOiBGdW5jdGlvbixcclxuXHRyZWxvYWRDYXJ0OiBmYWxzZSxcclxuXHRoYW5kbGVSZWxvYWRDYXJ0OiBGdW5jdGlvblxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IFdyYXBQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuXHQvLyBHZXQgcGF0aCBhbmQgc2x1Z1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblx0Y29uc3QgZ2V0Um91dGVyID0gcm91dGVyLnBhdGhuYW1lXHJcblx0bGV0IHBhdGg6IHN0cmluZyA9IHJvdXRlci5wYXRobmFtZVxyXG5cdGNvbnN0IFtzZXNzaW9uLCBsb2FkaW5nXSA9IHVzZVNlc3Npb24oKVxyXG5cdGNvbnN0IFt0aXRsZVBhZ2UsIHNldFRpdGxlUGFnZV0gPSB1c2VTdGF0ZSgnJylcclxuXHRjb25zdCBbdXNlckluZm8sIHNldFVzZXJJbmZvXSA9IHVzZVN0YXRlPElVc2VyPihudWxsKVxyXG5cdGNvbnN0IFtyb2xlcywgc2V0Um9sZXNdID0gdXNlU3RhdGU8SVJvbGVbXT4obnVsbClcclxuXHRjb25zdCBbc3RhZmZSb2xlcywgc2V0U3RhZmZSb2xlc10gPSB1c2VTdGF0ZTxJUm9sZVtdPihudWxsKVxyXG5cdGNvbnN0IFtpc0FkbWluLCBzZXRJc0FkbWluXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cdGNvbnN0IFtyZWxvYWROb3RpZmljYXRpb24sIHNldFJlbG9hZE5vdGlmaWNhdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHRjb25zdCBbcmVsb2FkQ2FydCwgc2V0UmVsb2FkQ2FydF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcblx0Ly8gLS0tIEdldCBUaXRsZSBQYWdlIC0tLVxyXG5cdGNvbnN0IGdldFRpdGxlUGFnZSA9ICh0aXRsZSkgPT4ge1xyXG5cdFx0c2V0VGl0bGVQYWdlKHRpdGxlKVxyXG5cdH1cclxuXHJcblx0Ly8gLS0tIFNob3cgTm90aWZpY2F0aW9uIC0tLVxyXG5cdGNvbnN0IHNob3dOb3RpID0gKHR5cGU6IHN0cmluZywgY29udGVudDogc3RyaW5nKSA9PiB7XHJcblx0XHRjb25zdCBub2RlTm90aSA9ICgpID0+IHtcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YG5vdGktYm94YH0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdGktYm94X19jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImljb25cIj57dHlwZSA9PSAnZGFuZ2VyJyA/IDxXYXJuaW5nT3V0bGluZWQgLz4gOiB0eXBlID09ICdzdWNjZXNzJyAmJiA8Q2hlY2tDaXJjbGVPdXRsaW5lZCAvPn08L3NwYW4+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHRcIj57Y29udGVudH08L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KVxyXG5cdFx0fVxyXG5cclxuXHRcdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0XHRjYXNlICdzdWNjZXNzJzpcclxuXHRcdFx0XHR0b2FzdC5zdWNjZXNzKG5vZGVOb3RpKVxyXG5cdFx0XHRcdGJyZWFrXHJcblx0XHRcdGNhc2UgJ2Rhbmdlcic6XHJcblx0XHRcdFx0dG9hc3QuZXJyb3Iobm9kZU5vdGkpXHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0Y2FzZSAnd2FybmluZyc6XHJcblx0XHRcdFx0dG9hc3Qud2FybmluZyhub2RlTm90aSlcclxuXHRcdFx0XHRicmVha1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGJyZWFrXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBnZXRSb2xlcyA9IGFzeW5jIChyb2xlVHlwZSkgPT4ge1xyXG5cdFx0Ly8gdHJ5IHtcclxuXHRcdC8vIFx0bGV0IHJlcyA9IGF3YWl0IHVzZXJJbmZvcm1hdGlvbkFwaS5nZXRSb2xlKHJvbGVUeXBlKVxyXG5cdFx0Ly8gXHRyZXMuc3RhdHVzID09IDIwMCAmJiByb2xlVHlwZSA9PSAwID8gc2V0Um9sZXMocmVzLmRhdGEuZGF0YSkgOiBzZXRTdGFmZlJvbGVzKHJlcy5kYXRhLmRhdGEpXHJcblx0XHQvLyB9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0Ly8gXHRjb25zb2xlLmxvZygnTOG7l2kgbOG6pXkgdGjDtG5nIHRpbiByb2xlczogJywgZXJyb3IpXHJcblx0XHQvLyB9XHJcblx0fVxyXG5cclxuXHQvLyAtLS0gR2V0IERhdGEgVXNlciAtLS1cclxuXHRjb25zdCBnZXREYXRhVXNlciA9IChkYXRhKSA9PiB7XHJcblx0XHRkYXRhICYmIHNldFVzZXJJbmZvKGRhdGEpXHJcblx0fVxyXG5cclxuXHQvLyAtLS0gQ2hlY2sgaXMgQWRtaW4gLS0tXHJcblx0Y29uc3QgY2hlY2tJc0FkbWluID0gKGRhdGEpID0+IHtcclxuXHRcdGxldCByb2xlID0gZGF0YS5Sb2xlSURcclxuXHRcdGlmIChyb2xlID09IDEgfHwgcm9sZSA9PSA1KSB7XHJcblx0XHRcdHNldElzQWRtaW4odHJ1ZSlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIC0tLSBHZXQgTmV3IERhdGEgVXNlIC0tLVxyXG5cdGNvbnN0IGdldE5ld0RhdGFVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0bGV0IHJlcyA9IGF3YWl0IHVzZXJBcGkuZ2V0TmV3KClcclxuXHRcdFx0cmVzLnN0YXR1cyA9PSAyMDAgJiYgKHNldFVzZXJJbmZvKHJlcy5kYXRhLmRhdGEpLCBjaGVja0lzQWRtaW4ocmVzLmRhdGEuZGF0YSkpXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnTOG7l2kgbOG6pXkgdGjDtG5nIHRpbiB1c2VyOiAnLCBlcnJvcilcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIC0tLSBIYW5kbGUgUmVsb2FkIE5vdGlmaWNhdGlvbiAtLS1cclxuXHRjb25zdCBoYW5kbGVSZWxvYWROb3RpID0gKCkgPT4ge1xyXG5cdFx0c2V0UmVsb2FkTm90aWZpY2F0aW9uKCFyZWxvYWROb3RpZmljYXRpb24pXHJcblx0fVxyXG5cclxuXHQvLyAtLS0gSGFuZGxlIFJlbG9hZCBDYXJkIC0tLVxyXG5cdGNvbnN0IGhhbmRsZVJlbG9hZENhcnQgPSAoKSA9PiB7XHJcblx0XHRzZXRSZWxvYWRDYXJ0KCFyZWxvYWRDYXJ0KVxyXG5cdH1cclxuXHJcblx0Y29uc3QgcG9zdE9uZXNpZ25hbElEID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgdXNlcklkID0gYXdhaXQgT25lU2lnbmFsLmdldFVzZXJJZCgpXHJcblx0XHRcdGxldCByZXMgPSBhd2FpdCBvbmVTaWduYWxBUEkudXBkYXRlKHVzZXJJZClcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdM4buXaSBs4bqleSB0aMO0bmcgdGluIHVzZXI6ICcsIGVycm9yKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmIChsb2FkaW5nICYmIHR5cGVvZiBzZXNzaW9uICE9PSAndW5kZWZpbmVkJyAmJiBzZXNzaW9uICE9PSBudWxsKSB7XHJcblx0XHRcdGlmIChwYXRoLnNlYXJjaCgnc2lnbmluJykgPCAxKSB7XHJcblx0XHRcdFx0Z2V0TmV3RGF0YVVzZXIoKVxyXG5cdFx0XHRcdGdldFJvbGVzKDApXHJcblx0XHRcdFx0Z2V0Um9sZXMoMSlcclxuXHRcdFx0XHRwb3N0T25lc2lnbmFsSUQoKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSwgW3Nlc3Npb25dKVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PFdyYXBDb250ZXh0LlByb3ZpZGVyXHJcblx0XHRcdFx0dmFsdWU9e3tcclxuXHRcdFx0XHRcdHBhZ2VTaXplOiAzMCxcclxuXHRcdFx0XHRcdHRpdGxlUGFnZTogdGl0bGVQYWdlLFxyXG5cdFx0XHRcdFx0Z2V0VGl0bGVQYWdlLFxyXG5cdFx0XHRcdFx0Z2V0Um91dGVyLFxyXG5cdFx0XHRcdFx0c2hvd05vdGksXHJcblx0XHRcdFx0XHRnZXREYXRhVXNlcixcclxuXHRcdFx0XHRcdHVzZXJJbmZvcm1hdGlvbjogdXNlckluZm8sXHJcblx0XHRcdFx0XHR1c2VBbGxSb2xlczogcm9sZXMsXHJcblx0XHRcdFx0XHR1c2VTdGFmZlJvbGVzOiBzdGFmZlJvbGVzLFxyXG5cdFx0XHRcdFx0aXNBZG1pbjogaXNBZG1pbixcclxuXHRcdFx0XHRcdHJlbG9hZE5vdGlmaWNhdGlvbjogcmVsb2FkTm90aWZpY2F0aW9uLFxyXG5cdFx0XHRcdFx0aGFuZGxlUmVsb2FkTm90aTogaGFuZGxlUmVsb2FkTm90aSxcclxuXHRcdFx0XHRcdHJlbG9hZENhcnQ6IHJlbG9hZENhcnQsXHJcblx0XHRcdFx0XHRoYW5kbGVSZWxvYWRDYXJ0OiBoYW5kbGVSZWxvYWRDYXJ0XHJcblx0XHRcdFx0fX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxUb2FzdENvbnRhaW5lclxyXG5cdFx0XHRcdFx0cG9zaXRpb249XCJ0b3AtcmlnaHRcIlxyXG5cdFx0XHRcdFx0YXV0b0Nsb3NlPXszMDAwfVxyXG5cdFx0XHRcdFx0aGlkZVByb2dyZXNzQmFyPXtmYWxzZX1cclxuXHRcdFx0XHRcdG5ld2VzdE9uVG9wPXtmYWxzZX1cclxuXHRcdFx0XHRcdGNsb3NlT25DbGlja1xyXG5cdFx0XHRcdFx0cnRsPXtmYWxzZX1cclxuXHRcdFx0XHRcdHBhdXNlT25Gb2N1c0xvc3NcclxuXHRcdFx0XHRcdGRyYWdnYWJsZVxyXG5cdFx0XHRcdFx0cGF1c2VPbkhvdmVyXHJcblx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0XHQ8L1dyYXBDb250ZXh0LlByb3ZpZGVyPlxyXG5cdFx0PC8+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlV3JhcCA9ICgpID0+IHVzZUNvbnRleHQoV3JhcENvbnRleHQpXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHNpZ25JbiwgZ2V0UHJvdmlkZXJzIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnfi9jb21wb25lbnRzL0xvZ2luRm9ybSdcclxuaW1wb3J0IHsgdXNlV3JhcCB9IGZyb20gJ34vY29udGV4dC93cmFwJ1xyXG5pbXBvcnQgQXV0aExheW91dCBmcm9tICd+L2NvbXBvbmVudHMvQXV0aExheW91dCdcclxuaW1wb3J0IHsgZ2V0VHlwZVVSTCB9IGZyb20gJ34vdXRpbHMvZnVuY3Rpb25zJ1xyXG5cclxuZnVuY3Rpb24gU2lnbkluKHsgY3NyZlRva2VuIH0pIHtcclxuXHRjb25zdCB7IHNob3dOb3RpIH0gPSB1c2VXcmFwKClcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cdGNvbnN0IFtoYXZlRXJyb3IsIHNldEhhdmVFcnJvcl0gPSB1c2VTdGF0ZSgnJylcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmIChyb3V0ZXIucXVlcnk/LmVycm9yKSB7XHJcblx0XHRcdGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlci5xdWVyeVxyXG5cdFx0XHRjb25zdCBlckRhdGEgPSBlcnJvci5pbmNsdWRlcygnRXJyb3I6JykgPyBKU09OLnBhcnNlKGVycm9yLnRvU3RyaW5nKCkuc3BsaXQoJ0Vycm9yOicpWzBdKSA6IHsgc3RhdHVzOiA2OSB9XHJcblx0XHRcdHN3aXRjaCAoZXJEYXRhPy5zdGF0dXMpIHtcclxuXHRcdFx0XHRjYXNlIDIwMDpcclxuXHRcdFx0XHRcdHNob3dOb3RpKCdzdWNjZXNzJywgJ8SQxINuZyBuaOG6rXAgdGjDoG5oIGPDtG5nJylcclxuXHRcdFx0XHRcdGJyZWFrXHJcblx0XHRcdFx0Y2FzZSA0MDA6XHJcblx0XHRcdFx0XHRzaG93Tm90aSgnZGFuZ2VyJywgJ1TDqm4gxJHEg25nIG5o4bqtcCBob+G6t2MgbeG6rXQga2jhuql1IGtow7RuZyDEkcO6bmcnKVxyXG5cdFx0XHRcdFx0c2V0SGF2ZUVycm9yKGVyRGF0YS5tZXNzYWdlKVxyXG5cdFx0XHRcdFx0YnJlYWtcclxuXHRcdFx0XHRjYXNlIDQwNDpcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdLaMO0bmcgdHJ1eSBj4bqtcCDEkcaw4bujYyBBUEknKVxyXG5cdFx0XHRcdFx0YnJlYWtcclxuXHRcdFx0XHRjYXNlIDUwMDpcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdM4buXaSBBUEknKVxyXG5cdFx0XHRcdGNhc2UgNjk6XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhgJUVSUk9SIDY5OmAgKyBgJWMgVVJMYCwgJ2NvbG9yOiByZWQ7IGZvbnQtd2VpZ2h0OiBib2xkJywgJ2NvbG9yOiB5ZWxsb3c7JylcclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJEYXRhKSlcclxuXHRcdFx0XHRcdGJyZWFrXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiAoKSA9PiB7fVxyXG5cdH0sIFtdKVxyXG5cclxuXHRjb25zdCBbY3VycmVudFVybCwgc2V0Q3VycmVudFVybF0gPSB1c2VTdGF0ZSgnJylcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNldEN1cnJlbnRVcmwod2luZG93LmxvY2F0aW9uLmhyZWYpXHJcblx0fSwgW10pXHJcblxyXG5cdGNvbnN0IF9TdWJtaXQgPSAoZGF0YTogYW55KSA9PiB7XHJcblx0XHRsZXQgdHlwZSA9IGdldFR5cGVVUkwoY3VycmVudFVybClcclxuXHRcdHNpZ25JbignY3JlZGVudGlhbHMtc2lnbmluJywge1xyXG5cdFx0XHQuLi5kYXRhLFxyXG5cdFx0XHRjYWxsYmFja1VybDpcclxuXHRcdFx0XHR0eXBlID09ICdMT0NBTEhPU1QnID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMycgOiB0eXBlID09ICdERU1PJyA/ICduZ3V5ZW5odXllbi5tb25hbWVkaWEubmV0JyA6ICdodHRwczovL3BlYS1lbG1zLmhlcm9rdWFwcC5jb20nLFxyXG5cdFx0XHRyZWRpcmVjdDogdHJ1ZVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8TG9naW5Gb3JtIG9uU3VibWl0PXtfU3VibWl0fSBjc3JmVG9rZW49e2NzcmZUb2tlbn0gZXJyb3I9e2hhdmVFcnJvcn0gLz5cclxuXHRcdDwvPlxyXG5cdClcclxufVxyXG5cclxuU2lnbkluLmxheW91dCA9IEF1dGhMYXlvdXRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25JblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcblx0Y29uc3QgcHJvdmlkZXJzID0gYXdhaXQgZ2V0UHJvdmlkZXJzKClcclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHsgcHJvdmlkZXJzIH1cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5cclxuLy8gIC0tLS0tLS0tLUVYUE9SVCBUTyBBUlJBWSBGT1IgU0VMRUNUIEZJRUxELS0tLS0tLS0tXHJcbmV4cG9ydCBjb25zdCBmbVNlbGVjdEFyciA9IChhcnI6IEFycmF5PHsgW2tleTogc3RyaW5nXTogYW55IH0+LCB0aXRsZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBvcHRpb25zID0gW10pID0+IHtcclxuXHRpZiAoQXJyYXkuaXNBcnJheShhcnIpICYmIGFyci5sZW5ndGggPiAwKSB7XHJcblx0XHRyZXR1cm4gYXJyXHJcblx0XHRcdC5maWx0ZXIoKHgpID0+ICh4LkVuYWJsZSA9PT0gZmFsc2UgPyBmYWxzZSA6IHgpKVxyXG5cdFx0XHQubWFwKCh4KSA9PiAoe1xyXG5cdFx0XHRcdHRpdGxlOiB4W3RpdGxlXSxcclxuXHRcdFx0XHR2YWx1ZTogeFt2YWx1ZV0sXHJcblx0XHRcdFx0b3B0aW9uczogb3B0aW9ucy5yZWR1Y2UoKG9iaiwgbykgPT4gKHsgLi4ub2JqLCBbb106IHhbb10gfSksIHt9KVxyXG5cdFx0XHR9KSlcclxuXHR9XHJcblx0cmV0dXJuIFtdXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVJlcGVhdEVsZW1lbnRTb3J0ZWQoYXJyLCBuKSB7XHJcblx0aWYgKG4gPT0gMCB8fCBuID09IDEpIHJldHVybiBuXHJcblxyXG5cdGxldCB0ZW1wID0gW2FyclswXV1cclxuXHQvLyBTdGFydCB0cmF2ZXJzaW5nIGVsZW1lbnRzXHJcblx0bGV0IGogPSAwXHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuIC0gMTsgaSsrKSBpZiAoYXJyW2ldICE9IGFycltpICsgMV0pIHRlbXAucHVzaChhcnJbaSArIDFdKVxyXG5cdHJldHVybiB0ZW1wXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjbGVhck9wdGlvbnNEdXBsaWNhdGUgPSAoYXJyOiBJT3B0aW9uQ29tbW9uW10pID0+IHtcclxuXHRyZXR1cm4gYXJyLnJlZHVjZSgobmV3QXJyLCBvKSA9PiB7XHJcblx0XHRpZiAoIW5ld0Fyci5zb21lKChvMikgPT4gbzIudmFsdWUgPT09IG8udmFsdWUpKSB7XHJcblx0XHRcdG5ld0Fyci5wdXNoKG8pXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbmV3QXJyXHJcblx0fSwgW10pXHJcbn1cclxuZXhwb3J0IGNvbnN0IGZtQXJyYXlUb09iamVjdFdpdGhTcGVjaWFsS2V5ID0gKGFyciwga2V5KSA9PiB7XHJcblx0cmV0dXJuIGFyci5yZWR1Y2UoKG5ld09iaiwgcykgPT4ge1xyXG5cdFx0bmV3T2JqW3Nba2V5XV0gPyBuZXdPYmpbc1trZXldXS5wdXNoKHMpIDogKG5ld09ialtzW2tleV1dID0gW3NdKVxyXG5cdFx0cmV0dXJuIG5ld09ialxyXG5cdH0sIHt9KVxyXG59XHJcbmV4cG9ydCBjb25zdCBudW1iZXJXaXRoQ29tbWFzID0gKG51bWJlcjogYW55KSA9PiB7XHJcblx0aWYgKG51bWJlciA9PSAnJyB8fCBudW1iZXIgPT0gdW5kZWZpbmVkIHx8IG51bWJlciA9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gJydcclxuXHR9XHJcblxyXG5cdG51bWJlciArPSAnJ1xyXG5cdGxldCB4ID0gbnVtYmVyLnNwbGl0KCcuJylcclxuXHRsZXQgeDEgPSB4WzBdXHJcblx0bGV0IHgyID0geC5sZW5ndGggPiAxID8gJy4nICsgeFsxXSA6ICcnXHJcblx0bGV0IHJneCA9IC8oXFxkKykoXFxkezN9KS9cclxuXHR3aGlsZSAocmd4LnRlc3QoeDEpKSB7XHJcblx0XHR4MSA9IHgxLnJlcGxhY2Uocmd4LCAnJDEnICsgJywnICsgJyQyJylcclxuXHR9XHJcblx0cmV0dXJuIHgxICsgeDJcclxufVxyXG5leHBvcnQgY29uc3QgbWF0aFJvdW5kID0gKG51bWJlcikgPT4ge1xyXG5cdHJldHVybiBNYXRoLnJvdW5kKG51bWJlciAqIDEwMCkgLyAxMDBcclxufVxyXG5leHBvcnQgY29uc3QgZm1EYXRlRnJvbU5vdyA9IChkYXRlKSA9PiB7XHJcblx0Y29uc3QgbG9jYWwgPSBtb21lbnQoZGF0ZSkubG9jYWwoKVxyXG5cdGxldCBmb3JtYXR0ZWREYXRlID0gJydcclxuXHRjb25zdCBkYXlzID0gbW9tZW50KCkuZGlmZihsb2NhbCwgJ2RheXMnKVxyXG5cdGlmIChkYXlzID49IDIpIHtcclxuXHRcdGZvcm1hdHRlZERhdGUgPSBsb2NhbC5sb2NhbGUoJ3ZpJykuZm9ybWF0KCdERC9NTS9ZWVlZIEhIOm1tJylcclxuXHR9IGVsc2Uge1xyXG5cdFx0Zm9ybWF0dGVkRGF0ZSA9IGxvY2FsLmxvY2FsZSgndmknKS5mcm9tTm93KClcclxuXHR9XHJcblx0cmV0dXJuIGZvcm1hdHRlZERhdGVcclxufVxyXG5leHBvcnQgY29uc3QgcGFyc2VQcmljZVN0clRvTnVtYmVyID0gKHN0cjogbnVtYmVyIHwgc3RyaW5nKSA9PiBwYXJzZUludChzdHIudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEQvZywgJycpKSB8fCAwXHJcblxyXG4vLyBHRVQgVklTSUJMRSBTVEFUVVNcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBhZ2VWaXNpYmlsaXR5KGNiKSB7XHJcblx0Y29uc3QgdGltZW91dElkID0gdXNlUmVmKG51bGwpXHJcblxyXG5cdGxldCBkZWxheSA9IDBcclxuXHJcblx0Y29uc3QgYnJvd3NlckNvbXBhdEFwaSA9ICgpID0+IHtcclxuXHRcdGxldCBoaWRkZW4sIHZpc2liaWxpdHlDaGFuZ2VcclxuXHRcdGlmICgnaGlkZGVuJyBpbiBkb2N1bWVudCkge1xyXG5cdFx0XHRoaWRkZW4gPSAnaGlkZGVuJ1xyXG5cdFx0XHR2aXNpYmlsaXR5Q2hhbmdlID0gJ3Zpc2liaWxpdHljaGFuZ2UnXHJcblx0XHR9IGVsc2UgaWYgKCdtb3pIaWRkZW4nIGluIGRvY3VtZW50KSB7XHJcblx0XHRcdC8vIEZpcmVmb3ggdXAgdG8gdjE3XHJcblx0XHRcdGhpZGRlbiA9ICdtb3pIaWRkZW4nXHJcblx0XHRcdHZpc2liaWxpdHlDaGFuZ2UgPSAnbW96dmlzaWJpbGl0eWNoYW5nZSdcclxuXHRcdH0gZWxzZSBpZiAoJ3dlYmtpdEhpZGRlbicgaW4gZG9jdW1lbnQpIHtcclxuXHRcdFx0Ly8gQ2hyb21lIHVwIHRvIHYzMiwgQW5kcm9pZCB1cCB0byB2NC40LCBCbGFja2JlcnJ5IHVwIHRvIHYxMFxyXG5cdFx0XHRoaWRkZW4gPSAnd2Via2l0SGlkZGVuJ1xyXG5cdFx0XHR2aXNpYmlsaXR5Q2hhbmdlID0gJ3dlYmtpdHZpc2liaWxpdHljaGFuZ2UnXHJcblx0XHR9XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRoaWRkZW4sXHJcblx0XHRcdHZpc2liaWxpdHlDaGFuZ2VcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IGNsZWFudXBUaW1lb3V0ID0gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXRJZC5jdXJyZW50KVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgeyBoaWRkZW4sIHZpc2liaWxpdHlDaGFuZ2UgfSA9IGJyb3dzZXJDb21wYXRBcGkoKVxyXG5cclxuXHRcdGlmICh0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpIHRocm93IG5ldyBFcnJvcignY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uJylcclxuXHJcblx0XHRjb25zdCBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlID0gKCkgPT4ge1xyXG5cdFx0XHRpZiAoZGVsYXkpIHtcclxuXHRcdFx0XHRpZiAodHlwZW9mIGRlbGF5ICE9PSAnbnVtYmVyJyB8fCBkZWxheSA8IDApIHtcclxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcignZGVsYXkgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXInKVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKHRpbWVvdXRJZC5jdXJyZW50KSBjbGVhbnVwVGltZW91dCgpXHJcblx0XHRcdFx0dGltZW91dElkLmN1cnJlbnQgPSBzZXRUaW1lb3V0KCgpID0+IGNiKCFkb2N1bWVudFtoaWRkZW5dKSwgZGVsYXkpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y2IoIWRvY3VtZW50W2hpZGRlbl0pXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHZpc2liaWxpdHlDaGFuZ2UsIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UpXHJcblxyXG5cdFx0cmV0dXJuICgpID0+IHtcclxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih2aXNpYmlsaXR5Q2hhbmdlLCBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlKVxyXG5cdFx0fVxyXG5cdH0sIFtjYl0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwYXJzZVRvTW9uZXkgPSAodmFsdWU6IGFueSkgPT4ge1xyXG5cdGlmICh2YWx1ZSA9PSAnJyB8fCB2YWx1ZSA9PSB1bmRlZmluZWQgfHwgdmFsdWUgPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuICcnXHJcblx0fVxyXG5cclxuXHR2YWx1ZSArPSAnJ1xyXG5cdGxldCB4ID0gdmFsdWUuc3BsaXQoJy4nKVxyXG5cdGxldCB4MSA9IHhbMF1cclxuXHRsZXQgeDIgPSB4Lmxlbmd0aCA+IDEgPyAnLicgKyB4WzFdIDogJydcclxuXHRsZXQgcmd4ID0gLyhcXGQrKShcXGR7M30pL1xyXG5cdHdoaWxlIChyZ3gudGVzdCh4MSkpIHtcclxuXHRcdHgxID0geDEucmVwbGFjZShyZ3gsICckMScgKyAnLCcgKyAnJDInKVxyXG5cdH1cclxuXHRyZXR1cm4geDEgKyB4MlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlRGF0ZU9iamVjdCA9IChkYXRlU3RhdGUsIGxvY2FsZSkgPT4ge1xyXG5cdGNvbnN0IHllYXIgPSBkYXRlU3RhdGUuZ2V0RnVsbFllYXIoKVxyXG5cdGNvbnN0IG1vbnRoID0gZGF0ZVN0YXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhsb2NhbGUsIHsgbW9udGg6ICdsb25nJyB9KVxyXG5cdGNvbnN0IGRhdGUgPSBkYXRlU3RhdGUuZ2V0RGF0ZSgpXHJcblx0Y29uc3QgaG91ciA9ICgnMCcgKyBkYXRlU3RhdGUuZ2V0SG91cnMoKSkuc2xpY2UoLTIpXHJcblx0Y29uc3QgbWludXRlID0gKCcwJyArIGRhdGVTdGF0ZS5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKVxyXG5cdGNvbnN0IHNlY29uZCA9ICgnMCcgKyBkYXRlU3RhdGUuZ2V0U2Vjb25kcygpKS5zbGljZSgtMilcclxuXHRyZXR1cm4geyB5ZWFyLCBtb250aCwgZGF0ZSwgaG91ciwgbWludXRlLCBzZWNvbmQgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VHlwZVVSTCA9IChwYXJhbTogYW55KSA9PiB7XHJcblx0aWYgKHBhcmFtICE9PSB1bmRlZmluZWQgJiYgcGFyYW0gIT09IG51bGwgJiYgcGFyYW0gIT09ICcnKSB7XHJcblx0XHRpZiAocGFyYW1bNF0gPT0gJzonKSB7XHJcblx0XHRcdHJldHVybiAnTE9DQUxIT1NUJ1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHBhcmFtWzRdID09ICdzJyAmJiBwYXJhbVs4XSA9PSAnYScgJiYgcGFyYW1bOV0gPT0gJ3AnICYmIHBhcmFtWzEwXSA9PSAncCcpIHtcclxuXHRcdFx0XHRyZXR1cm4gJ0xJVkUnXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuICdIRVJPS1UnXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ob29rLWZvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaHRtbC1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtb25lc2lnbmFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9