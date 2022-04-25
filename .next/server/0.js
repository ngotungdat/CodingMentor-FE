exports.ids = [0];
exports.modules = {

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-summernote/dist/react-summernote.css":
/*!*****************************************************************!*\
  !*** ./node_modules/react-summernote/dist/react-summernote.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/Elements/EditorSimple/Editor.tsx":
/*!*********************************************************!*\
  !*** ./src/components/Elements/EditorSimple/Editor.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_summernote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-summernote */ "react-summernote");
/* harmony import */ var react_summernote__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_summernote__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apiBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/apiBase */ "./src/apiBase/index.ts");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-html-parser */ "react-html-parser");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bootstrap_js_src_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/js/src/modal */ "bootstrap/js/src/modal");
/* harmony import */ var bootstrap_js_src_modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_src_modal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bootstrap_js_src_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/js/src/dropdown */ "bootstrap/js/src/dropdown");
/* harmony import */ var bootstrap_js_src_dropdown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_src_dropdown__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var bootstrap_js_src_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap/js/src/tooltip */ "bootstrap/js/src/tooltip");
/* harmony import */ var bootstrap_js_src_tooltip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_src_tooltip__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_summernote_dist_react_summernote_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-summernote/dist/react-summernote.css */ "./node_modules/react-summernote/dist/react-summernote.css");
/* harmony import */ var react_summernote_dist_react_summernote_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_summernote_dist_react_summernote_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_summernote_lang_summernote_ru_RU__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-summernote/lang/summernote-ru-RU */ "react-summernote/lang/summernote-ru-RU");
/* harmony import */ var react_summernote_lang_summernote_ru_RU__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_summernote_lang_summernote_ru_RU__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__);


var _jsxFileName = "D:\\MonaMedia\\Project\\IELTS-NguyenHuyen-FE\\IELTS-Nguyen-Huyen\\src\\components\\Elements\\EditorSimple\\Editor.tsx";













const EditorSummernote = props => {
  const {
    getDataEditor,
    questionContent,
    isReset,
    isTranslate,
    defaultValue,
    isSimpleTool,
    height,
    isFull
  } = props;
  let inputTranslate = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const {
    0: valueEditor,
    1: setValueEditor
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(questionContent);
  const {
    0: textSelect,
    1: setTextSelect
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: textTranslate,
    1: setTextTranslate
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: isModalVisible,
    1: setIsModalVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: dataTranslate,
    1: setDataTranslate
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: isAddTranslate,
    1: setIsAddTranslate
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: reloadContent,
    1: setReloadContent
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    !!defaultValue && setValueEditor(defaultValue);
  }, []);

  const showModal = type => {
    setIsModalVisible(true);

    if (type == 'add') {
      setIsAddTranslate(true);
    } else {
      setIsAddTranslate(false);
    }
  };

  const handleOk = () => {
    if (isAddTranslate) {
      if (textSelect) {
        handleAddTranslate();
      }
    } else {
      handleFixTranslate();
    }

    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setTextSelect(null);
    setTextTranslate(null);
  }; // GET TRANSLATE TEXT


  const onChange_GetTranslateText = e => {
    let text = e.target.value;
    setTextTranslate(text);
  };

  const onKeyDown = e => {
    if (e.key === 'Enter') {
      handleAddTranslate();
      setIsModalVisible(false);
    }
  }; // HANDLE FIX TRANSLATE


  const handleFixTranslate = () => {
    let elementNote = document.querySelectorAll('#editor-element .note-editable .text-note-of-translate');
    elementNote.forEach((item, index) => {
      let noteID = parseInt(item.getAttribute('data-note'));
      let textItem = item.innerHTML;
      let indexData = dataTranslate.findIndex(e => e.noteID === noteID);

      if (dataTranslate[indexData].textTranslate !== textItem) {
        item.innerHTML = dataTranslate[indexData].textTranslate;
        item.setAttribute('title', dataTranslate[indexData].textTranslate);
      }
    });
    setReloadContent(true);
  }; // HANDLE ADD TRANSLATE


  const handleAddTranslate = () => {
    let elementEditor = document.querySelectorAll('#editor-element .note-editable');
    let elementP = document.querySelectorAll('#editor-element .note-editable p');

    const onAdd = item => {
      let innerText = item.innerHTML;

      if (innerText.includes(textSelect)) {
        let noteID = null;

        if (dataTranslate.length < 1) {
          noteID = 0;
        } else {
          noteID = dataTranslate[dataTranslate.length - 1].noteID + 1;
        }

        item.innerHTML = innerText.replace(textSelect, `<input class="input-prevent-translate"/><span title="${textTranslate}" class="text-normal-of-translate">${textSelect}<span data-note="${noteID}" class="text-note-of-translate">${textTranslate}</span></span><input class="input-prevent-translate"/>`);
        dataTranslate.push({
          noteID: noteID,
          textSelect: textSelect,
          textTranslate: textTranslate
        });
        setDataTranslate([...dataTranslate]);
      }
    };

    if (elementP.length > 0) {
      elementP.forEach(item => {
        onAdd(item);
      });
    } else {
      onAdd(elementEditor[0]);
    }

    setTextTranslate(null);
    setTextSelect(null);
    setReloadContent(true);
  };

  const onFixTextTranslate = (e, noteID) => {
    let text = e.target.value;
    let index = dataTranslate.findIndex(item => item.noteID == noteID);
    dataTranslate[index].textTranslate = text;
    setDataTranslate([...dataTranslate]);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let getNodes = str => new DOMParser().parseFromString(str, 'text/html').body.childNodes;

    let editorElement = document.getElementById('editor-element');
    editorElement.addEventListener('mouseup', e => {
      var sel = window.getSelection && window.getSelection();

      if (sel && sel.rangeCount > 0) {
        let textSelect = window.getSelection().toString();
        setTextSelect(textSelect);
      }
    });
  }); // ON CHANGE

  const onChange = content => {
    getDataEditor(content);
  }; // UPLOAD IMAGES


  const onImageUpload = async fileList => {
    try {
      let res = await _apiBase__WEBPACK_IMPORTED_MODULE_3__["studentApi"].uploadImage(fileList[0]);

      if (res.status == 200) {
        react_summernote__WEBPACK_IMPORTED_MODULE_2___default.a.insertImage(res.data.data);
      }
    } catch (error) {}
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(() => {
    if (isModalVisible) {
      inputTranslate.current && inputTranslate.current.select();
    }
  }, [isModalVisible]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (reloadContent) {
      let elementEditor = document.querySelectorAll('#editor-element .note-editable');
      setValueEditor(elementEditor[0].innerHTML);
      getDataEditor(elementEditor[0].innerHTML);
      setReloadContent(false);
    }
  }, [reloadContent]); // HANDLE RESET

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    isReset && (react_summernote__WEBPACK_IMPORTED_MODULE_2___default.a.reset(), setValueEditor(''));
  }, [isReset]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let elementNote = document.querySelectorAll('#editor-element .note-editable .text-normal-of-translate');

    if (elementNote.length > 0) {
      elementNote.forEach(item => {
        let noteID = item.lastChild.attributes[0].nodeValue;
        let textSelect = item.firstChild.nodeValue;
        let textTranslate = item.lastChild.childNodes[0].nodeValue;
        dataTranslate.push({
          noteID: parseInt(noteID),
          textSelect: textSelect,
          textTranslate: textTranslate
        });
      });
      setDataTranslate([...dataTranslate]);
    }
  }, []);

  const getListTool = () => {
    let temp = [];

    if (!!isFull) {
      temp = [['style', ['style']], ['font', ['bold', 'underline', 'clear']], ['color', ['color']], ['para', ['ul', 'ol', 'paragraph']], ['table', ['table']], ['insert', ['link', 'picture', 'video']], ['view', ['fullscreen', 'codeview', 'help']]];
    } else if (isSimpleTool) {
      temp = [['style', ['style']], ['font', ['bold', 'underline']], ['color', ['color']], ['fontname', ['fontname']], ['para', ['ol', 'paragraph']], ['insert', ['link']]];
    } else {
      temp = [['style', ['style']], ['font', ['bold', 'underline', 'clear']], ['fontname', ['fontname']], ['para', ['ul', 'ol', 'paragraph']], ['table', ['table']], ['insert', ['link', 'picture', 'video']], ['view', ['codeview', 'fullscreen']]];
    }

    return temp;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
      title: "Phi\xEAn \xE2m",
      visible: isModalVisible,
      okText: "L\u01B0u",
      cancelText: "H\u1EE7y",
      onOk: handleOk,
      onCancel: handleCancel,
      children: isAddTranslate ? textSelect ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        allowClear: true,
        id: "input-translate",
        className: "style-input",
        value: textTranslate,
        onChange: onChange_GetTranslateText,
        onKeyDown: onKeyDown,
        ref: inputTranslate
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 7
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        style: {
          fontWeight: 500
        },
        children: "Vui l\xF2ng ch\u1ECDn n\u1ED9i dung c\u1EA7n phi\xEAn \xE2m"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 7
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "detail-translate",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              className: "text-center",
              children: "N\u1ED9i dung"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 263,
              columnNumber: 9
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              className: "text-center",
              children: "Phi\xEAn \xE2m"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 264,
              columnNumber: 9
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 262,
            columnNumber: 8
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
            children: dataTranslate.map((item, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: item.textSelect
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 269,
                columnNumber: 11
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  className: "show-text-translate",
                  type: "text",
                  value: item.textTranslate,
                  onChange: e => {
                    onFixTextTranslate(e, item.noteID);
                  },
                  onKeyDown: e => {
                    if (e.key === 'Enter') {
                      handleFixTranslate();
                      setIsModalVisible(false);
                    }
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 271,
                  columnNumber: 12
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 270,
                columnNumber: 11
              }, undefined)]
            }, index, true, {
              fileName: _jsxFileName,
              lineNumber: 268,
              columnNumber: 10
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 8
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 7
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 6
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "wrap-editor",
      id: "editor-element",
      style: {
        borderRadius: 8
      },
      children: [isTranslate && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex align-items-center mb-2",
          style: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'flex-end'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "btn-editor d-flex align-items-center mr-2",
            onClick: () => showModal('add'),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__["PlusOutlined"], {
              className: "mr-2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 301,
              columnNumber: 9
            }, undefined), " Th\xEAm Phi\xEAn \xE2m"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 300,
            columnNumber: 8
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 7
        }, undefined)
      }, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_summernote__WEBPACK_IMPORTED_MODULE_2___default.a, {
        value: valueEditor,
        children: react_html_parser__WEBPACK_IMPORTED_MODULE_4___default()(valueEditor),
        options: {
          lang: 'vn',
          height: height || 220,
          dialogsInBody: true,
          toolbar: getListTool()
        },
        onChange: content => onChange(content),
        onImageUpload: onImageUpload
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 4
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (EditorSummernote);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FbGVtZW50cy9FZGl0b3JTaW1wbGUvRWRpdG9yLnRzeCJdLCJuYW1lcyI6WyJFZGl0b3JTdW1tZXJub3RlIiwicHJvcHMiLCJnZXREYXRhRWRpdG9yIiwicXVlc3Rpb25Db250ZW50IiwiaXNSZXNldCIsImlzVHJhbnNsYXRlIiwiZGVmYXVsdFZhbHVlIiwiaXNTaW1wbGVUb29sIiwiaGVpZ2h0IiwiaXNGdWxsIiwiaW5wdXRUcmFuc2xhdGUiLCJ1c2VSZWYiLCJ2YWx1ZUVkaXRvciIsInNldFZhbHVlRWRpdG9yIiwidXNlU3RhdGUiLCJ0ZXh0U2VsZWN0Iiwic2V0VGV4dFNlbGVjdCIsInRleHRUcmFuc2xhdGUiLCJzZXRUZXh0VHJhbnNsYXRlIiwiaXNNb2RhbFZpc2libGUiLCJzZXRJc01vZGFsVmlzaWJsZSIsImRhdGFUcmFuc2xhdGUiLCJzZXREYXRhVHJhbnNsYXRlIiwiaXNBZGRUcmFuc2xhdGUiLCJzZXRJc0FkZFRyYW5zbGF0ZSIsInJlbG9hZENvbnRlbnQiLCJzZXRSZWxvYWRDb250ZW50IiwidXNlRWZmZWN0Iiwic2hvd01vZGFsIiwidHlwZSIsImhhbmRsZU9rIiwiaGFuZGxlQWRkVHJhbnNsYXRlIiwiaGFuZGxlRml4VHJhbnNsYXRlIiwiaGFuZGxlQ2FuY2VsIiwib25DaGFuZ2VfR2V0VHJhbnNsYXRlVGV4dCIsImUiLCJ0ZXh0IiwidGFyZ2V0IiwidmFsdWUiLCJvbktleURvd24iLCJrZXkiLCJlbGVtZW50Tm90ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwiaW5kZXgiLCJub3RlSUQiLCJwYXJzZUludCIsImdldEF0dHJpYnV0ZSIsInRleHRJdGVtIiwiaW5uZXJIVE1MIiwiaW5kZXhEYXRhIiwiZmluZEluZGV4Iiwic2V0QXR0cmlidXRlIiwiZWxlbWVudEVkaXRvciIsImVsZW1lbnRQIiwib25BZGQiLCJpbm5lclRleHQiLCJpbmNsdWRlcyIsImxlbmd0aCIsInJlcGxhY2UiLCJwdXNoIiwib25GaXhUZXh0VHJhbnNsYXRlIiwiZ2V0Tm9kZXMiLCJzdHIiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJib2R5IiwiY2hpbGROb2RlcyIsImVkaXRvckVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZWwiLCJ3aW5kb3ciLCJnZXRTZWxlY3Rpb24iLCJyYW5nZUNvdW50IiwidG9TdHJpbmciLCJvbkNoYW5nZSIsImNvbnRlbnQiLCJvbkltYWdlVXBsb2FkIiwiZmlsZUxpc3QiLCJyZXMiLCJzdHVkZW50QXBpIiwidXBsb2FkSW1hZ2UiLCJzdGF0dXMiLCJSZWFjdFN1bW1lcm5vdGUiLCJpbnNlcnRJbWFnZSIsImRhdGEiLCJlcnJvciIsInVzZUxheW91dEVmZmVjdCIsImN1cnJlbnQiLCJzZWxlY3QiLCJyZXNldCIsImxhc3RDaGlsZCIsImF0dHJpYnV0ZXMiLCJub2RlVmFsdWUiLCJmaXJzdENoaWxkIiwiZ2V0TGlzdFRvb2wiLCJ0ZW1wIiwiZm9udFdlaWdodCIsIm1hcCIsImJvcmRlclJhZGl1cyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwid2lkdGgiLCJqdXN0aWZ5Q29udGVudCIsIlJlYWN0SHRtbFBhcnNlciIsImxhbmciLCJkaWFsb2dzSW5Cb2R5IiwidG9vbGJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUUEsTUFBTUEsZ0JBQWdCLEdBQUlDLEtBQUQsSUFBVztBQUNuQyxRQUFNO0FBQUVDLGlCQUFGO0FBQWlCQyxtQkFBakI7QUFBa0NDLFdBQWxDO0FBQTJDQyxlQUEzQztBQUF3REMsZ0JBQXhEO0FBQXNFQyxnQkFBdEU7QUFBb0ZDLFVBQXBGO0FBQTRGQztBQUE1RixN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YWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiwgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBSZWFjdFN1bW1lcm5vdGUgZnJvbSAncmVhY3Qtc3VtbWVybm90ZSdcclxuaW1wb3J0IHsgc3R1ZGVudEFwaSB9IGZyb20gJ34vYXBpQmFzZSdcclxuaW1wb3J0IFJlYWN0SHRtbFBhcnNlciBmcm9tICdyZWFjdC1odG1sLXBhcnNlcidcclxuaW1wb3J0IHsgTW9kYWwsIElucHV0IH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0ICdib290c3RyYXAvanMvc3JjL21vZGFsJ1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9zcmMvZHJvcGRvd24nXHJcbmltcG9ydCAnYm9vdHN0cmFwL2pzL3NyYy90b29sdGlwJ1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJ1xyXG5pbXBvcnQgJ3JlYWN0LXN1bW1lcm5vdGUvZGlzdC9yZWFjdC1zdW1tZXJub3RlLmNzcydcclxuaW1wb3J0ICdyZWFjdC1zdW1tZXJub3RlL2xhbmcvc3VtbWVybm90ZS1ydS1SVSdcclxuaW1wb3J0IHsgUGx1c091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnXHJcblxyXG50eXBlIGRhdGFUcmFuc2xhdGUgPSBBcnJheTx7XHJcblx0bm90ZUlEOiBudW1iZXJcclxuXHR0ZXh0U2VsZWN0OiBzdHJpbmdcclxuXHR0ZXh0VHJhbnNsYXRlOiBzdHJpbmdcclxufT5cclxuXHJcbmNvbnN0IEVkaXRvclN1bW1lcm5vdGUgPSAocHJvcHMpID0+IHtcclxuXHRjb25zdCB7IGdldERhdGFFZGl0b3IsIHF1ZXN0aW9uQ29udGVudCwgaXNSZXNldCwgaXNUcmFuc2xhdGUsIGRlZmF1bHRWYWx1ZSwgaXNTaW1wbGVUb29sLCBoZWlnaHQsIGlzRnVsbCB9ID0gcHJvcHNcclxuXHRsZXQgaW5wdXRUcmFuc2xhdGUgPSB1c2VSZWYobnVsbClcclxuXHJcblx0Y29uc3QgW3ZhbHVlRWRpdG9yLCBzZXRWYWx1ZUVkaXRvcl0gPSB1c2VTdGF0ZShxdWVzdGlvbkNvbnRlbnQpXHJcblx0Y29uc3QgW3RleHRTZWxlY3QsIHNldFRleHRTZWxlY3RdID0gdXNlU3RhdGUobnVsbClcclxuXHRjb25zdCBbdGV4dFRyYW5zbGF0ZSwgc2V0VGV4dFRyYW5zbGF0ZV0gPSB1c2VTdGF0ZShudWxsKVxyXG5cdGNvbnN0IFtpc01vZGFsVmlzaWJsZSwgc2V0SXNNb2RhbFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblx0Y29uc3QgW2RhdGFUcmFuc2xhdGUsIHNldERhdGFUcmFuc2xhdGVdID0gdXNlU3RhdGU8ZGF0YVRyYW5zbGF0ZT4oW10pXHJcblx0Y29uc3QgW2lzQWRkVHJhbnNsYXRlLCBzZXRJc0FkZFRyYW5zbGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHRjb25zdCBbcmVsb2FkQ29udGVudCwgc2V0UmVsb2FkQ29udGVudF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdCEhZGVmYXVsdFZhbHVlICYmIHNldFZhbHVlRWRpdG9yKGRlZmF1bHRWYWx1ZSlcclxuXHR9LCBbXSlcclxuXHJcblx0Y29uc3Qgc2hvd01vZGFsID0gKHR5cGUpID0+IHtcclxuXHRcdHNldElzTW9kYWxWaXNpYmxlKHRydWUpXHJcblx0XHRpZiAodHlwZSA9PSAnYWRkJykge1xyXG5cdFx0XHRzZXRJc0FkZFRyYW5zbGF0ZSh0cnVlKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2V0SXNBZGRUcmFuc2xhdGUoZmFsc2UpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBoYW5kbGVPayA9ICgpID0+IHtcclxuXHRcdGlmIChpc0FkZFRyYW5zbGF0ZSkge1xyXG5cdFx0XHRpZiAodGV4dFNlbGVjdCkge1xyXG5cdFx0XHRcdGhhbmRsZUFkZFRyYW5zbGF0ZSgpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhhbmRsZUZpeFRyYW5zbGF0ZSgpXHJcblx0XHR9XHJcblx0XHRzZXRJc01vZGFsVmlzaWJsZShmYWxzZSlcclxuXHR9XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcclxuXHRcdHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKVxyXG5cdFx0c2V0VGV4dFNlbGVjdChudWxsKVxyXG5cdFx0c2V0VGV4dFRyYW5zbGF0ZShudWxsKVxyXG5cdH1cclxuXHJcblx0Ly8gR0VUIFRSQU5TTEFURSBURVhUXHJcblx0Y29uc3Qgb25DaGFuZ2VfR2V0VHJhbnNsYXRlVGV4dCA9IChlKSA9PiB7XHJcblx0XHRsZXQgdGV4dCA9IGUudGFyZ2V0LnZhbHVlXHJcblx0XHRzZXRUZXh0VHJhbnNsYXRlKHRleHQpXHJcblx0fVxyXG5cclxuXHRjb25zdCBvbktleURvd24gPSAoZSkgPT4ge1xyXG5cdFx0aWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcblx0XHRcdGhhbmRsZUFkZFRyYW5zbGF0ZSgpXHJcblx0XHRcdHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gSEFORExFIEZJWCBUUkFOU0xBVEVcclxuXHRjb25zdCBoYW5kbGVGaXhUcmFuc2xhdGUgPSAoKSA9PiB7XHJcblx0XHRsZXQgZWxlbWVudE5vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZWRpdG9yLWVsZW1lbnQgLm5vdGUtZWRpdGFibGUgLnRleHQtbm90ZS1vZi10cmFuc2xhdGUnKVxyXG5cdFx0ZWxlbWVudE5vdGUuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuXHRcdFx0bGV0IG5vdGVJRCA9IHBhcnNlSW50KGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLW5vdGUnKSlcclxuXHRcdFx0bGV0IHRleHRJdGVtID0gaXRlbS5pbm5lckhUTUxcclxuXHJcblx0XHRcdGxldCBpbmRleERhdGEgPSBkYXRhVHJhbnNsYXRlLmZpbmRJbmRleCgoZSkgPT4gZS5ub3RlSUQgPT09IG5vdGVJRClcclxuXHRcdFx0aWYgKGRhdGFUcmFuc2xhdGVbaW5kZXhEYXRhXS50ZXh0VHJhbnNsYXRlICE9PSB0ZXh0SXRlbSkge1xyXG5cdFx0XHRcdGl0ZW0uaW5uZXJIVE1MID0gZGF0YVRyYW5zbGF0ZVtpbmRleERhdGFdLnRleHRUcmFuc2xhdGVcclxuXHRcdFx0XHRpdGVtLnNldEF0dHJpYnV0ZSgndGl0bGUnLCBkYXRhVHJhbnNsYXRlW2luZGV4RGF0YV0udGV4dFRyYW5zbGF0ZSlcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHRcdHNldFJlbG9hZENvbnRlbnQodHJ1ZSlcclxuXHR9XHJcblxyXG5cdC8vIEhBTkRMRSBBREQgVFJBTlNMQVRFXHJcblx0Y29uc3QgaGFuZGxlQWRkVHJhbnNsYXRlID0gKCkgPT4ge1xyXG5cdFx0bGV0IGVsZW1lbnRFZGl0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZWRpdG9yLWVsZW1lbnQgLm5vdGUtZWRpdGFibGUnKVxyXG5cdFx0bGV0IGVsZW1lbnRQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2VkaXRvci1lbGVtZW50IC5ub3RlLWVkaXRhYmxlIHAnKVxyXG5cclxuXHRcdGNvbnN0IG9uQWRkID0gKGl0ZW0pID0+IHtcclxuXHRcdFx0bGV0IGlubmVyVGV4dCA9IGl0ZW0uaW5uZXJIVE1MXHJcblx0XHRcdGlmIChpbm5lclRleHQuaW5jbHVkZXModGV4dFNlbGVjdCkpIHtcclxuXHRcdFx0XHRsZXQgbm90ZUlEID0gbnVsbFxyXG5cdFx0XHRcdGlmIChkYXRhVHJhbnNsYXRlLmxlbmd0aCA8IDEpIHtcclxuXHRcdFx0XHRcdG5vdGVJRCA9IDBcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0bm90ZUlEID0gZGF0YVRyYW5zbGF0ZVtkYXRhVHJhbnNsYXRlLmxlbmd0aCAtIDFdLm5vdGVJRCArIDFcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGl0ZW0uaW5uZXJIVE1MID0gaW5uZXJUZXh0LnJlcGxhY2UoXHJcblx0XHRcdFx0XHR0ZXh0U2VsZWN0LFxyXG5cdFx0XHRcdFx0YDxpbnB1dCBjbGFzcz1cImlucHV0LXByZXZlbnQtdHJhbnNsYXRlXCIvPjxzcGFuIHRpdGxlPVwiJHt0ZXh0VHJhbnNsYXRlfVwiIGNsYXNzPVwidGV4dC1ub3JtYWwtb2YtdHJhbnNsYXRlXCI+JHt0ZXh0U2VsZWN0fTxzcGFuIGRhdGEtbm90ZT1cIiR7bm90ZUlEfVwiIGNsYXNzPVwidGV4dC1ub3RlLW9mLXRyYW5zbGF0ZVwiPiR7dGV4dFRyYW5zbGF0ZX08L3NwYW4+PC9zcGFuPjxpbnB1dCBjbGFzcz1cImlucHV0LXByZXZlbnQtdHJhbnNsYXRlXCIvPmBcclxuXHRcdFx0XHQpXHJcblxyXG5cdFx0XHRcdGRhdGFUcmFuc2xhdGUucHVzaCh7XHJcblx0XHRcdFx0XHRub3RlSUQ6IG5vdGVJRCxcclxuXHRcdFx0XHRcdHRleHRTZWxlY3Q6IHRleHRTZWxlY3QsXHJcblx0XHRcdFx0XHR0ZXh0VHJhbnNsYXRlOiB0ZXh0VHJhbnNsYXRlXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRzZXREYXRhVHJhbnNsYXRlKFsuLi5kYXRhVHJhbnNsYXRlXSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChlbGVtZW50UC5sZW5ndGggPiAwKSB7XHJcblx0XHRcdGVsZW1lbnRQLmZvckVhY2goKGl0ZW0pID0+IHtcclxuXHRcdFx0XHRvbkFkZChpdGVtKVxyXG5cdFx0XHR9KVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0b25BZGQoZWxlbWVudEVkaXRvclswXSlcclxuXHRcdH1cclxuXHJcblx0XHRzZXRUZXh0VHJhbnNsYXRlKG51bGwpXHJcblx0XHRzZXRUZXh0U2VsZWN0KG51bGwpXHJcblx0XHRzZXRSZWxvYWRDb250ZW50KHRydWUpXHJcblx0fVxyXG5cclxuXHRjb25zdCBvbkZpeFRleHRUcmFuc2xhdGUgPSAoZSwgbm90ZUlEKSA9PiB7XHJcblx0XHRsZXQgdGV4dCA9IGUudGFyZ2V0LnZhbHVlXHJcblx0XHRsZXQgaW5kZXggPSBkYXRhVHJhbnNsYXRlLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5ub3RlSUQgPT0gbm90ZUlEKVxyXG5cclxuXHRcdGRhdGFUcmFuc2xhdGVbaW5kZXhdLnRleHRUcmFuc2xhdGUgPSB0ZXh0XHJcblx0XHRzZXREYXRhVHJhbnNsYXRlKFsuLi5kYXRhVHJhbnNsYXRlXSlcclxuXHR9XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRsZXQgZ2V0Tm9kZXMgPSAoc3RyKSA9PiBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHN0ciwgJ3RleHQvaHRtbCcpLmJvZHkuY2hpbGROb2Rlc1xyXG5cclxuXHRcdGxldCBlZGl0b3JFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRvci1lbGVtZW50JylcclxuXHRcdGVkaXRvckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChlKSA9PiB7XHJcblx0XHRcdHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uICYmIHdpbmRvdy5nZXRTZWxlY3Rpb24oKVxyXG5cdFx0XHRpZiAoc2VsICYmIHNlbC5yYW5nZUNvdW50ID4gMCkge1xyXG5cdFx0XHRcdGxldCB0ZXh0U2VsZWN0ID0gd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKClcclxuXHRcdFx0XHRzZXRUZXh0U2VsZWN0KHRleHRTZWxlY3QpXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fSlcclxuXHJcblx0Ly8gT04gQ0hBTkdFXHJcblx0Y29uc3Qgb25DaGFuZ2UgPSAoY29udGVudCkgPT4ge1xyXG5cdFx0Z2V0RGF0YUVkaXRvcihjb250ZW50KVxyXG5cdH1cclxuXHJcblx0Ly8gVVBMT0FEIElNQUdFU1xyXG5cdGNvbnN0IG9uSW1hZ2VVcGxvYWQgPSBhc3luYyAoZmlsZUxpc3QpID0+IHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGxldCByZXMgPSBhd2FpdCBzdHVkZW50QXBpLnVwbG9hZEltYWdlKGZpbGVMaXN0WzBdKVxyXG5cdFx0XHRpZiAocmVzLnN0YXR1cyA9PSAyMDApIHtcclxuXHRcdFx0XHRSZWFjdFN1bW1lcm5vdGUuaW5zZXJ0SW1hZ2UocmVzLmRhdGEuZGF0YSlcclxuXHRcdFx0fVxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHt9XHJcblx0fVxyXG5cclxuXHR1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKGlzTW9kYWxWaXNpYmxlKSB7XHJcblx0XHRcdGlucHV0VHJhbnNsYXRlLmN1cnJlbnQgJiYgaW5wdXRUcmFuc2xhdGUuY3VycmVudC5zZWxlY3QoKVxyXG5cdFx0fVxyXG5cdH0sIFtpc01vZGFsVmlzaWJsZV0pXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAocmVsb2FkQ29udGVudCkge1xyXG5cdFx0XHRsZXQgZWxlbWVudEVkaXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNlZGl0b3ItZWxlbWVudCAubm90ZS1lZGl0YWJsZScpXHJcblx0XHRcdHNldFZhbHVlRWRpdG9yKGVsZW1lbnRFZGl0b3JbMF0uaW5uZXJIVE1MKVxyXG5cdFx0XHRnZXREYXRhRWRpdG9yKGVsZW1lbnRFZGl0b3JbMF0uaW5uZXJIVE1MKVxyXG5cdFx0XHRzZXRSZWxvYWRDb250ZW50KGZhbHNlKVxyXG5cdFx0fVxyXG5cdH0sIFtyZWxvYWRDb250ZW50XSlcclxuXHJcblx0Ly8gSEFORExFIFJFU0VUXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlzUmVzZXQgJiYgKFJlYWN0U3VtbWVybm90ZS5yZXNldCgpLCBzZXRWYWx1ZUVkaXRvcignJykpXHJcblx0fSwgW2lzUmVzZXRdKVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bGV0IGVsZW1lbnROb3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2VkaXRvci1lbGVtZW50IC5ub3RlLWVkaXRhYmxlIC50ZXh0LW5vcm1hbC1vZi10cmFuc2xhdGUnKVxyXG5cclxuXHRcdGlmIChlbGVtZW50Tm90ZS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdGVsZW1lbnROb3RlLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xyXG5cdFx0XHRcdGxldCBub3RlSUQgPSBpdGVtLmxhc3RDaGlsZC5hdHRyaWJ1dGVzWzBdLm5vZGVWYWx1ZVxyXG5cdFx0XHRcdGxldCB0ZXh0U2VsZWN0ID0gaXRlbS5maXJzdENoaWxkLm5vZGVWYWx1ZVxyXG5cdFx0XHRcdGxldCB0ZXh0VHJhbnNsYXRlID0gaXRlbS5sYXN0Q2hpbGQuY2hpbGROb2Rlc1swXS5ub2RlVmFsdWVcclxuXHRcdFx0XHRkYXRhVHJhbnNsYXRlLnB1c2goe1xyXG5cdFx0XHRcdFx0bm90ZUlEOiBwYXJzZUludChub3RlSUQpLFxyXG5cdFx0XHRcdFx0dGV4dFNlbGVjdDogdGV4dFNlbGVjdCxcclxuXHRcdFx0XHRcdHRleHRUcmFuc2xhdGU6IHRleHRUcmFuc2xhdGVcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KVxyXG5cdFx0XHRzZXREYXRhVHJhbnNsYXRlKFsuLi5kYXRhVHJhbnNsYXRlXSlcclxuXHRcdH1cclxuXHR9LCBbXSlcclxuXHJcblx0Y29uc3QgZ2V0TGlzdFRvb2wgPSAoKSA9PiB7XHJcblx0XHRsZXQgdGVtcDogYW55ID0gW11cclxuXHRcdGlmICghIWlzRnVsbCkge1xyXG5cdFx0XHR0ZW1wID0gW1xyXG5cdFx0XHRcdFsnc3R5bGUnLCBbJ3N0eWxlJ11dLFxyXG5cdFx0XHRcdFsnZm9udCcsIFsnYm9sZCcsICd1bmRlcmxpbmUnLCAnY2xlYXInXV0sXHJcblx0XHRcdFx0Wydjb2xvcicsIFsnY29sb3InXV0sXHJcblx0XHRcdFx0WydwYXJhJywgWyd1bCcsICdvbCcsICdwYXJhZ3JhcGgnXV0sXHJcblx0XHRcdFx0Wyd0YWJsZScsIFsndGFibGUnXV0sXHJcblx0XHRcdFx0WydpbnNlcnQnLCBbJ2xpbmsnLCAncGljdHVyZScsICd2aWRlbyddXSxcclxuXHRcdFx0XHRbJ3ZpZXcnLCBbJ2Z1bGxzY3JlZW4nLCAnY29kZXZpZXcnLCAnaGVscCddXVxyXG5cdFx0XHRdXHJcblx0XHR9IGVsc2UgaWYgKGlzU2ltcGxlVG9vbCkge1xyXG5cdFx0XHR0ZW1wID0gW1xyXG5cdFx0XHRcdFsnc3R5bGUnLCBbJ3N0eWxlJ11dLFxyXG5cdFx0XHRcdFsnZm9udCcsIFsnYm9sZCcsICd1bmRlcmxpbmUnXV0sXHJcblx0XHRcdFx0Wydjb2xvcicsIFsnY29sb3InXV0sXHJcblx0XHRcdFx0Wydmb250bmFtZScsIFsnZm9udG5hbWUnXV0sXHJcblx0XHRcdFx0WydwYXJhJywgWydvbCcsICdwYXJhZ3JhcGgnXV0sXHJcblx0XHRcdFx0WydpbnNlcnQnLCBbJ2xpbmsnXV1cclxuXHRcdFx0XVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGVtcCA9IFtcclxuXHRcdFx0XHRbJ3N0eWxlJywgWydzdHlsZSddXSxcclxuXHRcdFx0XHRbJ2ZvbnQnLCBbJ2JvbGQnLCAndW5kZXJsaW5lJywgJ2NsZWFyJ11dLFxyXG5cdFx0XHRcdFsnZm9udG5hbWUnLCBbJ2ZvbnRuYW1lJ11dLFxyXG5cdFx0XHRcdFsncGFyYScsIFsndWwnLCAnb2wnLCAncGFyYWdyYXBoJ11dLFxyXG5cdFx0XHRcdFsndGFibGUnLCBbJ3RhYmxlJ11dLFxyXG5cdFx0XHRcdFsnaW5zZXJ0JywgWydsaW5rJywgJ3BpY3R1cmUnLCAndmlkZW8nXV0sXHJcblx0XHRcdFx0Wyd2aWV3JywgWydjb2RldmlldycsICdmdWxsc2NyZWVuJ11dXHJcblx0XHRcdF1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0ZW1wXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PE1vZGFsIHRpdGxlPVwiUGhpw6puIMOibVwiIHZpc2libGU9e2lzTW9kYWxWaXNpYmxlfSBva1RleHQ9XCJMxrB1XCIgY2FuY2VsVGV4dD1cIkjhu6d5XCIgb25Paz17aGFuZGxlT2t9IG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9PlxyXG5cdFx0XHRcdHtpc0FkZFRyYW5zbGF0ZSA/IChcclxuXHRcdFx0XHRcdHRleHRTZWxlY3QgPyAoXHJcblx0XHRcdFx0XHRcdDxJbnB1dFxyXG5cdFx0XHRcdFx0XHRcdGFsbG93Q2xlYXJcclxuXHRcdFx0XHRcdFx0XHRpZD1cImlucHV0LXRyYW5zbGF0ZVwiXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwic3R5bGUtaW5wdXRcIlxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt0ZXh0VHJhbnNsYXRlfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtvbkNoYW5nZV9HZXRUcmFuc2xhdGVUZXh0fVxyXG5cdFx0XHRcdFx0XHRcdG9uS2V5RG93bj17b25LZXlEb3dufVxyXG5cdFx0XHRcdFx0XHRcdHJlZj17aW5wdXRUcmFuc2xhdGV9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHQ8cCBzdHlsZT17eyBmb250V2VpZ2h0OiA1MDAgfX0+VnVpIGzDsm5nIGNo4buNbiBu4buZaSBkdW5nIGPhuqduIHBoacOqbiDDom08L3A+XHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLXRyYW5zbGF0ZVwiPlxyXG5cdFx0XHRcdFx0XHQ8dGFibGU+XHJcblx0XHRcdFx0XHRcdFx0PHRoZWFkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+TuG7mWkgZHVuZzwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5QaGnDqm4gw6JtPC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8L3RoZWFkPlxyXG5cdFx0XHRcdFx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHRcdFx0XHRcdHtkYXRhVHJhbnNsYXRlLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRyIGtleT17aW5kZXh9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57aXRlbS50ZXh0U2VsZWN0fTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwic2hvdy10ZXh0LXRyYW5zbGF0ZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2l0ZW0udGV4dFRyYW5zbGF0ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25GaXhUZXh0VHJhbnNsYXRlKGUsIGl0ZW0ubm90ZUlEKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbktleURvd249eyhlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVGaXhUcmFuc2xhdGUoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0SXNNb2RhbFZpc2libGUoZmFsc2UpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0XHRcdFx0PC90YWJsZT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdDwvTW9kYWw+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid3JhcC1lZGl0b3JcIiBpZD1cImVkaXRvci1lbGVtZW50XCIgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiA4IH19PlxyXG5cdFx0XHRcdHtpc1RyYW5zbGF0ZSAmJiAoXHJcblx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCJcclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCB3aWR0aDogJzEwMCUnLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyB9fVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tZWRpdG9yIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbXItMlwiIG9uQ2xpY2s9eygpID0+IHNob3dNb2RhbCgnYWRkJyl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFBsdXNPdXRsaW5lZCBjbGFzc05hbWU9XCJtci0yXCIgLz4gVGjDqm0gUGhpw6puIMOibVxyXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdDxSZWFjdFN1bW1lcm5vdGVcclxuXHRcdFx0XHRcdHZhbHVlPXt2YWx1ZUVkaXRvcn1cclxuXHRcdFx0XHRcdGNoaWxkcmVuPXtSZWFjdEh0bWxQYXJzZXIodmFsdWVFZGl0b3IpfVxyXG5cdFx0XHRcdFx0b3B0aW9ucz17e1xyXG5cdFx0XHRcdFx0XHRsYW5nOiAndm4nLFxyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IGhlaWdodCB8fCAyMjAsXHJcblx0XHRcdFx0XHRcdGRpYWxvZ3NJbkJvZHk6IHRydWUsXHJcblx0XHRcdFx0XHRcdHRvb2xiYXI6IGdldExpc3RUb29sKClcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17KGNvbnRlbnQ6IGFueSkgPT4gb25DaGFuZ2UoY29udGVudCl9XHJcblx0XHRcdFx0XHRvbkltYWdlVXBsb2FkPXtvbkltYWdlVXBsb2FkfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC8+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JTdW1tZXJub3RlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=