(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{599:function(o,e,r){"use strict";r.r(e);var a={data:function(){var o=this;return{formProps:{labelWidth:"auto",readonly:!1,model:{name:"吃饭睡觉敲代码",region:"shanghai",date:Date.now()},toolbar:[function(){return{text:o.formProps.readonly?"编辑":"保存",props:{type:"primary"},on:{click:function(e){o.formProps.readonly=!o.formProps.readonly}}}}]}}}},t=r(30),l=Object(t.a)(a,(function(){var o=this,e=o.$createElement,r=o._self._c||e;return r("i-form-x",o._b({},"i-form-x",o.formProps,!1),[r("i-form-item",{attrs:{label:"活动名称",prop:"name"}},[r("el-input",{model:{value:o.formProps.model.name,callback:function(e){o.$set(o.formProps.model,"name",e)},expression:"formProps.model.name"}})],1),o._v(" "),r("i-form-item",{attrs:{label:"活动区域",prop:"region"}},[r("i-selector",{attrs:{options:[{label:"上海",value:"shanghai"},{label:"北京",value:"beijing"}]},model:{value:o.formProps.model.region,callback:function(e){o.$set(o.formProps.model,"region",e)},expression:"formProps.model.region"}})],1),o._v(" "),r("i-form-item",{attrs:{label:"活动时间",prop:"date"}},[r("el-date-picker",{attrs:{type:"date"},model:{value:o.formProps.model.date,callback:function(e){o.$set(o.formProps.model,"date",e)},expression:"formProps.model.date"}})],1)],1)}),[],!1,null,null,null);e.default=l.exports}}]);