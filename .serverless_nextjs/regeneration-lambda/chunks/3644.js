"use strict";
exports.id = 3644;
exports.ids = [3644];
exports.modules = {

/***/ 73644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ CreateProductBasics)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
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
;// CONCATENATED MODULE: ./libs/Hooks/useProductBasics.js





const schema = lib/* object */.Ry().shape({
  name: lib/* string */.Z_().required("Product name is required"),
  description: lib/* string */.Z_().required("Product description is required"),
  thumbnail: lib/* mixed */.nK().test("required", "You need to provide a file", value => {
    return value && value.length;
  }).test("fileSize", "The file is too large", (value, context) => {
    return value && value[0] && value[0].size <= 2000000;
  }).test("type", "We only support jpeg/png", function (value) {
    return value && value[0] && (value[0].type === "image/jpeg" || value[0].type === "image/png");
  }),
  cover_image: lib/* mixed */.nK().test("required", "You need to provide a file", value => {
    return value && value.length;
  }).test("fileSize", "The file is too large", (value, context) => {
    return value && value[0] && value[0].size <= 2000000;
  }).test("type", "We only support jpeg/png", function (value) {
    return value && value[0] && (value[0].type === "image/jpeg" || value[0].type === "image/png");
  })
});
const useProductBasics = ({
  stepIndex,
  stepErrors,
  setStepErrors,
  product
}) => {
  const {
    basicInfo,
    setBasicInfo
  } = (0,recoil/* useCreateProductRecoilStates */.f)();
  const {
    name,
    description,
    thumbnail,
    cover_image
  } = product;
  const methods = (0,index_esm/* useForm */.cI)({
    mode: "onBlur",
    defaultValues: basicInfo.name ? basicInfo : {
      name,
      description,
      thumbnail: thumbnail !== null && thumbnail !== void 0 ? thumbnail : null,
      cover_image: cover_image !== null && cover_image !== void 0 ? cover_image : null
    },
    resolver: (0,yup/* yupResolver */.X)(schema)
  });

  const setValues = async () => {
    const values = methods.getValues();
    setBasicInfo(values);
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
// EXTERNAL MODULE: ./components/TextFormat/index.js
var TextFormat = __webpack_require__(45708);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./pages/app/products/create/create-product-basics/CreateProductBasics.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const BasicProductStep = _ref => {
  var _errors$name, _errors$description, _methods$getValues$th, _watch, _window, _window$URL, _errors$description2, _product$cover_image;

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
  } = useProductBasics({
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
  (0,react.useEffect)(() => {
    setValues();
  }, []);
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
          className: "flex flex-col",
          children: [/*#__PURE__*/jsx_runtime.jsx("label", {
            htmlFor: "product_name",
            className: "leading-4 font-medium text-secondary_ink_darkest mb-3",
            children: "Product Name"
          }), /*#__PURE__*/jsx_runtime.jsx("input", _objectSpread(_objectSpread({
            type: "text",
            id: "product_name",
            name: "product_name",
            placeholder: "Enter your product name",
            className: "border border-solid border-sky_light p-4 rounded-lg mt-2 outline-none"
          }, register("name", {
            required: true
          })), {}, {
            autoComplete: "off"
          })), ((_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.type) === "required" && /*#__PURE__*/jsx_runtime.jsx("p", {
            className: "text-left text-red-600 text-xs mt-1",
            children: "Product name is required"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "flex flex-col mt-6 relative",
          children: [/*#__PURE__*/jsx_runtime.jsx("label", {
            htmlFor: "product_description",
            className: "leading-4 font-medium text-secondary_ink_darkest mb-3",
            children: "Description"
          }), /*#__PURE__*/jsx_runtime.jsx(TextFormat/* default */.Z, {}), /*#__PURE__*/jsx_runtime.jsx("input", _objectSpread(_objectSpread({
            type: "text",
            name: "product_desc",
            id: "product_desc",
            placeholder: "Product Description",
            className: "px-4 py-3 pd-12 h-[5rem] w-[100%] outline-none border border-solid border-sky_light rounded-b-lg"
          }, register("description", {
            required: true
          })), {}, {
            autoComplete: "off"
          })), ((_errors$description = errors.description) === null || _errors$description === void 0 ? void 0 : _errors$description.type) === "required" && /*#__PURE__*/jsx_runtime.jsx("p", {
            className: "text-left text-red-600 text-xs mt-1",
            children: "Product description is required"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "flex flex-col mt-6",
          children: [/*#__PURE__*/jsx_runtime.jsx("label", {
            htmlFor: "product_url",
            className: "leading-4 font-medium text-secondary_ink_darkest mb-3",
            children: "URL"
          }), /*#__PURE__*/jsx_runtime.jsx("input", {
            type: "url",
            name: "product_url",
            id: "product_url",
            placeholder: "ukpejacob.cabiza.com/p/aireu2",
            className: "border border-solid border-sky_light p-4 rounded-lg mt-2 outline-none",
            disabled: true,
            defaultValue: `${product === null || product === void 0 ? void 0 : product.user.username}.cabiza.com/products/${product === null || product === void 0 ? void 0 : product.product_id}`
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "flex flex-col mt-6",
          children: [/*#__PURE__*/jsx_runtime.jsx("p", {
            className: "leading-4 font-medium text-secondary_ink_darkest mb-3",
            children: "Product Thumbnail"
          }), /*#__PURE__*/jsx_runtime.jsx("input", _objectSpread({
            type: "file",
            name: "product_file",
            id: "product_file",
            className: "hidden"
          }, register("thumbnail", {
            required: true
          }))), /*#__PURE__*/jsx_runtime.jsx("label", {
            htmlFor: "product_file",
            className: "",
            children: /*#__PURE__*/jsx_runtime.jsx(next_image["default"], {
              className: "mt-2",
              src: ((_methods$getValues$th = methods.getValues().thumbnail) !== null && _methods$getValues$th !== void 0 ? _methods$getValues$th : watch("thumbnail") !== undefined && ((_watch = watch("thumbnail")) === null || _watch === void 0 ? void 0 : _watch.length) > 0) ? typeof watch("thumbnail") === "string" ? watch("thumbnail") : (_window = window) === null || _window === void 0 ? void 0 : (_window$URL = _window.URL) === null || _window$URL === void 0 ? void 0 : _window$URL.createObjectURL(watch("thumbnail")[0]) : "/images/thumbnail.png",
              alt: "...",
              width: 160,
              height: 160
            })
          }), /*#__PURE__*/jsx_runtime.jsx("p", {
            className: "mt-3 text-secondary_brand_light w-[70%]",
            children: "This image will appear in cabiza library, discover and profile pages. Requirement: square, atleast 600px by 600px, JPG, SVG, PNG, GIF format."
          }), ((_errors$description2 = errors.description) === null || _errors$description2 === void 0 ? void 0 : _errors$description2.type) === "required" && /*#__PURE__*/jsx_runtime.jsx("p", {
            className: "text-left text-red-600 text-xs mt-1",
            children: "Product thumbnail is required"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "flex flex-col mt-6",
          children: [/*#__PURE__*/jsx_runtime.jsx("label", {
            htmlFor: "product_cover",
            className: "leading-4 font-medium text-secondary_ink_darkest mb-3",
            children: "Product Cover"
          }), /*#__PURE__*/jsx_runtime.jsx("input", _objectSpread(_objectSpread({
            type: "file",
            name: "product_cover",
            id: "product_cover",
            className: "mt-2 border border-solid border-sky_light p-4 rounded-lg"
          }, register("cover_image", {})), {}, {
            placeholder: (_product$cover_image = product === null || product === void 0 ? void 0 : product.cover_image) !== null && _product$cover_image !== void 0 ? _product$cover_image : "Add a cover image"
          })), /*#__PURE__*/jsx_runtime.jsx("p", {
            className: "mt-3 text-secondary_sky_dark w-[70%]",
            children: "Image or Video, Requirements: 1280x720px and 72 DPI(dots per inch)"
          })]
        })]
      })
    }))
  });
};

/* harmony default export */ const CreateProductBasics = (BasicProductStep);

/***/ })

};
;