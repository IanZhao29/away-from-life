(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{605:function(s,t,a){"use strict";a.r(t);var e=a(12),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"详解-css-flex-布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#详解-css-flex-布局"}},[s._v("#")]),s._v(" 详解 CSS-Flex 布局")]),s._v(" "),a("p",[s._v("网页布局（layout）是 CSS 的一个重点应用。")]),s._v(" "),a("p",[s._v("布局的传统解决方案，基于盒状模型，依赖 display 属性 + position属性 + float属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。")]),s._v(" "),a("p",[s._v("Flex 布局目前主要应用在移动端布局")]),s._v(" "),a("p",[s._v("最后我会给出应用代码。")]),s._v(" "),a("h2",{attrs:{id:"如何开启-flex-布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何开启-flex-布局"}},[s._v("#")]),s._v(" 如何开启 flex 布局")]),s._v(" "),a("p",[s._v("在父元素的 display 属性上开启 flex 属性， 可以使父元素成为一个弹性盒子，其子元素均为 flex 元素。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".container")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("还有行内元素开启 flex")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".inline-container")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" inline-flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("Webkit 内核的浏览器，必须加上-webkit前缀。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".container")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -webkit-flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Safari */")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("注意，设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。")]),s._v(" "),a("h2",{attrs:{id:"基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[s._v("#")]),s._v(" 基本概念")]),s._v(" "),a("p",[s._v("注意，设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。")]),s._v(" "),a("img",{attrs:{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png"}}),s._v(" "),a("p",[s._v("容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。")]),s._v(" "),a("p",[s._v("项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。")]),s._v(" "),a("h2",{attrs:{id:"容器属性介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器属性介绍"}},[s._v("#")]),s._v(" 容器属性介绍")]),s._v(" "),a("p",[s._v("以下6个属性设置在父元素上。")]),s._v(" "),a("blockquote",[a("ul",[a("li",[s._v("flex-direction")]),s._v(" "),a("li",[s._v("flex-wrap")]),s._v(" "),a("li",[s._v("flex-flow")]),s._v(" "),a("li",[s._v("justify-content")]),s._v(" "),a("li",[s._v("align-items")]),s._v(" "),a("li",[s._v("align-content")])])]),s._v(" "),a("h3",{attrs:{id:"flex-direction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex-direction"}},[s._v("#")]),s._v(" flex-direction")]),s._v(" "),a("p",[s._v("Flex-direction 属性决定了主轴的方向（项目排列方向）")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".container")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-direction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" row | row-reverse | column | column-reverse\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("img",{attrs:{src:"https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071005.png"}})])}),[],!1,null,null,null);t.default=n.exports}}]);