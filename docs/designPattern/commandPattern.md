---
title: 设计模式——命令模式
date: 2021-12-03
description: 设计模式命令模式模式的复习资料
categories:
- 设计模式
- 大三上
- java
tags:
- 命令模式
- 代码
- 编程
---

# 命令模式

Command（命令模式）属于行为型模式。

> 意图：将一个请求封装为一个对象，从而使你可用不同的请求对客户进行参数化，对请求排队或记录请求日志，以及支持可撤销的操作.

## 举例子

### Real-World-Example

去餐厅点菜，服务员把你点的菜记下来，然后送到后厨。服务员不需要关心怎么做菜，也不需要去盯着后厨做菜，他只需要把菜单传到后厨即可，由后厨统一调度。

在这个例子中，点菜就是请求，服务员把点的菜记下来就是生成对象。

### Computer-World-Example

大型软件操作系统都有一个特点，即软件非常复杂，菜单按钮非常多。但由于菜单按钮本身并没有业务逻辑，所以通过菜单按钮点击后触发的业务行为不适合由菜单按钮完成，此时可利用命令模式生成一个或一系列指令，由软件系统的实现部分来真正执行。

浏览器的请求不仅会排队，还会取消、重试，因此是个典型的命令模式场景。如果不能将 `window.fetch` 序列化为一个个指令放入到队列中，是无法实现请求排队、取消、重试的。

一个按钮被点击，重点在点击后不直接实现，而是将请求封装为一个对象，可以理解为从直接实现，改为生成一个对象，序列化这个请求

```javascript
function onClick() {
  concreteCommand.push({
    //请求内容
  });
  //执行所有命令队列
  concreteCommand.executeAll();
}
```

这相当于掌握了执行时机，可以在任意时刻调用，以实现排队或记录日志，如果再记录下反向操作信息，就可以实现撤销重做了

## 结构图

<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/77802a0e020049da94d5ba9282ced35d~tplv-k3u1fbpfcp-watermark.awebp">

Command 是命令的接口，一般固定有一个 `execute` 方法。

ConcreteCommand 是命令接口的实现，它会注入具体执行者 `Receiver`，它实现的 `execute` 方法会调用 `receiver.execute` 来具体执行。

`Invoker` 是执行请求的命令，其实上面都在推入命令，并没有真正执行，如果排队结束或点击撤销重做时，就触发了 Invoker 实际，就该调用对应的 Command 执行啦  

代码编写

```javascript
const command1 = new Command('wuhu');
const command2 = new Command('kaichong');

const invoker = new Invoker();
invoker.push(command1);
invoker.push(command2);
invoker.execute();
```

Invoker` 内部用一个队列维护，执行的时候其实是 `for` 循环执行了每个 `command.execute()

```javascript
class Invoker {
  push(command) {
    this.commands.push(command)
  }
  
  excute() {
    this.commands.forEach(command => command.execute());
  }
}
```

## 落地

对于没有撤销重做的前端大部分场景来说，都无需改为命令模式。

命令模式需要注意序列化大小，一般分为：

1. 仅记录操作。
2. 记录全量快照。
3. 全量快照共享内存。

记录操作是较为精细的管理方式，并且可以延伸出协同编辑功能。记录快照要注意尽量共享内存，防止快照过大，而且协同编辑场景因为快照无法做冲突处理，所以快照模式在协同编辑场景无法应用。

这个操作让我想到了Promise

## 总结

命令模式本质上就是将操作抽象为可序列化的命令，使操作可以在合适的时间执行，这种设计带来了许多额外好处。

利用命令模式可以达到高内聚低耦合的效果，提升代码可维护性，也可以实现撤销重做、协同编辑等功能性需求。
