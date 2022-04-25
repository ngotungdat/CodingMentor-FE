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
  chromeTitle: 'IELTS NGUYỄN HUYỀN - Always Try Your Best',
  description: 'IELTS NGUYỄN HUYỀN',
  hostURL: "https://ielts-nguyenhuyen.monamedia.net"
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


var _jsxFileName = "D:\\MonaMedia\\Project\\IELTS-NguyenHuyen-FE\\IELTS-Nguyen-Huyen\\src\\pages\\_app.tsx";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY291cnNlLWRldGFpbC9jb3Vyc2UtZGV0YWlsLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2NvdXJzZS1kZXRhaWwvZG9jdW1lbnQtc2NoZWR1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY291cnNlLWRldGFpbC9zdHVkZW50LWxpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY291cnNlLW9ubGluZS1kZXRhaWwvYXZhaWxhYmxlLWRheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jb3Vyc2Utb25saW5lL2xlc3Nvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jb3Vyc2Utb25saW5lL3N0dWR5LWRheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jb3Vyc2UvY2hlY2stcm9vbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jb3Vyc2UvY2hlY2stc3R1ZHktdGltZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jb3Vyc2UvY2hlY2stdGVhY2hlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jb3Vyc2UvY291cnNlLW9mLXN0dWRlbnQtcHJpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY291cnNlL2NvdXJzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jb3Vyc2UvbGVzc29uLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2NvdXJzZS9yb2xsdXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY291cnNlL3N0dWR5LWRheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jdXN0b21lci9jb250cmFjdC9jb250cmFjdC1jdXN0b21lci1saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2N1c3RvbWVyL2ZpbmFuY2UvZmluYW5jZS1jYXNoaWVyLWludm9pY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY3VzdG9tZXIvZmluYW5jZS9maW5hbmNlLWNhc2hpZXItcGF5bWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jdXN0b21lci9maW5hbmNlL2ZpbmFuY2UtY2FzaGllci1yZWZ1bmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY3VzdG9tZXIvcGFyZW50cy9wYXJlbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2N1c3RvbWVyL3NlcnZpY2Uvc2VydmljZS1jdXN0b21lci1leGFtLXJlc3VsdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jdXN0b21lci9zZXJ2aWNlL3NlcnZpY2UtY3VzdG9tZXItZXhhbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jdXN0b21lci9zZXJ2aWNlL3Rlc3QtY3VzdG9tZXItcG9pbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2N1c3RvbWVyL3NlcnZpY2UvdGVzdC1jdXN0b21lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jdXN0b21lci9zdHVkZW50L2NvdXJzZS1zdHVkZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2N1c3RvbWVyL3N0dWRlbnQvZXhhbS1hcHBvaW50bWVudC1yZXN1bHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY3VzdG9tZXIvc3R1ZGVudC9leGFtLWNvbWluZy1zb29uLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2N1c3RvbWVyL3N0dWRlbnQvc3R1ZGVudC1hZHZpc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY3VzdG9tZXIvc3R1ZGVudC9zdHVkZW50LWNoYW5nZS1jb3Vyc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvY3VzdG9tZXIvc3R1ZGVudC9zdHVkZW50LWNoYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jdXN0b21lci9zdHVkZW50L3N0dWRlbnQtbGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9jdXN0b21lci9zdHVkZW50L3dhcm5pbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvZG9pbmctdGVzdC9kb2luZy10ZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2V4YW0tZGV0YWlsL2V4YW0tZGV0YWlsLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2V4YW0vZXhhbS10b3BpYy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9leGVyY2lzZS9leGVyY2lzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9leGVyY2lzZS9leGVyY2lzZUdyb3VwLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL2ZlZWQtYmFjay9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9pbnN0YW5jZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9uZXdzZmVlZC9iYWNrZ3JvdW5kLW5ld3NmZWVkLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL25ld3NmZWVkL2dyb3VwLW5ld3NmZWVkLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL25ld3NmZWVkL25ld3NmZWVkLWNvbW1lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL25ld3NmZWVkL25ld3NmZWVkLWNvbW1lbnRyZXBseS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvbmV3c2ZlZWQvbmV3c2ZlZWQtbGlrZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvbmV3c2ZlZWQvbmV3c2ZlZWQudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL25ld3NmZWVkL3VzZXItYnJhbmNoLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL25ld3NmZWVkL3VzZXItZ3JvdXAtbmV3c2ZlZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb25lU2lnbmFsL29uZVNpZ25hbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9vcHRpb25zL2FyZWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9icmFuY2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9jb25zdWx0YXRpb24tc3RhdHVzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvY29udHJhY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9jdXJyaWN1bHVtLWRldGFpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9vcHRpb25zL2N1cnJpY3VsdW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9kYXktb2ZmLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvZGlzY291bnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9kaXN0cmljdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9vcHRpb25zL2dyYWRlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvam9iLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvbm90aWZpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvcHJpY2UtZml4LWV4YW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9wcm9ncmFtLWRldGFpbC1wb2ludC1jb2x1bW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9wcm9ncmFtLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvcHVyb3NlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvcm9vbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9vcHRpb25zL3J1bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9vcHRpb25zL3NvdXJjZS1pbmZvbWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvc3RhZmYtc2FsYXJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL29wdGlvbnMvc3R1ZHktdGltZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9vcHRpb25zL3N1YmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvb3B0aW9ucy9zdXBwbGllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9vcHRpb25zL3VzZXJpbmZvcm1hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9vcHRpb25zL3dhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvcGFja2FnZS9wYWNrYWdlLWV4YW1pbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3BhY2thZ2UvcGFja2FnZS1yZXN1bHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvcGFja2FnZS9wYWNrYWdlLXN0dWRlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvcGFja2FnZS9wYWNrYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3BhY2thZ2UvcGF5LWZpeC1leGFtLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3BhY2thZ2UvcGF5LWZpeC1saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3NhbGUvc2FsZS1jYW1wYWlnbi1kZXRhaWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvc2FsZS9zYWxlLWNhbXBhaWduLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3NhbGUvc2FsZS1zYWxhcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvc2FsZS9zYWxlci1yZXZlbnVlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3NhbGUvc2FsZXItdG90YWwtcmV2ZW51ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9zY2hlZHVsZS9jaGVjay1icmFuY2gtc2NoZWR1bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3NjaGVkdWxlL2NoZWNrLXRlYWNoZXItc2NoZWR1bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3NlbGYtY291cnNlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3N0YWZmLW1hbmFnZS9zdGFmZi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9zdGFmZi1tYW5hZ2UvdGFzay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS9zdHVkeS1yb2xlL3N0dWR5LXJvbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2UvdGVhY2hlci90ZWFjaGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGlCYXNlL3VzZXIvdXNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS92aWRlby1jb3Vyc2UtbGlzdC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS92aWRlby1sZWFybmluZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS96b29tL2NvbWluZy1jb3Vyc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvem9vbS9jb25maWctem9vbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpQmFzZS96b29tL3NjaGVkdWxlLXpvb20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUJhc2Uvem9vbS96b29tLXJvb20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcENvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC93cmFwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2Z1bmN0aW9ucy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXV0aC9jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtb25lc2lnbmFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJ1cmwiLCJjb3Vyc2VEZXRhaWxBcGkiLCJnZXRBbGwiLCJwYXJhbXMiLCJpbnN0YW5jZSIsImdldCIsInVwZGF0ZSIsImRhdGEiLCJwdXQiLCJhaGVhZFNjaGVkdWxlIiwiZG9jdW1lbnRTY2hlZHVsZUFwaSIsImFkZCIsInBvc3QiLCJzdHVkZW50TGlzdEluQ291cnNlQXBpIiwiY291cnNlT25saW5lRGV0YWlsQXZhaWxhYmxlRGF5QXBpIiwibGVzc29uT25saW5lQXBpIiwic3R1ZHlEYXlPbmxpbmVBcGkiLCJjaGVja1Jvb21BcGkiLCJjaGVja1N0dWR5VGltZUFwaSIsImNoZWNrIiwiY2hlY2tUZWFjaGVyQXBpIiwiZ2V0QWxsVGVhY2hlckF2YWlsYWJsZSIsImNvdXJzZU9mU3R1ZGVudFByaWNlQXBpIiwiY291cnNlQXBpIiwiZ2V0QnlJZCIsImlkIiwibGVzc29uQXBpIiwiY2FsbEF1dG8iLCJfIiwiQVBJX1VSTCIsImNhbGxBdXRvTWludXRlIiwicm9sbFVwQXBpIiwic3R1ZHlEYXlBcGkiLCJDb250cmFjdEN1c3RvbWVyTGlzdCIsIlBhcmFtcyIsImNvbnRyYWN0Q3VzdG9tZXJMaXN0QXBpIiwiSW52b2ljZSIsImludm9pY2VBcGkiLCJWb3VjaGVyIiwidm91Y2hlckFwaSIsIlJlZnVuZHMiLCJyZWZ1bmRzQXBpIiwiUGFyZW50c0FwaSIsInBhcmVudHNBcGkiLCJTZXJ2aWNlQ3VzdG9tZXJFeGFtUmVzdWx0IiwidG9kb0FwaSIsIklEIiwic2VydmljZUN1c3RvbWVyRXhhbVJlc3VsdEFwaSIsIlNlcnZpY2VDdXN0b21lckV4YW0iLCJzZXJ2aWNlQ3VzdG9tZXJFeGFtQXBpIiwiVGVzdEN1c3RvbWVyUG9pbnRBcGkiLCJ0ZXN0Q3VzdG9tZXJQb2ludEFwaSIsIlRlc3RDdXN0b21lckFwaSIsInRlc3RDdXN0b21lckFwaSIsIkNvdXJzZVN0dWRlbnRBcGkiLCJjb3Vyc2VTdHVkZW50QXBpIiwiZXhhbUFwcG9pbnRtZW50UmVzdWx0QXBpIiwiZGVsZXRlIiwiZ2V0UmVzdWx0RXhhbSIsInVwZGF0ZVBvaW50IiwiY2hlY2tJc1Rlc3RlZCIsIkV4YW1Db21pbmdTb29uIiwiZXhhbUNvbWluZ1Nvb25BcGkiLCJTdHVkZW50QWR2aXNlQXBpIiwic3R1ZGVudEFkdmlzZUFwaSIsIlN0dWRlbnRDaGFuZ2VDb3Vyc2VBcGkiLCJzdHVkZW50Q2hhbmdlQ291cnNlQXBpIiwiU3R1ZGVudENoYW5nZUFwaSIsInN0dWRlbnRDaGFuZ2VBcGkiLCJTdHVkZW50QXBpIiwiZmlsZSIsImZEYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJjb25zb2xlIiwibG9nIiwic3R1ZGVudEFwaSIsIldhcm5pbmciLCJ3YXJuaW5nQXBpIiwiZG9pbmdUZXN0QXBpIiwiZ2V0QnlJRCIsImV4YW1EZXRhaWxBcGkiLCJjcmVhdGVBdXRvIiwiY2hhbmdlUG9zaXRpb24iLCJleGFtVG9waWNBcGkiLCJFeGVyY2lzZUFwaSIsImltcG9ydEV4Y2VsIiwiZXhlcmNpc2VBcGkiLCJFeGVyY2lzZUdyb3VwQXBpIiwiVXBsb2FkQXVkaW8iLCJmb3JtZGF0YSIsImV4ZXJjaXNlR3JvdXBBcGkiLCJGZWVkYmFja0FwaSIsIlNIT1dfTE9HIiwiTk9ERV9TVEFUVVMiLCJpc1Nob3dMb2ciLCJlIiwiZ2V0VXJsIiwiY29uZmlnIiwiYmFzZVVSTCIsInJlcGxhY2UiLCJzcGxpdCIsImF1dGhIZWFkZXJfWCIsInNlc3Npb24iLCJnZXRTZXNzaW9uIiwiYWNjZXNzVG9rZW4iLCJ0b2tlbiIsImF1dGhIZWFkZXJfQmVhcmVyIiwiQXV0aG9yaXphdGlvbiIsImF4aW9zIiwiY3JlYXRlIiwiaG9zdFVSTCIsImhlYWRlcnMiLCJBY2NlcHQiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwidG9TdHJpbmciLCJpbmNsdWRlcyIsImF1dGhIZWFkZXIiLCJtZXRob2QiLCJ0b1VwcGVyQ2FzZSIsImVycm9yIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJQcm9taXNlIiwicmVqZWN0IiwiY2hlY2tSZXNwb25zZSIsInNldFRpbWVvdXQiLCJzaWduSW4iLCJhbGVydCIsIm1lc3NhZ2UiLCJKU09OIiwic3RyaW5naWZ5IiwiQmFja2dyb3VuZE5ld3NGZWVkIiwiYmFja2dyb3VuZE5ld3NGZWVkQXBpIiwiR3JvdXBOZXdzRmVlZCIsImdyb3VwTmV3c0ZlZWRBcGkiLCJOZXdzRmVlZENvbW1lbnQiLCJuZXdzRmVlZENvbW1lbnRBcGkiLCJOZXdzRmVlZENvbW1lbnRSZXBseSIsIm5ld3NGZWVkQ29tbWVudFJlcGx5QXBpIiwiTmV3c0ZlZWRMaWtlIiwibmV3c0ZlZWRMaWtlQXBpIiwiTmV3c0ZlZWQiLCJuZXdzRmVlZEFwaSIsIlVzZXJCcmFuY2giLCJ1c2VyQnJhbmNoQXBpIiwiVXNlckdyb3VwTmV3c0ZlZWQiLCJ1c2VyR3JvdXBOZXdzRmVlZEFwaSIsIm9uZVNpZ25hbEFQSSIsIkFyZWFBcGkiLCJhcmVhQXBpIiwiQnJhbmNoQXBpIiwiYnJhbmNoQXBpIiwiQ29uZmlnIiwiY29uZmlnQXBpIiwiQ29uc3VsdGF0aW9uU3RhdHVzQXBpIiwiY29uc3VsdGF0aW9uU3RhdHVzQXBpIiwiY29udHJhY3RBcGkiLCJDdXJyaWN1bHVtRGV0YWlsQXBpIiwiY3VycmljdWx1bURldGFpbEFwaSIsIkN1cnJpY3VsdW1BcGkiLCJjdXJyaWN1bHVtQXBpIiwiZGF5T2ZmQXBpIiwiRGlzY291bnRBcGkiLCJkaXNjb3VudEFwaSIsIkRpc3RyaWN0QXBpIiwiYXJlYUlEIiwiQXJlYUlEIiwiZGlzdHJpY3RBcGkiLCJHcmFkZUFwaSIsImdyYWRlQXBpIiwiSm9iQXBpIiwiam9iUGFyYW1zIiwiam9iQXBpIiwiTm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9uQXBpIiwiUHJpY2VGaXhFeGFtQXBpIiwicHJpY2VGaXhFeGFtQXBpIiwicHJvZ3JhbURldGFpbFBvaW50Q29sdW1uQXBpIiwiUHJvZ3JhbUFwaSIsInByb2dyYW1BcGkiLCJQdXJvc2UiLCJwdXJvc2VBcGkiLCJSb29tQXBpIiwicm9vbUFwaSIsIlJ1bGVzIiwicnVsZXNBcGkiLCJTZXJ2aWNlQXBpIiwic2VydmljZUFwaSIsIlNvdXJjZUluZm9tYXRpb24iLCJzb3VyY2VJbmZvbWF0aW9uQXBpIiwiU3RhZmZTYWxhcnkiLCJzdGFmZlNhbGFyeUFwaSIsIlN0dWR5VGltZUFwaSIsInN0dWR5VGltZUFwaSIsIlN1YmplY3RBcGkiLCJzdWJqZWN0QXBpIiwiU3VwcGxpZXIiLCJzdXBwbGllckFwaSIsIlVzZXJJbmZvcm1hdGlvbiIsInJvbGUiLCJSb2xlSUQiLCJyb2xlVHlwZSIsInN0eWxlIiwidXNlckluZm9ybWF0aW9uQXBpIiwiV2FyZEFwaSIsIndhcmRBcGkiLCJwYWNrYWdlRXhhbWluZXJBcGkiLCJQYWNrYWdlUmVzdWx0QXBpIiwicGFja2FnZVJlc3VsdEFwaSIsInBhY2thZ2VTdHVkZW50QXBpIiwicGFja2FnZUFwaSIsInVwbG9hZEltZyIsInBheUZpeEV4YW1BcGkiLCJwYXlGaXhMaXN0QXBpIiwicmVzZXRQYXNzd29yZEFwaSIsInNlbmRFbWFpbCIsImNvbmZpcm0iLCJzYWxlQ2FtcGFpZ25EZXRhaWxBcGkiLCJzYWxlQ2FtcGFpZ25BcGkiLCJzYWxlU2FsYXJ5QXBpIiwic2FsZXJSZXZlbnVlQXBpIiwic2FsZXJUb3RhbFJldmVudWVBcGkiLCJjaGVja0JyYW5jaFNjaGVkdWxlU3R1ZHkiLCJjaGVja1RlYWNoZXJTY2hlZHVsZVN0dWR5IiwiY3JlYXRlU2VsZkNvdXJzZSIsImdldFNjaGVkdWxlU2VsZkNvdXJzZSIsImNoZWNrU3R1ZHlUaW1lU2VsZkNvdXJzZSIsImRhdGUiLCJjdXJyaWN1bHVtc0RldGFpbElEIiwiY2hlY2tUZWFjaGVyU2VsZkNvdXJzZSIsInN0dWR5VGltZUlEIiwidXBkYXRlU2NoZWR1bGVTZWxmQ291cnNlIiwiY2FuY2VsU2NoZWR1bGVTZWxmQ291cnNlIiwiZ2V0UmFuZ2VUaW1lU2VsZkNvdXJzZSIsInNldFJhbmdlVGltZVNlbGZDb3Vyc2UiLCJTdGFmZkFwaSIsInN0YWZmQXBpIiwidGFza0dyb3VwQXBpIiwidXJsMiIsInRhc2tBcGkiLCJ1cmwzIiwic3RhZmZPZlRhc2tHcm91cEFwaSIsIlN0dWR5Um9sZUFwaSIsInN0dWR5Um9sZUFwaSIsInRlYWNoZXJBcGkiLCJ1cGRhdGVCcmFuY2giLCJ1cGRhdGVSb2xlIiwiZ2V0QWxsVGVhY2hlckZvclN1YmplY3QiLCJ1cGRhdGVUZWFjaGVyRm9yU3ViamVjdCIsInVwZGF0ZVRlYWNoZXJGb3JBbGxTdWJqZWN0IiwiZ2V0VGVhY2hlckJ5UHJvZ3JhbSIsImdldEN1cnJpY3VsdW0iLCJhc3NpZ24iLCJVc2VyQXBpIiwiY2hhbmdlUGFzc3dvcmQiLCJjcmVhdGVBY2NvdW50IiwidXNlckFwaSIsIlZpZGVvQ291cnNlTGlzdEFwaSIsInBhZ2VJbmRleCIsInBhZ2VTaXplIiwic2VhcmNoIiwiZ2V0QnlVc2VyIiwidXBkYXRlQWN0aXZlQ29kZSIsInVwZGF0ZUxpbWl0Qm9va2luZyIsImRvbmVQYXlVcmwiLCJEb25lUGF5QXBpIiwiUGF5bWVudFN0YXR1cyIsIlZpZGVvQ291cnNlT2ZTdHVkZW50IiwiR2V0QnlJRCIsIlVwZGF0ZVNlZW5BbmRUaW1lV2F0Y2hlZFZpZGVvIiwiR2V0TGVzc29uSW5Qcm9ncmVzcyIsInVybEludGVyYWN0aW8iLCJWaWRlb0NvdXJzZUludGVyYWN0aW9uIiwiTGlzdFFBIiwiTGlzdE5vdGUiLCJMaXN0TGlzdEFubm91bmNlbWVudCIsInZpZGVvY291cnNlSUQiLCJ1cmxWaWRlb0NvdXJzZXMiLCJWaWRlb0NvdXJzZXMiLCJMaXN0U2VjdGlvbiIsIkxpc3RMZXNzb24iLCJMZXNzb25EZXRhaWwiLCJjb21pbmdDb3Vyc2VBcGkiLCJjb25maWdab29tQXBpIiwiZ2V0SW5hY3RpdmVDb25maWdab29tIiwic2NoZWR1bGVab29tQXBpIiwiem9vbVJvb21BcGkiLCJjcmVhdGVSb29tIiwic2NoZWR1bGVJRCIsImNsb3NlUm9vbSIsImdldFJlY29yZCIsInByaW1hcnlDb2xvciIsInNlY29uZENvbG9yIiwiY2hyb21lVGl0bGUiLCJkZXNjcmlwdGlvbiIsInByb2Nlc3MiLCJORVhUX1BVQkxJQ19BUElfRU5EUE9JTlQiLCJXcmFwQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ0aXRsZVBhZ2UiLCJnZXRSb3V0ZXIiLCJnZXRUaXRsZVBhZ2UiLCJzaG93Tm90aSIsImdldERhdGFVc2VyIiwidXNlckluZm9ybWF0aW9uIiwidXNlQWxsUm9sZXMiLCJ1c2VTdGFmZlJvbGVzIiwiaXNBZG1pbiIsInJlbG9hZE5vdGlmaWNhdGlvbiIsImhhbmRsZVJlbG9hZE5vdGkiLCJGdW5jdGlvbiIsInJlbG9hZENhcnQiLCJoYW5kbGVSZWxvYWRDYXJ0IiwiV3JhcFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInBhdGgiLCJsb2FkaW5nIiwidXNlU2Vzc2lvbiIsInNldFRpdGxlUGFnZSIsInVzZVN0YXRlIiwidXNlckluZm8iLCJzZXRVc2VySW5mbyIsInJvbGVzIiwic2V0Um9sZXMiLCJzdGFmZlJvbGVzIiwic2V0U3RhZmZSb2xlcyIsInNldElzQWRtaW4iLCJzZXRSZWxvYWROb3RpZmljYXRpb24iLCJzZXRSZWxvYWRDYXJ0IiwidGl0bGUiLCJ0eXBlIiwiY29udGVudCIsIm5vZGVOb3RpIiwidG9hc3QiLCJzdWNjZXNzIiwid2FybmluZyIsImdldFJvbGVzIiwiY2hlY2tJc0FkbWluIiwiZ2V0TmV3RGF0YVVzZXIiLCJyZXMiLCJnZXROZXciLCJwb3N0T25lc2lnbmFsSUQiLCJ1c2VySWQiLCJPbmVTaWduYWwiLCJnZXRVc2VySWQiLCJ1c2VFZmZlY3QiLCJ1c2VXcmFwIiwidXNlQ29udGV4dCIsImF1dG9BZGRDc3MiLCJfMVNpZ25hbExvY2FsaG9zdCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImN1cnJlbnRVcmwiLCJzZXRDdXJyZW50VXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZ2V0VHlwZVVSTCIsInNldFN1YnNjcmlwdGlvbiIsImluaXQiLCJhcHBJZCIsIk5FWFRfUFVCTElDX09ORV9TSUdOQUwiLCJ0aGVuIiwic2hvd1NsaWRlZG93blByb21wdCIsIm9uIiwiaGFuZGxlUm91dGVDaGFuZ2VFcnJvciIsImVyciIsImV2ZW50cyIsIm9mZiIsIkxheW91dCIsImxheW91dCIsInByb3BzIiwiZm1TZWxlY3RBcnIiLCJhcnIiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJmaWx0ZXIiLCJ4IiwiRW5hYmxlIiwibWFwIiwicmVkdWNlIiwib2JqIiwibyIsInJlbW92ZVJlcGVhdEVsZW1lbnRTb3J0ZWQiLCJuIiwidGVtcCIsImoiLCJpIiwicHVzaCIsImNsZWFyT3B0aW9uc0R1cGxpY2F0ZSIsIm5ld0FyciIsInNvbWUiLCJvMiIsImZtQXJyYXlUb09iamVjdFdpdGhTcGVjaWFsS2V5Iiwia2V5IiwibmV3T2JqIiwicyIsIm51bWJlcldpdGhDb21tYXMiLCJudW1iZXIiLCJ1bmRlZmluZWQiLCJ4MSIsIngyIiwicmd4IiwidGVzdCIsIm1hdGhSb3VuZCIsIk1hdGgiLCJyb3VuZCIsImZtRGF0ZUZyb21Ob3ciLCJsb2NhbCIsIm1vbWVudCIsImZvcm1hdHRlZERhdGUiLCJkYXlzIiwiZGlmZiIsImxvY2FsZSIsImZvcm1hdCIsImZyb21Ob3ciLCJwYXJzZVByaWNlU3RyVG9OdW1iZXIiLCJzdHIiLCJwYXJzZUludCIsInVzZVBhZ2VWaXNpYmlsaXR5IiwiY2IiLCJ0aW1lb3V0SWQiLCJ1c2VSZWYiLCJkZWxheSIsImJyb3dzZXJDb21wYXRBcGkiLCJoaWRkZW4iLCJ2aXNpYmlsaXR5Q2hhbmdlIiwiZG9jdW1lbnQiLCJjbGVhbnVwVGltZW91dCIsImNsZWFyVGltZW91dCIsImN1cnJlbnQiLCJFcnJvciIsImhhbmRsZVZpc2liaWxpdHlDaGFuZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInBhcnNlVG9Nb25leSIsImNyZWF0ZURhdGVPYmplY3QiLCJkYXRlU3RhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImdldERhdGUiLCJob3VyIiwiZ2V0SG91cnMiLCJzbGljZSIsIm1pbnV0ZSIsImdldE1pbnV0ZXMiLCJzZWNvbmQiLCJnZXRTZWNvbmRzIiwicGFyYW0iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckdBO0FBQ0E7QUFDQTtBQUVBLE1BQU0rQyxRQUFRLEdBQUcsSUFBakI7QUFDQSxNQUFNQyxXQUFnQixnQkFBdEI7O0FBRUEsTUFBTUMsU0FBUyxHQUFJQyxDQUFELElBQVk7QUFDN0IsTUFBSUEsQ0FBQyxLQUFLLHdCQUFOLElB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QXVCbUQsS0FBSyxLQUFLLElBQWpDLElBQXlDQSxLQUFLLEtBQUssRUFBdkQsRUFBMkQ7QUFDMUQsUUFBSUEsS0FBSyxDQUFDLENBQUQsQ0FBTCxJQUFZLEdBQWhCLEVBQXFCO0FBQ3BCLGFBQU8sV0FBUDtBQUNBLEtBRkQsTUFFTztBQUNOLFVBQUlBLEtBQUssQ0FBQyxDQUFELENBQUwsSUFBWSxHQUFaLElBQW1CQSxLQUFLLENBQUMsQ0FBRCxDQUFMLElBQVksR0FBL0IsSUFBc0NBLEtBQUssQ0FBQyxDQUFELENBQUwsSUFBWSxHQUFsRCxJQUF5REEsS0FBSyxDQUFDLEVBQUQsQ0FBTCxJQUFhLEdBQTFFLEVBQStFO0FBQzlFLGVBQU8sTUFBUDtBQUNBLE9BRkQsTUFFTztBQUNOLGVBQU8sUUFBUDtBQUNBO0FBQ0Q7QUFDRDtBQUNELENBWk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SlAsOEM7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvQ291cnNlU2NoZWR1bGVzLyc7XHJcblxyXG50eXBlIElUeXBlRm9yT3B0aW9uRmV0Y2hBdmFpbGFibGVTY2hlZHVsZSA9IHtcclxuXHRpZDogbnVtYmVyO1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRzZWxlY3Q6IGJvb2xlYW47XHJcbn07XHJcbmV4cG9ydCB0eXBlIElBcGlDb3Vyc2VTY2hlZHVsZTxUID0gYW55PiA9IHtcclxuXHRkYXRhOiBUO1xyXG5cdG1lc3NhZ2U6IHN0cmluZztcclxuXHR0b3RhbFJvdzogbnVtYmVyO1xyXG5cdHN0dWR5VGltZXM6IElUeXBlRm9yT3B0aW9uRmV0Y2hBdmFpbGFibGVTY2hlZHVsZVtdO1xyXG5cdHJvb21zOiBJVHlwZUZvck9wdGlvbkZldGNoQXZhaWxhYmxlU2NoZWR1bGVbXTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGNvdXJzZURldGFpbEFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlDb3Vyc2VTY2hlZHVsZTxJQ291cnNlRGV0YWlsU2NoZWR1bGVbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXNcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8gQ+G6rXAgbmjhuq10XHJcblx0dXBkYXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdGFoZWFkU2NoZWR1bGUocGFyYW1zOiB7IGNvdXJzZVNjaGVkdWxlSWQ6IG51bWJlcjsgdGVhY2hlcklkOiBudW1iZXIgfSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpQ291cnNlU2NoZWR1bGU8SUNvdXJzZURldGFpbFNjaGVkdWxlW10+PignL2FwaS9sdWlMaWNoSG9jJywgeyBwYXJhbXMgfSk7XHJcblx0fVxyXG59O1xyXG4iLCJpbXBvcnQge2luc3RhbmNlfSBmcm9tICcuLi9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9Eb2N1bWVudE9mQ291cnNlLyc7XHJcbmV4cG9ydCBjb25zdCBkb2N1bWVudFNjaGVkdWxlQXBpID0ge1xyXG5cdC8vIEPhuq1wIG5o4bqtdFxyXG5cdGFkZChkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcbn07XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvU3R1ZGVudEluQ291cnNlLyc7XHJcbnR5cGUgSUFwaVJlc3VsdFN0dWRlbnRJbkNvdXJzZTxUID0gYW55PiA9IHtcclxuXHRzdHVkZW50TGlzdDogVDtcclxuXHRtZXNzYWdlOiBzdHJpbmc7XHJcblx0VG90YWxSb3c6IG51bWJlcjtcclxufTtcclxuZXhwb3J0IGNvbnN0IHN0dWRlbnRMaXN0SW5Db3Vyc2VBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0U3R1ZGVudEluQ291cnNlPElTdHVkZW50TGlzdEluQ291cnNlW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcbiIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL0F2YWlsYWJsZURhdGVPbmxpbmUvJztcclxuZXhwb3J0IGNvbnN0IGNvdXJzZU9ubGluZURldGFpbEF2YWlsYWJsZURheUFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElDb3Vyc2VEZXRhaWxBdmFpbGFibGVEYXlbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXMsXHJcblx0XHR9KTtcclxuXHR9LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJy4uL2luc3RhbmNlJ1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvTGVzc29uT25saW5lJ1xyXG5leHBvcnQgY29uc3QgbGVzc29uT25saW5lQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUxlc3Nvbj4odXJsLCB7XHJcblx0XHRcdHBhcmFtc1xyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICcuLi9pbnN0YW5jZSdcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1N0dWR5RGF5T25saW5lJ1xyXG5leHBvcnQgY29uc3Qgc3R1ZHlEYXlPbmxpbmVBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU3R1ZHlEYXlbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXNcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnLi4vaW5zdGFuY2UnXHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9DaGVja1Jvb20vJ1xyXG5leHBvcnQgY29uc3QgY2hlY2tSb29tQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUNoZWNrU2NoZWR1bGVbXT4+KHVybCwgeyBwYXJhbXMgfSlcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHtpbnN0YW5jZX0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvQ2hlY2tTdHVkeVRpbWUvJztcclxuZXhwb3J0IGNvbnN0IGNoZWNrU3R1ZHlUaW1lQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGNoZWNrKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0PElBcGlSZXN1bHREYXRhPElDaGVja1N0dWR5VGltZVtdPj4odXJsLCBkYXRhKTtcclxuXHR9LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL0NoZWNrVGVhY2hlci8nO1xyXG5leHBvcnQgY29uc3QgY2hlY2tUZWFjaGVyQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUNoZWNrU2NoZWR1bGVbXT4+KHVybCwgeyBwYXJhbXMgfSk7XHJcblx0fSxcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGEgLSBlZGl0IGtow7NhIGjhu41jXHJcblx0Z2V0QWxsVGVhY2hlckF2YWlsYWJsZShwYXJhbXM6IHsgQ291cnNlSUQ6IG51bWJlcjsgU3R1ZHlUaW1lSUQ6IG51bWJlcjsgUHJvZ3JhbUlEOiBudW1iZXI7IEJyYW5jaElEOiBudW1iZXI7IERhdGU6IHN0cmluZyB9KSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPHsgVXNlckluZm9ybWF0aW9uSUQ6IG51bWJlcjsgRnVsbE5hbWVVbmljb2RlOiBzdHJpbmcgfVtdPj4oJy9hcGkvVGVhY2hlckF2YWlsYWJsZScsIHsgcGFyYW1zIH0pO1xyXG5cdH1cclxufTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICcuLi9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9Db3Vyc2VPZlN0dWRlbnRQcmljZSc7XHJcblxyXG5leHBvcnQgY29uc3QgY291cnNlT2ZTdHVkZW50UHJpY2VBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxhbnk+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuXHR9XHJcbn07XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvQ291cnNlLyc7XHJcbmV4cG9ydCBjb25zdCBjb3Vyc2VBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJQ291cnNlW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIHVwZGF0ZSBt4bubaSBkYXRhXHJcblx0dXBkYXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cclxuXHRnZXRCeUlkKGlkOiBudW1iZXIpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUNvdXJzZURldGFpbD4+KGAke3VybH0ke2lkfWApO1xyXG5cdH1cclxufTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICcuLi9pbnN0YW5jZSdcclxuaW1wb3J0IF8gZnJvbSAnfi9hcHBDb25maWcnXHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9MZXNzb24vJ1xyXG5leHBvcnQgY29uc3QgbGVzc29uQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUxlc3Nvbj4odXJsLCB7XHJcblx0XHRcdHBhcmFtc1xyXG5cdFx0fSlcclxuXHR9LFxyXG5cclxuXHRjYWxsQXV0byhkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KGAke18uQVBJX1VSTH0vYXBpL1B1c2hgLCBudWxsKVxyXG5cdH0sXHJcblxyXG5cdGNhbGxBdXRvTWludXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQoYCR7Xy5BUElfVVJMfS9hcGkvUHVzaE9uZU1pbnV0ZWAsIG51bGwpXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1JvbGxVcC8nO1xyXG5leHBvcnQgY29uc3Qgcm9sbFVwQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVJvbGxVcFtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtcyxcclxuXHRcdH0pO1xyXG5cdH0sXHJcbn07XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnLi4vaW5zdGFuY2UnXHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9TdHVkeURheS8nXHJcbmV4cG9ydCBjb25zdCBzdHVkeURheUFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdHVkeURheVtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtc1xyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jb25zdCB1cmwgPSBcIi9hcGkvQ29udHJhY3RPZlN0dWRlbnRcIjtcclxuXHJcbmNsYXNzIENvbnRyYWN0Q3VzdG9tZXJMaXN0IHtcclxuICBnZXRBbGwgPSAoUGFyYW1zOiBhbnkpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUNvbnRyYWN0Q3VzdG9tZXJMaXN0W10+Pih1cmwsIHtcclxuICAgICAgcGFyYW1zOiBQYXJhbXMsXHJcbiAgICB9KTtcclxuXHJcbiAgZ2V0RGV0YWlsID0gKGlkOiBudW1iZXIpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUNvbnRyYWN0Q3VzdG9tZXJMaXN0Pj4oYCR7dXJsfS8ke2lkfWApO1xyXG5cclxuICB1cGRhdGUgPSAoZGF0YSkgPT4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSwge30pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY29udHJhY3RDdXN0b21lckxpc3RBcGkgPSBuZXcgQ29udHJhY3RDdXN0b21lckxpc3QoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvSW52b2ljZSc7XHJcblxyXG5jbGFzcyBJbnZvaWNlIHtcclxuXHRnZXRBbGwgPSAoUGFyYW1zOiBhbnkpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUludm9pY2VbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXM6IFBhcmFtc1xyXG5cdFx0fSk7XHJcblxyXG5cdGdldERldGFpbCA9IChpZDogbnVtYmVyKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUludm9pY2U+PihgJHt1cmx9LyR7aWR9YCk7XHJcblxyXG5cdHVwZGF0ZSA9IChkYXRhKSA9PiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhLCB7fSk7XHJcblxyXG5cdGV4cG9ydCA9IChpZCkgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPihgL2FwaS9FeHBvcnRJbnZvaWNlLyR7aWR9YCk7XHJcblxyXG5cdHNlbmRNYWlsID0gKGlkKSA9PiBpbnN0YW5jZS5wb3N0KGBhcGkvU2VuZE1haWxJbnZvaWNlLyR7aWR9YCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbnZvaWNlQXBpID0gbmV3IEludm9pY2UoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvVm91Y2hlcic7XHJcblxyXG5jbGFzcyBWb3VjaGVyIHtcclxuXHRnZXRBbGwgPSAoUGFyYW1zOiBhbnkpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVZvdWNoZXJbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXM6IFBhcmFtc1xyXG5cdFx0fSk7XHJcblxyXG5cdGdldERldGFpbCA9IChpZDogbnVtYmVyKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVZvdWNoZXI+PihgJHt1cmx9LyR7aWR9YCk7XHJcblxyXG5cdHVwZGF0ZSA9IChkYXRhKSA9PiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhLCB7fSk7XHJcblxyXG5cdGV4cG9ydCA9IChpZCkgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPihgL2FwaS9FeHBvcnRWb3VjaGVyLyR7aWR9YCk7XHJcblxyXG5cdHNlbmRNYWlsID0gKGlkKSA9PiBpbnN0YW5jZS5wb3N0KGBhcGkvU2VuZE1haWxWb3VjaGVyLyR7aWR9YCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB2b3VjaGVyQXBpID0gbmV3IFZvdWNoZXIoKTtcclxuIiwiaW1wb3J0IHtpbnN0YW5jZX0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1JlZnVuZHMnO1xyXG5cclxuY2xhc3MgUmVmdW5kcyB7XHJcblx0Z2V0QWxsID0gKFBhcmFtczogYW55KSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElSZWZ1bmRzW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zOiBQYXJhbXMsXHJcblx0XHR9KTtcclxuXHJcblx0Z2V0RGV0YWlsID0gKGlkOiBudW1iZXIpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVJlZnVuZHM+PihgJHt1cmx9LyR7aWR9YCk7XHJcblxyXG5cdGFkZCA9IChkYXRhKSA9PiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblxyXG5cdHVwZGF0ZSA9IChkYXRhKSA9PiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhLCB7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZWZ1bmRzQXBpID0gbmV3IFJlZnVuZHMoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvUGFyZW50cyc7XHJcblxyXG5jbGFzcyBQYXJlbnRzQXBpIHtcclxuXHRnZXRBbGwgPSAoUGFyYW1zOiBhbnkpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVBhcmVudHNbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXM6IFBhcmFtc1xyXG5cdFx0fSk7XHJcblxyXG5cdGdldERldGFpbCA9IChpZDogbnVtYmVyKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVBhcmVudHM+PihgJHt1cmx9LyR7aWR9YCk7XHJcblxyXG5cdGFkZCA9IChkYXRhOiBJUGFyZW50cykgPT4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG5cclxuXHR1cGRhdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhLCB7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwYXJlbnRzQXBpID0gbmV3IFBhcmVudHNBcGkoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jbGFzcyBTZXJ2aWNlQ3VzdG9tZXJFeGFtUmVzdWx0IHtcclxuICBnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTZXJ2aWNlQ3VzdG9tZXJFeGFtUmVzdWx0W10+PihcIi9hcGkvU3R1ZGVudEV4YW1PZlNlcnZpY2VSZXN1bHRcIiwge1xyXG4gICAgICBwYXJhbXM6IHRvZG9BcGksXHJcbiAgICB9KTtcclxuXHJcbiAgZ2V0V2l0aElEID0gKElEOiBudW1iZXIpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdDxJU2VydmljZUN1c3RvbWVyRXhhbVJlc3VsdFtdPj4oYC9hcGkvU3R1ZGVudEV4YW1PZlNlcnZpY2VSZXN1bHQvJHtJRH1gKTtcclxuXHJcbiAgYWRkID0gKGRhdGE6IElTZXJ2aWNlQ3VzdG9tZXJFeGFtUmVzdWx0KSA9PiBpbnN0YW5jZS5wb3N0KFwiL2FwaS9TdHVkZW50RXhhbU9mU2VydmljZVJlc3VsdC9cIiwgZGF0YSwge30pO1xyXG5cclxuICB1cGRhdGUgPSAoZGF0YSkgPT4gaW5zdGFuY2UucHV0KFwiL2FwaS9TdHVkZW50RXhhbU9mU2VydmljZVJlc3VsdC9cIiwgZGF0YSwge30pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2VydmljZUN1c3RvbWVyRXhhbVJlc3VsdEFwaSA9IG5ldyBTZXJ2aWNlQ3VzdG9tZXJFeGFtUmVzdWx0KCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY2xhc3MgU2VydmljZUN1c3RvbWVyRXhhbSB7XHJcbiAgZ2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU2VydmljZUN1c3RvbWVyRXhhbVtdPj4oXCIvYXBpL1N0dWRlbnRFeGFtT2ZTZXJ2aWNlXCIsIHtcclxuICAgICAgcGFyYW1zOiB0b2RvQXBpLFxyXG4gICAgfSk7XHJcblxyXG4gIGdldFdpdGhJRCA9IChJRDogbnVtYmVyKSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHQ8SVNlcnZpY2VDdXN0b21lckV4YW1bXT4+KGAvYXBpL1N0dWRlbnRFeGFtT2ZTZXJ2aWNlLyR7SUR9YCk7XHJcblxyXG4gIGFkZCA9IChkYXRhOiBJU2VydmljZUN1c3RvbWVyRXhhbSkgPT4gaW5zdGFuY2UucG9zdChcIi9hcGkvU3R1ZGVudEV4YW1PZlNlcnZpY2UvXCIsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlcnZpY2VDdXN0b21lckV4YW1BcGkgPSBuZXcgU2VydmljZUN1c3RvbWVyRXhhbSgpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNvbnN0IHVybCA9IFwiL2FwaS9FeGFtQXBwb2ludG1lbnRSZXN1bHQvXCI7XHJcbmNsYXNzIFRlc3RDdXN0b21lclBvaW50QXBpIHtcclxuICBnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElUZXN0Q3VzdG9tZXJQb2ludFtdPj4odXJsLCB7XHJcbiAgICAgIHBhcmFtczogdG9kb0FwaSxcclxuICAgIH0pO1xyXG5cclxuICBnZXRXaXRoSUQgPSAoSUQ6IG51bWJlcikgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVGVzdEN1c3RvbWVyUG9pbnQ+Pih1cmwgKyBJRCk7XHJcblxyXG4gIGFkZCA9IChkYXRhOiBJU3R1ZGVudCkgPT4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEsIHt9KTtcclxuXHJcbiAgdXBkYXRlID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSwge30pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdGVzdEN1c3RvbWVyUG9pbnRBcGkgPSBuZXcgVGVzdEN1c3RvbWVyUG9pbnRBcGkoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvRXhhbUFwcG9pbnRtZW50Lyc7XHJcbmNsYXNzIFRlc3RDdXN0b21lckFwaSB7XHJcblx0Z2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVGVzdEN1c3RvbWVyW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zOiB0b2RvQXBpXHJcblx0XHR9KTtcclxuXHJcblx0Z2V0V2l0aElEID0gKElEOiBudW1iZXIpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0PElUZXN0Q3VzdG9tZXI+Pih1cmwgKyBJRCk7XHJcblxyXG5cdGFkZCA9IChkYXRhOiBJU3R1ZGVudCkgPT4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEsIHt9KTtcclxuXHJcblx0dXBkYXRlID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSwge30pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdGVzdEN1c3RvbWVyQXBpID0gbmV3IFRlc3RDdXN0b21lckFwaSgpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNvbnN0IHVybCA9IFwiL2FwaS9Db3Vyc2VPZlN0dWRlbnRcIjtcclxuXHJcbmNsYXNzIENvdXJzZVN0dWRlbnRBcGkge1xyXG4gIGdldEFsbCA9IChQYXJhbXM6IGFueSkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJQ291cnNlT2ZTdHVkZW50W10+Pih1cmwsIHtcclxuICAgICAgcGFyYW1zOiBQYXJhbXMsXHJcbiAgICB9KTtcclxuXHJcbiAgZ2V0RGV0YWlsID0gKGlkOiBudW1iZXIpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUNvdXJzZU9mU3R1ZGVudD4+KGAke3VybH0vJHtpZH1gKTtcclxuXHJcbiAgdXBkYXRlID0gKGRhdGE6IElDb3Vyc2VPZlN0dWRlbnQpID0+IGluc3RhbmNlLnB1dCh1cmwsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvdXJzZVN0dWRlbnRBcGkgPSBuZXcgQ291cnNlU3R1ZGVudEFwaSgpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9FeGFtQXBwb2ludG1lbnRSZXN1bHQvJztcclxuZXhwb3J0IGNvbnN0IGV4YW1BcHBvaW50bWVudFJlc3VsdEFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElFeGFtQXBwb2ludG1lbnRSZXN1bHRbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXNcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8gTOG6pXkgdGhlbyBpZFxyXG5cdGdldEJ5SWQoaWQ6IG51bWJlcikge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJRXhhbUFwcG9pbnRtZW50UmVzdWx0Pj4oYCR7dXJsfSR7aWR9YCk7XHJcblx0fSxcclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBYw7NhIGRhdGFcclxuXHRkZWxldGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblxyXG5cdGdldFJlc3VsdEV4YW0ocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PGFueT4oJy9hcGkvRXhhbUFwcG9pbnRtZW50UmVzdWx0RGV0YWlsJywge1xyXG5cdFx0XHRwYXJhbXNcclxuXHRcdH0pO1xyXG5cdH0sXHJcblxyXG5cdHVwZGF0ZVBvaW50KGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQoJy9hcGkvRXhhbUFwcG9pbnRtZW50RXhlcmNpc2VTdHVkZW50JywgZGF0YSk7XHJcblx0fSxcclxuXHJcblx0Ly8gS2nhu4NtIHRyYSDEkeG7gSBo4bq5biB0ZXN0IG7DoHkgxJHDoyDEkcaw4bujYyBsw6BtIGhheSBjaMawYVxyXG5cdGNoZWNrSXNUZXN0ZWQoaWQpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUV4YW1BcHBvaW50bWVudFJlc3VsdFtdPj4oYC9hcGkvRXhhbUFwcG9pbnRtZW50UmVzdWx0Y2hlY2tSZXN1bHQvJHtpZH1gKTtcclxuXHR9XHJcbn07XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY2xhc3MgRXhhbUNvbWluZ1Nvb24ge1xyXG4gIGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUV4YW1Db21pbmdTb29uW10+PihcIi9hcGkvRXhhbUNvbWluZ1Nvb25cIiwge1xyXG4gICAgICBwYXJhbXM6IHRvZG9BcGksXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGV4YW1Db21pbmdTb29uQXBpID0gbmV3IEV4YW1Db21pbmdTb29uKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL0N1c3RvbWVyQ29uc3VsdGF0aW9uLyc7XHJcbmNsYXNzIFN0dWRlbnRBZHZpc2VBcGkge1xyXG5cdGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVN0dWRlbnRBZHZpc2VbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXM6IHRvZG9BcGlcclxuXHRcdH0pO1xyXG5cclxuXHRnZXRXaXRoSUQgPSAoSUQ6IG51bWJlcikgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdHVkZW50QWR2aXNlPj4odXJsICsgSUQpO1xyXG5cclxuXHRhZGQgPSAoZGF0YTogSVN0dWRlbnQpID0+IGluc3RhbmNlLnBvc3QodXJsLCBkYXRhLCB7fSk7XHJcblxyXG5cdHVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dCh1cmwsIGRhdGEsIHt9KTtcclxuXHJcblx0YWRkTm90ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnBvc3QoJy9hcGkvTm90ZU9mQ3VzdG9tZXInLCBkYXRhLCB7fSk7XHJcblxyXG5cdHVwZGF0ZU5vdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQoJy9hcGkvTm90ZU9mQ3VzdG9tZXInLCBkYXRhLCB7fSk7XHJcblxyXG5cdHNlbmRFbWFpbCA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnBvc3QoJy9hcGkvU2VuZE1haWxDdXN0b21lcicsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN0dWRlbnRBZHZpc2VBcGkgPSBuZXcgU3R1ZGVudEFkdmlzZUFwaSgpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNvbnN0IHVybCA9IFwiL2FwaS9Db3Vyc2VPZlN0dWRlbnRDaGFuZ2UvXCI7XHJcblxyXG5jbGFzcyBTdHVkZW50Q2hhbmdlQ291cnNlQXBpIHtcclxuICBnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdHVkZW50Q2hhbmdlQ291cnNlW10+Pih1cmwsIHtcclxuICAgICAgcGFyYW1zOiB0b2RvQXBpLFxyXG4gICAgfSk7XHJcblxyXG4gIGdldFdpdGhJRCA9IChJRDogbnVtYmVyKSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdHVkZW50Q2hhbmdlQ291cnNlPj4odXJsICsgSUQpO1xyXG5cclxuICBhZGQgPSAoZGF0YTogSVN0dWRlbnQpID0+IGluc3RhbmNlLnBvc3QodXJsLCBkYXRhLCB7fSk7XHJcblxyXG4gIHVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dCh1cmwsIGRhdGEsIHt9KTtcclxuXHJcbiAgY2hhbmdlQ291cnNlID0gKGRhdGE6IElDb3Vyc2VPZlN0dWRlbnRDaGFuZ2UpID0+IGluc3RhbmNlLnBvc3QodXJsLCBkYXRhLCB7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzdHVkZW50Q2hhbmdlQ291cnNlQXBpID0gbmV3IFN0dWRlbnRDaGFuZ2VDb3Vyc2VBcGkoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jb25zdCB1cmwgPSBcIi9hcGkvQ291bnNlbG9yc0NoYW5nZS9cIjtcclxuXHJcbmNsYXNzIFN0dWRlbnRDaGFuZ2VBcGkge1xyXG4gIGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVN0dWRlbnRDaGFuZ2VbXT4+KHVybCwge1xyXG4gICAgICBwYXJhbXM6IHRvZG9BcGksXHJcbiAgICB9KTtcclxuXHJcbiAgZ2V0V2l0aElEID0gKElEOiBudW1iZXIpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVN0dWRlbnRDaGFuZ2U+Pih1cmwgKyBJRCk7XHJcblxyXG4gIGFkZCA9IChkYXRhOiBJU3R1ZGVudCkgPT4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEsIHt9KTtcclxuXHJcbiAgdXBkYXRlID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSwge30pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3R1ZGVudENoYW5nZUFwaSA9IG5ldyBTdHVkZW50Q2hhbmdlQXBpKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJztcclxuXHJcbmNsYXNzIFN0dWRlbnRBcGkge1xyXG5cdGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVN0dWRlbnRbXT4+KCcvYXBpL1N0dWRlbnQvJywge1xyXG5cdFx0XHRwYXJhbXM6IHRvZG9BcGlcclxuXHRcdH0pO1xyXG5cclxuXHRnZXRXaXRoSUQgPSAoSUQ6IG51bWJlcikgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdHVkZW50Pj4oYC9hcGkvU3R1ZGVudC8ke0lEfWApO1xyXG5cclxuXHRhZGQgPSAoZGF0YTogSVN0dWRlbnQpID0+IGluc3RhbmNlLnBvc3QoJy9hcGkvU3R1ZGVudCcsIGRhdGEsIHt9KTtcclxuXHJcblx0Y3JlYXRlQWNjb3VudCA9IChkYXRhOiBJU3R1ZGVudCkgPT4gaW5zdGFuY2UucG9zdCgnL2FwaS9DcmVhdGVBY2NvdW50JywgZGF0YSwge30pO1xyXG5cclxuXHR1cGRhdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQoJy9hcGkvU3R1ZGVudC8nLCBkYXRhLCB7fSk7XHJcblxyXG5cdC8vIHVwbG9hZEltYWdlID0gKGZpbGU6IGFueSkgPT5cclxuXHJcblx0Ly8gICBpbnN0YW5jZS5wb3N0KFwiL2FwaS9Vc2VySW5mb3JtYXRpb24vdXBsb2FkSW1hZ2VcIiwgZmlsZSwge30pO1xyXG5cclxuXHR1cGxvYWRJbWFnZSA9IChmaWxlOiBhbnkpID0+IHtcclxuXHRcdGxldCBmRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cdFx0ZkRhdGEuYXBwZW5kKCdGaWxlJywgZmlsZSk7XHJcblx0XHRjb25zb2xlLmxvZygnRkRBVEE6ICcsIGZEYXRhKTtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KCcvYXBpL1VzZXJJbmZvcm1hdGlvbi91cGxvYWRJbWFnZScsIGZEYXRhLCB7fSk7XHJcblx0fTtcclxuXHJcblx0Z2V0Q291cnNlT2ZTdHVkZW50RGV0YWlsID0gKElEOiBudW1iZXIpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU3R1ZGVudD4+KGAvYXBpL0dldENvdXJzZUFuZFRlYWNoZXJPZlN0dWRlbnQvJHtJRH1gKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN0dWRlbnRBcGkgPSBuZXcgU3R1ZGVudEFwaSgpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNsYXNzIFdhcm5pbmcge1xyXG4gIGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVdhcm5pbmdbXT4+KFwiL2FwaS9XYXJuaW5nXCIsIHtcclxuICAgICAgcGFyYW1zOiB0b2RvQXBpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgd2FybmluZ0FwaSA9IG5ldyBXYXJuaW5nKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIi4uL2luc3RhbmNlXCI7XHJcblxyXG5jb25zdCB1cmwgPSBcIi9hcGkvU2V0UGFja2FnZVJlc3VsdFwiO1xyXG5leHBvcnQgY29uc3QgZG9pbmdUZXN0QXBpID0ge1xyXG4gIC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG4gIC8vIGdldEFsbChwYXJhbXMpIHtcclxuICAvLyBcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SURvaW5nVGVzdFtdPj4odXJsLCB7XHJcbiAgLy8gXHRcdHBhcmFtcyxcclxuICAvLyBcdH0pO1xyXG4gIC8vIH0sXHJcbiAgLy8gTOG6pXkgdGhlbyBJRFxyXG4gIGdldEJ5SUQoSUQpIHtcclxuICAgIHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SURvaW5nVGVzdD4+KGAke3VybH0vJHtJRH1gKTtcclxuICB9LFxyXG4gIC8vIFRow6ptIG3hu5tpIGRhdGFcclxuICBhZGQoZGF0YSkge1xyXG4gICAgcmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuICB9LFxyXG4gIC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcbiAgLy8gdXBkYXRlKGRhdGEpIHtcclxuICAvLyBcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuICAvLyB9LFxyXG4gIC8vIFjDs2EgZGF0YVxyXG4gIC8vIGRlbGV0ZShkYXRhKSB7XHJcbiAgLy8gXHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcbiAgLy8gfSxcclxufTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICcuLi9pbnN0YW5jZSdcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL0V4YW1Ub3BpY0RldGFpbC8nXHJcbmV4cG9ydCBjb25zdCBleGFtRGV0YWlsQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUV4YW1EZXRhaWxbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXNcclxuXHRcdH0pXHJcblx0fSxcclxuXHQvLyBM4bqleSB0aGVvIElEXHJcblx0Z2V0QnlJRChJRCkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJRXhhbURldGFpbD4+KGAke3VybH0ke0lEfWApXHJcblx0fSxcclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkKGRhdGE6IGFueSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKVxyXG5cdH0sXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUoZGF0YTogYW55KSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSlcclxuXHR9LFxyXG5cdC8vIFjDs2EgZGF0YVxyXG5cdGRlbGV0ZShkYXRhOiBhbnkpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKVxyXG5cdH0sXHJcblx0Ly8gVOG6oW8gY8OidSBo4buPaSB04buxIMSR4buZbmdcclxuXHRjcmVhdGVBdXRvKGRhdGE6IGFueSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QoJ2FwaS9BdXRvQ3JlYXRlRXhhbXRvcGljRGV0YWlsJywgZGF0YSlcclxuXHR9LFxyXG5cdC8vIMSQ4buVaSB24buLIHRyw61cclxuXHRjaGFuZ2VQb3NpdGlvbihkYXRhOiBhbnkpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQoJ2FwaS9VcGRhdGVJbmRleCcsIGRhdGEpXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIi4uL2luc3RhbmNlXCI7XHJcblxyXG5jb25zdCB1cmwgPSBcIi9hcGkvRXhhbVRvcGljL1wiO1xyXG5leHBvcnQgY29uc3QgZXhhbVRvcGljQXBpID0ge1xyXG4gIC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG4gIGdldEFsbChwYXJhbXMpIHtcclxuICAgIHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUV4YW1Ub3BpY1tdPj4odXJsLCB7XHJcbiAgICAgIHBhcmFtcyxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgLy8gTOG6pXkgdGhlbyBJRFxyXG4gIGdldEJ5SUQoSUQpIHtcclxuICAgIHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUV4YW1Ub3BpYz4+KGAke3VybH0ke0lEfWApO1xyXG4gIH0sXHJcbiAgLy8gVGjDqm0gbeG7m2kgZGF0YVxyXG4gIGFkZChkYXRhKSB7XHJcbiAgICByZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG4gIH0sXHJcbiAgLy8gQ+G6rXAgbmjhuq10IGRhdGFcclxuICB1cGRhdGUoZGF0YSkge1xyXG4gICAgcmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG4gIH0sXHJcbiAgLy8gWMOzYSBkYXRhXHJcbiAgZGVsZXRlKGRhdGEpIHtcclxuICAgIHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBVcGxvYWQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNvbnN0IHVybCA9IFwiL2FwaS9FeGVyY2lzZVwiO1xyXG5jbGFzcyBFeGVyY2lzZUFwaSB7XHJcbiAgLy8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcbiAgZ2V0QWxsID0gKHBhcmFtcykgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJRXhlcmNpc2VbXT4+KHVybCwgeyBwYXJhbXMgfSk7XHJcblxyXG4gIC8vIFRow6ptIG3hu5tpIGRhdGFcclxuICBhZGQoZGF0YTogSUV4ZXJjaXNlKSB7XHJcbiAgICByZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG4gIH1cclxuICAvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG4gIHVwZGF0ZShkYXRhOiBJRXhlcmNpc2UpIHtcclxuICAgIHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuICB9XHJcbiAgLy8gWMOzYSBkYXRhXHJcbiAgZGVsZXRlKGRhdGE6IElFeGVyY2lzZSkge1xyXG4gICAgcmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLy8gSW1wb3J0IEV4Y2VsXHJcbiAgaW1wb3J0RXhjZWwoZmlsZTogRmlsZSkge1xyXG4gICAgbGV0IGZEYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmRGF0YS5hcHBlbmQoXCJGaWxlXCIsIGZpbGUpO1xyXG4gICAgcmV0dXJuIGluc3RhbmNlLnBvc3QoXCIvYXBpL0ltcG9ydEV4ZXJjaXNlXCIsIGZEYXRhLCB7fSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZXhlcmNpc2VBcGkgPSBuZXcgRXhlcmNpc2VBcGkoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnXHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9FeGVyY2lzZUdyb3VwJ1xyXG5jbGFzcyBFeGVyY2lzZUdyb3VwQXBpIHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwgPSAocGFyYW1zKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUV4ZXJjaXNlR3JvdXBbXT4+KHVybCwgeyBwYXJhbXMgfSlcclxuXHJcblx0Ly8gTOG6pXkgMSBkYXRhXHJcblx0Z2V0V2l0aElEID0gKElEKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUV4ZXJjaXNlR3JvdXA+PihgJHt1cmx9LyR7SUR9YClcclxuXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFkZChkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpXHJcblx0fVxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKVxyXG5cdH1cclxuXHQvLyBYw7NhIGRhdGFcclxuXHRkZWxldGUoZGF0YTogSUV4ZXJjaXNlR3JvdXApIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKVxyXG5cdH1cclxuXHJcblx0Ly8gVXBsb2FkIGZpbGVcclxuXHRVcGxvYWRBdWRpbyhkYXRhKSB7XHJcblx0XHRsZXQgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG5cdFx0Zm9ybWRhdGEuYXBwZW5kKCdmaWxlJywgZGF0YSlcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KCcvYXBpL3VwbG9hZGZpbGVFeGVyY2lzZScsIGZvcm1kYXRhKVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGV4ZXJjaXNlR3JvdXBBcGkgPSBuZXcgRXhlcmNpc2VHcm91cEFwaSgpXHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5pbXBvcnQgeyBJRmVlZEJhY2sgfSBmcm9tICcuLi90eXBlcy9mZWVkLWJhY2svZmVlZC1iYWNrJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL0ZlZWRiYWNrJztcclxuZXhwb3J0IGNvbnN0IEZlZWRiYWNrQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUZlZWRCYWNrW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cclxuXHRhZGQoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cclxuXHR1cGRhdGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblxyXG5cdGdldEJ5SUQoSUQpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUZlZWRCYWNrPj4oYCR7dXJsfS8ke0lEfWApO1xyXG5cdH1cclxufTtcclxuIiwiaW1wb3J0IHsgb25lU2lnbmFsQVBJIH0gZnJvbSAnLi9vbmVTaWduYWwvb25lU2lnbmFsJztcclxuZXhwb3J0IHsgYXJlYUFwaSB9IGZyb20gJy4vb3B0aW9ucy9hcmVhJztcclxuZXhwb3J0IHsgYnJhbmNoQXBpIH0gZnJvbSAnLi9vcHRpb25zL2JyYW5jaCc7XHJcbmV4cG9ydCB7IGNvbnRyYWN0QXBpIH0gZnJvbSAnLi9vcHRpb25zL2NvbnRyYWN0JztcclxuZXhwb3J0IHsgY3VycmljdWx1bUFwaSB9IGZyb20gJy4vb3B0aW9ucy9jdXJyaWN1bHVtJztcclxuZXhwb3J0IHsgY3VycmljdWx1bURldGFpbEFwaSB9IGZyb20gJy4vb3B0aW9ucy9jdXJyaWN1bHVtLWRldGFpbCc7XHJcbmV4cG9ydCB7IGRheU9mZkFwaSB9IGZyb20gJy4vb3B0aW9ucy9kYXktb2ZmJztcclxuZXhwb3J0IHsgZGlzY291bnRBcGkgfSBmcm9tICcuL29wdGlvbnMvZGlzY291bnQnO1xyXG5leHBvcnQgeyBkaXN0cmljdEFwaSB9IGZyb20gJy4vb3B0aW9ucy9kaXN0cmljdCc7XHJcbmV4cG9ydCB7IGdyYWRlQXBpIH0gZnJvbSAnLi9vcHRpb25zL2dyYWRlJztcclxuZXhwb3J0IHsgam9iQXBpIH0gZnJvbSAnLi9vcHRpb25zL2pvYic7XHJcbmV4cG9ydCB7IHByb2dyYW1BcGkgfSBmcm9tICcuL29wdGlvbnMvcHJvZ3JhbSc7XHJcbmV4cG9ydCB7IHB1cm9zZUFwaSB9IGZyb20gJy4vb3B0aW9ucy9wdXJvc2UnO1xyXG5leHBvcnQgeyByb29tQXBpIH0gZnJvbSAnLi9vcHRpb25zL3Jvb20nO1xyXG5leHBvcnQgeyBzZXJ2aWNlQXBpIH0gZnJvbSAnLi9vcHRpb25zL3NlcnZpY2UnO1xyXG5leHBvcnQgeyBzb3VyY2VJbmZvbWF0aW9uQXBpIH0gZnJvbSAnLi9vcHRpb25zL3NvdXJjZS1pbmZvbWF0aW9uJztcclxuZXhwb3J0IHsgc3RhZmZTYWxhcnlBcGkgfSBmcm9tICcuL29wdGlvbnMvc3RhZmYtc2FsYXJ5JztcclxuZXhwb3J0IHsgc3R1ZHlUaW1lQXBpIH0gZnJvbSAnLi9vcHRpb25zL3N0dWR5LXRpbWUnO1xyXG5leHBvcnQgeyBzdWJqZWN0QXBpIH0gZnJvbSAnLi9vcHRpb25zL3N1YmplY3QnO1xyXG5leHBvcnQgeyBzdHVkZW50QXBpIH0gZnJvbSAnLi9jdXN0b21lci9zdHVkZW50L3N0dWRlbnQtbGlzdCc7XHJcbmV4cG9ydCB7IHdhcmRBcGkgfSBmcm9tICcuL29wdGlvbnMvd2FyZCc7XHJcbmV4cG9ydCB7IHN1cHBsaWVyQXBpIH0gZnJvbSAnLi9vcHRpb25zL3N1cHBsaWVyJztcclxuZXhwb3J0IHsgdXNlckluZm9ybWF0aW9uQXBpIH0gZnJvbSAnLi9vcHRpb25zL3VzZXJpbmZvcm1hdGlvbic7XHJcbmV4cG9ydCB7IHRlYWNoZXJBcGkgfSBmcm9tICcuL3RlYWNoZXIvdGVhY2hlcic7XHJcbmV4cG9ydCB7IGxlc3NvbkFwaSB9IGZyb20gJy4vY291cnNlL2xlc3Nvbic7XHJcbmV4cG9ydCB7IHN0dWR5RGF5QXBpIH0gZnJvbSAnLi9jb3Vyc2Uvc3R1ZHktZGF5JztcclxuZXhwb3J0IHsgY2hlY2tTdHVkeVRpbWVBcGkgfSBmcm9tICcuL2NvdXJzZS9jaGVjay1zdHVkeS10aW1lJztcclxuZXhwb3J0IHsgcGFyZW50c0FwaSB9IGZyb20gJy4vY3VzdG9tZXIvcGFyZW50cy9wYXJlbnRzJztcclxuZXhwb3J0IHsgc3RhZmZBcGkgfSBmcm9tICcuL3N0YWZmLW1hbmFnZS9zdGFmZic7XHJcbmV4cG9ydCB7IG5vdGlmaWNhdGlvbkFwaSB9IGZyb20gJy4vb3B0aW9ucy9ub3RpZmljYXRpb24nO1xyXG5leHBvcnQgeyBydWxlc0FwaSB9IGZyb20gJy4vb3B0aW9ucy9ydWxlcyc7XHJcblxyXG5leHBvcnQgeyBleGFtVG9waWNBcGkgfSBmcm9tICcuL2V4YW0vZXhhbS10b3BpYyc7XHJcbmV4cG9ydCB7IGNvbnN1bHRhdGlvblN0YXR1c0FwaSB9IGZyb20gJy4vb3B0aW9ucy9jb25zdWx0YXRpb24tc3RhdHVzJztcclxuZXhwb3J0IHsgdGVzdEN1c3RvbWVyUG9pbnRBcGkgfSBmcm9tICcuL2N1c3RvbWVyL3NlcnZpY2UvdGVzdC1jdXN0b21lci1wb2ludCc7XHJcblxyXG5leHBvcnQgeyBjb25maWdab29tQXBpIH0gZnJvbSAnLi96b29tL2NvbmZpZy16b29tJztcclxuZXhwb3J0IHsgc2NoZWR1bGVab29tQXBpIH0gZnJvbSAnLi96b29tL3NjaGVkdWxlLXpvb20nO1xyXG5leHBvcnQgeyB6b29tUm9vbUFwaSB9IGZyb20gJy4vem9vbS96b29tLXJvb20nO1xyXG5cclxuZXhwb3J0IHsgcHJpY2VGaXhFeGFtQXBpIH0gZnJvbSAnLi9vcHRpb25zL3ByaWNlLWZpeC1leGFtJztcclxuZXhwb3J0IHsgcGF5Rml4RXhhbUFwaSB9IGZyb20gJy4vcGFja2FnZS9wYXktZml4LWV4YW0nO1xyXG5leHBvcnQgeyBwYXlGaXhMaXN0QXBpIH0gZnJvbSAnLi9wYWNrYWdlL3BheS1maXgtbGlzdCc7XHJcbmV4cG9ydCB7IHBhY2thZ2VSZXN1bHRBcGkgfSBmcm9tICd+L2FwaUJhc2UvcGFja2FnZS9wYWNrYWdlLXJlc3VsdCc7XHJcbmV4cG9ydCB7IGV4ZXJjaXNlR3JvdXBBcGkgfSBmcm9tICcuL2V4ZXJjaXNlL2V4ZXJjaXNlR3JvdXAnO1xyXG5leHBvcnQgeyBjaGVja1Jvb21BcGkgfSBmcm9tICcuL2NvdXJzZS9jaGVjay1yb29tJztcclxuZXhwb3J0IHsgY2hlY2tUZWFjaGVyQXBpIH0gZnJvbSAnLi9jb3Vyc2UvY2hlY2stdGVhY2hlcic7XHJcbmV4cG9ydCB7IHN0dWRlbnRBZHZpc2VBcGkgfSBmcm9tICcuL2N1c3RvbWVyL3N0dWRlbnQvc3R1ZGVudC1hZHZpc2UnO1xyXG5leHBvcnQgeyB0ZXN0Q3VzdG9tZXJBcGkgfSBmcm9tICcuL2N1c3RvbWVyL3NlcnZpY2UvdGVzdC1jdXN0b21lcic7XHJcbmV4cG9ydCB7IHVzZXJBcGkgfSBmcm9tICcuL3VzZXIvdXNlcic7XHJcbmV4cG9ydCB7IGV4YW1Db21pbmdTb29uQXBpIH0gZnJvbSAnLi9jdXN0b21lci9zdHVkZW50L2V4YW0tY29taW5nLXNvb24nO1xyXG5leHBvcnQgeyB3YXJuaW5nQXBpIH0gZnJvbSAnLi9jdXN0b21lci9zdHVkZW50L3dhcm5pbmcnO1xyXG5leHBvcnQgeyBjb3Vyc2VBcGkgfSBmcm9tICcuL2NvdXJzZS9jb3Vyc2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvdXJzZS1kZXRhaWwvY291cnNlLWRldGFpbCc7XHJcbmV4cG9ydCB7IHN0dWRlbnRMaXN0SW5Db3Vyc2VBcGkgfSBmcm9tICcuL2NvdXJzZS1kZXRhaWwvc3R1ZGVudC1saXN0JztcclxuZXhwb3J0IHsgc3R1ZGVudENoYW5nZUFwaSB9IGZyb20gJy4vY3VzdG9tZXIvc3R1ZGVudC9zdHVkZW50LWNoYW5nZSc7XHJcbmV4cG9ydCB7IHN0dWRlbnRDaGFuZ2VDb3Vyc2VBcGkgfSBmcm9tICcuL2N1c3RvbWVyL3N0dWRlbnQvc3R1ZGVudC1jaGFuZ2UtY291cnNlJztcclxuZXhwb3J0IHsgc2VydmljZUN1c3RvbWVyRXhhbUFwaSB9IGZyb20gJy4vY3VzdG9tZXIvc2VydmljZS9zZXJ2aWNlLWN1c3RvbWVyLWV4YW0nO1xyXG5leHBvcnQgeyBzZXJ2aWNlQ3VzdG9tZXJFeGFtUmVzdWx0QXBpIH0gZnJvbSAnLi9jdXN0b21lci9zZXJ2aWNlL3NlcnZpY2UtY3VzdG9tZXItZXhhbS1yZXN1bHQnO1xyXG5leHBvcnQgeyByZWZ1bmRzQXBpIH0gZnJvbSAnLi9jdXN0b21lci9maW5hbmNlL2ZpbmFuY2UtY2FzaGllci1yZWZ1bmQnO1xyXG5leHBvcnQgeyBjb250cmFjdEN1c3RvbWVyTGlzdEFwaSB9IGZyb20gJy4vY3VzdG9tZXIvY29udHJhY3QvY29udHJhY3QtY3VzdG9tZXItbGlzdCc7XHJcbmV4cG9ydCB7IHZvdWNoZXJBcGkgfSBmcm9tICcuL2N1c3RvbWVyL2ZpbmFuY2UvZmluYW5jZS1jYXNoaWVyLXBheW1lbnQnO1xyXG5leHBvcnQgeyBpbnZvaWNlQXBpIH0gZnJvbSAnLi9jdXN0b21lci9maW5hbmNlL2ZpbmFuY2UtY2FzaGllci1pbnZvaWNlJztcclxuZXhwb3J0IHsgZXhhbUFwcG9pbnRtZW50UmVzdWx0QXBpIH0gZnJvbSAnLi9jdXN0b21lci9zdHVkZW50L2V4YW0tYXBwb2ludG1lbnQtcmVzdWx0JztcclxuZXhwb3J0IHsgY2hlY2tCcmFuY2hTY2hlZHVsZVN0dWR5IH0gZnJvbSAnLi9zY2hlZHVsZS9jaGVjay1icmFuY2gtc2NoZWR1bGUnO1xyXG5leHBvcnQgeyBjaGVja1RlYWNoZXJTY2hlZHVsZVN0dWR5IH0gZnJvbSAnLi9zY2hlZHVsZS9jaGVjay10ZWFjaGVyLXNjaGVkdWxlJztcclxuZXhwb3J0IHsgcHJvZ3JhbURldGFpbFBvaW50Q29sdW1uQXBpIH0gZnJvbSAnLi9vcHRpb25zL3Byb2dyYW0tZGV0YWlsLXBvaW50LWNvbHVtbic7XHJcbmV4cG9ydCB7IGNvdXJzZVN0dWRlbnRBcGkgfSBmcm9tICcuL2N1c3RvbWVyL3N0dWRlbnQvY291cnNlLXN0dWRlbnQnO1xyXG5leHBvcnQgeyByb2xsVXBBcGkgfSBmcm9tICcuL2NvdXJzZS9yb2xsdXAnO1xyXG5leHBvcnQgeyBjb3Vyc2VPZlN0dWRlbnRQcmljZUFwaSB9IGZyb20gJy4vY291cnNlL2NvdXJzZS1vZi1zdHVkZW50LXByaWNlJztcclxuZXhwb3J0IHsgY29uZmlnQXBpIH0gZnJvbSAnLi9vcHRpb25zL2NvbmZpZyc7XHJcbmV4cG9ydCB7IG5ld3NGZWVkQXBpIH0gZnJvbSAnLi9uZXdzZmVlZC9uZXdzZmVlZCc7XHJcbmV4cG9ydCB7IG5ld3NGZWVkTGlrZUFwaSB9IGZyb20gJy4vbmV3c2ZlZWQvbmV3c2ZlZWQtbGlrZSc7XHJcbmV4cG9ydCB7IG5ld3NGZWVkQ29tbWVudEFwaSB9IGZyb20gJy4vbmV3c2ZlZWQvbmV3c2ZlZWQtY29tbWVudCc7XHJcbmV4cG9ydCB7IG5ld3NGZWVkQ29tbWVudFJlcGx5QXBpIH0gZnJvbSAnLi9uZXdzZmVlZC9uZXdzZmVlZC1jb21tZW50cmVwbHknO1xyXG5leHBvcnQgeyB1c2VyQnJhbmNoQXBpIH0gZnJvbSAnLi9uZXdzZmVlZC91c2VyLWJyYW5jaCc7XHJcbmV4cG9ydCB7IGdyb3VwTmV3c0ZlZWRBcGkgfSBmcm9tICcuL25ld3NmZWVkL2dyb3VwLW5ld3NmZWVkJztcclxuZXhwb3J0IHsgdXNlckdyb3VwTmV3c0ZlZWRBcGkgfSBmcm9tICcuL25ld3NmZWVkL3VzZXItZ3JvdXAtbmV3c2ZlZWQnO1xyXG5leHBvcnQgeyBleGVyY2lzZUFwaSB9IGZyb20gJy4vZXhlcmNpc2UvZXhlcmNpc2UnO1xyXG5leHBvcnQgeyBwYWNrYWdlQXBpIH0gZnJvbSAnLi9wYWNrYWdlL3BhY2thZ2UnO1xyXG5leHBvcnQgeyBzdGFmZk9mVGFza0dyb3VwQXBpLCB0YXNrQXBpLCB0YXNrR3JvdXBBcGkgfSBmcm9tICcuL3N0YWZmLW1hbmFnZS90YXNrJztcclxuZXhwb3J0IHsgZG9jdW1lbnRTY2hlZHVsZUFwaSB9IGZyb20gJy4vY291cnNlLWRldGFpbC9kb2N1bWVudC1zY2hlZHVsZSc7XHJcbmV4cG9ydCB7IHBhY2thZ2VTdHVkZW50QXBpIH0gZnJvbSAnLi9wYWNrYWdlL3BhY2thZ2Utc3R1ZGVudCc7XHJcbmV4cG9ydCB7IGJhY2tncm91bmROZXdzRmVlZEFwaSB9IGZyb20gJy4vbmV3c2ZlZWQvYmFja2dyb3VuZC1uZXdzZmVlZCc7XHJcbmV4cG9ydCB7IHN0dWR5RGF5T25saW5lQXBpIH0gZnJvbSAnLi9jb3Vyc2Utb25saW5lL3N0dWR5LWRheSc7XHJcbmV4cG9ydCB7IGxlc3Nvbk9ubGluZUFwaSB9IGZyb20gJy4vY291cnNlLW9ubGluZS9sZXNzb24nO1xyXG5leHBvcnQgeyBjb3Vyc2VPbmxpbmVEZXRhaWxBdmFpbGFibGVEYXlBcGkgfSBmcm9tICcuL2NvdXJzZS1vbmxpbmUtZGV0YWlsL2F2YWlsYWJsZS1kYXknO1xyXG5leHBvcnQgeyBwYWNrYWdlRXhhbWluZXJBcGkgfSBmcm9tICcuL3BhY2thZ2UvcGFja2FnZS1leGFtaW5lcic7XHJcbmV4cG9ydCB7IGV4YW1EZXRhaWxBcGkgfSBmcm9tICcuL2V4YW0tZGV0YWlsL2V4YW0tZGV0YWlsJztcclxuZXhwb3J0IHsgc2FsZUNhbXBhaWduQXBpIH0gZnJvbSAnLi9zYWxlL3NhbGUtY2FtcGFpZ24nO1xyXG5leHBvcnQgeyBzYWxlQ2FtcGFpZ25EZXRhaWxBcGkgfSBmcm9tICcuL3NhbGUvc2FsZS1jYW1wYWlnbi1kZXRhaWwnO1xyXG5leHBvcnQgeyBzYWxlU2FsYXJ5QXBpIH0gZnJvbSAnLi9zYWxlL3NhbGUtc2FsYXJ5JztcclxuZXhwb3J0IHsgc2FsZXJUb3RhbFJldmVudWVBcGkgfSBmcm9tICcuL3NhbGUvc2FsZXItdG90YWwtcmV2ZW51ZSc7XHJcbmV4cG9ydCB7IHNhbGVyUmV2ZW51ZUFwaSB9IGZyb20gJy4vc2FsZS9zYWxlci1yZXZlbnVlJztcclxuZXhwb3J0IHsgVmlkZW9Db3Vyc2VMaXN0QXBpLCBEb25lUGF5QXBpIH0gZnJvbSAnLi92aWRlby1jb3Vyc2UtbGlzdCc7XHJcbmV4cG9ydCB7IFZpZGVvQ291cnNlT2ZTdHVkZW50LCBWaWRlb0NvdXJzZUludGVyYWN0aW9uIH0gZnJvbSAnLi92aWRlby1sZWFybmluZyc7XHJcbmV4cG9ydCB7IHJlc2V0UGFzc3dvcmRBcGkgfSBmcm9tICcuL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkJztcclxuZXhwb3J0IHsgZG9pbmdUZXN0QXBpIH0gZnJvbSAnLi9kb2luZy10ZXN0L2RvaW5nLXRlc3QnO1xyXG5leHBvcnQgeyBGZWVkYmFja0FwaSB9IGZyb20gJy4vZmVlZC1iYWNrJztcclxuZXhwb3J0IHsgb25lU2lnbmFsQVBJIH0gZnJvbSAnLi9vbmVTaWduYWwvb25lU2lnbmFsJztcclxuZXhwb3J0IHsgc3R1ZHlSb2xlQXBpIH0gZnJvbSAnLi9zdHVkeS1yb2xlL3N0dWR5LXJvbGUnO1xyXG5leHBvcnQgeyBjb21pbmdDb3Vyc2VBcGkgfSBmcm9tICcuL3pvb20vY29taW5nLWNvdXJzZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2VsZi1jb3Vyc2UnO1xyXG4iLCJpbXBvcnQgYXhpb3MsIHsgQXhpb3NSZXF1ZXN0Q29uZmlnLCBBeGlvc1Jlc3BvbnNlIH0gZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IGdldFNlc3Npb24sIHNpZ25JbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXHJcbmltcG9ydCBfIGZyb20gJ34vYXBwQ29uZmlnJ1xyXG5cclxuY29uc3QgU0hPV19MT0cgPSB0cnVlXHJcbmNvbnN0IE5PREVfU1RBVFVTOiBhbnkgPSBwcm9jZXNzLmVudi5OT0RFX0VOVlxyXG5cclxuY29uc3QgaXNTaG93TG9nID0gKGU6IGFueSkgPT4ge1xyXG5cdGlmIChlID09PSAnL2FwaS9JZGlvbXMvZ2V0UmFuZG9tcycgfHwgZSA9PT0gJy9hcGkvUnVsZXMnKSB7XHJcblx0XHRyZXR1cm4gZmFsc2VcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIE5PREVfU1RBVFVTID09ICdwcm9kdWN0aW9uJyAmJiAhIVNIT1dfTE9HID8gdHJ1ZSA6IHRydWVcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFVybChjb25maWc6IGFueSkge1xyXG5cdHJldHVybiAhIWNvbmZpZy5iYXNlVVJMID8gY29uZmlnLnVybC5yZXBsYWNlKGNvbmZpZy5iYXNlVVJMLCAnJykuc3BsaXQoJz8nKVswXSA6IGNvbmZpZy51cmxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhIZWFkZXJfWCA9IGFzeW5jICgpID0+IHtcclxuXHRjb25zdCBzZXNzaW9uOiBhbnkgPSBhd2FpdCBnZXRTZXNzaW9uKClcclxuXHRyZXR1cm4gISFzZXNzaW9uICYmICEhc2Vzc2lvbi5hY2Nlc3NUb2tlbiA/IHsgdG9rZW46IHNlc3Npb24uYWNjZXNzVG9rZW4gfSA6IHt9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGF1dGhIZWFkZXJfQmVhcmVyID0gYXN5bmMgKCkgPT4ge1xyXG5cdGNvbnN0IHNlc3Npb246IGFueSA9IGF3YWl0IGdldFNlc3Npb24oKVxyXG5cdHJldHVybiAhIXNlc3Npb24gJiYgISFzZXNzaW9uLmFjY2Vzc1Rva2VuID8geyBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBzZXNzaW9uLmFjY2Vzc1Rva2VuIH0gOiB7fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG5cdGJhc2VVUkw6IF8uaG9zdFVSTCxcclxuXHRoZWFkZXJzOiB7XHJcblx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG5cdH1cclxufSlcclxuXHJcbmluc3RhbmNlLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShcclxuXHRhc3luYyAoY29uZmlnOiBBeGlvc1JlcXVlc3RDb25maWcpID0+IHtcclxuXHRcdGNvbnN0IHVybDogYW55ID0gZ2V0VXJsKGNvbmZpZylcclxuXHRcdGlmICghdXJsLnRvU3RyaW5nKCkuaW5jbHVkZXMoJy9hdXRoLycpKSB7XHJcblx0XHRcdGNvbnN0IGF1dGhIZWFkZXI6IGFueSA9IGF3YWl0IGF1dGhIZWFkZXJfWCgpXHJcblx0XHRcdGNvbmZpZy5oZWFkZXJzID0ge1xyXG5cdFx0XHRcdC4uLmNvbmZpZy5oZWFkZXJzLFxyXG5cdFx0XHRcdC4uLmF1dGhIZWFkZXJcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aXNTaG93TG9nKHVybCkgJiYgY29uc29sZS5sb2coYCVjICR7Y29uZmlnPy5tZXRob2QudG9VcHBlckNhc2UoKX0gLSAke3VybH06YCwgJ2NvbG9yOiAjMDA4NmIzOyBmb250LXdlaWdodDogYm9sZCcsIGNvbmZpZylcclxuXHRcdHJldHVybiBjb25maWdcclxuXHR9LFxyXG5cdChlcnJvcjogYW55KSA9PiB7XHJcblx0XHRpc1Nob3dMb2coJycpICYmIGNvbnNvbGUubG9nKGAlYyAke2Vycm9yPy5yZXNwb25zZT8uc3RhdHVzfSAgOmAsICdjb2xvcjogcmVkOyBmb250LXdlaWdodDogYm9sZCcsIGVycm9yPy5yZXNwb25zZT8uZGF0YSlcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcilcclxuXHR9XHJcbilcclxuXHJcbmNvbnN0IGNoZWNrUmVzcG9uc2UgPSAoZXJyb3I6IGFueSkgPT4ge1xyXG5cdHN3aXRjaCAoZXJyb3I/LnJlc3BvbnNlPy5zdGF0dXMpIHtcclxuXHRcdGNhc2UgNDAxOlxyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRzaWduSW4oKVxyXG5cdFx0XHR9LCAxMDAwKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSA0MDM6XHJcblx0XHRcdGNvbnNvbGUubG9nKGAlRVJST1IgNDAzOmAgKyBgJWMgRE9OJ1QgSEFWRSBQRVJNSVNTT05gLCAnY29sb3I6IHJlZDsgZm9udC13ZWlnaHQ6IGJvbGQnLCAnY29sb3I6IHllbGxvdzsnKVxyXG5cdFx0XHRhbGVydCgnQuG6oW4ga2jDtG5nIGPDsyBxdXnhu4FuIHRo4buxYyBoaeG7h24nKVxyXG5cdFx0XHRicmVha1xyXG5cdFx0Y2FzZSA0MDA6XHJcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yPy5yZXNwb25zZT8ubWVzc2FnZSlcclxuXHRcdFx0YnJlYWtcclxuXHRcdGNhc2UgNTAwOlxyXG5cdFx0XHRjb25zb2xlLmxvZyhgJSBFUlJPUiA1MDA6YCArIGAlYyBCQUNLLUVORGAsICdjb2xvcjogcmVkOyBmb250LXdlaWdodDogYm9sZCcsICdjb2xvcjogeWVsbG93OycpXHJcblx0XHRcdGJyZWFrXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRjb25zb2xlLmxvZyhgJWMgJHtlcnJvcj8ucmVzcG9uc2V9ICA6YCwgJ2NvbG9yOiByZWQ7IGZvbnQtd2VpZ2h0OiBib2xkJywgZXJyb3I/LnJlc3BvbnNlKVxyXG5cdH1cclxufVxyXG5cclxuaW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcclxuXHQocmVzcG9uc2U6IEF4aW9zUmVzcG9uc2UpID0+IHtcclxuXHRcdGxldCB1cmw6IGFueSA9IGdldFVybChyZXNwb25zZT8uY29uZmlnKVxyXG5cdFx0aXNTaG93TG9nKHVybCkgJiYgY29uc29sZS5sb2coYCAlYyAke3Jlc3BvbnNlPy5zdGF0dXN9IC0gJHtnZXRVcmwocmVzcG9uc2U/LmNvbmZpZyl9OmAsICdjb2xvcjogIzAwODAwMDsgZm9udC13ZWlnaHQ6IGJvbGQnLCByZXNwb25zZSlcclxuXHRcdHJldHVybiByZXNwb25zZVxyXG5cdH0sXHJcblx0ZnVuY3Rpb24gKGVycm9yOiBhbnkpIHtcclxuXHRcdGlmICghIWVycm9yPy5yZXNwb25zZSkge1xyXG5cdFx0XHRjaGVja1Jlc3BvbnNlKGVycm9yKVxyXG5cdFx0XHRpc1Nob3dMb2coJycpICYmIGNvbnNvbGUubG9nKGAlYyAke2Vycm9yPy5yZXNwb25zZT8uc3RhdHVzfSAgOmAsICdjb2xvcjogcmVkOyBmb250LXdlaWdodDogYm9sZCcsIGVycm9yPy5yZXNwb25zZT8uZGF0YSlcclxuXHRcdFx0cmV0dXJuICEhZXJyb3I/LnJlc3BvbnNlPy5kYXRhID8gUHJvbWlzZS5yZWplY3QoZXJyb3IucmVzcG9uc2UuZGF0YSkgOiBQcm9taXNlLnJlamVjdChlcnJvcilcclxuXHRcdH0gZWxzZSBpZiAoZXJyb3IucmVxdWVzdCkge1xyXG5cdFx0XHRpc1Nob3dMb2coJycpICYmIGNvbnNvbGUubG9nKGAlYyAke0pTT04uc3RyaW5naWZ5KGVycm9yKX0gIDpgLCAnY29sb3I6IHJlZDsgZm9udC13ZWlnaHQ6IGJvbGQnLCBlcnJvcj8ucmVzcG9uc2U/LmRhdGEpXHJcblx0XHRcdHJldHVybiAhIWVycm9yPy5yZXNwb25zZT8uZGF0YSA/IFByb21pc2UucmVqZWN0KGVycm9yLnJlc3BvbnNlLmRhdGEpIDogUHJvbWlzZS5yZWplY3QoZXJyb3IpXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpc1Nob3dMb2coJycpICYmIGNvbnNvbGUubG9nKGAlYyAke0pTT04uc3RyaW5naWZ5KGVycm9yKX0gIDpgLCAnY29sb3I6IHJlZDsgZm9udC13ZWlnaHQ6IGJvbGQnLCAnSMOsbmggbmjGsCBsw6Agc2V0dGluZyBzYWknKVxyXG5cdFx0XHRyZXR1cm4gISFlcnJvcj8ucmVzcG9uc2U/LmRhdGEgPyBQcm9taXNlLnJlamVjdChlcnJvci5yZXNwb25zZS5kYXRhKSA6IFByb21pc2UucmVqZWN0KGVycm9yKVxyXG5cdFx0fVxyXG5cdH1cclxuKVxyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNsYXNzIEJhY2tncm91bmROZXdzRmVlZCB7XHJcbiAgICAvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuICAgIGdldEFsbCA9ICgpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUJhY2tncm91bmROZXdzRmVlZFtdPj4oXCIvYXBpL0JhY2tncm91bmRcIik7XHJcblxyXG4gICAgLy8gTOG6pXkgdGhlbyBpZFxyXG4gICAgZ2V0QnlJRCA9IChpZDpudW1iZXIpID0+IFxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREZXRhaWw+KGAvYXBpL0JhY2tncm91bmQvJHtpZH1gKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGJhY2tncm91bmROZXdzRmVlZEFwaSA9IG5ldyBCYWNrZ3JvdW5kTmV3c0ZlZWQoKTsiLCJpbXBvcnQge2luc3RhbmNlfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnO1xyXG5cclxuY2xhc3MgR3JvdXBOZXdzRmVlZCB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJR3JvdXBOZXdzRmVlZFtdPj4oJy9hcGkvR3JvdXBOZXdzRmVlZCcsIHtcclxuXHRcdFx0cGFyYW1zOiB0b2RvQXBpLFxyXG5cdFx0fSk7XHJcblxyXG5cdC8vIEzhuqV5IHRoZW8gaWRcclxuXHRnZXRCeUlEID0gKGlkOiBudW1iZXIpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUdyb3VwTmV3c0ZlZWQ+PihgL2FwaS9Hcm91cE5ld3NGZWVkLyR7aWR9YCk7XHJcblxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQgPSAoZGF0YSkgPT4gaW5zdGFuY2UucG9zdCgnL2FwaS9Hcm91cE5ld3NGZWVkJywgZGF0YSk7XHJcblxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucHV0KCcvYXBpL0dyb3VwTmV3c0ZlZWQnLCBkYXRhLCB7fSk7XHJcblxyXG5cdC8vIFVwbG9hZCBiYWNrZ3JvdW5kXHJcblx0dXBsb2FkSW1hZ2UgPSAoZmlsZTogYW55KSA9PiB7XHJcblx0XHRsZXQgZkRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHRcdGZEYXRhLmFwcGVuZCgnRmlsZScsIGZpbGUpO1xyXG5cdFx0Y29uc29sZS5sb2coJ0ZEQVRBOiAnLCBmRGF0YSk7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCgnL2FwaS91cGxvYWRmaWxlR3JvdXAnLCBmRGF0YSwge30pO1xyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBncm91cE5ld3NGZWVkQXBpID0gbmV3IEdyb3VwTmV3c0ZlZWQoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jbGFzcyBOZXdzRmVlZENvbW1lbnQge1xyXG4gICAgLy8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcbiAgICBnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElOZXdzRmVlZENvbW1lbnRbXT4+KFwiL2FwaS9OZXdzRmVlZENvbW1lbnRcIiwge1xyXG4gICAgICAgIHBhcmFtczogdG9kb0FwaSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFRow6ptIG3hu5tpIGRhdGFcclxuICAgIGFkZCA9ICggZGF0YTogYW55ICkgPT4gaW5zdGFuY2UucG9zdChcIi9hcGkvTmV3c0ZlZWRDb21tZW50XCIsIGRhdGEpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG5ld3NGZWVkQ29tbWVudEFwaSA9IG5ldyBOZXdzRmVlZENvbW1lbnQoKTsiLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNsYXNzIE5ld3NGZWVkQ29tbWVudFJlcGx5IHtcclxuICAgIC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG4gICAgZ2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJTmV3c0ZlZWRDb21tZW50UmVwbHlbXT4+KFwiL2FwaS9Db21tZW50UmVwbHlcIiwge1xyXG4gICAgICAgIHBhcmFtczogdG9kb0FwaSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFRow6ptIG3hu5tpIGRhdGFcclxuICAgIGFkZCA9ICggZGF0YTogSU5ld3NGZWVkQ29tbWVudFJlcGx5ICkgPT4gaW5zdGFuY2UucG9zdChcIi9hcGkvQ29tbWVudFJlcGx5XCIsIGRhdGEpO1xyXG5cclxuICAgIC8vIFVwZGF0ZSBkYXRhXHJcbiAgICB1cGRhdGUgPSAoIGRhdGE6YW55ICkgPT4gaW5zdGFuY2UucHV0KFwiL2FwaS9Db21tZW50UmVwbHlcIiwgZGF0YSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbmV3c0ZlZWRDb21tZW50UmVwbHlBcGkgPSBuZXcgTmV3c0ZlZWRDb21tZW50UmVwbHkoKTsiLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNsYXNzIE5ld3NGZWVkTGlrZSB7XHJcbiAgICAvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuICAgIGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SU5ld3NGZWVkTGlrZVtdPj4oXCIvYXBpL05ld3NGZWVkTGlrZVwiLCB7XHJcbiAgICAgICAgcGFyYW1zOiB0b2RvQXBpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVGjDqm0gbeG7m2kgZGF0YVxyXG4gICAgYWRkID0gKCBkYXRhOiBhbnkgKSA9PiBpbnN0YW5jZS5wb3N0KFwiL2FwaS9OZXdzRmVlZExpa2VcIiwgZGF0YSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbmV3c0ZlZWRMaWtlQXBpID0gbmV3IE5ld3NGZWVkTGlrZSgpOyIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJztcclxuXHJcbmNsYXNzIE5ld3NGZWVkIHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElOZXdzRmVlZFtdPj4oJy9hcGkvTmV3c0ZlZWQnLCB7XHJcblx0XHRcdHBhcmFtczogdG9kb0FwaVxyXG5cdFx0fSk7XHJcblxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQgPSAoZGF0YSkgPT4gaW5zdGFuY2UucG9zdCgnL2FwaS9OZXdzRmVlZCcsIGRhdGEpO1xyXG5cclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dCgnL2FwaS9OZXdzRmVlZCcsIGRhdGEsIHt9KTtcclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdGRlbGV0ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dCgnL2FwaS9OZXdzRmVlZCcsIGRhdGEsIHt9KTtcclxuXHJcblx0Ly8gVXBsb2FkIGZpbGVcclxuXHR1cGxvYWRGaWxlID0gKGZpbGU6IGFueSkgPT4ge1xyXG5cdFx0bGV0IGZEYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblx0XHRmRGF0YS5hcHBlbmQoJ0ZpbGUnLCBmaWxlKTtcclxuXHRcdGNvbnNvbGUubG9nKCdGREFUQTogJywgZkRhdGEpO1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QoJy9hcGkvdXBsb2FkZmlsZScsIGZEYXRhLCB7fSk7XHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG5ld3NGZWVkQXBpID0gbmV3IE5ld3NGZWVkKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY2xhc3MgVXNlckJyYW5jaCB7XHJcbiAgICAvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuICAgIGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVVzZXJCcmFuY2hbXT4+KFwiL2FwaS9Vc2VyQnJhbmNoXCIsIHtcclxuICAgICAgICBwYXJhbXM6IHRvZG9BcGksXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBUaMOqbSBt4bubaSBkYXRhXHJcbiAgICBhZGQgPSAoIGRhdGE6IElVc2VyQnJhbmNoICkgPT4gaW5zdGFuY2UucG9zdChcIi9hcGkvVXNlckJyYW5jaFwiLCBkYXRhKTtcclxuXHJcbiAgICAvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG4gICAgdXBkYXRlID0gKCBkYXRhOiBhbnkgKSA9PiBpbnN0YW5jZS5wdXQoXCIvYXBpL1VzZXJCcmFuY2hcIiwgZGF0YSwge30pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlckJyYW5jaEFwaSA9IG5ldyBVc2VyQnJhbmNoKCk7IiwiaW1wb3J0IHtpbnN0YW5jZX0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJztcclxuXHJcbmNsYXNzIFVzZXJHcm91cE5ld3NGZWVkIHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElVc2VyR3JvdXBOZXdzRmVlZFtdPj4oXHJcblx0XHRcdCcvYXBpL0dyb3VwVXNlck5ld3NGZWVkJyxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhcmFtczogdG9kb0FwaSxcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHJcblx0Ly8gTOG6pXkgdGhlbyBpZFxyXG5cdGdldEJ5SUQgPSAoaWQ6IG51bWJlcikgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVXNlckdyb3VwTmV3c0ZlZWRbXT4+KFxyXG5cdFx0XHRgL2FwaS9Hcm91cFVzZXJOZXdzRmVlZC8ke2lkfWBcclxuXHRcdCk7XHJcblxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQgPSAoZGF0YSkgPT4gaW5zdGFuY2UucG9zdCgnL2FwaS9Hcm91cFVzZXJOZXdzRmVlZCcsIGRhdGEpO1xyXG5cclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dCgnL2FwaS9Hcm91cFVzZXJOZXdzRmVlZCcsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJHcm91cE5ld3NGZWVkQXBpID0gbmV3IFVzZXJHcm91cE5ld3NGZWVkKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvVXBkYXRlX09uZVNpZ25hbF9EZXZpY2VJRCc7XHJcbmV4cG9ydCBjb25zdCBvbmVTaWduYWxBUEkgPSB7XHJcblx0dXBkYXRlKElEKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCArIGA/b25lU2lnbmFsX2RldmljZUlkPSR7SUR9YCk7XHJcblx0fVxyXG59O1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNvbnN0IHVybCA9IFwiL2FwaS9BcmVhXCI7XHJcbmNsYXNzIEFyZWFBcGkge1xyXG4gIC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG4gIGdldEFsbCA9IChwYXJhbXMpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJQXJlYVtdPj4odXJsLCB7IHBhcmFtcyB9KTtcclxuXHJcbiAgLy8gVGjDqm0gbeG7m2kgZGF0YVxyXG4gIGFkZChkYXRhOiBJQXJlYSkge1xyXG4gICAgcmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuICB9XHJcbiAgLy8gQ+G6rXAgbmjhuq10IGRhdGFcclxuICB1cGRhdGUoZGF0YTogSUFyZWEpIHtcclxuICAgIHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuICB9XHJcbiAgLy8gWMOzYSBkYXRhXHJcbiAgZGVsZXRlKGRhdGE6IElBcmVhKSB7XHJcbiAgICByZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYXJlYUFwaSA9IG5ldyBBcmVhQXBpKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJ1xyXG5cclxuY2xhc3MgQnJhbmNoQXBpIHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGEgY8OzIHBow6JuIHRyYW5nXHJcblx0Z2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJQnJhbmNoW10+PignL2FwaS9CcmFuY2gnLCB7XHJcblx0XHRcdC8vIHBhcmFtczogZ2V0UGFyYW1zKHRvZG9BcGkpLFxyXG5cdFx0XHRwYXJhbXM6IHRvZG9BcGlcclxuXHRcdH0pXHJcblxyXG5cdC8vIEzhuqV5IGNoaSB0aeG6v3QgZGF0YSB0aGVvIElEXHJcblx0Z2V0QnlJRCA9IChpZDogbnVtYmVyKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUJyYW5jaD4+KGAvYXBpL0JyYW5jaC8ke2lkfWApXHJcblxyXG5cdC8vIEPhuq1wIG5o4bqtdCB0cuG6oW5nIHRow6FpIOG6qW4vaGnhu4duXHJcblx0Y2hhbmdlU3RhdHVzID0gKGlkOiBudW1iZXIpID0+IGluc3RhbmNlLnB1dDxJQXBpUmVzdWx0RGF0YTxJQnJhbmNoW10+PihgL2FwaS9CcmFuY2gvSGlkZS8ke2lkfWApXHJcblxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQgPSAoZGF0YTogSUJyYW5jaCkgPT4gaW5zdGFuY2UucG9zdCgnL2FwaS9CcmFuY2gnLCBkYXRhKVxyXG5cclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dCgnL2FwaS9CcmFuY2gnLCBkYXRhLCB7fSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGJyYW5jaEFwaSA9IG5ldyBCcmFuY2hBcGkoKVxyXG4iLCJpbXBvcnQge2luc3RhbmNlfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnO1xyXG5cclxuY2xhc3MgQ29uZmlnIHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGEgY8OzIHBow6JuIHRyYW5nXHJcblx0Z2V0QWxsID0gKHBhcmFtcykgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJQ29uZmlnW10+PignL2FwaS9Db25maWcnLCB7cGFyYW1zfSk7XHJcblxyXG5cdC8vIEzhuqV5IGNoaSB0aeG6v3QgZGF0YSB0aGVvIElEXHJcblx0Z2V0QnlJRCA9IChpZDogbnVtYmVyKSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElDb25maWc+PihgL2FwaS9Db25maWcvJHtpZH1gKTtcclxuXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFkZCA9IChkYXRhKSA9PiBpbnN0YW5jZS5wb3N0KCcvYXBpL0NvbmZpZycsIGRhdGEpO1xyXG5cclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZSA9IChkYXRhKSA9PiBpbnN0YW5jZS5wdXQoJy9hcGkvQ29uZmlnJywgZGF0YSk7XHJcblx0Ly8gWMOzYSBkYXRhXHJcblx0ZGVsZXRlID0gKGRhdGEpID0+IGluc3RhbmNlLnB1dCgnL2FwaS9Db25maWcnLCBkYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZ0FwaSA9IG5ldyBDb25maWcoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jb25zdCB1cmwgPSBcIi9hcGkvQ3VzdG9tZXJDb25zdWx0YXRpb25TdGF0dXNcIjtcclxuXHJcbmNsYXNzIENvbnN1bHRhdGlvblN0YXR1c0FwaSB7XHJcbiAgZ2V0UGFnZWQgPSAoUGFyYW1zOiBhbnkpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUNvbnN1bHRhdGlvblN0YXR1c1tdPj4odXJsLCB7XHJcbiAgICAgIHBhcmFtczogUGFyYW1zLFxyXG4gICAgfSk7XHJcblxyXG4gIGdldEFsbCA9IChQYXJhbXM6IGFueSkgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJQ29uc3VsdGF0aW9uU3RhdHVzW10+Pih1cmwsIHtcclxuICAgICAgcGFyYW1zOiBQYXJhbXMsXHJcbiAgICB9KTtcclxuXHJcbiAgZ2V0RGV0YWlsID0gKGlkOiBudW1iZXIpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUNvbnN1bHRhdGlvblN0YXR1cz4+KGAke3VybH0vJHtpZH1gKTtcclxuXHJcbiAgYWRkID0gKGRhdGE6IElDb25zdWx0YXRpb25TdGF0dXMpID0+IGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuXHJcbiAgdXBkYXRlID0gKGRhdGE6IElDb25zdWx0YXRpb25TdGF0dXMpID0+IGluc3RhbmNlLnB1dCh1cmwsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnN1bHRhdGlvblN0YXR1c0FwaSA9IG5ldyBDb25zdWx0YXRpb25TdGF0dXNBcGkoKTtcclxuIiwiaW1wb3J0IHtpbnN0YW5jZX0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvQ29udHJhY3QvJztcclxuZXhwb3J0IGNvbnN0IGNvbnRyYWN0QXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUNvbnRyYWN0W10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zLFxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkKGRhdGE6IElDb250cmFjdCkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlKGRhdGE6IElDb250cmFjdCkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gWMOzYSBkYXRhXHJcblx0ZGVsZXRlKGRhdGE6IElDb250cmFjdCkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcbn07XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJ1xyXG5cclxuY2xhc3MgQ3VycmljdWx1bURldGFpbEFwaSB7XHJcblx0Z2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJQ3VycmljdWx1bURldGFpbFtdPj4oJy9hcGkvQ3VycmljdWx1bURldGFpbC8nLCB7XHJcblx0XHRcdHBhcmFtczogdG9kb0FwaVxyXG5cdFx0fSlcclxuXHJcblx0Z2V0V2l0aElEID0gKElEOiBudW1iZXIpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0PElDdXJyaWN1bHVtRGV0YWlsW10+PihgL2FwaS9DdXJyaWN1bHVtRGV0YWlsLyR7SUR9YClcclxuXHJcblx0YWRkID0gKGRhdGE6IElDdXJyaWN1bHVtRGV0YWlsKSA9PiBpbnN0YW5jZS5wb3N0KCcvYXBpL0N1cnJpY3VsdW1EZXRhaWwnLCBkYXRhLCB7fSlcclxuXHJcblx0aW5zZXJ0ID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucG9zdCgnL2FwaS9DdXJyaWN1bHVtRGV0YWlsL2luc2VydCcsIGRhdGEsIHt9KVxyXG5cclxuXHR1cGRhdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQoJy9hcGkvQ3VycmljdWx1bURldGFpbC8nLCBkYXRhLCB7fSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGN1cnJpY3VsdW1EZXRhaWxBcGkgPSBuZXcgQ3VycmljdWx1bURldGFpbEFwaSgpXHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJztcclxuXHJcbmNsYXNzIEN1cnJpY3VsdW1BcGkge1xyXG5cdGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUN1cnJpY3VsdW1bXT4+KCcvYXBpL0N1cnJpY3VsdW0vJywge1xyXG5cdFx0XHRwYXJhbXM6IHRvZG9BcGlcclxuXHRcdH0pO1xyXG5cclxuXHRnZXRXaXRoSUQgPSAoSUQ6IG51bWJlcikgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHQ8SUN1cnJpY3VsdW1bXT4+KGAvYXBpL0N1cnJpY3VsdW0vJHtJRH1gKTtcclxuXHJcblx0YWRkID0gKGRhdGE6IElDdXJyaWN1bHVtKSA9PiBpbnN0YW5jZS5wb3N0KCcvYXBpL0N1cnJpY3VsdW0nLCBkYXRhLCB7fSk7XHJcblxyXG5cdGFkZFN1YmplY3QgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wb3N0KCcvYXBpL1VwZGF0ZUFsbFN1YmplY3RPZkN1cnJpY3VsdW0nLCBkYXRhLCB7fSk7XHJcblxyXG5cdHVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dCgnL2FwaS9DdXJyaWN1bHVtLycsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGN1cnJpY3VsdW1BcGkgPSBuZXcgQ3VycmljdWx1bUFwaSgpO1xyXG4iLCJpbXBvcnQge2luc3RhbmNlfSBmcm9tICcuLi9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9EYXlPZmYvJztcclxuZXhwb3J0IGNvbnN0IGRheU9mZkFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElEYXlPZmZbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXMsXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQoZGF0YTogSURheU9mZikge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlKGRhdGE6IElEYXlPZmYpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIFjDs2EgZGF0YVxyXG5cdGRlbGV0ZShkYXRhOiBJRGF5T2ZmKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxufTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnXHJcblxyXG5jbGFzcyBEaXNjb3VudEFwaSB7XHJcblx0Z2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJRGlzY291bnRbXT4+KCcvYXBpL0Rpc2NvdW50Jywge1xyXG5cdFx0XHRwYXJhbXM6IHRvZG9BcGlcclxuXHRcdH0pXHJcblxyXG5cdGdldFN1Z2dlc3QgPSAoSUQ6IGFueSkgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElEaXNjb3VudFtdPj4oJy9hcGkvRGlzY291bnQvc3VnZ2VzdF9kaXNjb3VudF9jb2RlLycgKyBJRClcclxuXHJcblx0YWRkID0gKGRhdGE6IElEaXNjb3VudCkgPT4gaW5zdGFuY2UucG9zdCgnL2FwaS9EaXNjb3VudCcsIGRhdGEsIHt9KVxyXG5cclxuXHR1cGRhdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQoJy9hcGkvRGlzY291bnQnLCBkYXRhLCB7fSlcclxuXHJcblx0Z2V0T2ZTdHVkZW50ID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxhbnk+PignL2FwaS9EaXNjb3VudE9mU3R1ZGVudCcsIHtcclxuXHRcdFx0cGFyYW1zOiB0b2RvQXBpXHJcblx0XHR9KVxyXG5cclxuXHRkaXNjb3VudFN0dWRlbnQgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPGFueT4+KCcvYXBpL0Rpc2NvdW50U3R1ZGVudCcsIHtcclxuXHRcdFx0cGFyYW1zOiB0b2RvQXBpXHJcblx0XHR9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGlzY291bnRBcGkgPSBuZXcgRGlzY291bnRBcGkoKVxyXG4iLCJpbXBvcnQge2luc3RhbmNlfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvRGlzdHJpY3QnO1xyXG5jbGFzcyBEaXN0cmljdEFwaSB7XHJcblx0Z2V0QWxsID0gKHBhcmFtcykgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElEaXN0cmljdFtdPj4odXJsLCB7cGFyYW1zfSk7XHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFkZChkYXRhOiBJRGlzdHJpY3QpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblx0fVxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlKGRhdGE6IElEaXN0cmljdCkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH1cclxuXHQvLyBYw7NhIGRhdGFcclxuXHRkZWxldGUoZGF0YTogSURpc3RyaWN0KSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fVxyXG5cclxuXHQvLyAgIHBvc3QgPSAoZGF0YTogSUJyYW5jaCkgPT4gaW5zdGFuY2UucG9zdChcIi9hcGkvQnJhbmNoL0luc2VydEJyYW5jaFwiLCBkYXRhKTtcclxuXHRnZXRCeUFyZWEgPSAoYXJlYUlEOiBudW1iZXIpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SURpc3RyaWN0W10+PignL2FwaS9EaXN0cmljdCcsIHtcclxuXHRcdFx0cGFyYW1zOiB7XHJcblx0XHRcdFx0QXJlYUlEOiBhcmVhSUQsXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHJcblx0Ly8gICBwb3N0ID0gKGRhdGE6IElCcmFuY2gpID0+IGluc3RhbmNlLnBvc3QoXCIvYXBpL0JyYW5jaC9JbnNlcnRCcmFuY2hcIiwgZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkaXN0cmljdEFwaSA9IG5ldyBEaXN0cmljdEFwaSgpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNsYXNzIEdyYWRlQXBpIHtcclxuICBnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElHcmFkZVtdPj4oXCIvYXBpL0dyYWRlL1wiLCB7XHJcbiAgICAgIHBhcmFtczogdG9kb0FwaSxcclxuICAgIH0pO1xyXG5cclxuICBnZXRXaXRoSUQgPSAoSUQ6IG51bWJlcikgPT5cclxuICAgIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0PElHcmFkZVtdPj4oYC9hcGkvR3JhZGUvJHtJRH1gKTtcclxuXHJcbiAgYWRkID0gKGRhdGE6IElHcmFkZSkgPT4gaW5zdGFuY2UucG9zdChcIi9hcGkvR3JhZGVcIiwgZGF0YSwge30pO1xyXG5cclxuICB1cGRhdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQoXCIvYXBpL0dyYWRlL1wiLCBkYXRhLCB7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBncmFkZUFwaSA9IG5ldyBHcmFkZUFwaSgpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNsYXNzIEpvYkFwaSB7XHJcbiAgZ2V0QWxsID0gKGpvYlBhcmFtczogYW55KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElKb2JbXT4+KFwiL2FwaS9Kb2JcIiwge1xyXG4gICAgICBwYXJhbXM6IGpvYlBhcmFtcyxcclxuICAgIH0pO1xyXG5cclxuICBnZXREZXRhaWwgPSAoaWQ6IG51bWJlcikgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHQ8SUpvYj4+KGAvYXBpL0pvYi8ke2lkfWApO1xyXG5cclxuICBhZGQgPSAoZGF0YTogSUpvYikgPT4gaW5zdGFuY2UucG9zdChcIi9hcGkvSm9iXCIsIGRhdGEpO1xyXG5cclxuICB1cGRhdGUgPSAoZGF0YTogSUpvYikgPT4gaW5zdGFuY2UucHV0KFwiL2FwaS9Kb2JcIiwgZGF0YSwge30pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgam9iQXBpID0gbmV3IEpvYkFwaSgpO1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSdcclxuXHJcbmNsYXNzIE5vdGlmaWNhdGlvbiB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJTm90aWZpY2F0aW9uW10+PignL2FwaS9Ob3RpZmljYXRpb25zJywge1xyXG5cdFx0XHRwYXJhbXM6IHRvZG9BcGlcclxuXHRcdH0pXHJcblxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQgPSAoZGF0YSkgPT4gaW5zdGFuY2UucG9zdCgnL2FwaS9Ob3RpZmljYXRpb25zJywgZGF0YSlcclxuXHJcblx0Ly8gTOG6pXkgZGF0YSB3aXRoIHVzZXJcclxuXHRnZXRBbGxXaXRoVXNlciA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE+KCcvYXBpL05vdGlmaWNhdGlvblVzZXInLCB7XHJcblx0XHRcdHBhcmFtczogdG9kb0FwaVxyXG5cdFx0fSlcclxuXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGEgxJHDoyB4ZW1cclxuXHR1cGRhdGVTZWVuID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucHV0KCcvYXBpL05vdGlmaWNhdGlvblVzZXInLCBkYXRhLCB7fSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG5vdGlmaWNhdGlvbkFwaSA9IG5ldyBOb3RpZmljYXRpb24oKVxyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9QcmljZUZpeEV4YW0nO1xyXG5cclxuY2xhc3MgUHJpY2VGaXhFeGFtQXBpIHtcclxuXHRnZXRBbGwgPSAoUGFyYW1zOiBhbnkpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVByaWNlRml4RXhhbVtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtczogUGFyYW1zXHJcblx0XHR9KTtcclxuXHJcblx0Ly8gICBnZXREZXRhaWwgPSAoaWQ6IG51bWJlcikgPT5cclxuXHQvLyAgICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElQYXltZW50TWV0aG9kPj4oYCR7dXJsfS8ke2lkfWApO1xyXG5cclxuXHRhZGQgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblxyXG5cdHVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dCh1cmwsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByaWNlRml4RXhhbUFwaSA9IG5ldyBQcmljZUZpeEV4YW1BcGkoKTtcclxuIiwiaW1wb3J0IHtpbnN0YW5jZX0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvUG9pbnRDb2x1bW4vJztcclxuZXhwb3J0IGNvbnN0IHByb2dyYW1EZXRhaWxQb2ludENvbHVtbkFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElQcm9ncmFtRGV0YWlsUG9pbnRDb2x1bW5bXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXMsXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQoZGF0YTogSVByb2dyYW1EZXRhaWxQb2ludENvbHVtbikge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlKGRhdGE6IElQcm9ncmFtRGV0YWlsUG9pbnRDb2x1bW4pIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0ZGVsZXRlKGRhdGE6IElQcm9ncmFtRGV0YWlsUG9pbnRDb2x1bW4pIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNsYXNzIFByb2dyYW1BcGkge1xyXG4gIGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVByb2dyYW1bXT4+KFwiL2FwaS9Qcm9ncmFtXCIsIHtcclxuICAgICAgcGFyYW1zOiB0b2RvQXBpLFxyXG4gICAgfSk7XHJcblxyXG4gIGdldFdpdGhJRCA9IChJRDogbnVtYmVyKSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHQ8SUdyYWRlW10+PihgL2FwaS9Qcm9ncmFtLyR7SUR9YCk7XHJcblxyXG4gIGFkZCA9IChkYXRhOiBJUHJvZ3JhbSkgPT4gaW5zdGFuY2UucG9zdChcIi9hcGkvUHJvZ3JhbVwiLCBkYXRhLCB7fSk7XHJcblxyXG4gIHVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dChcIi9hcGkvUHJvZ3JhbVwiLCBkYXRhLCB7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9ncmFtQXBpID0gbmV3IFByb2dyYW1BcGkoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jbGFzcyBQdXJvc2Uge1xyXG4gICAgLy8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcbiAgICBnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElQdXJwb3NlW10+PihcIi9hcGkvUHVycG9zZXNcIiwge1xyXG4gICAgICAgIHBhcmFtczogdG9kb0FwaSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFRow6ptIG3hu5tpIGRhdGFcclxuICAgIGFkZCA9ICggZGF0YTogSVB1cnBvc2UgKSA9PiBpbnN0YW5jZS5wb3N0KFwiL2FwaS9QdXJwb3Nlc1wiLCBkYXRhKTtcclxuXHJcbiAgICAvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG4gICAgdXBkYXRlID0gKCBkYXRhOiBhbnkgKSA9PiBpbnN0YW5jZS5wdXQoXCIvYXBpL1B1cnBvc2VzXCIsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHB1cm9zZUFwaSA9IG5ldyBQdXJvc2UoKTsiLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNsYXNzIFJvb21BcGkge1xyXG4gIC8vIEzhuqV5IHThuqV0IGPhuqNcclxuICBnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElSb29tW10+PihcIi9hcGkvUm9vbS9cIiwge1xyXG4gICAgICBwYXJhbXM6IHRvZG9BcGksXHJcbiAgICB9KTtcclxuXHJcbiAgLy8gR2V0IGJ5IElEXHJcbiAgZ2V0QnlJZCA9IChpZDogYW55KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElSb29tW10+PihgL2FwaS9Sb29tLyR7aWR9YCk7XHJcblxyXG4gIC8vIFVwZGF0ZSBkYXRhXHJcbiAgdXBkYXRlID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucHV0KFwiL2FwaS9Sb29tXCIsIGRhdGEpO1xyXG5cclxuICAvLyBBZGQgZGF0YVxyXG4gIGFkZCA9IChkYXRhOiBJUm9vbSkgPT4gaW5zdGFuY2UucG9zdChcIi9hcGkvUm9vbS9cIiwgZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByb29tQXBpID0gbmV3IFJvb21BcGkoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnXHJcblxyXG5jbGFzcyBSdWxlcyB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsID0gKHBhcmFtcykgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJUnVsZXNbXT4+KCcvYXBpL1J1bGVzJywge1xyXG5cdFx0XHRwYXJhbXNcclxuXHRcdH0pXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQoJy9hcGkvUnVsZXMnLCBkYXRhLCB7fSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJ1bGVzQXBpID0gbmV3IFJ1bGVzKClcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jbGFzcyBTZXJ2aWNlQXBpIHtcclxuICAgIC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG4gICAgZ2V0QWxsID0gKHRvZG9BcGk6IG9iamVjdCkgPT5cclxuICAgICAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVNlcnZpY2VbXT4+KFwiL2FwaS9TZXJ2aWNlc1wiLCB7XHJcbiAgICAgICAgICAgIHBhcmFtczogdG9kb0FwaSxcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgLy8gVGjDqm0gbeG7m2kgZGF0YVxyXG4gICAgYWRkID0gKGRhdGE6IElTZXJ2aWNlKSA9PiBpbnN0YW5jZS5wb3N0KFwiL2FwaS9TZXJ2aWNlc1wiLCBkYXRhLCB7fSk7XHJcblxyXG4gICAgLy8gQ+G6rXAgbmjhuq10IGRhdGEgXHJcbiAgICB1cGRhdGUgPSAoIGRhdGE6IGFueSApID0+IGluc3RhbmNlLnB1dChcIi9hcGkvU2VydmljZXNcIiwgZGF0YSwge30pOyBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlcnZpY2VBcGkgPSBuZXcgU2VydmljZUFwaSgpOyIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY2xhc3MgU291cmNlSW5mb21hdGlvbiB7XHJcbiAgICAvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuICAgIGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVNvdXJjZUluZm9tYXRpb25bXT4+KFwiL2FwaS9Tb3VyY2VJbmZvcm1hdGlvblwiLCB7XHJcbiAgICAgICAgcGFyYW1zOiB0b2RvQXBpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVGjDqm0gbeG7m2kgZGF0YVxyXG4gICAgYWRkID0gKCBkYXRhOiBJU291cmNlSW5mb21hdGlvbiApID0+IGluc3RhbmNlLnBvc3QoXCIvYXBpL1NvdXJjZUluZm9ybWF0aW9uXCIsIGRhdGEpO1xyXG5cclxuICAgIC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcbiAgICB1cGRhdGUgPSAoIGRhdGE6IGFueSApID0+IGluc3RhbmNlLnB1dChcIi9hcGkvU291cmNlSW5mb3JtYXRpb25cIiwgZGF0YSwge30pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc291cmNlSW5mb21hdGlvbkFwaSA9IG5ldyBTb3VyY2VJbmZvbWF0aW9uKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnfi9hcGlCYXNlL2luc3RhbmNlJ1xyXG5cclxuY2xhc3MgU3RhZmZTYWxhcnkge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbCA9ICh0b2RvQXBpOiBvYmplY3QpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVN0YWZmU2FsYXJ5W10+PignL2FwaS9TYWxhcnknLCB7XHJcblx0XHRcdHBhcmFtczogdG9kb0FwaVxyXG5cdFx0fSlcclxuXHJcblx0Ly8gTOG6pXkgZMOidCB0aGVvIGlkXHJcblxyXG5cdGdldEJ5SUQgPSAoaWQ6IG51bWJlcikgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdGFmZlNhbGFyeVtdPj4oYC9hcGkvU2FsYXJ5LyR7aWR9YClcclxuXHJcblx0Z2V0SGlzdG9yeSA9IChpZDogbnVtYmVyKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVN0YWZmU2FsYXJ5SGlzdG9yeVtdPj4oYC9hcGkvc2FsYXJ5L2hpc3RvcnkvJHtpZH1gKVxyXG5cclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkID0gKGRhdGE6IElTdGFmZlNhbGFyeSkgPT4gaW5zdGFuY2UucG9zdCgnL2FwaS9TYWxhcnknLCBkYXRhKVxyXG5cclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhIG5vIHR5cGVcclxuXHRhZGREYXRhID0gKGRhdGEpID0+IGluc3RhbmNlLnBvc3QoJy9hcGkvU2FsYXJ5JywgZGF0YSlcclxuXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUgPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQoJy9hcGkvU2FsYXJ5JywgZGF0YSwge30pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzdGFmZlNhbGFyeUFwaSA9IG5ldyBTdGFmZlNhbGFyeSgpXHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY2xhc3MgU3R1ZHlUaW1lQXBpIHtcclxuICBnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdHVkeVRpbWVbXT4+KFwiL2FwaS9TdHVkeVRpbWVcIiwge1xyXG4gICAgICBwYXJhbXM6IHRvZG9BcGksXHJcbiAgICB9KTtcclxuXHJcbiAgZ2V0V2l0aElEID0gKElEOiBudW1iZXIpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdDxJU3R1ZHlUaW1lW10+PihgL2FwaS9TdHVkeVRpbWUvJHtJRH1gKTtcclxuXHJcbiAgYWRkID0gKGRhdGE6IElTdHVkeVRpbWUpID0+IGluc3RhbmNlLnBvc3QoXCIvYXBpL1N0dWR5VGltZVwiLCBkYXRhLCB7fSk7XHJcblxyXG4gIHVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dChcIi9hcGkvU3R1ZHlUaW1lXCIsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN0dWR5VGltZUFwaSA9IG5ldyBTdHVkeVRpbWVBcGkoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tIFwifi9hcGlCYXNlL2luc3RhbmNlXCI7XHJcblxyXG5jbGFzcyBTdWJqZWN0QXBpIHtcclxuICBnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdWJqZWN0W10+PihcIi9hcGkvU3ViamVjdC9cIiwge1xyXG4gICAgICBwYXJhbXM6IHRvZG9BcGksXHJcbiAgICB9KTtcclxuXHJcbiAgZ2V0V2l0aElEID0gKElEOiBudW1iZXIpID0+XHJcbiAgICBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVN1YmplY3Q+PihgL2FwaS9TdWJqZWN0LyR7SUR9YCk7XHJcblxyXG4gIGFkZCA9IChkYXRhOiBJU3ViamVjdCkgPT4gaW5zdGFuY2UucG9zdChcIi9hcGkvU3ViamVjdFwiLCBkYXRhLCB7fSk7XHJcblxyXG4gIHVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dChcIi9hcGkvU3ViamVjdC9cIiwgZGF0YSwge30pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3ViamVjdEFwaSA9IG5ldyBTdWJqZWN0QXBpKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY2xhc3MgU3VwcGxpZXIge1xyXG4gICAgLy8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcbiAgICBnZXRBbGwgPSAodG9kb0FwaTogb2JqZWN0KSA9PlxyXG4gICAgaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdXBwbGllcltdPj4oXCIvYXBpL1N1cHBsaWVyU2VydmljZXNcIiwge1xyXG4gICAgICAgIHBhcmFtczogdG9kb0FwaSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFRow6ptIG3hu5tpIGRhdGFcclxuICAgIGFkZCA9ICggZGF0YTogSVN1cHBsaWVyICkgPT4gaW5zdGFuY2UucG9zdChcIi9hcGkvU3VwcGxpZXJTZXJ2aWNlc1wiLCBkYXRhKTtcclxuXHJcbiAgICAvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG4gICAgdXBkYXRlID0gKCBkYXRhOiBhbnkgKSA9PiBpbnN0YW5jZS5wdXQoXCIvYXBpL1N1cHBsaWVyU2VydmljZXNcIiwgZGF0YSwge30pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3VwcGxpZXJBcGkgPSBuZXcgU3VwcGxpZXIoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnO1xyXG5cclxuY2xhc3MgVXNlckluZm9ybWF0aW9uIHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGxQYXJhbXMgPSAocGFyYW1zKSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElVc2VyaW5mb3JtYXRpb25bXT4+KCcvYXBpL1VzZXJJbmZvcm1hdGlvbicsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KTtcclxuXHRnZXRBbGwgPSAoKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVVzZXJpbmZvcm1hdGlvbltdPj4oJy9hcGkvVXNlckluZm9ybWF0aW9uJyk7XHJcblxyXG5cdC8vIEzhuqV5IGNoaSB0aeG6v3QgZGF0YSB0aGVvIElEXHJcblx0Z2V0QnlJRCA9IChpZDogbnVtYmVyKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVN0YWZmU2FsYXJ5W10+PihgL2FwaS9Vc2VySW5mb3JtYXRpb24vJHtpZH1gKTtcclxuXHJcblx0Ly8gTOG6pXkgdGhlbyByb2xlXHJcblx0Z2V0QWxsUm9sZSA9IChyb2xlKSA9PlxyXG5cdFx0aW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElVc2VyaW5mb3JtYXRpb25bXT4+KCcvYXBpL1VzZXJJbmZvcm1hdGlvbicsIHtcclxuXHRcdFx0cGFyYW1zOiB7XHJcblx0XHRcdFx0Um9sZUlEOiByb2xlXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdGdldFJvbGUgPSAocm9sZVR5cGUpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVJvbGVbXT4+KCcvYXBpL0dldFJvbGUnLCB7XHJcblx0XHRcdHBhcmFtczoge1xyXG5cdFx0XHRcdHN0eWxlOiByb2xlVHlwZSAvLyAwIGzhuqV5IHThuqV0IGPhuqMsIDEgbOG6pXkgbmjDom4gdmnDqm5cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0Z2V0TmFtZSA9IChwYXJhbXMpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVXNlcmluZm9ybWF0aW9uW10+PignL2FwaS9TdGFmZicsIHsgcGFyYW1zOiBwYXJhbXMgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VySW5mb3JtYXRpb25BcGkgPSBuZXcgVXNlckluZm9ybWF0aW9uKCk7XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSBcIn4vYXBpQmFzZS9pbnN0YW5jZVwiO1xyXG5cclxuY29uc3QgdXJsID0gXCIvYXBpL1dhcmRcIjtcclxuY2xhc3MgV2FyZEFwaSB7XHJcbiAgLy8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcbiAgZ2V0QWxsID0gKHBhcmFtcykgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElXYXJkW10+Pih1cmwsIHsgcGFyYW1zIH0pO1xyXG5cclxuICAvLyBUaMOqbSBt4bubaSBkYXRhXHJcbiAgYWRkKGRhdGE6IElXYXJkKSB7XHJcbiAgICByZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG4gIH1cclxuICAvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG4gIHVwZGF0ZShkYXRhOiBJV2FyZCkge1xyXG4gICAgcmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG4gIH1cclxuICAvLyBYw7NhIGRhdGFcclxuICBkZWxldGUoZGF0YTogSVdhcmQpIHtcclxuICAgIHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB3YXJkQXBpID0gbmV3IFdhcmRBcGkoKTtcclxuIiwiaW1wb3J0IHtpbnN0YW5jZX0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvU2V0UGFja2FnZVRlYWNoZXIvJztcclxuZXhwb3J0IGNvbnN0IHBhY2thZ2VFeGFtaW5lckFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElQYWNrYWdlRXhhbWluZXJbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXMsXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIEzhuqV5IHRoZW8gSURcclxuXHRnZXRCeUlEKElEKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElQYWNrYWdlRXhhbWluZXI+PihgJHt1cmx9JHtJRH1gKTtcclxuXHR9LFxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIFjDs2EgZGF0YVxyXG5cdGRlbGV0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxufTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvU2V0UGFja2FnZVJlc3VsdCc7XHJcblxyXG5jbGFzcyBQYWNrYWdlUmVzdWx0QXBpIHtcclxuXHRnZXRBbGwgPSAoUGFyYW1zOiBhbnkpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVNldFBhY2thZ2VSZXN1bHRbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXM6IFBhcmFtc1xyXG5cdFx0fSk7XHJcblxyXG5cdGdldEFsbFN0dWRlbnQgPSAoUGFyYW1zOiBhbnkpID0+XHJcblx0XHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8YW55Pj4oJy9hcGkvU2V0UGFja2FnZVJlc3VsdEdldFN0dWRlbnRFeGlzdFJlc3VsdCcsIHtcclxuXHRcdFx0cGFyYW1zOiBQYXJhbXNcclxuXHRcdH0pO1xyXG5cclxuXHRnZXREZXRhaWwgPSAoaWQ6IG51bWJlcikgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTZXRQYWNrYWdlUmVzdWx0Pj4oYCR7dXJsfS8ke2lkfWApO1xyXG5cclxuXHRhZGQgPSAoZGF0YTogSVNldFBhY2thZ2VSZXN1bHQpID0+IGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuXHJcblx0dXBkYXRlID0gKGRhdGE6IGFueSkgPT4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSwge30pO1xyXG5cclxuXHQvLyB04buxIMSR4buZbmcgY2hpYSDEkeG7gXUgZ2nDoW8gdmnDqm4gY2jhuqVtIGLDoGlcclxuXHJcblx0dXBkYXRlVGVhY2hlciA9ICgpID0+IGluc3RhbmNlLnB1dCgnL2FwaS9VcGRhdGVUZWFjaGVyT2ZTZXRQYWNrYWdlUmVzdWx0Jyk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwYWNrYWdlUmVzdWx0QXBpID0gbmV3IFBhY2thZ2VSZXN1bHRBcGkoKTtcclxuIiwiaW1wb3J0IHtpbnN0YW5jZX0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvU2V0UGFja2FnZVN0dWRlbnQvJztcclxuZXhwb3J0IGNvbnN0IHBhY2thZ2VTdHVkZW50QXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVBhY2thZ2VTdHVkZW50W10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zLFxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyBM4bqleSB0aGVvIElEXHJcblx0Z2V0QnlJRChJRCkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJUGFja2FnZVN0dWRlbnQ+PihgJHt1cmx9JHtJRH1gKTtcclxuXHR9LFxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIFjDs2EgZGF0YVxyXG5cdGRlbGV0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxufTtcclxuIiwiaW1wb3J0IHtpbnN0YW5jZX0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvU2V0UGFja2FnZS8nO1xyXG5leHBvcnQgY29uc3QgcGFja2FnZUFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElQYWNrYWdlW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zLFxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyBM4bqleSB0aGVvIElEXHJcblx0Z2V0QnlJRChJRCkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJUGFja2FnZT4+KGAke3VybH0ke0lEfWApO1xyXG5cdH0sXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFkZChkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gWMOzYSBkYXRhXHJcblx0ZGVsZXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIFjDs2EgZGF0YVxyXG5cdHVwbG9hZEltZyhkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCgnYXBpL1NldFBhY2thZ2VVcExvYWQnLCBkYXRhKTtcclxuXHR9LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1BheUZpeEV4YW0vJztcclxuZXhwb3J0IGNvbnN0IHBheUZpeEV4YW1BcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJUGF5Rml4RXhhbVtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtc1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyBM4bqleSB0aGVvIElEXHJcblx0Z2V0QnlJRChJRCkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJUGF5Rml4RXhhbT4+KGAke3VybH0ke0lEfWApO1xyXG5cdH0sXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFkZChkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gWMOzYSBkYXRhXHJcblx0ZGVsZXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9XHJcbn07XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvU3R1ZGVuRml4RXhhbSc7XHJcbmV4cG9ydCBjb25zdCBwYXlGaXhMaXN0QXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVBheUZpeExpc3RbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXNcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8gTOG6pXkgdGhlbyBJRFxyXG5cdGdldEJ5SUQoSUQpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVBheUZpeExpc3Q+PihgJHt1cmx9JHtJRH1gKTtcclxuXHR9LFxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIFjDs2EgZGF0YVxyXG5cdGRlbGV0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fVxyXG59O1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gXCJ+L2FwaUJhc2UvaW5zdGFuY2VcIjtcclxuXHJcbmNvbnN0IHVybCA9IFwiL2FwaS9SZXNldFBhc3N3b3JkL1NlbmRNYWlsXCI7XHJcbmV4cG9ydCBjb25zdCByZXNldFBhc3N3b3JkQXBpID0ge1xyXG4gIC8vIEfhu61pIGVtYWlsXHJcbiAgc2VuZEVtYWlsKGRhdGEpIHtcclxuICAgIHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcbiAgfSxcclxuXHJcbiAgLy8gWMOhYyBuaOG6rW5cclxuICBjb25maXJtKGRhdGEpIHtcclxuICAgIHJldHVybiBpbnN0YW5jZS5wdXQoXCIvYXBpL1Jlc2V0UGFzc3dvcmQvVXBkYXRlUGFzc1wiLCBcIlwiLCB7XHJcbiAgICAgIHBhcmFtczogZGF0YSxcclxuICAgIH0pO1xyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1NhbGVDYW1wYWlnbkRldGFpbC8nO1xyXG5leHBvcnQgY29uc3Qgc2FsZUNhbXBhaWduRGV0YWlsQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVNhbGVDYW1wYWlnbkRldGFpbFtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtcyxcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8gTOG6pXkgdGhlbyBJRFxyXG5cdGdldEJ5SUQoSUQpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVNhbGVDYW1wYWlnbkRldGFpbD4+KGAke3VybH0ke0lEfWApO1xyXG5cdH0sXHJcbn07XHJcbiIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1NhbGVDYW1wYWlnbi8nO1xyXG5leHBvcnQgY29uc3Qgc2FsZUNhbXBhaWduQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVNhbGVDYW1wYWlnbltdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtcyxcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8gTOG6pXkgdGhlbyBJRFxyXG5cdGdldEJ5SUQoSUQpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVNhbGVDYW1wYWlnbj4+KGAke3VybH0ke0lEfWApO1xyXG5cdH0sXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFkZChkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gWMOzYSBkYXRhXHJcblx0ZGVsZXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG59O1xyXG4iLCJpbXBvcnQge2luc3RhbmNlfSBmcm9tICcuLi9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9TYWxlU2FsYXJ5Lyc7XHJcbmV4cG9ydCBjb25zdCBzYWxlU2FsYXJ5QXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVNhbGVTYWxhcnlbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXMsXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIEzhuqV5IHRoZW8gSURcclxuXHRnZXRCeUlEKElEKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTYWxlU2FsYXJ5Pj4oYCR7dXJsfSR7SUR9YCk7XHJcblx0fSxcclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxufTtcclxuIiwiaW1wb3J0IHtpbnN0YW5jZX0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvU2FsZUNhbXBhaWduUmV2ZW51ZS8nO1xyXG5leHBvcnQgY29uc3Qgc2FsZXJSZXZlbnVlQXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVNhbGVyUmV2ZW51ZVtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtcyxcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8gTOG6pXkgdGhlbyBJRFxyXG5cdGdldEJ5SUQoSUQpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVNhbGVyUmV2ZW51ZT4+KGAke3VybH0ke0lEfWApO1xyXG5cdH0sXHJcbn07XHJcbiIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL0NvdW5zZWxvcnNSZXZlbnVlLyc7XHJcbmV4cG9ydCBjb25zdCBzYWxlclRvdGFsUmV2ZW51ZUFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTYWxlclRvdGFsUmV2ZW51ZVtdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtcyxcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8gTOG6pXkgdGhlbyBJRFxyXG5cdGdldEJ5SUQoSUQpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVNhbGVyVG90YWxSZXZlbnVlPj4oYCR7dXJsfSR7SUR9YCk7XHJcblx0fSxcclxufTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICcuLi9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnYXBpL0NvdXJzZVNjaGVkdWxlT2ZCcmFuY2gnO1xyXG5leHBvcnQgY29uc3QgY2hlY2tCcmFuY2hTY2hlZHVsZVN0dWR5ID0ge1xyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUNoZWNrQnJhbmNoU2NoZWR1bGVTdHVkeURhdGFbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXNcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuIiwiaW1wb3J0IHtpbnN0YW5jZX0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJ2FwaS9TY2hlZHVsZUJ5TXVsdGlwbGVUZWFjaGVyLyc7XHJcbmV4cG9ydCBjb25zdCBjaGVja1RlYWNoZXJTY2hlZHVsZVN0dWR5ID0ge1xyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SUNoZWNrVGVhY2hlclNjaGVkdWxlU3R1ZHlbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXMsXHJcblx0XHR9KTtcclxuXHR9LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJy4uL2luc3RhbmNlJztcclxuXHJcbnR5cGUgU2NoZWR1bGVTZWxmQ291cnNlUmVzdWx0PFQgPSBhbnk+ID0ge1xyXG5cdGNvdXJzZVNjaGVkdWxlc0FycmFuZ2VkOiBUO1xyXG5cdGNvdXJzZVNjaGVkdWxlc0luYXJyYW5nZWQ6IFQ7XHJcblx0bWVzc2FnZTogc3RyaW5nO1xyXG59O1xyXG5leHBvcnQgY29uc3QgY3JlYXRlU2VsZkNvdXJzZSA9IChkYXRhOiBJU0NQb3N0KSA9PiBpbnN0YW5jZS5wb3N0PElBcGlSZXN1bHREYXRhPElTY2hlZHVsZVpvb21EZXRhaWw+PignL2FwaS9DcmVhdGVDb3Vyc2UxdnMxLycsIGRhdGEpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNjaGVkdWxlU2VsZkNvdXJzZSA9IChpZDogbnVtYmVyKSA9PlxyXG5cdGluc3RhbmNlLmdldDxTY2hlZHVsZVNlbGZDb3Vyc2VSZXN1bHQ8SVNDU2NoZWR1bGVbXT4+KGAvYXBpL2NvdXJzZU5vdFNjaGVkdWxlWWV0LyR7aWR9YCk7XHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tTdHVkeVRpbWVTZWxmQ291cnNlID0gKGRhdGE6IE9taXQ8SVNDQ2hlY2tUZWFjaGVyLCAnc3R1ZHlUaW1lSUQnPikgPT5cclxuXHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVN0dWR5VGltZVtdPj4oXHJcblx0XHRgL2FwaS9HZXRTdHVkeVRpbWVCeURhdGVBbmRTdHVkZW50SUQ/ZGF0ZT0ke2RhdGEuZGF0ZX0mY3VycmljdWx1bXNEZXRhaWxJRD0ke2RhdGEuY3VycmljdWx1bXNEZXRhaWxJRH1gXHJcblx0KTtcclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja1RlYWNoZXJTZWxmQ291cnNlID0gKGRhdGE6IElTQ0NoZWNrVGVhY2hlcikgPT5cclxuXHRpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVVzZXJbXT4+KFxyXG5cdFx0YC9hcGkvR2V0VGVhY2hlckJ5RGF0ZUFuZFN0dWR5VGltZUFuZEN1cnJpY3VsdW1EZXRhaWw/ZGF0ZT0ke2RhdGEuZGF0ZX0mY3VycmljdWx1bXNEZXRhaWxJRD0ke2RhdGEuY3VycmljdWx1bXNEZXRhaWxJRH0mc3R1ZHlUaW1lSUQ9JHtkYXRhLnN0dWR5VGltZUlEfWBcclxuXHQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNjaGVkdWxlU2VsZkNvdXJzZSA9IChkYXRhOiBJQ1NTY2hlZHVsZVRvU2F2ZSkgPT4gaW5zdGFuY2UucHV0PElBcGlSZXN1bHREYXRhPignL2FwaS9VcGRhdGVDb3Vyc2VTY2hlZHVsZScsIGRhdGEpO1xyXG5leHBvcnQgY29uc3QgY2FuY2VsU2NoZWR1bGVTZWxmQ291cnNlID0gKGlkOiBudW1iZXIpID0+IGluc3RhbmNlLnB1dDxJQXBpUmVzdWx0RGF0YT4oYC9hcGkvUmVtb3ZlQ291cnNlU2NoZWR1bGUvJHtpZH1gKTtcclxuZXhwb3J0IGNvbnN0IGdldFJhbmdlVGltZVNlbGZDb3Vyc2UgPSAoKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE+KCcvYXBpL1RpbWVCb29rJyk7XHJcbmV4cG9ydCBjb25zdCBzZXRSYW5nZVRpbWVTZWxmQ291cnNlID0gKGRhdGE6IElTQ1RpbWUpID0+IGluc3RhbmNlLnB1dDxJQXBpUmVzdWx0RGF0YT4oJy9hcGkvVGltZUJvb2snLCBkYXRhKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvU3RhZmYnO1xyXG5jbGFzcyBTdGFmZkFwaSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsID0gKHBhcmFtcykgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdGFmZltdPj4odXJsLCB7IHBhcmFtcyB9KTtcclxuXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFkZChkYXRhOiBJU3RhZmYpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblx0fVxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlKGRhdGE6IGFueSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH1cclxuXHQvLyBYw7NhIGRhdGFcclxuXHRkZWxldGUoZGF0YTogSVN0YWZmKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3RhZmZBcGkgPSBuZXcgU3RhZmZBcGkoKTtcclxuIiwiaW1wb3J0IHtpbnN0YW5jZX0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvVGFza0dyb3VwLyc7XHJcbmV4cG9ydCBjb25zdCB0YXNrR3JvdXBBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVGFza0dyb3VwW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zLFxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyBUaMOqbVxyXG5cdGFkZChkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gQ+G6rXAgbmjhuq10XHJcblx0dXBkYXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIFjDs2FcclxuXHRkZWxldGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcbn07XHJcblxyXG5jb25zdCB1cmwyID0gJy9hcGkvVGFzay8nO1xyXG5leHBvcnQgY29uc3QgdGFza0FwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPih1cmwyLCB7XHJcblx0XHRcdHBhcmFtcyxcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8gVGjDqm1cclxuXHRhZGQoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsMiwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBD4bqtcCBuaOG6rXRcclxuXHR1cGRhdGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwyLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIFjDs2FcclxuXHRkZWxldGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwyLCBkYXRhKTtcclxuXHR9LFxyXG59O1xyXG5cclxuY29uc3QgdXJsMyA9ICcvYXBpL1N0YWZmT2ZUYXNrR3JvdXAvJztcclxuZXhwb3J0IGNvbnN0IHN0YWZmT2ZUYXNrR3JvdXBBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YT4odXJsMywge1xyXG5cdFx0XHRwYXJhbXMsXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIFRow6ptXHJcblx0YWRkKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybDMsIGRhdGEpO1xyXG5cdH0sXHJcblx0Ly8gQ+G6rXAgbmjhuq10XHJcblx0dXBkYXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsMywgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBYw7NhXHJcblx0ZGVsZXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsMywgZGF0YSk7XHJcblx0fSxcclxufTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvU3R1ZHlSb3V0ZSc7XHJcblxyXG5jbGFzcyBTdHVkeVJvbGVBcGkge1xyXG5cdGdldEFsbCA9IChQYXJhbXM6IGFueSkgPT5cclxuXHRcdGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU3R1ZHlSb2xlW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zOiBQYXJhbXNcclxuXHRcdH0pO1xyXG5cclxuXHRnZXREZXRhaWwgPSAoaWQ6IG51bWJlcikgPT4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElTdHVkeVJvbGU+PihgJHt1cmx9LyR7aWR9YCk7XHJcblxyXG5cdGFkZCA9IChkYXRhOiBJU3R1ZHlSb2xlKSA9PiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblxyXG5cdHVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IGluc3RhbmNlLnB1dCh1cmwsIGRhdGEsIHt9KTtcclxuXHJcblx0Y2hhbmdlUG9zaXRpb24gPSAoZGF0YTogYW55KSA9PiBpbnN0YW5jZS5wdXQoYC9hcGkvU3R1ZHlSb3V0ZUNoYW5nZVBsYWNlc2AsIGRhdGEsIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN0dWR5Um9sZUFwaSA9IG5ldyBTdHVkeVJvbGVBcGkoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnXHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9UZWFjaGVyLydcclxuZXhwb3J0IGNvbnN0IHRlYWNoZXJBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVGVhY2hlcltdPj4odXJsLCB7XHJcblx0XHRcdHBhcmFtc1xyXG5cdFx0fSlcclxuXHR9LFxyXG5cdC8vIEzhuqV5IHRoZW8gaWRcclxuXHRnZXRCeUlkKGlkOiBudW1iZXIpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVRlYWNoZXI+PihgJHt1cmx9JHtpZH1gKVxyXG5cdH0sXHJcblx0Ly8gVGjDqm0gbeG7m2kgZGF0YVxyXG5cdGFkZChkYXRhOiBJVGVhY2hlcikge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKVxyXG5cdH0sXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUoZGF0YTogSVRlYWNoZXIpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKVxyXG5cdH0sXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGVCcmFuY2goZGF0YTogeyBVc2VySW5mb21hdGlvbklEOiBudW1iZXI7IEJyYW5jaElEOiBzdHJpbmc7IEVuYWJsZTogYm9vbGVhbiB9KSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KCcvYXBpL1VzZXJCcmFuY2gvJywgZGF0YSlcclxuXHR9LFxyXG5cdHVwZGF0ZVJvbGUoZGF0YTogeyBSb2xlSUQ6IG51bWJlcjsgVXNlckluZm9ybWF0aW9uSUQ6IG51bWJlciB9KSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KCcvYXBpL1RlYWNoZXIvJywgZGF0YSlcclxuXHR9LFxyXG5cdC8vIFjDs2EgZGF0YVxyXG5cdGRlbGV0ZShkYXRhOiBJVGVhY2hlcikge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpXHJcblx0fSxcclxuXHQvLyBUaMO0bmcgdGluIGzhu5twIGjhu41jXHJcblx0Z2V0QWxsVGVhY2hlckZvclN1YmplY3QoaWQ6IG51bWJlcikge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YT4oYC9hcGkvQXNzaWduVGVhY2hlckZvclN1YmplY3QvJHtpZH1gKVxyXG5cdH0sXHJcblx0dXBkYXRlVGVhY2hlckZvclN1YmplY3QoZGF0YTogYW55KSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KCcvYXBpL0Fzc2lnblRlYWNoZXJGb3JTdWJqZWN0JywgZGF0YSlcclxuXHR9LFxyXG5cdHVwZGF0ZVRlYWNoZXJGb3JBbGxTdWJqZWN0KHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCgnL2FwaS9Bc3NpZ25UZWFjaGVyRm9yQWxsU3ViamVjdCcsIHBhcmFtcylcclxuXHR9LFxyXG5cdGdldFRlYWNoZXJCeVByb2dyYW0ocGFyYW1zOiB7IFByb2dyYW1JRDogbnVtYmVyOyBCcmFuY2hJRDogbnVtYmVyIH0pIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8eyBVc2VySW5mb3JtYXRpb25JRDogbnVtYmVyOyBGdWxsTmFtZVVuaWNvZGU6IHN0cmluZyB9W10+PignL2FwaS9UZWFjaGVyQnlQcm9ncmFtJywge1xyXG5cdFx0XHRwYXJhbXNcclxuXHRcdH0pXHJcblx0fSwgLy8gTOG6pXkgdGhlbyBpZFxyXG5cdGdldEN1cnJpY3VsdW0oaWQ6IG51bWJlcikge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxhbnk+KGAvYXBpL2Fzc2lnbnRlYWNoZXJjdXJyaWN1bHVtL2dldGJ5dGVhY2hlci8ke2lkfWApXHJcblx0fSxcclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YXNzaWduKGRhdGE6IGFueSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QoJy9hcGkvYXNzaWdudGVhY2hlcmN1cnJpY3VsdW0vYXNzaWduJywgZGF0YSlcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvVXNlckluZm9ybWF0aW9uLyc7XHJcbmNsYXNzIFVzZXJBcGkge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbCA9IChwYXJhbXMpID0+IGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVXNlcltdPj4odXJsLCB7IHBhcmFtcyB9KTtcclxuXHJcblx0Ly8gTOG6pXkgZGF0YSBt4bubaSBuaOG6pXRcclxuXHRnZXROZXcgPSAoKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVVzZXI+Pih1cmwgKyAnMCcpO1xyXG5cclxuXHQvLyBM4bqleSBkYXRhIG3hu5tpIG5o4bqldFxyXG5cdGdldEJ5SUQgPSAocGFyYW1zKSA9PiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVVzZXI+Pih1cmwgKyBwYXJhbXMpO1xyXG5cclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkKGRhdGE6IElVc2VyKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucG9zdCh1cmwsIGRhdGEpO1xyXG5cdH1cclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZShkYXRhOiBJVXNlcikge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH1cclxuXHQvLyBYw7NhIGRhdGFcclxuXHRkZWxldGUoZGF0YTogSVVzZXIpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9XHJcblxyXG5cdC8vIMSQ4buVaSBt4bqtdCBraOG6qXVcclxuXHRjaGFuZ2VQYXNzd29yZChkYXRhOiBhbnkpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQoJy9hcGkvQWNjb3VudCcsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0Ly8gVOG6oW8gbeG7m2kgdMOgaSBraG/huqNuXHJcblx0Y3JlYXRlQWNjb3VudChkYXRhOiBhbnkpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KCcvYXBpL0NyZWF0ZUFjY291bnQnLCBkYXRhKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyQXBpID0gbmV3IFVzZXJBcGkoKTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICcuLi9pbnN0YW5jZSdcclxuaW1wb3J0IHsgSVZpZGVvQ291cnNlTGlzdCB9IGZyb20gJy4uL3R5cGVzL3ZpZGVvLWNvdXJzZS1saXN0L3ZpZGVvLWNvdXJzZS1saXN0J1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvVmlkZW9Db3Vyc2VPZlN0dWRlbnQvJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFZpZGVvQ291cnNlTGlzdEFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElWaWRlb0NvdXJzZUxpc3RbXT4+KFxyXG5cdFx0XHRgJHt1cmx9R2V0QWxsP3BhZ2VJbmRleD0ke3BhcmFtcy5wYWdlSW5kZXh9JnBhZ2VTaXplPSR7cGFyYW1zLnBhZ2VTaXplfSZzZWFyY2g9JHtwYXJhbXMuc2VhcmNofWBcclxuXHRcdClcclxuXHR9LFxyXG5cdC8vIEzhuqV5IGRhdGEgdGhlbyB1c2VyXHJcblx0Z2V0QnlVc2VyKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVmlkZW9Db3Vyc2VMaXN0W10+PihcclxuXHRcdFx0YCR7dXJsfUdldEJ5VXNlcj9wYWdlSW5kZXg9JHtwYXJhbXMucGFnZUluZGV4fSZwYWdlU2l6ZT0ke3BhcmFtcy5wYWdlU2l6ZX0mc2VhcmNoPSR7cGFyYW1zLnNlYXJjaH1gXHJcblx0XHQpXHJcblx0fSxcclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCArICdTdHVkZW50RXZhbHVhdGlvbicsIGRhdGEpXHJcblx0fSxcclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZUFjdGl2ZUNvZGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwgKyAnVXBkYXRlQWN0aXZlQ29kZScsIGRhdGEpXHJcblx0fSxcclxuXHR1cGRhdGVMaW1pdEJvb2tpbmcoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwgKyAnVXBkYXRlTGltaXRCb29raW5nJywgZGF0YSlcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IGRvbmVQYXlVcmwgPSAnL2FwaS9PcmRlci8nXHJcbmV4cG9ydCBjb25zdCBEb25lUGF5QXBpID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVZpZGVvQ291cnNlTGlzdFtdPj4oXHJcblx0XHRcdGAke2RvbmVQYXlVcmx9R2V0TGlzdE9yZGVyP3BhZ2VJbmRleD0ke3BhcmFtcy5wYWdlSW5kZXh9JnBhZ2VTaXplPSR7cGFyYW1zLnBhZ2VTaXplfSZzZWFyY2g9JHtwYXJhbXMuc2VhcmNofSZQYXltZW50U3RhdHVzPSR7cGFyYW1zLlBheW1lbnRTdGF0dXN9YFxyXG5cdFx0KVxyXG5cdH0sXHJcblx0Ly8gQ+G6rXAgbmjhuq10IGRhdGFcclxuXHR1cGRhdGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dChkb25lUGF5VXJsICsgJ1VwZGF0ZVBhaWRQYXltZW50JywgZGF0YSlcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICcuLi9pbnN0YW5jZSdcclxuaW1wb3J0IHsgSVZpZGVvTGVhcm5pbmcgfSBmcm9tICcuLi90eXBlcy92aWRlby1sZWFybmluZy92aWRlby1sZWFybmluZydcclxuXHJcbmNvbnN0IHVybCA9ICcvYXBpL1ZpZGVvQ291cnNlT2ZTdHVkZW50LydcclxuZXhwb3J0IGNvbnN0IFZpZGVvQ291cnNlT2ZTdHVkZW50ID0ge1xyXG5cdC8vIEzhuqV5IHThuqV0IGPhuqMgZGF0YVxyXG5cdGdldEFsbChwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVZpZGVvTGVhcm5pbmdbXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXNcclxuXHRcdH0pXHJcblx0fSxcclxuXHJcblx0Ly8gTOG6pXkgZGF0YSB0aGVvIHVzZXJcclxuXHRHZXRCeUlEKElEKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElWaWRlb0xlYXJuaW5nW10+PihgJHt1cmwgKyAnR2V0QnlJRC8nfSR7SUR9YClcclxuXHR9LFxyXG5cclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdFVwZGF0ZVNlZW5BbmRUaW1lV2F0Y2hlZFZpZGVvKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsICsgJy9VcGRhdGVTZWVuQW5kVGltZVdhdGNoZWRWaWRlbycsIGRhdGEpXHJcblx0fSxcclxuXHJcblx0Ly8gTOG6pXkgZGF0YSBHZXRMZXNzb25JblByb2dyZXNzXHJcblx0R2V0TGVzc29uSW5Qcm9ncmVzcygpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVZpZGVvTGVhcm5pbmdbXT4+KHVybCArICdHZXRMZXNzb25JblByb2dyZXNzLycpXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCB1cmxJbnRlcmFjdGlvID0gJy9hcGkvVmlkZW9Db3Vyc2VJbnRlcmFjdGlvbi8nXHJcbmV4cG9ydCBjb25zdCBWaWRlb0NvdXJzZUludGVyYWN0aW9uID0ge1xyXG5cdEdldEJ5SUQoSUQpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVZpZGVvTGVhcm5pbmdbXT4+KGAke3VybEludGVyYWN0aW8gKyAnR2V0QnlJRC8nfSR7SUR9YClcclxuXHR9LFxyXG5cclxuXHRMaXN0UUEocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElWaWRlb0xlYXJuaW5nW10+Pih1cmxJbnRlcmFjdGlvICsgJ0xpc3RRQScsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KVxyXG5cdH0sXHJcblxyXG5cdExpc3ROb3RlKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVmlkZW9MZWFybmluZ1tdPj4odXJsSW50ZXJhY3RpbyArICdMaXN0Tm90ZScsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KVxyXG5cdH0sXHJcblxyXG5cdExpc3RMaXN0QW5ub3VuY2VtZW50KHZpZGVvY291cnNlSUQpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVZpZGVvTGVhcm5pbmdbXT4+KHVybEludGVyYWN0aW8gKyAnTGlzdEFubm91bmNlbWVudC8nICsgdmlkZW9jb3Vyc2VJRClcclxuXHR9LFxyXG5cclxuXHRhZGQoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsSW50ZXJhY3RpbyArICdJbnNlcnQnLCBkYXRhKVxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgdXJsVmlkZW9Db3Vyc2VzID0gJy9hcGkvVmlkZW9Db3Vyc2VzLydcclxuZXhwb3J0IGNvbnN0IFZpZGVvQ291cnNlcyA9IHtcclxuXHRMaXN0U2VjdGlvbihJRCkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJVmlkZW9MZWFybmluZ1tdPj4oYCR7dXJsVmlkZW9Db3Vyc2VzICsgJ0xpc3RTZWN0aW9uLyd9JHtJRH1gKVxyXG5cdH0sXHJcblxyXG5cdExpc3RMZXNzb24ocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElWaWRlb0xlYXJuaW5nW10+Pih1cmxWaWRlb0NvdXJzZXMgKyAnTGlzdExlc3NvbicsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KVxyXG5cdH0sXHJcblxyXG5cdExpc3RRQShwYXJhbXMpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVZpZGVvTGVhcm5pbmdbXT4+KHVybFZpZGVvQ291cnNlcyArICdMaXN0UUEnLCB7XHJcblx0XHRcdHBhcmFtc1xyXG5cdFx0fSlcclxuXHR9LFxyXG5cclxuXHRMZXNzb25EZXRhaWwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElWaWRlb0xlYXJuaW5nW10+Pih1cmxWaWRlb0NvdXJzZXMgKyAnTGVzc29uRGV0YWlsJywge1xyXG5cdFx0XHRwYXJhbXNcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IGluc3RhbmNlIH0gZnJvbSAnLi4vaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvQ29taW5nU29vbkNvdXJzZVNjaGVkdWxlLyc7XHJcbmV4cG9ydCBjb25zdCBjb21pbmdDb3Vyc2VBcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKCkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJQ29taW5nQ291cnNlPj4odXJsKTtcclxuXHR9XHJcbn07XHJcbiIsImltcG9ydCB7aW5zdGFuY2V9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9ab29tVGVhY2hlckFQSS8nO1xyXG5leHBvcnQgY29uc3QgY29uZmlnWm9vbUFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElDb25maWdab29tW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zLFxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHQvLyBM4bqleSB0aGVvIGlkXHJcblx0Z2V0QnlJZChpZDogbnVtYmVyKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UuZ2V0PElBcGlSZXN1bHREYXRhPElDb25maWdab29tPj4oYCR7dXJsfSR7aWR9YCk7XHJcblx0fSxcclxuXHQvLyBUaMOqbSBt4bubaSBkYXRhXHJcblx0YWRkKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wb3N0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBD4bqtcCBuaOG6rXQgZGF0YVxyXG5cdHVwZGF0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBYw7NhIGRhdGFcclxuXHRkZWxldGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnB1dCh1cmwsIGRhdGEpO1xyXG5cdH0sXHJcblx0Z2V0SW5hY3RpdmVDb25maWdab29tKCkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJQ29uZmlnWm9vbT4+KFxyXG5cdFx0XHQnL2FwaS9HZXRab29tVGVhY2hlckFQSWluQWN0aXZlJ1xyXG5cdFx0KTtcclxuXHR9LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBpbnN0YW5jZSB9IGZyb20gJ34vYXBpQmFzZS9pbnN0YW5jZSc7XHJcblxyXG5jb25zdCB1cmwgPSAnL2FwaS9Vc2VyU2NoZWR1bGUvJztcclxuZXhwb3J0IGNvbnN0IHNjaGVkdWxlWm9vbUFwaSA9IHtcclxuXHQvLyBM4bqleSB04bqldCBj4bqjIGRhdGFcclxuXHRnZXRBbGwocGFyYW1zOiB7IFN0YXJ0VGltZTogc3RyaW5nOyBFbmRUaW1lOiBzdHJpbmcgfSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJU2NoZWR1bGVab29tW10+Pih1cmwsIHtcclxuXHRcdFx0cGFyYW1zXHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8vIEzhuqV5IHRoZW8gaWRcclxuXHRnZXRCeUlkKGlkOiBudW1iZXIpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVNjaGVkdWxlWm9vbURldGFpbD4+KGAke3VybH0ke2lkfWApO1xyXG5cdH1cclxufTtcclxuIiwiaW1wb3J0IHsgaW5zdGFuY2UgfSBmcm9tICd+L2FwaUJhc2UvaW5zdGFuY2UnO1xyXG5cclxuY29uc3QgdXJsID0gJy9hcGkvWm9vbVJvb21TY2hlZHVsZS8nO1xyXG5leHBvcnQgY29uc3Qgem9vbVJvb21BcGkgPSB7XHJcblx0Ly8gTOG6pXkgdOG6pXQgY+G6oyBkYXRhXHJcblx0Z2V0QWxsKHBhcmFtcykge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJWm9vbVJvb21bXT4+KHVybCwge1xyXG5cdFx0XHRwYXJhbXNcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ly8gTOG6pXkgdGhlbyBpZFxyXG5cdGdldEJ5SWQoaWQ6IG51bWJlcikge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLmdldDxJQXBpUmVzdWx0RGF0YTxJWm9vbVJvb20+PihgJHt1cmx9JHtpZH1gKTtcclxuXHR9LFxyXG5cdC8vIFRow6ptIG3hu5tpIGRhdGFcclxuXHRhZGQoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIEPhuq1wIG5o4bqtdCBkYXRhXHJcblx0dXBkYXRlKGRhdGEpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5wdXQodXJsLCBkYXRhKTtcclxuXHR9LFxyXG5cdC8vIFjDs2EgZGF0YVxyXG5cdGRlbGV0ZShkYXRhKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KHVybCwgZGF0YSk7XHJcblx0fSxcclxuXHQvLyBU4bqhbyBwaMOybmdcclxuXHRjcmVhdGVSb29tKHNjaGVkdWxlSUQ6IG51bWJlcikge1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlLnBvc3QoYGFwaS9DcmVhdGVSb29tLyR7c2NoZWR1bGVJRH1gKTtcclxuXHR9LFxyXG5cdC8vIMSQw7NuZyBwaMOybmdcclxuXHRjbG9zZVJvb20oc2NoZWR1bGVJRDogbnVtYmVyKSB7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2UucHV0KGBhcGkvQ2xvc2VSb29tLyR7c2NoZWR1bGVJRH1gKTtcclxuXHR9LFxyXG5cdGdldFJlY29yZChzY2hlZHVsZUlEOiBudW1iZXIpIHtcclxuXHRcdHJldHVybiBpbnN0YW5jZS5nZXQ8SUFwaVJlc3VsdERhdGE8SVpvb21SZWNvcmRbXT4+KGBhcGkvR2V0UmVjb3JkaW5nLyR7c2NoZWR1bGVJRH1gKTtcclxuXHR9XHJcbn07XHJcbiIsImNvbnN0IF8gPSB7XHJcblx0cHJpbWFyeUNvbG9yOiAnIzUwNjg0QicsXHJcblx0c2Vjb25kQ29sb3I6ICcjZWFlZGU4JyxcclxuXHRjaHJvbWVUaXRsZTogJ0lFTFRTIE5HVVnhu4ROIEhVWeG7gE4gLSBBbHdheXMgVHJ5IFlvdXIgQmVzdCcsXHJcblx0ZGVzY3JpcHRpb246ICdJRUxUUyBOR1VZ4buETiBIVVnhu4BOJyxcclxuXHRob3N0VVJMOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgX1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgQ2hlY2tDaXJjbGVPdXRsaW5lZCwgV2FybmluZ091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnXHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnXHJcbmltcG9ydCB7IG9uZVNpZ25hbEFQSSwgdXNlckFwaSB9IGZyb20gJ34vYXBpQmFzZSdcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXHJcbmltcG9ydCBPbmVTaWduYWwgZnJvbSAncmVhY3Qtb25lc2lnbmFsJ1xyXG5cclxuZXhwb3J0IHR5cGUgSVByb3BzID0ge1xyXG5cdHRpdGxlUGFnZTogc3RyaW5nXHJcblx0Z2V0Um91dGVyOiBhbnlcclxuXHRnZXRUaXRsZVBhZ2U6IEZ1bmN0aW9uXHJcblx0c2hvd05vdGk6IEZ1bmN0aW9uXHJcblx0Z2V0RGF0YVVzZXI6IEZ1bmN0aW9uXHJcblx0dXNlckluZm9ybWF0aW9uOiBJVXNlclxyXG5cdHVzZUFsbFJvbGVzOiBJUm9sZVtdXHJcblx0dXNlU3RhZmZSb2xlczogSVJvbGVbXVxyXG5cdHBhZ2VTaXplOiBudW1iZXJcclxuXHRpc0FkbWluOiBib29sZWFuXHJcblx0cmVsb2FkTm90aWZpY2F0aW9uOiBib29sZWFuXHJcblx0aGFuZGxlUmVsb2FkTm90aTogRnVuY3Rpb25cclxuXHRyZWxvYWRDYXJ0OiBib29sZWFuXHJcblx0aGFuZGxlUmVsb2FkQ2FydDogRnVuY3Rpb25cclxufVxyXG5cclxuY29uc3QgV3JhcENvbnRleHQgPSBjcmVhdGVDb250ZXh0PElQcm9wcz4oe1xyXG5cdHRpdGxlUGFnZTogJycsXHJcblx0Z2V0Um91dGVyOiAnJyxcclxuXHRnZXRUaXRsZVBhZ2U6ICgpID0+IHt9LFxyXG5cdHNob3dOb3RpOiAoKSA9PiB7fSxcclxuXHRnZXREYXRhVXNlcjogKCkgPT4ge30sXHJcblx0dXNlckluZm9ybWF0aW9uOiBudWxsLFxyXG5cdHVzZUFsbFJvbGVzOiBudWxsLFxyXG5cdHVzZVN0YWZmUm9sZXM6IG51bGwsXHJcblx0cGFnZVNpemU6IDMwLFxyXG5cdGlzQWRtaW46IGZhbHNlLFxyXG5cdHJlbG9hZE5vdGlmaWNhdGlvbjogZmFsc2UsXHJcblx0aGFuZGxlUmVsb2FkTm90aTogRnVuY3Rpb24sXHJcblx0cmVsb2FkQ2FydDogZmFsc2UsXHJcblx0aGFuZGxlUmVsb2FkQ2FydDogRnVuY3Rpb25cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBXcmFwUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblx0Ly8gR2V0IHBhdGggYW5kIHNsdWdcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cdGNvbnN0IGdldFJvdXRlciA9IHJvdXRlci5wYXRobmFtZVxyXG5cdGxldCBwYXRoOiBzdHJpbmcgPSByb3V0ZXIucGF0aG5hbWVcclxuXHRjb25zdCBbc2Vzc2lvbiwgbG9hZGluZ10gPSB1c2VTZXNzaW9uKClcclxuXHRjb25zdCBbdGl0bGVQYWdlLCBzZXRUaXRsZVBhZ2VdID0gdXNlU3RhdGUoJycpXHJcblx0Y29uc3QgW3VzZXJJbmZvLCBzZXRVc2VySW5mb10gPSB1c2VTdGF0ZTxJVXNlcj4obnVsbClcclxuXHRjb25zdCBbcm9sZXMsIHNldFJvbGVzXSA9IHVzZVN0YXRlPElSb2xlW10+KG51bGwpXHJcblx0Y29uc3QgW3N0YWZmUm9sZXMsIHNldFN0YWZmUm9sZXNdID0gdXNlU3RhdGU8SVJvbGVbXT4obnVsbClcclxuXHRjb25zdCBbaXNBZG1pbiwgc2V0SXNBZG1pbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHRjb25zdCBbcmVsb2FkTm90aWZpY2F0aW9uLCBzZXRSZWxvYWROb3RpZmljYXRpb25dID0gdXNlU3RhdGUoZmFsc2UpXHJcblx0Y29uc3QgW3JlbG9hZENhcnQsIHNldFJlbG9hZENhcnRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG5cdC8vIC0tLSBHZXQgVGl0bGUgUGFnZSAtLS1cclxuXHRjb25zdCBnZXRUaXRsZVBhZ2UgPSAodGl0bGUpID0+IHtcclxuXHRcdHNldFRpdGxlUGFnZSh0aXRsZSlcclxuXHR9XHJcblxyXG5cdC8vIC0tLSBTaG93IE5vdGlmaWNhdGlvbiAtLS1cclxuXHRjb25zdCBzaG93Tm90aSA9ICh0eXBlOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZykgPT4ge1xyXG5cdFx0Y29uc3Qgbm9kZU5vdGkgPSAoKSA9PiB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Bub3RpLWJveGB9PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3RpLWJveF9fY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJpY29uXCI+e3R5cGUgPT0gJ2RhbmdlcicgPyA8V2FybmluZ091dGxpbmVkIC8+IDogdHlwZSA9PSAnc3VjY2VzcycgJiYgPENoZWNrQ2lyY2xlT3V0bGluZWQgLz59PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+e2NvbnRlbnR9PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdClcclxuXHRcdH1cclxuXHJcblx0XHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdFx0Y2FzZSAnc3VjY2Vzcyc6XHJcblx0XHRcdFx0dG9hc3Quc3VjY2Vzcyhub2RlTm90aSlcclxuXHRcdFx0XHRicmVha1xyXG5cdFx0XHRjYXNlICdkYW5nZXInOlxyXG5cdFx0XHRcdHRvYXN0LmVycm9yKG5vZGVOb3RpKVxyXG5cdFx0XHRcdGJyZWFrXHJcblx0XHRcdGNhc2UgJ3dhcm5pbmcnOlxyXG5cdFx0XHRcdHRvYXN0Lndhcm5pbmcobm9kZU5vdGkpXHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRicmVha1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgZ2V0Um9sZXMgPSBhc3luYyAocm9sZVR5cGUpID0+IHtcclxuXHRcdC8vIHRyeSB7XHJcblx0XHQvLyBcdGxldCByZXMgPSBhd2FpdCB1c2VySW5mb3JtYXRpb25BcGkuZ2V0Um9sZShyb2xlVHlwZSlcclxuXHRcdC8vIFx0cmVzLnN0YXR1cyA9PSAyMDAgJiYgcm9sZVR5cGUgPT0gMCA/IHNldFJvbGVzKHJlcy5kYXRhLmRhdGEpIDogc2V0U3RhZmZSb2xlcyhyZXMuZGF0YS5kYXRhKVxyXG5cdFx0Ly8gfSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdC8vIFx0Y29uc29sZS5sb2coJ0zhu5dpIGzhuqV5IHRow7RuZyB0aW4gcm9sZXM6ICcsIGVycm9yKVxyXG5cdFx0Ly8gfVxyXG5cdH1cclxuXHJcblx0Ly8gLS0tIEdldCBEYXRhIFVzZXIgLS0tXHJcblx0Y29uc3QgZ2V0RGF0YVVzZXIgPSAoZGF0YSkgPT4ge1xyXG5cdFx0ZGF0YSAmJiBzZXRVc2VySW5mbyhkYXRhKVxyXG5cdH1cclxuXHJcblx0Ly8gLS0tIENoZWNrIGlzIEFkbWluIC0tLVxyXG5cdGNvbnN0IGNoZWNrSXNBZG1pbiA9IChkYXRhKSA9PiB7XHJcblx0XHRsZXQgcm9sZSA9IGRhdGEuUm9sZUlEXHJcblx0XHRpZiAocm9sZSA9PSAxIHx8IHJvbGUgPT0gNSkge1xyXG5cdFx0XHRzZXRJc0FkbWluKHRydWUpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyAtLS0gR2V0IE5ldyBEYXRhIFVzZSAtLS1cclxuXHRjb25zdCBnZXROZXdEYXRhVXNlciA9IGFzeW5jICgpID0+IHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGxldCByZXMgPSBhd2FpdCB1c2VyQXBpLmdldE5ldygpXHJcblx0XHRcdHJlcy5zdGF0dXMgPT0gMjAwICYmIChzZXRVc2VySW5mbyhyZXMuZGF0YS5kYXRhKSwgY2hlY2tJc0FkbWluKHJlcy5kYXRhLmRhdGEpKVxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0zhu5dpIGzhuqV5IHRow7RuZyB0aW4gdXNlcjogJywgZXJyb3IpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyAtLS0gSGFuZGxlIFJlbG9hZCBOb3RpZmljYXRpb24gLS0tXHJcblx0Y29uc3QgaGFuZGxlUmVsb2FkTm90aSA9ICgpID0+IHtcclxuXHRcdHNldFJlbG9hZE5vdGlmaWNhdGlvbighcmVsb2FkTm90aWZpY2F0aW9uKVxyXG5cdH1cclxuXHJcblx0Ly8gLS0tIEhhbmRsZSBSZWxvYWQgQ2FyZCAtLS1cclxuXHRjb25zdCBoYW5kbGVSZWxvYWRDYXJ0ID0gKCkgPT4ge1xyXG5cdFx0c2V0UmVsb2FkQ2FydCghcmVsb2FkQ2FydClcclxuXHR9XHJcblxyXG5cdGNvbnN0IHBvc3RPbmVzaWduYWxJRCA9IGFzeW5jICgpID0+IHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IHVzZXJJZCA9IGF3YWl0IE9uZVNpZ25hbC5nZXRVc2VySWQoKVxyXG5cdFx0XHRsZXQgcmVzID0gYXdhaXQgb25lU2lnbmFsQVBJLnVwZGF0ZSh1c2VySWQpXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnTOG7l2kgbOG6pXkgdGjDtG5nIHRpbiB1c2VyOiAnLCBlcnJvcilcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAobG9hZGluZyAmJiB0eXBlb2Ygc2Vzc2lvbiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2Vzc2lvbiAhPT0gbnVsbCkge1xyXG5cdFx0XHRpZiAocGF0aC5zZWFyY2goJ3NpZ25pbicpIDwgMSkge1xyXG5cdFx0XHRcdGdldE5ld0RhdGFVc2VyKClcclxuXHRcdFx0XHRnZXRSb2xlcygwKVxyXG5cdFx0XHRcdGdldFJvbGVzKDEpXHJcblx0XHRcdFx0cG9zdE9uZXNpZ25hbElEKClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sIFtzZXNzaW9uXSlcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxXcmFwQ29udGV4dC5Qcm92aWRlclxyXG5cdFx0XHRcdHZhbHVlPXt7XHJcblx0XHRcdFx0XHRwYWdlU2l6ZTogMzAsXHJcblx0XHRcdFx0XHR0aXRsZVBhZ2U6IHRpdGxlUGFnZSxcclxuXHRcdFx0XHRcdGdldFRpdGxlUGFnZSxcclxuXHRcdFx0XHRcdGdldFJvdXRlcixcclxuXHRcdFx0XHRcdHNob3dOb3RpLFxyXG5cdFx0XHRcdFx0Z2V0RGF0YVVzZXIsXHJcblx0XHRcdFx0XHR1c2VySW5mb3JtYXRpb246IHVzZXJJbmZvLFxyXG5cdFx0XHRcdFx0dXNlQWxsUm9sZXM6IHJvbGVzLFxyXG5cdFx0XHRcdFx0dXNlU3RhZmZSb2xlczogc3RhZmZSb2xlcyxcclxuXHRcdFx0XHRcdGlzQWRtaW46IGlzQWRtaW4sXHJcblx0XHRcdFx0XHRyZWxvYWROb3RpZmljYXRpb246IHJlbG9hZE5vdGlmaWNhdGlvbixcclxuXHRcdFx0XHRcdGhhbmRsZVJlbG9hZE5vdGk6IGhhbmRsZVJlbG9hZE5vdGksXHJcblx0XHRcdFx0XHRyZWxvYWRDYXJ0OiByZWxvYWRDYXJ0LFxyXG5cdFx0XHRcdFx0aGFuZGxlUmVsb2FkQ2FydDogaGFuZGxlUmVsb2FkQ2FydFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8VG9hc3RDb250YWluZXJcclxuXHRcdFx0XHRcdHBvc2l0aW9uPVwidG9wLXJpZ2h0XCJcclxuXHRcdFx0XHRcdGF1dG9DbG9zZT17MzAwMH1cclxuXHRcdFx0XHRcdGhpZGVQcm9ncmVzc0Jhcj17ZmFsc2V9XHJcblx0XHRcdFx0XHRuZXdlc3RPblRvcD17ZmFsc2V9XHJcblx0XHRcdFx0XHRjbG9zZU9uQ2xpY2tcclxuXHRcdFx0XHRcdHJ0bD17ZmFsc2V9XHJcblx0XHRcdFx0XHRwYXVzZU9uRm9jdXNMb3NzXHJcblx0XHRcdFx0XHRkcmFnZ2FibGVcclxuXHRcdFx0XHRcdHBhdXNlT25Ib3ZlclxyXG5cdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdHtjaGlsZHJlbn1cclxuXHRcdFx0PC9XcmFwQ29udGV4dC5Qcm92aWRlcj5cclxuXHRcdDwvPlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVdyYXAgPSAoKSA9PiB1c2VDb250ZXh0KFdyYXBDb250ZXh0KVxyXG4iLCJpbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcydcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnXHJcbmltcG9ydCB7IFByb3ZpZGVyIGFzIEF1dGhQcm92aWRlciB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFdyYXBQcm92aWRlciB9IGZyb20gJ34vY29udGV4dC93cmFwJ1xyXG5pbXBvcnQgT25lU2lnbmFsIGZyb20gJ3JlYWN0LW9uZXNpZ25hbCdcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLnNjc3MnXHJcbmltcG9ydCBfIGZyb20gJ34vYXBwQ29uZmlnJ1xyXG5pbXBvcnQgeyBnZXRUeXBlVVJMIH0gZnJvbSAnfi91dGlscy9mdW5jdGlvbnMnXHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSdcclxuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUvc3R5bGVzLmNzcydcclxuY29uZmlnLmF1dG9BZGRDc3MgPSBmYWxzZVxyXG5cclxuY29uc3QgXzFTaWduYWxMb2NhbGhvc3QgPSAnYWE0NzQ1NDYtNmE2Yi00OGE0LThjNDQtYmM2MDM1YTNlOTExJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblx0Y29uc3QgW2N1cnJlbnRVcmwsIHNldEN1cnJlbnRVcmxdID0gdXNlU3RhdGUoJycpXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRzZXRDdXJyZW50VXJsKHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxyXG5cdFx0Y29uc29sZS5sb2coJ05PREVfRU5WOiAnLCBwcm9jZXNzLmVudi5OT0RFX0VOVilcclxuXHR9LCBbXSlcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmIChjdXJyZW50VXJsICE9PSAnJykge1xyXG5cdFx0XHRsZXQgdHlwZSA9IGdldFR5cGVVUkwoY3VycmVudFVybClcclxuXHRcdFx0T25lU2lnbmFsLnNldFN1YnNjcmlwdGlvbih0cnVlKVxyXG5cdFx0XHRPbmVTaWduYWwuaW5pdCh7XHJcblx0XHRcdFx0YXBwSWQ6XHJcblx0XHRcdFx0XHR0eXBlID09ICdMT0NBTEhPU1QnID8gXzFTaWduYWxMb2NhbGhvc3QgOiB0eXBlID09ICdERU1PJyA/IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX09ORV9TSUdOQUwgOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19PTkVfU0lHTkFMXHJcblx0XHRcdH0pLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdE9uZVNpZ25hbC5zaG93U2xpZGVkb3duUHJvbXB0KClcclxuXHRcdFx0fSlcclxuXHRcdFx0T25lU2lnbmFsLm9uKCdwb3BvdmVyU2hvd24nLCBmdW5jdGlvbiAoKSB7fSlcclxuXHRcdFx0Y29uc3QgaGFuZGxlUm91dGVDaGFuZ2VFcnJvciA9IChlcnI6IGFueSwgdXJsOiBhbnkpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnaGFuZGxlUm91dGVDaGFuZ2VFcnJvcicsIHVybClcclxuXHRcdFx0fVxyXG5cdFx0XHRyb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgaGFuZGxlUm91dGVDaGFuZ2VFcnJvcilcclxuXHRcdFx0cmV0dXJuICgpID0+IHtcclxuXHRcdFx0XHRyb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VFcnJvcicsIGhhbmRsZVJvdXRlQ2hhbmdlRXJyb3IpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LCBbY3VycmVudFVybF0pXHJcblxyXG5cdGNvbnN0IExheW91dCA9IENvbXBvbmVudC5sYXlvdXQgfHwgKChwcm9wcykgPT4gPD57cHJvcHMuY2hpbGRyZW59PC8+KVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0PHRpdGxlPntfLmNocm9tZVRpdGxlfTwvdGl0bGU+XHJcblx0XHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgsIG1heGltdW0tc2NhbGU9MVwiIC8+XHJcblx0XHRcdFx0PG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJub2luZGV4XCIgLz5cclxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtfLmRlc2NyaXB0aW9ufSAvPlxyXG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e18uZGVzY3JpcHRpb259IC8+XHJcblx0XHRcdFx0PG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cclxuXHRcdFx0XHQ8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9sb2dvLnBuZ1wiIC8+XHJcblx0XHRcdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3d3dy5hbWNoYXJ0cy5jb20vbGliLzMvcGx1Z2lucy9leHBvcnQvZXhwb3J0LmNzc1wiIHR5cGU9XCJ0ZXh0L2Nzc1wiIG1lZGlhPVwiYWxsXCIgLz5cclxuXHRcdFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImh0dHBzOi8vY2RuMy5kZXZleHByZXNzLmNvbS9qc2xpYi8yMC4yLjcvY3NzL2R4LmNvbW1vbi5jc3NcIiAvPlxyXG5cdFx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiaHR0cHM6Ly9jZG4zLmRldmV4cHJlc3MuY29tL2pzbGliLzIwLjIuNy9jc3MvZHgubGlnaHQuY3NzXCIgLz5cclxuXHRcdFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImh0dHBzOi8vY2RuMy5kZXZleHByZXNzLmNvbS9qc2xpYi8yMC4yLjcvY3NzL2R4LWdhbnR0Lm1pbi5jc3NcIiAvPlxyXG5cdFx0XHRcdDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly93d3cuYW1jaGFydHMuY29tL2xpYi8zL2FtY2hhcnRzLmpzXCI+PC9zY3JpcHQ+XHJcblx0XHRcdFx0PHNjcmlwdCBzcmM9XCJodHRwczovL3d3dy5hbWNoYXJ0cy5jb20vbGliLzMvc2VyaWFsLmpzXCI+PC9zY3JpcHQ+XHJcblx0XHRcdFx0PHNjcmlwdCBzcmM9XCJodHRwczovL3d3dy5hbWNoYXJ0cy5jb20vbGliLzMvdGhlbWVzL2xpZ2h0LmpzXCI+PC9zY3JpcHQ+XHJcblx0XHRcdDwvSGVhZD5cclxuXHJcblx0XHRcdDxBdXRoUHJvdmlkZXIgc2Vzc2lvbj17cGFnZVByb3BzLnNlc3Npb259PlxyXG5cdFx0XHRcdDxXcmFwUHJvdmlkZXI+XHJcblx0XHRcdFx0XHQ8TGF5b3V0PlxyXG5cdFx0XHRcdFx0XHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcblx0XHRcdFx0XHQ8L0xheW91dD5cclxuXHRcdFx0XHQ8L1dyYXBQcm92aWRlcj5cclxuXHRcdFx0PC9BdXRoUHJvdmlkZXI+XHJcblx0XHQ8Lz5cclxuXHQpXHJcbn1cclxuIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5cclxuLy8gIC0tLS0tLS0tLUVYUE9SVCBUTyBBUlJBWSBGT1IgU0VMRUNUIEZJRUxELS0tLS0tLS0tXHJcbmV4cG9ydCBjb25zdCBmbVNlbGVjdEFyciA9IChhcnI6IEFycmF5PHsgW2tleTogc3RyaW5nXTogYW55IH0+LCB0aXRsZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBvcHRpb25zID0gW10pID0+IHtcclxuXHRpZiAoQXJyYXkuaXNBcnJheShhcnIpICYmIGFyci5sZW5ndGggPiAwKSB7XHJcblx0XHRyZXR1cm4gYXJyXHJcblx0XHRcdC5maWx0ZXIoKHgpID0+ICh4LkVuYWJsZSA9PT0gZmFsc2UgPyBmYWxzZSA6IHgpKVxyXG5cdFx0XHQubWFwKCh4KSA9PiAoe1xyXG5cdFx0XHRcdHRpdGxlOiB4W3RpdGxlXSxcclxuXHRcdFx0XHR2YWx1ZTogeFt2YWx1ZV0sXHJcblx0XHRcdFx0b3B0aW9uczogb3B0aW9ucy5yZWR1Y2UoKG9iaiwgbykgPT4gKHsgLi4ub2JqLCBbb106IHhbb10gfSksIHt9KVxyXG5cdFx0XHR9KSlcclxuXHR9XHJcblx0cmV0dXJuIFtdXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVJlcGVhdEVsZW1lbnRTb3J0ZWQoYXJyLCBuKSB7XHJcblx0aWYgKG4gPT0gMCB8fCBuID09IDEpIHJldHVybiBuXHJcblxyXG5cdGxldCB0ZW1wID0gW2FyclswXV1cclxuXHQvLyBTdGFydCB0cmF2ZXJzaW5nIGVsZW1lbnRzXHJcblx0bGV0IGogPSAwXHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuIC0gMTsgaSsrKSBpZiAoYXJyW2ldICE9IGFycltpICsgMV0pIHRlbXAucHVzaChhcnJbaSArIDFdKVxyXG5cdHJldHVybiB0ZW1wXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjbGVhck9wdGlvbnNEdXBsaWNhdGUgPSAoYXJyOiBJT3B0aW9uQ29tbW9uW10pID0+IHtcclxuXHRyZXR1cm4gYXJyLnJlZHVjZSgobmV3QXJyLCBvKSA9PiB7XHJcblx0XHRpZiAoIW5ld0Fyci5zb21lKChvMikgPT4gbzIudmFsdWUgPT09IG8udmFsdWUpKSB7XHJcblx0XHRcdG5ld0Fyci5wdXNoKG8pXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbmV3QXJyXHJcblx0fSwgW10pXHJcbn1cclxuZXhwb3J0IGNvbnN0IGZtQXJyYXlUb09iamVjdFdpdGhTcGVjaWFsS2V5ID0gKGFyciwga2V5KSA9PiB7XHJcblx0cmV0dXJuIGFyci5yZWR1Y2UoKG5ld09iaiwgcykgPT4ge1xyXG5cdFx0bmV3T2JqW3Nba2V5XV0gPyBuZXdPYmpbc1trZXldXS5wdXNoKHMpIDogKG5ld09ialtzW2tleV1dID0gW3NdKVxyXG5cdFx0cmV0dXJuIG5ld09ialxyXG5cdH0sIHt9KVxyXG59XHJcbmV4cG9ydCBjb25zdCBudW1iZXJXaXRoQ29tbWFzID0gKG51bWJlcjogYW55KSA9PiB7XHJcblx0aWYgKG51bWJlciA9PSAnJyB8fCBudW1iZXIgPT0gdW5kZWZpbmVkIHx8IG51bWJlciA9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gJydcclxuXHR9XHJcblxyXG5cdG51bWJlciArPSAnJ1xyXG5cdGxldCB4ID0gbnVtYmVyLnNwbGl0KCcuJylcclxuXHRsZXQgeDEgPSB4WzBdXHJcblx0bGV0IHgyID0geC5sZW5ndGggPiAxID8gJy4nICsgeFsxXSA6ICcnXHJcblx0bGV0IHJneCA9IC8oXFxkKykoXFxkezN9KS9cclxuXHR3aGlsZSAocmd4LnRlc3QoeDEpKSB7XHJcblx0XHR4MSA9IHgxLnJlcGxhY2Uocmd4LCAnJDEnICsgJywnICsgJyQyJylcclxuXHR9XHJcblx0cmV0dXJuIHgxICsgeDJcclxufVxyXG5leHBvcnQgY29uc3QgbWF0aFJvdW5kID0gKG51bWJlcikgPT4ge1xyXG5cdHJldHVybiBNYXRoLnJvdW5kKG51bWJlciAqIDEwMCkgLyAxMDBcclxufVxyXG5leHBvcnQgY29uc3QgZm1EYXRlRnJvbU5vdyA9IChkYXRlKSA9PiB7XHJcblx0Y29uc3QgbG9jYWwgPSBtb21lbnQoZGF0ZSkubG9jYWwoKVxyXG5cdGxldCBmb3JtYXR0ZWREYXRlID0gJydcclxuXHRjb25zdCBkYXlzID0gbW9tZW50KCkuZGlmZihsb2NhbCwgJ2RheXMnKVxyXG5cdGlmIChkYXlzID49IDIpIHtcclxuXHRcdGZvcm1hdHRlZERhdGUgPSBsb2NhbC5sb2NhbGUoJ3ZpJykuZm9ybWF0KCdERC9NTS9ZWVlZIEhIOm1tJylcclxuXHR9IGVsc2Uge1xyXG5cdFx0Zm9ybWF0dGVkRGF0ZSA9IGxvY2FsLmxvY2FsZSgndmknKS5mcm9tTm93KClcclxuXHR9XHJcblx0cmV0dXJuIGZvcm1hdHRlZERhdGVcclxufVxyXG5leHBvcnQgY29uc3QgcGFyc2VQcmljZVN0clRvTnVtYmVyID0gKHN0cjogbnVtYmVyIHwgc3RyaW5nKSA9PiBwYXJzZUludChzdHIudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEQvZywgJycpKSB8fCAwXHJcblxyXG4vLyBHRVQgVklTSUJMRSBTVEFUVVNcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBhZ2VWaXNpYmlsaXR5KGNiKSB7XHJcblx0Y29uc3QgdGltZW91dElkID0gdXNlUmVmKG51bGwpXHJcblxyXG5cdGxldCBkZWxheSA9IDBcclxuXHJcblx0Y29uc3QgYnJvd3NlckNvbXBhdEFwaSA9ICgpID0+IHtcclxuXHRcdGxldCBoaWRkZW4sIHZpc2liaWxpdHlDaGFuZ2VcclxuXHRcdGlmICgnaGlkZGVuJyBpbiBkb2N1bWVudCkge1xyXG5cdFx0XHRoaWRkZW4gPSAnaGlkZGVuJ1xyXG5cdFx0XHR2aXNpYmlsaXR5Q2hhbmdlID0gJ3Zpc2liaWxpdHljaGFuZ2UnXHJcblx0XHR9IGVsc2UgaWYgKCdtb3pIaWRkZW4nIGluIGRvY3VtZW50KSB7XHJcblx0XHRcdC8vIEZpcmVmb3ggdXAgdG8gdjE3XHJcblx0XHRcdGhpZGRlbiA9ICdtb3pIaWRkZW4nXHJcblx0XHRcdHZpc2liaWxpdHlDaGFuZ2UgPSAnbW96dmlzaWJpbGl0eWNoYW5nZSdcclxuXHRcdH0gZWxzZSBpZiAoJ3dlYmtpdEhpZGRlbicgaW4gZG9jdW1lbnQpIHtcclxuXHRcdFx0Ly8gQ2hyb21lIHVwIHRvIHYzMiwgQW5kcm9pZCB1cCB0byB2NC40LCBCbGFja2JlcnJ5IHVwIHRvIHYxMFxyXG5cdFx0XHRoaWRkZW4gPSAnd2Via2l0SGlkZGVuJ1xyXG5cdFx0XHR2aXNpYmlsaXR5Q2hhbmdlID0gJ3dlYmtpdHZpc2liaWxpdHljaGFuZ2UnXHJcblx0XHR9XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRoaWRkZW4sXHJcblx0XHRcdHZpc2liaWxpdHlDaGFuZ2VcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IGNsZWFudXBUaW1lb3V0ID0gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXRJZC5jdXJyZW50KVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgeyBoaWRkZW4sIHZpc2liaWxpdHlDaGFuZ2UgfSA9IGJyb3dzZXJDb21wYXRBcGkoKVxyXG5cclxuXHRcdGlmICh0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpIHRocm93IG5ldyBFcnJvcignY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uJylcclxuXHJcblx0XHRjb25zdCBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlID0gKCkgPT4ge1xyXG5cdFx0XHRpZiAoZGVsYXkpIHtcclxuXHRcdFx0XHRpZiAodHlwZW9mIGRlbGF5ICE9PSAnbnVtYmVyJyB8fCBkZWxheSA8IDApIHtcclxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcignZGVsYXkgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXInKVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKHRpbWVvdXRJZC5jdXJyZW50KSBjbGVhbnVwVGltZW91dCgpXHJcblx0XHRcdFx0dGltZW91dElkLmN1cnJlbnQgPSBzZXRUaW1lb3V0KCgpID0+IGNiKCFkb2N1bWVudFtoaWRkZW5dKSwgZGVsYXkpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y2IoIWRvY3VtZW50W2hpZGRlbl0pXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHZpc2liaWxpdHlDaGFuZ2UsIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UpXHJcblxyXG5cdFx0cmV0dXJuICgpID0+IHtcclxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih2aXNpYmlsaXR5Q2hhbmdlLCBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlKVxyXG5cdFx0fVxyXG5cdH0sIFtjYl0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwYXJzZVRvTW9uZXkgPSAodmFsdWU6IGFueSkgPT4ge1xyXG5cdGlmICh2YWx1ZSA9PSAnJyB8fCB2YWx1ZSA9PSB1bmRlZmluZWQgfHwgdmFsdWUgPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuICcnXHJcblx0fVxyXG5cclxuXHR2YWx1ZSArPSAnJ1xyXG5cdGxldCB4ID0gdmFsdWUuc3BsaXQoJy4nKVxyXG5cdGxldCB4MSA9IHhbMF1cclxuXHRsZXQgeDIgPSB4Lmxlbmd0aCA+IDEgPyAnLicgKyB4WzFdIDogJydcclxuXHRsZXQgcmd4ID0gLyhcXGQrKShcXGR7M30pL1xyXG5cdHdoaWxlIChyZ3gudGVzdCh4MSkpIHtcclxuXHRcdHgxID0geDEucmVwbGFjZShyZ3gsICckMScgKyAnLCcgKyAnJDInKVxyXG5cdH1cclxuXHRyZXR1cm4geDEgKyB4MlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlRGF0ZU9iamVjdCA9IChkYXRlU3RhdGUsIGxvY2FsZSkgPT4ge1xyXG5cdGNvbnN0IHllYXIgPSBkYXRlU3RhdGUuZ2V0RnVsbFllYXIoKVxyXG5cdGNvbnN0IG1vbnRoID0gZGF0ZVN0YXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhsb2NhbGUsIHsgbW9udGg6ICdsb25nJyB9KVxyXG5cdGNvbnN0IGRhdGUgPSBkYXRlU3RhdGUuZ2V0RGF0ZSgpXHJcblx0Y29uc3QgaG91ciA9ICgnMCcgKyBkYXRlU3RhdGUuZ2V0SG91cnMoKSkuc2xpY2UoLTIpXHJcblx0Y29uc3QgbWludXRlID0gKCcwJyArIGRhdGVTdGF0ZS5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKVxyXG5cdGNvbnN0IHNlY29uZCA9ICgnMCcgKyBkYXRlU3RhdGUuZ2V0U2Vjb25kcygpKS5zbGljZSgtMilcclxuXHRyZXR1cm4geyB5ZWFyLCBtb250aCwgZGF0ZSwgaG91ciwgbWludXRlLCBzZWNvbmQgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VHlwZVVSTCA9IChwYXJhbTogYW55KSA9PiB7XHJcblx0aWYgKHBhcmFtICE9PSB1bmRlZmluZWQgJiYgcGFyYW0gIT09IG51bGwgJiYgcGFyYW0gIT09ICcnKSB7XHJcblx0XHRpZiAocGFyYW1bNF0gPT0gJzonKSB7XHJcblx0XHRcdHJldHVybiAnTE9DQUxIT1NUJ1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHBhcmFtWzRdID09ICdzJyAmJiBwYXJhbVs4XSA9PSAnYScgJiYgcGFyYW1bOV0gPT0gJ3AnICYmIHBhcmFtWzEwXSA9PSAncCcpIHtcclxuXHRcdFx0XHRyZXR1cm4gJ0xJVkUnXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuICdIRVJPS1UnXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1vbmVzaWduYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=