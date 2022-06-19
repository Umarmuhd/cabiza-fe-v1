"use strict";
exports.id = 6318;
exports.ids = [6318];
exports.modules = {

/***/ 66318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11041);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9669);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76871);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85893);








const LeftIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
  width: "15",
  height: "15",
  viewBox: "0 0 25 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("path", {
    d: "M10.07 5.93005L4 12.0001L10.07 18.0701",
    stroke: "#5B44E9",
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("path", {
    d: "M21 12H4.16998",
    stroke: "#5B44E9",
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })]
});

const ChangePicture = ({
  user
}) => {
  var _user$profile_picture;

  const {
    0: avatar,
    1: setAvatar
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((_user$profile_picture = user === null || user === void 0 ? void 0 : user.profile_picture) !== null && _user$profile_picture !== void 0 ? _user$profile_picture : null);
  const {
    0: preview,
    1: setPreview
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const profileRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  const handleClick = () => {
    profileRef.current.click();
  };

  const handleImage = async e => {
    let file = e.target.files[0];
    setPreview(window.URL.createObjectURL(file));
    setLoading(true);
    let form_data = new FormData();
    form_data.append("image", file);

    try {
      const config = {
        "Content-Type": "multipart/form-data"
      };
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_2___default().put(`${_config_index__WEBPACK_IMPORTED_MODULE_3__.API_URL}/user/avatar`, form_data, config);
      react_hot_toast__WEBPACK_IMPORTED_MODULE_5__/* ["default"].success */ .ZP.success("Uploaded Successfully");
      setAvatar(data.data.picture);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      react_hot_toast__WEBPACK_IMPORTED_MODULE_5__/* ["default"].error */ .ZP.error("Image upload failed. Try later.");
      setPreview(null);
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
    className: "bg-white rounded-2xl p-10 px-3 md:w-43/50 mx-auto mt-10 shadow mb-12",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "text-center relative",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "rounded-[50%] bg-secondary_sky_light w-[max-content] h-auto mx-auto flex p-3 object-cover overflow-hidden",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("label", {
          htmlFor: "image",
          className: `mx-auto ${user !== null && user !== void 0 && user.profile_picture ? " w-[14rem] h-[14rem]" : " w-[12rem] h-[12rem]"}`,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
            src: (preview !== null && preview !== void 0 ? preview : avatar) ? avatar : "/images/profile-placeholder.png",
            className: "m-auto cursor-pointer rounded-full object-cover w-[100%] h-[100%]"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", {
          type: "file",
          name: "image",
          accept: "image/png, image/gif, image/jpeg",
          id: "image",
          className: "hidden",
          onChange: handleImage,
          ref: profileRef
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "w-[90%] mx-auto px-10 mt-12",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h3", {
          className: "text-3xl text-secondary_ink_dark font-semibold mb-3 mt-[-1.5rem]",
          children: "Choose your profile image"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
          className: "w-[80%] mx-auto text-secondary_ink_lighter text-lg mb-10",
          children: "Upload image or drag image to the avatar to upload. Recommended size 100px by 100px, 72 DPI, JPEG or PNG."
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("label", {
          htmlFor: "image",
          className: "bg-primary_brand_lightest text-primary py-3 px-7 rounded-3xl cursor-pointer",
          children: "Upload Picture"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "mt-7 text-center w-[max-content] mx-auto text-primary",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
          href: "/profile",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
            className: "flex items-center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(LeftIcon, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
              className: "ml-2",
              children: "Back"
            })]
          })
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangePicture);

/***/ })

};
;