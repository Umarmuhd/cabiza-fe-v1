"use strict";
exports.id = 5493;
exports.ids = [5493];
exports.modules = {

/***/ 45493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var react_qr_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1653);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74855);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11041);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92870);
/* harmony import */ var _components_Alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65745);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85893);
/* eslint-disable react/no-unknown-property */










const saveSvgAsPng = __webpack_require__(81803);

const LeftIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("svg", {
  width: "15",
  height: "15",
  viewBox: "0 0 25 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("path", {
    d: "M10.07 5.93005L4 12.0001L10.07 18.0701",
    stroke: "#5B44E9",
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("path", {
    d: "M21 12H4.16998",
    stroke: "#5B44E9",
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })]
});

const Share = () => {
  const {
    user
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
  const imageOptions = {
    scale: 5,
    encoderOptions: 1,
    backgroundColor: "white"
  };

  const handleSave = () => {
    saveSvgAsPng.saveSvgAsPng(document.getElementById("svg-chart"), "cabiza.png", imageOptions);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
    className: "bg-white rounded-2xl p-12 px-3 md:w-43/50 mx-auto mt-10 shadow mb-12",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "text-center relative",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h1", {
        className: "text-3xl font-semibold mb-4",
        children: "Share to friends"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: "rounded-2xl bg-secondary_sky_lighter w-[max-content] p-4 mx-auto flex",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_qr_code__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          value: "hey",
          id: "svg-chart"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "w-[90%] mx-auto px-10 mt-6 border-b pb-12 border-secondary_sky_base",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
          className: "w-[80%] mx-auto text-secondary_ink_lighter text-lg",
          children: "Copy and share your profile follow link"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "mt-6 flex mx-auto w-[max-content]",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3___default()), {
            text: `https://${user.username}.cabiza.net`,
            onCopy: () => react_hot_toast__WEBPACK_IMPORTED_MODULE_7__/* ["default"].custom */ .ZP.custom( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_Alert__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
              color: "#24C78C",
              text: "Copied success !"
            })),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("button", {
              className: "bg-primary flex px-4 text-white py-2 rounded-full",
              children: "Copy link"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("button", {
            className: "text-primary flex px-4 bg-primary_brand_lightest py-2 rounded-full ml-4",
            onClick: handleSave,
            children: "Save image"
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: "mt-7 text-center w-[max-content] mx-auto text-primary",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
          href: "/profile/customize",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
            className: "flex items-center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(LeftIcon, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
              className: "ml-2",
              children: "Back"
            })]
          })
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Share);

/***/ })

};
;