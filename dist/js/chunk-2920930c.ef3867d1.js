(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2920930c"],{"1e4b":function(t,i,s){"use strict";s.r(i);var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"index"},[s("div",{staticClass:"container"},[s("div",{staticClass:"swiper-box"},[s("div",{staticClass:"nav-menu"},[s("ul",{staticClass:"menu-wrap"},[s("li",{staticClass:"menu-item"},[s("a",{attrs:{href:"javascript:;"}},[t._v("手机 电话卡")]),s("div",{staticClass:"children"},t._l(t.menuList,(function(i,a){return s("ul",{key:a},t._l(i,(function(i,a){return s("li",{key:a},[s("a",{attrs:{href:"/#/product/"+i.id}},[s("img",{attrs:{src:i?i.img:"/imgs/item-box-1.png"}}),t._v(" "+t._s(i?i.name:"小米9")+" ")])])})),0)})),0)]),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6)])]),s("swiper",{attrs:{options:t.swiperOption}},[t._l(t.slideList,(function(t,i){return s("swiper-slide",{key:i},[s("a",{attrs:{href:"/#/product/"+t.id}},[s("img",{attrs:{src:t.img}})])])})),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),s("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),s("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],2)],1),s("div",{staticClass:"ads-box"},t._l(t.adsList,(function(t,i){return s("a",{key:i,attrs:{href:"/#/product/"+t.id}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.img,expression:"item.img"}]})])})),0),s("div",{staticClass:"banner"},[s("a",{attrs:{href:"/#/product/30"}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/imgs/banner-1.png",expression:"'/imgs/banner-1.png'"}],attrs:{alt:""}})])])]),s("div",{staticClass:"product-box"},[s("div",{staticClass:"container"},[s("h2",[t._v("手机")]),s("div",{staticClass:"wrapper"},[t._m(7),s("div",{staticClass:"list-box"},t._l(t.phoneList,(function(i,a){return s("div",{key:a,staticClass:"list"},t._l(i,(function(i,a){return s("div",{key:a,staticClass:"item"},[s("span",{class:a%2===0?"new-pro":"kill-pro"},[t._v("新品")]),s("div",{staticClass:"item-img"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.mainImage,expression:"item.mainImage"}]})]),s("div",{staticClass:"item-info"},[s("h3",[t._v(t._s(i.name))]),s("p",[t._v(t._s(i.subtitle))]),s("p",{staticClass:"price",on:{click:function(s){return t.addCart(i.id)}}},[t._v(t._s(i.price)+"元")])])])})),0)})),0)])])]),s("service-bar"),s("modal",{attrs:{title:"提示",sureText:"查看购物车",btnType:"1",modalType:"middle",showModal:t.showModal},on:{submit:t.gotoCart,cancel:function(i){t.showModal=!1}},scopedSlots:t._u([{key:"body",fn:function(){return[s("p",[t._v("商品添加成功!")])]},proxy:!0}])})],1)},e=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("li",{staticClass:"menu-item"},[s("a",{attrs:{href:"javascript:;"}},[t._v("电视 盒子")]),s("div",{staticClass:"children"})])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("li",{staticClass:"menu-item"},[s("a",{attrs:{href:"javascript:;"}},[t._v("笔记本 平板")]),s("div",{staticClass:"children"})])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("li",{staticClass:"menu-item"},[s("a",{attrs:{href:"javascript:;"}},[t._v("家电 插线板")]),s("div",{staticClass:"children"})])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("li",{staticClass:"menu-item"},[s("a",{attrs:{href:"javascript:;"}},[t._v("出行 穿戴")]),s("div",{staticClass:"children"})])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("li",{staticClass:"menu-item"},[s("a",{attrs:{href:"javascript:;"}},[t._v("智能 路由器")]),s("div",{staticClass:"children"})])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("li",{staticClass:"menu-item"},[s("a",{attrs:{href:"javascript:;"}},[t._v("电源 配件")]),s("div",{staticClass:"children"})])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("li",{staticClass:"menu-item"},[s("a",{attrs:{href:"javascript:;"}},[t._v("生活 箱包")]),s("div",{staticClass:"children"})])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"banner-left"},[s("a",{attrs:{href:"/#/product/35"}},[s("img",{attrs:{src:"/imgs/mix-alpha.jpg"}})])])}],n=(s("d8ab"),s("984c")),r=s("714b"),c=s("6fe8");s("664d");var l={name:"index",components:{swiper:c["swiper"],swiperSlide:c["swiperSlide"],ServiceBar:n["a"],Modal:r["a"]},data:function(){return{swiperOption:{autoplay:!0,loop:!0,effect:"cube",cubeEffect:{shadowScale:.6},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},slideList:[{id:"42",img:"./imgs/slider/slide-1.jpg"},{id:"45",img:"./imgs/slider/slide-2.jpg"},{id:"46",img:"./imgs/slider/slide-3.jpg"},{id:"",img:"./imgs/slider/slide-4.jpg"},{id:"",img:"./imgs/slider/slide-5.jpg"}],menuList:[[{id:30,img:"/imgs/item-box-1.png",name:"小米CC9"},{id:31,img:"/imgs/item-box-2.png",name:"小米8青春版"},{id:32,img:"/imgs/item-box-3.jpg",name:"Redmi K20"},{id:33,img:"/imgs/item-box-4.jpg",name:"移动4G专区"}],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],adsList:[{id:33,img:"/imgs/ads/ads-1.png"},{id:48,img:"/imgs/ads/ads-2.jpg"},{id:45,img:"/imgs/ads/ads-3.png"},{id:47,img:"/imgs/ads/ads-4.jpg"}],phoneList:[],showModal:!1}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.axios.get("/products",{params:{categoryId:100012,pageSize:14}}).then((function(i){i.list=i.list.slice(6,14),t.phoneList=[i.list.slice(0,4),i.list.slice(4,8)]}))},addCart:function(t){var i=this;this.axios.post("/carts",{productId:t,selected:!0}).then((function(t){i.showModal=!0,i.$store.dispatch("saveCartCount",t.cartTotalQuantity)})).catch((function(){i.showModal=!0}))},gotoCart:function(){this.$router.push("/cart")}}},o=l,u=(s("c072"),s("4ac2")),d=Object(u["a"])(o,a,e,!1,null,null,null);i["default"]=d.exports},2383:function(t,i,s){"use strict";var a=s("a1af"),e=s("108c"),n=s("796d");t.exports=function(t,i,s){var r=a(i);r in t?e.f(t,r,n(0,s)):t[r]=s}},"30b9":function(t,i,s){var a=s("7e44");t.exports=Array.isArray||function(t){return"Array"==a(t)}},"41b8":function(t,i,s){},"664d":function(t,i,s){},"714b":function(t,i,s){"use strict";var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("transition",{attrs:{name:"slide"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"modal"},[s("div",{staticClass:"mask"}),s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-header"},[s("span",[t._v(t._s(t.title))]),s("a",{staticClass:"icon-close",attrs:{href:"javascript:;"},on:{click:function(i){return t.$emit("cancel")}}})]),s("div",{staticClass:"modal-body"},[t._t("body")],2),s("div",{staticClass:"modal-footer"},[1==t.btnType?s("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:function(i){return t.$emit("submit")}}},[t._v(t._s(t.sureText))]):t._e(),2==t.btnType?s("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:function(i){return t.$emit("cancel")}}},[t._v(t._s(t.cancelText))]):t._e(),3==t.btnType?s("div",{staticClass:"btn-group"},[s("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:function(i){return t.$emit("submit")}}},[t._v(t._s(t.sureText))]),s("a",{staticClass:"btn btn-default",attrs:{href:"javascript:;"},on:{click:function(i){return t.$emit("cancel")}}},[t._v(t._s(t.cancelText))])]):t._e()])])])])},e=[],n={name:"modal",props:{modalType:{type:String,default:"form"},title:String,btnType:String,sureText:{type:String,default:"确定"},cancelText:{type:String,default:"取消"},showModal:Boolean}},r=n,c=(s("e72f"),s("4ac2")),l=Object(c["a"])(r,a,e,!1,null,null,null);i["a"]=l.exports},7182:function(t,i,s){var a=s("b0ac"),e=s("a910"),n=s("66a4"),r=e("species");t.exports=function(t){return n>=51||!a((function(){var i=[],s=i.constructor={};return s[r]=function(){return{foo:1}},1!==i[t](Boolean).foo}))}},"8d23":function(t,i,s){},"984c":function(t,i,s){"use strict";var a=function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"service"},[s("div",{staticClass:"container"},[s("ul",[s("li",[s("span",{staticClass:"icon-setting"}),t._v("预约维修服务 ")]),s("li",[s("span",{staticClass:"icon-7day"}),t._v("7天无理由退货 ")]),s("li",[s("span",{staticClass:"icon-15day"}),t._v("15天免费换货 ")]),s("li",[s("span",{staticClass:"icon-post"}),t._v("满69包邮 ")])])])])}],n={name:"service-bar"},r=n,c=(s("f8b2"),s("4ac2")),l=Object(c["a"])(r,a,e,!1,null,null,null);i["a"]=l.exports},"98d1":function(t,i,s){},c072:function(t,i,s){"use strict";s("98d1")},d8ab:function(t,i,s){"use strict";var a=s("9c0e"),e=s("db8b"),n=s("30b9"),r=s("f175"),c=s("8b61"),l=s("2f0e"),o=s("2383"),u=s("a910"),d=s("7182"),m=d("slice"),p=u("species"),v=[].slice,f=Math.max;a({target:"Array",proto:!0,forced:!m},{slice:function(t,i){var s,a,u,d=l(this),m=c(d.length),g=r(t,m),_=r(void 0===i?m:i,m);if(n(d)&&(s=d.constructor,"function"!=typeof s||s!==Array&&!n(s.prototype)?e(s)&&(s=s[p],null===s&&(s=void 0)):s=void 0,s===Array||void 0===s))return v.call(d,g,_);for(a=new(void 0===s?Array:s)(f(_-g,0)),u=0;g<_;g++,u++)g in d&&o(a,u,d[g]);return a.length=u,a}})},e72f:function(t,i,s){"use strict";s("41b8")},f8b2:function(t,i,s){"use strict";s("8d23")}}]);