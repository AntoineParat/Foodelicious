(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ff2f2f2"],{"36c9":function(t,e,n){},"658e":function(t,e,n){"use strict";var a=n("36c9"),s=n.n(a);s.a},"78c1":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("p",[t._v(t._s(t.get))]),n("b-pagination",{attrs:{total:t.total,current:t.current,order:t.order,size:t.size,simple:t.isSimple,rounded:t.isRounded,"per-page":t.perPage,"aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},on:{"update:current":function(e){t.current=e}}}),t._v("\n  "+t._s(t.current)+"\n  "),n("hr"),n("button",{staticClass:"button is-info",on:{click:t.api}},[t._v("test get request")]),n("button",{staticClass:"button is-info",on:{click:t.test}},[t._v("test 2")]),n("p",[t._v(t._s(t.axios))]),n("button",{staticClass:"button",on:{click:t.test}},[t._v("infiTest")]),n("div",{staticClass:"box custom has-text-centered"},[n("p",[t._v("Photo de profil :")]),t._m(0),n("button",{staticClass:"button",on:{click:t.server}},[t._v(" axios test ")])])],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("figure",{staticClass:"image is-128x128 is-horizontal-center"},[n("img",{staticClass:"is-rounded",attrs:{src:"/api/user/avatar",title:"Mon compte"}})])}],o=n("bc3a"),i=n.n(o),r={data:function(){return{total:200,current:1,perPage:20,order:"is-centered",size:"",isSimple:!1,isRounded:!1,axios:"",get:null}},methods:{api:function(){var t=this;fetch("api/store/search/info/5d2afa05e9513f079d0deea7").then(function(t){return t.json()}).then(function(e){console.log(e),t.get=e}).catch(function(t){return console.log(t)})},test:function(){var t=this;i.a.get("api/store/search/info/5d2afa05e9513f079d0deea7").then(function(e){console.log(e.data),t.axios=e.data}).catch(function(t){return console.log(t)})},server:function(){i.a.get("/api/store/blague").then(function(t){return console.log(t.data.success)})}}},c=r,u=(n("658e"),n("2877")),l=Object(u["a"])(c,a,s,!1,null,"6aa94dbe",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-1ff2f2f2.1f4795d6.js.map