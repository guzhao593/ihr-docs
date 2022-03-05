(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{679:function(t,s,a){"use strict";a.r(s);var e=a(30),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"跨域问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨域问题"}},[t._v("#")]),t._v(" 跨域问题")]),t._v(" "),a("p",[t._v("跨域其实不是一个很难解决的问题，为了解决跨域，以下有几种解决方案")]),t._v(" "),a("h2",{attrs:{id:"cors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[t._v("#")]),t._v(" CORS")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS",target:"_blank",rel:"noopener noreferrer"}},[t._v("CORS"),a("OutboundLink")],1),t._v(": (Cross Origin Resource Sharing: 跨域资源共享)")]),t._v(" "),a("p",[t._v("我工作中就有这种跨域的解决方案，这种方案对前端来说没有什么工作量，和正常发请求的写法上没有任何区别，工作量都在后端，每一次请求，浏览器必须先发个 "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/OPTIONS",target:"_blank",rel:"noopener noreferrer"}},[t._v("OPTION"),a("OutboundLink")],1),t._v(" 预请求，以预请求来获得服务端对跨域请求支持的 "),a("code",[t._v("HTTP")]),t._v(" 方法，在确认服务器允许该跨源请求的情况下，再以实际的 "),a("code",[t._v("HTTP")]),t._v(" 请求方法发送那个真正的请求")]),t._v(" "),a("p",[t._v("推荐此种跨域解决方法，原因是：只要第一次配好了，之后不管有多少接口和项目复用就可以了，一劳永逸，而且不管是开发环境还是正式环境都能方便的使用")]),t._v(" "),a("h2",{attrs:{id:"proxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proxy"}},[t._v("#")]),t._v(" Proxy")]),t._v(" "),a("p",[t._v("在 dev 开发模式下可以下使用 "),a("strong",[t._v("webpack")]),t._v(" 的 "),a("code",[t._v("proxy")]),t._v(" 使用也是很方便，参照 文档 就会使用了，楼主一些个人项目使用的该方法。但这种方法在生产环境是不能使用的。在生产环境中需要使用 "),a("code",[t._v("nginx")]),t._v(" 进行反向代理。不管是 "),a("code",[t._v("proxy")]),t._v(" 和 "),a("code",[t._v("nginx")]),t._v(" 的原理都是一样的，通过搭建一个中转服务器来转发请求规避跨域的问题。")]),t._v(" "),a("p",[t._v("如果你本机在 "),a("code",[t._v("localhost:3000")]),t._v(" 上启动有后端服务的话，你可以这样启用代理：")]),t._v(" "),a("p",[t._v("当然，如果要"),a("strong",[t._v("连接后台的电脑")]),t._v(" 或者 "),a("strong",[t._v("连接测试服务器")]),t._v("就写对应的 "),a("code",[t._v("IP")]),t._v(" 及 "),a("code",[t._v("端口")]),t._v(" 就行")]),t._v(" "),a("p",[a("code",[t._v("webpack.config.js")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n  devServer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    proxy"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:3000'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 电脑上启动的对应的后台应用在 3000 端口")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// '/api': 'http://xx.xx.xx.xxx:xxxxx'  // 修改为对应后台服务地址")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("具体功能可参考 "),a("code",[t._v("webpack")]),t._v(" 官网 "),a("a",{attrs:{href:"https://webpack.docschina.org/configuration/dev-server/#devserver-proxy",target:"_blank",rel:"noopener noreferrer"}},[t._v("proxy"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);