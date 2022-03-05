(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{665:function(s,a,n){"use strict";n.r(a);var e=n(30),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"新增页面"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#新增页面"}},[s._v("#")]),s._v(" 新增页面")]),s._v(" "),n("p",[s._v("如果熟悉 vue-router 的配置就很简单了")]),s._v(" "),n("p",[s._v("首先如果你的项目结构比较简单, 如下:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("├── build                      # 构建相关\n├── mock                       # 项目mock 模拟数据\n├── public                     # 静态资源\n│   │── favicon.ico            # favicon图标\n│   └── index.html             # html模板\n├── src                        # 源代码\n│   ├── api                    # 所有请求\n│   ├── assets                 # 主题 字体等静态资源\n│   ├── components             # 全局公用组件\n│   ├── directive              # 全局指令\n│   ├── filters                # 全局 filter\n│   ├── icons                  # 项目所有 svg icons\n│   ├── lang                   # 国际化 language\n│   ├── layout                 # 全局 layout\n│   ├── router                 # 路由\n│   ├── store                  # 全局 store管理\n│   ├── styles                 # 全局样式\n│   ├── utils                  # 全局公用方法\n│   ├── vendor                 # 公用vendor\n│   ├── views                  # views 所有页面\n│   ├── App.vue                # 入口页面\n│   ├── main.js                # 入口文件 加载组件 初始化等\n│   └── permission.js          # 权限管理\n├── tests                      # 测试\n├── .env.xxx                   # 环境变量配置\n├── .eslintrc.js               # eslint 配置项\n├── .babelrc                   # babel-loader 配置\n├── .travis.yml                # 自动化CI配置\n├── vue.config.js              # vue-cli 配置\n├── postcss.config.js          # postcss 配置\n└── package.json               # package.json\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br")])]),n("p",[s._v("那么在 "),n("code",[s._v("@/router/index.js")]),s._v(" 中添加你需要的路由")]),s._v(" "),n("p",[s._v("如：新增一个列表查询页")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("{\n  path: '/xxList',\n  component: XxList,\n  name: 'XxList',\n  meta: {\n    title: 'xx列表页',\n    icon: 'icon-search'\n  }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("如果项目比较复杂，可以进行模块划分，"),n("code",[s._v("src")]),s._v("下面可以分为几个模块后再进行细分")]),s._v(" "),n("p",[s._v("如：每个模块下应该有自己的"),n("code",[s._v("api")]),s._v("，"),n("code",[s._v("components")]),s._v("，"),n("code",[s._v("router")]),s._v("，"),n("code",[s._v("store")]),s._v("，"),n("code",[s._v("views")]),s._v("，最终在将这些文件合并入统一的文件")]),s._v(" "),n("h2",{attrs:{id:"新增view"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#新增view"}},[s._v("#")]),s._v(" 新增view")]),s._v(" "),n("p",[s._v("新增完路由之后不要忘记在 "),n("code",[s._v("@/views")]),s._v(" 文件下 创建对应的文件夹，一般性一个路由对应一个文件")]),s._v(" "),n("p",[s._v("该模块下的功能组件或者方法就建议在本文件夹下创建一个"),n("code",[s._v("utils")]),s._v("或"),n("code",[s._v("components")]),s._v("文件夹，各个功能模块维护自己的"),n("code",[s._v("utils")]),s._v("或"),n("code",[s._v("components")]),s._v("组件。")]),s._v(" "),n("h2",{attrs:{id:"新增api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#新增api"}},[s._v("#")]),s._v(" 新增api")]),s._v(" "),n("p",[s._v("在页面要调用到的 api 需要在 "),n("code",[s._v("@/api")]),s._v(" 文件夹下创建本模块相应的 api 服务，具体与后台的一些 api 交互规范请参考 "),n("a",{attrs:{href:"/docs/server"}},[s._v("和服务端进行交互")])]),s._v(" "),n("h2",{attrs:{id:"新增组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#新增组件"}},[s._v("#")]),s._v(" 新增组件")]),s._v(" "),n("h3",{attrs:{id:"通用组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通用组件"}},[s._v("#")]),s._v(" 通用组件")]),s._v(" "),n("p",[s._v("一些全局都要使用的通用组件，一般放在 "),n("code",[s._v("@/components")]),s._v(" 文件夹下")]),s._v(" "),n("h3",{attrs:{id:"各模块业务组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#各模块业务组件"}},[s._v("#")]),s._v(" 各模块业务组件")]),s._v(" "),n("p",[s._v("写在当前 "),n("code",[s._v("views")]),s._v(" 下面。如："),n("code",[s._v("@/views/expese/components/xxx.vue")]),s._v("。这样拆分大大减轻了维护成本。")]),s._v(" "),n("h2",{attrs:{id:"新增样式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#新增样式"}},[s._v("#")]),s._v(" 新增样式")]),s._v(" "),n("p",[s._v("页面的样式和组件是一个道理，全局的 "),n("code",[s._v("@/style")]),s._v(" 放置一下全局公用的样式，每一个页面的样式就写在当前 "),n("code",[s._v("views")]),s._v(" 下面的 .vue 文件里，请记住加上 "),n("code",[s._v("scoped")]),s._v(" 或者命名空间，避免造成全局的样式污染。")])])}),[],!1,null,null,null);a.default=t.exports}}]);