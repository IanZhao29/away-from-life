(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{555:function(t,s,a){t.exports=a.p+"assets/img/leetcode-myresult-1518.d7e805f6.png"},556:function(t,s,a){t.exports=a.p+"assets/img/leetcode-offical1-1518.7e1e8a36.png"},557:function(t,s,a){t.exports=a.p+"assets/img/leetcode-offical2-1518.499cc485.png"},614:function(t,s,a){"use strict";a.r(s);var n=a(12),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"leetcode-每日一题-1518-换酒问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-每日一题-1518-换酒问题"}},[t._v("#")]),t._v(" Leetcode 每日一题 1518. 换酒问题")]),t._v(" "),n("h2",{attrs:{id:"题目描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述：")]),t._v(" "),n("p",[t._v("小区便利店正在促销，用 "),n("code",[t._v("numExchange")]),t._v(" 个空酒瓶可以兑换一瓶新酒。你购入了 "),n("code",[t._v("numBottles")]),t._v(" 瓶酒。")]),t._v(" "),n("p",[t._v("如果喝掉了酒瓶中的酒，那么酒瓶就会变成空的。")]),t._v(" "),n("p",[t._v("请你计算 "),n("strong",[t._v("最多")]),t._v(" 能喝到多少瓶酒。")]),t._v(" "),n("h3",{attrs:{id:"示例1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例1"}},[t._v("#")]),t._v(" 示例1:")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/07/19/sample_1_1875.png",alt:""}})]),t._v(" "),n("div",{staticClass:"language-away line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("输入：numBottles = 9, numExchange = 3\n输出：13\n解释：你可以用 3 个空酒瓶兑换 1 瓶酒。\n所以最多能喝到 9 + 3 + 1 = 13 瓶酒。\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("h3",{attrs:{id:"示例2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例2"}},[t._v("#")]),t._v(" 示例2:")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/07/19/sample_2_1875.png",alt:""}})]),t._v(" "),n("div",{staticClass:"language-away line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("输入：numBottles = 15, numExchange = 4\n输出：19\n解释：你可以用 4 个空酒瓶兑换 1 瓶酒。\n所以最多能喝到 15 + 3 + 1 = 19 瓶酒。\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("h3",{attrs:{id:"示例3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例3"}},[t._v("#")]),t._v(" 示例3:")]),t._v(" "),n("div",{staticClass:"language-away line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("输入：numBottles = 5, numExchange = 5\n输出：6\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("h3",{attrs:{id:"示例4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例4"}},[t._v("#")]),t._v(" 示例4:")]),t._v(" "),n("div",{staticClass:"language-away line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("输入：numBottles = 2, numExchange = 3\n输出：2\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("h3",{attrs:{id:"提示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#提示"}},[t._v("#")]),t._v(" 提示：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("1 <= numBottles <= 100")])]),t._v(" "),n("li",[n("code",[t._v("2 <= numExchange <= 100")])])]),t._v(" "),n("p",[t._v("链接：https://leetcode-cn.com/problems/water-bottles/")]),t._v(" "),n("p",[t._v("简单题？我重拳出击")]),t._v(" "),n("h2",{attrs:{id:"我的题解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#我的题解"}},[t._v("#")]),t._v(" 我的题解")]),t._v(" "),n("p",[t._v("模拟整个过程，将每个过程计数就可以了")]),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("numWaterBottles")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("numBottles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" numExchange")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" num "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" numBottles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" empty "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" numBottles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cal "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("empty"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("numExchange"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        num"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v("cal\n        empty "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" empty "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" cal"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("numExchange "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" cal\n        cal "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("empty"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("numExchange"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cal"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br")])]),n("h3",{attrs:{id:"运行结果"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运行结果"}},[t._v("#")]),t._v(" 运行结果")]),t._v(" "),n("p",[n("img",{attrs:{src:a(555),alt:"myresult"}})]),t._v(" "),n("p",[t._v("时间100%还不戳")]),t._v(" "),n("h2",{attrs:{id:"官方题解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#官方题解"}},[t._v("#")]),t._v(" 官方题解")]),t._v(" "),n("h3",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),n("p",[t._v("记一开始有 "),n("em",[t._v("b")]),t._v(" 瓶酒，"),n("em",[t._v("e")]),t._v(" 个空瓶换一瓶酒。")]),t._v(" "),n("h3",{attrs:{id:"方法一-模拟"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方法一-模拟"}},[t._v("#")]),t._v(" 方法一：模拟")]),t._v(" "),n("p",[n("img",{attrs:{src:a(556),alt:"offical1"}})]),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("numWaterBottles")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("numBottles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" numExchange")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bottle "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" numBottles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ans "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" numBottles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bottle "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" numExchange"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        bottle "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" numExchange"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("ans"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("bottle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ans"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n作者：LeetCode"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Solution\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])]),n("h3",{attrs:{id:"方法二-数学"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方法二-数学"}},[t._v("#")]),t._v(" 方法二：数学")]),t._v(" "),n("p",[n("img",{attrs:{src:a(557),alt:"offical2"}})]),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("numWaterBottles")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("numBottles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" numExchange")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" numBottles "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" numExchange "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" Math"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("numBottles "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" numExchange"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("numExchange "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" numBottles "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" numBottles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n作者：LeetCode"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Solution\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);