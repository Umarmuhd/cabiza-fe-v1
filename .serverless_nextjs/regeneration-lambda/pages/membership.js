"use strict";
(() => {
var exports = {};
exports.id = 4508;
exports.ids = [4508];
exports.modules = {

/***/ 96295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Membership),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _components_Footer_MainFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71002);
/* harmony import */ var _components_Navbars_MainNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62777);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51288);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85893);







const TickIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("path", {
    d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z",
    fill: "#24C78C"
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("path", {
    d: "M10.5804 15.58C10.3804 15.58 10.1904 15.5 10.0504 15.36L7.22043 12.53C6.93043 12.24 6.93043 11.76 7.22043 11.47C7.51043 11.18 7.99043 11.18 8.28043 11.47L10.5804 13.77L15.7204 8.62998C16.0104 8.33998 16.4904 8.33998 16.7804 8.62998C17.0704 8.91998 17.0704 9.39998 16.7804 9.68998L11.1104 15.36C10.9704 15.5 10.7804 15.58 10.5804 15.58Z",
    fill: "#24C78C"
  })]
});

const CancelIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("path", {
    d: "M14.9 22.75H9.10001C8.21001 22.75 7.07 22.28 6.45 21.65L2.35001 17.55C1.72001 16.92 1.25 15.78 1.25 14.9V9.10001C1.25 8.21001 1.72001 7.07001 2.35001 6.45001L6.45 2.35001C7.08 1.72001 8.22001 1.25 9.10001 1.25H14.9C15.79 1.25 16.93 1.72001 17.55 2.35001L21.65 6.45001C22.28 7.08001 22.75 8.22001 22.75 9.10001V14.9C22.75 15.79 22.28 16.93 21.65 17.55L17.55 21.65C16.92 22.28 15.79 22.75 14.9 22.75ZM9.10001 2.75C8.61001 2.75 7.84999 3.06 7.50999 3.41L3.41 7.51001C3.07 7.86001 2.75 8.61001 2.75 9.10001V14.9C2.75 15.39 3.06 16.15 3.41 16.49L7.50999 20.59C7.85999 20.93 8.61001 21.25 9.10001 21.25H14.9C15.39 21.25 16.15 20.94 16.49 20.59L20.59 16.49C20.93 16.14 21.25 15.39 21.25 14.9V9.10001C21.25 8.61001 20.94 7.85001 20.59 7.51001L16.49 3.41C16.14 3.07 15.39 2.75 14.9 2.75H9.10001Z",
    fill: "#F50000"
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("path", {
    d: "M8.49945 16.2499C8.30945 16.2499 8.11945 16.1799 7.96945 16.0299C7.67945 15.7399 7.67945 15.2599 7.96945 14.9699L14.9695 7.96994C15.2595 7.67994 15.7395 7.67994 16.0295 7.96994C16.3195 8.25994 16.3195 8.73994 16.0295 9.02994L9.02945 16.0299C8.87945 16.1799 8.68945 16.2499 8.49945 16.2499Z",
    fill: "#F50000"
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("path", {
    d: "M15.4995 16.2499C15.3095 16.2499 15.1195 16.1799 14.9695 16.0299L7.96945 9.02994C7.67945 8.73994 7.67945 8.25994 7.96945 7.96994C8.25945 7.67994 8.73945 7.67994 9.02945 7.96994L16.0295 14.9699C16.3195 15.2599 16.3195 15.7399 16.0295 16.0299C15.8795 16.1799 15.6895 16.2499 15.4995 16.2499Z",
    fill: "#F50000"
  })]
});

function Membership({
  subscriptionPlans
}) {
  const {
    0: payout,
    1: setPayout
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    monthly: false,
    yearly: true
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "w-full h-full",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_Navbars_MainNav__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("header", {
      className: "py-16 bg-secondary_sky_lighter",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "mx-auto max-w-[1500px]",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "w-[100%] mx-aut",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h1", {
            className: "font-semibold sm:text-4xl text-3xl leading-9 text-secondary_ink_dark text-center",
            children: "MEMBERSHIP PLANS"
          })
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("section", {
      className: "md:py-10 py-5 bg-white",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "mx-auto lg:flex lg:items-center lg:justify-between md:mb-12 mb-5",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h2", {
              className: "sm:text-3xl text-2xl font-bold text-secondary sm:text-4xl lg:w-3/5",
              children: "Get the right plan for future products/services"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "flex flex-col",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              className: "mt-8 flex lg:mt-0 lg:flex-shrink-0",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "float-left flex mt-1 bg-secondary_sky_light rounded-xl border border-secondary_sky_light w-[max-content] p-[.1rem]",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
                  className: `${payout.monthly ? 'bg-white text-secondary_ink_light rounded-l-xl' : 'bg-secondary_sky_light text-secondary_brand_light'} h-[2.4rem] w-[11rem] ml-[1px] rounded-l-xl m-auto`,
                  onClick: () => setPayout({
                    monthly: true,
                    yearly: false
                  }),
                  children: "Monthly"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
                  className: `${payout.yearly ? 'bg-white text-secondary_ink_light rounded-r-xl' : 'bg-secondary_sky_light text-secondary_brand_light'} h-[2.4rem] w-[12rem] ml-[1px] rounded-r-xl m-auto hover:bg-indigo-50`,
                  onClick: () => setPayout({
                    monthly: false,
                    yearly: true
                  }),
                  children: "Annually"
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
              className: "text-secondary_sky_dark mt-2",
              children: "Save 12% on annual subscription"
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("section", {
          id: "membership",
          className: `${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().membership)} md:pt-2`,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "flex",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              className: `${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().plans)} ${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().flex)}`,
              children: subscriptionPlans === null || subscriptionPlans === void 0 ? void 0 : subscriptionPlans.map(each => {
                let monthlyPrice = each.price / 12 - 12 / 100;
                monthlyPrice = Math.abs((monthlyPrice === -0 ? 0 : monthlyPrice).toFixed());
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: `${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().col)} ${each.mostPopular ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().popular) : ""}`,
                  children: [each.mostPopular ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("aside", {
                    children: "Most popular"
                  }) : null, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h4", {
                    children: each.zone
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
                    children: each.planName
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().price),
                    children: ["\xA3", payout.yearly ? `${each.price}${each.price !== 0 ? "/Annum" : ""}` : `${monthlyPrice}${monthlyPrice !== 0 ? "/Monthly" : ""}`]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                    href: "",
                    children: "Sign Up"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                    className: `${each.mostPopular ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().description) : ""}`,
                    children: each.description
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                    href: "",
                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default()["btn-secondary"]),
                    children: "Learn More"
                  })]
                }, each.id);
              })
            })
          })
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("section", {
      className: "py-16 bg-secondary_sky_lighter",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "mx-auto max-w-[1300px]",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "w-[74%] mx-auto",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h1", {
            className: "font-semibold text-4xl leading-9 text-secondary text-center",
            children: "MEMBERSHIP PLANS COMPARED"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
            className: "text-lg mt-3 text-secondary_ink_lighter text-center",
            children: "Choose whats right for you"
          })]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("section", {
      className: "py-16",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "mx-auto w-[90%] max-w-[1300px]",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "flex flex-col",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-6",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              className: "align-middle inline-block min-w-full",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                className: "shadow overflow-hidden border-b border-gray-200 rounded-lg",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
                  className: `min-w-full divide-y divide-gray-200 border-collapse ${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().table)}`,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("thead", {
                    className: "bg-secondary_ink_dark",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                        scope: "col",
                        className: "px-6 py-3 text-left text-lg font-bold text-white uppercase",
                        children: "FEATURES/BENEFITS"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                        scope: "col",
                        className: "px-6 py-3 text-left text-lg font-bold text-white uppercase",
                        children: "STARTER"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                        scope: "col",
                        className: "px-6 py-3 text-left text-lg font-bold text-white uppercase",
                        children: "OWNER"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                        scope: "col",
                        className: "px-6 py-3 text-left text-lg font-bold text-white uppercase",
                        children: "SHAPER"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                        scope: "col",
                        className: "px-6 py-3 text-left text-lg font-bold text-white uppercase",
                        children: "INNOVATOR (BY INVITATION/WAITING LIST)"
                      })]
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tbody", {
                    className: `bg-white divide-y divide-gray-200 ${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default()["table-body"])}`,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: "Author-maker Sign up"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: "Free"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: "Free"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: "Free"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: "Free"
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: "Member Sign up"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: "Free"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: "\xA350/Annum"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: "\xA3500/Annum"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: "\xA35,000 (\xA31,250/Annum subsequently)"
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: "Dashboard"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: "Assigned unique Referral/Marketing link"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: "Access to courses"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CancelIcon, {})
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                          className: "mt-1",
                          children: "1 Course/year"
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                          className: "w-[80%] mt-1",
                          children: "1 Course + 4 free courses or products/year"
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                          className: "w-[80%] mt-1",
                          children: "1 Course + 20 free courses or products/year"
                        })]
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: "Access to other courses if free author-maker"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CancelIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CancelIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CancelIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CancelIcon, {})
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: "Join business cohorts"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                          className: "mt-1",
                          children: "Unlimited after 1st course or product post"
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                          className: "mt-1",
                          children: "Unlimited after 1st course or product post"
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                          className: "mt-1",
                          children: "Unlimited after 1st course or product post"
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                          className: "mt-1",
                          children: "Unlimited after 1st course or product post"
                        })]
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: "Following and being followed"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                          className: "w-[80%] mt-1",
                          children: "Unlimited"
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                          className: "w-[80%] mt-1",
                          children: "Unlimited"
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                          className: "w-[80%] mt-1",
                          children: "Unlimited"
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                          className: "w-[80%] mt-1",
                          children: "Unlimited"
                        })]
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: "Invite/pre sign up affiliates"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: "Welcome Kit and Business Intro"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: "Added to Business Social Media Groups"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40 w-[20%]",
                        children: "Advanced Marketing and Business Techniques"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CancelIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CancelIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: "Entitled to payouts"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40 w-[20%]",
                        children: "Full Business Owner Status Receive Payouts"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CancelIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: "Receive Payouts if Free Author-Maker"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: "Assign % commissions to affiliates"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CancelIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: "Assign % commissions to affiliates if Free Author-Maker"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: "Website Interface"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CancelIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CancelIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: "General Classes and Workshops"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-grey_40 w-[10%]",
                        children: "Course-specific Question and Answer Sessions by the author-makers"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CancelIcon, {})
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CancelIcon, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                          className: "w-[80%] mt-1",
                          children: "(unless by an author-maker\u2019s invitation)"
                        })]
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: "Owners Mastermind"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CancelIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: "Shapers Mastermind"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CancelIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CancelIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: "Advanced Technical and Marketing Support"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CancelIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CancelIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: "Shapers Milestone Incentives"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CancelIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CancelIcon, {})
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                          className: "mt-1",
                          children: "..."
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                          className: "mt-1",
                          children: "..."
                        })]
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: "Innovators Milestone Incentives"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CancelIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CancelIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CancelIcon, {})
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                          className: "mt-1",
                          children: "..."
                        })]
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: "Innovators Mastermind"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CancelIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CancelIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CancelIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: "Founders Forum and Events"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px]  text-secondary",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CancelIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CancelIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CancelIcon, {})
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                        className: "px-6 py-[14px] text-grey_40",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TickIcon, {})
                      })]
                    })]
                  })]
                })
              })
            })
          })
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_Footer_MainFooter__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})]
  });
}
async function getServerSideProps() {
  return {
    props: {
      subscriptionPlans: [{
        id: 1,
        price: 0,
        planName: "Starter",
        zone: "FREE",
        description: "Limited access (intro module or 7 day trial) to the specific/main course on this subscription."
      }, {
        id: 2,
        price: 50,
        planName: "Owner",
        zone: "BUYERS ZONE",
        description: "Everyone is entitled to have access to only 1 free course on this subscription per annum.",
        mostPopular: true
      }, {
        id: 3,
        price: 500,
        planName: "Shaper",
        zone: "MAKERS ZONE",
        description: "Everyone is entitled to have access to 5 free courses/items on this subscription per annum."
      }, {
        id: 4,
        price: 5000,
        planName: "Innovator",
        zone: "CORPORATE ZONE",
        description: "This member has access to 20 free courses/items on this subscription per annum."
      }]
    } // will be passed to the page component as props

  };
}

/***/ }),

/***/ 20629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "unstable_getStaticParams": () => (/* binding */ unstable_getStaticParams),
/* harmony export */   "unstable_getStaticProps": () => (/* binding */ unstable_getStaticProps),
/* harmony export */   "unstable_getStaticPaths": () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   "unstable_getServerProps": () => (/* binding */ unstable_getServerProps),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "_app": () => (/* binding */ _app),
/* harmony export */   "renderReqToHTML": () => (/* binding */ renderReqToHTML),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70607);
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59450);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97020);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73978);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99436);

      
      
      
      

      
      const { processEnv } = __webpack_require__(72333)
      processEnv([{"path":".env","contents":"NEXT_PUBLIC_PROPERTY_ID=\"627fe96db0d10b6f3e7237fc\"\r\nNEXT_PUBLIC_WIDGET_ID=\"1g31qfloo\"\r\n\r\nAWS_ACCESS_KEY_ID=AKIA4PJXZ3JNVVPS2YOK\r\nAWS_SECRET_ACCESS_KEY=\"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\""}])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(71798)

      const appMod = __webpack_require__(21679)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(96295)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        : []

      if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)) {
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.beforeFiles */ .Dg.beforeFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.afterFiles */ .Dg.afterFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.fallback */ .Dg.fallback)
      }

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(99651),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,
        reactRoot: false,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: combinedRewrites,
        i18n: undefined,
        page: "/membership",
        buildId: "BSA9Rb9mbo87qdYVME8rG",
        escapedBuildId: "BSA9Rb9mbo87qdYVME8rG",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"fca7b89aae6bfcf850a4f144016a594f",previewModeSigningKey:"720cce7290ca2ab624c9c5ae4042230642eb249c42e9e4cd65b84bb3969df310",previewModeEncryptionKey:"62fd0a22b7ab719a72ae8b8e9ce6f32d2a2cd799ba1eaf8a5d9257864b366151"}
      })
      
    

/***/ }),

/***/ 1014:
/***/ ((module) => {

module.exports = require("critters");

/***/ }),

/***/ 2186:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");

/***/ }),

/***/ 39491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 85477:
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ 63477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 71576:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 76224:
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8349,639,1664,5675,9589,2777,1002,1288], () => (__webpack_exec__(20629)));
module.exports = __webpack_exports__;

})();