(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{612:function(e,t,n){"use strict";n.r(t);n(50);var a=n(461),r=n.n(a),u={data:function(){return{value:"",loading:!1}},methods:{fetchOrgTree:function(e){return r.a.get("/api/org/view/".concat(e,"/children")).then((function(e){return e.data}))},searchOrgNode:function(e){return r.a.get("/api/org/view/query?unitName=".concat(e)).then((function(e){return e.data}))},querySearch:function(e,t){return this.searchOrgNode(e).then((function(e){return e.map((function(e){return{label:e.unitName,value:e.path}}))}))},loadNode:function(e){var t=this;return this.loading=!0,this.fetchOrgTree(e.data?e.data.unitId:0).then((function(e){return t.loading=!1,e}))}}},o=n(30),i=Object(o.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo"},[n("i-tree",{ref:"tree",attrs:{"query-search":e.querySearch,load:e.loadNode,props:{id:"unitId",label:"unitName",parentId:"parentId"},lazy:"","data-struct":"parallel","show-search":"","auto-scroll":""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)}),[],!1,null,null,null);t.default=i.exports}}]);