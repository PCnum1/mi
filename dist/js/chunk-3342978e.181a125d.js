(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3342978e"],{1e3:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"detail"},[i("product-param",{attrs:{title:t.product.name}}),i("div",{staticClass:"wrapper"},[i("div",{staticClass:"container clearfix"},[i("div",{staticClass:"swiper"},[i("swiper",{attrs:{options:t.swiperOption}},[i("swiper-slide",[i("img",{attrs:{src:"/imgs/detail/phone-1.jpg",alt:""}})]),i("swiper-slide",[i("img",{attrs:{src:"/imgs/detail/phone-2.jpg",alt:""}})]),i("swiper-slide",[i("img",{attrs:{src:"/imgs/detail/phone-3.jpg",alt:""}})]),i("swiper-slide",[i("img",{attrs:{src:"/imgs/detail/phone-4.jpg",alt:""}})]),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1),i("div",{staticClass:"content"},[i("h2",{staticClass:"item-title"},[t._v(t._s(t.product.name))]),t._m(0),i("div",{staticClass:"delivery"},[t._v("小米自营")]),i("div",{staticClass:"item-price"},[t._v(t._s(t.product.price)+"元"),i("span",{staticClass:"del"},[t._v(t._s(t.product.price)+"元")])]),i("div",{staticClass:"line"}),t._m(1),i("div",{staticClass:"item-version clearfix"},[i("h2",[t._v("选择版本")]),i("div",{staticClass:"phone fl",class:{checked:1==t.version},on:{click:function(s){t.version=1}}},[t._v("6GB+64GB 全网通")]),i("div",{staticClass:"phone fr",class:{checked:2==t.version},on:{click:function(s){t.version=2}}},[t._v("4GB+64GB 移动4G")])]),t._m(2),i("div",{staticClass:"item-total"},[i("div",{staticClass:"phone-info clearfix"},[i("div",{staticClass:"fl"},[t._v(t._s(t.product.name)+" "+t._s(1==t.version?"6GB+64GB 全网通":"4GB+64GB 移动4G")+" 深灰色")]),i("div",{staticClass:"fr"},[t._v(t._s(t.product.price)+"元")])]),i("div",{staticClass:"phone-total"},[t._v("总计："+t._s(t.product.price)+"元")])]),i("div",{staticClass:"btn-group"},[i("a",{staticClass:"btn btn-huge fl",attrs:{href:"javascript:;"},on:{click:t.addCart}},[t._v("加入购物车")])])])])]),t._m(3),i("service-bar")],1)},e=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("p",{staticClass:"item-info"},[t._v("相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红"),i("br"),t._v("外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏")])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"item-addr"},[i("i",{staticClass:"icon-loc"}),i("div",{staticClass:"addr"},[t._v("北京 北京市 朝阳区 安定门街道")]),i("div",{staticClass:"stock"},[t._v("有现货")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"item-color"},[i("h2",[t._v("选择颜色")]),i("div",{staticClass:"phone checked"},[i("span",{staticClass:"color"}),t._v(" 深空灰 ")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"price-info"},[i("div",{staticClass:"container"},[i("h2",[t._v("价格说明")]),i("div",{staticClass:"desc"},[i("img",{attrs:{src:"/imgs/detail/item-price.jpeg",alt:""}})])])])}],c=i("6fe8"),n=i("9f26"),r=i("984c"),l={name:"detail",data:function(){return{id:this.$route.params.id,version:1,swiperOption:{autoplay:!0,pagination:{el:".swiper-pagination",clickable:!0}},product:{}}},components:{swiper:c["swiper"],swiperSlide:c["swiperSlide"],ProductParam:n["a"],ServiceBar:r["a"]},mounted:function(){this.getProductInfo()},methods:{getProductInfo:function(){var t=this;this.axios.get("/products/".concat(this.id)).then((function(s){t.product=s}))},addCart:function(){var t=this;this.axios.post("/carts",{productId:this.id,selected:!0}).then((function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartProductVoList:0};t.$store.dispatch("saveCartCount",s.cartTotalQuantity),t.$router.push("/cart")}))}}},o=l,d=(i("f14b"),i("4ac2")),v=Object(d["a"])(o,a,e,!1,null,null,null);s["default"]=v.exports},"2f66":function(t,s,i){},"4b8e":function(t,s,i){"use strict";i("2f66")},"8d23":function(t,s,i){},"984c":function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"service"},[i("div",{staticClass:"container"},[i("ul",[i("li",[i("span",{staticClass:"icon-setting"}),t._v("预约维修服务 ")]),i("li",[i("span",{staticClass:"icon-7day"}),t._v("7天无理由退货 ")]),i("li",[i("span",{staticClass:"icon-15day"}),t._v("15天免费换货 ")]),i("li",[i("span",{staticClass:"icon-post"}),t._v("满69包邮 ")])])])])}],c={name:"service-bar"},n=c,r=(i("f8b2"),i("4ac2")),l=Object(r["a"])(n,a,e,!1,null,null,null);s["a"]=l.exports},"9f26":function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"nav-bar",class:{isfiexd:t.isFixed}},[i("div",{staticClass:"container"},[i("div",{staticClass:"pro-title"},[t._v(" "+t._s(t.title)+" ")]),i("div",{staticClass:"pro-param"},[i("a",{attrs:{href:"javascript:;"}},[t._v("概述")]),i("span",[t._v("|")]),i("a",{attrs:{href:"javascript:;"}},[t._v("参数")]),i("span",[t._v("|")]),i("a",{attrs:{href:"javascript:;"}},[t._v("用户评价")]),t._t("buy")],2)])])},e=[],c={name:"nav-bar",props:{title:String},data:function(){return{isFixed:!1}},mounted:function(){window.addEventListener("scroll",this.initHeight)},methods:{initHeight:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.isFixed=t>152}},destroyed:function(){window.removeEventListener("scroll",this.initHeight,!1)}},n=c,r=(i("4b8e"),i("4ac2")),l=Object(r["a"])(n,a,e,!1,null,null,null);s["a"]=l.exports},a8c2:function(t,s,i){},f14b:function(t,s,i){"use strict";i("a8c2")},f8b2:function(t,s,i){"use strict";i("8d23")}}]);