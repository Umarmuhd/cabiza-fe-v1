"use strict";
exports.id = 416;
exports.ids = [416];
exports.modules = {

/***/ 50243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ EditProductStepView)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/Products/Pagination.jsx




const Pagination = ({
  previousTitle,
  nextTitle,
  onClickPrevious,
  onClickNext,
  lastButton,
  onClickConfirmButton,
  stepErrors
}) => {
  return /*#__PURE__*/jsx_runtime.jsx("div", {
    children: nextTitle ? /*#__PURE__*/jsx_runtime.jsx("button", {
      type: "submit",
      className: "w-full mt-8 bg-primary text-white p-4 cursor-pointer rounded-4xl font-medium flex items-center justify-center",
      onClick: onClickNext,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [/*#__PURE__*/jsx_runtime.jsx("span", {
          className: "mr-4",
          children: "Next"
        }), /*#__PURE__*/jsx_runtime.jsx("svg", {
          width: "25",
          height: "24",
          viewBox: "0 0 25 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/jsx_runtime.jsx("path", {
            d: "M5.5 12H19.5M19.5 12L12.5 4.99988M19.5 12L12.5 18.9999",
            stroke: "white",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        })]
      })
    }) : /*#__PURE__*/jsx_runtime.jsx("button", {
      type: "submit",
      className: "w-full mt-8 bg-primary text-white p-4 cursor-pointer rounded-4xl font-medium flex items-center justify-center",
      onClick: onClickConfirmButton // disabled={stepErrors.find((error) => error)}
      ,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [/*#__PURE__*/jsx_runtime.jsx("span", {
          className: "mr-4",
          children: "Submit"
        }), /*#__PURE__*/jsx_runtime.jsx("svg", {
          width: "25",
          height: "24",
          viewBox: "0 0 25 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/jsx_runtime.jsx("path", {
            d: "M5.5 12H19.5M19.5 12L12.5 4.99988M19.5 12L12.5 18.9999",
            stroke: "white",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        })]
      })
    })
  });
};

/* harmony default export */ const Products_Pagination = (Pagination);
;// CONCATENATED MODULE: ./components/Products/EditProductStepView.jsx




function EditProductStepView({
  stepIndex,
  setStepIndex,
  stepTitles,
  stepErrors,
  onClickPrevious,
  onClickNext,
  onClickMenuItem,
  onClickConfirmButton,
  children
}) {
  const isFirstStep = stepIndex === 0;
  const isLastStep = stepIndex === stepTitles.length - 1;

  const ConfirmButton = () => /*#__PURE__*/jsx_runtime.jsx("button", {
    type: "submit",
    className: "w-full mt-8 bg-primary text-white p-4 cursor-pointer rounded-4xl font-medium flex items-center justify-center",
    onClick: onClickConfirmButton,
    disabled: stepErrors.find(error => error),
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
      children: [/*#__PURE__*/jsx_runtime.jsx("span", {
        className: "mr-4",
        children: "Submit"
      }), /*#__PURE__*/jsx_runtime.jsx("svg", {
        width: "25",
        height: "24",
        viewBox: "0 0 25 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/jsx_runtime.jsx("path", {
          d: "M5.5 12H19.5M19.5 12L12.5 4.99988M19.5 12L12.5 18.9999",
          stroke: "white",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })
      })]
    })
  });

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "flex justify-between items-center",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "flex items-center bg-secondary_sky_lighter rounded-lg p-1",
        children: [/*#__PURE__*/jsx_runtime.jsx("button", {
          className: 'p-2 rounded ' + (isFirstStep ? ' bg-primary_brand_lighter text-primary' : 'bg-primary text-white'),
          disabled: isFirstStep,
          onClick: onClickPrevious,
          children: /*#__PURE__*/jsx_runtime.jsx("svg", {
            width: "6",
            height: "12",
            viewBox: "0 0 6 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/jsx_runtime.jsx("path", {
              d: "M5.50002 11.78C5.37335 11.78 5.24669 11.7333 5.14669 11.6333L0.800019 7.28666C0.0933529 6.58 0.0933529 5.42 0.800019 4.71333L5.14669 0.366664C5.34002 0.173331 5.66002 0.173331 5.85335 0.366664C6.04669 0.559998 6.04669 0.879998 5.85335 1.07333L1.50669 5.42C1.18669 5.74 1.18669 6.26 1.50669 6.58L5.85335 10.9267C6.04669 11.12 6.04669 11.44 5.85335 11.6333C5.75335 11.7267 5.62669 11.78 5.50002 11.78Z",
              fill: `${isFirstStep ? "#5B44E9" : "#fff"}`
            })
          })
        }), /*#__PURE__*/jsx_runtime.jsx("span", {
          className: "mx-2 text-primary_brand_lighter",
          children: "|"
        }), /*#__PURE__*/jsx_runtime.jsx("button", {
          className: 'p-2 rounded ' + (isLastStep ? ' bg-primary_brand_lighter text-primary' : ' bg-primary text-white'),
          disabled: isLastStep,
          onClick: onClickNext,
          children: /*#__PURE__*/jsx_runtime.jsx("svg", {
            width: "7",
            height: "12",
            viewBox: "0 0 7 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/jsx_runtime.jsx("path", {
              d: "M1.44023 11.78C1.31356 11.78 1.18689 11.7333 1.08689 11.6333C0.893561 11.44 0.893561 11.12 1.08689 10.9267L5.43356 6.58C5.75356 6.26 5.75356 5.74 5.43356 5.42L1.08689 1.07333C0.893561 0.879998 0.893561 0.559998 1.08689 0.366664C1.28023 0.173331 1.60023 0.173331 1.79356 0.366664L6.14023 4.71333C6.48023 5.05333 6.67356 5.51333 6.67356 6C6.67356 6.48666 6.48689 6.94666 6.14023 7.28666L1.79356 11.6333C1.69356 11.7267 1.56689 11.78 1.44023 11.78Z",
              fill: "white"
            })
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
        className: "text-lg font-medium text-primary_brand_light",
        children: ["Step: ", stepIndex + 2, " of 6"]
      })]
    }), /*#__PURE__*/jsx_runtime.jsx("h1", {
      className: "text-4xl font-semibold text-secondary_ink_dark mt-8",
      children: stepTitles[stepIndex]
    }), children, /*#__PURE__*/jsx_runtime.jsx(Products_Pagination, {
      previousTitle: !isFirstStep ? stepTitles[stepIndex - 1] : undefined,
      nextTitle: !isLastStep ? stepTitles[stepIndex + 1] : undefined,
      onClickPrevious: onClickPrevious,
      onClickNext: onClickNext,
      lastButton: /*#__PURE__*/jsx_runtime.jsx(ConfirmButton, {}),
      onClickConfirmButton: onClickConfirmButton,
      stepErrors: stepErrors
    })]
  });
}

/***/ }),

/***/ 71589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u_": () => (/* reexport */ basicInfoState),
  "kq": () => (/* reexport */ defaultBasicInfoState),
  "bL": () => (/* reexport */ defaultProductContentState),
  "pi": () => (/* reexport */ defaultProductInfoState),
  "$k": () => (/* reexport */ defaultProductPricingState),
  "$c": () => (/* reexport */ defaultProductSettingsState),
  "CF": () => (/* reexport */ productContentState),
  "nf": () => (/* reexport */ productInfoState),
  "zF": () => (/* reexport */ productPricingState),
  "iS": () => (/* reexport */ productSettingsState)
});

// EXTERNAL MODULE: ./node_modules/recoil/cjs/recoil.js
var recoil = __webpack_require__(48068);
// EXTERNAL MODULE: ./recoil/atomKeys.js
var atomKeys = __webpack_require__(62396);
;// CONCATENATED MODULE: ./recoil/CreateProduct/atoms/basicInfo.js


const defaultBasicInfoState = {
  name: null,
  description: null,
  thumbnail: null,
  cover_image: null
};
const basicInfoState = (0,recoil/* atom */.cn)({
  key: atomKeys/* AtomKeys.CreateProduct_BasicInfo */.D.CreateProduct_BasicInfo,
  default: defaultBasicInfoState,
  dangerouslyAllowMutability: true
});
;// CONCATENATED MODULE: ./recoil/CreateProduct/atoms/productInfo.js


const defaultProductInfoState = {
  call_to_action: null,
  summary: null,
  additional_details: null
};
const productInfoState = (0,recoil/* atom */.cn)({
  key: atomKeys/* AtomKeys.CreateProduct_ProductInfo */.D.CreateProduct_ProductInfo,
  default: defaultProductInfoState
});
;// CONCATENATED MODULE: ./recoil/CreateProduct/atoms/productContent.js


const defaultProductContentState = {
  url: null,
  file: null
};
const productContentState = (0,recoil/* atom */.cn)({
  key: atomKeys/* AtomKeys.CreateProduct_ProductContent */.D.CreateProduct_ProductContent,
  default: defaultProductContentState,
  dangerouslyAllowMutability: true
});
;// CONCATENATED MODULE: ./recoil/CreateProduct/atoms/productPricing.js


const defaultProductPricingState = {
  price: null,
  user_priced: false,
  min_price: null,
  max_price: null
};
const productPricingState = (0,recoil/* atom */.cn)({
  key: atomKeys/* AtomKeys.CreateProduct_ProductPricing */.D.CreateProduct_ProductPricing,
  default: defaultProductPricingState
});
;// CONCATENATED MODULE: ./recoil/CreateProduct/atoms/productSettings.js


const defaultProductSettingsState = {
  become_affiliate: null
};
const productSettingsState = (0,recoil/* atom */.cn)({
  key: atomKeys/* AtomKeys.CreateProduct_ProductSettings */.D.CreateProduct_ProductSettings,
  default: defaultProductSettingsState
});
;// CONCATENATED MODULE: ./recoil/CreateProduct/atoms/index.js






/***/ }),

/***/ 62396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ AtomKeys)
/* harmony export */ });
const AtomKeys = {
  CreateProduct_BasicInfo: "CreateProduct_BasicInfo",
  CreateProduct_ProductInfo: "CreateProduct_ProductInfo",
  CreateProduct_ProductContent: "CreateProduct_ProductContent",
  CreateProduct_ProductPricing: "CreateProduct_ProductPricing",
  CreateProduct_ProductSettings: "CreateProduct_ProductSettings"
};

/***/ }),

/***/ 32059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f": () => (/* reexport */ useCreateProductRecoilStates)
});

// UNUSED EXPORTS: AtomKeys

// EXTERNAL MODULE: ./recoil/atomKeys.js
var atomKeys = __webpack_require__(62396);
// EXTERNAL MODULE: ./node_modules/recoil/cjs/recoil.js
var recoil = __webpack_require__(48068);
// EXTERNAL MODULE: ./recoil/CreateProduct/atoms/index.js + 5 modules
var atoms = __webpack_require__(71589);
;// CONCATENATED MODULE: ./recoil/CreateProduct/index.js



const useCreateProductRecoilStates = () => {
  const [basicInfo, setBasicInfo] = (0,recoil/* useRecoilState */.FV)(atoms/* basicInfoState */.u_);
  const [productInfo, setProductInfo] = (0,recoil/* useRecoilState */.FV)(atoms/* productInfoState */.nf);
  const [productContent, setProductContent] = (0,recoil/* useRecoilState */.FV)(atoms/* productContentState */.CF);
  const [productPricing, setProductPricing] = (0,recoil/* useRecoilState */.FV)(atoms/* productPricingState */.zF);
  const [productSettings, setProductSettings] = (0,recoil/* useRecoilState */.FV)(atoms/* productSettingsState */.iS);
  return {
    basicInfo,
    productInfo,
    productContent,
    productPricing,
    productSettings,
    setBasicInfo,
    setProductInfo,
    setProductContent,
    setProductPricing,
    setProductSettings
  };
};
;// CONCATENATED MODULE: ./recoil/index.js



/***/ })

};
;