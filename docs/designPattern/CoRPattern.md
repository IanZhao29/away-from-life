---
title: 设计模式——责任链模式
date: 2021-12-18
description: 设计模式的责任链模式的复习资料
categories:
- 设计模式
- 大三上
- java
tags:
- 策略模式
- 代码
- 编程
---

# 责任链模式

## 定义和特点：

为了避免请求发送者与多个请求处理者耦合在一起，于是将所有请求的处理者通过前一对象记住其下一个对象的引用而连成一条链；当有请求发生时，可将请求沿着这条链传递，直到有对象处理它为止。

在责任链模式中，客户只需要将请求发送到责任链上即可，无须关心请求的处理细节和请求的传递过程，请求会自动进行传递。所以责任链将请求的发送者和请求的处理者解耦了。

## 优点：

- 降低了对象之间的耦合度。该模式使得一个对象无须知道到底是哪一个对象处理其请求以及链的结构，发送者和接收者也无须拥有对方的明确信息。
- 增强了系统的可扩展性。可以根据需要增加新的请求处理类，满足开闭原则。
- 增强了给对象指派职责的灵活性。当工作流程发生变化，可以动态地改变链内的成员或者调动它们的次序，也可动态地新增或者删除责任。
- 责任链简化了对象之间的连接。每个对象只需保持一个指向其后继者的引用，不需保持其他所有处理者的引用，这避免了使用众多的 if 或者 if···else 语句。
- 责任分担。每个类只需要处理自己该处理的工作，不该处理的传递给下一个对象完成，明确各类的责任范围，符合类的单一职责原则。

## 缺点：

- 不能保证每个请求一定被处理。由于一个请求没有明确的接收者，所以不能保证它一定会被处理，该请求可能一直传到链的末端都得不到处理。
- 对比较长的职责链，请求的处理可能涉及多个处理对象，系统性能将受到一定影响。
- 职责链建立的合理性要靠客户端来保证，增加了客户端的复杂性，可能会由于职责链的错误设置而导致系统出错，如可能会造成循环调用。

## 结构：

### 角色：

1. 抽象处理者（Handler）角色：定义一个处理请求的接口，包含抽象处理方法和一个后继连接。
2. 具体处理者（Concrete Handler）角色：实现抽象处理者的处理方法，判断能否处理本次请求，如果可以处理请求则处理，否则将该请求转给它的后继者。
3. 客户类（Client）角色：创建处理链，并向链头的具体处理者对象提交请求，它不关心处理细节和请求的传递过程。

### UML：

![CoRPattern](../../.vuepress/public/img/CoRPattern.png)

### 代码：

```java
package Week16;

public class experiment11_4 {

    public static void main(String[] args) {
        GroupLeader leader = new GroupLeader();
        Manager manager = new Manager();
        CFO cfo = new CFO();

        leader.setNextHandler(manager);
        manager.setNextHandler(cfo);
        System.out.println(String.format("I need to buy a Macbook pro with a budget of %d", 11000));
        if(leader.handle(11000)) {
            System.out.println("thanks");
        }else {
            System.out.println("unfortunately");
        }
    }

}

interface BudgetHandler {

    public void setNextHandler(BudgetHandler budgetHandler);

    public boolean handle(int budget);

}

class CFO implements BudgetHandler {

    public BudgetHandler nextHandler;

    @Override
    public void setNextHandler(BudgetHandler budgetHandler) {
        nextHandler = budgetHandler;
    }

    @Override
    public boolean handle(int budget) {
        if(budget<=50000) {
            System.out.println("CFO: Approved!");
            return true;
        }
        return false;
    }
}

class GroupLeader implements BudgetHandler {

    public BudgetHandler nextHandler;

    @Override
    public void setNextHandler(BudgetHandler budgetHandler) {
        nextHandler = budgetHandler;
    }

    @Override
    public boolean handle(int budget) {
        if(budget<1000) {
            return true;
        }
        System.out.println("Group Leader: Please find next leader!");
        if(nextHandler.handle(budget)) {
            return true;
        }
        return false;
    }
}

class Manager implements BudgetHandler {

    public BudgetHandler nextHandler;

    @Override
    public void setNextHandler(BudgetHandler budgetHandler) {
        nextHandler = budgetHandler;
    }

    @Override
    public boolean handle(int budget) {
        if(budget<10000) {
            return true;
        }
        System.out.println("Manager: Please find next leader!");
        if(nextHandler.handle(budget)) {
            return true;
        }
        return false;
    }
}
```

## 应用场景

1. 多个对象可以处理一个请求，但具体由哪个对象处理该请求在运行时自动确定。
2. 可动态指定一组对象处理请求，或添加新的处理者。
3. 需要在不明确指定请求处理者的情况下，向多个处理者中的一个提交请求。

其实我觉的JS的回调函数就是典型的责任链模式