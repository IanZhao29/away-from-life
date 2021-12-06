---
title: 设计模式——单例模式
date: 2021-11-23
description: 设计模式的单例模式的复习资料
categories:
- 设计模式
- 大三上
- java
tags:
- 单例模式
- 代码
- 编程
---
# 单例模式

简单点说，就是一个应用程序中，某个类的实例对象只有一个，没有办法去new，因为构造器是被private修饰的，一般通过getInstance()的方法来获取它们的实例。

getInstance()的返回值是一个对象的引用，并不是一个新的实例，所以不要错误的理解成多个对象。

> 单例模式有好几种写法，下面是代码实现

## 懒汉式（线程不安全）：

```java
public class Singleton {
  private static Singleton singleton;
  
  private Singleton(){}
  
  public static Singleton getInstance(){
    if(singleton == null){
      singleton = new Singleton();
    }
    return singleton;
  }
}
```

## 懒汉式（线程安全）：

```java
public class Singleton{
  private static Singleton instance;
  private Singleton(){}
  public static synchronized Singleton getInstance() {
    if(instance == null){
      instance = new Singleton();
    }
    return instance;
  }
}
```

## 饿汉式写法

```java
public class Singleton {  
   private static Singleton instance = new Singleton();  
   private Singleton (){}  
   public static Singleton getInstance() {  
   return instance;  
   }  
}
```

## 静态内部类

```java
public class Singleton {  
   private static class SingletonHolder {  
   private static final Singleton INSTANCE = new Singleton();  
   }  
   private Singleton (){}  
   public static final Singleton getInstance() {  
   return SingletonHolder.INSTANCE;  
   }  
}
```

## 双重校验锁(常考)

```java
public class Singleton{
  private volatile static Singleton singleton;
  private Singleton() {}
  public static Singleton getSingleton(){
    if(singleton == null){//判断是否已经有实例
      synchronized(Singleton.class){//线程等待
        if(singleton == null){//这个锁是为了防止其他线程再次添加实例
          singleton = new Singleton();
        }
      }
    }
  }
}
```

### 内层判断：

**如果内层不加if判断，就会实例化多次**，这是显而易见的，这就违背了单例模式的单例二字。

### 外层判断：

当线程1走完了内层判断，对象实例化了，线程3也调用了getInstace函数，如果没有加外层的判断线程3还是要继续等待线程2的完成，而加上外层判断，就不需要等待了，直接返回了实例化的对象。

### 我的理解：

外层的判断是为了提高效率【不必synchronized等待】，里层的判断就是第一次实例化需要。

## UML图

![Homework1_1](/Users/ian_zhao_29/Library/Mobile Documents/com~apple~CloudDocs/软件设计/Homework1/Homework1_1.png)

## 优缺点

### 优点： 

1. 在单例模式中，活动的单例只有一个实例，对单例类的所有实例化得到的都是相同的一个实例。这样就 防止其它对象对自己的实例化，确保所有的对象都访问一个实例 
2. 单例模式具有一定的伸缩性，类自己来控制实例化进程，类就在改变实例化进程上有相应的伸缩性。 
3. 提供了对唯一实例的受控访问。 
4. 由于在系统内存中只存在一个对象，因此可以 节约系统资源，当 需要频繁创建和销毁的对象时单例模式无疑可以提高系统的性能。 
5. 允许可变数目的实例。 
6. 避免对共享资源的多重占用。

### 缺点：

1. 不适用于变化的对象，如果同一类型的对象总是要在不同的用例场景发生变化，单例就会引起数据的错误，不能保存彼此的状态。 
2. 由于单利模式中没有抽象层，因此单例类的扩展有很大的困难。 
3. 单例类的职责过重，在一定程度上违背了“单一职责原则”。 
4. 滥用单例将带来一些负面问题，如为了节省资源将数据库连接池对象设计为的单例类，可能会导致共享连接池对象的程序过多而出现连接池溢出；如果实例化的对象长时间不被利用，系统会认为是垃圾而被回收，这将导致对象状态的丢失。 