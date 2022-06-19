"use strict";
exports.id = 5413;
exports.ids = [5413];
exports.modules = {

/***/ 75413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProductContentStep)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
// EXTERNAL MODULE: ./components/Products/EditProductStepView.jsx + 1 modules
var EditProductStepView = __webpack_require__(50243);
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(87536);
// EXTERNAL MODULE: ./node_modules/@hookform/resolvers/yup/dist/yup.mjs + 1 modules
var yup = __webpack_require__(47533);
// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var lib = __webpack_require__(53209);
// EXTERNAL MODULE: ./recoil/index.js + 1 modules
var recoil = __webpack_require__(32059);
;// CONCATENATED MODULE: ./libs/Hooks/useProductContent.js





const schema = lib/* object */.Ry().shape({
  url: lib/* string */.Z_().required("Product url is required"),
  file: lib/* mixed */.nK().test("required", "You need to provide a file", value => {
    return value && value.length;
  }).test("fileSize", "The file is too large", (value, context) => {
    return value && value[0] && value[0].size <= 2000000;
  }).test("type", "We only support jpeg/png", function (value) {
    return value && value[0] && (value[0].type === "image/jpeg" || value[0].type === "image/png");
  })
});
const useProductContent = ({
  stepIndex,
  stepErrors,
  setStepErrors,
  product
}) => {
  const {
    productContent,
    setProductContent
  } = (0,recoil/* useCreateProductRecoilStates */.f)();
  const {
    file,
    url
  } = product;
  const methods = (0,index_esm/* useForm */.cI)({
    mode: "onBlur",
    defaultValues: !productContent.file && !productContent.url ? {
      file: file !== null && file !== void 0 ? file : null,
      url
    } : productContent,
    resolver: (0,yup/* yupResolver */.X)(schema)
  });

  const setValues = () => {
    const values = methods.getValues();
    setProductContent(values);
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
;// CONCATENATED MODULE: ./pages/app/products/create/product-content/ProductContent.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function ProductContentStep(_ref) {
  var _methods$getValues$fi, _watch, _errors$file;

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
  } = useProductContent({
    stepIndex,
    stepErrors,
    setStepErrors,
    product
  });
  const {
    watch,
    register,
    formState: {
      errors
    }
  } = methods;
  console.log(typeof watch("file"));
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
          children: [/*#__PURE__*/jsx_runtime.jsx("p", {
            className: "leading-4 font-medium text-secondary_ink_darkest mb-3",
            children: "Files"
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "border border-dashed border-secondary_sky_base p-4 rounded-lg",
            children: [/*#__PURE__*/jsx_runtime.jsx("input", _objectSpread({
              type: "file",
              name: "add_files",
              id: "add_files",
              className: "hidden"
            }, register("file", {
              required: true
            }))), /*#__PURE__*/(0,jsx_runtime.jsxs)("label", {
              htmlFor: "add_files",
              className: "w-1/2 mx-auto text-center",
              children: [/*#__PURE__*/jsx_runtime.jsx("h3", {
                className: "text-secondary text-base font-medium",
                children: ((_methods$getValues$fi = methods.getValues().file) !== null && _methods$getValues$fi !== void 0 ? _methods$getValues$fi : watch("file") !== undefined && ((_watch = watch("file")) === null || _watch === void 0 ? void 0 : _watch.length) > 0) ? typeof watch("file") === "string" ? watch("file") : watch("file")[0].name : "Add Files"
              }), /*#__PURE__*/jsx_runtime.jsx("p", {
                className: "mt-4 secondary_brand_light",
                children: "Upload your product files here"
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                className: "flex w-[max-content] mx-auto py-2 px-4 mt-6 rounded-4xl bg-primary_brand_lightest text-primary",
                children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "mr-2 text-primary font-medium",
                  children: "+"
                }), "Upload Files"]
              })]
            })]
          }), ((_errors$file = errors.file) === null || _errors$file === void 0 ? void 0 : _errors$file.type) === "required" && /*#__PURE__*/jsx_runtime.jsx("p", {
            className: "text-left text-red-600 text-xs mt-1",
            children: "Product file is required"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "flex flex-col mt-5",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("label", {
            htmlFor: "redirecting_url",
            className: "leading-4 font-medium text-secondary_ink_darkest mb-3",
            children: ["Redirect URL (optional)", " "]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "border border-solid border-sky_light p-4 rounded-lg mt-2 outline-none flex items-center justify-between",
            children: [/*#__PURE__*/jsx_runtime.jsx("input", _objectSpread(_objectSpread({
              type: "url",
              name: "product_url",
              id: "product_url",
              placeholder: "Redirect URL after purchase",
              className: " outline-none w-[90%]"
            }, register("url", {
              required: false
            })), {}, {
              autoComplete: "off"
            })), /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
              href: "/dashboard/products",
              children: /*#__PURE__*/jsx_runtime.jsx("button", {
                className: "border border-solid border-grey_20 px-4 rounded text-grey_20 py-2",
                children: "Test"
              })
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