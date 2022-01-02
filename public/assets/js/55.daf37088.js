(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{641:function(t,a,s){"use strict";s.r(a);var e=s(12),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"详解深拷贝、浅拷贝"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#详解深拷贝、浅拷贝"}},[t._v("#")]),t._v(" 详解深拷贝、浅拷贝")]),t._v(" "),s("p",[t._v("开发过程中，有时会遇到把现有的一个对象的所有成员属性拷贝给另一个对象的需求。\n比如说对象 A 和对象 B，二者都是 ClassC 的对象，具有成员变量 a 和 b，现在对对象 A 进行拷贝赋值给 B，也就是 B.a = A.a; B.b = A.b;")]),t._v(" "),s("p",[t._v("这时再去改变 B 的属性 a 或者 b 时，可能会遇到问题：假设 a 是基础数据类型，b 是引用类型。\n当改变 B.a 的值时，没有问题；\n当改变 B.b 的值时，同时也会改变 A.b 的值，因为其实上面的例子中只是把 A.b 赋值给了 B.b，因为是 b 引用类型的，所以它们是指向同一个地址的。这可能就会给我们使用埋下隐患。")]),t._v(" "),s("blockquote",[s("p",[t._v("Java 中的数据类型分为基本数据类型和引用数据类型。对于这两种数据类型，在进行赋值操作、用作方法参数或返回值时，会有值传递和引用（地址）传递的差别。")])]),t._v(" "),s("h2",{attrs:{id:"浅拷贝"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浅拷贝"}},[t._v("#")]),t._v(" 浅拷贝")]),t._v(" "),s("p",[t._v("浅拷贝是按位拷贝对象，它会创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值；如果属性是内存地址（引用类型），拷贝的就是内存地址 ，因此如果其中一个对象改变了这个地址，就会影响到另一个对象。即默认拷贝构造函数只是对对象进行浅拷贝复制(逐个成员依次拷贝)，即只复制对象空间而不复制资源。")])])}),[],!1,null,null,null);a.default=r.exports}}]);