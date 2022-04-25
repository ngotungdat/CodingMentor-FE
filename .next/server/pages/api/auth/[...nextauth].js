module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/api/auth/[...nextauth].tsx");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./src/pages/api/auth/[...nextauth].tsx":
/*!**********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ "next-auth");
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ "next-auth/providers");
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/services/auth */ "./src/services/auth.tsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const options = {
  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Credentials({
    id: 'credentials-signin',
    name: 'Tài khoản',
    authorize: async credentials => {
      try {
        const rs = credentials !== null && credentials !== void 0 && credentials.isSocial ? await Object(_services_auth__WEBPACK_IMPORTED_MODULE_2__["SocialLogin"])(credentials) : await Object(_services_auth__WEBPACK_IMPORTED_MODULE_2__["login"])(credentials);
        return credentials !== null && credentials !== void 0 && credentials.isSocial ? Promise.resolve(rs) : Promise.resolve(rs.data);
      } catch (error) {
        return Promise.reject(new Error(encodeURIComponent(JSON.stringify(error))));
      }
    }
  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Credentials({
    id: 'credentials-dev-signin',
    name: 'Dev signin',
    authorize: async credentials => {
      try {
        const rs = await Object(_services_auth__WEBPACK_IMPORTED_MODULE_2__["loginByDev"])(credentials);
        return Promise.resolve(rs.data);
      } catch (error) {
        return Promise.reject(new Error(encodeURIComponent(JSON.stringify(error))));
      }
    }
  })],
  session: {
    jwt: true
  },
  jwt: {
    secret: 'YzQzYzg0MzljNzE5ODk0ZDQwZGQ0NGNhOGI5MmU4OThlNmVlODZlYTc0M2Y5MjFjNDdmYWI2ZmJmZjFjNjBjMQ==',
    encryption: true
  },
  callbacks: {
    signIn: async (user, account, profile) => {
      return Promise.resolve(true);
    },
    session: async (session, token) => {
      if (token) {
        session.accessToken = token.token;
        session.user = _objectSpread({}, token.data);
      }

      return Promise.resolve(session);
    },
    jwt: async (token, user, account, profile, isNewUser) => {
      const isSignIn = user ? true : false;

      if (isSignIn) {
        token.auth_time = Math.floor(Date.now() / 1000);
      }

      if ((account === null || account === void 0 ? void 0 : account.type) === 'credentials') {
        const newToken = _objectSpread(_objectSpread(_objectSpread({}, token), user), {}, {
          isNewUser
        });

        return Promise.resolve(newToken);
      }

      return Promise.resolve(token);
    },
    redirect: async (url, baseUrl) => {
      return url.startsWith(baseUrl) ? Promise.resolve(baseUrl) : Promise.resolve(baseUrl);
    }
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signin',
    error: '/auth/signin',
    newUser: null
  },
  debug: true
};

const Auth = (req, res) => next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, options);

/* harmony default export */ __webpack_exports__["default"] = (Auth);

/***/ }),

/***/ "./src/services/auth.tsx":
/*!*******************************!*\
  !*** ./src/services/auth.tsx ***!
  \*******************************/
/*! exports provided: login, loginByDev, registerAPI, SocialLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginByDev", function() { return loginByDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerAPI", function() { return registerAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLogin", function() { return SocialLogin; });
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instance */ "./src/services/instance.tsx");
/* harmony import */ var _appConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/appConfig */ "./src/appConfig.js");



const FormData = __webpack_require__(/*! form-data */ "form-data");

const login = async params => {
  try {
    const formData = new FormData();
    formData.append('username', params.username);
    formData.append('password', params.password);
    const res = await _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post('/api/Account/LoginV2', formData, {
      headers: formData.getHeaders()
    });
    return res;
  } catch (error) {
    console.log('login error', error);
    return Promise.reject(error);
  }
};
const loginByDev = async params => {
  try {
    const formData = new FormData();
    formData.append('roleId', params.roleId);
    const res = await _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post('/api/LoginByDev', formData, {
      headers: formData.getHeaders()
    });
    return res;
  } catch (error) {
    console.log('login error', error);
    return Promise.reject(error);
  }
};
const registerAPI = async params => {
  try {
    const res = await _instance__WEBPACK_IMPORTED_MODULE_0__["instance"].post('/auth/signup', params);
    return res;
  } catch (error) {
    console.log('register error', error);
    return Promise.reject(error);
  }
};
const SocialLogin = async params => {
  try {
    var myHeaders = new Headers();
    myHeaders.append('token', params === null || params === void 0 ? void 0 : params.tokenId);
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow'
    };
    let res = '';
    let link = (params === null || params === void 0 ? void 0 : params.type) == 'google' ? '/api/LoginByGoogleAccount' : '/api/LoginByFacebook';
    await fetch(_appConfig__WEBPACK_IMPORTED_MODULE_1__["default"].hostURL + link, requestOptions).then(response => response.text()).then(result => {
      res = JSON.parse(result);
    }).catch(error => console.log('error', error));
    return res;
  } catch (error) {
    return Promise.reject(error);
  }
};

/***/ }),

/***/ "./src/services/instance.tsx":
/*!***********************************!*\
  !*** ./src/services/instance.tsx ***!
  \***********************************/
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



const SHOW_LOG = false;
const NODE_STATUS = "development";

const isShowLog = e => {
  if (e === '/api/Idioms/getRandoms' || e === '/api/Rules') {
    return false;
  } else {
    return NODE_STATUS == 'production' && !!SHOW_LOG ? true : false;
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
  isShowLog(url) && console.log(`%c ${config.method.toUpperCase()} - ${url}:`, 'color: #0086b3; font-weight: bold', config);
  return config;
}, error => {
  isShowLog('') && console.log(`%c ${error.response.status}  :`, 'color: red; font-weight: bold', error.response.data);
  return Promise.reject(error);
});
instance.interceptors.response.use(response => {
  return response;
}, function (error) {
  if (!!(error !== null && error !== void 0 && error.response)) {
    var _error$response, _error$response2, _error$response3;

    isShowLog('') && console.log(`%c ${error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status}  :`, 'color: red; font-weight: bold', error === null || error === void 0 ? void 0 : (_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : _error$response2.data);
    return !!(error !== null && error !== void 0 && (_error$response3 = error.response) !== null && _error$response3 !== void 0 && _error$response3.data) ? Promise.reject(error.response.data) : Promise.reject(error);
  } else if (error.request) {
    var _error$response4, _error$response5;

    isShowLog('') && console.log(`%c ${JSON.stringify(error)}  :`, 'color: red; font-weight: bold', error === null || error === void 0 ? void 0 : (_error$response4 = error.response) === null || _error$response4 === void 0 ? void 0 : _error$response4.data);
    return !!(error !== null && error !== void 0 && (_error$response5 = error.response) !== null && _error$response5 !== void 0 && _error$response5.data) ? Promise.reject(error.response.data) : Promise.reject(error);
  } else {
    var _error$response6;

    isShowLog('') && console.log(`%c ${JSON.stringify(error)}  :`, 'color: red; font-weight: bold', 'Hình như là setting sai');
    return !!(error !== null && error !== void 0 && (_error$response6 = error.response) !== null && _error$response6 !== void 0 && _error$response6.data) ? Promise.reject(error.response.data) : Promise.reject(error);
  }
});

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "form-data":
/*!****************************!*\
  !*** external "form-data" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("form-data");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth/client");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth/providers");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcENvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2F1dGgudHN4Iiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9pbnN0YW5jZS50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmb3JtLWRhdGFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiIl0sIm5hbWVzIjpbIl8iLCJwcmltYXJ5Q29sb3IiLCJzZWNvbmRDb2xvciIsImNocm9tZVRpdGxlIiwiZGVzY3JpcHRpb24iLCJob3N0VVJMIiwicHJvY2VzcyIsIk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVCIsIm9wdGlvbnMiLCJwcm92aWRlcnMiLCJQcm92aWRlcnMiLCJDcmVkZW50aWFscyIsImlkIiwibmFtZSIsImF1dGhvcml6ZSIsImNyZWRlbnRpYWxzIiwicnMiLCJpc1NvY2lhbCIsIlNvY2lhbExvZ2luIiwibG9naW4iLCJQcm9taXNlIiwicmVzb2x2ZSIsImRhdGEiLCJlcnJvciIsInJlamVjdCIsIkVycm9yIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImxvZ2luQnlEZXYiLCJzZXNzaW9uIiwiand0Iiwic2VjcmV0IiwiZW5jcnlwdGlvbiIsImNhbGxiYWNrcyIsInNpZ25JbiIsInVzZXIiLCJhY2NvdW50IiwicHJvZmlsZSIsInRva2VuIiwiYWNjZXNzVG9rZW4iLCJpc05ld1VzZXIiLCJpc1NpZ25JbiIsImF1dGhfdGltZSIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJ0eXBlIiwibmV3VG9rZW4iLCJyZWRpcmVjdCIsInVybCIsImJhc2VVcmwiLCJzdGFydHNXaXRoIiwicGFnZXMiLCJzaWduT3V0IiwibmV3VXNlciIsImRlYnVnIiwiQXV0aCIsInJlcSIsInJlcyIsIk5leHRBdXRoIiwiRm9ybURhdGEiLCJyZXF1aXJlIiwicGFyYW1zIiwiZm9ybURhdGEiLCJhcHBlbmQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiaW5zdGFuY2UiLCJwb3N0IiwiaGVhZGVycyIsImdldEhlYWRlcnMiLCJjb25zb2xlIiwibG9nIiwicm9sZUlkIiwicmVnaXN0ZXJBUEkiLCJteUhlYWRlcnMiLCJIZWFkZXJzIiwidG9rZW5JZCIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwibGluayIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwidGV4dCIsInJlc3VsdCIsInBhcnNlIiwiY2F0Y2giLCJTSE9XX0xPRyIsIk5PREVfU1RBVFVTIiwiaXNTaG93TG9nIiwiZSIsImdldFVybCIsImNvbmZpZyIsImJhc2VVUkwiLCJyZXBsYWNlIiwic3BsaXQiLCJhdXRoSGVhZGVyX1giLCJnZXRTZXNzaW9uIiwiYXV0aEhlYWRlcl9CZWFyZXIiLCJBdXRob3JpemF0aW9uIiwiYXhpb3MiLCJjcmVhdGUiLCJBY2NlcHQiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwidG9VcHBlckNhc2UiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FB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O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsZ0QiLCJmaWxlIjoicGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHN4XCIpO1xuIiwiY29uc3QgXyA9IHtcclxuXHRwcmltYXJ5Q29sb3I6ICcjNTA2ODRCJyxcclxuXHRzZWNvbmRDb2xvcjogJyNlYWVkZTgnLFxyXG5cdGNocm9tZVRpdGxlOiAnQ29kaW5nIE1lbnRvcicsXHJcblx0ZGVzY3JpcHRpb246ICdDb2RpbmcgTWVudG9yJyxcclxuXHRob3N0VVJMOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgX1xyXG4iLCJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJ1xyXG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMnXHJcbmltcG9ydCB7IFNvY2lhbExvZ2luLCBsb2dpbiwgbG9naW5CeURldiB9IGZyb20gJ34vc2VydmljZXMvYXV0aCdcclxuXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHRQcm92aWRlcnMuQ3JlZGVudGlhbHMoe1xyXG5cdFx0XHRpZDogJ2NyZWRlbnRpYWxzLXNpZ25pbicsXHJcblx0XHRcdG5hbWU6ICdUw6BpIGtob+G6o24nLFxyXG5cdFx0XHRhdXRob3JpemU6IGFzeW5jIChjcmVkZW50aWFsczogYW55KSA9PiB7XHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdGNvbnN0IHJzOiBhbnkgPSBjcmVkZW50aWFscz8uaXNTb2NpYWwgPyBhd2FpdCBTb2NpYWxMb2dpbihjcmVkZW50aWFscykgOiBhd2FpdCBsb2dpbihjcmVkZW50aWFscylcclxuXHRcdFx0XHRcdHJldHVybiBjcmVkZW50aWFscz8uaXNTb2NpYWwgPyBQcm9taXNlLnJlc29sdmUocnMpIDogUHJvbWlzZS5yZXNvbHZlKHJzLmRhdGEpXHJcblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGVycm9yKSkpKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSksXHJcblx0XHRQcm92aWRlcnMuQ3JlZGVudGlhbHMoe1xyXG5cdFx0XHRpZDogJ2NyZWRlbnRpYWxzLWRldi1zaWduaW4nLFxyXG5cdFx0XHRuYW1lOiAnRGV2IHNpZ25pbicsXHJcblx0XHRcdGF1dGhvcml6ZTogYXN5bmMgKGNyZWRlbnRpYWxzOiBhbnkpID0+IHtcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0Y29uc3QgcnM6IGFueSA9IGF3YWl0IGxvZ2luQnlEZXYoY3JlZGVudGlhbHMpXHJcblx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJzLmRhdGEpXHJcblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGVycm9yKSkpKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHRdLFxyXG5cclxuXHRzZXNzaW9uOiB7XHJcblx0XHRqd3Q6IHRydWVcclxuXHR9LFxyXG5cclxuXHRqd3Q6IHtcclxuXHRcdHNlY3JldDogJ1l6UXpZemcwTXpsak56RTVPRGswWkRRd1pHUTBOR05oT0dJNU1tVTRPVGhsTm1WbE9EWmxZVGMwTTJZNU1qRmpORGRtWVdJMlptSm1aakZqTmpCak1RPT0nLFxyXG5cdFx0ZW5jcnlwdGlvbjogdHJ1ZVxyXG5cdH0sXHJcblxyXG5cdGNhbGxiYWNrczoge1xyXG5cdFx0c2lnbkluOiBhc3luYyAodXNlciwgYWNjb3VudCwgcHJvZmlsZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpXHJcblx0XHR9LFxyXG5cdFx0c2Vzc2lvbjogYXN5bmMgKHNlc3Npb24sIHRva2VuKSA9PiB7XHJcblx0XHRcdGlmICh0b2tlbikge1xyXG5cdFx0XHRcdHNlc3Npb24uYWNjZXNzVG9rZW4gPSB0b2tlbi50b2tlblxyXG5cdFx0XHRcdHNlc3Npb24udXNlciA9IHsgLi4udG9rZW4uZGF0YSB9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShzZXNzaW9uKVxyXG5cdFx0fSxcclxuXHRcdGp3dDogYXN5bmMgKHRva2VuLCB1c2VyLCBhY2NvdW50LCBwcm9maWxlLCBpc05ld1VzZXIpID0+IHtcclxuXHRcdFx0Y29uc3QgaXNTaWduSW4gPSB1c2VyID8gdHJ1ZSA6IGZhbHNlXHJcblx0XHRcdGlmIChpc1NpZ25Jbikge1xyXG5cdFx0XHRcdHRva2VuLmF1dGhfdGltZSA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApXHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGFjY291bnQ/LnR5cGUgPT09ICdjcmVkZW50aWFscycpIHtcclxuXHRcdFx0XHRjb25zdCBuZXdUb2tlbiA9IHtcclxuXHRcdFx0XHRcdC4uLnRva2VuLFxyXG5cdFx0XHRcdFx0Li4udXNlcixcclxuXHRcdFx0XHRcdGlzTmV3VXNlclxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ld1Rva2VuKVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUodG9rZW4pXHJcblx0XHR9LFxyXG5cdFx0cmVkaXJlY3Q6IGFzeW5jICh1cmwsIGJhc2VVcmwpID0+IHtcclxuXHRcdFx0cmV0dXJuIHVybC5zdGFydHNXaXRoKGJhc2VVcmwpID8gUHJvbWlzZS5yZXNvbHZlKGJhc2VVcmwpIDogUHJvbWlzZS5yZXNvbHZlKGJhc2VVcmwpXHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0cGFnZXM6IHtcclxuXHRcdHNpZ25JbjogJy9hdXRoL3NpZ25pbicsXHJcblx0XHRzaWduT3V0OiAnL2F1dGgvc2lnbmluJyxcclxuXHRcdGVycm9yOiAnL2F1dGgvc2lnbmluJyxcclxuXHRcdG5ld1VzZXI6IG51bGxcclxuXHR9LFxyXG5cclxuXHRkZWJ1ZzogdHJ1ZVxyXG59XHJcblxyXG5jb25zdCBBdXRoID0gKHJlcSwgcmVzKSA9PiBOZXh0QXV0aChyZXEsIHJlcywgb3B0aW9ucylcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICcuL2luc3RhbmNlJ1xyXG5pbXBvcnQgXyBmcm9tICd+L2FwcENvbmZpZydcclxuXHJcbmNvbnN0IEZvcm1EYXRhID0gcmVxdWlyZSgnZm9ybS1kYXRhJylcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbiA9IGFzeW5jIChwYXJhbXM6IGFueSkgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcblx0XHRmb3JtRGF0YS5hcHBlbmQoJ3VzZXJuYW1lJywgcGFyYW1zLnVzZXJuYW1lKVxyXG5cdFx0Zm9ybURhdGEuYXBwZW5kKCdwYXNzd29yZCcsIHBhcmFtcy5wYXNzd29yZClcclxuXHRcdGNvbnN0IHJlczogYW55ID0gYXdhaXQgaW5zdGFuY2UucG9zdCgnL2FwaS9BY2NvdW50L0xvZ2luVjInLCBmb3JtRGF0YSwge1xyXG5cdFx0XHRoZWFkZXJzOiBmb3JtRGF0YS5nZXRIZWFkZXJzKClcclxuXHRcdH0pXHJcblx0XHRyZXR1cm4gcmVzXHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGNvbnNvbGUubG9nKCdsb2dpbiBlcnJvcicsIGVycm9yKVxyXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luQnlEZXYgPSBhc3luYyAocGFyYW1zOiBhbnkpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG5cdFx0Zm9ybURhdGEuYXBwZW5kKCdyb2xlSWQnLCBwYXJhbXMucm9sZUlkKVxyXG5cdFx0Y29uc3QgcmVzOiBhbnkgPSBhd2FpdCBpbnN0YW5jZS5wb3N0KCcvYXBpL0xvZ2luQnlEZXYnLCBmb3JtRGF0YSwge1xyXG5cdFx0XHRoZWFkZXJzOiBmb3JtRGF0YS5nZXRIZWFkZXJzKClcclxuXHRcdH0pXHJcblx0XHRyZXR1cm4gcmVzXHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdGNvbnNvbGUubG9nKCdsb2dpbiBlcnJvcicsIGVycm9yKVxyXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyQVBJID0gYXN5bmMgKHBhcmFtczogYW55KSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlczogYW55ID0gYXdhaXQgaW5zdGFuY2UucG9zdCgnL2F1dGgvc2lnbnVwJywgcGFyYW1zKVxyXG5cdFx0cmV0dXJuIHJlc1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRjb25zb2xlLmxvZygncmVnaXN0ZXIgZXJyb3InLCBlcnJvcilcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcilcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTb2NpYWxMb2dpbiA9IGFzeW5jIChwYXJhbXM6IGFueSkgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHR2YXIgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKVxyXG5cdFx0bXlIZWFkZXJzLmFwcGVuZCgndG9rZW4nLCBwYXJhbXM/LnRva2VuSWQpXHJcblx0XHR2YXIgcmVxdWVzdE9wdGlvbnM6IGFueSA9IHtcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGhlYWRlcnM6IG15SGVhZGVycyxcclxuXHRcdFx0cmVkaXJlY3Q6ICdmb2xsb3cnXHJcblx0XHR9XHJcblx0XHRsZXQgcmVzOiBhbnkgPSAnJ1xyXG5cdFx0bGV0IGxpbms6IHN0cmluZyA9IHBhcmFtcz8udHlwZSA9PSAnZ29vZ2xlJyA/ICcvYXBpL0xvZ2luQnlHb29nbGVBY2NvdW50JyA6ICcvYXBpL0xvZ2luQnlGYWNlYm9vaydcclxuXHRcdGF3YWl0IGZldGNoKF8uaG9zdFVSTCArIGxpbmssIHJlcXVlc3RPcHRpb25zKVxyXG5cdFx0XHQudGhlbigocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG5cdFx0XHQudGhlbigocmVzdWx0OiBhbnkpID0+IHtcclxuXHRcdFx0XHRyZXMgPSBKU09OLnBhcnNlKHJlc3VsdClcclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcikpXHJcblx0XHRyZXR1cm4gcmVzXHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcilcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zLCB7IEF4aW9zUmVxdWVzdENvbmZpZywgQXhpb3NSZXNwb25zZSB9IGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCdcclxuaW1wb3J0IF8gZnJvbSAnfi9hcHBDb25maWcnXHJcblxyXG5jb25zdCBTSE9XX0xPRyA9IGZhbHNlXHJcbmNvbnN0IE5PREVfU1RBVFVTOiBhbnkgPSBwcm9jZXNzLmVudi5OT0RFX0VOVlxyXG5cclxuY29uc3QgaXNTaG93TG9nID0gKGU6IGFueSkgPT4ge1xyXG5cdGlmIChlID09PSAnL2FwaS9JZGlvbXMvZ2V0UmFuZG9tcycgfHwgZSA9PT0gJy9hcGkvUnVsZXMnKSB7XHJcblx0XHRyZXR1cm4gZmFsc2VcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIE5PREVfU1RBVFVTID09ICdwcm9kdWN0aW9uJyAmJiAhIVNIT1dfTE9HID8gdHJ1ZSA6IGZhbHNlXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRVcmwoY29uZmlnOiBhbnkpIHtcclxuXHRyZXR1cm4gISFjb25maWcuYmFzZVVSTCA/IGNvbmZpZy51cmwucmVwbGFjZShjb25maWcuYmFzZVVSTCwgJycpLnNwbGl0KCc/JylbMF0gOiBjb25maWcudXJsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoSGVhZGVyX1ggPSBhc3luYyAoKSA9PiB7XHJcblx0Y29uc3Qgc2Vzc2lvbjogYW55ID0gYXdhaXQgZ2V0U2Vzc2lvbigpXHJcblx0cmV0dXJuICEhc2Vzc2lvbiAmJiAhIXNlc3Npb24uYWNjZXNzVG9rZW4gPyB7IHRva2VuOiBzZXNzaW9uLmFjY2Vzc1Rva2VuIH0gOiB7fVxyXG59XHJcbmV4cG9ydCBjb25zdCBhdXRoSGVhZGVyX0JlYXJlciA9IGFzeW5jICgpID0+IHtcclxuXHRjb25zdCBzZXNzaW9uOiBhbnkgPSBhd2FpdCBnZXRTZXNzaW9uKClcclxuXHRyZXR1cm4gISFzZXNzaW9uICYmICEhc2Vzc2lvbi5hY2Nlc3NUb2tlbiA/IHsgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgc2Vzc2lvbi5hY2Nlc3NUb2tlbiB9IDoge31cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcclxuXHRiYXNlVVJMOiBfLmhvc3RVUkwsXHJcblx0aGVhZGVyczoge1xyXG5cdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcclxuXHR9XHJcbn0pXHJcblxyXG5pbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoXHJcblx0YXN5bmMgKGNvbmZpZzogQXhpb3NSZXF1ZXN0Q29uZmlnKSA9PiB7XHJcblx0XHRjb25zdCB1cmw6IGFueSA9IGdldFVybChjb25maWcpXHJcblx0XHRpc1Nob3dMb2codXJsKSAmJiBjb25zb2xlLmxvZyhgJWMgJHtjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCl9IC0gJHt1cmx9OmAsICdjb2xvcjogIzAwODZiMzsgZm9udC13ZWlnaHQ6IGJvbGQnLCBjb25maWcpXHJcblx0XHRyZXR1cm4gY29uZmlnXHJcblx0fSxcclxuXHQoZXJyb3I6IGFueSkgPT4ge1xyXG5cdFx0aXNTaG93TG9nKCcnKSAmJiBjb25zb2xlLmxvZyhgJWMgJHtlcnJvci5yZXNwb25zZS5zdGF0dXN9ICA6YCwgJ2NvbG9yOiByZWQ7IGZvbnQtd2VpZ2h0OiBib2xkJywgZXJyb3IucmVzcG9uc2UuZGF0YSlcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcilcclxuXHR9XHJcbilcclxuXHJcbmluc3RhbmNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXHJcblx0KHJlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlKSA9PiB7XHJcblx0XHRyZXR1cm4gcmVzcG9uc2VcclxuXHR9LFxyXG5cdGZ1bmN0aW9uIChlcnJvcjogYW55KSB7XHJcblx0XHRpZiAoISFlcnJvcj8ucmVzcG9uc2UpIHtcclxuXHRcdFx0aXNTaG93TG9nKCcnKSAmJiBjb25zb2xlLmxvZyhgJWMgJHtlcnJvcj8ucmVzcG9uc2U/LnN0YXR1c30gIDpgLCAnY29sb3I6IHJlZDsgZm9udC13ZWlnaHQ6IGJvbGQnLCBlcnJvcj8ucmVzcG9uc2U/LmRhdGEpXHJcblx0XHRcdHJldHVybiAhIWVycm9yPy5yZXNwb25zZT8uZGF0YSA/IFByb21pc2UucmVqZWN0KGVycm9yLnJlc3BvbnNlLmRhdGEpIDogUHJvbWlzZS5yZWplY3QoZXJyb3IpXHJcblx0XHR9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcclxuXHRcdFx0aXNTaG93TG9nKCcnKSAmJiBjb25zb2xlLmxvZyhgJWMgJHtKU09OLnN0cmluZ2lmeShlcnJvcil9ICA6YCwgJ2NvbG9yOiByZWQ7IGZvbnQtd2VpZ2h0OiBib2xkJywgZXJyb3I/LnJlc3BvbnNlPy5kYXRhKVxyXG5cdFx0XHRyZXR1cm4gISFlcnJvcj8ucmVzcG9uc2U/LmRhdGEgPyBQcm9taXNlLnJlamVjdChlcnJvci5yZXNwb25zZS5kYXRhKSA6IFByb21pc2UucmVqZWN0KGVycm9yKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aXNTaG93TG9nKCcnKSAmJiBjb25zb2xlLmxvZyhgJWMgJHtKU09OLnN0cmluZ2lmeShlcnJvcil9ICA6YCwgJ2NvbG9yOiByZWQ7IGZvbnQtd2VpZ2h0OiBib2xkJywgJ0jDrG5oIG5oxrAgbMOgIHNldHRpbmcgc2FpJylcclxuXHRcdFx0cmV0dXJuICEhZXJyb3I/LnJlc3BvbnNlPy5kYXRhID8gUHJvbWlzZS5yZWplY3QoZXJyb3IucmVzcG9uc2UuZGF0YSkgOiBQcm9taXNlLnJlamVjdChlcnJvcilcclxuXHRcdH1cclxuXHR9XHJcbilcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZm9ybS1kYXRhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aC9wcm92aWRlcnNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==