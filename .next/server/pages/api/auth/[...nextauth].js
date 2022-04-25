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
  chromeTitle: 'IELTS NGUYỄN HUYỀN - Always Try Your Best',
  description: 'IELTS NGUYỄN HUYỀN',
  hostURL: "https://ielts-nguyenhuyen.monamedia.net"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcENvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2F1dGgudHN4Iiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9pbnN0YW5jZS50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmb3JtLWRhdGFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiIl0sIm5hbWVzIjpbIl8iLCJwcmltYXJ5Q29sb3IiLCJzZWNvbmRDb2xvciIsImNocm9tZVRpdGxlIiwiZGVzY3JpcHRpb24iLCJob3N0VVJMIiwicHJvY2VzcyIsIk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVCIsIm9wdGlvbnMiLCJwcm92aWRlcnMiLCJQcm92aWRlcnMiLCJDcmVkZW50aWFscyIsImlkIiwibmFtZSIsImF1dGhvcml6ZSIsImNyZWRlbnRpYWxzIiwicnMiLCJpc1NvY2lhbCIsIlNvY2lhbExvZ2luIiwibG9naW4iLCJQcm9taXNlIiwicmVzb2x2ZSIsImRhdGEiLCJlcnJvciIsInJlamVjdCIsIkVycm9yIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImxvZ2luQnlEZXYiLCJzZXNzaW9uIiwiand0Iiwic2VjcmV0IiwiZW5jcnlwdGlvbiIsImNhbGxiYWNrcyIsInNpZ25JbiIsInVzZXIiLCJhY2NvdW50IiwicHJvZmlsZSIsInRva2VuIiwiYWNjZXNzVG9rZW4iLCJpc05ld1VzZXIiLCJpc1NpZ25JbiIsImF1dGhfdGltZSIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJ0eXBlIiwibmV3VG9rZW4iLCJyZWRpcmVjdCIsInVybCIsImJhc2VVcmwiLCJzdGFydHNXaXRoIiwicGFnZXMiLCJzaWduT3V0IiwibmV3VXNlciIsImRlYnVnIiwiQXV0aCIsInJlcSIsInJlcyIsIk5leHRBdXRoIiwiRm9ybURhdGEiLCJyZXF1aXJlIiwicGFyYW1zIiwiZm9ybURhdGEiLCJhcHBlbmQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiaW5zdGFuY2UiLCJwb3N0IiwiaGVhZGVycyIsImdldEhlYWRlcnMiLCJjb25zb2xlIiwibG9nIiwicm9sZUlkIiwicmVnaXN0ZXJBUEkiLCJteUhlYWRlcnMiLCJIZWFkZXJzIiwidG9rZW5JZCIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwibGluayIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwidGV4dCIsInJlc3VsdCIsInBhcnNlIiwiY2F0Y2giLCJTSE9XX0xPRyIsIk5PREVfU1RBVFVTIiwiaXNTaG93TG9nIiwiZSIsImdldFVybCIsImNvbmZpZyIsImJhc2VVUkwiLCJyZXBsYWNlIiwic3BsaXQiLCJhdXRoSGVhZGVyX1giLCJnZXRTZXNzaW9uIiwiYXV0aEhlYWRlcl9CZWFyZXIiLCJBdXRob3JpemF0aW9uIiwiYXhpb3MiLCJjcmVhdGUiLCJBY2NlcHQiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwidG9VcHBlckNhc2UiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FB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Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxnRCIsImZpbGUiOiJwYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50c3hcIik7XG4iLCJjb25zdCBfID0ge1xyXG5cdHByaW1hcnlDb2xvcjogJyM1MDY4NEInLFxyXG5cdHNlY29uZENvbG9yOiAnI2VhZWRlOCcsXHJcblx0Y2hyb21lVGl0bGU6ICdJRUxUUyBOR1VZ4buETiBIVVnhu4BOIC0gQWx3YXlzIFRyeSBZb3VyIEJlc3QnLFxyXG5cdGRlc2NyaXB0aW9uOiAnSUVMVFMgTkdVWeG7hE4gSFVZ4buATicsXHJcblx0aG9zdFVSTDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IF9cclxuIiwiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCdcclxuaW1wb3J0IFByb3ZpZGVycyBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzJ1xyXG5pbXBvcnQgeyBTb2NpYWxMb2dpbiwgbG9naW4sIGxvZ2luQnlEZXYgfSBmcm9tICd+L3NlcnZpY2VzL2F1dGgnXHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG5cdHByb3ZpZGVyczogW1xyXG5cdFx0UHJvdmlkZXJzLkNyZWRlbnRpYWxzKHtcclxuXHRcdFx0aWQ6ICdjcmVkZW50aWFscy1zaWduaW4nLFxyXG5cdFx0XHRuYW1lOiAnVMOgaSBraG/huqNuJyxcclxuXHRcdFx0YXV0aG9yaXplOiBhc3luYyAoY3JlZGVudGlhbHM6IGFueSkgPT4ge1xyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRjb25zdCByczogYW55ID0gY3JlZGVudGlhbHM/LmlzU29jaWFsID8gYXdhaXQgU29jaWFsTG9naW4oY3JlZGVudGlhbHMpIDogYXdhaXQgbG9naW4oY3JlZGVudGlhbHMpXHJcblx0XHRcdFx0XHRyZXR1cm4gY3JlZGVudGlhbHM/LmlzU29jaWFsID8gUHJvbWlzZS5yZXNvbHZlKHJzKSA6IFByb21pc2UucmVzb2x2ZShycy5kYXRhKVxyXG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShlcnJvcikpKSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pLFxyXG5cdFx0UHJvdmlkZXJzLkNyZWRlbnRpYWxzKHtcclxuXHRcdFx0aWQ6ICdjcmVkZW50aWFscy1kZXYtc2lnbmluJyxcclxuXHRcdFx0bmFtZTogJ0RldiBzaWduaW4nLFxyXG5cdFx0XHRhdXRob3JpemU6IGFzeW5jIChjcmVkZW50aWFsczogYW55KSA9PiB7XHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdGNvbnN0IHJzOiBhbnkgPSBhd2FpdCBsb2dpbkJ5RGV2KGNyZWRlbnRpYWxzKVxyXG5cdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShycy5kYXRhKVxyXG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShlcnJvcikpKSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0XSxcclxuXHJcblx0c2Vzc2lvbjoge1xyXG5cdFx0and0OiB0cnVlXHJcblx0fSxcclxuXHJcblx0and0OiB7XHJcblx0XHRzZWNyZXQ6ICdZelF6WXpnME16bGpOekU1T0RrMFpEUXdaR1EwTkdOaE9HSTVNbVU0T1RobE5tVmxPRFpsWVRjME0yWTVNakZqTkRkbVlXSTJabUptWmpGak5qQmpNUT09JyxcclxuXHRcdGVuY3J5cHRpb246IHRydWVcclxuXHR9LFxyXG5cclxuXHRjYWxsYmFja3M6IHtcclxuXHRcdHNpZ25JbjogYXN5bmMgKHVzZXIsIGFjY291bnQsIHByb2ZpbGUpID0+IHtcclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKVxyXG5cdFx0fSxcclxuXHRcdHNlc3Npb246IGFzeW5jIChzZXNzaW9uLCB0b2tlbikgPT4ge1xyXG5cdFx0XHRpZiAodG9rZW4pIHtcclxuXHRcdFx0XHRzZXNzaW9uLmFjY2Vzc1Rva2VuID0gdG9rZW4udG9rZW5cclxuXHRcdFx0XHRzZXNzaW9uLnVzZXIgPSB7IC4uLnRva2VuLmRhdGEgfVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoc2Vzc2lvbilcclxuXHRcdH0sXHJcblx0XHRqd3Q6IGFzeW5jICh0b2tlbiwgdXNlciwgYWNjb3VudCwgcHJvZmlsZSwgaXNOZXdVc2VyKSA9PiB7XHJcblx0XHRcdGNvbnN0IGlzU2lnbkluID0gdXNlciA/IHRydWUgOiBmYWxzZVxyXG5cdFx0XHRpZiAoaXNTaWduSW4pIHtcclxuXHRcdFx0XHR0b2tlbi5hdXRoX3RpbWUgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChhY2NvdW50Py50eXBlID09PSAnY3JlZGVudGlhbHMnKSB7XHJcblx0XHRcdFx0Y29uc3QgbmV3VG9rZW4gPSB7XHJcblx0XHRcdFx0XHQuLi50b2tlbixcclxuXHRcdFx0XHRcdC4uLnVzZXIsXHJcblx0XHRcdFx0XHRpc05ld1VzZXJcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXdUb2tlbilcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRva2VuKVxyXG5cdFx0fSxcclxuXHRcdHJlZGlyZWN0OiBhc3luYyAodXJsLCBiYXNlVXJsKSA9PiB7XHJcblx0XHRcdHJldHVybiB1cmwuc3RhcnRzV2l0aChiYXNlVXJsKSA/IFByb21pc2UucmVzb2x2ZShiYXNlVXJsKSA6IFByb21pc2UucmVzb2x2ZShiYXNlVXJsKVxyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdHBhZ2VzOiB7XHJcblx0XHRzaWduSW46ICcvYXV0aC9zaWduaW4nLFxyXG5cdFx0c2lnbk91dDogJy9hdXRoL3NpZ25pbicsXHJcblx0XHRlcnJvcjogJy9hdXRoL3NpZ25pbicsXHJcblx0XHRuZXdVc2VyOiBudWxsXHJcblx0fSxcclxuXHJcblx0ZGVidWc6IHRydWVcclxufVxyXG5cclxuY29uc3QgQXV0aCA9IChyZXEsIHJlcykgPT4gTmV4dEF1dGgocmVxLCByZXMsIG9wdGlvbnMpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoXHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnLi9pbnN0YW5jZSdcclxuaW1wb3J0IF8gZnJvbSAnfi9hcHBDb25maWcnXHJcblxyXG5jb25zdCBGb3JtRGF0YSA9IHJlcXVpcmUoJ2Zvcm0tZGF0YScpXHJcblxyXG5leHBvcnQgY29uc3QgbG9naW4gPSBhc3luYyAocGFyYW1zOiBhbnkpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG5cdFx0Zm9ybURhdGEuYXBwZW5kKCd1c2VybmFtZScsIHBhcmFtcy51c2VybmFtZSlcclxuXHRcdGZvcm1EYXRhLmFwcGVuZCgncGFzc3dvcmQnLCBwYXJhbXMucGFzc3dvcmQpXHJcblx0XHRjb25zdCByZXM6IGFueSA9IGF3YWl0IGluc3RhbmNlLnBvc3QoJy9hcGkvQWNjb3VudC9Mb2dpblYyJywgZm9ybURhdGEsIHtcclxuXHRcdFx0aGVhZGVyczogZm9ybURhdGEuZ2V0SGVhZGVycygpXHJcblx0XHR9KVxyXG5cdFx0cmV0dXJuIHJlc1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRjb25zb2xlLmxvZygnbG9naW4gZXJyb3InLCBlcnJvcilcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcilcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbkJ5RGV2ID0gYXN5bmMgKHBhcmFtczogYW55KSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcclxuXHRcdGZvcm1EYXRhLmFwcGVuZCgncm9sZUlkJywgcGFyYW1zLnJvbGVJZClcclxuXHRcdGNvbnN0IHJlczogYW55ID0gYXdhaXQgaW5zdGFuY2UucG9zdCgnL2FwaS9Mb2dpbkJ5RGV2JywgZm9ybURhdGEsIHtcclxuXHRcdFx0aGVhZGVyczogZm9ybURhdGEuZ2V0SGVhZGVycygpXHJcblx0XHR9KVxyXG5cdFx0cmV0dXJuIHJlc1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRjb25zb2xlLmxvZygnbG9naW4gZXJyb3InLCBlcnJvcilcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcilcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZWdpc3RlckFQSSA9IGFzeW5jIChwYXJhbXM6IGFueSkgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXM6IGFueSA9IGF3YWl0IGluc3RhbmNlLnBvc3QoJy9hdXRoL3NpZ251cCcsIHBhcmFtcylcclxuXHRcdHJldHVybiByZXNcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0Y29uc29sZS5sb2coJ3JlZ2lzdGVyIGVycm9yJywgZXJyb3IpXHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU29jaWFsTG9naW4gPSBhc3luYyAocGFyYW1zOiBhbnkpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0dmFyIG15SGVhZGVycyA9IG5ldyBIZWFkZXJzKClcclxuXHRcdG15SGVhZGVycy5hcHBlbmQoJ3Rva2VuJywgcGFyYW1zPy50b2tlbklkKVxyXG5cdFx0dmFyIHJlcXVlc3RPcHRpb25zOiBhbnkgPSB7XHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRoZWFkZXJzOiBteUhlYWRlcnMsXHJcblx0XHRcdHJlZGlyZWN0OiAnZm9sbG93J1xyXG5cdFx0fVxyXG5cdFx0bGV0IHJlczogYW55ID0gJydcclxuXHRcdGxldCBsaW5rOiBzdHJpbmcgPSBwYXJhbXM/LnR5cGUgPT0gJ2dvb2dsZScgPyAnL2FwaS9Mb2dpbkJ5R29vZ2xlQWNjb3VudCcgOiAnL2FwaS9Mb2dpbkJ5RmFjZWJvb2snXHJcblx0XHRhd2FpdCBmZXRjaChfLmhvc3RVUkwgKyBsaW5rLCByZXF1ZXN0T3B0aW9ucylcclxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlLnRleHQoKSlcclxuXHRcdFx0LnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XHJcblx0XHRcdFx0cmVzID0gSlNPTi5wYXJzZShyZXN1bHQpXHJcblx0XHRcdH0pXHJcblx0XHRcdC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpKVxyXG5cdFx0cmV0dXJuIHJlc1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBheGlvcywgeyBBeGlvc1JlcXVlc3RDb25maWcsIEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXHJcbmltcG9ydCBfIGZyb20gJ34vYXBwQ29uZmlnJ1xyXG5cclxuY29uc3QgU0hPV19MT0cgPSBmYWxzZVxyXG5jb25zdCBOT0RFX1NUQVRVUzogYW55ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlZcclxuXHJcbmNvbnN0IGlzU2hvd0xvZyA9IChlOiBhbnkpID0+IHtcclxuXHRpZiAoZSA9PT0gJy9hcGkvSWRpb21zL2dldFJhbmRvbXMnIHx8IGUgPT09ICcvYXBpL1J1bGVzJykge1xyXG5cdFx0cmV0dXJuIGZhbHNlXHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiBOT0RFX1NUQVRVUyA9PSAncHJvZHVjdGlvbicgJiYgISFTSE9XX0xPRyA/IHRydWUgOiBmYWxzZVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VXJsKGNvbmZpZzogYW55KSB7XHJcblx0cmV0dXJuICEhY29uZmlnLmJhc2VVUkwgPyBjb25maWcudXJsLnJlcGxhY2UoY29uZmlnLmJhc2VVUkwsICcnKS5zcGxpdCgnPycpWzBdIDogY29uZmlnLnVybFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aEhlYWRlcl9YID0gYXN5bmMgKCkgPT4ge1xyXG5cdGNvbnN0IHNlc3Npb246IGFueSA9IGF3YWl0IGdldFNlc3Npb24oKVxyXG5cdHJldHVybiAhIXNlc3Npb24gJiYgISFzZXNzaW9uLmFjY2Vzc1Rva2VuID8geyB0b2tlbjogc2Vzc2lvbi5hY2Nlc3NUb2tlbiB9IDoge31cclxufVxyXG5leHBvcnQgY29uc3QgYXV0aEhlYWRlcl9CZWFyZXIgPSBhc3luYyAoKSA9PiB7XHJcblx0Y29uc3Qgc2Vzc2lvbjogYW55ID0gYXdhaXQgZ2V0U2Vzc2lvbigpXHJcblx0cmV0dXJuICEhc2Vzc2lvbiAmJiAhIXNlc3Npb24uYWNjZXNzVG9rZW4gPyB7IEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHNlc3Npb24uYWNjZXNzVG9rZW4gfSA6IHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcblx0YmFzZVVSTDogXy5ob3N0VVJMLFxyXG5cdGhlYWRlcnM6IHtcclxuXHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXHJcblx0fVxyXG59KVxyXG5cclxuaW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxyXG5cdGFzeW5jIChjb25maWc6IEF4aW9zUmVxdWVzdENvbmZpZykgPT4ge1xyXG5cdFx0Y29uc3QgdXJsOiBhbnkgPSBnZXRVcmwoY29uZmlnKVxyXG5cdFx0aXNTaG93TG9nKHVybCkgJiYgY29uc29sZS5sb2coYCVjICR7Y29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpfSAtICR7dXJsfTpgLCAnY29sb3I6ICMwMDg2YjM7IGZvbnQtd2VpZ2h0OiBib2xkJywgY29uZmlnKVxyXG5cdFx0cmV0dXJuIGNvbmZpZ1xyXG5cdH0sXHJcblx0KGVycm9yOiBhbnkpID0+IHtcclxuXHRcdGlzU2hvd0xvZygnJykgJiYgY29uc29sZS5sb2coYCVjICR7ZXJyb3IucmVzcG9uc2Uuc3RhdHVzfSAgOmAsICdjb2xvcjogcmVkOyBmb250LXdlaWdodDogYm9sZCcsIGVycm9yLnJlc3BvbnNlLmRhdGEpXHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXHJcblx0fVxyXG4pXHJcblxyXG5pbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxyXG5cdChyZXNwb25zZTogQXhpb3NSZXNwb25zZSkgPT4ge1xyXG5cdFx0cmV0dXJuIHJlc3BvbnNlXHJcblx0fSxcclxuXHRmdW5jdGlvbiAoZXJyb3I6IGFueSkge1xyXG5cdFx0aWYgKCEhZXJyb3I/LnJlc3BvbnNlKSB7XHJcblx0XHRcdGlzU2hvd0xvZygnJykgJiYgY29uc29sZS5sb2coYCVjICR7ZXJyb3I/LnJlc3BvbnNlPy5zdGF0dXN9ICA6YCwgJ2NvbG9yOiByZWQ7IGZvbnQtd2VpZ2h0OiBib2xkJywgZXJyb3I/LnJlc3BvbnNlPy5kYXRhKVxyXG5cdFx0XHRyZXR1cm4gISFlcnJvcj8ucmVzcG9uc2U/LmRhdGEgPyBQcm9taXNlLnJlamVjdChlcnJvci5yZXNwb25zZS5kYXRhKSA6IFByb21pc2UucmVqZWN0KGVycm9yKVxyXG5cdFx0fSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XHJcblx0XHRcdGlzU2hvd0xvZygnJykgJiYgY29uc29sZS5sb2coYCVjICR7SlNPTi5zdHJpbmdpZnkoZXJyb3IpfSAgOmAsICdjb2xvcjogcmVkOyBmb250LXdlaWdodDogYm9sZCcsIGVycm9yPy5yZXNwb25zZT8uZGF0YSlcclxuXHRcdFx0cmV0dXJuICEhZXJyb3I/LnJlc3BvbnNlPy5kYXRhID8gUHJvbWlzZS5yZWplY3QoZXJyb3IucmVzcG9uc2UuZGF0YSkgOiBQcm9taXNlLnJlamVjdChlcnJvcilcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlzU2hvd0xvZygnJykgJiYgY29uc29sZS5sb2coYCVjICR7SlNPTi5zdHJpbmdpZnkoZXJyb3IpfSAgOmAsICdjb2xvcjogcmVkOyBmb250LXdlaWdodDogYm9sZCcsICdIw6xuaCBuaMawIGzDoCBzZXR0aW5nIHNhaScpXHJcblx0XHRcdHJldHVybiAhIWVycm9yPy5yZXNwb25zZT8uZGF0YSA/IFByb21pc2UucmVqZWN0KGVycm9yLnJlc3BvbnNlLmRhdGEpIDogUHJvbWlzZS5yZWplY3QoZXJyb3IpXHJcblx0XHR9XHJcblx0fVxyXG4pXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvcm0tZGF0YVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=