---
title: 设计模式——策略模式
date: 2021-11-23
description: 设计模式的策略模式的复习资料
categories:
- 设计模式
- 大三上
- java
tags:
- 策略模式
- 代码
- 编程
---

# 策略模式

在策略模式（Strategy Pattern）中，一个类的行为或其算法可以在运行时更改。这种类型的设计模式属于行为型模式。

在策略模式中，我们创建表示各种策略的对象和一个行为随着策略对象改变而改变的 context 对象。策略对象改变 context 对象的执行算法。

## 意图：

定义一系列的算法,把它们一个个封装起来, 并且使它们可相互替换。

## 主要解决：

在有多种算法相似的情况下，使用 if...else 所带来的复杂和难以维护。

## 何时使用：

一个系统有许多许多类，而区分它们的只是他们直接的行为。

## 优缺点：

### 优点

1. 算法可以自由切换；
2. 避免使用多重条件判断；
3. 扩展性良好。

## 缺点

1. 策略类会增多；
2. 所有策略类都需要对外暴露。

> 如果一个系统的策略多于四个，就需要考虑使用混合模式，解决策略类膨胀的问题。

## UML类图

![UML类图](../../.vuepress/public/img/statePattern.jpg)

## 代码实现

根据上文的UML图，进行Java实现：

```java
package Week13;

public class StrategyPattern {
    public static void main(String []args) {
        Context context = new Context(new OperationAdd());
        System.out.println("10 + 5 = " + context.executeStrategy(10, 5));

        context = new Context(new OperationSub());
        System.out.println("10 - 5 = " + context.executeStrategy(10, 5));

        context = new Context(new OperationMul());
        System.out.println("10 * 5 = " + context.executeStrategy(10, 5));
    }
}

interface Strategy {
    public int doOperation(int num1, int num2);
}

class OperationAdd implements Strategy{
    @Override
    public int doOperation(int num1, int num2) {
        return num1+num2;
    }
}

class OperationSub implements Strategy{
    @Override
    public int doOperation(int num1, int num2) {
        return num1-num2;
    }
}

class OperationMul implements Strategy{
    @Override
    public int doOperation(int num1, int num2) {
        return num1*num2;
    }
}

class Context {
    private Strategy strategy;

    public Context(Strategy strategy) {
        this.strategy = strategy;
    }

    public int executeStrategy(int num1, int num2) {
        return this.strategy.doOperation(num1, num2);
    }
}
```

输出结果：

```shell
10 + 5 = 15
10 - 5 = 5
10 * 5 = 50

Process finished with exit code 0
```

## 策略的使用：

通常我们事先并不知道会使用哪个策略，在程序运行时根据配置、用户输入、计算结果等来决定到底使用哪种策略。

接口类只负责业务策略的定义，每个策略的具体实现单独放在实现类中，具体调用代码负责业务逻辑的编排。这些实现用到了面向接口而非实现编程，满足了职责单一、开闭原则，从而达到了功能上的高内聚低耦合、提高了可维护性、扩展性以及代码的可读性。