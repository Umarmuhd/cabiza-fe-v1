exports.id = 0;
exports.ids = [0];
exports.modules = {

/***/ 58149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _components_Navbars_DashboardNav_TopNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30836);
/* harmony import */ var _context_NavContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40766);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85893);






const FullNav = ({
  title,
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_Navbars_DashboardNav_TopNav__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      title: title,
      showLanguage: false
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "bg-secondary_sky_lightest py-4 md:h-20 h-auto px-4 sm:px-6 md:px-0 w-full max-w-9xl mx-auto shadow-lg border-b sm:mb-0 mb-8",
      style: {
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.04)'
      },
      children: children
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FullNav);

/***/ }),

/***/ 49116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46536);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);






const CheckSwitch = ({
  label,
  styles,
  checked,
  name
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label", {
      className: `${(_index_module_css__WEBPACK_IMPORTED_MODULE_2___default().input)} ${styles}`,
      htmlFor: label,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("input", {
        type: "radio",
        name: name,
        id: label,
        className: "hidden",
        checked: checked
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_2___default().newRadio)
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("label", {
        htmlFor: label,
        children: label
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckSwitch);

/***/ }),

/***/ 46536:
/***/ ((module) => {

// Exports
module.exports = {
	"input": "checkSwitch_input__9m1K4",
	"newRadio": "checkSwitch_newRadio__KcsIc"
};


/***/ })

};
;