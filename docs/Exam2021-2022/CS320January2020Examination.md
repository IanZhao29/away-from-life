---
title: CS320 January 2020 Examination
date: 2021-12-29
description: CS320 January 2020 Examination
categories:
- 大三下
tags:
- 考试
- 计算机网络
---

# CS320 January 2020 Examination

## 1.

### a) What are the five layers in the Internet protocol stack? What are the principal responsibilities of each of these layers?

1. Application Layer: With the help of the ``service`` exchange message provided by the ``transport laye``r, the application is realized.（借助传输层所提供的服务交换报文，实现应用）
2. Transport Layer: ``Strengthen`` network layer services, data transission from ``process-to-process`` ``multiplexing`` and ``demultiplexing``, ``reliability``, ``congestion control`` and ``flow control``.（加强网络层的服务，多路复用解复用、可靠性、拥塞控制、流量控制）
3. Network Layer: Complete the ``data transmission`` from ``end-to-end`` and host to host ``across the whole network``, including ``forwarding`` and ``routing``.（完成端到端主机到主机穿过、整网的数据的传输，包括转发、路由）
4. Data-Link Layer: ``Data transmission`` in ``frames`` between ``two adjacent nodes``, can be reliable or unreliable.（在相邻两点进行以帧为单位的数据传输，可以是可靠的也可以是不可靠的）
5. Physical Layer: ``Load`` and ``restore`` the original signal at ``physical media level``.（在物理介质层次上加载和还原原来的信号）

|         层级名称         |      协议       |                             作用                             |
| :----------------------: | :-------------: | :----------------------------------------------------------: |
|   Physical Layer(bits)   |   IEEE 802.11   | Transmit the ``bit stream`` ``transparently`` in physical electrical signal. |
| Data Link Layer(Frames)  |    Ethernet     | ``Data transmission`` in ``frames`` between ``two adjacent nodes`` |
| Network Layer(Datagram)  |  IP, ICMP, ARP  | ``Data transmission`` in ``datagram`` from end-to-end across the ``whole network``, select the appropriate route. |
| Transport Layer(Segment) |    TCP, UDP     | Multiplexing and Demultiplexing, data transmission from ``process to process`` |
|    Application Layer     | HTTP, FTP, SMTP | Directly provide services from ``application to application`` |

### b) What advantage and disadvantages does a circuit- switched network have over a packet-switched network?

Advantages:

- Does not need to be broken into packets.
- Time delay is low.
- No conflict.

Disadvantage: 

- Connection establishment is required to start transmission
- The line is exclusive and the utilization rate is too low

### c) For a communication session between a pair of processes, which process is the client and which is the server? For a P2P file-sharing application, do you agree with the statement, “There is no notion of client and server sides of a communication session”? Why or why not?

Client is the end system that require data. Server is the end system that send data.

For a P2P file-sharing application, I agree with the statement, because in P2P, a peer system can require data from another peers, while this peer might also be required by another peers.

### d) Describe the use of the “If-Modified-Since” header in the HTTP protocol. 

The HTTP header "If-Modified-Since" will be added when the client requiring data by http. When use cache, we first ask server if the cache we store at local is changed, if there is no change, the server will respond 304, then the client will use the local cache. If some changes happened, the server will respond 200 and sent the modified file to the client, the client will use these file and store it in the local cache.

### e) We saw that TCP and UDP provide two very different service models. Suppose that an application wants all of the functionality provided by UDP but only some of the functionality provided by TCP (e.g., the application wants reliable message transfer and flow control, but not congestion control). How would an application get this different service in today’s Internet?

The application would use UDP sockets and implement the desired additional functionality(e.g. reliability and flow control) in the application itself.

### f) UDP and TCP use 1s complement for their checksums. Suppose you have the following three 8-bit bytes: 11010011, 11100110, 11110100. What is the 1s complement of the sum of these 8-bit bytes? (Note that although UDP and TCP use 16-bit words in computing the checksum, for this problem you are being asked to consider 8-bit sums) Show your work

1's complement 就是按位取反

11010011+11100110 = 110111001 = 10111010

10111010+11110100 = 110101110 = 10101111

区反：

 01010000

### g) We have said that BGP implements policy-based routing. What is meant by that? Name one path attribute that can be used by BGP in implementing policy-based routing.

Policy-based routing (PBR) provides network administrators with agility and flexibility to better manage traffic.With carefully architected policies, you can optimize how segments of your network process data, as well as how bandwidth is managed for business-critical applications.

Hot Potato Route: Select the gateway with the lowest internal area cost as the exit to X, don't worry about the cost between domains!

### h) What is meant by the “match plus action” operation of a router or switch? In the case of destination-based forwarding packet switch, what is matched and what is the action taken? In the case of an SDN, name three fields that can be matched, and three actions that can be taken.

Match plus action: Using header field values, lookup output port using forwarding table in input port memory.

Destination-based forwarding: forward based only on destination IP address (traditional)

We match the first n bits and the prefix, then according to the result, choose the link interface.

In SDN:

- Match: the longest prefix; Action: Forwarding
- Match: Destination MAC address; Action: Forwarding or Torrent
- Match: IP address and TCP/UDP port number; Action: Approved or Rejected
- Match: IP address and port number; Action: Rewrite the address and port number

### i) What are the similarities and difference between ALOHA and slotted ALOHA?

In slotted ALOHA, time will be divided into equal length slot, each slot can send one frame, frame can only be send during one slot. In ALOHA, frames can be send at any time.

Slotted ALOHA has higher efficient.

### j) In CSMA/CD, after the fifth collision, what is the probability that a node chooses *K* = 4? The result *K* = 4 corresponds to a delay of how many seconds on a 10Mbps Ethernet?
1/32

4*512/10000000 = 0.0002048

