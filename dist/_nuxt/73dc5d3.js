(window.webpackJsonp=window.webpackJsonp||[]).push([[20,6,13],{460:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.req=t.regex=t.ref=t.len=void 0,Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return o.default}});var n,o=(n=r(470))&&n.__esModule?n:{default:n};function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}var c=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===l(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=c;t.len=function(e){return Array.isArray(e)?e.length:"object"===l(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,o.default)({type:e},(function(e){return!c(e)||t.test(e)}))}},462:function(e,t,r){e.exports={}},464:function(e,t,r){e.exports={}},465:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik01IDEySDNMMTIgM0wyMSAxMkgxOSIgc3Ryb2tlPSIjMDBBRkVGIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPHBhdGggZD0iTTUgMTJWMTlDNSAyMC4xMDQ2IDUuODk1NDMgMjEgNyAyMUgxN0MxOC4xMDQ2IDIxIDE5IDIwLjEwNDYgMTkgMTlWMTIiIHN0cm9rZT0iIzAwQUZFRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjxwYXRoIGQ9Ik05IDIxVjE1QzkgMTMuODk1NCA5Ljg5NTQzIDEzIDExIDEzSDEzQzE0LjEwNDYgMTMgMTUgMTMuODk1NCAxNSAxNVYyMSIgc3Ryb2tlPSIjMDBBRkVGIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPC9zdmc+DQo="},466:function(e,t,r){"use strict";r(462)},467:function(e,t,r){"use strict";r.r(t);r(141);var n={props:{links:{type:Array,default:function(){return[]}}}},o=(r(466),r(10)),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"bg-gray-100 py-[12px] w-full"},[t("div",{staticClass:"container mx-auto flex items-center px-[16px]"},[t("ul",{staticClass:"bread-crumbs"},[t("li",{staticClass:"flex items-center justify-center"},[t("img",{staticClass:"mr-[16px]",attrs:{src:r(465),alt:""}}),e._v(" "),t("nuxt-link",{staticClass:"text-dark",attrs:{to:"/"}},[e._v("\n              Home\n            ")])],1),e._v(" "),t("span",{staticClass:"text-[#74787D] mx-3"},[e._v("/")]),e._v(" "),e.links&&e.links.length?[t("client-only",e._l(e.links,(function(r,n){return t("li",{key:n},[n+1===e.links.length?t("span",[e._v(e._s(r.title))]):t("nuxt-link",{attrs:{to:r.link}},[e._v(e._s(r.title))])],1)})),0)]:e._e()],2)])])}),[],!1,null,"4c139732",null);t.default=component.exports},469:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(460).regex)("alpha",/^[a-zA-Z]*$/);t.default=n},470:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===e.env.BUILD?r(471).withParams:r(290).withParams;t.default=n}).call(this,r(187))},471:function(e,t,r){"use strict";(function(e){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==e?e:{},o=n.vuelidate?n.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))};t.withParams=o}).call(this,r(33))},472:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(460).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},473:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(460).regex)("numeric",/^[0-9]*$/);t.default=n},474:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(460);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},475:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(460).regex)("email",/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i);t.default=n},476:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(460),o=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(l)}));t.default=o;var l=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},477:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(460);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)}))};var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},478:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(460);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))}},479:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(460);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))}},480:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(460),o=(0,n.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=o},481:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(460);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},482:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(460);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},483:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(460);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))}},484:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(460).regex)("url",/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=n},485:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(460);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))}},486:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(460);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))}},487:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(460);t.default=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))}},488:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(460);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},489:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(460);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},490:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(460).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},491:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(460).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},492:function(e,t,r){"use strict";r(464)},495:function(e,t,r){"use strict";r.r(t);r(29),r(59);var n={data:function(){return{q:"q"}},props:{data:{default:[]}}},o=(r(492),r(10)),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"faq relative overflow-hidden md:py-16 py-4 px-[16px]"},[t("section-title",{attrs:{title:"F.A.Q.","data-aos":"fade-up"}}),e._v(" "),t("div",{staticClass:"container relative z-1 mt-[32px] mx-auto"},[t("div",{staticClass:"grid grid-cols-2 gap-x-6 gap-y-4"},e._l(e.data,(function(r,n){return t("div",{key:n,staticClass:"md:col-span-1 col-span-2",attrs:{"data-aos":"fade-up","data-aos-delay":n+1+"00"}},[t("div",{staticClass:"tab"},[t("input",{staticClass:"input-form",attrs:{type:"checkbox",id:"".concat(e.q)+r.id}}),e._v(" "),t("label",{staticClass:"tab-label",attrs:{for:"".concat(e.q)+r.id}},[e._v(e._s(r.title))]),e._v(" "),t("div",{staticClass:"tab-content"},[e._v("\n            "+e._s(r.description)+"\n          ")])])])})),0)])],1)}),[],!1,null,"2a36ec41",null);t.default=component.exports;installComponents(component,{SectionTitle:r(461).default})},497:function(e,t,r){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return k.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return D.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return d.default}}),t.helpers=void 0,Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return I.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return M.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return P.default}});var o=N(r(469)),l=N(r(472)),c=N(r(473)),f=N(r(474)),d=N(r(475)),y=N(r(476)),m=N(r(477)),v=N(r(478)),x=N(r(479)),h=N(r(480)),_=N(r(481)),j=N(r(482)),w=N(r(483)),P=N(r(484)),O=N(r(485)),k=N(r(486)),M=N(r(487)),C=N(r(488)),I=N(r(489)),S=N(r(490)),D=N(r(491)),A=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=z(t);if(r&&r.has(e))return r.get(e);var o={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var desc=l?Object.getOwnPropertyDescriptor(e,c):null;desc&&(desc.get||desc.set)?Object.defineProperty(o,c,desc):o[c]=e[c]}o.default=e,r&&r.set(e,o);return o}(r(460));function z(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(z=function(e){return e?r:t})(e)}function N(e){return e&&e.__esModule?e:{default:e}}t.helpers=A},553:function(e,t,r){e.exports=r.p+"img/how-it-works1.991498e.png"},554:function(e,t,r){e.exports=r.p+"img/how-it-works-line.8726f8b.png"},555:function(e,t,r){e.exports=r.p+"img/how-it-works2.179aa3f.png"},556:function(e,t,r){e.exports=r.p+"img/how-it-works-line2.b576ca8.png"},557:function(e,t,r){e.exports=r.p+"img/how-it-works3.cd0df3a.png"},566:function(e,t,r){"use strict";r.r(t);var n=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"my-[24px] space-y-4 lg:space-y-0"},[t("div",{staticClass:"flex flex-col lg:flex-row items-center border border-solid border-dGray rounded-md lg:border-none p-[12px] lg:p-0"},[t("img",{staticClass:"max-w-[285px] w-full h-auto object-cover",attrs:{src:r(553),alt:""}}),e._v(" "),t("div",{staticClass:"flex flex-col items-center justify-center lg:ml-[35px]"},[t("div",{staticClass:"flex items-center justify-center bg-dBlue w-[52px] h-[52px] rounded-full"},[t("h6",{staticClass:"text-dark leading-130 text-[24px] font-medium"},[e._v("1")])]),e._v(" "),t("img",{staticClass:"max-h-[240px] h-full w-auto object-contain hidden lg:block",attrs:{src:r(554),alt:""}})]),e._v(" "),t("div",{staticClass:"flex flex-col items-center lg:items-start justify-center lg:justify-start lg:ml-[130px]"},[t("h4",{staticClass:"text-center text-dark font-medium text-[18px] lg:text-[24px] leading-130"},[e._v("\n            Get quote and Place order\n          ")]),e._v(" "),t("p",{staticClass:"text-left text-dark font-normal text-[14px] lg:text-[18px] leading-140 mt-[12px]"},[e._v("\n            Receive a custom quote that's designed to meet your car shipping needs and budget by calling (865)\n            381-8015 or clicking on the “Get a Quote” button.\n\n            If you're happy with the estimate for shipping your car, you can finalize your order either by ordering\n            online or speaking with one of our car shipping experts.\n          ")])])]),e._v(" "),t("div",{staticClass:"flex flex-col lg:flex-row items-center border border-solid border-dGray rounded-md lg:border-none p-[12px] lg:p-0"},[t("img",{staticClass:"max-w-[285px] w-full h-auto object-cover",attrs:{src:r(555),alt:""}}),e._v(" "),t("div",{staticClass:"flex flex-col items-center justify-center lg:ml-[35px]"},[t("div",{staticClass:"flex items-center justify-center bg-dBlue w-[52px] h-[52px] rounded-full"},[t("h6",{staticClass:"text-dark leading-130 text-[24px] font-medium"},[e._v("2")])]),e._v(" "),t("img",{staticClass:"max-h-[240px] h-full w-auto object-contain hidden lg:block",attrs:{src:r(556),alt:""}})]),e._v(" "),t("div",{staticClass:"flex flex-col items-center lg:items-start justify-center lg:justify-start lg:ml-[130px]"},[t("h4",{staticClass:"text-center text-dark font-medium text-[18px] lg:text-[24px] leading-130"},[e._v("\n            Schedule Pickup\n          ")]),e._v(" "),t("p",{staticClass:"text-left text-dark font-normal text-[14px] lg:text-[18px] leading-140 mt-[12px]"},[e._v("\n            Our car shipping experts will take care of everything and schedule a pickup date, time and locations that\n            is convenient to you. On the day of pick up, both trucker and you will inspect your vehicle and sign a\n            Bill of Lading. Then you can kiss a goodbye, pack your bags, and let us take care of the rest. During the\n            transit, our experts will give you regular updates on your vehicle shipment.\n          ")])])]),e._v(" "),t("div",{staticClass:"flex flex-col lg:flex-row items-center border border-solid border-dGray rounded-md lg:border-none p-[12px] lg:p-0 lg:items-start"},[t("img",{staticClass:"max-w-[285px] w-full h-auto object-cover",attrs:{src:r(557),alt:""}}),e._v(" "),t("div",{staticClass:"flex flex-col items-center justify-center lg:ml-[35px]"},[t("div",{staticClass:"flex items-center justify-center bg-dBlue w-[52px] h-[52px] rounded-full"},[t("h6",{staticClass:"text-dark leading-130 text-[24px] font-medium"},[e._v("3")])])]),e._v(" "),t("div",{staticClass:"flex flex-col items-center lg:items-start justify-center lg:justify-start lg:ml-[130px]"},[t("h4",{staticClass:"text-center text-dark font-medium text-[18px] lg:text-[24px] leading-130"},[e._v("\n            Receive your vehicle\n          ")]),e._v(" "),t("p",{staticClass:"text-left text-dark font-normal text-[14px] lg:text-[18px] leading-140 mt-[12px]"},[e._v("\n            It's a reunion Day, a day we expect the most here at Albatross Auto Shipping. Upon delivery, the driver\n            will call you to schedule a drop-off time and place of your choice. Once you receive your vehicle, you and\n            the driver conduct a final vehicle inspection to make sure it was delivered safely and then sign off a\n            BOL. And that's it! Just like that, you receive your vehicle hassle-free.\n          ")])])])])}],o=(r(32),r(29),r(31),r(15),r(42),r(30),r(43),r(3)),l=r(16),c=(r(37),r(17)),f=r(467),d=r(461),y=r(495),m=r(508);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var x={layout:"black",computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.b)({faq:function(e){return e.faq}})),fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("fetchFaq");case 2:case"end":return t.stop()}}),t)})))()},components:{BreadCrumb:f.default,SectionTitle:d.default,Faq:y.default,MainForm:m.default},data:function(){return{links:[{title:"How it works",link:"/how-it-works"}]}}},h=x,_=r(10),component=Object(_.a)(h,(function(){var e=this,t=e._self._c;return t("div",[t("BreadCrumb",{attrs:{links:e.links}}),e._v(" "),t("div",{staticClass:"container px-[16px] mx-auto"},[t("section-title",{staticClass:"mt-[32px]",attrs:{title:"How it works?"}}),e._v(" "),e._m(0)],1),e._v(" "),t("MainForm"),e._v(" "),t("Faq",{attrs:{data:e.faq}})],1)}),n,!1,null,"00892922",null);t.default=component.exports;installComponents(component,{SectionTitle:r(461).default})}}]);