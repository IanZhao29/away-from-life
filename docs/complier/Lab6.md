---
title: 编译原理Lab6
date: 2021-12-7
description: 编译原理Lab6
categories:
- 编译原理
- 实验
- 基础知识
- 大三上
tags:
- c
- 代码
- 编程
---
# Lab 6
Jian Wei Zhao 831903229 19105207

## Exercise 1:

|                  |   First   |  follow   |
| :--------------: | :-------: | :-------: |
|     S -> AB      | {a, b, ɛ} |   {\$}    |
|   A -> Ca \| ɛ   | {a, b, ɛ} | {a, b, $} |
|     B -> CB'     | {a, b, ɛ} |    {$}    |
| B' -> aACB' \| ɛ |  {a, ɛ}   |    {$}    |
|   C -> b \| ɛ    |  {b, ɛ}   |  {a, $}   |

## Exercise 2:

|                                       |   First   |  follow   |
| :-----------------------------------: | :-------: | :-------: |
|           expr -> term rest           |   {id}    |    {$}    |
| rest -> +term rest \| -term rest \| ɛ | {+, -, ɛ} |    {$}    |
|              term -> id               |   {id}    | {+, -, $} |

recursive-descent LL(1) parser with c11:

```c
#include <stdio.h>

int expr(void);
int rest(void);
int term(void);

int word;
int words;

char p[20][20];
char ch;
int i = 0;
int j = 0;
int inword;

int main(void)
{
    while((ch=getchar())!='\n')
    {
        if(ch==' ')
        {
            if(inword ==1) {
                p[j][i]='\0';
                j++;
                i=0;
                inword = 0;
            }
        }else
        {
            if(ch == '+'||ch=='-') {
                if(inword==1) {
                    p[j][i]='\0';
                    j++;
                    i=0;
                }
                p[j][i]=ch;
                p[j][i+1]='\0';
                j++;
                i=0;
                inword = 0;
            }else if(ch == '$') {
                if(inword == 1) {
                    p[j][i]='\0';
                    j++;
                    i=0;
                }
                p[j][i]=ch;
                p[j][i+1]='\0';
            }else {
                inword = 1;
                p[j][i] = ch;
                p[j][i+1] = '\0';
                i++;
            }
        }
    }
    word=0;
    words = 0;
    if(p[words][word]=='$') {
        printf("Accept!");
    }
    if(expr()!=1) {
        printf("Reject!");
    }else {
        if(p[words-1][word]=='$') {
            printf("Accept!");
        }else {
            printf("Reject!");
        }
    }
    return 0;
}

int expr (){
    if(term()==1) {
        if(rest()==1) {
            return 1;
        }
    }
    return 0;
};

int term() {
    if(p[words][0]>='0'&&p[words][0]<='9') {
        return 0;
    }
   for(word=0; p[words][word]!='\0'; word++) {
       if(!((p[words][word]>='a'&&p[words][word]<='z')||(p[words][word]>='A'&& p[words][word]<='Z')||p[words][word]=='_'||(p[words][word]>='0'&& p[words][word]<='9'))) {
           return 0;
       }
   }
   words++;
   word=0;
   return 1;
}
//ads - ad +sa-sd -as $
int rest() {
    if(p[words][word]!='+'&&p[words][word]!='-') {
        word=0;
        words++;
        return 1;
    }else {
        word=0;
        words++;
        return expr();
    }
}
```

## Exercise 3

|          | First |      follow      |
| :------: | :---: | :--------------: |
| E -> TQ  | (, id |       ), $       |
| Q -> +TQ |   +   |       ), $       |
| Q -> -TQ |   -   |       ), $       |
|  Q -> ɛ  |   ɛ   |       ), $       |
| T -> FR  | (, id |    +,-, ), $     |
| R -> *FR |   *   |    +, -, ), $    |
| R -> /FR |   /   |    +, -, ), $    |
|  R -> ɛ  |   ɛ   |    +, -, ), $    |
| F -> (E) |   (   |  *, /, +, -), $  |
| F -> id  |  id   | *, /, +, -, ), $ |

Parsing Table:

|      |   id    |    +     |    -     |    *     |    /     |    (     |   )    |   $    |
| :--: | :-----: | :------: | :------: | :------: | :------: | :------: | :----: | :----: |
|  E   | E -> TQ |          |          |          |          | E -> TQ  |        |        |
|  Q   |         | Q -> +TQ | Q -> -TQ |          |          |          | Q -> ɛ | Q -> ɛ |
|  T   | T -> FR |          |          |          |          | T -> FR  |        |        |
|  R   |         |  R -> ɛ  |  R -> ɛ  | R -> *FR | R -> /FR |          | R -> ɛ | R -> ɛ |
|  F   | F -> id |          |          |          |          | F -> (E) |        |        |

## Exercise 4

|          | First | follow |
| :------: | :---: | :----: |
| Z -> XYZ | a, b  |   $    |
|  Z -> d  |   d   |   $    |
|  Y -> c  |   c   |  d, e  |
|  Y -> ɛ  |   ɛ   |  d, e  |
|  X -> a  |   a   |  c, d  |
| X -> bYe |   b   |  c, d  |

Parsing Table:

|      |    a     |    b     |   c    |   d    |   e    |   $    |
| :--: | :------: | :------: | :----: | :----: | :----: | :----: |
|  Z   | Z -> XYZ | Z -> XYZ | Y -> c | Z -> d |        |        |
|  X   |  X -> a  | X -> bYe |        |        |        |        |
|  Y   |          |          |        | Y -> ɛ | Y -> ɛ | Y -> ɛ |

