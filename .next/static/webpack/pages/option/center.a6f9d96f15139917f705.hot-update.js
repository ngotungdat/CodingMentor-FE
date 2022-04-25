webpackHotUpdate_N_E("pages/option/center",{

/***/ "./src/pages/option/center/index.tsx":
/*!*******************************************!*\
  !*** ./src/pages/option/center/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_MonaMedia_Project_CodingMentor_CodingMentor_FE_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var D_MonaMedia_Project_CodingMentor_CodingMentor_FE_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_MonaMedia_Project_CodingMentor_CodingMentor_FE_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_MonaMedia_Project_CodingMentor_CodingMentor_FE_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(D_MonaMedia_Project_CodingMentor_CodingMentor_FE_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var D_MonaMedia_Project_CodingMentor_CodingMentor_FE_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _apiBase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/apiBase */ "./src/apiBase/index.ts");
/* harmony import */ var _components_Elements_SortBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/components/Elements/SortBox */ "./src/components/Elements/SortBox/index.tsx");
/* harmony import */ var _components_Global_Option_CenterForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/components/Global/Option/CenterForm */ "./src/components/Global/Option/CenterForm.tsx");
/* harmony import */ var _components_LayoutBase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/components/LayoutBase */ "./src/components/LayoutBase/index.tsx");
/* harmony import */ var _components_PowerTable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~/components/PowerTable */ "./src/components/PowerTable/index.tsx");
/* harmony import */ var _components_Tables_FilterColumn__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~/components/Tables/FilterColumn */ "./src/components/Tables/FilterColumn.tsx");
/* harmony import */ var _context_wrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~/context/wrap */ "./src/context/wrap.tsx");







var _jsxFileName = "D:\\MonaMedia\\Project\\CodingMentor\\CodingMentor-FE\\src\\pages\\option\\center\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_MonaMedia_Project_CodingMentor_CodingMentor_FE_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var listFieldSearch = {
  pageIndex: 1,
  branchCode: null,
  branchName: null
};
var dataOption = [{
  dataSort: {
    sort: 1,
    sortType: false
  },
  text: 'Mã giảm dần'
}, {
  dataSort: {
    sort: 1,
    sortType: true
  },
  text: 'Mã tăng dần'
}, {
  dataSort: {
    sort: 2,
    sortType: false
  },
  text: 'Tên giảm dần'
}, {
  dataSort: {
    sort: 2,
    sortType: true
  },
  text: 'Tên tăng dần '
}];

var Center = function Center() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])([]),
      center = _useState[0],
      setCenter = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])({
    type: '',
    status: false
  }),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useWrap = Object(_context_wrap__WEBPACK_IMPORTED_MODULE_15__["useWrap"])(),
      showNoti = _useWrap.showNoti,
      pageSize = _useWrap.pageSize;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(null),
      totalPage = _useState3[0],
      setTotalPage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(null),
      indexRow = _useState4[0],
      setIndexRow = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(1),
      currentPage = _useState5[0],
      setCurrentPage = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(null),
      dataArea = _useState6[0],
      setDataArea = _useState6[1];

  var listTodoApi = {
    pageSize: pageSize,
    pageIndex: currentPage,
    sort: null,
    sortType: null,
    branchCode: null,
    branchName: null
  };

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(listTodoApi),
      todoApi = _useState7[0],
      setTodoApi = _useState7[1]; // -------------- GET DATA CENTER ----------------


  var getDataCenter = /*#__PURE__*/function () {
    var _ref = Object(D_MonaMedia_Project_CodingMentor_CodingMentor_FE_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/D_MonaMedia_Project_CodingMentor_CodingMentor_FE_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
      var res;
      return D_MonaMedia_Project_CodingMentor_CodingMentor_FE_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsLoading({
                type: 'GET_ALL',
                status: true
              });
              _context.prev = 1;
              _context.next = 4;
              return _apiBase__WEBPACK_IMPORTED_MODULE_9__["branchApi"].getAll(todoApi);

            case 4:
              res = _context.sent;
              res.status == 200 && (setCenter(res.data.data), setTotalPage(res.data.totalRow));
              res.status == 204 && showNoti('danger', 'Không có dữ liệu') && setCenter([]);
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              showNoti('danger', _context.t0.message);

            case 12:
              _context.prev = 12;
              setIsLoading({
                type: 'GET_ALL',
                status: false
              });
              return _context.finish(12);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9, 12, 15]]);
    }));

    return function getDataCenter() {
      return _ref.apply(this, arguments);
    };
  }(); //GET DATA AREA


  var getAllArea = function getAllArea() {
    ;

    Object(D_MonaMedia_Project_CodingMentor_CodingMentor_FE_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/D_MonaMedia_Project_CodingMentor_CodingMentor_FE_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2() {
      var res;
      return D_MonaMedia_Project_CodingMentor_CodingMentor_FE_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _apiBase__WEBPACK_IMPORTED_MODULE_9__["areaApi"].getAll({
                pageIndex: 1,
                pageSize: 9999
              });

            case 3:
              res = _context2.sent;
              res.status == 200 && setDataArea(res.data.data);
              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              showNoti('danger', _context2.t0);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }))();
  }; // ---------------- AFTER SUBMIT -----------------


  var afterPost = function afterPost(mes) {
    showNoti('success', mes);
    setTodoApi(_objectSpread(_objectSpread({}, listTodoApi), {}, {
      pageIndex: 1
    }));
    setCurrentPage(1);
  }; // ----------------- ON SUBMIT --------------------


  var _onSubmit2 = /*#__PURE__*/function () {
    var _ref3 = Object(D_MonaMedia_Project_CodingMentor_CodingMentor_FE_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/D_MonaMedia_Project_CodingMentor_CodingMentor_FE_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3(dataSubmit) {
      var res, newDataSource, _res;

      return D_MonaMedia_Project_CodingMentor_CodingMentor_FE_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setIsLoading({
                type: 'ADD_DATA',
                status: true
              });
              res = null;

              if (!dataSubmit.ID) {
                _context3.next = 18;
                break;
              }

              _context3.prev = 3;
              _context3.next = 6;
              return _apiBase__WEBPACK_IMPORTED_MODULE_9__["branchApi"].update(dataSubmit);

            case 6:
              res = _context3.sent;

              if (res.status == 200) {
                newDataSource = Object(D_MonaMedia_Project_CodingMentor_CodingMentor_FE_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(center);
                newDataSource.splice(indexRow, 1, dataSubmit);
                setCenter(newDataSource);
                showNoti('success', res.data.message);
              }

              _context3.next = 13;
              break;

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](3);
              showNoti('danger', _context3.t0.message);

            case 13:
              _context3.prev = 13;
              setIsLoading({
                type: 'ADD_DATA',
                status: false
              });
              return _context3.finish(13);

            case 16:
              _context3.next = 31;
              break;

            case 18:
              _context3.prev = 18;
              _context3.next = 21;
              return _apiBase__WEBPACK_IMPORTED_MODULE_9__["branchApi"].add(dataSubmit);

            case 21:
              res = _context3.sent;
              ((_res = res) === null || _res === void 0 ? void 0 : _res.status) == 200 && afterPost(res.data.message);
              _context3.next = 28;
              break;

            case 25:
              _context3.prev = 25;
              _context3.t1 = _context3["catch"](18);
              showNoti('danger', _context3.t1.message);

            case 28:
              _context3.prev = 28;
              setIsLoading({
                type: 'ADD_DATA',
                status: false
              });
              return _context3.finish(28);

            case 31:
              return _context3.abrupt("return", res);

            case 32:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[3, 10, 13, 16], [18, 25, 28, 31]]);
    }));

    return function _onSubmit(_x) {
      return _ref3.apply(this, arguments);
    };
  }(); // ----------------- TURN OF ------------------------


  var changeStatus = /*#__PURE__*/function () {
    var _ref4 = Object(D_MonaMedia_Project_CodingMentor_CodingMentor_FE_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/D_MonaMedia_Project_CodingMentor_CodingMentor_FE_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee4(checked, idRow) {
      var dataChange, res;
      return D_MonaMedia_Project_CodingMentor_CodingMentor_FE_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              setIsLoading({
                type: 'GET_ALL',
                status: true
              });
              dataChange = {
                ID: idRow,
                Enable: checked
              };
              _context4.prev = 2;
              _context4.next = 5;
              return _apiBase__WEBPACK_IMPORTED_MODULE_9__["branchApi"].update(dataChange);

            case 5:
              res = _context4.sent;
              res.status == 200 && setTodoApi(_objectSpread({}, todoApi));
              _context4.next = 12;
              break;

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](2);
              showNoti('danger', _context4.t0.Message);

            case 12:
              _context4.prev = 12;
              setIsLoading({
                type: 'GET_ALL',
                status: false
              });
              return _context4.finish(12);

            case 15:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[2, 9, 12, 15]]);
    }));

    return function changeStatus(_x2, _x3) {
      return _ref4.apply(this, arguments);
    };
  }(); // -------------- GET PAGE_NUMBER -----------------


  var _getPagination = function getPagination(pageNumber) {
    setCurrentPage(pageNumber);
    setTodoApi(_objectSpread(_objectSpread({}, todoApi), {}, {
      pageIndex: pageNumber
    }));
  }; // --------------- HANDLE SORT ----------------------


  var _handleSort = /*#__PURE__*/function () {
    var _ref5 = Object(D_MonaMedia_Project_CodingMentor_CodingMentor_FE_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/D_MonaMedia_Project_CodingMentor_CodingMentor_FE_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee5(option) {
      var newTodoApi;
      return D_MonaMedia_Project_CodingMentor_CodingMentor_FE_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              newTodoApi = _objectSpread(_objectSpread({}, listTodoApi), {}, {
                pageIndex: 1,
                sort: option.title.sort,
                sortType: option.title.sortType
              });
              setCurrentPage(1), setTodoApi(newTodoApi);

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function handleSort(_x4) {
      return _ref5.apply(this, arguments);
    };
  }(); // -------------- CHECK FIELD ---------------------


  var checkField = function checkField(valueSearch, dataIndex) {
    var newList = _objectSpread({}, listFieldSearch);

    Object.keys(newList).forEach(function (key) {
      if (key != dataIndex) {
        if (key != 'pageIndex') {
          newList[key] = null;
        }
      } else {
        newList[key] = valueSearch;
      }
    });
    return newList;
  }; // ------------ ON SEARCH -----------------------


  var onSearch = function onSearch(valueSearch, dataIndex) {
    var clearKey = checkField(valueSearch, dataIndex);
    setTodoApi(_objectSpread(_objectSpread({}, todoApi), clearKey));
  }; // HANDLE RESET


  var resetListFieldSearch = function resetListFieldSearch() {
    Object.keys(listFieldSearch).forEach(function (key) {
      if (key != 'pageIndex') {
        listFieldSearch[key] = null;
      }
    });
  };

  var handleReset = function handleReset() {
    setTodoApi(_objectSpread(_objectSpread({}, listTodoApi), {}, {
      pageIndex: 1
    }));
    setCurrentPage(1), resetListFieldSearch();
  }; // ============== USE EFFECT - FETCH DATA ===================


  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    getDataCenter();
  }, [todoApi]);
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    getAllArea();
  }, []);
  var columns = [_objectSpread({
    title: 'Mã trung tâm',
    width: 150,
    dataIndex: 'BranchCode'
  }, Object(_components_Tables_FilterColumn__WEBPACK_IMPORTED_MODULE_14__["default"])('branchCode', onSearch, handleReset, 'text')), _objectSpread({
    title: 'Tên trung tâm',
    dataIndex: 'BranchName',
    width: 150
  }, Object(_components_Tables_FilterColumn__WEBPACK_IMPORTED_MODULE_14__["default"])('branchName', onSearch, handleReset, 'text')), {
    title: 'Địa chỉ',
    width: 150,
    dataIndex: 'Address'
  }, {
    title: 'Số điện thoại',
    width: 150,
    dataIndex: 'Phone'
  }, {
    title: 'Email',
    dataIndex: 'Email'
  }, {
    title: 'Trạng thái',
    width: 100,
    dataIndex: 'Enable',
    render: function render(Enable, record) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Switch"], {
          checkedChildren: "Hi\u1EC7n",
          unCheckedChildren: "\u1EA8n",
          checked: Enable,
          size: "default",
          onChange: function onChange(checked) {
            return changeStatus(checked, record.ID);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 6
        }, _this)
      }, void 0, false);
    }
  }, {
    width: 100,
    render: function render(text, data, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: {
            pathname: '/option/center/rooms-detail/[slug]',
            query: {
              slug: "".concat(data.ID)
            }
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
            title: "D\u1EEF li\u1EC7u ph\xF2ng",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "btn btn-icon",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_8__["Eye"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 264,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 263,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 262,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
          title: "C\u1EADp nh\u1EADt trung t\xE2m",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Global_Option_CenterForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
            dataArea: dataArea,
            getIndex: function getIndex() {
              return setIndexRow(index);
            },
            index: index,
            branchId: data.ID,
            rowData: data,
            isLoading: isLoading,
            _onSubmit: function _onSubmit(data) {
              return _onSubmit2(data);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 269,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 6
        }, _this)]
      }, void 0, true);
    }
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PowerTable__WEBPACK_IMPORTED_MODULE_13__["default"], {
      currentPage: currentPage,
      totalPage: totalPage && totalPage,
      getPagination: function getPagination(pageNumber) {
        return _getPagination(pageNumber);
      },
      loading: isLoading,
      addClass: "basic-header",
      TitlePage: "Danh s\xE1ch trung t\xE2m" // TitleCard={<CenterForm dataArea={dataArea} isLoading={isLoading} _onSubmit={(data: any) => _onSubmit(data)} />}
      ,
      dataSource: center,
      columns: columns,
      Extra: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "extra-table",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Elements_SortBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
          handleSort: function handleSort(value) {
            return _handleSort(value);
          },
          dataOption: dataOption
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 7
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 6
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 285,
    columnNumber: 3
  }, _this);
};

_s(Center, "H/rfqFDusY1XZD4CwXGGAXJCXP0=", false, function () {
  return [_context_wrap__WEBPACK_IMPORTED_MODULE_15__["useWrap"]];
});

_c = Center;
Center.layout = _components_LayoutBase__WEBPACK_IMPORTED_MODULE_12__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Center);

var _c;

$RefreshReg$(_c, "Center");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL29wdGlvbi9jZW50ZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbImxpc3RGaWVsZFNlYXJjaCIsInBhZ2VJbmRleCIsImJyYW5jaENvZGUiLCJicmFuY2hOYW1lIiwiZGF0YU9wdGlvbiIsImRhdGFTb3J0Iiwic29ydCIsInNvcnRUeXBlIiwidGV4dCIsIkNlbnRlciIsInVzZVN0YXRlIiwiY2VudGVyIiwic2V0Q2VudGVyIiwidHlwZSIsInN0YXR1cyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInVzZVdyYXAiLCJzaG93Tm90aSIsInBhZ2VTaXplIiwidG90YWxQYWdlIiwic2V0VG90YWxQYWdlIiwiaW5kZXhSb3ciLCJzZXRJbmRleFJvdyIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJkYXRhQXJlYSIsInNldERhdGFBcmVhIiwibGlzdFRvZG9BcGkiLCJ0b2RvQXBpIiwic2V0VG9kb0FwaSIsImdldERhdGFDZW50ZXIiLCJicmFuY2hBcGkiLCJnZXRBbGwiLCJyZXMiLCJkYXRhIiwidG90YWxSb3ciLCJtZXNzYWdlIiwiZ2V0QWxsQXJlYSIsImFyZWFBcGkiLCJhZnRlclBvc3QiLCJtZXMiLCJfb25TdWJtaXQiLCJkYXRhU3VibWl0IiwiSUQiLCJ1cGRhdGUiLCJuZXdEYXRhU291cmNlIiwic3BsaWNlIiwiYWRkIiwiY2hhbmdlU3RhdHVzIiwiY2hlY2tlZCIsImlkUm93IiwiZGF0YUNoYW5nZSIsIkVuYWJsZSIsIk1lc3NhZ2UiLCJnZXRQYWdpbmF0aW9uIiwicGFnZU51bWJlciIsImhhbmRsZVNvcnQiLCJvcHRpb24iLCJuZXdUb2RvQXBpIiwidGl0bGUiLCJjaGVja0ZpZWxkIiwidmFsdWVTZWFyY2giLCJkYXRhSW5kZXgiLCJuZXdMaXN0IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJvblNlYXJjaCIsImNsZWFyS2V5IiwicmVzZXRMaXN0RmllbGRTZWFyY2giLCJoYW5kbGVSZXNldCIsInVzZUVmZmVjdCIsImNvbHVtbnMiLCJ3aWR0aCIsIkZpbHRlckNvbHVtbiIsInJlbmRlciIsInJlY29yZCIsImluZGV4IiwicGF0aG5hbWUiLCJxdWVyeSIsInNsdWciLCJ2YWx1ZSIsImxheW91dCIsIkxheW91dEJhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsZUFBZSxHQUFHO0FBQ3JCQyxXQUFTLEVBQUUsQ0FEVTtBQUVyQkMsWUFBVSxFQUFFLElBRlM7QUFHckJDLFlBQVUsRUFBRTtBQUhTLENBQXRCO0FBTUEsSUFBTUMsVUFBVSxHQUFHLENBQ2xCO0FBQ0NDLFVBQVEsRUFBRTtBQUNUQyxRQUFJLEVBQUUsQ0FERztBQUVUQyxZQUFRLEVBQUU7QUFGRCxHQURYO0FBS0NDLE1BQUksRUFBRTtBQUxQLENBRGtCLEVBUWxCO0FBQ0NILFVBQVEsRUFBRTtBQUNUQyxRQUFJLEVBQUUsQ0FERztBQUVUQyxZQUFRLEVBQUU7QUFGRCxHQURYO0FBS0NDLE1BQUksRUFBRTtBQUxQLENBUmtCLEVBZWxCO0FBQ0NILFVBQVEsRUFBRTtBQUNUQyxRQUFJLEVBQUUsQ0FERztBQUVUQyxZQUFRLEVBQUU7QUFGRCxHQURYO0FBS0NDLE1BQUksRUFBRTtBQUxQLENBZmtCLEVBc0JsQjtBQUNDSCxVQUFRLEVBQUU7QUFDVEMsUUFBSSxFQUFFLENBREc7QUFFVEMsWUFBUSxFQUFFO0FBRkQsR0FEWDtBQUtDQyxNQUFJLEVBQUU7QUFMUCxDQXRCa0IsQ0FBbkI7O0FBK0JBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxrQkFDUUMsc0RBQVEsQ0FBWSxFQUFaLENBRGhCO0FBQUEsTUFDYkMsTUFEYTtBQUFBLE1BQ0xDLFNBREs7O0FBQUEsbUJBRWNGLHNEQUFRLENBQUM7QUFBRUcs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LHVCQUFDb0MsVUFBRDtBQUFBLGVBQXdCRCxjQUFhLENBQUNDLFVBQUQsQ0FBckM7QUFBQSxPQUhoQjtBQUlDLGFBQU8sRUFBRXpDLFNBSlY7QUFLQyxjQUFRLEVBQUMsY0FMVjtBQU1DLGVBQVMsRUFBQywyQkFOWCxDQU9DO0FBUEQ7QUFRQyxnQkFBVSxFQUFFSixNQVJiO0FBU0MsYUFBTyxFQUFFK0QsT0FUVjtBQVVDLFdBQUssZUFDSjtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBLCtCQUNDLHFFQUFDLHFFQUFEO0FBQVMsb0JBQVUsRUFBRSxvQkFBQ1MsS0FBRDtBQUFBLG1CQUFXMUIsV0FBVSxDQUFDMEIsS0FBRCxDQUFyQjtBQUFBLFdBQXJCO0FBQW1ELG9CQUFVLEVBQUUvRTtBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFvQkEsQ0E5UEQ7O0dBQU1LLE07VUFHMEJRLHNEOzs7S0FIMUJSLE07QUErUE5BLE1BQU0sQ0FBQzJFLE1BQVAsR0FBZ0JDLCtEQUFoQjtBQUNlNUUscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvb3B0aW9uL2NlbnRlci5hNmY5ZDk2ZjE1MTM5OTE3ZjcwNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3dpdGNoLCBUb29sdGlwIH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRXllIH0gZnJvbSAncmVhY3QtZmVhdGhlcidcclxuaW1wb3J0IHsgYXJlYUFwaSwgYnJhbmNoQXBpIH0gZnJvbSAnfi9hcGlCYXNlJ1xyXG5pbXBvcnQgU29ydEJveCBmcm9tICd+L2NvbXBvbmVudHMvRWxlbWVudHMvU29ydEJveCdcclxuaW1wb3J0IENlbnRlckZvcm0gZnJvbSAnfi9jb21wb25lbnRzL0dsb2JhbC9PcHRpb24vQ2VudGVyRm9ybSdcclxuaW1wb3J0IExheW91dEJhc2UgZnJvbSAnfi9jb21wb25lbnRzL0xheW91dEJhc2UnXHJcbmltcG9ydCBQb3dlclRhYmxlIGZyb20gJ34vY29tcG9uZW50cy9Qb3dlclRhYmxlJ1xyXG5pbXBvcnQgRmlsdGVyQ29sdW1uIGZyb20gJ34vY29tcG9uZW50cy9UYWJsZXMvRmlsdGVyQ29sdW1uJ1xyXG5pbXBvcnQgeyB1c2VXcmFwIH0gZnJvbSAnfi9jb250ZXh0L3dyYXAnXHJcblxyXG5sZXQgbGlzdEZpZWxkU2VhcmNoID0ge1xyXG5cdHBhZ2VJbmRleDogMSxcclxuXHRicmFuY2hDb2RlOiBudWxsLFxyXG5cdGJyYW5jaE5hbWU6IG51bGxcclxufVxyXG5cclxuY29uc3QgZGF0YU9wdGlvbiA9IFtcclxuXHR7XHJcblx0XHRkYXRhU29ydDoge1xyXG5cdFx0XHRzb3J0OiAxLFxyXG5cdFx0XHRzb3J0VHlwZTogZmFsc2VcclxuXHRcdH0sXHJcblx0XHR0ZXh0OiAnTcOjIGdp4bqjbSBk4bqnbidcclxuXHR9LFxyXG5cdHtcclxuXHRcdGRhdGFTb3J0OiB7XHJcblx0XHRcdHNvcnQ6IDEsXHJcblx0XHRcdHNvcnRUeXBlOiB0cnVlXHJcblx0XHR9LFxyXG5cdFx0dGV4dDogJ03DoyB0xINuZyBk4bqnbidcclxuXHR9LFxyXG5cdHtcclxuXHRcdGRhdGFTb3J0OiB7XHJcblx0XHRcdHNvcnQ6IDIsXHJcblx0XHRcdHNvcnRUeXBlOiBmYWxzZVxyXG5cdFx0fSxcclxuXHRcdHRleHQ6ICdUw6puIGdp4bqjbSBk4bqnbidcclxuXHR9LFxyXG5cdHtcclxuXHRcdGRhdGFTb3J0OiB7XHJcblx0XHRcdHNvcnQ6IDIsXHJcblx0XHRcdHNvcnRUeXBlOiB0cnVlXHJcblx0XHR9LFxyXG5cdFx0dGV4dDogJ1TDqm4gdMSDbmcgZOG6p24gJ1xyXG5cdH1cclxuXVxyXG5cclxuY29uc3QgQ2VudGVyID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtjZW50ZXIsIHNldENlbnRlcl0gPSB1c2VTdGF0ZTxJQnJhbmNoW10+KFtdKVxyXG5cdGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh7IHR5cGU6ICcnLCBzdGF0dXM6IGZhbHNlIH0pXHJcblx0Y29uc3QgeyBzaG93Tm90aSwgcGFnZVNpemUgfSA9IHVzZVdyYXAoKVxyXG5cdGNvbnN0IFt0b3RhbFBhZ2UsIHNldFRvdGFsUGFnZV0gPSB1c2VTdGF0ZShudWxsKVxyXG5cdGNvbnN0IFtpbmRleFJvdywgc2V0SW5kZXhSb3ddID0gdXNlU3RhdGUobnVsbClcclxuXHRjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpXHJcblx0Y29uc3QgW2RhdGFBcmVhLCBzZXREYXRhQXJlYV0gPSB1c2VTdGF0ZTxJQXJlYVtdPihudWxsKVxyXG5cdGNvbnN0IGxpc3RUb2RvQXBpID0ge1xyXG5cdFx0cGFnZVNpemU6IHBhZ2VTaXplLFxyXG5cdFx0cGFnZUluZGV4OiBjdXJyZW50UGFnZSxcclxuXHRcdHNvcnQ6IG51bGwsXHJcblx0XHRzb3J0VHlwZTogbnVsbCxcclxuXHRcdGJyYW5jaENvZGU6IG51bGwsXHJcblx0XHRicmFuY2hOYW1lOiBudWxsXHJcblx0fVxyXG5cdGNvbnN0IFt0b2RvQXBpLCBzZXRUb2RvQXBpXSA9IHVzZVN0YXRlKGxpc3RUb2RvQXBpKVxyXG5cclxuXHQvLyAtLS0tLS0tLS0tLS0tLSBHRVQgREFUQSBDRU5URVIgLS0tLS0tLS0tLS0tLS0tLVxyXG5cdGNvbnN0IGdldERhdGFDZW50ZXIgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRzZXRJc0xvYWRpbmcoeyB0eXBlOiAnR0VUX0FMTCcsIHN0YXR1czogdHJ1ZSB9KVxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0bGV0IHJlcyA9IGF3YWl0IGJyYW5jaEFwaS5nZXRBbGwodG9kb0FwaSlcclxuXHRcdFx0cmVzLnN0YXR1cyA9PSAyMDAgJiYgKHNldENlbnRlcihyZXMuZGF0YS5kYXRhKSwgc2V0VG90YWxQYWdlKHJlcy5kYXRhLnRvdGFsUm93KSlcclxuXHRcdFx0cmVzLnN0YXR1cyA9PSAyMDQgJiYgc2hvd05vdGkoJ2RhbmdlcicsICdLaMO0bmcgY8OzIGThu68gbGnhu4d1JykgJiYgc2V0Q2VudGVyKFtdKVxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0c2hvd05vdGkoJ2RhbmdlcicsIGVycm9yLm1lc3NhZ2UpXHJcblx0XHR9IGZpbmFsbHkge1xyXG5cdFx0XHRzZXRJc0xvYWRpbmcoeyB0eXBlOiAnR0VUX0FMTCcsIHN0YXR1czogZmFsc2UgfSlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vR0VUIERBVEEgQVJFQVxyXG5cdGNvbnN0IGdldEFsbEFyZWEgPSAoKSA9PiB7XHJcblx0XHQ7IChhc3luYyAoKSA9PiB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgYXJlYUFwaS5nZXRBbGwoeyBwYWdlSW5kZXg6IDEsIHBhZ2VTaXplOiA5OTk5IH0pXHJcblx0XHRcdFx0cmVzLnN0YXR1cyA9PSAyMDAgJiYgc2V0RGF0YUFyZWEocmVzLmRhdGEuZGF0YSlcclxuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0c2hvd05vdGkoJ2RhbmdlcicsIGVycilcclxuXHRcdFx0fVxyXG5cdFx0fSkoKVxyXG5cdH1cclxuXHJcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLSBBRlRFUiBTVUJNSVQgLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRjb25zdCBhZnRlclBvc3QgPSAobWVzKSA9PiB7XHJcblx0XHRzaG93Tm90aSgnc3VjY2VzcycsIG1lcylcclxuXHRcdHNldFRvZG9BcGkoeyAuLi5saXN0VG9kb0FwaSwgcGFnZUluZGV4OiAxIH0pXHJcblx0XHRzZXRDdXJyZW50UGFnZSgxKVxyXG5cdH1cclxuXHJcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0gT04gU1VCTUlUIC0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Y29uc3QgX29uU3VibWl0ID0gYXN5bmMgKGRhdGFTdWJtaXQ6IGFueSkgPT4ge1xyXG5cdFx0c2V0SXNMb2FkaW5nKHsgdHlwZTogJ0FERF9EQVRBJywgc3RhdHVzOiB0cnVlIH0pXHJcblx0XHRsZXQgcmVzID0gbnVsbFxyXG5cdFx0aWYgKGRhdGFTdWJtaXQuSUQpIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRyZXMgPSBhd2FpdCBicmFuY2hBcGkudXBkYXRlKGRhdGFTdWJtaXQpXHJcblx0XHRcdFx0aWYgKHJlcy5zdGF0dXMgPT0gMjAwKSB7XHJcblx0XHRcdFx0XHRsZXQgbmV3RGF0YVNvdXJjZSA9IFsuLi5jZW50ZXJdXHJcblx0XHRcdFx0XHRuZXdEYXRhU291cmNlLnNwbGljZShpbmRleFJvdywgMSwgZGF0YVN1Ym1pdClcclxuXHRcdFx0XHRcdHNldENlbnRlcihuZXdEYXRhU291cmNlKVxyXG5cdFx0XHRcdFx0c2hvd05vdGkoJ3N1Y2Nlc3MnLCByZXMuZGF0YS5tZXNzYWdlKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0XHRzaG93Tm90aSgnZGFuZ2VyJywgZXJyb3IubWVzc2FnZSlcclxuXHRcdFx0fSBmaW5hbGx5IHtcclxuXHRcdFx0XHRzZXRJc0xvYWRpbmcoeyB0eXBlOiAnQUREX0RBVEEnLCBzdGF0dXM6IGZhbHNlIH0pXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0cmVzID0gYXdhaXQgYnJhbmNoQXBpLmFkZChkYXRhU3VibWl0KVxyXG5cdFx0XHRcdHJlcz8uc3RhdHVzID09IDIwMCAmJiBhZnRlclBvc3QocmVzLmRhdGEubWVzc2FnZSlcclxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0XHRzaG93Tm90aSgnZGFuZ2VyJywgZXJyb3IubWVzc2FnZSlcclxuXHRcdFx0fSBmaW5hbGx5IHtcclxuXHRcdFx0XHRzZXRJc0xvYWRpbmcoeyB0eXBlOiAnQUREX0RBVEEnLCBzdGF0dXM6IGZhbHNlIH0pXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcmVzXHJcblx0fVxyXG5cclxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLSBUVVJOIE9GIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdGNvbnN0IGNoYW5nZVN0YXR1cyA9IGFzeW5jIChjaGVja2VkOiBib29sZWFuLCBpZFJvdzogbnVtYmVyKSA9PiB7XHJcblx0XHRzZXRJc0xvYWRpbmcoeyB0eXBlOiAnR0VUX0FMTCcsIHN0YXR1czogdHJ1ZSB9KVxyXG5cdFx0bGV0IGRhdGFDaGFuZ2UgPSB7IElEOiBpZFJvdywgRW5hYmxlOiBjaGVja2VkIH1cclxuXHRcdHRyeSB7XHJcblx0XHRcdGxldCByZXMgPSBhd2FpdCBicmFuY2hBcGkudXBkYXRlKGRhdGFDaGFuZ2UpXHJcblx0XHRcdHJlcy5zdGF0dXMgPT0gMjAwICYmIHNldFRvZG9BcGkoeyAuLi50b2RvQXBpIH0pXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRzaG93Tm90aSgnZGFuZ2VyJywgZXJyb3IuTWVzc2FnZSlcclxuXHRcdH0gZmluYWxseSB7XHJcblx0XHRcdHNldElzTG9hZGluZyh7IHR5cGU6ICdHRVRfQUxMJywgc3RhdHVzOiBmYWxzZSB9KVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gLS0tLS0tLS0tLS0tLS0gR0VUIFBBR0VfTlVNQkVSIC0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Y29uc3QgZ2V0UGFnaW5hdGlvbiA9IChwYWdlTnVtYmVyOiBudW1iZXIpID0+IHtcclxuXHRcdHNldEN1cnJlbnRQYWdlKHBhZ2VOdW1iZXIpXHJcblx0XHRzZXRUb2RvQXBpKHsgLi4udG9kb0FwaSwgcGFnZUluZGV4OiBwYWdlTnVtYmVyIH0pXHJcblx0fVxyXG5cclxuXHQvLyAtLS0tLS0tLS0tLS0tLS0gSEFORExFIFNPUlQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdGNvbnN0IGhhbmRsZVNvcnQgPSBhc3luYyAob3B0aW9uKSA9PiB7XHJcblx0XHRsZXQgbmV3VG9kb0FwaSA9IHtcclxuXHRcdFx0Li4ubGlzdFRvZG9BcGksXHJcblx0XHRcdHBhZ2VJbmRleDogMSxcclxuXHRcdFx0c29ydDogb3B0aW9uLnRpdGxlLnNvcnQsXHJcblx0XHRcdHNvcnRUeXBlOiBvcHRpb24udGl0bGUuc29ydFR5cGVcclxuXHRcdH1cclxuXHRcdHNldEN1cnJlbnRQYWdlKDEpLCBzZXRUb2RvQXBpKG5ld1RvZG9BcGkpXHJcblx0fVxyXG5cclxuXHQvLyAtLS0tLS0tLS0tLS0tLSBDSEVDSyBGSUVMRCAtLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRjb25zdCBjaGVja0ZpZWxkID0gKHZhbHVlU2VhcmNoLCBkYXRhSW5kZXgpID0+IHtcclxuXHRcdGxldCBuZXdMaXN0ID0geyAuLi5saXN0RmllbGRTZWFyY2ggfVxyXG5cdFx0T2JqZWN0LmtleXMobmV3TGlzdCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcblx0XHRcdGlmIChrZXkgIT0gZGF0YUluZGV4KSB7XHJcblx0XHRcdFx0aWYgKGtleSAhPSAncGFnZUluZGV4Jykge1xyXG5cdFx0XHRcdFx0bmV3TGlzdFtrZXldID0gbnVsbFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRuZXdMaXN0W2tleV0gPSB2YWx1ZVNlYXJjaFxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cclxuXHRcdHJldHVybiBuZXdMaXN0XHJcblx0fVxyXG5cclxuXHQvLyAtLS0tLS0tLS0tLS0gT04gU0VBUkNIIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Y29uc3Qgb25TZWFyY2ggPSAodmFsdWVTZWFyY2gsIGRhdGFJbmRleCkgPT4ge1xyXG5cdFx0bGV0IGNsZWFyS2V5ID0gY2hlY2tGaWVsZCh2YWx1ZVNlYXJjaCwgZGF0YUluZGV4KVxyXG5cclxuXHRcdHNldFRvZG9BcGkoe1xyXG5cdFx0XHQuLi50b2RvQXBpLFxyXG5cdFx0XHQuLi5jbGVhcktleVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdC8vIEhBTkRMRSBSRVNFVFxyXG5cdGNvbnN0IHJlc2V0TGlzdEZpZWxkU2VhcmNoID0gKCkgPT4ge1xyXG5cdFx0T2JqZWN0LmtleXMobGlzdEZpZWxkU2VhcmNoKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuXHRcdFx0aWYgKGtleSAhPSAncGFnZUluZGV4Jykge1xyXG5cdFx0XHRcdGxpc3RGaWVsZFNlYXJjaFtrZXldID0gbnVsbFxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0Y29uc3QgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XHJcblx0XHRzZXRUb2RvQXBpKHsgLi4ubGlzdFRvZG9BcGksIHBhZ2VJbmRleDogMSB9KVxyXG5cdFx0c2V0Q3VycmVudFBhZ2UoMSksIHJlc2V0TGlzdEZpZWxkU2VhcmNoKClcclxuXHR9XHJcblxyXG5cdC8vID09PT09PT09PT09PT09IFVTRSBFRkZFQ1QgLSBGRVRDSCBEQVRBID09PT09PT09PT09PT09PT09PT1cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Z2V0RGF0YUNlbnRlcigpXHJcblx0fSwgW3RvZG9BcGldKVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Z2V0QWxsQXJlYSgpXHJcblx0fSwgW10pXHJcblxyXG5cdGNvbnN0IGNvbHVtbnMgPSBbXHJcblx0XHR7XHJcblx0XHRcdHRpdGxlOiAnTcOjIHRydW5nIHTDom0nLFxyXG5cdFx0XHR3aWR0aDogMTUwLFxyXG5cdFx0XHRkYXRhSW5kZXg6ICdCcmFuY2hDb2RlJyxcclxuXHRcdFx0Li4uRmlsdGVyQ29sdW1uKCdicmFuY2hDb2RlJywgb25TZWFyY2gsIGhhbmRsZVJlc2V0LCAndGV4dCcpXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHR0aXRsZTogJ1TDqm4gdHJ1bmcgdMOibScsXHJcblx0XHRcdGRhdGFJbmRleDogJ0JyYW5jaE5hbWUnLFxyXG5cdFx0XHR3aWR0aDogMTUwLFxyXG5cdFx0XHQuLi5GaWx0ZXJDb2x1bW4oJ2JyYW5jaE5hbWUnLCBvblNlYXJjaCwgaGFuZGxlUmVzZXQsICd0ZXh0JylcclxuXHRcdH0sXHJcblx0XHR7IHRpdGxlOiAnxJDhu4thIGNo4buJJywgd2lkdGg6IDE1MCwgZGF0YUluZGV4OiAnQWRkcmVzcycgfSxcclxuXHRcdHtcclxuXHRcdFx0dGl0bGU6ICdT4buRIMSRaeG7h24gdGhv4bqhaScsXHJcblx0XHRcdHdpZHRoOiAxNTAsXHJcblx0XHRcdGRhdGFJbmRleDogJ1Bob25lJ1xyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0dGl0bGU6ICdFbWFpbCcsXHJcblx0XHRcdGRhdGFJbmRleDogJ0VtYWlsJ1xyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0dGl0bGU6ICdUcuG6oW5nIHRow6FpJyxcclxuXHRcdFx0d2lkdGg6IDEwMCxcclxuXHRcdFx0ZGF0YUluZGV4OiAnRW5hYmxlJyxcclxuXHRcdFx0cmVuZGVyOiAoRW5hYmxlOiBib29sZWFuLCByZWNvcmQ6IGFueSkgPT4gKFxyXG5cdFx0XHRcdDw+XHJcblx0XHRcdFx0XHQ8U3dpdGNoXHJcblx0XHRcdFx0XHRcdGNoZWNrZWRDaGlsZHJlbj1cIkhp4buHblwiXHJcblx0XHRcdFx0XHRcdHVuQ2hlY2tlZENoaWxkcmVuPVwi4bqoblwiXHJcblx0XHRcdFx0XHRcdGNoZWNrZWQ9e0VuYWJsZX1cclxuXHRcdFx0XHRcdFx0c2l6ZT1cImRlZmF1bHRcIlxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGNoZWNrZWQpID0+IGNoYW5nZVN0YXR1cyhjaGVja2VkLCByZWNvcmQuSUQpfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8Lz5cclxuXHRcdFx0KVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0d2lkdGg6IDEwMCxcclxuXHRcdFx0cmVuZGVyOiAodGV4dDogc3RyaW5nLCBkYXRhOiBhbnksIGluZGV4OiBudW1iZXIpID0+IChcclxuXHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0PExpbmtcclxuXHRcdFx0XHRcdFx0aHJlZj17e1xyXG5cdFx0XHRcdFx0XHRcdHBhdGhuYW1lOiAnL29wdGlvbi9jZW50ZXIvcm9vbXMtZGV0YWlsL1tzbHVnXScsXHJcblx0XHRcdFx0XHRcdFx0cXVlcnk6IHsgc2x1ZzogYCR7ZGF0YS5JRH1gIH1cclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PFRvb2x0aXAgdGl0bGU9XCJE4buvIGxp4buHdSBwaMOybmdcIj5cclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taWNvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEV5ZSAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L1Rvb2x0aXA+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHQ8VG9vbHRpcCB0aXRsZT1cIkPhuq1wIG5o4bqtdCB0cnVuZyB0w6JtXCI+XHJcblx0XHRcdFx0XHRcdDxDZW50ZXJGb3JtXHJcblx0XHRcdFx0XHRcdFx0ZGF0YUFyZWE9e2RhdGFBcmVhfVxyXG5cdFx0XHRcdFx0XHRcdGdldEluZGV4PXsoKSA9PiBzZXRJbmRleFJvdyhpbmRleCl9XHJcblx0XHRcdFx0XHRcdFx0aW5kZXg9e2luZGV4fVxyXG5cdFx0XHRcdFx0XHRcdGJyYW5jaElkPXtkYXRhLklEfVxyXG5cdFx0XHRcdFx0XHRcdHJvd0RhdGE9e2RhdGF9XHJcblx0XHRcdFx0XHRcdFx0aXNMb2FkaW5nPXtpc0xvYWRpbmd9XHJcblx0XHRcdFx0XHRcdFx0X29uU3VibWl0PXsoZGF0YTogYW55KSA9PiBfb25TdWJtaXQoZGF0YSl9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L1Rvb2x0aXA+XHJcblx0XHRcdFx0PC8+XHJcblx0XHRcdClcclxuXHRcdH1cclxuXHRdXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8RnJhZ21lbnQ+XHJcblx0XHRcdDxQb3dlclRhYmxlXHJcblx0XHRcdFx0Y3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxyXG5cdFx0XHRcdHRvdGFsUGFnZT17dG90YWxQYWdlICYmIHRvdGFsUGFnZX1cclxuXHRcdFx0XHRnZXRQYWdpbmF0aW9uPXsocGFnZU51bWJlcjogbnVtYmVyKSA9PiBnZXRQYWdpbmF0aW9uKHBhZ2VOdW1iZXIpfVxyXG5cdFx0XHRcdGxvYWRpbmc9e2lzTG9hZGluZ31cclxuXHRcdFx0XHRhZGRDbGFzcz1cImJhc2ljLWhlYWRlclwiXHJcblx0XHRcdFx0VGl0bGVQYWdlPVwiRGFuaCBzw6FjaCB0cnVuZyB0w6JtXCJcclxuXHRcdFx0XHQvLyBUaXRsZUNhcmQ9ezxDZW50ZXJGb3JtIGRhdGFBcmVhPXtkYXRhQXJlYX0gaXNMb2FkaW5nPXtpc0xvYWRpbmd9IF9vblN1Ym1pdD17KGRhdGE6IGFueSkgPT4gX29uU3VibWl0KGRhdGEpfSAvPn1cclxuXHRcdFx0XHRkYXRhU291cmNlPXtjZW50ZXJ9XHJcblx0XHRcdFx0Y29sdW1ucz17Y29sdW1uc31cclxuXHRcdFx0XHRFeHRyYT17XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImV4dHJhLXRhYmxlXCI+XHJcblx0XHRcdFx0XHRcdDxTb3J0Qm94IGhhbmRsZVNvcnQ9eyh2YWx1ZSkgPT4gaGFuZGxlU29ydCh2YWx1ZSl9IGRhdGFPcHRpb249e2RhdGFPcHRpb259IC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHR9XHJcblx0XHRcdC8+XHJcblx0XHQ8L0ZyYWdtZW50PlxyXG5cdClcclxufVxyXG5DZW50ZXIubGF5b3V0ID0gTGF5b3V0QmFzZVxyXG5leHBvcnQgZGVmYXVsdCBDZW50ZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==