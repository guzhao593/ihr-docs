(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{580:function(e,t,a){"use strict";a.r(t);a(54);var r={data:function(){return{tableProps:{editing:!0,editor:{name:{type:"input",props:{clearable:!0,placeholder:"需要填写姓名才能编辑生日"},rules:[{required:!0,trigger:"blur"}]},birthday:function(e){return{type:"datePicker",props:{disabled:!Boolean(e.cell.row.name)}}}},columns:[{prop:"name",label:"姓名"},{prop:"birthday",label:"生日"}],data:[{name:"Rick",birthday:Date.now()},{name:"",birthday:Date.now()}]}}}},l=a(30),n=Object(l.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"table-demo"},[t("i-table",this._b({},"i-table",this.tableProps,!1))],1)}),[],!1,null,null,null);t.default=n.exports}}]);