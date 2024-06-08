/*
[https://leetcode.com/problems/number-of-islands/](https://leetcode.com/problems/number-of-islands/)

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
*/
function numIslands(grid) {
    if (!grid || grid.length === 0) return 0;
  
    const rows = grid.length;
    const cols = grid[0].length;
    let numIslands = 0;
  
    // Depth-First Search (DFS) to explore an island
    const dfs = (row, col) => {
      if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === "0") return;
      grid[row][col] = "0"; // Mark as visited (sink the island)
      dfs(row - 1, col);   // Explore up
      dfs(row + 1, col);   // Explore down
      dfs(row, col - 1);   // Explore left
      dfs(row, col + 1);   // Explore right
    };
  
    // Iterate through the grid
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r][c] === "1") {
          numIslands++;
          dfs(r, c); // Start DFS from this land cell
        }
      }
    }
  
    return numIslands;
  }
  
  /* Example Usage: */
  const grid1 = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ];
  
  const grid2 = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ];
  
  console.log(numIslands(grid1)); // Output: 1
  console.log(numIslands(grid2)); // Output: 3
  
  /*
  Explanation:
  
  1. DFS Exploration (`dfs` Function):
     - This recursive function explores an island starting from a given cell `(row, col)`.
     - Base Case: If the current position is out of bounds or water ('0'), it returns.
     - Otherwise:
       - Marks the current cell as visited (by changing its value to '0').
       - Recursively explores its neighbors (up, down, left, right) in a depth-first manner.
  
  2. Main Loop:
     - Iterates through each cell in the grid.
     - If a land cell ('1') is found:
       - Increment `numIslands`.
       - Call `dfs` to explore the entire island connected to this land cell.
  
  3. Return: Returns the total count of islands (`numIslands`).
  */
  
  
  /*
  Time and Space Complexity:
  
  Time Complexity: O(m * n) - Each cell in the grid is visited at most once during DFS.
  
  Space Complexity: O(m * n) in the worst case, due to the recursion stack. If the entire grid is one big island, the maximum depth of the recursion would be m * n.
  */
  