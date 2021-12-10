---
title: 设计模式——命令模式与备忘录模式的区别
date: 2021-12-10
description: 设计模式命令模式与备忘录模式的区别的复习资料
categories:
- 设计模式
- 大三上
- java
tags:
- 命令模式
- 备忘录模式
- 代码
- 编程
---

# 设计模式——命令模式与备忘录模式的区别

今天作业里有一道题，原题是这样

> Please write the difference between Memento and Command patterns

我觉得设计模式有很对比较难区分的模式，所以我准备专门做一个对比，今天先从这道题开始。

## 角色区别

### 命令模式

- 接受者(Receiver)：根据命令作出相应行为的对象
- 命令接口(CommandProtocol)：抽象命令
- 具体命令(ConcreCommand)
- 遥控器(Invoker)：可以是客户端，用来给命令

### 备忘录模式

- 管理者：创建备忘录，可以执行记录和复原的内部操作
- 备忘录：用来储存管理者的内部状态，不允许除了管理者的其他对象访问。

## 举例

