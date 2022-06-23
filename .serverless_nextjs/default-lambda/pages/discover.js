(() => {
var exports = {};
exports.id = 2626;
exports.ids = [2626];
exports.modules = {

/***/ 96772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Discover),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./components/Footer/MainFooter.jsx
var MainFooter = __webpack_require__(71002);
// EXTERNAL MODULE: ./components/Navbars/MainNav.jsx
var MainNav = __webpack_require__(62777);
// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(76871);
// EXTERNAL MODULE: ./pages/discover/index.module.css
var index_module = __webpack_require__(98981);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./node_modules/react-hot-toast/dist/react-hot-toast.cjs.production.min.js
var react_hot_toast_cjs_production_min = __webpack_require__(11041);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
;// CONCATENATED MODULE: ./hooks/useProducts.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function getAllProducts() {
  return axios_default().get(`${config.API_URL}/products/all`).then(res => res.data);
}

const useAllProducts = () => {
  const {
    data,
    isLoading,
    refetch
  } = (0,lib.useQuery)("products", getAllProducts);
  return _objectSpread(_objectSpread({}, data), {}, {
    isLoading,
    refetch
  });
};
;// CONCATENATED MODULE: ./api_calls/index.js
const {
  default: api_calls_axios
} = __webpack_require__(9669);

const {
  API_URL
} = __webpack_require__(76871);

function api_calls_getAllProducts() {
  return api_calls_axios.get(`${API_URL}/products/all`).then(res => res.data);
}
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/Discover/ProductSearch/index.jsx




const SearchIcon = ({
  className
}) => /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  className: `${className ? className : ""}`,
  children: [/*#__PURE__*/jsx_runtime.jsx("path", {
    d: "M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z",
    fill: "#EFEDFD"
  }), /*#__PURE__*/jsx_runtime.jsx("path", {
    d: "M21.9999 22.75C21.8099 22.75 21.6199 22.68 21.4699 22.53L19.4699 20.53C19.1799 20.24 19.1799 19.76 19.4699 19.47C19.7599 19.18 20.2399 19.18 20.5299 19.47L22.5299 21.47C22.8199 21.76 22.8199 22.24 22.5299 22.53C22.3799 22.68 22.1899 22.75 21.9999 22.75Z",
    fill: "#EFEDFD"
  })]
});

const ProductSearch = () => {
  return /*#__PURE__*/jsx_runtime.jsx("div", {
    className: "bg-secondary_sky_lighter",
    children: /*#__PURE__*/jsx_runtime.jsx("header", {
      className: "py-16 mx-auto max-w-[1100px]",
      children: /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "w-[90%] mx-auto",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
          className: "flex",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "flex items-center border border-sky_light rounded-l-full overflow-hidden relative text-white mr-[-.1rem] h-[max-content]",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("select", {
              name: "t-zone",
              id: "t-zone",
              className: "h-[3.4rem] m-auto focus:outline-none text-white focus:ring-indigo-500 border-0 outline-none appearance-none bg-primary px-6 lg:w-[10rem] sm:w-2/6",
              children: [/*#__PURE__*/jsx_runtime.jsx("option", {
                className: "bg-primary",
                value: "education",
                children: "Education"
              }), /*#__PURE__*/jsx_runtime.jsx("option", {
                className: "bg-primary",
                value: "fitness",
                children: "Fitness"
              }), /*#__PURE__*/jsx_runtime.jsx("option", {
                className: "bg-primary",
                value: "health",
                children: "Health"
              })]
            }), /*#__PURE__*/jsx_runtime.jsx("div", {
              className: "pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700 h-[100%] px-3",
              children: /*#__PURE__*/jsx_runtime.jsx("svg", {
                width: "14",
                height: "9",
                viewBox: "0 0 18 9",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "fill-current",
                children: /*#__PURE__*/jsx_runtime.jsx("path", {
                  d: "M9.00002 8.80001C8.30002 8.80001 7.60002 8.53001 7.07002 8.00001L0.55002 1.48001C0.26002 1.19001 0.26002 0.710015 0.55002 0.420015C0.84002 0.130015 1.32002 0.130015 1.61002 0.420015L8.13002 6.94001C8.61002 7.42001 9.39002 7.42001 9.87002 6.94001L16.39 0.420015C16.68 0.130015 17.16 0.130015 17.45 0.420015C17.74 0.710015 17.74 1.19001 17.45 1.48001L10.93 8.00001C10.4 8.53001 9.70002 8.80001 9.00002 8.80001Z",
                  fill: "white"
                })
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "flex justify-center border pl-6 w-full rounded-r-full bg-white",
            children: [/*#__PURE__*/jsx_runtime.jsx("input", {
              type: "search",
              placeholder: "Search for products...",
              className: "w-full outline-none text-secondary_sky_dark bg-transparent border-[transparent]"
            }), /*#__PURE__*/jsx_runtime.jsx("button", {
              type: "submit",
              className: "bg-primary p-2 mr-2 rounded-full text-md h-[max-content] my-auto",
              children: /*#__PURE__*/jsx_runtime.jsx(SearchIcon, {})
            })]
          })]
        })
      })
    })
  });
};

/* harmony default export */ const Discover_ProductSearch = (ProductSearch);
;// CONCATENATED MODULE: ./layouts/Landing.jsx



const Landing = ({
  children
}) => {
  return /*#__PURE__*/_jsx("main", {
    className: "relative",
    children: children
  });
};

/* harmony default export */ const layouts_Landing = ((/* unused pure expression or super */ null && (Landing)));
// EXTERNAL MODULE: ./components/Alert/index.jsx
var Alert = __webpack_require__(65745);
;// CONCATENATED MODULE: ./layouts/PublicLayout.jsx





const PublicLayout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/jsx_runtime.jsx(react_hot_toast_cjs_production_min/* Toaster */.x7, {}), /*#__PURE__*/jsx_runtime.jsx("main", {
      className: "relative",
      children: children
    })]
  });
};

/* harmony default export */ const layouts_PublicLayout = (PublicLayout);
;// CONCATENATED MODULE: ./pages/discover/index.jsx



















const ProductItem = ({
  product
}) => {
  var _product$thumbnail;

  const handleBecomeAffiliate = async () => {
    try {
      const url = `${config.API_URL}/products/affiliate/${product.product_id}`;
      const {
        data
      } = await axios_default().put(url);
      react_hot_toast_cjs_production_min/* default.custom */.ZP.custom( /*#__PURE__*/jsx_runtime.jsx(Alert/* default */.Z, {
        color: "#24C78C",
        text: `${data.data.message} !`
      }));
      return;
    } catch (error) {
      console.error(error.message);
      react_hot_toast_cjs_production_min/* default.custom */.ZP.custom( /*#__PURE__*/jsx_runtime.jsx(Alert/* default */.Z, {
        color: "#F50000",
        text: error.response.data.message
      }));
      return;
    }
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: `shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${(index_module_default()).card}`,
    children: [/*#__PURE__*/jsx_runtime.jsx("img", {
      src: (_product$thumbnail = product.thumbnail) !== null && _product$thumbnail !== void 0 ? _product$thumbnail : "/images/book-small.png",
      alt: "...",
      className: "w-[24rem] h-[20rem] object-cover"
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "p-5 rounded-b",
      children: [/*#__PURE__*/jsx_runtime.jsx("p", {
        className: "text-lg text-secondary_sky_dark font-normal mb-1",
        children: "Books"
      }), /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
        href: `/discover/${product.product_id}`,
        children: /*#__PURE__*/jsx_runtime.jsx("a", {
          className: "text-2xl text-secondary font-medium",
          children: product.name
        })
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "flex items-center mt-3",
        children: /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
          href: `/${product.user.username}/products`,
          children: /*#__PURE__*/jsx_runtime.jsx("a", {
            className: "font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter",
            children: product.user.full_name
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "flex items-center justify-between mt-4",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "flex items-center",
          children: [/*#__PURE__*/jsx_runtime.jsx("img", {
            src: "/images/icons/star.svg",
            alt: "...",
            className: "w-6 h-6"
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
            className: "ml-2 font-semibold text-secondary_ink_lighter text-md",
            children: ["5.0", /*#__PURE__*/jsx_runtime.jsx("span", {
              className: "font-normal ml-1",
              children: "(25)"
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
          className: `text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${(index_module_default()).price} text-white`,
          children: ["$", product.price, "+"]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest",
        children: [/*#__PURE__*/jsx_runtime.jsx("p", {
          className: "text-xs text-secondary",
          children: "40% Affiliate Commission"
        }), /*#__PURE__*/jsx_runtime.jsx("button", {
          className: "bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10",
          onClick: handleBecomeAffiliate,
          children: "Become Affiliate"
        })]
      })]
    })]
  });
};

function Discover(props) {
  const {
    data: products,
    isLoading
  } = useAllProducts();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(layouts_PublicLayout, {
    children: [/*#__PURE__*/jsx_runtime.jsx(MainNav/* default */.Z, {}), /*#__PURE__*/jsx_runtime.jsx(Discover_ProductSearch, {}), /*#__PURE__*/jsx_runtime.jsx("div", {
      id: "explore_cat",
      className: "px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "mx-auto w-[100%] px-3 max-w-[1500px] overflow-hidden",
        children: [/*#__PURE__*/jsx_runtime.jsx("h2", {
          className: "text-lg text-lighter font-medium mb-6",
          children: "Explore Cabiza"
        }), /*#__PURE__*/jsx_runtime.jsx("p", {
          className: "font-bold text-dark_ text-3xl mb-12 xs:w-[70%]",
          children: "Perfect your career with tested and proven resources from experts and examples from others."
        }), /*#__PURE__*/jsx_runtime.jsx("div", {
          className: `${(index_module_default()).cards} mb-7`,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: `flex gap-2 ${(index_module_default())["product-cards"]} pb-4 px-2`,
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "rounded-lg hover:bg-primary group cursor-pointer border border-primary_brand_lightest py-5 px-4 w-[15rem]",
              style: {
                "&:hover": {
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)",
                  "border-radius": "8px"
                }
              },
              children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                src: "images/Education.png",
                alt: "...",
                className: "mb-4 mx-auto",
                style: {
                  border: "1px solid #E3E5E6",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)"
                }
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "text-center",
                children: [/*#__PURE__*/jsx_runtime.jsx("h3", {
                  className: "font-bold text-2xl mb-2 text-secondary group-hover:text-white",
                  children: "Education"
                }), /*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "mb-4 text-sm font-medium text-secondary_sky_dark group-hover:text-lighter",
                  children: "Books, stories and guides"
                }), /*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "font-medium text-md  group-hover:bg-white w-[max-content] p-2 px-3 rounded-xl bg-primary_brand_lightest text-primary mx-auto",
                  children: "Explore products"
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "rounded-lg hover:bg-primary group cursor-pointer border border-primary_brand_lightest py-5 px-4 w-[15rem]",
              style: {
                "&:hover": {
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)",
                  "border-radius": "8px"
                }
              },
              children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                src: "images/crafts.png",
                alt: "...",
                className: "mb-4 mx-auto",
                style: {
                  border: "1px solid #E3E5E6",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)"
                }
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "text-center",
                children: [/*#__PURE__*/jsx_runtime.jsx("h3", {
                  className: "font-bold text-2xl mb-2 text-secondary group-hover:text-white",
                  children: "Crafts & DIY"
                }), /*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "mb-4 text-sm font-medium text-secondary_sky_dark group-hover:text-lighter",
                  children: "Books, stories and guides"
                }), /*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "font-medium text-md  group-hover:bg-white w-[max-content] p-2 px-3 rounded-xl bg-primary_brand_lightest text-primary mx-auto",
                  children: "Explore products"
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "rounded-lg hover:bg-primary group cursor-pointer border border-primary_brand_lightest py-5 px-4 w-[15rem]",
              style: {
                "&:hover": {
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)",
                  "border-radius": "8px"
                }
              },
              children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                src: "images/design.png",
                alt: "...",
                className: "mb-4 mx-auto",
                style: {
                  border: "1px solid #E3E5E6",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)"
                }
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "text-center",
                children: [/*#__PURE__*/jsx_runtime.jsx("h3", {
                  className: "font-bold text-2xl mb-2 text-secondary group-hover:text-white",
                  children: "Design & Tech"
                }), /*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "mb-4 text-sm font-medium text-secondary_sky_dark group-hover:text-lighter",
                  children: "Books, stories and guides"
                }), /*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "font-medium text-md  group-hover:bg-white w-[max-content] p-2 px-3 rounded-xl bg-primary_brand_lightest text-primary mx-auto",
                  children: "Explore products"
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "rounded-lg hover:bg-primary group cursor-pointer border border-primary_brand_lightest py-5 px-4 w-[15rem]",
              style: {
                "&:hover": {
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)",
                  "border-radius": "8px"
                }
              },
              children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                src: "images/film.png",
                alt: "...",
                className: "mb-4 mx-auto",
                style: {
                  border: "1px solid #E3E5E6",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)"
                }
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "text-center",
                children: [/*#__PURE__*/jsx_runtime.jsx("h3", {
                  className: "font-bold text-2xl mb-2 text-secondary group-hover:text-white",
                  children: "Film and Videos"
                }), /*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "mb-4 text-sm font-medium text-secondary_sky_dark group-hover:text-lighter",
                  children: "Books, stories and guides"
                }), /*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "font-medium text-md  group-hover:bg-white w-[max-content] p-2 px-3 rounded-xl bg-primary_brand_lightest text-primary mx-auto",
                  children: "Explore products"
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "rounded-lg hover:bg-primary group cursor-pointer border border-primary_brand_lightest py-5 px-4 w-[15rem]",
              style: {
                "&:hover": {
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)",
                  "border-radius": "8px"
                }
              },
              children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                src: "images/Books.png",
                alt: "...",
                className: "mb-4 w-[100%] h-[9rem] mx-auto",
                style: {
                  border: "1px solid #E3E5E6",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)"
                }
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "text-center",
                children: [/*#__PURE__*/jsx_runtime.jsx("h3", {
                  className: "font-bold text-2xl mb-2 text-secondary group-hover:text-white",
                  children: "Books and Writings"
                }), /*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "mb-4 text-sm font-medium text-secondary_sky_dark group-hover:text-lighter",
                  children: "Books, stories and guides"
                }), /*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "font-medium text-md  group-hover:bg-white w-[max-content] p-2 px-3 rounded-xl bg-primary_brand_lightest text-primary mx-auto",
                  children: "Explore products"
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "rounded-lg hover:bg-primary group cursor-pointer border border-primary_brand_lightest py-5 px-4 w-[15rem]",
              style: {
                "&:hover": {
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)",
                  "border-radius": "8px"
                }
              },
              children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                src: "images/Games.png",
                alt: "...",
                className: "mb-4 mx-auto w-[100%] h-[9rem]",
                style: {
                  border: "1px solid #E3E5E6",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)"
                }
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "text-center",
                children: [/*#__PURE__*/jsx_runtime.jsx("h3", {
                  className: "font-bold text-2xl mb-2 text-secondary group-hover:text-white",
                  children: "Games and Softwares"
                }), /*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "mb-4 text-sm font-medium text-secondary_sky_dark group-hover:text-lighter",
                  children: "Books, stories and guides"
                }), /*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "font-medium text-md  group-hover:bg-white w-[max-content] p-2 px-3 rounded-xl bg-primary_brand_lightest text-primary mx-auto",
                  children: "Explore products"
                })]
              })]
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "mb-12",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("header", {
            className: "flex justify-between items-center mb-6",
            children: [/*#__PURE__*/jsx_runtime.jsx("h3", {
              className: "text-lg xs:text-4xl text-secondary font-semibold",
              children: "Best selling in Education"
            }), /*#__PURE__*/jsx_runtime.jsx("a", {
              href: "",
              className: "text-primary_brand_light",
              children: "View All"
            })]
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: (index_module_default()).cards,
            children: /*#__PURE__*/jsx_runtime.jsx("div", {
              className: `flex ${(index_module_default())["product-cards"]} pb-4 px-2`,
              children: !isLoading && products && /*#__PURE__*/jsx_runtime.jsx(react.Fragment, {
                children: products.products.map(product => /*#__PURE__*/jsx_runtime.jsx(react.Fragment, {
                  children: /*#__PURE__*/jsx_runtime.jsx(ProductItem, {
                    product: product
                  })
                }, product.product_id))
              })
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "mb-12 mt-12",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("header", {
            className: "flex justify-between items-center mb-6",
            children: [/*#__PURE__*/jsx_runtime.jsx("h3", {
              className: "text-lg xs:text-4xl text-secondary font-semibold",
              children: "Best selling in Crafts & DIY"
            }), /*#__PURE__*/jsx_runtime.jsx("a", {
              href: "",
              className: "text-primary_brand_light",
              children: "View All"
            })]
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: (index_module_default()).cards,
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: `flex ${(index_module_default())["product-cards"]} pb-4 px-2`,
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: `shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${(index_module_default()).card}`,
                children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                  src: "/images/book-small.png",
                  alt: "...",
                  className: "w-[24rem] h-[20rem] object-cover"
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "p-5 rounded-b",
                  children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                    className: "text-lg text-secondary_sky_dark font-normal mb-1",
                    children: "Books"
                  }), /*#__PURE__*/jsx_runtime.jsx("h4", {
                    className: "text-2xl text-secondary font-medium mb-3",
                    children: "Emotional Intelligence"
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center",
                    children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                      src: "./images/author.png",
                      alt: "...",
                      className: "h-9 w-9 rounded-full"
                    }), /*#__PURE__*/jsx_runtime.jsx("a", {
                      className: "font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter",
                      children: "Sara Mitchell"
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "mt-3 flex items-center justify-between mt-4",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      className: "flex items-center",
                      children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                        src: "/images/icons/star.svg",
                        alt: "...",
                        className: "w-6 h-6"
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                        className: "ml-2 font-semibold text-secondary_ink_lighter text-md",
                        children: ["5.0", /*#__PURE__*/jsx_runtime.jsx("span", {
                          className: "font-normal ml-1",
                          children: "(25)"
                        })]
                      })]
                    }), /*#__PURE__*/jsx_runtime.jsx("span", {
                      className: `text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${(index_module_default()).price} text-white`,
                      children: "$5000+"
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest",
                    children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                      className: "text-xs text-secondary",
                      children: "40% Affiliate Commission"
                    }), /*#__PURE__*/jsx_runtime.jsx("a", {
                      href: "",
                      className: "bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10",
                      children: "Become Affiliate"
                    })]
                  })]
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: `shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${(index_module_default()).card}`,
                children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                  src: "/images/book-small.png",
                  alt: "...",
                  className: "w-[24rem] h-[20rem] object-cover"
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "p-5 rounded-b",
                  children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                    className: "text-lg text-secondary_sky_dark font-normal mb-1",
                    children: "Books"
                  }), /*#__PURE__*/jsx_runtime.jsx("h4", {
                    className: "text-2xl text-secondary font-medium mb-3",
                    children: "Emotional Intelligence"
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center",
                    children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                      src: "./images/author.png",
                      alt: "...",
                      className: "h-9 w-9 rounded-full"
                    }), /*#__PURE__*/jsx_runtime.jsx("a", {
                      className: "font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter",
                      children: "Sara Mitchell"
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "mt-3 flex items-center justify-between mt-4",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      className: "flex items-center",
                      children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                        src: "/images/icons/star.svg",
                        alt: "...",
                        className: "w-6 h-6"
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                        className: "ml-2 font-semibold text-secondary_ink_lighter text-md",
                        children: ["5.0", /*#__PURE__*/jsx_runtime.jsx("span", {
                          className: "font-normal ml-1",
                          children: "(25)"
                        })]
                      })]
                    }), /*#__PURE__*/jsx_runtime.jsx("span", {
                      className: `text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${(index_module_default()).price} text-white`,
                      children: "$5000+"
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest",
                    children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                      className: "text-xs text-secondary",
                      children: "40% Affiliate Commission"
                    }), /*#__PURE__*/jsx_runtime.jsx("a", {
                      href: "",
                      className: "bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10",
                      children: "Become Affiliate"
                    })]
                  })]
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: `shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${(index_module_default()).card}`,
                children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                  src: "/images/book-small.png",
                  alt: "...",
                  className: "w-[24rem] h-[20rem] object-cover"
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "p-5 rounded-b",
                  children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                    className: "text-lg text-secondary_sky_dark font-normal mb-1",
                    children: "Books"
                  }), /*#__PURE__*/jsx_runtime.jsx("h4", {
                    className: "text-2xl text-secondary font-medium mb-3",
                    children: "Emotional Intelligence"
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center",
                    children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                      src: "./images/author.png",
                      alt: "...",
                      className: "h-9 w-9 rounded-full"
                    }), /*#__PURE__*/jsx_runtime.jsx("a", {
                      className: "font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter",
                      children: "Sara Mitchell"
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "mt-3 flex items-center justify-between mt-4",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      className: "flex items-center",
                      children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                        src: "/images/icons/star.svg",
                        alt: "...",
                        className: "w-6 h-6"
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                        className: "ml-2 font-semibold text-secondary_ink_lighter text-md",
                        children: ["5.0", /*#__PURE__*/jsx_runtime.jsx("span", {
                          className: "font-normal ml-1",
                          children: "(25)"
                        })]
                      })]
                    }), /*#__PURE__*/jsx_runtime.jsx("span", {
                      className: `text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${(index_module_default()).price} text-white`,
                      children: "$5000+"
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest",
                    children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                      className: "text-xs text-secondary",
                      children: "40% Affiliate Commission"
                    }), /*#__PURE__*/jsx_runtime.jsx("a", {
                      href: "",
                      className: "bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10",
                      children: "Become Affiliate"
                    })]
                  })]
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: `shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${(index_module_default()).card}`,
                children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                  src: "/images/book-small.png",
                  alt: "...",
                  className: "w-[24rem] h-[20rem] object-cover"
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "p-5 rounded-b",
                  children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                    className: "text-lg text-secondary_sky_dark font-normal mb-1",
                    children: "Books"
                  }), /*#__PURE__*/jsx_runtime.jsx("h4", {
                    className: "text-2xl text-secondary font-medium mb-3",
                    children: "Emotional Intelligence"
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center",
                    children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                      src: "./images/author.png",
                      alt: "...",
                      className: "h-9 w-9 rounded-full"
                    }), /*#__PURE__*/jsx_runtime.jsx("a", {
                      className: "font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter",
                      children: "Sara Mitchell"
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "mt-3 flex items-center justify-between mt-4",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      className: "flex items-center",
                      children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                        src: "/images/icons/star.svg",
                        alt: "...",
                        className: "w-6 h-6"
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                        className: "ml-2 font-semibold text-secondary_ink_lighter text-md",
                        children: ["5.0", /*#__PURE__*/jsx_runtime.jsx("span", {
                          className: "font-normal ml-1",
                          children: "(25)"
                        })]
                      })]
                    }), /*#__PURE__*/jsx_runtime.jsx("span", {
                      className: `text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${(index_module_default()).price} text-white`,
                      children: "$5000+"
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest",
                    children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                      className: "text-xs text-secondary",
                      children: "40% Affiliate Commission"
                    }), /*#__PURE__*/jsx_runtime.jsx("a", {
                      href: "",
                      className: "bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10",
                      children: "Become Affiliate"
                    })]
                  })]
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: `shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${(index_module_default()).card}`,
                children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                  src: "/images/book-small.png",
                  alt: "...",
                  className: "w-[24rem] h-[20rem] object-cover"
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "p-5 rounded-b",
                  children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                    className: "text-lg text-secondary_sky_dark font-normal mb-1",
                    children: "Books"
                  }), /*#__PURE__*/jsx_runtime.jsx("h4", {
                    className: "text-2xl text-secondary font-medium mb-3",
                    children: "Emotional Intelligence"
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center",
                    children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                      src: "./images/author.png",
                      alt: "...",
                      className: "h-9 w-9 rounded-full"
                    }), /*#__PURE__*/jsx_runtime.jsx("a", {
                      className: "font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter",
                      children: "Sara Mitchell"
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "mt-3 flex items-center justify-between mt-4",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      className: "flex items-center",
                      children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                        src: "/images/icons/star.svg",
                        alt: "...",
                        className: "w-6 h-6"
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                        className: "ml-2 font-semibold text-secondary_ink_lighter text-md",
                        children: ["5.0", /*#__PURE__*/jsx_runtime.jsx("span", {
                          className: "font-normal ml-1",
                          children: "(25)"
                        })]
                      })]
                    }), /*#__PURE__*/jsx_runtime.jsx("span", {
                      className: `text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${(index_module_default()).price} text-white`,
                      children: "$5000+"
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest",
                    children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                      className: "text-xs text-secondary",
                      children: "40% Affiliate Commission"
                    }), /*#__PURE__*/jsx_runtime.jsx("a", {
                      href: "",
                      className: "bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10",
                      children: "Become Affiliate"
                    })]
                  })]
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: `shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${(index_module_default()).card}`,
                children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                  src: "/images/book-small.png",
                  alt: "...",
                  className: "w-[24rem] h-[20rem] object-cover"
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "p-5 rounded-b",
                  children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                    className: "text-lg text-secondary_sky_dark font-normal mb-1",
                    children: "Books"
                  }), /*#__PURE__*/jsx_runtime.jsx("h4", {
                    className: "text-2xl text-secondary font-medium mb-3",
                    children: "Emotional Intelligence"
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center",
                    children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                      src: "./images/author.png",
                      alt: "...",
                      className: "h-9 w-9 rounded-full"
                    }), /*#__PURE__*/jsx_runtime.jsx("a", {
                      className: "font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter",
                      children: "Sara Mitchell"
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "mt-3 flex items-center justify-between mt-4",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      className: "flex items-center",
                      children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                        src: "/images/icons/star.svg",
                        alt: "...",
                        className: "w-6 h-6"
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                        className: "ml-2 font-semibold text-secondary_ink_lighter text-md",
                        children: ["5.0", /*#__PURE__*/jsx_runtime.jsx("span", {
                          className: "font-normal ml-1",
                          children: "(25)"
                        })]
                      })]
                    }), /*#__PURE__*/jsx_runtime.jsx("span", {
                      className: `text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${(index_module_default()).price} text-white`,
                      children: "$5000+"
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest",
                    children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                      className: "text-xs text-secondary",
                      children: "40% Affiliate Commission"
                    }), /*#__PURE__*/jsx_runtime.jsx("a", {
                      href: "",
                      className: "bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10",
                      children: "Become Affiliate"
                    })]
                  })]
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: `shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${(index_module_default()).card}`,
                children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                  src: "/images/book-small.png",
                  alt: "...",
                  className: "w-[24rem] h-[20rem] object-cover"
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "p-5 rounded-b",
                  children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                    className: "text-lg text-secondary_sky_dark font-normal mb-1",
                    children: "Books"
                  }), /*#__PURE__*/jsx_runtime.jsx("h4", {
                    className: "text-2xl text-secondary font-medium mb-3",
                    children: "Emotional Intelligence"
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center",
                    children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                      src: "./images/author.png",
                      alt: "...",
                      className: "h-9 w-9 rounded-full"
                    }), /*#__PURE__*/jsx_runtime.jsx("a", {
                      className: "font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter",
                      children: "Sara Mitchell"
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "mt-3 flex items-center justify-between mt-4",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      className: "flex items-center",
                      children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                        src: "/images/icons/star.svg",
                        alt: "...",
                        className: "w-6 h-6"
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                        className: "ml-2 font-semibold text-secondary_ink_lighter text-md",
                        children: ["5.0", /*#__PURE__*/jsx_runtime.jsx("span", {
                          className: "font-normal ml-1",
                          children: "(25)"
                        })]
                      })]
                    }), /*#__PURE__*/jsx_runtime.jsx("span", {
                      className: `text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${(index_module_default()).price} text-white`,
                      children: "$5000+"
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest",
                    children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                      className: "text-xs text-secondary",
                      children: "40% Affiliate Commission"
                    }), /*#__PURE__*/jsx_runtime.jsx("a", {
                      href: "",
                      className: "bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10",
                      children: "Become Affiliate"
                    })]
                  })]
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: `shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${(index_module_default()).card}`,
                children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                  src: "/images/book-small.png",
                  alt: "...",
                  className: "w-[24rem] h-[20rem] object-cover"
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: "p-5 rounded-b",
                  children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                    className: "text-lg text-secondary_sky_dark font-normal mb-1",
                    children: "Books"
                  }), /*#__PURE__*/jsx_runtime.jsx("h4", {
                    className: "text-2xl text-secondary font-medium mb-3",
                    children: "Emotional Intelligence"
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center",
                    children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                      src: "./images/author.png",
                      alt: "...",
                      className: "h-9 w-9 rounded-full"
                    }), /*#__PURE__*/jsx_runtime.jsx("a", {
                      className: "font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter",
                      children: "Sara Mitchell"
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "mt-3 flex items-center justify-between mt-4",
                    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      className: "flex items-center",
                      children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                        src: "/images/icons/star.svg",
                        alt: "...",
                        className: "w-6 h-6"
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                        className: "ml-2 font-semibold text-secondary_ink_lighter text-md",
                        children: ["5.0", /*#__PURE__*/jsx_runtime.jsx("span", {
                          className: "font-normal ml-1",
                          children: "(25)"
                        })]
                      })]
                    }), /*#__PURE__*/jsx_runtime.jsx("span", {
                      className: `text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${(index_module_default()).price} text-white`,
                      children: "$5000+"
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: "rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest",
                    children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                      className: "text-xs text-secondary",
                      children: "40% Affiliate Commission"
                    }), /*#__PURE__*/jsx_runtime.jsx("a", {
                      href: "",
                      className: "bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10",
                      children: "Become Affiliate"
                    })]
                  })]
                })]
              })]
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "mb-0",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("header", {
            className: "flex justify-between items-center mb-6",
            children: [/*#__PURE__*/jsx_runtime.jsx("h3", {
              className: "text-lg xs:text-4xl text-secondary font-semibold",
              children: "Best selling in Design & Tech"
            }), /*#__PURE__*/jsx_runtime.jsx("a", {
              href: "",
              className: "text-primary_brand_light",
              children: "View All"
            })]
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: (index_module_default()).cards,
            children: /*#__PURE__*/jsx_runtime.jsx("div", {
              className: `flex ${(index_module_default())["product-cards"]}`,
              children: /*#__PURE__*/jsx_runtime.jsx("div", {
                className: (index_module_default()).cards,
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  className: `flex ${(index_module_default())["product-cards"]} pb-4 px-2`,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: `shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${(index_module_default()).card}`,
                    children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                      src: "/images/book-small.png",
                      alt: "...",
                      className: "w-[24rem] h-[20rem] object-cover"
                    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      className: "p-5 rounded-b",
                      children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                        className: "text-lg text-secondary_sky_dark font-normal mb-1",
                        children: "Books"
                      }), /*#__PURE__*/jsx_runtime.jsx("h4", {
                        className: "text-2xl text-secondary font-medium mb-3",
                        children: "Emotional Intelligence"
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center",
                        children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                          src: "./images/author.png",
                          alt: "...",
                          className: "h-9 w-9 rounded-full"
                        }), /*#__PURE__*/jsx_runtime.jsx("a", {
                          className: "font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter",
                          children: "Sara Mitchell"
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "mt-3 flex items-center justify-between",
                        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                          className: "flex items-center",
                          children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                            src: "/images/icons/star.svg",
                            alt: "...",
                            className: "w-6 h-6"
                          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                            className: "ml-2 font-semibold text-secondary_ink_lighter",
                            children: ["5.0", /*#__PURE__*/jsx_runtime.jsx("span", {
                              className: "font-normal ml-1 text-xs",
                              children: "(25)"
                            })]
                          })]
                        }), /*#__PURE__*/jsx_runtime.jsx("span", {
                          className: `text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${(index_module_default()).price} text-white`,
                          children: "$5000+"
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest",
                        children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                          className: "text-xs text-secondary",
                          children: "40% Affiliate Commission"
                        }), /*#__PURE__*/jsx_runtime.jsx("a", {
                          href: "",
                          className: "bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10",
                          children: "Become Affiliate"
                        })]
                      })]
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: `shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${(index_module_default()).card}`,
                    children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                      src: "/images/book-small.png",
                      alt: "...",
                      className: "w-[24rem] h-[20rem] object-cover"
                    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      className: "p-5 rounded-b",
                      children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                        className: "text-lg text-secondary_sky_dark font-normal mb-1",
                        children: "Books"
                      }), /*#__PURE__*/jsx_runtime.jsx("h4", {
                        className: "text-2xl text-secondary font-medium mb-3",
                        children: "Emotional Intelligence"
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center",
                        children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                          src: "./images/author.png",
                          alt: "...",
                          className: "h-9 w-9 rounded-full"
                        }), /*#__PURE__*/jsx_runtime.jsx("a", {
                          className: "font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter",
                          children: "Sara Mitchell"
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "mt-3 flex items-center justify-between",
                        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                          className: "flex items-center",
                          children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                            src: "/images/icons/star.svg",
                            alt: "...",
                            className: "w-6 h-6"
                          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                            className: "ml-2 font-semibold text-secondary_ink_lighter text-md",
                            children: ["5.0", /*#__PURE__*/jsx_runtime.jsx("span", {
                              className: "font-normal ml-1",
                              children: "(25)"
                            })]
                          })]
                        }), /*#__PURE__*/jsx_runtime.jsx("span", {
                          className: `text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${(index_module_default()).price} text-white`,
                          children: "$5000+"
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest",
                        children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                          className: "text-xs text-secondary",
                          children: "40% Affiliate Commission"
                        }), /*#__PURE__*/jsx_runtime.jsx("a", {
                          href: "",
                          className: "bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10",
                          children: "Become Affiliate"
                        })]
                      })]
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: `shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${(index_module_default()).card}`,
                    children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                      src: "/images/book-small.png",
                      alt: "...",
                      className: "w-[24rem] h-[20rem] object-cover"
                    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      className: "p-5 rounded-b",
                      children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                        className: "text-lg text-secondary_sky_dark font-normal mb-1",
                        children: "Books"
                      }), /*#__PURE__*/jsx_runtime.jsx("h4", {
                        className: "text-2xl text-secondary font-medium mb-3",
                        children: "Emotional Intelligence"
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center",
                        children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                          src: "./images/author.png",
                          alt: "...",
                          className: "h-9 w-9 rounded-full"
                        }), /*#__PURE__*/jsx_runtime.jsx("a", {
                          className: "font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter",
                          children: "Sara Mitchell"
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "mt-3 flex items-center justify-between",
                        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                          className: "flex items-center",
                          children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                            src: "/images/icons/star.svg",
                            alt: "...",
                            className: "w-6 h-6"
                          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                            className: "ml-2 font-semibold text-secondary_ink_lighter text-md",
                            children: ["5.0", /*#__PURE__*/jsx_runtime.jsx("span", {
                              className: "font-normal ml-1",
                              children: "(25)"
                            })]
                          })]
                        }), /*#__PURE__*/jsx_runtime.jsx("span", {
                          className: `text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${(index_module_default()).price} text-white`,
                          children: "$5000+"
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest",
                        children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                          className: "text-xs text-secondary",
                          children: "40% Affiliate Commission"
                        }), /*#__PURE__*/jsx_runtime.jsx("a", {
                          href: "",
                          className: "bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10",
                          children: "Become Affiliate"
                        })]
                      })]
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: `shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${(index_module_default()).card}`,
                    children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                      src: "/images/book-small.png",
                      alt: "...",
                      className: "w-[24rem] h-[20rem] object-cover"
                    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      className: "p-5 rounded-b",
                      children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                        className: "text-lg text-secondary_sky_dark font-normal mb-1",
                        children: "Books"
                      }), /*#__PURE__*/jsx_runtime.jsx("h4", {
                        className: "text-2xl text-secondary font-medium mb-3",
                        children: "Emotional Intelligence"
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center",
                        children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                          src: "./images/author.png",
                          alt: "...",
                          className: "h-9 w-9 rounded-full"
                        }), /*#__PURE__*/jsx_runtime.jsx("a", {
                          className: "font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter",
                          children: "Sara Mitchell"
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "mt-3 flex items-center justify-between",
                        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                          className: "flex items-center",
                          children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                            src: "/images/icons/star.svg",
                            alt: "...",
                            className: "w-6 h-6"
                          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                            className: "ml-2 font-semibold text-secondary_ink_lighter text-md",
                            children: ["5.0", /*#__PURE__*/jsx_runtime.jsx("span", {
                              className: "font-normal ml-1",
                              children: "(25)"
                            })]
                          })]
                        }), /*#__PURE__*/jsx_runtime.jsx("span", {
                          className: `text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${(index_module_default()).price} text-white`,
                          children: "$5000+"
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest",
                        children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                          className: "text-xs text-secondary",
                          children: "40% Affiliate Commission"
                        }), /*#__PURE__*/jsx_runtime.jsx("a", {
                          href: "",
                          className: "bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10",
                          children: "Become Affiliate"
                        })]
                      })]
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: `shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${(index_module_default()).card}`,
                    children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                      src: "/images/book-small.png",
                      alt: "...",
                      className: "w-[24rem] h-[20rem] object-cover"
                    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      className: "p-5 rounded-b",
                      children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                        className: "text-lg text-secondary_sky_dark font-normal mb-1",
                        children: "Books"
                      }), /*#__PURE__*/jsx_runtime.jsx("h4", {
                        className: "text-2xl text-secondary font-medium mb-3",
                        children: "Emotional Intelligence"
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center",
                        children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                          src: "./images/author.png",
                          alt: "...",
                          className: "h-9 w-9 rounded-full"
                        }), /*#__PURE__*/jsx_runtime.jsx("a", {
                          className: "font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter",
                          children: "Sara Mitchell"
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "mt-3 flex items-center justify-between",
                        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                          className: "flex items-center",
                          children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                            src: "/images/icons/star.svg",
                            alt: "...",
                            className: "w-6 h-6"
                          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                            className: "ml-2 font-semibold text-secondary_ink_lighter text-md",
                            children: ["5.0", /*#__PURE__*/jsx_runtime.jsx("span", {
                              className: "font-normal ml-1",
                              children: "(25)"
                            })]
                          })]
                        }), /*#__PURE__*/jsx_runtime.jsx("span", {
                          className: `text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${(index_module_default()).price} text-white`,
                          children: "$5000+"
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest",
                        children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                          className: "text-xs text-secondary",
                          children: "40% Affiliate Commission"
                        }), /*#__PURE__*/jsx_runtime.jsx("a", {
                          href: "",
                          className: "bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10",
                          children: "Become Affiliate"
                        })]
                      })]
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: `shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${(index_module_default()).card}`,
                    children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                      src: "/images/book-small.png",
                      alt: "...",
                      className: "w-[24rem] h-[20rem] object-cover"
                    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      className: "p-5 rounded-b",
                      children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                        className: "text-lg text-secondary_sky_dark font-normal mb-1",
                        children: "Books"
                      }), /*#__PURE__*/jsx_runtime.jsx("h4", {
                        className: "text-2xl text-secondary font-medium mb-3",
                        children: "Emotional Intelligence"
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center",
                        children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                          src: "./images/author.png",
                          alt: "...",
                          className: "h-9 w-9 rounded-full"
                        }), /*#__PURE__*/jsx_runtime.jsx("a", {
                          className: "font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter",
                          children: "Sara Mitchell"
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "mt-3 flex items-center justify-between",
                        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                          className: "flex items-center",
                          children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                            src: "/images/icons/star.svg",
                            alt: "...",
                            className: "w-6 h-6"
                          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                            className: "ml-2 font-semibold text-secondary_ink_lighter text-md",
                            children: ["5.0", /*#__PURE__*/jsx_runtime.jsx("span", {
                              className: "font-normal ml-1",
                              children: "(25)"
                            })]
                          })]
                        }), /*#__PURE__*/jsx_runtime.jsx("span", {
                          className: `text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${(index_module_default()).price} text-white`,
                          children: "$5000+"
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest",
                        children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                          className: "text-xs text-secondary",
                          children: "40% Affiliate Commission"
                        }), /*#__PURE__*/jsx_runtime.jsx("a", {
                          href: "",
                          className: "bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10",
                          children: "Become Affiliate"
                        })]
                      })]
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: `shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${(index_module_default()).card}`,
                    children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                      src: "/images/book-small.png",
                      alt: "...",
                      className: "w-[24rem] h-[20rem] object-cover"
                    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      className: "p-5 rounded-b",
                      children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                        className: "text-lg text-secondary_sky_dark font-normal mb-1",
                        children: "Books"
                      }), /*#__PURE__*/jsx_runtime.jsx("h4", {
                        className: "text-2xl text-secondary font-medium mb-3",
                        children: "Emotional Intelligence"
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center",
                        children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                          src: "./images/author.png",
                          alt: "...",
                          className: "h-9 w-9 rounded-full"
                        }), /*#__PURE__*/jsx_runtime.jsx("a", {
                          className: "font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter",
                          children: "Sara Mitchell"
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "mt-3 flex items-center justify-between",
                        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                          className: "flex items-center",
                          children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                            src: "/images/icons/star.svg",
                            alt: "...",
                            className: "w-6 h-6"
                          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                            className: "ml-2 font-semibold text-secondary_ink_lighter text-md",
                            children: ["5.0", /*#__PURE__*/jsx_runtime.jsx("span", {
                              className: "font-normal ml-1",
                              children: "(25)"
                            })]
                          })]
                        }), /*#__PURE__*/jsx_runtime.jsx("span", {
                          className: `text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${(index_module_default()).price} text-white`,
                          children: "$5000+"
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest",
                        children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                          className: "text-xs text-secondary",
                          children: "40% Affiliate Commission"
                        }), /*#__PURE__*/jsx_runtime.jsx("a", {
                          href: "",
                          className: "bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10",
                          children: "Become Affiliate"
                        })]
                      })]
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    className: `shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${(index_module_default()).card}`,
                    children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                      src: "/images/book-small.png",
                      alt: "...",
                      className: "w-[24rem] h-[20rem] object-cover"
                    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      className: "p-5 rounded-b",
                      children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                        className: "text-lg text-secondary_sky_dark font-normal mb-1",
                        children: "Books"
                      }), /*#__PURE__*/jsx_runtime.jsx("h4", {
                        className: "text-2xl text-secondary font-medium mb-3",
                        children: "Emotional Intelligence"
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center",
                        children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                          src: "./images/author.png",
                          alt: "...",
                          className: "h-9 w-9 rounded-full"
                        }), /*#__PURE__*/jsx_runtime.jsx("a", {
                          className: "font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter",
                          children: "Sara Mitchell"
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "mt-3 flex items-center justify-between",
                        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                          className: "flex items-center",
                          children: [/*#__PURE__*/jsx_runtime.jsx("img", {
                            src: "/images/icons/star.svg",
                            alt: "...",
                            className: "w-6 h-6"
                          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                            className: "ml-2 font-semibold text-secondary_ink_lighter text-md",
                            children: ["5.0", /*#__PURE__*/jsx_runtime.jsx("span", {
                              className: "font-normal ml-1",
                              children: "(25)"
                            })]
                          })]
                        }), /*#__PURE__*/jsx_runtime.jsx("span", {
                          className: `text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${(index_module_default()).price} text-white`,
                          children: "$5000+"
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                        className: "rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest",
                        children: [/*#__PURE__*/jsx_runtime.jsx("p", {
                          className: "text-xs text-secondary",
                          children: "40% Affiliate Commission"
                        }), /*#__PURE__*/jsx_runtime.jsx("a", {
                          href: "",
                          className: "bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10",
                          children: "Become Affiliate"
                        })]
                      })]
                    })]
                  })]
                })
              })
            })
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime.jsx(MainFooter/* default */.Z, {})]
  });
}
const getServerSideProps = async context => {
  const queryClient = new lib.QueryClient();
  await queryClient.prefetchQuery("products", api_calls_getAllProducts);
  return {
    props: {
      dehydratedState: (0,lib.dehydrate)(queryClient)
    }
  };
};

/***/ }),

/***/ 98981:
/***/ ((module) => {

// Exports
module.exports = {
	"price": "discover_price__bnF59",
	"cards": "discover_cards__WxVyZ",
	"card": "discover_card__I7I30",
	"product-cards": "discover_product-cards__9bYMc",
	"container": "discover_container__vlapo"
};


/***/ }),

/***/ 76906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

      const compMod = __webpack_require__(96772)

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
        page: "/discover",
        buildId: "BSA9Rb9mbo87qdYVME8rG",
        escapedBuildId: "BSA9Rb9mbo87qdYVME8rG",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"fca7b89aae6bfcf850a4f144016a594f",previewModeSigningKey:"720cce7290ca2ab624c9c5ae4042230642eb249c42e9e4cd65b84bb3969df310",previewModeEncryptionKey:"62fd0a22b7ab719a72ae8b8e9ce6f32d2a2cd799ba1eaf8a5d9257864b366151"}
      })
      
    

/***/ }),

/***/ 1014:
/***/ ((module) => {

"use strict";
module.exports = require("critters");

/***/ }),

/***/ 2186:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");

/***/ }),

/***/ 39491:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 14300:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 22037:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 85477:
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ 63477:
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ 12781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 71576:
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 76224:
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 57310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8349,639,1664,5675,1041,9589,5745,2777,1002], () => (__webpack_exec__(76906)));
module.exports = __webpack_exports__;

})();