(window.webpackJsonp=window.webpackJsonp||[]).push([[23,5,6,13],{460:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.req=e.regex=e.ref=e.len=void 0,Object.defineProperty(e,"withParams",{enumerable:!0,get:function(){return o.default}});var n,o=(n=r(470))&&n.__esModule?n:{default:n};function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}var c=function(t){if(Array.isArray(t))return!!t.length;if(null==t)return!1;if(!1===t)return!0;if(t instanceof Date)return!isNaN(t.getTime());if("object"===l(t)){for(var e in t)return!0;return!1}return!!String(t).length};e.req=c;e.len=function(t){return Array.isArray(t)?t.length:"object"===l(t)?Object.keys(t).length:String(t).length};e.ref=function(t,e,r){return"function"==typeof t?t.call(e,r):r[t]};e.regex=function(t,e){return(0,o.default)({type:t},(function(t){return!c(t)||e.test(t)}))}},462:function(t,e,r){t.exports={}},465:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik01IDEySDNMMTIgM0wyMSAxMkgxOSIgc3Ryb2tlPSIjMDBBRkVGIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPHBhdGggZD0iTTUgMTJWMTlDNSAyMC4xMDQ2IDUuODk1NDMgMjEgNyAyMUgxN0MxOC4xMDQ2IDIxIDE5IDIwLjEwNDYgMTkgMTlWMTIiIHN0cm9rZT0iIzAwQUZFRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjxwYXRoIGQ9Ik05IDIxVjE1QzkgMTMuODk1NCA5Ljg5NTQzIDEzIDExIDEzSDEzQzE0LjEwNDYgMTMgMTUgMTMuODk1NCAxNSAxNVYyMSIgc3Ryb2tlPSIjMDBBRkVGIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPC9zdmc+DQo="},466:function(t,e,r){"use strict";r(462)},467:function(t,e,r){"use strict";r.r(e);r(141);var n={props:{links:{type:Array,default:function(){return[]}}}},o=(r(466),r(10)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-gray-100 py-[12px] w-full"},[e("div",{staticClass:"container mx-auto flex items-center px-[16px]"},[e("ul",{staticClass:"bread-crumbs"},[e("li",{staticClass:"flex items-center justify-center"},[e("img",{staticClass:"mr-[16px]",attrs:{src:r(465),alt:""}}),t._v(" "),e("nuxt-link",{staticClass:"text-dark",attrs:{to:"/"}},[t._v("\n              Home\n            ")])],1),t._v(" "),e("span",{staticClass:"text-[#74787D] mx-3"},[t._v("/")]),t._v(" "),t.links&&t.links.length?[e("client-only",t._l(t.links,(function(r,n){return e("li",{key:n},[n+1===t.links.length?e("span",[t._v(t._s(r.title))]):e("nuxt-link",{attrs:{to:r.link}},[t._v(t._s(r.title))])],1)})),0)]:t._e()],2)])])}),[],!1,null,"4c139732",null);e.default=component.exports},468:function(t,e,r){t.exports={}},469:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=(0,r(460).regex)("alpha",/^[a-zA-Z]*$/);e.default=n},470:function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n="web"===t.env.BUILD?r(471).withParams:r(290).withParams;e.default=n}).call(this,r(187))},471:function(t,e,r){"use strict";(function(t){function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==t?t:{},o=n.vuelidate?n.vuelidate.withParams:function(t,e){return"object"===r(t)&&void 0!==e?e:t((function(){}))};e.withParams=o}).call(this,r(33))},472:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=(0,r(460).regex)("alphaNum",/^[a-zA-Z0-9]*$/);e.default=n},473:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=(0,r(460).regex)("numeric",/^[0-9]*$/);e.default=n},474:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(460);e.default=function(t,e){return(0,n.withParams)({type:"between",min:t,max:e},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+t<=+r&&+e>=+r}))}},475:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=(0,r(460).regex)("email",/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i);e.default=n},476:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(460),o=(0,n.withParams)({type:"ipAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var e=t.split(".");return 4===e.length&&e.every(l)}));e.default=o;var l=function(t){if(t.length>3||0===t.length)return!1;if("0"===t[0]&&"0"!==t)return!1;if(!t.match(/^\d+$/))return!1;var e=0|+t;return e>=0&&e<=255}},477:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(460);e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var r="string"==typeof t&&""!==t?e.split(t):12===e.length||16===e.length?e.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)}))};var o=function(t){return t.toLowerCase().match(/^[0-9a-f]{2}$/)}},478:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(460);e.default=function(t){return(0,n.withParams)({type:"maxLength",max:t},(function(e){return!(0,n.req)(e)||(0,n.len)(e)<=t}))}},479:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(460);e.default=function(t){return(0,n.withParams)({type:"minLength",min:t},(function(e){return!(0,n.req)(e)||(0,n.len)(e)>=t}))}},480:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(460),o=(0,n.withParams)({type:"required"},(function(t){return"string"==typeof t?(0,n.req)(t.trim()):(0,n.req)(t)}));e.default=o},481:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(460);e.default=function(t){return(0,n.withParams)({type:"requiredIf",prop:t},(function(e,r){return!(0,n.ref)(t,this,r)||(0,n.req)(e)}))}},482:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(460);e.default=function(t){return(0,n.withParams)({type:"requiredUnless",prop:t},(function(e,r){return!!(0,n.ref)(t,this,r)||(0,n.req)(e)}))}},483:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(460);e.default=function(t){return(0,n.withParams)({type:"sameAs",eq:t},(function(e,r){return e===(0,n.ref)(t,this,r)}))}},484:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=(0,r(460).regex)("url",/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i);e.default=n},485:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(460);e.default=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var t=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return e.length>0&&e.reduce((function(e,r){return e||r.apply(t,n)}),!1)}))}},486:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(460);e.default=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var t=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return e.length>0&&e.reduce((function(e,r){return e&&r.apply(t,n)}),!0)}))}},487:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(460);e.default=function(t){return(0,n.withParams)({type:"not"},(function(e,r){return!(0,n.req)(e)||!t.call(this,e,r)}))}},488:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(460);e.default=function(t){return(0,n.withParams)({type:"minValue",min:t},(function(e){return!(0,n.req)(e)||(!/\s/.test(e)||e instanceof Date)&&+e>=+t}))}},489:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(460);e.default=function(t){return(0,n.withParams)({type:"maxValue",max:t},(function(e){return!(0,n.req)(e)||(!/\s/.test(e)||e instanceof Date)&&+e<=+t}))}},490:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=(0,r(460).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);e.default=n},491:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=(0,r(460).regex)("decimal",/^[-]?\d*(\.\d+)?$/);e.default=n},496:function(t,e,r){"use strict";r(468)},497:function(t,e,r){"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"alpha",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"alphaNum",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(e,"and",{enumerable:!0,get:function(){return M.default}}),Object.defineProperty(e,"between",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(e,"decimal",{enumerable:!0,get:function(){return D.default}}),Object.defineProperty(e,"email",{enumerable:!0,get:function(){return d.default}}),e.helpers=void 0,Object.defineProperty(e,"integer",{enumerable:!0,get:function(){return I.default}}),Object.defineProperty(e,"ipAddress",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(e,"macAddress",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(e,"maxLength",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(e,"maxValue",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(e,"minLength",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(e,"minValue",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(e,"not",{enumerable:!0,get:function(){return k.default}}),Object.defineProperty(e,"numeric",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(e,"or",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(e,"required",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(e,"requiredIf",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(e,"requiredUnless",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(e,"sameAs",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(e,"url",{enumerable:!0,get:function(){return P.default}});var o=z(r(469)),l=z(r(472)),c=z(r(473)),f=z(r(474)),d=z(r(475)),m=z(r(476)),y=z(r(477)),v=z(r(478)),h=z(r(479)),x=z(r(480)),w=z(r(481)),_=z(r(482)),j=z(r(483)),P=z(r(484)),O=z(r(485)),M=z(r(486)),k=z(r(487)),S=z(r(488)),C=z(r(489)),I=z(r(490)),D=z(r(491)),A=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==n(t)&&"function"!=typeof t)return{default:t};var r=T(e);if(r&&r.has(t))return r.get(t);var o={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in t)if("default"!==c&&Object.prototype.hasOwnProperty.call(t,c)){var desc=l?Object.getOwnPropertyDescriptor(t,c):null;desc&&(desc.get||desc.set)?Object.defineProperty(o,c,desc):o[c]=t[c]}o.default=t,r&&r.set(t,o);return o}(r(460));function T(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,r=new WeakMap;return(T=function(t){return t?r:e})(t)}function z(t){return t&&t.__esModule?t:{default:t}}e.helpers=A},498:function(t,e,r){"use strict";r.r(e);var n=r(461),o=r(186),l=r.n(o),c={components:{SectionTitle:n.default,VueSlickCarousel:l.a},data:function(){return{settings:{dots:!1,arrows:!1,centerMode:!0,infinite:!0,autoplay:!0,autoplaySpeed:2e3,slidesToShow:6,slidesToScroll:1,loop:!0,responsive:[{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:617,settings:{slidesToShow:1,slidesToScroll:1}}]},settings2:{dots:!1,arrows:!1,centerMode:!0,infinite:!0,autoplay:!0,autoplaySpeed:2e3,slidesToShow:6,slidesToScroll:1,loop:!0,responsive:[{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:617,settings:{slidesToShow:1,slidesToScroll:1}}]}}},props:{data:{type:Array,default:function(){return[]}}}},f=(r(496),r(10)),component=Object(f.a)(c,(function(){var t=this,e=t._self._c;return t.data&&t.data.length?e("div",{staticClass:"bg-[#F5F8FC] py-[20px] py-[60px] partners-slider"},[e("section-title",{staticClass:"mb-[36px]",attrs:{title:"Partners","data-aos":"fade-up"}}),t._v(" "),e("div",{staticClass:"mb-[24px]",attrs:{"data-aos":"fade-up","data-aos-delay":"100"}},[e("VueSlickCarousel",t._b({},"VueSlickCarousel",t.settings,!1),t._l(t.data,(function(r,n){return e("div",{key:n,staticClass:"partner-slide"},[e("a",{staticClass:"w-full h-full",attrs:{href:r.url,target:"_blank"}},[e("div",{staticClass:"left-gradient"}),t._v(" "),e("div",{staticClass:"top-gradient"}),t._v(" "),e("img",{staticClass:"w-[80px] lg:max-w-[110\\px] h-auto object-contain mx-auto",attrs:{src:r.logo_url,alt:""}})])])})),0)],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionTitle:r(461).default})},502:function(t,e,r){t.exports={}},511:function(t,e,r){"use strict";r(502)},536:function(t,e,r){"use strict";r.r(e);var n={props:{data:{type:Object,default:function(){return{}}}}},o=(r(511),r(10)),component=Object(o.a)(n,(function(){var t,e,r,n,o=this,l=o._self._c;return l("nuxt-link",{staticClass:"max-h-[564px] h-full w-full bg-white cursor-pointer border border-solid border-[#F0F0F0] rounded-[20px] p-[8px] flex flex-col justify-between",attrs:{to:"/pages/".concat(null===(t=o.data)||void 0===t?void 0:t.slug)}},[l("img",{staticClass:"max-h-[214px] h-full w-full object-cover rounded-[16px]",attrs:{src:null===(e=o.data)||void 0===e?void 0:e.image_url,alt:"img-auto"}}),o._v(" "),l("div",{staticClass:"p-[12px]"},[l("h4",{staticClass:"text-dark leading-130 text-[20px] font-medium mt-[20px]"},[o._v(o._s(null===(r=o.data)||void 0===r?void 0:r.title))]),o._v(" "),l("h6",{staticClass:"text-dark leading-130 text-[18px] font-normal mt-[12px] line-clamp-3"},[o._v(o._s(null===(n=o.data)||void 0===n?void 0:n.short_content))]),o._v(" "),l("button",{staticClass:"btn-arrow mt-[45px] hover:bg-dBlue duration-200 h-fit border-solid text-dBlue hover:text-white w-full flex items-center justify-center gap-[12px] p-[10px] rounded-full border-dBlue border-2"},[o._v("\n            Learn more\n            "),l("span",[l("svg",{staticClass:"btn-svg",attrs:{width:"21",height:"20",viewBox:"0 0 21 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{d:"M5.83325 9.99998L15.1666 9.99998",stroke:"#00AFEF","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"}}),o._v(" "),l("path",{attrs:{d:"M12.5 7.33333L15.1667 10",stroke:"#00AFEF","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"}}),o._v(" "),l("path",{attrs:{d:"M12.5 12.6667L15.1667 10",stroke:"#00AFEF","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"}}),o._v(" "),l("rect",{attrs:{x:"1",y:"19.5",width:"19",height:"19",rx:"9.5",transform:"rotate(-90 1 19.5)",stroke:"#00AFEF"}})])])])])])}),[],!1,null,"0cc222d0",null);e.default=component.exports},567:function(t,e,r){"use strict";r.r(e);r(32),r(29),r(31),r(15),r(42),r(30),r(43);var n=r(3),o=r(16),l=(r(37),r(467)),c=r(461),f=r(536),d=r(508),m=r(17),y=r(498);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var h={layout:"black",components:{BreadCrumb:l.default,SectionTitle:c.default,TransportCard:f.default,MainForm:d.default,PartnersSlider:y.default},data:function(){return{transportCardData:[{img:"https://picsum.photos/300/300",title:"Open transport",desc:"Open transport is the most common way to ship a vehicle. It is the most affordable option, but it is also the slowest and least secure. Open transport is the most common way to ship a vehicle. It is the most affordable option, but it is also the slowest and least secure."},{img:"https://picsum.photos/300/350",title:"Door-to-Door Car Shipping",desc:"At Albatros, we want to make the process of shipping your car from point A to point B as easy and convenient as possible. That’s why we offer our customers Door-to-Door no-hassle car shipping."},{img:"https://picsum.photos/300/400",title:"Enclosed Auto Transport",desc:"Need an expensive, classic, or antique car transported a long-distance? Do you want to avoid potential damages that can occur with standard auto shipping? At Nexus Auto Transport, we want to make the process of shipping your car from point A to point B."},{img:"https://picsum.photos/300/300",title:"Open transport",desc:"Open transport is the most common way to ship a vehicle. It is the most affordable option, but it is also the slowest and least secure. Open transport is the most common way to ship a vehicle. It is the most affordable option, but it is also the slowest and least secure."},{img:"https://picsum.photos/300/350",title:"Door-to-Door Car Shipping",desc:"At Albatros, we want to make the process of shipping your car from point A to point B as easy and convenient as possible. That’s why we offer our customers Door-to-Door no-hassle car shipping."},{img:"https://picsum.photos/300/400",title:"Enclosed Auto Transport",desc:"Need an expensive, classic, or antique car transported a long-distance? Do you want to avoid potential damages that can occur with standard auto shipping? At Nexus Auto Transport, we want to make the process of shipping your car from point A to point B."}],links:[{title:"Transport options",link:"/transport-options"}]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(m.b)({optionsList:function(t){return t.transportOptions},partners:function(t){return t.partners}})),fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("fetchTransportOptions");case 2:return e.next=4,t.$store.dispatch("fetchPartners");case 4:case"end":return e.stop()}}),e)})))()}},x=h,w=r(10),component=Object(w.a)(x,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-gray-100"},[e("BreadCrumb",{attrs:{links:t.links}}),t._v(" "),e("div",{staticClass:"container px-[16px] mx-auto"},[e("section-title",{staticClass:"mt-[32px]",attrs:{title:"Transport options"}}),t._v(" "),e("div",{staticClass:"container mx-auto px-[16px] my-[32px]"},[e("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[20px] gap-y-[24px]"},t._l(t.optionsList,(function(t){return e("TransportCard",{key:t.id,attrs:{data:t}})})),1)])],1),t._v(" "),e("MainForm"),t._v(" "),e("PartnersSlider",{attrs:{data:t.partners}})],1)}),[],!1,null,"732dbef5",null);e.default=component.exports;installComponents(component,{SectionTitle:r(461).default})}}]);