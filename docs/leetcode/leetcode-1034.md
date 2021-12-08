# Leetcode 每日一题 1034.边界着色

## 题目内容：

给你一个大小为 m x n 的整数矩阵 grid ，表示一个网格。另给你三个整数 row、col 和 color 。网格中的每个值表示该位置处的网格块的颜色。

两个网格块属于同一 连通分量 需满足下述全部条件：

两个网格块颜色相同
在上、下、左、右任意一个方向上相邻
连通分量的边界 是指连通分量中满足下述条件之一的所有网格块：

在上、下、左、右四个方向上与不属于同一连通分量的网格块相邻
在网格的边界上（第一行/列或最后一行/列）
请你使用指定颜色 color 为所有包含网格块 grid[row][col] 的 连通分量的边界 进行着色，并返回最终的网格 grid 。

### 示例1:

```away
输入：grid = [[1,1],[1,2]], row = 0, col = 0, color = 3
输出：[[3,3],[3,2]]
```

### 示例2:

```away
输入：grid = [[1,2,2],[2,3,2]], row = 0, col = 1, color = 3
输出：[[1,3,3],[2,3,3]]
```

### 示例3:

```away
输入：grid = [[1,1,1],[1,1,1],[1,1,1]], row = 1, col = 1, color = 2
输出：[[2,2,2],[2,1,2],[2,2,2]]
```

### 提示：

- m == grid.length
- n == grid[i].length
- 1 <= m, n <= 50
- 1 <= grid[i][j], color <= 1000
- 0 <= row < m
- 0 <= col < n

不得不说， Leetcode的这个翻译还没有谷歌翻译的好。。

有大神看了英文原版画了个图才让我看懂了

<img src="https://pic.leetcode-cn.com/1638844576-eMoMQJ-IMG_0307(20211207-103545).PNG">

## 我的题解

很简单的一个DFS遍历所有格子，然后筛选出符合条件的颜色并且染色

方法都懂，就是些写不出来。。

自己写了几次优点小失败，然后看了别人写的就可以了，我写不成的原因是：

- 筛选条件写的有问题，应该让所有的方向一同检查，而不是嵌套检查

而且我之前打算用一个mask数组先记录原来的颜色，防止先涂色的结果影响后涂色的单位，但是看了别人的题解可以只记录起始点的颜色，因为是dfs，不需要担心颜色改变影响。

```javascript
/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
 
var colorBorder = function(grid, row, col, color) {
  var originalColor = grid[row][col];
  const visit = new Set();
  var dfs = function(row, col) {
    //检查是不是边界
    if(row<0||col<0||row>=grid.length||col>=grid[0].length) {
      return true;
    }
    const position = row*grid[0].length+col;
    //如果已经遍历过这个点
    if(visit.has(position)) {
      return false;
    }
    //检查四个方向有没有不一样的颜色;
    if(originalColor !== grid[row][col]) {
      return true;
    }
    visit.add(position);
    //递归检查是不是边界
    var isComponent = false;
    if(dfs(row+1, col)) {
      isComponent = true;
    }
    if(dfs(row, col+1)) {
      isComponent = true;
    }
    if(dfs(row-1, col)) {
      isComponent = true;
    }
    if(dfs(row, col-1)) {
      isComponent = true;
    }
    if(isComponent) {
      grid[row][col] = color;
    }
    return false;
  }
  dfs(row, col);
  return grid;
}
```

执行用时：84 ms, 在所有 JavaScript 提交中击败了86.05%的用户

内存消耗：40.6 MB, 在所有 JavaScript 提交中击败了97.67%的用户

## 官方题解：

官方也只给了BFS和DFS。。

DFS：

```javascript
var colorBorder = function(grid, row, col, color) {
    const m = grid.length, n = grid[0].length;//记录长宽方便使用
    const visited = new Array(m).fill(0).map(() => new Array(n).fill(0));//防止死循环，记录走过的位置
    const borders = [];//储存边界元素;
    const originalColor = grid[row][col];//记录初始位置的颜色
    visited[row][col] = true;//讲初始位置标记走过
    dfs(grid, row, col, visited, borders, originalColor);
    for (let i = 0; i < borders.length; i++) {
        const x = borders[i][0], y = borders[i][1];
        grid[x][y] = color;//给在边界的元素上色;
    }
    return grid;
};

const dfs = (grid, x, y, visited, borders, originalColor) => {
    const m = grid.length, n = grid[0].length;
    let isBorder = false;
    const direc = [[0, 1], [0, -1], [1, 0], [-1, 0]];//检查四个方向的颜色,这样同时也检查了是不是在边界上。
    for (let i = 0; i < 4; i++) {
        const nx = direc[i][0] + x, ny = direc[i][1] + y;
        if (!(nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === originalColor)) {
            isBorder = true;//判断这个点是不是边界;
        } else if (!visited[nx][ny]){
            visited[nx][ny] = true;//标记走过
            dfs(grid, nx, ny, visited, borders, originalColor);//递归检查所有的点
        }                
    }
    if (isBorder) {
        borders.push([x, y]);
    }
}
作者：LeetCode-Solution
```

BFS:

```javascript
var colorBorder = function(grid, row, col, color) {
    const m = grid.length, n = grid[0].length;
    const visited = new Array(m).fill(0).map(() => new Array(n).fill(0));
    const borders = [];
    const originalColor = grid[row][col];
    const direc = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const q = [];//栈储存同一深度下的所有待遍历的点。
    q.push([row, col]);
    visited[row][col] = true;
    while (q.length) {
        const node = q.pop();
        const x = node[0], y = node[1];

        let isBorder = false;
        for (let i = 0; i < 4; i++) {
            const nx = direc[i][0] + x, ny = direc[i][1] + y;
            if (!(nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === originalColor)) {
                isBorder = true;
            } else if (!visited[nx][ny]) {
                visited[nx][ny] = true;
                q.push([nx, ny]);
            }         
        }
        if (isBorder) {
            borders.push([x, y]);
        }
    }
    for (let i = 0; i < borders.length; i++) {
        const x = borders[i][0], y = borders[i][1];
        grid[x][y] = color;
    }
    return grid;
};
作者：LeetCode-Solution
```