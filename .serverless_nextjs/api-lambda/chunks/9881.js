exports.id = 9881;
exports.ids = [9881];
exports.modules = {

/***/ 67426:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:!0}));var e=function(t){if("undefined"==typeof document)return 0;if(document.body&&(!document.readyState||"loading"!==document.readyState)){if(!0!==t&&"number"==typeof e.__cache)return e.__cache;var o=document.createElement("div"),d=o.style;d.display="block",d.position="absolute",d.width="100px",d.height="100px",d.left="-999px",d.top="-999px",d.overflow="scroll",document.body.insertBefore(o,null);var r=o.clientWidth;if(0!==r)return e.__cache=100-r,document.body.removeChild(o),e.__cache;document.body.removeChild(o)}};exports.scrollbarWidth=e;


/***/ }),

/***/ 38252:
/***/ ((module) => {

"use strict";


// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        continue;
      }

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ 99376:
/***/ ((__unused_webpack_module, exports) => {

var keyList = Object.keys;

exports.equal = function equal (a, b) {
  if (a === b) return true;
  if (!(a instanceof Object) || !(b instanceof Object)) return false;

  var keys = keyList(a);
  var length = keys.length;

  for (var i = 0; i < length; i++)
    if (!(keys[i] in b)) return false;

  for (var i = 0; i < length; i++)
    if (a[keys[i]] !== b[keys[i]]) return false;

  return length === keyList(b).length;
};


/***/ }),

/***/ 36808:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ 97142:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.addon = function (renderer) {
    // CSSOM support only browser environment.
    if (!renderer.client) return;

    if (false) {}

    // Style sheet for media queries.
    document.head.appendChild(renderer.msh = document.createElement('style'));

    renderer.createRule = function (selector, prelude) {
        var rawCss = selector + '{}';
        if (prelude) rawCss = prelude + '{' + rawCss + '}';
        var sheet = prelude ? renderer.msh.sheet : renderer.sh.sheet;
        var index = sheet.insertRule(rawCss, sheet.cssRules.length);
        var rule = (sheet.cssRules || sheet.rules)[index];

        // Keep track of `index` where rule was inserted in the sheet. This is
        // needed for rule deletion.
        rule.index = index;

        if (prelude) {
            // If rule has media query (it has prelude), move style (CSSStyleDeclaration)
            // object to the "top" to normalize it with a rule without the media
            // query, so that both rules have `.style` property available.
            var selectorRule = (rule.cssRules || rule.rules)[0];
            rule.style = selectorRule.style;
            rule.styleMap = selectorRule.styleMap;
        }

        return rule;
    };
};


/***/ }),

/***/ 52099:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var removeRule = (__webpack_require__(39662)/* .removeRule */ .D);

exports.addon = function (renderer) {
    // VCSSOM support only browser environment.
    if (!renderer.client) return;

    if (false) {}

    var kebab = renderer.kebab;

    function VRule (selector, prelude) {
        this.rule = renderer.createRule(selector, prelude);
        this.decl = {};
    }
    VRule.prototype.diff = function (newDecl) {
        var oldDecl = this.decl;
        var style = this.rule.style;
        var property;
        for (property in oldDecl)
            if (newDecl[property] === undefined)
                style.removeProperty(property);
        for (property in newDecl)
            if (newDecl[property] !== oldDecl[property])
                style.setProperty(kebab(property), newDecl[property]);
        this.decl = newDecl;
    };
    VRule.prototype.del = function () {
        removeRule(this.rule);
    };

    function VSheet () {
        /**
         * {
         *   '<at-rule-prelude>': {
         *     '<selector>': {
         *       color: 'red
         *     }
         *   }
         * }
         */
        this.tree = {};
    }
    VSheet.prototype.diff = function (newTree) {
        var oldTree = this.tree;

        // Remove media queries not present in new tree.
        for (var prelude in oldTree) {
            if (newTree[prelude] === undefined) {
                var rules = oldTree[prelude];
                for (var selector in rules)
                    rules[selector].del();
            }
        }

        for (var prelude in newTree) {
            if (oldTree[prelude] === undefined) {
                // Whole media query is new.
                for (var selector in newTree[prelude]) {
                    var rule = new VRule(selector, prelude);
                    rule.diff(newTree[prelude][selector]);
                    newTree[prelude][selector] = rule;
                }
            } else {
                // Old tree already has rules with this media query.
                var oldRules = oldTree[prelude];
                var newRules = newTree[prelude];

                // Remove rules not present in new tree.
                for (var selector in oldRules)
                    if (!newRules[selector])
                        oldRules[selector].del();

                // Apply new rules.
                for (var selector in newRules) {
                    var rule = oldRules[selector];
                    if (rule) {
                        rule.diff(newRules[selector]);
                        newRules[selector] = rule;
                    } else {
                        rule = new VRule(selector, prelude);
                        rule.diff(newRules[selector]);
                        newRules[selector] = rule;
                    }
                }
            }
        }

        this.tree = newTree;
    };

    renderer.VRule = VRule;
    renderer.VSheet = VSheet;
};


/***/ }),

/***/ 87749:
/***/ ((__unused_webpack_module, exports) => {

function cssToTree (tree, css, selector, prelude) {
    var declarations = {};
    var hasDeclarations = false;
    var key, value;

    for (key in css) {
        value = css[key];
        if (typeof value !== 'object') {
            hasDeclarations = true;
            declarations[key] = value;
        }
    }

    if (hasDeclarations) {
        if (!tree[prelude]) tree[prelude] = {};
        tree[prelude][selector] = declarations;
    }

    for (key in css) {
        value = css[key];
        if (typeof value === 'object') {
            if (key[0] === '@') {
                cssToTree(tree, value, selector, key);
            } else {
                var hasCurrentSymbol = key.indexOf('&') > -1;
                var selectorParts = selector.split(',');
                if (hasCurrentSymbol) {
                    for (var i = 0; i < selectorParts.length; i++) {
                        selectorParts[i] = key.replace(/&/g, selectorParts[i]);
                    }
                } else {
                    for (var i = 0; i < selectorParts.length; i++) {
                        selectorParts[i] = selectorParts[i] + ' ' + key;
                    }
                }
                cssToTree(tree, value, selectorParts.join(','), prelude);
            }
        }
    }
};

exports.cssToTree = cssToTree;


/***/ }),

/***/ 39662:
/***/ ((__unused_webpack_module, exports) => {

function removeRule (rule) {
    var maxIndex = rule.index;
    var sh = rule.parentStyleSheet;
    var rules = sh.cssRules || sh.rules;
    maxIndex = Math.max(maxIndex, rules.length - 1);
    while (maxIndex >= 0) {
        if (rules[maxIndex] === rule) {
            sh.deleteRule(maxIndex);
            break;
        }
        maxIndex--;
    }
}

exports.D = removeRule;


/***/ }),

/***/ 40818:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


var KEBAB_REGEX = /[A-Z]/g;

var hash = function (str) {
    var h = 5381, i = str.length;

    while (i) h = (h * 33) ^ str.charCodeAt(--i);

    return '_' + (h >>> 0).toString(36);
};

exports.create = function (config) {
    config = config || {};
    var assign = config.assign || Object.assign;
    var client = typeof window === 'object';

    // Check if we are really in browser environment.
    if (false) {}

    var renderer = assign({
        raw: '',
        pfx: '_',
        client: client,
        assign: assign,
        stringify: JSON.stringify,
        kebab: function (prop) {
            return prop.replace(KEBAB_REGEX, '-$&').toLowerCase();
        },
        decl: function (key, value) {
            key = renderer.kebab(key);
            return key + ':' + value + ';';
        },
        hash: function (obj) {
            return hash(renderer.stringify(obj));
        },
        selector: function (parent, selector) {
            return parent + (selector[0] === ':' ? ''  : ' ') + selector;
        },
        putRaw: function (rawCssRule) {
            renderer.raw += rawCssRule;
        }
    }, config);

    if (renderer.client) {
        if (!renderer.sh)
            document.head.appendChild(renderer.sh = document.createElement('style'));

        if (false) {}

        renderer.putRaw = function (rawCssRule) {
            // .insertRule() is faster than .appendChild(), that's why we use it in PROD.
            // But CSS injected using .insertRule() is not displayed in Chrome Devtools,
            // that's why we use .appendChild in DEV.
            if (true) {
                var sheet = renderer.sh.sheet;

                // Unknown pseudo-selectors will throw, this try/catch swallows all errors.
                try {
                    sheet.insertRule(rawCssRule, sheet.cssRules.length);
                // eslint-disable-next-line no-empty
                } catch (error) {}
            } else {}
        };
    }

    renderer.put = function (selector, decls, atrule) {
        var str = '';
        var prop, value;
        var postponed = [];

        for (prop in decls) {
            value = decls[prop];

            if ((value instanceof Object) && !(value instanceof Array)) {
                postponed.push(prop);
            } else {
                if (false) {} else {
                    str += renderer.decl(prop, value, selector, atrule);
                }
            }
        }

        if (str) {
            if (false) {} else {
                str = selector + '{' + str + '}';
            }
            renderer.putRaw(atrule ? atrule + '{' + str + '}' : str);
        }

        for (var i = 0; i < postponed.length; i++) {
            prop = postponed[i];

            if (prop[0] === '@' && prop !== '@font-face') {
                renderer.putAt(selector, decls[prop], prop);
            } else {
                renderer.put(renderer.selector(selector, prop), decls[prop], atrule);
            }
        }
    };

    renderer.putAt = renderer.put;

    return renderer;
};


/***/ }),

/***/ 86718:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(70655);
var wrapInStatefulComponent_1 = tslib_1.__importDefault(__webpack_require__(45503));
var addClassDecoratorSupport = function (Comp) {
    var isSFC = !Comp.prototype;
    return !isSFC ? Comp : wrapInStatefulComponent_1.default(Comp);
};
exports["default"] = addClassDecoratorSupport;
//# sourceMappingURL=addClassDecoratorSupport.js.map

/***/ }),

/***/ 27162:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.divWrapper = void 0;
var tslib_1 = __webpack_require__(70655);
var React = tslib_1.__importStar(__webpack_require__(67294));
var addClassDecoratorSupport_1 = tslib_1.__importDefault(__webpack_require__(86718));
var h = React.createElement;
var noWrap = function (Comp, propName, props, state) {
    var _a;
    return h(Comp, propName ? tslib_1.__assign((_a = {}, _a[propName] = state, _a), props) : tslib_1.__assign(tslib_1.__assign({}, state), props));
};
exports.divWrapper = function (Comp, propName, props, state) {
    return h('div', null, noWrap(Comp, propName, props, state));
};
var createEnhancer = function (Facc, prop, wrapper) {
    if (wrapper === void 0) { wrapper = noWrap; }
    var enhancer = function (Comp, propName, faccProps) {
        if (propName === void 0) { propName = prop; }
        if (faccProps === void 0) { faccProps = null; }
        var isClassDecoratorMethodCall = typeof Comp === 'string';
        if (isClassDecoratorMethodCall) {
            return function (Klass) { return enhancer(Klass, Comp || prop, propName); };
        }
        var Enhanced = function (props) {
            return h(Facc, faccProps, function (state) { return wrapper(Comp, propName, props, state); });
        };
        if (false) {}
        return isClassDecoratorMethodCall ? addClassDecoratorSupport_1.default(Enhanced) : Enhanced;
    };
    return enhancer;
};
exports["default"] = createEnhancer;
//# sourceMappingURL=createEnhancer.js.map

/***/ }),

/***/ 3:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(70655);
var render_1 = tslib_1.__importDefault(__webpack_require__(95364));
var defaultMapPropsToArgs = function (props) { return [props]; };
var hookToRenderProp = function (hook, mapPropsToArgs) {
    if (mapPropsToArgs === void 0) { mapPropsToArgs = defaultMapPropsToArgs; }
    return function (props) { return render_1.default(props, hook.apply(void 0, mapPropsToArgs(props))); };
};
exports["default"] = hookToRenderProp;
//# sourceMappingURL=hookToRenderProp.js.map

/***/ }),

/***/ 96260:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hookToRenderProp = exports.createEnhancer = exports.render = void 0;
var tslib_1 = __webpack_require__(70655);
var render_1 = tslib_1.__importDefault(__webpack_require__(95364));
exports.render = render_1.default;
var createEnhancer_1 = tslib_1.__importDefault(__webpack_require__(27162));
exports.createEnhancer = createEnhancer_1.default;
var hookToRenderProp_1 = tslib_1.__importDefault(__webpack_require__(3));
exports.hookToRenderProp = hookToRenderProp_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 95364:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(70655);
var react_1 = __webpack_require__(67294);
var isReact16Plus = parseInt(react_1.version.substr(0, react_1.version.indexOf('.'))) > 15;
var isFn = function (fn) { return typeof fn === 'function'; };
var render = function (props, data) {
    var more = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        more[_i - 2] = arguments[_i];
    }
    if (false) { var children_1, render_1; }
    var render = props.render, _a = props.children, children = _a === void 0 ? render : _a, component = props.component, _b = props.comp, comp = _b === void 0 ? component : _b;
    if (isFn(children))
        return children.apply(void 0, tslib_1.__spreadArrays([data], more));
    if (comp) {
        return react_1.createElement(comp, data);
    }
    if (children instanceof Array)
        return isReact16Plus ? children : react_1.createElement.apply(void 0, tslib_1.__spreadArrays(['div', null], children));
    if (children && (children instanceof Object)) {
        if (false) {}
        else {
            if (typeof children.type === 'string')
                return children;
            return react_1.cloneElement(children, Object.assign({}, children.props, data));
        }
    }
    return children || null;
};
exports["default"] = render;
//# sourceMappingURL=render.js.map

/***/ }),

/***/ 45503:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(70655);
var React = tslib_1.__importStar(__webpack_require__(67294));
var wrapInStatefulComponent = function (Comp) {
    var Decorated = (function (_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.render = function () {
            return Comp(this.props, this.context);
        };
        return class_1;
    }(React.Component));
    if (false) {}
    return Decorated;
};
exports["default"] = wrapInStatefulComponent;
//# sourceMappingURL=wrapInStatefulComponent.js.map

/***/ }),

/***/ 1558:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var util_1 = __webpack_require__(88387);
var createBreakpoint = function (breakpoints) {
    if (breakpoints === void 0) { breakpoints = { laptopL: 1440, laptop: 1024, tablet: 768 }; }
    return function () {
        var _a = react_1.useState(util_1.isBrowser ? window.innerWidth : 0), screen = _a[0], setScreen = _a[1];
        react_1.useEffect(function () {
            var setSideScreen = function () {
                setScreen(window.innerWidth);
            };
            setSideScreen();
            util_1.on(window, 'resize', setSideScreen);
            return function () {
                util_1.off(window, 'resize', setSideScreen);
            };
        });
        var sortedBreakpoints = react_1.useMemo(function () { return Object.entries(breakpoints).sort(function (a, b) { return (a[1] >= b[1] ? 1 : -1); }); }, [breakpoints]);
        var result = sortedBreakpoints.reduce(function (acc, _a) {
            var name = _a[0], width = _a[1];
            if (screen >= width) {
                return name;
            }
            else {
                return acc;
            }
        }, sortedBreakpoints[0][0]);
        return result;
    };
};
exports["default"] = createBreakpoint;


/***/ }),

/***/ 51493:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createGlobalState = void 0;
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var hookState_1 = __webpack_require__(88850);
var useEffectOnce_1 = tslib_1.__importDefault(__webpack_require__(16713));
var useIsomorphicLayoutEffect_1 = tslib_1.__importDefault(__webpack_require__(69864));
function createGlobalState(initialState) {
    var store = {
        state: initialState instanceof Function ? initialState() : initialState,
        setState: function (nextState) {
            store.state = hookState_1.resolveHookState(nextState, store.state);
            store.setters.forEach(function (setter) { return setter(store.state); });
        },
        setters: [],
    };
    return function () {
        var _a = react_1.useState(store.state), globalState = _a[0], stateSetter = _a[1];
        useEffectOnce_1.default(function () { return function () {
            store.setters = store.setters.filter(function (setter) { return setter !== stateSetter; });
        }; });
        useIsomorphicLayoutEffect_1.default(function () {
            if (!store.setters.includes(stateSetter)) {
                store.setters.push(stateSetter);
            }
        });
        return [globalState, store.setState];
    };
}
exports.createGlobalState = createGlobalState;
exports["default"] = createGlobalState;


/***/ }),

/***/ 77499:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var React = tslib_1.__importStar(__webpack_require__(67294));
var react_1 = __webpack_require__(67294);
var useSetState_1 = tslib_1.__importDefault(__webpack_require__(14920));
var parseTimeRanges_1 = tslib_1.__importDefault(__webpack_require__(21030));
function createHTMLMediaHook(tag) {
    return function (elOrProps) {
        var element;
        var props;
        if (React.isValidElement(elOrProps)) {
            element = elOrProps;
            props = element.props;
        }
        else {
            props = elOrProps;
        }
        var _a = useSetState_1.default({
            buffered: [],
            time: 0,
            duration: 0,
            paused: true,
            muted: false,
            volume: 1,
            playing: false,
        }), state = _a[0], setState = _a[1];
        var ref = react_1.useRef(null);
        var wrapEvent = function (userEvent, proxyEvent) {
            return function (event) {
                try {
                    proxyEvent && proxyEvent(event);
                }
                finally {
                    userEvent && userEvent(event);
                }
            };
        };
        var onPlay = function () { return setState({ paused: false }); };
        var onPlaying = function () { return setState({ playing: true }); };
        var onWaiting = function () { return setState({ playing: false }); };
        var onPause = function () { return setState({ paused: true, playing: false }); };
        var onVolumeChange = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            setState({
                muted: el.muted,
                volume: el.volume,
            });
        };
        var onDurationChange = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            var duration = el.duration, buffered = el.buffered;
            setState({
                duration: duration,
                buffered: parseTimeRanges_1.default(buffered),
            });
        };
        var onTimeUpdate = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            setState({ time: el.currentTime });
        };
        var onProgress = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            setState({ buffered: parseTimeRanges_1.default(el.buffered) });
        };
        if (element) {
            element = React.cloneElement(element, tslib_1.__assign(tslib_1.__assign({ controls: false }, props), { ref: ref, onPlay: wrapEvent(props.onPlay, onPlay), onPlaying: wrapEvent(props.onPlaying, onPlaying), onWaiting: wrapEvent(props.onWaiting, onWaiting), onPause: wrapEvent(props.onPause, onPause), onVolumeChange: wrapEvent(props.onVolumeChange, onVolumeChange), onDurationChange: wrapEvent(props.onDurationChange, onDurationChange), onTimeUpdate: wrapEvent(props.onTimeUpdate, onTimeUpdate), onProgress: wrapEvent(props.onProgress, onProgress) }));
        }
        else {
            element = React.createElement(tag, tslib_1.__assign(tslib_1.__assign({ controls: false }, props), { ref: ref, onPlay: wrapEvent(props.onPlay, onPlay), onPlaying: wrapEvent(props.onPlaying, onPlaying), onWaiting: wrapEvent(props.onWaiting, onWaiting), onPause: wrapEvent(props.onPause, onPause), onVolumeChange: wrapEvent(props.onVolumeChange, onVolumeChange), onDurationChange: wrapEvent(props.onDurationChange, onDurationChange), onTimeUpdate: wrapEvent(props.onTimeUpdate, onTimeUpdate), onProgress: wrapEvent(props.onProgress, onProgress) })); // TODO: fix this typing.
        }
        // Some browsers return `Promise` on `.play()` and may throw errors
        // if one tries to execute another `.play()` or `.pause()` while that
        // promise is resolving. So we prevent that with this lock.
        // See: https://bugs.chromium.org/p/chromium/issues/detail?id=593273
        var lockPlay = false;
        var controls = {
            play: function () {
                var el = ref.current;
                if (!el) {
                    return undefined;
                }
                if (!lockPlay) {
                    var promise = el.play();
                    var isPromise = typeof promise === 'object';
                    if (isPromise) {
                        lockPlay = true;
                        var resetLock = function () {
                            lockPlay = false;
                        };
                        promise.then(resetLock, resetLock);
                    }
                    return promise;
                }
                return undefined;
            },
            pause: function () {
                var el = ref.current;
                if (el && !lockPlay) {
                    return el.pause();
                }
            },
            seek: function (time) {
                var el = ref.current;
                if (!el || state.duration === undefined) {
                    return;
                }
                time = Math.min(state.duration, Math.max(0, time));
                el.currentTime = time;
            },
            volume: function (volume) {
                var el = ref.current;
                if (!el) {
                    return;
                }
                volume = Math.min(1, Math.max(0, volume));
                el.volume = volume;
                setState({ volume: volume });
            },
            mute: function () {
                var el = ref.current;
                if (!el) {
                    return;
                }
                el.muted = true;
            },
            unmute: function () {
                var el = ref.current;
                if (!el) {
                    return;
                }
                el.muted = false;
            },
        };
        react_1.useEffect(function () {
            var el = ref.current;
            if (!el) {
                if (false) {}
                return;
            }
            setState({
                volume: el.volume,
                muted: el.muted,
                paused: el.paused,
            });
            // Start media, if autoPlay requested.
            if (props.autoPlay && el.paused) {
                controls.play();
            }
        }, [props.src]);
        return [element, state, controls, ref];
    };
}
exports["default"] = createHTMLMediaHook;


/***/ }),

/***/ 71215:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var createMemo = function (fn) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return react_1.useMemo(function () { return fn.apply(void 0, args); }, args);
    };
};
exports["default"] = createMemo;


/***/ }),

/***/ 18740:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var useUpdateEffect_1 = tslib_1.__importDefault(__webpack_require__(21794));
function composeMiddleware(chain) {
    return function (context, dispatch) {
        return chain.reduceRight(function (res, middleware) {
            return middleware(context)(res);
        }, dispatch);
    };
}
var createReducer = function () {
    var middlewares = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        middlewares[_i] = arguments[_i];
    }
    var composedMiddleware = composeMiddleware(middlewares);
    return function (reducer, initialState, initializer) {
        if (initializer === void 0) { initializer = function (value) { return value; }; }
        var ref = react_1.useRef(initializer(initialState));
        var _a = react_1.useState(ref.current), setState = _a[1];
        var dispatch = react_1.useCallback(function (action) {
            ref.current = reducer(ref.current, action);
            setState(ref.current);
            return action;
        }, [reducer]);
        var dispatchRef = react_1.useRef(composedMiddleware({
            getState: function () { return ref.current; },
            dispatch: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return dispatchRef.current.apply(dispatchRef, args);
            },
        }, dispatch));
        useUpdateEffect_1.default(function () {
            dispatchRef.current = composedMiddleware({
                getState: function () { return ref.current; },
                dispatch: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return dispatchRef.current.apply(dispatchRef, args);
                },
            }, dispatch);
        }, [dispatch]);
        return [ref.current, dispatchRef.current];
    };
};
exports["default"] = createReducer;


/***/ }),

/***/ 56707:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var createReducerContext = function (reducer, defaultInitialState) {
    var context = react_1.createContext(undefined);
    var providerFactory = function (props, children) { return react_1.createElement(context.Provider, props, children); };
    var ReducerProvider = function (_a) {
        var children = _a.children, initialState = _a.initialState;
        var state = react_1.useReducer(reducer, initialState !== undefined ? initialState : defaultInitialState);
        return providerFactory({ value: state }, children);
    };
    var useReducerContext = function () {
        var state = react_1.useContext(context);
        if (state == null) {
            throw new Error("useReducerContext must be used inside a ReducerProvider.");
        }
        return state;
    };
    return [useReducerContext, ReducerProvider, context];
};
exports["default"] = createReducerContext;


/***/ }),

/***/ 97771:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var createStateContext = function (defaultInitialValue) {
    var context = react_1.createContext(undefined);
    var providerFactory = function (props, children) { return react_1.createElement(context.Provider, props, children); };
    var StateProvider = function (_a) {
        var children = _a.children, initialValue = _a.initialValue;
        var state = react_1.useState(initialValue !== undefined ? initialValue : defaultInitialValue);
        return providerFactory({ value: state }, children);
    };
    var useStateContext = function () {
        var state = react_1.useContext(context);
        if (state == null) {
            throw new Error("useStateContext must be used inside a StateProvider.");
        }
        return state;
    };
    return [useStateContext, StateProvider, context];
};
exports["default"] = createStateContext;


/***/ }),

/***/ 29881:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useLogger = exports.useLockBodyScroll = exports.useLocation = exports.useLocalStorage = exports.useList = exports.useLifecycles = exports.useLatest = exports.useKeyPressEvent = exports.useKeyPress = exports.createBreakpoint = exports.useKey = exports.useIsomorphicLayoutEffect = exports.useInterval = exports.useIntersection = exports.useIdle = exports.useHoverDirty = exports.useHover = exports.useHarmonicIntervalFn = exports.useGetSetState = exports.useGetSet = exports.useGeolocation = exports.useFullscreen = exports.useFavicon = exports.useError = exports.useEvent = exports.ensuredForwardRef = exports.useEnsuredForwardedRef = exports.useEffectOnce = exports.useDropArea = exports.useDrop = exports.useDefault = exports.useDeepCompareEffect = exports.useDebounce = exports.useCustomCompareEffect = exports.useCss = exports.useCounter = exports.useCopyToClipboard = exports.useCookie = exports.useClickAway = exports.useBoolean = exports.useBeforeUnload = exports.useBattery = exports.useAudio = exports.useAsyncRetry = exports.useAsyncFn = exports.useAsync = exports.createStateContext = exports.createReducer = exports.createReducerContext = exports.createMemo = void 0;
exports.useUpsert = exports.useUpdateEffect = exports.useUpdate = exports.useUnmountPromise = exports.useUnmount = exports.useTween = exports.useToggle = exports.useTitle = exports.useTimeoutFn = exports.useTimeout = exports.useThrottleFn = exports.useThrottle = exports.useStateList = exports.useStateWithHistory = exports.useStartTyping = exports.useSpeech = exports.useSlider = exports.useSize = exports.useShallowCompareEffect = exports.useSetState = exports.useSessionStorage = exports.useScrolling = exports.useScroll = exports.useScratch = exports.useSearchParam = exports.useRafState = exports.useRafLoop = exports.useRaf = exports.useQueue = exports.usePromise = exports.usePreviousDistinct = exports.usePrevious = exports.usePermission = exports.usePageLeave = exports.useOrientation = exports.useObservable = exports.useNumber = exports.useNetworkState = exports.useMouseWheel = exports.useMouseHovered = exports.useMouse = exports.useMountedState = exports.useMount = exports.useMotion = exports.useMethods = exports.useMediatedState = exports.useMediaDevices = exports.useMedia = exports.useMap = exports.useLongPress = void 0;
exports.useHash = exports.createGlobalState = exports.useSet = exports.useFirstMountState = exports.useRendersCount = exports.useMeasure = exports.useWindowSize = exports.useWindowScroll = exports.useMultiStateValidator = exports.useScrollbarWidth = exports.useStateValidator = exports.useVideo = exports.useVibrate = void 0;
var createMemo_1 = __webpack_require__(71215);
Object.defineProperty(exports, "createMemo", ({ enumerable: true, get: function () { return __importDefault(createMemo_1).default; } }));
var createReducerContext_1 = __webpack_require__(56707);
Object.defineProperty(exports, "createReducerContext", ({ enumerable: true, get: function () { return __importDefault(createReducerContext_1).default; } }));
var createReducer_1 = __webpack_require__(18740);
Object.defineProperty(exports, "createReducer", ({ enumerable: true, get: function () { return __importDefault(createReducer_1).default; } }));
var createStateContext_1 = __webpack_require__(97771);
Object.defineProperty(exports, "createStateContext", ({ enumerable: true, get: function () { return __importDefault(createStateContext_1).default; } }));
var useAsync_1 = __webpack_require__(94172);
Object.defineProperty(exports, "useAsync", ({ enumerable: true, get: function () { return __importDefault(useAsync_1).default; } }));
var useAsyncFn_1 = __webpack_require__(55689);
Object.defineProperty(exports, "useAsyncFn", ({ enumerable: true, get: function () { return __importDefault(useAsyncFn_1).default; } }));
var useAsyncRetry_1 = __webpack_require__(56530);
Object.defineProperty(exports, "useAsyncRetry", ({ enumerable: true, get: function () { return __importDefault(useAsyncRetry_1).default; } }));
var useAudio_1 = __webpack_require__(26818);
Object.defineProperty(exports, "useAudio", ({ enumerable: true, get: function () { return __importDefault(useAudio_1).default; } }));
var useBattery_1 = __webpack_require__(62036);
Object.defineProperty(exports, "useBattery", ({ enumerable: true, get: function () { return __importDefault(useBattery_1).default; } }));
var useBeforeUnload_1 = __webpack_require__(90726);
Object.defineProperty(exports, "useBeforeUnload", ({ enumerable: true, get: function () { return __importDefault(useBeforeUnload_1).default; } }));
var useBoolean_1 = __webpack_require__(23193);
Object.defineProperty(exports, "useBoolean", ({ enumerable: true, get: function () { return __importDefault(useBoolean_1).default; } }));
var useClickAway_1 = __webpack_require__(64638);
Object.defineProperty(exports, "useClickAway", ({ enumerable: true, get: function () { return __importDefault(useClickAway_1).default; } }));
var useCookie_1 = __webpack_require__(63009);
Object.defineProperty(exports, "useCookie", ({ enumerable: true, get: function () { return __importDefault(useCookie_1).default; } }));
var useCopyToClipboard_1 = __webpack_require__(85765);
Object.defineProperty(exports, "useCopyToClipboard", ({ enumerable: true, get: function () { return __importDefault(useCopyToClipboard_1).default; } }));
var useCounter_1 = __webpack_require__(5627);
Object.defineProperty(exports, "useCounter", ({ enumerable: true, get: function () { return __importDefault(useCounter_1).default; } }));
var useCss_1 = __webpack_require__(88132);
Object.defineProperty(exports, "useCss", ({ enumerable: true, get: function () { return __importDefault(useCss_1).default; } }));
var useCustomCompareEffect_1 = __webpack_require__(49909);
Object.defineProperty(exports, "useCustomCompareEffect", ({ enumerable: true, get: function () { return __importDefault(useCustomCompareEffect_1).default; } }));
var useDebounce_1 = __webpack_require__(21337);
Object.defineProperty(exports, "useDebounce", ({ enumerable: true, get: function () { return __importDefault(useDebounce_1).default; } }));
var useDeepCompareEffect_1 = __webpack_require__(96705);
Object.defineProperty(exports, "useDeepCompareEffect", ({ enumerable: true, get: function () { return __importDefault(useDeepCompareEffect_1).default; } }));
var useDefault_1 = __webpack_require__(74324);
Object.defineProperty(exports, "useDefault", ({ enumerable: true, get: function () { return __importDefault(useDefault_1).default; } }));
var useDrop_1 = __webpack_require__(54107);
Object.defineProperty(exports, "useDrop", ({ enumerable: true, get: function () { return __importDefault(useDrop_1).default; } }));
var useDropArea_1 = __webpack_require__(59247);
Object.defineProperty(exports, "useDropArea", ({ enumerable: true, get: function () { return __importDefault(useDropArea_1).default; } }));
var useEffectOnce_1 = __webpack_require__(16713);
Object.defineProperty(exports, "useEffectOnce", ({ enumerable: true, get: function () { return __importDefault(useEffectOnce_1).default; } }));
var useEnsuredForwardedRef_1 = __webpack_require__(32664);
Object.defineProperty(exports, "useEnsuredForwardedRef", ({ enumerable: true, get: function () { return __importDefault(useEnsuredForwardedRef_1).default; } }));
Object.defineProperty(exports, "ensuredForwardRef", ({ enumerable: true, get: function () { return useEnsuredForwardedRef_1.ensuredForwardRef; } }));
var useEvent_1 = __webpack_require__(73969);
Object.defineProperty(exports, "useEvent", ({ enumerable: true, get: function () { return __importDefault(useEvent_1).default; } }));
var useError_1 = __webpack_require__(52459);
Object.defineProperty(exports, "useError", ({ enumerable: true, get: function () { return __importDefault(useError_1).default; } }));
var useFavicon_1 = __webpack_require__(97256);
Object.defineProperty(exports, "useFavicon", ({ enumerable: true, get: function () { return __importDefault(useFavicon_1).default; } }));
var useFullscreen_1 = __webpack_require__(38134);
Object.defineProperty(exports, "useFullscreen", ({ enumerable: true, get: function () { return __importDefault(useFullscreen_1).default; } }));
var useGeolocation_1 = __webpack_require__(69209);
Object.defineProperty(exports, "useGeolocation", ({ enumerable: true, get: function () { return __importDefault(useGeolocation_1).default; } }));
var useGetSet_1 = __webpack_require__(56710);
Object.defineProperty(exports, "useGetSet", ({ enumerable: true, get: function () { return __importDefault(useGetSet_1).default; } }));
var useGetSetState_1 = __webpack_require__(45864);
Object.defineProperty(exports, "useGetSetState", ({ enumerable: true, get: function () { return __importDefault(useGetSetState_1).default; } }));
var useHarmonicIntervalFn_1 = __webpack_require__(54277);
Object.defineProperty(exports, "useHarmonicIntervalFn", ({ enumerable: true, get: function () { return __importDefault(useHarmonicIntervalFn_1).default; } }));
var useHover_1 = __webpack_require__(23800);
Object.defineProperty(exports, "useHover", ({ enumerable: true, get: function () { return __importDefault(useHover_1).default; } }));
var useHoverDirty_1 = __webpack_require__(26916);
Object.defineProperty(exports, "useHoverDirty", ({ enumerable: true, get: function () { return __importDefault(useHoverDirty_1).default; } }));
var useIdle_1 = __webpack_require__(31476);
Object.defineProperty(exports, "useIdle", ({ enumerable: true, get: function () { return __importDefault(useIdle_1).default; } }));
var useIntersection_1 = __webpack_require__(79702);
Object.defineProperty(exports, "useIntersection", ({ enumerable: true, get: function () { return __importDefault(useIntersection_1).default; } }));
var useInterval_1 = __webpack_require__(14032);
Object.defineProperty(exports, "useInterval", ({ enumerable: true, get: function () { return __importDefault(useInterval_1).default; } }));
var useIsomorphicLayoutEffect_1 = __webpack_require__(69864);
Object.defineProperty(exports, "useIsomorphicLayoutEffect", ({ enumerable: true, get: function () { return __importDefault(useIsomorphicLayoutEffect_1).default; } }));
var useKey_1 = __webpack_require__(52185);
Object.defineProperty(exports, "useKey", ({ enumerable: true, get: function () { return __importDefault(useKey_1).default; } }));
var createBreakpoint_1 = __webpack_require__(1558);
Object.defineProperty(exports, "createBreakpoint", ({ enumerable: true, get: function () { return __importDefault(createBreakpoint_1).default; } }));
// not exported because of peer dependency
// export { default as useKeyboardJs } from './useKeyboardJs';
var useKeyPress_1 = __webpack_require__(78163);
Object.defineProperty(exports, "useKeyPress", ({ enumerable: true, get: function () { return __importDefault(useKeyPress_1).default; } }));
var useKeyPressEvent_1 = __webpack_require__(98114);
Object.defineProperty(exports, "useKeyPressEvent", ({ enumerable: true, get: function () { return __importDefault(useKeyPressEvent_1).default; } }));
var useLatest_1 = __webpack_require__(1974);
Object.defineProperty(exports, "useLatest", ({ enumerable: true, get: function () { return __importDefault(useLatest_1).default; } }));
var useLifecycles_1 = __webpack_require__(38324);
Object.defineProperty(exports, "useLifecycles", ({ enumerable: true, get: function () { return __importDefault(useLifecycles_1).default; } }));
var useList_1 = __webpack_require__(67335);
Object.defineProperty(exports, "useList", ({ enumerable: true, get: function () { return __importDefault(useList_1).default; } }));
var useLocalStorage_1 = __webpack_require__(27539);
Object.defineProperty(exports, "useLocalStorage", ({ enumerable: true, get: function () { return __importDefault(useLocalStorage_1).default; } }));
var useLocation_1 = __webpack_require__(52787);
Object.defineProperty(exports, "useLocation", ({ enumerable: true, get: function () { return __importDefault(useLocation_1).default; } }));
var useLockBodyScroll_1 = __webpack_require__(27502);
Object.defineProperty(exports, "useLockBodyScroll", ({ enumerable: true, get: function () { return __importDefault(useLockBodyScroll_1).default; } }));
var useLogger_1 = __webpack_require__(92624);
Object.defineProperty(exports, "useLogger", ({ enumerable: true, get: function () { return __importDefault(useLogger_1).default; } }));
var useLongPress_1 = __webpack_require__(58823);
Object.defineProperty(exports, "useLongPress", ({ enumerable: true, get: function () { return __importDefault(useLongPress_1).default; } }));
var useMap_1 = __webpack_require__(77539);
Object.defineProperty(exports, "useMap", ({ enumerable: true, get: function () { return __importDefault(useMap_1).default; } }));
var useMedia_1 = __webpack_require__(99501);
Object.defineProperty(exports, "useMedia", ({ enumerable: true, get: function () { return __importDefault(useMedia_1).default; } }));
var useMediaDevices_1 = __webpack_require__(12530);
Object.defineProperty(exports, "useMediaDevices", ({ enumerable: true, get: function () { return __importDefault(useMediaDevices_1).default; } }));
var useMediatedState_1 = __webpack_require__(41231);
Object.defineProperty(exports, "useMediatedState", ({ enumerable: true, get: function () { return useMediatedState_1.useMediatedState; } }));
var useMethods_1 = __webpack_require__(53486);
Object.defineProperty(exports, "useMethods", ({ enumerable: true, get: function () { return __importDefault(useMethods_1).default; } }));
var useMotion_1 = __webpack_require__(83966);
Object.defineProperty(exports, "useMotion", ({ enumerable: true, get: function () { return __importDefault(useMotion_1).default; } }));
var useMount_1 = __webpack_require__(70902);
Object.defineProperty(exports, "useMount", ({ enumerable: true, get: function () { return __importDefault(useMount_1).default; } }));
var useMountedState_1 = __webpack_require__(95929);
Object.defineProperty(exports, "useMountedState", ({ enumerable: true, get: function () { return __importDefault(useMountedState_1).default; } }));
var useMouse_1 = __webpack_require__(598);
Object.defineProperty(exports, "useMouse", ({ enumerable: true, get: function () { return __importDefault(useMouse_1).default; } }));
var useMouseHovered_1 = __webpack_require__(14828);
Object.defineProperty(exports, "useMouseHovered", ({ enumerable: true, get: function () { return __importDefault(useMouseHovered_1).default; } }));
var useMouseWheel_1 = __webpack_require__(54233);
Object.defineProperty(exports, "useMouseWheel", ({ enumerable: true, get: function () { return __importDefault(useMouseWheel_1).default; } }));
var useNetworkState_1 = __webpack_require__(87843);
Object.defineProperty(exports, "useNetworkState", ({ enumerable: true, get: function () { return __importDefault(useNetworkState_1).default; } }));
var useNumber_1 = __webpack_require__(36187);
Object.defineProperty(exports, "useNumber", ({ enumerable: true, get: function () { return __importDefault(useNumber_1).default; } }));
var useObservable_1 = __webpack_require__(78504);
Object.defineProperty(exports, "useObservable", ({ enumerable: true, get: function () { return __importDefault(useObservable_1).default; } }));
var useOrientation_1 = __webpack_require__(76763);
Object.defineProperty(exports, "useOrientation", ({ enumerable: true, get: function () { return __importDefault(useOrientation_1).default; } }));
var usePageLeave_1 = __webpack_require__(80725);
Object.defineProperty(exports, "usePageLeave", ({ enumerable: true, get: function () { return __importDefault(usePageLeave_1).default; } }));
var usePermission_1 = __webpack_require__(57401);
Object.defineProperty(exports, "usePermission", ({ enumerable: true, get: function () { return __importDefault(usePermission_1).default; } }));
var usePrevious_1 = __webpack_require__(90832);
Object.defineProperty(exports, "usePrevious", ({ enumerable: true, get: function () { return __importDefault(usePrevious_1).default; } }));
var usePreviousDistinct_1 = __webpack_require__(78382);
Object.defineProperty(exports, "usePreviousDistinct", ({ enumerable: true, get: function () { return __importDefault(usePreviousDistinct_1).default; } }));
var usePromise_1 = __webpack_require__(88190);
Object.defineProperty(exports, "usePromise", ({ enumerable: true, get: function () { return __importDefault(usePromise_1).default; } }));
var useQueue_1 = __webpack_require__(43389);
Object.defineProperty(exports, "useQueue", ({ enumerable: true, get: function () { return __importDefault(useQueue_1).default; } }));
var useRaf_1 = __webpack_require__(46082);
Object.defineProperty(exports, "useRaf", ({ enumerable: true, get: function () { return __importDefault(useRaf_1).default; } }));
var useRafLoop_1 = __webpack_require__(96740);
Object.defineProperty(exports, "useRafLoop", ({ enumerable: true, get: function () { return __importDefault(useRafLoop_1).default; } }));
var useRafState_1 = __webpack_require__(79050);
Object.defineProperty(exports, "useRafState", ({ enumerable: true, get: function () { return __importDefault(useRafState_1).default; } }));
var useSearchParam_1 = __webpack_require__(50587);
Object.defineProperty(exports, "useSearchParam", ({ enumerable: true, get: function () { return __importDefault(useSearchParam_1).default; } }));
var useScratch_1 = __webpack_require__(49423);
Object.defineProperty(exports, "useScratch", ({ enumerable: true, get: function () { return __importDefault(useScratch_1).default; } }));
var useScroll_1 = __webpack_require__(84266);
Object.defineProperty(exports, "useScroll", ({ enumerable: true, get: function () { return __importDefault(useScroll_1).default; } }));
var useScrolling_1 = __webpack_require__(93182);
Object.defineProperty(exports, "useScrolling", ({ enumerable: true, get: function () { return __importDefault(useScrolling_1).default; } }));
var useSessionStorage_1 = __webpack_require__(91142);
Object.defineProperty(exports, "useSessionStorage", ({ enumerable: true, get: function () { return __importDefault(useSessionStorage_1).default; } }));
var useSetState_1 = __webpack_require__(14920);
Object.defineProperty(exports, "useSetState", ({ enumerable: true, get: function () { return __importDefault(useSetState_1).default; } }));
var useShallowCompareEffect_1 = __webpack_require__(15478);
Object.defineProperty(exports, "useShallowCompareEffect", ({ enumerable: true, get: function () { return __importDefault(useShallowCompareEffect_1).default; } }));
var useSize_1 = __webpack_require__(30317);
Object.defineProperty(exports, "useSize", ({ enumerable: true, get: function () { return __importDefault(useSize_1).default; } }));
var useSlider_1 = __webpack_require__(25827);
Object.defineProperty(exports, "useSlider", ({ enumerable: true, get: function () { return __importDefault(useSlider_1).default; } }));
var useSpeech_1 = __webpack_require__(29897);
Object.defineProperty(exports, "useSpeech", ({ enumerable: true, get: function () { return __importDefault(useSpeech_1).default; } }));
// not exported because of peer dependency
// export { default as useSpring } from './useSpring';
var useStartTyping_1 = __webpack_require__(84830);
Object.defineProperty(exports, "useStartTyping", ({ enumerable: true, get: function () { return __importDefault(useStartTyping_1).default; } }));
var useStateWithHistory_1 = __webpack_require__(25520);
Object.defineProperty(exports, "useStateWithHistory", ({ enumerable: true, get: function () { return useStateWithHistory_1.useStateWithHistory; } }));
var useStateList_1 = __webpack_require__(28750);
Object.defineProperty(exports, "useStateList", ({ enumerable: true, get: function () { return __importDefault(useStateList_1).default; } }));
var useThrottle_1 = __webpack_require__(35010);
Object.defineProperty(exports, "useThrottle", ({ enumerable: true, get: function () { return __importDefault(useThrottle_1).default; } }));
var useThrottleFn_1 = __webpack_require__(10936);
Object.defineProperty(exports, "useThrottleFn", ({ enumerable: true, get: function () { return __importDefault(useThrottleFn_1).default; } }));
var useTimeout_1 = __webpack_require__(62530);
Object.defineProperty(exports, "useTimeout", ({ enumerable: true, get: function () { return __importDefault(useTimeout_1).default; } }));
var useTimeoutFn_1 = __webpack_require__(82370);
Object.defineProperty(exports, "useTimeoutFn", ({ enumerable: true, get: function () { return __importDefault(useTimeoutFn_1).default; } }));
var useTitle_1 = __webpack_require__(14732);
Object.defineProperty(exports, "useTitle", ({ enumerable: true, get: function () { return __importDefault(useTitle_1).default; } }));
var useToggle_1 = __webpack_require__(73809);
Object.defineProperty(exports, "useToggle", ({ enumerable: true, get: function () { return __importDefault(useToggle_1).default; } }));
var useTween_1 = __webpack_require__(56164);
Object.defineProperty(exports, "useTween", ({ enumerable: true, get: function () { return __importDefault(useTween_1).default; } }));
var useUnmount_1 = __webpack_require__(86258);
Object.defineProperty(exports, "useUnmount", ({ enumerable: true, get: function () { return __importDefault(useUnmount_1).default; } }));
var useUnmountPromise_1 = __webpack_require__(69011);
Object.defineProperty(exports, "useUnmountPromise", ({ enumerable: true, get: function () { return __importDefault(useUnmountPromise_1).default; } }));
var useUpdate_1 = __webpack_require__(91213);
Object.defineProperty(exports, "useUpdate", ({ enumerable: true, get: function () { return __importDefault(useUpdate_1).default; } }));
var useUpdateEffect_1 = __webpack_require__(21794);
Object.defineProperty(exports, "useUpdateEffect", ({ enumerable: true, get: function () { return __importDefault(useUpdateEffect_1).default; } }));
var useUpsert_1 = __webpack_require__(7434);
Object.defineProperty(exports, "useUpsert", ({ enumerable: true, get: function () { return __importDefault(useUpsert_1).default; } }));
var useVibrate_1 = __webpack_require__(85165);
Object.defineProperty(exports, "useVibrate", ({ enumerable: true, get: function () { return __importDefault(useVibrate_1).default; } }));
var useVideo_1 = __webpack_require__(42237);
Object.defineProperty(exports, "useVideo", ({ enumerable: true, get: function () { return __importDefault(useVideo_1).default; } }));
var useStateValidator_1 = __webpack_require__(60085);
Object.defineProperty(exports, "useStateValidator", ({ enumerable: true, get: function () { return __importDefault(useStateValidator_1).default; } }));
var useScrollbarWidth_1 = __webpack_require__(48514);
Object.defineProperty(exports, "useScrollbarWidth", ({ enumerable: true, get: function () { return useScrollbarWidth_1.useScrollbarWidth; } }));
var useMultiStateValidator_1 = __webpack_require__(92817);
Object.defineProperty(exports, "useMultiStateValidator", ({ enumerable: true, get: function () { return useMultiStateValidator_1.useMultiStateValidator; } }));
var useWindowScroll_1 = __webpack_require__(13347);
Object.defineProperty(exports, "useWindowScroll", ({ enumerable: true, get: function () { return __importDefault(useWindowScroll_1).default; } }));
var useWindowSize_1 = __webpack_require__(62964);
Object.defineProperty(exports, "useWindowSize", ({ enumerable: true, get: function () { return __importDefault(useWindowSize_1).default; } }));
var useMeasure_1 = __webpack_require__(89414);
Object.defineProperty(exports, "useMeasure", ({ enumerable: true, get: function () { return __importDefault(useMeasure_1).default; } }));
var useRendersCount_1 = __webpack_require__(86788);
Object.defineProperty(exports, "useRendersCount", ({ enumerable: true, get: function () { return useRendersCount_1.useRendersCount; } }));
var useFirstMountState_1 = __webpack_require__(91784);
Object.defineProperty(exports, "useFirstMountState", ({ enumerable: true, get: function () { return useFirstMountState_1.useFirstMountState; } }));
var useSet_1 = __webpack_require__(32259);
Object.defineProperty(exports, "useSet", ({ enumerable: true, get: function () { return __importDefault(useSet_1).default; } }));
var createGlobalState_1 = __webpack_require__(51493);
Object.defineProperty(exports, "createGlobalState", ({ enumerable: true, get: function () { return createGlobalState_1.createGlobalState; } }));
var useHash_1 = __webpack_require__(4590);
Object.defineProperty(exports, "useHash", ({ enumerable: true, get: function () { return useHash_1.useHash; } }));


/***/ }),

/***/ 88850:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolveHookState = void 0;
function resolveHookState(nextState, currentState) {
    if (typeof nextState === 'function') {
        return nextState.length ? nextState(currentState) : nextState();
    }
    return nextState;
}
exports.resolveHookState = resolveHookState;


/***/ }),

/***/ 50396:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = tslib_1.__importDefault(__webpack_require__(38252));
exports["default"] = react_1.default;


/***/ }),

/***/ 21030:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function parseTimeRanges(ranges) {
    var result = [];
    for (var i = 0; i < ranges.length; i++) {
        result.push({
            start: ranges.start(i),
            end: ranges.end(i),
        });
    }
    return result;
}
exports["default"] = parseTimeRanges;


/***/ }),

/***/ 88387:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isNavigator = exports.isBrowser = exports.off = exports.on = exports.noop = void 0;
var noop = function () { };
exports.noop = noop;
function on(obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (obj && obj.addEventListener) {
        obj.addEventListener.apply(obj, args);
    }
}
exports.on = on;
function off(obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (obj && obj.removeEventListener) {
        obj.removeEventListener.apply(obj, args);
    }
}
exports.off = off;
exports.isBrowser = typeof window !== 'undefined';
exports.isNavigator = typeof navigator !== 'undefined';


/***/ }),

/***/ 94172:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var useAsyncFn_1 = tslib_1.__importDefault(__webpack_require__(55689));
function useAsync(fn, deps) {
    if (deps === void 0) { deps = []; }
    var _a = useAsyncFn_1.default(fn, deps, {
        loading: true,
    }), state = _a[0], callback = _a[1];
    react_1.useEffect(function () {
        callback();
    }, [callback]);
    return state;
}
exports["default"] = useAsync;


/***/ }),

/***/ 55689:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var useMountedState_1 = tslib_1.__importDefault(__webpack_require__(95929));
function useAsyncFn(fn, deps, initialState) {
    if (deps === void 0) { deps = []; }
    if (initialState === void 0) { initialState = { loading: false }; }
    var lastCallId = react_1.useRef(0);
    var isMounted = useMountedState_1.default();
    var _a = react_1.useState(initialState), state = _a[0], set = _a[1];
    var callback = react_1.useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var callId = ++lastCallId.current;
        if (!state.loading) {
            set(function (prevState) { return (tslib_1.__assign(tslib_1.__assign({}, prevState), { loading: true })); });
        }
        return fn.apply(void 0, args).then(function (value) {
            isMounted() && callId === lastCallId.current && set({ value: value, loading: false });
            return value;
        }, function (error) {
            isMounted() && callId === lastCallId.current && set({ error: error, loading: false });
            return error;
        });
    }, deps);
    return [state, callback];
}
exports["default"] = useAsyncFn;


/***/ }),

/***/ 56530:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var useAsync_1 = tslib_1.__importDefault(__webpack_require__(94172));
var useAsyncRetry = function (fn, deps) {
    if (deps === void 0) { deps = []; }
    var _a = react_1.useState(0), attempt = _a[0], setAttempt = _a[1];
    var state = useAsync_1.default(fn, tslib_1.__spreadArrays(deps, [attempt]));
    var stateLoading = state.loading;
    var retry = react_1.useCallback(function () {
        if (stateLoading) {
            if (false) {}
            return;
        }
        setAttempt(function (currentAttempt) { return currentAttempt + 1; });
    }, tslib_1.__spreadArrays(deps, [stateLoading]));
    return tslib_1.__assign(tslib_1.__assign({}, state), { retry: retry });
};
exports["default"] = useAsyncRetry;


/***/ }),

/***/ 26818:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var createHTMLMediaHook_1 = tslib_1.__importDefault(__webpack_require__(77499));
var useAudio = createHTMLMediaHook_1.default('audio');
exports["default"] = useAudio;


/***/ }),

/***/ 62036:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var util_1 = __webpack_require__(88387);
var isDeepEqual_1 = tslib_1.__importDefault(__webpack_require__(50396));
var nav = util_1.isNavigator ? navigator : undefined;
var isBatteryApiSupported = nav && typeof nav.getBattery === 'function';
function useBatteryMock() {
    return { isSupported: false };
}
function useBattery() {
    var _a = react_1.useState({ isSupported: true, fetched: false }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var isMounted = true;
        var battery = null;
        var handleChange = function () {
            if (!isMounted || !battery) {
                return;
            }
            var newState = {
                isSupported: true,
                fetched: true,
                level: battery.level,
                charging: battery.charging,
                dischargingTime: battery.dischargingTime,
                chargingTime: battery.chargingTime,
            };
            !isDeepEqual_1.default(state, newState) && setState(newState);
        };
        nav.getBattery().then(function (bat) {
            if (!isMounted) {
                return;
            }
            battery = bat;
            util_1.on(battery, 'chargingchange', handleChange);
            util_1.on(battery, 'chargingtimechange', handleChange);
            util_1.on(battery, 'dischargingtimechange', handleChange);
            util_1.on(battery, 'levelchange', handleChange);
            handleChange();
        });
        return function () {
            isMounted = false;
            if (battery) {
                util_1.off(battery, 'chargingchange', handleChange);
                util_1.off(battery, 'chargingtimechange', handleChange);
                util_1.off(battery, 'dischargingtimechange', handleChange);
                util_1.off(battery, 'levelchange', handleChange);
            }
        };
    }, []);
    return state;
}
exports["default"] = isBatteryApiSupported ? useBattery : useBatteryMock;


/***/ }),

/***/ 90726:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var util_1 = __webpack_require__(88387);
var useBeforeUnload = function (enabled, message) {
    if (enabled === void 0) { enabled = true; }
    var handler = react_1.useCallback(function (event) {
        var finalEnabled = typeof enabled === 'function' ? enabled() : true;
        if (!finalEnabled) {
            return;
        }
        event.preventDefault();
        if (message) {
            event.returnValue = message;
        }
        return message;
    }, [enabled, message]);
    react_1.useEffect(function () {
        if (!enabled) {
            return;
        }
        util_1.on(window, 'beforeunload', handler);
        return function () { return util_1.off(window, 'beforeunload', handler); };
    }, [enabled, handler]);
};
exports["default"] = useBeforeUnload;


/***/ }),

/***/ 23193:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var useToggle_1 = tslib_1.__importDefault(__webpack_require__(73809));
exports["default"] = useToggle_1.default;


/***/ }),

/***/ 64638:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var util_1 = __webpack_require__(88387);
var defaultEvents = ['mousedown', 'touchstart'];
var useClickAway = function (ref, onClickAway, events) {
    if (events === void 0) { events = defaultEvents; }
    var savedCallback = react_1.useRef(onClickAway);
    react_1.useEffect(function () {
        savedCallback.current = onClickAway;
    }, [onClickAway]);
    react_1.useEffect(function () {
        var handler = function (event) {
            var el = ref.current;
            el && !el.contains(event.target) && savedCallback.current(event);
        };
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var eventName = events_1[_i];
            util_1.on(document, eventName, handler);
        }
        return function () {
            for (var _i = 0, events_2 = events; _i < events_2.length; _i++) {
                var eventName = events_2[_i];
                util_1.off(document, eventName, handler);
            }
        };
    }, [events, ref]);
};
exports["default"] = useClickAway;


/***/ }),

/***/ 63009:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var js_cookie_1 = tslib_1.__importDefault(__webpack_require__(36808));
var useCookie = function (cookieName) {
    var _a = react_1.useState(function () { return js_cookie_1.default.get(cookieName) || null; }), value = _a[0], setValue = _a[1];
    var updateCookie = react_1.useCallback(function (newValue, options) {
        js_cookie_1.default.set(cookieName, newValue, options);
        setValue(newValue);
    }, [cookieName]);
    var deleteCookie = react_1.useCallback(function () {
        js_cookie_1.default.remove(cookieName);
        setValue(null);
    }, [cookieName]);
    return [value, updateCookie, deleteCookie];
};
exports["default"] = useCookie;


/***/ }),

/***/ 85765:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var copy_to_clipboard_1 = tslib_1.__importDefault(__webpack_require__(20640));
var react_1 = __webpack_require__(67294);
var useMountedState_1 = tslib_1.__importDefault(__webpack_require__(95929));
var useSetState_1 = tslib_1.__importDefault(__webpack_require__(14920));
var useCopyToClipboard = function () {
    var isMounted = useMountedState_1.default();
    var _a = useSetState_1.default({
        value: undefined,
        error: undefined,
        noUserInteraction: true,
    }), state = _a[0], setState = _a[1];
    var copyToClipboard = react_1.useCallback(function (value) {
        if (!isMounted()) {
            return;
        }
        var noUserInteraction;
        var normalizedValue;
        try {
            // only strings and numbers casted to strings can be copied to clipboard
            if (typeof value !== 'string' && typeof value !== 'number') {
                var error = new Error("Cannot copy typeof " + typeof value + " to clipboard, must be a string");
                if (false)
                    {}
                setState({
                    value: value,
                    error: error,
                    noUserInteraction: true,
                });
                return;
            }
            // empty strings are also considered invalid
            else if (value === '') {
                var error = new Error("Cannot copy empty string to clipboard.");
                if (false)
                    {}
                setState({
                    value: value,
                    error: error,
                    noUserInteraction: true,
                });
                return;
            }
            normalizedValue = value.toString();
            noUserInteraction = copy_to_clipboard_1.default(normalizedValue);
            setState({
                value: normalizedValue,
                error: undefined,
                noUserInteraction: noUserInteraction,
            });
        }
        catch (error) {
            setState({
                value: normalizedValue,
                error: error,
                noUserInteraction: noUserInteraction,
            });
        }
    }, []);
    return [state, copyToClipboard];
};
exports["default"] = useCopyToClipboard;


/***/ }),

/***/ 5627:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var useGetSet_1 = tslib_1.__importDefault(__webpack_require__(56710));
var hookState_1 = __webpack_require__(88850);
function useCounter(initialValue, max, min) {
    if (initialValue === void 0) { initialValue = 0; }
    if (max === void 0) { max = null; }
    if (min === void 0) { min = null; }
    var init = hookState_1.resolveHookState(initialValue);
    typeof init !== 'number' &&
        console.error('initialValue has to be a number, got ' + typeof initialValue);
    if (typeof min === 'number') {
        init = Math.max(init, min);
    }
    else if (min !== null) {
        console.error('min has to be a number, got ' + typeof min);
    }
    if (typeof max === 'number') {
        init = Math.min(init, max);
    }
    else if (max !== null) {
        console.error('max has to be a number, got ' + typeof max);
    }
    var _a = useGetSet_1.default(init), get = _a[0], setInternal = _a[1];
    return [
        get(),
        react_1.useMemo(function () {
            var set = function (newState) {
                var prevState = get();
                var rState = hookState_1.resolveHookState(newState, prevState);
                if (prevState !== rState) {
                    if (typeof min === 'number') {
                        rState = Math.max(rState, min);
                    }
                    if (typeof max === 'number') {
                        rState = Math.min(rState, max);
                    }
                    prevState !== rState && setInternal(rState);
                }
            };
            return {
                get: get,
                set: set,
                inc: function (delta) {
                    if (delta === void 0) { delta = 1; }
                    var rDelta = hookState_1.resolveHookState(delta, get());
                    if (typeof rDelta !== 'number') {
                        console.error('delta has to be a number or function returning a number, got ' + typeof rDelta);
                    }
                    set(function (num) { return num + rDelta; });
                },
                dec: function (delta) {
                    if (delta === void 0) { delta = 1; }
                    var rDelta = hookState_1.resolveHookState(delta, get());
                    if (typeof rDelta !== 'number') {
                        console.error('delta has to be a number or function returning a number, got ' + typeof rDelta);
                    }
                    set(function (num) { return num - rDelta; });
                },
                reset: function (value) {
                    if (value === void 0) { value = init; }
                    var rValue = hookState_1.resolveHookState(value, get());
                    if (typeof rValue !== 'number') {
                        console.error('value has to be a number or function returning a number, got ' + typeof rValue);
                    }
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    init = rValue;
                    set(rValue);
                },
            };
        }, [init, min, max]),
    ];
}
exports["default"] = useCounter;


/***/ }),

/***/ 88132:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var nano_css_1 = __webpack_require__(40818);
var cssom_1 = __webpack_require__(97142);
var vcssom_1 = __webpack_require__(52099);
var cssToTree_1 = __webpack_require__(87749);
var react_1 = __webpack_require__(67294);
var useIsomorphicLayoutEffect_1 = tslib_1.__importDefault(__webpack_require__(69864));
var nano = nano_css_1.create();
cssom_1.addon(nano);
vcssom_1.addon(nano);
var counter = 0;
var useCss = function (css) {
    var className = react_1.useMemo(function () { return 'react-use-css-' + (counter++).toString(36); }, []);
    var sheet = react_1.useMemo(function () { return new nano.VSheet(); }, []);
    useIsomorphicLayoutEffect_1.default(function () {
        var tree = {};
        cssToTree_1.cssToTree(tree, css, '.' + className, '');
        sheet.diff(tree);
        return function () {
            sheet.diff({});
        };
    });
    return className;
};
exports["default"] = useCss;


/***/ }),

/***/ 49909:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var isPrimitive = function (val) { return val !== Object(val); };
var useCustomCompareEffect = function (effect, deps, depsEqual) {
    if (false) {}
    var ref = react_1.useRef(undefined);
    if (!ref.current || !depsEqual(deps, ref.current)) {
        ref.current = deps;
    }
    react_1.useEffect(effect, ref.current);
};
exports["default"] = useCustomCompareEffect;


/***/ }),

/***/ 21337:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var useTimeoutFn_1 = tslib_1.__importDefault(__webpack_require__(82370));
function useDebounce(fn, ms, deps) {
    if (ms === void 0) { ms = 0; }
    if (deps === void 0) { deps = []; }
    var _a = useTimeoutFn_1.default(fn, ms), isReady = _a[0], cancel = _a[1], reset = _a[2];
    react_1.useEffect(reset, deps);
    return [isReady, cancel];
}
exports["default"] = useDebounce;


/***/ }),

/***/ 96705:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var useCustomCompareEffect_1 = tslib_1.__importDefault(__webpack_require__(49909));
var isDeepEqual_1 = tslib_1.__importDefault(__webpack_require__(50396));
var isPrimitive = function (val) { return val !== Object(val); };
var useDeepCompareEffect = function (effect, deps) {
    if (false) {}
    useCustomCompareEffect_1.default(effect, deps, isDeepEqual_1.default);
};
exports["default"] = useDeepCompareEffect;


/***/ }),

/***/ 74324:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var useDefault = function (defaultValue, initialValue) {
    var _a = react_1.useState(initialValue), value = _a[0], setValue = _a[1];
    if (value === undefined || value === null) {
        return [defaultValue, setValue];
    }
    return [value, setValue];
};
exports["default"] = useDefault;


/***/ }),

/***/ 54107:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var util_1 = __webpack_require__(88387);
var createProcess = function (options) { return function (dataTransfer, event) {
    var uri = dataTransfer.getData('text/uri-list');
    if (uri) {
        (options.onUri || util_1.noop)(uri, event);
        return;
    }
    if (dataTransfer.files && dataTransfer.files.length) {
        (options.onFiles || util_1.noop)(Array.from(dataTransfer.files), event);
        return;
    }
    if (event.clipboardData) {
        var text = event.clipboardData.getData('text');
        (options.onText || util_1.noop)(text, event);
        return;
    }
}; };
var useDrop = function (options, args) {
    if (options === void 0) { options = {}; }
    if (args === void 0) { args = []; }
    var onFiles = options.onFiles, onText = options.onText, onUri = options.onUri;
    var _a = react_1.useState(false), over = _a[0], setOverRaw = _a[1];
    var setOver = react_1.useCallback(setOverRaw, []);
    var process = react_1.useMemo(function () { return createProcess(options); }, [onFiles, onText, onUri]);
    react_1.useEffect(function () {
        var onDragOver = function (event) {
            event.preventDefault();
            setOver(true);
        };
        var onDragEnter = function (event) {
            event.preventDefault();
            setOver(true);
        };
        var onDragLeave = function () {
            setOver(false);
        };
        var onDragExit = function () {
            setOver(false);
        };
        var onDrop = function (event) {
            event.preventDefault();
            setOver(false);
            process(event.dataTransfer, event);
        };
        var onPaste = function (event) {
            process(event.clipboardData, event);
        };
        util_1.on(document, 'dragover', onDragOver);
        util_1.on(document, 'dragenter', onDragEnter);
        util_1.on(document, 'dragleave', onDragLeave);
        util_1.on(document, 'dragexit', onDragExit);
        util_1.on(document, 'drop', onDrop);
        if (onText) {
            util_1.on(document, 'paste', onPaste);
        }
        return function () {
            util_1.off(document, 'dragover', onDragOver);
            util_1.off(document, 'dragenter', onDragEnter);
            util_1.off(document, 'dragleave', onDragLeave);
            util_1.off(document, 'dragexit', onDragExit);
            util_1.off(document, 'drop', onDrop);
            util_1.off(document, 'paste', onPaste);
        };
    }, tslib_1.__spreadArrays([process], args));
    return { over: over };
};
exports["default"] = useDrop;


/***/ }),

/***/ 59247:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var useMountedState_1 = tslib_1.__importDefault(__webpack_require__(95929));
var util_1 = __webpack_require__(88387);
/*
const defaultState: DropAreaState = {
  over: false,
};
*/
var createProcess = function (options, mounted) { return function (dataTransfer, event) {
    var uri = dataTransfer.getData('text/uri-list');
    if (uri) {
        (options.onUri || util_1.noop)(uri, event);
        return;
    }
    if (dataTransfer.files && dataTransfer.files.length) {
        (options.onFiles || util_1.noop)(Array.from(dataTransfer.files), event);
        return;
    }
    if (dataTransfer.items && dataTransfer.items.length) {
        dataTransfer.items[0].getAsString(function (text) {
            if (mounted) {
                (options.onText || util_1.noop)(text, event);
            }
        });
    }
}; };
var createBond = function (process, setOver) { return ({
    onDragOver: function (event) {
        event.preventDefault();
    },
    onDragEnter: function (event) {
        event.preventDefault();
        setOver(true);
    },
    onDragLeave: function () {
        setOver(false);
    },
    onDrop: function (event) {
        event.preventDefault();
        event.persist();
        setOver(false);
        process(event.dataTransfer, event);
    },
    onPaste: function (event) {
        event.persist();
        process(event.clipboardData, event);
    },
}); };
var useDropArea = function (options) {
    if (options === void 0) { options = {}; }
    var onFiles = options.onFiles, onText = options.onText, onUri = options.onUri;
    var isMounted = useMountedState_1.default();
    var _a = react_1.useState(false), over = _a[0], setOver = _a[1];
    var process = react_1.useMemo(function () { return createProcess(options, isMounted()); }, [onFiles, onText, onUri]);
    var bond = react_1.useMemo(function () { return createBond(process, setOver); }, [process, setOver]);
    return [bond, { over: over }];
};
exports["default"] = useDropArea;


/***/ }),

/***/ 16713:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var useEffectOnce = function (effect) {
    react_1.useEffect(effect, []);
};
exports["default"] = useEffectOnce;


/***/ }),

/***/ 32664:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ensuredForwardRef = void 0;
var react_1 = __webpack_require__(67294);
function useEnsuredForwardedRef(forwardedRef) {
    var ensuredRef = react_1.useRef(forwardedRef && forwardedRef.current);
    react_1.useEffect(function () {
        if (!forwardedRef) {
            return;
        }
        forwardedRef.current = ensuredRef.current;
    }, [forwardedRef]);
    return ensuredRef;
}
exports["default"] = useEnsuredForwardedRef;
function ensuredForwardRef(Component) {
    return react_1.forwardRef(function (props, ref) {
        var ensuredRef = useEnsuredForwardedRef(ref);
        return Component(props, ensuredRef);
    });
}
exports.ensuredForwardRef = ensuredForwardRef;


/***/ }),

/***/ 52459:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var useError = function () {
    var _a = react_1.useState(null), error = _a[0], setError = _a[1];
    react_1.useEffect(function () {
        if (error) {
            throw error;
        }
    }, [error]);
    var dispatchError = react_1.useCallback(function (err) {
        setError(err);
    }, []);
    return dispatchError;
};
exports["default"] = useError;


/***/ }),

/***/ 73969:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var util_1 = __webpack_require__(88387);
var defaultTarget = util_1.isBrowser ? window : null;
var isListenerType1 = function (target) {
    return !!target.addEventListener;
};
var isListenerType2 = function (target) {
    return !!target.on;
};
var useEvent = function (name, handler, target, options) {
    if (target === void 0) { target = defaultTarget; }
    react_1.useEffect(function () {
        if (!handler) {
            return;
        }
        if (!target) {
            return;
        }
        if (isListenerType1(target)) {
            util_1.on(target, name, handler, options);
        }
        else if (isListenerType2(target)) {
            target.on(name, handler, options);
        }
        return function () {
            if (isListenerType1(target)) {
                util_1.off(target, name, handler, options);
            }
            else if (isListenerType2(target)) {
                target.off(name, handler, options);
            }
        };
    }, [name, handler, target, JSON.stringify(options)]);
};
exports["default"] = useEvent;


/***/ }),

/***/ 97256:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var useFavicon = function (href) {
    react_1.useEffect(function () {
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = href;
        document.getElementsByTagName('head')[0].appendChild(link);
    }, [href]);
};
exports["default"] = useFavicon;


/***/ }),

/***/ 91784:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useFirstMountState = void 0;
var react_1 = __webpack_require__(67294);
function useFirstMountState() {
    var isFirst = react_1.useRef(true);
    if (isFirst.current) {
        isFirst.current = false;
        return true;
    }
    return isFirst.current;
}
exports.useFirstMountState = useFirstMountState;


/***/ }),

/***/ 38134:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var screenfull_1 = tslib_1.__importDefault(__webpack_require__(10577));
var useIsomorphicLayoutEffect_1 = tslib_1.__importDefault(__webpack_require__(69864));
var util_1 = __webpack_require__(88387);
var useFullscreen = function (ref, enabled, options) {
    if (options === void 0) { options = {}; }
    var video = options.video, _a = options.onClose, onClose = _a === void 0 ? util_1.noop : _a;
    var _b = react_1.useState(enabled), isFullscreen = _b[0], setIsFullscreen = _b[1];
    useIsomorphicLayoutEffect_1.default(function () {
        if (!enabled) {
            return;
        }
        if (!ref.current) {
            return;
        }
        var onWebkitEndFullscreen = function () {
            if (video === null || video === void 0 ? void 0 : video.current) {
                util_1.off(video.current, 'webkitendfullscreen', onWebkitEndFullscreen);
            }
            onClose();
        };
        var onChange = function () {
            if (screenfull_1.default.isEnabled) {
                var isScreenfullFullscreen = screenfull_1.default.isFullscreen;
                setIsFullscreen(isScreenfullFullscreen);
                if (!isScreenfullFullscreen) {
                    onClose();
                }
            }
        };
        if (screenfull_1.default.isEnabled) {
            try {
                screenfull_1.default.request(ref.current);
                setIsFullscreen(true);
            }
            catch (error) {
                onClose(error);
                setIsFullscreen(false);
            }
            screenfull_1.default.on('change', onChange);
        }
        else if (video && video.current && video.current.webkitEnterFullscreen) {
            video.current.webkitEnterFullscreen();
            util_1.on(video.current, 'webkitendfullscreen', onWebkitEndFullscreen);
            setIsFullscreen(true);
        }
        else {
            onClose();
            setIsFullscreen(false);
        }
        return function () {
            setIsFullscreen(false);
            if (screenfull_1.default.isEnabled) {
                try {
                    screenfull_1.default.off('change', onChange);
                    screenfull_1.default.exit();
                }
                catch (_a) { }
            }
            else if (video && video.current && video.current.webkitExitFullscreen) {
                util_1.off(video.current, 'webkitendfullscreen', onWebkitEndFullscreen);
                video.current.webkitExitFullscreen();
            }
        };
    }, [enabled, video, ref]);
    return isFullscreen;
};
exports["default"] = useFullscreen;


/***/ }),

/***/ 69209:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var useGeolocation = function (options) {
    var _a = react_1.useState({
        loading: true,
        accuracy: null,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        latitude: null,
        longitude: null,
        speed: null,
        timestamp: Date.now(),
    }), state = _a[0], setState = _a[1];
    var mounted = true;
    var watchId;
    var onEvent = function (event) {
        if (mounted) {
            setState({
                loading: false,
                accuracy: event.coords.accuracy,
                altitude: event.coords.altitude,
                altitudeAccuracy: event.coords.altitudeAccuracy,
                heading: event.coords.heading,
                latitude: event.coords.latitude,
                longitude: event.coords.longitude,
                speed: event.coords.speed,
                timestamp: event.timestamp,
            });
        }
    };
    var onEventError = function (error) {
        return mounted && setState(function (oldState) { return (tslib_1.__assign(tslib_1.__assign({}, oldState), { loading: false, error: error })); });
    };
    react_1.useEffect(function () {
        navigator.geolocation.getCurrentPosition(onEvent, onEventError, options);
        watchId = navigator.geolocation.watchPosition(onEvent, onEventError, options);
        return function () {
            mounted = false;
            navigator.geolocation.clearWatch(watchId);
        };
    }, []);
    return state;
};
exports["default"] = useGeolocation;


/***/ }),

/***/ 56710:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var useUpdate_1 = tslib_1.__importDefault(__webpack_require__(91213));
var hookState_1 = __webpack_require__(88850);
function useGetSet(initialState) {
    var state = react_1.useRef(hookState_1.resolveHookState(initialState));
    var update = useUpdate_1.default();
    return react_1.useMemo(function () { return [
        function () { return state.current; },
        function (newState) {
            state.current = hookState_1.resolveHookState(newState, state.current);
            update();
        },
    ]; }, []);
}
exports["default"] = useGetSet;


/***/ }),

/***/ 45864:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var useUpdate_1 = tslib_1.__importDefault(__webpack_require__(91213));
var useGetSetState = function (initialState) {
    if (initialState === void 0) { initialState = {}; }
    if (false) {}
    var update = useUpdate_1.default();
    var state = react_1.useRef(tslib_1.__assign({}, initialState));
    var get = react_1.useCallback(function () { return state.current; }, []);
    var set = react_1.useCallback(function (patch) {
        if (!patch) {
            return;
        }
        if (false) {}
        Object.assign(state.current, patch);
        update();
    }, []);
    return [get, set];
};
exports["default"] = useGetSetState;


/***/ }),

/***/ 54277:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var set_harmonic_interval_1 = __webpack_require__(29579);
var useHarmonicIntervalFn = function (fn, delay) {
    if (delay === void 0) { delay = 0; }
    var latestCallback = react_1.useRef(function () { });
    react_1.useEffect(function () {
        latestCallback.current = fn;
    });
    react_1.useEffect(function () {
        if (delay !== null) {
            var interval_1 = set_harmonic_interval_1.setHarmonicInterval(function () { return latestCallback.current(); }, delay);
            return function () { return set_harmonic_interval_1.clearHarmonicInterval(interval_1); };
        }
        return undefined;
    }, [delay]);
};
exports["default"] = useHarmonicIntervalFn;


/***/ }),

/***/ 4590:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useHash = void 0;
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var useLifecycles_1 = tslib_1.__importDefault(__webpack_require__(38324));
var util_1 = __webpack_require__(88387);
/**
 * read and write url hash, response to url hash change
 */
var useHash = function () {
    var _a = react_1.useState(function () { return window.location.hash; }), hash = _a[0], setHash = _a[1];
    var onHashChange = react_1.useCallback(function () {
        setHash(window.location.hash);
    }, []);
    useLifecycles_1.default(function () {
        util_1.on(window, 'hashchange', onHashChange);
    }, function () {
        util_1.off(window, 'hashchange', onHashChange);
    });
    var _setHash = react_1.useCallback(function (newHash) {
        if (newHash !== hash) {
            window.location.hash = newHash;
        }
    }, [hash]);
    return [hash, _setHash];
};
exports.useHash = useHash;


/***/ }),

/***/ 23800:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var React = tslib_1.__importStar(__webpack_require__(67294));
var util_1 = __webpack_require__(88387);
var useState = React.useState;
var useHover = function (element) {
    var _a = useState(false), state = _a[0], setState = _a[1];
    var onMouseEnter = function (originalOnMouseEnter) { return function (event) {
        (originalOnMouseEnter || util_1.noop)(event);
        setState(true);
    }; };
    var onMouseLeave = function (originalOnMouseLeave) { return function (event) {
        (originalOnMouseLeave || util_1.noop)(event);
        setState(false);
    }; };
    if (typeof element === 'function') {
        element = element(state);
    }
    var el = React.cloneElement(element, {
        onMouseEnter: onMouseEnter(element.props.onMouseEnter),
        onMouseLeave: onMouseLeave(element.props.onMouseLeave),
    });
    return [el, state];
};
exports["default"] = useHover;


/***/ }),

/***/ 26916:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var util_1 = __webpack_require__(88387);
// kudos: https://usehooks.com/
var useHoverDirty = function (ref, enabled) {
    if (enabled === void 0) { enabled = true; }
    if (false) {}
    var _a = react_1.useState(false), value = _a[0], setValue = _a[1];
    react_1.useEffect(function () {
        var onMouseOver = function () { return setValue(true); };
        var onMouseOut = function () { return setValue(false); };
        if (enabled && ref && ref.current) {
            util_1.on(ref.current, 'mouseover', onMouseOver);
            util_1.on(ref.current, 'mouseout', onMouseOut);
        }
        // fixes react-hooks/exhaustive-deps warning about stale ref elements
        var current = ref.current;
        return function () {
            if (enabled && current) {
                util_1.off(current, 'mouseover', onMouseOver);
                util_1.off(current, 'mouseout', onMouseOut);
            }
        };
    }, [enabled, ref]);
    return value;
};
exports["default"] = useHoverDirty;


/***/ }),

/***/ 31476:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var throttle_debounce_1 = __webpack_require__(42189);
var util_1 = __webpack_require__(88387);
var defaultEvents = ['mousemove', 'mousedown', 'resize', 'keydown', 'touchstart', 'wheel'];
var oneMinute = 60e3;
var useIdle = function (ms, initialState, events) {
    if (ms === void 0) { ms = oneMinute; }
    if (initialState === void 0) { initialState = false; }
    if (events === void 0) { events = defaultEvents; }
    var _a = react_1.useState(initialState), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var mounted = true;
        var timeout;
        var localState = state;
        var set = function (newState) {
            if (mounted) {
                localState = newState;
                setState(newState);
            }
        };
        var onEvent = throttle_debounce_1.throttle(50, function () {
            if (localState) {
                set(false);
            }
            clearTimeout(timeout);
            timeout = setTimeout(function () { return set(true); }, ms);
        });
        var onVisibility = function () {
            if (!document.hidden) {
                onEvent();
            }
        };
        for (var i = 0; i < events.length; i++) {
            util_1.on(window, events[i], onEvent);
        }
        util_1.on(document, 'visibilitychange', onVisibility);
        timeout = setTimeout(function () { return set(true); }, ms);
        return function () {
            mounted = false;
            for (var i = 0; i < events.length; i++) {
                util_1.off(window, events[i], onEvent);
            }
            util_1.off(document, 'visibilitychange', onVisibility);
        };
    }, [ms, events]);
    return state;
};
exports["default"] = useIdle;


/***/ }),

/***/ 79702:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var useIntersection = function (ref, options) {
    var _a = react_1.useState(null), intersectionObserverEntry = _a[0], setIntersectionObserverEntry = _a[1];
    react_1.useEffect(function () {
        if (ref.current && typeof IntersectionObserver === 'function') {
            var handler = function (entries) {
                setIntersectionObserverEntry(entries[0]);
            };
            var observer_1 = new IntersectionObserver(handler, options);
            observer_1.observe(ref.current);
            return function () {
                setIntersectionObserverEntry(null);
                observer_1.disconnect();
            };
        }
        return function () { };
    }, [ref.current, options.threshold, options.root, options.rootMargin]);
    return intersectionObserverEntry;
};
exports["default"] = useIntersection;


/***/ }),

/***/ 14032:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var useInterval = function (callback, delay) {
    var savedCallback = react_1.useRef(function () { });
    react_1.useEffect(function () {
        savedCallback.current = callback;
    });
    react_1.useEffect(function () {
        if (delay !== null) {
            var interval_1 = setInterval(function () { return savedCallback.current(); }, delay || 0);
            return function () { return clearInterval(interval_1); };
        }
        return undefined;
    }, [delay]);
};
exports["default"] = useInterval;


/***/ }),

/***/ 69864:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var util_1 = __webpack_require__(88387);
var useIsomorphicLayoutEffect = util_1.isBrowser ? react_1.useLayoutEffect : react_1.useEffect;
exports["default"] = useIsomorphicLayoutEffect;


/***/ }),

/***/ 52185:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var useEvent_1 = tslib_1.__importDefault(__webpack_require__(73969));
var util_1 = __webpack_require__(88387);
var createKeyPredicate = function (keyFilter) {
    return typeof keyFilter === 'function'
        ? keyFilter
        : typeof keyFilter === 'string'
            ? function (event) { return event.key === keyFilter; }
            : keyFilter
                ? function () { return true; }
                : function () { return false; };
};
var useKey = function (key, fn, opts, deps) {
    if (fn === void 0) { fn = util_1.noop; }
    if (opts === void 0) { opts = {}; }
    if (deps === void 0) { deps = [key]; }
    var _a = opts.event, event = _a === void 0 ? 'keydown' : _a, target = opts.target, options = opts.options;
    var useMemoHandler = react_1.useMemo(function () {
        var predicate = createKeyPredicate(key);
        var handler = function (handlerEvent) {
            if (predicate(handlerEvent)) {
                return fn(handlerEvent);
            }
        };
        return handler;
    }, deps);
    useEvent_1.default(event, useMemoHandler, target, options);
};
exports["default"] = useKey;


/***/ }),

/***/ 78163:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var useKey_1 = tslib_1.__importDefault(__webpack_require__(52185));
var useKeyPress = function (keyFilter) {
    var _a = react_1.useState([false, null]), state = _a[0], set = _a[1];
    useKey_1.default(keyFilter, function (event) { return set([true, event]); }, { event: 'keydown' }, [state]);
    useKey_1.default(keyFilter, function (event) { return set([false, event]); }, { event: 'keyup' }, [state]);
    return state;
};
exports["default"] = useKeyPress;


/***/ }),

/***/ 98114:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var useKeyPress_1 = tslib_1.__importDefault(__webpack_require__(78163));
var useUpdateEffect_1 = tslib_1.__importDefault(__webpack_require__(21794));
var useKeyPressEvent = function (key, keydown, keyup, useKeyPress) {
    if (useKeyPress === void 0) { useKeyPress = useKeyPress_1.default; }
    var _a = useKeyPress(key), pressed = _a[0], event = _a[1];
    useUpdateEffect_1.default(function () {
        if (!pressed && keyup) {
            keyup(event);
        }
        else if (pressed && keydown) {
            keydown(event);
        }
    }, [pressed]);
};
exports["default"] = useKeyPressEvent;


/***/ }),

/***/ 1974:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var useLatest = function (value) {
    var ref = react_1.useRef(value);
    ref.current = value;
    return ref;
};
exports["default"] = useLatest;


/***/ }),

/***/ 38324:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var useLifecycles = function (mount, unmount) {
    react_1.useEffect(function () {
        if (mount) {
            mount();
        }
        return function () {
            if (unmount) {
                unmount();
            }
        };
    }, []);
};
exports["default"] = useLifecycles;


/***/ }),

/***/ 67335:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var useUpdate_1 = tslib_1.__importDefault(__webpack_require__(91213));
var hookState_1 = __webpack_require__(88850);
function useList(initialList) {
    if (initialList === void 0) { initialList = []; }
    var list = react_1.useRef(hookState_1.resolveHookState(initialList));
    var update = useUpdate_1.default();
    var actions = react_1.useMemo(function () {
        var a = {
            set: function (newList) {
                list.current = hookState_1.resolveHookState(newList, list.current);
                update();
            },
            push: function () {
                var items = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    items[_i] = arguments[_i];
                }
                items.length && actions.set(function (curr) { return curr.concat(items); });
            },
            updateAt: function (index, item) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    arr[index] = item;
                    return arr;
                });
            },
            insertAt: function (index, item) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    index > arr.length ? (arr[index] = item) : arr.splice(index, 0, item);
                    return arr;
                });
            },
            update: function (predicate, newItem) {
                actions.set(function (curr) { return curr.map(function (item) { return (predicate(item, newItem) ? newItem : item); }); });
            },
            updateFirst: function (predicate, newItem) {
                var index = list.current.findIndex(function (item) { return predicate(item, newItem); });
                index >= 0 && actions.updateAt(index, newItem);
            },
            upsert: function (predicate, newItem) {
                var index = list.current.findIndex(function (item) { return predicate(item, newItem); });
                index >= 0 ? actions.updateAt(index, newItem) : actions.push(newItem);
            },
            sort: function (compareFn) {
                actions.set(function (curr) { return curr.slice().sort(compareFn); });
            },
            filter: function (callbackFn, thisArg) {
                actions.set(function (curr) { return curr.slice().filter(callbackFn, thisArg); });
            },
            removeAt: function (index) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    arr.splice(index, 1);
                    return arr;
                });
            },
            clear: function () {
                actions.set([]);
            },
            reset: function () {
                actions.set(hookState_1.resolveHookState(initialList).slice());
            },
        };
        /**
         * @deprecated Use removeAt method instead
         */
        a.remove = a.removeAt;
        return a;
    }, []);
    return [list.current, actions];
}
exports["default"] = useList;


/***/ }),

/***/ 27539:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var util_1 = __webpack_require__(88387);
var useLocalStorage = function (key, initialValue, options) {
    if (!util_1.isBrowser) {
        return [initialValue, util_1.noop, util_1.noop];
    }
    if (!key) {
        throw new Error('useLocalStorage key may not be falsy');
    }
    var deserializer = options
        ? options.raw
            ? function (value) { return value; }
            : options.deserializer
        : JSON.parse;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var initializer = react_1.useRef(function (key) {
        try {
            var serializer = options ? (options.raw ? String : options.serializer) : JSON.stringify;
            var localStorageValue = localStorage.getItem(key);
            if (localStorageValue !== null) {
                return deserializer(localStorageValue);
            }
            else {
                initialValue && localStorage.setItem(key, serializer(initialValue));
                return initialValue;
            }
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // localStorage can throw. JSON.parse and JSON.stringify
            // can throw, too.
            return initialValue;
        }
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var _a = react_1.useState(function () { return initializer.current(key); }), state = _a[0], setState = _a[1];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react_1.useLayoutEffect(function () { return setState(initializer.current(key)); }, [key]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var set = react_1.useCallback(function (valOrFunc) {
        try {
            var newState = typeof valOrFunc === 'function' ? valOrFunc(state) : valOrFunc;
            if (typeof newState === 'undefined')
                return;
            var value = void 0;
            if (options)
                if (options.raw)
                    if (typeof newState === 'string')
                        value = newState;
                    else
                        value = JSON.stringify(newState);
                else if (options.serializer)
                    value = options.serializer(newState);
                else
                    value = JSON.stringify(newState);
            else
                value = JSON.stringify(newState);
            localStorage.setItem(key, value);
            setState(deserializer(value));
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // localStorage can throw. Also JSON.stringify can throw.
        }
    }, [key, setState]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var remove = react_1.useCallback(function () {
        try {
            localStorage.removeItem(key);
            setState(undefined);
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // localStorage can throw.
        }
    }, [key, setState]);
    return [state, set, remove];
};
exports["default"] = useLocalStorage;


/***/ }),

/***/ 52787:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var util_1 = __webpack_require__(88387);
var patchHistoryMethod = function (method) {
    var history = window.history;
    var original = history[method];
    history[method] = function (state) {
        var result = original.apply(this, arguments);
        var event = new Event(method.toLowerCase());
        event.state = state;
        window.dispatchEvent(event);
        return result;
    };
};
if (util_1.isBrowser) {
    patchHistoryMethod('pushState');
    patchHistoryMethod('replaceState');
}
var useLocationServer = function () { return ({
    trigger: 'load',
    length: 1,
}); };
var buildState = function (trigger) {
    var _a = window.history, state = _a.state, length = _a.length;
    var _b = window.location, hash = _b.hash, host = _b.host, hostname = _b.hostname, href = _b.href, origin = _b.origin, pathname = _b.pathname, port = _b.port, protocol = _b.protocol, search = _b.search;
    return {
        trigger: trigger,
        state: state,
        length: length,
        hash: hash,
        host: host,
        hostname: hostname,
        href: href,
        origin: origin,
        pathname: pathname,
        port: port,
        protocol: protocol,
        search: search,
    };
};
var useLocationBrowser = function () {
    var _a = react_1.useState(buildState('load')), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var onPopstate = function () { return setState(buildState('popstate')); };
        var onPushstate = function () { return setState(buildState('pushstate')); };
        var onReplacestate = function () { return setState(buildState('replacestate')); };
        util_1.on(window, 'popstate', onPopstate);
        util_1.on(window, 'pushstate', onPushstate);
        util_1.on(window, 'replacestate', onReplacestate);
        return function () {
            util_1.off(window, 'popstate', onPopstate);
            util_1.off(window, 'pushstate', onPushstate);
            util_1.off(window, 'replacestate', onReplacestate);
        };
    }, []);
    return state;
};
var hasEventConstructor = typeof Event === 'function';
exports["default"] = util_1.isBrowser && hasEventConstructor ? useLocationBrowser : useLocationServer;


/***/ }),

/***/ 27502:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getClosestBody = void 0;
var react_1 = __webpack_require__(67294);
var util_1 = __webpack_require__(88387);
function getClosestBody(el) {
    if (!el) {
        return null;
    }
    else if (el.tagName === 'BODY') {
        return el;
    }
    else if (el.tagName === 'IFRAME') {
        var document_1 = el.contentDocument;
        return document_1 ? document_1.body : null;
    }
    else if (!el.offsetParent) {
        return null;
    }
    return getClosestBody(el.offsetParent);
}
exports.getClosestBody = getClosestBody;
function preventDefault(rawEvent) {
    var e = rawEvent || window.event;
    // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
    if (e.touches.length > 1)
        return true;
    if (e.preventDefault)
        e.preventDefault();
    return false;
}
var isIosDevice = util_1.isBrowser &&
    window.navigator &&
    window.navigator.platform &&
    /iP(ad|hone|od)/.test(window.navigator.platform);
var bodies = new Map();
var doc = typeof document === 'object' ? document : undefined;
var documentListenerAdded = false;
exports["default"] = !doc
    ? function useLockBodyMock(_locked, _elementRef) {
        if (_locked === void 0) { _locked = true; }
    }
    : function useLockBody(locked, elementRef) {
        if (locked === void 0) { locked = true; }
        var bodyRef = react_1.useRef(doc.body);
        elementRef = elementRef || bodyRef;
        var lock = function (body) {
            var bodyInfo = bodies.get(body);
            if (!bodyInfo) {
                bodies.set(body, { counter: 1, initialOverflow: body.style.overflow });
                if (isIosDevice) {
                    if (!documentListenerAdded) {
                        util_1.on(document, 'touchmove', preventDefault, { passive: false });
                        documentListenerAdded = true;
                    }
                }
                else {
                    body.style.overflow = 'hidden';
                }
            }
            else {
                bodies.set(body, {
                    counter: bodyInfo.counter + 1,
                    initialOverflow: bodyInfo.initialOverflow,
                });
            }
        };
        var unlock = function (body) {
            var bodyInfo = bodies.get(body);
            if (bodyInfo) {
                if (bodyInfo.counter === 1) {
                    bodies.delete(body);
                    if (isIosDevice) {
                        body.ontouchmove = null;
                        if (documentListenerAdded) {
                            util_1.off(document, 'touchmove', preventDefault);
                            documentListenerAdded = false;
                        }
                    }
                    else {
                        body.style.overflow = bodyInfo.initialOverflow;
                    }
                }
                else {
                    bodies.set(body, {
                        counter: bodyInfo.counter - 1,
                        initialOverflow: bodyInfo.initialOverflow,
                    });
                }
            }
        };
        react_1.useEffect(function () {
            var body = getClosestBody(elementRef.current);
            if (!body) {
                return;
            }
            if (locked) {
                lock(body);
            }
            else {
                unlock(body);
            }
        }, [locked, elementRef.current]);
        // clean up, on un-mount
        react_1.useEffect(function () {
            var body = getClosestBody(elementRef.current);
            if (!body) {
                return;
            }
            return function () {
                unlock(body);
            };
        }, []);
    };


/***/ }),

/***/ 92624:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var useEffectOnce_1 = tslib_1.__importDefault(__webpack_require__(16713));
var useUpdateEffect_1 = tslib_1.__importDefault(__webpack_require__(21794));
var useLogger = function (componentName) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    useEffectOnce_1.default(function () {
        console.log.apply(console, tslib_1.__spreadArrays([componentName + " mounted"], rest));
        return function () { return console.log(componentName + " unmounted"); };
    });
    useUpdateEffect_1.default(function () {
        console.log.apply(console, tslib_1.__spreadArrays([componentName + " updated"], rest));
    });
};
exports["default"] = useLogger;


/***/ }),

/***/ 58823:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var util_1 = __webpack_require__(88387);
var isTouchEvent = function (ev) {
    return 'touches' in ev;
};
var preventDefault = function (ev) {
    if (!isTouchEvent(ev))
        return;
    if (ev.touches.length < 2 && ev.preventDefault) {
        ev.preventDefault();
    }
};
var useLongPress = function (callback, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.isPreventDefault, isPreventDefault = _c === void 0 ? true : _c, _d = _b.delay, delay = _d === void 0 ? 300 : _d;
    var timeout = react_1.useRef();
    var target = react_1.useRef();
    var start = react_1.useCallback(function (event) {
        // prevent ghost click on mobile devices
        if (isPreventDefault && event.target) {
            util_1.on(event.target, 'touchend', preventDefault, { passive: false });
            target.current = event.target;
        }
        timeout.current = setTimeout(function () { return callback(event); }, delay);
    }, [callback, delay, isPreventDefault]);
    var clear = react_1.useCallback(function () {
        // clearTimeout and removeEventListener
        timeout.current && clearTimeout(timeout.current);
        if (isPreventDefault && target.current) {
            util_1.off(target.current, 'touchend', preventDefault);
        }
    }, [isPreventDefault]);
    return {
        onMouseDown: function (e) { return start(e); },
        onTouchStart: function (e) { return start(e); },
        onMouseUp: clear,
        onMouseLeave: clear,
        onTouchEnd: clear,
    };
};
exports["default"] = useLongPress;


/***/ }),

/***/ 77539:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var useMap = function (initialMap) {
    if (initialMap === void 0) { initialMap = {}; }
    var _a = react_1.useState(initialMap), map = _a[0], set = _a[1];
    var stableActions = react_1.useMemo(function () { return ({
        set: function (key, entry) {
            set(function (prevMap) {
                var _a;
                return (tslib_1.__assign(tslib_1.__assign({}, prevMap), (_a = {}, _a[key] = entry, _a)));
            });
        },
        setAll: function (newMap) {
            set(newMap);
        },
        remove: function (key) {
            set(function (prevMap) {
                var _a = prevMap, _b = key, omit = _a[_b], rest = tslib_1.__rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
                return rest;
            });
        },
        reset: function () { return set(initialMap); },
    }); }, [set]);
    var utils = tslib_1.__assign({ get: react_1.useCallback(function (key) { return map[key]; }, [map]) }, stableActions);
    return [map, utils];
};
exports["default"] = useMap;


/***/ }),

/***/ 89414:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var useIsomorphicLayoutEffect_1 = tslib_1.__importDefault(__webpack_require__(69864));
var util_1 = __webpack_require__(88387);
var defaultState = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
};
function useMeasure() {
    var _a = react_1.useState(null), element = _a[0], ref = _a[1];
    var _b = react_1.useState(defaultState), rect = _b[0], setRect = _b[1];
    var observer = react_1.useMemo(function () {
        return new window.ResizeObserver(function (entries) {
            if (entries[0]) {
                var _a = entries[0].contentRect, x = _a.x, y = _a.y, width = _a.width, height = _a.height, top_1 = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
                setRect({ x: x, y: y, width: width, height: height, top: top_1, left: left, bottom: bottom, right: right });
            }
        });
    }, []);
    useIsomorphicLayoutEffect_1.default(function () {
        if (!element)
            return;
        observer.observe(element);
        return function () {
            observer.disconnect();
        };
    }, [element]);
    return [ref, rect];
}
exports["default"] = util_1.isBrowser && typeof window.ResizeObserver !== 'undefined'
    ? useMeasure
    : (function () { return [util_1.noop, defaultState]; });


/***/ }),

/***/ 99501:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var util_1 = __webpack_require__(88387);
var getInitialState = function (query, defaultState) {
    // Prevent a React hydration mismatch when a default value is provided by not defaulting to window.matchMedia(query).matches.
    if (defaultState !== undefined) {
        return defaultState;
    }
    if (util_1.isBrowser) {
        return window.matchMedia(query).matches;
    }
    // A default value has not been provided, and you are rendering on the server, warn of a possible hydration mismatch when defaulting to false.
    if (false) {}
    return false;
};
var useMedia = function (query, defaultState) {
    var _a = react_1.useState(getInitialState(query, defaultState)), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var mounted = true;
        var mql = window.matchMedia(query);
        var onChange = function () {
            if (!mounted) {
                return;
            }
            setState(!!mql.matches);
        };
        mql.addListener(onChange);
        setState(mql.matches);
        return function () {
            mounted = false;
            mql.removeListener(onChange);
        };
    }, [query]);
    return state;
};
exports["default"] = useMedia;


/***/ }),

/***/ 12530:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var util_1 = __webpack_require__(88387);
var useMediaDevices = function () {
    var _a = react_1.useState({}), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var mounted = true;
        var onChange = function () {
            navigator.mediaDevices
                .enumerateDevices()
                .then(function (devices) {
                if (mounted) {
                    setState({
                        devices: devices.map(function (_a) {
                            var deviceId = _a.deviceId, groupId = _a.groupId, kind = _a.kind, label = _a.label;
                            return ({
                                deviceId: deviceId,
                                groupId: groupId,
                                kind: kind,
                                label: label,
                            });
                        }),
                    });
                }
            })
                .catch(util_1.noop);
        };
        util_1.on(navigator.mediaDevices, 'devicechange', onChange);
        onChange();
        return function () {
            mounted = false;
            util_1.off(navigator.mediaDevices, 'devicechange', onChange);
        };
    }, []);
    return state;
};
var useMediaDevicesMock = function () { return ({}); };
exports["default"] = util_1.isNavigator && !!navigator.mediaDevices ? useMediaDevices : useMediaDevicesMock;


/***/ }),

/***/ 41231:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useMediatedState = void 0;
var react_1 = __webpack_require__(67294);
function useMediatedState(mediator, initialState) {
    var mediatorFn = react_1.useRef(mediator);
    var _a = react_1.useState(initialState), state = _a[0], setMediatedState = _a[1];
    var setState = react_1.useCallback(function (newState) {
        if (mediatorFn.current.length === 2) {
            mediatorFn.current(newState, setMediatedState);
        }
        else {
            setMediatedState(mediatorFn.current(newState));
        }
    }, [state]);
    return [state, setState];
}
exports.useMediatedState = useMediatedState;


/***/ }),

/***/ 53486:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var useMethods = function (createMethods, initialState) {
    var reducer = react_1.useMemo(function () { return function (reducerState, action) {
        var _a;
        return (_a = createMethods(reducerState))[action.type].apply(_a, action.payload);
    }; }, [createMethods]);
    var _a = react_1.useReducer(reducer, initialState), state = _a[0], dispatch = _a[1];
    var wrappedMethods = react_1.useMemo(function () {
        var actionTypes = Object.keys(createMethods(initialState));
        return actionTypes.reduce(function (acc, type) {
            acc[type] = function () {
                var payload = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    payload[_i] = arguments[_i];
                }
                return dispatch({ type: type, payload: payload });
            };
            return acc;
        }, {});
    }, [createMethods, initialState]);
    return [state, wrappedMethods];
};
exports["default"] = useMethods;


/***/ }),

/***/ 83966:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var util_1 = __webpack_require__(88387);
var defaultState = {
    acceleration: {
        x: null,
        y: null,
        z: null,
    },
    accelerationIncludingGravity: {
        x: null,
        y: null,
        z: null,
    },
    rotationRate: {
        alpha: null,
        beta: null,
        gamma: null,
    },
    interval: 16,
};
var useMotion = function (initialState) {
    if (initialState === void 0) { initialState = defaultState; }
    var _a = react_1.useState(initialState), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var handler = function (event) {
            var acceleration = event.acceleration, accelerationIncludingGravity = event.accelerationIncludingGravity, rotationRate = event.rotationRate, interval = event.interval;
            setState({
                acceleration: {
                    x: acceleration.x,
                    y: acceleration.y,
                    z: acceleration.z,
                },
                accelerationIncludingGravity: {
                    x: accelerationIncludingGravity.x,
                    y: accelerationIncludingGravity.y,
                    z: accelerationIncludingGravity.z,
                },
                rotationRate: {
                    alpha: rotationRate.alpha,
                    beta: rotationRate.beta,
                    gamma: rotationRate.gamma,
                },
                interval: interval,
            });
        };
        util_1.on(window, 'devicemotion', handler);
        return function () {
            util_1.off(window, 'devicemotion', handler);
        };
    }, []);
    return state;
};
exports["default"] = useMotion;


/***/ }),

/***/ 70902:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var useEffectOnce_1 = tslib_1.__importDefault(__webpack_require__(16713));
var useMount = function (fn) {
    useEffectOnce_1.default(function () {
        fn();
    });
};
exports["default"] = useMount;


/***/ }),

/***/ 95929:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
function useMountedState() {
    var mountedRef = react_1.useRef(false);
    var get = react_1.useCallback(function () { return mountedRef.current; }, []);
    react_1.useEffect(function () {
        mountedRef.current = true;
        return function () {
            mountedRef.current = false;
        };
    }, []);
    return get;
}
exports["default"] = useMountedState;


/***/ }),

/***/ 598:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var useRafState_1 = tslib_1.__importDefault(__webpack_require__(79050));
var util_1 = __webpack_require__(88387);
var useMouse = function (ref) {
    if (false) {}
    var _a = useRafState_1.default({
        docX: 0,
        docY: 0,
        posX: 0,
        posY: 0,
        elX: 0,
        elY: 0,
        elH: 0,
        elW: 0,
    }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var moveHandler = function (event) {
            if (ref && ref.current) {
                var _a = ref.current.getBoundingClientRect(), left = _a.left, top_1 = _a.top, elW = _a.width, elH = _a.height;
                var posX = left + window.pageXOffset;
                var posY = top_1 + window.pageYOffset;
                var elX = event.pageX - posX;
                var elY = event.pageY - posY;
                setState({
                    docX: event.pageX,
                    docY: event.pageY,
                    posX: posX,
                    posY: posY,
                    elX: elX,
                    elY: elY,
                    elH: elH,
                    elW: elW,
                });
            }
        };
        util_1.on(document, 'mousemove', moveHandler);
        return function () {
            util_1.off(document, 'mousemove', moveHandler);
        };
    }, [ref]);
    return state;
};
exports["default"] = useMouse;


/***/ }),

/***/ 14828:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var useHoverDirty_1 = tslib_1.__importDefault(__webpack_require__(26916));
var useMouse_1 = tslib_1.__importDefault(__webpack_require__(598));
var nullRef = { current: null };
var useMouseHovered = function (ref, options) {
    if (options === void 0) { options = {}; }
    var whenHovered = !!options.whenHovered;
    var bound = !!options.bound;
    var isHovered = useHoverDirty_1.default(ref, whenHovered);
    var state = useMouse_1.default(whenHovered && !isHovered ? nullRef : ref);
    if (bound) {
        state.elX = Math.max(0, Math.min(state.elX, state.elW));
        state.elY = Math.max(0, Math.min(state.elY, state.elH));
    }
    return state;
};
exports["default"] = useMouseHovered;


/***/ }),

/***/ 54233:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var util_1 = __webpack_require__(88387);
exports["default"] = (function () {
    var _a = react_1.useState(0), mouseWheelScrolled = _a[0], setMouseWheelScrolled = _a[1];
    react_1.useEffect(function () {
        var updateScroll = function (e) {
            setMouseWheelScrolled(e.deltaY + mouseWheelScrolled);
        };
        util_1.on(window, 'wheel', updateScroll, false);
        return function () { return util_1.off(window, 'wheel', updateScroll); };
    });
    return mouseWheelScrolled;
});


/***/ }),

/***/ 92817:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useMultiStateValidator = void 0;
var react_1 = __webpack_require__(67294);
function useMultiStateValidator(states, validator, initialValidity) {
    if (initialValidity === void 0) { initialValidity = [undefined]; }
    if (typeof states !== 'object') {
        throw new Error('states expected to be an object or array, got ' + typeof states);
    }
    var validatorInner = react_1.useRef(validator);
    var statesInner = react_1.useRef(states);
    validatorInner.current = validator;
    statesInner.current = states;
    var _a = react_1.useState(initialValidity), validity = _a[0], setValidity = _a[1];
    var validate = react_1.useCallback(function () {
        if (validatorInner.current.length >= 2) {
            validatorInner.current(statesInner.current, setValidity);
        }
        else {
            setValidity(validatorInner.current(statesInner.current));
        }
    }, [setValidity]);
    react_1.useEffect(function () {
        validate();
    }, Object.values(states));
    return [validity, validate];
}
exports.useMultiStateValidator = useMultiStateValidator;


/***/ }),

/***/ 87843:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var util_1 = __webpack_require__(88387);
var nav = util_1.isNavigator ? navigator : undefined;
var conn = nav && (nav.connection || nav.mozConnection || nav.webkitConnection);
function getConnectionState(previousState) {
    var online = nav === null || nav === void 0 ? void 0 : nav.onLine;
    var previousOnline = previousState === null || previousState === void 0 ? void 0 : previousState.online;
    return {
        online: online,
        previous: previousOnline,
        since: online !== previousOnline ? new Date() : previousState === null || previousState === void 0 ? void 0 : previousState.since,
        downlink: conn === null || conn === void 0 ? void 0 : conn.downlink,
        downlinkMax: conn === null || conn === void 0 ? void 0 : conn.downlinkMax,
        effectiveType: conn === null || conn === void 0 ? void 0 : conn.effectiveType,
        rtt: conn === null || conn === void 0 ? void 0 : conn.rtt,
        saveData: conn === null || conn === void 0 ? void 0 : conn.saveData,
        type: conn === null || conn === void 0 ? void 0 : conn.type,
    };
}
function useNetworkState(initialState) {
    var _a = react_1.useState(initialState !== null && initialState !== void 0 ? initialState : getConnectionState), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var handleStateChange = function () {
            setState(getConnectionState);
        };
        util_1.on(window, 'online', handleStateChange, { passive: true });
        util_1.on(window, 'offline', handleStateChange, { passive: true });
        if (conn) {
            util_1.on(conn, 'change', handleStateChange, { passive: true });
        }
        return function () {
            util_1.off(window, 'online', handleStateChange);
            util_1.off(window, 'offline', handleStateChange);
            if (conn) {
                util_1.off(conn, 'change', handleStateChange);
            }
        };
    }, []);
    return state;
}
exports["default"] = useNetworkState;


/***/ }),

/***/ 36187:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var useCounter_1 = tslib_1.__importDefault(__webpack_require__(5627));
exports["default"] = useCounter_1.default;


/***/ }),

/***/ 78504:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var useIsomorphicLayoutEffect_1 = tslib_1.__importDefault(__webpack_require__(69864));
function useObservable(observable$, initialValue) {
    var _a = react_1.useState(initialValue), value = _a[0], update = _a[1];
    useIsomorphicLayoutEffect_1.default(function () {
        var s = observable$.subscribe(update);
        return function () { return s.unsubscribe(); };
    }, [observable$]);
    return value;
}
exports["default"] = useObservable;


/***/ }),

/***/ 76763:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var util_1 = __webpack_require__(88387);
var defaultState = {
    angle: 0,
    type: 'landscape-primary',
};
var useOrientation = function (initialState) {
    if (initialState === void 0) { initialState = defaultState; }
    var _a = react_1.useState(initialState), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var screen = window.screen;
        var mounted = true;
        var onChange = function () {
            if (mounted) {
                var orientation_1 = screen.orientation;
                if (orientation_1) {
                    var angle = orientation_1.angle, type = orientation_1.type;
                    setState({ angle: angle, type: type });
                }
                else if (window.orientation !== undefined) {
                    setState({
                        angle: typeof window.orientation === 'number' ? window.orientation : 0,
                        type: '',
                    });
                }
                else {
                    setState(initialState);
                }
            }
        };
        util_1.on(window, 'orientationchange', onChange);
        onChange();
        return function () {
            mounted = false;
            util_1.off(window, 'orientationchange', onChange);
        };
    }, []);
    return state;
};
exports["default"] = useOrientation;


/***/ }),

/***/ 80725:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var util_1 = __webpack_require__(88387);
var usePageLeave = function (onPageLeave, args) {
    if (args === void 0) { args = []; }
    react_1.useEffect(function () {
        if (!onPageLeave) {
            return;
        }
        var handler = function (event) {
            event = event ? event : window.event;
            var from = event.relatedTarget || event.toElement;
            if (!from || from.nodeName === 'HTML') {
                onPageLeave();
            }
        };
        util_1.on(document, 'mouseout', handler);
        return function () {
            util_1.off(document, 'mouseout', handler);
        };
    }, args);
};
exports["default"] = usePageLeave;


/***/ }),

/***/ 57401:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var util_1 = __webpack_require__(88387);
// const usePermission = <T extends PermissionDescriptor>(permissionDesc: T): IState => {
var usePermission = function (permissionDesc) {
    var _a = react_1.useState(''), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var mounted = true;
        var permissionStatus = null;
        var onChange = function () {
            if (!mounted) {
                return;
            }
            setState(function () { var _a; return (_a = permissionStatus === null || permissionStatus === void 0 ? void 0 : permissionStatus.state) !== null && _a !== void 0 ? _a : ''; });
        };
        navigator.permissions
            .query(permissionDesc)
            .then(function (status) {
            permissionStatus = status;
            util_1.on(permissionStatus, 'change', onChange);
            onChange();
        })
            .catch(util_1.noop);
        return function () {
            permissionStatus && util_1.off(permissionStatus, 'change', onChange);
            mounted = false;
            permissionStatus = null;
        };
    }, [permissionDesc]);
    return state;
};
exports["default"] = usePermission;


/***/ }),

/***/ 90832:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
function usePrevious(state) {
    var ref = react_1.useRef();
    react_1.useEffect(function () {
        ref.current = state;
    });
    return ref.current;
}
exports["default"] = usePrevious;


/***/ }),

/***/ 78382:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var useFirstMountState_1 = __webpack_require__(91784);
var strictEquals = function (prev, next) { return prev === next; };
function usePreviousDistinct(value, compare) {
    if (compare === void 0) { compare = strictEquals; }
    var prevRef = react_1.useRef();
    var curRef = react_1.useRef(value);
    var isFirstMount = useFirstMountState_1.useFirstMountState();
    if (!isFirstMount && !compare(curRef.current, value)) {
        prevRef.current = curRef.current;
        curRef.current = value;
    }
    return prevRef.current;
}
exports["default"] = usePreviousDistinct;


/***/ }),

/***/ 88190:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var useMountedState_1 = tslib_1.__importDefault(__webpack_require__(95929));
var usePromise = function () {
    var isMounted = useMountedState_1.default();
    return react_1.useCallback(function (promise) {
        return new Promise(function (resolve, reject) {
            var onValue = function (value) {
                isMounted() && resolve(value);
            };
            var onError = function (error) {
                isMounted() && reject(error);
            };
            promise.then(onValue, onError);
        });
    }, []);
};
exports["default"] = usePromise;


/***/ }),

/***/ 43389:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var useQueue = function (initialValue) {
    if (initialValue === void 0) { initialValue = []; }
    var _a = react_1.useState(initialValue), state = _a[0], set = _a[1];
    return {
        add: function (value) {
            set(function (queue) { return tslib_1.__spreadArrays(queue, [value]); });
        },
        remove: function () {
            var result;
            set(function (_a) {
                var first = _a[0], rest = _a.slice(1);
                result = first;
                return rest;
            });
            return result;
        },
        get first() {
            return state[0];
        },
        get last() {
            return state[state.length - 1];
        },
        get size() {
            return state.length;
        },
    };
};
exports["default"] = useQueue;


/***/ }),

/***/ 46082:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var useIsomorphicLayoutEffect_1 = tslib_1.__importDefault(__webpack_require__(69864));
var useRaf = function (ms, delay) {
    if (ms === void 0) { ms = 1e12; }
    if (delay === void 0) { delay = 0; }
    var _a = react_1.useState(0), elapsed = _a[0], set = _a[1];
    useIsomorphicLayoutEffect_1.default(function () {
        var raf;
        var timerStop;
        var start;
        var onFrame = function () {
            var time = Math.min(1, (Date.now() - start) / ms);
            set(time);
            loop();
        };
        var loop = function () {
            raf = requestAnimationFrame(onFrame);
        };
        var onStart = function () {
            timerStop = setTimeout(function () {
                cancelAnimationFrame(raf);
                set(1);
            }, ms);
            start = Date.now();
            loop();
        };
        var timerDelay = setTimeout(onStart, delay);
        return function () {
            clearTimeout(timerStop);
            clearTimeout(timerDelay);
            cancelAnimationFrame(raf);
        };
    }, [ms, delay]);
    return elapsed;
};
exports["default"] = useRaf;


/***/ }),

/***/ 96740:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
function useRafLoop(callback, initiallyActive) {
    if (initiallyActive === void 0) { initiallyActive = true; }
    var raf = react_1.useRef(null);
    var rafActivity = react_1.useRef(false);
    var rafCallback = react_1.useRef(callback);
    rafCallback.current = callback;
    var step = react_1.useCallback(function (time) {
        if (rafActivity.current) {
            rafCallback.current(time);
            raf.current = requestAnimationFrame(step);
        }
    }, []);
    var result = react_1.useMemo(function () {
        return [
            function () {
                // stop
                if (rafActivity.current) {
                    rafActivity.current = false;
                    raf.current && cancelAnimationFrame(raf.current);
                }
            },
            function () {
                // start
                if (!rafActivity.current) {
                    rafActivity.current = true;
                    raf.current = requestAnimationFrame(step);
                }
            },
            function () { return rafActivity.current; },
        ];
    }, []);
    react_1.useEffect(function () {
        if (initiallyActive) {
            result[1]();
        }
        return result[0];
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return result;
}
exports["default"] = useRafLoop;


/***/ }),

/***/ 79050:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var useUnmount_1 = tslib_1.__importDefault(__webpack_require__(86258));
var useRafState = function (initialState) {
    var frame = react_1.useRef(0);
    var _a = react_1.useState(initialState), state = _a[0], setState = _a[1];
    var setRafState = react_1.useCallback(function (value) {
        cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(function () {
            setState(value);
        });
    }, []);
    useUnmount_1.default(function () {
        cancelAnimationFrame(frame.current);
    });
    return [state, setRafState];
};
exports["default"] = useRafState;


/***/ }),

/***/ 86788:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useRendersCount = void 0;
var react_1 = __webpack_require__(67294);
function useRendersCount() {
    return ++react_1.useRef(0).current;
}
exports.useRendersCount = useRendersCount;


/***/ }),

/***/ 49423:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScratchSensor = void 0;
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var react_universal_interface_1 = __webpack_require__(96260);
var useLatest_1 = tslib_1.__importDefault(__webpack_require__(1974));
var util_1 = __webpack_require__(88387);
var useScratch = function (params) {
    if (params === void 0) { params = {}; }
    var disabled = params.disabled;
    var paramsRef = useLatest_1.default(params);
    var _a = react_1.useState({ isScratching: false }), state = _a[0], setState = _a[1];
    var refState = react_1.useRef(state);
    var refScratching = react_1.useRef(false);
    var refAnimationFrame = react_1.useRef(null);
    var _b = react_1.useState(null), el = _b[0], setEl = _b[1];
    react_1.useEffect(function () {
        if (disabled)
            return;
        if (!el)
            return;
        var onMoveEvent = function (docX, docY) {
            cancelAnimationFrame(refAnimationFrame.current);
            refAnimationFrame.current = requestAnimationFrame(function () {
                var _a = el.getBoundingClientRect(), left = _a.left, top = _a.top;
                var elX = left + window.scrollX;
                var elY = top + window.scrollY;
                var x = docX - elX;
                var y = docY - elY;
                setState(function (oldState) {
                    var newState = tslib_1.__assign(tslib_1.__assign({}, oldState), { dx: x - (oldState.x || 0), dy: y - (oldState.y || 0), end: Date.now(), isScratching: true });
                    refState.current = newState;
                    (paramsRef.current.onScratch || util_1.noop)(newState);
                    return newState;
                });
            });
        };
        var onMouseMove = function (event) {
            onMoveEvent(event.pageX, event.pageY);
        };
        var onTouchMove = function (event) {
            onMoveEvent(event.changedTouches[0].pageX, event.changedTouches[0].pageY);
        };
        var onMouseUp;
        var onTouchEnd;
        var stopScratching = function () {
            if (!refScratching.current)
                return;
            refScratching.current = false;
            refState.current = tslib_1.__assign(tslib_1.__assign({}, refState.current), { isScratching: false });
            (paramsRef.current.onScratchEnd || util_1.noop)(refState.current);
            setState({ isScratching: false });
            util_1.off(window, 'mousemove', onMouseMove);
            util_1.off(window, 'touchmove', onTouchMove);
            util_1.off(window, 'mouseup', onMouseUp);
            util_1.off(window, 'touchend', onTouchEnd);
        };
        onMouseUp = stopScratching;
        onTouchEnd = stopScratching;
        var startScratching = function (docX, docY) {
            if (!refScratching.current)
                return;
            var _a = el.getBoundingClientRect(), left = _a.left, top = _a.top;
            var elX = left + window.scrollX;
            var elY = top + window.scrollY;
            var x = docX - elX;
            var y = docY - elY;
            var time = Date.now();
            var newState = {
                isScratching: true,
                start: time,
                end: time,
                docX: docX,
                docY: docY,
                x: x,
                y: y,
                dx: 0,
                dy: 0,
                elH: el.offsetHeight,
                elW: el.offsetWidth,
                elX: elX,
                elY: elY,
            };
            refState.current = newState;
            (paramsRef.current.onScratchStart || util_1.noop)(newState);
            setState(newState);
            util_1.on(window, 'mousemove', onMouseMove);
            util_1.on(window, 'touchmove', onTouchMove);
            util_1.on(window, 'mouseup', onMouseUp);
            util_1.on(window, 'touchend', onTouchEnd);
        };
        var onMouseDown = function (event) {
            refScratching.current = true;
            startScratching(event.pageX, event.pageY);
        };
        var onTouchStart = function (event) {
            refScratching.current = true;
            startScratching(event.changedTouches[0].pageX, event.changedTouches[0].pageY);
        };
        util_1.on(el, 'mousedown', onMouseDown);
        util_1.on(el, 'touchstart', onTouchStart);
        return function () {
            util_1.off(el, 'mousedown', onMouseDown);
            util_1.off(el, 'touchstart', onTouchStart);
            util_1.off(window, 'mousemove', onMouseMove);
            util_1.off(window, 'touchmove', onTouchMove);
            util_1.off(window, 'mouseup', onMouseUp);
            util_1.off(window, 'touchend', onTouchEnd);
            if (refAnimationFrame.current)
                cancelAnimationFrame(refAnimationFrame.current);
            refAnimationFrame.current = null;
            refScratching.current = false;
            refState.current = { isScratching: false };
            setState(refState.current);
        };
    }, [el, disabled, paramsRef]);
    return [setEl, state];
};
var ScratchSensor = function (props) {
    var children = props.children, params = tslib_1.__rest(props, ["children"]);
    var _a = useScratch(params), ref = _a[0], state = _a[1];
    var element = react_universal_interface_1.render(props, state);
    return react_1.cloneElement(element, tslib_1.__assign(tslib_1.__assign({}, element.props), { ref: function (el) {
            if (element.props.ref) {
                if (typeof element.props.ref === 'object')
                    element.props.ref.current = el;
                if (typeof element.props.ref === 'function')
                    element.props.ref(el);
            }
            ref(el);
        } }));
};
exports.ScratchSensor = ScratchSensor;
exports["default"] = useScratch;


/***/ }),

/***/ 84266:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var useRafState_1 = tslib_1.__importDefault(__webpack_require__(79050));
var util_1 = __webpack_require__(88387);
var useScroll = function (ref) {
    if (false) {}
    var _a = useRafState_1.default({
        x: 0,
        y: 0,
    }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var handler = function () {
            if (ref.current) {
                setState({
                    x: ref.current.scrollLeft,
                    y: ref.current.scrollTop,
                });
            }
        };
        if (ref.current) {
            util_1.on(ref.current, 'scroll', handler, {
                capture: false,
                passive: true,
            });
        }
        return function () {
            if (ref.current) {
                util_1.off(ref.current, 'scroll', handler);
            }
        };
    }, [ref]);
    return state;
};
exports["default"] = useScroll;


/***/ }),

/***/ 48514:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useScrollbarWidth = void 0;
var scrollbar_width_1 = __webpack_require__(67426);
var react_1 = __webpack_require__(67294);
function useScrollbarWidth() {
    var _a = react_1.useState(scrollbar_width_1.scrollbarWidth()), sbw = _a[0], setSbw = _a[1];
    // this needed to ensure the scrollbar width in case hook called before the DOM is ready
    react_1.useEffect(function () {
        if (typeof sbw !== 'undefined') {
            return;
        }
        var raf = requestAnimationFrame(function () {
            setSbw(scrollbar_width_1.scrollbarWidth());
        });
        return function () { return cancelAnimationFrame(raf); };
    }, []);
    return sbw;
}
exports.useScrollbarWidth = useScrollbarWidth;


/***/ }),

/***/ 93182:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var util_1 = __webpack_require__(88387);
var useScrolling = function (ref) {
    var _a = react_1.useState(false), scrolling = _a[0], setScrolling = _a[1];
    react_1.useEffect(function () {
        if (ref.current) {
            var scrollingTimeout_1;
            var handleScrollEnd_1 = function () {
                setScrolling(false);
            };
            var handleScroll_1 = function () {
                setScrolling(true);
                clearTimeout(scrollingTimeout_1);
                scrollingTimeout_1 = setTimeout(function () { return handleScrollEnd_1(); }, 150);
            };
            util_1.on(ref.current, 'scroll', handleScroll_1, false);
            return function () {
                if (ref.current) {
                    util_1.off(ref.current, 'scroll', handleScroll_1, false);
                }
            };
        }
        return function () { };
    }, [ref]);
    return scrolling;
};
exports["default"] = useScrolling;


/***/ }),

/***/ 50587:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var util_1 = __webpack_require__(88387);
var getValue = function (search, param) { return new URLSearchParams(search).get(param); };
var useSearchParam = function (param) {
    var location = window.location;
    var _a = react_1.useState(function () { return getValue(location.search, param); }), value = _a[0], setValue = _a[1];
    react_1.useEffect(function () {
        var onChange = function () {
            setValue(getValue(location.search, param));
        };
        util_1.on(window, 'popstate', onChange);
        util_1.on(window, 'pushstate', onChange);
        util_1.on(window, 'replacestate', onChange);
        return function () {
            util_1.off(window, 'popstate', onChange);
            util_1.off(window, 'pushstate', onChange);
            util_1.off(window, 'replacestate', onChange);
        };
    }, []);
    return value;
};
var useSearchParamServer = function () { return null; };
exports["default"] = util_1.isBrowser ? useSearchParam : useSearchParamServer;


/***/ }),

/***/ 91142:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var util_1 = __webpack_require__(88387);
var useSessionStorage = function (key, initialValue, raw) {
    if (!util_1.isBrowser) {
        return [initialValue, function () { }];
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var _a = react_1.useState(function () {
        try {
            var sessionStorageValue = sessionStorage.getItem(key);
            if (typeof sessionStorageValue !== 'string') {
                sessionStorage.setItem(key, raw ? String(initialValue) : JSON.stringify(initialValue));
                return initialValue;
            }
            else {
                return raw ? sessionStorageValue : JSON.parse(sessionStorageValue || 'null');
            }
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // sessionStorage can throw. JSON.parse and JSON.stringify
            // can throw, too.
            return initialValue;
        }
    }), state = _a[0], setState = _a[1];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react_1.useEffect(function () {
        try {
            var serializedState = raw ? String(state) : JSON.stringify(state);
            sessionStorage.setItem(key, serializedState);
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // sessionStorage can throw. Also JSON.stringify can throw.
        }
    });
    return [state, setState];
};
exports["default"] = useSessionStorage;


/***/ }),

/***/ 32259:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var useSet = function (initialSet) {
    if (initialSet === void 0) { initialSet = new Set(); }
    var _a = react_1.useState(initialSet), set = _a[0], setSet = _a[1];
    var stableActions = react_1.useMemo(function () {
        var add = function (item) { return setSet(function (prevSet) { return new Set(tslib_1.__spreadArrays(Array.from(prevSet), [item])); }); };
        var remove = function (item) {
            return setSet(function (prevSet) { return new Set(Array.from(prevSet).filter(function (i) { return i !== item; })); });
        };
        var toggle = function (item) {
            return setSet(function (prevSet) {
                return prevSet.has(item)
                    ? new Set(Array.from(prevSet).filter(function (i) { return i !== item; }))
                    : new Set(tslib_1.__spreadArrays(Array.from(prevSet), [item]));
            });
        };
        return { add: add, remove: remove, toggle: toggle, reset: function () { return setSet(initialSet); } };
    }, [setSet]);
    var utils = tslib_1.__assign({ has: react_1.useCallback(function (item) { return set.has(item); }, [set]) }, stableActions);
    return [set, utils];
};
exports["default"] = useSet;


/***/ }),

/***/ 14920:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var useSetState = function (initialState) {
    if (initialState === void 0) { initialState = {}; }
    var _a = react_1.useState(initialState), state = _a[0], set = _a[1];
    var setState = react_1.useCallback(function (patch) {
        set(function (prevState) {
            return Object.assign({}, prevState, patch instanceof Function ? patch(prevState) : patch);
        });
    }, []);
    return [state, setState];
};
exports["default"] = useSetState;


/***/ }),

/***/ 15478:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var fast_shallow_equal_1 = __webpack_require__(99376);
var useCustomCompareEffect_1 = tslib_1.__importDefault(__webpack_require__(49909));
var isPrimitive = function (val) { return val !== Object(val); };
var shallowEqualDepsList = function (prevDeps, nextDeps) {
    return prevDeps.every(function (dep, index) { return fast_shallow_equal_1.equal(dep, nextDeps[index]); });
};
var useShallowCompareEffect = function (effect, deps) {
    if (false) {}
    useCustomCompareEffect_1.default(effect, deps, shallowEqualDepsList);
};
exports["default"] = useShallowCompareEffect;


/***/ }),

/***/ 30317:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var React = tslib_1.__importStar(__webpack_require__(67294));
var util_1 = __webpack_require__(88387);
var useState = React.useState, useEffect = React.useEffect, useRef = React.useRef;
var DRAF = function (callback) { return setTimeout(callback, 35); };
var useSize = function (element, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.width, width = _c === void 0 ? Infinity : _c, _d = _b.height, height = _d === void 0 ? Infinity : _d;
    if (!util_1.isBrowser) {
        return [
            typeof element === 'function' ? element({ width: width, height: height }) : element,
            { width: width, height: height },
        ];
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var _e = useState({ width: width, height: height }), state = _e[0], setState = _e[1];
    if (typeof element === 'function') {
        element = element(state);
    }
    var style = element.props.style || {};
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var ref = useRef(null);
    var window = null;
    var setSize = function () {
        var iframe = ref.current;
        var size = iframe
            ? {
                width: iframe.offsetWidth,
                height: iframe.offsetHeight,
            }
            : { width: width, height: height };
        setState(size);
    };
    var onWindow = function (windowToListenOn) {
        util_1.on(windowToListenOn, 'resize', setSize);
        DRAF(setSize);
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(function () {
        var iframe = ref.current;
        if (!iframe) {
            // iframe will be undefined if component is already unmounted
            return;
        }
        if (iframe.contentWindow) {
            window = iframe.contentWindow;
            onWindow(window);
        }
        else {
            var onLoad_1 = function () {
                util_1.on(iframe, 'load', onLoad_1);
                window = iframe.contentWindow;
                onWindow(window);
            };
            util_1.off(iframe, 'load', onLoad_1);
        }
        return function () {
            if (window && window.removeEventListener) {
                util_1.off(window, 'resize', setSize);
            }
        };
    }, []);
    style.position = 'relative';
    var sized = React.cloneElement.apply(React, tslib_1.__spreadArrays([element, { style: style }], tslib_1.__spreadArrays([
        React.createElement('iframe', {
            ref: ref,
            style: {
                background: 'transparent',
                border: 'none',
                height: '100%',
                left: 0,
                position: 'absolute',
                top: 0,
                width: '100%',
                zIndex: -1,
            },
        })
    ], React.Children.toArray(element.props.children))));
    return [sized, state];
};
exports["default"] = useSize;


/***/ }),

/***/ 25827:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var util_1 = __webpack_require__(88387);
var useMountedState_1 = tslib_1.__importDefault(__webpack_require__(95929));
var useSetState_1 = tslib_1.__importDefault(__webpack_require__(14920));
var useSlider = function (ref, options) {
    if (options === void 0) { options = {}; }
    var isMounted = useMountedState_1.default();
    var isSliding = react_1.useRef(false);
    var valueRef = react_1.useRef(0);
    var frame = react_1.useRef(0);
    var _a = useSetState_1.default({
        isSliding: false,
        value: 0,
    }), state = _a[0], setState = _a[1];
    valueRef.current = state.value;
    react_1.useEffect(function () {
        if (util_1.isBrowser) {
            var styles = options.styles === undefined ? true : options.styles;
            var reverse_1 = options.reverse === undefined ? false : options.reverse;
            if (ref.current && styles) {
                ref.current.style.userSelect = 'none';
            }
            var startScrubbing_1 = function () {
                if (!isSliding.current && isMounted()) {
                    (options.onScrubStart || util_1.noop)();
                    isSliding.current = true;
                    setState({ isSliding: true });
                    bindEvents_1();
                }
            };
            var stopScrubbing_1 = function () {
                if (isSliding.current && isMounted()) {
                    (options.onScrubStop || util_1.noop)(valueRef.current);
                    isSliding.current = false;
                    setState({ isSliding: false });
                    unbindEvents_1();
                }
            };
            var onMouseDown_1 = function (event) {
                startScrubbing_1();
                onMouseMove_1(event);
            };
            var onMouseMove_1 = options.vertical
                ? function (event) { return onScrub_1(event.clientY); }
                : function (event) { return onScrub_1(event.clientX); };
            var onTouchStart_1 = function (event) {
                startScrubbing_1();
                onTouchMove_1(event);
            };
            var onTouchMove_1 = options.vertical
                ? function (event) { return onScrub_1(event.changedTouches[0].clientY); }
                : function (event) { return onScrub_1(event.changedTouches[0].clientX); };
            var bindEvents_1 = function () {
                util_1.on(document, 'mousemove', onMouseMove_1);
                util_1.on(document, 'mouseup', stopScrubbing_1);
                util_1.on(document, 'touchmove', onTouchMove_1);
                util_1.on(document, 'touchend', stopScrubbing_1);
            };
            var unbindEvents_1 = function () {
                util_1.off(document, 'mousemove', onMouseMove_1);
                util_1.off(document, 'mouseup', stopScrubbing_1);
                util_1.off(document, 'touchmove', onTouchMove_1);
                util_1.off(document, 'touchend', stopScrubbing_1);
            };
            var onScrub_1 = function (clientXY) {
                cancelAnimationFrame(frame.current);
                frame.current = requestAnimationFrame(function () {
                    if (isMounted() && ref.current) {
                        var rect = ref.current.getBoundingClientRect();
                        var pos = options.vertical ? rect.top : rect.left;
                        var length_1 = options.vertical ? rect.height : rect.width;
                        // Prevent returning 0 when element is hidden by CSS
                        if (!length_1) {
                            return;
                        }
                        var value = (clientXY - pos) / length_1;
                        if (value > 1) {
                            value = 1;
                        }
                        else if (value < 0) {
                            value = 0;
                        }
                        if (reverse_1) {
                            value = 1 - value;
                        }
                        setState({
                            value: value,
                        });
                        (options.onScrub || util_1.noop)(value);
                    }
                });
            };
            util_1.on(ref.current, 'mousedown', onMouseDown_1);
            util_1.on(ref.current, 'touchstart', onTouchStart_1);
            return function () {
                util_1.off(ref.current, 'mousedown', onMouseDown_1);
                util_1.off(ref.current, 'touchstart', onTouchStart_1);
            };
        }
        else {
            return undefined;
        }
    }, [ref, options.vertical]);
    return state;
};
exports["default"] = useSlider;


/***/ }),

/***/ 29897:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var Status;
(function (Status) {
    Status[Status["init"] = 0] = "init";
    Status[Status["play"] = 1] = "play";
    Status[Status["pause"] = 2] = "pause";
    Status[Status["end"] = 3] = "end";
})(Status || (Status = {}));
var useSpeech = function (text, options) {
    var mounted = react_1.useRef(false);
    var _a = react_1.useState(function () {
        var _a = options.voice || {}, _b = _a.lang, lang = _b === void 0 ? 'default' : _b, _c = _a.name, name = _c === void 0 ? '' : _c;
        return {
            isPlaying: false,
            status: Status[Status.init],
            lang: options.lang || 'default',
            voiceInfo: { lang: lang, name: name },
            rate: options.rate || 1,
            pitch: options.pitch || 1,
            volume: options.volume || 1,
        };
    }), state = _a[0], setState = _a[1];
    var handlePlay = react_1.useCallback(function () {
        if (!mounted.current) {
            return;
        }
        setState(function (preState) {
            return tslib_1.__assign(tslib_1.__assign({}, preState), { isPlaying: true, status: Status[Status.play] });
        });
    }, []);
    var handlePause = react_1.useCallback(function () {
        if (!mounted.current) {
            return;
        }
        setState(function (preState) {
            return tslib_1.__assign(tslib_1.__assign({}, preState), { isPlaying: false, status: Status[Status.pause] });
        });
    }, []);
    var handleEnd = react_1.useCallback(function () {
        if (!mounted.current) {
            return;
        }
        setState(function (preState) {
            return tslib_1.__assign(tslib_1.__assign({}, preState), { isPlaying: false, status: Status[Status.end] });
        });
    }, []);
    react_1.useEffect(function () {
        mounted.current = true;
        var utterance = new SpeechSynthesisUtterance(text);
        options.lang && (utterance.lang = options.lang);
        options.voice && (utterance.voice = options.voice);
        utterance.rate = options.rate || 1;
        utterance.pitch = options.pitch || 1;
        utterance.volume = options.volume || 1;
        utterance.onstart = handlePlay;
        utterance.onpause = handlePause;
        utterance.onresume = handlePlay;
        utterance.onend = handleEnd;
        window.speechSynthesis.speak(utterance);
        return function () {
            mounted.current = false;
        };
    }, []);
    return state;
};
exports["default"] = useSpeech;


/***/ }),

/***/ 84830:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var useIsomorphicLayoutEffect_1 = tslib_1.__importDefault(__webpack_require__(69864));
var util_1 = __webpack_require__(88387);
var isFocusedElementEditable = function () {
    var activeElement = document.activeElement, body = document.body;
    if (!activeElement) {
        return false;
    }
    // If not element has focus, we assume it is not editable, too.
    if (activeElement === body) {
        return false;
    }
    // Assume <input> and <textarea> elements are editable.
    switch (activeElement.tagName) {
        case 'INPUT':
        case 'TEXTAREA':
            return true;
    }
    // Check if any other focused element id editable.
    return activeElement.hasAttribute('contenteditable');
};
var isTypedCharGood = function (_a) {
    var keyCode = _a.keyCode, metaKey = _a.metaKey, ctrlKey = _a.ctrlKey, altKey = _a.altKey;
    if (metaKey || ctrlKey || altKey) {
        return false;
    }
    // 0...9
    if (keyCode >= 48 && keyCode <= 57) {
        return true;
    }
    // a...z
    if (keyCode >= 65 && keyCode <= 90) {
        return true;
    }
    // All other keys.
    return false;
};
var useStartTyping = function (onStartTyping) {
    useIsomorphicLayoutEffect_1.default(function () {
        var keydown = function (event) {
            !isFocusedElementEditable() && isTypedCharGood(event) && onStartTyping(event);
        };
        util_1.on(document, 'keydown', keydown);
        return function () {
            util_1.off(document, 'keydown', keydown);
        };
    }, []);
};
exports["default"] = useStartTyping;


/***/ }),

/***/ 28750:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var useMountedState_1 = tslib_1.__importDefault(__webpack_require__(95929));
var useUpdate_1 = tslib_1.__importDefault(__webpack_require__(91213));
var useUpdateEffect_1 = tslib_1.__importDefault(__webpack_require__(21794));
function useStateList(stateSet) {
    if (stateSet === void 0) { stateSet = []; }
    var isMounted = useMountedState_1.default();
    var update = useUpdate_1.default();
    var index = react_1.useRef(0);
    // If new state list is shorter that before - switch to the last element
    useUpdateEffect_1.default(function () {
        if (stateSet.length <= index.current) {
            index.current = stateSet.length - 1;
            update();
        }
    }, [stateSet.length]);
    var actions = react_1.useMemo(function () { return ({
        next: function () { return actions.setStateAt(index.current + 1); },
        prev: function () { return actions.setStateAt(index.current - 1); },
        setStateAt: function (newIndex) {
            // do nothing on unmounted component
            if (!isMounted())
                return;
            // do nothing on empty states list
            if (!stateSet.length)
                return;
            // in case new index is equal current - do nothing
            if (newIndex === index.current)
                return;
            // it gives the ability to travel through the left and right borders.
            // 4ex: if list contains 5 elements, attempt to set index 9 will bring use to 5th element
            // in case of negative index it will start counting from the right, so -17 will bring us to 4th element
            index.current =
                newIndex >= 0
                    ? newIndex % stateSet.length
                    : stateSet.length + (newIndex % stateSet.length);
            update();
        },
        setState: function (state) {
            // do nothing on unmounted component
            if (!isMounted())
                return;
            var newIndex = stateSet.length ? stateSet.indexOf(state) : -1;
            if (newIndex === -1) {
                throw new Error("State '" + state + "' is not a valid state (does not exist in state list)");
            }
            index.current = newIndex;
            update();
        },
    }); }, [stateSet]);
    return tslib_1.__assign({ state: stateSet[index.current], currentIndex: index.current }, actions);
}
exports["default"] = useStateList;


/***/ }),

/***/ 60085:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
function useStateValidator(state, validator, initialState) {
    if (initialState === void 0) { initialState = [undefined]; }
    var validatorInner = react_1.useRef(validator);
    var stateInner = react_1.useRef(state);
    validatorInner.current = validator;
    stateInner.current = state;
    var _a = react_1.useState(initialState), validity = _a[0], setValidity = _a[1];
    var validate = react_1.useCallback(function () {
        if (validatorInner.current.length >= 2) {
            validatorInner.current(stateInner.current, setValidity);
        }
        else {
            setValidity(validatorInner.current(stateInner.current));
        }
    }, [setValidity]);
    react_1.useEffect(function () {
        validate();
    }, [state]);
    return [validity, validate];
}
exports["default"] = useStateValidator;


/***/ }),

/***/ 25520:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useStateWithHistory = void 0;
var react_1 = __webpack_require__(67294);
var useFirstMountState_1 = __webpack_require__(91784);
var hookState_1 = __webpack_require__(88850);
function useStateWithHistory(initialState, capacity, initialHistory) {
    if (capacity === void 0) { capacity = 10; }
    if (capacity < 1) {
        throw new Error("Capacity has to be greater than 1, got '" + capacity + "'");
    }
    var isFirstMount = useFirstMountState_1.useFirstMountState();
    var _a = react_1.useState(initialState), state = _a[0], innerSetState = _a[1];
    var history = react_1.useRef((initialHistory !== null && initialHistory !== void 0 ? initialHistory : []));
    var historyPosition = react_1.useRef(0);
    // do the states manipulation only on first mount, no sense to load re-renders with useless calculations
    if (isFirstMount) {
        if (history.current.length) {
            // if last element of history !== initial - push initial to history
            if (history.current[history.current.length - 1] !== initialState) {
                history.current.push(initialState);
            }
            // if initial history bigger that capacity - crop the first elements out
            if (history.current.length > capacity) {
                history.current = history.current.slice(history.current.length - capacity);
            }
        }
        else {
            // initiate the history with initial state
            history.current.push(initialState);
        }
        historyPosition.current = history.current.length && history.current.length - 1;
    }
    var setState = react_1.useCallback(function (newState) {
        innerSetState(function (currentState) {
            newState = hookState_1.resolveHookState(newState, currentState);
            // is state has changed
            if (newState !== currentState) {
                // if current position is not the last - pop element to the right
                if (historyPosition.current < history.current.length - 1) {
                    history.current = history.current.slice(0, historyPosition.current + 1);
                }
                historyPosition.current = history.current.push(newState) - 1;
                // if capacity is reached - shift first elements
                if (history.current.length > capacity) {
                    history.current = history.current.slice(history.current.length - capacity);
                }
            }
            return newState;
        });
    }, [state, capacity]);
    var historyState = react_1.useMemo(function () { return ({
        history: history.current,
        position: historyPosition.current,
        capacity: capacity,
        back: function (amount) {
            if (amount === void 0) { amount = 1; }
            // don't do anything if we already at the left border
            if (!historyPosition.current) {
                return;
            }
            innerSetState(function () {
                historyPosition.current -= Math.min(amount, historyPosition.current);
                return history.current[historyPosition.current];
            });
        },
        forward: function (amount) {
            if (amount === void 0) { amount = 1; }
            // don't do anything if we already at the right border
            if (historyPosition.current === history.current.length - 1) {
                return;
            }
            innerSetState(function () {
                historyPosition.current = Math.min(historyPosition.current + amount, history.current.length - 1);
                return history.current[historyPosition.current];
            });
        },
        go: function (position) {
            if (position === historyPosition.current) {
                return;
            }
            innerSetState(function () {
                historyPosition.current =
                    position < 0
                        ? Math.max(history.current.length + position, 0)
                        : Math.min(history.current.length - 1, position);
                return history.current[historyPosition.current];
            });
        },
    }); }, [state]);
    return [state, setState, historyState];
}
exports.useStateWithHistory = useStateWithHistory;


/***/ }),

/***/ 35010:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var useUnmount_1 = tslib_1.__importDefault(__webpack_require__(86258));
var useThrottle = function (value, ms) {
    if (ms === void 0) { ms = 200; }
    var _a = react_1.useState(value), state = _a[0], setState = _a[1];
    var timeout = react_1.useRef();
    var nextValue = react_1.useRef(null);
    var hasNextValue = react_1.useRef(0);
    react_1.useEffect(function () {
        if (!timeout.current) {
            setState(value);
            var timeoutCallback_1 = function () {
                if (hasNextValue.current) {
                    hasNextValue.current = false;
                    setState(nextValue.current);
                    timeout.current = setTimeout(timeoutCallback_1, ms);
                }
                else {
                    timeout.current = undefined;
                }
            };
            timeout.current = setTimeout(timeoutCallback_1, ms);
        }
        else {
            nextValue.current = value;
            hasNextValue.current = true;
        }
    }, [value]);
    useUnmount_1.default(function () {
        timeout.current && clearTimeout(timeout.current);
    });
    return state;
};
exports["default"] = useThrottle;


/***/ }),

/***/ 10936:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var useUnmount_1 = tslib_1.__importDefault(__webpack_require__(86258));
var useThrottleFn = function (fn, ms, args) {
    if (ms === void 0) { ms = 200; }
    var _a = react_1.useState(null), state = _a[0], setState = _a[1];
    var timeout = react_1.useRef();
    var nextArgs = react_1.useRef();
    react_1.useEffect(function () {
        if (!timeout.current) {
            setState(fn.apply(void 0, args));
            var timeoutCallback_1 = function () {
                if (nextArgs.current) {
                    setState(fn.apply(void 0, nextArgs.current));
                    nextArgs.current = undefined;
                    timeout.current = setTimeout(timeoutCallback_1, ms);
                }
                else {
                    timeout.current = undefined;
                }
            };
            timeout.current = setTimeout(timeoutCallback_1, ms);
        }
        else {
            nextArgs.current = args;
        }
    }, args);
    useUnmount_1.default(function () {
        timeout.current && clearTimeout(timeout.current);
    });
    return state;
};
exports["default"] = useThrottleFn;


/***/ }),

/***/ 62530:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var useTimeoutFn_1 = tslib_1.__importDefault(__webpack_require__(82370));
var useUpdate_1 = tslib_1.__importDefault(__webpack_require__(91213));
function useTimeout(ms) {
    if (ms === void 0) { ms = 0; }
    var update = useUpdate_1.default();
    return useTimeoutFn_1.default(update, ms);
}
exports["default"] = useTimeout;


/***/ }),

/***/ 82370:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
function useTimeoutFn(fn, ms) {
    if (ms === void 0) { ms = 0; }
    var ready = react_1.useRef(false);
    var timeout = react_1.useRef();
    var callback = react_1.useRef(fn);
    var isReady = react_1.useCallback(function () { return ready.current; }, []);
    var set = react_1.useCallback(function () {
        ready.current = false;
        timeout.current && clearTimeout(timeout.current);
        timeout.current = setTimeout(function () {
            ready.current = true;
            callback.current();
        }, ms);
    }, [ms]);
    var clear = react_1.useCallback(function () {
        ready.current = null;
        timeout.current && clearTimeout(timeout.current);
    }, []);
    // update ref when function changes
    react_1.useEffect(function () {
        callback.current = fn;
    }, [fn]);
    // set on mount, clear on unmount
    react_1.useEffect(function () {
        set();
        return clear;
    }, [ms]);
    return [isReady, clear, set];
}
exports["default"] = useTimeoutFn;


/***/ }),

/***/ 14732:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var DEFAULT_USE_TITLE_OPTIONS = {
    restoreOnUnmount: false,
};
function useTitle(title, options) {
    if (options === void 0) { options = DEFAULT_USE_TITLE_OPTIONS; }
    var prevTitleRef = react_1.useRef(document.title);
    if (document.title !== title)
        document.title = title;
    react_1.useEffect(function () {
        if (options && options.restoreOnUnmount) {
            return function () {
                document.title = prevTitleRef.current;
            };
        }
        else {
            return;
        }
    }, []);
}
exports["default"] = typeof document !== 'undefined' ? useTitle : function (_title) { };


/***/ }),

/***/ 73809:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var toggleReducer = function (state, nextValue) {
    return typeof nextValue === 'boolean' ? nextValue : !state;
};
var useToggle = function (initialValue) {
    return react_1.useReducer(toggleReducer, initialValue);
};
exports["default"] = useToggle;


/***/ }),

/***/ 56164:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var ts_easing_1 = __webpack_require__(75534);
var useRaf_1 = tslib_1.__importDefault(__webpack_require__(46082));
var useTween = function (easingName, ms, delay) {
    if (easingName === void 0) { easingName = 'inCirc'; }
    if (ms === void 0) { ms = 200; }
    if (delay === void 0) { delay = 0; }
    var fn = ts_easing_1.easing[easingName];
    var t = useRaf_1.default(ms, delay);
    if (false) {}
    return fn(t);
};
exports["default"] = useTween;


/***/ }),

/***/ 86258:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var useEffectOnce_1 = tslib_1.__importDefault(__webpack_require__(16713));
var useUnmount = function (fn) {
    var fnRef = react_1.useRef(fn);
    // update the ref each render so if it change the newest callback will be invoked
    fnRef.current = fn;
    useEffectOnce_1.default(function () { return function () { return fnRef.current(); }; });
};
exports["default"] = useUnmount;


/***/ }),

/***/ 69011:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var useEffectOnce_1 = tslib_1.__importDefault(__webpack_require__(16713));
var useUnmountPromise = function () {
    var refUnmounted = react_1.useRef(false);
    useEffectOnce_1.default(function () { return function () {
        refUnmounted.current = true;
    }; });
    var wrapper = react_1.useMemo(function () {
        var race = function (promise, onError) {
            var newPromise = new Promise(function (resolve, reject) {
                promise.then(function (result) {
                    if (!refUnmounted.current)
                        resolve(result);
                }, function (error) {
                    if (!refUnmounted.current)
                        reject(error);
                    else if (onError)
                        onError(error);
                    else
                        console.error('useUnmountPromise', error);
                });
            });
            return newPromise;
        };
        return race;
    }, []);
    return wrapper;
};
exports["default"] = useUnmountPromise;


/***/ }),

/***/ 91213:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var updateReducer = function (num) { return (num + 1) % 1000000; };
function useUpdate() {
    var _a = react_1.useReducer(updateReducer, 0), update = _a[1];
    return update;
}
exports["default"] = useUpdate;


/***/ }),

/***/ 21794:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var useFirstMountState_1 = __webpack_require__(91784);
var useUpdateEffect = function (effect, deps) {
    var isFirstMount = useFirstMountState_1.useFirstMountState();
    react_1.useEffect(function () {
        if (!isFirstMount) {
            return effect();
        }
    }, deps);
};
exports["default"] = useUpdateEffect;


/***/ }),

/***/ 7434:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var useList_1 = tslib_1.__importDefault(__webpack_require__(67335));
/**
 * @deprecated Use `useList` hook's upsert action instead
 */
function useUpsert(predicate, initialList) {
    if (initialList === void 0) { initialList = []; }
    var _a = useList_1.default(initialList), list = _a[0], listActions = _a[1];
    return [
        list,
        tslib_1.__assign(tslib_1.__assign({}, listActions), { upsert: function (newItem) {
                listActions.upsert(predicate, newItem);
            } }),
    ];
}
exports["default"] = useUpsert;


/***/ }),

/***/ 85165:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __webpack_require__(67294);
var util_1 = __webpack_require__(88387);
var isVibrationApiSupported = util_1.isNavigator && 'vibrate' in navigator;
function useVibrate(enabled, pattern, loop) {
    if (enabled === void 0) { enabled = true; }
    if (pattern === void 0) { pattern = [1000, 1000]; }
    if (loop === void 0) { loop = true; }
    react_1.useEffect(function () {
        var interval;
        if (enabled) {
            navigator.vibrate(pattern);
            if (loop) {
                var duration = pattern instanceof Array ? pattern.reduce(function (a, b) { return a + b; }) : pattern;
                interval = setInterval(function () {
                    navigator.vibrate(pattern);
                }, duration);
            }
        }
        return function () {
            if (enabled) {
                navigator.vibrate(0);
                if (loop) {
                    clearInterval(interval);
                }
            }
        };
    }, [enabled]);
}
exports["default"] = isVibrationApiSupported ? useVibrate : util_1.noop;


/***/ }),

/***/ 42237:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var createHTMLMediaHook_1 = tslib_1.__importDefault(__webpack_require__(77499));
var useVideo = createHTMLMediaHook_1.default('video');
exports["default"] = useVideo;


/***/ }),

/***/ 13347:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var util_1 = __webpack_require__(88387);
var useRafState_1 = tslib_1.__importDefault(__webpack_require__(79050));
var useWindowScroll = function () {
    var _a = useRafState_1.default(function () { return ({
        x: util_1.isBrowser ? window.pageXOffset : 0,
        y: util_1.isBrowser ? window.pageYOffset : 0,
    }); }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var handler = function () {
            setState(function (state) {
                var pageXOffset = window.pageXOffset, pageYOffset = window.pageYOffset;
                //Check state for change, return same state if no change happened to prevent rerender
                //(see useState/setState documentation). useState/setState is used internally in useRafState/setState.
                return state.x !== pageXOffset || state.y !== pageYOffset
                    ? {
                        x: pageXOffset,
                        y: pageYOffset,
                    }
                    : state;
            });
        };
        //We have to update window scroll at mount, before subscription.
        //Window scroll may be changed between render and effect handler.
        handler();
        util_1.on(window, 'scroll', handler, {
            capture: false,
            passive: true,
        });
        return function () {
            util_1.off(window, 'scroll', handler);
        };
    }, []);
    return state;
};
exports["default"] = useWindowScroll;


/***/ }),

/***/ 62964:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(5272);
var react_1 = __webpack_require__(67294);
var useRafState_1 = tslib_1.__importDefault(__webpack_require__(79050));
var util_1 = __webpack_require__(88387);
var useWindowSize = function (initialWidth, initialHeight) {
    if (initialWidth === void 0) { initialWidth = Infinity; }
    if (initialHeight === void 0) { initialHeight = Infinity; }
    var _a = useRafState_1.default({
        width: util_1.isBrowser ? window.innerWidth : initialWidth,
        height: util_1.isBrowser ? window.innerHeight : initialHeight,
    }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        if (util_1.isBrowser) {
            var handler_1 = function () {
                setState({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            };
            util_1.on(window, 'resize', handler_1);
            return function () {
                util_1.off(window, 'resize', handler_1);
            };
        }
    }, []);
    return state;
};
exports["default"] = useWindowSize;


/***/ }),

/***/ 5272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__classPrivateFieldIn": () => (/* binding */ __classPrivateFieldIn)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


/***/ }),

/***/ 10577:
/***/ ((module) => {

/*!
* screenfull
* v5.2.0 - 2021-11-03
* (c) Sindre Sorhus; MIT License
*/
(function () {
	'use strict';

	var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
	var isCommonjs =  true && module.exports;

	var fn = (function () {
		var val;

		var fnMap = [
			[
				'requestFullscreen',
				'exitFullscreen',
				'fullscreenElement',
				'fullscreenEnabled',
				'fullscreenchange',
				'fullscreenerror'
			],
			// New WebKit
			[
				'webkitRequestFullscreen',
				'webkitExitFullscreen',
				'webkitFullscreenElement',
				'webkitFullscreenEnabled',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			// Old WebKit
			[
				'webkitRequestFullScreen',
				'webkitCancelFullScreen',
				'webkitCurrentFullScreenElement',
				'webkitCancelFullScreen',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			[
				'mozRequestFullScreen',
				'mozCancelFullScreen',
				'mozFullScreenElement',
				'mozFullScreenEnabled',
				'mozfullscreenchange',
				'mozfullscreenerror'
			],
			[
				'msRequestFullscreen',
				'msExitFullscreen',
				'msFullscreenElement',
				'msFullscreenEnabled',
				'MSFullscreenChange',
				'MSFullscreenError'
			]
		];

		var i = 0;
		var l = fnMap.length;
		var ret = {};

		for (; i < l; i++) {
			val = fnMap[i];
			if (val && val[1] in document) {
				for (i = 0; i < val.length; i++) {
					ret[fnMap[0][i]] = val[i];
				}
				return ret;
			}
		}

		return false;
	})();

	var eventNameMap = {
		change: fn.fullscreenchange,
		error: fn.fullscreenerror
	};

	var screenfull = {
		request: function (element, options) {
			return new Promise(function (resolve, reject) {
				var onFullScreenEntered = function () {
					this.off('change', onFullScreenEntered);
					resolve();
				}.bind(this);

				this.on('change', onFullScreenEntered);

				element = element || document.documentElement;

				var returnPromise = element[fn.requestFullscreen](options);

				if (returnPromise instanceof Promise) {
					returnPromise.then(onFullScreenEntered).catch(reject);
				}
			}.bind(this));
		},
		exit: function () {
			return new Promise(function (resolve, reject) {
				if (!this.isFullscreen) {
					resolve();
					return;
				}

				var onFullScreenExit = function () {
					this.off('change', onFullScreenExit);
					resolve();
				}.bind(this);

				this.on('change', onFullScreenExit);

				var returnPromise = document[fn.exitFullscreen]();

				if (returnPromise instanceof Promise) {
					returnPromise.then(onFullScreenExit).catch(reject);
				}
			}.bind(this));
		},
		toggle: function (element, options) {
			return this.isFullscreen ? this.exit() : this.request(element, options);
		},
		onchange: function (callback) {
			this.on('change', callback);
		},
		onerror: function (callback) {
			this.on('error', callback);
		},
		on: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.addEventListener(eventName, callback, false);
			}
		},
		off: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.removeEventListener(eventName, callback, false);
			}
		},
		raw: fn
	};

	if (!fn) {
		if (isCommonjs) {
			module.exports = {isEnabled: false};
		} else {
			window.screenfull = {isEnabled: false};
		}

		return;
	}

	Object.defineProperties(screenfull, {
		isFullscreen: {
			get: function () {
				return Boolean(document[fn.fullscreenElement]);
			}
		},
		element: {
			enumerable: true,
			get: function () {
				return document[fn.fullscreenElement];
			}
		},
		isEnabled: {
			enumerable: true,
			get: function () {
				// Coerce to boolean in case of old WebKit
				return Boolean(document[fn.fullscreenEnabled]);
			}
		}
	});

	if (isCommonjs) {
		module.exports = screenfull;
	} else {
		window.screenfull = screenfull;
	}
})();


/***/ }),

/***/ 29579:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var counter = 0;
var buckets = {};
var setHarmonicInterval = function (fn, ms) {
    var _a;
    var id = counter++;
    if (buckets[ms]) {
        buckets[ms].listeners[id] = fn;
    }
    else {
        var timer = setInterval(function () {
            var listeners = buckets[ms].listeners;
            var didThrow = false;
            var lastError;
            for (var _i = 0, _a = Object.values(listeners); _i < _a.length; _i++) {
                var listener = _a[_i];
                try {
                    listener();
                }
                catch (error) {
                    didThrow = true;
                    lastError = error;
                }
            }
            if (didThrow)
                throw lastError;
        }, ms);
        buckets[ms] = {
            ms: ms,
            timer: timer,
            listeners: (_a = {},
                _a[id] = fn,
                _a),
        };
    }
    return {
        bucket: buckets[ms],
        id: id,
    };
};
var clearHarmonicInterval = function (_a) {
    var bucket = _a.bucket, id = _a.id;
    delete bucket.listeners[id];
    var hasListeners = false;
    for (var listener in bucket.listeners) {
        hasListeners = true;
        break;
    }
    if (!hasListeners) {
        clearInterval(bucket.timer);
        delete buckets[bucket.ms];
    }
};

exports.clearHarmonicInterval = clearHarmonicInterval;
exports.setHarmonicInterval = setHarmonicInterval;


/***/ }),

/***/ 75534:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.easing = {
    // No easing, no acceleration
    linear: function (t) { return t; },
    // Accelerates fast, then slows quickly towards end.
    quadratic: function (t) { return t * (-(t * t) * t + 4 * t * t - 6 * t + 4); },
    // Overshoots over 1 and then returns to 1 towards end.
    cubic: function (t) { return t * (4 * t * t - 9 * t + 6); },
    // Overshoots over 1 multiple times - wiggles around 1.
    elastic: function (t) { return t * (33 * t * t * t * t - 106 * t * t * t + 126 * t * t - 67 * t + 15); },
    // Accelerating from zero velocity
    inQuad: function (t) { return t * t; },
    // Decelerating to zero velocity
    outQuad: function (t) { return t * (2 - t); },
    // Acceleration until halfway, then deceleration
    inOutQuad: function (t) { return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t; },
    // Accelerating from zero velocity
    inCubic: function (t) { return t * t * t; },
    // Decelerating to zero velocity
    outCubic: function (t) { return (--t) * t * t + 1; },
    // Acceleration until halfway, then deceleration
    inOutCubic: function (t) { return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; },
    // Accelerating from zero velocity
    inQuart: function (t) { return t * t * t * t; },
    // Decelerating to zero velocity
    outQuart: function (t) { return 1 - (--t) * t * t * t; },
    // Acceleration until halfway, then deceleration
    inOutQuart: function (t) { return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t; },
    // Accelerating from zero velocity
    inQuint: function (t) { return t * t * t * t * t; },
    // Decelerating to zero velocity
    outQuint: function (t) { return 1 + (--t) * t * t * t * t; },
    // Acceleration until halfway, then deceleration
    inOutQuint: function (t) { return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t; },
    // Accelerating from zero velocity
    inSine: function (t) { return -Math.cos(t * (Math.PI / 2)) + 1; },
    // Decelerating to zero velocity
    outSine: function (t) { return Math.sin(t * (Math.PI / 2)); },
    // Accelerating until halfway, then decelerating
    inOutSine: function (t) { return -(Math.cos(Math.PI * t) - 1) / 2; },
    // Exponential accelerating from zero velocity
    inExpo: function (t) { return Math.pow(2, 10 * (t - 1)); },
    // Exponential decelerating to zero velocity
    outExpo: function (t) { return -Math.pow(2, -10 * t) + 1; },
    // Exponential accelerating until halfway, then decelerating
    inOutExpo: function (t) {
        t /= .5;
        if (t < 1)
            return Math.pow(2, 10 * (t - 1)) / 2;
        t--;
        return (-Math.pow(2, -10 * t) + 2) / 2;
    },
    // Circular accelerating from zero velocity
    inCirc: function (t) { return -Math.sqrt(1 - t * t) + 1; },
    // Circular decelerating to zero velocity Moves VERY fast at the beginning and
    // then quickly slows down in the middle. This tween can actually be used
    // in continuous transitions where target value changes all the time,
    // because of the very quick start, it hides the jitter between target value changes.
    outCirc: function (t) { return Math.sqrt(1 - (t = t - 1) * t); },
    // Circular acceleration until halfway, then deceleration
    inOutCirc: function (t) {
        t /= .5;
        if (t < 1)
            return -(Math.sqrt(1 - t * t) - 1) / 2;
        t -= 2;
        return (Math.sqrt(1 - t * t) + 1) / 2;
    }
};


/***/ }),

/***/ 70655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ 42189:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {number}    delay -          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {boolean}   [noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset).
 * @param  {Function}  callback -       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {boolean}   [debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @returns {Function}  A new, throttled, function.
 */
function throttle (delay, noTrailing, callback, debounceMode) {
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */
  var timeoutID;
  var cancelled = false; // Keep track of the last time `callback` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec


  function cancel() {
    clearExistingTimeout();
    cancelled = true;
  } // `noTrailing` defaults to falsy.


  if (typeof noTrailing !== 'boolean') {
    debounceMode = callback;
    callback = noTrailing;
    noTrailing = undefined;
  }
  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */


  function wrapper() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }

    var self = this;
    var elapsed = Date.now() - lastExec;

    if (cancelled) {
      return;
    } // Execute `callback` and update the `lastExec` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, arguments_);
    }
    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */


    function clear() {
      timeoutID = undefined;
    }

    if (debounceMode && !timeoutID) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`.
       */
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      /*
       * In throttle mode, if `delay` time has been exceeded, execute
       * `callback`.
       */
      exec();
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}

/* eslint-disable no-undefined */
/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param  {number}   delay -         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {boolean}  [atBegin] -     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 * @param  {Function} callback -      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                  to `callback` when the debounced-function is executed.
 *
 * @returns {Function} A new, debounced function.
 */

function debounce (delay, atBegin, callback) {
  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
}

exports.debounce = debounce;
exports.throttle = throttle;
//# sourceMappingURL=index.js.map


/***/ })

};
;