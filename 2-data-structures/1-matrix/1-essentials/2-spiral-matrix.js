/*
[https://leetcode.com/problems/spiral-matrix/](https://leetcode.com/problems/spiral-matrix/)

Given an m x n matrix, return all elements of the matrix in spiral order.
*/
function spiralOrder(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = [];
    let top = 0, bottom = rows - 1, left = 0, right = cols - 1;
  
    while (result.length < rows * cols) { // Iterate until all elements are processed
  
      // Traverse the top row from left to right
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      top++; // Move down to the next row
  
      // Traverse the right column from top to bottom
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right--; // Move left to the next column
  
      // Traverse the bottom row from right to left (if there's still a row)
      if (top <= bottom) {
        for (let i = right; i >= left; i--) {
          result.push(matrix[bottom][i]);
        }
        bottom--; // Move up to the next row
      }
  
      // Traverse the left column from bottom to top (if there's still a column)
      if (left <= right) {
        for (let i = bottom; i >= top; i--) {
          result.push(matrix[i][left]);
        }
        left++; // Move right to the next column
      }
    }
  
    return result;
  }
  
  
  /* Example Usage: */
  const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  console.log(spiralOrder(matrix1)); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
  
  const matrix2 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
  console.log(spiralOrder(matrix2)); // Output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
  
  
  
  /*
  Explanation:
  
  1. Boundaries: We define four variables (`top`, `bottom`, `left`, and `right`) to track the current boundaries of the unprocessed part of the matrix.
  
  2. Loop: We loop until we've processed all elements in the matrix (`result.length < rows * cols`).
  
  3. Traversal: In each iteration, we traverse the outer boundary of the remaining matrix in a clockwise direction (top row -> right column -> bottom row -> left column) and add the elements to the `result` array.
  
  4. Updating Boundaries: After traversing each side, we update the respective boundary to move inwards (e.g., `top++` after traversing the top row).
  
  5. Repeat: We repeat steps 3 and 4 until we've visited all elements.
  */
  
  /*
  Time and Space Complexity:
  
  Time Complexity: O(m * n) - We visit each element in the matrix exactly once.
  Space Complexity: O(m * n) - The `result` array stores all the elements of the matrix.
  */
  