(window.webpackJsonp=window.webpackJsonp||[]).push([[10,8],{460:function(t,e,r){"use strict";r.r(e);var n={props:{title:{type:String,default:""},isWhite:{default:!1},center:{default:!0}}},o=r(10),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"flex items-center justify-center w-full",class:{"!justify-start":t.isWhite}},[e("img",{attrs:{src:r(461),alt:""}})]),t._v(" "),e("h1",{staticClass:"section-titles select-none relative",class:{"!text-white":t.isWhite,"text-center":t.center}},[t._v(t._s(t.title))])])}),[],!1,null,"35ce2a9a",null);e.default=component.exports},461:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMiIgdmlld0JveD0iMCAwIDM2IDIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8bGluZSB4MT0iMSIgeTE9IjEiIHgyPSIzNSIgeTI9IjEiIHN0cm9rZT0idXJsKCNwYWludDBfbGluZWFyXzExNV8zMzU5KSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4NCjxkZWZzPg0KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzExNV8zMzU5IiB4MT0iMS41ODA5OSIgeTE9IjIuNzA1NTkiIHgyPSIxLjcwODYzIiB5Mj0iMC40NDY0MTgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiMyQjBBQkYiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzI2QzBERSIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjwvZGVmcz4NCjwvc3ZnPg0K"},491:function(t,e,r){t.exports={}},508:function(t,e,r){"use strict";r(491)},520:function(t,e,r){"use strict";r.r(e);r(32),r(29),r(31),r(15),r(42),r(30),r(43);var n=r(3),o=r(16),l=(r(37),r(460)),c=r(186),d=r.n(c),v=r(17);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f={name:"MyComponent",components:{SectionTitle:l.default,VueSlickCarousel:d.a},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(v.b)({informs:function(t){return t.settings}})),fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("fetchSettings");case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{steps:[{step:"01",title:"How trucking works?",context:"Trucking is a cash flow-intensive business. You are always buying fuel, making insurance payments, making truck payments, and so on. Unless you get quick-pays, shippers and brokers can pay invoices in 15 to 30 days. ... Many factoring companies provide fuel advances, cards, and other services as well."},{step:"02",title:"How trucking works?",context:"Trucking is a cash flow-intensive business. You are always buying fuel, making insurance payments, making truck payments, and so on. Unless you get quick-pays, shippers and brokers can pay invoices in 15 to 30 days. ... Many factoring companies provide fuel advances, cards, and other services as well."},{step:"03",title:"How trucking works?",context:"Trucking is a cash flow-intensive business. You are always buying fuel, making insurance payments, making truck payments, and so on. Unless you get quick-pays, shippers and brokers can pay invoices in 15 to 30 days. ... Many factoring companies provide fuel advances, cards, and other services as well."}],settings:{dots:!1,infinite:!1,speed:500,slidesToShow:3,slidesToScroll:3,initialSlide:0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:800,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:680,settings:{slidesToShow:1,slidesToScroll:1}}]}}}},m=f,h=(r(508),r(10)),component=Object(h.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative py-[30px] lg:py-[60px]",attrs:{id:"easySteps"}},[e("img",{staticClass:"absolute hidden lg:block left-[1%] top-[7%] vert-move",attrs:{src:r(290),alt:""}}),t._v(" "),e("div",{staticClass:"container mx-auto h-[300px] md:h-auto"},[e("section-title",{attrs:{title:"Easy Steps"}}),t._v(" "),e("VueSlickCarousel",t._b({staticClass:"parentSwiper mt-[32px]"},"VueSlickCarousel",t.settings,!1),[t.informs.step_1?e("div",{staticClass:"group group-steps max-w-[385px] w-full border-2 border-solid border-[#D3D3D5] duration-300 hover:bg-dark hover:border-b-2 hover:border-b-dBlue rounded-3xl p-[24px] min-h-[397px]",attrs:{"data-aos":"fade-up","data-aos-delay":"00"}},[e("h3",{staticClass:"title-gradient group-hover:border-[#00AFEF] duration-300"},[t._v("\n          1\n        ")]),t._v(" "),e("p",{staticClass:"text-dark group-hover:text-white duration-300 font-medium text-[18px] lg:text-[24px] leading-130 mt-[16px] cursor-pointer"},[t._v("\n        Quote & Order\n        ")]),t._v(" "),e("p",{staticClass:"text-dark group-hover:text-white duration-300 font-normal text-[13px] lg:text-[16px] leading-140 mt-[12px] cursor-pointer"},[t._v("\n          "+t._s(t.informs.step_1)+"\n        ")])]):t._e(),t._v(" "),t.informs.step_2?e("div",{staticClass:"group group-steps max-w-[385px] w-full border-2 border-solid border-[#D3D3D5] duration-300 hover:bg-dark hover:border-b-2 hover:border-b-dBlue rounded-3xl p-[24px]",attrs:{"data-aos":"fade-up","data-aos-delay":"100"}},[e("h3",{staticClass:"title-gradient group-hover:border-[#00AFEF] duration-300"},[t._v("\n          2\n        ")]),t._v(" "),e("p",{staticClass:"text-dark group-hover:text-white duration-300 font-medium text-[18px] lg:text-[24px] leading-130 mt-[16px] cursor-pointer"},[t._v("\n        Schedule Pickup\n        ")]),t._v(" "),e("p",{staticClass:"text-dark group-hover:text-white duration-300 font-normal text-[13px] lg:text-[16px] leading-140 mt-[12px] cursor-pointer"},[t._v("\n          "+t._s(t.informs.step_2)+"\n        ")])]):t._e(),t._v(" "),t.informs.step_3?e("div",{staticClass:"group group-steps max-w-[385px] w-full border-2 border-solid border-[#D3D3D5] duration-300 hover:bg-dark hover:border-b-2 hover:border-b-dBlue rounded-3xl p-[24px]",attrs:{"data-aos":"fade-up","data-aos-delay":"200"}},[e("h3",{staticClass:"title-gradient group-hover:border-[#00AFEF] duration-300"},[t._v("\n          3\n        ")]),t._v(" "),e("p",{staticClass:"text-dark group-hover:text-white duration-300 font-medium text-[18px] lg:text-[24px] leading-130 mt-[16px] cursor-pointer"},[t._v("\n        Receive your vehicle\n        ")]),t._v(" "),e("p",{staticClass:"text-dark group-hover:text-white duration-300 font-normal text-[13px] lg:text-[16px] leading-140 mt-[12px] cursor-pointer"},[t._v("\n          "+t._s(t.informs.step_3)+"\n        ")])]):t._e()])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionTitle:r(460).default})}}]);