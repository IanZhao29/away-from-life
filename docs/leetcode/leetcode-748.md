---
title: Leetcode 每日一题之我要吊打算法题 Day5 748. 最短补全词
date: 2021-12-10
description: Leetcode 每日一题之我要吊打算法题 Day6 748. 最短补全词
categories:
- Leetcode
- 前端
- 每日打卡
tags:
- 算法
- 代码
- 编程
---

# Leetcode 每日一题 748. 最短补全词

## 题目描述

给你一个字符串 `licensePlate` 和一个字符串数组 `words` ，请你找出并返回 words 中的 **最短补全词** 。

**补全词** 是一个包含 `licensePlate` 中所有的字母的单词。在所有补全词中，最短的那个就是**最短补全词** 。

在匹配 `licensePlate` 中的字母时：

- 忽略 licensePlate 中的 数字和空格 。
- 不区分大小写。
- 如果某个字母在 licensePlate 中出现不止一次，那么该字母在补全词中的出现次数应当一致或者更多。

例如：`licensePlate = "aBc 12c"`，那么它的补全词应当包含字母 `'a'`、`'b'` （忽略大写）和两个` 'c' `。可能的 补全词 有 `"abccdef"`、`"caaacab"` 以及 `"cbca"` 。

请你找出并返回 `words` 中的 最短补全词 。题目数据保证一定存在一个最短补全词。当有多个单词都符合最短补全词的匹配条件时取 `words`中 最靠前的 那个。

### 示例1:

```away
输入：licensePlate = "1s3 PSt", words = ["step", "steps", "stripe", "stepple"]
输出："steps"
解释：最短补全词应该包括 "s"、"p"、"s"（忽略大小写） 以及 "t"。
"step" 包含 "t"、"p"，但只包含一个 "s"，所以它不符合条件。
"steps" 包含 "t"、"p" 和两个 "s"。
"stripe" 缺一个 "s"。
"stepple" 缺一个 "s"。
因此，"steps" 是唯一一个包含所有字母的单词，也是本例的答案。
```

### 示例2:

```away
输入：licensePlate = "1s3 456", words = ["looks", "pest", "stew", "show"]
输出："pest"
解释：licensePlate 只包含字母 "s" 。所有的单词都包含字母 "s" ，其中 "pest"、"stew"、和 "show" 三者最短。答案是 "pest" ，因为它是三个单词中在 words 里最靠前的那个。
```

### 示例3:

```away
输入：licensePlate = "Ah71752", words = ["suggest","letter","of","husband","easy","education","drug","prevent","writer","old"]
输出："husband"
```

### 示例4:

```away
输入：licensePlate = "OgEu755", words = ["enough","these","play","wide","wonder","box","arrive","money","tax","thus"]
输出："enough"
```

### 示例5

```away
输入：licensePlate = "iMSlpe4", words = ["claim","consumer","student","camera","public","never","wonder","simple","thought","use"]
输出："simple"
```

### 提示：

- 1 <= licensePlate.length <= 7
- licensePlate 由数字、大小写字母或空格 ' ' 组成
- 1 <= words.length <= 1000
- 1 <= words[i].length <= 15
- words[i] 由小写英文字母组成

链接：https://leetcode-cn.com/problems/shortest-completing-word/

## 我的题解：

简单题的题解真的没啥好写的，我这道题也是暴力题解，而且还幸运地获得了内存的100%。

思路就是

1. 先把`licensePlate`中的字母全部转成小写，然后用一个数组储存所有的字母
2. 遍历所有字符串，一个一个匹配数组中的字母
3. 找到成功匹配所有字母，并且拥有最短长度的那个

```javascript
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
  var i;
  var j;
  var k;//循环指针
  var fulfilled;//待匹配的字母
  var check;//用来暂时储存操作中的字符串
  licensePlate = licensePlate.toLowerCase();//转小写
  var wordsArray = [];//用来储存出现的字母
  var result = "";//最后结果
  for(i=0; i<licensePlate.length; i++) {
    if((licensePlate[i]>="a"&&licensePlate[i]<="z")) {
      wordsArray.push(licensePlate[i]);
    }
  }//遍历licensePlate找出所有字母
  for(i=0; i<words.length; i++) {
    if(words[i].length<wordsArray.length) {
      continue;
    }//如果字符串长度小于数组长度，肯定不满足，直接跳过
    fulfilled = wordsArray.length;
    check = words[i].toString();
    for(j=0; j<wordsArray.length; j++) {
      for(k=0; k<check.length; k++) {
        if(wordsArray[j]===check[k]) {
          check = check.slice(0,k) + check.slice(k+1);
          k--;
          fulfilled--;
          break;
        }//遍历整个字符串，如果有数组中的字母，就删去一个，并且减少待匹配的字母
      }
      if(fulfilled===0) {//如果数组中的字母都被匹配到了，就看看它是不是最短的那个。
        if(result === "") {
          result = words[i];
        }
        if(words[i].length<result.length) {
          result = words[i];
        }
      }
    }
  }
  return result
};
```

![运行结果](../../.vuepress/public/img/leetcode748.png)

## 官方题解

根据题意，我们先统计 `licensePlate` 中每个字母的出现次数（忽略大小写），然后遍历 `words` 中的每个单词，若 `26` 个字母在该单词中的出现次数均不小于在 `licensePlate` 中的出现次数，则该单词是一个补全词。返回最短且最靠前的补全词。

感觉官方的方法比我的还伞兵。。。

```javascript
var shortestCompletingWord = function(licensePlate, words) {
    const cnt = new Array(26).fill(0);
    for (const ch of licensePlate) {
        if (/^[a-zA-Z]+$/.test(ch)) {
            ++cnt[ch.toLowerCase().charCodeAt() - 'a'.charCodeAt()];
        }
    }
    let idx = -1;
    for (let i = 0; i < words.length; ++i) {
        const c = Array(26).fill(0);
        for (let j = 0; j < words[i].length; ++j) {
            const ch = words[i][j];
            ++c[ch.charCodeAt() - 'a'.charCodeAt()];
        }
        let ok = true;
        for (let j = 0; j < 26; ++j) {
            if (c[j] < cnt[j]) {
                ok = false;
                break;
            }
        }
        if (ok && (idx < 0 || words[i].length < words[idx].length)) {
            idx = i;
        }
    }
    return words[idx];
};
作者：LeetCode-Solution
```

我又看了几个题解，发现javasript的题解都差不多，基本上就是我和官方的解法。