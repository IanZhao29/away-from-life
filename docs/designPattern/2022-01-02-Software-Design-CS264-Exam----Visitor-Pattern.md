---
title: Software Design CS264 Exam -- Visitor Pattern
date: 2022-01-02
description: 设计模式考试资料——访问者模式
categories:
- 设计模式
- 大三上
- java
tags:
- 访问者模式
- 代码
- 编程
---

# Visitor Pattern

## Concept

Represent an operation to be performed on the elements of an object structure. Visitor lets you define a new operation without changing the classes of the elements on which it operates.

## Characters

1. Visitor（抽象访问者）：为该对象结构中具体元素角色声明一个访问操作接口。该操作接口的名字和参数标识了发送访问请求给具体访问者的具体元素角色，这样访问者就可以通过该元素角色的特定接口直接访问它。
2. ConcreteVisitor（具体访问者）：实现Visitor声明的接口。
3. Element（受访问元素）：定义一个接受访问操作，它以一个访问者作为参数
4. ConcreteElement（具体元素）：实现抽象元素所定义的接受操作接口
5. ObjectStructure（结构对象角色）：这是使用访问者模式必备的角色。它具备以下特性：能枚举它的元素；可以提供一个高层接口以允许访问者访问它的元素；如有需要，可以设计成一个复合对象或者一个聚集（如一个列表或无序集合）。

## UML

![](../../.vuepress/public/img/VisitorPattern.png)

## Code

```java
public class VisitorPattern {
    public static void main(String[] args) {
        Programmer Lee = new Programmer("Lee");
        Visitor ps = new PS();
        Visitor test = new Test();
        Lee.acceptVisitor(ps);
        Lee.acceptVisitor(test);
    }
}

interface Staff {
    public void acceptVisitor(Visitor visitor);
}

class Programmer implements Staff{

    String name;

    public Programmer(String name) {
        this.name = name;
    }

    @Override
    public void acceptVisitor(Visitor visitor) {
        visitor.visit(this);
    }
}

interface Visitor {
    public void visit(Programmer programmer);
}

class PS implements Visitor {

    @Override
    public void visit(Programmer programmer) {
        System.out.println(programmer.name+" go to PS");
    }
}

class Test implements Visitor {

    @Override
    public void visit(Programmer programmer) {
        System.out.println(programmer.name+" go to Test");
    }
}
```

## Some Questions

1. Combination of **Composite Pattern** and **Visitor Pattern**

   ```java
   import java.util.ArrayList;
   import java.util.List;
   
   public class VisitorPattern {
       public static void main(String[] args) {
           LeafWorker mathTeacher1 = new LeafWorker("Math Teacher-1",
                   "Maths",13);
           LeafWorker mathTeacher2 = new LeafWorker("Math Teacher-2",
                   "Maths",6);
           LeafWorker cseTeacher1 = new LeafWorker("CSE Teacher-1",
                   "Computer Sc.",10);
           LeafWorker cseTeacher2 = new LeafWorker("CSE Teacher-2",
                   "Computer Sc.",13);
           LeafWorker cseTeacher3 = new LeafWorker("CSE Teacher-3",
                   "Computer Sc.",7);
           CompositeWorker hodMaths = new CompositeWorker("Mrs.S.Das(HOD- Maths)","Maths",14);
           CompositeWorker hodCompSc = new CompositeWorker("Mr.V.Sarcar(HOD- CSE)","Computer Sc.",16);
           CompositeWorker principal = new CompositeWorker("Dr.S.Som (Principal)","Planning-Supervising-Managing",20);
   
           hodMaths.add(mathTeacher1);
           hodMaths.add(mathTeacher2);
           hodCompSc.add(cseTeacher1);
           hodCompSc.add(cseTeacher2);
           hodCompSc.add(cseTeacher3);
           principal.add(hodMaths);
           principal.add(hodCompSc);
           principal.printStructure();
   
           VisitorA visitorA = new ConcreteVisitor();
           List<Worker> workerContainer = new ArrayList<Worker>();
           for(Worker worker : principal.getChildren()) {
               workerContainer.add(worker);
           }
   
           for(Worker worker : hodMaths.getChildren()) {
               workerContainer.add(worker);
           }
   
           for(Worker worker : hodCompSc.getChildren()) {
               workerContainer.add(worker);
           }
   
           for(Worker worker : workerContainer) {
               worker.acceptVisitor(visitorA);
           }
       }
   }
   
   interface Worker {
       public void acceptVisitor(VisitorA visitorA);
       public void printStructure();
   }
   
   class CompositeWorker implements Worker{
   
       private String name;
       private String dept;
       private final int year;
       private List<Worker> children;
   
       public String getName() {
           return name;
       }
   
       public String getDept() {
           return dept;
       }
   
       public int getYear() {
           return year;
       }
   
       public List<Worker> getChildren() {
           return children;
       }
   
       public CompositeWorker(String name, String dept, int year) {
           this.name = name;
           this.dept = dept;
           this.year = year;
           children = new ArrayList<Worker>();
       }
   
       public void add(Worker worker) {
           children.add(worker);
       }
   
       public void remove(Worker worker) {
           children.remove(worker);
       }
   
       @Override
       public void acceptVisitor(VisitorA visitorA) {
           visitorA.visitElement(this);
       }
   
       @Override
       public void printStructure() {
           System.out.println("\t" + getName() + " works in " + getDept() + " Experience :" + getYear() + " years");
           for(Worker worker : children) {
               worker.printStructure();
           }
       }
   }
   
   class LeafWorker implements Worker {
   
       private String name;
   
       public String getName() {
           return name;
       }
   
       public String getDept() {
           return dept;
       }
   
       public int getYear() {
           return year;
       }
   
       private String dept;
       private final int year;
   
       public LeafWorker(String name, String dept, int year) {
           this.name = name;
           this.dept = dept;
           this.year = year;
       }
   
       @Override
       public void acceptVisitor(VisitorA visitorA) {
           visitorA.visitElement(this);
       }
   
       @Override
       public void printStructure() {
           System.out.println("\t" + getName() + " works in " + getDept() + " Experience :" + getYear() + " years");
       }
   }
   
   interface VisitorA {
       public void visitElement(CompositeWorker compositeWorker);
       public void visitElement(LeafWorker leafWorker);
   }
   
   class ConcreteVisitor implements VisitorA {
   
       @Override
       public void visitElement(CompositeWorker compositeWorker) {
           boolean eligibleForPromotion = compositeWorker.getYear()>15?true:false;
           System.out.println("\t\t" + compositeWorker.getName() + " from "
                   + compositeWorker.getDept() + " is eligible for promotion? " +
                   eligibleForPromotion);
       }
   
       @Override
       public void visitElement(LeafWorker leafWorker) {
           boolean eligibleForPromotion = leafWorker.getYear()>12?true:false;
           System.out.println("\t\t" + leafWorker.getName() + " from "
                   + leafWorker.getDept() + " is eligible for promotion? " +
                   eligibleForPromotion);
       }
   }
   ```

2. When to use?

   If you need to change the logic of various operations, you can simply do it through visitor implementation.

3. Disadvantages

   - 访问者模式会破坏封装
   - 在向体系中加入新的具体类时，需要修改访问者的代码

