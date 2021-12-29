# Computer Network for Maynooth

[toc]

## Chapter 1:

### Basic Tech Term

- Computer Network: A computer network is a set of nodes that are connected together by communication links. （计算机网络是一系列被通信链路连接在一起的节点）
- Set of nodes: Computers, switches, routers, hubs, printers, and servers, smart phone, tablet.（就是一堆节点）
- Communication links: Fiber optics, Coaxial pair cable, copper, rodio wave, micro wave.（光纤、同轴对电缆、铜、无线电波、微波）
- Server: A server is a computer or system that provides resources, data, services, or programs to other computer, known as clients, over a network. Types: File server, Domain Name System(DNS) server, web server, print serverm mail server etc.（给客户提供服务资源的主机或者其他东西）
- Client: a client is a computer that accesses a service made available by a server.（需要服务的计算机）
- Hub: Hub is a device that splits a network connection into multiple computers.（集线器(坞)是将一个网络分开并连接到多个电脑的设备）
- Router: A Router is a networking device that receives and forwards data packets between computer network. （路由器是一个在计算机网络之间接收和发送数据包的网络设备）
- Data cable: Data cables are used to transmit the information from a source to a destination. (数据线)
- Peer: a peer is a computer that accesses a service made available by a server.（一个屁儿是访问服务器提供服务的计算机？？）
- Sender - It is the device which sends the data messages. It can be a computer, workstation, telephone handset （发送方）
- Receiver - It is the device which receives the data messages. It can be a computer, workstation, telephone handset. （接收方）
- Message - It is the information to be communicated. Popular forms of information include text, numbers, images, audio, video etc.（消息）
- Transmission Medium - It is the physical path by which a message travels from sender to receiver. Some examples include twistedpair wire, coaxial cable, radio waves etc.（物理层面的传输媒介）
- Protocol- It is a set of rules that governs the data communications. It represents an agreement between the communicating devices. Without a protocol, two devices may be connected but not communicating.（协议：双方交换数据方式的约定）

#### Transmission modes in computer networks

Transmission mode means transferring of data between two devices. It is also known as communication mode.

- Simplex Mode: Communication is a one-way street（单向）（键盘）
- Half-Duplex Mode: Each station can both transmit and receive, but not at the same time. （一个站点可以发送或接收，但不能同时）（对讲机）
- Full-Duplex Mode:  Both stations can transmit and receive simultaneously. （可以同时发送和接收）（电话）

#### Data communication ways

1. Unicast: One point 2 one point（一对一）
2. Broadcast：One point 2 all others（一对全）（广播）
3. Multicast:  One point to a set of other points(一对多)

### Network edge:

The network edge refers to endpoints of a networks.  

- End Systems: The computers and other devices connected to the Internet.（端系统）
- Access Networks: Is a network that connects subscribers to a particular service provider（接入网）
  - DSL: DSL is a technology for transmitting digital information at a high bandwidth on existing phone lines to homes and businesses.（拨号上网，利用电话线的高带宽上网）
  - Cable Network: 用线缆接入ISP，由ISP负责路由

### Physical media：

It is the means through which the data and information is sent between transmitter & receiver.

1. Guided: 就是网线
   1. 绞线
   2. 同轴电缆
   3. 光纤
2. UnGuided: 就是Wifi
   1. 无线电波
   2. 微波
   3. 红外信号

### Network Core:

#### Circuit Switching:(电路交换)

Circuit switching is a switching technique that establishes a dedicated path between sender and receiver. 

电路交换在建立的时候，会独享一条线路

- FDM(Frequency Division Multiplexing)
- TDM(Time Division Multiplexing)

#### Packet Switching:(分组交换)

The source breaks long messages into smaller chunks of data known as packets.

Store-and-Forward Transmission: The packet switch must receive the entire packet before it can begin to transmit the first bit of the packet onto the out link. （全保存转发）

![截屏2021-12-22 上午9.19.03](/Users/ian_zhao_29/Library/Application Support/typora-user-images/截屏2021-12-22 上午9.19.03.png)

##### Delay：（时延）（车辆类比）

1. Processing delay:（节点处理延时）（收费站拿卡）
   1. check bit errors（纠错）
   2. determine output link（根据首部算出下一跳）
2. Queuing delay:（排队延时）（收费站排队）
   1. Time waiting at output link for transmission （等待处理的时间）
   2. Depends on congestion level of router（取决于拥塞程度）
3. Transmission delay:（传输延时）（下高速收费站处理）
   1. d（传输延时s） = L（包长度bits）/R（带宽bps）
4. Propagation delay:（传播延时）（驾驶时间）
   1. d（传播延时） = d（链路物理长度m）/ s（媒介传播速度≈2x10^8 m/s）

总延时为这四种相加

##### Packet Loss：（分组丢失）

- Since the amount of buffer space is finite, an arriving packet may find that the buffer is completely full with other packets waiting for transmission.
- In this case, packet loss will occur—either the arriving packet or one of the already-queued packets will be dropped

排队区满了之后就随机枪毙一名幸运观众

#### Circuit Switching vs Packet Switching

- Circuit Switching doesn't need to be broken into packets while Packet Switching needed.
- Circuit Switching need to establishment a connection before transmission while Packet Switching doesn't
- Circuit Switching doesn't need to store everything while Packet Switching needed.

#### Throughput:（吞吐量）

Throughput is the rate (bits/time unit) at which bits are transferred between sender and the receiver

- instantaneous: rate at given point in time（瞬间吞吐量）
- average: rate over longer period of time（平均吞吐量）

吞吐量遵循“卡脖子原则”，端对端的平均吞吐量永远是参与传输的所有链路中吞吐量最下的吞吐量

### Computer Network Types:

1. LAN(Local Area Network)（局域网100m级别）
2. PAN(Personal Area Network)（个人局域网10m级别）
3. MAN(Metropolitan Area Network)（城域网）
4. WAN(Wide Area Network)（广域网）

### Network Topology

1. Bus topology(总线拓扑)：所有设备接入一根总线，省钱但是鲁棒性不强
2. Star Topolog（星状拓扑）
3. Ring topology（环状拓扑）
4. Tree topology（树状拓扑）

### 课后习题：

1. “主机”和“端系统”之间有什么不同？列举几种不同类型的端系统。Web服务器算一种端系统吗？

   没啥不同，主机=端系统，PC 服务器手机等都是端系统。

1. “协议”一次常备用于描述外交关系，维基百科是怎么描述外交协议的？

   协议（protocol）定义了在两个或多个通信实体之间交换的报文的格式和顺序，以及报文发送/接收一条报文/其他事件所采取的动作。

1. 标准对于协议为什么重要？

   对话中，如果人们中使用不同的协议（标准），这些协议就不能交互，从而不能完成有用的交流。在网络中这个道理同样成立。即为了完成一项工作，要求两个（或多个）通信实体运行相同的协议。不同协议用于完成不同通信任务。

2. 拨号调制解调器、HFC、DSL和FTTH都用于住宅接入。对于这些技术，给出每种技术的传输速率的范围，并讨论他们的传输速率是共享的还是专用的。

   调制解调器：30kbps~56bps；

   HFC：30mbps下行，2mbps上行；

   DSL：24mbps下行，2.5mbps上行；
   
   FTTH：20Mbps
   
5. 假定在发送主机和接收主机间只有一台分组交换机。发送主机和交换机间以及交换机和接收主机间的传输速率分别时R1和R2。假设该交换机使用储存转发分组交换方式，发送一个长度为L的分组的端到端总时延时什么？（忽略排队时延、传播时延和处理时延。）

   Total delay = L/R1（第一次存储转发） + L/R2（第二次存储转发）

6. 与分组交换网络相比，电路交换网络有哪些优点？在电路交换网络中，TDM比FDM有哪些优点?

   电路交换的优点：

   - 为端到端预留资源，保证带宽，如果发送小于等于这个带宽，性能和延时是得到保障的

   TDM的优点：

   - 复杂度低
   - 当发生拥塞等网络问题时，TDM中的数据丢失可能只会是一部分，FDM会是大多数
   - 效率高，因为时隙的分配是按需的，当一个连接断开，会让出相应的传输时间给其他连接

7. 假定用户共享一条2Mbps链路。同时假定当每个用户传输时连续以1Mbps传输，但每个用户仅传输20%的时间。

   1. 当使用电路交换时，能够支持多少用户

      R（链路带宽）/R'（用户带宽） = 2个

   2. 作为该题的后续问题，假定使用分组交换。为什么如果两个或更少的用户同时传输的话，在链路前面基本上没有排队时延？为什么如果3个用户同时传输，将有排队时延？

      每个用户只有1Mbps，同时使用时最多只有2Mbps，所以2Mbps的链路支持同时处理这些用户的连接，不需要排队，不会产生延时；如果有3个用户，正在处理前两个用户时，第三个用户必须等待处理结束才能被处理，产生了排队，会产生排队延时。

   3. 求出某指定用户正在传输的概率

      P = 20% = 0.2（用户传输的时间）

   4. 假定现在有3个用户。求出在任何给定的时间，所有3个用户在同时传输的概率。求出队列增长的时间比率。

      P^3 = 20%^3 = 0.008;

      三个用户同时在传输的概率 === 队列增长的时间比例 === 0.008 

8. 一个长度为100字节的分组经距离为2500km的链路传播，传播速率为2.5×10的8次m/s并且传输速率为2Mbps，它需要用多长时间？更为一般地，一个长度为L的分组经距离为d的链路传播，传播速率为s并且传输速率为Rbps，它需要用多长时间？该时延与传输速率相关吗？

   0.01s, d/s, 没有关系

9. 因特网协议栈中的5个层次有哪些？在这些层次中，每层的主要任务是什么？

   - 应用层：借助传输层所提供的服务交换报文，实现应用
   - 传输层：加强网络层的服务，多路复用解复用、可靠性、拥塞控制、流量控制
   - 网络层：完成端到端主机到主机穿过、整网的数据的传输，包括转发、路由
   - 链路层：在相邻两点进行以帧为单位的数据传输，可以是可靠的也可以是不可靠的
   - 物理层：在物理介质层次上加载和还原原来的信号

10. 路由器处理因特网协议栈中的哪些层次？链路层交换机处理的是哪些层次？主机处理的是哪些层次？

   - 路由器：网络层、链路层、物理层
   - 链路层交换机：链路层、物理层
   - 主机：所有层次

## Chapter 2:

### Principles of Network Applications:

#### TCP/IP:

TCP/IP stands for Transmission Control Protocol/Internet Protocol.

There are mainly 4 different layers in the TCP/IP model.

- Application Layer（应用层）
- Transport Layer（传输层）
- Network Layer（网络层）
- Link Layer（链路层）

Application Layer means that the application layer and end user can interact directly with the software application.

##### Client-Server architecture

- Server:
  - Always on（总是开着等待客户端接入）
  - Permanent and fixed IP Address（有固定IP）
- Cients:
  - Communicate with server do not communicate directly with each other instead communicate with each other via IP address（客户端可以与服务器通信，或通过服务器与其他客户端通信）
  - May have `dynamic` IP（可能是动态IP）

FTP是典型的Client-Server architecture

##### Peer-to-Peer(P2P) architecture

A peer -to -peer network allows to communicate between peers without the need for a server .

The peers directly interact with one another without the requirement of a central server .

With P2P file sharing, the peer that is downloading the file is labeled as the client, and the peer that is uploading the file is labeled as the server.

- Client process: process that initiates communication
- Server process: process that waits to be contacted

#### Sockets:

A process sends messages into, and receives messages from, the network through a software interface called a socket.

#### Addressing Processes

Identifier includes both IP address and port numbers associated with process on host.

IP address: A unique address that identifies the device over the network.

- IP: 192.168.1.32
- Network id: 192.168.1
- Host id: 32

#### Services of Transport-Layer Protocol

1. Data integrity（数据可靠）（文件传输）
2. Throughput（吞吐量）（流媒体）
3. Timing（及时）（游戏）
4. Security（安全）（密码）

### Web and HTTP

There are 3 components of web:

- URL: Serves as system for resources on web.（唯一资源标识符）
  - A URL is the address of a given unique resource on the Web
  - It is also referred to as a web address
  - Example: https://www.maynoothuniversity.ie/
- HTML: Defines structure, organisation and content of webpage.（超文本标记语言）
- HTTP: Specifies communication of browser and server.（超文本传输协议，代表浏览器与服务器之间的通信）

#### HTTP

HTTP defines how Web clients request Web pages from Web servers and how servers transfer Web pages to clients.

1. **HTTP uses TCP as its underlying transport protocol**

2. **A HTTP client first initiates TCP connection (creates socket) to server.**

3. **The browser and the server processes access TCP through their socket interfaces.**
4. Exchange message
5. **TCP connection closed**

##### RTT:

Time for a small packet to travel from client to server and back

HTTP response time:

- One RTT to initiate TCP connection
- One RTT for HTTP request and first few bytes of HTTP response to return 
- File transmission time

Non-persistent HTTP response time = 2RTT + File transmission time

持久性HTTP：

- 非持久性HTTP的缺点：
  - 每个对象额外2个RTT
  - 操作系统要为每个TCP连接分配资源
  - 但浏览器通常打开并行TCP连接，以获取引用对象

持久性HTTP在服务器响应后依然保持TCP连接，在相同客户端和服务器之间的后续请求和响应报文通过相同的连接进行传送，客户端在遇到一个引用对象的时候，就可以尽快发送该对象的请求。

- 非流水式
  - 客户端只能在收到前一个响应后才能发出新的请求
  - 每个引用对象花费一个RTT
- 流水式
  - HTTP/1.1的默认模式
  - 客户端遇到一个引用对象就立即 产生一个请求
  - 所有引用(小)对象只花费一个 RTT是可能的

#### User-server state: cookies（小甜饼嘿嘿）

Cookies are messages that web servers pass to your web browser when we visit internet sites

1. Response message: cookie header line of HTTP 
2. Request message:  cookie header line in next HTTP 
3.  Cookie file kept on user ’s host, managed by user’s browser
4.  Back-end database at Web site

郑老师有一个很形象的比喻，Cookies就像以前的信物，服务器把信物掰成两半，发给客户端。两人再次相见的时候，如果信物对得上，就算相认，服务器就知道客户端的身份了

- Session Cookies: Expire after a specific time or when the browser is closed.（时效）
- Permanent Cookies: Remain in operation, even when we have closed the browser.（永久）
- Third-Party Cookies: These are installed by third parties for collecting certain information.（第三方）

#### Web缓存（代理服务器）

用户设置浏览器通过缓存访问Web，浏览器将所有的HTTP请求发送缓存

- 在缓存中的对象：缓存直接返回对象；
- 不在缓存的对象：缓存请求原始服务器，然后再将对象返回给客户端

##### Web 缓存的作用：

- 降低客户端的请求响应时间
- 减少ISP的流量
- 利用较弱的ICP也能提供有效内容

### FTP

- FTP客户端与FTP服务器通过端 口21联系，并使用TCP为传输协议
- 客户端通过控制连接获得身份确认
- 客户端通过控制连接发送命令浏览远程目录
- 收到一个文件传输命令时，服务器打开一个到客户端的数据连接
- 一个文件传输完成后，服务器关闭连接

**注意：**

- 服务器打开第二个TCP数据连接用 来传输另一个文件；
- 控制连接带外传送

### Email

- User Agents: The application installed on PC
- Mail Servers: Outgoing and incoming messages are stored on server(mq, 相当于信箱)
- SMTP(Simple Mail Transfer Protocol)（相当于邮递员）

Email可能并不会立刻到达，两个不同的服务商只有在对接的时候才会互相发邮件。

#### SMTP与HTTP比较：

- HTTP：拉；SMTP：推
- 二者都是ASCII形式的命令/响应交互、状态码
- HTTP：每个对象封装在各自的响应报文中
- SMTP：多个对象包含在一个报文中

### DNS

DNS大致工作过程

- 应用调用 解析器(resolver)
- 解析器作为客户向Name Server发出查询报文 (封装在UDP段中)
- Name Server返回响应报文(name/ip)

名字解析过程：

- 目标名字字Local Name Server中
  - 情况1:查询的名字在该区域内部
  - 情况2:缓存（cashing）
- 当与本地名字服务器不能解析名字时，联系根名字服务器顺着根TLD一直找到权威名字服务器

DNS：保存资源记录（RR）的分布式数据库

RR格式(name, value, type, ttl)

- Type = A
  - Name为主机
  - Value为IP地址
- Type = CNAME
  - Name为规范名字的别名
- Type = NS
  - Name域名
  - Value为该域名的权威服务器的域名
- Type = MX
  - Value为name对应的邮件服务器的名字

DNS协议：查询和响应报文的报文格式相同

攻击DNS

- DDoS攻击
  - 对根服务器进行流量轰炸攻击：发送大量ping
    - 没有成功
    - 原因1: 根目录服务器配置了流量过滤器，防火墙
    - 原因2: Local DNS缓存了TLD服务器的IP地址
  - 向TLD服务器流量轰炸攻击：发送大量查询
    - 可能更危险
    - 效果一般，大部分DNS缓存了TLD
- 重定向攻击
  - 中间人攻击
    - 截获查询，伪造回答，从而攻击 某个(DNS回答指定的IP)站点
  - DNS中毒
    - 发送伪造的应答给DNS服务器，希望它能够缓存这个虚假的结果
  - 技术上较困难:分布式截获和伪造
- 利用DNS基础设施进行DDoS
  - 伪造某个IP进行查询， 攻击这个目标IP
  - 查询放大，响应报文比查询报文大
  - 效果有限

### P2P应用

- 没有(或极少)一直运行的服务器
- 任意端系统都可以直接通信
- 利用peer的服务能力
- Peer节点间歇上网，每次IP地址都有可能变化

P2P两个问题：

- 如何定位所需资源
- 如何处理对等方的加入与离开

解决方案：

- 集中：用一种中心服务器处理每个peer的IP地址和内容

  - 单点故障
  - 性能瓶颈
  - 侵犯版权

- 分散：Gnutella:通过t泛洪建立对等方TCP连接，自己维持一张队等方列表

  ![截屏2021-12-23 上午9.47.19](/Users/ian_zhao_29/Library/Application Support/typora-user-images/截屏2021-12-23 上午9.47.19.png)

- 半分散：KaZaA: 组长机制，组员与其组长通信，组长与组长通信。

  - 每个文件有一个散列标识码和一个描述符

  - 客户端向其组长发送关键字查询

  - 组长用匹配进行响应:

    - 对每个匹配:元数据、散列标识码和IP地址

  - 如果组长将查询转发给其他组长，其他组长也

    以匹配进行响应

  - 客户端选择要下载的文件

    -  向拥有文件的对等方发送一个带散列标识码的 HTTP请求

    ![截屏2021-12-23 上午9.51.12](/Users/ian_zhao_29/Library/Application Support/typora-user-images/截屏2021-12-23 上午9.51.12.png)

### CDN

A CDN is essentially a group of servers that are strategically placed across the globe with the purpose of accelerating the delivery of web content.

- Manages servers that are geographically distributed over different locations
- Stores the web content in its servers.
- Attempts to direct each user to a server that is part of the CDN so as to deliver content quickly



#### Enter Deep

将CDN服务器深入到许多接入网

更接近用户，数量多，离用户近，管理困难

#### Bring Home

部署在少数(10个左右)关键位置，如将服 务器簇安装于POP附近(离若干1stISP POP较近)

采用租用线路将服务器簇连接起来

#### 如何实现

1. manifest文件
2. 域名解析重定向

### Socket编程

Socket：应用进程与端到端传输协议(TCP或UDP)之间的门户

#### TCP Socket

从一个进程向另一个进程可靠地传输字节流

1. 服务器进程必须先处于运行状态

   1. 创建欢迎socket
   2. 和本地端口捆绑
   3. 在欢迎socket上阻塞式等待接收用户的连接

2. 创建客户端本地套接字(隐式捆绑到本地port)

   1. 指定服务器进程的IP地址和端口号，与服务器进程连接

3. 当与客户端连接请求到来时

   1. 服务器接受来自用户端的请求，解除阻塞式等待，返回一个新的socket（与欢迎socket不一样），与客户端通信
      1. 允许服务器与多个客户端通信
      2. 使用源IP和源端口来区分不同的客户端

4. 连接API调用有效时，客户端P与服务器建立了TCP连接

   ![截屏2021-12-23 下午2.05.22](/Users/ian_zhao_29/Library/Application Support/typora-user-images/截屏2021-12-23 下午2.05.22.png)

#### UDP Socket

![截屏2021-12-23 下午2.06.06](/Users/ian_zhao_29/Library/Application Support/typora-user-images/截屏2021-12-23 下午2.06.06.png)

### 练习题

#### P10.

![截屏2021-12-24 下午4.44.00](/Users/ian_zhao_29/Library/Application Support/typora-user-images/截屏2021-12-24 下午4.44.00.png)

#### P22 

![截屏2021-12-24 下午5.04.35](/Users/ian_zhao_29/Library/Application Support/typora-user-images/截屏2021-12-24 下午5.04.35.png)

## Chapter 3

### Transport-layer services

- It provides logical communication between application processes running on different hosts
- Transport protocols run in end systems
  - 发送方将应用层的报 文分成报文段，然后传递给网络层
  - 接收方将报文段重组 成报文，然后传递给应用层
- More than one transport protocol available to apps
  - TCP
  - UDP

On the sending side, the transport layer converts the application-layer messages (receives from a sending application process) into transport-layer packets, known as transport-layer segments in Internet terminology.

This is done by (possibly) breaking the application messages into smaller chunks and adding a transport-layer header to each chunk to create the transport-layer segment.

The transport layer then passes the segment to the network layer at the sending end system, where the segment is encapsulated within a network-layer packet (a datagram) and sent to the destination.

On the receiving side, the network layer extracts the transport-layer segment from the datagram and passes the segment up to the transport layer. The transport layer then processes the received segment, making the data in the segment available to the receiving application

#### Transport vs. Network Layer

- Network Layer: Logical communication between hosts（主机之间的逻辑通信）
- Transport Layer: Logical communication between processes（进程间的逻辑通信）
  - Relies on, enhances, network layer services（依赖于网络层的服务进行，延时、带宽）
  - 并对网络层的服务进行增强
    - 数据丢失、顺序混乱、加密等

We can recall that the Internet, and more generally a TCP/IP network, makes two distinct transport-layer protocols available to the application layer.

- TCP: Provides a reliable, connection-oriented service to the invoking application（提供可靠，面向连接的服务给控制应用）
- UDP: Provides a unreliable, connectionless service to the invoking application（提供不可靠，无连接的服务给控制应用）

### Multiplexing and Demultiplexing

- Multiplexing at sender: Handle data from multiple sockets, add transport header(later used for demultiplexing)（从多个套接字来自多个进程的报文，根据套接字对应的IP地址和端口号等信息对报文段用头部加以封装（该头部信息用于以后的解复用））
- Demultiplexing at receiver: Use header info to deliver received segments to correct socket（根据报文段的头部信息中的IP地址和端口号将接收到的报文段发给正确的套接字（和对应的应用进程））

解复用作用: TCP或者UDP实体采用哪些信息，将报文段的数据部分比特 交给正确的socket，从而交给正确的进程

主机收到IP数据报：

- 每个数据报有源IP地址和目标地址
- 每个数据报承载一个传输层报文段
- 每个报文段有一个源端口号和目标端口号(特定应用有著名的端口号)

主机联合使用IP地址和端口号将报文段发送给合适的套接字

### 无连接（UDP）多路解复用

UDP stands for User Datagram Protocol, it is a Transport Layer protocol（用户数据报协议）

There is no need to establish a connection prior to data transfer（无连接）

In UDP there may be: 

- data lost 
- unreliable

UDP is used in:

- Streaming multimedia apps 
- Routing update protocols like RIP(Routing Information Protocol).
- DNS

UDP checksum: Detect “ errors ” (e.g., flipped bits) in transmitted segment.

### 可靠数据传输的原理

可靠数据传输（rdt）的原理

- 只考虑单项数据传输
- 双向的数据传输问题实际上是2个单向数据传输问题的综合

问题：怎样从差错中恢复：

- ACK：接收方显式地告诉发送方分组已被正确接收
- NAK：接收方显式地告诉发送方分组发生了差错
  - 发送方收到NAK后，发送方重传分组

Rdt2.2：

- 只使用ACK（ack要编号）
- 接收方对最后正确接收的分组发ACK，以替代NAK
- 当收到重复的ACK(如:再次收到ack0)时，发送重传当前分组

Rdt3.0:

- 在2.2的基础上设置一个定时器，若定时器时间内没收到ack，重传当前分组

stop-wait：停止-等待协议（利用率不高）

propline：流水线协议：允许发送方在未得到对方确认的情况下一次发送多个分组

- 必须增加序号的范围:用多个bit表示分组的序号
- 在发送方/接收方要有缓冲区

滑动窗口协议：与滑动窗口算法相同

GBN(Go-Back-N): 一旦有一个错误，重传整个窗口内的数据，窗口内分组共享一个定时器，接收方窗口大小为1，

SR：只重传发生错误的分组，接收方窗口大小>1， 为每一个分组保持一个定时器

|              |         GBN         |             SR             |
| :----------: | :-----------------: | :------------------------: |
|     优点     |  简单，所需资源少   |       出错重传代价小       |
|     缺点     | 一旦出错，代价大(N) |      复杂，所需资源多      |
|   适用范围   |      出错率低       | 链路容量大，延迟大、带宽大 |
| 窗口最大尺寸 |      (2^n) -1       |          2^(n-1)           |

### TCP

- 点对点：一个发送方一个接收方
- 可靠、顺序：没有报文边界
- 流水线：拥塞控制和流量控制
- 全双工：同一链接数据双向流动（MSS：最大报文大小）
- 面向连接：数据交换前需3次握手交换双方状态

#### TCP的RTT和超时

TCP设置超时：比RTT要长

怎么估计RTT：EstimatedRTT = (1- a)*EstimatedRTT + a\*SampleRTT(a一般取0.125)

因此超时间隔：TimeoutInterval = EstimatedRTT + 4*DevRTT

#### 可靠数据传输

在IP不可靠的基础上建立了rdt：

- 累计确认（GBN）

- 单个重传定时器（GBN）

- 触发重传

  - 超时（只重发最早未确认的分组：SR）
  - 重复确认

  

#### 流量控制

发送方和接收方约定好接受窗口大小，发送方发送速度不会超过这个窗口的接收速度

防止接收方被淹没在数据中，造成超长时延和分组丢失

#### 连接管理

##### 两次握手可以吗？

- 连接请求的段 没有丢，但可能超时
- 由于丢失造成的重传
- 报文乱序
- 相互看不到对方

两次握手失败的场景：

![截屏2021-12-25 下午2.56.20](/Users/ian_zhao_29/Library/Application Support/typora-user-images/截屏2021-12-25 下午2.56.20.png)

三次连接解决的问题：

- 半连接：服务器或客户端有一方不知道已经连接
- 老数据：双方均处于活跃状态

##### 关闭连接：

![截屏2021-12-25 下午3.01.07](/Users/ian_zhao_29/Library/Application Support/typora-user-images/截屏2021-12-25 下午3.01.07.png)

### 拥塞控制原理

ATM（异步传输模式） ABR（available bit rate）：

- 弹性服务

- 如果发送端轻载

  - 发送方全力发送

- 如果发送方路径拥塞

  - 限制到最小保障速率

- RM（资源管理）信元：

  - 由发送端发送，在数据信元中间隔插入

    - NI bit：no increase in rate, 轻微拥塞
    - CI bit: congestion indication, 已拥塞

  - 发送端发送的RM信元被接收端返回, 接收端不做任何

    改变

### 拥塞控制

#### 检测拥塞：

- 某个段超时了：拥塞
- 有关某个段的3次重复ack：轻微拥塞

##### 控制策略

1. 维持一个拥塞窗口的值：CongWin

   有：LastByteSent - LastByteAcked <= CongWin

   动态改变CongWin

   - 超时：CongWin 降低为 1MSS， 进入SS阶段后增加到CongWin/2（每个RTT），从而进入CA阶段
   - 3个重复ack：CongWin降低为CongWin/2， CA阶段
   - 若没有以上情况，CongWin上升
     - SS阶段：加倍增加
     - CA阶段：线性增加

2. 联合控制：发送端控制发送但是未确认的量同时也不能够超过接收 窗口，满足流量控制要求

   1. SendWin=min{CongWin, RecvWin}
   2. 同时满足 拥塞控制和流量控制要求

3. 慢启动SS：

   - 刚建立连接，CongWin = 1MSS
   - 若干可用带宽远远大于MSS/RTT：加速
   - 指数级增加发送速度，直到丢失发生
     - 启动初始值很低
     - 但增加速度很快

4. AIMD

   1. 乘性减：3个重复ACK会将CongWin减半，丢失发生后将CongWin降为1，将CongWin/2作为阈值，进入慢启动阶段

   2. 加性增：当CongWin>阈值，一个RTT如果没有发生丢失，CongWin + 1MSS

   3. 设置Threshold为CongWin/2

      ![截屏2021-12-25 下午3.40.49](/Users/ian_zhao_29/Library/Application Support/typora-user-images/截屏2021-12-25 下午3.40.49.png)

## Chapter 4

Network Layer:

- Move packets from router’s input to appropriate router output
- Determine route taken by packets from source to destination

Data plane: 

- Local, per-router function
- Determines how datagram arriving on router input port is forwarded to router output port
- Forwarding function
  - Traditional: 基于目标地址+转发表
  - SDN: 基于多个字段+流表

Control Plane：

- Network-wide logic
- Determines how datagram is routed among routers along end-end path from source host to destination host
- Two control-plane approaches:
  - Traditional routing algorithms: implemented in routers
  - SDN: implemented in remote servers

![截屏2021-12-25 下午4.27.30](/Users/ian_zhao_29/Library/Application Support/typora-user-images/截屏2021-12-25 下午4.27.30.png)

#### 路由器组成

路由：运用路由选择算法/协议（RIP，OSPF，BGP）-生成路由表

转发：从输入到输出链路交换数据报-根据路由表进行分组的转发

Match plus action: 匹配+行动：根据数据报头部的信息如:目的地址 ，在输入端口内存中的转发表中查找 合适的输出端口

Destination based Routing: 基于目标的转发：仅仅依赖于IP数据报的目标IP地址（传统方法）

Generalized Forwarding: 基于头部字段的任意集合进行转发

Longest Prefix matching: When Lookinf for forwarding table entry for given destination address, use longest address prefix that matches destination address（当给定目标地址查找转发表时，采用最长地址前缀匹配的目标地址表项）

为什么要用最长前缀匹配？

在路由器中经常采用TCAMs( ternary content addressable memories)硬件来完成

- 内容可寻址：将地址交给TCAM，它可以在一个时钟周期内检索出地址，不管表空间有多大
-  Cisco Catalyst系列路由器: 在TCAM中可以存储多达 约为1百万条路由表项

路由器需要输入端口缓存：当交换机构的速率小于输入端口的汇聚速率时，在输入端口可能要排队。

- Head-of-the-Line (HOL) blocking: 排在队头的数据报阻止了队列中其他数据报向前移动。

Switching fabrics（交换结构）：

- Transfer packet from input buffer to appropriate output buffer

- Switching rate: rate at which packets can be transfer from inputs to outputs

  - Often measured as multiple of input/output line rate
  - N inputs: switching rate N times line rate desirable（这样路由器不会成为瓶颈）

- Three types of switching fabrics:

  ![截屏2021-12-25 下午4.49.27](/Users/ian_zhao_29/Library/Application Support/typora-user-images/截屏2021-12-25 下午4.49.27.png)

  - Memory: 
    - Traditional computers with switching under direct control of CPU
    - Packet copied to system’ s memory
    - Speed limited by memory bandwidth (2 bus crossings per datagram)
    - One packet a time
  - Bus:
    - Datagram from input port memory to output port memory via a shared bus
    - Bus contention（总线竞争）: Switching speed limited by bus bandwidth.
  - Switching via interconnection network(crossbar):
    - 同时并发转发多个分组，克服总线带宽限制
    - 当分组从端口A到达，转给端口Y;控 制器短接相应的两个总线

  输出端口：

  - 当数据报从交换机构的到达速度比传输速率快 就需要输出端口缓存
  - 由调度规则选择排队的数据报进行传输
  - Output port queueing
    - 假设交换速率Rswitch是Rline的N倍(N:输入端口的数量)
    - 当多个输入端口同时向输出端口发送时，缓冲该分组（当通过交换网络到达的速率超过输出速率则缓存）
    - 排队带来延迟，由于输出端口缓存溢出则丢弃数据报

Scheduling mechanisms：

- Scheduling: choose next packet to send on link
- FIFO
  - Discard policy: if packet arrives to full queue: who to discard?
    - Tail drop: drop packet that just arrived
    - Priority: Drop/Remove on priority basis
    - Random 

Scheduling policies

- Priority:  Send highest priority queued packet 
- Round Robin(RR): Cyclically scan class queues, sending one complete packet from each class (if available)
- Weighted Fair Queuing (WFQ): Each class gets weighted amount of service in each cycle

### IP 

![截屏2021-12-25 下午5.20.13](/Users/ian_zhao_29/Library/Application Support/typora-user-images/截屏2021-12-25 下午5.20.13.png)

#### IP分片和重组：

-  网络链路有MTU (最大传输单元) –链路层帧所携带的最大数据长度
  - 不同的链路类型有不同MTU
- 大的IP数据报在网络上被分片("fragmented")
  - 一个数据报被分割成若干个小的数据报
    - 相同的ID
    - 不同的偏移量
    - 最后一个分片标记为0
  - “重组”只在最终的目标主机进行

![截屏2021-12-25 下午5.23.43](/Users/ian_zhao_29/Library/Application Support/typora-user-images/截屏2021-12-25 下午5.23.43.png)

#### IPV4

- IP address: 32-bit identifier for host, router interface
- Interface: Connection between host/router and physical link
  - 路由器通常拥有多个Interface
  - 主机也可能有多个Interface
  - IP地址和每一个接口关联
- IP addresses associated with each interface（一个IP地址只与一个Interface相关联）

Subnets（子网）

- IP address:
  - Subnet part - high order bits
  - Host part - low order bits
- What's a subnet?
  - Device interfaces with same subnet part of IP address
  - Can physically reach each other without intervening router
- Recipe: To determine the subnets, detach each interface from its host or router, creating islands of isolated networks, each isolated network is called a subnet

IP地址中：

- 子网部分: 全为 0---本网络
- 主机部分: 全为0---本主机
- 主机部分: 全为1--广播地址，这个网络的所有主机

子网掩码（subnet mask）

- 子网部分可以在任意的位置

- 地址格式: a.b.c.d/x, 其中 x 是 地址中子网号的长度

  ![截屏2021-12-25 下午5.36.27](/Users/ian_zhao_29/Library/Application Support/typora-user-images/截屏2021-12-25 下午5.36.27.png)

  转发表和转发算法：

  ![截屏2021-12-25 下午5.37.32](/Users/ian_zhao_29/Library/Application Support/typora-user-images/截屏2021-12-25 下午5.37.32.png)

  

##### DHCP：Dynamic Host Configuration Protocol

允许主机在加入网络的时候，动态地从服务器那里获 得IP地址

- 可以更新对主机在用IP地址的租用期-租期快到了
- 重新启动时，允许重新使用以前用过的IP地址
- 支持移动用户加入到该网络(短期在网)

DHCP工作概况：

- 主机广播“DHCP discover” 报文[可选]
- DHCP 服务器用 “DHCP offer”提供报文响应[可选]
- 主机请求IP地址:发送 “DHCP request” 报文
- DHCP服务器发送地址:“DHCP ack” 报文

DHCP返回：

- IP地址
- 第一跳路由器的IP地址（默认网关）
- DNS服务器的域名和IP地址
- 子网掩码（指示地址部分的网络号和主机号）

实例：

- 联网笔记本需要获取自己的IP地址，第一跳路由器地址和DNS服务器:采用 DHCP协议
- DHCP 请求被封装在UDP段中, 封装在IP数据报中，封装在以太网的帧中
- 以太网帧在局域网范围内广 播 (dest: FFFFFFFFFFFF) ， 被运行DHCP服务的路由器收到
- 以太网帧解封装成IP，IP 解封装成UDP，解封装成DHCP
- DHCP服务器生成DHCP ACK， 包含客户端的IP地址，第一 跳路由器的IP地址和DNS域 名服务器的IP地址
- DHCP服务器封装的报文所在 的帧转发到客户端，在客户端解封装成DHCP报文
- 客户端知道它自己的IP地址，DNS服务器的名字和IP地址，第一跳路由器的IP地址

层次编址：路由聚集

![截屏2021-12-25 下午5.49.07](/Users/ian_zhao_29/Library/Application Support/typora-user-images/截屏2021-12-25 下午5.49.07.png)

一个ISP如何获得一个地址块？

ICANN: Internet Corporation for Assigned Names and Numbers

- 分配地址
- 管理DNS
- 分配域名，解决冲突

#### NAT: Network Address Translation

- 16-bit端口字段:
  - 6万多个同时连接，一个局域网!
- 对NAT是有争议的:
  - 路由器只应该对第3层做信息处理，而这里对端口号(4层)作了处 理
  - 违反了end-to-end 原则: 复杂性放到网络边缘
  - 外网的机器无法主动连接到内网的机器上
  - 地址短缺问题可以被IPv6 解决
  - NAT穿越: 如果客户端需要连接在NAT后面的服务器，如何操作

##### NAT 穿越问题

- 客户端需要连接地址为 10.0.0.1的服务器
  - 服务器地址10.0.0.1 LAN本地地址（客户端不能够使用其作为目标地址）
  - 整网只有一个外部可见地址: 138.76.29.7
- 方案1: 静态配置NAT:转发进来的对服务器特定端口连接请求
- 方案2: Universal Plug and Play (UPnP) Internet Gateway Device (IGD) 协议. 允许 NATted主机可以：
  - 获知网络的公共 IP地址 (138.76.29.7)
  - 列举存在的端口映射
  - 增/删端口映射 (在租用时间内)
- 方案3: 中继 (used in Skype)
  - NAT后面的服务器建立和中继的连接
  - 外部的客户端链接到中继
  - 中继在2个连接之间桥接

#### IPv6

##### 和IPv4的其他变化

- Checksum: 被移除掉，降低在每一段中的处理速度
- Options：允许，但是在头部之外，被“Next Header”字短标示
- ICMPv6：ICMP新版本
  - 附加了报文类型“Packet Too Big”（IPv6不允许分片）
  - 多播组管理功能

##### 从IPv4到IPv6的平移

- 隧道：在IPv4路由器之间传输的IPv4数据报中携带IPv6数据报

#### 通用转发和SDN

- 集中：远程的控制器集中实现控制逻辑
- 远程：数据平面和控制平面的分离

一个不同的(通常是远程)控制器和CA交互，控制器决定分组 转发的逻辑(可编程)，CA所在设备执行逻辑。

- 网络设备数据平面和控制平面分离
- 数据平面-分组交换机
  - 将路由器、交换机和目前大多数网络设备的功能进一步抽象成:按照流表(由控制平面设置的控制逻辑)进行PDU(帧、分组)的动作(包括转发、丢弃、拷贝、泛洪、阻 塞)
  - 统一化设备功能:SDN交换机(分组交换机)，执行控制逻辑
- 控制平面-控制器+网络应用
  - 分离、集中
  - 计算和下发控制逻辑:流表

##### SDN的优点：

- 水平集成控制平面的开放实现(而非私有实 现)，创造出好的产业生态，促进发展
- 集中式实现控制逻辑，网络管理容易:
- 基于流表的匹配+行动的工作方式允许“可 编程的”分组交换机

## Chapter5:

### 路由选择算法

汇集树(sink tree): 

- 此节点到所有其它节点的最优路径形成的树
- 路由选择算法就是为所有路由器找到并使用汇集树

##### 路由选择算法的原则：

- 正确性（correctness）：算法必须是正确的和完整的,使分组一站一站接力，正确发向目标站;完整:目标所有的站地址，在路由表中都能找到相应的表项;没有处理不 了的目标站地址;
- 简单性(simplicity):算法在计算机上应简单:最优但复杂的算法，时间上延迟很大，不实用，不应为了获取路由信息增加很多的通信量;
- 健壮性(robustness):算法应能适应通信量和网络拓扑的变化:通信量变化，网络拓扑的变化算法能很快适应; 不向很拥挤的链路发数据，不向断了的链路发送数据;
- 稳定性(stability):产生的路由不应该摇摆
- 公平性(fairness):对每一个站点都公平
- 最优性(optimality):某一个指标的最优，时间上，费用上，等指标，或综合指标;实际上，获取最优的结果代价较高，可以是次优的

算法分类：

- 按区域：
  - 全局：所有路由器都拥有完整拓扑（LS算法）
  - 分布式：路由只知道到邻居路由器的代价，迭代地交换信息（DV算法）
- 按状态：
  - 静态：不能适应网络拓扑和通信量的变化,路由表 是事先计算好的
  - 动态： 能适应网络拓扑和通信量的变化

#### Link State

1. 各点通过各种渠道获得整个网络拓扑, 网络中所有链路 代价等信息(这部分和算法没关系，属于协议和实现)

2. 使用LS路由算法,计算本站点到其它站点的最优路径(汇 集树),得到路由表

3. 按照路由表转发分组

4. 发现相邻节点,获知对方网络地址

   1. 一个路由器上电之后,向所有线路发送HELLO分组
   2. 其它路由器收到HELLO分组,回送应答,在应答分组中,告 知自己的名字(全局唯一)
   3. 在LAN中,通过广播HELLO分组,获得其它路由器的信息, 可以认为引入一个人工节点

5. 测量到相邻节点的代价(延迟,开销)

   1. 通过Hi过去再Hi回来，计算延迟

6. 组装一个LS分组,描述它到相邻节点的代价情况

   1. 自己的名字（唯一标识）
   2. 序号，年龄（TTL）
   3. 列表: 给出它相邻节点,和它到相邻节点的延迟

7. 将分组通过扩散的方法发到所有其它路由器

   1. 顺序号: 用于控制无穷的扩散,每个路由器都记录( 源路由器,顺序号),发现重复的或老的就不扩散
   2. 利用年龄（TTL）解决顺序号出错等问题
   3. 扩散分组的数据结构：
      1. Source :从哪个节点收到LS分组
      2. Seq,Age:序号,年龄
      3. Send flags:发送标记,必须向指定的哪些相邻站点转发LS分组
      4. ACK flags:本站点必须向哪些相邻站点发送应答
      5. DATA:来自source站点的LS分组
      6. 节点B的数据结构

8. 通过Dijkstra算法找出最短路径(这才是路由算法)

   ![截屏2021-12-25 下午8.06.49](/Users/ian_zhao_29/Library/Application Support/typora-user-images/截屏2021-12-25 下午8.06.49.png)

   1. Algorithm complexity: n nodes
      1. Each iteration: need to check all nodes, w, not in N
      2. n(n+1)/2 comparisons: O(n^2)
      3. more efficient implementations possible: O(nlogn)
   2. Oscillations possible:
      1. support link cost equals amount of carried traffic

#### Distance Vector（距离矢量路由选择）:

- 动态路由算法之一
- 距离矢量路由选择的基本思想：
  - 各路由器维护一张路由表
  - 各路由器与相邻路由器交换路由表
  - 根据获得的路由信息,更新路由表
- 代价及相邻节点间代价的获得
  - 跳数(hops), 延迟(delay),队列长度
  - 相邻节点间代价的获得:通过实测
- 路由信息的更新
  - 根据实测 得到本节点A到相邻站点的代价(如:延迟)
  - 根据各相邻站点声称它们到目标站点B的代价
  - 计算出本站点A经过各相邻站点到目标站点B的代价
  - 找到一个最小的代价，和相应的下一个节点Z，到达节点 B经过此节点Z，并且代价为A-Z-B的代价

![截屏2021-12-25 下午8.19.58](/Users/ian_zhao_29/Library/Application Support/typora-user-images/截屏2021-12-25 下午8.19.58.png)

##### 距离矢量算法

Bellman-Ford 方程(动态规划)

![截屏2021-12-25 下午8.49.50](/Users/ian_zhao_29/Library/Application Support/typora-user-images/截屏2021-12-25 下午8.49.50.png)

![截屏2021-12-25 下午8.51.46](/Users/ian_zhao_29/Library/Application Support/typora-user-images/截屏2021-12-25 下午8.51.46.png)

核心思路:

- 每个节点都将自己的距离矢量估计值传送给邻居，定时或者DV有变化时，让对方去算

- 当x从邻居收到DV时，自己运算，更新它自己的距离矢量

  ![截屏2021-12-25 下午8.53.42](/Users/ian_zhao_29/Library/Application Support/typora-user-images/截屏2021-12-25 下午8.53.42.png)

- Dx(y)估计值最终收敛于实际的最小代价值dx(y)

  ![截屏2021-12-25 下午8.55.02](/Users/ian_zhao_29/Library/Application Support/typora-user-images/截屏2021-12-25 下午8.55.02.png)

  

水平分裂算法：

在Bellman-Ford的基础上

- C知道要经过B才能到达A，所以C向B报告它到A的距离 为INF;C 告诉D它到A的真实距离
- 水平分裂的问题:在某些拓扑形式下会失败(存在环路)

LS 和 DV 算法的比较

- 消息复杂度：DV胜出
- 收敛时间：LS胜出
- 健壮性：LS胜出

### RIP（Routing Information Protocol）

- DV算法
  - 距离矢量:每条链路cost=1，# of hops (max = 15 hops) 跳数
  - DV每隔30秒和邻居交换DV，通告
    - 定期，而且在改变路由的时候发送通告报文
    - 在对方的请求下可以发送通告报文
  - 每个通告包括:最多25个目标子网
    - 目标网络（最多25）+跳数（最多16）
- 如果180秒没有收到通告信息-->邻居或者链路失效
  - 发现经过这个邻居的路由已失效
  - 新的通告报文会传递给邻居
  - 邻居因此发出新的通告 (如果路由变化的话)
  - 链路失效快速(?)地在整网中传输
  - 使用毒性逆转(poison reverse)阻止ping-pong回路 ( 不可达的距离:跳数无限 = 16 段)
- RIP以应用进程的方式实现:route-d (daemon)
- 通告报文通过UDP报文传送，周期性重复
- 网络层的协议使用了传输层的服务，以应用层实体的方式实现

RIP是应用层协议

### OSPF（Open Shortest Path First）

- 使用LS算法
- OSPF通告信息中携带:每一个邻居路由器一个表项
- 通告信息会传遍AS全部(通过泛洪)
  - 通告信息会传遍AS全部(通过泛洪)
- 安全: 所有的OSPF报文都是经过认证的 (防止恶意的攻击)
- 允许有多个代价相同的路径存在 (在RIP协议中只有一个)
- 对于同一条链路，可以有不同的权重
- 对单播和多播的集成支持
- 在大型网络中支持层次性OSPF

![截屏2021-12-25 下午9.18.45](/Users/ian_zhao_29/Library/Application Support/typora-user-images/截屏2021-12-25 下午9.18.45.png)

- 2个级别的层次性: 本地, 骨干
  - 链路状态通告仅仅在本地区域Area范围内进行
  - 每一个节点拥有本地区域的拓扑信息;
    - 关于其他区域，知道去它的方向，通过区域边界路由器(最短路径)
- 区域边界路由器: “汇总(聚集)”到自己区域 内网络的距离, 向其它区域边界路由器通告.
- 骨干路由器: 仅仅在骨干区域内，运行OSPF路由
- 边界路由器: 连接其它的AS’s.

### BGP

#### 层次路由

平面路由的问题：

1. 规模巨大的网络中，路由信 息的存储、传输和计算代价巨大
2. 不同的网络所有者希望按照自己的方式管理网络

层次路由:将互联网 分成一个个AS(路由器 区域)

- AS内部路由:在同一个AS 内路由器运行相同的路由协议
- AS间运行AS间路由协议

BGP (Border Gateway Protocol): 自治区域间路由协议“事实上的”标准

- eBGP: 从相邻的ASes那里获得子网可达信息
- iBGP: 将获得的子网可达信息传遍到AS内部的所有路由器
- 根据子网可达信息和策略来决定到达子网的“好”路径（Policy based Routing）

BGP会话:2个BGP路由器(“peers”)在一个半永久的TCP连接上交换BGP报文:

- 通告向不同目标子网前缀的“路径”(BGP是一个“路径矢量”协议)

-  当通告一个子网前缀时，通告包括 BGP 属性
  - prefix + attributes = “route”
- 2个重要的属性:
  - AS-PATH: 前缀的通告所经过的AS列表: AS 67 AS 17
    - 检测环路;多路径选择
    - 在向其它AS转发时，需要将自己的AS号加在路径上
  - NEXT-HOP: 从当前AS到下一跳AS有多个链路，在NETX-HOP属性中，告诉对方通过那个 I 转发.
- 基于策略的路由,自由选择下一跳

使用TCP协议交换BGP报文.

## Chapter 6：

### 链路层：

- 第二层协议数据单元帧frame ，封装数据报

- 数据报(分组)在不同的 链路上以不同的链路协议传送:
  - 第一跳链路:以太网
  - 中间链路:帧中继链路
  - 最后一跳802.11 :
- 不同的链路协议提供不同的服务

#### 链路层服务：

- 成帧，链路接入:
  - 将数据报封装在帧中，加上帧头、帧尾部
  - 如果采用的是共享性介质，信道接入获得信道访问权
  - 在帧头部使用“MAC”(物理)地址来标示源和目的
- 在(一个网络内)相邻两个节点完成可靠数据传递
- 流量控制:
  - 使得相邻的发送和接收方节点的速度匹配
- 错误检测:
  - 差错由信号衰减和噪声引起
  - 接收方检测出的错误:
- 差错纠正: 接收端检查和纠正bit错误，不通过重传来纠正错误
- 半双工和全双工:
  - 半双工:链路可以双向传输，但一次只有一个方向

### 差错检测和纠正

EDC=差错检测和纠正位(冗余位)

D =数据由差错检测保护，可以包含头部字段

错误检测不是100%可靠的!

- 协议会漏检一些错误，但是很少
- 更长的EDC字段可以得到更好的检测和纠正效果

#### 奇偶校验：

- 单bit奇偶校验： 检查单个bit级错误
- 二维奇偶校验：检查和纠正单个bit错误

#### CRC校验和

![截屏2021-12-25 下午10.02.40](/Users/ian_zhao_29/Library/Application Support/typora-user-images/截屏2021-12-25 下午10.02.40.png)

![截屏2021-12-25 下午10.05.36](/Users/ian_zhao_29/Library/Application Support/typora-user-images/截屏2021-12-25 下午10.05.36.png)

![截屏2021-12-25 下午10.06.17](/Users/ian_zhao_29/Library/Application Support/typora-user-images/截屏2021-12-25 下午10.06.17.png)

### 多点访问协议

MAC协议分类：

- 信道划分
  - 把信道划分成小片(时间、频率、编码)
  - 分配片给每个节点专用
- 随机访问
  - 信道不划分，允许冲突
  - 冲突后恢复
- 依次轮流
  - 节点依次轮流
  - 但是有很多数据传输的节点可以获得较长的信道使用权

#### 信道划分：

1. TDMA：信道的时间被分为周期，每个站点只能使用固定的周期
2. FDMA：信道的频率被分为频段，每个站点只能使用分配的频段
3. CDMA：所有站点在整个频段上同时传输，采用不同的编码原理

#### 随机访问：

- 时隙ALOHA：假设所有帧等长，时间被分为时隙，每个时隙可以发送一帧，节点只能在时隙开始时发送帧。当节点获取新的帧，在下一个时隙传输，传输时没检测到冲突，成功；检测到冲突，失败，节点在每一个随后的时隙以概率P重发直到成功。

  - 优点：节点可以使用全信道带宽，仅需要节点之间在时隙上同步，简单
  - 缺点： 存在冲突，浪费时隙。

- ALOHA：当帧需要传输：马上传输；同时冲突概率增加一倍

- CSMA：先侦听信道，若空闲就传整个帧，如果忙就推迟；但是由于传播延时，两个节点有一定间隔，可能听不到正在进行传输的帧。

- CSMA/CD：在CSMA基础上，在发送过程中进行冲突检测，若检测到冲突，过随机一段时间后重发

  ![截屏2021-12-25 下午10.19.56](/Users/ian_zhao_29/Desktop/截屏2021-12-25 下午10.19.56.png)

  ![截屏2021-12-25 下午10.20.47](/Users/ian_zhao_29/Library/Application Support/typora-user-images/截屏2021-12-25 下午10.20.47.png)

- CSMA/CA

#### 轮流协议

- 主从模式
- 令牌传递

### LANs

MAC地址像身份证号，唯一且不变

IP地址像家庭住址，动态改变

MAC地址在平面上传输

IP地址是层级结构的

问题:已知B的IP地址，如何 确定B的MAC地址?

- 在LAN上的每个IP节 点都有一个ARP表
- ARP表:包括一些 LAN节点IP/MAC地址的映射< IP address; MAC address; TTL>

ARP协议：在同一个LAN (网络)

- A要发送帧给B(B的IP地址已知)， 但B的MAC地址不在A的ARP表中
- A广播包含B的IP地址的 ARP查询包
  - Dest MAC address = FF-FF-FF-FF-FF-FF
  - LAN上的所有节点都会收到 该查询包
- B接收到ARP包，回复A自己的MAC地址
- A在自己的ARP表中，缓存IP-to-MAC映射关系

#### 以太网

发送方适配器在以太网帧中封装IP数据报， 或其他网络层协议数据单元

- 地址：源MAC地址，目标MAC地址
- 类型：指出高层协，大多为IP
- CRC

以太网：无连接、不可靠

- 无连接:帧传输前，发送方和接收方之间没有握手
- 不可靠:接收方适配器不发送ACKs或NAKs给发送方
- 以太网的MAC协议:采用二进制退避的CSMA/CD介质访问控制形式

#### 交换机：

- 链路层设备:扮演主动角色(端口执行以太网协议)
  - 对帧进行存储和转发
  - 对于到来的帧，检查帧头，根据目标MAC地址进行选择性转发
  - 当帧需要向某个(些)网段进行转发，需要使用CSMA/CD进行接入控制
  - 通常一个交换机端口一个独立网段
- 透明:主机对交换机的存在可以不关心
  - 通过交换机相联的各节点好像这些站点是直接相联的一样
  - 有MAC地址;无IP地址
- 即插即用，自学习:
  - 交换机无需配置

## Chapter 8

### Wireless networks

Wireless networks are computer networks that are not connected by cables of any kind.

The use of a wireless network enables to avoid the costly process of introducing cables for connection between different equipment at different locations.

Wireless networks use radio waves to connect devices such as laptops to the Internet	

- Wireless hosts: As in the case of wired networks, hosts are the endsystem devices that run applications. A wireless host might be a laptop, palmtop, smartphone
- Wireless links: A host connects to a base station or to another wireless host through a wireless communication link.

#### Base Station:

The base station is a key part of the wireless network infrastructure.

Unlike the wireless host and wireless link, a base station has no obvious counterpart in a wired network.

A base station is responsible for sending and receiving data (e.g., packets) to and from a wireless host.

#### There are four main types of wireless networks:

- Wireless Local Area Network(LAN): Links two or more devices using a wireless distribution method, providing a connection through access points to the wider Internet.
- Wireless Metropolitan Area Networks(MAN): Connects several wireless LANs.
- Wireless Wide Area Network(WAN): Covers large areas such as neighboring towns and cities.
- Wireless Personal Area Network(PAN): Covers large areas such as neighboring towns and cities.

### Security

- Confidentiality: Only the sender and intended receiver should be able to understand the contents of the transmitted message.
- Message integrity: Alice and Bob want to ensure that the content of their communication is not altered, either maliciously or by accident, in transit.
- End-point authentication: Both the sender and receiver should be able to confirm the identity of the other party involved in the communication— to confirm that the other party is indeed who or what they claim to be

#### Firewall

A firewall allows a network administrator to control access between the outside world and resources within the administered network by managing the traffic flow to and from these resources.

#### Access Control:

Not every person should have complete allowance to the accessibility to the network or its data.

#### Antivirus and Anti-malware Software:

This type of network security ensures that any malicious software does not enter the network and jeopardize the security of the data. 

#### Cloud Security

#### Type of Unsafe:

- Virus: A virus is a malicious, downloadable file that can lay dormant that replicates itself by changing other computer programs with its own code. Once it spreads those files are infected and can spread from one computer to another, and/or corrupt or destroy network data
- Worms: Can slow down computer networks by eating up bandwidth as well as the slow the efficiency of your computer to process data. 
- Trojan: A trojan is a backdoor program that creates an entryway for malicious users to access the computer system by using what looks like a real program, but quickly turns out to be harmful. A trojan virus can delete files.
- Spyware: Much like its name, spyware is a computer virus that gathers information about a person or organization without their express knowledge and may send the information gathered to a third party without the consumer’s consent
- Adware: Can redirect the search requests to advertising websites and collect marketing data about you in the process so that customized advertisements will be displayed based on your search and buying history

### 两种加密

- 对称加密：发送方和接收方用相同的密钥加密和解密
- 公钥加密：发送方用公钥加密，接收方用私钥解密，公钥满天飞，私钥自己保存

