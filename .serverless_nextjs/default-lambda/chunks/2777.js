"use strict";
exports.id = 2777;
exports.ids = [2777];
exports.modules = {

/***/ 62777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MainNavigation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25675);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11163);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85893);



 // svg icons




const RightIcon = () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("svg", {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  className: "ml-5",
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("path", {
    d: "M1 8H15M15 8L7.99998 0.999878M15 8L7.99998 14.9999",
    stroke: "#5B44E9",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })
});

function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    pathname
  } = router;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
    className: "px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "relative flex items-center justify-between",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
        "aria-label": "Cabiza",
        title: "Cabiza",
        className: "inline-flex items-center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
          src: "/images/logo.png",
          alt: "...",
          className: "w-32",
          width: 130,
          height: 40
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
        className: "flex items-center hidden space-x-8 lg:flex",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
            href: "/",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
              "aria-label": "Our product",
              title: "Our product",
              className: `font-medium tracking-wide text-secondary_ink_base transition-colors duration-200 hover:text-deep-purple-accent-400 active:text-primary ${pathname === "/" ? "!text-primary" : ""}`,
              children: "Home"
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
            href: "/discover",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
              "aria-label": "Our product",
              title: "Our product",
              className: `font-medium tracking-wide text-secondary_ink_base transition-colors duration-200 hover:text-deep-purple-accent-400 ${pathname === "/discover" ? "!text-primary" : ""}`,
              children: "Discover"
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
            href: "/membership",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
              "aria-label": "Product pricing",
              title: "Product pricing",
              className: `font-medium tracking-wide text-secondary_ink_base transition-colors duration-200 hover:text-deep-purple-accent-400 ${pathname === "/membership" ? "!text-primary" : ""}`,
              children: "Membership"
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
        className: "flex items-center hidden space-x-2 lg:flex",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
          className: "flex items-center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
            target: "_blank",
            href: `http://app.${window.location.host}/auth/login`,
            rel: "noopener noreferrer",
            className: "font-medium md:px-4 py-2 hover:font-semibold focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3",
            style: {
              transition: "all .15s ease"
            },
            children: "Login"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
            target: "_blank",
            href: `http://app.${window.location.host}/auth/signup`,
            rel: "noopener noreferrer",
            className: "text-primary px-6 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 md:ml-3 mb-3 flex items-center bg-primary_brand_lightest",
            style: {
              transition: "all .15s ease"
            },
            children: ["Sign up ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(RightIcon, {})]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "lg:hidden",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
          "aria-label": "Open Menu",
          title: "Open Menu",
          className: "p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50",
          onClick: () => setIsMenuOpen(true),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
            className: "w-5 text-gray-600",
            viewBox: "0 0 24 24",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("path", {
              fill: "currentColor",
              d: "M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("path", {
              fill: "currentColor",
              d: "M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("path", {
              fill: "currentColor",
              d: "M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
            })]
          })
        }), isMenuOpen && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "absolute top-0 left-0 w-full",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "p-5 bg-white border rounded shadow-sm",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "flex items-center justify-between mb-4",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                  "aria-label": "Cabiza",
                  title: "Cabiza",
                  className: "inline-flex items-center",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
                    className: "w-8 text-deep-purple-accent-400",
                    viewBox: "0 0 24 24",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeMiterlimit: "10",
                    stroke: "currentColor",
                    fill: "none",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("rect", {
                      x: "3",
                      y: "1",
                      width: "7",
                      height: "12"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("rect", {
                      x: "3",
                      y: "17",
                      width: "7",
                      height: "6"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("rect", {
                      x: "14",
                      y: "1",
                      width: "7",
                      height: "6"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("rect", {
                      x: "14",
                      y: "11",
                      width: "7",
                      height: "12"
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                    className: "ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase",
                    children: "Cabiza"
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
                  "aria-label": "Close Menu",
                  title: "Close Menu",
                  className: "p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline",
                  onClick: () => setIsMenuOpen(false),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("svg", {
                    className: "w-5 text-gray-600",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("path", {
                      fill: "currentColor",
                      d: "M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                    })
                  })
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("nav", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
                className: "space-y-4",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: "/",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                      "aria-label": "Our product",
                      title: "Our product",
                      className: "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400",
                      children: "Home"
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: "/discover",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                      "aria-label": "Our product",
                      title: "Our product",
                      className: "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400",
                      children: "Discover"
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: "/membership",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                      "aria-label": "Product pricing",
                      title: "Product pricing",
                      className: "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400",
                      children: "Membership"
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                    target: "_blank",
                    href: `http://app.${window.location.host}/auth/login`,
                    rel: "noopener noreferrer",
                    "aria-label": "About us",
                    title: "About us",
                    className: "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400",
                    children: "Login"
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                    target: "_blank",
                    href: `http://app.${window.location.host}/auth/signup`,
                    rel: "noopener noreferrer",
                    className: "inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none",
                    "aria-label": "Sign up",
                    title: "Sign up",
                    children: "Sign up"
                  })
                })]
              })
            })]
          })
        })]
      })]
    })
  });
}

/***/ })

};
;