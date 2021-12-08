# C Primer Plus 6 第十四章编程练习题答案

Jian Wei Zhao 831903229 19105207

## 1. 

```c
#include <stdio.h>
#include <string.h>
#include <ctype.h>
#define LEN 12

struct month
{
    char name[10];
    char abbrev[4];
    int days;
    int monumb;
};

const struct month months[LEN] =
        {
                {"January", "Jan", 31, 1},
                {"February", "Feb", 28, 2},
                {"March", "Mar", 31, 3},
                {"April", "Apr", 30, 4},
                {"May", "May", 31, 5},
                {"June", "Jun", 30, 6},
                {"July", "Jul", 31, 7},
                {"August", "Aug", 31, 8},
                {"September", "Sep", 30, 9},
                {"October", "Oct", 31, 10},
                {"November", "Nov", 30, 11},
                {"December", "Dec", 31, 12}
        };

int days(char *name);

int main(void)
{
    int daytotal;
    char input[LEN];

    printf("Please enter the name of a month (q to quit): ");
    while (scanf("%11s", input) == 1 && input[0] != 'q')
    {
        daytotal = days(input);
        if (daytotal > 0)
        {
            printf("There are %d days through %s.\n", daytotal, input);
        }
        else
        {
            printf("%s isn't a valid month!\n", input);
        }
        printf("You can enter again (q to quit): ");
        while (getchar() != '\n')
            continue;
    }
    printf("Done.\n");

    return 0;
}

int days(char *name)
{
    int i = 1;
    int num = 0;
    int total = 0;

    name[0] = toupper(name[0]);
    while (name[i] != '\0')
    {
        name[i] = tolower(name[i]);
        i++;
    }
    for (i = 0; i < LEN; i++)
    {
        if (0 == strcmp(name, months[i].name)) //查找用户输入的月份名是否存在;
        {
            num = months[i].monumb;
            break;
        }
    }
    if (num == 0)
    {
        total = -1; //用户输入不合法则总天数置为-1;
    }
    else
    {
        for (i = 0; i < num; i++)
        {
            total += months[i].days; //累加至用户输入月份的天数;
        }
    }
    return total;
}
```

## 2.

```c
#include <stdio.h>
#include <ctype.h>
#include <stdlib.h>
#include <string.h>
#define  LEN 12

struct month {
    char name[10];
    char abbr[3];
    int days;
    int monumb;
};

struct month months[12] = {
        {"January", "Jan", 31, 1},
        {"February", "Feb", 28, 2},
        {"March", "Mar", 31, 3},
        {"April", "Apr", 30, 4},
        {"May", "May", 31, 5},
        {"June", "Jun", 30, 6},
        {"July", "Jul", 31, 7},
        {"August", "Aug", 31, 8},
        {"September", "Sep", 30, 9},
        {"October", "Oct", 31, 10},
        {"November", "Nov", 30, 11},
        {"December", "Dec", 31, 12}
};

void isLeapYear(int);
int days_result(char *, int);

int main(void) {
    int days;
    char monthName[LEN];
    int year;
    int val;
    printf("Please enter day, month and year (q to quit): \n");
    while(scanf("%d %11s %d", &days, monthName, &year) == 3) {
        isLeapYear(year);

        val = days_result(monthName, days);
        if(val > 0) {
            printf("There are %d days from the beginning of %d to %s %d\n", val, year, monthName, days);
        }else {
            printf("You entered invalid datas!\n");
        }
    }
    return 0;
}

void isLeapYear(int a) {
    if((a%4 == 0 && a % 100 != 0) || a%400==0) {
        months[1].days = 29;
    }
    return;
}

int days_result(char * monthName, int days) {
    int i;
    int temp = atoi(monthName);
    int total = 0;
    if(days < 1 || days > 31) {
        return -1;
    }
    for(i=0; i<LEN; i++) {
        if((temp == months[i].monumb) || (strcmp(monthName, months[i].name)==0) || (strcmp(monthName, months[i].abbr)==0)) {
            if(days > months[i].days) {
                return -1;
            }else {
                return total+days;
            }
        }else {
            total += months[i].days;
        }
    }
    return -1;
}
```

## 3.

```c
/* manybook.c -- multiple book inventory */
#include <stdio.h>
#include <string.h>
char * s_gets(char * st, int n);
#define MAXTITL   40
#define MAXAUTL   40
#define MAXBKS   100              /* maximum number of books  */

struct book {                     /* set up book template     */
    char title[MAXTITL];
    char author[MAXAUTL];
    float value;
};

int main(void)
{
    struct book library[MAXBKS]; /* array of book structures */
    int count = 0;
    int index;

    printf("Please enter the book title.\n");
    printf("Press [enter] at the start of a line to stop.\n");
    while (count < MAXBKS && s_gets(library[count].title, MAXTITL) != NULL
           && library[count].title[0] != '\0')
    {
        printf("Now enter the author.\n");
        s_gets(library[count].author, MAXAUTL);
        printf("Now enter the value.\n");
        scanf("%f", &library[count++].value);
        while (getchar() != '\n')
            continue;          /* clear input line         */
        if (count < MAXBKS)
            printf("Enter the next title.\n");
    }

    if (count > 0)
    {
        printf("Here is the list of your books:\n");
        for (index = 0; index < count; index++)
            printf("%s by %s: $%.2f\n", library[index].title,
                   library[index].author, library[index].value);
        for(int i = 0; i < count-1; i++) {
            for(int j = i+1; j < count; j++) {
                if(strcmp(&library[j].title[0], &library[i].title[0])<0) {
                    struct book a = library[j];
                    library[j] = library[i];
                    library[i] = a;
                }
            }
        }
        for (index = 0; index < count; index++)
            printf("%s by %s: $%.2f\n", library[index].title,
                   library[index].author, library[index].value);
        for(int i = 0; i < count-1; i++) {
            for(int j = i+1; j < count; j++) {
                if(library[j].value < library[i].value) {
                    struct book a = library[j];
                    library[j] = library[i];
                    library[i] = a;
                }
            }
        }
        for (index = 0; index < count; index++)
            printf("%s by %s: $%.2f\n", library[index].title,
                   library[index].author, library[index].value);
    }
    else
        printf("No books? Too bad.\n");

    return 0;
}

char * s_gets(char * st, int n)
{
    char * ret_val;
    char * find;

    ret_val = fgets(st, n, stdin);
    if (ret_val)
    {
        find = strchr(st, '\n');   // look for newline
        if (find)                  // if the address is not NULL,
            *find = '\0';          // place a null character there
        else
            while (getchar() != '\n')
                continue;          // dispose of rest of line
    }
    return ret_val;
}
```

