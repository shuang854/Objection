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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.content),
      content = _useState[0],
      setContent = _useState[1];

  function handleClick(text) {
    setContent({
      content: text
    });
    console.log(content);
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
  }, content))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3102666187",
    __self: this
  }, ".content.jsx-3102666187{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:calc(100% - 55px);}.article.jsx-3102666187{-webkit-flex:calc(100% - 250px);-ms-flex:calc(100% - 250px);flex:calc(100% - 250px);padding:10px;max-height:calc(100% - 20px);overflow-y:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2ltb25cXERlc2t0b3BcXHByb2pcXG5ld3NcXGNvbXBvbmVudHNcXENvbnRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJ3QixBQUdrQyxBQUtXLDBFQUpDLFVBS1osYUFDZ0IsRUFMakMsMkJBTW9CLGdCQUNwQiIsImZpbGUiOiJDOlxcVXNlcnNcXFNpbW9uXFxEZXNrdG9wXFxwcm9qXFxuZXdzXFxjb21wb25lbnRzXFxDb250ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9TaWRlYmFyJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250ZW50KHByb3BzKSB7XHJcbiAgICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZShwcm9wcy5jb250ZW50KTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKHRleHQpIHtcclxuICAgICAgICBzZXRDb250ZW50KHsgY29udGVudDogdGV4dCB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPFNpZGViYXIgZGF0YT17cHJvcHMuZGF0YX0gaGFuZGxlQ2xpY2s9e2hhbmRsZUNsaWNrfS8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+VGl0bGUgb2YgTmV3cyBBcnRpY2xlPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDU1cHgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5hcnRpY2xlIHtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4OiBjYWxjKDEwMCUgLSAyNTBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Simon\\\\Desktop\\\\proj\\\\news\\\\components\\\\Content.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.5842c90d07ee494e19a3.hot-update.js.map