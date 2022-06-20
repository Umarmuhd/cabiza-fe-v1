"use strict";
exports.id = 5649;
exports.ids = [5649];
exports.modules = {

/***/ 65649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProductPricingStep)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
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
;// CONCATENATED MODULE: ./libs/Hooks/useProductPricing.js





const schema = lib/* object */.Ry().shape({
  price: lib/* number */.Rx().required("Product price is required"),
  min_price: lib/* number */.Rx(),
  max_price: lib/* number */.Rx()
});
const useProductPricing = ({
  stepIndex,
  stepErrors,
  setStepErrors,
  product
}) => {
  const {
    productPricing,
    setProductPricing
  } = (0,recoil/* useCreateProductRecoilStates */.f)();
  const {
    price,
    user_priced
  } = product;
  const methods = (0,index_esm/* useForm */.cI)({
    mode: "onBlur",
    defaultValues: productPricing.price ? productPricing : {
      price,
      user_priced
    },
    resolver: (0,yup/* yupResolver */.X)(schema)
  });

  const setValues = () => {
    const values = methods.getValues();
    setProductPricing(values);
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
// EXTERNAL MODULE: ./components/Products/EditProductStepView.jsx + 1 modules
var EditProductStepView = __webpack_require__(50243);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./pages/app/products/create/product-pricing/ProductPricing.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function ProductPricingStep(_ref) {
  var _methods$getValues$us, _methods$getValues$us2, _errors$price, _errors$min_price, _errors$max_price;

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
  } = useProductPricing({
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
    0: productPricingSettings,
    1: setProductPricingSettings
  } = (0,react.useState)((_methods$getValues$us = (_methods$getValues$us2 = methods.getValues().user_priced) === null || _methods$getValues$us2 === void 0 ? void 0 : _methods$getValues$us2.user_priced) !== null && _methods$getValues$us !== void 0 ? _methods$getValues$us : false);
  (0,react.useEffect)(() => {
    setValue("user_priced", productPricingSettings);
  }, [productPricingSettings]);
  console.log(methods.getValues());
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
      children: /*#__PURE__*/jsx_runtime.jsx("form", {
        className: "mt-8",
        id: "form",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "bg-white flex flex-col mt-5",
          children: [/*#__PURE__*/jsx_runtime.jsx("label", {
            htmlFor: "product_name",
            className: "leading-4 font-medium text-secondary_ink_darkest mb-3",
            children: "Amount"
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "flex items-center mt-2 justify-between rounded-xl border border-solid border-grey_85",
            children: [/*#__PURE__*/jsx_runtime.jsx("input", {
              className: "px-4 rounded-xl text-grey_20 p-3 w-[4rem] border-r-0 rounded z-0 bg-grey_95 text-center outline-none overflow-hidden",
              value: "$",
              readOnly: true
            }), /*#__PURE__*/jsx_runtime.jsx("input", _objectSpread({
              type: "text",
              name: "Amount",
              id: "Amount",
              placeholder: "0+",
              className: "outline-none w-[98%] p-3 rounded-r-xl z-10"
            }, register("price", {
              required: true
            }))), ((_errors$price = errors.price) === null || _errors$price === void 0 ? void 0 : _errors$price.type) === "required" && /*#__PURE__*/jsx_runtime.jsx("p", {
              className: "text-left text-red-600 text-xs mt-1",
              children: "Product price is required"
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "flex justify-between items-center mt-5",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime.jsx("h3", {
                className: "text-xl text-grey_20",
                children: "Settings"
              }), /*#__PURE__*/jsx_runtime.jsx("p", {
                className: "text-grey_40",
                children: "Let customers pay what they want?"
              })]
            }), /*#__PURE__*/jsx_runtime.jsx(Toggle/* default */.Z, {
              label: "TogglePayment",
              enabled: productPricingSettings,
              setEnabled: () => setProductPricingSettings(prev => !prev)
            })]
          }), productPricingSettings && /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "flex flex-col mt-5 rounded-xl   border border-solid border-grey_80 p-4",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "flex justify-between items-center mb-3",
              children: [/*#__PURE__*/jsx_runtime.jsx("div", {
                className: "flex flex-col items-between w-[45%]",
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "flex flex-col mt-5",
                  children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("label", {
                    htmlFor: "product_name",
                    className: "text-lg",
                    children: ["Minimum Amount", " "]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center mt-2 justify-between rounded-xl border border-solid border-grey_85",
                    children: [/*#__PURE__*/jsx_runtime.jsx("input", {
                      className: "px-4 rounded-xl text-grey_20 p-3 w-[4rem] border-r-0 rounded z-0 bg-grey_95 text-center outline-none",
                      value: "$",
                      readOnly: true
                    }), /*#__PURE__*/jsx_runtime.jsx("input", _objectSpread(_objectSpread({
                      type: "number",
                      name: "Amount",
                      id: "Amount",
                      placeholder: "0+",
                      className: " outline-none w-[98%] p-3 rounded-xl z-10"
                    }, register("min_price", {
                      required: productPricingSettings
                    })), {}, {
                      min: 0
                    }))]
                  }), ((_errors$min_price = errors.min_price) === null || _errors$min_price === void 0 ? void 0 : _errors$min_price.type) === "required" && /*#__PURE__*/jsx_runtime.jsx("p", {
                    className: "text-left text-red-600 text-xs mt-1",
                    children: "Product minimum price is required"
                  })]
                })
              }), /*#__PURE__*/jsx_runtime.jsx("div", {
                className: "flex flex-col items-between w-[45%]",
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "flex flex-col mt-5",
                  children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("label", {
                    htmlFor: "product_name",
                    className: "text-lg",
                    children: ["Maximum Amount", " "]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center mt-2 justify-between rounded-xl border border-solid border-grey_85",
                    children: [/*#__PURE__*/jsx_runtime.jsx("input", {
                      className: "px-4 rounded-xl text-grey_20 p-3 w-[4rem] border-r-0 rounded z-0 bg-grey_95 text-center outline-none",
                      value: "$",
                      readOnly: true
                    }), /*#__PURE__*/jsx_runtime.jsx("input", _objectSpread(_objectSpread({
                      type: "number",
                      name: "Amount",
                      id: "Amount",
                      placeholder: "0+",
                      className: " outline-none w-[98%] p-3 rounded-xl z-10"
                    }, register("max_price", {
                      required: productPricingSettings
                    })), {}, {
                      min: 0
                    }))]
                  }), ((_errors$max_price = errors.max_price) === null || _errors$max_price === void 0 ? void 0 : _errors$max_price.type) === "required" && /*#__PURE__*/jsx_runtime.jsx("p", {
                    className: "text-left text-red-600 text-xs mt-1",
                    children: "Product maximum price is required"
                  })]
                })
              })]
            })
          })]
        })
      })
    }))
  });
}

/***/ })

};
;