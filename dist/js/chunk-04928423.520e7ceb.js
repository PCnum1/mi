(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04928423"],{"0381":function(t,e,r){"use strict";var i=r("9bbe").forEach,a=r("bb27"),s=a("forEach");t.exports=s?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"10ee":function(t,e,r){var i=r("9c0e"),a=r("e84b"),s=r("e15d"),c=r("2f0e"),n=r("60ac"),o=r("2383");i({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,r,i=c(t),a=n.f,l=s(i),u={},d=0;while(l.length>d)r=a(i,e=l[d++]),void 0!==r&&o(u,e,r);return u}})},"1bfc":function(t,e,r){var i=r("a910");e.f=i},"1c03":function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));r("aec7"),r("bf1a"),r("a022"),r("2fc1"),r("7952"),r("10ee");var i=r("46d3");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},2383:function(t,e,r){"use strict";var i=r("a1af"),a=r("108c"),s=r("796d");t.exports=function(t,e,r){var c=i(e);c in t?a.f(t,c,s(0,r)):t[c]=r}},"2fc1":function(t,e,r){var i=r("9c0e"),a=r("b0ac"),s=r("2f0e"),c=r("60ac").f,n=r("e84b"),o=a((function(){c(1)})),l=!n||o;i({target:"Object",stat:!0,forced:l,sham:!n},{getOwnPropertyDescriptor:function(t,e){return c(s(t),e)}})},"30b9":function(t,e,r){var i=r("7e44");t.exports=Array.isArray||function(t){return"Array"==i(t)}},"39c0":function(t,e,r){var i=r("db8b"),a=r("30b9"),s=r("a910"),c=s("species");t.exports=function(t,e){var r;return a(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)?i(r)&&(r=r[c],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"41b8":function(t,e,r){},"46d3":function(t,e,r){"use strict";function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return i}))},"4a7c":function(t,e,r){"use strict";var i=r("9c0e"),a=r("9bbe").map,s=r("7182"),c=s("map");i({target:"Array",proto:!0,forced:!c},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},"6b4a":function(t,e,r){"use strict";r("8f1a")},"714b":function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"slide"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"modal"},[r("div",{staticClass:"mask"}),r("div",{staticClass:"modal-dialog"},[r("div",{staticClass:"modal-header"},[r("span",[t._v(t._s(t.title))]),r("a",{staticClass:"icon-close",attrs:{href:"javascript:;"},on:{click:function(e){return t.$emit("cancel")}}})]),r("div",{staticClass:"modal-body"},[t._t("body")],2),r("div",{staticClass:"modal-footer"},[1==t.btnType?r("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:function(e){return t.$emit("submit")}}},[t._v(t._s(t.sureText))]):t._e(),2==t.btnType?r("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(t._s(t.cancelText))]):t._e(),3==t.btnType?r("div",{staticClass:"btn-group"},[r("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:function(e){return t.$emit("submit")}}},[t._v(t._s(t.sureText))]),r("a",{staticClass:"btn btn-default",attrs:{href:"javascript:;"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(t._s(t.cancelText))])]):t._e()])])])])},a=[],s={name:"modal",props:{modalType:{type:String,default:"form"},title:String,btnType:String,sureText:{type:String,default:"确定"},cancelText:{type:String,default:"取消"},showModal:Boolean}},c=s,n=(r("e72f"),r("4ac2")),o=Object(n["a"])(c,i,a,!1,null,null,null);e["a"]=o.exports},7182:function(t,e,r){var i=r("b0ac"),a=r("a910"),s=r("66a4"),c=a("species");t.exports=function(t){return s>=51||!i((function(){var e=[],r=e.constructor={};return r[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},7952:function(t,e,r){var i=r("06ab"),a=r("88fc"),s=r("0381"),c=r("d666");for(var n in a){var o=i[n],l=o&&o.prototype;if(l&&l.forEach!==s)try{c(l,"forEach",s)}catch(u){l.forEach=s}}},"8f1a":function(t,e,r){},"9bbe":function(t,e,r){var i=r("4477"),a=r("de24"),s=r("e4a3"),c=r("8b61"),n=r("39c0"),o=[].push,l=function(t){var e=1==t,r=2==t,l=3==t,u=4==t,d=6==t,v=7==t,f=5==t||d;return function(p,h,m,b){for(var g,y,_=s(p),C=a(_),w=i(h,m,3),k=c(C.length),x=0,O=b||n,M=e?O(p,k):r||v?O(p,0):void 0;k>x;x++)if((f||x in C)&&(g=C[x],y=w(g,x,_),t))if(e)M[x]=y;else if(y)switch(t){case 3:return!0;case 5:return g;case 6:return x;case 2:o.call(M,g)}else switch(t){case 4:return!1;case 7:o.call(M,g)}return d?-1:l||u?u:M}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},a022:function(t,e,r){"use strict";var i=r("9c0e"),a=r("9bbe").filter,s=r("7182"),c=s("filter");i({target:"Array",proto:!0,forced:!c},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},a56f:function(t,e,r){var i=r("2f0e"),a=r("8c2d").f,s={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],n=function(t){try{return a(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==s.call(t)?n(t):a(i(t))}},aec7:function(t,e,r){var i=r("9c0e"),a=r("e4a3"),s=r("63af"),c=r("b0ac"),n=c((function(){s(1)}));i({target:"Object",stat:!0,forced:n},{keys:function(t){return s(a(t))}})},b59c:function(t,e,r){"use strict";r("fdbb")},bb27:function(t,e,r){"use strict";var i=r("b0ac");t.exports=function(t,e){var r=[][t];return!!r&&i((function(){r.call(null,e||function(){throw 1},1)}))}},bf1a:function(t,e,r){"use strict";var i=r("9c0e"),a=r("06ab"),s=r("6f6c"),c=r("a82c"),n=r("e84b"),o=r("f792"),l=r("678d"),u=r("b0ac"),d=r("5f08"),v=r("30b9"),f=r("db8b"),p=r("797e"),h=r("e4a3"),m=r("2f0e"),b=r("a1af"),g=r("796d"),y=r("ca83"),_=r("63af"),C=r("8c2d"),w=r("a56f"),k=r("1ee8"),x=r("60ac"),O=r("108c"),M=r("04f8"),j=r("d666"),I=r("678a"),P=r("637f"),A=r("7f14"),S=r("7860"),E=r("725d"),N=r("a910"),$=r("1bfc"),T=r("f18b"),D=r("9b64"),z=r("9a4e"),L=r("9bbe").forEach,Z=A("hidden"),B="Symbol",J="prototype",q=N("toPrimitive"),F=z.set,H=z.getterFor(B),Q=Object[J],V=a.Symbol,W=s("JSON","stringify"),G=x.f,K=O.f,R=w.f,U=M.f,X=P("symbols"),Y=P("op-symbols"),tt=P("string-to-symbol-registry"),et=P("symbol-to-string-registry"),rt=P("wks"),it=a.QObject,at=!it||!it[J]||!it[J].findChild,st=n&&u((function(){return 7!=y(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,r){var i=G(Q,e);i&&delete Q[e],K(t,e,r),i&&t!==Q&&K(Q,e,i)}:K,ct=function(t,e){var r=X[t]=y(V[J]);return F(r,{type:B,tag:t,description:e}),n||(r.description=e),r},nt=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof V},ot=function(t,e,r){t===Q&&ot(Y,e,r),p(t);var i=b(e,!0);return p(r),d(X,i)?(r.enumerable?(d(t,Z)&&t[Z][i]&&(t[Z][i]=!1),r=y(r,{enumerable:g(0,!1)})):(d(t,Z)||K(t,Z,g(1,{})),t[Z][i]=!0),st(t,i,r)):K(t,i,r)},lt=function(t,e){p(t);var r=m(e),i=_(r).concat(pt(r));return L(i,(function(e){n&&!dt.call(r,e)||ot(t,e,r[e])})),t},ut=function(t,e){return void 0===e?y(t):lt(y(t),e)},dt=function(t){var e=b(t,!0),r=U.call(this,e);return!(this===Q&&d(X,e)&&!d(Y,e))&&(!(r||!d(this,e)||!d(X,e)||d(this,Z)&&this[Z][e])||r)},vt=function(t,e){var r=m(t),i=b(e,!0);if(r!==Q||!d(X,i)||d(Y,i)){var a=G(r,i);return!a||!d(X,i)||d(r,Z)&&r[Z][i]||(a.enumerable=!0),a}},ft=function(t){var e=R(m(t)),r=[];return L(e,(function(t){d(X,t)||d(S,t)||r.push(t)})),r},pt=function(t){var e=t===Q,r=R(e?Y:m(t)),i=[];return L(r,(function(t){!d(X,t)||e&&!d(Q,t)||i.push(X[t])})),i};if(o||(V=function(){if(this instanceof V)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=E(t),r=function(t){this===Q&&r.call(Y,t),d(this,Z)&&d(this[Z],e)&&(this[Z][e]=!1),st(this,e,g(1,t))};return n&&at&&st(Q,e,{configurable:!0,set:r}),ct(e,t)},I(V[J],"toString",(function(){return H(this).tag})),I(V,"withoutSetter",(function(t){return ct(E(t),t)})),M.f=dt,O.f=ot,x.f=vt,C.f=w.f=ft,k.f=pt,$.f=function(t){return ct(N(t),t)},n&&(K(V[J],"description",{configurable:!0,get:function(){return H(this).description}}),c||I(Q,"propertyIsEnumerable",dt,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!o,sham:!o},{Symbol:V}),L(_(rt),(function(t){T(t)})),i({target:B,stat:!0,forced:!o},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var r=V(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!nt(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){at=!0},useSimple:function(){at=!1}}),i({target:"Object",stat:!0,forced:!o,sham:!n},{create:ut,defineProperty:ot,defineProperties:lt,getOwnPropertyDescriptor:vt}),i({target:"Object",stat:!0,forced:!o},{getOwnPropertyNames:ft,getOwnPropertySymbols:pt}),i({target:"Object",stat:!0,forced:u((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(h(t))}}),W){var ht=!o||u((function(){var t=V();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}));i({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,r){var i,a=[t],s=1;while(arguments.length>s)a.push(arguments[s++]);if(i=e,(f(e)||void 0!==t)&&!nt(t))return v(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!nt(e))return e}),a[1]=e,W.apply(null,a)}})}V[J][q]||j(V[J],q,V[J].valueOf),D(V,B),S[Z]=!0},c3d4:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"order-header"},[r("div",{staticClass:"container clearfix"},[t._m(0),r("div",{staticClass:"title"},[r("h2",[t._v(t._s(t.title)),t._t("tip")],2)]),r("div",{staticClass:"username"},[r("a",{attrs:{href:"javascript:;"}},[t._v(t._s(t.username))])])])])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header-logo"},[r("a",{attrs:{href:"/#/index"}})])}],s=r("1c03"),c=r("7736"),n={name:"order-header",props:{title:String},computed:Object(s["a"])({},Object(c["c"])(["username"]))},o=n,l=(r("6b4a"),r("4ac2")),u=Object(l["a"])(o,i,a,!1,null,null,null);e["a"]=u.exports},d82c:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"order-confirm"},[r("order-header",{attrs:{title:"订单确认"},scopedSlots:t._u([{key:"tip",fn:function(){return[r("span",[t._v("请认真填写收货地址")])]},proxy:!0}])}),r("svg",{staticStyle:{position:"absolute",width:"0px",height:"0px",overflow:"hidden"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[r("defs",[r("symbol",{attrs:{id:"icon-add",viewBox:"0 0 31 32"}},[r("title",[t._v("add")]),r("path",{staticClass:"path1",attrs:{d:"M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z"}})]),r("symbol",{attrs:{id:"icon-edit",viewBox:"0 0 32 32"}},[r("title",[t._v("edit")]),r("path",{staticClass:"path1",attrs:{d:"M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z"}})]),r("symbol",{attrs:{id:"icon-del",viewBox:"0 0 32 32"}},[r("title",[t._v("delete")]),r("path",{staticClass:"path1",attrs:{d:"M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z"}}),r("path",{staticClass:"path2",attrs:{d:"M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"}}),r("path",{staticClass:"path3",attrs:{d:"M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"}}),r("path",{staticClass:"path4",attrs:{d:"M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"}})])])]),r("div",{staticClass:"wrapper"},[r("div",{staticClass:"container"},[r("div",{staticClass:"order-box"},[r("div",{staticClass:"item-address"},[r("h2",{staticClass:"addr-title"},[t._v("收货地址")]),r("div",{staticClass:"addr-list clearfix"},[t._l(t.list,(function(e,i){return r("div",{key:i,staticClass:"addr-info",class:{checked:i===t.checkIndex},on:{click:function(e){t.checkIndex=i}}},[r("h2",[t._v(t._s(e.receiverName))]),r("div",{staticClass:"phone"},[t._v(t._s(e.receiverMobile))]),r("div",{staticClass:"street"},[t._v(t._s(e.receiverProvince+" "+e.receiverCity+" "+e.receiverDistrict+" "+e.receiverAddress))]),r("div",{staticClass:"action"},[r("a",{staticClass:"fl",attrs:{href:"javascript:;"}},[r("svg",{staticClass:"icon icon-del"},[r("use",{attrs:{"xlink:href":"#icon-del"},on:{click:function(r){return t.delAddress(e)}}})])]),r("a",{staticClass:"fr",attrs:{href:"javascript:;"}},[r("svg",{staticClass:"icon icon-edit"},[r("use",{attrs:{"xlink:href":"#icon-edit"},on:{click:function(r){return t.editAddressModal(e)}}})])])])])})),r("div",{staticClass:"addr-add",on:{click:t.openAddressModal}},[r("div",{staticClass:"icon-add"}),r("div",[t._v("添加新地址")])])],2)]),r("div",{staticClass:"item-good"},[r("h2",[t._v("商品")]),r("ul",t._l(t.cartList,(function(e,i){return r("li",{key:i},[r("div",{staticClass:"good-name"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.productMainImage,expression:"item.productMainImage"}]}),r("span",[t._v(t._s(e.productName+" "+e.productSubtitle))])]),r("div",{staticClass:"good-price"},[t._v(t._s(e.productPrice)+"元x"+t._s(e.quantity))]),r("div",{staticClass:"good-total"},[t._v(t._s(e.productTotalPrice)+"元")])])})),0)]),t._m(0),t._m(1),r("div",{staticClass:"detail"},[r("div",{staticClass:"item"},[r("span",{staticClass:"item-name"},[t._v("商品件数：")]),r("span",{staticClass:"item-val"},[t._v(t._s(t.count)+"件")])]),r("div",{staticClass:"item"},[r("span",{staticClass:"item-name"},[t._v("商品总价：")]),r("span",{staticClass:"item-val"},[t._v(t._s(t.cartTotalPrice)+"元")])]),t._m(2),t._m(3),r("div",{staticClass:"item-total"},[r("span",{staticClass:"item-name"},[t._v("应付总额：")]),r("span",{staticClass:"item-val"},[t._v(t._s(t.cartTotalPrice)+"元")])])]),r("div",{staticClass:"btn-group"},[r("a",{staticClass:"btn btn-default btn-large",attrs:{href:"/#/cart"}},[t._v("返回购物车")]),r("a",{staticClass:"btn btn-large",attrs:{href:"javascript:;"},on:{click:t.orderSubmit}},[t._v("去结算")])])])])]),r("modal",{attrs:{title:"新增确认",btnType:"1",showModal:t.showEditModal},on:{cancel:function(e){t.showEditModal=!1},submit:t.submitAddress},scopedSlots:t._u([{key:"body",fn:function(){return[r("div",{staticClass:"edit-wrap"},[r("div",{staticClass:"item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.checkedItem.receiverName,expression:"checkedItem.receiverName"}],staticClass:"input",attrs:{type:"text",placeholder:"姓名"},domProps:{value:t.checkedItem.receiverName},on:{input:function(e){e.target.composing||t.$set(t.checkedItem,"receiverName",e.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.checkedItem.receiverMobile,expression:"checkedItem.receiverMobile"}],staticClass:"input",attrs:{type:"text",placeholder:"手机号"},domProps:{value:t.checkedItem.receiverMobile},on:{input:function(e){e.target.composing||t.$set(t.checkedItem,"receiverMobile",e.target.value)}}})]),r("div",{staticClass:"item"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.checkedItem.receiverProvince,expression:"checkedItem.receiverProvince"}],attrs:{name:"province"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.checkedItem,"receiverProvince",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"北京"}},[t._v("北京")]),r("option",{attrs:{value:"天津"}},[t._v("天津")]),r("option",{attrs:{value:"河北"}},[t._v("河北")])]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.checkedItem.receiverCity,expression:"checkedItem.receiverCity"}],attrs:{name:"city"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.checkedItem,"receiverCity",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"北京"}},[t._v("北京")]),r("option",{attrs:{value:"天津"}},[t._v("天津")]),r("option",{attrs:{value:"河北"}},[t._v("石家庄")])]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.checkedItem.receiverDistrict,expression:"checkedItem.receiverDistrict"}],attrs:{name:"district"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.checkedItem,"receiverDistrict",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"北京"}},[t._v("昌平区")]),r("option",{attrs:{value:"天津"}},[t._v("海淀区")]),r("option",{attrs:{value:"河北"}},[t._v("东城区")]),r("option",{attrs:{value:"天津"}},[t._v("西城区")]),r("option",{attrs:{value:"河北"}},[t._v("顺义区")]),r("option",{attrs:{value:"天津"}},[t._v("房山区")])])]),r("div",{staticClass:"item"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.checkedItem.receiverAddress,expression:"checkedItem.receiverAddress"}],attrs:{name:"street"},domProps:{value:t.checkedItem.receiverAddress},on:{input:function(e){e.target.composing||t.$set(t.checkedItem,"receiverAddress",e.target.value)}}})]),r("div",{staticClass:"item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.checkedItem.receiverZip,expression:"checkedItem.receiverZip"}],staticClass:"input",attrs:{type:"text",placeholder:"邮编"},domProps:{value:t.checkedItem.receiverZip},on:{input:function(e){e.target.composing||t.$set(t.checkedItem,"receiverZip",e.target.value)}}})])])]},proxy:!0}])}),r("modal",{attrs:{title:"删除确认",btnType:"1",showModal:t.showDelModal},on:{cancel:function(e){t.showDelModal=!1},submit:t.submitAddress},scopedSlots:t._u([{key:"body",fn:function(){return[r("p",[t._v("您确认要删除此地址么?")])]},proxy:!0}])})],1)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"item-shipping"},[r("h2",[t._v("配送方式")]),r("span",[t._v("包邮")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"item-invoice"},[r("h2",[t._v("发票")]),r("a",{attrs:{href:"javascript:;"}},[t._v("电子发票")]),r("a",{attrs:{href:"javascript:;"}},[t._v("个人")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"item"},[r("span",{staticClass:"item-name"},[t._v("优惠活动：")]),r("span",{staticClass:"item-val"},[t._v("0元")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"item"},[r("span",{staticClass:"item-name"},[t._v("运费：")]),r("span",{staticClass:"item-val"},[t._v("0元")])])}],s=(r("a022"),r("4a7c"),r("714b")),c=r("c3d4"),n={name:"order-confirm",data:function(){return{list:[],cartList:[],showEditModal:!1,cartTotalPrice:0,count:0,checkedItem:{},userAction:"",showDelModal:!1,checkIndex:0}},components:{Modal:s["a"],OrderHeader:c["a"]},mounted:function(){this.getAddressList(),this.getCartList()},methods:{openAddressModal:function(){this.userAction=0,this.checkedItem={},this.showEditModal=!0},editAddressModal:function(t){this.userAction=1,this.checkedItem=t,this.showEditModal=!0},getAddressList:function(){var t=this;this.axios.get("/shippings").then((function(e){t.list=e.list}))},getCartList:function(){var t=this;this.axios.get("/carts").then((function(e){var r=e.cartProductVoList;t.cartTotalPrice=e.cartTotalPrice,t.cartList=r.filter((function(t){return t.productSelected})),t.cartList.map((function(e){t.count+=e.quantity}))}))},closeModal:function(){this.checkedItem={},this.userAction="",this.showEditModal=!1,this.showDelModal=!1},delAddress:function(t){this.checkedItem=t,this.userAction=2,this.showDelModal=!0},submitAddress:function(){var t,e,r=this,i=this.checkedItem,a=this.userAction,s={};if(0===a?(t="post",e="/shippings"):1===a?(t="put",e="shippings/".concat(i.id)):(t="delete",e="shippings/".concat(i.id)),0===a||1===a){var c,n=i.receiverName,o=i.receiverMobile,l=i.receiverProvince,u=i.receiverCity,d=i.receiverDistrict,v=i.receiverAddress,f=i.receiverZip;if(n?o&&/\d{11}/.test(o)?l?u?v&&d?f||(c="请输入六位邮编"):c="请输入收获地址":c="请选择对应的城市":c="请选择省份":c="请输入正确格式的手机号":c="请输入收货人名称",c)return this.$message.error(c);s={receiverName:n,receiverMobile:o,receiverProvince:l,receiverCity:u,receiverDistrict:d,receiverAddress:v,receiverZip:f}}this.axios[t](e,s).then((function(){r.closeModal(),r.getAddressList(),r.$message.success("操作成功")}))},orderSubmit:function(){var t=this,e=this.list[this.checkIndex];if(!e)return this.$message.error("请选择一个收货地址");this.axios.post("/orders",{shippingId:e.id}).then((function(e){t.$router.push({path:"/order/pay",query:{orderNo:e.orderNo}})}))}}},o=n,l=(r("b59c"),r("4ac2")),u=Object(l["a"])(o,i,a,!1,null,null,null);e["default"]=u.exports},e72f:function(t,e,r){"use strict";r("41b8")},f18b:function(t,e,r){var i=r("4651"),a=r("5f08"),s=r("1bfc"),c=r("108c").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});a(e,t)||c(e,t,{value:s.f(t)})}},fdbb:function(t,e,r){}}]);