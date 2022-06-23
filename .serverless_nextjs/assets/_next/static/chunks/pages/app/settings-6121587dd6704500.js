(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5877],{87587:function(e,t,r){"use strict";r.d(t,{d:function(){return u},f:function(){return c}});var s=r(19642),n=r(67294),a=r(58529),l=r(60852),i=r(92506),o=(0,n.createContext)(null);function d(){var e=(0,n.useContext)(o);if(null===e){var t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,d),t}return e}function c(){var e=(0,n.useState)([]),t=e[0],r=e[1];return[t.length>0?t.join(" "):void 0,(0,n.useMemo)((function(){return function(e){var t=(0,n.useCallback)((function(e){return r((function(t){return[].concat(t,[e])})),function(){return r((function(t){var r=t.slice(),s=r.indexOf(e);return-1!==s&&r.splice(s,1),r}))}}),[]),s=(0,n.useMemo)((function(){return{register:t,slot:e.slot,name:e.name,props:e.props}}),[t,e.slot,e.name,e.props]);return n.createElement(o.Provider,{value:s},e.children)}}),[r])]}function u(e){var t=d(),r="headlessui-description-"+(0,i.M)();(0,l.e)((function(){return t.register(r)}),[r,t.register]);var n=e,o=(0,s.gY)({},t.props,{id:r});return(0,a.sY)({props:(0,s.gY)({},n,o),slot:t.slot||{},defaultTag:"p",name:t.name||"Description"})}},78999:function(e,t,r){"use strict";r.d(t,{_:function(){return u},b:function(){return c}});var s=r(19642),n=r(67294),a=r(58529),l=r(60852),i=r(92506),o=(0,n.createContext)(null);function d(){var e=(0,n.useContext)(o);if(null===e){var t=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,d),t}return e}function c(){var e=(0,n.useState)([]),t=e[0],r=e[1];return[t.length>0?t.join(" "):void 0,(0,n.useMemo)((function(){return function(e){var t=(0,n.useCallback)((function(e){return r((function(t){return[].concat(t,[e])})),function(){return r((function(t){var r=t.slice(),s=r.indexOf(e);return-1!==s&&r.splice(s,1),r}))}}),[]),s=(0,n.useMemo)((function(){return{register:t,slot:e.slot,name:e.name,props:e.props}}),[t,e.slot,e.name,e.props]);return n.createElement(o.Provider,{value:s},e.children)}}),[r])]}function u(e){var t=e.passive,r=void 0!==t&&t,n=(0,s.gK)(e,["passive"]),o=d(),c="headlessui-label-"+(0,i.M)();(0,l.e)((function(){return o.register(c)}),[c,o.register]);var u=(0,s.gY)({},o.props,{id:c}),m=(0,s.gY)({},n,u);return r&&delete m.onClick,(0,a.sY)({props:m,slot:o.slot||{},defaultTag:"label",name:o.name||"Label"})}},85460:function(e,t,r){"use strict";r.d(t,{r:function(){return p}});var s=r(19642),n=r(67294),a=r(58529),l=r(57471),i=r(62659),o=r(79016),d=r(92506),c=r(87587),u=r(56637),m=r(78999),x=(0,n.createContext)(null);x.displayName="GroupContext";var h=n.Fragment;function p(e){var t=e.checked,r=e.onChange,c=(0,s.gK)(e,["checked","onChange"]),m="headlessui-switch-"+(0,d.M)(),h=(0,n.useContext)(x),p=(0,n.useRef)(null),f=(0,l.T)(p,null===h?null:h.setSwitch),b=(0,n.useCallback)((function(){return r(!t)}),[r,t]),y=(0,n.useCallback)((function(e){if((0,o.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),b()}),[b]),v=(0,n.useCallback)((function(e){e.key!==i.R.Tab&&e.preventDefault(),e.key===i.R.Space&&b()}),[b]),j=(0,n.useCallback)((function(e){return e.preventDefault()}),[]),g=(0,n.useMemo)((function(){return{checked:t}}),[t]),w={id:m,ref:f,role:"switch",type:(0,u.f)(e,p),tabIndex:0,"aria-checked":t,"aria-labelledby":null==h?void 0:h.labelledby,"aria-describedby":null==h?void 0:h.describedby,onClick:y,onKeyUp:v,onKeyPress:j};return(0,a.sY)({props:(0,s.gY)({},c,w),slot:g,defaultTag:"button",name:"Switch"})}p.Group=function(e){var t=(0,n.useState)(null),r=t[0],s=t[1],l=(0,m.b)(),i=l[0],o=l[1],d=(0,c.f)(),u=d[0],p=d[1],f=(0,n.useMemo)((function(){return{switch:r,setSwitch:s,labelledby:i,describedby:u}}),[r,s,i,u]);return n.createElement(p,{name:"Switch.Description"},n.createElement(o,{name:"Switch.Label",props:{onClick:function(){r&&(r.click(),r.focus({preventScroll:!0}))}}},n.createElement(x.Provider,{value:f},(0,a.sY)({props:e,defaultTag:h,name:"Switch.Group"}))))},p.Label=m._,p.Description=c.d},79016:function(e,t,r){"use strict";function s(e){for(var t,r,s=e.parentElement,n=null;s&&!(s instanceof HTMLFieldSetElement);)s instanceof HTMLLegendElement&&(n=s),s=s.parentElement;var a=null!=(t=""===(null==(r=s)?void 0:r.getAttribute("disabled")))&&t;return(!a||!function(e){if(!e)return!1;var t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&a}r.d(t,{P:function(){return s}})},65745:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});r(67294);var s=r(85893);function n(e){var t=e.color,r=e.text;return(0,s.jsxs)("div",{className:"rounded-lg py-4 px-8 flex items-center "+"bg-[".concat(t,"]"),children:[(0,s.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z",fill:"white"})}),(0,s.jsx)("span",{className:"ml-2.5 font-medium text-lg text-white",children:r})]})}},58149:function(e,t,r){"use strict";var s=r(67294),n=r(30836),a=(r(40766),r(85893));t.Z=function(e){var t=e.title,r=e.children;return(0,a.jsxs)(s.Fragment,{children:[(0,a.jsx)(n.Z,{title:t,showLanguage:!1}),(0,a.jsx)("div",{className:"bg-secondary_sky_lightest py-4 md:h-20 h-auto px-4 sm:px-6 md:px-0 w-full max-w-9xl mx-auto shadow-lg border-b sm:mb-0 mb-8",style:{boxShadow:"0px 4px 20px rgba(0, 0, 0, 0.04)"},children:r})]})}},8477:function(e,t,r){"use strict";var s=r(67294),n=r(85460),a=r(85893);t.Z=function(e){var t=e.label,r=(0,s.useState)(!1),l=r[0],i=r[1];return(0,a.jsxs)(n.r,{checked:l,onChange:i,className:(l?"bg-primary_brand_base":"bg-secondary_sky_light")+" relative inline-flex flex-shrink-0 h-[18px] w-[32px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75",children:[(0,a.jsx)("span",{className:"sr-only",children:t}),(0,a.jsx)("span",{"aria-hidden":"true",className:"".concat(l?"translate-x-4":"translate-x-0","\npointer-events-none inline-block h-[14px] w-[13px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200")})]})}},49116:function(e,t,r){"use strict";r(67294);var s=r(4532),n=r.n(s),a=r(85893);t.Z=function(e){var t=e.label,r=e.styles,s=e.checked,l=e.name;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("label",{className:"".concat(n().input," ").concat(r),htmlFor:t,children:[(0,a.jsx)("input",{type:"radio",name:l,id:t,className:"hidden",checked:s}),(0,a.jsx)("div",{className:n().newRadio}),(0,a.jsx)("label",{htmlFor:t,children:t})]})})}},77922:function(e,t,r){"use strict";r.d(t,{A:function(){return s}});var s=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(Boolean).join(" ")}},77777:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return M}});var s=r(67294),n=r(66311),a=r(99336),l=r(77922),i=r(59499),o=r(50029),d=r(65988),c=r.n(d),u=r(87794),m=r.n(u),x=r(87536),h=r(85893),p=function(e){var t=e.title,r=e.children,s=e.image;return(0,h.jsx)("div",{className:"bg-white rounded-2xl px-6 py-8 md:p-10 md:w-43/50 mx-auto mt-10 shadow mb-5",children:(0,h.jsxs)("div",{className:"flex items-center",children:[s?(0,h.jsx)("img",{src:s,className:"mr-20 h-[100%] w-[25rem] rounded-xl shadow-lg shadow-[#C4C4C4]"}):null,(0,h.jsxs)("div",{className:"w-[100%]",children:[t?(0,h.jsx)("h3",{className:"text-2xl text-primary_brand_light font-semibold mb-5",children:t}):null,r]})]})})},f=r(92870),b=r(49116),y=r(74931),v=r(9669),j=r.n(v),g=r(76871),w=r(65745),_=r(88767);function N(){return j().get("https://nigerianbanks.xyz").then((function(e){return e.data}))}function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P=function(){return(0,h.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,h.jsx)("path",{d:"M13.0445 17.0816L13.064 17.064L13.0816 17.0445C13.198 16.9152 13.3063 16.7657 13.3842 16.566C13.454 16.3964 13.5 16.2033 13.5 16C13.5 15.7941 13.4528 15.5988 13.3815 15.4277C13.3091 15.2538 13.2081 15.096 13.0816 14.9555L13.064 14.936L13.0445 14.9184C12.904 14.7919 12.7462 14.6909 12.5723 14.6185C12.2092 14.4672 11.7908 14.4672 11.4277 14.6185C11.2538 14.6909 11.096 14.7919 10.9555 14.9184L10.936 14.936L10.9184 14.9555C10.7919 15.096 10.6909 15.2538 10.6185 15.4277C10.5472 15.5988 10.5 15.7941 10.5 16C10.5 16.2033 10.546 16.3964 10.6158 16.566C10.6937 16.7657 10.802 16.9152 10.9184 17.0445L10.936 17.064L10.9555 17.0816C11.096 17.2081 11.2538 17.3091 11.4277 17.3815C11.5988 17.4528 11.7941 17.5 12 17.5C12.2059 17.5 12.4012 17.4528 12.5723 17.3815C12.7462 17.3091 12.904 17.2081 13.0445 17.0816ZM2.5 12C2.5 6.76614 6.76614 2.5 12 2.5C17.2339 2.5 21.5 6.76614 21.5 12C21.5 17.2339 17.2339 21.5 12 21.5C6.76614 21.5 2.5 17.2339 2.5 12ZM12 6.75C11.3139 6.75 10.75 7.31386 10.75 8V13C10.75 13.6861 11.3139 14.25 12 14.25C12.6861 14.25 13.25 13.6861 13.25 13V8C13.25 7.31386 12.6861 6.75 12 6.75Z",fill:"#979C9E",stroke:"#979C9E"})})};function S(){var e,t,r,n,a,l,i,d,u,v,k,S,O,L,Z,E,D,q=(0,x.cI)(),M=q.register,V=q.handleSubmit,T=q.formState.errors,A=function(){var e=(0,_.useQuery)("all-banks",N);return{data:e.data,isLoading:e.isLoading,refetch:e.refetch}}(),Y=A.data,B=A.isLoading,F=s.forwardRef((function(e,t){var r=e.onChange,s=e.onBlur,n=e.name,a=e.label,l=e.defaultValue;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("label",{className:"block text-secondary font-medium mb-4 leading-4",children:a}),(0,h.jsxs)("select",{name:n,ref:t,onChange:r,onBlur:s,defaultValue:l,className:"jsx-3381425131 border border-secondary_sky_base px-4 py-3 placeholder-grey_80 text-grey_40 bg-white focus:outline-none focus:ring w-full rounded-lg",children:[(0,h.jsx)("option",{className:"jsx-3381425131"}),!B&&(null===Y||void 0===Y?void 0:Y.map((function(e){return(0,h.jsx)("option",{value:JSON.stringify(e),className:"jsx-3381425131",children:e.name},e.slug)}))),(0,h.jsx)(c(),{id:"3381425131",children:["select.jsx-3381425131{padding:1rem;-webkit-appearance:none;-moz-appearance:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:url(\"data:image/svg+xml,%3Csvg width='14' height='8' viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L7 7L13 1' stroke='%23090A0A' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E \") 97% / 3% no-repeat;}"]})]})]})}));F.displayName="BankSelect";var z=(0,s.useContext)(f.Z).user,R=(0,s.useState)(!1),I=R[0],H=R[1],G=function(){var e=(0,o.Z)(m().mark((function e(t){var r,s,n,a,l,i,o,d,c,u,x,p,f,b;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.first_name,s=t.last_name,n=t.street_name,a=t.city,l=t.postal_code,i=t.country,o=t.paypal_email,d=t.day,c=t.month,u=t.year,x=t.bank,p=t.account_number,e.prev=1,H(!0),f={first_name:r,last_name:s,address:{street_name:n,city:a,postal_code:l,country:i},birthday:"".concat(d,"/").concat(c,"/").concat(u),paypal:{email:o},bank_account:{bank_code:JSON.parse(x).code,account_name:"John Snow",account_number:p,bank_name:JSON.parse(x).name}},b="".concat(g.T,"/user/profile"),e.next=7,j().post(b,f);case 7:y.ZP.custom((0,h.jsx)(w.Z,{color:"#24C78C",text:"Payout update success !"})),H(!1),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0.message),y.ZP.error(null===e.t0||void 0===e.t0?void 0:e.t0.response.data.message),H(!1);case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return(0,h.jsx)("form",{onSubmit:V(G),className:"px-4 md:px-0",children:(0,h.jsxs)(p,{title:"Get Paid",children:[(0,h.jsx)("p",{className:"mt-2 mb-6 w-[70%] text-secondary_ink_lighter",children:"Just like a real paycheck, your account balance is deposited to your bank account. Turn things on by filling out the fields below."}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{className:"flex flex-col mb-8",children:[(0,h.jsxs)("h5",{className:"text-secondary_ink_darkest",children:[(0,h.jsx)("span",{className:"float-left",children:"Account Type"}),(0,h.jsxs)("span",{className:"float-right text-primary_brand_light",children:["What type of account should I choose?"," "]})]}),(0,h.jsxs)("div",{className:"flex w-[100%]",children:[(0,h.jsx)(b.Z,{label:"Individual",name:"Account_type",styles:"border border-sky_light mt-3 h-10 rounded text-secondary_ink_lighter bg-white px-4 w-[50%] mr-2 text-left flex justify-between items-center cursor-pointer",checked:!0}),(0,h.jsx)(b.Z,{label:"Business",name:"Account_type",styles:"border border-sky_light mt-3 h-10 rounded text-secondary_ink_lighter bg-sky_light px-4 w-[50%] text-left flex justify-between items-center cursor-pointer"})]})]}),(0,h.jsxs)("div",{className:"flex flex-col",children:[(0,h.jsxs)("h5",{className:"text-secondary_ink_darkest font-normal flex justify-between",children:[(0,h.jsx)("span",{className:"text-lg",children:"Your Personal Information"}),(0,h.jsxs)("span",{className:"text-primary_brand_light text-sm self-end",children:["Why does Cabiza need this information?"," "]})]}),(0,h.jsxs)("div",{className:"flex w-[100%]",children:[(0,h.jsx)("input",C({id:"fname",name:"fname",className:"border border-sky_light mt-3 h-10 text-secondary_ink_lighter bg-white px-4 w-[100%] text-left flex justify-between items-center shadow rounded-tl",placeholder:"First Name",defaultValue:null===z||void 0===z?void 0:z.first_name},M("first_name",{required:!0}))),(0,h.jsx)("input",C({id:"lname",name:"lname",className:"border border-sky_light mt-3 h-10 text-secondary_ink_lighter bg-white px-4 w-[100%] text-left flex justify-between items-center shadow rounded-tr border-l-0",placeholder:"Last Name",defaultValue:null===z||void 0===z?void 0:z.last_name},M("last_name",{required:!0})))]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"flex w-full",children:(0,h.jsx)("input",C(C({id:"address",name:"address",className:"border border-sky_light border-t-0 h-10 text-secondary_ink_lighter bg-white px-4 w-[100%] text-left flex justify-between items-center",placeholder:"Street Address"},M("street_name",{required:!0})),{},{defaultValue:null===z||void 0===z||null===(e=z.address)||void 0===e?void 0:e.street_name}))}),"required"===(null===(t=T.street_name)||void 0===t?void 0:t.type)&&(0,h.jsx)("p",{className:"text-left text-red-600 text-xs px-4 mt-1",children:"Street name is required"})]}),(0,h.jsxs)("div",{className:"flex w-[100%]",children:[(0,h.jsxs)("div",{className:"w-full",children:[(0,h.jsx)("input",C(C({id:"City",name:"City",className:"border border-sky_light h-10 text-secondary_ink_lighter bg-white px-4 w-[100%] text-left flex justify-between items-center border-t-0",placeholder:"City"},M("city",{required:!0})),{},{defaultValue:null===z||void 0===z||null===(r=z.address)||void 0===r?void 0:r.city})),"required"===(null===(n=T.city)||void 0===n?void 0:n.type)&&(0,h.jsx)("p",{className:"text-left text-red-600 text-xs px-4 my-1",children:"City is required"})]}),(0,h.jsxs)("div",{className:"w-full",children:[(0,h.jsx)("input",C(C({id:"postal-code",name:"postal-code",className:"border border-sky_light h-10 text-secondary_ink_lighter bg-white px-4 w-[100%] text-left flex justify-between items-center border-t-0 border-l-0",placeholder:"Postal Code"},M("postal_code",{required:!0})),{},{defaultValue:null===z||void 0===z||null===(a=z.address)||void 0===a?void 0:a.postal_code})),"required"===(null===(l=T.postal_code)||void 0===l?void 0:l.type)&&(0,h.jsx)("p",{className:"text-left text-red-600 text-xs px-4 my-1",children:"Postal code is required"})]})]}),(0,h.jsxs)("div",{className:"w-full",children:[(0,h.jsx)("input",C({id:"country",name:"country",className:"border border-sky_light h-10 text-secondary_ink_lighter bg-white px-4 w-[100%] text-left flex justify-between items-center shadow rounded-b border-t-0",placeholder:"Nigeria",defaultValue:null===z||void 0===z||null===(i=z.address)||void 0===i?void 0:i.country},M("country",{required:!0}))),"required"===(null===(d=T.country)||void 0===d?void 0:d.type)&&(0,h.jsx)("p",{className:"text-left text-red-600 text-xs px-4 mt-1",children:"Country is required"})]})]}),(0,h.jsxs)("div",{className:"flex flex-col mt-8",children:[(0,h.jsxs)("h5",{className:"text-secondary_ink_darkest font-normal flex justify-between mb-3",children:[(0,h.jsx)("span",{className:"text-lg",children:"Identity Verification"}),(0,h.jsxs)("span",{className:"text-primary_brand_light text-sm self-end",children:["Why does Cabiza need this information?"," "]})]}),(0,h.jsxs)("div",{className:"w-[100%] border border-sky_light rounded-xl p-5 shadow",children:[(0,h.jsx)("h5",{className:"font-normal flex justify-between text-secondary_sky_dark",children:"Date of Birth"}),(0,h.jsxs)("div",{className:"flex",children:[(0,h.jsx)("input",C(C({id:"Day",name:"Day",type:"number",className:"border border-sky_light mt-3 h-10 rounded  bg-white text-secondary_ink_darkest px-4 w-[50%] mr-2 text-left flex justify-between items-center",placeholder:"Day"},M("day",{required:!0,maxLength:2,min:0,max:31})),{},{defaultValue:null===z||void 0===z||null===(u=z.birthday)||void 0===u?void 0:u.split("/")[0]})),(0,h.jsx)("input",C(C({id:"Month",name:"Month",type:"number",className:"border border-sky_light mt-3 h-10 rounded text-secondary_ink_darkest bg-white px-4 w-[50%] mr-2 text-left flex justify-between items-center",placeholder:"Month"},M("month",{required:!0,min:0,max:12,maxLength:2})),{},{defaultValue:null===z||void 0===z||null===(v=z.birthday)||void 0===v?void 0:v.split("/")[1]})),(0,h.jsx)("input",C(C({id:"Year",name:"year",type:"number",className:"border border-sky_light mt-3 h-10 rounded text-secondary_ink_darkest bg-white px-4 w-[50%] mr-2 text-left flex justify-between items-center",placeholder:"Year"},M("year",{max:3e3,minLength:4})),{},{defaultValue:null===z||void 0===z||null===(k=z.birthday)||void 0===k?void 0:k.split("/")[2]}))]})]})]}),(0,h.jsx)("div",{className:"flex flex-col mt-8",children:(0,h.jsxs)("div",{className:"w-[100%]",children:[(0,h.jsx)("h5",{className:"text-secondary_ink_darkest font-normal mb-1",children:"Payout PayPal address"}),(0,h.jsx)("div",{className:"flex",children:(0,h.jsx)("input",C(C({id:"Day",name:"Day",type:"text",className:"border border-sky_light mt-3 h-10 rounded  bg-white text-secondary_ink_darkest px-4 w-[100%] mr-2 text-left flex justify-between items-center",placeholder:"Paypal Email"},M("paypal_email",{required:!0})),{},{defaultValue:null===z||void 0===z||null===(S=z.paypal)||void 0===S?void 0:S.email}))})]})}),(0,h.jsxs)("div",{className:"mt-8",children:[(0,h.jsx)("h5",{className:"text-secondary_ink_darkest font-normal flex justify-between mb-3",children:(0,h.jsx)("span",{className:"text-lg",children:"Bank Details"})}),(0,h.jsxs)("div",{className:"flex space-x-6",children:[(0,h.jsxs)("div",{className:"relative md:w-1/2",children:[(0,h.jsx)(F,C({label:"Bank name",defaultValue:{name:null===z||void 0===z||null===(O=z.bank_account)||void 0===O?void 0:O.bank_name,code:null===z||void 0===z||null===(L=z.bank_account)||void 0===L?void 0:L.bank_code}},M("bank",{required:!0}))),"required"===(null===(Z=T.bank)||void 0===Z?void 0:Z.type)&&(0,h.jsx)("p",{className:"text-left text-red-600 text-xs mt-1",children:"Bank name is required"})]}),(0,h.jsxs)("div",{className:"relative md:w-1/2",children:[(0,h.jsx)("label",{className:"block text-secondary font-medium leading-4 mb-4",htmlFor:"account_number",children:"Account number"}),(0,h.jsx)("input",C({type:"number",className:"border border-secondary_sky_base px-4 py-4 placeholder-grey_80 text-grey_40 bg-white focus:outline-none focus:ring w-full rounded-lg",style:{transition:"all 0.15s ease 0s"},id:"account_number",placeholder:"Enter your account number",defaultValue:null===z||void 0===z||null===(E=z.bank_account)||void 0===E?void 0:E.account_number},M("account_number",{required:!0}))),"required"===(null===(D=T.account_number)||void 0===D?void 0:D.type)&&(0,h.jsx)("p",{className:"text-left text-red-600 text-xs mt-1",children:"Account number is required"})]})]})]}),(0,h.jsxs)("div",{className:"flex bg-secondary_sky_lighter py-3 px-4 mt-8 rounded-xl justify-between",children:[(0,h.jsx)("p",{className:"text-secondary_ink_lighter",children:"We encrypt all sensitive info using public key encryption (2048-bit RSA)"}),(0,h.jsx)(P,{})]})]}),(0,h.jsxs)("div",{className:"mt-8",children:[(0,h.jsx)("button",{className:"bg-primary py-3 w-[100%] rounded-full text-white",type:"submit",disabled:I,children:I?"...":"Finish"}),(0,h.jsx)("p",{className:"mt-5 text-center text-grey_60",children:"By completing this form you agree that information provided is accurate. You also agree to our Terms."})]})]})})}var O=r(8477);function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(){var e,t,r=(0,x.cI)(),n=r.reset,a=r.register,l=r.handleSubmit,i=r.formState.errors,d=(0,s.useState)(!1),c=d[0],u=d[1],f=function(){var e=(0,o.Z)(m().mark((function e(t){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,j().post("".concat(g.T,"/auth/password/update"),t);case 4:y.ZP.custom((0,h.jsxs)("div",{className:"rounded-lg py-4 px-8 bg-[#24C78C] flex items-center",children:[(0,h.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,h.jsx)("path",{d:"M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z",fill:"white"})}),(0,h.jsx)("span",{className:"ml-2.5 font-medium text-lg text-white",children:"Password update success !"})]})),u(!1),n({current_password:"",new_password:""}),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0.message),y.ZP.error(e.t0.response.data.message),u(!1);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return(0,h.jsx)("form",{onSubmit:l(f),className:"px-4 md:px-0",children:(0,h.jsxs)(p,{title:"Change password",children:[(0,h.jsx)("div",{className:"flex flex-col mb-8",children:(0,h.jsxs)("div",{className:"w-[100%]",children:[(0,h.jsxs)("div",{className:"relative mt-3",children:[(0,h.jsx)("input",Z({type:"password",name:"old-password",className:"border border-sky_light h-10 rounded-xl text-secondary_ink_lighter bg-white px-4 w-[100%] mr-2 text-left flex justify-between items-center",placeholder:"Old Password",id:"current-password"},a("current_password",{required:!0}))),"required"===(null===(e=i.current_password)||void 0===e?void 0:e.type)&&(0,h.jsx)("p",{className:"text-left text-red-600 text-xs mt-1",children:"Current password is required"})]}),(0,h.jsxs)("div",{className:"relative mt-3",children:[(0,h.jsx)("input",Z({type:"password",name:"new-password",className:"border border-sky_light h-10 rounded-xl text-secondary_ink_lighter bg-white px-4 w-[100%] text-left flex justify-between items-center",placeholder:"New Password",id:"new-password"},a("new_password",{required:!0}))),"required"===(null===(t=i.new_password)||void 0===t?void 0:t.type)&&(0,h.jsx)("p",{className:"text-left text-red-600 text-xs mt-1",children:"New password is required"})]})]})}),(0,h.jsx)("div",{className:"mt-8",children:(0,h.jsx)("button",{className:"bg-primary py-3 w-[100%] rounded-full text-white",type:"submit",disabled:c,children:c?(0,h.jsx)("span",{className:"animate-bounce",children:"..."}):(0,h.jsx)("span",{children:"Change password"})})})]})})}function D(){var e=(0,x.cI)(),t=(e.register,e.handleSubmit,e.formState.errors,(0,s.useContext)(f.Z).user),r=(0,s.useState)(!1);r[0],r[1];return(0,h.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},className:"px-4 md:px-0",children:[(0,h.jsx)(p,{title:"User details",children:(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{className:"flex flex-col",children:[(0,h.jsx)("label",{htmlFor:"uname",className:"text-secondary_ink_darkest",children:"Username"}),(0,h.jsx)("input",{type:"text",name:"uname",id:"uname",className:"border border-sky_light mt-3 h-10 rounded-xl text-secondary_ink_lighter bg-white px-4",value:t.username,readOnly:!0}),(0,h.jsxs)("p",{className:"mt-2 text-secondary_ink_lighter text-sm",children:["View your profile at:"," ",(0,h.jsx)("a",{className:"text-primary",children:t.username+".cabiza.net"})]})]}),(0,h.jsxs)("div",{className:"flex flex-col mt-8",children:[(0,h.jsx)("label",{htmlFor:"email",className:"text-secondary_ink_darkest",children:"Email"}),(0,h.jsx)("input",{type:"email",name:"email",id:"email",className:"border border-sky_light mt-3 h-10 rounded-xl text-secondary_ink_lighter bg-white px-4",placeholder:"jakecabiza@gmail.com",value:t.email,readOnly:!0})]})]})}),(0,h.jsxs)(p,{title:"Notifications",children:[(0,h.jsx)("p",{className:"mb-5 text-secondary_ink_lighter",children:"Depending on your preferences, you can choose whether to receive mobile notifications or email notifications. If you want to get notifications on a mobile device, install the Cabiza Dashboard app over on the App Store or Google Play."}),(0,h.jsx)("div",{className:"border border-sky_light p-2 md:p-6 rounded-xl",children:(0,h.jsxs)("table",{className:"w-[100%]",style:{borderSpacing:"0 10px",borderCollapse:"separate"},children:[(0,h.jsxs)("tr",{className:"h-12 text-lg",children:[(0,h.jsx)("th",{className:"text-left px-4 md:px-6",children:"Notifications"}),(0,h.jsx)("th",{className:"text-left px-4 md:px-6",children:"Email"}),(0,h.jsx)("th",{className:"text-left px-4 md:px-6",children:"Mobile"})]}),(0,h.jsxs)("tr",{className:"h-12 bg-secondary_sky_lighter text-secondary",children:[(0,h.jsx)("td",{className:"text-left px-4 md:px-6",children:"Purchases"}),(0,h.jsx)("td",{className:"text-left px-3 md:px-6",children:(0,h.jsx)(O.Z,{label:"Purchases-email"})}),(0,h.jsx)("td",{className:"text-left px-3 md:px-6",children:(0,h.jsx)(O.Z,{label:"Purchases-mobile"})})]}),(0,h.jsxs)("tr",{className:"h-12 bg-secondary_sky_lighter text-secondary",children:[(0,h.jsx)("td",{className:"text-left px-4 md:px-6",children:"Recurring payments"}),(0,h.jsx)("td",{className:"text-left px-3 md:px-6",children:(0,h.jsx)(O.Z,{label:"Recurring-payments-email"})}),(0,h.jsx)("td",{className:"text-left px-3 md:px-6",children:(0,h.jsx)(O.Z,{label:"Recurring-payments-mobile"})})]}),(0,h.jsxs)("tr",{className:"h-12 bg-secondary_sky_lighter text-secondary",children:[(0,h.jsx)("td",{className:"text-left px-4  md:px-6",children:"Free downloads"}),(0,h.jsx)("td",{className:"text-left px-3  md:px-6",children:(0,h.jsx)(O.Z,{label:"free-downloads-email"})}),(0,h.jsx)("td",{className:"text-left px-3  md:px-6",children:(0,h.jsx)(O.Z,{label:"free-downloads-mobile"})})]}),(0,h.jsxs)("tr",{className:"h-12 bg-secondary_sky_lighter text-secondary",children:[(0,h.jsx)("td",{className:"text-left px-4 md:px-6",children:"Personalized product announcements"}),(0,h.jsx)("td",{className:"text-left px-3 md:px-6",children:(0,h.jsx)(O.Z,{label:"Personalized-product-email"})}),(0,h.jsx)("td",{className:"text-left px-3 md:px-6",children:(0,h.jsx)(O.Z,{label:"Personalized-product-mobile"})})]})]})})]}),(0,h.jsxs)(p,{title:"Discover",children:[(0,h.jsx)("p",{className:"mb-5 text-secondary_ink_lighter",children:"Grow beyond your core audience through recommendations of related products. When enabled, your top-selling and best-reviewed products will be recommended to likely buyers."}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{className:"bg-secondary_sky_lighter p-3 rounded flex items-center justify-between px-5 mb-2",children:[(0,h.jsx)("p",{className:"text-secondary",children:"Show my products in Discover"}),(0,h.jsx)(O.Z,{label:"discoverMyProducts"})]}),(0,h.jsxs)("div",{className:"flex flex-col mt-8 overflow-hidden",children:[(0,h.jsx)("label",{htmlFor:"sell-in",className:"text-secondary_ink_darkest",children:"Sell in ..."}),(0,h.jsxs)("div",{className:"flex items-center border border-sky_light rounded-xl mt-3 overflow-hidden relative",children:[(0,h.jsx)("select",{name:"products",id:"products",className:"h-10 w-[100%] text-secondary_ink_lighter bg-white px-4 outline-none appearance-none border-none",children:(0,h.jsx)("option",{value:"products",defaultValue:!0,children:"Design & Tech Products"})}),(0,h.jsx)("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700 h-[100%] px-3 bg-secondary_sky_light",children:(0,h.jsxs)("svg",{width:"12",height:"18",viewBox:"0 0 12 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"fill-current",children:[(0,h.jsx)("path",{d:"M6 0L11.1962 9H0.803848L6 0Z",fill:"#72777A"}),(0,h.jsx)("path",{d:"M6 24L11.1962 15H0.803848L6 24Z",fill:"#72777A"})]})})]}),(0,h.jsx)("p",{className:"mt-2 text-secondary_ink_lighter",children:"Sales made via a Cabiza Discover purchase are subject to an additional 10% fee. Products sold directly to your audience or otherwise outside of the Cabiza Discover feature will not be affected."}),(0,h.jsx)("a",{className:"text-primary mr-2 mt-5",children:"Learn more"})]})]})]}),(0,h.jsxs)("div",{className:"md:w-43/50 mx-auto mb-5",children:[(0,h.jsx)("button",{className:"bg-primary py-3 w-[100%] rounded-full text-white",children:"Update settings"}),(0,h.jsxs)("div",{className:"rounded-3xl bg-secondary_sky_light mt-7 p-5 py-9 text-center",children:[(0,h.jsx)("a",{className:"text-primary border-b border-b-primary py-[1px] text-lg",children:"Sign out from all active sessions"}),(0,h.jsx)("p",{className:"mt-2",children:"You will be signed out from all your active sessions including this session."})]})]})]})}var q=r(58149);function M(){return(0,h.jsx)("div",{className:"md:w-[85%] w-[100%] ml-auto",children:(0,h.jsxs)(n.O.Group,{children:[(0,h.jsx)(q.Z,{title:"Settings",children:(0,h.jsx)("div",{className:"flex justify-start items-end mr-auto md:w-43/50 mx-auto",children:(0,h.jsxs)(n.O.List,{as:"div",className:"flex items-center py-[.5rem] space-x-10",children:[(0,h.jsx)(n.O,{as:"button",className:function(e){var t=e.selected;return(0,l.A)("text-md pb-2 font-medium ",t?" font-bold text-primary border-b border-b-primary":" text-secondary")},children:"Settings"}),(0,h.jsx)(n.O,{as:"button",className:function(e){var t=e.selected;return(0,l.A)("text-md mr-10 pb-2 font-medium",t?" font-bold text-primary border-b border-b-primary":" text-secondary")},children:"Payout"}),!1,(0,h.jsx)(n.O,{as:"button",className:function(e){var t=e.selected;return(0,l.A)("text-md mr-10 pb-2 font-medium",t?" font-bold text-primary border-b border-b-primary":" text-secondary")},children:"Password"}),!1]})})}),(0,h.jsxs)(n.O.Panels,{children:[(0,h.jsx)(n.O.Panel,{children:(0,h.jsx)(D,{})}),(0,h.jsx)(n.O.Panel,{children:(0,h.jsx)(S,{})}),!1,(0,h.jsx)(n.O.Panel,{children:(0,h.jsx)(E,{})}),!1]})]})})}M.layout=a.Z},55234:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/settings",function(){return r(77777)}])},4532:function(e){e.exports={input:"checkSwitch_input__9m1K4",newRadio:"checkSwitch_newRadio__KcsIc"}}},function(e){e.O(0,[2688,4931,7536,7760,6311,5988,836,8210,9774,2888,179],(function(){return t=55234,e(e.s=t);var t}));var t=e.O();_N_E=t}]);