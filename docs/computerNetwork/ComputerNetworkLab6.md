# Computer Network Lab 6

Jian Wei Zhao 19105207 831903229

## 1. Select the first ICMP Echo Request message sent by your computer, and expand the Internet Protocol part of the packet in the packet details window. What is the IP address of your computer?

![截屏2021-12-09 上午9.37.03](/Users/ian_zhao_29/Library/Application Support/typora-user-images/截屏2021-12-09 上午9.37.03.png)

My IP Address is `172.17.170.58`

## 2. Within the IP packet header, what is the value in the upper layer protocol field?

Protocol: `ICMP`

## 3. How many bytes are in the IP header? How many bytes are in the payload of the IP datagram? Explain how you determined the number of payload bytes

`52` Bytes. The total length is `72` Bytes and the Header is `20` Bytes. So the payload length is 72 - 20 = `52` Bytes.

## 4. Has this IP datagram been fragmented? Explain how you determined whether or not the datagram has been fragmented.

`NO`, because the fragmented offset is `0`, so the IP datagram been fragmented.

## 5. Which fields in the IP datagram always change from one datagram to the next within this series of ICMP messages sent by your computer? Why?

![截屏2021-12-09 上午9.56.26](/Users/ian_zhao_29/Library/Application Support/typora-user-images/截屏2021-12-09 上午9.56.26.png)

The `Identification` and `Header Checksum` always change; Because each time this website sent me 3 packet, each packet is seperated by the identification, and the checksum away contain the identification value. So they always change;

## 6. Which fields stay constant? Why?

`Time to live` stay constant, because they are sent in the same time;

## 7.  Describe the pattern you see in the values in the Identification field of the IP datagram.

Their Identification are `nested` to each other.

## 8. What is the value in the Identification field and the TTL field?

`Identification: 0xdb80 (56192)`

`Time to Live: 51`

## 9. Do these values remain unchanged for all of the ICMP TTL-exceeded replies sent to your computer by the nearest (first hop) router? Why?

`No`, Because it always continue to sending message though it has time exceed.

![截屏2021-12-09 上午10.32.05](/Users/ian_zhao_29/Library/Application Support/typora-user-images/截屏2021-12-09 上午10.32.05.png)

## 10. Find the first ICMP Echo Request message that was sent by your computer after you changed the Packet Size to be 2000. Has that message been fragmented across more than one IP datagram? [Note: if you find your packet has not been fragmented, you should download the zip file http://gaia.cs.umass.edu/wireshark- labs/wireshark-traces.zip and extract the ip-ethereal-trace-1packet trace. If your computer has an Ethernet interface, a packet size of 2000 should cause fragmentation.2] To find the fragmented IP datagrams you will need to first use ‘ICMP’ in the filter to find the ICMP message, then note the packet number, then turn off the filter and look at the surrounding packets.

![截屏2021-12-09 上午10.20.18](/Users/ian_zhao_29/Library/Application Support/typora-user-images/截屏2021-12-09 上午10.20.18.png)

`That message been fragmented across more than one IP datagram` since the `Fragment Offset: 1480`

## 11. Print out the first fragment of the fragmented IP datagram. What information in the IP header indicates that the datagram been fragmented? What information in the IP header indicates whether this is the first fragment versus a latter fragment? How long is this IP datagram?

![截屏2021-12-09 上午10.32.56](/Users/ian_zhao_29/Library/Application Support/typora-user-images/截屏2021-12-09 上午10.32.56.png)

The `Fragment Offset` in the IP header indicates that the datagram been fragmented.

![截屏2021-12-09 上午10.57.28](/Users/ian_zhao_29/Desktop/截屏2021-12-09 上午10.57.28.png)

We can identify it by checking the flags, with `Don't Fragment` and ` More fragments`.

1480 + 548 - 20 - 8 = 2000;

## 12. Print out the second fragment of the fragmented IP datagram. What information in the IP header indicates that this is not the first datagram fragment? Are there more fragments? How can you tell?

![截屏2021-12-09 上午11.01.42](/Users/ian_zhao_29/Library/Application Support/typora-user-images/截屏2021-12-09 上午11.01.42.png)

It is not the first because: `...0 0101 1100 1000 = Fragment Offset: 1480`

No, Because: `..0. .... = More fragments: Not set`.

## 13. What fields change in the IP header between the first and second fragment?

`Flags and Fragment Offset.`

## 14. How many fragments were created from the original datagram?

`3`

![截屏2021-12-09 上午11.07.19](/Users/ian_zhao_29/Library/Application Support/typora-user-images/截屏2021-12-09 上午11.07.19.png)

## 15. What fields change in the IP header among the fragments?

`Flags and Fragment Offset.`

## 16. Have a look through your wireshark capture and find a UDP segment. Look at the IP datagram that encapsulates it. What is different from the previous datagrams you were looking at in this lab?

They have different Protocol: `Protocol: UDP (17)`

## 17. Repeat 16 for a TCP segment.

They have different Protocol: `Protocol: TCP (6)`.