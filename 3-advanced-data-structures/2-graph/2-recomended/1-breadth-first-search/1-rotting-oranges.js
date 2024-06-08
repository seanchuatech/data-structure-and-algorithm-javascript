/*
[https://leetcode.com/problems/rotting-oranges/](https://leetcode.com/problems/rotting-oranges/)

You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representinga rotten orange.

Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
*/

function orangesRotting(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const queue = [];
    let freshOranges = 0;
    let minutes = 0;
  
    // Find all rotten oranges and count fresh oranges
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (grid[i][j] === 2) {
          queue.push([i, j]);
        } else if (grid[i][j] === 1) {
          freshOranges++;
        }
      }
    }
  
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // Up, down, left, right
  
    // BFS traversal
    while (queue.length > 0 && freshOranges > 0) {
      const currentQueueSize = queue.length;
  
      for (let i = 0; i < currentQueueSize; i++) {
        const [row, col] = queue.shift();
  
        for (const [dx, dy] of directions) {
          const newRow = row + dx;
          const newCol = col + dy;
  
          if (
            newRow >= 0 &&
            newRow < rows &&
            newCol >= 0 &&
            newCol < cols &&
            grid[newRow][newCol] === 1
          ) {
            grid[newRow][newCol] = 2; // Rot the orange
            freshOranges--;
            queue.push([newRow, newCol]);
          }
        }
      }
  
      minutes++; // Increment minutes after processing each level
    }
  
    return freshOranges === 0 ? minutes : -1; // If there are still fresh oranges, return -1
  }
  
  /* Example Usage: */
  const grid1 = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ];
  console.log(orangesRotting(grid1)); // Output: 4
  
  const grid2 = [
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ];
  console.log(orangesRotting(grid2)); // Output: -1
  
  const grid3 = [[0, 2]];
  console.log(orangesRotting(grid3)); // Output: 0
  
  
  /*
  Explanation:
  
  1. Initialization:
     - Initialize a queue to store the coordinates of rotten oranges.
     - Initialize `freshOranges` to count the number of fresh oranges.
     - Initialize `minutes` to 0.
  
  2. Find Rotten Oranges and Count Fresh Oranges:
     - Iterate through the grid:
       - If a rotten orange (2) is found, enqueue its coordinates.
       - If a fresh orange (1) is found, increment `freshOranges`.
  
  3. Breadth-First Search (BFS):
     - While the queue is not empty and there are still fresh oranges:
       - Get the current queue size (`currentQueueSize`).
       - For each rotten orange in the current level (queue):
         - Explore its four neighbors (up, down, left, right).
         - If a neighbor is a fresh orange:
           - Rot the orange (change its value to 2).
           - Decrement `freshOranges`.
           - Enqueue the neighbor's coordinates.
       - After processing a level, increment `minutes`.
  
  4. Return Result:
     - If all fresh oranges have been rotten (`freshOranges === 0`), return `minutes`.
     - Otherwise, it's impossible to rot all oranges, so return -1.
  
  
  Time Complexity:
  
  - O(m * n), where m is the number of rows and n is the number of columns in the grid. We traverse the grid twice: once to find initial rotten oranges and count fresh oranges, and once during BFS.
  
  
  Space Complexity:
  
  - O(m * n) in the worst case, when the entire grid is filled with fresh oranges, as the queue might need to store all the positions.
  */
  