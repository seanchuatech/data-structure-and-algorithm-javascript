/*
[https://leetcode.com/problems/01-matrix/](https://leetcode.com/problems/01-matrix/)

Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell. The distance between two adjacent cells is 1.
*/
function updateMatrix(mat) {
    const m = mat.length;
    const n = mat[0].length;
    const queue = []; // Queue for BFS
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 4 directions: up, down, left, right
  
    // Initialize distance matrix with Infinity for non-zero cells and 0 for zero cells
    const distance = Array.from({ length: m }, () => Array(n).fill(Infinity));
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (mat[i][j] === 0) {
          distance[i][j] = 0;
          queue.push([i, j]); // Add initial zero cells to the queue
        }
      }
    }
  
    // Perform BFS
    while (queue.length > 0) {
      const [row, col] = queue.shift(); // Dequeue a cell
  
      // Explore neighbors
      for (const [dx, dy] of directions) {
        const newRow = row + dx;
        const newCol = col + dy;
  
        // If the neighbor is valid and not yet visited, calculate and update its distance
        if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && distance[newRow][newCol] === Infinity) {
          distance[newRow][newCol] = distance[row][col] + 1; // Update distance
          queue.push([newRow, newCol]); // Enqueue the neighbor
        }
      }
    }
  
    return distance;
  }
  
  /* Example Usage: */
  const mat1 = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
  const mat2 = [[0, 0, 0], [0, 1, 0], [1, 1, 1]];
  console.log(updateMatrix(mat1)); // Output: [[0,0,0],[0,1,0],[0,0,0]]
  console.log(updateMatrix(mat2)); // Output: [[0,0,0],[0,1,0],[1,2,1]]
  
  
  /*
  Explanation:
  
  1. Initialization:
     - Initialize a queue `queue` for BFS and an array `directions` to store the possible movement directions.
     - Create a `distance` matrix of the same size as `mat`, filling it with `Infinity` for non-zero cells.
     - Iterate through `mat` and set `distance[i][j]` to 0 for zero cells, and enqueue their positions.
  
  2. Breadth-First Search (BFS):
     - While the queue is not empty, do the following:
        - Dequeue the cell from the front of the queue.
        - For each direction in `directions`:
           - Calculate the coordinates of the neighbor cell (`newRow`, `newCol`).
           - If the neighbor is valid (within the matrix bounds) and hasn't been visited (`distance[newRow][newCol] === Infinity`):
              - Set `distance[newRow][newCol]` to `distance[row][col] + 1`.
              - Enqueue the neighbor.
  
  3. Return Distance Matrix: Return the `distance` matrix, which now contains the distance of the nearest 0 for each cell.
  */
  
  
  /*
  Time and Space Complexity:
  
  Time Complexity: O(m * n), where m and n are the dimensions of the matrix. We visit each cell at most once during BFS.
  
  Space Complexity: O(m * n) due to the `distance` matrix and the queue used in BFS.
  */
  