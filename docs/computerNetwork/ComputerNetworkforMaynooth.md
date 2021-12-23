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

11. 

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

#### 无连接（UDP）多路解复用

