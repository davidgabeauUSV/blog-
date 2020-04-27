webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Prices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Prices */ "./components/Prices.js");
var _this = undefined,
    _jsxFileName = "/Users/davidgabeau/Desktop/portfolio/components/Layout.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






next_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeStart = function (url) {
  console.log(url);
  nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeComplete = function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeError = function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done();
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      title = _ref.title;
  return __jsx("div", {
    className: "jsx-4129712364" + " " + "root",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 3
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("title", {
    className: "jsx-4129712364",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, " GLO ")), __jsx("header", {
    className: "jsx-4129712364",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "jsx-4129712364",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, " Home ")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "jsx-4129712364",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, " About")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/blog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "jsx-4129712364",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, " Blog ")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/blog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "jsx-4129712364",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, " ", __jsx(_components_Prices__WEBPACK_IMPORTED_MODULE_6__["default"], {
    bpi: props.bpi,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }), " "))), __jsx("h1", {
    className: "jsx-4129712364",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, " ", title, " "), children, __jsx("footer", {
    className: "jsx-4129712364",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 3
    }
  }, "\xA9 ", new Date().getFullYear(), " "), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2501593223",
    __self: _this
  }, ".root.jsx-4129712364{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}header.jsx-4129712364{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;padding:1em;font-size:1.2rem;background:indigo;}header.jsx-4129712364 a.jsx-4129712364{color:darkgrey;-webkit-text-decoration:none;text-decoration:none;}header.jsx-4129712364 a.jsx-4129712364:hover{font-weight:bold;color:lightgrey;}footer.jsx-4129712364{padding:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZGdhYmVhdS9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q2MsQUFHb0IsQUFNRixBQVFJLEFBSUUsQUFJTCxXQWZDLENBZ0JmLEdBUnVCLEVBSUwsZ0JBQ2xCLGdDQUpBLFNBZnlCLFdBT00sd0ZBTlYsbUNBT1AsWUFDSyxpQkFDQyxrQkFDcEIsV0FUd0IsOEVBQ3hCIiwiZmlsZSI6Ii9Vc2Vycy9kYXZpZGdhYmVhdS9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XG5pbXBvcnQgUHJpY2VzIGZyb20gJy4uL2NvbXBvbmVudHMvUHJpY2VzJztcblxuUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9IHVybCA9PiB7XG4gIGNvbnNvbGUubG9nKHVybCk7XG4gIE5Qcm9ncmVzcy5zdGFydCgpO1xuXG59XG5cblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKCk7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuLCB0aXRsZSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPiBHTE8gPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICA8aGVhZGVyPlxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgPGE+IEhvbWUgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICA8YT4gQWJvdXQ8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8TGluayBocmVmPVwiL2Jsb2dcIj5cbiAgICAgICAgPGE+IEJsb2cgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj1cIi9ibG9nXCI+XG4gICAgICAgIDxhPiA8UHJpY2VzIGJwaT17cHJvcHMuYnBpfS8+IDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2hlYWRlcj5cblxuICAgIDxoMT4ge3RpdGxlfSA8L2gxPlxuICAgIHtjaGlsZHJlbn1cblxuICA8Zm9vdGVyPiZjb3B5OyB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSA8L2Zvb3Rlcj5cbiAgPHN0eWxlIGpzeD57YFxuICAgIC5yb290IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICBoZWFkZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICBwYWRkaW5nOiAxZW07XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIGJhY2tncm91bmQ6IGluZGlnbztcbiAgICB9XG4gICAgaGVhZGVyIGEge1xuICAgICAgY29sb3I6IGRhcmtncmV5O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgICBoZWFkZXIgYTpob3ZlciB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiBsaWdodGdyZXk7XG4gICAgfVxuICAgIGZvb3RlciB7XG4gICAgICBwYWRkaW5nOiAxZW07XG4gICAgfVxuICBgfSA8L3N0eWxlPlxuICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgIGJvZHkge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAxMTAlXG4gICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICAgIH1cbiAgICBgfTwvc3R5bGU+XG5cbjwvZGl2PlxuXG5cblxuKTtcbiJdfQ== */\n/*@ sourceURL=/Users/davidgabeau/Desktop/portfolio/components/Layout.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "916600450",
    __self: _this
  }, "body{margin:0;font-size:110% background:#f0f0f0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZGdhYmVhdS9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRXFCLEFBR2dCLFNBRVUsa0NBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9kYXZpZGdhYmVhdS9EZXNrdG9wL3BvcnRmb2xpby9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XG5pbXBvcnQgUHJpY2VzIGZyb20gJy4uL2NvbXBvbmVudHMvUHJpY2VzJztcblxuUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9IHVybCA9PiB7XG4gIGNvbnNvbGUubG9nKHVybCk7XG4gIE5Qcm9ncmVzcy5zdGFydCgpO1xuXG59XG5cblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKCk7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuLCB0aXRsZSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPiBHTE8gPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICA8aGVhZGVyPlxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgPGE+IEhvbWUgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICA8YT4gQWJvdXQ8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8TGluayBocmVmPVwiL2Jsb2dcIj5cbiAgICAgICAgPGE+IEJsb2cgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj1cIi9ibG9nXCI+XG4gICAgICAgIDxhPiA8UHJpY2VzIGJwaT17cHJvcHMuYnBpfS8+IDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2hlYWRlcj5cblxuICAgIDxoMT4ge3RpdGxlfSA8L2gxPlxuICAgIHtjaGlsZHJlbn1cblxuICA8Zm9vdGVyPiZjb3B5OyB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSA8L2Zvb3Rlcj5cbiAgPHN0eWxlIGpzeD57YFxuICAgIC5yb290IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICBoZWFkZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICBwYWRkaW5nOiAxZW07XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIGJhY2tncm91bmQ6IGluZGlnbztcbiAgICB9XG4gICAgaGVhZGVyIGEge1xuICAgICAgY29sb3I6IGRhcmtncmV5O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgICBoZWFkZXIgYTpob3ZlciB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiBsaWdodGdyZXk7XG4gICAgfVxuICAgIGZvb3RlciB7XG4gICAgICBwYWRkaW5nOiAxZW07XG4gICAgfVxuICBgfSA8L3N0eWxlPlxuICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgIGJvZHkge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAxMTAlXG4gICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICAgIH1cbiAgICBgfTwvc3R5bGU+XG5cbjwvZGl2PlxuXG5cblxuKTtcbiJdfQ== */\n/*@ sourceURL=/Users/davidgabeau/Desktop/portfolio/components/Layout.js */"));
});

/***/ })

})
//# sourceMappingURL=index.js.24cd255b3fda0d01f7fc.hot-update.js.map