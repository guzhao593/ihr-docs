(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{454:function(t,e,i){},561:function(t,e,i){"use strict";var l=i(454);i.n(l).a},571:function(t,e,i){"use strict";i.r(e);var l={data:function(){var t=this;return{visible:!1,tableProps:{columns:[{prop:"a",label:"A"},{prop:"b",label:"B"}],data:[{a:"😇",b:"😆"},{a:"😎",b:"😌"}]},exportExcelAttrs:{config:{fileName:"FILE"},reqConfig:{url:"/abc/123",method:"post"},table:function(){return t.$refs.iTable}}}},methods:{handleClickWithForm:function(){this.$refs.exportExcelForm.submit()},handleClickWithoutAnything:function(){this.$refs.exportExcelNothing.submit()}}},o=(i(561),i(30)),r=Object(o.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"table-demo"},[i("i-table",t._b({ref:"iTable"},"i-table",t.tableProps,!1)),t._v(" "),i("i-table-export-excel",t._b({attrs:{dialog:""},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},"i-table-export-excel",t.exportExcelAttrs,!1)),t._v(" "),i("i-table-export-excel",t._b({ref:"exportExcelForm"},"i-table-export-excel",t.exportExcelAttrs,!1)),t._v(" "),i("i-table-export-excel",t._b({ref:"exportExcelNothing",attrs:{hidden:""}},"i-table-export-excel",t.exportExcelAttrs,!1)),t._v(" "),i("i-toolbar",[i("i-toolbar-item",{attrs:{type:"primary",text:"对话框"},on:{click:function(e){t.visible=!0}}}),t._v(" "),i("i-toolbar-item",{attrs:{type:"success",text:"表单"},on:{click:t.handleClickWithForm}}),t._v(" "),i("i-toolbar-item",{attrs:{type:"warning",text:"隐藏"},on:{click:t.handleClickWithoutAnything}})],1)],1)}),[],!1,null,"38fa646e",null);e.default=r.exports}}]);