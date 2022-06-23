"use strict";
exports.id = 6803;
exports.ids = [6803];
exports.modules = {

/***/ 66803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProductInfoStep)
});

// EXTERNAL MODULE: ./components/Products/EditProductStepView.jsx + 1 modules
var EditProductStepView = __webpack_require__(50243);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/headlessui.cjs.production.min.js
var headlessui_cjs_production_min = __webpack_require__(12400);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(87536);
// EXTERNAL MODULE: ./node_modules/@hookform/resolvers/yup/dist/yup.mjs + 1 modules
var yup = __webpack_require__(47533);
// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var lib = __webpack_require__(53209);
// EXTERNAL MODULE: ./recoil/index.js + 1 modules
var recoil = __webpack_require__(32059);
;// CONCATENATED MODULE: ./libs/Hooks/useProductInfo.js





const schema = lib/* object */.Ry().shape({
  call_to_action: lib/* string */.Z_().required("Product call to action is required"),
  summary: lib/* string */.Z_().required("Product summary is required") //   additional_details: yup.string().required("Product additional details is required"),

});
const useProductInfo = ({
  stepIndex,
  stepErrors,
  setStepErrors,
  product
}) => {
  const {
    productInfo,
    setProductInfo
  } = (0,recoil/* useCreateProductRecoilStates */.f)();
  const {
    call_to_action,
    summary
  } = product;
  const methods = (0,index_esm/* useForm */.cI)({
    mode: "onBlur",
    defaultValues: productInfo.call_to_action && productInfo.summary ? productInfo : {
      call_to_action,
      summary
    },
    resolver: (0,yup/* yupResolver */.X)(schema)
  });

  const setValues = () => {
    const values = methods.getValues();
    setProductInfo(values);
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
;// CONCATENATED MODULE: ./pages/app/products/create/product-info/ProductInfoStep.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function ProductInfoStep(_ref) {
  var _methods$getValues$ca, _errors$summary;

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
  } = useProductInfo({
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
    0: addDetails,
    1: setAddDetails
  } = (0,react.useState)([]);
  const {
    0: custom,
    1: setCustom
  } = (0,react.useState)(false);
  const {
    0: CTA,
    1: setCTA
  } = (0,react.useState)(false);
  const {
    0: selected,
    1: setSelected
  } = (0,react.useState)((_methods$getValues$ca = methods.getValues().call_to_action) !== null && _methods$getValues$ca !== void 0 ? _methods$getValues$ca : "I want this");

  const handleAddDetails = () => {
    setAddDetails(prev => {
      if (prev.length === 0) {
        return [...prev, 0];
      }

      if (prev.length < 5) {
        return [...prev, `${prev[prev.length - 1]}++`];
      } else if (prev.length >= 5) {
        return prev;
      }
    });
  };

  const handleCustomizeCTA = () => {
    var _methods$getValues$ca2;

    setCTA(true);
    setSelected((_methods$getValues$ca2 = methods.getValues.call_to_action) !== null && _methods$getValues$ca2 !== void 0 ? _methods$getValues$ca2 : "");
  };

  (0,react.useEffect)(() => {
    let val = selected !== "Buy this" && selected !== "Pay" && selected !== "I want this";
    setCustom(val);
    setValue("call_to_action", selected);
  }, [selected]);
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
        onSubmit: e => e.preventDefault(),
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "flex flex-col",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("label", {
            htmlFor: "product_cta",
            className: "leading-4 font-medium text-secondary_ink_darkest mb-3",
            children: ["Call-to-Action", " "]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "flex mt-2",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(headlessui_cjs_production_min/* RadioGroup */.Ee, {
              value: selected,
              onChange: e => {
                setCTA(false);
                setSelected(e);
                setValue("call_to_action", e);
              },
              as: "div",
              className: "flex items-center",
              children: [/*#__PURE__*/jsx_runtime.jsx(headlessui_cjs_production_min/* RadioGroup.Option */.Ee.Option, {
                value: "I want this",
                className: ({
                  active,
                  checked
                }) => `${checked ? "border-primary" : "border-white"}
                bg-primary_brand_lightest text-primary p-2 px-4 mr-5 rounded-3xl border`,
                children: ({
                  active,
                  checked
                }) => /*#__PURE__*/jsx_runtime.jsx("span", {
                  className: `text-primary cursor-pointer ${checked ? "font-medium" : "font-normal"}`,
                  children: "I want this"
                })
              }), /*#__PURE__*/jsx_runtime.jsx(headlessui_cjs_production_min/* RadioGroup.Option */.Ee.Option, {
                value: "Buy this",
                className: ({
                  active,
                  checked
                }) => `${checked ? "border-primary" : "border-white"}
                bg-primary_brand_lightest text-primary p-2 px-4 mr-5 rounded-3xl border`,
                children: ({
                  active,
                  checked
                }) => /*#__PURE__*/jsx_runtime.jsx("span", {
                  className: `text-primary cursor-pointer ${checked ? "font-medium" : "font-normal"}`,
                  children: "Buy this"
                })
              }), /*#__PURE__*/jsx_runtime.jsx(headlessui_cjs_production_min/* RadioGroup.Option */.Ee.Option, {
                value: "Pay",
                className: ({
                  active,
                  checked
                }) => `${checked ? "border-primary" : "border-white"}
                bg-primary_brand_lightest text-primary p-2 px-4 mr-5 rounded-3xl border`,
                children: ({
                  active,
                  checked
                }) => /*#__PURE__*/jsx_runtime.jsx("span", {
                  className: `text-primary cursor-pointer ${checked ? "font-medium" : "font-normal"}`,
                  children: "Pay"
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("button", {
              className: "bg-primary_brand_lightest text-primary p-2 px-4 mr-5 rounded-3xl flex items-center justify-between border" + (custom ? "border-primary" : "border-white"),
              onClick: handleCustomizeCTA,
              children: ["Customize ", /*#__PURE__*/jsx_runtime.jsx("p", {
                className: "ml-3",
                children: "+"
              })]
            })]
          }), CTA ? /*#__PURE__*/jsx_runtime.jsx("input", {
            type: "text",
            name: "Selling for...",
            id: "call_to_action",
            placeholder: "Selling for...",
            className: "border border-solid border-sky_light p-4 rounded-lg mt-4 outline-none",
            value: selected,
            onChange: e => setSelected(e.target.value)
          }) : null]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "flex flex-col mt-6",
          children: [/*#__PURE__*/jsx_runtime.jsx("label", {
            htmlFor: "summary",
            className: "leading-4 font-medium text-secondary_ink_darkest mb-3",
            children: "Summary"
          }), /*#__PURE__*/jsx_runtime.jsx("input", _objectSpread({
            type: "text",
            name: "summary",
            id: "summary",
            placeholder: "You\u2019ll get...",
            className: "border border-solid border-sky_light p-4 rounded-lg mt-2 outline-none"
          }, register("summary", {
            required: true
          }))), ((_errors$summary = errors.summary) === null || _errors$summary === void 0 ? void 0 : _errors$summary.type) === "required" && /*#__PURE__*/jsx_runtime.jsx("p", {
            className: "text-left text-red-600 text-xs mt-1",
            children: "Product summary is required"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "flex flex-col mt-6",
          children: [/*#__PURE__*/jsx_runtime.jsx("p", {
            className: "leading-4 font-medium text-secondary_ink_darkest mb-3",
            children: "Additional Details (optional)"
          }), addDetails.length > 0 ? addDetails.map(index => {
            return /*#__PURE__*/jsx_runtime.jsx("div", {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "flex justify-between items-center mb-3",
                children: [/*#__PURE__*/jsx_runtime.jsx("input", {
                  type: "text",
                  placeholder: "Attribute",
                  className: "flex w-[45%] border border-solid border-grey_80 p-3 mt-3 rounded-xl outline-none"
                }), /*#__PURE__*/jsx_runtime.jsx("input", {
                  type: "text",
                  placeholder: "Value",
                  className: "flex w-[45%] border border-solid border-grey_80 p-3 mt-3 rounded-xl outline-none"
                })]
              })
            }, index);
          }) : /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "border-dashed border border-secondary_sky_base mt-5 p-7 bg-secondary_sky_lightest",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "w-[50%] mx-auto text-center",
              children: [/*#__PURE__*/jsx_runtime.jsx("h3", {
                className: "text-secondary text-base font-medium",
                children: "Add Details"
              }), /*#__PURE__*/jsx_runtime.jsx("p", {
                className: "mt-4 text-secondary_brand_light",
                children: "Make your product more convincing to your customers."
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("button", {
                className: "flex w-[max-content] mx-auto py-2 px-4 mt-6 rounded-4xl bg-primary_brand_lightest text-primary",
                onClick: () => handleAddDetails(),
                children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "mr-2 text-primary font-medium",
                  children: "+"
                }), "Add Details"]
              })]
            })
          }), addDetails.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)("button", {
            className: "flex w-[max-content] border border-solid border-black p-3 mt-3 rounded-xl",
            onClick: handleAddDetails,
            children: ["Add Details ", /*#__PURE__*/jsx_runtime.jsx("p", {
              className: "ml-2 text-grey_40",
              children: "+"
            })]
          })]
        })]
      })
    }))
  });
}

/***/ })

};
;