"use strict";
exports.id = 1916;
exports.ids = [1916];
exports.modules = {

/***/ 19592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var _context_Transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60180);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92870);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25675);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85893);








function UserMenu() {
  var _user$profile_picture;

  const {
    0: dropdownOpen,
    1: setDropdownOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    user,
    logout
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
  const trigger = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const dropdown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null); // close on click outside

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const clickHandler = ({
      target
    }) => {
      var _dropdown$current, _trigger$current;

      if (!dropdownOpen || (_dropdown$current = dropdown.current) !== null && _dropdown$current !== void 0 && _dropdown$current.contains(target) || (_trigger$current = trigger.current) !== null && _trigger$current !== void 0 && _trigger$current.contains(target)) return;
      setDropdownOpen(false);
    };

    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }); // close if the esc key is pressed

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const keyHandler = ({
      keyCode
    }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };

    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "relative md:inline-flex px-3 ml-1 border-l border-l-secondary_sky_base h-[100%] hidden",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
      ref: trigger,
      className: "inline-flex justify-center items-center group",
      "aria-haspopup": "true",
      onClick: () => setDropdownOpen(!dropdownOpen),
      "aria-expanded": dropdownOpen,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: "flex items-center truncate",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
          className: "truncate ml-1 text-sm font-medium group-hover:text-slate-800 text-secondary_ink_dark mr-3",
          children: (user === null || user === void 0 ? void 0 : user.full_name.length) > 7 ? user === null || user === void 0 ? void 0 : user.full_name.slice(0, 7).concat("...") : user === null || user === void 0 ? void 0 : user.full_name
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: "border-2 border-primary rounded-full flex items-center p-[.2rem]",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
          src: (_user$profile_picture = user === null || user === void 0 ? void 0 : user.profile_picture) !== null && _user$profile_picture !== void 0 ? _user$profile_picture : "/images/avatar.png",
          width: 32,
          height: 32,
          className: "rounded-full",
          alt: "User"
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_context_Transition__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      className: "origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1",
      show: dropdownOpen,
      enter: "transition ease-out duration-200 transform",
      enterStart: "opacity-0 -translate-y-2",
      enterEnd: "opacity-100 translate-y-0",
      leave: "transition ease-out duration-200",
      leaveStart: "opacity-100",
      leaveEnd: "opacity-0",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        ref: dropdown,
        onFocus: () => setDropdownOpen(true),
        onBlur: () => setDropdownOpen(false),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: "pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            className: "font-medium text-slate-800",
            children: user === null || user === void 0 ? void 0 : user.full_name
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("ul", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
              href: "/dashboard/settings",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                className: "font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3 mt-3 mb-3",
                onClick: () => setDropdownOpen(!dropdownOpen),
                children: "Settings"
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("button", {
              className: "font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3",
              to: "/",
              onClick: () => {
                setDropdownOpen(!dropdownOpen);
                logout();
              },
              children: "Sign Out"
            })
          })]
        })]
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserMenu);

/***/ }),

/***/ 60684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var _context_Transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60180);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85893);
/* eslint-disable react/no-unknown-property */






function Notifications() {
  const {
    0: dropdownOpen,
    1: setDropdownOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const trigger = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const dropdown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const clickHandler = ({
      target
    }) => {
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };

    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const keyHandler = ({
      keyCode
    }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };

    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  const notifications = "";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "relative md:inline-flex pl-4 ml-5 border-l border-l-secondary_sky_base h-[100%] items-center mr-3 hidden",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
      ref: trigger,
      className: `w-10 h-10 flex items-center justify-center bg-primary_brand_lightest hover:bg-slate-200 transition duration-150 p-2 rounded-full ${dropdownOpen && "bg-slate-200"}`,
      "aria-haspopup": "true",
      onClick: () => setDropdownOpen(!dropdownOpen),
      "aria-expanded": dropdownOpen,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
        className: "sr-only",
        children: "Notifications"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("path", {
          d: "M12.02 2.91016C8.71003 2.91016 6.02003 5.60016 6.02003 8.91016V11.8002C6.02003 12.4102 5.76003 13.3402 5.45003 13.8602L4.30003 15.7702C3.59003 16.9502 4.08003 18.2602 5.38003 18.7002C9.69003 20.1402 14.34 20.1402 18.65 18.7002C19.86 18.3002 20.39 16.8702 19.73 15.7702L18.58 13.8602C18.28 13.3402 18.02 12.4102 18.02 11.8002V8.91016C18.02 5.61016 15.32 2.91016 12.02 2.91016Z",
          stroke: "#303437",
          strokeWidth: "1.5",
          strokeMiterlimit: "10",
          strokeLinecap: "round"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("path", {
          d: "M13.87 3.19994C13.56 3.10994 13.24 3.03994 12.91 2.99994C11.95 2.87994 11.03 2.94994 10.17 3.19994C10.46 2.45994 11.18 1.93994 12.02 1.93994C12.86 1.93994 13.58 2.45994 13.87 3.19994Z",
          stroke: "#303437",
          strokeWidth: "1.5",
          strokeMiterlimit: "10",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("path", {
          d: "M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.36002 20.6401 9.02002 19.8801 9.02002 19.0601",
          stroke: "#303437",
          strokeWidth: "1.5",
          strokeMiterlimit: "10"
        })]
      }), notifications ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "absolute top-[23%] right-[8%] text-[7.7px] text-white bg-rose-500 border-2 border-white rounded-[50%] p-[.16rem] px-[.25rem]",
        children: "7"
      }) : null]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_context_Transition__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      className: "origin-top-right z-10 absolute top-full right-0 -mr-48 sm:mr-0 min-w-80 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1",
      show: dropdownOpen,
      enter: "transition ease-out duration-200 transform",
      enterStart: "opacity-0 -translate-y-2",
      enterEnd: "opacity-100 translate-y-0",
      leave: "transition ease-out duration-200",
      leaveStart: "opacity-100",
      leaveEnd: "opacity-0",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        ref: dropdown,
        onFocus: () => setDropdownOpen(true),
        onBlur: () => setDropdownOpen(false),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4",
          children: "Notifications"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
            className: "border-b border-slate-200 last:border-0",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
              href: "#0",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                className: "block py-2 px-4 hover:bg-slate-50",
                onClick: () => setDropdownOpen(!dropdownOpen),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                  className: "block text-sm mb-2",
                  children: ["\uD83D\uDCE3", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                    className: "font-medium text-slate-800",
                    children: "Edit your information in a swipe"
                  }), " ", "Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  className: "block text-xs font-medium text-slate-400",
                  children: "Feb 12, 2021"
                })]
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
            className: "border-b border-slate-200 last:border-0",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
              href: "#0",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                className: "block py-2 px-4 hover:bg-slate-50",
                onClick: () => setDropdownOpen(!dropdownOpen),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                  className: "block text-sm mb-2",
                  children: ["\uD83D\uDCE3", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                    className: "font-medium text-slate-800",
                    children: "Edit your information in a swipe"
                  }), " ", "Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  className: "block text-xs font-medium text-slate-400",
                  children: "Feb 9, 2021"
                })]
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
            className: "border-b border-slate-200 last:border-0",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
              href: "#0",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                className: "block py-2 px-4 hover:bg-slate-50",
                onClick: () => setDropdownOpen(!dropdownOpen),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                  className: "block text-sm mb-2",
                  children: ["\uD83D\uDE80", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                    className: "font-medium text-slate-800",
                    children: "Say goodbye to paper receipts!"
                  }), " ", "Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  className: "block text-xs font-medium text-slate-400",
                  children: "Jan 24, 2020"
                })]
              })
            })
          })]
        })]
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notifications);

/***/ }),

/***/ 60180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81811);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);
const _excluded = ["show", "enter", "enterStart", "enterEnd", "leave", "leaveStart", "leaveEnd", "appear", "unmountOnExit", "tag", "children"],
      _excluded2 = ["show", "appear"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const TransitionContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  parent: {}
});

function useIsInitialRender() {
  const isInitialRender = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    isInitialRender.current = false;
  }, []);
  return isInitialRender.current;
}

function CSSTransition(_ref) {
  let {
    show,
    enter = '',
    enterStart = '',
    enterEnd = '',
    leave = '',
    leaveStart = '',
    leaveEnd = '',
    appear,
    unmountOnExit,
    tag = 'div',
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const enterClasses = enter.split(' ').filter(s => s.length);
  const enterStartClasses = enterStart.split(' ').filter(s => s.length);
  const enterEndClasses = enterEnd.split(' ').filter(s => s.length);
  const leaveClasses = leave.split(' ').filter(s => s.length);
  const leaveStartClasses = leaveStart.split(' ').filter(s => s.length);
  const leaveEndClasses = leaveEnd.split(' ').filter(s => s.length);
  const removeFromDom = unmountOnExit;

  function addClasses(node, classes) {
    classes.length && node.classList.add(...classes);
  }

  function removeClasses(node, classes) {
    classes.length && node.classList.remove(...classes);
  }

  const nodeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const Component = tag;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_2__/* .CSSTransition */ .Kv, {
    appear: appear,
    nodeRef: nodeRef,
    unmountOnExit: removeFromDom,
    in: show,
    addEndListener: done => {
      nodeRef.current.addEventListener('transitionend', done, false);
    },
    onEnter: () => {
      if (!removeFromDom) nodeRef.current.style.display = null;
      addClasses(nodeRef.current, [...enterClasses, ...enterStartClasses]);
    },
    onEntering: () => {
      removeClasses(nodeRef.current, enterStartClasses);
      addClasses(nodeRef.current, enterEndClasses);
    },
    onEntered: () => {
      removeClasses(nodeRef.current, [...enterEndClasses, ...enterClasses]);
    },
    onExit: () => {
      addClasses(nodeRef.current, [...leaveClasses, ...leaveStartClasses]);
    },
    onExiting: () => {
      removeClasses(nodeRef.current, leaveStartClasses);
      addClasses(nodeRef.current, leaveEndClasses);
    },
    onExited: () => {
      removeClasses(nodeRef.current, [...leaveEndClasses, ...leaveClasses]);
      if (!removeFromDom) nodeRef.current.style.display = 'none';
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Component, _objectSpread(_objectSpread({
      ref: nodeRef
    }, rest), {}, {
      style: {
        display: !removeFromDom ? 'none' : null
      },
      children: children
    }))
  });
}

function Transition(_ref2) {
  let {
    show,
    appear
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, _excluded2);

  const {
    parent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TransitionContext);
  const isInitialRender = useIsInitialRender();
  const isChild = show === undefined;

  if (isChild) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(CSSTransition, _objectSpread({
      appear: parent.appear || !parent.isInitialRender,
      show: parent.show
    }, rest));
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(TransitionContext.Provider, {
    value: {
      parent: {
        show,
        isInitialRender,
        appear
      }
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(CSSTransition, _objectSpread({
      appear: appear,
      show: show
    }, rest))
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Transition);

/***/ })

};
;