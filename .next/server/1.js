exports.ids = [1];
exports.modules = {

/***/ "./node_modules/react-summernote/dist/react-summernote.css":
/*!*****************************************************************!*\
  !*** ./node_modules/react-summernote/dist/react-summernote.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/Elements/Editor/Editor.tsx":
/*!***************************************************!*\
  !*** ./src/components/Elements/Editor/Editor.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_js_src_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/js/src/dropdown */ "bootstrap/js/src/dropdown");
/* harmony import */ var bootstrap_js_src_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_src_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_js_src_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/js/src/modal */ "bootstrap/js/src/modal");
/* harmony import */ var bootstrap_js_src_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_src_modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_js_src_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/js/src/tooltip */ "bootstrap/js/src/tooltip");
/* harmony import */ var bootstrap_js_src_tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_src_tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-html-parser */ "react-html-parser");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_summernote__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-summernote */ "react-summernote");
/* harmony import */ var react_summernote__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_summernote__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_summernote_dist_react_summernote_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-summernote/dist/react-summernote.css */ "./node_modules/react-summernote/dist/react-summernote.css");
/* harmony import */ var react_summernote_dist_react_summernote_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_summernote_dist_react_summernote_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _apiBase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/apiBase */ "./src/apiBase/index.ts");
/* harmony import */ var _context_wrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/context/wrap */ "./src/context/wrap.tsx");


var _jsxFileName = "D:\\MonaMedia\\Project\\IELTS-NguyenHuyen-FE\\IELTS-Nguyen-Huyen\\src\\components\\Elements\\Editor\\Editor.tsx";












const EditorSummernote = props => {
  var _editorRef$current4;

  const {
    getDataEditor,
    isReset,
    questionContent,
    addQuestion,
    deleteSingleQuestion,
    deleteAllQuestion,
    questionData
  } = props;
  const {
    showNoti
  } = Object(_context_wrap__WEBPACK_IMPORTED_MODULE_11__["useWrap"])();
  const editorRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  const inputModalRef = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  const {
    0: valueEditor,
    1: setValueEditor
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(questionContent); // -- For translate --

  const {
    0: textSelect,
    1: setTextSelect
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(null);
  const {
    0: textTranslate,
    1: setTextTranslate
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(null);
  const {
    0: isModalVisible,
    1: setIsModalVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false);
  const {
    0: dataTranslate,
    1: setDataTranslate
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]);
  const {
    0: isAddTranslate,
    1: setIsAddTranslate
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(() => {
    if (questionData !== null && questionData !== void 0 && questionData.ExerciseList) {
      getCurrentQuestion();
    }
  }, []); // ON CHANGE

  const onChange = async content => {
    var _editorRef$current, _editorRef$current$no;

    let temp = await convertTextChange(content); // Cái bùa này ép editor nó nhận "<" với ">"

    const res = await formatText(temp); // Cái này để khi xóa câu hỏi hay thêm tào lao thì nó sắp xếp lại FICA
    // Do Stuff:: Rewrite input index

    let inputs = (_editorRef$current = editorRef.current) === null || _editorRef$current === void 0 ? void 0 : (_editorRef$current$no = _editorRef$current.noteEditable) === null || _editorRef$current$no === void 0 ? void 0 : _editorRef$current$no.find('input.space-editor');
    Array.from(inputs).forEach((element, index) => {
      element.setAttribute('placeholder', `(${index + 1})`);
      element.setAttribute('id', `${index}`);
    }); // Do Stuff:: maping input with External Question

    let currentInputIDArray = Array.from(inputs).map(element => element.id);
    let diffIDArray = Array.from(questionData === null || questionData === void 0 ? void 0 : questionData.ExerciseList).filter(item => !currentInputIDArray.includes(item.inputID.toString()));
    diffIDArray.forEach(item => {
      !!deleteSingleQuestion && deleteSingleQuestion(item.inputID);
    }); // Do Stuff:: làm qq gi do chưa check

    let tagRT = document.querySelectorAll('.note-editable ruby'); // let tagP = document.querySelectorAll('.note-editable p')

    if (tagRT.length > 0) {
      tagRT.forEach((item, index) => {
        const hasNote = item.contains(item.querySelector('rt'));

        if (!hasNote) {
          item.replaceWith(...item.childNodes);
        }
      });
    }

    getDataEditor(res);
  }; // Click thêm input


  const handleAddSpace = () => {
    var _editorRef$current2, _editorRef$current2$n;

    // Do Stuff 1:: create Input ID
    let inputs = (_editorRef$current2 = editorRef.current) === null || _editorRef$current2 === void 0 ? void 0 : (_editorRef$current2$n = _editorRef$current2.noteEditable) === null || _editorRef$current2$n === void 0 ? void 0 : _editorRef$current2$n.find('input.space-editor');
    let inputID = inputs.length || 0; // Do Stuff 2:: create Input Element

    const tempNode = document.createElement('input');
    tempNode.setAttribute('id', inputID);
    tempNode.classList.add('space-editor');
    tempNode.setAttribute('placeholder', `(${inputID + 1})`); // Do Stuff final

    editorRef.current.insertNode(tempNode);
    addQuestion(inputID);
  };

  const getCurrentQuestion = () => {
    let temp = [];

    for (let i = 0; i < (questionData === null || questionData === void 0 ? void 0 : questionData.ExerciseList.length); i++) {
      var _questionData$Exercis;

      temp.push(parseInt(questionData === null || questionData === void 0 ? void 0 : (_questionData$Exercis = questionData.ExerciseList[i]) === null || _questionData$Exercis === void 0 ? void 0 : _questionData$Exercis.inputID));
    }
  }; // BY CHAU


  const convertTextChange = e => {
    let temp = e;
    e.includes('&lt;') && (temp = temp.replace('&lt;', '<'));
    e.includes('&gt;') && (temp = temp.replace('&gt;', '>'));
    return temp;
  }; // KHI MÀ "valueEditor" THAY ĐỔI THÌ CHẠY VÔ ĐÂY


  const formatText = async e => {
    let newText = '';
    let current = 0; // <input id="0" class="space-editor" placeholder="(1)">

    for (let i = 0; i < e.length; i++) {
      if (e[i - 1] == '"' && e[i - 2] == '=' && e[i - 6] == 't' && e[i - 7] == 'u') {
        // Nếu nó là cái "input"
        newText = newText + current;
        current++;
      } else {
        if (e[i - 1] == '(' && e[i - 2] == '"' && e[i - 3] == '=' && e[i - 4] == 'r' && e[i - 5] == 'e') {
          // Nếu nó là cái "placeholder"
          newText = newText + current;
        } else {
          // Nếu nó không là gì hết
          newText = newText + e[i];
        }
      }
    }

    return newText;
  }; // UPLOAD IMAGES


  const onImageUpload = async fileList => {
    showNoti('warning', 'Đang tải hình ảnh lên..');

    try {
      let res = await _apiBase__WEBPACK_IMPORTED_MODULE_10__["studentApi"].uploadImage(fileList[0]);
      res.status == 200 && react_summernote__WEBPACK_IMPORTED_MODULE_8___default.a.insertImage(res.data.data);
    } catch (error) {
      showNoti('danger', 'Không thể tải hình ảnh lên');
    }
  }; // Xóa tất cả câu hỏi


  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(() => {
    var _editorRef$current3;

    ((_editorRef$current3 = editorRef.current) === null || _editorRef$current3 === void 0 ? void 0 : _editorRef$current3.isEmpty()) && deleteAllQuestion();
  }, [(_editorRef$current4 = editorRef.current) === null || _editorRef$current4 === void 0 ? void 0 : _editorRef$current4.isEmpty()]); // ------------------------------------------------------------------------------------------------------
  // Phần dưới này dành cho cái phiên âm
  // Fucking this for translate

  const showModal = type => {
    setIsModalVisible(true);
    const {
      noteEditable: currentContent,
      editor: currentEditor
    } = editorRef.current;
    const selectionRange = currentEditor.summernote('createRange');
    setTextSelect(selectionRange);
    setTimeout(() => {
      var _inputModalRef$curren;

      (_inputModalRef$curren = inputModalRef.current) === null || _inputModalRef$curren === void 0 ? void 0 : _inputModalRef$curren.focus({
        cursor: 'start'
      });
    }, 100);
    type == 'add' ? setIsAddTranslate(true) : setIsAddTranslate(false);
  };

  const handleOk = () => {
    isAddTranslate ? !!textSelect && handleAddTranslate() : handleFixTranslate();
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setTextSelect(null);
    setTextTranslate(null);
  };

  const onChange_GetTranslateText = e => {
    let text = e.target.value;
    setTextTranslate(text);
  };

  const onKeyDownInput = e => {
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
  }; // HANDLE ADD TRANSLATE


  const handleAddTranslate = () => {
    const {
      noteEditable: currentContent,
      editor: currentEditor
    } = editorRef.current;

    if (currentEditor.summernote('isEmpty') === false && !!textSelect.toString()) {
      let noteID = null;

      if (dataTranslate.length < 1) {
        noteID = 0;
      } else {
        noteID = dataTranslate[dataTranslate.length - 1].noteID + 1;
      }

      textSelect.pasteHTML(`<ruby>${textSelect.toString()}<rt style="font-size: 70%;">${textTranslate}</rt></ruby>`);
      setTextSelect(null);
      getDataEditor(currentContent.html());
    }

    setTextTranslate(null);
    setTextSelect(null);
  };

  const onFixTextTranslate = (e, noteID) => {
    var _dataTranslate$index, _dataTranslate$index2, _dataTranslate$index3, _dataTranslate$index4, _dataTranslate$index5, _dataTranslate$index6;

    let text = e.target.value;
    let index = dataTranslate.findIndex(item => item.noteID == noteID);
    let oldText = `<input class="input-prevent-translate"/><span title="${(_dataTranslate$index = dataTranslate[index]) === null || _dataTranslate$index === void 0 ? void 0 : _dataTranslate$index.textTranslate}" class="text-normal-of-translate">${(_dataTranslate$index2 = dataTranslate[index]) === null || _dataTranslate$index2 === void 0 ? void 0 : _dataTranslate$index2.textSelect}<span data-note="${(_dataTranslate$index3 = dataTranslate[index]) === null || _dataTranslate$index3 === void 0 ? void 0 : _dataTranslate$index3.noteID}" class="text-note-of-translate">${(_dataTranslate$index4 = dataTranslate[index]) === null || _dataTranslate$index4 === void 0 ? void 0 : _dataTranslate$index4.textTranslate}</span></span><input class="input-prevent-translate"/>`;
    let newText = `<input class="input-prevent-translate"/><span title="${text}" class="text-normal-of-translate">${(_dataTranslate$index5 = dataTranslate[index]) === null || _dataTranslate$index5 === void 0 ? void 0 : _dataTranslate$index5.textSelect}<span data-note="${(_dataTranslate$index6 = dataTranslate[index]) === null || _dataTranslate$index6 === void 0 ? void 0 : _dataTranslate$index6.noteID}" class="text-note-of-translate">${text}</span></span><input class="input-prevent-translate"/>`;
    dataTranslate[index].textTranslate = text;

    if (valueEditor.includes(oldText)) {
      setValueEditor(valueEditor.replace(oldText, newText));
      getDataEditor(valueEditor.replace(oldText, newText));
    }

    setDataTranslate([...dataTranslate]);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(() => {
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
  }, []); // RÊN ĐƠ

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
      title: "Phi\xEAn \xE2m",
      visible: isModalVisible,
      okText: "L\u01B0u",
      cancelText: "H\u1EE7y",
      onOk: handleOk,
      onCancel: handleCancel,
      children: isAddTranslate ? textSelect ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        ref: inputModalRef,
        allowClear: true,
        id: "input-translate",
        className: "style-input",
        value: textTranslate,
        onChange: onChange_GetTranslateText,
        onKeyDown: onKeyDownInput
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 7
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        style: {
          fontWeight: 500
        },
        children: "Vui l\xF2ng ch\u1ECDn n\u1ED9i dung c\u1EA7n phi\xEAn \xE2m"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 254,
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
              lineNumber: 260,
              columnNumber: 9
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              className: "text-center",
              children: "Phi\xEAn \xE2m"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 261,
              columnNumber: 9
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 8
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
            children: dataTranslate.map((item, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: item.textSelect
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 266,
                columnNumber: 11
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                className: "text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  className: "show-text-translate",
                  type: "text",
                  value: item.textTranslate,
                  onChange: e => onFixTextTranslate(e, item.noteID),
                  onKeyDown: e => {
                    if (e.key === 'Enter') {
                      handleFixTranslate();
                      setIsModalVisible(false);
                    }
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 268,
                  columnNumber: 12
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 267,
                columnNumber: 11
              }, undefined)]
            }, index, true, {
              fileName: _jsxFileName,
              lineNumber: 265,
              columnNumber: 10
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 263,
            columnNumber: 8
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 7
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 6
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "wrap-editor custom",
      id: "editor-element",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "d-flex align-items-center mb-2",
        style: {
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'flex-end'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn-editor d-flex align-items-center mr-2",
          onClick: () => showModal('add'),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["PlusOutlined"], {
            className: "mr-2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 295,
            columnNumber: 7
          }, undefined), " Th\xEAm Phi\xEAn \xE2m"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn-editor d-flex align-items-center",
          onClick: handleAddSpace,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["BorderOutlined"], {
            className: "mr-2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 301,
            columnNumber: 7
          }, undefined), " Th\xEAm input"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_summernote__WEBPACK_IMPORTED_MODULE_8___default.a, {
        class: "summernote",
        ref: editorRef,
        value: valueEditor,
        children: react_html_parser__WEBPACK_IMPORTED_MODULE_7___default()(valueEditor),
        options: {
          lang: 'vn',
          height: 500,
          dialogsInBody: true,
          toolbar: [['style', ['style']], ['font', ['bold', 'underline', 'clear']], ['fontname', ['fontname']], ['para', ['ul', 'ol', 'paragraph']], ['table', ['table']], ['insert', ['link', 'picture', 'video']], ['view', ['fullscreen', 'codeview']]]
        },
        onChange: e => onChange(e),
        onImageUpload: onImageUpload
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 4
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (EditorSummernote);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FbGVtZW50cy9FZGl0b3IvRWRpdG9yLnRzeCJdLCJuYW1lcyI6WyJFZGl0b3JTdW1tZXJub3RlIiwicHJvcHMiLCJnZXREYXRhRWRpdG9yIiwiaXNSZXNldCIsInF1ZXN0aW9uQ29udGVudCIsImFkZFF1ZXN0aW9uIiwiZGVsZXRlU2luZ2xlUXVlc3Rpb24iLCJkZWxldGVBbGxRdWVzdGlvbiIsInF1ZXN0aW9uRGF0YSIsInNob3dOb3RpIiwidXNlV3JhcCIsImVkaXRvclJlZiIsInVzZVJlZiIsImlucHV0TW9kYWxSZWYiLCJ2YWx1ZUVkaXRvciIsInNldFZhbHVlRWRpdG9yIiwidXNlU3RhdGUiLCJ0ZXh0U2VsZWN0Iiwic2V0VGV4dFNlbGVjdCIsInRleHRUcmFuc2xhdGUiLCJzZXRUZXh0VHJhbnNsYXRlIiwiaXNNb2RhbFZpc2libGUiLCJzZXRJc01vZGFsVmlzaWJsZSIsImRhdGFUcmFuc2xhdGUiLCJzZXREYXRhVHJhbnNsYXRlIiwiaXNBZGRUcmFuc2xhdGUiLCJzZXRJc0FkZFRyYW5zbGF0ZSIsInVzZUVmZmVjdCIsIkV4ZXJjaXNlTGlzdCIsImdldEN1cnJlbnRRdWVzdGlvbiIsIm9uQ2hhbmdlIiwiY29udGVudCIsInRlbXAiLCJjb252ZXJ0VGV4dENoYW5nZSIsInJlcyIsImZvcm1hdFRleHQiLCJpbnB1dHMiLCJjdXJyZW50Iiwibm90ZUVkaXRhYmxlIiwiZmluZCIsIkFycmF5IiwiZnJvbSIsImZvckVhY2giLCJlbGVtZW50IiwiaW5kZXgiLCJzZXRBdHRyaWJ1dGUiLCJjdXJyZW50SW5wdXRJREFycmF5IiwibWFwIiwiaWQiLCJkaWZmSURBcnJheSIsImZpbHRlciIsIml0ZW0iLCJpbmNsdWRlcyIsImlucHV0SUQiLCJ0b1N0cmluZyIsInRhZ1JUIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiaGFzTm90ZSIsImNvbnRhaW5zIiwicXVlcnlTZWxlY3RvciIsInJlcGxhY2VXaXRoIiwiY2hpbGROb2RlcyIsImhhbmRsZUFkZFNwYWNlIiwidGVtcE5vZGUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5zZXJ0Tm9kZSIsImkiLCJwdXNoIiwicGFyc2VJbnQiLCJlIiwicmVwbGFjZSIsIm5ld1RleHQiLCJvbkltYWdlVXBsb2FkIiwiZmlsZUxpc3QiLCJzdHVkZW50QXBpIiwidXBsb2FkSW1hZ2UiLCJzdGF0dXMiLCJSZWFjdFN1bW1lcm5vdGUiLCJpbnNlcnRJbWFnZSIsImRhdGEiLCJlcnJvciIsImlzRW1wdHkiLCJzaG93TW9kYWwiLCJ0eXBlIiwiY3VycmVudENvbnRlbnQiLCJlZGl0b3IiLCJjdXJyZW50RWRpdG9yIiwic2VsZWN0aW9uUmFuZ2UiLCJzdW1tZXJub3RlIiwic2V0VGltZW91dCIsImZvY3VzIiwiY3Vyc29yIiwiaGFuZGxlT2siLCJoYW5kbGVBZGRUcmFuc2xhdGUiLCJoYW5kbGVGaXhUcmFuc2xhdGUiLCJoYW5kbGVDYW5jZWwiLCJvbkNoYW5nZV9HZXRUcmFuc2xhdGVUZXh0IiwidGV4dCIsInRhcmdldCIsInZhbHVlIiwib25LZXlEb3duSW5wdXQiLCJrZXkiLCJlbGVtZW50Tm90ZSIsIm5vdGVJRCIsImdldEF0dHJpYnV0ZSIsInRleHRJdGVtIiwiaW5uZXJIVE1MIiwiaW5kZXhEYXRhIiwiZmluZEluZGV4IiwicGFzdGVIVE1MIiwiaHRtbCIsIm9uRml4VGV4dFRyYW5zbGF0ZSIsIm9sZFRleHQiLCJsYXN0Q2hpbGQiLCJhdHRyaWJ1dGVzIiwibm9kZVZhbHVlIiwiZmlyc3RDaGlsZCIsImZvbnRXZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIndpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJSZWFjdEh0bWxQYXJzZXIiLCJsYW5nIiwiaGVpZ2h0IiwiZGlhbG9nc0luQm9keSIsInRvb2xiYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFLLEVBQUVHLFdBSFI7QUFJQyxnQkFBUSxFQUFFZ0gsd0RBQWUsQ0FBQ2hILFdBQUQsQ0FKMUI7QUFLQyxlQUFPLEVBQUU7QUFDUmlILGNBQUksRUFBRSxJQURFO0FBRVJDLGdCQUFNLEVBQUUsR0FGQTtBQUdSQyx1QkFBYSxFQUFFLElBSFA7QUFJUkMsaUJBQU8sRUFBRSxDQUNSLENBQUMsT0FBRCxFQUFVLENBQUMsT0FBRCxDQUFWLENBRFEsRUFFUixDQUFDLE1BQUQsRUFBUyxDQUFDLE1BQUQsRUFBUyxXQUFULEVBQXNCLE9BQXRCLENBQVQsQ0FGUSxFQUdSLENBQUMsVUFBRCxFQUFhLENBQUMsVUFBRCxDQUFiLENBSFEsRUFJUixDQUFDLE1BQUQsRUFBUyxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsV0FBYixDQUFULENBSlEsRUFLUixDQUFDLE9BQUQsRUFBVSxDQUFDLE9BQUQsQ0FBVixDQUxRLEVBTVIsQ0FBQyxRQUFELEVBQVcsQ0FBQyxNQUFELEVBQVMsU0FBVCxFQUFvQixPQUFwQixDQUFYLENBTlEsRUFPUixDQUFDLE1BQUQsRUFBUyxDQUFDLFlBQUQsRUFBZSxVQUFmLENBQVQsQ0FQUTtBQUpELFNBTFY7QUFtQkMsZ0JBQVEsRUFBR3pELENBQUQsSUFBZTNDLFFBQVEsQ0FBQzJDLENBQUQsQ0FuQmxDO0FBb0JDLHFCQUFhLEVBQUVHO0FBcEJoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWhCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakREO0FBQUEsa0JBREQ7QUEyRkEsQ0F2VEQ7O0FBeVRlNUUsK0VBQWYsRSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm9yZGVyT3V0bGluZWQsIEVkaXRPdXRsaW5lZCwgUGx1c091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnXHJcbmltcG9ydCB7IElucHV0LCBNb2RhbCB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCAnYm9vdHN0cmFwL2pzL3NyYy9kcm9wZG93bidcclxuaW1wb3J0ICdib290c3RyYXAvanMvc3JjL21vZGFsJ1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9zcmMvdG9vbHRpcCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUmVhY3RIdG1sUGFyc2VyIGZyb20gJ3JlYWN0LWh0bWwtcGFyc2VyJ1xyXG5pbXBvcnQgUmVhY3RTdW1tZXJub3RlIGZyb20gJ3JlYWN0LXN1bW1lcm5vdGUnXHJcbmltcG9ydCAncmVhY3Qtc3VtbWVybm90ZS9kaXN0L3JlYWN0LXN1bW1lcm5vdGUuY3NzJ1xyXG5pbXBvcnQgeyBzdHVkZW50QXBpIH0gZnJvbSAnfi9hcGlCYXNlJ1xyXG5pbXBvcnQgeyB1c2VXcmFwIH0gZnJvbSAnfi9jb250ZXh0L3dyYXAnXHJcblxyXG50eXBlIGRhdGFUcmFuc2xhdGUgPSBBcnJheTx7XHJcblx0bm90ZUlEOiBudW1iZXJcclxuXHR0ZXh0U2VsZWN0OiBzdHJpbmdcclxuXHR0ZXh0VHJhbnNsYXRlOiBzdHJpbmdcclxufT5cclxuXHJcbmNvbnN0IEVkaXRvclN1bW1lcm5vdGUgPSAocHJvcHMpID0+IHtcclxuXHRjb25zdCB7IGdldERhdGFFZGl0b3IsIGlzUmVzZXQsIHF1ZXN0aW9uQ29udGVudCwgYWRkUXVlc3Rpb24sIGRlbGV0ZVNpbmdsZVF1ZXN0aW9uLCBkZWxldGVBbGxRdWVzdGlvbiwgcXVlc3Rpb25EYXRhIH0gPSBwcm9wc1xyXG5cdGNvbnN0IHsgc2hvd05vdGkgfSA9IHVzZVdyYXAoKVxyXG5cdGNvbnN0IGVkaXRvclJlZiA9IHVzZVJlZjxhbnk+KG51bGwpXHJcblx0Y29uc3QgaW5wdXRNb2RhbFJlZiA9IHVzZVJlZjxhbnk+KG51bGwpXHJcblx0Y29uc3QgW3ZhbHVlRWRpdG9yLCBzZXRWYWx1ZUVkaXRvcl0gPSB1c2VTdGF0ZTxhbnk+KHF1ZXN0aW9uQ29udGVudClcclxuXHQvLyAtLSBGb3IgdHJhbnNsYXRlIC0tXHJcblx0Y29uc3QgW3RleHRTZWxlY3QsIHNldFRleHRTZWxlY3RdID0gdXNlU3RhdGU8YW55PihudWxsKVxyXG5cdGNvbnN0IFt0ZXh0VHJhbnNsYXRlLCBzZXRUZXh0VHJhbnNsYXRlXSA9IHVzZVN0YXRlPGFueT4obnVsbClcclxuXHRjb25zdCBbaXNNb2RhbFZpc2libGUsIHNldElzTW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG5cdGNvbnN0IFtkYXRhVHJhbnNsYXRlLCBzZXREYXRhVHJhbnNsYXRlXSA9IHVzZVN0YXRlPGRhdGFUcmFuc2xhdGU+KFtdKVxyXG5cdGNvbnN0IFtpc0FkZFRyYW5zbGF0ZSwgc2V0SXNBZGRUcmFuc2xhdGVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAocXVlc3Rpb25EYXRhPy5FeGVyY2lzZUxpc3QpIHtcclxuXHRcdFx0Z2V0Q3VycmVudFF1ZXN0aW9uKClcclxuXHRcdH1cclxuXHR9LCBbXSlcclxuXHJcblx0Ly8gT04gQ0hBTkdFXHJcblx0Y29uc3Qgb25DaGFuZ2UgPSBhc3luYyAoY29udGVudDogYW55KSA9PiB7XHJcblx0XHRsZXQgdGVtcDogc3RyaW5nID0gYXdhaXQgY29udmVydFRleHRDaGFuZ2UoY29udGVudCkgLy8gQ8OhaSBiw7lhIG7DoHkgw6lwIGVkaXRvciBuw7Mgbmjhuq1uIFwiPFwiIHbhu5tpIFwiPlwiXHJcblx0XHRjb25zdCByZXM6IGFueSA9IGF3YWl0IGZvcm1hdFRleHQodGVtcCkgLy8gQ8OhaSBuw6B5IMSR4buDIGtoaSB4w7NhIGPDonUgaOG7j2kgaGF5IHRow6ptIHTDoG8gbGFvIHRow6wgbsOzIHPhuq9wIHjhur9wIGzhuqFpIEZJQ0FcclxuXHRcdC8vIERvIFN0dWZmOjogUmV3cml0ZSBpbnB1dCBpbmRleFxyXG5cdFx0bGV0IGlucHV0cyA9IGVkaXRvclJlZi5jdXJyZW50Py5ub3RlRWRpdGFibGU/LmZpbmQoJ2lucHV0LnNwYWNlLWVkaXRvcicpXHJcblx0XHRBcnJheS5mcm9tKGlucHV0cykuZm9yRWFjaCgoZWxlbWVudDogSFRNTEVsZW1lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcclxuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgYCgke2luZGV4ICsgMX0pYClcclxuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aW5kZXh9YClcclxuXHRcdH0pXHJcblx0XHQvLyBEbyBTdHVmZjo6IG1hcGluZyBpbnB1dCB3aXRoIEV4dGVybmFsIFF1ZXN0aW9uXHJcblx0XHRsZXQgY3VycmVudElucHV0SURBcnJheSA9IEFycmF5LmZyb20oaW5wdXRzKS5tYXAoKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiBlbGVtZW50LmlkKVxyXG5cdFx0bGV0IGRpZmZJREFycmF5ID0gQXJyYXkuZnJvbShxdWVzdGlvbkRhdGE/LkV4ZXJjaXNlTGlzdCkuZmlsdGVyKChpdGVtOiBhbnkpID0+ICFjdXJyZW50SW5wdXRJREFycmF5LmluY2x1ZGVzKGl0ZW0uaW5wdXRJRC50b1N0cmluZygpKSlcclxuXHRcdGRpZmZJREFycmF5LmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xyXG5cdFx0XHQhIWRlbGV0ZVNpbmdsZVF1ZXN0aW9uICYmIGRlbGV0ZVNpbmdsZVF1ZXN0aW9uKGl0ZW0uaW5wdXRJRClcclxuXHRcdH0pXHJcblx0XHQvLyBEbyBTdHVmZjo6IGxhzIBtIHFxIGdpIGRvIGNoxrBhIGNoZWNrXHJcblx0XHRsZXQgdGFnUlQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubm90ZS1lZGl0YWJsZSBydWJ5JylcclxuXHRcdC8vIGxldCB0YWdQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5vdGUtZWRpdGFibGUgcCcpXHJcblx0XHRpZiAodGFnUlQubGVuZ3RoID4gMCkge1xyXG5cdFx0XHR0YWdSVC5mb3JFYWNoKChpdGVtOiBhbnksIGluZGV4KSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgaGFzTm90ZSA9IGl0ZW0uY29udGFpbnMoaXRlbS5xdWVyeVNlbGVjdG9yKCdydCcpKVxyXG5cdFx0XHRcdGlmICghaGFzTm90ZSkge1xyXG5cdFx0XHRcdFx0aXRlbS5yZXBsYWNlV2l0aCguLi5pdGVtLmNoaWxkTm9kZXMpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdFx0Z2V0RGF0YUVkaXRvcihyZXMpXHJcblx0fVxyXG5cclxuXHQvLyBDbGljayB0aMOqbSBpbnB1dFxyXG5cdGNvbnN0IGhhbmRsZUFkZFNwYWNlID0gKCkgPT4ge1xyXG5cdFx0Ly8gRG8gU3R1ZmYgMTo6IGNyZWF0ZSBJbnB1dCBJRFxyXG5cdFx0bGV0IGlucHV0cyA9IGVkaXRvclJlZi5jdXJyZW50Py5ub3RlRWRpdGFibGU/LmZpbmQoJ2lucHV0LnNwYWNlLWVkaXRvcicpXHJcblx0XHRsZXQgaW5wdXRJRDogYW55ID0gaW5wdXRzLmxlbmd0aCB8fCAwXHJcblx0XHQvLyBEbyBTdHVmZiAyOjogY3JlYXRlIElucHV0IEVsZW1lbnRcclxuXHRcdGNvbnN0IHRlbXBOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG5cdFx0dGVtcE5vZGUuc2V0QXR0cmlidXRlKCdpZCcsIGlucHV0SUQpXHJcblx0XHR0ZW1wTm9kZS5jbGFzc0xpc3QuYWRkKCdzcGFjZS1lZGl0b3InKVxyXG5cdFx0dGVtcE5vZGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIGAoJHtpbnB1dElEICsgMX0pYClcclxuXHRcdC8vIERvIFN0dWZmIGZpbmFsXHJcblx0XHRlZGl0b3JSZWYuY3VycmVudC5pbnNlcnROb2RlKHRlbXBOb2RlKVxyXG5cdFx0YWRkUXVlc3Rpb24oaW5wdXRJRClcclxuXHR9XHJcblxyXG5cdGNvbnN0IGdldEN1cnJlbnRRdWVzdGlvbiA9ICgpID0+IHtcclxuXHRcdGxldCB0ZW1wOiBhbnkgPSBbXVxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBxdWVzdGlvbkRhdGE/LkV4ZXJjaXNlTGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR0ZW1wLnB1c2gocGFyc2VJbnQocXVlc3Rpb25EYXRhPy5FeGVyY2lzZUxpc3RbaV0/LmlucHV0SUQpKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gQlkgQ0hBVVxyXG5cdGNvbnN0IGNvbnZlcnRUZXh0Q2hhbmdlID0gKGU6IHN0cmluZykgPT4ge1xyXG5cdFx0bGV0IHRlbXA6IHN0cmluZyA9IGVcclxuXHRcdGUuaW5jbHVkZXMoJyZsdDsnKSAmJiAodGVtcCA9IHRlbXAucmVwbGFjZSgnJmx0OycsICc8JykpXHJcblx0XHRlLmluY2x1ZGVzKCcmZ3Q7JykgJiYgKHRlbXAgPSB0ZW1wLnJlcGxhY2UoJyZndDsnLCAnPicpKVxyXG5cdFx0cmV0dXJuIHRlbXBcclxuXHR9XHJcblxyXG5cdC8vIEtISSBNw4AgXCJ2YWx1ZUVkaXRvclwiIFRIQVkgxJDhu5RJIFRIw4wgQ0jhuqBZIFbDlCDEkMOCWVxyXG5cdGNvbnN0IGZvcm1hdFRleHQgPSBhc3luYyAoZTogYW55KSA9PiB7XHJcblx0XHRsZXQgbmV3VGV4dDogYW55ID0gJydcclxuXHRcdGxldCBjdXJyZW50OiBudW1iZXIgPSAwXHJcblx0XHQvLyA8aW5wdXQgaWQ9XCIwXCIgY2xhc3M9XCJzcGFjZS1lZGl0b3JcIiBwbGFjZWhvbGRlcj1cIigxKVwiPlxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChlW2kgLSAxXSA9PSAnXCInICYmIGVbaSAtIDJdID09ICc9JyAmJiBlW2kgLSA2XSA9PSAndCcgJiYgZVtpIC0gN10gPT0gJ3UnKSB7XHJcblx0XHRcdFx0Ly8gTuG6v3UgbsOzIGzDoCBjw6FpIFwiaW5wdXRcIlxyXG5cdFx0XHRcdG5ld1RleHQgPSBuZXdUZXh0ICsgY3VycmVudFxyXG5cdFx0XHRcdGN1cnJlbnQrK1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmIChlW2kgLSAxXSA9PSAnKCcgJiYgZVtpIC0gMl0gPT0gJ1wiJyAmJiBlW2kgLSAzXSA9PSAnPScgJiYgZVtpIC0gNF0gPT0gJ3InICYmIGVbaSAtIDVdID09ICdlJykge1xyXG5cdFx0XHRcdFx0Ly8gTuG6v3UgbsOzIGzDoCBjw6FpIFwicGxhY2Vob2xkZXJcIlxyXG5cdFx0XHRcdFx0bmV3VGV4dCA9IG5ld1RleHQgKyBjdXJyZW50XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8vIE7hur91IG7DsyBraMO0bmcgbMOgIGfDrCBo4bq/dFxyXG5cdFx0XHRcdFx0bmV3VGV4dCA9IG5ld1RleHQgKyBlW2ldXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbmV3VGV4dFxyXG5cdH1cclxuXHJcblx0Ly8gVVBMT0FEIElNQUdFU1xyXG5cdGNvbnN0IG9uSW1hZ2VVcGxvYWQgPSBhc3luYyAoZmlsZUxpc3Q6IGFueSkgPT4ge1xyXG5cdFx0c2hvd05vdGkoJ3dhcm5pbmcnLCAnxJBhbmcgdOG6o2kgaMOsbmgg4bqjbmggbMOqbi4uJylcclxuXHRcdHRyeSB7XHJcblx0XHRcdGxldCByZXM6IGFueSA9IGF3YWl0IHN0dWRlbnRBcGkudXBsb2FkSW1hZ2UoZmlsZUxpc3RbMF0pXHJcblx0XHRcdHJlcy5zdGF0dXMgPT0gMjAwICYmIFJlYWN0U3VtbWVybm90ZS5pbnNlcnRJbWFnZShyZXMuZGF0YS5kYXRhKVxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0c2hvd05vdGkoJ2RhbmdlcicsICdLaMO0bmcgdGjhu4MgdOG6o2kgaMOsbmgg4bqjbmggbMOqbicpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBYw7NhIHThuqV0IGPhuqMgY8OidSBo4buPaVxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRlZGl0b3JSZWYuY3VycmVudD8uaXNFbXB0eSgpICYmIGRlbGV0ZUFsbFF1ZXN0aW9uKClcclxuXHR9LCBbZWRpdG9yUmVmLmN1cnJlbnQ/LmlzRW1wdHkoKV0pXHJcblxyXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIFBo4bqnbiBkxrDhu5tpIG7DoHkgZMOgbmggY2hvIGPDoWkgcGhpw6puIMOibVxyXG5cdC8vIEZ1Y2tpbmcgdGhpcyBmb3IgdHJhbnNsYXRlXHJcblx0Y29uc3Qgc2hvd01vZGFsID0gKHR5cGU6IGFueSkgPT4ge1xyXG5cdFx0c2V0SXNNb2RhbFZpc2libGUodHJ1ZSlcclxuXHRcdGNvbnN0IHsgbm90ZUVkaXRhYmxlOiBjdXJyZW50Q29udGVudCwgZWRpdG9yOiBjdXJyZW50RWRpdG9yIH0gPSBlZGl0b3JSZWYuY3VycmVudFxyXG5cdFx0Y29uc3Qgc2VsZWN0aW9uUmFuZ2UgPSBjdXJyZW50RWRpdG9yLnN1bW1lcm5vdGUoJ2NyZWF0ZVJhbmdlJylcclxuXHRcdHNldFRleHRTZWxlY3Qoc2VsZWN0aW9uUmFuZ2UpXHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0aW5wdXRNb2RhbFJlZi5jdXJyZW50Py5mb2N1cyh7XHJcblx0XHRcdFx0Y3Vyc29yOiAnc3RhcnQnXHJcblx0XHRcdH0pXHJcblx0XHR9LCAxMDApXHJcblx0XHR0eXBlID09ICdhZGQnID8gc2V0SXNBZGRUcmFuc2xhdGUodHJ1ZSkgOiBzZXRJc0FkZFRyYW5zbGF0ZShmYWxzZSlcclxuXHR9XHJcblxyXG5cdGNvbnN0IGhhbmRsZU9rID0gKCkgPT4ge1xyXG5cdFx0aXNBZGRUcmFuc2xhdGUgPyAhIXRleHRTZWxlY3QgJiYgaGFuZGxlQWRkVHJhbnNsYXRlKCkgOiBoYW5kbGVGaXhUcmFuc2xhdGUoKVxyXG5cdFx0c2V0SXNNb2RhbFZpc2libGUoZmFsc2UpXHJcblx0fVxyXG5cclxuXHRjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XHJcblx0XHRzZXRJc01vZGFsVmlzaWJsZShmYWxzZSlcclxuXHRcdHNldFRleHRTZWxlY3QobnVsbClcclxuXHRcdHNldFRleHRUcmFuc2xhdGUobnVsbClcclxuXHR9XHJcblxyXG5cdGNvbnN0IG9uQ2hhbmdlX0dldFRyYW5zbGF0ZVRleHQgPSAoZTogYW55KSA9PiB7XHJcblx0XHRsZXQgdGV4dDogc3RyaW5nID0gZS50YXJnZXQudmFsdWVcclxuXHRcdHNldFRleHRUcmFuc2xhdGUodGV4dClcclxuXHR9XHJcblxyXG5cdGNvbnN0IG9uS2V5RG93bklucHV0ID0gKGU6IGFueSkgPT4ge1xyXG5cdFx0aWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcblx0XHRcdGhhbmRsZUFkZFRyYW5zbGF0ZSgpXHJcblx0XHRcdHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gSEFORExFIEZJWCBUUkFOU0xBVEVcclxuXHRjb25zdCBoYW5kbGVGaXhUcmFuc2xhdGUgPSAoKSA9PiB7XHJcblx0XHRsZXQgZWxlbWVudE5vdGU6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNlZGl0b3ItZWxlbWVudCAubm90ZS1lZGl0YWJsZSAudGV4dC1ub3RlLW9mLXRyYW5zbGF0ZScpXHJcblx0XHRlbGVtZW50Tm90ZS5mb3JFYWNoKChpdGVtOiBhbnksIGluZGV4OiBhbnkpID0+IHtcclxuXHRcdFx0bGV0IG5vdGVJRDogbnVtYmVyID0gcGFyc2VJbnQoaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbm90ZScpKVxyXG5cdFx0XHRsZXQgdGV4dEl0ZW06IGFueSA9IGl0ZW0uaW5uZXJIVE1MXHJcblx0XHRcdGxldCBpbmRleERhdGE6IG51bWJlciA9IGRhdGFUcmFuc2xhdGUuZmluZEluZGV4KChlOiBhbnkpID0+IGUubm90ZUlEID09PSBub3RlSUQpXHJcblx0XHRcdGlmIChkYXRhVHJhbnNsYXRlW2luZGV4RGF0YV0udGV4dFRyYW5zbGF0ZSAhPT0gdGV4dEl0ZW0pIHtcclxuXHRcdFx0XHRpdGVtLmlubmVySFRNTCA9IGRhdGFUcmFuc2xhdGVbaW5kZXhEYXRhXS50ZXh0VHJhbnNsYXRlXHJcblx0XHRcdFx0aXRlbS5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgZGF0YVRyYW5zbGF0ZVtpbmRleERhdGFdLnRleHRUcmFuc2xhdGUpXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHQvLyBIQU5ETEUgQUREIFRSQU5TTEFURVxyXG5cdGNvbnN0IGhhbmRsZUFkZFRyYW5zbGF0ZSA9ICgpID0+IHtcclxuXHRcdGNvbnN0IHsgbm90ZUVkaXRhYmxlOiBjdXJyZW50Q29udGVudCwgZWRpdG9yOiBjdXJyZW50RWRpdG9yIH0gPSBlZGl0b3JSZWYuY3VycmVudFxyXG5cdFx0aWYgKGN1cnJlbnRFZGl0b3Iuc3VtbWVybm90ZSgnaXNFbXB0eScpID09PSBmYWxzZSAmJiAhIXRleHRTZWxlY3QudG9TdHJpbmcoKSkge1xyXG5cdFx0XHRsZXQgbm90ZUlEOiBhbnkgPSBudWxsXHJcblx0XHRcdGlmIChkYXRhVHJhbnNsYXRlLmxlbmd0aCA8IDEpIHtcclxuXHRcdFx0XHRub3RlSUQgPSAwXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bm90ZUlEID0gZGF0YVRyYW5zbGF0ZVtkYXRhVHJhbnNsYXRlLmxlbmd0aCAtIDFdLm5vdGVJRCArIDFcclxuXHRcdFx0fVxyXG5cdFx0XHR0ZXh0U2VsZWN0LnBhc3RlSFRNTChgPHJ1Ynk+JHt0ZXh0U2VsZWN0LnRvU3RyaW5nKCl9PHJ0IHN0eWxlPVwiZm9udC1zaXplOiA3MCU7XCI+JHt0ZXh0VHJhbnNsYXRlfTwvcnQ+PC9ydWJ5PmApXHJcblx0XHRcdHNldFRleHRTZWxlY3QobnVsbClcclxuXHRcdFx0Z2V0RGF0YUVkaXRvcihjdXJyZW50Q29udGVudC5odG1sKCkpXHJcblx0XHR9XHJcblx0XHRzZXRUZXh0VHJhbnNsYXRlKG51bGwpXHJcblx0XHRzZXRUZXh0U2VsZWN0KG51bGwpXHJcblx0fVxyXG5cclxuXHRjb25zdCBvbkZpeFRleHRUcmFuc2xhdGUgPSAoZTogYW55LCBub3RlSUQ6IGFueSkgPT4ge1xyXG5cdFx0bGV0IHRleHQ6IGFueSA9IGUudGFyZ2V0LnZhbHVlXHJcblx0XHRsZXQgaW5kZXg6IGFueSA9IGRhdGFUcmFuc2xhdGUuZmluZEluZGV4KChpdGVtOiBhbnkpID0+IGl0ZW0ubm90ZUlEID09IG5vdGVJRClcclxuXHRcdGxldCBvbGRUZXh0OiBzdHJpbmcgPSBgPGlucHV0IGNsYXNzPVwiaW5wdXQtcHJldmVudC10cmFuc2xhdGVcIi8+PHNwYW4gdGl0bGU9XCIke2RhdGFUcmFuc2xhdGVbaW5kZXhdPy50ZXh0VHJhbnNsYXRlfVwiIGNsYXNzPVwidGV4dC1ub3JtYWwtb2YtdHJhbnNsYXRlXCI+JHtkYXRhVHJhbnNsYXRlW2luZGV4XT8udGV4dFNlbGVjdH08c3BhbiBkYXRhLW5vdGU9XCIke2RhdGFUcmFuc2xhdGVbaW5kZXhdPy5ub3RlSUR9XCIgY2xhc3M9XCJ0ZXh0LW5vdGUtb2YtdHJhbnNsYXRlXCI+JHtkYXRhVHJhbnNsYXRlW2luZGV4XT8udGV4dFRyYW5zbGF0ZX08L3NwYW4+PC9zcGFuPjxpbnB1dCBjbGFzcz1cImlucHV0LXByZXZlbnQtdHJhbnNsYXRlXCIvPmBcclxuXHRcdGxldCBuZXdUZXh0OiBzdHJpbmcgPSBgPGlucHV0IGNsYXNzPVwiaW5wdXQtcHJldmVudC10cmFuc2xhdGVcIi8+PHNwYW4gdGl0bGU9XCIke3RleHR9XCIgY2xhc3M9XCJ0ZXh0LW5vcm1hbC1vZi10cmFuc2xhdGVcIj4ke2RhdGFUcmFuc2xhdGVbaW5kZXhdPy50ZXh0U2VsZWN0fTxzcGFuIGRhdGEtbm90ZT1cIiR7ZGF0YVRyYW5zbGF0ZVtpbmRleF0/Lm5vdGVJRH1cIiBjbGFzcz1cInRleHQtbm90ZS1vZi10cmFuc2xhdGVcIj4ke3RleHR9PC9zcGFuPjwvc3Bhbj48aW5wdXQgY2xhc3M9XCJpbnB1dC1wcmV2ZW50LXRyYW5zbGF0ZVwiLz5gXHJcblx0XHRkYXRhVHJhbnNsYXRlW2luZGV4XS50ZXh0VHJhbnNsYXRlID0gdGV4dFxyXG5cdFx0aWYgKHZhbHVlRWRpdG9yLmluY2x1ZGVzKG9sZFRleHQpKSB7XHJcblx0XHRcdHNldFZhbHVlRWRpdG9yKHZhbHVlRWRpdG9yLnJlcGxhY2Uob2xkVGV4dCwgbmV3VGV4dCkpXHJcblx0XHRcdGdldERhdGFFZGl0b3IodmFsdWVFZGl0b3IucmVwbGFjZShvbGRUZXh0LCBuZXdUZXh0KSlcclxuXHRcdH1cclxuXHRcdHNldERhdGFUcmFuc2xhdGUoWy4uLmRhdGFUcmFuc2xhdGVdKVxyXG5cdH1cclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxldCBlbGVtZW50Tm90ZTogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2VkaXRvci1lbGVtZW50IC5ub3RlLWVkaXRhYmxlIC50ZXh0LW5vcm1hbC1vZi10cmFuc2xhdGUnKVxyXG5cdFx0aWYgKGVsZW1lbnROb3RlLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0ZWxlbWVudE5vdGUuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XHJcblx0XHRcdFx0bGV0IG5vdGVJRDogYW55ID0gaXRlbS5sYXN0Q2hpbGQuYXR0cmlidXRlc1swXS5ub2RlVmFsdWVcclxuXHRcdFx0XHRsZXQgdGV4dFNlbGVjdDogYW55ID0gaXRlbS5maXJzdENoaWxkLm5vZGVWYWx1ZVxyXG5cdFx0XHRcdGxldCB0ZXh0VHJhbnNsYXRlOiBhbnkgPSBpdGVtLmxhc3RDaGlsZC5jaGlsZE5vZGVzWzBdLm5vZGVWYWx1ZVxyXG5cdFx0XHRcdGRhdGFUcmFuc2xhdGUucHVzaCh7XHJcblx0XHRcdFx0XHRub3RlSUQ6IHBhcnNlSW50KG5vdGVJRCksXHJcblx0XHRcdFx0XHR0ZXh0U2VsZWN0OiB0ZXh0U2VsZWN0LFxyXG5cdFx0XHRcdFx0dGV4dFRyYW5zbGF0ZTogdGV4dFRyYW5zbGF0ZVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0pXHJcblx0XHRcdHNldERhdGFUcmFuc2xhdGUoWy4uLmRhdGFUcmFuc2xhdGVdKVxyXG5cdFx0fVxyXG5cdH0sIFtdKVxyXG5cclxuXHQvLyBSw4pOIMSQxqBcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PE1vZGFsIHRpdGxlPVwiUGhpw6puIMOibVwiIHZpc2libGU9e2lzTW9kYWxWaXNpYmxlfSBva1RleHQ9XCJMxrB1XCIgY2FuY2VsVGV4dD1cIkjhu6d5XCIgb25Paz17aGFuZGxlT2t9IG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9PlxyXG5cdFx0XHRcdHtpc0FkZFRyYW5zbGF0ZSA/IChcclxuXHRcdFx0XHRcdHRleHRTZWxlY3QgPyAoXHJcblx0XHRcdFx0XHRcdDxJbnB1dFxyXG5cdFx0XHRcdFx0XHRcdHJlZj17aW5wdXRNb2RhbFJlZn1cclxuXHRcdFx0XHRcdFx0XHRhbGxvd0NsZWFyXHJcblx0XHRcdFx0XHRcdFx0aWQ9XCJpbnB1dC10cmFuc2xhdGVcIlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInN0eWxlLWlucHV0XCJcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGV4dFRyYW5zbGF0ZX1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17b25DaGFuZ2VfR2V0VHJhbnNsYXRlVGV4dH1cclxuXHRcdFx0XHRcdFx0XHRvbktleURvd249e29uS2V5RG93bklucHV0fVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0PHAgc3R5bGU9e3sgZm9udFdlaWdodDogNTAwIH19PlZ1aSBsw7JuZyBjaOG7jW4gbuG7mWkgZHVuZyBj4bqnbiBwaGnDqm4gw6JtPC9wPlxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRldGFpbC10cmFuc2xhdGVcIj5cclxuXHRcdFx0XHRcdFx0PHRhYmxlPlxyXG5cdFx0XHRcdFx0XHRcdDx0aGVhZD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPk7hu5lpIGR1bmc8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+UGhpw6puIMOibTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PC90aGVhZD5cclxuXHRcdFx0XHRcdFx0XHQ8dGJvZHk+XHJcblx0XHRcdFx0XHRcdFx0XHR7ZGF0YVRyYW5zbGF0ZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ciBrZXk9e2luZGV4fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e2l0ZW0udGV4dFNlbGVjdH08L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInNob3ctdGV4dC10cmFuc2xhdGVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtLnRleHRUcmFuc2xhdGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gb25GaXhUZXh0VHJhbnNsYXRlKGUsIGl0ZW0ubm90ZUlEKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25LZXlEb3duPXsoZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlRml4VHJhbnNsYXRlKClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldElzTW9kYWxWaXNpYmxlKGZhbHNlKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHRcdDwvdGJvZHk+XHJcblx0XHRcdFx0XHRcdDwvdGFibGU+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHQ8L01vZGFsPlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cmFwLWVkaXRvciBjdXN0b21cIiBpZD1cImVkaXRvci1lbGVtZW50XCI+XHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCJcclxuXHRcdFx0XHRcdHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycsIHdpZHRoOiAnMTAwJScsIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnIH19XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tZWRpdG9yIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbXItMlwiIG9uQ2xpY2s9eygpID0+IHNob3dNb2RhbCgnYWRkJyl9PlxyXG5cdFx0XHRcdFx0XHQ8UGx1c091dGxpbmVkIGNsYXNzTmFtZT1cIm1yLTJcIiAvPiBUaMOqbSBQaGnDqm4gw6JtXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdHsvKiA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1lZGl0b3IgZml4LXRyYW5zbGF0ZSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1yLTJcIiBvbkNsaWNrPXsoKSA9PiBzaG93TW9kYWwoJ2ZpeCcpfT5cclxuXHRcdFx0XHRcdFx0PEVkaXRPdXRsaW5lZCBjbGFzc05hbWU9XCJtci0yXCIgLz4gU+G7rWEgcGhpw6puIMOibVxyXG5cdFx0XHRcdFx0PC9idXR0b24+ICovfVxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tZWRpdG9yIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIiBvbkNsaWNrPXtoYW5kbGVBZGRTcGFjZX0+XHJcblx0XHRcdFx0XHRcdDxCb3JkZXJPdXRsaW5lZCBjbGFzc05hbWU9XCJtci0yXCIgLz4gVGjDqm0gaW5wdXRcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8UmVhY3RTdW1tZXJub3RlXHJcblx0XHRcdFx0XHRjbGFzcz1cInN1bW1lcm5vdGVcIlxyXG5cdFx0XHRcdFx0cmVmPXtlZGl0b3JSZWZ9XHJcblx0XHRcdFx0XHR2YWx1ZT17dmFsdWVFZGl0b3J9XHJcblx0XHRcdFx0XHRjaGlsZHJlbj17UmVhY3RIdG1sUGFyc2VyKHZhbHVlRWRpdG9yKX1cclxuXHRcdFx0XHRcdG9wdGlvbnM9e3tcclxuXHRcdFx0XHRcdFx0bGFuZzogJ3ZuJyxcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiA1MDAsXHJcblx0XHRcdFx0XHRcdGRpYWxvZ3NJbkJvZHk6IHRydWUsXHJcblx0XHRcdFx0XHRcdHRvb2xiYXI6IFtcclxuXHRcdFx0XHRcdFx0XHRbJ3N0eWxlJywgWydzdHlsZSddXSxcclxuXHRcdFx0XHRcdFx0XHRbJ2ZvbnQnLCBbJ2JvbGQnLCAndW5kZXJsaW5lJywgJ2NsZWFyJ11dLFxyXG5cdFx0XHRcdFx0XHRcdFsnZm9udG5hbWUnLCBbJ2ZvbnRuYW1lJ11dLFxyXG5cdFx0XHRcdFx0XHRcdFsncGFyYScsIFsndWwnLCAnb2wnLCAncGFyYWdyYXBoJ11dLFxyXG5cdFx0XHRcdFx0XHRcdFsndGFibGUnLCBbJ3RhYmxlJ11dLFxyXG5cdFx0XHRcdFx0XHRcdFsnaW5zZXJ0JywgWydsaW5rJywgJ3BpY3R1cmUnLCAndmlkZW8nXV0sXHJcblx0XHRcdFx0XHRcdFx0Wyd2aWV3JywgWydmdWxsc2NyZWVuJywgJ2NvZGV2aWV3J11dXHJcblx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17KGU6IHN0cmluZykgPT4gb25DaGFuZ2UoZSl9XHJcblx0XHRcdFx0XHRvbkltYWdlVXBsb2FkPXtvbkltYWdlVXBsb2FkfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC8+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JTdW1tZXJub3RlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=