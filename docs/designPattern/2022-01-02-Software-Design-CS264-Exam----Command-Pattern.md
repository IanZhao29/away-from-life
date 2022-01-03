---
title: Software Design CS264 Exam -- Command Pattern
date: 2022-01-02
description: 设计模式考试资料——命令模式
categories:
- 设计模式
- 大三上
- java
tags:
- 命令模式
- 代码
- 编程
---

# Command Pattern

## Concept

Encapsulate a request as an object, thereby letting you parameterize clients with different requests, queues, or log requests, and supports undoable operations.

## Characters

- Command（抽象命令）
- ConcreteCommand（具体命令）
- Invoker（调用）
- Receiver（接收者）
- Client（客户）

## UML

![](../../.vuepress/public/img/CommandPattern.png)

## Code

```java
public class CommandPattern {
    public static void main(String[] args) {
        WashingMachine washingMachine = new WashingMachine();
        Invoker invoker = new Invoker();
        invoker.setCommand(new WashCommand(washingMachine));
        invoker.invokeCommand();
        invoker.setCommand(new DehydrateCommand(washingMachine));
        invoker.invokeCommand();
    }
}

interface Command {
    public void executeCommand();
}

class WashCommand implements Command {

    private WashingMachine washingMachine;

    public WashCommand(WashingMachine washingMachine) {
        this.washingMachine = washingMachine;
    }

    @Override
    public void executeCommand() {
        this.washingMachine.performWash();
    }
}

class DehydrateCommand implements Command {

    private WashingMachine washingMachine;

    public DehydrateCommand(WashingMachine washingMachine) {
        this.washingMachine = washingMachine;
    }

    @Override
    public void executeCommand() {
        this.washingMachine.performDehydrate();
    }
}

class Invoker {

    private Command command;

    public void setCommand(Command command) {
        this.command = command;
    }

    public void invokeCommand() {
        this.command.executeCommand();
    }
}

class WashingMachine {

    public void performWash() {
        System.out.println("WashCommand");
    }

    public void performDehydrate() {
        System.out.println("DehydrateCommand");
    }
}
```

## Some Questions

1. Advantages
   - Requests for creation and the ultimate execution are decoupled. Clients may not know how an invoker is performing the operations.
   - You can create macros (sequence of commands).
   - New commands can be added without affecting the existing system.
2. Challenges
   - To support more commands, you need to create more classes. So, maintenance can be difficult as time goes on.
   - How to handle errors or make a decision about what to do with return values when an erroneous situation occurs becomes tricky. A client may want to know about those. But here you decouple the command with client codes, so these situations are difficult to handle. The challenge becomes significant in a multithreaded environment where the invoker is also running in a different thread.