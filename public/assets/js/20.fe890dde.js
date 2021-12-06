(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{566:function(s,t,a){"use strict";a.r(t);var n=a(12),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"命令模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令模式"}},[s._v("#")]),s._v(" 命令模式")]),s._v(" "),a("p",[s._v("Command（命令模式）属于行为型模式。")]),s._v(" "),a("blockquote",[a("p",[s._v("意图：将一个请求封装为一个对象，从而使你可用不同的请求对客户进行参数化，对请求排队或记录请求日志，以及支持可撤销的操作.")])]),s._v(" "),a("h2",{attrs:{id:"举例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举例子"}},[s._v("#")]),s._v(" 举例子")]),s._v(" "),a("h3",{attrs:{id:"real-world-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#real-world-example"}},[s._v("#")]),s._v(" Real-World-Example")]),s._v(" "),a("p",[s._v("去餐厅点菜，服务员把你点的菜记下来，然后送到后厨。服务员不需要关心怎么做菜，也不需要去盯着后厨做菜，他只需要把菜单传到后厨即可，由后厨统一调度。")]),s._v(" "),a("p",[s._v("在这个例子中，点菜就是请求，服务员把点的菜记下来就是生成对象。")]),s._v(" "),a("h3",{attrs:{id:"computer-world-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#computer-world-example"}},[s._v("#")]),s._v(" Computer-World-Example")]),s._v(" "),a("p",[s._v("大型软件操作系统都有一个特点，即软件非常复杂，菜单按钮非常多。但由于菜单按钮本身并没有业务逻辑，所以通过菜单按钮点击后触发的业务行为不适合由菜单按钮完成，此时可利用命令模式生成一个或一系列指令，由软件系统的实现部分来真正执行。")]),s._v(" "),a("p",[s._v("浏览器的请求不仅会排队，还会取消、重试，因此是个典型的命令模式场景。如果不能将 "),a("code",[s._v("window.fetch")]),s._v(" 序列化为一个个指令放入到队列中，是无法实现请求排队、取消、重试的。")]),s._v(" "),a("p",[s._v("一个按钮被点击，重点在点击后不直接实现，而是将请求封装为一个对象，可以理解为从直接实现，改为生成一个对象，序列化这个请求")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("onClick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  concreteCommand"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//请求内容")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//执行所有命令队列")]),s._v("\n  concreteCommand"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("executeAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("这相当于掌握了执行时机，可以在任意时刻调用，以实现排队或记录日志，如果再记录下反向操作信息，就可以实现撤销重做了")]),s._v(" "),a("h2",{attrs:{id:"结构图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结构图"}},[s._v("#")]),s._v(" 结构图")]),s._v(" "),a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/77802a0e020049da94d5ba9282ced35d~tplv-k3u1fbpfcp-watermark.awebp"}}),s._v(" "),a("p",[s._v("Command 是命令的接口，一般固定有一个 "),a("code",[s._v("execute")]),s._v(" 方法。")]),s._v(" "),a("p",[s._v("ConcreteCommand 是命令接口的实现，它会注入具体执行者 "),a("code",[s._v("Receiver")]),s._v("，它实现的 "),a("code",[s._v("execute")]),s._v(" 方法会调用 "),a("code",[s._v("receiver.execute")]),s._v(" 来具体执行。")]),s._v(" "),a("p",[a("code",[s._v("Invoker")]),s._v(" 是执行请求的命令，其实上面都在推入命令，并没有真正执行，如果排队结束或点击撤销重做时，就触发了 Invoker 实际，就该调用对应的 Command 执行啦")]),s._v(" "),a("p",[s._v("代码编写")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" command1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'wuhu'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" command2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'kaichong'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" invoker "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Invoker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ninvoker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("command1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ninvoker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("command2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ninvoker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("execute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("Invoker"),a("code",[s._v("内部用一个队列维护，执行的时候其实是")]),s._v("for"),a("code",[s._v("循环执行了每个")]),s._v("command.execute()")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Invoker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("commands"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("excute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("commands"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("command")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("execute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"落地"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#落地"}},[s._v("#")]),s._v(" 落地")]),s._v(" "),a("p",[s._v("对于没有撤销重做的前端大部分场景来说，都无需改为命令模式。")]),s._v(" "),a("p",[s._v("命令模式需要注意序列化大小，一般分为：")]),s._v(" "),a("ol",[a("li",[s._v("仅记录操作。")]),s._v(" "),a("li",[s._v("记录全量快照。")]),s._v(" "),a("li",[s._v("全量快照共享内存。")])]),s._v(" "),a("p",[s._v("记录操作是较为精细的管理方式，并且可以延伸出协同编辑功能。记录快照要注意尽量共享内存，防止快照过大，而且协同编辑场景因为快照无法做冲突处理，所以快照模式在协同编辑场景无法应用。")]),s._v(" "),a("p",[s._v("这个操作让我想到了Promise")]),s._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[s._v("命令模式本质上就是将操作抽象为可序列化的命令，使操作可以在合适的时间执行，这种设计带来了许多额外好处。")]),s._v(" "),a("p",[s._v("利用命令模式可以达到高内聚低耦合的效果，提升代码可维护性，也可以实现撤销重做、协同编辑等功能性需求。")])])}),[],!1,null,null,null);t.default=e.exports}}]);