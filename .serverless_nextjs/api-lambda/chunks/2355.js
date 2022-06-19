"use strict";
exports.id = 2355;
exports.ids = [2355];
exports.modules = {

/***/ 34434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ user_profile)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48068);

const user_profile = (0,recoil__WEBPACK_IMPORTED_MODULE_0__/* .atom */ .cn)({
  key: "user_profile",
  default: {
    user: null
  }
});

/***/ }),

/***/ 62355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Username)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11163);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48068);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9669);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76871);
/* harmony import */ var _atoms_user_profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34434);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25675);
/* harmony import */ var _components_Navbars_DashboardNav_TopNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30836);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85893);












const AddIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
    d: "M4 8H12",
    stroke: "white",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
    d: "M8 12V4",
    stroke: "white",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })]
});

function Username({
  children
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    username
  } = router.query;
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [, setSelectedUser] = (0,recoil__WEBPACK_IMPORTED_MODULE_3__/* .useRecoilState */ .FV)(_atoms_user_profile__WEBPACK_IMPORTED_MODULE_6__/* .user_profile */ .g);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const response = await axios__WEBPACK_IMPORTED_MODULE_4___default().get(`${_config_index__WEBPACK_IMPORTED_MODULE_5__.API_URL}/user/username/${username}`);
        setUser(response.data.data.user);
        setSelectedUser({
          user: response.data.data.user
        });
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username, router, setSelectedUser]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: "min-h-screen w-full bg-primary_brand_lightest",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
      className: "bg-white border border-b border-secondary_sky_base",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_components_Navbars_DashboardNav_TopNav__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        showLanguage: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("button", {
          className: "bg-primary flex h-[max-content] m-auto items-center rounded-full text-white px-4 py-2",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(AddIcon, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
            className: "ml-2",
            children: "Follow"
          })]
        })
      })
    }), children, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
      className: "w-full flex justify-center md:py-9 py-6",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "flex items-end",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("p", {
          className: "text-base font-semibold uppercase text-secondary mr-2",
          children: "POWERED BY"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
          href: "/",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("a", {
            className: "cursor-pointer",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(next_image__WEBPACK_IMPORTED_MODULE_7__["default"], {
              src: "/images/logo.png",
              alt: "...",
              className: "h-10 w-40",
              width: 160,
              height: 40
            })
          })
        })]
      })
    })]
  });
}

/***/ })

};
;