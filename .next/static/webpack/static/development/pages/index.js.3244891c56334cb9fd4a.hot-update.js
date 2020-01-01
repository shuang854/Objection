webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Content.js":
/*!*******************************!*\
  !*** ./components/Content.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Content; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidebar */ "./components/Sidebar.js");
var _jsxFileName = "C:\\Users\\Simon\\Desktop\\proj\\news\\components\\Content.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Content(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.data.articles[0].content),
      contents = _useState[0],
      setContents = _useState[1];

  function handleClick(text) {
    setContents({
      contents: text
    });
    console.log(text);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3102666187" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: props.data,
    handleClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3102666187" + " " + "article",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3102666187",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Title of News Article"), __jsx("p", {
    className: "jsx-3102666187",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, contents))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3102666187",
    __self: this
  }, ".content.jsx-3102666187{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:calc(100% - 55px);}.article.jsx-3102666187{-webkit-flex:calc(100% - 250px);-ms-flex:calc(100% - 250px);flex:calc(100% - 250px);padding:10px;max-height:calc(100% - 20px);overflow-y:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2ltb25cXERlc2t0b3BcXHByb2pcXG5ld3NcXGNvbXBvbmVudHNcXENvbnRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJ3QixBQUdrQyxBQUtXLDBFQUpDLFVBS1osYUFDZ0IsRUFMakMsMkJBTW9CLGdCQUNwQiIsImZpbGUiOiJDOlxcVXNlcnNcXFNpbW9uXFxEZXNrdG9wXFxwcm9qXFxuZXdzXFxjb21wb25lbnRzXFxDb250ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9TaWRlYmFyJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250ZW50KHByb3BzKSB7XHJcbiAgICBjb25zdCBbY29udGVudHMsIHNldENvbnRlbnRzXSA9IHVzZVN0YXRlKHByb3BzLmRhdGEuYXJ0aWNsZXNbMF0uY29udGVudCk7XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDbGljayh0ZXh0KSB7XHJcbiAgICAgICAgc2V0Q29udGVudHMoeyBjb250ZW50czogdGV4dCB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPFNpZGViYXIgZGF0YT17cHJvcHMuZGF0YX0gaGFuZGxlQ2xpY2s9e2hhbmRsZUNsaWNrfS8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+VGl0bGUgb2YgTmV3cyBBcnRpY2xlPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRlbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1NXB4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYXJ0aWNsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleDogY2FsYygxMDAlIC0gMjUwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Simon\\\\Desktop\\\\proj\\\\news\\\\components\\\\Content.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.3244891c56334cb9fd4a.hot-update.js.map