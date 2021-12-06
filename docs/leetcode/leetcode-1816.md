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

# Leetcode 每日一题之我要吊打算法题 Day1 1816：截断句子

## 题目描述

句子 是一个单词列表，列表中的单词之间用单个空格隔开，且不存在前导或尾随空格。每个单词仅由大小写英文字母组成（不含标点符号）。

例如，"Hello World"、"HELLO" 和 "hello world hello world" 都是句子。
给你一个句子 s 和一个整数 k ，请你将 s 截断 ，使截断后的句子仅含 前 k 个单词。返回 截断 s 后得到的句子。

链接：https://leetcode-cn.com/problems/truncate-sentence/

### 示例1:

```away
输入：s = "Hello how are you Contestant", k = 4
输出："Hello how are you"
解释：
s 中的单词为 ["Hello", "how" "are", "you", "Contestant"]
前 4 个单词为 ["Hello", "how", "are", "you"]
因此，应当返回 "Hello how are you"
```

### 示例2:

```away
输入：s = "What is the solution to this problem", k = 4
输出："What is the solution"
解释：
s 中的单词为 ["What", "is" "the", "solution", "to", "this", "problem"]
前 4 个单词为 ["What", "is", "the", "solution"]
因此，应当返回 "What is the solution"
```

### 示例3:

```away
输入：s = "chopper is not a tanuki", k = 5
输出："chopper is not a tanuki"
```

### 提示

- 1 <= s.length <= 500
- k 的取值范围是 [1,  s 中单词的数目]
- s 仅由大小写英文字母和空格组成
- s 中的单词之间由单个空格隔开
- 不存在前导或尾随空格

## 我的题解

### 思路

我的想法一般都是暴力解，所以这道题我的想法是从前往后遍历空格，然后找到适合的空格位置，比如k=4， 就找到第三个空格，直接截取前四个单词

```javascript
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    var word = "";
    var i;
    for(i=0; i<s.length; i++) {
        if(k<1) {
            break;
        }
        if(s.charAt(i)===" ") {
            k--;
        }
    }
    word = s.slice(0, i-1);
    return word
};
```

运行了一下，发现一个问题。

如果句子的单词数等于要拿的单词数量，我这样剪掉的空格就变成减最后一个字母了，所以稍微修改一下

```javascript
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    var word = "";
    var i;
    for(i=0; i<s.length; i++) {
        if(k<1) {
            break;
        }
        if(s.charAt(i)===" ") {
            k--;
        }
    }
    if(i<s.length) {
        word = s.slice(0, i-1);
    }else {
        word = s.slice(0, i);
    }
    return word
};
```

运行成功：

<img src="/Users/ian_zhao_29/Desktop/away-from-life/docs/leetcode/img/leetcode-1816-result.png">

## 大佬题解

本来我想，这回数据还不错，应该没啥很出乎我意料的题解

结果。。。

```javascript
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    return s.split(' ').slice(0, k).join(' ')
};
作者：luoboo
链接：https://leetcode-cn.com/problems/truncate-sentence/solution/js-yi-xing-dai-ma-by-luoboo-xhv2/
```

好家伙一行代码，用了js数组字符串的 API，先把句子根据空格分开，然后把前k个单词切出来，然后用空格连接。

往好处想：我这不是复写了 js 的 split，slice 和 join 嘛。。。