module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/styles.css":
/*!*******************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/styles.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _context_wrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/context/wrap */ "./src/context/wrap.tsx");
/* harmony import */ var react_onesignal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-onesignal */ "react-onesignal");
/* harmony import */ var react_onesignal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_onesignal__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/global.scss */ "./src/styles/global.scss");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _appConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/appConfig */ "./src/appConfig.js");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/utils/functions */ "./src/utils/functions/index.tsx");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core/styles.css */ "./node_modules/@fortawesome/fontawesome-svg-core/styles.css");
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_13__);


var _jsxFileName = "D:\\MonaMedia\\Project\\CodingMentor\\CodingMentor-FE\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_12__["config"].autoAddCss = false;
const _1SignalLocalhost = 'aa474546-6a6b-48a4-8c44-bc6035a3e911';
function App({
  Component,
  pageProps
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  const {
    0: currentUrl,
    1: setCurrentUrl
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(() => {
    setCurrentUrl(window.location.href);
    console.log('NODE_ENV: ', "development");
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(() => {
    if (currentUrl !== '') {
      let type = Object(_utils_functions__WEBPACK_IMPORTED_MODULE_11__["getTypeURL"])(currentUrl);
      react_onesignal__WEBPACK_IMPORTED_MODULE_8___default.a.setSubscription(true);
      react_onesignal__WEBPACK_IMPORTED_MODULE_8___default.a.init({
        appId: type == 'LOCALHOST' ? _1SignalLocalhost : type == 'DEMO' ? "dfd4360c-a2cf-4d3a-9dad-9e0f3cf3234d" : "dfd4360c-a2cf-4d3a-9dad-9e0f3cf3234d"
      }).then(() => {
        react_onesignal__WEBPACK_IMPORTED_MODULE_8___default.a.showSlidedownPrompt();
      });
      react_onesignal__WEBPACK_IMPORTED_MODULE_8___default.a.on('popoverShown', function () {});

      const handleRouteChangeError = (err, url) => {
        console.log('handleRouteChangeError', url);
      };

      router.events.on('routeChangeError', handleRouteChangeError);
      return () => {
        router.events.off('routeChangeError', handleRouteChangeError);
      };
    }
  }, [currentUrl]);

  const Layout = Component.layout || (props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: props.children
  }, void 0, false));

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: _appConfig__WEBPACK_IMPORTED_MODULE_10__["default"].chromeTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width, maximum-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "robots",
        content: "noindex"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: _appConfig__WEBPACK_IMPORTED_MODULE_10__["default"].description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "og:title",
        content: _appConfig__WEBPACK_IMPORTED_MODULE_10__["default"].description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/logo.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://www.amcharts.com/lib/3/plugins/export/export.css",
        type: "text/css",
        media: "all"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdn3.devexpress.com/jslib/20.2.7/css/dx.common.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdn3.devexpress.com/jslib/20.2.7/css/dx.light.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdn3.devexpress.com/jslib/20.2.7/css/dx-gantt.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "https://www.amcharts.com/lib/3/amcharts.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "https://www.amcharts.com/lib/3/serial.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "https://www.amcharts.com/lib/3/themes/light.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_auth_client__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
      session: pageProps.session,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_wrap__WEBPACK_IMPORTED_MODULE_7__["WrapProvider"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Layout, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 4
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./src/styles/global.scss":
/*!********************************!*\
  !*** ./src/styles/global.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY291cnNlLWRldGFpbC9jb3Vyc2UtZGV0YWlsLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2NvdXJzZS1kZXRhaWwvZG9jdW1lbnQtc2NoZWR1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY291cnNlLWRldGFpbC9zdHVkZW50LWxpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY291cnNlLW9ubGluZS1kZXRhaWwvYXZhaWxhYmxlLWRheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jb3Vyc2Utb25saW5lL2xlc3Nvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jb3Vyc2Utb25saW5lL3N0dWR5LWRheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jb3Vyc2UvY2hlY2stcm9vbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jb3Vyc2UvY2hlY2stc3R1ZHktdGltZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jb3Vyc2UvY2hlY2stdGVhY2hlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jb3Vyc2UvY291cnNlLW9mLXN0dWRlbnQtcHJpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY291cnNlL2NvdXJzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jb3Vyc2UvbGVzc29uLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2NvdXJzZS9yb2xsdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY291cnNlL3N0dWR5LWRheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jdXN0b21lci9jb250cmFjdC9jb250cmFjdC1jdXN0b21lci1saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2N1c3RvbWVyL2ZpbmFuY2UvZmluYW5jZS1jYXNoaWVyLWludm9pY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY3VzdG9tZXIvZmluYW5jZS9maW5hbmNlLWNhc2hpZXItcGF5bWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jdXN0b21lci9maW5hbmNlL2ZpbmFuY2UtY2FzaGllci1yZWZ1bmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY3VzdG9tZXIvcGFyZW50cy9wYXJlbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2N1c3RvbWVyL3NlcnZpY2Uvc2VydmljZS1jdXN0b21lci1leGFtLXJlc3VsdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jdXN0b21lci9zZXJ2aWNlL3NlcnZpY2UtY3VzdG9tZXItZXhhbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jdXN0b21lci9zZXJ2aWNlL3Rlc3QtY3VzdG9tZXItcG9pbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2N1c3RvbWVyL3NlcnZpY2UvdGVzdC1jdXN0b21lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jdXN0b21lci9zdHVkZW50L2NvdXJzZS1zdHVkZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2N1c3RvbWVyL3N0dWRlbnQvZXhhbS1hcHBvaW50bWVudC1yZXN1bHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY3VzdG9tZXIvc3R1ZGVudC9leGFtLWNvbWluZy1zb29uLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2N1c3RvbWVyL3N0dWRlbnQvc3R1ZGVudC1hZHZpc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY3VzdG9tZXIvc3R1ZGVudC9zdHVkZW50LWNoYW5nZS1jb3Vyc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY3VzdG9tZXIvc3R1ZGVudC9zdHVkZW50LWNoYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jdXN0b21lci9zdHVkZW50L3N0dWRlbnQtbGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jdXN0b21lci9zdHVkZW50L3dhcm5pbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvZG9pbmctdGVzdC9kb2luZy10ZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2V4YW0tZGV0YWlsL2V4YW0tZGV0YWlsLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2V4YW0vZXhhbS10b3BpYy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9leGVyY2lzZS9leGVyY2lzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9leGVyY2lzZS9leGVyY2lzZUdyb3VwLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2ZlZWQtYmFjay9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9pbnN0YW5jZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9uZXdzZmVlZC9iYWNrZ3JvdW5kLW5ld3NmZWVkLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL25ld3NmZWVkL2dyb3VwLW5ld3NmZWVkLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL25ld3NmZWVkL25ld3NmZWVkLWNvbW1lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL25ld3NmZWVkL25ld3NmZWVkLWNvbW1lbnRyZXBseS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvbmV3c2ZlZWQvbmV3c2ZlZWQtbGlrZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvbmV3c2ZlZWQvbmV3c2ZlZWQudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL25ld3NmZWVkL3VzZXItYnJhbmNoLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL25ld3NmZWVkL3VzZXItZ3JvdXAtbmV3c2ZlZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb25lU2lnbmFsL29uZVNpZ25hbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9vcHRpb25zL2FyZWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9icmFuY2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9jb25zdWx0YXRpb24tc3RhdHVzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvY29udHJhY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9jdXJyaWN1bHVtLWRldGFpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9vcHRpb25zL2N1cnJpY3VsdW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9kYXktb2ZmLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvZGlzY291bnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9kaXN0cmljdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9vcHRpb25zL2dyYWRlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvam9iLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvbm90aWZpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvcHJpY2UtZml4LWV4YW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9wcm9ncmFtLWRldGFpbC1wb2ludC1jb2x1bW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9wcm9ncmFtLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvcHVyb3NlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvcm9vbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9vcHRpb25zL3J1bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9vcHRpb25zL3NvdXJjZS1pbmZvbWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvc3RhZmYtc2FsYXJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvc3R1ZHktdGltZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9vcHRpb25zL3N1YmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9zdXBwbGllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9vcHRpb25zL3VzZXJpbmZvcm1hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9vcHRpb25zL3dhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvcGFja2FnZS9wYWNrYWdlLWV4YW1pbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3BhY2thZ2UvcGFja2FnZS1yZXN1bHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvcGFja2FnZS9wYWNrYWdlLXN0dWRlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvcGFja2FnZS9wYWNrYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3BhY2thZ2UvcGF5LWZpeC1leGFtLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3BhY2thZ2UvcGF5LWZpeC1saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3NhbGUvc2FsZS1jYW1wYWlnbi1kZXRhaWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvc2FsZS9zYWxlLWNhbXBhaWduLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3NhbGUvc2FsZS1zYWxhcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvc2FsZS9zYWxlci1yZXZlbnVlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3NhbGUvc2FsZXItdG90YWwtcmV2ZW51ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9zY2hlZHVsZS9jaGVjay1icmFuY2gtc2NoZWR1bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3NjaGVkdWxlL2NoZWNrLXRlYWNoZXItc2NoZWR1bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3NlbGYtY291cnNlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3N0YWZmLW1hbmFnZS9zdGFmZi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9zdGFmZi1tYW5hZ2UvdGFzay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9zdHVkeS1yb2xlL3N0dWR5LXJvbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvdGVhY2hlci90ZWFjaGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3VzZXIvdXNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS92aWRlby1jb3Vyc2UtbGlzdC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS92aWRlby1sZWFybmluZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS96b29tL2NvbWluZy1jb3Vyc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvem9vbS9jb25maWctem9vbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS96b29tL3NjaGVkdWxlLXpvb20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvem9vbS96b29tLXJvb20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcENvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC93cmFwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2Z1bmN0aW9ucy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXV0aC9jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtb25lc2lnbmFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJ1cmwiLCJjb3Vyc2VEZXRhaWxBcGkiLCJnZXRBbGwiLCJwYXJhbXMiLCJpbnN0YW5jZSIsImdldCIsInVwZGF0ZSIsImRhdGEiLCJwdXQiLCJhaGVhZFNjaGVkdWxlIiwiZG9jdW1lbnRTY2hlZHVsZUFwaSIsImFkZCIsInBvc3QiLCJzdHVkZW50TGlzdEluQ291cnNlQXBpIiwiY291cnNlT25saW5lRGV0YWlsQXZhaWxhYmxlRGF5QXBpIiwibGVzc29uT25saW5lQXBpIiwic3R1ZHlEYXlPbmxpbmVBcGkiLCJjaGVja1Jvb21BcGkiLCJjaGVja1N0dWR5VGltZUFwaSIsImNoZWNrIiwiY2hlY2tUZWFjaGVyQXBpIiwiZ2V0QWxsVGVhY2hlckF2YWlsYWJsZSIsImNvdXJzZU9mU3R1ZGVudFByaWNlQXBpIiwiY291cnNlQXBpIiwiZ2V0QnlJZCIsImlkIiwibGVzc29uQXBpIiwiY2FsbEF1dG8iLCJfIiwiQVBJX1VSTCIsImNhbGxBdXRvTWludXRlIiwicm9sbFVwQXBpIiwic3R1ZHlEYXlBcGkiLCJDb250cmFjdEN1c3RvbWVyTGlzdCIsIlBhcmFtcyIsImNvbnRyYWN0Q3VzdG9tZXJMaXN0QXBpIiwiSW52b2ljZSIsImludm9pY2VBcGkiLCJWb3VjaGVyIiwidm91Y2hlckFwaSIsIlJlZnVuZHMiLCJyZWZ1bmRzQXBpIiwiUGFyZW50c0FwaSIsInBhcmVudHNBcGkiLCJTZXJ2aWNlQ3VzdG9tZXJFeGFtUmVzdWx0IiwidG9kb0FwaSIsIklEIiwic2VydmljZUN1c3RvbWVyRXhhbVJlc3VsdEFwaSIsIlNlcnZpY2VDdXN0b21lckV4YW0iLCJzZXJ2aWNlQ3VzdG9tZXJFeGFtQXBpIiwiVGVzdEN1c3RvbWVyUG9pbnRBcGkiLCJ0ZXN0Q3VzdG9tZXJQb2ludEFwaSIsIlRlc3RDdXN0b21lckFwaSIsInRlc3RDdXN0b21lckFwaSIsIkNvdXJzZVN0dWRlbnRBcGkiLCJjb3Vyc2VTdHVkZW50QXBpIiwiZXhhbUFwcG9pbnRtZW50UmVzdWx0QXBpIiwiZGVsZXRlIiwiZ2V0UmVzdWx0RXhhbSIsInVwZGF0ZVBvaW50IiwiY2hlY2tJc1Rlc3RlZCIsIkV4YW1Db21pbmdTb29uIiwiZXhhbUNvbWluZ1Nvb25BcGkiLCJTdHVkZW50QWR2aXNlQXBpIiwic3R1ZGVudEFkdmlzZUFwaSIsIlN0dWRlbnRDaGFuZ2VDb3Vyc2VBcGkiLCJzdHVkZW50Q2hhbmdlQ291cnNlQXBpIiwiU3R1ZGVudENoYW5nZUFwaSIsInN0dWRlbnRDaGFuZ2VBcGkiLCJTdHVkZW50QXBpIiwiZmlsZSIsImZEYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJjb25zb2xlIiwibG9nIiwic3R1ZGVudEFwaSIsIldhcm5pbmciLCJ3YXJuaW5nQXBpIiwiZG9pbmdUZXN0QXBpIiwiZ2V0QnlJRCIsImV4YW1EZXRhaWxBcGkiLCJjcmVhdGVBdXRvIiwiY2hhbmdlUG9zaXRpb24iLCJleGFtVG9waWNBcGkiLCJFeGVyY2lzZUFwaSIsImltcG9ydEV4Y2VsIiwiZXhlcmNpc2VBcGkiLCJFeGVyY2lzZUdyb3VwQXBpIiwiVXBsb2FkQXVkaW8iLCJmb3JtZGF0YSIsImV4ZXJjaXNlR3JvdXBBcGkiLCJGZWVkYmFja0FwaSIsIlNIT1dfTE9HIiwiTk9ERV9TVEFUVVMiLCJpc1Nob3dMb2ciLCJlIiwiZ2V0VXJsIiwiY29uZmlnIiwiYmFzZVVSTCIsInJlcGxhY2UiLCJzcGxpdCIsImF1dGhIZWFkZXJfWCIsInNlc3Npb24iLCJnZXRTZXNzaW9uIiwiYWNjZXNzVG9rZW4iLCJ0b2tlbiIsImF1dGhIZWFkZXJfQmVhcmVyIiwiQXV0aG9yaXphdGlvbiIsImF4aW9zIiwiY3JlYXRlIiwiaG9zdFVSTCIsImhlYWRlcnMiLCJBY2NlcHQiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwidG9TdHJpbmciLCJpbmNsdWRlcyIsImF1dGhIZWFkZXIiLCJtZXRob2QiLCJ0b1VwcGVyQ2FzZSIsImVycm9yIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJQcm9taXNlIiwicmVqZWN0IiwiY2hlY2tSZXNwb25zZSIsInNldFRpbWVvdXQiLCJzaWduSW4iLCJhbGVydCIsIm1lc3NhZ2UiLCJKU09OIiwic3RyaW5naWZ5IiwiQmFja2dyb3VuZE5ld3NGZWVkIiwiYmFja2dyb3VuZE5ld3NGZWVkQXBpIiwiR3JvdXBOZXdzRmVlZCIsImdyb3VwTmV3c0ZlZWRBcGkiLCJOZXdzRmVlZENvbW1lbnQiLCJuZXdzRmVlZENvbW1lbnRBcGkiLCJOZXdzRmVlZENvbW1lbnRSZXBseSIsIm5ld3NGZWVkQ29tbWVudFJlcGx5QXBpIiwiTmV3c0ZlZWRMaWtlIiwibmV3c0ZlZWRMaWtlQXBpIiwiTmV3c0ZlZWQiLCJuZXdzRmVlZEFwaSIsIlVzZXJCcmFuY2giLCJ1c2VyQnJhbmNoQXBpIiwiVXNlckdyb3VwTmV3c0ZlZWQiLCJ1c2VyR3JvdXBOZXdzRmVlZEFwaSIsIm9uZVNpZ25hbEFQSSIsIkFyZWFBcGkiLCJhcmVhQXBpIiwiQnJhbmNoQXBpIiwiYnJhbmNoQXBpIiwiQ29uZmlnIiwiY29uZmlnQXBpIiwiQ29uc3VsdGF0aW9uU3RhdHVzQXBpIiwiY29uc3VsdGF0aW9uU3RhdHVzQXBpIiwiY29udHJhY3RBcGkiLCJDdXJyaWN1bHVtRGV0YWlsQXBpIiwiY3VycmljdWx1bURldGFpbEFwaSIsIkN1cnJpY3VsdW1BcGkiLCJjdXJyaWN1bHVtQXBpIiwiZGF5T2ZmQXBpIiwiRGlzY291bnRBcGkiLCJkaXNjb3VudEFwaSIsIkRpc3RyaWN0QXBpIiwiYXJlYUlEIiwiQXJlYUlEIiwiZGlzdHJpY3RBcGkiLCJHcmFkZUFwaSIsImdyYWRlQXBpIiwiSm9iQXBpIiwiam9iUGFyYW1zIiwiam9iQXBpIiwiTm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9uQXBpIiwiUHJpY2VGaXhFeGFtQXBpIiwicHJpY2VGaXhFeGFtQXBpIiwicHJvZ3JhbURldGFpbFBvaW50Q29sdW1uQXBpIiwiUHJvZ3JhbUFwaSIsInByb2dyYW1BcGkiLCJQdXJvc2UiLCJwdXJvc2VBcGkiLCJSb29tQXBpIiwicm9vbUFwaSIsIlJ1bGVzIiwicnVsZXNBcGkiLCJTZXJ2aWNlQXBpIiwic2VydmljZUFwaSIsIlNvdXJjZUluZm9tYXRpb24iLCJzb3VyY2VJbmZvbWF0aW9uQXBpIiwiU3RhZmZTYWxhcnkiLCJzdGFmZlNhbGFyeUFwaSIsIlN0dWR5VGltZUFwaSIsInN0dWR5VGltZUFwaSIsIlN1YmplY3RBcGkiLCJzdWJqZWN0QXBpIiwiU3VwcGxpZXIiLCJzdXBwbGllckFwaSIsIlVzZXJJbmZvcm1hdGlvbiIsInJvbGUiLCJSb2xlSUQiLCJyb2xlVHlwZSIsInN0eWxlIiwidXNlckluZm9ybWF0aW9uQXBpIiwiV2FyZEFwaSIsIndhcmRBcGkiLCJwYWNrYWdlRXhhbWluZXJBcGkiLCJQYWNrYWdlUmVzdWx0QXBpIiwicGFja2FnZVJlc3VsdEFwaSIsInBhY2thZ2VTdHVkZW50QXBpIiwicGFja2FnZUFwaSIsInVwbG9hZEltZyIsInBheUZpeEV4YW1BcGkiLCJwYXlGaXhMaXN0QXBpIiwicmVzZXRQYXNzd29yZEFwaSIsInNlbmRFbWFpbCIsImNvbmZpcm0iLCJzYWxlQ2FtcGFpZ25EZXRhaWxBcGkiLCJzYWxlQ2FtcGFpZ25BcGkiLCJzYWxlU2FsYXJ5QXBpIiwic2FsZXJSZXZlbnVlQXBpIiwic2FsZXJUb3RhbFJldmVudWVBcGkiLCJjaGVja0JyYW5jaFNjaGVkdWxlU3R1ZHkiLCJjaGVja1RlYWNoZXJTY2hlZHVsZVN0dWR5IiwiY3JlYXRlU2VsZkNvdXJzZSIsImdldFNjaGVkdWxlU2VsZkNvdXJzZSIsImNoZWNrU3R1ZHlUaW1lU2VsZkNvdXJzZSIsImRhdGUiLCJjdXJyaWN1bHVtc0RldGFpbElEIiwiY2hlY2tUZWFjaGVyU2VsZkNvdXJzZSIsInN0dWR5VGltZUlEIiwidXBkYXRlU2NoZWR1bGVTZWxmQ291cnNlIiwiY2FuY2VsU2NoZWR1bGVTZWxmQ291cnNlIiwiZ2V0UmFuZ2VUaW1lU2VsZkNvdXJzZSIsInNldFJhbmdlVGltZVNlbGZDb3Vyc2UiLCJTdGFmZkFwaSIsInN0YWZmQXBpIiwidGFza0dyb3VwQXBpIiwidXJsMiIsInRhc2tBcGkiLCJ1cmwzIiwic3RhZmZPZlRhc2tHcm91cEFwaSIsIlN0dWR5Um9sZUFwaSIsInN0dWR5Um9sZUFwaSIsInRlYWNoZXJBcGkiLCJ1cGRhdGVCcmFuY2giLCJ1cGRhdGVSb2xlIiwiZ2V0QWxsVGVhY2hlckZvclN1YmplY3QiLCJ1cGRhdGVUZWFjaGVyRm9yU3ViamVjdCIsInVwZGF0ZVRlYWNoZXJGb3JBbGxTdWJqZWN0IiwiZ2V0VGVhY2hlckJ5UHJvZ3JhbSIsImdldEN1cnJpY3VsdW0iLCJhc3NpZ24iLCJVc2VyQXBpIiwiY2hhbmdlUGFzc3dvcmQiLCJjcmVhdGVBY2NvdW50IiwidXNlckFwaSIsIlZpZGVvQ291cnNlTGlzdEFwaSIsInBhZ2VJbmRleCIsInBhZ2VTaXplIiwic2VhcmNoIiwiZ2V0QnlVc2VyIiwidXBkYXRlQWN0aXZlQ29kZSIsInVwZGF0ZUxpbWl0Qm9va2luZyIsImRvbmVQYXlVcmwiLCJEb25lUGF5QXBpIiwiUGF5bWVudFN0YXR1cyIsIlZpZGVvQ291cnNlT2ZTdHVkZW50IiwiR2V0QnlJRCIsIlVwZGF0ZVNlZW5BbmRUaW1lV2F0Y2hlZFZpZGVvIiwiR2V0TGVzc29uSW5Qcm9ncmVzcyIsInVybEludGVyYWN0aW8iLCJWaWRlb0NvdXJzZUludGVyYWN0aW9uIiwiTGlzdFFBIiwiTGlzdE5vdGUiLCJMaXN0TGlzdEFubm91bmNlbWVudCIsInZpZGVvY291cnNlSUQiLCJ1cmxWaWRlb0NvdXJzZXMiLCJWaWRlb0NvdXJzZXMiLCJMaXN0U2VjdGlvbiIsIkxpc3RMZXNzb24iLCJMZXNzb25EZXRhaWwiLCJjb21pbmdDb3Vyc2VBcGkiLCJjb25maWdab29tQXBpIiwiZ2V0SW5hY3RpdmVDb25maWdab29tIiwic2NoZWR1bGVab29tQXBpIiwiem9vbVJvb21BcGkiLCJjcmVhdGVSb29tIiwic2NoZWR1bGVJRCIsImNsb3NlUm9vbSIsImdldFJlY29yZCIsInByaW1hcnlDb2xvciIsInNlY29uZENvbG9yIiwiY2hyb21lVGl0bGUiLCJkZXNjcmlwdGlvbiIsInByb2Nlc3MiLCJORVhUX1BVQkxJQ19BUElfRU5EUE9JTlQiLCJXcmFwQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ0aXRsZVBhZ2UiLCJnZXRSb3V0ZXIiLCJnZXRUaXRsZVBhZ2UiLCJzaG93Tm90aSIsImdldERhdGFVc2VyIiwidXNlckluZm9ybWF0aW9uIiwidXNlQWxsUm9sZXMiLCJ1c2VTdGFmZlJvbGVzIiwiaXNBZG1pbiIsInJlbG9hZE5vdGlmaWNhdGlvbiIsImhhbmRsZVJlbG9hZE5vdGkiLCJGdW5jdGlvbiIsInJlbG9hZENhcnQiLCJoYW5kbGVSZWxvYWRDYXJ0IiwiV3JhcFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInBhdGgiLCJsb2FkaW5nIiwidXNlU2Vzc2lvbiIsInNldFRpdGxlUGFnZSIsInVzZVN0YXRlIiwidXNlckluZm8iLCJzZXRVc2VySW5mbyIsInJvbGVzIiwic2V0Um9sZXMiLCJzdGFmZlJvbGVzIiwic2V0U3RhZmZSb2xlcyIsInNldElzQWRtaW4iLCJzZXRSZWxvYWROb3RpZmljYXRpb24iLCJzZXRSZWxvYWRDYXJ0IiwidGl0bGUiLCJ0eXBlIiwiY29udGVudCIsIm5vZGVOb3RpIiwidG9hc3QiLCJzdWNjZXNzIiwid2FybmluZyIsImdldFJvbGVzIiwiY2hlY2tJc0FkbWluIiwiZ2V0TmV3RGF0YVVzZXIiLCJyZXMiLCJnZXROZXciLCJwb3N0T25lc2lnbmFsSUQiLCJ1c2VySWQiLCJPbmVTaWduYWwiLCJnZXRVc2VySWQiLCJ1c2VFZmZlY3QiLCJ1c2VXcmFwIiwidXNlQ29udGV4dCIsImF1dG9BZGRDc3MiLCJfMVNpZ25hbExvY2FsaG9zdCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImN1cnJlbnRVcmwiLCJzZXRDdXJyZW50VXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZ2V0VHlwZVVSTCIsInNldFN1YnNjcmlwdGlvbiIsImluaXQiLCJhcHBJZCIsIk5FWFRfUFVCTElDX09ORV9TSUdOQUwiLCJ0aGVuIiwic2hvd1NsaWRlZG93blByb21wdCIsIm9uIiwiaGFuZGxlUm91dGVDaGFuZ2VFcnJvciIsImVyciIsImV2ZW50cyIsIm9mZiIsIkxheW91dCIsImxheW91dCIsInByb3BzIiwiZm1TZWxlY3RBcnIiLCJhcnIiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJmaWx0ZXIiLCJ4IiwiRW5hYmxlIiwibWFwIiwicmVkdWNlIiwib2JqIiwibyIsInJlbW92ZVJlcGVhdEVsZW1lbnRTb3J0ZWQiLCJuIiwidGVtcCIsImoiLCJpIiwicHVzaCIsImNsZWFyT3B0aW9uc0R1cGxpY2F0ZSIsIm5ld0FyciIsInNvbWUiLCJvMiIsImZtQXJyYXlUb09iamVjdFdpdGhTcGVjaWFsS2V5Iiwia2V5IiwibmV3T2JqIiwicyIsIm51bWJlcldpdGhDb21tYXMiLCJudW1iZXIiLCJ1bmRlZmluZWQiLCJ4MSIsIngyIiwicmd4IiwidGVzdCIsIm1hdGhSb3VuZCIsIk1hdGgiLCJyb3VuZCIsImZtRGF0ZUZyb21Ob3ciLCJsb2NhbCIsIm1vbWVudCIsImZvcm1hdHRlZERhdGUiLCJkYXlzIiwiZGlmZiIsImxvY2FsZSIsImZvcm1hdCIsImZyb21Ob3ciLCJwYXJzZVByaWNlU3RyVG9OdW1iZXIiLCJzdHIiLCJwYXJzZUludCIsInVzZVBhZ2VWaXNpYmlsaXR5IiwiY2IiLCJ0aW1lb3V0SWQiLCJ1c2VSZWYiLCJkZWxheSIsImJyb3dzZXJDb21wYXRBcGkiLCJoaWRkZW4iLCJ2aXNpYmlsaXR5Q2hhbmdlIiwiZG9jdW1lbnQiLCJjbGVhbnVwVGltZW91dCIsImNsZWFyVGltZW91dCIsImN1cnJlbnQiLCJFcnJvciIsImhhbmRsZVZpc2liaWxpdHlDaGFuZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInBhcnNlVG9Nb25leSIsImNyZWF0ZURhdGVPYmplY3QiLCJkYXRlU3RhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImdldERhdGUiLCJob3VyIiwiZ2V0SG91cnMiLCJzbGljZSIsIm1pbnV0ZSIsImdldE1pbnV0ZXMiLCJzZWNvbmQiLCJnZXRTZWNvbmRzIiwicGFyYW0iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckdBO0FBQ0E7QUFDQTtBQUVBLE1BQU0rQyxRQUFRLEdBQUcsSUFBakI7QUFDQSxNQUFNQyxXQUFnQixnQkFBdEI7O0FBRUEsTUFBTUMsU0FBUyxHQUFJQyxDQUFELElBQVk7QUFDN0IsTUFBSUEsQ0FBQyxLQUFLLHdCQUFOLElB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Qm1ELEtBQUssS0FBSyxJQUFqQyxJQUF5Q0EsS0FBSyxLQUFLLEVBQXZELEVBQTJEO0FBQzFELFFBQUlBLEtBQUssQ0FBQyxDQUFELENBQUwsSUFBWSxHQUFoQixFQUFxQjtBQUNwQixhQUFPLFdBQVA7QUFDQSxLQUZELE1BRU87QUFDTixVQUFJQSxLQUFLLENBQUMsQ0FBRCxDQUFMLElBQVksR0FBWixJQUFtQkEsS0FBSyxDQUFDLENBQUQsQ0FBTCxJQUFZLEdBQS9CLElBQXNDQSxLQUFLLENBQUMsQ0FBRCxDQUFMLElBQVksR0FBbEQsSUFBeURBLEtBQUssQ0FBQyxFQUFELENBQUwsSUFBYSxHQUExRSxFQUErRTtBQUM5RSxlQUFPLE1BQVA7QUFDQSxPQUZELE1BRU87QUFDTixlQUFPLFFBQVA7QUFDQTtBQUNEO0FBQ0Q7QUFDRCxDQVpNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkpQLDhDOzs7Ozs7Ozs7OztBQ0FBLDhEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL0NvdXJzZVNjaGVkdWxlcy8nO1xyXG5cclxudHlwZSBJVHlwZUZvck9wdGlvbkZldGNoQXZhaWxhYmxlU2NoZWR1bGUgPSB7XHJcblx0aWQ6IG51bWJlcjtcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0c2VsZWN0OiBib29sZWFuO1xyXG59O1xyXG5leHBvcnQgdHlwZSBJQXBpQ291cnNlU2NoZWR1bGU8VCA9IGFueT4gPSB7XHJcblx0ZGF0YTogVDtcclxuXHRtZXNzYWdlOiBzdHJpbmc7XHJcblx0dG90YWxSb3c6IG51bWJlcjtcclxuXHRzdHVkeVRpbWVzOiBJVHlwZUZvck9wdGlvbkZldGNoQXZhaWxhYmxlU2NoZWR1bGVbXTtcclxuXHRyb29tczogSVR5cGVGb3JPcHRpb25GZXRjaEF2YWlsYWJsZVNjaGVkdWxlW107XHJcbn07XHJcbmV4cG9ydCBjb25zdCBjb3Vyc2VEZXRhaWxBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpQ291cnNlU2NoZWR1bGU8SUNvdXJzZURldGFpbFNjaGVkdWxlW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIEPhuq1wIG5o4bqtdFxyXG5cdHVwZGF0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHRhaGVhZFNjaGVkdWxlKHBhcmFtczogeyBjb3Vyc2VTY2hlZHVsZUlkOiBudW1iZXI7IHRlYWNoZXJJZDogbnVtYmVyIH0pIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaUNvdXJzZVNjaGVkdWxlPElDb3Vyc2VEZXRhaWxTY2hlZHVsZVtdPj4oJy9hcGkvbHVpTGljaEhvYycsIHsgcGFyYW1zIH0pO1xyXG5cdH1cclxufTtcclxuIiwiaW1wb3J0IHtpbnN0YW5jZX0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvRG9jdW1lbnRPZkNvdXJzZS8nO1xyXG5leHBvcnQgY29uc3QgZG9jdW1lbnRTY2hlZHVsZUFwaSA9IHtcclxuXHQvLyBD4bqtcCBuaOG6rXRcclxuXHRhZGQoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuXHR9LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1N0dWRlbnRJbkNvdXJzZS8nO1xyXG50eXBlIElBcGlSZXN1bHRTdHVkZW50SW5Db3Vyc2U8VCA9IGFueT4gPSB7XHJcblx0c3R1ZGVudExpc3Q6IFQ7XHJcblx0bWVzc2FnZTogc3RyaW5nO1xyXG5cdFRvdGFsUm93OiBudW1iZXI7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBzdHVkZW50TGlzdEluQ291cnNlQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdFN0dWRlbnRJbkNvdXJzZTxJU3R1ZGVudExpc3RJbkNvdXJzZVtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtc1xyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG4iLCJpbXBvcnQge2luc3RhbmNlfSBmcm9tICcuLi9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9BdmFpbGFibGVEYXRlT25saW5lLyc7XHJcbmV4cG9ydCBjb25zdCBjb3Vyc2VPbmxpbmVEZXRhaWxBdmFpbGFibGVEYXlBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJQ291cnNlRGV0YWlsQXZhaWxhYmxlRGF5W10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zLFxyXG5cdFx0fSk7XHJcblx0fSxcclxufTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICcuLi9pbnN0YW5jZSdcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL0xlc3Nvbk9ubGluZSdcclxuZXhwb3J0IGNvbnN0IGxlc3Nvbk9ubGluZUFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElMZXNzb24+KHVybCwge1xyXG5cdFx0XHRwYXJhbXNcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnLi4vaW5zdGFuY2UnXHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9TdHVkeURheU9ubGluZSdcclxuZXhwb3J0IGNvbnN0IHN0dWR5RGF5T25saW5lQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVN0dWR5RGF5W10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJy4uL2luc3RhbmNlJ1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvQ2hlY2tSb29tLydcclxuZXhwb3J0IGNvbnN0IGNoZWNrUm9vbUFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElDaGVja1NjaGVkdWxlW10+Pih1cmwsIHsgcGFyYW1zIH0pXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL0NoZWNrU3R1ZHlUaW1lLyc7XHJcbmV4cG9ydCBjb25zdCBjaGVja1N0dWR5VGltZUFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRjaGVjayhkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdDxJQXBpUmVzdWx0RGF0YTxJQ2hlY2tTdHVkeVRpbWVbXT4+KHVybCwgZGF0YSk7XHJcblx0fSxcclxufTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICcuLi9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9DaGVja1RlYWNoZXIvJztcclxuZXhwb3J0IGNvbnN0IGNoZWNrVGVhY2hlckFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElDaGVja1NjaGVkdWxlW10+Pih1cmwsIHsgcGFyYW1zIH0pO1xyXG5cdH0sXHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhIC0gZWRpdCBraMOzYSBo4buNY1xyXG5cdGdldEFsbFRlYWNoZXJBdmFpbGFibGUocGFyYW1zOiB7IENvdXJzZUlEOiBudW1iZXI7IFN0dWR5VGltZUlEOiBudW1iZXI7IFByb2dyYW1JRDogbnVtYmVyOyBCcmFuY2hJRDogbnVtYmVyOyBEYXRlOiBzdHJpbmcgfSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTx7IFVzZXJJbmZvcm1hdGlvbklEOiBudW1iZXI7IEZ1bGxOYW1lVW5pY29kZTogc3RyaW5nIH1bXT4+KCcvYXBpL1RlYWNoZXJBdmFpbGFibGUnLCB7IHBhcmFtcyB9KTtcclxuXHR9XHJcbn07XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvQ291cnNlT2ZTdHVkZW50UHJpY2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvdXJzZU9mU3R1ZGVudFByaWNlQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8YW55Pj4odXJsLCB7XHJcblx0XHRcdHBhcmFtc1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblx0fVxyXG59O1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL0NvdXJzZS8nO1xyXG5leHBvcnQgY29uc3QgY291cnNlQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUNvdXJzZVtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtc1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyB1cGRhdGUgbeG7m2kgZGF0YVxyXG5cdHVwZGF0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHJcblx0Z2V0QnlJZChpZDogbnVtYmVyKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElDb3Vyc2VEZXRhaWw+PihgJHt1cmx9JHtpZH1gKTtcclxuXHR9XHJcbn07XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnLi4vaW5zdGFuY2UnXHJcbmltcG9ydCBfIGZyb20gJ34vYXBwQ29uZmlnJ1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvTGVzc29uLydcclxuZXhwb3J0IGNvbnN0IGxlc3NvbkFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElMZXNzb24+KHVybCwge1xyXG5cdFx0XHRwYXJhbXNcclxuXHRcdH0pXHJcblx0fSxcclxuXHJcblx0Y2FsbEF1dG8oZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dChgJHtfLkFQSV9VUkx9L2FwaS9QdXNoYCwgbnVsbClcclxuXHR9LFxyXG5cclxuXHRjYWxsQXV0b01pbnV0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KGAke18uQVBJX1VSTH0vYXBpL1B1c2hPbmVNaW51dGVgLCBudWxsKVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQge2luc3RhbmNlfSBmcm9tICcuLi9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9Sb2xsVXAvJztcclxuZXhwb3J0IGNvbnN0IHJvbGxVcEFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElSb2xsVXBbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXMsXHJcblx0XHR9KTtcclxuXHR9LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJy4uL2luc3RhbmNlJ1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvU3R1ZHlEYXkvJ1xyXG5leHBvcnQgY29uc3Qgc3R1ZHlEYXlBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU3R1ZHlEYXlbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXNcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY29uc3QgdXJsID0gXCIvYXBpL0NvbnRyYWN0T2ZTdHVkZW50XCI7XHJcblxyXG5jbGFzcyBDb250cmFjdEN1c3RvbWVyTGlzdCB7XHJcbiAgZ2V0QWxsID0gKFBhcmFtczogYW55KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElDb250cmFjdEN1c3RvbWVyTGlzdFtdPj4odXJsLCB7XHJcbiAgICAgIHBhcmFtczogUGFyYW1zLFxyXG4gICAgfSk7XHJcblxyXG4gIGdldERldGFpbCA9IChpZDogbnVtYmVyKSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElDb250cmFjdEN1c3RvbWVyTGlzdD4+KGAke3VybH0vJHtpZH1gKTtcclxuXHJcbiAgdXBkYXRlID0gKGRhdGEpID0+IGluc3RhbmNlLnB1dCh1cmwsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnRyYWN0Q3VzdG9tZXJMaXN0QXBpID0gbmV3IENvbnRyYWN0Q3VzdG9tZXJMaXN0KCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL0ludm9pY2UnO1xyXG5cclxuY2xhc3MgSW52b2ljZSB7XHJcblx0Z2V0QWxsID0gKFBhcmFtczogYW55KSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElJbnZvaWNlW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zOiBQYXJhbXNcclxuXHRcdH0pO1xyXG5cclxuXHRnZXREZXRhaWwgPSAoaWQ6IG51bWJlcikgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElJbnZvaWNlPj4oYCR7dXJsfS8ke2lkfWApO1xyXG5cclxuXHR1cGRhdGUgPSAoZGF0YSkgPT4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSwge30pO1xyXG5cclxuXHRleHBvcnQgPSAoaWQpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YT4oYC9hcGkvRXhwb3J0SW52b2ljZS8ke2lkfWApO1xyXG5cclxuXHRzZW5kTWFpbCA9IChpZCkgPT4gaW5zdGFuY2UucG9zdChgYXBpL1NlbmRNYWlsSW52b2ljZS8ke2lkfWApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW52b2ljZUFwaSA9IG5ldyBJbnZvaWNlKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1ZvdWNoZXInO1xyXG5cclxuY2xhc3MgVm91Y2hlciB7XHJcblx0Z2V0QWxsID0gKFBhcmFtczogYW55KSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElWb3VjaGVyW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zOiBQYXJhbXNcclxuXHRcdH0pO1xyXG5cclxuXHRnZXREZXRhaWwgPSAoaWQ6IG51bWJlcikgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElWb3VjaGVyPj4oYCR7dXJsfS8ke2lkfWApO1xyXG5cclxuXHR1cGRhdGUgPSAoZGF0YSkgPT4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSwge30pO1xyXG5cclxuXHRleHBvcnQgPSAoaWQpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YT4oYC9hcGkvRXhwb3J0Vm91Y2hlci8ke2lkfWApO1xyXG5cclxuXHRzZW5kTWFpbCA9IChpZCkgPT4gaW5zdGFuY2UucG9zdChgYXBpL1NlbmRNYWlsVm91Y2hlci8ke2lkfWApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgdm91Y2hlckFwaSA9IG5ldyBWb3VjaGVyKCk7XHJcbiIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9SZWZ1bmRzJztcclxuXHJcbmNsYXNzIFJlZnVuZHMge1xyXG5cdGdldEFsbCA9IChQYXJhbXM6IGFueSkgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJUmVmdW5kc1tdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtczogUGFyYW1zLFxyXG5cdFx0fSk7XHJcblxyXG5cdGdldERldGFpbCA9IChpZDogbnVtYmVyKSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElSZWZ1bmRzPj4oYCR7dXJsfS8ke2lkfWApO1xyXG5cclxuXHRhZGQgPSAoZGF0YSkgPT4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG5cclxuXHR1cGRhdGUgPSAoZGF0YSkgPT4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSwge30pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVmdW5kc0FwaSA9IG5ldyBSZWZ1bmRzKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1BhcmVudHMnO1xyXG5cclxuY2xhc3MgUGFyZW50c0FwaSB7XHJcblx0Z2V0QWxsID0gKFBhcmFtczogYW55KSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElQYXJlbnRzW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zOiBQYXJhbXNcclxuXHRcdH0pO1xyXG5cclxuXHRnZXREZXRhaWwgPSAoaWQ6IG51bWJlcikgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElQYXJlbnRzPj4oYCR7dXJsfS8ke2lkfWApO1xyXG5cclxuXHRhZGQgPSAoZGF0YTogSVBhcmVudHMpID0+IGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuXHJcblx0dXBkYXRlID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSwge30pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGFyZW50c0FwaSA9IG5ldyBQYXJlbnRzQXBpKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY2xhc3MgU2VydmljZUN1c3RvbWVyRXhhbVJlc3VsdCB7XHJcbiAgZ2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU2VydmljZUN1c3RvbWVyRXhhbVJlc3VsdFtdPj4oXCIvYXBpL1N0dWRlbnRFeGFtT2ZTZXJ2aWNlUmVzdWx0XCIsIHtcclxuICAgICAgcGFyYW1zOiB0b2RvQXBpLFxyXG4gICAgfSk7XHJcblxyXG4gIGdldFdpdGhJRCA9IChJRDogbnVtYmVyKSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHQ8SVNlcnZpY2VDdXN0b21lckV4YW1SZXN1bHRbXT4+KGAvYXBpL1N0dWRlbnRFeGFtT2ZTZXJ2aWNlUmVzdWx0LyR7SUR9YCk7XHJcblxyXG4gIGFkZCA9IChkYXRhOiBJU2VydmljZUN1c3RvbWVyRXhhbVJlc3VsdCkgPT4gaW5zdGFuY2UucG9zdChcIi9hcGkvU3R1ZGVudEV4YW1PZlNlcnZpY2VSZXN1bHQvXCIsIGRhdGEsIHt9KTtcclxuXHJcbiAgdXBkYXRlID0gKGRhdGEpID0+IGluc3RhbmNlLnB1dChcIi9hcGkvU3R1ZGVudEV4YW1PZlNlcnZpY2VSZXN1bHQvXCIsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlcnZpY2VDdXN0b21lckV4YW1SZXN1bHRBcGkgPSBuZXcgU2VydmljZUN1c3RvbWVyRXhhbVJlc3VsdCgpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNsYXNzIFNlcnZpY2VDdXN0b21lckV4YW0ge1xyXG4gIGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVNlcnZpY2VDdXN0b21lckV4YW1bXT4+KFwiL2FwaS9TdHVkZW50RXhhbU9mU2VydmljZVwiLCB7XHJcbiAgICAgIHBhcmFtczogdG9kb0FwaSxcclxuICAgIH0pO1xyXG5cclxuICBnZXRXaXRoSUQgPSAoSUQ6IG51bWJlcikgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0PElTZXJ2aWNlQ3VzdG9tZXJFeGFtW10+PihgL2FwaS9TdHVkZW50RXhhbU9mU2VydmljZS8ke0lEfWApO1xyXG5cclxuICBhZGQgPSAoZGF0YTogSVNlcnZpY2VDdXN0b21lckV4YW0pID0+IGluc3RhbmNlLnBvc3QoXCIvYXBpL1N0dWRlbnRFeGFtT2ZTZXJ2aWNlL1wiLCBkYXRhLCB7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXJ2aWNlQ3VzdG9tZXJFeGFtQXBpID0gbmV3IFNlcnZpY2VDdXN0b21lckV4YW0oKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jb25zdCB1cmwgPSBcIi9hcGkvRXhhbUFwcG9pbnRtZW50UmVzdWx0L1wiO1xyXG5jbGFzcyBUZXN0Q3VzdG9tZXJQb2ludEFwaSB7XHJcbiAgZ2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVGVzdEN1c3RvbWVyUG9pbnRbXT4+KHVybCwge1xyXG4gICAgICBwYXJhbXM6IHRvZG9BcGksXHJcbiAgICB9KTtcclxuXHJcbiAgZ2V0V2l0aElEID0gKElEOiBudW1iZXIpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVRlc3RDdXN0b21lclBvaW50Pj4odXJsICsgSUQpO1xyXG5cclxuICBhZGQgPSAoZGF0YTogSVN0dWRlbnQpID0+IGluc3RhbmNlLnBvc3QodXJsLCBkYXRhLCB7fSk7XHJcblxyXG4gIHVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dCh1cmwsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRlc3RDdXN0b21lclBvaW50QXBpID0gbmV3IFRlc3RDdXN0b21lclBvaW50QXBpKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL0V4YW1BcHBvaW50bWVudC8nO1xyXG5jbGFzcyBUZXN0Q3VzdG9tZXJBcGkge1xyXG5cdGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVRlc3RDdXN0b21lcltdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtczogdG9kb0FwaVxyXG5cdFx0fSk7XHJcblxyXG5cdGdldFdpdGhJRCA9IChJRDogbnVtYmVyKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdDxJVGVzdEN1c3RvbWVyPj4odXJsICsgSUQpO1xyXG5cclxuXHRhZGQgPSAoZGF0YTogSVN0dWRlbnQpID0+IGluc3RhbmNlLnBvc3QodXJsLCBkYXRhLCB7fSk7XHJcblxyXG5cdHVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dCh1cmwsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRlc3RDdXN0b21lckFwaSA9IG5ldyBUZXN0Q3VzdG9tZXJBcGkoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jb25zdCB1cmwgPSBcIi9hcGkvQ291cnNlT2ZTdHVkZW50XCI7XHJcblxyXG5jbGFzcyBDb3Vyc2VTdHVkZW50QXBpIHtcclxuICBnZXRBbGwgPSAoUGFyYW1zOiBhbnkpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUNvdXJzZU9mU3R1ZGVudFtdPj4odXJsLCB7XHJcbiAgICAgIHBhcmFtczogUGFyYW1zLFxyXG4gICAgfSk7XHJcblxyXG4gIGdldERldGFpbCA9IChpZDogbnVtYmVyKSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElDb3Vyc2VPZlN0dWRlbnQ+PihgJHt1cmx9LyR7aWR9YCk7XHJcblxyXG4gIHVwZGF0ZSA9IChkYXRhOiBJQ291cnNlT2ZTdHVkZW50KSA9PiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhLCB7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb3Vyc2VTdHVkZW50QXBpID0gbmV3IENvdXJzZVN0dWRlbnRBcGkoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvRXhhbUFwcG9pbnRtZW50UmVzdWx0Lyc7XHJcbmV4cG9ydCBjb25zdCBleGFtQXBwb2ludG1lbnRSZXN1bHRBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJRXhhbUFwcG9pbnRtZW50UmVzdWx0W10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIEzhuqV5IHRoZW8gaWRcclxuXHRnZXRCeUlkKGlkOiBudW1iZXIpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUV4YW1BcHBvaW50bWVudFJlc3VsdD4+KGAke3VybH0ke2lkfWApO1xyXG5cdH0sXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFkZChkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gWMOzYSBkYXRhXHJcblx0ZGVsZXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cclxuXHRnZXRSZXN1bHRFeGFtKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxhbnk+KCcvYXBpL0V4YW1BcHBvaW50bWVudFJlc3VsdERldGFpbCcsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cclxuXHR1cGRhdGVQb2ludChkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KCcvYXBpL0V4YW1BcHBvaW50bWVudEV4ZXJjaXNlU3R1ZGVudCcsIGRhdGEpO1xyXG5cdH0sXHJcblxyXG5cdC8vIEtp4buDbSB0cmEgxJHhu4EgaOG6uW4gdGVzdCBuw6B5IMSRw6MgxJHGsOG7o2MgbMOgbSBoYXkgY2jGsGFcclxuXHRjaGVja0lzVGVzdGVkKGlkKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElFeGFtQXBwb2ludG1lbnRSZXN1bHRbXT4+KGAvYXBpL0V4YW1BcHBvaW50bWVudFJlc3VsdGNoZWNrUmVzdWx0LyR7aWR9YCk7XHJcblx0fVxyXG59O1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNsYXNzIEV4YW1Db21pbmdTb29uIHtcclxuICBnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElFeGFtQ29taW5nU29vbltdPj4oXCIvYXBpL0V4YW1Db21pbmdTb29uXCIsIHtcclxuICAgICAgcGFyYW1zOiB0b2RvQXBpLFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBleGFtQ29taW5nU29vbkFwaSA9IG5ldyBFeGFtQ29taW5nU29vbigpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9DdXN0b21lckNvbnN1bHRhdGlvbi8nO1xyXG5jbGFzcyBTdHVkZW50QWR2aXNlQXBpIHtcclxuXHRnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdHVkZW50QWR2aXNlW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zOiB0b2RvQXBpXHJcblx0XHR9KTtcclxuXHJcblx0Z2V0V2l0aElEID0gKElEOiBudW1iZXIpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU3R1ZGVudEFkdmlzZT4+KHVybCArIElEKTtcclxuXHJcblx0YWRkID0gKGRhdGE6IElTdHVkZW50KSA9PiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSwge30pO1xyXG5cclxuXHR1cGRhdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhLCB7fSk7XHJcblxyXG5cdGFkZE5vdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wb3N0KCcvYXBpL05vdGVPZkN1c3RvbWVyJywgZGF0YSwge30pO1xyXG5cclxuXHR1cGRhdGVOb3RlID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucHV0KCcvYXBpL05vdGVPZkN1c3RvbWVyJywgZGF0YSwge30pO1xyXG5cclxuXHRzZW5kRW1haWwgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wb3N0KCcvYXBpL1NlbmRNYWlsQ3VzdG9tZXInLCBkYXRhLCB7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzdHVkZW50QWR2aXNlQXBpID0gbmV3IFN0dWRlbnRBZHZpc2VBcGkoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jb25zdCB1cmwgPSBcIi9hcGkvQ291cnNlT2ZTdHVkZW50Q2hhbmdlL1wiO1xyXG5cclxuY2xhc3MgU3R1ZGVudENoYW5nZUNvdXJzZUFwaSB7XHJcbiAgZ2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU3R1ZGVudENoYW5nZUNvdXJzZVtdPj4odXJsLCB7XHJcbiAgICAgIHBhcmFtczogdG9kb0FwaSxcclxuICAgIH0pO1xyXG5cclxuICBnZXRXaXRoSUQgPSAoSUQ6IG51bWJlcikgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU3R1ZGVudENoYW5nZUNvdXJzZT4+KHVybCArIElEKTtcclxuXHJcbiAgYWRkID0gKGRhdGE6IElTdHVkZW50KSA9PiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSwge30pO1xyXG5cclxuICB1cGRhdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhLCB7fSk7XHJcblxyXG4gIGNoYW5nZUNvdXJzZSA9IChkYXRhOiBJQ291cnNlT2ZTdHVkZW50Q2hhbmdlKSA9PiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSwge30pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3R1ZGVudENoYW5nZUNvdXJzZUFwaSA9IG5ldyBTdHVkZW50Q2hhbmdlQ291cnNlQXBpKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY29uc3QgdXJsID0gXCIvYXBpL0NvdW5zZWxvcnNDaGFuZ2UvXCI7XHJcblxyXG5jbGFzcyBTdHVkZW50Q2hhbmdlQXBpIHtcclxuICBnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdHVkZW50Q2hhbmdlW10+Pih1cmwsIHtcclxuICAgICAgcGFyYW1zOiB0b2RvQXBpLFxyXG4gICAgfSk7XHJcblxyXG4gIGdldFdpdGhJRCA9IChJRDogbnVtYmVyKSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdHVkZW50Q2hhbmdlPj4odXJsICsgSUQpO1xyXG5cclxuICBhZGQgPSAoZGF0YTogSVN0dWRlbnQpID0+IGluc3RhbmNlLnBvc3QodXJsLCBkYXRhLCB7fSk7XHJcblxyXG4gIHVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dCh1cmwsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN0dWRlbnRDaGFuZ2VBcGkgPSBuZXcgU3R1ZGVudENoYW5nZUFwaSgpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSc7XHJcblxyXG5jbGFzcyBTdHVkZW50QXBpIHtcclxuXHRnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdHVkZW50W10+PignL2FwaS9TdHVkZW50LycsIHtcclxuXHRcdFx0cGFyYW1zOiB0b2RvQXBpXHJcblx0XHR9KTtcclxuXHJcblx0Z2V0V2l0aElEID0gKElEOiBudW1iZXIpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU3R1ZGVudD4+KGAvYXBpL1N0dWRlbnQvJHtJRH1gKTtcclxuXHJcblx0YWRkID0gKGRhdGE6IElTdHVkZW50KSA9PiBpbnN0YW5jZS5wb3N0KCcvYXBpL1N0dWRlbnQnLCBkYXRhLCB7fSk7XHJcblxyXG5cdGNyZWF0ZUFjY291bnQgPSAoZGF0YTogSVN0dWRlbnQpID0+IGluc3RhbmNlLnBvc3QoJy9hcGkvQ3JlYXRlQWNjb3VudCcsIGRhdGEsIHt9KTtcclxuXHJcblx0dXBkYXRlID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucHV0KCcvYXBpL1N0dWRlbnQvJywgZGF0YSwge30pO1xyXG5cclxuXHQvLyB1cGxvYWRJbWFnZSA9IChmaWxlOiBhbnkpID0+XHJcblxyXG5cdC8vICAgaW5zdGFuY2UucG9zdChcIi9hcGkvVXNlckluZm9ybWF0aW9uL3VwbG9hZEltYWdlXCIsIGZpbGUsIHt9KTtcclxuXHJcblx0dXBsb2FkSW1hZ2UgPSAoZmlsZTogYW55KSA9PiB7XHJcblx0XHRsZXQgZkRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHRcdGZEYXRhLmFwcGVuZCgnRmlsZScsIGZpbGUpO1xyXG5cdFx0Y29uc29sZS5sb2coJ0ZEQVRBOiAnLCBmRGF0YSk7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCgnL2FwaS9Vc2VySW5mb3JtYXRpb24vdXBsb2FkSW1hZ2UnLCBmRGF0YSwge30pO1xyXG5cdH07XHJcblxyXG5cdGdldENvdXJzZU9mU3R1ZGVudERldGFpbCA9IChJRDogbnVtYmVyKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVN0dWRlbnQ+PihgL2FwaS9HZXRDb3Vyc2VBbmRUZWFjaGVyT2ZTdHVkZW50LyR7SUR9YCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzdHVkZW50QXBpID0gbmV3IFN0dWRlbnRBcGkoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jbGFzcyBXYXJuaW5nIHtcclxuICBnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElXYXJuaW5nW10+PihcIi9hcGkvV2FybmluZ1wiLCB7XHJcbiAgICAgIHBhcmFtczogdG9kb0FwaSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHdhcm5pbmdBcGkgPSBuZXcgV2FybmluZygpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCIuLi9pbnN0YW5jZVwiO1xyXG5cclxuY29uc3QgdXJsID0gXCIvYXBpL1NldFBhY2thZ2VSZXN1bHRcIjtcclxuZXhwb3J0IGNvbnN0IGRvaW5nVGVzdEFwaSA9IHtcclxuICAvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuICAvLyBnZXRBbGwocGFyYW1zKSB7XHJcbiAgLy8gXHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElEb2luZ1Rlc3RbXT4+KHVybCwge1xyXG4gIC8vIFx0XHRwYXJhbXMsXHJcbiAgLy8gXHR9KTtcclxuICAvLyB9LFxyXG4gIC8vIEzhuqV5IHRoZW8gSURcclxuICBnZXRCeUlEKElEKSB7XHJcbiAgICByZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElEb2luZ1Rlc3Q+PihgJHt1cmx9LyR7SUR9YCk7XHJcbiAgfSxcclxuICAvLyBUaMOqbSBt4bubaSBkYXRhXHJcbiAgYWRkKGRhdGEpIHtcclxuICAgIHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcbiAgfSxcclxuICAvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG4gIC8vIHVwZGF0ZShkYXRhKSB7XHJcbiAgLy8gXHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcbiAgLy8gfSxcclxuICAvLyBYw7NhIGRhdGFcclxuICAvLyBkZWxldGUoZGF0YSkge1xyXG4gIC8vIFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG4gIC8vIH0sXHJcbn07XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnLi4vaW5zdGFuY2UnXHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9FeGFtVG9waWNEZXRhaWwvJ1xyXG5leHBvcnQgY29uc3QgZXhhbURldGFpbEFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElFeGFtRGV0YWlsW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KVxyXG5cdH0sXHJcblx0Ly8gTOG6pXkgdGhlbyBJRFxyXG5cdGdldEJ5SUQoSUQpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUV4YW1EZXRhaWw+PihgJHt1cmx9JHtJRH1gKVxyXG5cdH0sXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFkZChkYXRhOiBhbnkpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSlcclxuXHR9LFxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlKGRhdGE6IGFueSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpXHJcblx0fSxcclxuXHQvLyBYw7NhIGRhdGFcclxuXHRkZWxldGUoZGF0YTogYW55KSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSlcclxuXHR9LFxyXG5cdC8vIFThuqFvIGPDonUgaOG7j2kgdOG7sSDEkeG7mW5nXHJcblx0Y3JlYXRlQXV0byhkYXRhOiBhbnkpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KCdhcGkvQXV0b0NyZWF0ZUV4YW10b3BpY0RldGFpbCcsIGRhdGEpXHJcblx0fSxcclxuXHQvLyDEkOG7lWkgduG7iyB0csOtXHJcblx0Y2hhbmdlUG9zaXRpb24oZGF0YTogYW55KSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KCdhcGkvVXBkYXRlSW5kZXgnLCBkYXRhKVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCIuLi9pbnN0YW5jZVwiO1xyXG5cclxuY29uc3QgdXJsID0gXCIvYXBpL0V4YW1Ub3BpYy9cIjtcclxuZXhwb3J0IGNvbnN0IGV4YW1Ub3BpY0FwaSA9IHtcclxuICAvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuICBnZXRBbGwocGFyYW1zKSB7XHJcbiAgICByZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElFeGFtVG9waWNbXT4+KHVybCwge1xyXG4gICAgICBwYXJhbXMsXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIC8vIEzhuqV5IHRoZW8gSURcclxuICBnZXRCeUlEKElEKSB7XHJcbiAgICByZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElFeGFtVG9waWM+PihgJHt1cmx9JHtJRH1gKTtcclxuICB9LFxyXG4gIC8vIFRow6ptIG3hu5tpIGRhdGFcclxuICBhZGQoZGF0YSkge1xyXG4gICAgcmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuICB9LFxyXG4gIC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcbiAgdXBkYXRlKGRhdGEpIHtcclxuICAgIHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuICB9LFxyXG4gIC8vIFjDs2EgZGF0YVxyXG4gIGRlbGV0ZShkYXRhKSB7XHJcbiAgICByZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IHsgVXBsb2FkIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jb25zdCB1cmwgPSBcIi9hcGkvRXhlcmNpc2VcIjtcclxuY2xhc3MgRXhlcmNpc2VBcGkge1xyXG4gIC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG4gIGdldEFsbCA9IChwYXJhbXMpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUV4ZXJjaXNlW10+Pih1cmwsIHsgcGFyYW1zIH0pO1xyXG5cclxuICAvLyBUaMOqbSBt4bubaSBkYXRhXHJcbiAgYWRkKGRhdGE6IElFeGVyY2lzZSkge1xyXG4gICAgcmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuICB9XHJcbiAgLy8gQ+G6rXAgbmjhuq10IGRhdGFcclxuICB1cGRhdGUoZGF0YTogSUV4ZXJjaXNlKSB7XHJcbiAgICByZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcbiAgfVxyXG4gIC8vIFjDs2EgZGF0YVxyXG4gIGRlbGV0ZShkYXRhOiBJRXhlcmNpc2UpIHtcclxuICAgIHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIC8vIEltcG9ydCBFeGNlbFxyXG4gIGltcG9ydEV4Y2VsKGZpbGU6IEZpbGUpIHtcclxuICAgIGxldCBmRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZkRhdGEuYXBwZW5kKFwiRmlsZVwiLCBmaWxlKTtcclxuICAgIHJldHVybiBpbnN0YW5jZS5wb3N0KFwiL2FwaS9JbXBvcnRFeGVyY2lzZVwiLCBmRGF0YSwge30pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGV4ZXJjaXNlQXBpID0gbmV3IEV4ZXJjaXNlQXBpKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJ1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvRXhlcmNpc2VHcm91cCdcclxuY2xhc3MgRXhlcmNpc2VHcm91cEFwaSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsID0gKHBhcmFtcykgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElFeGVyY2lzZUdyb3VwW10+Pih1cmwsIHsgcGFyYW1zIH0pXHJcblxyXG5cdC8vIEzhuqV5IDEgZGF0YVxyXG5cdGdldFdpdGhJRCA9IChJRCkgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElFeGVyY2lzZUdyb3VwPj4oYCR7dXJsfS8ke0lEfWApXHJcblxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKVxyXG5cdH1cclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSlcclxuXHR9XHJcblx0Ly8gWMOzYSBkYXRhXHJcblx0ZGVsZXRlKGRhdGE6IElFeGVyY2lzZUdyb3VwKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSlcclxuXHR9XHJcblxyXG5cdC8vIFVwbG9hZCBmaWxlXHJcblx0VXBsb2FkQXVkaW8oZGF0YSkge1xyXG5cdFx0bGV0IGZvcm1kYXRhID0gbmV3IEZvcm1EYXRhKClcclxuXHRcdGZvcm1kYXRhLmFwcGVuZCgnZmlsZScsIGRhdGEpXHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCgnL2FwaS91cGxvYWRmaWxlRXhlcmNpc2UnLCBmb3JtZGF0YSlcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBleGVyY2lzZUdyb3VwQXBpID0gbmV3IEV4ZXJjaXNlR3JvdXBBcGkoKVxyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJy4uL2luc3RhbmNlJztcclxuaW1wb3J0IHsgSUZlZWRCYWNrIH0gZnJvbSAnLi4vdHlwZXMvZmVlZC1iYWNrL2ZlZWQtYmFjayc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9GZWVkYmFjayc7XHJcbmV4cG9ydCBjb25zdCBGZWVkYmFja0FwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElGZWVkQmFja1tdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtc1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHJcblx0YWRkKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHJcblx0dXBkYXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cclxuXHRnZXRCeUlEKElEKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElGZWVkQmFjaz4+KGAke3VybH0vJHtJRH1gKTtcclxuXHR9XHJcbn07XHJcbiIsImltcG9ydCB7IG9uZVNpZ25hbEFQSSB9IGZyb20gJy4vb25lU2lnbmFsL29uZVNpZ25hbCc7XHJcbmV4cG9ydCB7IGFyZWFBcGkgfSBmcm9tICcuL29wdGlvbnMvYXJlYSc7XHJcbmV4cG9ydCB7IGJyYW5jaEFwaSB9IGZyb20gJy4vb3B0aW9ucy9icmFuY2gnO1xyXG5leHBvcnQgeyBjb250cmFjdEFwaSB9IGZyb20gJy4vb3B0aW9ucy9jb250cmFjdCc7XHJcbmV4cG9ydCB7IGN1cnJpY3VsdW1BcGkgfSBmcm9tICcuL29wdGlvbnMvY3VycmljdWx1bSc7XHJcbmV4cG9ydCB7IGN1cnJpY3VsdW1EZXRhaWxBcGkgfSBmcm9tICcuL29wdGlvbnMvY3VycmljdWx1bS1kZXRhaWwnO1xyXG5leHBvcnQgeyBkYXlPZmZBcGkgfSBmcm9tICcuL29wdGlvbnMvZGF5LW9mZic7XHJcbmV4cG9ydCB7IGRpc2NvdW50QXBpIH0gZnJvbSAnLi9vcHRpb25zL2Rpc2NvdW50JztcclxuZXhwb3J0IHsgZGlzdHJpY3RBcGkgfSBmcm9tICcuL29wdGlvbnMvZGlzdHJpY3QnO1xyXG5leHBvcnQgeyBncmFkZUFwaSB9IGZyb20gJy4vb3B0aW9ucy9ncmFkZSc7XHJcbmV4cG9ydCB7IGpvYkFwaSB9IGZyb20gJy4vb3B0aW9ucy9qb2InO1xyXG5leHBvcnQgeyBwcm9ncmFtQXBpIH0gZnJvbSAnLi9vcHRpb25zL3Byb2dyYW0nO1xyXG5leHBvcnQgeyBwdXJvc2VBcGkgfSBmcm9tICcuL29wdGlvbnMvcHVyb3NlJztcclxuZXhwb3J0IHsgcm9vbUFwaSB9IGZyb20gJy4vb3B0aW9ucy9yb29tJztcclxuZXhwb3J0IHsgc2VydmljZUFwaSB9IGZyb20gJy4vb3B0aW9ucy9zZXJ2aWNlJztcclxuZXhwb3J0IHsgc291cmNlSW5mb21hdGlvbkFwaSB9IGZyb20gJy4vb3B0aW9ucy9zb3VyY2UtaW5mb21hdGlvbic7XHJcbmV4cG9ydCB7IHN0YWZmU2FsYXJ5QXBpIH0gZnJvbSAnLi9vcHRpb25zL3N0YWZmLXNhbGFyeSc7XHJcbmV4cG9ydCB7IHN0dWR5VGltZUFwaSB9IGZyb20gJy4vb3B0aW9ucy9zdHVkeS10aW1lJztcclxuZXhwb3J0IHsgc3ViamVjdEFwaSB9IGZyb20gJy4vb3B0aW9ucy9zdWJqZWN0JztcclxuZXhwb3J0IHsgc3R1ZGVudEFwaSB9IGZyb20gJy4vY3VzdG9tZXIvc3R1ZGVudC9zdHVkZW50LWxpc3QnO1xyXG5leHBvcnQgeyB3YXJkQXBpIH0gZnJvbSAnLi9vcHRpb25zL3dhcmQnO1xyXG5leHBvcnQgeyBzdXBwbGllckFwaSB9IGZyb20gJy4vb3B0aW9ucy9zdXBwbGllcic7XHJcbmV4cG9ydCB7IHVzZXJJbmZvcm1hdGlvbkFwaSB9IGZyb20gJy4vb3B0aW9ucy91c2VyaW5mb3JtYXRpb24nO1xyXG5leHBvcnQgeyB0ZWFjaGVyQXBpIH0gZnJvbSAnLi90ZWFjaGVyL3RlYWNoZXInO1xyXG5leHBvcnQgeyBsZXNzb25BcGkgfSBmcm9tICcuL2NvdXJzZS9sZXNzb24nO1xyXG5leHBvcnQgeyBzdHVkeURheUFwaSB9IGZyb20gJy4vY291cnNlL3N0dWR5LWRheSc7XHJcbmV4cG9ydCB7IGNoZWNrU3R1ZHlUaW1lQXBpIH0gZnJvbSAnLi9jb3Vyc2UvY2hlY2stc3R1ZHktdGltZSc7XHJcbmV4cG9ydCB7IHBhcmVudHNBcGkgfSBmcm9tICcuL2N1c3RvbWVyL3BhcmVudHMvcGFyZW50cyc7XHJcbmV4cG9ydCB7IHN0YWZmQXBpIH0gZnJvbSAnLi9zdGFmZi1tYW5hZ2Uvc3RhZmYnO1xyXG5leHBvcnQgeyBub3RpZmljYXRpb25BcGkgfSBmcm9tICcuL29wdGlvbnMvbm90aWZpY2F0aW9uJztcclxuZXhwb3J0IHsgcnVsZXNBcGkgfSBmcm9tICcuL29wdGlvbnMvcnVsZXMnO1xyXG5cclxuZXhwb3J0IHsgZXhhbVRvcGljQXBpIH0gZnJvbSAnLi9leGFtL2V4YW0tdG9waWMnO1xyXG5leHBvcnQgeyBjb25zdWx0YXRpb25TdGF0dXNBcGkgfSBmcm9tICcuL29wdGlvbnMvY29uc3VsdGF0aW9uLXN0YXR1cyc7XHJcbmV4cG9ydCB7IHRlc3RDdXN0b21lclBvaW50QXBpIH0gZnJvbSAnLi9jdXN0b21lci9zZXJ2aWNlL3Rlc3QtY3VzdG9tZXItcG9pbnQnO1xyXG5cclxuZXhwb3J0IHsgY29uZmlnWm9vbUFwaSB9IGZyb20gJy4vem9vbS9jb25maWctem9vbSc7XHJcbmV4cG9ydCB7IHNjaGVkdWxlWm9vbUFwaSB9IGZyb20gJy4vem9vbS9zY2hlZHVsZS16b29tJztcclxuZXhwb3J0IHsgem9vbVJvb21BcGkgfSBmcm9tICcuL3pvb20vem9vbS1yb29tJztcclxuXHJcbmV4cG9ydCB7IHByaWNlRml4RXhhbUFwaSB9IGZyb20gJy4vb3B0aW9ucy9wcmljZS1maXgtZXhhbSc7XHJcbmV4cG9ydCB7IHBheUZpeEV4YW1BcGkgfSBmcm9tICcuL3BhY2thZ2UvcGF5LWZpeC1leGFtJztcclxuZXhwb3J0IHsgcGF5Rml4TGlzdEFwaSB9IGZyb20gJy4vcGFja2FnZS9wYXktZml4LWxpc3QnO1xyXG5leHBvcnQgeyBwYWNrYWdlUmVzdWx0QXBpIH0gZnJvbSAnfi9hcGlCYXNlL3BhY2thZ2UvcGFja2FnZS1yZXN1bHQnO1xyXG5leHBvcnQgeyBleGVyY2lzZUdyb3VwQXBpIH0gZnJvbSAnLi9leGVyY2lzZS9leGVyY2lzZUdyb3VwJztcclxuZXhwb3J0IHsgY2hlY2tSb29tQXBpIH0gZnJvbSAnLi9jb3Vyc2UvY2hlY2stcm9vbSc7XHJcbmV4cG9ydCB7IGNoZWNrVGVhY2hlckFwaSB9IGZyb20gJy4vY291cnNlL2NoZWNrLXRlYWNoZXInO1xyXG5leHBvcnQgeyBzdHVkZW50QWR2aXNlQXBpIH0gZnJvbSAnLi9jdXN0b21lci9zdHVkZW50L3N0dWRlbnQtYWR2aXNlJztcclxuZXhwb3J0IHsgdGVzdEN1c3RvbWVyQXBpIH0gZnJvbSAnLi9jdXN0b21lci9zZXJ2aWNlL3Rlc3QtY3VzdG9tZXInO1xyXG5leHBvcnQgeyB1c2VyQXBpIH0gZnJvbSAnLi91c2VyL3VzZXInO1xyXG5leHBvcnQgeyBleGFtQ29taW5nU29vbkFwaSB9IGZyb20gJy4vY3VzdG9tZXIvc3R1ZGVudC9leGFtLWNvbWluZy1zb29uJztcclxuZXhwb3J0IHsgd2FybmluZ0FwaSB9IGZyb20gJy4vY3VzdG9tZXIvc3R1ZGVudC93YXJuaW5nJztcclxuZXhwb3J0IHsgY291cnNlQXBpIH0gZnJvbSAnLi9jb3Vyc2UvY291cnNlJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb3Vyc2UtZGV0YWlsL2NvdXJzZS1kZXRhaWwnO1xyXG5leHBvcnQgeyBzdHVkZW50TGlzdEluQ291cnNlQXBpIH0gZnJvbSAnLi9jb3Vyc2UtZGV0YWlsL3N0dWRlbnQtbGlzdCc7XHJcbmV4cG9ydCB7IHN0dWRlbnRDaGFuZ2VBcGkgfSBmcm9tICcuL2N1c3RvbWVyL3N0dWRlbnQvc3R1ZGVudC1jaGFuZ2UnO1xyXG5leHBvcnQgeyBzdHVkZW50Q2hhbmdlQ291cnNlQXBpIH0gZnJvbSAnLi9jdXN0b21lci9zdHVkZW50L3N0dWRlbnQtY2hhbmdlLWNvdXJzZSc7XHJcbmV4cG9ydCB7IHNlcnZpY2VDdXN0b21lckV4YW1BcGkgfSBmcm9tICcuL2N1c3RvbWVyL3NlcnZpY2Uvc2VydmljZS1jdXN0b21lci1leGFtJztcclxuZXhwb3J0IHsgc2VydmljZUN1c3RvbWVyRXhhbVJlc3VsdEFwaSB9IGZyb20gJy4vY3VzdG9tZXIvc2VydmljZS9zZXJ2aWNlLWN1c3RvbWVyLWV4YW0tcmVzdWx0JztcclxuZXhwb3J0IHsgcmVmdW5kc0FwaSB9IGZyb20gJy4vY3VzdG9tZXIvZmluYW5jZS9maW5hbmNlLWNhc2hpZXItcmVmdW5kJztcclxuZXhwb3J0IHsgY29udHJhY3RDdXN0b21lckxpc3RBcGkgfSBmcm9tICcuL2N1c3RvbWVyL2NvbnRyYWN0L2NvbnRyYWN0LWN1c3RvbWVyLWxpc3QnO1xyXG5leHBvcnQgeyB2b3VjaGVyQXBpIH0gZnJvbSAnLi9jdXN0b21lci9maW5hbmNlL2ZpbmFuY2UtY2FzaGllci1wYXltZW50JztcclxuZXhwb3J0IHsgaW52b2ljZUFwaSB9IGZyb20gJy4vY3VzdG9tZXIvZmluYW5jZS9maW5hbmNlLWNhc2hpZXItaW52b2ljZSc7XHJcbmV4cG9ydCB7IGV4YW1BcHBvaW50bWVudFJlc3VsdEFwaSB9IGZyb20gJy4vY3VzdG9tZXIvc3R1ZGVudC9leGFtLWFwcG9pbnRtZW50LXJlc3VsdCc7XHJcbmV4cG9ydCB7IGNoZWNrQnJhbmNoU2NoZWR1bGVTdHVkeSB9IGZyb20gJy4vc2NoZWR1bGUvY2hlY2stYnJhbmNoLXNjaGVkdWxlJztcclxuZXhwb3J0IHsgY2hlY2tUZWFjaGVyU2NoZWR1bGVTdHVkeSB9IGZyb20gJy4vc2NoZWR1bGUvY2hlY2stdGVhY2hlci1zY2hlZHVsZSc7XHJcbmV4cG9ydCB7IHByb2dyYW1EZXRhaWxQb2ludENvbHVtbkFwaSB9IGZyb20gJy4vb3B0aW9ucy9wcm9ncmFtLWRldGFpbC1wb2ludC1jb2x1bW4nO1xyXG5leHBvcnQgeyBjb3Vyc2VTdHVkZW50QXBpIH0gZnJvbSAnLi9jdXN0b21lci9zdHVkZW50L2NvdXJzZS1zdHVkZW50JztcclxuZXhwb3J0IHsgcm9sbFVwQXBpIH0gZnJvbSAnLi9jb3Vyc2Uvcm9sbHVwJztcclxuZXhwb3J0IHsgY291cnNlT2ZTdHVkZW50UHJpY2VBcGkgfSBmcm9tICcuL2NvdXJzZS9jb3Vyc2Utb2Ytc3R1ZGVudC1wcmljZSc7XHJcbmV4cG9ydCB7IGNvbmZpZ0FwaSB9IGZyb20gJy4vb3B0aW9ucy9jb25maWcnO1xyXG5leHBvcnQgeyBuZXdzRmVlZEFwaSB9IGZyb20gJy4vbmV3c2ZlZWQvbmV3c2ZlZWQnO1xyXG5leHBvcnQgeyBuZXdzRmVlZExpa2VBcGkgfSBmcm9tICcuL25ld3NmZWVkL25ld3NmZWVkLWxpa2UnO1xyXG5leHBvcnQgeyBuZXdzRmVlZENvbW1lbnRBcGkgfSBmcm9tICcuL25ld3NmZWVkL25ld3NmZWVkLWNvbW1lbnQnO1xyXG5leHBvcnQgeyBuZXdzRmVlZENvbW1lbnRSZXBseUFwaSB9IGZyb20gJy4vbmV3c2ZlZWQvbmV3c2ZlZWQtY29tbWVudHJlcGx5JztcclxuZXhwb3J0IHsgdXNlckJyYW5jaEFwaSB9IGZyb20gJy4vbmV3c2ZlZWQvdXNlci1icmFuY2gnO1xyXG5leHBvcnQgeyBncm91cE5ld3NGZWVkQXBpIH0gZnJvbSAnLi9uZXdzZmVlZC9ncm91cC1uZXdzZmVlZCc7XHJcbmV4cG9ydCB7IHVzZXJHcm91cE5ld3NGZWVkQXBpIH0gZnJvbSAnLi9uZXdzZmVlZC91c2VyLWdyb3VwLW5ld3NmZWVkJztcclxuZXhwb3J0IHsgZXhlcmNpc2VBcGkgfSBmcm9tICcuL2V4ZXJjaXNlL2V4ZXJjaXNlJztcclxuZXhwb3J0IHsgcGFja2FnZUFwaSB9IGZyb20gJy4vcGFja2FnZS9wYWNrYWdlJztcclxuZXhwb3J0IHsgc3RhZmZPZlRhc2tHcm91cEFwaSwgdGFza0FwaSwgdGFza0dyb3VwQXBpIH0gZnJvbSAnLi9zdGFmZi1tYW5hZ2UvdGFzayc7XHJcbmV4cG9ydCB7IGRvY3VtZW50U2NoZWR1bGVBcGkgfSBmcm9tICcuL2NvdXJzZS1kZXRhaWwvZG9jdW1lbnQtc2NoZWR1bGUnO1xyXG5leHBvcnQgeyBwYWNrYWdlU3R1ZGVudEFwaSB9IGZyb20gJy4vcGFja2FnZS9wYWNrYWdlLXN0dWRlbnQnO1xyXG5leHBvcnQgeyBiYWNrZ3JvdW5kTmV3c0ZlZWRBcGkgfSBmcm9tICcuL25ld3NmZWVkL2JhY2tncm91bmQtbmV3c2ZlZWQnO1xyXG5leHBvcnQgeyBzdHVkeURheU9ubGluZUFwaSB9IGZyb20gJy4vY291cnNlLW9ubGluZS9zdHVkeS1kYXknO1xyXG5leHBvcnQgeyBsZXNzb25PbmxpbmVBcGkgfSBmcm9tICcuL2NvdXJzZS1vbmxpbmUvbGVzc29uJztcclxuZXhwb3J0IHsgY291cnNlT25saW5lRGV0YWlsQXZhaWxhYmxlRGF5QXBpIH0gZnJvbSAnLi9jb3Vyc2Utb25saW5lLWRldGFpbC9hdmFpbGFibGUtZGF5JztcclxuZXhwb3J0IHsgcGFja2FnZUV4YW1pbmVyQXBpIH0gZnJvbSAnLi9wYWNrYWdlL3BhY2thZ2UtZXhhbWluZXInO1xyXG5leHBvcnQgeyBleGFtRGV0YWlsQXBpIH0gZnJvbSAnLi9leGFtLWRldGFpbC9leGFtLWRldGFpbCc7XHJcbmV4cG9ydCB7IHNhbGVDYW1wYWlnbkFwaSB9IGZyb20gJy4vc2FsZS9zYWxlLWNhbXBhaWduJztcclxuZXhwb3J0IHsgc2FsZUNhbXBhaWduRGV0YWlsQXBpIH0gZnJvbSAnLi9zYWxlL3NhbGUtY2FtcGFpZ24tZGV0YWlsJztcclxuZXhwb3J0IHsgc2FsZVNhbGFyeUFwaSB9IGZyb20gJy4vc2FsZS9zYWxlLXNhbGFyeSc7XHJcbmV4cG9ydCB7IHNhbGVyVG90YWxSZXZlbnVlQXBpIH0gZnJvbSAnLi9zYWxlL3NhbGVyLXRvdGFsLXJldmVudWUnO1xyXG5leHBvcnQgeyBzYWxlclJldmVudWVBcGkgfSBmcm9tICcuL3NhbGUvc2FsZXItcmV2ZW51ZSc7XHJcbmV4cG9ydCB7IFZpZGVvQ291cnNlTGlzdEFwaSwgRG9uZVBheUFwaSB9IGZyb20gJy4vdmlkZW8tY291cnNlLWxpc3QnO1xyXG5leHBvcnQgeyBWaWRlb0NvdXJzZU9mU3R1ZGVudCwgVmlkZW9Db3Vyc2VJbnRlcmFjdGlvbiB9IGZyb20gJy4vdmlkZW8tbGVhcm5pbmcnO1xyXG5leHBvcnQgeyByZXNldFBhc3N3b3JkQXBpIH0gZnJvbSAnLi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZCc7XHJcbmV4cG9ydCB7IGRvaW5nVGVzdEFwaSB9IGZyb20gJy4vZG9pbmctdGVzdC9kb2luZy10ZXN0JztcclxuZXhwb3J0IHsgRmVlZGJhY2tBcGkgfSBmcm9tICcuL2ZlZWQtYmFjayc7XHJcbmV4cG9ydCB7IG9uZVNpZ25hbEFQSSB9IGZyb20gJy4vb25lU2lnbmFsL29uZVNpZ25hbCc7XHJcbmV4cG9ydCB7IHN0dWR5Um9sZUFwaSB9IGZyb20gJy4vc3R1ZHktcm9sZS9zdHVkeS1yb2xlJztcclxuZXhwb3J0IHsgY29taW5nQ291cnNlQXBpIH0gZnJvbSAnLi96b29tL2NvbWluZy1jb3Vyc2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL3NlbGYtY291cnNlJztcclxuIiwiaW1wb3J0IGF4aW9zLCB7IEF4aW9zUmVxdWVzdENvbmZpZywgQXhpb3NSZXNwb25zZSB9IGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBnZXRTZXNzaW9uLCBzaWduSW4gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50J1xyXG5pbXBvcnQgXyBmcm9tICd+L2FwcENvbmZpZydcclxuXHJcbmNvbnN0IFNIT1dfTE9HID0gdHJ1ZVxyXG5jb25zdCBOT0RFX1NUQVRVUzogYW55ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlZcclxuXHJcbmNvbnN0IGlzU2hvd0xvZyA9IChlOiBhbnkpID0+IHtcclxuXHRpZiAoZSA9PT0gJy9hcGkvSWRpb21zL2dldFJhbmRvbXMnIHx8IGUgPT09ICcvYXBpL1J1bGVzJykge1xyXG5cdFx0cmV0dXJuIGZhbHNlXHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiBOT0RFX1NUQVRVUyA9PSAncHJvZHVjdGlvbicgJiYgISFTSE9XX0xPRyA/IHRydWUgOiB0cnVlXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRVcmwoY29uZmlnOiBhbnkpIHtcclxuXHRyZXR1cm4gISFjb25maWcuYmFzZVVSTCA/IGNvbmZpZy51cmwucmVwbGFjZShjb25maWcuYmFzZVVSTCwgJycpLnNwbGl0KCc/JylbMF0gOiBjb25maWcudXJsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoSGVhZGVyX1ggPSBhc3luYyAoKSA9PiB7XHJcblx0Y29uc3Qgc2Vzc2lvbjogYW55ID0gYXdhaXQgZ2V0U2Vzc2lvbigpXHJcblx0cmV0dXJuICEhc2Vzc2lvbiAmJiAhIXNlc3Npb24uYWNjZXNzVG9rZW4gPyB7IHRva2VuOiBzZXNzaW9uLmFjY2Vzc1Rva2VuIH0gOiB7fVxyXG59XHJcbmV4cG9ydCBjb25zdCBhdXRoSGVhZGVyX0JlYXJlciA9IGFzeW5jICgpID0+IHtcclxuXHRjb25zdCBzZXNzaW9uOiBhbnkgPSBhd2FpdCBnZXRTZXNzaW9uKClcclxuXHRyZXR1cm4gISFzZXNzaW9uICYmICEhc2Vzc2lvbi5hY2Nlc3NUb2tlbiA/IHsgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgc2Vzc2lvbi5hY2Nlc3NUb2tlbiB9IDoge31cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcclxuXHRiYXNlVVJMOiBfLmhvc3RVUkwsXHJcblx0aGVhZGVyczoge1xyXG5cdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcclxuXHR9XHJcbn0pXHJcblxyXG5pbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoXHJcblx0YXN5bmMgKGNvbmZpZzogQXhpb3NSZXF1ZXN0Q29uZmlnKSA9PiB7XHJcblx0XHRjb25zdCB1cmw6IGFueSA9IGdldFVybChjb25maWcpXHJcblx0XHRpZiAoIXVybC50b1N0cmluZygpLmluY2x1ZGVzKCcvYXV0aC8nKSkge1xyXG5cdFx0XHRjb25zdCBhdXRoSGVhZGVyOiBhbnkgPSBhd2FpdCBhdXRoSGVhZGVyX1goKVxyXG5cdFx0XHRjb25maWcuaGVhZGVycyA9IHtcclxuXHRcdFx0XHQuLi5jb25maWcuaGVhZGVycyxcclxuXHRcdFx0XHQuLi5hdXRoSGVhZGVyXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlzU2hvd0xvZyh1cmwpICYmIGNvbnNvbGUubG9nKGAlYyAke2NvbmZpZz8ubWV0aG9kLnRvVXBwZXJDYXNlKCl9IC0gJHt1cmx9OmAsICdjb2xvcjogIzAwODZiMzsgZm9udC13ZWlnaHQ6IGJvbGQnLCBjb25maWcpXHJcblx0XHRyZXR1cm4gY29uZmlnXHJcblx0fSxcclxuXHQoZXJyb3I6IGFueSkgPT4ge1xyXG5cdFx0aXNTaG93TG9nKCcnKSAmJiBjb25zb2xlLmxvZyhgJWMgJHtlcnJvcj8ucmVzcG9uc2U/LnN0YXR1c30gIDpgLCAnY29sb3I6IHJlZDsgZm9udC13ZWlnaHQ6IGJvbGQnLCBlcnJvcj8ucmVzcG9uc2U/LmRhdGEpXHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXHJcblx0fVxyXG4pXHJcblxyXG5jb25zdCBjaGVja1Jlc3BvbnNlID0gKGVycm9yOiBhbnkpID0+IHtcclxuXHRzd2l0Y2ggKGVycm9yPy5yZXNwb25zZT8uc3RhdHVzKSB7XHJcblx0XHRjYXNlIDQwMTpcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0c2lnbkluKClcclxuXHRcdFx0fSwgMTAwMClcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgNDAzOlxyXG5cdFx0XHRjb25zb2xlLmxvZyhgJUVSUk9SIDQwMzpgICsgYCVjIERPTidUIEhBVkUgUEVSTUlTU09OYCwgJ2NvbG9yOiByZWQ7IGZvbnQtd2VpZ2h0OiBib2xkJywgJ2NvbG9yOiB5ZWxsb3c7JylcclxuXHRcdFx0YWxlcnQoJ0LhuqFuIGtow7RuZyBjw7MgcXV54buBbiB0aOG7sWMgaGnhu4duJylcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgNDAwOlxyXG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcj8ucmVzcG9uc2U/Lm1lc3NhZ2UpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRjYXNlIDUwMDpcclxuXHRcdFx0Y29uc29sZS5sb2coYCUgRVJST1IgNTAwOmAgKyBgJWMgQkFDSy1FTkRgLCAnY29sb3I6IHJlZDsgZm9udC13ZWlnaHQ6IGJvbGQnLCAnY29sb3I6IHllbGxvdzsnKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0Y29uc29sZS5sb2coYCVjICR7ZXJyb3I/LnJlc3BvbnNlfSAgOmAsICdjb2xvcjogcmVkOyBmb250LXdlaWdodDogYm9sZCcsIGVycm9yPy5yZXNwb25zZSlcclxuXHR9XHJcbn1cclxuXHJcbmluc3RhbmNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXHJcblx0KHJlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlKSA9PiB7XHJcblx0XHRsZXQgdXJsOiBhbnkgPSBnZXRVcmwocmVzcG9uc2U/LmNvbmZpZylcclxuXHRcdGlzU2hvd0xvZyh1cmwpICYmIGNvbnNvbGUubG9nKGAgJWMgJHtyZXNwb25zZT8uc3RhdHVzfSAtICR7Z2V0VXJsKHJlc3BvbnNlPy5jb25maWcpfTpgLCAnY29sb3I6ICMwMDgwMDA7IGZvbnQtd2VpZ2h0OiBib2xkJywgcmVzcG9uc2UpXHJcblx0XHRyZXR1cm4gcmVzcG9uc2VcclxuXHR9LFxyXG5cdGZ1bmN0aW9uIChlcnJvcjogYW55KSB7XHJcblx0XHRpZiAoISFlcnJvcj8ucmVzcG9uc2UpIHtcclxuXHRcdFx0Y2hlY2tSZXNwb25zZShlcnJvcilcclxuXHRcdFx0aXNTaG93TG9nKCcnKSAmJiBjb25zb2xlLmxvZyhgJWMgJHtlcnJvcj8ucmVzcG9uc2U/LnN0YXR1c30gIDpgLCAnY29sb3I6IHJlZDsgZm9udC13ZWlnaHQ6IGJvbGQnLCBlcnJvcj8ucmVzcG9uc2U/LmRhdGEpXHJcblx0XHRcdHJldHVybiAhIWVycm9yPy5yZXNwb25zZT8uZGF0YSA/IFByb21pc2UucmVqZWN0KGVycm9yLnJlc3BvbnNlLmRhdGEpIDogUHJvbWlzZS5yZWplY3QoZXJyb3IpXHJcblx0XHR9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcclxuXHRcdFx0aXNTaG93TG9nKCcnKSAmJiBjb25zb2xlLmxvZyhgJWMgJHtKU09OLnN0cmluZ2lmeShlcnJvcil9ICA6YCwgJ2NvbG9yOiByZWQ7IGZvbnQtd2VpZ2h0OiBib2xkJywgZXJyb3I/LnJlc3BvbnNlPy5kYXRhKVxyXG5cdFx0XHRyZXR1cm4gISFlcnJvcj8ucmVzcG9uc2U/LmRhdGEgPyBQcm9taXNlLnJlamVjdChlcnJvci5yZXNwb25zZS5kYXRhKSA6IFByb21pc2UucmVqZWN0KGVycm9yKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aXNTaG93TG9nKCcnKSAmJiBjb25zb2xlLmxvZyhgJWMgJHtKU09OLnN0cmluZ2lmeShlcnJvcil9ICA6YCwgJ2NvbG9yOiByZWQ7IGZvbnQtd2VpZ2h0OiBib2xkJywgJ0jDrG5oIG5oxrAgbMOgIHNldHRpbmcgc2FpJylcclxuXHRcdFx0cmV0dXJuICEhZXJyb3I/LnJlc3BvbnNlPy5kYXRhID8gUHJvbWlzZS5yZWplY3QoZXJyb3IucmVzcG9uc2UuZGF0YSkgOiBQcm9taXNlLnJlamVjdChlcnJvcilcclxuXHRcdH1cclxuXHR9XHJcbilcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jbGFzcyBCYWNrZ3JvdW5kTmV3c0ZlZWQge1xyXG4gICAgLy8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcbiAgICBnZXRBbGwgPSAoKSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElCYWNrZ3JvdW5kTmV3c0ZlZWRbXT4+KFwiL2FwaS9CYWNrZ3JvdW5kXCIpO1xyXG5cclxuICAgIC8vIEzhuqV5IHRoZW8gaWRcclxuICAgIGdldEJ5SUQgPSAoaWQ6bnVtYmVyKSA9PiBcclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGV0YWlsPihgL2FwaS9CYWNrZ3JvdW5kLyR7aWR9YCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBiYWNrZ3JvdW5kTmV3c0ZlZWRBcGkgPSBuZXcgQmFja2dyb3VuZE5ld3NGZWVkKCk7IiwiaW1wb3J0IHtpbnN0YW5jZX0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJztcclxuXHJcbmNsYXNzIEdyb3VwTmV3c0ZlZWQge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUdyb3VwTmV3c0ZlZWRbXT4+KCcvYXBpL0dyb3VwTmV3c0ZlZWQnLCB7XHJcblx0XHRcdHBhcmFtczogdG9kb0FwaSxcclxuXHRcdH0pO1xyXG5cclxuXHQvLyBM4bqleSB0aGVvIGlkXHJcblx0Z2V0QnlJRCA9IChpZDogbnVtYmVyKSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElHcm91cE5ld3NGZWVkPj4oYC9hcGkvR3JvdXBOZXdzRmVlZC8ke2lkfWApO1xyXG5cclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkID0gKGRhdGEpID0+IGluc3RhbmNlLnBvc3QoJy9hcGkvR3JvdXBOZXdzRmVlZCcsIGRhdGEpO1xyXG5cclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dCgnL2FwaS9Hcm91cE5ld3NGZWVkJywgZGF0YSwge30pO1xyXG5cclxuXHQvLyBVcGxvYWQgYmFja2dyb3VuZFxyXG5cdHVwbG9hZEltYWdlID0gKGZpbGU6IGFueSkgPT4ge1xyXG5cdFx0bGV0IGZEYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblx0XHRmRGF0YS5hcHBlbmQoJ0ZpbGUnLCBmaWxlKTtcclxuXHRcdGNvbnNvbGUubG9nKCdGREFUQTogJywgZkRhdGEpO1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QoJy9hcGkvdXBsb2FkZmlsZUdyb3VwJywgZkRhdGEsIHt9KTtcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ3JvdXBOZXdzRmVlZEFwaSA9IG5ldyBHcm91cE5ld3NGZWVkKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY2xhc3MgTmV3c0ZlZWRDb21tZW50IHtcclxuICAgIC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG4gICAgZ2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJTmV3c0ZlZWRDb21tZW50W10+PihcIi9hcGkvTmV3c0ZlZWRDb21tZW50XCIsIHtcclxuICAgICAgICBwYXJhbXM6IHRvZG9BcGksXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBUaMOqbSBt4bubaSBkYXRhXHJcbiAgICBhZGQgPSAoIGRhdGE6IGFueSApID0+IGluc3RhbmNlLnBvc3QoXCIvYXBpL05ld3NGZWVkQ29tbWVudFwiLCBkYXRhKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBuZXdzRmVlZENvbW1lbnRBcGkgPSBuZXcgTmV3c0ZlZWRDb21tZW50KCk7IiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jbGFzcyBOZXdzRmVlZENvbW1lbnRSZXBseSB7XHJcbiAgICAvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuICAgIGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SU5ld3NGZWVkQ29tbWVudFJlcGx5W10+PihcIi9hcGkvQ29tbWVudFJlcGx5XCIsIHtcclxuICAgICAgICBwYXJhbXM6IHRvZG9BcGksXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBUaMOqbSBt4bubaSBkYXRhXHJcbiAgICBhZGQgPSAoIGRhdGE6IElOZXdzRmVlZENvbW1lbnRSZXBseSApID0+IGluc3RhbmNlLnBvc3QoXCIvYXBpL0NvbW1lbnRSZXBseVwiLCBkYXRhKTtcclxuXHJcbiAgICAvLyBVcGRhdGUgZGF0YVxyXG4gICAgdXBkYXRlID0gKCBkYXRhOmFueSApID0+IGluc3RhbmNlLnB1dChcIi9hcGkvQ29tbWVudFJlcGx5XCIsIGRhdGEpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG5ld3NGZWVkQ29tbWVudFJlcGx5QXBpID0gbmV3IE5ld3NGZWVkQ29tbWVudFJlcGx5KCk7IiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jbGFzcyBOZXdzRmVlZExpa2Uge1xyXG4gICAgLy8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcbiAgICBnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElOZXdzRmVlZExpa2VbXT4+KFwiL2FwaS9OZXdzRmVlZExpa2VcIiwge1xyXG4gICAgICAgIHBhcmFtczogdG9kb0FwaSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFRow6ptIG3hu5tpIGRhdGFcclxuICAgIGFkZCA9ICggZGF0YTogYW55ICkgPT4gaW5zdGFuY2UucG9zdChcIi9hcGkvTmV3c0ZlZWRMaWtlXCIsIGRhdGEpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG5ld3NGZWVkTGlrZUFwaSA9IG5ldyBOZXdzRmVlZExpa2UoKTsiLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSc7XHJcblxyXG5jbGFzcyBOZXdzRmVlZCB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJTmV3c0ZlZWRbXT4+KCcvYXBpL05ld3NGZWVkJywge1xyXG5cdFx0XHRwYXJhbXM6IHRvZG9BcGlcclxuXHRcdH0pO1xyXG5cclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkID0gKGRhdGEpID0+IGluc3RhbmNlLnBvc3QoJy9hcGkvTmV3c0ZlZWQnLCBkYXRhKTtcclxuXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQoJy9hcGkvTmV3c0ZlZWQnLCBkYXRhLCB7fSk7XHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHRkZWxldGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQoJy9hcGkvTmV3c0ZlZWQnLCBkYXRhLCB7fSk7XHJcblxyXG5cdC8vIFVwbG9hZCBmaWxlXHJcblx0dXBsb2FkRmlsZSA9IChmaWxlOiBhbnkpID0+IHtcclxuXHRcdGxldCBmRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cdFx0ZkRhdGEuYXBwZW5kKCdGaWxlJywgZmlsZSk7XHJcblx0XHRjb25zb2xlLmxvZygnRkRBVEE6ICcsIGZEYXRhKTtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KCcvYXBpL3VwbG9hZGZpbGUnLCBmRGF0YSwge30pO1xyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBuZXdzRmVlZEFwaSA9IG5ldyBOZXdzRmVlZCgpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNsYXNzIFVzZXJCcmFuY2gge1xyXG4gICAgLy8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcbiAgICBnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElVc2VyQnJhbmNoW10+PihcIi9hcGkvVXNlckJyYW5jaFwiLCB7XHJcbiAgICAgICAgcGFyYW1zOiB0b2RvQXBpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVGjDqm0gbeG7m2kgZGF0YVxyXG4gICAgYWRkID0gKCBkYXRhOiBJVXNlckJyYW5jaCApID0+IGluc3RhbmNlLnBvc3QoXCIvYXBpL1VzZXJCcmFuY2hcIiwgZGF0YSk7XHJcblxyXG4gICAgLy8gQ+G6rXAgbmjhuq10IGRhdGFcclxuICAgIHVwZGF0ZSA9ICggZGF0YTogYW55ICkgPT4gaW5zdGFuY2UucHV0KFwiL2FwaS9Vc2VyQnJhbmNoXCIsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJCcmFuY2hBcGkgPSBuZXcgVXNlckJyYW5jaCgpOyIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSc7XHJcblxyXG5jbGFzcyBVc2VyR3JvdXBOZXdzRmVlZCB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVXNlckdyb3VwTmV3c0ZlZWRbXT4+KFxyXG5cdFx0XHQnL2FwaS9Hcm91cFVzZXJOZXdzRmVlZCcsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXJhbXM6IHRvZG9BcGksXHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblxyXG5cdC8vIEzhuqV5IHRoZW8gaWRcclxuXHRnZXRCeUlEID0gKGlkOiBudW1iZXIpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVVzZXJHcm91cE5ld3NGZWVkW10+PihcclxuXHRcdFx0YC9hcGkvR3JvdXBVc2VyTmV3c0ZlZWQvJHtpZH1gXHJcblx0XHQpO1xyXG5cclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkID0gKGRhdGEpID0+IGluc3RhbmNlLnBvc3QoJy9hcGkvR3JvdXBVc2VyTmV3c0ZlZWQnLCBkYXRhKTtcclxuXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQoJy9hcGkvR3JvdXBVc2VyTmV3c0ZlZWQnLCBkYXRhLCB7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyR3JvdXBOZXdzRmVlZEFwaSA9IG5ldyBVc2VyR3JvdXBOZXdzRmVlZCgpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1VwZGF0ZV9PbmVTaWduYWxfRGV2aWNlSUQnO1xyXG5leHBvcnQgY29uc3Qgb25lU2lnbmFsQVBJID0ge1xyXG5cdHVwZGF0ZShJRCkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwgKyBgP29uZVNpZ25hbF9kZXZpY2VJZD0ke0lEfWApO1xyXG5cdH1cclxufTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jb25zdCB1cmwgPSBcIi9hcGkvQXJlYVwiO1xyXG5jbGFzcyBBcmVhQXBpIHtcclxuICAvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuICBnZXRBbGwgPSAocGFyYW1zKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUFyZWFbXT4+KHVybCwgeyBwYXJhbXMgfSk7XHJcblxyXG4gIC8vIFRow6ptIG3hu5tpIGRhdGFcclxuICBhZGQoZGF0YTogSUFyZWEpIHtcclxuICAgIHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcbiAgfVxyXG4gIC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcbiAgdXBkYXRlKGRhdGE6IElBcmVhKSB7XHJcbiAgICByZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcbiAgfVxyXG4gIC8vIFjDs2EgZGF0YVxyXG4gIGRlbGV0ZShkYXRhOiBJQXJlYSkge1xyXG4gICAgcmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFyZWFBcGkgPSBuZXcgQXJlYUFwaSgpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSdcclxuXHJcbmNsYXNzIEJyYW5jaEFwaSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhIGPDsyBwaMOibiB0cmFuZ1xyXG5cdGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUJyYW5jaFtdPj4oJy9hcGkvQnJhbmNoJywge1xyXG5cdFx0XHQvLyBwYXJhbXM6IGdldFBhcmFtcyh0b2RvQXBpKSxcclxuXHRcdFx0cGFyYW1zOiB0b2RvQXBpXHJcblx0XHR9KVxyXG5cclxuXHQvLyBM4bqleSBjaGkgdGnhur90IGRhdGEgdGhlbyBJRFxyXG5cdGdldEJ5SUQgPSAoaWQ6IG51bWJlcikgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElCcmFuY2g+PihgL2FwaS9CcmFuY2gvJHtpZH1gKVxyXG5cclxuXHQvLyBD4bqtcCBuaOG6rXQgdHLhuqFuZyB0aMOhaSDhuqluL2hp4buHblxyXG5cdGNoYW5nZVN0YXR1cyA9IChpZDogbnVtYmVyKSA9PiBpbnN0YW5jZS5wdXQ8SUFwaVJlc3VsdERhdGE8SUJyYW5jaFtdPj4oYC9hcGkvQnJhbmNoL0hpZGUvJHtpZH1gKVxyXG5cclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkID0gKGRhdGE6IElCcmFuY2gpID0+IGluc3RhbmNlLnBvc3QoJy9hcGkvQnJhbmNoJywgZGF0YSlcclxuXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQoJy9hcGkvQnJhbmNoJywgZGF0YSwge30pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBicmFuY2hBcGkgPSBuZXcgQnJhbmNoQXBpKClcclxuIiwiaW1wb3J0IHtpbnN0YW5jZX0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJztcclxuXHJcbmNsYXNzIENvbmZpZyB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhIGPDsyBwaMOibiB0cmFuZ1xyXG5cdGdldEFsbCA9IChwYXJhbXMpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUNvbmZpZ1tdPj4oJy9hcGkvQ29uZmlnJywge3BhcmFtc30pO1xyXG5cclxuXHQvLyBM4bqleSBjaGkgdGnhur90IGRhdGEgdGhlbyBJRFxyXG5cdGdldEJ5SUQgPSAoaWQ6IG51bWJlcikgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJQ29uZmlnPj4oYC9hcGkvQ29uZmlnLyR7aWR9YCk7XHJcblxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQgPSAoZGF0YSkgPT4gaW5zdGFuY2UucG9zdCgnL2FwaS9Db25maWcnLCBkYXRhKTtcclxuXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUgPSAoZGF0YSkgPT4gaW5zdGFuY2UucHV0KCcvYXBpL0NvbmZpZycsIGRhdGEpO1xyXG5cdC8vIFjDs2EgZGF0YVxyXG5cdGRlbGV0ZSA9IChkYXRhKSA9PiBpbnN0YW5jZS5wdXQoJy9hcGkvQ29uZmlnJywgZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWdBcGkgPSBuZXcgQ29uZmlnKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY29uc3QgdXJsID0gXCIvYXBpL0N1c3RvbWVyQ29uc3VsdGF0aW9uU3RhdHVzXCI7XHJcblxyXG5jbGFzcyBDb25zdWx0YXRpb25TdGF0dXNBcGkge1xyXG4gIGdldFBhZ2VkID0gKFBhcmFtczogYW55KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElDb25zdWx0YXRpb25TdGF0dXNbXT4+KHVybCwge1xyXG4gICAgICBwYXJhbXM6IFBhcmFtcyxcclxuICAgIH0pO1xyXG5cclxuICBnZXRBbGwgPSAoUGFyYW1zOiBhbnkpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUNvbnN1bHRhdGlvblN0YXR1c1tdPj4odXJsLCB7XHJcbiAgICAgIHBhcmFtczogUGFyYW1zLFxyXG4gICAgfSk7XHJcblxyXG4gIGdldERldGFpbCA9IChpZDogbnVtYmVyKSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElDb25zdWx0YXRpb25TdGF0dXM+PihgJHt1cmx9LyR7aWR9YCk7XHJcblxyXG4gIGFkZCA9IChkYXRhOiBJQ29uc3VsdGF0aW9uU3RhdHVzKSA9PiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblxyXG4gIHVwZGF0ZSA9IChkYXRhOiBJQ29uc3VsdGF0aW9uU3RhdHVzKSA9PiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhLCB7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb25zdWx0YXRpb25TdGF0dXNBcGkgPSBuZXcgQ29uc3VsdGF0aW9uU3RhdHVzQXBpKCk7XHJcbiIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL0NvbnRyYWN0Lyc7XHJcbmV4cG9ydCBjb25zdCBjb250cmFjdEFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElDb250cmFjdFtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtcyxcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFkZChkYXRhOiBJQ29udHJhY3QpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZShkYXRhOiBJQ29udHJhY3QpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIFjDs2EgZGF0YVxyXG5cdGRlbGV0ZShkYXRhOiBJQ29udHJhY3QpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSdcclxuXHJcbmNsYXNzIEN1cnJpY3VsdW1EZXRhaWxBcGkge1xyXG5cdGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUN1cnJpY3VsdW1EZXRhaWxbXT4+KCcvYXBpL0N1cnJpY3VsdW1EZXRhaWwvJywge1xyXG5cdFx0XHRwYXJhbXM6IHRvZG9BcGlcclxuXHRcdH0pXHJcblxyXG5cdGdldFdpdGhJRCA9IChJRDogbnVtYmVyKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdDxJQ3VycmljdWx1bURldGFpbFtdPj4oYC9hcGkvQ3VycmljdWx1bURldGFpbC8ke0lEfWApXHJcblxyXG5cdGFkZCA9IChkYXRhOiBJQ3VycmljdWx1bURldGFpbCkgPT4gaW5zdGFuY2UucG9zdCgnL2FwaS9DdXJyaWN1bHVtRGV0YWlsJywgZGF0YSwge30pXHJcblxyXG5cdGluc2VydCA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnBvc3QoJy9hcGkvQ3VycmljdWx1bURldGFpbC9pbnNlcnQnLCBkYXRhLCB7fSlcclxuXHJcblx0dXBkYXRlID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucHV0KCcvYXBpL0N1cnJpY3VsdW1EZXRhaWwvJywgZGF0YSwge30pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjdXJyaWN1bHVtRGV0YWlsQXBpID0gbmV3IEN1cnJpY3VsdW1EZXRhaWxBcGkoKVxyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSc7XHJcblxyXG5jbGFzcyBDdXJyaWN1bHVtQXBpIHtcclxuXHRnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElDdXJyaWN1bHVtW10+PignL2FwaS9DdXJyaWN1bHVtLycsIHtcclxuXHRcdFx0cGFyYW1zOiB0b2RvQXBpXHJcblx0XHR9KTtcclxuXHJcblx0Z2V0V2l0aElEID0gKElEOiBudW1iZXIpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0PElDdXJyaWN1bHVtW10+PihgL2FwaS9DdXJyaWN1bHVtLyR7SUR9YCk7XHJcblxyXG5cdGFkZCA9IChkYXRhOiBJQ3VycmljdWx1bSkgPT4gaW5zdGFuY2UucG9zdCgnL2FwaS9DdXJyaWN1bHVtJywgZGF0YSwge30pO1xyXG5cclxuXHRhZGRTdWJqZWN0ID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucG9zdCgnL2FwaS9VcGRhdGVBbGxTdWJqZWN0T2ZDdXJyaWN1bHVtJywgZGF0YSwge30pO1xyXG5cclxuXHR1cGRhdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQoJy9hcGkvQ3VycmljdWx1bS8nLCBkYXRhLCB7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjdXJyaWN1bHVtQXBpID0gbmV3IEN1cnJpY3VsdW1BcGkoKTtcclxuIiwiaW1wb3J0IHtpbnN0YW5jZX0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvRGF5T2ZmLyc7XHJcbmV4cG9ydCBjb25zdCBkYXlPZmZBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJRGF5T2ZmW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zLFxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkKGRhdGE6IElEYXlPZmYpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZShkYXRhOiBJRGF5T2ZmKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBYw7NhIGRhdGFcclxuXHRkZWxldGUoZGF0YTogSURheU9mZikge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcbn07XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJ1xyXG5cclxuY2xhc3MgRGlzY291bnRBcGkge1xyXG5cdGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SURpc2NvdW50W10+PignL2FwaS9EaXNjb3VudCcsIHtcclxuXHRcdFx0cGFyYW1zOiB0b2RvQXBpXHJcblx0XHR9KVxyXG5cclxuXHRnZXRTdWdnZXN0ID0gKElEOiBhbnkpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJRGlzY291bnRbXT4+KCcvYXBpL0Rpc2NvdW50L3N1Z2dlc3RfZGlzY291bnRfY29kZS8nICsgSUQpXHJcblxyXG5cdGFkZCA9IChkYXRhOiBJRGlzY291bnQpID0+IGluc3RhbmNlLnBvc3QoJy9hcGkvRGlzY291bnQnLCBkYXRhLCB7fSlcclxuXHJcblx0dXBkYXRlID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucHV0KCcvYXBpL0Rpc2NvdW50JywgZGF0YSwge30pXHJcblxyXG5cdGdldE9mU3R1ZGVudCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8YW55Pj4oJy9hcGkvRGlzY291bnRPZlN0dWRlbnQnLCB7XHJcblx0XHRcdHBhcmFtczogdG9kb0FwaVxyXG5cdFx0fSlcclxuXHJcblx0ZGlzY291bnRTdHVkZW50ID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxhbnk+PignL2FwaS9EaXNjb3VudFN0dWRlbnQnLCB7XHJcblx0XHRcdHBhcmFtczogdG9kb0FwaVxyXG5cdFx0fSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRpc2NvdW50QXBpID0gbmV3IERpc2NvdW50QXBpKClcclxuIiwiaW1wb3J0IHtpbnN0YW5jZX0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL0Rpc3RyaWN0JztcclxuY2xhc3MgRGlzdHJpY3RBcGkge1xyXG5cdGdldEFsbCA9IChwYXJhbXMpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJRGlzdHJpY3RbXT4+KHVybCwge3BhcmFtc30pO1xyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQoZGF0YTogSURpc3RyaWN0KSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG5cdH1cclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZShkYXRhOiBJRGlzdHJpY3QpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9XHJcblx0Ly8gWMOzYSBkYXRhXHJcblx0ZGVsZXRlKGRhdGE6IElEaXN0cmljdCkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0Ly8gICBwb3N0ID0gKGRhdGE6IElCcmFuY2gpID0+IGluc3RhbmNlLnBvc3QoXCIvYXBpL0JyYW5jaC9JbnNlcnRCcmFuY2hcIiwgZGF0YSk7XHJcblx0Z2V0QnlBcmVhID0gKGFyZWFJRDogbnVtYmVyKSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElEaXN0cmljdFtdPj4oJy9hcGkvRGlzdHJpY3QnLCB7XHJcblx0XHRcdHBhcmFtczoge1xyXG5cdFx0XHRcdEFyZWFJRDogYXJlYUlELFxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblxyXG5cdC8vICAgcG9zdCA9IChkYXRhOiBJQnJhbmNoKSA9PiBpbnN0YW5jZS5wb3N0KFwiL2FwaS9CcmFuY2gvSW5zZXJ0QnJhbmNoXCIsIGRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGlzdHJpY3RBcGkgPSBuZXcgRGlzdHJpY3RBcGkoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jbGFzcyBHcmFkZUFwaSB7XHJcbiAgZ2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJR3JhZGVbXT4+KFwiL2FwaS9HcmFkZS9cIiwge1xyXG4gICAgICBwYXJhbXM6IHRvZG9BcGksXHJcbiAgICB9KTtcclxuXHJcbiAgZ2V0V2l0aElEID0gKElEOiBudW1iZXIpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdDxJR3JhZGVbXT4+KGAvYXBpL0dyYWRlLyR7SUR9YCk7XHJcblxyXG4gIGFkZCA9IChkYXRhOiBJR3JhZGUpID0+IGluc3RhbmNlLnBvc3QoXCIvYXBpL0dyYWRlXCIsIGRhdGEsIHt9KTtcclxuXHJcbiAgdXBkYXRlID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucHV0KFwiL2FwaS9HcmFkZS9cIiwgZGF0YSwge30pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ3JhZGVBcGkgPSBuZXcgR3JhZGVBcGkoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jbGFzcyBKb2JBcGkge1xyXG4gIGdldEFsbCA9IChqb2JQYXJhbXM6IGFueSkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJSm9iW10+PihcIi9hcGkvSm9iXCIsIHtcclxuICAgICAgcGFyYW1zOiBqb2JQYXJhbXMsXHJcbiAgICB9KTtcclxuXHJcbiAgZ2V0RGV0YWlsID0gKGlkOiBudW1iZXIpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0PElKb2I+PihgL2FwaS9Kb2IvJHtpZH1gKTtcclxuXHJcbiAgYWRkID0gKGRhdGE6IElKb2IpID0+IGluc3RhbmNlLnBvc3QoXCIvYXBpL0pvYlwiLCBkYXRhKTtcclxuXHJcbiAgdXBkYXRlID0gKGRhdGE6IElKb2IpID0+IGluc3RhbmNlLnB1dChcIi9hcGkvSm9iXCIsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGpvYkFwaSA9IG5ldyBKb2JBcGkoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnXHJcblxyXG5jbGFzcyBOb3RpZmljYXRpb24ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SU5vdGlmaWNhdGlvbltdPj4oJy9hcGkvTm90aWZpY2F0aW9ucycsIHtcclxuXHRcdFx0cGFyYW1zOiB0b2RvQXBpXHJcblx0XHR9KVxyXG5cclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkID0gKGRhdGEpID0+IGluc3RhbmNlLnBvc3QoJy9hcGkvTm90aWZpY2F0aW9ucycsIGRhdGEpXHJcblxyXG5cdC8vIEzhuqV5IGRhdGEgd2l0aCB1c2VyXHJcblx0Z2V0QWxsV2l0aFVzZXIgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPignL2FwaS9Ob3RpZmljYXRpb25Vc2VyJywge1xyXG5cdFx0XHRwYXJhbXM6IHRvZG9BcGlcclxuXHRcdH0pXHJcblxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhIMSRw6MgeGVtXHJcblx0dXBkYXRlU2VlbiA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dCgnL2FwaS9Ob3RpZmljYXRpb25Vc2VyJywgZGF0YSwge30pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBub3RpZmljYXRpb25BcGkgPSBuZXcgTm90aWZpY2F0aW9uKClcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvUHJpY2VGaXhFeGFtJztcclxuXHJcbmNsYXNzIFByaWNlRml4RXhhbUFwaSB7XHJcblx0Z2V0QWxsID0gKFBhcmFtczogYW55KSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElQcmljZUZpeEV4YW1bXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXM6IFBhcmFtc1xyXG5cdFx0fSk7XHJcblxyXG5cdC8vICAgZ2V0RGV0YWlsID0gKGlkOiBudW1iZXIpID0+XHJcblx0Ly8gICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJUGF5bWVudE1ldGhvZD4+KGAke3VybH0vJHtpZH1gKTtcclxuXHJcblx0YWRkID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG5cclxuXHR1cGRhdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhLCB7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwcmljZUZpeEV4YW1BcGkgPSBuZXcgUHJpY2VGaXhFeGFtQXBpKCk7XHJcbiIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1BvaW50Q29sdW1uLyc7XHJcbmV4cG9ydCBjb25zdCBwcm9ncmFtRGV0YWlsUG9pbnRDb2x1bW5BcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJUHJvZ3JhbURldGFpbFBvaW50Q29sdW1uW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zLFxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkKGRhdGE6IElQcm9ncmFtRGV0YWlsUG9pbnRDb2x1bW4pIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZShkYXRhOiBJUHJvZ3JhbURldGFpbFBvaW50Q29sdW1uKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdGRlbGV0ZShkYXRhOiBJUHJvZ3JhbURldGFpbFBvaW50Q29sdW1uKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxufTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jbGFzcyBQcm9ncmFtQXBpIHtcclxuICBnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElQcm9ncmFtW10+PihcIi9hcGkvUHJvZ3JhbVwiLCB7XHJcbiAgICAgIHBhcmFtczogdG9kb0FwaSxcclxuICAgIH0pO1xyXG5cclxuICBnZXRXaXRoSUQgPSAoSUQ6IG51bWJlcikgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0PElHcmFkZVtdPj4oYC9hcGkvUHJvZ3JhbS8ke0lEfWApO1xyXG5cclxuICBhZGQgPSAoZGF0YTogSVByb2dyYW0pID0+IGluc3RhbmNlLnBvc3QoXCIvYXBpL1Byb2dyYW1cIiwgZGF0YSwge30pO1xyXG5cclxuICB1cGRhdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQoXCIvYXBpL1Byb2dyYW1cIiwgZGF0YSwge30pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZ3JhbUFwaSA9IG5ldyBQcm9ncmFtQXBpKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY2xhc3MgUHVyb3NlIHtcclxuICAgIC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG4gICAgZ2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJUHVycG9zZVtdPj4oXCIvYXBpL1B1cnBvc2VzXCIsIHtcclxuICAgICAgICBwYXJhbXM6IHRvZG9BcGksXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBUaMOqbSBt4bubaSBkYXRhXHJcbiAgICBhZGQgPSAoIGRhdGE6IElQdXJwb3NlICkgPT4gaW5zdGFuY2UucG9zdChcIi9hcGkvUHVycG9zZXNcIiwgZGF0YSk7XHJcblxyXG4gICAgLy8gQ+G6rXAgbmjhuq10IGRhdGFcclxuICAgIHVwZGF0ZSA9ICggZGF0YTogYW55ICkgPT4gaW5zdGFuY2UucHV0KFwiL2FwaS9QdXJwb3Nlc1wiLCBkYXRhLCB7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwdXJvc2VBcGkgPSBuZXcgUHVyb3NlKCk7IiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jbGFzcyBSb29tQXBpIHtcclxuICAvLyBM4bqleSB04bqldCBj4bqjXHJcbiAgZ2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJUm9vbVtdPj4oXCIvYXBpL1Jvb20vXCIsIHtcclxuICAgICAgcGFyYW1zOiB0b2RvQXBpLFxyXG4gICAgfSk7XHJcblxyXG4gIC8vIEdldCBieSBJRFxyXG4gIGdldEJ5SWQgPSAoaWQ6IGFueSkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJUm9vbVtdPj4oYC9hcGkvUm9vbS8ke2lkfWApO1xyXG5cclxuICAvLyBVcGRhdGUgZGF0YVxyXG4gIHVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dChcIi9hcGkvUm9vbVwiLCBkYXRhKTtcclxuXHJcbiAgLy8gQWRkIGRhdGFcclxuICBhZGQgPSAoZGF0YTogSVJvb20pID0+IGluc3RhbmNlLnBvc3QoXCIvYXBpL1Jvb20vXCIsIGRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgcm9vbUFwaSA9IG5ldyBSb29tQXBpKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJ1xyXG5cclxuY2xhc3MgUnVsZXMge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbCA9IChwYXJhbXMpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVJ1bGVzW10+PignL2FwaS9SdWxlcycsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KVxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucHV0KCcvYXBpL1J1bGVzJywgZGF0YSwge30pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBydWxlc0FwaSA9IG5ldyBSdWxlcygpXHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY2xhc3MgU2VydmljZUFwaSB7XHJcbiAgICAvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuICAgIGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcbiAgICAgICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTZXJ2aWNlW10+PihcIi9hcGkvU2VydmljZXNcIiwge1xyXG4gICAgICAgICAgICBwYXJhbXM6IHRvZG9BcGksXHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgIC8vIFRow6ptIG3hu5tpIGRhdGFcclxuICAgIGFkZCA9IChkYXRhOiBJU2VydmljZSkgPT4gaW5zdGFuY2UucG9zdChcIi9hcGkvU2VydmljZXNcIiwgZGF0YSwge30pO1xyXG5cclxuICAgIC8vIEPhuq1wIG5o4bqtdCBkYXRhIFxyXG4gICAgdXBkYXRlID0gKCBkYXRhOiBhbnkgKSA9PiBpbnN0YW5jZS5wdXQoXCIvYXBpL1NlcnZpY2VzXCIsIGRhdGEsIHt9KTsgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXJ2aWNlQXBpID0gbmV3IFNlcnZpY2VBcGkoKTsiLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNsYXNzIFNvdXJjZUluZm9tYXRpb24ge1xyXG4gICAgLy8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcbiAgICBnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTb3VyY2VJbmZvbWF0aW9uW10+PihcIi9hcGkvU291cmNlSW5mb3JtYXRpb25cIiwge1xyXG4gICAgICAgIHBhcmFtczogdG9kb0FwaSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFRow6ptIG3hu5tpIGRhdGFcclxuICAgIGFkZCA9ICggZGF0YTogSVNvdXJjZUluZm9tYXRpb24gKSA9PiBpbnN0YW5jZS5wb3N0KFwiL2FwaS9Tb3VyY2VJbmZvcm1hdGlvblwiLCBkYXRhKTtcclxuXHJcbiAgICAvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG4gICAgdXBkYXRlID0gKCBkYXRhOiBhbnkgKSA9PiBpbnN0YW5jZS5wdXQoXCIvYXBpL1NvdXJjZUluZm9ybWF0aW9uXCIsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNvdXJjZUluZm9tYXRpb25BcGkgPSBuZXcgU291cmNlSW5mb21hdGlvbigpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSdcclxuXHJcbmNsYXNzIFN0YWZmU2FsYXJ5IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdGFmZlNhbGFyeVtdPj4oJy9hcGkvU2FsYXJ5Jywge1xyXG5cdFx0XHRwYXJhbXM6IHRvZG9BcGlcclxuXHRcdH0pXHJcblxyXG5cdC8vIEzhuqV5IGTDonQgdGhlbyBpZFxyXG5cclxuXHRnZXRCeUlEID0gKGlkOiBudW1iZXIpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU3RhZmZTYWxhcnlbXT4+KGAvYXBpL1NhbGFyeS8ke2lkfWApXHJcblxyXG5cdGdldEhpc3RvcnkgPSAoaWQ6IG51bWJlcikgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdGFmZlNhbGFyeUhpc3RvcnlbXT4+KGAvYXBpL3NhbGFyeS9oaXN0b3J5LyR7aWR9YClcclxuXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFkZCA9IChkYXRhOiBJU3RhZmZTYWxhcnkpID0+IGluc3RhbmNlLnBvc3QoJy9hcGkvU2FsYXJ5JywgZGF0YSlcclxuXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YSBubyB0eXBlXHJcblx0YWRkRGF0YSA9IChkYXRhKSA9PiBpbnN0YW5jZS5wb3N0KCcvYXBpL1NhbGFyeScsIGRhdGEpXHJcblxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucHV0KCcvYXBpL1NhbGFyeScsIGRhdGEsIHt9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3RhZmZTYWxhcnlBcGkgPSBuZXcgU3RhZmZTYWxhcnkoKVxyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNsYXNzIFN0dWR5VGltZUFwaSB7XHJcbiAgZ2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU3R1ZHlUaW1lW10+PihcIi9hcGkvU3R1ZHlUaW1lXCIsIHtcclxuICAgICAgcGFyYW1zOiB0b2RvQXBpLFxyXG4gICAgfSk7XHJcblxyXG4gIGdldFdpdGhJRCA9IChJRDogbnVtYmVyKSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHQ8SVN0dWR5VGltZVtdPj4oYC9hcGkvU3R1ZHlUaW1lLyR7SUR9YCk7XHJcblxyXG4gIGFkZCA9IChkYXRhOiBJU3R1ZHlUaW1lKSA9PiBpbnN0YW5jZS5wb3N0KFwiL2FwaS9TdHVkeVRpbWVcIiwgZGF0YSwge30pO1xyXG5cclxuICB1cGRhdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQoXCIvYXBpL1N0dWR5VGltZVwiLCBkYXRhLCB7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzdHVkeVRpbWVBcGkgPSBuZXcgU3R1ZHlUaW1lQXBpKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY2xhc3MgU3ViamVjdEFwaSB7XHJcbiAgZ2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU3ViamVjdFtdPj4oXCIvYXBpL1N1YmplY3QvXCIsIHtcclxuICAgICAgcGFyYW1zOiB0b2RvQXBpLFxyXG4gICAgfSk7XHJcblxyXG4gIGdldFdpdGhJRCA9IChJRDogbnVtYmVyKSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdWJqZWN0Pj4oYC9hcGkvU3ViamVjdC8ke0lEfWApO1xyXG5cclxuICBhZGQgPSAoZGF0YTogSVN1YmplY3QpID0+IGluc3RhbmNlLnBvc3QoXCIvYXBpL1N1YmplY3RcIiwgZGF0YSwge30pO1xyXG5cclxuICB1cGRhdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQoXCIvYXBpL1N1YmplY3QvXCIsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN1YmplY3RBcGkgPSBuZXcgU3ViamVjdEFwaSgpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNsYXNzIFN1cHBsaWVyIHtcclxuICAgIC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG4gICAgZ2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU3VwcGxpZXJbXT4+KFwiL2FwaS9TdXBwbGllclNlcnZpY2VzXCIsIHtcclxuICAgICAgICBwYXJhbXM6IHRvZG9BcGksXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBUaMOqbSBt4bubaSBkYXRhXHJcbiAgICBhZGQgPSAoIGRhdGE6IElTdXBwbGllciApID0+IGluc3RhbmNlLnBvc3QoXCIvYXBpL1N1cHBsaWVyU2VydmljZXNcIiwgZGF0YSk7XHJcblxyXG4gICAgLy8gQ+G6rXAgbmjhuq10IGRhdGFcclxuICAgIHVwZGF0ZSA9ICggZGF0YTogYW55ICkgPT4gaW5zdGFuY2UucHV0KFwiL2FwaS9TdXBwbGllclNlcnZpY2VzXCIsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN1cHBsaWVyQXBpID0gbmV3IFN1cHBsaWVyKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJztcclxuXHJcbmNsYXNzIFVzZXJJbmZvcm1hdGlvbiB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsUGFyYW1zID0gKHBhcmFtcykgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVXNlcmluZm9ybWF0aW9uW10+PignL2FwaS9Vc2VySW5mb3JtYXRpb24nLCB7XHJcblx0XHRcdHBhcmFtc1xyXG5cdFx0fSk7XHJcblx0Z2V0QWxsID0gKCkgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElVc2VyaW5mb3JtYXRpb25bXT4+KCcvYXBpL1VzZXJJbmZvcm1hdGlvbicpO1xyXG5cclxuXHQvLyBM4bqleSBjaGkgdGnhur90IGRhdGEgdGhlbyBJRFxyXG5cdGdldEJ5SUQgPSAoaWQ6IG51bWJlcikgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdGFmZlNhbGFyeVtdPj4oYC9hcGkvVXNlckluZm9ybWF0aW9uLyR7aWR9YCk7XHJcblxyXG5cdC8vIEzhuqV5IHRoZW8gcm9sZVxyXG5cdGdldEFsbFJvbGUgPSAocm9sZSkgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVXNlcmluZm9ybWF0aW9uW10+PignL2FwaS9Vc2VySW5mb3JtYXRpb24nLCB7XHJcblx0XHRcdHBhcmFtczoge1xyXG5cdFx0XHRcdFJvbGVJRDogcm9sZVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRnZXRSb2xlID0gKHJvbGVUeXBlKSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElSb2xlW10+PignL2FwaS9HZXRSb2xlJywge1xyXG5cdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRzdHlsZTogcm9sZVR5cGUgLy8gMCBs4bqleSB04bqldCBj4bqjLCAxIGzhuqV5IG5ow6JuIHZpw6puXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdGdldE5hbWUgPSAocGFyYW1zKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVVzZXJpbmZvcm1hdGlvbltdPj4oJy9hcGkvU3RhZmYnLCB7IHBhcmFtczogcGFyYW1zIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlckluZm9ybWF0aW9uQXBpID0gbmV3IFVzZXJJbmZvcm1hdGlvbigpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNvbnN0IHVybCA9IFwiL2FwaS9XYXJkXCI7XHJcbmNsYXNzIFdhcmRBcGkge1xyXG4gIC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG4gIGdldEFsbCA9IChwYXJhbXMpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJV2FyZFtdPj4odXJsLCB7IHBhcmFtcyB9KTtcclxuXHJcbiAgLy8gVGjDqm0gbeG7m2kgZGF0YVxyXG4gIGFkZChkYXRhOiBJV2FyZCkge1xyXG4gICAgcmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuICB9XHJcbiAgLy8gQ+G6rXAgbmjhuq10IGRhdGFcclxuICB1cGRhdGUoZGF0YTogSVdhcmQpIHtcclxuICAgIHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuICB9XHJcbiAgLy8gWMOzYSBkYXRhXHJcbiAgZGVsZXRlKGRhdGE6IElXYXJkKSB7XHJcbiAgICByZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgd2FyZEFwaSA9IG5ldyBXYXJkQXBpKCk7XHJcbiIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1NldFBhY2thZ2VUZWFjaGVyLyc7XHJcbmV4cG9ydCBjb25zdCBwYWNrYWdlRXhhbWluZXJBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJUGFja2FnZUV4YW1pbmVyW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zLFxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyBM4bqleSB0aGVvIElEXHJcblx0Z2V0QnlJRChJRCkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJUGFja2FnZUV4YW1pbmVyPj4oYCR7dXJsfSR7SUR9YCk7XHJcblx0fSxcclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBYw7NhIGRhdGFcclxuXHRkZWxldGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcbn07XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1NldFBhY2thZ2VSZXN1bHQnO1xyXG5cclxuY2xhc3MgUGFja2FnZVJlc3VsdEFwaSB7XHJcblx0Z2V0QWxsID0gKFBhcmFtczogYW55KSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTZXRQYWNrYWdlUmVzdWx0W10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zOiBQYXJhbXNcclxuXHRcdH0pO1xyXG5cclxuXHRnZXRBbGxTdHVkZW50ID0gKFBhcmFtczogYW55KSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPGFueT4+KCcvYXBpL1NldFBhY2thZ2VSZXN1bHRHZXRTdHVkZW50RXhpc3RSZXN1bHQnLCB7XHJcblx0XHRcdHBhcmFtczogUGFyYW1zXHJcblx0XHR9KTtcclxuXHJcblx0Z2V0RGV0YWlsID0gKGlkOiBudW1iZXIpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU2V0UGFja2FnZVJlc3VsdD4+KGAke3VybH0vJHtpZH1gKTtcclxuXHJcblx0YWRkID0gKGRhdGE6IElTZXRQYWNrYWdlUmVzdWx0KSA9PiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblxyXG5cdHVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dCh1cmwsIGRhdGEsIHt9KTtcclxuXHJcblx0Ly8gdOG7sSDEkeG7mW5nIGNoaWEgxJHhu4F1IGdpw6FvIHZpw6puIGNo4bqlbSBiw6BpXHJcblxyXG5cdHVwZGF0ZVRlYWNoZXIgPSAoKSA9PiBpbnN0YW5jZS5wdXQoJy9hcGkvVXBkYXRlVGVhY2hlck9mU2V0UGFja2FnZVJlc3VsdCcpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGFja2FnZVJlc3VsdEFwaSA9IG5ldyBQYWNrYWdlUmVzdWx0QXBpKCk7XHJcbiIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1NldFBhY2thZ2VTdHVkZW50Lyc7XHJcbmV4cG9ydCBjb25zdCBwYWNrYWdlU3R1ZGVudEFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElQYWNrYWdlU3R1ZGVudFtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtcyxcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8gTOG6pXkgdGhlbyBJRFxyXG5cdGdldEJ5SUQoSUQpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVBhY2thZ2VTdHVkZW50Pj4oYCR7dXJsfSR7SUR9YCk7XHJcblx0fSxcclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBYw7NhIGRhdGFcclxuXHRkZWxldGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcbn07XHJcbiIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1NldFBhY2thZ2UvJztcclxuZXhwb3J0IGNvbnN0IHBhY2thZ2VBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJUGFja2FnZVtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtcyxcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8gTOG6pXkgdGhlbyBJRFxyXG5cdGdldEJ5SUQoSUQpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVBhY2thZ2U+PihgJHt1cmx9JHtJRH1gKTtcclxuXHR9LFxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIFjDs2EgZGF0YVxyXG5cdGRlbGV0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBYw7NhIGRhdGFcclxuXHR1cGxvYWRJbWcoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QoJ2FwaS9TZXRQYWNrYWdlVXBMb2FkJywgZGF0YSk7XHJcblx0fSxcclxufTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICcuLi9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9QYXlGaXhFeGFtLyc7XHJcbmV4cG9ydCBjb25zdCBwYXlGaXhFeGFtQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVBheUZpeEV4YW1bXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXNcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8gTOG6pXkgdGhlbyBJRFxyXG5cdGdldEJ5SUQoSUQpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVBheUZpeEV4YW0+PihgJHt1cmx9JHtJRH1gKTtcclxuXHR9LFxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIFjDs2EgZGF0YVxyXG5cdGRlbGV0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fVxyXG59O1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1N0dWRlbkZpeEV4YW0nO1xyXG5leHBvcnQgY29uc3QgcGF5Rml4TGlzdEFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElQYXlGaXhMaXN0W10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIEzhuqV5IHRoZW8gSURcclxuXHRnZXRCeUlEKElEKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElQYXlGaXhMaXN0Pj4oYCR7dXJsfSR7SUR9YCk7XHJcblx0fSxcclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBYw7NhIGRhdGFcclxuXHRkZWxldGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH1cclxufTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jb25zdCB1cmwgPSBcIi9hcGkvUmVzZXRQYXNzd29yZC9TZW5kTWFpbFwiO1xyXG5leHBvcnQgY29uc3QgcmVzZXRQYXNzd29yZEFwaSA9IHtcclxuICAvLyBH4butaSBlbWFpbFxyXG4gIHNlbmRFbWFpbChkYXRhKSB7XHJcbiAgICByZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG4gIH0sXHJcblxyXG4gIC8vIFjDoWMgbmjhuq1uXHJcbiAgY29uZmlybShkYXRhKSB7XHJcbiAgICByZXR1cm4gaW5zdGFuY2UucHV0KFwiL2FwaS9SZXNldFBhc3N3b3JkL1VwZGF0ZVBhc3NcIiwgXCJcIiwge1xyXG4gICAgICBwYXJhbXM6IGRhdGEsXHJcbiAgICB9KTtcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQge2luc3RhbmNlfSBmcm9tICcuLi9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9TYWxlQ2FtcGFpZ25EZXRhaWwvJztcclxuZXhwb3J0IGNvbnN0IHNhbGVDYW1wYWlnbkRldGFpbEFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTYWxlQ2FtcGFpZ25EZXRhaWxbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXMsXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIEzhuqV5IHRoZW8gSURcclxuXHRnZXRCeUlEKElEKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTYWxlQ2FtcGFpZ25EZXRhaWw+PihgJHt1cmx9JHtJRH1gKTtcclxuXHR9LFxyXG59O1xyXG4iLCJpbXBvcnQge2luc3RhbmNlfSBmcm9tICcuLi9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9TYWxlQ2FtcGFpZ24vJztcclxuZXhwb3J0IGNvbnN0IHNhbGVDYW1wYWlnbkFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTYWxlQ2FtcGFpZ25bXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXMsXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIEzhuqV5IHRoZW8gSURcclxuXHRnZXRCeUlEKElEKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTYWxlQ2FtcGFpZ24+PihgJHt1cmx9JHtJRH1gKTtcclxuXHR9LFxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIFjDs2EgZGF0YVxyXG5cdGRlbGV0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxufTtcclxuIiwiaW1wb3J0IHtpbnN0YW5jZX0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvU2FsZVNhbGFyeS8nO1xyXG5leHBvcnQgY29uc3Qgc2FsZVNhbGFyeUFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTYWxlU2FsYXJ5W10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zLFxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyBM4bqleSB0aGVvIElEXHJcblx0Z2V0QnlJRChJRCkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU2FsZVNhbGFyeT4+KGAke3VybH0ke0lEfWApO1xyXG5cdH0sXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFkZChkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcbn07XHJcbiIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1NhbGVDYW1wYWlnblJldmVudWUvJztcclxuZXhwb3J0IGNvbnN0IHNhbGVyUmV2ZW51ZUFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTYWxlclJldmVudWVbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXMsXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIEzhuqV5IHRoZW8gSURcclxuXHRnZXRCeUlEKElEKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTYWxlclJldmVudWU+PihgJHt1cmx9JHtJRH1gKTtcclxuXHR9LFxyXG59O1xyXG4iLCJpbXBvcnQge2luc3RhbmNlfSBmcm9tICcuLi9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9Db3Vuc2Vsb3JzUmV2ZW51ZS8nO1xyXG5leHBvcnQgY29uc3Qgc2FsZXJUb3RhbFJldmVudWVBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU2FsZXJUb3RhbFJldmVudWVbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXMsXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIEzhuqV5IHRoZW8gSURcclxuXHRnZXRCeUlEKElEKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTYWxlclRvdGFsUmV2ZW51ZT4+KGAke3VybH0ke0lEfWApO1xyXG5cdH0sXHJcbn07XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJ2FwaS9Db3Vyc2VTY2hlZHVsZU9mQnJhbmNoJztcclxuZXhwb3J0IGNvbnN0IGNoZWNrQnJhbmNoU2NoZWR1bGVTdHVkeSA9IHtcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElDaGVja0JyYW5jaFNjaGVkdWxlU3R1ZHlEYXRhW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcbiIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICdhcGkvU2NoZWR1bGVCeU11bHRpcGxlVGVhY2hlci8nO1xyXG5leHBvcnQgY29uc3QgY2hlY2tUZWFjaGVyU2NoZWR1bGVTdHVkeSA9IHtcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElDaGVja1RlYWNoZXJTY2hlZHVsZVN0dWR5W10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zLFxyXG5cdFx0fSk7XHJcblx0fSxcclxufTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICcuLi9pbnN0YW5jZSc7XHJcblxyXG50eXBlIFNjaGVkdWxlU2VsZkNvdXJzZVJlc3VsdDxUID0gYW55PiA9IHtcclxuXHRjb3Vyc2VTY2hlZHVsZXNBcnJhbmdlZDogVDtcclxuXHRjb3Vyc2VTY2hlZHVsZXNJbmFycmFuZ2VkOiBUO1xyXG5cdG1lc3NhZ2U6IHN0cmluZztcclxufTtcclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVNlbGZDb3Vyc2UgPSAoZGF0YTogSVNDUG9zdCkgPT4gaW5zdGFuY2UucG9zdDxJQXBpUmVzdWx0RGF0YTxJU2NoZWR1bGVab29tRGV0YWlsPj4oJy9hcGkvQ3JlYXRlQ291cnNlMXZzMS8nLCBkYXRhKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTY2hlZHVsZVNlbGZDb3Vyc2UgPSAoaWQ6IG51bWJlcikgPT5cclxuXHRpbnN0YW5jZS5nZXQ8U2NoZWR1bGVTZWxmQ291cnNlUmVzdWx0PElTQ1NjaGVkdWxlW10+PihgL2FwaS9jb3Vyc2VOb3RTY2hlZHVsZVlldC8ke2lkfWApO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrU3R1ZHlUaW1lU2VsZkNvdXJzZSA9IChkYXRhOiBPbWl0PElTQ0NoZWNrVGVhY2hlciwgJ3N0dWR5VGltZUlEJz4pID0+XHJcblx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdHVkeVRpbWVbXT4+KFxyXG5cdFx0YC9hcGkvR2V0U3R1ZHlUaW1lQnlEYXRlQW5kU3R1ZGVudElEP2RhdGU9JHtkYXRhLmRhdGV9JmN1cnJpY3VsdW1zRGV0YWlsSUQ9JHtkYXRhLmN1cnJpY3VsdW1zRGV0YWlsSUR9YFxyXG5cdCk7XHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tUZWFjaGVyU2VsZkNvdXJzZSA9IChkYXRhOiBJU0NDaGVja1RlYWNoZXIpID0+XHJcblx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElVc2VyW10+PihcclxuXHRcdGAvYXBpL0dldFRlYWNoZXJCeURhdGVBbmRTdHVkeVRpbWVBbmRDdXJyaWN1bHVtRGV0YWlsP2RhdGU9JHtkYXRhLmRhdGV9JmN1cnJpY3VsdW1zRGV0YWlsSUQ9JHtkYXRhLmN1cnJpY3VsdW1zRGV0YWlsSUR9JnN0dWR5VGltZUlEPSR7ZGF0YS5zdHVkeVRpbWVJRH1gXHJcblx0KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVTY2hlZHVsZVNlbGZDb3Vyc2UgPSAoZGF0YTogSUNTU2NoZWR1bGVUb1NhdmUpID0+IGluc3RhbmNlLnB1dDxJQXBpUmVzdWx0RGF0YT4oJy9hcGkvVXBkYXRlQ291cnNlU2NoZWR1bGUnLCBkYXRhKTtcclxuZXhwb3J0IGNvbnN0IGNhbmNlbFNjaGVkdWxlU2VsZkNvdXJzZSA9IChpZDogbnVtYmVyKSA9PiBpbnN0YW5jZS5wdXQ8SUFwaVJlc3VsdERhdGE+KGAvYXBpL1JlbW92ZUNvdXJzZVNjaGVkdWxlLyR7aWR9YCk7XHJcbmV4cG9ydCBjb25zdCBnZXRSYW5nZVRpbWVTZWxmQ291cnNlID0gKCkgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPignL2FwaS9UaW1lQm9vaycpO1xyXG5leHBvcnQgY29uc3Qgc2V0UmFuZ2VUaW1lU2VsZkNvdXJzZSA9IChkYXRhOiBJU0NUaW1lKSA9PiBpbnN0YW5jZS5wdXQ8SUFwaVJlc3VsdERhdGE+KCcvYXBpL1RpbWVCb29rJywgZGF0YSk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1N0YWZmJztcclxuY2xhc3MgU3RhZmZBcGkge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbCA9IChwYXJhbXMpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU3RhZmZbXT4+KHVybCwgeyBwYXJhbXMgfSk7XHJcblxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQoZGF0YTogSVN0YWZmKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG5cdH1cclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZShkYXRhOiBhbnkpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9XHJcblx0Ly8gWMOzYSBkYXRhXHJcblx0ZGVsZXRlKGRhdGE6IElTdGFmZikge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN0YWZmQXBpID0gbmV3IFN0YWZmQXBpKCk7XHJcbiIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1Rhc2tHcm91cC8nO1xyXG5leHBvcnQgY29uc3QgdGFza0dyb3VwQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVRhc2tHcm91cFtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtcyxcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8gVGjDqm1cclxuXHRhZGQoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIEPhuq1wIG5o4bqtdFxyXG5cdHVwZGF0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBYw7NhXHJcblx0ZGVsZXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG59O1xyXG5cclxuY29uc3QgdXJsMiA9ICcvYXBpL1Rhc2svJztcclxuZXhwb3J0IGNvbnN0IHRhc2tBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YT4odXJsMiwge1xyXG5cdFx0XHRwYXJhbXMsXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIFRow6ptXHJcblx0YWRkKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybDIsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gQ+G6rXAgbmjhuq10XHJcblx0dXBkYXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsMiwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBYw7NhXHJcblx0ZGVsZXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsMiwgZGF0YSk7XHJcblx0fSxcclxufTtcclxuXHJcbmNvbnN0IHVybDMgPSAnL2FwaS9TdGFmZk9mVGFza0dyb3VwLyc7XHJcbmV4cG9ydCBjb25zdCBzdGFmZk9mVGFza0dyb3VwQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE+KHVybDMsIHtcclxuXHRcdFx0cGFyYW1zLFxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyBUaMOqbVxyXG5cdGFkZChkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwzLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIEPhuq1wIG5o4bqtdFxyXG5cdHVwZGF0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybDMsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gWMOzYVxyXG5cdGRlbGV0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybDMsIGRhdGEpO1xyXG5cdH0sXHJcbn07XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1N0dWR5Um91dGUnO1xyXG5cclxuY2xhc3MgU3R1ZHlSb2xlQXBpIHtcclxuXHRnZXRBbGwgPSAoUGFyYW1zOiBhbnkpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVN0dWR5Um9sZVtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtczogUGFyYW1zXHJcblx0XHR9KTtcclxuXHJcblx0Z2V0RGV0YWlsID0gKGlkOiBudW1iZXIpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU3R1ZHlSb2xlPj4oYCR7dXJsfS8ke2lkfWApO1xyXG5cclxuXHRhZGQgPSAoZGF0YTogSVN0dWR5Um9sZSkgPT4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG5cclxuXHR1cGRhdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhLCB7fSk7XHJcblxyXG5cdGNoYW5nZVBvc2l0aW9uID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucHV0KGAvYXBpL1N0dWR5Um91dGVDaGFuZ2VQbGFjZXNgLCBkYXRhLCB7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzdHVkeVJvbGVBcGkgPSBuZXcgU3R1ZHlSb2xlQXBpKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJ1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvVGVhY2hlci8nXHJcbmV4cG9ydCBjb25zdCB0ZWFjaGVyQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVRlYWNoZXJbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXNcclxuXHRcdH0pXHJcblx0fSxcclxuXHQvLyBM4bqleSB0aGVvIGlkXHJcblx0Z2V0QnlJZChpZDogbnVtYmVyKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElUZWFjaGVyPj4oYCR7dXJsfSR7aWR9YClcclxuXHR9LFxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQoZGF0YTogSVRlYWNoZXIpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSlcclxuXHR9LFxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlKGRhdGE6IElUZWFjaGVyKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSlcclxuXHR9LFxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlQnJhbmNoKGRhdGE6IHsgVXNlckluZm9tYXRpb25JRDogbnVtYmVyOyBCcmFuY2hJRDogc3RyaW5nOyBFbmFibGU6IGJvb2xlYW4gfSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCgnL2FwaS9Vc2VyQnJhbmNoLycsIGRhdGEpXHJcblx0fSxcclxuXHR1cGRhdGVSb2xlKGRhdGE6IHsgUm9sZUlEOiBudW1iZXI7IFVzZXJJbmZvcm1hdGlvbklEOiBudW1iZXIgfSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCgnL2FwaS9UZWFjaGVyLycsIGRhdGEpXHJcblx0fSxcclxuXHQvLyBYw7NhIGRhdGFcclxuXHRkZWxldGUoZGF0YTogSVRlYWNoZXIpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKVxyXG5cdH0sXHJcblx0Ly8gVGjDtG5nIHRpbiBs4bubcCBo4buNY1xyXG5cdGdldEFsbFRlYWNoZXJGb3JTdWJqZWN0KGlkOiBudW1iZXIpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE+KGAvYXBpL0Fzc2lnblRlYWNoZXJGb3JTdWJqZWN0LyR7aWR9YClcclxuXHR9LFxyXG5cdHVwZGF0ZVRlYWNoZXJGb3JTdWJqZWN0KGRhdGE6IGFueSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCgnL2FwaS9Bc3NpZ25UZWFjaGVyRm9yU3ViamVjdCcsIGRhdGEpXHJcblx0fSxcclxuXHR1cGRhdGVUZWFjaGVyRm9yQWxsU3ViamVjdChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQoJy9hcGkvQXNzaWduVGVhY2hlckZvckFsbFN1YmplY3QnLCBwYXJhbXMpXHJcblx0fSxcclxuXHRnZXRUZWFjaGVyQnlQcm9ncmFtKHBhcmFtczogeyBQcm9ncmFtSUQ6IG51bWJlcjsgQnJhbmNoSUQ6IG51bWJlciB9KSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPHsgVXNlckluZm9ybWF0aW9uSUQ6IG51bWJlcjsgRnVsbE5hbWVVbmljb2RlOiBzdHJpbmcgfVtdPj4oJy9hcGkvVGVhY2hlckJ5UHJvZ3JhbScsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KVxyXG5cdH0sIC8vIEzhuqV5IHRoZW8gaWRcclxuXHRnZXRDdXJyaWN1bHVtKGlkOiBudW1iZXIpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8YW55PihgL2FwaS9hc3NpZ250ZWFjaGVyY3VycmljdWx1bS9nZXRieXRlYWNoZXIvJHtpZH1gKVxyXG5cdH0sXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFzc2lnbihkYXRhOiBhbnkpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KCcvYXBpL2Fzc2lnbnRlYWNoZXJjdXJyaWN1bHVtL2Fzc2lnbicsIGRhdGEpXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1VzZXJJbmZvcm1hdGlvbi8nO1xyXG5jbGFzcyBVc2VyQXBpIHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwgPSAocGFyYW1zKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVVzZXJbXT4+KHVybCwgeyBwYXJhbXMgfSk7XHJcblxyXG5cdC8vIEzhuqV5IGRhdGEgbeG7m2kgbmjhuqV0XHJcblx0Z2V0TmV3ID0gKCkgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElVc2VyPj4odXJsICsgJzAnKTtcclxuXHJcblx0Ly8gTOG6pXkgZGF0YSBt4bubaSBuaOG6pXRcclxuXHRnZXRCeUlEID0gKHBhcmFtcykgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElVc2VyPj4odXJsICsgcGFyYW1zKTtcclxuXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFkZChkYXRhOiBJVXNlcikge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuXHR9XHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUoZGF0YTogSVVzZXIpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9XHJcblx0Ly8gWMOzYSBkYXRhXHJcblx0ZGVsZXRlKGRhdGE6IElVc2VyKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHQvLyDEkOG7lWkgbeG6rXQga2jhuql1XHJcblx0Y2hhbmdlUGFzc3dvcmQoZGF0YTogYW55KSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KCcvYXBpL0FjY291bnQnLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdC8vIFThuqFvIG3hu5tpIHTDoGkga2hv4bqjblxyXG5cdGNyZWF0ZUFjY291bnQoZGF0YTogYW55KSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCgnL2FwaS9DcmVhdGVBY2NvdW50JywgZGF0YSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlckFwaSA9IG5ldyBVc2VyQXBpKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnLi4vaW5zdGFuY2UnXHJcbmltcG9ydCB7IElWaWRlb0NvdXJzZUxpc3QgfSBmcm9tICcuLi90eXBlcy92aWRlby1jb3Vyc2UtbGlzdC92aWRlby1jb3Vyc2UtbGlzdCdcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1ZpZGVvQ291cnNlT2ZTdHVkZW50LydcclxuXHJcbmV4cG9ydCBjb25zdCBWaWRlb0NvdXJzZUxpc3RBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVmlkZW9Db3Vyc2VMaXN0W10+PihcclxuXHRcdFx0YCR7dXJsfUdldEFsbD9wYWdlSW5kZXg9JHtwYXJhbXMucGFnZUluZGV4fSZwYWdlU2l6ZT0ke3BhcmFtcy5wYWdlU2l6ZX0mc2VhcmNoPSR7cGFyYW1zLnNlYXJjaH1gXHJcblx0XHQpXHJcblx0fSxcclxuXHQvLyBM4bqleSBkYXRhIHRoZW8gdXNlclxyXG5cdGdldEJ5VXNlcihwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVZpZGVvQ291cnNlTGlzdFtdPj4oXHJcblx0XHRcdGAke3VybH1HZXRCeVVzZXI/cGFnZUluZGV4PSR7cGFyYW1zLnBhZ2VJbmRleH0mcGFnZVNpemU9JHtwYXJhbXMucGFnZVNpemV9JnNlYXJjaD0ke3BhcmFtcy5zZWFyY2h9YFxyXG5cdFx0KVxyXG5cdH0sXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwgKyAnU3R1ZGVudEV2YWx1YXRpb24nLCBkYXRhKVxyXG5cdH0sXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGVBY3RpdmVDb2RlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsICsgJ1VwZGF0ZUFjdGl2ZUNvZGUnLCBkYXRhKVxyXG5cdH0sXHJcblx0dXBkYXRlTGltaXRCb29raW5nKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsICsgJ1VwZGF0ZUxpbWl0Qm9va2luZycsIGRhdGEpXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBkb25lUGF5VXJsID0gJy9hcGkvT3JkZXIvJ1xyXG5leHBvcnQgY29uc3QgRG9uZVBheUFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElWaWRlb0NvdXJzZUxpc3RbXT4+KFxyXG5cdFx0XHRgJHtkb25lUGF5VXJsfUdldExpc3RPcmRlcj9wYWdlSW5kZXg9JHtwYXJhbXMucGFnZUluZGV4fSZwYWdlU2l6ZT0ke3BhcmFtcy5wYWdlU2l6ZX0mc2VhcmNoPSR7cGFyYW1zLnNlYXJjaH0mUGF5bWVudFN0YXR1cz0ke3BhcmFtcy5QYXltZW50U3RhdHVzfWBcclxuXHRcdClcclxuXHR9LFxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQoZG9uZVBheVVybCArICdVcGRhdGVQYWlkUGF5bWVudCcsIGRhdGEpXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnLi4vaW5zdGFuY2UnXHJcbmltcG9ydCB7IElWaWRlb0xlYXJuaW5nIH0gZnJvbSAnLi4vdHlwZXMvdmlkZW8tbGVhcm5pbmcvdmlkZW8tbGVhcm5pbmcnXHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9WaWRlb0NvdXJzZU9mU3R1ZGVudC8nXHJcbmV4cG9ydCBjb25zdCBWaWRlb0NvdXJzZU9mU3R1ZGVudCA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElWaWRlb0xlYXJuaW5nW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KVxyXG5cdH0sXHJcblxyXG5cdC8vIEzhuqV5IGRhdGEgdGhlbyB1c2VyXHJcblx0R2V0QnlJRChJRCkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVmlkZW9MZWFybmluZ1tdPj4oYCR7dXJsICsgJ0dldEJ5SUQvJ30ke0lEfWApXHJcblx0fSxcclxuXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHRVcGRhdGVTZWVuQW5kVGltZVdhdGNoZWRWaWRlbyhkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCArICcvVXBkYXRlU2VlbkFuZFRpbWVXYXRjaGVkVmlkZW8nLCBkYXRhKVxyXG5cdH0sXHJcblxyXG5cdC8vIEzhuqV5IGRhdGEgR2V0TGVzc29uSW5Qcm9ncmVzc1xyXG5cdEdldExlc3NvbkluUHJvZ3Jlc3MoKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElWaWRlb0xlYXJuaW5nW10+Pih1cmwgKyAnR2V0TGVzc29uSW5Qcm9ncmVzcy8nKVxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgdXJsSW50ZXJhY3RpbyA9ICcvYXBpL1ZpZGVvQ291cnNlSW50ZXJhY3Rpb24vJ1xyXG5leHBvcnQgY29uc3QgVmlkZW9Db3Vyc2VJbnRlcmFjdGlvbiA9IHtcclxuXHRHZXRCeUlEKElEKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElWaWRlb0xlYXJuaW5nW10+PihgJHt1cmxJbnRlcmFjdGlvICsgJ0dldEJ5SUQvJ30ke0lEfWApXHJcblx0fSxcclxuXHJcblx0TGlzdFFBKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVmlkZW9MZWFybmluZ1tdPj4odXJsSW50ZXJhY3RpbyArICdMaXN0UUEnLCB7XHJcblx0XHRcdHBhcmFtc1xyXG5cdFx0fSlcclxuXHR9LFxyXG5cclxuXHRMaXN0Tm90ZShwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVZpZGVvTGVhcm5pbmdbXT4+KHVybEludGVyYWN0aW8gKyAnTGlzdE5vdGUnLCB7XHJcblx0XHRcdHBhcmFtc1xyXG5cdFx0fSlcclxuXHR9LFxyXG5cclxuXHRMaXN0TGlzdEFubm91bmNlbWVudCh2aWRlb2NvdXJzZUlEKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElWaWRlb0xlYXJuaW5nW10+Pih1cmxJbnRlcmFjdGlvICsgJ0xpc3RBbm5vdW5jZW1lbnQvJyArIHZpZGVvY291cnNlSUQpXHJcblx0fSxcclxuXHJcblx0YWRkKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybEludGVyYWN0aW8gKyAnSW5zZXJ0JywgZGF0YSlcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHVybFZpZGVvQ291cnNlcyA9ICcvYXBpL1ZpZGVvQ291cnNlcy8nXHJcbmV4cG9ydCBjb25zdCBWaWRlb0NvdXJzZXMgPSB7XHJcblx0TGlzdFNlY3Rpb24oSUQpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVZpZGVvTGVhcm5pbmdbXT4+KGAke3VybFZpZGVvQ291cnNlcyArICdMaXN0U2VjdGlvbi8nfSR7SUR9YClcclxuXHR9LFxyXG5cclxuXHRMaXN0TGVzc29uKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVmlkZW9MZWFybmluZ1tdPj4odXJsVmlkZW9Db3Vyc2VzICsgJ0xpc3RMZXNzb24nLCB7XHJcblx0XHRcdHBhcmFtc1xyXG5cdFx0fSlcclxuXHR9LFxyXG5cclxuXHRMaXN0UUEocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElWaWRlb0xlYXJuaW5nW10+Pih1cmxWaWRlb0NvdXJzZXMgKyAnTGlzdFFBJywge1xyXG5cdFx0XHRwYXJhbXNcclxuXHRcdH0pXHJcblx0fSxcclxuXHJcblx0TGVzc29uRGV0YWlsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVmlkZW9MZWFybmluZ1tdPj4odXJsVmlkZW9Db3Vyc2VzICsgJ0xlc3NvbkRldGFpbCcsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL0NvbWluZ1Nvb25Db3Vyc2VTY2hlZHVsZS8nO1xyXG5leHBvcnQgY29uc3QgY29taW5nQ291cnNlQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbCgpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUNvbWluZ0NvdXJzZT4+KHVybCk7XHJcblx0fVxyXG59O1xyXG4iLCJpbXBvcnQge2luc3RhbmNlfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvWm9vbVRlYWNoZXJBUEkvJztcclxuZXhwb3J0IGNvbnN0IGNvbmZpZ1pvb21BcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJQ29uZmlnWm9vbVtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtcyxcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8gTOG6pXkgdGhlbyBpZFxyXG5cdGdldEJ5SWQoaWQ6IG51bWJlcikge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJQ29uZmlnWm9vbT4+KGAke3VybH0ke2lkfWApO1xyXG5cdH0sXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFkZChkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gWMOzYSBkYXRhXHJcblx0ZGVsZXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdGdldEluYWN0aXZlQ29uZmlnWm9vbSgpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUNvbmZpZ1pvb20+PihcclxuXHRcdFx0Jy9hcGkvR2V0Wm9vbVRlYWNoZXJBUElpbkFjdGl2ZSdcclxuXHRcdCk7XHJcblx0fSxcclxufTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvVXNlclNjaGVkdWxlLyc7XHJcbmV4cG9ydCBjb25zdCBzY2hlZHVsZVpvb21BcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtczogeyBTdGFydFRpbWU6IHN0cmluZzsgRW5kVGltZTogc3RyaW5nIH0pIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVNjaGVkdWxlWm9vbVtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtc1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyBM4bqleSB0aGVvIGlkXHJcblx0Z2V0QnlJZChpZDogbnVtYmVyKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTY2hlZHVsZVpvb21EZXRhaWw+PihgJHt1cmx9JHtpZH1gKTtcclxuXHR9XHJcbn07XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1pvb21Sb29tU2NoZWR1bGUvJztcclxuZXhwb3J0IGNvbnN0IHpvb21Sb29tQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVpvb21Sb29tW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIEzhuqV5IHRoZW8gaWRcclxuXHRnZXRCeUlkKGlkOiBudW1iZXIpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVpvb21Sb29tPj4oYCR7dXJsfSR7aWR9YCk7XHJcblx0fSxcclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBYw7NhIGRhdGFcclxuXHRkZWxldGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gVOG6oW8gcGjDsm5nXHJcblx0Y3JlYXRlUm9vbShzY2hlZHVsZUlEOiBudW1iZXIpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KGBhcGkvQ3JlYXRlUm9vbS8ke3NjaGVkdWxlSUR9YCk7XHJcblx0fSxcclxuXHQvLyDEkMOzbmcgcGjDsm5nXHJcblx0Y2xvc2VSb29tKHNjaGVkdWxlSUQ6IG51bWJlcikge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dChgYXBpL0Nsb3NlUm9vbS8ke3NjaGVkdWxlSUR9YCk7XHJcblx0fSxcclxuXHRnZXRSZWNvcmQoc2NoZWR1bGVJRDogbnVtYmVyKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElab29tUmVjb3JkW10+PihgYXBpL0dldFJlY29yZGluZy8ke3NjaGVkdWxlSUR9YCk7XHJcblx0fVxyXG59O1xyXG4iLCJjb25zdCBfID0ge1xyXG5cdHByaW1hcnlDb2xvcjogJyM1MDY4NEInLFxyXG5cdHNlY29uZENvbG9yOiAnI2VhZWRlOCcsXHJcblx0Y2hyb21lVGl0bGU6ICdDb2RpbmcgTWVudG9yJyxcclxuXHRkZXNjcmlwdGlvbjogJ0NvZGluZyBNZW50b3InLFxyXG5cdGhvc3RVUkw6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfXHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBDaGVja0NpcmNsZU91dGxpbmVkLCBXYXJuaW5nT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucydcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcydcclxuaW1wb3J0IHsgb25lU2lnbmFsQVBJLCB1c2VyQXBpIH0gZnJvbSAnfi9hcGlCYXNlJ1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCdcclxuaW1wb3J0IE9uZVNpZ25hbCBmcm9tICdyZWFjdC1vbmVzaWduYWwnXHJcblxyXG5leHBvcnQgdHlwZSBJUHJvcHMgPSB7XHJcblx0dGl0bGVQYWdlOiBzdHJpbmdcclxuXHRnZXRSb3V0ZXI6IGFueVxyXG5cdGdldFRpdGxlUGFnZTogRnVuY3Rpb25cclxuXHRzaG93Tm90aTogRnVuY3Rpb25cclxuXHRnZXREYXRhVXNlcjogRnVuY3Rpb25cclxuXHR1c2VySW5mb3JtYXRpb246IElVc2VyXHJcblx0dXNlQWxsUm9sZXM6IElSb2xlW11cclxuXHR1c2VTdGFmZlJvbGVzOiBJUm9sZVtdXHJcblx0cGFnZVNpemU6IG51bWJlclxyXG5cdGlzQWRtaW46IGJvb2xlYW5cclxuXHRyZWxvYWROb3RpZmljYXRpb246IGJvb2xlYW5cclxuXHRoYW5kbGVSZWxvYWROb3RpOiBGdW5jdGlvblxyXG5cdHJlbG9hZENhcnQ6IGJvb2xlYW5cclxuXHRoYW5kbGVSZWxvYWRDYXJ0OiBGdW5jdGlvblxyXG59XHJcblxyXG5jb25zdCBXcmFwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8SVByb3BzPih7XHJcblx0dGl0bGVQYWdlOiAnJyxcclxuXHRnZXRSb3V0ZXI6ICcnLFxyXG5cdGdldFRpdGxlUGFnZTogKCkgPT4ge30sXHJcblx0c2hvd05vdGk6ICgpID0+IHt9LFxyXG5cdGdldERhdGFVc2VyOiAoKSA9PiB7fSxcclxuXHR1c2VySW5mb3JtYXRpb246IG51bGwsXHJcblx0dXNlQWxsUm9sZXM6IG51bGwsXHJcblx0dXNlU3RhZmZSb2xlczogbnVsbCxcclxuXHRwYWdlU2l6ZTogMzAsXHJcblx0aXNBZG1pbjogZmFsc2UsXHJcblx0cmVsb2FkTm90aWZpY2F0aW9uOiBmYWxzZSxcclxuXHRoYW5kbGVSZWxvYWROb3RpOiBGdW5jdGlvbixcclxuXHRyZWxvYWRDYXJ0OiBmYWxzZSxcclxuXHRoYW5kbGVSZWxvYWRDYXJ0OiBGdW5jdGlvblxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IFdyYXBQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuXHQvLyBHZXQgcGF0aCBhbmQgc2x1Z1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblx0Y29uc3QgZ2V0Um91dGVyID0gcm91dGVyLnBhdGhuYW1lXHJcblx0bGV0IHBhdGg6IHN0cmluZyA9IHJvdXRlci5wYXRobmFtZVxyXG5cdGNvbnN0IFtzZXNzaW9uLCBsb2FkaW5nXSA9IHVzZVNlc3Npb24oKVxyXG5cdGNvbnN0IFt0aXRsZVBhZ2UsIHNldFRpdGxlUGFnZV0gPSB1c2VTdGF0ZSgnJylcclxuXHRjb25zdCBbdXNlckluZm8sIHNldFVzZXJJbmZvXSA9IHVzZVN0YXRlPElVc2VyPihudWxsKVxyXG5cdGNvbnN0IFtyb2xlcywgc2V0Um9sZXNdID0gdXNlU3RhdGU8SVJvbGVbXT4obnVsbClcclxuXHRjb25zdCBbc3RhZmZSb2xlcywgc2V0U3RhZmZSb2xlc10gPSB1c2VTdGF0ZTxJUm9sZVtdPihudWxsKVxyXG5cdGNvbnN0IFtpc0FkbWluLCBzZXRJc0FkbWluXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cdGNvbnN0IFtyZWxvYWROb3RpZmljYXRpb24sIHNldFJlbG9hZE5vdGlmaWNhdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHRjb25zdCBbcmVsb2FkQ2FydCwgc2V0UmVsb2FkQ2FydF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcblx0Ly8gLS0tIEdldCBUaXRsZSBQYWdlIC0tLVxyXG5cdGNvbnN0IGdldFRpdGxlUGFnZSA9ICh0aXRsZSkgPT4ge1xyXG5cdFx0c2V0VGl0bGVQYWdlKHRpdGxlKVxyXG5cdH1cclxuXHJcblx0Ly8gLS0tIFNob3cgTm90aWZpY2F0aW9uIC0tLVxyXG5cdGNvbnN0IHNob3dOb3RpID0gKHR5cGU6IHN0cmluZywgY29udGVudDogc3RyaW5nKSA9PiB7XHJcblx0XHRjb25zdCBub2RlTm90aSA9ICgpID0+IHtcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YG5vdGktYm94YH0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdGktYm94X19jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImljb25cIj57dHlwZSA9PSAnZGFuZ2VyJyA/IDxXYXJuaW5nT3V0bGluZWQgLz4gOiB0eXBlID09ICdzdWNjZXNzJyAmJiA8Q2hlY2tDaXJjbGVPdXRsaW5lZCAvPn08L3NwYW4+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHRcIj57Y29udGVudH08L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KVxyXG5cdFx0fVxyXG5cclxuXHRcdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0XHRjYXNlICdzdWNjZXNzJzpcclxuXHRcdFx0XHR0b2FzdC5zdWNjZXNzKG5vZGVOb3RpKVxyXG5cdFx0XHRcdGJyZWFrXHJcblx0XHRcdGNhc2UgJ2Rhbmdlcic6XHJcblx0XHRcdFx0dG9hc3QuZXJyb3Iobm9kZU5vdGkpXHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0Y2FzZSAnd2FybmluZyc6XHJcblx0XHRcdFx0dG9hc3Qud2FybmluZyhub2RlTm90aSlcclxuXHRcdFx0XHRicmVha1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGJyZWFrXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBnZXRSb2xlcyA9IGFzeW5jIChyb2xlVHlwZSkgPT4ge1xyXG5cdFx0Ly8gdHJ5IHtcclxuXHRcdC8vIFx0bGV0IHJlcyA9IGF3YWl0IHVzZXJJbmZvcm1hdGlvbkFwaS5nZXRSb2xlKHJvbGVUeXBlKVxyXG5cdFx0Ly8gXHRyZXMuc3RhdHVzID09IDIwMCAmJiByb2xlVHlwZSA9PSAwID8gc2V0Um9sZXMocmVzLmRhdGEuZGF0YSkgOiBzZXRTdGFmZlJvbGVzKHJlcy5kYXRhLmRhdGEpXHJcblx0XHQvLyB9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0Ly8gXHRjb25zb2xlLmxvZygnTOG7l2kgbOG6pXkgdGjDtG5nIHRpbiByb2xlczogJywgZXJyb3IpXHJcblx0XHQvLyB9XHJcblx0fVxyXG5cclxuXHQvLyAtLS0gR2V0IERhdGEgVXNlciAtLS1cclxuXHRjb25zdCBnZXREYXRhVXNlciA9IChkYXRhKSA9PiB7XHJcblx0XHRkYXRhICYmIHNldFVzZXJJbmZvKGRhdGEpXHJcblx0fVxyXG5cclxuXHQvLyAtLS0gQ2hlY2sgaXMgQWRtaW4gLS0tXHJcblx0Y29uc3QgY2hlY2tJc0FkbWluID0gKGRhdGEpID0+IHtcclxuXHRcdGxldCByb2xlID0gZGF0YS5Sb2xlSURcclxuXHRcdGlmIChyb2xlID09IDEgfHwgcm9sZSA9PSA1KSB7XHJcblx0XHRcdHNldElzQWRtaW4odHJ1ZSlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIC0tLSBHZXQgTmV3IERhdGEgVXNlIC0tLVxyXG5cdGNvbnN0IGdldE5ld0RhdGFVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0bGV0IHJlcyA9IGF3YWl0IHVzZXJBcGkuZ2V0TmV3KClcclxuXHRcdFx0cmVzLnN0YXR1cyA9PSAyMDAgJiYgKHNldFVzZXJJbmZvKHJlcy5kYXRhLmRhdGEpLCBjaGVja0lzQWRtaW4ocmVzLmRhdGEuZGF0YSkpXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnTOG7l2kgbOG6pXkgdGjDtG5nIHRpbiB1c2VyOiAnLCBlcnJvcilcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIC0tLSBIYW5kbGUgUmVsb2FkIE5vdGlmaWNhdGlvbiAtLS1cclxuXHRjb25zdCBoYW5kbGVSZWxvYWROb3RpID0gKCkgPT4ge1xyXG5cdFx0c2V0UmVsb2FkTm90aWZpY2F0aW9uKCFyZWxvYWROb3RpZmljYXRpb24pXHJcblx0fVxyXG5cclxuXHQvLyAtLS0gSGFuZGxlIFJlbG9hZCBDYXJkIC0tLVxyXG5cdGNvbnN0IGhhbmRsZVJlbG9hZENhcnQgPSAoKSA9PiB7XHJcblx0XHRzZXRSZWxvYWRDYXJ0KCFyZWxvYWRDYXJ0KVxyXG5cdH1cclxuXHJcblx0Y29uc3QgcG9zdE9uZXNpZ25hbElEID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgdXNlcklkID0gYXdhaXQgT25lU2lnbmFsLmdldFVzZXJJZCgpXHJcblx0XHRcdGxldCByZXMgPSBhd2FpdCBvbmVTaWduYWxBUEkudXBkYXRlKHVzZXJJZClcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdM4buXaSBs4bqleSB0aMO0bmcgdGluIHVzZXI6ICcsIGVycm9yKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmIChsb2FkaW5nICYmIHR5cGVvZiBzZXNzaW9uICE9PSAndW5kZWZpbmVkJyAmJiBzZXNzaW9uICE9PSBudWxsKSB7XHJcblx0XHRcdGlmIChwYXRoLnNlYXJjaCgnc2lnbmluJykgPCAxKSB7XHJcblx0XHRcdFx0Z2V0TmV3RGF0YVVzZXIoKVxyXG5cdFx0XHRcdGdldFJvbGVzKDApXHJcblx0XHRcdFx0Z2V0Um9sZXMoMSlcclxuXHRcdFx0XHRwb3N0T25lc2lnbmFsSUQoKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSwgW3Nlc3Npb25dKVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PFdyYXBDb250ZXh0LlByb3ZpZGVyXHJcblx0XHRcdFx0dmFsdWU9e3tcclxuXHRcdFx0XHRcdHBhZ2VTaXplOiAzMCxcclxuXHRcdFx0XHRcdHRpdGxlUGFnZTogdGl0bGVQYWdlLFxyXG5cdFx0XHRcdFx0Z2V0VGl0bGVQYWdlLFxyXG5cdFx0XHRcdFx0Z2V0Um91dGVyLFxyXG5cdFx0XHRcdFx0c2hvd05vdGksXHJcblx0XHRcdFx0XHRnZXREYXRhVXNlcixcclxuXHRcdFx0XHRcdHVzZXJJbmZvcm1hdGlvbjogdXNlckluZm8sXHJcblx0XHRcdFx0XHR1c2VBbGxSb2xlczogcm9sZXMsXHJcblx0XHRcdFx0XHR1c2VTdGFmZlJvbGVzOiBzdGFmZlJvbGVzLFxyXG5cdFx0XHRcdFx0aXNBZG1pbjogaXNBZG1pbixcclxuXHRcdFx0XHRcdHJlbG9hZE5vdGlmaWNhdGlvbjogcmVsb2FkTm90aWZpY2F0aW9uLFxyXG5cdFx0XHRcdFx0aGFuZGxlUmVsb2FkTm90aTogaGFuZGxlUmVsb2FkTm90aSxcclxuXHRcdFx0XHRcdHJlbG9hZENhcnQ6IHJlbG9hZENhcnQsXHJcblx0XHRcdFx0XHRoYW5kbGVSZWxvYWRDYXJ0OiBoYW5kbGVSZWxvYWRDYXJ0XHJcblx0XHRcdFx0fX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxUb2FzdENvbnRhaW5lclxyXG5cdFx0XHRcdFx0cG9zaXRpb249XCJ0b3AtcmlnaHRcIlxyXG5cdFx0XHRcdFx0YXV0b0Nsb3NlPXszMDAwfVxyXG5cdFx0XHRcdFx0aGlkZVByb2dyZXNzQmFyPXtmYWxzZX1cclxuXHRcdFx0XHRcdG5ld2VzdE9uVG9wPXtmYWxzZX1cclxuXHRcdFx0XHRcdGNsb3NlT25DbGlja1xyXG5cdFx0XHRcdFx0cnRsPXtmYWxzZX1cclxuXHRcdFx0XHRcdHBhdXNlT25Gb2N1c0xvc3NcclxuXHRcdFx0XHRcdGRyYWdnYWJsZVxyXG5cdFx0XHRcdFx0cGF1c2VPbkhvdmVyXHJcblx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0XHQ8L1dyYXBDb250ZXh0LlByb3ZpZGVyPlxyXG5cdFx0PC8+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlV3JhcCA9ICgpID0+IHVzZUNvbnRleHQoV3JhcENvbnRleHQpXHJcbiIsImltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJ1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcydcclxuaW1wb3J0IHsgUHJvdmlkZXIgYXMgQXV0aFByb3ZpZGVyIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgV3JhcFByb3ZpZGVyIH0gZnJvbSAnfi9jb250ZXh0L3dyYXAnXHJcbmltcG9ydCBPbmVTaWduYWwgZnJvbSAncmVhY3Qtb25lc2lnbmFsJ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWwuc2NzcydcclxuaW1wb3J0IF8gZnJvbSAnfi9hcHBDb25maWcnXHJcbmltcG9ydCB7IGdldFR5cGVVUkwgfSBmcm9tICd+L3V0aWxzL2Z1bmN0aW9ucydcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJ1xyXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZS9zdHlsZXMuY3NzJ1xyXG5jb25maWcuYXV0b0FkZENzcyA9IGZhbHNlXHJcblxyXG5jb25zdCBfMVNpZ25hbExvY2FsaG9zdCA9ICdhYTQ3NDU0Ni02YTZiLTQ4YTQtOGM0NC1iYzYwMzVhM2U5MTEnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHRjb25zdCBbY3VycmVudFVybCwgc2V0Q3VycmVudFVybF0gPSB1c2VTdGF0ZSgnJylcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNldEN1cnJlbnRVcmwod2luZG93LmxvY2F0aW9uLmhyZWYpXHJcblx0XHRjb25zb2xlLmxvZygnTk9ERV9FTlY6ICcsIHByb2Nlc3MuZW52Lk5PREVfRU5WKVxyXG5cdH0sIFtdKVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKGN1cnJlbnRVcmwgIT09ICcnKSB7XHJcblx0XHRcdGxldCB0eXBlID0gZ2V0VHlwZVVSTChjdXJyZW50VXJsKVxyXG5cdFx0XHRPbmVTaWduYWwuc2V0U3Vic2NyaXB0aW9uKHRydWUpXHJcblx0XHRcdE9uZVNpZ25hbC5pbml0KHtcclxuXHRcdFx0XHRhcHBJZDpcclxuXHRcdFx0XHRcdHR5cGUgPT0gJ0xPQ0FMSE9TVCcgPyBfMVNpZ25hbExvY2FsaG9zdCA6IHR5cGUgPT0gJ0RFTU8nID8gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfT05FX1NJR05BTCA6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX09ORV9TSUdOQUxcclxuXHRcdFx0fSkudGhlbigoKSA9PiB7XHJcblx0XHRcdFx0T25lU2lnbmFsLnNob3dTbGlkZWRvd25Qcm9tcHQoKVxyXG5cdFx0XHR9KVxyXG5cdFx0XHRPbmVTaWduYWwub24oJ3BvcG92ZXJTaG93bicsIGZ1bmN0aW9uICgpIHt9KVxyXG5cdFx0XHRjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZUVycm9yID0gKGVycjogYW55LCB1cmw6IGFueSkgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdoYW5kbGVSb3V0ZUNoYW5nZUVycm9yJywgdXJsKVxyXG5cdFx0XHR9XHJcblx0XHRcdHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCBoYW5kbGVSb3V0ZUNoYW5nZUVycm9yKVxyXG5cdFx0XHRyZXR1cm4gKCkgPT4ge1xyXG5cdFx0XHRcdHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUVycm9yJywgaGFuZGxlUm91dGVDaGFuZ2VFcnJvcilcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sIFtjdXJyZW50VXJsXSlcclxuXHJcblx0Y29uc3QgTGF5b3V0ID0gQ29tcG9uZW50LmxheW91dCB8fCAoKHByb3BzKSA9PiA8Pntwcm9wcy5jaGlsZHJlbn08Lz4pXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8dGl0bGU+e18uY2hyb21lVGl0bGV9PC90aXRsZT5cclxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCwgbWF4aW11bS1zY2FsZT0xXCIgLz5cclxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD1cIm5vaW5kZXhcIiAvPlxyXG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e18uZGVzY3JpcHRpb259IC8+XHJcblx0XHRcdFx0PG1ldGEgbmFtZT1cIm9nOnRpdGxlXCIgY29udGVudD17Xy5kZXNjcmlwdGlvbn0gLz5cclxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxyXG5cdFx0XHRcdDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2xvZ28ucG5nXCIgLz5cclxuXHRcdFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vd3d3LmFtY2hhcnRzLmNvbS9saWIvMy9wbHVnaW5zL2V4cG9ydC9leHBvcnQuY3NzXCIgdHlwZT1cInRleHQvY3NzXCIgbWVkaWE9XCJhbGxcIiAvPlxyXG5cdFx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiaHR0cHM6Ly9jZG4zLmRldmV4cHJlc3MuY29tL2pzbGliLzIwLjIuNy9jc3MvZHguY29tbW9uLmNzc1wiIC8+XHJcblx0XHRcdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJodHRwczovL2NkbjMuZGV2ZXhwcmVzcy5jb20vanNsaWIvMjAuMi43L2Nzcy9keC5saWdodC5jc3NcIiAvPlxyXG5cdFx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiaHR0cHM6Ly9jZG4zLmRldmV4cHJlc3MuY29tL2pzbGliLzIwLjIuNy9jc3MvZHgtZ2FudHQubWluLmNzc1wiIC8+XHJcblx0XHRcdFx0PHNjcmlwdCBzcmM9XCJodHRwczovL3d3dy5hbWNoYXJ0cy5jb20vbGliLzMvYW1jaGFydHMuanNcIj48L3NjcmlwdD5cclxuXHRcdFx0XHQ8c2NyaXB0IHNyYz1cImh0dHBzOi8vd3d3LmFtY2hhcnRzLmNvbS9saWIvMy9zZXJpYWwuanNcIj48L3NjcmlwdD5cclxuXHRcdFx0XHQ8c2NyaXB0IHNyYz1cImh0dHBzOi8vd3d3LmFtY2hhcnRzLmNvbS9saWIvMy90aGVtZXMvbGlnaHQuanNcIj48L3NjcmlwdD5cclxuXHRcdFx0PC9IZWFkPlxyXG5cclxuXHRcdFx0PEF1dGhQcm92aWRlciBzZXNzaW9uPXtwYWdlUHJvcHMuc2Vzc2lvbn0+XHJcblx0XHRcdFx0PFdyYXBQcm92aWRlcj5cclxuXHRcdFx0XHRcdDxMYXlvdXQ+XHJcblx0XHRcdFx0XHRcdDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuXHRcdFx0XHRcdDwvTGF5b3V0PlxyXG5cdFx0XHRcdDwvV3JhcFByb3ZpZGVyPlxyXG5cdFx0XHQ8L0F1dGhQcm92aWRlcj5cclxuXHRcdDwvPlxyXG5cdClcclxufVxyXG4iLCJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcblxyXG4vLyAgLS0tLS0tLS0tRVhQT1JUIFRPIEFSUkFZIEZPUiBTRUxFQ1QgRklFTEQtLS0tLS0tLS1cclxuZXhwb3J0IGNvbnN0IGZtU2VsZWN0QXJyID0gKGFycjogQXJyYXk8eyBba2V5OiBzdHJpbmddOiBhbnkgfT4sIHRpdGxlOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIG9wdGlvbnMgPSBbXSkgPT4ge1xyXG5cdGlmIChBcnJheS5pc0FycmF5KGFycikgJiYgYXJyLmxlbmd0aCA+IDApIHtcclxuXHRcdHJldHVybiBhcnJcclxuXHRcdFx0LmZpbHRlcigoeCkgPT4gKHguRW5hYmxlID09PSBmYWxzZSA/IGZhbHNlIDogeCkpXHJcblx0XHRcdC5tYXAoKHgpID0+ICh7XHJcblx0XHRcdFx0dGl0bGU6IHhbdGl0bGVdLFxyXG5cdFx0XHRcdHZhbHVlOiB4W3ZhbHVlXSxcclxuXHRcdFx0XHRvcHRpb25zOiBvcHRpb25zLnJlZHVjZSgob2JqLCBvKSA9PiAoeyAuLi5vYmosIFtvXTogeFtvXSB9KSwge30pXHJcblx0XHRcdH0pKVxyXG5cdH1cclxuXHRyZXR1cm4gW11cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUmVwZWF0RWxlbWVudFNvcnRlZChhcnIsIG4pIHtcclxuXHRpZiAobiA9PSAwIHx8IG4gPT0gMSkgcmV0dXJuIG5cclxuXHJcblx0bGV0IHRlbXAgPSBbYXJyWzBdXVxyXG5cdC8vIFN0YXJ0IHRyYXZlcnNpbmcgZWxlbWVudHNcclxuXHRsZXQgaiA9IDBcclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IG4gLSAxOyBpKyspIGlmIChhcnJbaV0gIT0gYXJyW2kgKyAxXSkgdGVtcC5wdXNoKGFycltpICsgMV0pXHJcblx0cmV0dXJuIHRlbXBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNsZWFyT3B0aW9uc0R1cGxpY2F0ZSA9IChhcnI6IElPcHRpb25Db21tb25bXSkgPT4ge1xyXG5cdHJldHVybiBhcnIucmVkdWNlKChuZXdBcnIsIG8pID0+IHtcclxuXHRcdGlmICghbmV3QXJyLnNvbWUoKG8yKSA9PiBvMi52YWx1ZSA9PT0gby52YWx1ZSkpIHtcclxuXHRcdFx0bmV3QXJyLnB1c2gobylcclxuXHRcdH1cclxuXHRcdHJldHVybiBuZXdBcnJcclxuXHR9LCBbXSlcclxufVxyXG5leHBvcnQgY29uc3QgZm1BcnJheVRvT2JqZWN0V2l0aFNwZWNpYWxLZXkgPSAoYXJyLCBrZXkpID0+IHtcclxuXHRyZXR1cm4gYXJyLnJlZHVjZSgobmV3T2JqLCBzKSA9PiB7XHJcblx0XHRuZXdPYmpbc1trZXldXSA/IG5ld09ialtzW2tleV1dLnB1c2gocykgOiAobmV3T2JqW3Nba2V5XV0gPSBbc10pXHJcblx0XHRyZXR1cm4gbmV3T2JqXHJcblx0fSwge30pXHJcbn1cclxuZXhwb3J0IGNvbnN0IG51bWJlcldpdGhDb21tYXMgPSAobnVtYmVyOiBhbnkpID0+IHtcclxuXHRpZiAobnVtYmVyID09ICcnIHx8IG51bWJlciA9PSB1bmRlZmluZWQgfHwgbnVtYmVyID09IG51bGwpIHtcclxuXHRcdHJldHVybiAnJ1xyXG5cdH1cclxuXHJcblx0bnVtYmVyICs9ICcnXHJcblx0bGV0IHggPSBudW1iZXIuc3BsaXQoJy4nKVxyXG5cdGxldCB4MSA9IHhbMF1cclxuXHRsZXQgeDIgPSB4Lmxlbmd0aCA+IDEgPyAnLicgKyB4WzFdIDogJydcclxuXHRsZXQgcmd4ID0gLyhcXGQrKShcXGR7M30pL1xyXG5cdHdoaWxlIChyZ3gudGVzdCh4MSkpIHtcclxuXHRcdHgxID0geDEucmVwbGFjZShyZ3gsICckMScgKyAnLCcgKyAnJDInKVxyXG5cdH1cclxuXHRyZXR1cm4geDEgKyB4MlxyXG59XHJcbmV4cG9ydCBjb25zdCBtYXRoUm91bmQgPSAobnVtYmVyKSA9PiB7XHJcblx0cmV0dXJuIE1hdGgucm91bmQobnVtYmVyICogMTAwKSAvIDEwMFxyXG59XHJcbmV4cG9ydCBjb25zdCBmbURhdGVGcm9tTm93ID0gKGRhdGUpID0+IHtcclxuXHRjb25zdCBsb2NhbCA9IG1vbWVudChkYXRlKS5sb2NhbCgpXHJcblx0bGV0IGZvcm1hdHRlZERhdGUgPSAnJ1xyXG5cdGNvbnN0IGRheXMgPSBtb21lbnQoKS5kaWZmKGxvY2FsLCAnZGF5cycpXHJcblx0aWYgKGRheXMgPj0gMikge1xyXG5cdFx0Zm9ybWF0dGVkRGF0ZSA9IGxvY2FsLmxvY2FsZSgndmknKS5mb3JtYXQoJ0REL01NL1lZWVkgSEg6bW0nKVxyXG5cdH0gZWxzZSB7XHJcblx0XHRmb3JtYXR0ZWREYXRlID0gbG9jYWwubG9jYWxlKCd2aScpLmZyb21Ob3coKVxyXG5cdH1cclxuXHRyZXR1cm4gZm9ybWF0dGVkRGF0ZVxyXG59XHJcbmV4cG9ydCBjb25zdCBwYXJzZVByaWNlU3RyVG9OdW1iZXIgPSAoc3RyOiBudW1iZXIgfCBzdHJpbmcpID0+IHBhcnNlSW50KHN0ci50b1N0cmluZygpLnJlcGxhY2UoL1xcRC9nLCAnJykpIHx8IDBcclxuXHJcbi8vIEdFVCBWSVNJQkxFIFNUQVRVU1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlUGFnZVZpc2liaWxpdHkoY2IpIHtcclxuXHRjb25zdCB0aW1lb3V0SWQgPSB1c2VSZWYobnVsbClcclxuXHJcblx0bGV0IGRlbGF5ID0gMFxyXG5cclxuXHRjb25zdCBicm93c2VyQ29tcGF0QXBpID0gKCkgPT4ge1xyXG5cdFx0bGV0IGhpZGRlbiwgdmlzaWJpbGl0eUNoYW5nZVxyXG5cdFx0aWYgKCdoaWRkZW4nIGluIGRvY3VtZW50KSB7XHJcblx0XHRcdGhpZGRlbiA9ICdoaWRkZW4nXHJcblx0XHRcdHZpc2liaWxpdHlDaGFuZ2UgPSAndmlzaWJpbGl0eWNoYW5nZSdcclxuXHRcdH0gZWxzZSBpZiAoJ21vekhpZGRlbicgaW4gZG9jdW1lbnQpIHtcclxuXHRcdFx0Ly8gRmlyZWZveCB1cCB0byB2MTdcclxuXHRcdFx0aGlkZGVuID0gJ21vekhpZGRlbidcclxuXHRcdFx0dmlzaWJpbGl0eUNoYW5nZSA9ICdtb3p2aXNpYmlsaXR5Y2hhbmdlJ1xyXG5cdFx0fSBlbHNlIGlmICgnd2Via2l0SGlkZGVuJyBpbiBkb2N1bWVudCkge1xyXG5cdFx0XHQvLyBDaHJvbWUgdXAgdG8gdjMyLCBBbmRyb2lkIHVwIHRvIHY0LjQsIEJsYWNrYmVycnkgdXAgdG8gdjEwXHJcblx0XHRcdGhpZGRlbiA9ICd3ZWJraXRIaWRkZW4nXHJcblx0XHRcdHZpc2liaWxpdHlDaGFuZ2UgPSAnd2Via2l0dmlzaWJpbGl0eWNoYW5nZSdcclxuXHRcdH1cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGhpZGRlbixcclxuXHRcdFx0dmlzaWJpbGl0eUNoYW5nZVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgY2xlYW51cFRpbWVvdXQgPSAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dElkLmN1cnJlbnQpXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCB7IGhpZGRlbiwgdmlzaWJpbGl0eUNoYW5nZSB9ID0gYnJvd3NlckNvbXBhdEFwaSgpXHJcblxyXG5cdFx0aWYgKHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykgdGhyb3cgbmV3IEVycm9yKCdjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24nKVxyXG5cclxuXHRcdGNvbnN0IGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UgPSAoKSA9PiB7XHJcblx0XHRcdGlmIChkZWxheSkge1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgZGVsYXkgIT09ICdudW1iZXInIHx8IGRlbGF5IDwgMCkge1xyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdkZWxheSBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlcicpXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAodGltZW91dElkLmN1cnJlbnQpIGNsZWFudXBUaW1lb3V0KClcclxuXHRcdFx0XHR0aW1lb3V0SWQuY3VycmVudCA9IHNldFRpbWVvdXQoKCkgPT4gY2IoIWRvY3VtZW50W2hpZGRlbl0pLCBkZWxheSlcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjYighZG9jdW1lbnRbaGlkZGVuXSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodmlzaWJpbGl0eUNoYW5nZSwgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSlcclxuXHJcblx0XHRyZXR1cm4gKCkgPT4ge1xyXG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHZpc2liaWxpdHlDaGFuZ2UsIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UpXHJcblx0XHR9XHJcblx0fSwgW2NiXSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBhcnNlVG9Nb25leSA9ICh2YWx1ZTogYW55KSA9PiB7XHJcblx0aWYgKHZhbHVlID09ICcnIHx8IHZhbHVlID09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gJydcclxuXHR9XHJcblxyXG5cdHZhbHVlICs9ICcnXHJcblx0bGV0IHggPSB2YWx1ZS5zcGxpdCgnLicpXHJcblx0bGV0IHgxID0geFswXVxyXG5cdGxldCB4MiA9IHgubGVuZ3RoID4gMSA/ICcuJyArIHhbMV0gOiAnJ1xyXG5cdGxldCByZ3ggPSAvKFxcZCspKFxcZHszfSkvXHJcblx0d2hpbGUgKHJneC50ZXN0KHgxKSkge1xyXG5cdFx0eDEgPSB4MS5yZXBsYWNlKHJneCwgJyQxJyArICcsJyArICckMicpXHJcblx0fVxyXG5cdHJldHVybiB4MSArIHgyXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVEYXRlT2JqZWN0ID0gKGRhdGVTdGF0ZSwgbG9jYWxlKSA9PiB7XHJcblx0Y29uc3QgeWVhciA9IGRhdGVTdGF0ZS5nZXRGdWxsWWVhcigpXHJcblx0Y29uc3QgbW9udGggPSBkYXRlU3RhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKGxvY2FsZSwgeyBtb250aDogJ2xvbmcnIH0pXHJcblx0Y29uc3QgZGF0ZSA9IGRhdGVTdGF0ZS5nZXREYXRlKClcclxuXHRjb25zdCBob3VyID0gKCcwJyArIGRhdGVTdGF0ZS5nZXRIb3VycygpKS5zbGljZSgtMilcclxuXHRjb25zdCBtaW51dGUgPSAoJzAnICsgZGF0ZVN0YXRlLmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpXHJcblx0Y29uc3Qgc2Vjb25kID0gKCcwJyArIGRhdGVTdGF0ZS5nZXRTZWNvbmRzKCkpLnNsaWNlKC0yKVxyXG5cdHJldHVybiB7IHllYXIsIG1vbnRoLCBkYXRlLCBob3VyLCBtaW51dGUsIHNlY29uZCB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRUeXBlVVJMID0gKHBhcmFtOiBhbnkpID0+IHtcclxuXHRpZiAocGFyYW0gIT09IHVuZGVmaW5lZCAmJiBwYXJhbSAhPT0gbnVsbCAmJiBwYXJhbSAhPT0gJycpIHtcclxuXHRcdGlmIChwYXJhbVs0XSA9PSAnOicpIHtcclxuXHRcdFx0cmV0dXJuICdMT0NBTEhPU1QnXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAocGFyYW1bNF0gPT0gJ3MnICYmIHBhcmFtWzhdID09ICdhJyAmJiBwYXJhbVs5XSA9PSAncCcgJiYgcGFyYW1bMTBdID09ICdwJykge1xyXG5cdFx0XHRcdHJldHVybiAnTElWRSdcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gJ0hFUk9LVSdcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aC9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW9uZXNpZ25hbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==