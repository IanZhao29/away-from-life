---
title: 《C Primer Plus》第十三章代码题
date: 2021-11-23
description: C Primer Plus 部分编程练习代码
categories:
- 基础知识
- 大三上
- c
tags:
- c
- 代码
- 编程
---
# C Primer Plus 第十三章代码题

## 3.

```c
#include <stdio.h>
#include <stdlib.h> // exit() prototype
#include <ctype.h>
#define LEN 512

int main() {
    FILE * file;
    char str[LEN];
    char ch;
    printf("Please input the file address\n");
    scanf("%511s", str);
    if((file=fopen(str, "r+"))==NULL) {
        fprintf(stderr, "Can't open %s\n", str);
        exit(EXIT_FAILURE);
    }
    while((ch= getc(file))!=EOF) {
        fseek(file, -1L, SEEK_CUR);
        putc(toupper(ch),file);
        fseek(file, 0L, SEEK_CUR);
    }
    rewind(file);
    printf("File %s:\n", str);
    while ((ch = getc(file)) != EOF)
    {
        putchar(ch);
        /*↑显示到屏幕上检测
        字符是否成功转换为大写;*/
    }
    putchar('\n');
    if (fclose(file) != 0)
    {
        fprintf(stderr, "Can't close %s\n", str);
    }

    return 0;
}
```

## 4.

```c
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
    int i, temp;
    FILE *source;

    if (argc == 1)
    {
        fprintf(stderr, "Usage: %s filename[s]\n", argv[0]);
        exit(EXIT_FAILURE);
    }
    for (i = 1; i < argc; i++)
    {
        if ((source = fopen(argv[i], "r")) == NULL)
        {
            fprintf(stderr, "Can't open file %s\n", argv[i]);
            continue;
        }
        printf("File %s:\n", argv[i]);
        while ((temp = getc(source)) != EOF)
        {
            putchar(temp);
        }
        putchar('\n');
        if (fclose(source) != 0)
        {
            fprintf(stderr, "Can't close file %s\n", argv[i]);
        }
    }

    return 0;
}
```

## 5. 

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define BUFSIZE 4096
#define SLEN 81

void append(FILE *source, FILE *dest);

int main(int argc, char *argv[])
{
    int i, ch;
    int files = 0;
    FILE *fa;
    FILE *fs;

    if (argc < 3)
    {
        printf("Usage: %s appendfile sourcefile.\n", argv[0]);
        exit(EXIT_FAILURE);
    }
    if ((fa = fopen(argv[1], "a+")) == NULL)
    {
        fprintf(stderr, "Can't open %s\n", argv[1]);
        exit(EXIT_FAILURE);
    }
    if (setvbuf(fa, NULL, _IOFBF, BUFSIZE) != 0)
    {
        //↑设置缓冲区大小为BUFSIZE;
        //↑_IOFBF表示完全缓冲;
        //↑NULL表示为fa指向的文件分配缓冲区;
        fputs("Can't create output buffer\n", stderr);
        exit(EXIT_FAILURE);
    }
    for (i = 2; i < argc; i++)
    {
        if (strcmp(argv[i], argv[1]) == 0)
        {
            fputs("Can't append file to itself\n", stderr);
            //↑防止文件自身附加在文件末尾;
        }
        else if ((fs = fopen(argv[i], "r")) == NULL)
        {
            fprintf(stderr, "Can't open %s\n", argv[i]);
        }
        else
        {
            if (setvbuf(fs, NULL, _IOFBF, BUFSIZE) != 0)
            {
                //↑同上一个setvbuf函数所述;
                //↑本次调用是为fs指向的文件分配缓冲区;
                fputs("Can't create input buffer\n", stderr);
                continue;
            }
            append(fs, fa);
            if (ferror(fs) != 0)
            {
                /*↑当读或写出现错误
                ferror函数返回一个非0值*/
                fprintf(stderr, "Error in reading file %s.\n", argv[i]);
            }
            if (ferror(fa) != 0)
            {
                fprintf(stderr, "Error in writing file %s.\n", argv[1]);
            }
            fclose(fs);
            files++;
            printf("File %s appended.\n", argv[i]);
        }
    }
    printf("Done appending. %d files appended.\n", files);
    rewind(fa); //返回文件起始处;
    printf("%s contents:\n", argv[1]);
    while ((ch = getc(fa)) != EOF)
    {
        putchar(ch);
    }
    putchar('\n');
    puts("Done displaying.");
    fclose(fa);

    return 0;
}

void append(FILE *source, FILE *dest)
{
    size_t bytes;
    static char temp[BUFSIZE];
    //↑静态无链接变量只分配一次内存;

    while ((bytes = fread(temp, sizeof(char), BUFSIZE, source)) > 0)
    {
        /*↑fread函数把source指向的
        文件中的BUFSIZE块char类型的
        数据写入temp数组中,返回值是成功
        读取数据块的数量;*/
        fwrite(temp, sizeof(char), bytes, dest);
        /*↑fwrite函数把temp数组中的
        bytes块char类型的数据写入dest
        指向的文件中,返回值是成功写入数据
        块的数量;*/
    }
    return;
}
```

## 6. 

```c
// reducto.c -- reduces your files by two-thirds!
#include <stdio.h>
#include <stdlib.h>    // for exit()
#include <string.h>    // for strcpy(), strcat()
#define LEN 512

int main()
{
    FILE  *in, *out;   // declare two FILE pointers
    char input[LEN];
    int ch;
    char name[LEN];    // storage for output filename
    int count = 0;

    // check for command-line arguments
    printf("Please enter the address!\n");
    scanf("%512s",input);
    // set up input
    if ((in = fopen(input, "r")) == NULL)
    {
        fprintf(stderr, "I couldn't open the file \"%s\"\n",
                input);
        exit(EXIT_FAILURE);
    }
    printf("1");
    // set up output
    strncpy(name,input, LEN - 5); // copy filename
    name[LEN - 5] = '\0';
    strcat(name,".red");            // append .red
    if ((out = fopen(name, "w")) == NULL)
    {                       // open file for writing
        fprintf(stderr,"Can't create output file.\n");
        exit(3);
    }
    // copy data
    while ((ch = getc(in)) != EOF)
        if (count++ % 3 == 0)
            putc(ch, out);  // print every 3rd char
    // clean up
    in = fopen(name,"r");
    char c;
    while((c= getc(in))!=EOF) {
        putchar(c);
    }
    if (fclose(in) != 0 || fclose(out) != 0)
        fprintf(stderr,"Error in closing files\n");

    return 0;
}
```

## 7.a

```c
// reducto.c -- reduces your files by two-thirds!
#include <stdio.h>
#include <stdlib.h>    // for exit()
#include <string.h>    // for strcpy(), strcat()
#define LEN 512

int main()
{
    FILE * first, * second;
    char fileF[LEN], fileS[LEN];
    char  ch1, ch2;
    printf("Please input the first file name!");
    scanf("%512s", fileF);
    if((first = fopen(fileF, "r"))==NULL){
        printf("Can't open file!");
        exit(EXIT_FAILURE);
    }
    printf("Please input the second file name!");
    scanf("%512s", fileS);
    if((second = fopen(fileS, "r"))==NULL){
        printf("Can't open file!");
        exit(EXIT_FAILURE);
    }
    ch1 = getc(first);
    ch2 = getc(second);
    while (ch1 != EOF || ch2 != EOF)
    {
        while (ch1 != EOF && ch1 != '\n')
        {
            putchar(ch1);
            ch1 = getc(first);
        }
        if (ch1 != EOF)
        {
            putchar('\n');
            ch1 = getc(first); //光标读取至文件1的下一行;
        }
        while (ch2 != EOF && ch2 != '\n')
        {
            putchar(ch2);
            ch2 = getc(second);
        }
        if (ch2 != EOF)
        {
            putchar('\n');
            ch2 = getc(second); //光标读取至文件2的下一行;
        }
    }
    if (fclose(first) != 0)
    {
        fprintf(stderr, "Can't close %s\n", fileF);
    }
    if (fclose(second) != 0)
    {
        fprintf(stderr, "Can't close %s\n", fileS);
    }
    return 0;
}

```

## 7.b

```c
// reducto.c -- reduces your files by two-thirds!
#include <stdio.h>
#include <stdlib.h>    // for exit()
#include <string.h>    // for strcpy(), strcat()
#define LEN 512

int main()
{
    FILE * first, * second;
    char fileF[LEN], fileS[LEN];
    char  ch1, ch2;
    printf("Please input the first file name!");
    scanf("%512s", fileF);
    if((first = fopen(fileF, "r"))==NULL){
        printf("Can't open file!");
        exit(EXIT_FAILURE);
    }
    printf("Please input the second file name!");
    scanf("%512s", fileS);
    if((second = fopen(fileS, "r"))==NULL){
        printf("Can't open file!");
        exit(EXIT_FAILURE);
    }
    ch1 = getc(first);
    ch2 = getc(second);
    while (ch1 != EOF || ch2 != EOF)
    {
        while (ch1 != EOF && ch1 != '\n')
        {
            putchar(ch1);
            ch1 = getc(first);
        }
        if (ch1 != EOF)
        {
            ch1 = getc(first); //光标读取至文件1的下一行;
        }
        while (ch2 != EOF && ch2 != '\n')
        {
            putchar(ch2);
            ch2 = getc(second);
        }
        if (ch2 != EOF)
        {
            putchar('\n');
            ch2 = getc(second); //光标读取至文件2的下一行;
        }
    }
    if (fclose(first) != 0)
    {
        fprintf(stderr, "Can't close %s\n", fileF);
    }
    if (fclose(second) != 0)
    {
        fprintf(stderr, "Can't close %s\n", fileS);
    }
    return 0;
}
```

## 8.

```c
// reducto.c -- reduces your files by two-thirds!
#include <stdio.h>
#include <stdlib.h>    // for exit()
#include <string.h>    // for strcpy(), strcat()
#define LEN 512

void count(char c, const char *str);

int main(int argc, char *argv[])
{
    char key;
    char str[LEN];
    int i;
    if(argc<2) {
        printf("Please give some input!");
        exit(EXIT_FAILURE);
    }
    if(argc==2) {
        key = *argv[1];
        printf("Please input file name: (Press ctrl+D to Quit!)\n");
        while(scanf("%512s",str)) {
            count(key, str);
            printf("Please input file name: (Press ctrl+D to Quit!)\n");
        }
    }else {
        key = *argv[1];
        for(i=2;i<argc;i++) {
            count(key,argv[i]);
        }
    }
    return 0;
}

void count(char c, const char * str) {
    FILE * file;
    char read;
    int count;
    if((file = fopen(str,"r")) ==NULL) {
        printf("Can't open file!");
        return;
    }
    count = 0;
    while((read= getc(file))!=EOF) {
        if(read == c)
            count++;
    }
    printf("File \"%s\" has %d character %c\n", str, count, c);
    return;
}
```

## 9.

```c
#include <stdio.h>
#include <stdlib.h>
#define MAX 41

int main(void)
{
    FILE *fp;
    int ct = 0;
    char words[MAX];

    if ((fp = fopen("wordy", "a+")) == NULL)
    {
        fprintf(stdout, "Can't open \"wordy\" file.\n");
        exit(EXIT_FAILURE);
    }

    while (fgets(words, MAX, fp) != NULL)
    {
        ct++;
    }
    rewind(fp);
    puts("Enter words to add to the file; press the #");
    puts("key at the beginning of a line to terminate.");
    while ((fscanf(stdin, "%40s", words) == 1) && (words[0] != '#'))
    {
        fprintf(fp, "%-2d : %s\n", ++ct, words);
    }

    puts("File contents:");
    rewind(fp);
    while (fgets(words, MAX, fp) != NULL)
    {
        fputs(words, stdout);
    }
    puts("Done!");
    if (fclose(fp) != 0)
    {
        fprintf(stderr, "Error in closing file\n");
    }

    return 0;
}
```

