---
title: AUTUMN 2019 EXAMINATION
date: 2021-12-29
description: AUTUMN 2019 EXAMINATION
categories:
- 大三下
tags:
- 考试
- 计算机网络
---

# AUTUMN 2019 EXAMINATION

## Question1. Short Questions

### a) How long does it take a packet of length 1,000 bytes to propagate over a link of distance 2,500 km, propagation speed 2.5x108 m/s, and transmission rate 2 Mbps? 

Tprop = 2500000/2.5*10^8 = 0.01s

### b) What does it mean for a protocol to be stateful? What does it mean for a protocol to be stateless? Give an example one stateful protocol and one stateless protocol. How does HTTP maintain state?

1. Stateless Protocol: Stateless Protocols are the type of network protocols in which Client send request to the server and server response back according to current state. It does not require the server to retain session information or a status about each communicating partner for multiple request. 
2. Stateful Protocol: In Stateful Protocol If client send a request to the server then it expects some kind of response, if it does not get any response then it resend the request. [FTP (File Transfer Protocol)](https://www.geeksforgeeks.org/computer-network-file-transfer-protocol-ftp/), [Telnet](https://www.geeksforgeeks.org/difference-ssh-telnet/) are the example of **Stateful Protocol**. 

HTTP maintain state by using TCP.

### c) What does it mean for HTTP1.1 to be “persistent”? What is the value of HTTP1.1 being persistent, as opposed to being non-persistent, as in HTTP 1.0?

Once client and server are connected through HTTP1.1 "persistent" connection. They can exchange message continously, do not need to create another connection, which can save a lot of time wasted on ack and syn.

### d) Describe how Web caching can reduce the delay in receiving a requested object. Will Web caching reduce the delay for all objects requested by a user or for only some of the objects? Why?

Web caching is stored in your browser. When you request a file from Web server and this file has no change since you last request, the Web server will only request status 304 and then your broswer will use the file which is stored in the local cache when the last time requisition.

Only some of the object, because not all the object is visited by you before and has no change during the time.

### e) Briefly explain the difference between GBN and SR protocols. Which one best describes TCP?

GBN: Go-Back-N, if one of the packet has some fault, all of the packet has been send to the client before will be resend.

SR: Selective Reapeat. Only the packet that has fault will be resend.

TCP mix use GBN and SR, it has the repeat and cache more like SR and a timer more like GBN.

滑动窗口协议：

- 发送缓冲区：
  - 形式：内存中的一个区域，落入缓冲区的分组可以发送
  - 功能：用于存放已发送，但是没有得到确认的分组
  - 必要性：需要重发时可用
- 发送缓冲区的大小:一次最多可以发送多少个未经确认的分组
  - 停止等待协议=1
  - 流水线协议>1，合理的值，不能很大，链路利用率不能够超100%
- 发送缓冲区中的分组
  - 未发送的：落入发送缓冲区的分组，可以连续发送出去;
  - 已经发送出去的、等待对方确认的分组：发送缓冲区的分组只有得到确认 才能删除

GBN: 发送窗口>1 接受窗口=1

- 接收端:只能顺序接收
- 发送端:从表现来看，一旦一个分组没有发成功，如:0,1,2,3,4 ; 假如1未成功，234都发送出去

SR：发送窗口>1 接受窗口》1

- 接收端:可以乱序接收
- 发送端:发送0,1,2,3,4，一旦1未成功，2,3,4,已发送，无需重 发，选择性发送1

### f) Two services that TCP offers are flow control and congestion control. Can you briefly explain the difference between these two services?

Flow control: Mean to solve that the speed of sending and the speed of receiving are different, which will cause queuing and data dropping problem.

Congestion control: Mean to avoid Network congestion, which will cause a slow network.

### g) Compare and contrast the advertisements used by RIP and OSPF.

使 用 O S P F （ 开 放 最 短 路 径 优 先 ） 时 , 一 个 路 由 器 周 期 性 向 自 治 系 统 内 所 有 的 其 它 路 由 器 广 播 选 路 信 息 , 而 不 仅   仅 是 向 其 相 邻 路 由 器 广 播 . 这 个 由 路 由 器 发 出 的 路 由 信 息 中 , 该 路 由 器 到 每 个 邻 近 路 由 器 的 距 离 信 息 都 显 示 为   一 个 相 应 的 条 目 . 使 用 R I P （ 选 路 信 息 协 议 ） 时 , 一 个 路 由 器 只 向 邻 近 的 路 由 器 发 送 通 告 , 通 告 中 包 括 该 路 由 器   到 A S 内 所 有 目 的 子 网 全 部 网 络 的 信 息 ( 经 过 哪 个 路 由 器 , 需 要 多 少 跳 到 达 目 的 子 网 ) .

### h) Consider a router with N input lines, each with input link rate R and an internal switching fabric that is 2N times faster than R. Where in this router can packet queues form? Explain your answer.

Queueing will only occur at the output ports. Since the switch is more than N times fast than the input rate, all arriving packets in a slot can be move from input port to output port in that slot. 

