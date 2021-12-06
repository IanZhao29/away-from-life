---
title: 详解 CSS-Flex 布局
date: 2021-12-6
description: CSS-Flex布局 一篇搞定
categories:
- 设计
- 前端
- css
tags:
- css
- 代码
- 编程
---
# 详解 CSS-Flex 布局

网页布局（layout）是 CSS 的一个重点应用。

布局的传统解决方案，基于盒状模型，依赖 display 属性 + position属性 + float属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。

Flex 布局目前主要应用在移动端布局

最后我会给出应用代码。

## 如何开启 flex 布局

在父元素的 display 属性上开启 flex 属性， 可以使父元素成为一个弹性盒子，其子元素均为 flex 元素。

```css
.container {
  display: flex;
}
```

还有行内元素开启 flex

```css
.inline-container {
  display: inline-flex;
}
```

Webkit 内核的浏览器，必须加上-webkit前缀。

```css
.container {
  display: -webkit-flex; /* Safari */
  display: flex;
}
```

注意，设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。

## 基本概念

注意，设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。

<img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png">

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。

项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。

## 容器属性介绍

以下6个属性设置在父元素上。

> - flex-direction
> - flex-wrap 
> - flex-flow 
> - justify-content 
> - align-items 
> - align-content

### flex-direction

Flex-direction 属性决定了主轴的方向（项目排列方向）

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse
}
```

<img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071005.png">

