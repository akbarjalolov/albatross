(window.webpackJsonp=window.webpackJsonp||[]).push([[18,3,6,7,9,10],{464:function(t,e,n){"use strict";n.r(e);var l={props:{title:{type:String,default:""},isWhite:{default:!1},center:{default:!0}}},o=n(10),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"flex items-center justify-center w-full",class:{"!justify-start":t.isWhite}},[e("img",{attrs:{src:n(469),alt:""}})]),t._v(" "),e("h1",{staticClass:"section-titles select-none relative",class:{"!text-white":t.isWhite,"text-center":t.center}},[t._v(t._s(t.title))])])}),[],!1,null,"35ce2a9a",null);e.default=component.exports},465:function(t,e,n){t.exports={}},466:function(t,e,n){"use strict";n.r(e);var l={computed:{shimmerStyles:function(){return{"--width":this.width,"--height":this.height,"--border-radius":this.circle?"100px":this.borderRadius?this.borderRadius:"4px","--skeleton-duration":this.duration?props.duration+"s":"1s"}}},props:{loading:{type:Boolean,default:!0},height:{type:String,default:"200px"},width:{type:String,default:"400px"},margin:{type:String,default:"0"},borderRadius:{type:String,default:"0"},styles:{type:String,default:""},preloaderClass:{type:String,default:""},shimmerClass:{type:String,default:""},dark:{type:Boolean,default:!1}}},o=(n(467),n(10)),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("transition",{key:t.loading,attrs:{name:"skeleton",mode:"out-in"}},[t.loading?e("div",{key:"loading",staticClass:"shrink-0",class:["skeleton-wrapper",t.preloaderClass,{dark:t.dark}],style:{height:t.height,width:t.width,margin:t.margin,borderRadius:t.borderRadius,styles:t.styles}},[e("span",{staticClass:"skeleton",class:t.shimmerClass,style:[{borderRadius:t.borderRadius}]})]):[t._t("default")]],2)}),[],!1,null,null,null);e.default=component.exports},467:function(t,e,n){"use strict";n(465)},468:function(t,e,n){t.exports={}},469:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMiIgdmlld0JveD0iMCAwIDM2IDIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8bGluZSB4MT0iMSIgeTE9IjEiIHgyPSIzNSIgeTI9IjEiIHN0cm9rZT0idXJsKCNwYWludDBfbGluZWFyXzExNV8zMzU5KSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4NCjxkZWZzPg0KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzExNV8zMzU5IiB4MT0iMS41ODA5OSIgeTE9IjIuNzA1NTkiIHgyPSIxLjcwODYzIiB5Mj0iMC40NDY0MTgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiMyQjBBQkYiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzI2QzBERSIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjwvZGVmcz4NCjwvc3ZnPg0K"},471:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik01IDEySDNMMTIgM0wyMSAxMkgxOSIgc3Ryb2tlPSIjMDBBRkVGIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPHBhdGggZD0iTTUgMTJWMTlDNSAyMC4xMDQ2IDUuODk1NDMgMjEgNyAyMUgxN0MxOC4xMDQ2IDIxIDE5IDIwLjEwNDYgMTkgMTlWMTIiIHN0cm9rZT0iIzAwQUZFRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjxwYXRoIGQ9Ik05IDIxVjE1QzkgMTMuODk1NCA5Ljg5NTQzIDEzIDExIDEzSDEzQzE0LjEwNDYgMTMgMTUgMTMuODk1NCAxNSAxNVYyMSIgc3Ryb2tlPSIjMDBBRkVGIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPC9zdmc+DQo="},472:function(t,e,n){"use strict";n(468)},473:function(t,e,n){"use strict";n.r(e);n(142);var l=n(466),o={props:{links:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:!1}},components:{Preloader:l.default}},r=(n(472),n(10)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-gray-100 py-[12px] w-full"},[e("div",{staticClass:"container mx-auto flex items-center px-[16px]"},[e("NuxtLink",{staticClass:"flex items-center mr-2 text-dark font-semibold leading-130 text-base hover:text-darkBlue transition duration-300",attrs:{to:"/"}},[e("Preloader",{attrs:{loading:t.loading,width:"24px",height:"24px","border-radius":"4px",margin:"0 0 0 16px"}},[e("img",{staticClass:"mr-[16px]",attrs:{src:n(471),alt:""}})]),t._v(" "),e("i",{staticClass:"icon-home-fill text-xl leading-5 mr-2 text-blue"}),t._v(" "),e("Preloader",{attrs:{loading:t.loading,width:"50px",height:"24px","border-radius":"4px",margin:"0 0 0 16px"}},[e("p",[t._v("Home")])])],1),t._v(" "),t._l(t.links,(function(n,l){return e("div",{key:l,staticClass:"flex items-center mr-2"},[e("span",{staticClass:"mx-[12px] tet-[#74787D]"},[t._v("/")]),t._v(" "),e("Preloader",{attrs:{loading:t.loading,width:"50px",height:"24px","border-radius":"4px",margin:"0 0 0 16px"}},[e("NuxtLink",{staticClass:"transition-200 flex cursor-pointer items-center text-dBlue font-semibold leading-130 min-w-max text-base hover:!text-darkBlue breadcrumb-menu",class:{"pointer-events-none":l===t.links.length-1},attrs:{to:null==n?void 0:n.link}},[t._v("\n        "+t._s(null==n?void 0:n.title)+"\n      ")])],1)],1)}))],2)])}),[],!1,null,"239da182",null);e.default=component.exports;installComponents(component,{Preloader:n(466).default})},500:function(t,e,n){t.exports={}},507:function(t,e,n){"use strict";n(500)},509:function(t,e,n){t.exports={}},516:function(t,e,n){"use strict";n.r(e);n(29),n(59);var l={props:{data:{type:Object,default:function(){return{}}},isThumbnail:{type:Boolean,default:!1}}},o=(n(507),n(10)),component=Object(o.a)(l,(function(){var t,e,n,l,o,r,d,c,x,m,f,v,h,y=this,w=y._self._c;return w("div",[y.isThumbnail?w("nuxt-link",{staticClass:"lg:max-h-[290px] h-full w-full bg-white cursor-pointer blok-card border border-solid border-[#F0F0F0] overflow-hidden rounded-[20px] flex flex-col lg:flex-row justify-between",attrs:{to:"/blogs/".concat(null===(t=y.data)||void 0===t?void 0:t.slug)}},[w("img",{staticClass:"max-h-[185px] lg:max-h-[290px] w-full object-cover",attrs:{src:null===(e=y.data)||void 0===e?void 0:e.image_url,alt:"img-auto"}}),y._v(" "),w("div",{staticClass:"p-[12px] flex flex-col justify-between"},[w("div",[w("h4",{staticClass:"text-dark leading-[140%] text-[16px] font-medium"},[y._v("\n          "+y._s(null===(n=y.data)||void 0===n?void 0:n.title)+"\n        ")]),y._v(" "),w("p",{staticClass:"text-darks leading-[130%] text-[13px] font-normal mt-[8px] line-clamp-2"},[y._v("\n          "+y._s(null===(l=y.data)||void 0===l?void 0:l.description)+"\n        ")])]),y._v(" "),w("div",{staticClass:"flex items-end justify-between mt-[40px]"},[w("div",{staticClass:"flex flex-col"},[w("h4",{staticClass:"text-dBlue leading-130 text-[14px] font-medium"},[y._v("\n            "+y._s(null===(o=y.data)||void 0===o?void 0:o.full_name)+"\n          ")]),y._v(" "),w("h4",{staticClass:"text-lightGray leading-130 text-[14px] font-normal"},[y._v("\n            "+y._s(null===(r=y.data)||void 0===r?void 0:r.position)+"\n          ")])]),y._v(" "),w("h4",{staticClass:"text-lightGray leading-130 text-[14px] font-normal"},[y._v("\n          "+y._s(null===(d=y.data)||void 0===d?void 0:d.published_at)+"\n        ")])])])]):w("nuxt-link",{staticClass:"max-h-[360px] h-full w-full bg-white cursor-pointer blok-card border border-solid border-[#F0F0F0] overflow-hidden rounded-[20px] flex flex-col justify-between",attrs:{to:"/blogs/".concat(null===(c=y.data)||void 0===c?void 0:c.slug)}},[w("img",{staticClass:"max-h-[185px] h-full w-full object-cover",attrs:{src:null===(x=y.data)||void 0===x?void 0:x.image_url,alt:"img-auto"}}),y._v(" "),w("div",{staticClass:"p-[12px]"},[w("h4",{staticClass:"text-dark leading-[140%] text-[16px] font-medium"},[y._v("\n        "+y._s(null===(m=y.data)||void 0===m?void 0:m.title)+"\n      ")]),y._v(" "),w("p",{staticClass:"text-darks leading-[130%] text-[13px] font-normal mt-[8px] line-clamp-2"},[y._v("\n        "+y._s(null===(f=y.data)||void 0===f?void 0:f.description)+"\n      ")]),y._v(" "),w("div",{staticClass:"flex items-cetner justify-between mt-[40px]"},[w("h4",{staticClass:"text-dBlue leading-130 text-[14px] font-medium"},[y._v("\n          "+y._s(null===(v=y.data)||void 0===v?void 0:v.full_name)+"\n        ")]),y._v(" "),w("h4",{staticClass:"text-lightGray leading-130 text-[14px] font-normal"},[y._v("\n          "+y._s(null===(h=y.data)||void 0===h?void 0:h.published_date)+"\n        ")])])])])],1)}),[],!1,null,"038126db",null);e.default=component.exports},518:function(t,e,n){"use strict";n(509)},532:function(t,e,n){"use strict";n.r(e);n(97);var l={name:"LinkCopy",props:{maxWidth:{type:String,default:"w-[165px]"}},data:function(){return{copyLink:!1}},methods:{copy:function(){var t=this,input=document.createElement("input");document.body.appendChild(input),input.value=window.location.href,input.select(),input.focus(),document.execCommand("copy"),input.remove(),this.copyLink=!0,setTimeout((function(){t.copyLink=!1}),2e3)}}},o=(n(518),n(10)),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"border max-w-[214px] bg-[#F5F8FC] rounded-[8px] flex items-center gap-2 justify-between",on:{click:function(e){return t.copy()}}},[e("div",{staticClass:"w-full relative",class:t.maxWidth},[e("h3",{staticClass:"text-[#181919] text-[16px] font-semibold py-[8px] pl-[12px] truncate"},[t._v("\n      allbatross.com"+t._s(t.$route.path)+"\n    ")]),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.copyLink?e("div",{staticClass:"bg-[#484848db] py-[10px] w-full text-center text-white text-[12px] font-normal absolute top-0 left-0 rounded-[2px]"},[t._v("\n        Text copied\n      ")]):t._e()])],1),t._v(" "),e("button",{staticClass:"group w-[36px] h-[37px] flex items-center justify-center bg-[#FBFBFB] hover:bg-mainBlue transition duration-300 hover:bg-[#d4d3d3] rounded-r-[8px]"},[e("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("rect",{attrs:{x:"8",y:"7.99902",width:"12",height:"12",rx:"1.5",stroke:"#828F89","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{d:"M16 7.99902V5.99902C16 4.89445 15.1046 3.99902 14 3.99902H6C4.89543 3.99902 4 4.89445 4 5.99902V13.999C4 15.1036 4.89543 15.999 6 15.999H8",stroke:"#828F89","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"}})])])])}),[],!1,null,"40c9fa00",null);e.default=component.exports},540:function(t,e,n){t.exports={}},566:function(t,e,n){"use strict";n(540)},576:function(t,e,n){"use strict";n.r(e);n(32),n(29),n(31),n(15),n(42),n(30),n(43);var l=n(3),o=n(16),r=(n(37),n(97),n(17)),d=n(473),c=n(532),x=n(516),m=n(464);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={layout:"black",components:{BreadCrumb:d.default,CopyUrl:c.default,SectionTitle:m.default,BlogCard:x.default},data:function(){return{relatedPosts:[{img:"https://picsum.photos/300/300",title:"Open transport",slug:"blog-2",author:{name:"John Doe",position:"Account executive, Auto Transport Expert"},date:"12.12.2021",desc:"Open transport is the most common way to ship a vehicle. It is the most affordable option, but it is also the slowest and least secure. Open transport is the most common way to ship a vehicle. It is the most affordable option, but it is also the slowest and least secure."},{img:"https://picsum.photos/300/350",title:"Door-to-Door Car Shipping",slug:"blog-2",author:{name:"John Doe",position:"Account executive, Auto Transport Expert"},date:"12.12.2021",desc:"At Albatros, we want to make the process of shipping your car from point A to point B as easy and convenient as possible. That’s why we offer our customers Door-to-Door no-hassle car shipping."},{img:"https://picsum.photos/300/400",title:"Enclosed Auto Transport",slug:"blog-2",author:{name:"John Doe",position:"Account executive, Auto Transport Expert"},date:"12.12.2021",desc:"Need an expensive, classic, or antique car transported a long-distance? Do you want to avoid potential damages that can occur with standard auto shipping? At Nexus Auto Transport, we want to make the process of shipping your car from point A to point B."}],loading:!0}},computed:v(v({},Object(r.b)({slugData:function(t){return t.blogSlug}})),{},{links:function(){var t;return[{title:"Blog",link:"/blogs"},{title:null===(t=this.slugData)||void 0===t?void 0:t.title,link:""}]}}),mounted:function(){var t=this;setTimeout((function(){t.loading=!1}),1e3)},fetch:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$store.dispatch("fetchBlogSlug",t.$route.params.slug);case 1:case"end":return e.stop()}}),e)})))()}},y=(n(566),n(10)),component=Object(y.a)(h,(function(){var t,e,n,l,o,r,d=this,c=d._self._c;return c("div",[c("BreadCrumb",{attrs:{links:d.links,loading:d.loading}}),d._v(" "),c("div",{staticClass:"container px-[16px] mx-auto"},[c("div",{staticClass:"container mx-auto px-[16px] my-[32px]"},[c("img",{staticClass:"w-full max-h-[480px] h-full rounded-[30px] object-contain",attrs:{src:null===(t=d.slugData)||void 0===t?void 0:t.image_url,alt:""}}),d._v(" "),c("div",{staticClass:"max-w-[990px] w-full mx-auto flex flex-col"},[c("h4",{staticClass:"mt-[16px] md:mt-[32px] font-semibold text-[20px] md:text-[32px] leading-[140%] text-dark"},[d._v("\n          "+d._s(null===(e=d.slugData)||void 0===e?void 0:e.title)+"\n        ")]),d._v(" "),c("div",{staticClass:"flex space-x-1 flex-wrap items-center mt-2"},[c("h4",{staticClass:"text-dBlue font-semibold text-xl leading-130"},[d._v("\n            "+d._s(null===(n=d.slugData)||void 0===n?void 0:n.full_name)+"\n          ")]),d._v(" "),c("div",{staticClass:"w-[4px] h-[4px] rounded-full bg-dBlue"}),d._v(" "),c("h4",{staticClass:"text-[#74787D] font-normal text-sm leading-130"},[d._v("\n            "+d._s(null===(l=d.slugData)||void 0===l?void 0:l.position)+"\n          ")]),d._v(" "),c("div",{staticClass:"w-[4px] h-[4px] rounded-full bg-dBlue"}),d._v(" "),c("h4",{staticClass:"text-[#74787D] font-normal text-sm leading-130"},[d._v("\n            "+d._s(null===(o=d.slugData)||void 0===o?void 0:o.published_at)+"\n          ")])]),d._v(" "),c("div",{staticClass:"content-styles mt-[16px] md:mt-[32px]",domProps:{innerHTML:d._s(null===(r=d.slugData)||void 0===r?void 0:r.content)}}),d._v(" "),c("div",{staticClass:"flex items-end justify-end mt-[16px] md:mt-[32px]"},[c("CopyUrl")],1)]),d._v(" "),c("div",{staticClass:"mt-[24px] md:mt-[64px]"},[c("SectionTitle",{attrs:{title:"Related Posts"}})],1),d._v(" "),c("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[20px] gap-y-[24px] mt-[32px]"},[c("client-only",d._l(d.relatedPosts,(function(t){return c("BlogCard",{key:t.id,attrs:{data:t}})})),1)],1)])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CopyUrl:n(532).default,SectionTitle:n(464).default})}}]);