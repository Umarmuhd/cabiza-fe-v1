"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8221],{87587:function(e,n,r){r.d(n,{d:function(){return f},f:function(){return s}});var t=r(19642),u=r(67294),o=r(58529),i=r(60852),a=r(92506),c=(0,u.createContext)(null);function l(){var e=(0,u.useContext)(c);if(null===e){var n=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,l),n}return e}function s(){var e=(0,u.useState)([]),n=e[0],r=e[1];return[n.length>0?n.join(" "):void 0,(0,u.useMemo)((function(){return function(e){var n=(0,u.useCallback)((function(e){return r((function(n){return[].concat(n,[e])})),function(){return r((function(n){var r=n.slice(),t=r.indexOf(e);return-1!==t&&r.splice(t,1),r}))}}),[]),t=(0,u.useMemo)((function(){return{register:n,slot:e.slot,name:e.name,props:e.props}}),[n,e.slot,e.name,e.props]);return u.createElement(c.Provider,{value:t},e.children)}}),[r])]}function f(e){var n=l(),r="headlessui-description-"+(0,a.M)();(0,i.e)((function(){return n.register(r)}),[r,n.register]);var u=e,c=(0,t.gY)({},n.props,{id:r});return(0,o.sY)({props:(0,t.gY)({},u,c),slot:n.slot||{},defaultTag:"p",name:n.name||"Description"})}},78999:function(e,n,r){r.d(n,{_:function(){return f},b:function(){return s}});var t=r(19642),u=r(67294),o=r(58529),i=r(60852),a=r(92506),c=(0,u.createContext)(null);function l(){var e=(0,u.useContext)(c);if(null===e){var n=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,l),n}return e}function s(){var e=(0,u.useState)([]),n=e[0],r=e[1];return[n.length>0?n.join(" "):void 0,(0,u.useMemo)((function(){return function(e){var n=(0,u.useCallback)((function(e){return r((function(n){return[].concat(n,[e])})),function(){return r((function(n){var r=n.slice(),t=r.indexOf(e);return-1!==t&&r.splice(t,1),r}))}}),[]),t=(0,u.useMemo)((function(){return{register:n,slot:e.slot,name:e.name,props:e.props}}),[n,e.slot,e.name,e.props]);return u.createElement(c.Provider,{value:t},e.children)}}),[r])]}function f(e){var n=e.passive,r=void 0!==n&&n,u=(0,t.gK)(e,["passive"]),c=l(),s="headlessui-label-"+(0,a.M)();(0,i.e)((function(){return c.register(s)}),[s,c.register]);var f=(0,t.gY)({},c.props,{id:s}),d=(0,t.gY)({},u,f);return r&&delete d.onClick,(0,o.sY)({props:d,slot:c.slot||{},defaultTag:"label",name:c.name||"Label"})}},18261:function(e,n,r){r.d(n,{E:function(){return C}});var t=r(19642),u=r(67294),o=r(133),i=r(58529),a=r(62659),c=r(60852),l=r(92506),s=r(35057),f=r(87587),d=r(61145);var p,v,b=r(78999);!function(e){e[e.RegisterOption=0]="RegisterOption",e[e.UnregisterOption=1]="UnregisterOption"}(v||(v={}));var m=((p={})[v.RegisterOption]=function(e,n){return(0,t.gY)({},e,{options:[].concat(e.options,[{id:n.id,element:n.element,propsRef:n.propsRef}])})},p[v.UnregisterOption]=function(e,n){var r=e.options.slice(),u=e.options.findIndex((function(e){return e.id===n.id}));return-1===u?e:(r.splice(u,1),(0,t.gY)({},e,{options:r}))},p),g=(0,u.createContext)(null);function h(e){var n=(0,u.useContext)(g);if(null===n){var r=new Error("<"+e+" /> is missing a parent <"+C.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(r,h),r}return n}function E(e,n){return(0,o.E)(n.type,m,e,n)}g.displayName="RadioGroupContext";var k;function C(e){var n=e.value,r=e.onChange,o=e.disabled,c=void 0!==o&&o,p=(0,t.gK)(e,["value","onChange","disabled"]),m=(0,u.useReducer)(E,{options:[]}),h=m[0].options,k=m[1],C=(0,b.b)(),R=C[0],y=C[1],T=(0,f.f)(),w=T[0],S=T[1],O="headlessui-radiogroup-"+(0,l.M)(),A=(0,u.useRef)(null),M=(0,u.useMemo)((function(){return h.find((function(e){return!e.propsRef.current.disabled}))}),[h]),x=(0,u.useMemo)((function(){return h.some((function(e){return e.propsRef.current.value===n}))}),[h,n]),Y=(0,u.useCallback)((function(e){var t;if(c)return!1;if(e===n)return!1;var u=null==(t=h.find((function(n){return n.propsRef.current.value===e})))?void 0:t.propsRef.current;return!(null==u?void 0:u.disabled)&&(r(e),!0)}),[r,n,c,h]);(0,d.B)({container:A.current,accept:function(e){return"radio"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk:function(e){e.setAttribute("role","none")}});var F=(0,u.useCallback)((function(e){if(A.current){var n=h.filter((function(e){return!1===e.propsRef.current.disabled})).map((function(e){return e.element.current}));switch(e.key){case a.R.ArrowLeft:case a.R.ArrowUp:if(e.preventDefault(),e.stopPropagation(),(0,s.jA)(n,s.TO.Previous|s.TO.WrapAround)===s.fE.Success){var r=h.find((function(e){return e.element.current===document.activeElement}));r&&Y(r.propsRef.current.value)}break;case a.R.ArrowRight:case a.R.ArrowDown:if(e.preventDefault(),e.stopPropagation(),(0,s.jA)(n,s.TO.Next|s.TO.WrapAround)===s.fE.Success){var t=h.find((function(e){return e.element.current===document.activeElement}));t&&Y(t.propsRef.current.value)}break;case a.R.Space:e.preventDefault(),e.stopPropagation();var u=h.find((function(e){return e.element.current===document.activeElement}));u&&Y(u.propsRef.current.value)}}}),[A,h,Y]),L=(0,u.useCallback)((function(e){return k((0,t.gY)({type:v.RegisterOption},e)),function(){return k({type:v.UnregisterOption,id:e.id})}}),[k]),D=(0,u.useMemo)((function(){return{registerOption:L,firstOption:M,containsCheckedOption:x,change:Y,disabled:c,value:n}}),[L,M,x,Y,c,n]),N={ref:A,id:O,role:"radiogroup","aria-labelledby":R,"aria-describedby":w,onKeyDown:F};return u.createElement(S,{name:"RadioGroup.Description"},u.createElement(y,{name:"RadioGroup.Label"},u.createElement(g.Provider,{value:D},(0,i.sY)({props:(0,t.gY)({},p,N),defaultTag:"div",name:"RadioGroup"}))))}!function(e){e[e.Empty=1]="Empty",e[e.Active=2]="Active"}(k||(k={}));C.Option=function e(n){var r=(0,u.useRef)(null),o="headlessui-radiogroup-option-"+(0,l.M)(),a=(0,b.b)(),s=a[0],d=a[1],p=(0,f.f)(),v=p[0],m=p[1],g=function(e){void 0===e&&(e=0);var n=(0,u.useState)(e),r=n[0],t=n[1],o=(0,u.useCallback)((function(e){return t((function(n){return n|e}))}),[t]),i=(0,u.useCallback)((function(e){return Boolean(r&e)}),[r]),a=(0,u.useCallback)((function(e){return t((function(n){return n&~e}))}),[t]),c=(0,u.useCallback)((function(e){return t((function(n){return n^e}))}),[t]);return{addFlag:o,hasFlag:i,removeFlag:a,toggleFlag:c}}(k.Empty),E=g.addFlag,R=g.removeFlag,y=g.hasFlag,T=n.value,w=n.disabled,S=void 0!==w&&w,O=(0,t.gK)(n,["value","disabled"]),A=(0,u.useRef)({value:T,disabled:S});(0,c.e)((function(){A.current.value=T}),[T,A]),(0,c.e)((function(){A.current.disabled=S}),[S,A]);var M=h([C.name,e.name].join(".")),x=M.registerOption,Y=M.disabled,F=M.change,L=M.firstOption,D=M.containsCheckedOption,N=M.value;(0,c.e)((function(){return x({id:o,element:r,propsRef:A})}),[o,x,r,n]);var P=(0,u.useCallback)((function(){var e;F(T)&&(E(k.Active),null==(e=r.current)||e.focus())}),[E,F,T]),_=(0,u.useCallback)((function(){return E(k.Active)}),[E]),G=(0,u.useCallback)((function(){return R(k.Active)}),[R]),I=(null==L?void 0:L.id)===o,K=Y||S,j=N===T,U={ref:r,id:o,role:"radio","aria-checked":j?"true":"false","aria-labelledby":s,"aria-describedby":v,"aria-disabled":!!K||void 0,tabIndex:K?-1:j||!D&&I?0:-1,onClick:K?void 0:P,onFocus:K?void 0:_,onBlur:K?void 0:G},B=(0,u.useMemo)((function(){return{checked:j,disabled:K,active:y(k.Active)}}),[j,K,y]);return u.createElement(m,{name:"RadioGroup.Description"},u.createElement(d,{name:"RadioGroup.Label"},(0,i.sY)({props:(0,t.gY)({},O,U),slot:B,defaultTag:"div",name:"RadioGroup.Option"})))},C.Label=b._,C.Description=f.d},85460:function(e,n,r){r.d(n,{r:function(){return b}});var t=r(19642),u=r(67294),o=r(58529),i=r(57471),a=r(62659),c=r(79016),l=r(92506),s=r(87587),f=r(56637),d=r(78999),p=(0,u.createContext)(null);p.displayName="GroupContext";var v=u.Fragment;function b(e){var n=e.checked,r=e.onChange,s=(0,t.gK)(e,["checked","onChange"]),d="headlessui-switch-"+(0,l.M)(),v=(0,u.useContext)(p),b=(0,u.useRef)(null),m=(0,i.T)(b,null===v?null:v.setSwitch),g=(0,u.useCallback)((function(){return r(!n)}),[r,n]),h=(0,u.useCallback)((function(e){if((0,c.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),g()}),[g]),E=(0,u.useCallback)((function(e){e.key!==a.R.Tab&&e.preventDefault(),e.key===a.R.Space&&g()}),[g]),k=(0,u.useCallback)((function(e){return e.preventDefault()}),[]),C=(0,u.useMemo)((function(){return{checked:n}}),[n]),R={id:d,ref:m,role:"switch",type:(0,f.f)(e,b),tabIndex:0,"aria-checked":n,"aria-labelledby":null==v?void 0:v.labelledby,"aria-describedby":null==v?void 0:v.describedby,onClick:h,onKeyUp:E,onKeyPress:k};return(0,o.sY)({props:(0,t.gY)({},s,R),slot:C,defaultTag:"button",name:"Switch"})}b.Group=function(e){var n=(0,u.useState)(null),r=n[0],t=n[1],i=(0,d.b)(),a=i[0],c=i[1],l=(0,s.f)(),f=l[0],b=l[1],m=(0,u.useMemo)((function(){return{switch:r,setSwitch:t,labelledby:a,describedby:f}}),[r,t,a,f]);return u.createElement(b,{name:"Switch.Description"},u.createElement(c,{name:"Switch.Label",props:{onClick:function(){r&&(r.click(),r.focus({preventScroll:!0}))}}},u.createElement(p.Provider,{value:m},(0,o.sY)({props:e,defaultTag:v,name:"Switch.Group"}))))},b.Label=d._,b.Description=s.d},61145:function(e,n,r){r.d(n,{B:function(){return o}});var t=r(67294),u=r(60852);function o(e){var n=e.container,r=e.accept,o=e.walk,i=e.enabled,a=void 0===i||i,c=(0,t.useRef)(r),l=(0,t.useRef)(o);(0,t.useEffect)((function(){c.current=r,l.current=o}),[r,o]),(0,u.e)((function(){if(n&&a)for(var e=c.current,r=l.current,t=Object.assign((function(n){return e(n)}),{acceptNode:e}),u=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,t,!1);u.nextNode();)r(u.currentNode)}),[n,a,c,l])}},79016:function(e,n,r){function t(e){for(var n,r,t=e.parentElement,u=null;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(u=t),t=t.parentElement;var o=null!=(n=""===(null==(r=t)?void 0:r.getAttribute("disabled")))&&n;return(!o||!function(e){if(!e)return!1;var n=e.previousElementSibling;for(;null!==n;){if(n instanceof HTMLLegendElement)return!1;n=n.previousElementSibling}return!0}(u))&&o}r.d(n,{P:function(){return t}})},16835:function(e,n,r){r.d(n,{Z:function(){return u}});var t=r(2937);function u(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,u,o=[],i=!0,a=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(o.push(t.value),!n||o.length!==n);i=!0);}catch(c){a=!0,u=c}finally{try{i||null==r.return||r.return()}finally{if(a)throw u}}return o}}(e,n)||(0,t.Z)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);