exports.id = 7748;
exports.ids = [7748];
exports.modules = {

/***/ 77748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Auth)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__(69898);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
// EXTERNAL MODULE: ./components/Navbars/AuthNavbar/styles/index.module.css
var index_module = __webpack_require__(92016);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/Navbars/AuthNavbar/index.jsx





function AuthNavbar() {
  const [navbarOpen, setNavbarOpen] = react.useState(false);
  return /*#__PURE__*/jsx_runtime.jsx("nav", {
    className: `w-full flex flex-wrap items-center justify-between px-0 md:px-4 py-3 bg-white md:fixed ${(index_module_default()).shadow} z-30`,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "container px-4 mx-auto flex flex-wrap items-center justify-between",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start",
        children: [/*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
          href: "/",
          children: /*#__PURE__*/jsx_runtime.jsx("a", {
            className: "text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase",
            children: /*#__PURE__*/jsx_runtime.jsx("img", {
              src: "/images/logo.png",
              alt: "...",
              className: "w-32"
            })
          })
        }), /*#__PURE__*/jsx_runtime.jsx("button", {
          className: "cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",
          type: "button",
          onClick: () => setNavbarOpen(!navbarOpen),
          children: /*#__PURE__*/jsx_runtime.jsx("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/jsx_runtime.jsx("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M3 5C3 4.73478 3.10536 4.48043 3.29289 4.29289C3.48043 4.10536 3.73478 4 4 4H16C16.2652 4 16.5196 4.10536 16.7071 4.29289C16.8946 4.48043 17 4.73478 17 5C17 5.26522 16.8946 5.51957 16.7071 5.70711C16.5196 5.89464 16.2652 6 16 6H4C3.73478 6 3.48043 5.89464 3.29289 5.70711C3.10536 5.51957 3 5.26522 3 5ZM3 10C3 9.73478 3.10536 9.48043 3.29289 9.29289C3.48043 9.10536 3.73478 9 4 9H16C16.2652 9 16.5196 9.10536 16.7071 9.29289C16.8946 9.48043 17 9.73478 17 10C17 10.2652 16.8946 10.5196 16.7071 10.7071C16.5196 10.8946 16.2652 11 16 11H4C3.73478 11 3.48043 10.8946 3.29289 10.7071C3.10536 10.5196 3 10.2652 3 10ZM3 15C3 14.7348 3.10536 14.4804 3.29289 14.2929C3.48043 14.1054 3.73478 14 4 14H16C16.2652 14 16.5196 14.1054 16.7071 14.2929C16.8946 14.4804 17 14.7348 17 15C17 15.2652 16.8946 15.5196 16.7071 15.7071C16.5196 15.8946 16.2652 16 16 16H4C3.73478 16 3.48043 15.8946 3.29289 15.7071C3.10536 15.5196 3 15.2652 3 15Z",
              fill: "#FFFFFF"
            })
          })
        })]
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "lg:flex flex-grow items-center bg-primary lg:bg-transparent lg:shadow-none" + (navbarOpen ? " block rounded shadow-lg" : " hidden"),
        id: "example-navbar-warning",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
          className: "flex flex-col lg:flex-row list-none lg:ml-auto",
          children: [/*#__PURE__*/jsx_runtime.jsx("li", {
            className: "flex items-center",
            children: /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
              href: "/auth/login",
              children: /*#__PURE__*/jsx_runtime.jsx("a", {
                className: "font-medium md:px-4 py-2 hover:font-semibold focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3",
                style: {
                  transition: "all .15s ease"
                },
                children: "Login"
              })
            })
          }), /*#__PURE__*/jsx_runtime.jsx("li", {
            className: "flex items-center",
            children: /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
              href: "/auth/signup",
              children: /*#__PURE__*/jsx_runtime.jsx("a", {
                className: "border bg-primary border-primary text-white font-semibold px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 md:ml-3 mb-3",
                style: {
                  transition: "all .15s ease"
                },
                children: "Signup"
              })
            })
          })]
        })
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/Footer/AuthFooter.jsx


function AuthFooter() {
  return /*#__PURE__*/_jsx("footer", {
    className: "mt-4 py-6 bg-grey_40 text-white",
    children: /*#__PURE__*/_jsx("p", {
      className: "text-center",
      children: "Cabiza.net \xA9 2022"
    })
  });
}
// EXTERNAL MODULE: ./context/AuthContext.js
var AuthContext = __webpack_require__(92870);
// EXTERNAL MODULE: ./node_modules/react-hot-toast/dist/react-hot-toast.cjs.production.min.js
var react_hot_toast_cjs_production_min = __webpack_require__(11041);
;// CONCATENATED MODULE: ./layouts/Auth.jsx









function Auth({
  children
}) {
  const {
    user
  } = (0,react.useContext)(AuthContext/* default */.Z);
  const router = (0,client_router.useRouter)();

  if (false) {}

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "bg-secondary_sky_lighter min-h-screen h-full",
    children: [/*#__PURE__*/jsx_runtime.jsx(react_hot_toast_cjs_production_min/* Toaster */.x7, {}), /*#__PURE__*/jsx_runtime.jsx(AuthNavbar, {}), /*#__PURE__*/jsx_runtime.jsx("main", {
      className: "h-full min-h-screen",
      children: children
    })]
  });
}

/***/ }),

/***/ 92016:
/***/ ((module) => {

// Exports
module.exports = {
	"shadow": "styles_shadow__F_rYc"
};


/***/ })

};
;