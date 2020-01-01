webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Simon\\Desktop\\proj\\news\\components\\Sidebar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Sidebar = function Sidebar(props) {
  var data = props.data;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("ul", {
    className: "jsx-2238852619",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, data.articles.map(function (article) {
    return __jsx("li", {
      className: "jsx-2238852619",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("a", {
      onClick: function onClick() {
        return props.handleClick();
      },
      className: "jsx-2238852619",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, article.title.substring(0, article.title.indexOf(' - '))), article.source.name);
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2238852619",
    __self: this
  }, "ul.jsx-2238852619{position:relative;margin-block-start:0;margin-block-end:0;list-style-type:none;width:250px;height:100%;padding:0px;background-color:#e4e4e4;overflow-y:auto;}li.jsx-2238852619 a.jsx-2238852619{display:block;padding:8px 8px;color:#000;}li.jsx-2238852619{padding:10px;border-bottom-style:solid;border-width:1px;border-color:#696969;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2ltb25cXERlc2t0b3BcXHByb2pcXG5ld3NcXGNvbXBvbmVudHNcXFNpZGViYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0J3QixBQUd1QyxBQVlKLEFBTUQsYUFDYSxDQU5WLElBWkssWUFhVixTQVpRLEFBa0JGLEVBTHJCLGVBTXlCLEVBbEJBLG1CQW1CekIsRUFsQmdCLFlBQ0EsWUFDQSxZQUNhLHlCQUNULGdCQUNwQiIsImZpbGUiOiJDOlxcVXNlcnNcXFNpbW9uXFxEZXNrdG9wXFxwcm9qXFxuZXdzXFxjb21wb25lbnRzXFxTaWRlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IFNpZGViYXIgPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBwcm9wcy5kYXRhO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5hcnRpY2xlcy5tYXAoYXJ0aWNsZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiAocHJvcHMuaGFuZGxlQ2xpY2soKSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FydGljbGUudGl0bGUuc3Vic3RyaW5nKDAsIGFydGljbGUudGl0bGUuaW5kZXhPZignIC0gJykpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLnNvdXJjZS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMDtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxpIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjNjk2OTY5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Simon\\\\Desktop\\\\proj\\\\news\\\\components\\\\Sidebar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ })

})
//# sourceMappingURL=index.js.d2481ecdef31399a0ff7.hot-update.js.map