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
    className: "jsx-1680339912",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, data.articles.map(function (article) {
    return __jsx("li", {
      className: "jsx-1680339912",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("a", {
      onClick: function onClick() {
        return props.handleClick(article.content, article.title);
      },
      className: "jsx-1680339912",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, article.title.substring(0, article.title.indexOf(' - '))), article.source.name);
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1680339912",
    __self: this
  }, "ul.jsx-1680339912{position:relative;margin-block-start:0;margin-block-end:0;list-style-type:none;width:250px;height:100%;padding:0px;background-color:#e4e4e4;overflow-y:auto;}li.jsx-1680339912 a.jsx-1680339912{display:block;padding:8px 8px;color:#000;cursor:pointer;}li.jsx-1680339912{padding:10px;border-bottom-style:solid;border-width:1px;border-color:#696969;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2ltb25cXERlc2t0b3BcXHByb2pcXG5ld3NcXGNvbXBvbmVudHNcXFNpZGViYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0J3QixBQUd1QyxBQVlKLEFBT0QsYUFDYSxDQVBWLElBWkssWUFhVixTQVpRLEFBbUJGLEVBTkYsZUFDbkIsQUFNeUIsRUFuQkEsbUJBb0J6QixFQW5CZ0IsWUFDQSxZQUNBLFlBQ2EseUJBQ1QsZ0JBQ3BCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcU2ltb25cXERlc2t0b3BcXHByb2pcXG5ld3NcXGNvbXBvbmVudHNcXFNpZGViYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgU2lkZWJhciA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgY29uc3QgZGF0YSA9IHByb3BzLmRhdGE7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtkYXRhLmFydGljbGVzLm1hcChhcnRpY2xlID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IChwcm9wcy5oYW5kbGVDbGljayhhcnRpY2xlLmNvbnRlbnQsIGFydGljbGUudGl0bGUpKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS50aXRsZS5zdWJzdHJpbmcoMCwgYXJ0aWNsZS50aXRsZS5pbmRleE9mKCcgLSAnKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FydGljbGUuc291cmNlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGkgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDhweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjNjk2OTY5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Simon\\\\Desktop\\\\proj\\\\news\\\\components\\\\Sidebar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ })

})
//# sourceMappingURL=index.js.4c13424fcabf227b7863.hot-update.js.map