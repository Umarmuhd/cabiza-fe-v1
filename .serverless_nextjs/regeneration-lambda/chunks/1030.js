"use strict";
exports.id = 1030;
exports.ids = [1030];
exports.modules = {

/***/ 11030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProductSettings)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./components/Products/EditProductStepView.jsx + 1 modules
var EditProductStepView = __webpack_require__(50243);
// EXTERNAL MODULE: ./components/Toggle/Toggle.jsx
var Toggle = __webpack_require__(8477);
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(87536);
// EXTERNAL MODULE: ./node_modules/@hookform/resolvers/yup/dist/yup.mjs + 1 modules
var yup = __webpack_require__(47533);
// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var lib = __webpack_require__(53209);
// EXTERNAL MODULE: ./recoil/index.js + 1 modules
var recoil = __webpack_require__(32059);
;// CONCATENATED MODULE: ./libs/Hooks/useProductSettings.js





const schema = lib/* object */.Ry().shape({
  become_affiliate: lib/* boolean */.O7()
});
const useProductSettings = ({
  stepIndex,
  stepErrors,
  setStepErrors,
  product
}) => {
  const {
    productSettings,
    setProductSettings
  } = (0,recoil/* useCreateProductRecoilStates */.f)();
  const methods = (0,index_esm/* useForm */.cI)({
    mode: "onBlur",
    defaultValues: productSettings,
    resolver: (0,yup/* yupResolver */.X)(schema)
  });

  const setValues = () => {
    const values = methods.getValues();
    setProductSettings(values);
  };

  react.useEffect(() => {
    setStepErrors(stepErrors.map((error, index) => {
      return index === stepIndex ? !methods.formState.isValid : error;
    }));
  }, [methods.formState.isValid]);
  return {
    methods,
    setValues
  };
};
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./pages/app/products/create/product-settings/ProductSettings.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const ProductSettingsStep = _ref => {
  let props = Object.assign({}, _ref);
  const {
    onClickPrevious,
    onClickNext,
    stepErrors,
    stepIndex,
    setStepErrors,
    onClickConfirmButton,
    product
  } = props;
  const {
    methods,
    setValues
  } = useProductSettings({
    stepIndex,
    stepErrors,
    setStepErrors,
    product
  });
  const {
    setValue,
    register,
    formState: {
      errors
    }
  } = methods;
  const {
    0: loading,
    1: setLoading
  } = (0,react.useState)(false);
  const {
    0: version,
    1: setVersion
  } = (0,react.useState)(false);
  const {
    0: affliate,
    1: setAffliate
  } = (0,react.useState)(false);
  const {
    0: addPercentage,
    1: setAddPercentage
  } = (0,react.useState)(false);
  const {
    0: addVersion,
    1: setAddVersion
  } = (0,react.useState)(false);
  const {
    0: newVersion,
    1: setNewVersion
  } = (0,react.useState)();
  const inputtedVersion = (0,react.useRef)();

  const handleVersionSetting = () => {
    setVersion(prev => !prev);
    setAddVersion(false);
  };

  const handleAddVersion = () => {
    setAddVersion(prev => !prev);
  };

  const handleRemoveVersion = () => {
    setAddVersion(false);
  };

  const handleAffliateSetting = () => {
    setAffliate(prev => !prev);
  };

  const handleAddPercentage = () => {
    setAddPercentage(prev => !prev);
  };

  const handleSubmittedVersion = () => {
    setNewVersion(inputtedVersion.current.value);
    setAddVersion(false);
    setVersion(false);
  };

  const handleRestoreAddVersion = () => {
    setNewVersion("");
    setAddVersion(true);
    setVersion(true);
  };

  const handleContinue = event => {
    event.preventDefault();
    const payload = {
      can_affiliate: affliate
    };
  };

  return /*#__PURE__*/jsx_runtime.jsx(react.Fragment, {
    children: /*#__PURE__*/jsx_runtime.jsx(EditProductStepView/* default */.Z, _objectSpread(_objectSpread({}, props), {}, {
      onClickPrevious: () => {
        onClickPrevious && onClickPrevious();
        setValues();
      },
      onClickNext: () => {
        onClickNext && onClickNext();
        setValues();
      },
      onClickMenuItem: setValues,
      onClickConfirmButton: () => {
        onClickConfirmButton();
        setValues();
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
        className: "mt-8",
        id: "form",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "bg-white mt-5 border border-solid border-grey_80 p-3 rounded-xl",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "bg-grey_95 p-3 rounded flex items-center justify-between px-5 mb-2",
            children: [/*#__PURE__*/jsx_runtime.jsx("p", {
              className: "text-grey_40",
              children: "Limit product sales"
            }), /*#__PURE__*/jsx_runtime.jsx(Toggle/* default */.Z, {
              label: "LimitSales"
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "bg-grey_95 p-3 rounded flex items-center justify-between px-5 mb-2",
            children: [/*#__PURE__*/jsx_runtime.jsx("p", {
              className: "text-grey_40",
              children: "Allow customers to choose a quantity"
            }), /*#__PURE__*/jsx_runtime.jsx(Toggle/* default */.Z, {
              label: "Quantity"
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "bg-grey_95 p-3 rounded flex items-center justify-between px-5 mb-2",
            children: [/*#__PURE__*/jsx_runtime.jsx("p", {
              className: "text-grey_40",
              children: "Publicly show the number of sales on your product page"
            }), /*#__PURE__*/jsx_runtime.jsx(Toggle/* default */.Z, {
              label: "showSales"
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "bg-grey_95 p-3 rounded flex items-center justify-between px-5 mb-2",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
              className: "text-grey_40",
              children: ["Generate a unique license key per sale", " ", /*#__PURE__*/jsx_runtime.jsx("a", {
                href: "",
                className: "text-primary_brand_base ml-2 border-bottom border-b border-primary_brand_base",
                children: "Learn more"
              })]
            }), /*#__PURE__*/jsx_runtime.jsx(Toggle/* default */.Z, {
              label: "license"
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "bg-grey_95 p-3 rounded px-5 mb-2",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
                className: "text-grey_40",
                children: ["Add custom affiliate percentage", " ", /*#__PURE__*/jsx_runtime.jsx("a", {
                  href: "",
                  className: "text-primary_brand_base ml-2 border-bottom border-b border-primary_brand_base",
                  children: "Learn more"
                })]
              }), /*#__PURE__*/jsx_runtime.jsx(Toggle/* default */.Z, {
                label: "affliate",
                click: handleAffliateSetting
              })]
            }), affliate ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "mt-5 border border-solid border-grey_80 p-3 rounded-xl w-[60%]",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "flex w-[100%] border border-solid border-grey_80 rounded-xl",
                children: [/*#__PURE__*/jsx_runtime.jsx("input", {
                  type: "text",
                  name: "Tags",
                  id: "Tags",
                  placeholder: !addPercentage ? "Add variable percentage" : "40%",
                  className: "outline-none bg-transparent w-[90%] mr-auto rounded-xl p-3"
                }), addPercentage ? /*#__PURE__*/jsx_runtime.jsx("button", {
                  className: "h-[100%] py-2 rounded-xl my-auto px-4 bg-cabiza_blue text-white mr-3",
                  onClick: handleAddPercentage,
                  children: "Edit"
                }) : null]
              }), !addPercentage ? /*#__PURE__*/jsx_runtime.jsx("input", {
                type: "button",
                value: "Add percentage" // onClick={handleNext}
                ,
                className: "w-[100%] mt-4 bg-cabiza_blue text-white p-4 cursor-pointer",
                onClick: handleAddPercentage
              }) : null]
            }) : null]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "bg-grey_95 p-3 rounded flex items-center justify-between px-5 mb-2",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
              className: "text-grey_40",
              children: ["Mark product as e-publication for VAT purposes", " ", /*#__PURE__*/jsx_runtime.jsx("a", {
                href: "",
                className: "text-primary_brand_base ml-2 border-bottom border-b border-primary_brand_base",
                children: "Learn more"
              })]
            }), /*#__PURE__*/jsx_runtime.jsx(Toggle/* default */.Z, {
              label: "VAT"
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "bg-white mt-5 border border-solid border-grey_60 p-3 rounded-xl",
          children: [/*#__PURE__*/jsx_runtime.jsx("h4", {
            className: "text-grey_20 text-xl mt-1 pl-5 font-semibold",
            children: "Version"
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "p-3 rounded flex items-center justify-between px-5",
            children: [/*#__PURE__*/jsx_runtime.jsx("p", {
              className: "text-grey_40",
              children: "Is there any variation for this product?"
            }), /*#__PURE__*/jsx_runtime.jsx(Toggle/* default */.Z, {
              label: "Version",
              click: handleVersionSetting
            })]
          }), version ? /*#__PURE__*/jsx_runtime.jsx("span", {
            className: "flex w-[max-content] ml-4 border border-solid border-black p-3 mt-1 rounded-xl cursor-pointer",
            onClick: handleAddVersion,
            children: "Add Version"
          }) : null, newVersion ? /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
            className: "flex w-[max-content] ml-4 border border-solid border-cabiza_blue bg-cabiza_secondary_tertiary text-cabiza_blue p-3 mt-1 rounded-xl cursor-pointer",
            children: [newVersion, " ", /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: "ml-3",
              onClick: handleRestoreAddVersion,
              children: [/*#__PURE__*/jsx_runtime.jsx("path", {
                d: "M9.16937 15.58C8.97937 15.58 8.78938 15.51 8.63938 15.36C8.34938 15.07 8.34938 14.59 8.63938 14.3L14.2994 8.64C14.5894 8.35 15.0694 8.35 15.3594 8.64C15.6494 8.93 15.6494 9.41 15.3594 9.7L9.69937 15.36C9.55937 15.51 9.35937 15.58 9.16937 15.58Z",
                fill: "#24BAD4"
              }), /*#__PURE__*/jsx_runtime.jsx("path", {
                d: "M14.8294 15.58C14.6394 15.58 14.4494 15.51 14.2994 15.36L8.63938 9.7C8.34938 9.41 8.34938 8.93 8.63938 8.64C8.92937 8.35 9.40937 8.35 9.69937 8.64L15.3594 14.3C15.6494 14.59 15.6494 15.07 15.3594 15.36C15.2094 15.51 15.0194 15.58 14.8294 15.58Z",
                fill: "#24BAD4"
              }), /*#__PURE__*/jsx_runtime.jsx("path", {
                d: "M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z",
                fill: "#24BAD4"
              })]
            })]
          }) : null, addVersion ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "mt-5 border border-solid border-grey_80 p-3 rounded-xl w-[60%]",
            children: [/*#__PURE__*/jsx_runtime.jsx("div", {
              className: "flex w-[100%] border border-solid border-grey_80 rounded-xl",
              children: /*#__PURE__*/jsx_runtime.jsx("input", {
                type: "text",
                name: "Tags",
                id: "Tags",
                placeholder: "Add Version",
                className: "outline-none bg-transparent w-[90%] mr-auto rounded-xl p-3",
                ref: inputtedVersion
              })
            }), /*#__PURE__*/jsx_runtime.jsx("input", {
              type: "button",
              value: "Add version",
              className: "w-[100%] mt-4 bg-cabiza_blue text-white p-4 cursor-pointer",
              onClick: handleSubmittedVersion
            })]
          }) : null]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "bg-white mt-5 border border-solid border-grey_60 p-3 rounded-xl",
          children: [/*#__PURE__*/jsx_runtime.jsx("h4", {
            className: "text-grey_20 text-xl mt-1 pl-5 font-semibold",
            children: "Discover"
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "p-3 rounded px-5 mb-2",
            children: [/*#__PURE__*/jsx_runtime.jsx("p", {
              className: "text-grey_40 font-semibold text-lg",
              children: "Tags"
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "flex items-center justify-between mt-2 p-3 border border-solid border-grey_85 rounded-xl",
              children: [/*#__PURE__*/jsx_runtime.jsx("input", {
                type: "text",
                name: "Tags",
                id: "Tags",
                placeholder: "Begin typing to add tag...",
                className: "w-[95%] outline-none border-0"
              }), /*#__PURE__*/jsx_runtime.jsx("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/jsx_runtime.jsx("path", {
                  d: "M11.9995 16.8C11.2995 16.8 10.5995 16.53 10.0695 16L3.54953 9.48C3.25953 9.19 3.25953 8.71 3.54953 8.42C3.83953 8.13 4.31953 8.13 4.60953 8.42L11.1295 14.94C11.6095 15.42 12.3895 15.42 12.8695 14.94L19.3895 8.42C19.6795 8.13 20.1595 8.13 20.4495 8.42C20.7395 8.71 20.7395 9.19 20.4495 9.48L13.9295 16C13.3995 16.53 12.6995 16.8 11.9995 16.8Z",
                  fill: "#666666"
                })
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "px-3",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "bg-grey_95 p-3 rounded flex items-center justify-between px-5 mb-2",
              children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                className: "text-grey_40",
                children: "Allow \u201CBecome Affiliate\u201D button"
              }), /*#__PURE__*/jsx_runtime.jsx(Toggle/* default */.Z, {
                label: "Become_Affiliate"
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "bg-grey_95 p-3 rounded flex items-center justify-between px-5 mb-2",
              children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                className: "text-grey_40",
                children: "Show custom affiliate percentage"
              }), /*#__PURE__*/jsx_runtime.jsx(Toggle/* default */.Z, {
                label: "custom_affiliate"
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "bg-grey_95 p-3 rounded flex items-center justify-between px-5 mb-2",
              children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                className: "text-grey_40",
                children: "Display your product's 1-5 star rating to prospective customers"
              }), /*#__PURE__*/jsx_runtime.jsx(Toggle/* default */.Z, {
                label: "rating"
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "bg-grey_95 p-3 rounded flex items-center justify-between px-5 mb-2",
              children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                className: "text-grey_40",
                children: "This product contains content meant only for adults, including the preview"
              }), /*#__PURE__*/jsx_runtime.jsx(Toggle/* default */.Z, {
                label: "preview"
              })]
            })]
          })]
        })]
      })
    }))
  });
};

/* harmony default export */ const ProductSettings = (ProductSettingsStep);

/***/ })

};
;