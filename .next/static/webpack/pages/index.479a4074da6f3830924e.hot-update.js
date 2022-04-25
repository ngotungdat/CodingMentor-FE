webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var react_linkify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-linkify */ "./node_modules/react-linkify/dist/index.js");
/* harmony import */ var react_linkify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_linkify__WEBPACK_IMPORTED_MODULE_7__);



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
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_linkify__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_linkify__WEBPACK_IMPORTED_MODULE_7___default.a, {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvR2xvYmFsL05ld3NGZWVkL05ld3NGZWVkSXRlbUNvbXBvbmVudHMvTmV3c0ZlZWRJdGVtLnRzeCJdLCJuYW1lcyI6WyJOZXdzRmVlZEl0ZW0iLCJwcm9wVHlwZXMiLCJoYW5kbGVGaWx0ZXJzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzVXNlckxpa2VkIiwiYm9vbCIsImhhbmRsZVVzZXJMaWtlTmV3c0ZlZWQiLCJoYW5kbGVDb21tZW50IiwiZmV0Y2hDb21tZW50IiwiaGFuZGxlUmVwbHlDb21tZW50IiwiZmV0Y2hSZXBseUNvbW1lbnQiLCJpdGVtIiwic2hhcGUiLCJJRCIsIm51bWJlciIsIlVzZXJJbmZvcm1hdGlvbklEIiwiRnVsbE5hbWVVbmljb2RlIiwic3RyaW5nIiwiQXZhdGFyIiwiUm9sZUlEIiwiUm9sZU5hbWUiLCJHcm91cE5ld3NGZWVkSUQiLCJHcm91cE5ld3NGZWVkTmFtZSIsIkNvbnRlbnQiLCJUeXBlRmlsZSIsImlzQ29tbWVudCIsIkNvbW1lbnRDb3VudCIsImlzTGlrZSIsIkxpa2VDb3VudCIsIk5ld3NGZWVkRmlsZSIsImFycmF5T2YiLCJOYW1lRmlsZSIsIlR5cGUiLCJUeXBlTmFtZSIsIlVJRCIsIlRodW1uYWlsIiwiTmV3c0ZlZWRCcmFuY2giLCJCcmFuY2hJRCIsIkJyYW5jaE5hbWUiLCJpc0xvYWRpbmciLCJ0eXBlIiwiaXNSZXF1aXJlZCIsInN0YXR1cyIsInVzZXJDb21tZW50Iiwib2JqZWN0IiwibW9yZUFjdGlvbkNvbXBvbmVudCIsImVsZW1lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wcyIsInVzZVN0YXRlIiwic2hvd0NvbW1lbnRzIiwic2V0U2hvd0NvbW1lbnRzIiwiY29tbWVudExpc3QiLCJzZXRDb21tZW50TGlzdCIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiaGFuZGxlU2hvd0NvbW1lbnRzIiwiY2hlY2tIYW5kbGVGaWx0ZXJzIiwiZmllbGQiLCJ2YWx1ZSIsImNoZWNrSGFuZGxlVXNlckxpa2VOZXdzRmVlZCIsImNoZWNrSGFuZGxlQ29tbWVudCIsImRhdGEiLCJ0aGVuIiwicmVzIiwiY2hlY2tGZXRjaENvbW1lbnQiLCJjaGVja1VJSW1hZ2VMaXN0IiwiaW1hZ2VMaXN0IiwibGVuZ3RoIiwic2xpY2UiLCJtYXAiLCJpbmRleCIsInJlbmRlckltYWdlTGlzdCIsImZpbHRlciIsImRpc3BsYXkiLCJvblZpc2libGVDaGFuZ2UiLCJ2aXMiLCJyZW5kZXJBdWRpb0xpc3QiLCJhdWRpb0xpc3QiLCJyZW5kZXJWaWRlb0xpc3QiLCJ2aWRlb0xpc3QiLCJyZW5kZXJOZXdzRmVlZEJhY2tncm91bmQiLCJpc05ld3NGZWVkQmFja2dyb3VuZCIsImJhY2tncm91bmRGaWxlIiwiY29sb3IiLCJDb2xvciIsImJhY2tncm91bmRJbWFnZSIsImRlY29yYXRlZEhyZWYiLCJkZWNvcmF0ZWRUZXh0Iiwia2V5IiwiaWR4IiwiZm1EYXRlRnJvbU5vdyIsIkNyZWF0ZWRPbiIsImZvbnRXZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUFBLFlBQVksQ0FBQ0MsU0FBYixHQUF5QjtBQUN4QjtBQUNBQyxlQUFhLEVBQUVDLGlEQUFTLENBQUNDLElBRkQ7QUFHeEI7QUFDQUMsYUFBVyxFQUFFRixpREFBUyxDQUFDRyxJQUpDO0FBS3hCQyx3QkFBc0IsRUFBRUosaURBQVMsQ0FBQ0MsSUFMVjtBQU14QjtBQUNBSSxlQUFhLEVBQUVMLGlEQUFTLENBQUNDLElBUEQ7QUFReEJLLGNBQVksRUFBRU4saURBQVMsQ0FBQ0MsSUFSQTtBQVN4QjtBQUNBTSxvQkFBa0IsRUFBRVAsaURBQVMsQ0FBQ0MsSUFWTjtBQVd4Qk8sbUJBQWlCLEVBQUVSLGlEQUFTLENBQUNDLElBWEw7QUFZeEI7QUFDQVEsTUFBSSxFQUFFVCxpREFBUyxDQUFDVSxLQUFWLENBQWdCO0FBQ3JCQyxNQUFFLEVBQUVYLGlE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Q0UsRUFBTixDQUFqQztBQUFBLGFBQXBGO0FBQUEsb0NBQ0MscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERCxlQUVDO0FBQU0sdUJBQVMsRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGVBT0M7QUFBSyxtQkFBUyxFQUFDLFFBQWY7QUFBQSxpQ0FDQztBQUNDLHFCQUFTLEVBQUMsZUFEWDtBQUVDLG1CQUFPLEVBQUUsbUJBQU07QUFDZG9ELCtCQUFpQixDQUFDdEQsSUFBSSxDQUFDRSxFQUFOLENBQWpCO0FBQ0EyQyxnQ0FBa0I7QUFDbEIsYUFMRjtBQUFBLG9DQU9DLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEQsZUFRQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFSRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNFRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUF5SEE7O0dBNVNRekQsWTs7S0FBQUEsWTtBQThTTUEsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDc5YTQwNzRkYTZmMzgzMDkyNGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEltYWdlLCBQb3BvdmVyLCBTcGluIH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTWVzc2FnZUNpcmNsZSwgTW9yZUhvcml6b250YWwsIE5hdmlnYXRpb24sIFRodW1ic1VwIH0gZnJvbSAncmVhY3QtZmVhdGhlcidcclxuaW1wb3J0IHsgZm1EYXRlRnJvbU5vdyB9IGZyb20gJ34vdXRpbHMvZnVuY3Rpb25zJ1xyXG5pbXBvcnQgQ29tbWVudCBmcm9tICcuL0NvbW1lbnQnXHJcbmltcG9ydCBDb21tZW50Rm9ybSBmcm9tICcuL0NvbW1lbnRGb3JtJ1xyXG5pbXBvcnQgTGlua2lmeSBmcm9tICdyZWFjdC1saW5raWZ5J1xyXG5cclxuTmV3c0ZlZWRJdGVtLnByb3BUeXBlcyA9IHtcclxuXHQvLyBGSUxURVIgU0VBUkNIIEhBTkRMRVxyXG5cdGhhbmRsZUZpbHRlcnM6IFByb3BUeXBlcy5mdW5jLFxyXG5cdC8vIExJS0UgSEFORExFXHJcblx0aXNVc2VyTGlrZWQ6IFByb3BUeXBlcy5ib29sLFxyXG5cdGhhbmRsZVVzZXJMaWtlTmV3c0ZlZWQ6IFByb3BUeXBlcy5mdW5jLFxyXG5cdC8vIENPTU1FTlQgSEFORExFXHJcblx0aGFuZGxlQ29tbWVudDogUHJvcFR5cGVzLmZ1bmMsXHJcblx0ZmV0Y2hDb21tZW50OiBQcm9wVHlwZXMuZnVuYyxcclxuXHQvLyBSRVBMWSBIQU5ETEVcclxuXHRoYW5kbGVSZXBseUNvbW1lbnQ6IFByb3BUeXBlcy5mdW5jLFxyXG5cdGZldGNoUmVwbHlDb21tZW50OiBQcm9wVHlwZXMuZnVuYyxcclxuXHQvLyBJTkZPUk1BVElPTlxyXG5cdGl0ZW06IFByb3BUeXBlcy5zaGFwZSh7XHJcblx0XHRJRDogUHJvcFR5cGVzLm51bWJlcixcclxuXHRcdFVzZXJJbmZvcm1hdGlvbklEOiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cdFx0RnVsbE5hbWVVbmljb2RlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cdFx0QXZhdGFyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cdFx0Um9sZUlEOiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cdFx0Um9sZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcblx0XHRHcm91cE5ld3NGZWVkSUQ6IFByb3BUeXBlcy5udW1iZXIsXHJcblx0XHRHcm91cE5ld3NGZWVkTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuXHRcdENvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcblx0XHRUeXBlRmlsZTogUHJvcFR5cGVzLm51bWJlcixcclxuXHRcdGlzQ29tbWVudDogUHJvcFR5cGVzLmJvb2wsXHJcblx0XHRDb21tZW50Q291bnQ6IFByb3BUeXBlcy5udW1iZXIsXHJcblx0XHRpc0xpa2U6IFByb3BUeXBlcy5ib29sLFxyXG5cdFx0TGlrZUNvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cdFx0TmV3c0ZlZWRGaWxlOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuXHRcdFx0UHJvcFR5cGVzLnNoYXBlKHtcclxuXHRcdFx0XHRJRDogUHJvcFR5cGVzLm51bWJlcixcclxuXHRcdFx0XHROYW1lRmlsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuXHRcdFx0XHRUeXBlOiBQcm9wVHlwZXMubnVtYmVyLFxyXG5cdFx0XHRcdFR5cGVOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cdFx0XHRcdFVJRDogUHJvcFR5cGVzLnN0cmluZyxcclxuXHRcdFx0XHRUaHVtbmFpbDogUHJvcFR5cGVzLnN0cmluZ1xyXG5cdFx0XHR9KVxyXG5cdFx0KSxcclxuXHRcdE5ld3NGZWVkQnJhbmNoOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuXHRcdFx0UHJvcFR5cGVzLnNoYXBlKHtcclxuXHRcdFx0XHRJRDogUHJvcFR5cGVzLm51bWJlcixcclxuXHRcdFx0XHRCcmFuY2hJRDogUHJvcFR5cGVzLm51bWJlcixcclxuXHRcdFx0XHRCcmFuY2hOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXHJcblx0XHRcdH0pXHJcblx0XHQpXHJcblx0fSksXHJcblx0aXNMb2FkaW5nOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG5cdFx0dHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG5cdFx0c3RhdHVzOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkXHJcblx0fSksXHJcblx0dXNlckNvbW1lbnQ6IFByb3BUeXBlcy5vYmplY3QsXHJcblx0Ly9DT01QT05FTlRcclxuXHRtb3JlQWN0aW9uQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFxyXG59XHJcbk5ld3NGZWVkSXRlbS5kZWZhdWx0UHJvcHMgPSB7XHJcblx0Ly8gRklMVEVSIFNFQVJDSCBIQU5ETEVcclxuXHRoYW5kbGVGaWx0ZXJzOiBudWxsLFxyXG5cdC8vIExJS0UgSEFORExFXHJcblx0aXNVc2VyTGlrZWQ6IGZhbHNlLFxyXG5cdGhhbmRsZVVzZXJMaWtlTmV3c0ZlZWQ6IG51bGwsXHJcblx0Ly8gQ09NTUVOVCBIQU5ETEVcclxuXHRoYW5kbGVDb21tZW50OiBudWxsLFxyXG5cdGZldGNoQ29tbWVudDogbnVsbCxcclxuXHQvLyBSRVBMWSBIQU5ETEVcclxuXHRoYW5kbGVSZXBseUNvbW1lbnQ6IG51bGwsXHJcblx0ZmV0Y2hSZXBseUNvbW1lbnQ6IG51bGwsXHJcblx0Ly8gSU5GT1JNQVRJT05cclxuXHRpdGVtOiB7XHJcblx0XHRJRDogMCxcclxuXHRcdFVzZXJJbmZvcm1hdGlvbklEOiAwLFxyXG5cdFx0RnVsbE5hbWVVbmljb2RlOiAnJyxcclxuXHRcdEF2YXRhcjogJycsXHJcblx0XHRSb2xlSUQ6IDAsXHJcblx0XHRSb2xlTmFtZTogJycsXHJcblx0XHRHcm91cE5ld3NGZWVkSUQ6IDAsXHJcblx0XHRHcm91cE5ld3NGZWVkTmFtZTogJycsXHJcblx0XHRDb250ZW50OiAnJyxcclxuXHRcdFR5cGVGaWxlOiAwLFxyXG5cdFx0aXNDb21tZW50OiBmYWxzZSxcclxuXHRcdENvbW1lbnRDb3VudDogMCxcclxuXHRcdGlzTGlrZTogZmFsc2UsXHJcblx0XHRMaWtlQ291bnQ6IDAsXHJcblx0XHROZXdzRmVlZEZpbGU6IFtdLFxyXG5cdFx0TmV3c0ZlZWRCcmFuY2g6IFtdXHJcblx0fSxcclxuXHRpc0xvYWRpbmc6IHsgdHlwZTogJycsIHN0YXR1czogZmFsc2UgfSxcclxuXHR1c2VyQ29tbWVudDoge30sXHJcblx0Ly9DT01QT05FTlRcclxuXHRtb3JlQWN0aW9uQ29tcG9uZW50OiBudWxsXHJcbn1cclxuZnVuY3Rpb24gTmV3c0ZlZWRJdGVtKHByb3BzKSB7XHJcblx0Y29uc3Qge1xyXG5cdFx0Ly8gRklMVEVSIFNFQVJDSCBIQU5ETEVcclxuXHRcdGhhbmRsZUZpbHRlcnMsXHJcblx0XHQvLyBMSUtFIEhBTkRMRVxyXG5cdFx0aXNVc2VyTGlrZWQsXHJcblx0XHRoYW5kbGVVc2VyTGlrZU5ld3NGZWVkLFxyXG5cdFx0Ly8gQ09NTUVOVCBIQU5ETEVcclxuXHRcdGhhbmRsZUNvbW1lbnQsXHJcblx0XHRmZXRjaENvbW1lbnQsXHJcblx0XHQvLyBSRVBMWSBIQU5ETEVcclxuXHRcdGhhbmRsZVJlcGx5Q29tbWVudCxcclxuXHRcdGZldGNoUmVwbHlDb21tZW50LFxyXG5cdFx0Ly8gSU5GT1JNQVRJT05cclxuXHRcdGl0ZW0sXHJcblx0XHRpc0xvYWRpbmcsXHJcblx0XHR1c2VyQ29tbWVudCxcclxuXHRcdC8vIENPTVBPTkVOVFxyXG5cdFx0bW9yZUFjdGlvbkNvbXBvbmVudFxyXG5cdH0gPSBwcm9wc1xyXG5cdGNvbnN0IFtzaG93Q29tbWVudHMsIHNldFNob3dDb21tZW50c10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHRjb25zdCBbY29tbWVudExpc3QsIHNldENvbW1lbnRMaXN0XSA9IHVzZVN0YXRlPElOZXdzRmVlZENvbW1lbnRbXT4oW10pXHJcblx0Y29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG5cdGNvbnN0IGhhbmRsZVNob3dDb21tZW50cyA9ICgpID0+IHtcclxuXHRcdHNldFNob3dDb21tZW50cyghc2hvd0NvbW1lbnRzKVxyXG5cdH1cclxuXHJcblx0Ly8gRklMVEVSIEFORCBTT1JUXHJcblx0Y29uc3QgY2hlY2tIYW5kbGVGaWx0ZXJzID0gKGZpZWxkOiBzdHJpbmcsIHZhbHVlKSA9PiB7XHJcblx0XHRpZiAoIWhhbmRsZUZpbHRlcnMpIHJldHVyblxyXG5cdFx0cmV0dXJuICgpID0+IGhhbmRsZUZpbHRlcnMoZmllbGQsIHZhbHVlKVxyXG5cdH1cclxuXHQvLyBMSUtFXHJcblx0Y29uc3QgY2hlY2tIYW5kbGVVc2VyTGlrZU5ld3NGZWVkID0gKElEOiBudW1iZXIpID0+IHtcclxuXHRcdGlmICghaGFuZGxlVXNlckxpa2VOZXdzRmVlZCkgcmV0dXJuXHJcblx0XHRoYW5kbGVVc2VyTGlrZU5ld3NGZWVkKElEKVxyXG5cdH1cclxuXHQvLyBDT01NRU5UXHJcblx0Y29uc3QgY2hlY2tIYW5kbGVDb21tZW50ID0gKGRhdGE6IHsgQ29tbWVudENvbnRlbnQ6IHN0cmluZzsgTmV3c0ZlZWRJRDogbnVtYmVyIH0pID0+IHtcclxuXHRcdGlmICghaGFuZGxlQ29tbWVudCkgcmV0dXJuXHJcblx0XHRyZXR1cm4gaGFuZGxlQ29tbWVudChkYXRhKS50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0aWYgKHJlcz8uc3RhdHVzID09PSAyMDApIHtcclxuXHRcdFx0XHRzZXRDb21tZW50TGlzdChbcmVzLmRhdGEuZGF0YSwgLi4uY29tbWVudExpc3RdKVxyXG5cdFx0XHRcdHJldHVybiB0cnVlXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fVxyXG5cdGNvbnN0IGNoZWNrRmV0Y2hDb21tZW50ID0gKElEOiBudW1iZXIpID0+IHtcclxuXHRcdGlmICghZmV0Y2hDb21tZW50KSByZXR1cm5cclxuXHRcdGlmICghc2hvd0NvbW1lbnRzKSB7XHJcblx0XHRcdGZldGNoQ29tbWVudChJRCkudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdFx0aWYgKHJlcz8uc3RhdHVzID09PSAyMDApIHtcclxuXHRcdFx0XHRcdHNldENvbW1lbnRMaXN0KHJlcy5kYXRhLmRhdGEpXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHNldENvbW1lbnRMaXN0KFtdKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIElNQUdFUyBMSVNUXHJcblx0Y29uc3QgY2hlY2tVSUltYWdlTGlzdCA9IChpbWFnZUxpc3QpID0+IHtcclxuXHRcdGNvbnN0IGxlbmd0aCA9IGltYWdlTGlzdC5sZW5ndGhcclxuXHRcdGlmIChsZW5ndGggPj0gMykge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9yZS10aGFuLTMtaW1hZ2VzXCI+XHJcblx0XHRcdFx0XHR7aW1hZ2VMaXN0LnNsaWNlKDAsIDIpLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdFx0PEltYWdlIGtleT17aW5kZXh9IHNyYz17aXRlbS5OYW1lRmlsZX0gcHJldmlldz17ZmFsc2V9IHdpZHRoPXsnNTAlJ30gb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZSh0cnVlKX0gLz5cclxuXHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3LXRvdGFsXCIgb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZSh0cnVlKX0+XHJcblx0XHRcdFx0XHRcdCsge2ltYWdlTGlzdC5sZW5ndGggLSAyfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdClcclxuXHRcdH1cclxuXHRcdGlmIChsZW5ndGggPj0gMikge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidHdvLWltYWdlc1wiPlxyXG5cdFx0XHRcdFx0e2ltYWdlTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdDxJbWFnZSBrZXk9e2luZGV4fSBzcmM9e2l0ZW0uTmFtZUZpbGV9IHByZXZpZXc9e2ZhbHNlfSB3aWR0aD17JzUwJSd9IG9uQ2xpY2s9eygpID0+IHNldFZpc2libGUodHJ1ZSl9IC8+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KVxyXG5cdFx0fVxyXG5cdFx0aWYgKGxlbmd0aCA+PSAxKSB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvbmUtaW1hZ2VcIj5cclxuXHRcdFx0XHRcdHtpbWFnZUxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8SW1hZ2Uga2V5PXtpbmRleH0gc3JjPXtpdGVtLk5hbWVGaWxlfSBwcmV2aWV3PXtmYWxzZX0gd2lkdGg9eycxMDAlJ30gb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZSh0cnVlKX0gLz5cclxuXHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpXHJcblx0XHR9XHJcblx0fVxyXG5cdGNvbnN0IHJlbmRlckltYWdlTGlzdCA9ICgpID0+IHtcclxuXHRcdGNvbnN0IGltYWdlTGlzdCA9IGl0ZW0uTmV3c0ZlZWRGaWxlLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5UeXBlID09PSAyKVxyXG5cdFx0aWYgKGltYWdlTGlzdC5sZW5ndGggPiAwKSB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXdzZmVlZC1pbWFnZXNcIj5cclxuXHRcdFx0XHRcdHtjaGVja1VJSW1hZ2VMaXN0KGltYWdlTGlzdCl9XHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fT5cclxuXHRcdFx0XHRcdFx0PEltYWdlLlByZXZpZXdHcm91cFxyXG5cdFx0XHRcdFx0XHRcdHByZXZpZXc9e3tcclxuXHRcdFx0XHRcdFx0XHRcdHZpc2libGUsXHJcblx0XHRcdFx0XHRcdFx0XHRvblZpc2libGVDaGFuZ2U6ICh2aXMpID0+IHNldFZpc2libGUodmlzKVxyXG5cdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHR7aW1hZ2VMaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxJbWFnZSBzcmM9e2l0ZW0uTmFtZUZpbGV9IGtleT17aW5kZXh9IC8+XHJcblx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdDwvSW1hZ2UuUHJldmlld0dyb3VwPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdClcclxuXHRcdH1cclxuXHR9XHJcblx0Ly8gQVVESU8gTElTVFxyXG5cdGNvbnN0IHJlbmRlckF1ZGlvTGlzdCA9ICgpID0+IHtcclxuXHRcdGNvbnN0IGF1ZGlvTGlzdCA9IGl0ZW0uTmV3c0ZlZWRGaWxlLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5UeXBlID09PSAzKVxyXG5cdFx0aWYgKGF1ZGlvTGlzdC5sZW5ndGggPiAwKSB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZXdzZmVlZC1hdWRpb1wiPlxyXG5cdFx0XHRcdFx0e2F1ZGlvTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdDxhdWRpbyBjbGFzc05hbWU9XCJhdWRpby10YWdcIiBjb250cm9scyBrZXk9e2luZGV4fT5cclxuXHRcdFx0XHRcdFx0XHQ8c291cmNlIHNyYz17aXRlbS5OYW1lRmlsZX0gdHlwZT1cImF1ZGlvL29nZ1wiIC8+XHJcblx0XHRcdFx0XHRcdFx0PHNvdXJjZSBzcmM9e2l0ZW0uTmFtZUZpbGV9IHR5cGU9XCJhdWRpby9tcGVnXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgYXVkaW8gZWxlbWVudC5cclxuXHRcdFx0XHRcdFx0PC9hdWRpbz5cclxuXHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpXHJcblx0XHR9XHJcblx0fVxyXG5cdC8vIFZJREVPIExJU1RcclxuXHRjb25zdCByZW5kZXJWaWRlb0xpc3QgPSAoKSA9PiB7XHJcblx0XHRjb25zdCB2aWRlb0xpc3QgPSBpdGVtLk5ld3NGZWVkRmlsZS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uVHlwZSA9PT0gNClcclxuXHRcdGlmICh2aWRlb0xpc3QubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV3c2ZlZWQtdmlkZW9cIj5cclxuXHRcdFx0XHRcdHt2aWRlb0xpc3QubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8dmlkZW8gY2xhc3NOYW1lPVwidmlkZW8tdGFnXCIgY29udHJvbHMga2V5PXtpbmRleH0+XHJcblx0XHRcdFx0XHRcdFx0PHNvdXJjZSBzcmM9e2l0ZW0uTmFtZUZpbGV9IHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDxzb3VyY2Ugc3JjPXtpdGVtLk5hbWVGaWxlfSB0eXBlPVwidmlkZW8vb2dnXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgdmlkZW8gdGFnLlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZGVvPlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdClcclxuXHRcdH1cclxuXHR9XHJcblx0Ly8gTElHSFQgQk9YXHJcblx0Y29uc3QgcmVuZGVyTmV3c0ZlZWRCYWNrZ3JvdW5kID0gKCkgPT4ge1xyXG5cdFx0Y29uc3QgaXNOZXdzRmVlZEJhY2tncm91bmQgPSBpdGVtLlR5cGVGaWxlID09PSAxXHJcblx0XHRpZiAoaXNOZXdzRmVlZEJhY2tncm91bmQgJiYgaXRlbS5OZXdzRmVlZEZpbGUubGVuZ3RoID09PSAxKSB7XHJcblx0XHRcdGNvbnN0IGJhY2tncm91bmRGaWxlID0gaXRlbS5OZXdzRmVlZEZpbGVbMF1cclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJuZXdzZmVlZC1iYWNrZ3JvdW5kXCJcclxuXHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiBpdGVtLkNvbG9yLFxyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtiYWNrZ3JvdW5kRmlsZS5OYW1lRmlsZX0pYFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8TGlua2lmeVxyXG5cdFx0XHRcdFx0XHRjb21wb25lbnREZWNvcmF0b3I9eyhkZWNvcmF0ZWRIcmVmLCBkZWNvcmF0ZWRUZXh0LCBrZXkpID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8YSB0YXJnZXQ9XCJibGFua1wiIGhyZWY9e2RlY29yYXRlZEhyZWZ9IGtleT17a2V5fT5cclxuXHRcdFx0XHRcdFx0XHRcdHtkZWNvcmF0ZWRUZXh0fVxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PHNwYW4+e2l0ZW0uQ29udGVudH08L3NwYW4+XHJcblx0XHRcdFx0XHQ8L0xpbmtpZnk+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdClcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIChcclxuXHRcdDxsaSBjbGFzc05hbWU9XCJpdGVtLW5mXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV3c2ZlZWRcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5ld3NmZWVkLWhlYWRlclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbmZvLWN1cnJlbnQtdXNlclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtpdGVtLkF2YXRhciB8fCAnL2ltYWdlcy91c2VyLnBuZyd9IGFsdD1cImF2YXRhclwiIC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hbWUtdXNlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgb25DbGljaz17Y2hlY2tIYW5kbGVGaWx0ZXJzKCduYW1lJywgaXRlbS5GdWxsTmFtZVVuaWNvZGUpfT57aXRlbS5GdWxsTmFtZVVuaWNvZGV9PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwic2hhcmUtcG9pbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PE5hdmlnYXRpb24gLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLk5ld3NGZWVkQnJhbmNoLm1hcCgoaXRlbSwgaWR4KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGtleT17aWR4fSBjbGFzc05hbWU9XCJpdGVtLWJyYW5jaFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0uQnJhbmNoTmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibmV3c2ZlZWQtdGltZVwiPntmbURhdGVGcm9tTm93KGl0ZW0uQ3JlYXRlZE9uKX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5ld3NmZWVkLW1vcmVcIj5cclxuXHRcdFx0XHRcdFx0e21vcmVBY3Rpb25Db21wb25lbnQgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDxQb3BvdmVyIHpJbmRleD17OTk5fSBjb250ZW50PXttb3JlQWN0aW9uQ29tcG9uZW50fSBwbGFjZW1lbnQ9XCJib3R0b21SaWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tbW9yZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TW9yZUhvcml6b250YWwgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDwvUG9wb3Zlcj5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdHtpdGVtLkNvbnRlbnQgJiYgaXRlbS5UeXBlRmlsZSAhPT0gMSAmJiAoXHJcblx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5ld3NmZWVkLWNvbnRlbnRcIlxyXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdGNvbG9yOiBpdGVtLkNvbG9yXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxMaW5raWZ5XHJcblx0XHRcdFx0XHRcdFx0Y29tcG9uZW50RGVjb3JhdG9yPXsoZGVjb3JhdGVkSHJlZiwgZGVjb3JhdGVkVGV4dCwga2V5KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8YSB0YXJnZXQ9XCJibGFua1wiIGhyZWY9e2RlY29yYXRlZEhyZWZ9IGtleT17a2V5fSBzdHlsZT17eyBmb250V2VpZ2h0OiA1MDAgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtkZWNvcmF0ZWRUZXh0fVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj57aXRlbS5Db250ZW50fTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9MaW5raWZ5PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0XHR7LyogU0hPVyBJTUFHRSBPUiBGSUxFICovfVxyXG5cdFx0XHRcdHtyZW5kZXJJbWFnZUxpc3QoKX1cclxuXHRcdFx0XHR7cmVuZGVyVmlkZW9MaXN0KCl9XHJcblx0XHRcdFx0e3JlbmRlckF1ZGlvTGlzdCgpfVxyXG5cdFx0XHRcdHtyZW5kZXJOZXdzRmVlZEJhY2tncm91bmQoKX1cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5ld3NmZWVkLXRvdGFsXCI+XHJcblx0XHRcdFx0XHR7aXRlbS5MaWtlQ291bnQgPiAwICYmIChcclxuXHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0PFRodW1ic1VwIGNvbG9yPVwiIzA1NzFlNVwiIC8+IHtpdGVtLkxpa2VDb3VudH1cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdHsoY29tbWVudExpc3QubGVuZ3RoID4gMCB8fCBpdGVtLkNvbW1lbnRDb3VudCA+IDApICYmIChcclxuXHRcdFx0XHRcdFx0PHBcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ0b3RhbC1jb21tZW50c1wiXHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tGZXRjaENvbW1lbnQoaXRlbS5JRClcclxuXHRcdFx0XHRcdFx0XHRcdGhhbmRsZVNob3dDb21tZW50cygpXHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdHtjb21tZW50TGlzdC5sZW5ndGggfHwgaXRlbS5Db21tZW50Q291bnR9IELDrG5oIGx14bqtblxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV3c2ZlZWQtYWN0aW9uXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbiB3LTEwMFwiPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17aXNVc2VyTGlrZWQgPyAnYnRuIGJ0bi1saWdodCBhY3RpdmUnIDogJ2J0biBidG4tbGlnaHQnfSBvbkNsaWNrPXsoKSA9PiBjaGVja0hhbmRsZVVzZXJMaWtlTmV3c0ZlZWQoaXRlbS5JRCl9PlxyXG5cdFx0XHRcdFx0XHRcdDxUaHVtYnNVcCAvPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm1sLTJcIj5UaMOtY2g8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFjdGlvblwiPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnRuIGJ0bi1saWdodFwiXHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tGZXRjaENvbW1lbnQoaXRlbS5JRClcclxuXHRcdFx0XHRcdFx0XHRcdGhhbmRsZVNob3dDb21tZW50cygpXHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxNZXNzYWdlQ2lyY2xlIC8+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4+QsOsbmggbHXhuq1uPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT17c2hvd0NvbW1lbnRzID8gJ25ld3NmZWVkLWNvbW1lbnRzJyA6ICdoaWRlJ30+XHJcblx0XHRcdFx0XHQ8Q29tbWVudEZvcm0gaXNMb2FkaW5nPXtpc0xvYWRpbmd9IHVzZXJDb21tZW50PXt1c2VyQ29tbWVudH0gaGFuZGxlQ29tbWVudD17Y2hlY2tIYW5kbGVDb21tZW50fSBuZXdzRmVlZElEPXtpdGVtLklEfSAvPlxyXG5cdFx0XHRcdFx0e2NvbW1lbnRMaXN0Lmxlbmd0aCA+IDAgJiYgKFxyXG5cdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibGlzdC1jb21tZW50c1wiPlxyXG5cdFx0XHRcdFx0XHRcdHtjb21tZW50TGlzdC5tYXAoKGNtdCwgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxDb21tZW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17Y210LklEfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpc0xvYWRpbmc9e2lzTG9hZGluZ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUNvbW1lbnQ9e2NtdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZmV0Y2hSZXBseUNvbW1lbnQ9e2ZldGNoUmVwbHlDb21tZW50fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVSZXBseUNvbW1lbnQ9e2hhbmRsZVJlcGx5Q29tbWVudH1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0eyFjb21tZW50TGlzdC5sZW5ndGggJiYgaXNMb2FkaW5nLnR5cGUgPT09IGBGRVRDSF9DT01NRU5UXyR7aXRlbS5JRH1gICYmIGlzTG9hZGluZy5zdGF0dXMgJiYgKFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PFNwaW4gLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdDwvZGl2PiAqL31cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2xpPlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3c0ZlZWRJdGVtXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=