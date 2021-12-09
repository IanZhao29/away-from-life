---
title: Leetcode 每日一题之我要吊打算法题 Day3 689：三个无重叠子数组的最大和
date: 2021-12-8
description: Leetcode 每日一题之我要吊打算法题 Day3 689：三个无重叠子数组的最大和
categories:
- Leetcode
- 前端
- 每日打卡
tags:
- 算法
- 代码
- 编程
---
# Leetcode 每日一题 689. 三个无重叠子数组的最大和

## 题目描述

给你一个整数数组 nums 和一个整数 k ，找出三个长度为 k 、互不重叠、且 3 * k 项的和最大的子数组，并返回这三个子数组。

以下标的数组形式返回结果，数组中的每一项分别指示每个子数组的起始位置（下标从 0 开始）。如果有多个结果，返回字典序最小的一个。

链接：https://leetcode-cn.com/problems/maximum-sum-of-3-non-overlapping-subarrays/

### 示例1:

```away
输入：nums = [1,2,1,2,6,7,5,1], k = 2
输出：[0,3,5]
解释：子数组 [1, 2], [2, 6], [7, 5] 对应的起始下标为 [0, 3, 5]。
也可以取 [2, 1], 但是结果 [1, 3, 5] 在字典序上更大。
```

### 示例2:

```away
输入：nums = [1,2,1,2,1,2,1,2,1], k = 2
输出：[0,2,4]
```

### 提示

- `1 <= nums.length <= 2 * 104`

- `1 <= nums[i] < 216`

- `1 <= k <= floor(nums.length / 3)`

## 我的题解

既然要我找最的和的三个不重叠集合，那我就先把所有不重叠三个集合的所有情况储存在一个集合里，然后遍历这个集合找出最大值不久可以了吗

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function(nums, k) {
  var sets = [];
  var i;
  var j;
  var q;
  for(i=0; i<=nums.length-(3*k); i++) {
    for(j=i+k; j<=nums.length-(2*k); j++) {
      for(q=j+k; q<=nums.length-k; q++) {
        sets.push([i,j,q]);//找出所有可能的组合;
      }
    }
  }
  var maxPos = 0;//记录最大的集合的位置
  var maxVal = checkSum(sets, nums, k, maxPos);//记录最大的集合的值
  for(i=0; i<sets.length; i++) {
    var val = checkSum(sets, nums, k, i);//求出该子集的和
    if(val>maxVal) {
      maxVal = val;
      maxPos = i;
    }
  }
  return sets[maxPos];
};
var checkSum = function(sets, nums, k, count) {
  var i;
  var j;
  var val = 0;
  for(i=0; i<sets[count].length; i++) {
    for(j=0; j<k; j++) {
      val+=nums[sets[count][i]+j];
    }
  }
  return val;
}
```

然而。。。

```away
<--- Last few GCs --->
[41:0x4c12750]     1292 ms: Scavenge 125.9 (131.0) -> 125.4 (134.5) MB, 4.4 / 0.0 ms  (average mu = 0.366, current mu = 0.369) allocation failure
[41:0x4c12750]     1296 ms: Scavenge 129.4 (134.5) -> 129.8 (135.0) MB, 3.9 / 0.0 ms  (average mu = 0.366, current mu = 0.369) allocation failure
[41:0x4c12750]     1312 ms: Scavenge 129.9 (135.0) -> 129.5 (137.7) MB, 15.6 / 0.0 ms  (average mu = 0.366, current mu = 0.369) allocation failure
<--- JS stacktrace --->
FATAL ERROR: Scavenger: semi-space copy Allocation failed - JavaScript heap out of memory
```

这个内存溢出了，可能是因为这样空间复杂度太多了，毕竟随着原集合的数量增加，我这个方法需要的堆栈内存是指数型增加啊。

然后我就歇菜了，找不到优化的方案，直接去看了题解

## 官方解答

官方的解答是窗口滑动，就只有一个题解。

首先我们可以利用窗口求出单个子数组的最大和

滑动窗口是数组/字符串问题中常用的抽象概念。窗口通常是指在数组/字符串中由开始和结束索引定义的一系列元素的集合，即闭区间 [i,j][i,j]。而滑动窗口是指可以将两个边界向某一方向「滑动」的窗口。例如，我们将 [i,j][i,j] 向右滑动 11 个元素，它将变为 [i+1,j+1][i+1,j+1]。

### 单个子数组的最大和

滑动窗口是数组/字符串问题中常用的抽象概念。窗口通常是指在数组/字符串中由开始和结束索引定义的一系列元素的集合，即闭区间 [i,j][i,j]。而滑动窗口是指可以将两个边界向某一方向「滑动」的窗口。例如，我们将 [i,j][i,j] 向右滑动 11 个元素，它将变为 [i+1,j+1][i+1,j+1]。

每次i的值增加，我们就增加最远位置的值，然后判断窗口大小是否超出了k，如果超出了，就把最近位置的值剪掉。最后用一个值记录窗口经过的最大的值，这样就解决了单个窗口的滑动问题。

```javascript
var maxSumOfOneSubarray = function(nums, k) {
    let ans = [];
    let sum1 = 0, maxSum1 = 0;
    for (let i = 0; i < nums.length; ++i) {
        sum1 += nums[i];
        if (i >= k - 1) {
            if (sum1 > maxSum1) {
                maxSum1 = sum1;
                ans = [i - k + 1];
            }
            sum1 -= nums[i - k + 1];
        }
    }
    return ans;
};
```

### 两个无重叠子数组的最大和

增加一个滑动窗口，使第一个窗口从 [0, k-1] 滑动，第二个窗口从[k, 2k-1] 滑动，

我们让两个窗口挨在一起滑动，先记录第一个窗口的最大值和它的位置，然后根据分开记录两个合起来的最大值，maxSum1 + sum2 = maxSum12，这样找出来的一定是最大的，因为对于每个比较大的maxSum1， 我们都让它和可能的sum2相加了。

```javascript
const maxSumOfTwoSubarrays = (nums, k) => {
    const ans = [0, 0];
    let sum1 = 0, maxSum1 = 0, maxSum1Idx = 0;
    let sum2 = 0, maxSum12 = 0;
    for (let i = k; i < nums.length; ++i) {
        sum1 += nums[i - k];
        sum2 += nums[i];
        if (i >= k * 2 - 1) {
            if (sum1 > maxSum1) {
                maxSum1 = sum1;
                maxSum1Idx = i - k * 2 + 1;
            }
            if (maxSum1 + sum2 > maxSum12) {
                maxSum12 = maxSum1 + sum2;
                ans[0] = maxSum1Idx;
                ans[1] = i - k + 1;
            }
            sum1 -= nums[i - k * 2 + 1];
            sum2 -= nums[i - k + 1];
        }
    }
    return ans;
}
```

### 题解：

增加到三个其实和之前一样，只需要继续增加一个窗口，记录下前两个和的最大值和分别所在的位置，然后让三个窗口挨在一起滑动。

```javascript
const maxSumOfThreeSubarrays = (nums, k) => {
    const ans = [0, 0, 0];
    let sum1 = 0, maxSum1 = 0, maxSum1Idx = 0;
    let sum2 = 0, maxSum12 = 0, maxSum12Idx1 = 0, maxSum12Idx2 = 0;
    let sum3 = 0, maxTotal = 0;
    for (let i = k * 2; i < nums.length; ++i) {
        sum1 += nums[i - k * 2];
        sum2 += nums[i - k];
        sum3 += nums[i];
        if (i >= k * 3 - 1) {
            if (sum1 > maxSum1) {
                maxSum1 = sum1;
                maxSum1Idx = i - k * 3 + 1;
            }
            if (maxSum1 + sum2 > maxSum12) {
                maxSum12 = maxSum1 + sum2;
                maxSum12Idx1 = maxSum1Idx;
                maxSum12Idx2 = i - k * 2 + 1;
            }
            if (maxSum12 + sum3 > maxTotal) {
                maxTotal = maxSum12 + sum3;
                ans[0] = maxSum12Idx1;
                ans[1] = maxSum12Idx2;
                ans[2] = i - k + 1;
            }
            sum1 -= nums[i - k * 3 + 1];
            sum2 -= nums[i - k * 2 + 1];
            sum3 -= nums[i - k + 1];
        }
    }
    return ans;
}
```

