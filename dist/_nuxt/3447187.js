(window.webpackJsonp=window.webpackJsonp||[]).push([[14,8],{460:function(t,e,l){"use strict";l.r(e);var n={props:{title:{type:String,default:""},isWhite:{default:!1},center:{default:!0}}},c=l(10),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"flex items-center justify-center w-full",class:{"!justify-start":t.isWhite}},[e("img",{attrs:{src:l(461),alt:""}})]),t._v(" "),e("h1",{staticClass:"section-titles select-none relative",class:{"!text-white":t.isWhite,"text-center":t.center}},[t._v(t._s(t.title))])])}),[],!1,null,"35ce2a9a",null);e.default=component.exports},461:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMiIgdmlld0JveD0iMCAwIDM2IDIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8bGluZSB4MT0iMSIgeTE9IjEiIHgyPSIzNSIgeTI9IjEiIHN0cm9rZT0idXJsKCNwYWludDBfbGluZWFyXzExNV8zMzU5KSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4NCjxkZWZzPg0KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzExNV8zMzU5IiB4MT0iMS41ODA5OSIgeTE9IjIuNzA1NTkiIHgyPSIxLjcwODYzIiB5Mj0iMC40NDY0MTgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiMyQjBBQkYiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzI2QzBERSIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjwvZGVmcz4NCjwvc3ZnPg0K"},471:function(t,e,l){t.exports={}},484:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuOTk5OCAxNy43NUw1LjgyNzg0IDIwLjk5NUw3LjAwNjg0IDE0LjEyMkwyLjAwNjg0IDkuMjU1MDFMOC45MDY4NCA4LjI1NTAxTDExLjk5MjggMi4wMDIwMUwxNS4wNzg4IDguMjU1MDFMMjEuOTc4OCA5LjI1NTAxTDE2Ljk3ODggMTQuMTIyTDE4LjE1NzggMjAuOTk1TDExLjk5OTggMTcuNzVaIiBmaWxsPSIjRkZERjAwIi8+DQo8L3N2Zz4NCg=="},485:function(t,e,l){"use strict";l(471)},494:function(t,e,l){"use strict";l.r(e);l(29),l(59);var n=l(460),c=l(186),o=l.n(c),d=(l(291),l(292),{components:{SectionTitle:n.default,VueSlickCarousel:o.a},data:function(){return{settings:{dots:!1,arrows:!1,centerMode:!0,infinite:!0,autoplay:!0,autoplaySpeed:2e3,slidesToShow:1.72,slidesToScroll:1,loop:!0,responsive:[{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:617,settings:{slidesToShow:1,slidesToScroll:1}}]}}},props:{data:{type:Array||Object,default:{}}}}),x=(l(485),l(10)),component=Object(x.a)(d,(function(){var t=this,e=t._self._c;return t.data&&t.data.length?e("div",{staticClass:"lg:py-[60px] mt-[24px] lg:mt-0"},[e("section-title",{attrs:{"data-aos":"fade-up",title:"Reviews"}}),t._v(" "),e("div",[e("client-only",[e("VueSlickCarousel",t._b({staticClass:"parentSwiper !flex mt-[32px]"},"VueSlickCarousel",t.settings,!1),t._l(t.data,(function(n,c){return e("a",{key:c,staticClass:"review-slide",attrs:{href:n.url,"data-aos":"fade-up","data-aos-delay":c+1+"00"}},[e("h3",{staticClass:"text-white font-medium text-[20px] lg:text-[28px] leading-130"},[t._v("\n          "+t._s(n.title)+"\n        ")]),t._v(" "),e("h6",{staticClass:"text-white font-normal text-[13px] lg:text-[16px] leading-140 mt-3"},[t._v("\n          "+t._s(n.description)+"\n        ")]),t._v(" "),e("h4",{staticClass:"text-white font-medium text-[16px] lg:text-[20px] leading-130 mt-[26px]"},[t._v("\n          "+t._s(n.rate)+"\n        ")]),t._v(" "),e("div",{staticClass:"flex items-center"},[e("client-only",t._l(n.rate,(function(i,t){return e("img",{key:t,attrs:{src:l(484),alt:""}})})),0)],1),t._v(" "),e("div",{staticClass:"flex items-center justify-between flex-col lg:flex-row"},[e("div",{staticClass:"flex flex-col"},[e("h4",{staticClass:"text-white font-medium text-[16px] lg:text-[20px] leading-[26px] mt-[24px]"},[t._v("\n              "+t._s(n.full_name)+"\n            ")]),t._v(" "),e("h6",{staticClass:"text-white opacity-30 font-normal text-[12px] lg:text-[14px] leading-[16px] lg:leading-[24px] mt-[4px]"},[t._v("\n              "+t._s(n.address)+"\n            ")])]),t._v(" "),e("img",{staticClass:"max-h-[40px] lg:max-h-[60px] h-full w-auto",attrs:{src:n.logo_url,alt:""}})])])})),0)],1)],1)],1):t._e()}),[],!1,null,"3a2d60dc",null);e.default=component.exports;installComponents(component,{SectionTitle:l(460).default})}}]);