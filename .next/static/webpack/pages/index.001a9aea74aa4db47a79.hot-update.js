webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Global/NewsFeed/NewsFeedItemComponents/Comment.tsx":
/*!***************************************************************************!*\
  !*** ./src/components/Global/NewsFeed/NewsFeedItemComponents/Comment.tsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_MonaMedia_Project_CodingMentor_CodingMentor_FE_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/utils/functions */ "./src/utils/functions/index.tsx");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CommentForm */ "./src/components/Global/NewsFeed/NewsFeedItemComponents/CommentForm.tsx");
/* harmony import */ var _ReplyComment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ReplyComment */ "./src/components/Global/NewsFeed/NewsFeedItemComponents/ReplyComment.tsx");



var _jsxFileName = "D:\\MonaMedia\\Project\\CodingMentor\\CodingMentor-FE\\src\\components\\Global\\NewsFeed\\NewsFeedItemComponents\\Comment.tsx",
    _s = $RefreshSig$();







Comment.propTypes = {
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
    status: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired
  }),
  dataComment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    Avatar: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    ID: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    UserInformationID: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    FullNameUnicode: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    NewsFeedID: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    CommentContent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    isReply: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
  }),
  fetchReplyComment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  handleReplyComment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
Comment.defaultProps = {
  isLoading: {
    type: '',
    status: false
  },
  dataComment: {
    Avatar: '',
    ID: 0,
    UserInformationID: 0,
    FullNameUnicode: '',
    NewsFeedID: 0,
    CommentContent: '',
    isReply: false
  },
  fetchReplyComment: null,
  handleReplyComment: null
};

function Comment(props) {
  _s();

  var dataComment = props.dataComment,
      fetchReplyComment = props.fetchReplyComment,
      isLoading = props.isLoading,
      handleReplyComment = props.handleReplyComment;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      addCommentAction = _useState[0],
      setCommentAction = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      replyCommentList = _useState2[0],
      setReplyCommentList = _useState2[1];

  var handleCommentsAction = function handleCommentsAction() {
    setCommentAction(!addCommentAction);
  };

  var checkFetchReplyComment = function checkFetchReplyComment(ID) {
    if (!fetchReplyComment) return;
    fetchReplyComment(ID).then(function (res) {
      if ((res === null || res === void 0 ? void 0 : res.status) === 200) {
        setReplyCommentList(res.data.data);
      } else {
        setReplyCommentList([]);
      }
    });
  };

  var checkHandleReplyComment = function checkHandleReplyComment(data) {
    if (!handleReplyComment) return;
    return handleReplyComment(data).then(function (res) {
      if ((res === null || res === void 0 ? void 0 : res.status) === 200) {
        setReplyCommentList([].concat(Object(D_MonaMedia_Project_CodingMentor_CodingMentor_FE_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(replyCommentList), [res.data.data]));
        return true;
      } else {
        return false;
      }
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    className: "item-comment",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "info-current-user",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "avatar",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: dataComment.Avatar || '/images/user.png',
          alt: "avatar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "content-comment",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "box-comment",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "name-comment font-weight-black",
            children: dataComment.FullNameUnicode
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 7
          }, this), dataComment.CommentContent]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "a-reply",
          onClick: handleCommentsAction,
          children: "Ph\u1EA3n h\u1ED3i"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "time-comment",
          children: Object(_utils_functions__WEBPACK_IMPORTED_MODULE_5__["fmDateFromNow"])(dataComment.CreatedOn)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 6
        }, this), replyCommentList.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ReplyComment__WEBPACK_IMPORTED_MODULE_7__["default"], {
          replyCommentList: replyCommentList
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 38
        }, this), dataComment.isReply && !replyCommentList.length && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: dataComment.isReply && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            onClick: function onClick() {
              return checkFetchReplyComment(dataComment.ID);
            },
            children: "Xem c\xE1c ph\u1EA3n h\u1ED3i"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 36
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 7
        }, this), addCommentAction && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
          isReplay: true,
          newsFeedCommentID: dataComment.ID,
          handleComment: checkHandleReplyComment
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 7
        }, this), !replyCommentList.length && dataComment.isReply && isLoading.type === "FETCH_REPLY_COMMENT_".concat(dataComment.ID) && isLoading.status && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "text-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Spin"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 8
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 3
  }, this);
}

_s(Comment, "JRJlzbe5ALdjlQ2v66b0ifA8+vM=");

_c = Comment;
/* harmony default export */ __webpack_exports__["default"] = (Comment);

var _c;

$RefreshReg$(_c, "Comment");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Global/NewsFeed/NewsFeedItemComponents/CommentForm.tsx":
/*!*******************************************************************************!*\
  !*** ./src/components/Global/NewsFeed/NewsFeedItemComponents/CommentForm.tsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_MonaMedia_Project_CodingMentor_CodingMentor_FE_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hookform/resolvers/yup */ "./node_modules/@hookform/resolvers/yup/dist/yup.module.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _components_FormControl_InputTextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/components/FormControl/InputTextField */ "./src/components/FormControl/InputTextField/index.tsx");



var _jsxFileName = "D:\\MonaMedia\\Project\\CodingMentor\\CodingMentor-FE\\src\\components\\Global\\NewsFeed\\NewsFeedItemComponents\\CommentForm.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_MonaMedia_Project_CodingMentor_CodingMentor_FE_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








CommentForm.propTypes = {
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    type: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
    status: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired
  }),
  handleComment: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  userComment: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  newsFeedID: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  newsFeedCommentID: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  isReplay: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};
CommentForm.defaultProps = {
  isLoading: {
    type: '',
    status: false
  },
  handleComment: null,
  userComment: {},
  newsFeedID: 0,
  newsFeedCommentID: 0,
  isReply: false
};

function CommentForm(props) {
  _s();

  var isLoading = props.isLoading,
      dataUser = props.dataUser,
      handleComment = props.handleComment,
      newsFeedID = props.newsFeedID,
      isReplay = props.isReplay,
      newsFeedCommentID = props.newsFeedCommentID;
  var schema = yup__WEBPACK_IMPORTED_MODULE_7__["object"]().shape({
    CommentContent: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required('Bạn không được bỏ trống')
  });
  var defaultValuesInit = {
    CommentContent: ''
  };
  var form = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useForm"])({
    defaultValues: defaultValuesInit,
    resolver: Object(_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__["yupResolver"])(schema)
  });

  var checkHandleComment = function checkHandleComment(data) {
    if (!handleComment) return;
    var newData = isReplay ? {
      ReplyContent: data.CommentContent,
      NewsFeedCommentID: newsFeedCommentID
    } : _objectSpread(_objectSpread({}, data), {}, {
      NewsFeedID: newsFeedID
    });
    handleComment(newData).then(function (res) {
      return res && form.reset(_objectSpread({}, defaultValuesInit));
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "info-current-user user-comment",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "avatar",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: (dataUser === null || dataUser === void 0 ? void 0 : dataUser.Avatar) || '/images/user.png',
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "input-comments",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
        layout: "vertical",
        onFinish: form.handleSubmit(checkHandleComment),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_FormControl_InputTextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
          form: form,
          name: "CommentContent",
          allowClear: false
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "input-btn btn",
          disabled: isLoading.type === 'ADD_COMMENT' && isLoading.status,
          children: "G\u1EEDi"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 3
  }, this);
}

_s(CommentForm, "woqMTX6igxsX6/9vX4dQZlxR7yY=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_6__["useForm"]];
});

_c = CommentForm;
/* harmony default export */ __webpack_exports__["default"] = (CommentForm);

var _c;

$RefreshReg$(_c, "CommentForm");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Global/NewsFeed/NewsFeedItemComponents/NewsFeedItem.tsx":
/*!********************************************************************************!*\
  !*** ./src/components/Global/NewsFeed/NewsFeedItemComponents/NewsFeedItem.tsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_MonaMedia_Project_CodingMentor_CodingMentor_FE_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/utils/functions */ "./src/utils/functions/index.tsx");
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Comment */ "./src/components/Global/NewsFeed/NewsFeedItemComponents/Comment.tsx");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CommentForm */ "./src/components/Global/NewsFeed/NewsFeedItemComponents/CommentForm.tsx");
/* harmony import */ var react_linkify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-linkify */ "./node_modules/react-linkify/dist/index.js");
/* harmony import */ var react_linkify__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_linkify__WEBPACK_IMPORTED_MODULE_9__);



var _jsxFileName = "D:\\MonaMedia\\Project\\CodingMentor\\CodingMentor-FE\\src\\components\\Global\\NewsFeed\\NewsFeedItemComponents\\NewsFeedItem.tsx",
    _s = $RefreshSig$();









NewsFeedItem.propTypes = {
  // FILTER SEARCH HANDLE
  handleFilters: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  // LIKE HANDLE
  isUserLiked: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  handleUserLikeNewsFeed: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  // COMMENT HANDLE
  handleComment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  fetchComment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  // REPLY HANDLE
  handleReplyComment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  fetchReplyComment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  // INFORMATION
  item: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    ID: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    UserInformationID: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    FullNameUnicode: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    Avatar: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    RoleID: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    RoleName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    GroupNewsFeedID: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    GroupNewsFeedName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    Content: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    TypeFile: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    isComment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
    CommentCount: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    isLike: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
    LikeCount: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    NewsFeedFile: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
      ID: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
      NameFile: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
      Type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
      TypeName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
      UID: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
      Thumnail: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
    })),
    NewsFeedBranch: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
      ID: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
      BranchID: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
      BranchName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
    }))
  }),
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
    status: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired
  }),
  userComment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  //COMPONENT
  moreActionComponent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element
};
NewsFeedItem.defaultProps = {
  // FILTER SEARCH HANDLE
  handleFilters: null,
  // LIKE HANDLE
  isUserLiked: false,
  handleUserLikeNewsFeed: null,
  // COMMENT HANDLE
  handleComment: null,
  fetchComment: null,
  // REPLY HANDLE
  handleReplyComment: null,
  fetchReplyComment: null,
  // INFORMATION
  item: {
    ID: 0,
    UserInformationID: 0,
    FullNameUnicode: '',
    Avatar: '',
    RoleID: 0,
    RoleName: '',
    GroupNewsFeedID: 0,
    GroupNewsFeedName: '',
    Content: '',
    TypeFile: 0,
    isComment: false,
    CommentCount: 0,
    isLike: false,
    LikeCount: 0,
    NewsFeedFile: [],
    NewsFeedBranch: []
  },
  isLoading: {
    type: '',
    status: false
  },
  userComment: {},
  //COMPONENT
  moreActionComponent: null
};

function NewsFeedItem(props) {
  _s();

  var _this = this;

  var handleFilters = props.handleFilters,
      isUserLiked = props.isUserLiked,
      handleUserLikeNewsFeed = props.handleUserLikeNewsFeed,
      handleComment = props.handleComment,
      fetchComment = props.fetchComment,
      handleReplyComment = props.handleReplyComment,
      fetchReplyComment = props.fetchReplyComment,
      item = props.item,
      isLoading = props.isLoading,
      userComment = props.userComment,
      moreActionComponent = props.moreActionComponent;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      showComments = _useState[0],
      setShowComments = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      commentList = _useState2[0],
      setCommentList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      visible = _useState3[0],
      setVisible = _useState3[1];

  var handleShowComments = function handleShowComments() {
    setShowComments(!showComments);
  }; // FILTER AND SORT


  var checkHandleFilters = function checkHandleFilters(field, value) {
    if (!handleFilters) return;
    return function () {
      return handleFilters(field, value);
    };
  }; // LIKE


  var checkHandleUserLikeNewsFeed = function checkHandleUserLikeNewsFeed(ID) {
    if (!handleUserLikeNewsFeed) return;
    handleUserLikeNewsFeed(ID);
  }; // COMMENT


  var checkHandleComment = function checkHandleComment(data) {
    if (!handleComment) return;
    return handleComment(data).then(function (res) {
      if ((res === null || res === void 0 ? void 0 : res.status) === 200) {
        setCommentList([res.data.data].concat(Object(D_MonaMedia_Project_CodingMentor_CodingMentor_FE_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(commentList)));
        return true;
      } else {
        return false;
      }
    });
  };

  var checkFetchComment = function checkFetchComment(ID) {
    if (!fetchComment) return;

    if (!showComments) {
      fetchComment(ID).then(function (res) {
        if ((res === null || res === void 0 ? void 0 : res.status) === 200) {
          setCommentList(res.data.data);
        } else {
          setCommentList([]);
        }
      });
    }
  }; // IMAGES LIST


  var checkUIImageList = function checkUIImageList(imageList) {
    var length = imageList.length;

    if (length >= 3) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "more-than-3-images",
        children: [imageList.slice(0, 2).map(function (item, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Image"], {
            src: item.NameFile,
            preview: false,
            width: '50%',
            onClick: function onClick() {
              return setVisible(true);
            }
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 7
          }, _this);
        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "preview-total",
          onClick: function onClick() {
            return setVisible(true);
          },
          children: ["+ ", imageList.length - 2]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 5
      }, _this);
    }

    if (length >= 2) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "two-images",
        children: imageList.map(function (item, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Image"], {
            src: item.NameFile,
            preview: false,
            width: '50%',
            onClick: function onClick() {
              return setVisible(true);
            }
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 7
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 5
      }, _this);
    }

    if (length >= 1) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "one-image",
        children: imageList.map(function (item, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Image"], {
            src: item.NameFile,
            preview: false,
            width: '100%',
            onClick: function onClick() {
              return setVisible(true);
            }
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 7
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 5
      }, _this);
    }
  };

  var renderImageList = function renderImageList() {
    var imageList = item.NewsFeedFile.filter(function (item) {
      return item.Type === 2;
    });

    if (imageList.length > 0) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "newsfeed-images",
        children: [checkUIImageList(imageList), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            display: 'none'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Image"].PreviewGroup, {
            preview: {
              visible: visible,
              onVisibleChange: function onVisibleChange(vis) {
                return setVisible(vis);
              }
            },
            children: imageList.map(function (item, index) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Image"], {
                src: item.NameFile
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 211,
                columnNumber: 9
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 5
      }, _this);
    }
  }; // AUDIO LIST


  var renderAudioList = function renderAudioList() {
    var audioList = item.NewsFeedFile.filter(function (item) {
      return item.Type === 3;
    });

    if (audioList.length > 0) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "newsfeed-audio",
        children: audioList.map(function (item, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("audio", {
            className: "audio-tag",
            controls: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("source", {
              src: item.NameFile,
              type: "audio/ogg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("source", {
              src: item.NameFile,
              type: "audio/mpeg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 228,
              columnNumber: 8
            }, _this), "Your browser does not support the audio element."]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 7
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 5
      }, _this);
    }
  }; // VIDEO LIST


  var renderVideoList = function renderVideoList() {
    var videoList = item.NewsFeedFile.filter(function (item) {
      return item.Type === 4;
    });

    if (videoList.length > 0) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "newsfeed-video",
        children: videoList.map(function (item, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("video", {
            className: "video-tag",
            controls: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("source", {
              src: item.NameFile,
              type: "video/mp4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 244,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("source", {
              src: item.NameFile,
              type: "video/ogg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 245,
              columnNumber: 8
            }, _this), "Your browser does not support the video tag."]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 243,
            columnNumber: 7
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 5
      }, _this);
    }
  }; // LIGHT BOX


  var renderNewsFeedBackground = function renderNewsFeedBackground() {
    var isNewsFeedBackground = item.TypeFile === 1;

    if (isNewsFeedBackground && item.NewsFeedFile.length === 1) {
      var backgroundFile = item.NewsFeedFile[0];
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "newsfeed-background",
        style: {
          color: item.Color,
          backgroundImage: "url(".concat(backgroundFile.NameFile, ")")
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_linkify__WEBPACK_IMPORTED_MODULE_9___default.a, {
          componentDecorator: function componentDecorator(decoratedHref, decoratedText, key) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              target: "blank",
              href: decoratedHref,
              children: decoratedText
            }, key, false, {
              fileName: _jsxFileName,
              lineNumber: 268,
              columnNumber: 8
            }, _this);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: item.Content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 273,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 5
      }, _this);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    className: "item-nf",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "newsfeed",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "newsfeed-header",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "info-current-user",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "avatar",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: item.Avatar || '/images/user.png',
              alt: "avatar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 285,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 284,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "name-user",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "name",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                onClick: checkHandleFilters('name', item.FullNameUnicode),
                children: item.FullNameUnicode
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 289,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "share-point",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_5__["Navigation"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 291,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 290,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                children: item.NewsFeedBranch.map(function (item, idx) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "item-branch",
                    children: item.BranchName
                  }, idx, false, {
                    fileName: _jsxFileName,
                    lineNumber: 296,
                    columnNumber: 11
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 294,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 288,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "newsfeed-time",
              children: Object(_utils_functions__WEBPACK_IMPORTED_MODULE_6__["fmDateFromNow"])(item.CreatedOn)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 302,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 287,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "newsfeed-more",
          children: moreActionComponent && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
            zIndex: 999,
            content: moreActionComponent,
            placement: "bottomRight",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "btn-more",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_5__["MoreHorizontal"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 309,
                columnNumber: 10
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 308,
              columnNumber: 9
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 307,
            columnNumber: 8
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 5
      }, this), item.Content && item.TypeFile !== 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "newsfeed-content",
        style: {
          color: item.Color
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_linkify__WEBPACK_IMPORTED_MODULE_9___default.a, {
          componentDecorator: function componentDecorator(decoratedHref, decoratedText, key) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              target: "blank",
              href: decoratedHref,
              style: {
                fontWeight: 500
              },
              children: decoratedText
            }, key, false, {
              fileName: _jsxFileName,
              lineNumber: 324,
              columnNumber: 9
            }, _this);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: item.Content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 329,
            columnNumber: 8
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 322,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 6
      }, this), renderImageList(), renderVideoList(), renderAudioList(), renderNewsFeedBackground(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "newsfeed-total",
        children: [item.LikeCount > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_5__["ThumbsUp"], {
            color: "#0571e5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 341,
            columnNumber: 8
          }, this), " ", item.LikeCount]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 340,
          columnNumber: 7
        }, this), (commentList.length > 0 || item.CommentCount > 0) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "total-comments",
          onClick: function onClick() {
            checkFetchComment(item.ID);
            handleShowComments();
          },
          children: [commentList.length || item.CommentCount, " B\xECnh lu\u1EADn"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 345,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "newsfeed-action",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "action w-100",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: isUserLiked ? 'btn btn-light active' : 'btn btn-light',
            onClick: function onClick() {
              return checkHandleUserLikeNewsFeed(item.ID);
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_5__["ThumbsUp"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 359,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "ml-2",
              children: "Th\xEDch"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 360,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 358,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 357,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "action",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "btn btn-light",
            onClick: function onClick() {
              checkFetchComment(item.ID);
              handleShowComments();
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_5__["MessageCircle"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 371,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "B\xECnh lu\u1EADn"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 372,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 364,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 363,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: showComments ? 'newsfeed-comments' : 'hide',
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
          isLoading: isLoading,
          userComment: userComment,
          handleComment: checkHandleComment,
          newsFeedID: item.ID
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 377,
          columnNumber: 6
        }, this), commentList.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: "list-comments",
          children: commentList.map(function (cmt, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Comment__WEBPACK_IMPORTED_MODULE_7__["default"], {
              isLoading: isLoading,
              dataComment: cmt,
              fetchReplyComment: fetchReplyComment,
              handleReplyComment: handleReplyComment
            }, cmt.ID, false, {
              fileName: _jsxFileName,
              lineNumber: 381,
              columnNumber: 9
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 379,
          columnNumber: 7
        }, this), !commentList.length && isLoading.type === "FETCH_COMMENT_".concat(item.ID) && isLoading.status && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "text-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Spin"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 393,
            columnNumber: 8
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 392,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 376,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 280,
    columnNumber: 3
  }, this);
}

_s(NewsFeedItem, "VZLNsGCAzrrFy9oZPagqJmPRPnc=");

_c = NewsFeedItem;
/* harmony default export */ __webpack_exports__["default"] = (NewsFeedItem);

var _c;

$RefreshReg$(_c, "NewsFeedItem");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Global/NewsFeed/NewsFeedItemComponents/ReplyComment.tsx":
/*!********************************************************************************!*\
  !*** ./src/components/Global/NewsFeed/NewsFeedItemComponents/ReplyComment.tsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/utils/functions */ "./src/utils/functions/index.tsx");

var _jsxFileName = "D:\\MonaMedia\\Project\\CodingMentor\\CodingMentor-FE\\src\\components\\Global\\NewsFeed\\NewsFeedItemComponents\\ReplyComment.tsx";



ReplyComment.propTypes = {
  replyCommentList: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    ID: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    NewsFeedCommentID: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    UserInformationID: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    FullNameUnicode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    ReplyContent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    Avatar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })
};
ReplyComment.defaultProps = {
  replyCommentList: {
    ID: 0,
    NewsFeedCommentID: 0,
    UserInformationID: 0,
    FullNameUnicode: '',
    ReplyContent: '',
    Avatar: ''
  }
};

function ReplyComment(props) {
  var _this = this;

  var replyCommentList = props.replyCommentList;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    className: "list-comments",
    children: replyCommentList.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: "item-comment",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "info-current-user",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "avatar",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: item.Avatar || '/images/user.png',
              alt: "avatar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "content-comment reply",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "box-comment",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "name-comment font-weight-black",
                children: item.FullNameUnicode
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 9
              }, _this), item.ReplyContent]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "time-comment",
              children: Object(_utils_functions__WEBPACK_IMPORTED_MODULE_3__["fmDateFromNow"])(item.CreatedOn)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 6
        }, _this)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 3
  }, this);
}

_c = ReplyComment;
/* harmony default export */ __webpack_exports__["default"] = (ReplyComment);

var _c;

$RefreshReg$(_c, "ReplyComment");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvR2xvYmFsL05ld3NGZWVkL05ld3NGZWVkSXRlbUNvbXBvbmVudHMvQ29tbWVudC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0dsb2JhbC9OZXdzRmVlZC9OZXdzRmVlZEl0ZW1Db21wb25lbnRzL0NvbW1lbnRGb3JtLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvR2xvYmFsL05ld3NGZWVkL05ld3NGZWVkSXRlbUNvbXBvbmVudHMvTmV3c0ZlZWRJdGVtLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvR2xvYmFsL05ld3NGZWVkL05ld3NGZWVkSXRlbUNvbXBvbmVudHMvUmVwbHlDb21tZW50LnRzeCJdLCJuYW1lcyI6WyJDb21tZW50IiwicHJvcFR5cGVzIiwiaXNMb2FkaW5nIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJ0eXBlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsInN0YXR1cyIsImJvb2wiLCJkYXRhQ29tbWVudCIsIkF2YXRhciIsIklEIiwibnVtYmVyIiwiVXNlckluZm9ybWF0aW9uSUQiLCJGdWxsTmFtZVVuaWNvZGUiLCJOZXdzRmVlZElEIiwiQ29tbWVudENvbnRlbnQiLCJpc1JlcGx5IiwiZmV0Y2hSZXBseUNvbW1lbnQiLCJmdW5jIiwiaGFuZGxlUmVwbHlDb21tZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImFkZENvbW1lbnRBY3Rpb24iLCJzZXRDb21tZW50QWN0aW9uIiwicmVwbHlDb21tZW50TGlzdCIsInNldFJlcGx5Q29tbWVudExpc3QiLCJoYW5kbGVDb21tZW50c0FjdGlvbiIsImNoZWNrRmV0Y2hSZXBseUNvbW1lbnQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNoZWNrSGFuZGxlUmVwbHlDb21tZW50IiwiZm1EYXRlRnJvbU5vdyIsIkNyZWF0ZWRPbiIsImxlbmd0aCIsIkNvbW1lbnRGb3JtIiwiaGFuZGxlQ29tbWVudCIsInVzZXJDb21tZW50Iiwib2JqZWN0IiwibmV3c0ZlZWRJRCIsIm5ld3NGZWVkQ29tbWVudElEIiwiaXNSZXBsYXkiLCJkYXRhVXNlciIsInNjaGVtYSIsInl1cCIsInJlcXVpcmVkIiwiZGVmYXVsdFZhbHVlc0luaXQiLCJmb3JtIiwidXNlRm9ybSIsImRlZmF1bHRWYWx1ZXMiLCJyZXNvbHZlciIsInl1cFJlc29sdmVyIiwiY2hlY2tIYW5kbGVDb21tZW50IiwibmV3RGF0YSIsIlJlcGx5Q29udGVudCIsIk5ld3NGZWVkQ29tbWVudElEIiwicmVzZXQiLCJoYW5kbGVTdWJtaXQiLCJOZXdzRmVlZEl0ZW0iLCJoYW5kbGVGaWx0ZXJzIiwiaXNVc2VyTGlrZWQiLCJoYW5kbGVVc2VyTGlrZU5ld3NGZWVkIiwiZmV0Y2hDb21tZW50IiwiaXRlbSIsIlJvbGVJRCIsIlJvbGVOYW1lIiwiR3JvdXBOZXdzRmVlZElEIiwiR3JvdXBOZXdzRmVlZE5hbWUiLCJDb250ZW50IiwiVHlwZUZpbGUiLCJpc0NvbW1lbnQiLCJDb21tZW50Q291bnQiLCJpc0xpa2UiLCJMaWtlQ291bnQiLCJOZXdzRmVlZEZpbGUiLCJhcnJheU9mIiwiTmFtZUZpbGUiLCJUeXBlIiwiVHlwZU5hbWUiLCJVSUQiLCJUaHVtbmFpbCIsIk5ld3NGZWVkQnJhbmNoIiwiQnJhbmNoSUQiLCJCcmFuY2hOYW1lIiwibW9yZUFjdGlvbkNvbXBvbmVudCIsImVsZW1lbnQiLCJzaG93Q29tbWVudHMiLCJzZXRTaG93Q29tbWVudHMiLCJjb21tZW50TGlzdCIsInNldENvbW1lbnRMaXN0IiwidmlzaWJsZSIsInNldFZpc2libGUiLCJoYW5kbGVTaG93Q29tbWVudHMiLCJjaGVja0hhbmRsZUZpbHRlcnMiLCJmaWVsZCIsInZhbHVlIiwiY2hlY2tIYW5kbGVVc2VyTGlrZU5ld3NGZWVkIiwiY2hlY2tGZXRjaENvbW1lbnQiLCJjaGVja1VJSW1hZ2VMaXN0IiwiaW1hZ2VMaXN0Iiwic2xpY2UiLCJtYXAiLCJpbmRleCIsInJlbmRlckltYWdlTGlzdCIsImZpbHRlciIsImRpc3BsYXkiLCJvblZpc2libGVDaGFuZ2UiLCJ2aXMiLCJyZW5kZXJBdWRpb0xpc3QiLCJhdWRpb0xpc3QiLCJyZW5kZXJWaWRlb0xpc3QiLCJ2aWRlb0xpc3QiLCJyZW5kZXJOZXdzRmVlZEJhY2tncm91bmQiLCJpc05ld3NGZWVkQmFja2dyb3VuZCIsImJhY2tncm91bmRGaWxlIiwiY29sb3IiLCJDb2xvciIsImJhY2tncm91bmRJbWFnZSIsImRlY29yYXRlZEhyZWYiLCJkZWNvcmF0ZWRUZXh0Iiwia2V5IiwiaWR4IiwiZm9udFdlaWdodCIsImNtdCIsIlJlcGx5Q29tbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxPQUFPLENBQUNDLFNBQVIsR0FBb0I7QUFDbkJDLFdBQVMsRUFBRUMsaURBQVMsQ0FBQ0MsS0FBVixDQUFnQjtBQUMxQkMsUUFBSSxFQUFFRixpREFBUyxDQUFDRyxNQUFWLENBQWlCQyxVQURHO0FBRTFCQyxVQUFNLEVBQUVMLGlEQUFTLENBQUNNLElBQVYsQ0FBZUY7QUFGRyxHQUFoQixDQURRO0FBS25CRyxhQUFXLEVBQUVQLGlEQUFTLENBQUNDLEtBQVYsQ0FBZ0I7QUFDNUJPLFVBQU0sRUFBRVIsaURBQVMsQ0FBQ0csTUFEVTtBQUU1Qk0sTUFBRSxFQUFFVCxpREFBUyxDQUFDVSxNQUZjO0FBRzVCQyxxQkFBaUIsRUFBRVgsaURBQVMsQ0FBQ1UsTUFIRDtBQUk1QkUsbUJBQWUsRUFBRVosaURBQVMsQ0FBQ0csTUFKQztBQUs1QlUsY0FBVSxFQUFFYixpREFBUyxDQUFDVSxNQUxNO0FBTTVCSSxrQkFBYyxFQUFFZCxpREFBUyxDQUFDRyxNQU5FO0FBTzVCWSxXQUFPLEVBQUVmLGlEQUFTLENBQUNNO0FBUFMsR0FBaEIsQ0FMTTtBQWNuQlUsbUJBQWlCLEVBQUVoQixpREFBUyxDQUFDaUIsSUFkVjtBQWVuQkMsb0JBQWtCLEVBQUVsQixpREFBUyxDQUFDaUI7QUFmWCxDQUFwQjtBQWlCQXBCLE9BQU8sQ0FBQ3NCLFlBQVIsR0FBdUI7QUFDdEJwQixXQUFTLEVBQUU7QUFBRUcsUUFBSSxFQUFFLEVBQVI7QUFBWUcsVUFBTSxFQUFFO0FBQXBCLEdBRFc7QUFFdEJFLGFBQVcsRUFBRTtBQUNaQyxVQUFNLEVBQUUsRUFESTtBQUVaQyxNQUFFLEVBQUUsQ0FGUTtBQUdaRSxxQkFBaUIsRUFBRSxDQUhQO0FBSVpDLG1CQUFlLEVBQUUsRUFKTDtBQUtaQyxjQUFVLEVBQUUsQ0FMQTtBQU1aQyxrQkFBYyxFQUFFLEVBTko7QUFPWkMsV0FBTyxFQUFFO0FBUEcsR0FGUztBQVd0QkMsbUJBQWlCLEVBQUUsSUFYRztBQVl0QkUsb0JBQWtCLEVBQUU7QUFaRSxDQUF2Qjs7QUFlQSxTQUFTckIsT0FBVCxDQUFpQnVCLEtBQWpCLEVBQXdCO0FBQUE7O0FBQUEsTUFDZmIsV0FEZSxHQUNtRGEsS0FEbkQsQ0FDZmIsV0FEZTtBQUFBLE1BQ0ZTLGlCQURFLEdBQ21ESSxLQURuRCxDQUNGSixpQkFERTtBQUFBLE1BQ2lCakIsU0FEakIsR0FDbURxQixLQURuRCxDQUNpQnJCLFNBRGpCO0FBQUEsTUFDNEJtQixrQkFENUIsR0FDbURFLEtBRG5ELENBQzRCRixrQkFENUI7O0FBQUEsa0JBRXNCRyxzREFBUSxDQUFDLEtBQUQsQ0FGOUI7QUFBQSxNQUVoQkMsZ0JBRmdCO0FBQUEsTUFFRUMsZ0JBRkY7O0FBQUEsbUJBR3lCRixzREFBUSxDQUEwQixFQUExQixDQUhqQztBQUFBLE1BR2hCRyxnQkFIZ0I7QUFBQSxNQUdFQyxtQkFIRjs7QUFLdkIsTUFBTUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixHQUFNO0FBQ2xDSCxvQkFBZ0IsQ0FBQyxDQUFDRCxnQkFBRixDQUFoQjtBQUNBLEdBRkQ7O0FBSUEsTUFBTUssc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixDQUFDbEIsRUFBRCxFQUFnQjtBQUM5QyxRQUFJLENBQUNPLGlCQUFMLEVBQXdCO0FBQ3hCQSxxQkFBaUIsQ0FBQ1AsRUFBRCxDQUFqQixDQUFzQm1CLElBQXRCLENBQTJCLFVBQUNDLEdBQUQsRUFBUztBQUNuQyxVQUFJLENBQUFBLEdBQUcsU0FBSCxJQUFBQSxHQUFHLFdBQUgsWUFBQUEsR0FBRyxDQUFFeEIsTUFBTCxNQUFnQixHQUFwQixFQUF5QjtBQUN4Qm9CLDJCQUFtQixDQUFDSSxHQUFHLENBQUNDLElBQUosQ0FBU0EsSUFBVixDQUFuQjtBQUNBLE9BRkQsTUFFTztBQUNOTCwyQkFBbUIsQ0FBQyxFQUFELENBQW5CO0FBQ0E7QUFDRCxLQU5EO0FBT0EsR0FURDs7QUFVQSxNQUFNTSx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQUNELElBQUQsRUFBVTtBQUN6QyxRQUFJLENBQUNaLGtCQUFMLEVBQXlCO0FBQ3pCLFdBQU9BLGtCQUFrQixDQUFDWSxJQUFELENBQWxCLENBQXlCRixJQUF6QixDQUE4QixVQUFDQyxHQUFELEVBQVM7QUFDN0MsVUFBSSxDQUFBQSxHQUFHLFNBQUgsSUFBQUEsR0FBRyxXQUFILFlBQUFBLEdBQUcsQ0FBRXhCLE1BQUwsTUFBZ0IsR0FBcEIsRUFBeUI7QUFDeEJvQiwyQkFBbUIsdUxBQUtELGdCQUFMLElBQXVCSyxHQUFHLENBQUNDLElBQUosQ0FBU0EsSUFBaEMsR0FBbkI7QUFDQSxlQUFPLElBQVA7QUFDQSxPQUhELE1BR087QUFDTixlQUFPLEtBQVA7QUFDQTtBQUNELEtBUE0sQ0FBUDtBQVFBLEdBVkQ7O0FBWUEsc0JBQ0M7QUFBSSxhQUFTLEVBQUMsY0FBZDtBQUFBLDJCQUNDO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUEsOEJBQ0M7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQSwrQkFDQztBQUFLLGFBQUcsRUFBRXZCLFdBQVcsQ0FBQ0MsTUFBWixJQUFzQixrQkFBaEM7QUFBb0QsYUFBRyxFQUFDO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFJQztBQUFLLGlCQUFTLEVBQUMsaUJBQWY7QUFBQSxnQ0FDQztBQUFLLG1CQUFTLEVBQUMsYUFBZjtBQUFBLGtDQUNDO0FBQUcscUJBQVMsRUFBQyxnQ0FBYjtBQUFBLHNCQUErQ0QsV0FBVyxDQUFDSztBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELEVBRUVMLFdBQVcsQ0FBQ08sY0FGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFLQztBQUFHLG1CQUFTLEVBQUMsU0FBYjtBQUF1QixpQkFBTyxFQUFFWSxvQkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEQsZUFRQztBQUFNLG1CQUFTLEVBQUMsY0FBaEI7QUFBQSxvQkFBZ0NNLHNFQUFhLENBQUN6QixXQUFXLENBQUMwQixTQUFiO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkQsRUFTRVQsZ0JBQWdCLENBQUNVLE1BQWpCLEdBQTBCLENBQTFCLGlCQUErQixxRUFBQyxxREFBRDtBQUFjLDBCQUFnQixFQUFFVjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRqQyxFQVVFakIsV0FBVyxDQUFDUSxPQUFaLElBQXVCLENBQUNTLGdCQUFnQixDQUFDVSxNQUF6QyxpQkFDQTtBQUFBLG9CQUFNM0IsV0FBVyxDQUFDUSxPQUFaLGlCQUF1QjtBQUFHLG1CQUFPLEVBQUU7QUFBQSxxQkFBTVksc0JBQXNCLENBQUNwQixXQUFXLENBQUNFLEVBQWIsQ0FBNUI7QUFBQSxhQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEYsRUFhRWEsZ0JBQWdCLGlCQUNoQixxRUFBQyxvREFBRDtBQUFhLGtCQUFRLEVBQUUsSUFBdkI7QUFBNkIsMkJBQWlCLEVBQUVmLFdBQVcsQ0FBQ0UsRUFBNUQ7QUFBZ0UsdUJBQWEsRUFBRXNCO0FBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZEYsRUFpQkUsQ0FBQ1AsZ0JBQWdCLENBQUNVLE1BQWxCLElBQ0EzQixXQUFXLENBQUNRLE9BRFosSUFFQWhCLFNBQVMsQ0FBQ0csSUFBVixtQ0FBMENLLFdBQVcsQ0FBQ0UsRUFBdEQsQ0FGQSxJQUdBVixTQUFTLENBQUNNLE1BSFYsaUJBSUM7QUFBSyxtQkFBUyxFQUFDLGFBQWY7QUFBQSxpQ0FDQyxxRUFBQyx5Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFyQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBbUNBOztHQWxFUVIsTzs7S0FBQUEsTztBQW9FTUEsc0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBc0MsV0FBVyxDQUFDckMsU0FBWixHQUF3QjtBQUN2QkMsV0FBUyxFQUFFQyxpREFBUyxDQUFDQyxLQUFWLENBQWdCO0FBQzFCQyxRQUFJLEVBQUVGLGlEQUFTLENBQUNHLE1BQVYsQ0FBaUJDLFVBREc7QUFFMUJDLFVBQU0sRUFBRUwsaURBQVMsQ0FBQ00sSUFBVixDQUFlRjtBQUZHLEdBQWhCLENBRFk7QUFLdkJnQyxlQUFhLEVBQUVwQyxpREFBUyxDQUFDaUIsSUFMRjtBQU12Qm9CLGFBQVcsRUFBRXJDLGlEQUFTLENBQUNzQyxNQU5BO0FBT3ZCQyxZQUFVLEVBQUV2QyxpREFBUyxDQUFDVSxNQVBDO0FBUXZCOEIsbUJBQWlCLEVBQUV4QyxpREFBUyxDQUFDVSxNQVJOO0FBU3ZCK0IsVUFBUSxFQUFFekMsaURBQVMsQ0FBQ007QUFURyxDQUF4QjtBQVdBNkIsV0FBVyxDQUFDaEIsWUFBWixHQUEyQjtBQUMxQnBCLFdBQVMsRUFBRTtBQUFFRyxRQUFJLEVBQUUsRUFBUjtBQUFZRyxVQUFNLEVBQUU7QUFBcEIsR0FEZTtBQUUxQitCLGVBQWEsRUFBRSxJQUZXO0FBRzFCQyxhQUFXLEVBQUUsRUFIYTtBQUkxQkUsWUFBVSxFQUFFLENBSmM7QUFLMUJDLG1CQUFpQixFQUFFLENBTE87QUFNMUJ6QixTQUFPLEVBQUU7QUFOaUIsQ0FBM0I7O0FBU0EsU0FBU29CLFdBQVQsQ0FBcUJmLEtBQXJCLEVBQTRCO0FBQUE7O0FBQUEsTUFDbkJyQixTQURtQixHQUM2RHFCLEtBRDdELENBQ25CckIsU0FEbUI7QUFBQSxNQUNSMkMsUUFEUSxHQUM2RHRCLEtBRDdELENBQ1JzQixRQURRO0FBQUEsTUFDRU4sYUFERixHQUM2RGhCLEtBRDdELENBQ0VnQixhQURGO0FBQUEsTUFDaUJHLFVBRGpCLEdBQzZEbkIsS0FEN0QsQ0FDaUJtQixVQURqQjtBQUFBLE1BQzZCRSxRQUQ3QixHQUM2RHJCLEtBRDdELENBQzZCcUIsUUFEN0I7QUFBQSxNQUN1Q0QsaUJBRHZDLEdBQzZEcEIsS0FEN0QsQ0FDdUNvQixpQkFEdkM7QUFHM0IsTUFBTUcsTUFBTSxHQUFHQywwQ0FBQSxHQUFhM0MsS0FBYixDQUFtQjtBQUNqQ2Esa0JBQWMsRUFBRThCLDBDQUFBLEdBQWFDLFFBQWIsQ0FBc0IseUJBQXRCO0FBRGlCLEdBQW5CLENBQWY7QUFJQSxNQUFNQyxpQkFBaUIsR0FBRztBQUN6QmhDLGtCQUFjLEVBQUU7QUFEUyxHQUExQjtBQUlBLE1BQU1pQyxJQUFJLEdBQUdDLCtEQUFPLENBQUM7QUFDcEJDLGlCQUFhLEVBQUVILGlCQURLO0FBRXBCSSxZQUFRLEVBQUVDLDJFQUFXLENBQUNSLE1BQUQ7QUFGRCxHQUFELENBQXBCOztBQUtBLE1BQU1TLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ3RCLElBQUQsRUFBc0M7QUFDaEUsUUFBSSxDQUFDTSxhQUFMLEVBQW9CO0FBQ3BCLFFBQU1pQixPQUFPLEdBQUdaLFFBQVEsR0FDckI7QUFDQWEsa0JBQVksRUFBRXhCLElBQUksQ0FBQ2hCLGNBRG5CO0FBRUF5Qyx1QkFBaUIsRUFBRWY7QUFGbkIsS0FEcUIsbUNBS2hCVixJQUxnQjtBQUtWakIsZ0JBQVUsRUFBRTBCO0FBTEYsTUFBeEI7QUFNQUgsaUJBQWEsQ0FBQ2lCLE9BQUQsQ0FBYixDQUF1QnpCLElBQXZCLENBQTRCLFVBQUNDLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLElBQUlrQixJQUFJLENBQUNTLEtBQUwsbUJBQWdCVixpQkFBaEIsRUFBaEI7QUFBQSxLQUE1QjtBQUNBLEdBVEQ7O0FBV0Esc0JBQ0M7QUFBSyxhQUFTLEVBQUMsZ0NBQWY7QUFBQSw0QkFDQztBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsNkJBQ0M7QUFBSyxXQUFHLEVBQUUsQ0FBQUosUUFBUSxTQUFSLElBQUFBLFFBQVEsV0FBUixZQUFBQSxRQUFRLENBQUVsQyxNQUFWLEtBQW9CLGtCQUE5QjtBQUFrRCxXQUFHLEVBQUM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUlDO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUEsNkJBQ0MscUVBQUMseUNBQUQ7QUFBTSxjQUFNLEVBQUMsVUFBYjtBQUF3QixnQkFBUSxFQUFFdUMsSUFBSSxDQUFDVSxZQUFMLENBQWtCTCxrQkFBbEIsQ0FBbEM7QUFBQSxnQ0FDQyxxRUFBQyw4RUFBRDtBQUFnQixjQUFJLEVBQUVMLElBQXRCO0FBQTRCLGNBQUksRUFBQyxnQkFBakM7QUFBa0Qsb0JBQVUsRUFBRTtBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGVBRUM7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixtQkFBUyxFQUFDLGVBQWhDO0FBQWdELGtCQUFRLEVBQUVoRCxTQUFTLENBQUNHLElBQVYsS0FBbUIsYUFBbkIsSUFBb0NILFNBQVMsQ0FBQ00sTUFBeEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBZUE7O0dBMUNROEIsVztVQVdLYSx1RDs7O0tBWExiLFc7QUE0Q01BLDBFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQXVCLFlBQVksQ0FBQzVELFNBQWIsR0FBeUI7QUFDeEI7QUFDQTZELGVBQWEsRUFBRTNELGlEQUFTLENBQUNpQixJQUZEO0FBR3hCO0FBQ0EyQyxhQUFXLEVBQUU1RCxpREFBUyxDQUFDTSxJQUpDO0FBS3hCdUQsd0JBQXNCLEVBQUU3RCxpREFBUyxDQUFDaUIsSUFMVjtBQU14QjtBQUNBbUIsZUFBYSxFQUFFcEMsaURBQVMsQ0FBQ2lCLElBUEQ7QUFReEI2QyxjQUFZLEVBQUU5RCxpREFBUyxDQUFDaUIsSUFSQTtBQVN4QjtBQUNBQyxvQkFBa0IsRUFBRWxCLGlEQUFTLENBQUNpQixJQVZOO0FBV3hCRCxtQkFBaUIsRUFBRWhCLGlEQUFTLENBQUNpQixJQVhMO0FBWXhCO0FBQ0E4QyxNQUFJLEVBQUUvRCxpREFBUyxDQUFDQyxLQUFWLENBQWdCO0FBQ3JCUSxNQUFFLEVBQUVULGlEQUFTLENBQUNVLE1BRE87QUFFckJDLHFCQUFpQixFQUFFWCxpREFBUyxDQUFDVSxNQUZSO0FBR3JCRSxtQkFBZSxFQUFFWixpREFBUyxDQUFDRyxNQUhOO0FBSXJCSyxVQUFNLEVBQUVSLGlEQUFTLENBQUNHLE1BSkc7QUFLckI2RCxVQUFNLEVBQUVoRSxpREFBUyxDQUFDVSxNQUxHO0FBTXJCdUQsWUFBUSxFQUFFakUsaURBQVMsQ0FBQ0csTUFOQztBQU9yQitELG1CQUFlLEVBQUVsRSxpREFBUyxDQUFDVSxNQVBOO0FBUXJCeUQscUJBQWlCLEVBQUVuRSxpREFBUyxDQUFDRyxNQVJSO0FBU3JCaUUsV0FBTyxFQUFFcEUsaURBQVMsQ0FBQ0csTUFURTtBQVVyQmtFLFlBQVEsRUFBRXJFLGlEQUFTLENBQUNVLE1BVkM7QUFXckI0RCxhQUFTLEVBQUV0RSxpREFBUyxDQUFDTSxJQVhBO0FBWXJCaUUsZ0JBQVksRUFBRXZFLGlEQUFTLENBQUNVLE1BWkg7QUFhckI4RCxVQUFNLEVBQUV4RSxpREFBUyxDQUFDTSxJQWJHO0FBY3JCbUUsYUFBUyxFQUFFekUsaURBQVMsQ0FBQ1UsTUFkQTtBQWVyQmdFLGdCQUFZLEVBQUUxRSxpREFBUyxDQUFDMkUsT0FBVixDQUNiM0UsaURBQVMsQ0FBQ0MsS0FBVixDQUFnQjtBQUNmUSxRQUFFLEVBQUVULGlEQUFTLENBQUNVLE1BREM7QUFFZmtFLGNBQVEsRUFBRTVFLGlEQUFTLENBQUNHLE1BRkw7QUFHZjBFLFVBQUksRUFBRTdFLGlEQUFTLENBQUNVLE1BSEQ7QUFJZm9FLGNBQVEsRUFBRTlFLGlEQUFTLENBQUNHLE1BSkw7QUFLZjRFLFNBQUcsRUFBRS9FLGlEQUFTLENBQUNHLE1BTEE7QUFNZjZFLGNBQVEsRUFBRWhGLGlEQUFTLENBQUNHO0FBTkwsS0FBaEIsQ0FEYSxDQWZPO0FBeUJyQjhFLGtCQUFjLEVBQUVqRixpREFBUyxDQUFDMkUsT0FBVixDQUNmM0UsaURBQVMsQ0FBQ0MsS0FBVixDQUFnQjtBQUNmUSxRQUFFLEVBQUVULGlEQUFTLENBQUNVLE1BREM7QUFFZndFLGNBQVEsRUFBRWxGLGlEQUFTLENBQUNVLE1BRkw7QUFHZnlFLGdCQUFVLEVBQUVuRixpREFBUyxDQUFDRztBQUhQLEtBQWhCLENBRGU7QUF6QkssR0FBaEIsQ0Fia0I7QUE4Q3hCSixXQUFTLEVBQUVDLGlEQUFTLENBQUNDLEtBQVYsQ0FBZ0I7QUFDMUJDLFFBQUksRUFBRUYsaURBQVMsQ0FBQ0csTUFBVixDQUFpQkMsVUFERztBQUUxQkMsVUFBTSxFQUFFTCxpREFBUyxDQUFDTSxJQUFWLENBQWVGO0FBRkcsR0FBaEIsQ0E5Q2E7QUFrRHhCaUMsYUFBVyxFQUFFckMsaURBQVMsQ0FBQ3NDLE1BbERDO0FBbUR4QjtBQUNBOEMscUJBQW1CLEVBQUVwRixpREFBUyxDQUFDcUY7QUFwRFAsQ0FBekI7QUFzREEzQixZQUFZLENBQUN2QyxZQUFiLEdBQTRCO0FBQzNCO0FBQ0F3QyxlQUFhLEVBQUUsSUFGWTtBQUczQjtBQUNBQyxhQUFXLEVBQUUsS0FKYztBQUszQkMsd0JBQXNCLEVBQUUsSUFMRztBQU0zQjtBQUNBekIsZUFBYSxFQUFFLElBUFk7QUFRM0IwQixjQUFZLEVBQUUsSUFSYTtBQVMzQjtBQUNBNUMsb0JBQWtCLEVBQUUsSUFWTztBQVczQkYsbUJBQWlCLEVBQUUsSUFYUTtBQVkzQjtBQUNBK0MsTUFBSSxFQUFFO0FBQ0x0RCxNQUFFLEVBQUUsQ0FEQztBQUVMRSxxQkFBaUIsRUFBRSxDQUZkO0FBR0xDLG1CQUFlLEVBQUUsRUFIWjtBQUlMSixVQUFNLEVBQUUsRUFKSDtBQUtMd0QsVUFBTSxFQUFFLENBTEg7QUFNTEMsWUFBUSxFQUFFLEVBTkw7QUFPTEMsbUJBQWUsRUFBRSxDQVBaO0FBUUxDLHFCQUFpQixFQUFFLEVBUmQ7QUFTTEMsV0FBTyxFQUFFLEVBVEo7QUFVTEMsWUFBUSxFQUFFLENBVkw7QUFXTEMsYUFBUyxFQUFFLEtBWE47QUFZTEMsZ0JBQVksRUFBRSxDQVpUO0FBYUxDLFVBQU0sRUFBRSxLQWJIO0FBY0xDLGFBQVMsRUFBRSxDQWROO0FBZUxDLGdCQUFZLEVBQUUsRUFmVDtBQWdCTE8sa0JBQWMsRUFBRTtBQWhCWCxHQWJxQjtBQStCM0JsRixXQUFTLEVBQUU7QUFBRUcsUUFBSSxFQUFFLEVBQVI7QUFBWUcsVUFBTSxFQUFFO0FBQXBCLEdBL0JnQjtBQWdDM0JnQyxhQUFXLEVBQUUsRUFoQ2M7QUFpQzNCO0FBQ0ErQyxxQkFBbUIsRUFBRTtBQWxDTSxDQUE1Qjs7QUFvQ0EsU0FBUzFCLFlBQVQsQ0FBc0J0QyxLQUF0QixFQUE2QjtBQUFBOztBQUFBOztBQUFBLE1BRzNCdUMsYUFIMkIsR0FtQnhCdkMsS0FuQndCLENBRzNCdUMsYUFIMkI7QUFBQSxNQUszQkMsV0FMMkIsR0FtQnhCeEMsS0FuQndCLENBSzNCd0MsV0FMMkI7QUFBQSxNQU0zQkMsc0JBTjJCLEdBbUJ4QnpDLEtBbkJ3QixDQU0zQnlDLHNCQU4yQjtBQUFBLE1BUTNCekIsYUFSMkIsR0FtQnhCaEIsS0FuQndCLENBUTNCZ0IsYUFSMkI7QUFBQSxNQVMzQjBCLFlBVDJCLEdBbUJ4QjFDLEtBbkJ3QixDQVMzQjBDLFlBVDJCO0FBQUEsTUFXM0I1QyxrQkFYMkIsR0FtQnhCRSxLQW5Cd0IsQ0FXM0JGLGtCQVgyQjtBQUFBLE1BWTNCRixpQkFaMkIsR0FtQnhCSSxLQW5Cd0IsQ0FZM0JKLGlCQVoyQjtBQUFBLE1BYzNCK0MsSUFkMkIsR0FtQnhCM0MsS0FuQndCLENBYzNCMkMsSUFkMkI7QUFBQSxNQWUzQmhFLFNBZjJCLEdBbUJ4QnFCLEtBbkJ3QixDQWUzQnJCLFNBZjJCO0FBQUEsTUFnQjNCc0MsV0FoQjJCLEdBbUJ4QmpCLEtBbkJ3QixDQWdCM0JpQixXQWhCMkI7QUFBQSxNQWtCM0IrQyxtQkFsQjJCLEdBbUJ4QmhFLEtBbkJ3QixDQWtCM0JnRSxtQkFsQjJCOztBQUFBLGtCQW9CWS9ELHNEQUFRLENBQUMsS0FBRCxDQXBCcEI7QUFBQSxNQW9CckJpRSxZQXBCcUI7QUFBQSxNQW9CUEMsZUFwQk87O0FBQUEsbUJBcUJVbEUsc0RBQVEsQ0FBcUIsRUFBckIsQ0FyQmxCO0FBQUEsTUFxQnJCbUUsV0FyQnFCO0FBQUEsTUFxQlJDLGNBckJROztBQUFBLG1CQXNCRXBFLHNEQUFRLENBQUMsS0FBRCxDQXRCVjtBQUFBLE1Bc0JyQnFFLE9BdEJxQjtBQUFBLE1Bc0JaQyxVQXRCWTs7QUF3QjVCLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUNoQ0wsbUJBQWUsQ0FBQyxDQUFDRCxZQUFGLENBQWY7QUFDQSxHQUZELENBeEI0QixDQTRCNUI7OztBQUNBLE1BQU1PLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsS0FBRCxFQUFnQkMsS0FBaEIsRUFBMEI7QUFDcEQsUUFBSSxDQUFDcEMsYUFBTCxFQUFvQjtBQUNwQixXQUFPO0FBQUEsYUFBTUEsYUFBYSxDQUFDbUMsS0FBRCxFQUFRQyxLQUFSLENBQW5CO0FBQUEsS0FBUDtBQUNBLEdBSEQsQ0E3QjRCLENBaUM1Qjs7O0FBQ0EsTUFBTUMsMkJBQTJCLEdBQUcsU0FBOUJBLDJCQUE4QixDQUFDdkYsRUFBRCxFQUFnQjtBQUNuRCxRQUFJLENBQUNvRCxzQkFBTCxFQUE2QjtBQUM3QkEsMEJBQXNCLENBQUNwRCxFQUFELENBQXRCO0FBQ0EsR0FIRCxDQWxDNEIsQ0FzQzVCOzs7QUFDQSxNQUFNMkMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDdEIsSUFBRCxFQUEwRDtBQUNwRixRQUFJLENBQUNNLGFBQUwsRUFBb0I7QUFDcEIsV0FBT0EsYUFBYSxDQUFDTixJQUFELENBQWIsQ0FBb0JGLElBQXBCLENBQXlCLFVBQUNDLEdBQUQsRUFBUztBQUN4QyxVQUFJLENBQUFBLEdBQUcsU0FBSCxJQUFBQSxHQUFHLFdBQUgsWUFBQUEsR0FBRyxDQUFFeEIsTUFBTCxNQUFnQixHQUFwQixFQUF5QjtBQUN4Qm9GLHNCQUFjLEVBQUU1RCxHQUFHLENBQUNDLElBQUosQ0FBU0EsSUFBWCxxTEFBb0IwRCxXQUFwQixHQUFkO0FBQ0EsZUFBTyxJQUFQO0FBQ0EsT0FIRCxNQUdPO0FBQ04sZUFBTyxLQUFQO0FBQ0E7QUFDRCxLQVBNLENBQVA7QUFRQSxHQVZEOztBQVdBLE1BQU1TLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ3hGLEVBQUQsRUFBZ0I7QUFDekMsUUFBSSxDQUFDcUQsWUFBTCxFQUFtQjs7QUFDbkIsUUFBSSxDQUFDd0IsWUFBTCxFQUFtQjtBQUNsQnhCLGtCQUFZLENBQUNyRCxFQUFELENBQVosQ0FBaUJtQixJQUFqQixDQUFzQixVQUFDQyxHQUFELEVBQVM7QUFDOUIsWUFBSSxDQUFBQSxHQUFHLFNBQUgsSUFBQUEsR0FBRyxXQUFILFlBQUFBLEdBQUcsQ0FBRXhCLE1BQUwsTUFBZ0IsR0FBcEIsRUFBeUI7QUFDeEJvRix3QkFBYyxDQUFDNUQsR0FBRyxDQUFDQyxJQUFKLENBQVNBLElBQVYsQ0FBZDtBQUNBLFNBRkQsTUFFTztBQUNOMkQsd0JBQWMsQ0FBQyxFQUFELENBQWQ7QUFDQTtBQUNELE9BTkQ7QUFPQTtBQUNELEdBWEQsQ0FsRDRCLENBK0Q1Qjs7O0FBQ0EsTUFBTVMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxTQUFELEVBQWU7QUFDdkMsUUFBTWpFLE1BQU0sR0FBR2lFLFNBQVMsQ0FBQ2pFLE1BQXpCOztBQUNBLFFBQUlBLE1BQU0sSUFBSSxDQUFkLEVBQWlCO0FBQ2hCLDBCQUNDO0FBQUssaUJBQVMsRUFBQyxvQkFBZjtBQUFBLG1CQUNFaUUsU0FBUyxDQUFDQyxLQUFWLENBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCQyxHQUF0QixDQUEwQixVQUFDdEMsSUFBRCxFQUFPdUMsS0FBUDtBQUFBLDhCQUMxQixxRUFBQywwQ0FBRDtBQUFtQixlQUFHLEVBQUV2QyxJQUFJLENBQUNhLFFBQTdCO0FBQXVDLG1CQUFPLEVBQUUsS0FBaEQ7QUFBdUQsaUJBQUssRUFBRSxLQUE5RDtBQUFxRSxtQkFBTyxFQUFFO0FBQUEscUJBQU1lLFVBQVUsQ0FBQyxJQUFELENBQWhCO0FBQUE7QUFBOUUsYUFBWVcsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUQwQjtBQUFBLFNBQTFCLENBREYsZUFJQztBQUFLLG1CQUFTLEVBQUMsZUFBZjtBQUErQixpQkFBTyxFQUFFO0FBQUEsbUJBQU1YLFVBQVUsQ0FBQyxJQUFELENBQWhCO0FBQUEsV0FBeEM7QUFBQSwyQkFDSVEsU0FBUyxDQUFDakUsTUFBVixHQUFtQixDQUR2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQ7QUFVQTs7QUFDRCxRQUFJQSxNQUFNLElBQUksQ0FBZCxFQUFpQjtBQUNoQiwwQkFDQztBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLGtCQUNFaUUsU0FBUyxDQUFDRSxHQUFWLENBQWMsVUFBQ3RDLElBQUQsRUFBT3VDLEtBQVA7QUFBQSw4QkFDZCxxRUFBQywwQ0FBRDtBQUFtQixlQUFHLEVBQUV2QyxJQUFJLENBQUNhLFFBQTdCO0FBQXVDLG1CQUFPLEVBQUUsS0FBaEQ7QUFBdUQsaUJBQUssRUFBRSxLQUE5RDtBQUFxRSxtQkFBTyxFQUFFO0FBQUEscUJBQU1lLFVBQVUsQ0FBQyxJQUFELENBQWhCO0FBQUE7QUFBOUUsYUFBWVcsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURjO0FBQUEsU0FBZDtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERDtBQU9BOztBQUNELFFBQUlwRSxNQUFNLElBQUksQ0FBZCxFQUFpQjtBQUNoQiwwQkFDQztBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLGtCQUNFaUUsU0FBUyxDQUFDRSxHQUFWLENBQWMsVUFBQ3RDLElBQUQsRUFBT3VDLEtBQVA7QUFBQSw4QkFDZCxxRUFBQywwQ0FBRDtBQUFtQixlQUFHLEVBQUV2QyxJQUFJLENBQUNhLFFBQTdCO0FBQXVDLG1CQUFPLEVBQUUsS0FBaEQ7QUFBdUQsaUJBQUssRUFBRSxNQUE5RDtBQUFzRSxtQkFBTyxFQUFFO0FBQUEscUJBQU1lLFVBQVUsQ0FBQyxJQUFELENBQWhCO0FBQUE7QUFBL0UsYUFBWVcsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURjO0FBQUEsU0FBZDtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERDtBQU9BO0FBQ0QsR0FoQ0Q7O0FBaUNBLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM3QixRQUFNSixTQUFTLEdBQUdwQyxJQUFJLENBQUNXLFlBQUwsQ0FBa0I4QixNQUFsQixDQUF5QixVQUFDekMsSUFBRDtBQUFBLGFBQVVBLElBQUksQ0FBQ2MsSUFBTCxLQUFjLENBQXhCO0FBQUEsS0FBekIsQ0FBbEI7O0FBQ0EsUUFBSXNCLFNBQVMsQ0FBQ2pFLE1BQVYsR0FBbUIsQ0FBdkIsRUFBMEI7QUFDekIsMEJBQ0M7QUFBSyxpQkFBUyxFQUFDLGlCQUFmO0FBQUEsbUJBQ0VnRSxnQkFBZ0IsQ0FBQ0MsU0FBRCxDQURsQixlQUVDO0FBQUssZUFBSyxFQUFFO0FBQUVNLG1CQUFPLEVBQUU7QUFBWCxXQUFaO0FBQUEsaUNBQ0MscUVBQUMsMENBQUQsQ0FBTyxZQUFQO0FBQ0MsbUJBQU8sRUFBRTtBQUNSZixxQkFBTyxFQUFQQSxPQURRO0FBRVJnQiw2QkFBZSxFQUFFLHlCQUFDQyxHQUFEO0FBQUEsdUJBQVNoQixVQUFVLENBQUNnQixHQUFELENBQW5CO0FBQUE7QUFGVCxhQURWO0FBQUEsc0JBTUVSLFNBQVMsQ0FBQ0UsR0FBVixDQUFjLFVBQUN0QyxJQUFELEVBQU91QyxLQUFQO0FBQUEsa0NBQ2QscUVBQUMsMENBQUQ7QUFBTyxtQkFBRyxFQUFFdkMsSUFBSSxDQUFDYTtBQUFqQixpQkFBZ0MwQixLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURjO0FBQUEsYUFBZDtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUREO0FBaUJBO0FBQ0QsR0FyQkQsQ0FqRzRCLENBdUg1Qjs7O0FBQ0EsTUFBTU0sZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzdCLFFBQU1DLFNBQVMsR0FBRzlDLElBQUksQ0FBQ1csWUFBTCxDQUFrQjhCLE1BQWxCLENBQXlCLFVBQUN6QyxJQUFEO0FBQUEsYUFBVUEsSUFBSSxDQUFDYyxJQUFMLEtBQWMsQ0FBeEI7QUFBQSxLQUF6QixDQUFsQjs7QUFDQSxRQUFJZ0MsU0FBUyxDQUFDM0UsTUFBVixHQUFtQixDQUF2QixFQUEwQjtBQUN6QiwwQkFDQztBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQSxrQkFDRTJFLFNBQVMsQ0FBQ1IsR0FBVixDQUFjLFVBQUN0QyxJQUFELEVBQU91QyxLQUFQO0FBQUEsOEJBQ2Q7QUFBTyxxQkFBUyxFQUFDLFdBQWpCO0FBQTZCLG9CQUFRLE1BQXJDO0FBQUEsb0NBQ0M7QUFBUSxpQkFBRyxFQUFFdkMsSUFBSSxDQUFDYSxRQUFsQjtBQUE0QixrQkFBSSxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFFQztBQUFRLGlCQUFHLEVBQUViLElBQUksQ0FBQ2EsUUFBbEI7QUFBNEIsa0JBQUksRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZEO0FBQUEsYUFBMkMwQixLQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURjO0FBQUEsU0FBZDtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERDtBQVdBO0FBQ0QsR0FmRCxDQXhINEIsQ0F3STVCOzs7QUFDQSxNQUFNUSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDN0IsUUFBTUMsU0FBUyxHQUFHaEQsSUFBSSxDQUFDVyxZQUFMLENBQWtCOEIsTUFBbEIsQ0FBeUIsVUFBQ3pDLElBQUQ7QUFBQSxhQUFVQSxJQUFJLENBQUNjLElBQUwsS0FBYyxDQUF4QjtBQUFBLEtBQXpCLENBQWxCOztBQUNBLFFBQUlrQyxTQUFTLENBQUM3RSxNQUFWLEdBQW1CLENBQXZCLEVBQTBCO0FBQ3pCLDBCQUNDO0FBQUssaUJBQVMsRUFBQyxnQkFBZjtBQUFBLGtCQUNFNkUsU0FBUyxDQUFDVixHQUFWLENBQWMsVUFBQ3RDLElBQUQsRUFBT3VDLEtBQVA7QUFBQSw4QkFDZDtBQUFPLHFCQUFTLEVBQUMsV0FBakI7QUFBNkIsb0JBQVEsTUFBckM7QUFBQSxvQ0FDQztBQUFRLGlCQUFHLEVBQUV2QyxJQUFJLENBQUNhLFFBQWxCO0FBQTRCLGtCQUFJLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUVDO0FBQVEsaUJBQUcsRUFBRWIsSUFBSSxDQUFDYSxRQUFsQjtBQUE0QixrQkFBSSxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkQ7QUFBQSxhQUEyQzBCLEtBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGM7QUFBQSxTQUFkO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUREO0FBV0E7QUFDRCxHQWZELENBekk0QixDQXlKNUI7OztBQUNBLE1BQU1VLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsR0FBTTtBQUN0QyxRQUFNQyxvQkFBb0IsR0FBR2xELElBQUksQ0FBQ00sUUFBTCxLQUFrQixDQUEvQzs7QUFDQSxRQUFJNEMsb0JBQW9CLElBQUlsRCxJQUFJLENBQUNXLFlBQUwsQ0FBa0J4QyxNQUFsQixLQUE2QixDQUF6RCxFQUE0RDtBQUMzRCxVQUFNZ0YsY0FBYyxHQUFHbkQsSUFBSSxDQUFDVyxZQUFMLENBQWtCLENBQWxCLENBQXZCO0FBQ0EsMEJBQ0M7QUFDQyxpQkFBUyxFQUFDLHFCQURYO0FBRUMsYUFBSyxFQUFFO0FBQ055QyxlQUFLLEVBQUVwRCxJQUFJLENBQUNxRCxLQUROO0FBRU5DLHlCQUFlLGdCQUFTSCxjQUFjLENBQUN0QyxRQUF4QjtBQUZULFNBRlI7QUFBQSwrQkFPQyxxRUFBQyxvREFBRDtBQUNDLDRCQUFrQixFQUFFLDRCQUFDMEMsYUFBRCxFQUFnQkMsYUFBaEIsRUFBK0JDLEdBQS9CO0FBQUEsZ0NBQ25CO0FBQUcsb0JBQU0sRUFBQyxPQUFWO0FBQWtCLGtCQUFJLEVBQUVGLGFBQXhCO0FBQUEsd0JBQ0VDO0FBREYsZUFBNENDLEdBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRG1CO0FBQUEsV0FEckI7QUFBQSxpQ0FPQztBQUFBLHNCQUFPekQsSUFBSSxDQUFDSztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUREO0FBbUJBO0FBQ0QsR0F4QkQ7O0FBeUJBLHNCQUNDO0FBQUksYUFBUyxFQUFDLFNBQWQ7QUFBQSwyQkFDQztBQUFLLGVBQVMsRUFBQyxVQUFmO0FBQUEsOEJBQ0M7QUFBSyxpQkFBUyxFQUFDLGlCQUFmO0FBQUEsZ0NBQ0M7QUFBSyxtQkFBUyxFQUFDLG1CQUFmO0FBQUEsa0NBQ0M7QUFBSyxxQkFBUyxFQUFDLFFBQWY7QUFBQSxtQ0FDQztBQUFLLGlCQUFHLEVBQUVMLElBQUksQ0FBQ3ZELE1BQUwsSUFBZSxrQkFBekI7QUFBNkMsaUJBQUcsRUFBQztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQUlDO0FBQUsscUJBQVMsRUFBQyxXQUFmO0FBQUEsb0NBQ0M7QUFBSyx1QkFBUyxFQUFDLE1BQWY7QUFBQSxzQ0FDQztBQUFHLHVCQUFPLEVBQUVxRixrQkFBa0IsQ0FBQyxNQUFELEVBQVM5QixJQUFJLENBQUNuRCxlQUFkLENBQTlCO0FBQUEsMEJBQStEbUQsSUFBSSxDQUFDbkQ7QUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERCxlQUVDO0FBQU0seUJBQVMsRUFBQyxhQUFoQjtBQUFBLHVDQUNDLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZELGVBTUM7QUFBQSwwQkFDRW1ELElBQUksQ0FBQ2tCLGNBQUwsQ0FBb0JvQixHQUFwQixDQUF3QixVQUFDdEMsSUFBRCxFQUFPMEQsR0FBUDtBQUFBLHNDQUN4QjtBQUFjLDZCQUFTLEVBQUMsYUFBeEI7QUFBQSw4QkFDRTFELElBQUksQ0FBQ29CO0FBRFAscUJBQVNzQyxHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRHdCO0FBQUEsaUJBQXhCO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFORDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREQsZUFlQztBQUFNLHVCQUFTLEVBQUMsZUFBaEI7QUFBQSx3QkFBaUN6RixzRUFBYSxDQUFDK0IsSUFBSSxDQUFDOUIsU0FBTjtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUF1QkM7QUFBSyxtQkFBUyxFQUFDLGVBQWY7QUFBQSxvQkFDRW1ELG1CQUFtQixpQkFDbkIscUVBQUMsNENBQUQ7QUFBUyxrQkFBTSxFQUFFLEdBQWpCO0FBQXNCLG1CQUFPLEVBQUVBLG1CQUEvQjtBQUFvRCxxQkFBUyxFQUFDLGFBQTlEO0FBQUEsbUNBQ0M7QUFBUSx1QkFBUyxFQUFDLFVBQWxCO0FBQUEscUNBQ0MscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsRUFrQ0VyQixJQUFJLENBQUNLLE9BQUwsSUFBZ0JMLElBQUksQ0FBQ00sUUFBTCxLQUFrQixDQUFsQyxpQkFDQTtBQUNDLGlCQUFTLEVBQUMsa0JBRFg7QUFFQyxhQUFLLEVBQUU7QUFDTjhDLGVBQUssRUFBRXBELElBQUksQ0FBQ3FEO0FBRE4sU0FGUjtBQUFBLCtCQU1DLHFFQUFDLG9EQUFEO0FBQ0MsNEJBQWtCLEVBQUUsNEJBQUNFLGFBQUQsRUFBZ0JDLGFBQWhCLEVBQStCQyxHQUEvQjtBQUFBLGdDQUNuQjtBQUFHLG9CQUFNLEVBQUMsT0FBVjtBQUFrQixrQkFBSSxFQUFFRixhQUF4QjtBQUFpRCxtQkFBSyxFQUFFO0FBQUVJLDBCQUFVLEVBQUU7QUFBZCxlQUF4RDtBQUFBLHdCQUNFSDtBQURGLGVBQTRDQyxHQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURtQjtBQUFBLFdBRHJCO0FBQUEsaUNBT0M7QUFBQSxzQkFBT3pELElBQUksQ0FBQ0s7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQ0YsRUFxREVtQyxlQUFlLEVBckRqQixFQXNERU8sZUFBZSxFQXREakIsRUF1REVGLGVBQWUsRUF2RGpCLEVBd0RFSSx3QkFBd0IsRUF4RDFCLGVBeURDO0FBQUssaUJBQVMsRUFBQyxnQkFBZjtBQUFBLG1CQUNFakQsSUFBSSxDQUFDVSxTQUFMLEdBQWlCLENBQWpCLGlCQUNBO0FBQUEsa0NBQ0MscUVBQUMsc0RBQUQ7QUFBVSxpQkFBSyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsT0FDK0JWLElBQUksQ0FBQ1UsU0FEcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLEVBTUUsQ0FBQ2UsV0FBVyxDQUFDdEQsTUFBWixHQUFxQixDQUFyQixJQUEwQjZCLElBQUksQ0FBQ1EsWUFBTCxHQUFvQixDQUEvQyxrQkFDQTtBQUNDLG1CQUFTLEVBQUMsZ0JBRFg7QUFFQyxpQkFBTyxFQUFFLG1CQUFNO0FBQ2QwQiw2QkFBaUIsQ0FBQ2xDLElBQUksQ0FBQ3RELEVBQU4sQ0FBakI7QUFDQW1GLDhCQUFrQjtBQUNsQixXQUxGO0FBQUEscUJBT0VKLFdBQVcsQ0FBQ3RELE1BQVosSUFBc0I2QixJQUFJLENBQUNRLFlBUDdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6REQsZUEyRUM7QUFBSyxpQkFBUyxFQUFDLGlCQUFmO0FBQUEsZ0NBQ0M7QUFBSyxtQkFBUyxFQUFDLGNBQWY7QUFBQSxpQ0FDQztBQUFRLHFCQUFTLEVBQUVYLFdBQVcsR0FBRyxzQkFBSCxHQUE0QixlQUExRDtBQUEyRSxtQkFBTyxFQUFFO0FBQUEscUJBQU1vQywyQkFBMkIsQ0FBQ2pDLElBQUksQ0FBQ3RELEVBQU4sQ0FBakM7QUFBQSxhQUFwRjtBQUFBLG9DQUNDLHFFQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREQsZUFFQztBQUFNLHVCQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQU9DO0FBQUssbUJBQVMsRUFBQyxRQUFmO0FBQUEsaUNBQ0M7QUFDQyxxQkFBUyxFQUFDLGVBRFg7QUFFQyxtQkFBTyxFQUFFLG1CQUFNO0FBQ2R3RiwrQkFBaUIsQ0FBQ2xDLElBQUksQ0FBQ3RELEVBQU4sQ0FBakI7QUFDQW1GLGdDQUFrQjtBQUNsQixhQUxGO0FBQUEsb0NBT0MscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFQRCxlQVFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0VELGVBK0ZDO0FBQUssaUJBQVMsRUFBRU4sWUFBWSxHQUFHLG1CQUFILEdBQXlCLE1BQXJEO0FBQUEsZ0NBQ0MscUVBQUMsb0RBQUQ7QUFBYSxtQkFBUyxFQUFFdkYsU0FBeEI7QUFBbUMscUJBQVcsRUFBRXNDLFdBQWhEO0FBQTZELHVCQUFhLEVBQUVlLGtCQUE1RTtBQUFnRyxvQkFBVSxFQUFFVyxJQUFJLENBQUN0RDtBQUFqSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELEVBRUUrRSxXQUFXLENBQUN0RCxNQUFaLEdBQXFCLENBQXJCLGlCQUNBO0FBQUksbUJBQVMsRUFBQyxlQUFkO0FBQUEsb0JBQ0VzRCxXQUFXLENBQUNhLEdBQVosQ0FBZ0IsVUFBQ3NCLEdBQUQsRUFBTXJCLEtBQU47QUFBQSxnQ0FDaEIscUVBQUMsZ0RBQUQ7QUFFQyx1QkFBUyxFQUFFdkcsU0FGWjtBQUdDLHlCQUFXLEVBQUU0SCxHQUhkO0FBSUMsK0JBQWlCLEVBQUUzRyxpQkFKcEI7QUFLQyxnQ0FBa0IsRUFBRUU7QUFMckIsZUFDTXlHLEdBQUcsQ0FBQ2xILEVBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEZ0I7QUFBQSxXQUFoQjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEYsRUFlRSxDQUFDK0UsV0FBVyxDQUFDdEQsTUFBYixJQUF1Qm5DLFNBQVMsQ0FBQ0csSUFBViw2QkFBb0M2RCxJQUFJLENBQUN0RCxFQUF6QyxDQUF2QixJQUF3RVYsU0FBUyxDQUFDTSxNQUFsRixpQkFDQTtBQUFLLG1CQUFTLEVBQUMsYUFBZjtBQUFBLGlDQUNDLHFFQUFDLHlDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EvRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBeUhBOztHQTVTUXFELFk7O0tBQUFBLFk7QUE4U01BLDJFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2paQTtBQUNBO0FBQ0E7QUFFQWtFLFlBQVksQ0FBQzlILFNBQWIsR0FBeUI7QUFDeEIwQixrQkFBZ0IsRUFBRXhCLGlEQUFTLENBQUNDLEtBQVYsQ0FBZ0I7QUFDakNRLE1BQUUsRUFBRVQsaURBQVMsQ0FBQ1UsTUFEbUI7QUFFakM2QyxxQkFBaUIsRUFBRXZELGlEQUFTLENBQUNVLE1BRkk7QUFHakNDLHFCQUFpQixFQUFFWCxpREFBUyxDQUFDVSxNQUhJO0FBSWpDRSxtQkFBZSxFQUFFWixpREFBUyxDQUFDRyxNQUpNO0FBS2pDbUQsZ0JBQVksRUFBRXRELGlEQUFTLENBQUNHLE1BTFM7QUFNakNLLFVBQU0sRUFBRVIsaURBQVMsQ0FBQ0c7QUFOZSxHQUFoQjtBQURNLENBQXpCO0FBVUF5SCxZQUFZLENBQUN6RyxZQUFiLEdBQTRCO0FBQzNCSyxrQkFBZ0IsRUFBRTtBQUNqQmYsTUFBRSxFQUFFLENBRGE7QUFFakI4QyxxQkFBaUIsRUFBRSxDQUZGO0FBR2pCNUMscUJBQWlCLEVBQUUsQ0FIRjtBQUlqQkMsbUJBQWUsRUFBRSxFQUpBO0FBS2pCMEMsZ0JBQVksRUFBRSxFQUxHO0FBTWpCOUMsVUFBTSxFQUFFO0FBTlM7QUFEUyxDQUE1Qjs7QUFXQSxTQUFTb0gsWUFBVCxDQUFzQnhHLEtBQXRCLEVBQTZCO0FBQUE7O0FBQUEsTUFDcEJJLGdCQURvQixHQUNDSixLQURELENBQ3BCSSxnQkFEb0I7QUFFNUIsc0JBQ0M7QUFBSSxhQUFTLEVBQUMsZUFBZDtBQUFBLGNBQ0VBLGdCQUFnQixDQUFDNkUsR0FBakIsQ0FBcUIsVUFBQ3RDLElBQUQsRUFBOEJ1QyxLQUE5QjtBQUFBLDBCQUNyQjtBQUFnQixpQkFBUyxFQUFDLGNBQTFCO0FBQUEsK0JBQ0M7QUFBSyxtQkFBUyxFQUFDLG1CQUFmO0FBQUEsa0NBQ0M7QUFBSyxxQkFBUyxFQUFDLFFBQWY7QUFBQSxtQ0FDQztBQUFLLGlCQUFHLEVBQUV2QyxJQUFJLENBQUN2RCxNQUFMLElBQWUsa0JBQXpCO0FBQTZDLGlCQUFHLEVBQUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZUFJQztBQUFLLHFCQUFTLEVBQUMsdUJBQWY7QUFBQSxvQ0FDQztBQUFLLHVCQUFTLEVBQUMsYUFBZjtBQUFBLHNDQUNDO0FBQUcseUJBQVMsRUFBQyxnQ0FBYjtBQUFBLDBCQUErQ3VELElBQUksQ0FBQ25EO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREQsRUFFRW1ELElBQUksQ0FBQ1QsWUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFLQztBQUFNLHVCQUFTLEVBQUMsY0FBaEI7QUFBQSx3QkFBZ0N0QixzRUFBYSxDQUFDK0IsSUFBSSxDQUFDOUIsU0FBTjtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxTQUFTcUUsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRHFCO0FBQUEsS0FBckI7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFvQkE7O0tBdEJRc0IsWTtBQXdCTUEsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDAxYTlhZWE3NGFhNGRiNDdhNzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNwaW4gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBmbURhdGVGcm9tTm93IH0gZnJvbSAnfi91dGlscy9mdW5jdGlvbnMnO1xyXG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSAnLi9Db21tZW50Rm9ybSc7XHJcbmltcG9ydCBSZXBseUNvbW1lbnQgZnJvbSAnLi9SZXBseUNvbW1lbnQnO1xyXG5cclxuQ29tbWVudC5wcm9wVHlwZXMgPSB7XHJcblx0aXNMb2FkaW5nOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG5cdFx0dHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG5cdFx0c3RhdHVzOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkXHJcblx0fSksXHJcblx0ZGF0YUNvbW1lbnQ6IFByb3BUeXBlcy5zaGFwZSh7XHJcblx0XHRBdmF0YXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcblx0XHRJRDogUHJvcFR5cGVzLm51bWJlcixcclxuXHRcdFVzZXJJbmZvcm1hdGlvbklEOiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cdFx0RnVsbE5hbWVVbmljb2RlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cdFx0TmV3c0ZlZWRJRDogUHJvcFR5cGVzLm51bWJlcixcclxuXHRcdENvbW1lbnRDb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cdFx0aXNSZXBseTogUHJvcFR5cGVzLmJvb2xcclxuXHR9KSxcclxuXHRmZXRjaFJlcGx5Q29tbWVudDogUHJvcFR5cGVzLmZ1bmMsXHJcblx0aGFuZGxlUmVwbHlDb21tZW50OiBQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG5Db21tZW50LmRlZmF1bHRQcm9wcyA9IHtcclxuXHRpc0xvYWRpbmc6IHsgdHlwZTogJycsIHN0YXR1czogZmFsc2UgfSxcclxuXHRkYXRhQ29tbWVudDoge1xyXG5cdFx0QXZhdGFyOiAnJyxcclxuXHRcdElEOiAwLFxyXG5cdFx0VXNlckluZm9ybWF0aW9uSUQ6IDAsXHJcblx0XHRGdWxsTmFtZVVuaWNvZGU6ICcnLFxyXG5cdFx0TmV3c0ZlZWRJRDogMCxcclxuXHRcdENvbW1lbnRDb250ZW50OiAnJyxcclxuXHRcdGlzUmVwbHk6IGZhbHNlXHJcblx0fSxcclxuXHRmZXRjaFJlcGx5Q29tbWVudDogbnVsbCxcclxuXHRoYW5kbGVSZXBseUNvbW1lbnQ6IG51bGxcclxufTtcclxuXHJcbmZ1bmN0aW9uIENvbW1lbnQocHJvcHMpIHtcclxuXHRjb25zdCB7IGRhdGFDb21tZW50LCBmZXRjaFJlcGx5Q29tbWVudCwgaXNMb2FkaW5nLCBoYW5kbGVSZXBseUNvbW1lbnQgfSA9IHByb3BzO1xyXG5cdGNvbnN0IFthZGRDb21tZW50QWN0aW9uLCBzZXRDb21tZW50QWN0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbcmVwbHlDb21tZW50TGlzdCwgc2V0UmVwbHlDb21tZW50TGlzdF0gPSB1c2VTdGF0ZTxJTmV3c0ZlZWRDb21tZW50UmVwbHlbXT4oW10pO1xyXG5cclxuXHRjb25zdCBoYW5kbGVDb21tZW50c0FjdGlvbiA9ICgpID0+IHtcclxuXHRcdHNldENvbW1lbnRBY3Rpb24oIWFkZENvbW1lbnRBY3Rpb24pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNoZWNrRmV0Y2hSZXBseUNvbW1lbnQgPSAoSUQ6IG51bWJlcikgPT4ge1xyXG5cdFx0aWYgKCFmZXRjaFJlcGx5Q29tbWVudCkgcmV0dXJuO1xyXG5cdFx0ZmV0Y2hSZXBseUNvbW1lbnQoSUQpLnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRpZiAocmVzPy5zdGF0dXMgPT09IDIwMCkge1xyXG5cdFx0XHRcdHNldFJlcGx5Q29tbWVudExpc3QocmVzLmRhdGEuZGF0YSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0UmVwbHlDb21tZW50TGlzdChbXSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblx0Y29uc3QgY2hlY2tIYW5kbGVSZXBseUNvbW1lbnQgPSAoZGF0YSkgPT4ge1xyXG5cdFx0aWYgKCFoYW5kbGVSZXBseUNvbW1lbnQpIHJldHVybjtcclxuXHRcdHJldHVybiBoYW5kbGVSZXBseUNvbW1lbnQoZGF0YSkudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdGlmIChyZXM/LnN0YXR1cyA9PT0gMjAwKSB7XHJcblx0XHRcdFx0c2V0UmVwbHlDb21tZW50TGlzdChbLi4ucmVwbHlDb21tZW50TGlzdCwgcmVzLmRhdGEuZGF0YV0pO1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxsaSBjbGFzc05hbWU9XCJpdGVtLWNvbW1lbnRcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbmZvLWN1cnJlbnQtdXNlclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz17ZGF0YUNvbW1lbnQuQXZhdGFyIHx8ICcvaW1hZ2VzL3VzZXIucG5nJ30gYWx0PVwiYXZhdGFyXCIgLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29tbWVudFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3gtY29tbWVudFwiPlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJuYW1lLWNvbW1lbnQgZm9udC13ZWlnaHQtYmxhY2tcIj57ZGF0YUNvbW1lbnQuRnVsbE5hbWVVbmljb2RlfTwvcD5cclxuXHRcdFx0XHRcdFx0e2RhdGFDb21tZW50LkNvbW1lbnRDb250ZW50fVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJhLXJlcGx5XCIgb25DbGljaz17aGFuZGxlQ29tbWVudHNBY3Rpb259PlxyXG5cdFx0XHRcdFx0XHRQaOG6o24gaOG7k2lcclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRpbWUtY29tbWVudFwiPntmbURhdGVGcm9tTm93KGRhdGFDb21tZW50LkNyZWF0ZWRPbil9PC9zcGFuPlxyXG5cdFx0XHRcdFx0e3JlcGx5Q29tbWVudExpc3QubGVuZ3RoID4gMCAmJiA8UmVwbHlDb21tZW50IHJlcGx5Q29tbWVudExpc3Q9e3JlcGx5Q29tbWVudExpc3R9IC8+fVxyXG5cdFx0XHRcdFx0e2RhdGFDb21tZW50LmlzUmVwbHkgJiYgIXJlcGx5Q29tbWVudExpc3QubGVuZ3RoICYmIChcclxuXHRcdFx0XHRcdFx0PGRpdj57ZGF0YUNvbW1lbnQuaXNSZXBseSAmJiA8YSBvbkNsaWNrPXsoKSA9PiBjaGVja0ZldGNoUmVwbHlDb21tZW50KGRhdGFDb21tZW50LklEKX0+WGVtIGPDoWMgcGjhuqNuIGjhu5NpPC9hPn08L2Rpdj5cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHR7YWRkQ29tbWVudEFjdGlvbiAmJiAoXHJcblx0XHRcdFx0XHRcdDxDb21tZW50Rm9ybSBpc1JlcGxheT17dHJ1ZX0gbmV3c0ZlZWRDb21tZW50SUQ9e2RhdGFDb21tZW50LklEfSBoYW5kbGVDb21tZW50PXtjaGVja0hhbmRsZVJlcGx5Q29tbWVudH0gLz5cclxuXHRcdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdFx0eyFyZXBseUNvbW1lbnRMaXN0Lmxlbmd0aCAmJlxyXG5cdFx0XHRcdFx0XHRkYXRhQ29tbWVudC5pc1JlcGx5ICYmXHJcblx0XHRcdFx0XHRcdGlzTG9hZGluZy50eXBlID09PSBgRkVUQ0hfUkVQTFlfQ09NTUVOVF8ke2RhdGFDb21tZW50LklEfWAgJiZcclxuXHRcdFx0XHRcdFx0aXNMb2FkaW5nLnN0YXR1cyAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFNwaW4gLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2xpPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQ7XHJcbiIsImltcG9ydCB7IHl1cFJlc29sdmVyIH0gZnJvbSAnQGhvb2tmb3JtL3Jlc29sdmVycy95dXAnO1xyXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgKiBhcyB5dXAgZnJvbSAneXVwJztcclxuaW1wb3J0IElucHV0VGV4dEZpZWxkIGZyb20gJ34vY29tcG9uZW50cy9Gb3JtQ29udHJvbC9JbnB1dFRleHRGaWVsZCc7XHJcblxyXG5Db21tZW50Rm9ybS5wcm9wVHlwZXMgPSB7XHJcblx0aXNMb2FkaW5nOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG5cdFx0dHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG5cdFx0c3RhdHVzOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkXHJcblx0fSksXHJcblx0aGFuZGxlQ29tbWVudDogUHJvcFR5cGVzLmZ1bmMsXHJcblx0dXNlckNvbW1lbnQ6IFByb3BUeXBlcy5vYmplY3QsXHJcblx0bmV3c0ZlZWRJRDogUHJvcFR5cGVzLm51bWJlcixcclxuXHRuZXdzRmVlZENvbW1lbnRJRDogUHJvcFR5cGVzLm51bWJlcixcclxuXHRpc1JlcGxheTogUHJvcFR5cGVzLmJvb2xcclxufTtcclxuQ29tbWVudEZvcm0uZGVmYXVsdFByb3BzID0ge1xyXG5cdGlzTG9hZGluZzogeyB0eXBlOiAnJywgc3RhdHVzOiBmYWxzZSB9LFxyXG5cdGhhbmRsZUNvbW1lbnQ6IG51bGwsXHJcblx0dXNlckNvbW1lbnQ6IHt9LFxyXG5cdG5ld3NGZWVkSUQ6IDAsXHJcblx0bmV3c0ZlZWRDb21tZW50SUQ6IDAsXHJcblx0aXNSZXBseTogZmFsc2VcclxufTtcclxuXHJcbmZ1bmN0aW9uIENvbW1lbnRGb3JtKHByb3BzKSB7XHJcblx0Y29uc3QgeyBpc0xvYWRpbmcsIGRhdGFVc2VyLCBoYW5kbGVDb21tZW50LCBuZXdzRmVlZElELCBpc1JlcGxheSwgbmV3c0ZlZWRDb21tZW50SUQgfSA9IHByb3BzO1xyXG5cclxuXHRjb25zdCBzY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xyXG5cdFx0Q29tbWVudENvbnRlbnQ6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZCgnQuG6oW4ga2jDtG5nIMSRxrDhu6NjIGLhu48gdHLhu5FuZycpXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IGRlZmF1bHRWYWx1ZXNJbml0ID0ge1xyXG5cdFx0Q29tbWVudENvbnRlbnQ6ICcnXHJcblx0fTtcclxuXHJcblx0Y29uc3QgZm9ybSA9IHVzZUZvcm0oe1xyXG5cdFx0ZGVmYXVsdFZhbHVlczogZGVmYXVsdFZhbHVlc0luaXQsXHJcblx0XHRyZXNvbHZlcjogeXVwUmVzb2x2ZXIoc2NoZW1hKVxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBjaGVja0hhbmRsZUNvbW1lbnQgPSAoZGF0YTogeyBDb21tZW50Q29udGVudDogc3RyaW5nIH0pID0+IHtcclxuXHRcdGlmICghaGFuZGxlQ29tbWVudCkgcmV0dXJuO1xyXG5cdFx0Y29uc3QgbmV3RGF0YSA9IGlzUmVwbGF5XHJcblx0XHRcdD8ge1xyXG5cdFx0XHRcdFx0UmVwbHlDb250ZW50OiBkYXRhLkNvbW1lbnRDb250ZW50LFxyXG5cdFx0XHRcdFx0TmV3c0ZlZWRDb21tZW50SUQ6IG5ld3NGZWVkQ29tbWVudElEXHJcblx0XHRcdCAgfVxyXG5cdFx0XHQ6IHsgLi4uZGF0YSwgTmV3c0ZlZWRJRDogbmV3c0ZlZWRJRCB9O1xyXG5cdFx0aGFuZGxlQ29tbWVudChuZXdEYXRhKS50aGVuKChyZXMpID0+IHJlcyAmJiBmb3JtLnJlc2V0KHsgLi4uZGVmYXVsdFZhbHVlc0luaXQgfSkpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImluZm8tY3VycmVudC11c2VyIHVzZXItY29tbWVudFwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG5cdFx0XHRcdDxpbWcgc3JjPXtkYXRhVXNlcj8uQXZhdGFyIHx8ICcvaW1hZ2VzL3VzZXIucG5nJ30gYWx0PVwiXCIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtY29tbWVudHNcIj5cclxuXHRcdFx0XHQ8Rm9ybSBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiIG9uRmluaXNoPXtmb3JtLmhhbmRsZVN1Ym1pdChjaGVja0hhbmRsZUNvbW1lbnQpfT5cclxuXHRcdFx0XHRcdDxJbnB1dFRleHRGaWVsZCBmb3JtPXtmb3JtfSBuYW1lPVwiQ29tbWVudENvbnRlbnRcIiBhbGxvd0NsZWFyPXtmYWxzZX0gLz5cclxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImlucHV0LWJ0biBidG5cIiBkaXNhYmxlZD17aXNMb2FkaW5nLnR5cGUgPT09ICdBRERfQ09NTUVOVCcgJiYgaXNMb2FkaW5nLnN0YXR1c30+XHJcblx0XHRcdFx0XHRcdEfhu61pXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L0Zvcm0+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudEZvcm07XHJcbiIsImltcG9ydCB7IEltYWdlLCBQb3BvdmVyLCBTcGluIH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTWVzc2FnZUNpcmNsZSwgTW9yZUhvcml6b250YWwsIE5hdmlnYXRpb24sIFRodW1ic1VwIH0gZnJvbSAncmVhY3QtZmVhdGhlcidcclxuaW1wb3J0IHsgZm1EYXRlRnJvbU5vdyB9IGZyb20gJ34vdXRpbHMvZnVuY3Rpb25zJ1xyXG5pbXBvcnQgQ29tbWVudCBmcm9tICcuL0NvbW1lbnQnXHJcbmltcG9ydCBDb21tZW50Rm9ybSBmcm9tICcuL0NvbW1lbnRGb3JtJ1xyXG5pbXBvcnQgTGlua2lmeSBmcm9tICdyZWFjdC1saW5raWZ5J1xyXG5cclxuTmV3c0ZlZWRJdGVtLnByb3BUeXBlcyA9IHtcclxuXHQvLyBGSUxURVIgU0VBUkNIIEhBTkRMRVxyXG5cdGhhbmRsZUZpbHRlcnM6IFByb3BUeXBlcy5mdW5jLFxyXG5cdC8vIExJS0UgSEFORExFXHJcblx0aXNVc2VyTGlrZWQ6IFByb3BUeXBlcy5ib29sLFxyXG5cdGhhbmRsZVVzZXJMaWtlTmV3c0ZlZWQ6IFByb3BUeXBlcy5mdW5jLFxyXG5cdC8vIENPTU1FTlQgSEFORExFXHJcblx0aGFuZGxlQ29tbWVudDogUHJvcFR5cGVzLmZ1bmMsXHJcblx0ZmV0Y2hDb21tZW50OiBQcm9wVHlwZXMuZnVuYyxcclxuXHQvLyBSRVBMWSBIQU5ETEVcclxuXHRoYW5kbGVSZXBseUNvbW1lbnQ6IFByb3BUeXBlcy5mdW5jLFxyXG5cdGZldGNoUmVwbHlDb21tZW50OiBQcm9wVHlwZXMuZnVuYyxcclxuXHQvLyBJTkZPUk1BVElPTlxyXG5cdGl0ZW06IFByb3BUeXBlcy5zaGFwZSh7XHJcblx0XHRJRDogUHJvcFR5cGVzLm51bWJlcixcclxuXHRcdFVzZXJJbmZvcm1hdGlvbklEOiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cdFx0RnVsbE5hbWVVbmljb2RlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cdFx0QXZhdGFyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cdFx0Um9sZUlEOiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cdFx0Um9sZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcblx0XHRHcm91cE5ld3NGZWVkSUQ6IFByb3BUeXBlcy5udW1iZXIsXHJcblx0XHRHcm91cE5ld3NGZWVkTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuXHRcdENvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblx0XHRUeXBlRmlsZTogUHJvcFR5cGVzLm51bWJlcixcclxuXHRcdGlzQ29tbWVudDogUHJvcFR5cGVzLmJvb2wsXHJcblx0XHRDb21tZW50Q291bnQ6IFByb3BUeXBlcy5udW1iZXIsXHJcblx0XHRpc0xpa2U6IFByb3BUeXBlcy5ib29sLFxyXG5cdFx0TGlrZUNvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cdFx0TmV3c0ZlZWRGaWxlOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuXHRcdFx0UHJvcFR5cGVzLnNoYXBlKHtcclxuXHRcdFx0XHRJRDogUHJvcFR5cGVzLm51bWJlcixcclxuXHRcdFx0XHROYW1lRmlsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuXHRcdFx0XHRUeXBlOiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cdFx0XHRcdFR5cGVOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cdFx0XHRcdFVJRDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHRcdFx0XHRUaHVtbmFpbDogUHJvcFR5cGVzLnN0cmluZ1xyXG5cdFx0XHR9KVxyXG5cdFx0KSxcclxuXHRcdE5ld3NGZWVkQnJhbmNoOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuXHRcdFx0UHJvcFR5cGVzLnNoYXBlKHtcclxuXHRcdFx0XHRJRDogUHJvcFR5cGVzLm51bWJlcixcclxuXHRcdFx0XHRCcmFuY2hJRDogUHJvcFR5cGVzLm51bWJlcixcclxuXHRcdFx0XHRCcmFuY2hOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXHJcblx0XHRcdH0pXHJcblx0XHQpXHJcblx0fSksXHJcblx0aXNMb2FkaW5nOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG5cdFx0dHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG5cdFx0c3RhdHVzOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkXHJcblx0fSksXHJcblx0dXNlckNvbW1lbnQ6IFByb3BUeXBlcy5vYmplY3QsXHJcblx0Ly9DT01QT05FTlRcclxuXHRtb3JlQWN0aW9uQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFxyXG59XHJcbk5ld3NGZWVkSXRlbS5kZWZhdWx0UHJvcHMgPSB7XHJcblx0Ly8gRklMVEVSIFNFQVJDSCBIQU5ETEVcclxuXHRoYW5kbGVGaWx0ZXJzOiBudWxsLFxyXG5cdC8vIExJS0UgSEFORExFXHJcblx0aXNVc2VyTGlrZWQ6IGZhbHNlLFxyXG5cdGhhbmRsZVVzZXJMaWtlTmV3c0ZlZWQ6IG51bGwsXHJcblx0Ly8gQ09NTUVOVCBIQU5ETEVcclxuXHRoYW5kbGVDb21tZW50OiBudWxsLFxyXG5cdGZldGNoQ29tbWVudDogbnVsbCxcclxuXHQvLyBSRVBMWSBIQU5ETEVcclxuXHRoYW5kbGVSZXBseUNvbW1lbnQ6IG51bGwsXHJcblx0ZmV0Y2hSZXBseUNvbW1lbnQ6IG51bGwsXHJcblx0Ly8gSU5GT1JNQVRJT05cclxuXHRpdGVtOiB7XHJcblx0XHRJRDogMCxcclxuXHRcdFVzZXJJbmZvcm1hdGlvbklEOiAwLFxyXG5cdFx0RnVsbE5hbWVVbmljb2RlOiAnJyxcclxuXHRcdEF2YXRhcjogJycsXHJcblx0XHRSb2xlSUQ6IDAsXHJcblx0XHRSb2xlTmFtZTogJycsXHJcblx0XHRHcm91cE5ld3NGZWVkSUQ6IDAsXHJcblx0XHRHcm91cE5ld3NGZWVkTmFtZTogJycsXHJcblx0XHRDb250ZW50OiAnJyxcclxuXHRcdFR5cGVGaWxlOiAwLFxyXG5cdFx0aXNDb21tZW50OiBmYWxzZSxcclxuXHRcdENvbW1lbnRDb3VudDogMCxcclxuXHRcdGlzTGlrZTogZmFsc2UsXHJcblx0XHRMaWtlQ291bnQ6IDAsXHJcblx0XHROZXdzRmVlZEZpbGU6IFtdLFxyXG5cdFx0TmV3c0ZlZWRCcmFuY2g6IFtdXHJcblx0fSxcclxuXHRpc0xvYWRpbmc6IHsgdHlwZTogJycsIHN0YXR1czogZmFsc2UgfSxcclxuXHR1c2VyQ29tbWVudDoge30sXHJcblx0Ly9DT01QT05FTlRcclxuXHRtb3JlQWN0aW9uQ29tcG9uZW50OiBudWxsXHJcbn1cclxuZnVuY3Rpb24gTmV3c0ZlZWRJdGVtKHByb3BzKSB7XHJcblx0Y29uc3Qge1xyXG5cdFx0Ly8gRklMVEVSIFNFQVJDSCBIQU5ETEVcclxuXHRcdGhhbmRsZUZpbHRlcnMsXHJcblx0XHQvLyBMSUtFIEhBTkRMRVxyXG5cdFx0aXNVc2VyTGlrZWQsXHJcblx0XHRoYW5kbGVVc2VyTGlrZU5ld3NGZWVkLFxyXG5cdFx0Ly8gQ09NTUVOVCBIQU5ETEVcclxuXHRcdGhhbmRsZUNvbW1lbnQsXHJcblx0XHRmZXRjaENvbW1lbnQsXHJcblx0XHQvLyBSRVBMWSBIQU5ETEVcclxuXHRcdGhhbmRsZVJlcGx5Q29tbWVudCxcclxuXHRcdGZldGNoUmVwbHlDb21tZW50LFxyXG5cdFx0Ly8gSU5GT1JNQVRJT05cclxuXHRcdGl0ZW0sXHJcblx0XHRpc0xvYWRpbmcsXHJcblx0XHR1c2VyQ29tbWVudCxcclxuXHRcdC8vIENPTVBPTkVOVFxyXG5cdFx0bW9yZUFjdGlvbkNvbXBvbmVudFxyXG5cdH0gPSBwcm9wc1xyXG5cdGNvbnN0IFtzaG93Q29tbWVudHMsIHNldFNob3dDb21tZW50c10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHRjb25zdCBbY29tbWVudExpc3QsIHNldENvbW1lbnRMaXN0XSA9IHVzZVN0YXRlPElOZXdzRmVlZENvbW1lbnRbXT4oW10pXHJcblx0Y29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG5cdGNvbnN0IGhhbmRsZVNob3dDb21tZW50cyA9ICgpID0+IHtcclxuXHRcdHNldFNob3dDb21tZW50cyghc2hvd0NvbW1lbnRzKVxyXG5cdH1cclxuXHJcblx0Ly8gRklMVEVSIEFORCBTT1JUXHJcblx0Y29uc3QgY2hlY2tIYW5kbGVGaWx0ZXJzID0gKGZpZWxkOiBzdHJpbmcsIHZhbHVlKSA9PiB7XHJcblx0XHRpZiAoIWhhbmRsZUZpbHRlcnMpIHJldHVyblxyXG5cdFx0cmV0dXJuICgpID0+IGhhbmRsZUZpbHRlcnMoZmllbGQsIHZhbHVlKVxyXG5cdH1cclxuXHQvLyBMSUtFXHJcblx0Y29uc3QgY2hlY2tIYW5kbGVVc2VyTGlrZU5ld3NGZWVkID0gKElEOiBudW1iZXIpID0+IHtcclxuXHRcdGlmICghaGFuZGxlVXNlckxpa2VOZXdzRmVlZCkgcmV0dXJuXHJcblx0XHRoYW5kbGVVc2VyTGlrZU5ld3NGZWVkKElEKVxyXG5cdH1cclxuXHQvLyBDT01NRU5UXHJcblx0Y29uc3QgY2hlY2tIYW5kbGVDb21tZW50ID0gKGRhdGE6IHsgQ29tbWVudENvbnRlbnQ6IHN0cmluZzsgTmV3c0ZlZWRJRDogbnVtYmVyIH0pID0+IHtcclxuXHRcdGlmICghaGFuZGxlQ29tbWVudCkgcmV0dXJuXHJcblx0XHRyZXR1cm4gaGFuZGxlQ29tbWVudChkYXRhKS50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0aWYgKHJlcz8uc3RhdHVzID09PSAyMDApIHtcclxuXHRcdFx0XHRzZXRDb21tZW50TGlzdChbcmVzLmRhdGEuZGF0YSwgLi4uY29tbWVudExpc3RdKVxyXG5cdFx0XHRcdHJldHVybiB0cnVlXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fVxyXG5cdGNvbnN0IGNoZWNrRmV0Y2hDb21tZW50ID0gKElEOiBudW1iZXIpID0+IHtcclxuXHRcdGlmICghZmV0Y2hDb21tZW50KSByZXR1cm5cclxuXHRcdGlmICghc2hvd0NvbW1lbnRzKSB7XHJcblx0XHRcdGZldGNoQ29tbWVudChJRCkudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdFx0aWYgKHJlcz8uc3RhdHVzID09PSAyMDApIHtcclxuXHRcdFx0XHRcdHNldENvbW1lbnRMaXN0KHJlcy5kYXRhLmRhdGEpXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHNldENvbW1lbnRMaXN0KFtdKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIElNQUdFUyBMSVNUXHJcblx0Y29uc3QgY2hlY2tVSUltYWdlTGlzdCA9IChpbWFnZUxpc3QpID0+IHtcclxuXHRcdGNvbnN0IGxlbmd0aCA9IGltYWdlTGlzdC5sZW5ndGhcclxuXHRcdGlmIChsZW5ndGggPj0gMykge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9yZS10aGFuLTMtaW1hZ2VzXCI+XHJcblx0XHRcdFx0XHR7aW1hZ2VMaXN0LnNsaWNlKDAsIDIpLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdFx0PEltYWdlIGtleT17aW5kZXh9IHNyYz17aXRlbS5OYW1lRmlsZX0gcHJldmlldz17ZmFsc2V9IHdpZHRoPXsnNTAlJ30gb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZSh0cnVlKX0gLz5cclxuXHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3LXRvdGFsXCIgb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZSh0cnVlKX0+XHJcblx0XHRcdFx0XHRcdCsge2ltYWdlTGlzdC5sZW5ndGggLSAyfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdClcclxuXHRcdH1cclxuXHRcdGlmIChsZW5ndGggPj0gMikge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidHdvLWltYWdlc1wiPlxyXG5cdFx0XHRcdFx0e2ltYWdlTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdDxJbWFnZSBrZXk9e2luZGV4fSBzcmM9e2l0ZW0uTmFtZUZpbGV9IHByZXZpZXc9e2ZhbHNlfSB3aWR0aD17JzUwJSd9IG9uQ2xpY2s9eygpID0+IHNldFZpc2libGUodHJ1ZSl9IC8+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KVxyXG5cdFx0fVxyXG5cdFx0aWYgKGxlbmd0aCA+PSAxKSB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvbmUtaW1hZ2VcIj5cclxuXHRcdFx0XHRcdHtpbWFnZUxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8SW1hZ2Uga2V5PXtpbmRleH0gc3JjPXtpdGVtLk5hbWVGaWxlfSBwcmV2aWV3PXtmYWxzZX0gd2lkdGg9eycxMDAlJ30gb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZSh0cnVlKX0gLz5cclxuXHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpXHJcblx0XHR9XHJcblx0fVxyXG5cdGNvbnN0IHJlbmRlckltYWdlTGlzdCA9ICgpID0+IHtcclxuXHRcdGNvbnN0IGltYWdlTGlzdCA9IGl0ZW0uTmV3c0ZlZWRGaWxlLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5UeXBlID09PSAyKVxyXG5cdFx0aWYgKGltYWdlTGlzdC5sZW5ndGggPiAwKSB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXdzZmVlZC1pbWFnZXNcIj5cclxuXHRcdFx0XHRcdHtjaGVja1VJSW1hZ2VMaXN0KGltYWdlTGlzdCl9XHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fT5cclxuXHRcdFx0XHRcdFx0PEltYWdlLlByZXZpZXdHcm91cFxyXG5cdFx0XHRcdFx0XHRcdHByZXZpZXc9e3tcclxuXHRcdFx0XHRcdFx0XHRcdHZpc2libGUsXHJcblx0XHRcdFx0XHRcdFx0XHRvblZpc2libGVDaGFuZ2U6ICh2aXMpID0+IHNldFZpc2libGUodmlzKVxyXG5cdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHR7aW1hZ2VMaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxJbWFnZSBzcmM9e2l0ZW0uTmFtZUZpbGV9IGtleT17aW5kZXh9IC8+XHJcblx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdDwvSW1hZ2UuUHJldmlld0dyb3VwPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdClcclxuXHRcdH1cclxuXHR9XHJcblx0Ly8gQVVESU8gTElTVFxyXG5cdGNvbnN0IHJlbmRlckF1ZGlvTGlzdCA9ICgpID0+IHtcclxuXHRcdGNvbnN0IGF1ZGlvTGlzdCA9IGl0ZW0uTmV3c0ZlZWRGaWxlLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5UeXBlID09PSAzKVxyXG5cdFx0aWYgKGF1ZGlvTGlzdC5sZW5ndGggPiAwKSB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXdzZmVlZC1hdWRpb1wiPlxyXG5cdFx0XHRcdFx0e2F1ZGlvTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdDxhdWRpbyBjbGFzc05hbWU9XCJhdWRpby10YWdcIiBjb250cm9scyBrZXk9e2luZGV4fT5cclxuXHRcdFx0XHRcdFx0XHQ8c291cmNlIHNyYz17aXRlbS5OYW1lRmlsZX0gdHlwZT1cImF1ZGlvL29nZ1wiIC8+XHJcblx0XHRcdFx0XHRcdFx0PHNvdXJjZSBzcmM9e2l0ZW0uTmFtZUZpbGV9IHR5cGU9XCJhdWRpby9tcGVnXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgYXVkaW8gZWxlbWVudC5cclxuXHRcdFx0XHRcdFx0PC9hdWRpbz5cclxuXHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpXHJcblx0XHR9XHJcblx0fVxyXG5cdC8vIFZJREVPIExJU1RcclxuXHRjb25zdCByZW5kZXJWaWRlb0xpc3QgPSAoKSA9PiB7XHJcblx0XHRjb25zdCB2aWRlb0xpc3QgPSBpdGVtLk5ld3NGZWVkRmlsZS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uVHlwZSA9PT0gNClcclxuXHRcdGlmICh2aWRlb0xpc3QubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV3c2ZlZWQtdmlkZW9cIj5cclxuXHRcdFx0XHRcdHt2aWRlb0xpc3QubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8dmlkZW8gY2xhc3NOYW1lPVwidmlkZW8tdGFnXCIgY29udHJvbHMga2V5PXtpbmRleH0+XHJcblx0XHRcdFx0XHRcdFx0PHNvdXJjZSBzcmM9e2l0ZW0uTmFtZUZpbGV9IHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDxzb3VyY2Ugc3JjPXtpdGVtLk5hbWVGaWxlfSB0eXBlPVwidmlkZW8vb2dnXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgdmlkZW8gdGFnLlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZGVvPlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdClcclxuXHRcdH1cclxuXHR9XHJcblx0Ly8gTElHSFQgQk9YXHJcblx0Y29uc3QgcmVuZGVyTmV3c0ZlZWRCYWNrZ3JvdW5kID0gKCkgPT4ge1xyXG5cdFx0Y29uc3QgaXNOZXdzRmVlZEJhY2tncm91bmQgPSBpdGVtLlR5cGVGaWxlID09PSAxXHJcblx0XHRpZiAoaXNOZXdzRmVlZEJhY2tncm91bmQgJiYgaXRlbS5OZXdzRmVlZEZpbGUubGVuZ3RoID09PSAxKSB7XHJcblx0XHRcdGNvbnN0IGJhY2tncm91bmRGaWxlID0gaXRlbS5OZXdzRmVlZEZpbGVbMF1cclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJuZXdzZmVlZC1iYWNrZ3JvdW5kXCJcclxuXHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiBpdGVtLkNvbG9yLFxyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtiYWNrZ3JvdW5kRmlsZS5OYW1lRmlsZX0pYFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8TGlua2lmeVxyXG5cdFx0XHRcdFx0XHRjb21wb25lbnREZWNvcmF0b3I9eyhkZWNvcmF0ZWRIcmVmLCBkZWNvcmF0ZWRUZXh0LCBrZXkpID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8YSB0YXJnZXQ9XCJibGFua1wiIGhyZWY9e2RlY29yYXRlZEhyZWZ9IGtleT17a2V5fT5cclxuXHRcdFx0XHRcdFx0XHRcdHtkZWNvcmF0ZWRUZXh0fVxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PHNwYW4+e2l0ZW0uQ29udGVudH08L3NwYW4+XHJcblx0XHRcdFx0XHQ8L0xpbmtpZnk+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdClcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIChcclxuXHRcdDxsaSBjbGFzc05hbWU9XCJpdGVtLW5mXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV3c2ZlZWRcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5ld3NmZWVkLWhlYWRlclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbmZvLWN1cnJlbnQtdXNlclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtpdGVtLkF2YXRhciB8fCAnL2ltYWdlcy91c2VyLnBuZyd9IGFsdD1cImF2YXRhclwiIC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hbWUtdXNlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgb25DbGljaz17Y2hlY2tIYW5kbGVGaWx0ZXJzKCduYW1lJywgaXRlbS5GdWxsTmFtZVVuaWNvZGUpfT57aXRlbS5GdWxsTmFtZVVuaWNvZGV9PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwic2hhcmUtcG9pbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PE5hdmlnYXRpb24gLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLk5ld3NGZWVkQnJhbmNoLm1hcCgoaXRlbSwgaWR4KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGtleT17aWR4fSBjbGFzc05hbWU9XCJpdGVtLWJyYW5jaFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0uQnJhbmNoTmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibmV3c2ZlZWQtdGltZVwiPntmbURhdGVGcm9tTm93KGl0ZW0uQ3JlYXRlZE9uKX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5ld3NmZWVkLW1vcmVcIj5cclxuXHRcdFx0XHRcdFx0e21vcmVBY3Rpb25Db21wb25lbnQgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDxQb3BvdmVyIHpJbmRleD17OTk5fSBjb250ZW50PXttb3JlQWN0aW9uQ29tcG9uZW50fSBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tbW9yZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TW9yZUhvcml6b250YWwgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDwvUG9wb3Zlcj5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdHtpdGVtLkNvbnRlbnQgJiYgaXRlbS5UeXBlRmlsZSAhPT0gMSAmJiAoXHJcblx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5ld3NmZWVkLWNvbnRlbnRcIlxyXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdGNvbG9yOiBpdGVtLkNvbG9yXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxMaW5raWZ5XHJcblx0XHRcdFx0XHRcdFx0Y29tcG9uZW50RGVjb3JhdG9yPXsoZGVjb3JhdGVkSHJlZiwgZGVjb3JhdGVkVGV4dCwga2V5KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8YSB0YXJnZXQ9XCJibGFua1wiIGhyZWY9e2RlY29yYXRlZEhyZWZ9IGtleT17a2V5fSBzdHlsZT17eyBmb250V2VpZ2h0OiA1MDAgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtkZWNvcmF0ZWRUZXh0fVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj57aXRlbS5Db250ZW50fTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9MaW5raWZ5PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0XHR7LyogU0hPVyBJTUFHRSBPUiBGSUxFICovfVxyXG5cdFx0XHRcdHtyZW5kZXJJbWFnZUxpc3QoKX1cclxuXHRcdFx0XHR7cmVuZGVyVmlkZW9MaXN0KCl9XHJcblx0XHRcdFx0e3JlbmRlckF1ZGlvTGlzdCgpfVxyXG5cdFx0XHRcdHtyZW5kZXJOZXdzRmVlZEJhY2tncm91bmQoKX1cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5ld3NmZWVkLXRvdGFsXCI+XHJcblx0XHRcdFx0XHR7aXRlbS5MaWtlQ291bnQgPiAwICYmIChcclxuXHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0PFRodW1ic1VwIGNvbG9yPVwiIzA1NzFlNVwiIC8+IHtpdGVtLkxpa2VDb3VudH1cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdHsoY29tbWVudExpc3QubGVuZ3RoID4gMCB8fCBpdGVtLkNvbW1lbnRDb3VudCA+IDApICYmIChcclxuXHRcdFx0XHRcdFx0PHBcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ0b3RhbC1jb21tZW50c1wiXHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tGZXRjaENvbW1lbnQoaXRlbS5JRClcclxuXHRcdFx0XHRcdFx0XHRcdGhhbmRsZVNob3dDb21tZW50cygpXHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdHtjb21tZW50TGlzdC5sZW5ndGggfHwgaXRlbS5Db21tZW50Q291bnR9IELDrG5oIGx14bqtblxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV3c2ZlZWQtYWN0aW9uXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbiB3LTEwMFwiPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17aXNVc2VyTGlrZWQgPyAnYnRuIGJ0bi1saWdodCBhY3RpdmUnIDogJ2J0biBidG4tbGlnaHQnfSBvbkNsaWNrPXsoKSA9PiBjaGVja0hhbmRsZVVzZXJMaWtlTmV3c0ZlZWQoaXRlbS5JRCl9PlxyXG5cdFx0XHRcdFx0XHRcdDxUaHVtYnNVcCAvPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm1sLTJcIj5UaMOtY2g8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFjdGlvblwiPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnRuIGJ0bi1saWdodFwiXHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tGZXRjaENvbW1lbnQoaXRlbS5JRClcclxuXHRcdFx0XHRcdFx0XHRcdGhhbmRsZVNob3dDb21tZW50cygpXHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxNZXNzYWdlQ2lyY2xlIC8+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4+QsOsbmggbHXhuq1uPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzaG93Q29tbWVudHMgPyAnbmV3c2ZlZWQtY29tbWVudHMnIDogJ2hpZGUnfT5cclxuXHRcdFx0XHRcdDxDb21tZW50Rm9ybSBpc0xvYWRpbmc9e2lzTG9hZGluZ30gdXNlckNvbW1lbnQ9e3VzZXJDb21tZW50fSBoYW5kbGVDb21tZW50PXtjaGVja0hhbmRsZUNvbW1lbnR9IG5ld3NGZWVkSUQ9e2l0ZW0uSUR9IC8+XHJcblx0XHRcdFx0XHR7Y29tbWVudExpc3QubGVuZ3RoID4gMCAmJiAoXHJcblx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJsaXN0LWNvbW1lbnRzXCI+XHJcblx0XHRcdFx0XHRcdFx0e2NvbW1lbnRMaXN0Lm1hcCgoY210LCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PENvbW1lbnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtjbXQuSUR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlzTG9hZGluZz17aXNMb2FkaW5nfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhQ29tbWVudD17Y210fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRmZXRjaFJlcGx5Q29tbWVudD17ZmV0Y2hSZXBseUNvbW1lbnR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZVJlcGx5Q29tbWVudD17aGFuZGxlUmVwbHlDb21tZW50fVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHR7IWNvbW1lbnRMaXN0Lmxlbmd0aCAmJiBpc0xvYWRpbmcudHlwZSA9PT0gYEZFVENIX0NPTU1FTlRfJHtpdGVtLklEfWAgJiYgaXNMb2FkaW5nLnN0YXR1cyAmJiAoXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8U3BpbiAvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9saT5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld3NGZWVkSXRlbVxyXG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBmbURhdGVGcm9tTm93IH0gZnJvbSAnfi91dGlscy9mdW5jdGlvbnMnO1xyXG5cclxuUmVwbHlDb21tZW50LnByb3BUeXBlcyA9IHtcclxuXHRyZXBseUNvbW1lbnRMaXN0OiBQcm9wVHlwZXMuc2hhcGUoe1xyXG5cdFx0SUQ6IFByb3BUeXBlcy5udW1iZXIsXHJcblx0XHROZXdzRmVlZENvbW1lbnRJRDogUHJvcFR5cGVzLm51bWJlcixcclxuXHRcdFVzZXJJbmZvcm1hdGlvbklEOiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cdFx0RnVsbE5hbWVVbmljb2RlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cdFx0UmVwbHlDb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cdFx0QXZhdGFyOiBQcm9wVHlwZXMuc3RyaW5nXHJcblx0fSlcclxufTtcclxuUmVwbHlDb21tZW50LmRlZmF1bHRQcm9wcyA9IHtcclxuXHRyZXBseUNvbW1lbnRMaXN0OiB7XHJcblx0XHRJRDogMCxcclxuXHRcdE5ld3NGZWVkQ29tbWVudElEOiAwLFxyXG5cdFx0VXNlckluZm9ybWF0aW9uSUQ6IDAsXHJcblx0XHRGdWxsTmFtZVVuaWNvZGU6ICcnLFxyXG5cdFx0UmVwbHlDb250ZW50OiAnJyxcclxuXHRcdEF2YXRhcjogJydcclxuXHR9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBSZXBseUNvbW1lbnQocHJvcHMpIHtcclxuXHRjb25zdCB7IHJlcGx5Q29tbWVudExpc3QgfSA9IHByb3BzO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8dWwgY2xhc3NOYW1lPVwibGlzdC1jb21tZW50c1wiPlxyXG5cdFx0XHR7cmVwbHlDb21tZW50TGlzdC5tYXAoKGl0ZW06IElOZXdzRmVlZENvbW1lbnRSZXBseSwgaW5kZXgpID0+IChcclxuXHRcdFx0XHQ8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiaXRlbS1jb21tZW50XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImluZm8tY3VycmVudC11c2VyXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e2l0ZW0uQXZhdGFyIHx8ICcvaW1hZ2VzL3VzZXIucG5nJ30gYWx0PVwiYXZhdGFyXCIgLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb21tZW50IHJlcGx5XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3gtY29tbWVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibmFtZS1jb21tZW50IGZvbnQtd2VpZ2h0LWJsYWNrXCI+e2l0ZW0uRnVsbE5hbWVVbmljb2RlfTwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdHtpdGVtLlJlcGx5Q29udGVudH1cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0aW1lLWNvbW1lbnRcIj57Zm1EYXRlRnJvbU5vdyhpdGVtLkNyZWF0ZWRPbil9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdCkpfVxyXG5cdFx0PC91bD5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXBseUNvbW1lbnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=