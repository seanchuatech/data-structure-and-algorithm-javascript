/*
[https://leetcode.com/problems/rotate-image/](https://leetcode.com/problems/rotate-image/)

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise). You have to rotate the image in-place,which means you have to modify the input 2D matrix directly.
*/

function rotate(matrix) {
    const n = matrix.length;
  
    // Transpose the matrix
    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]; 
      }
    }
  
    // Reverse each row
    for (let row of matrix) {
      row.reverse(); 
    }
  }
  
  /* Example Usage: */
  const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  rotate(matrix1);
  console.log(matrix1); // Output: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
  
  const matrix2 = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];
  rotate(matrix2);
  console.log(matrix2); // Output: [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]
  
  
  /*
  Explanation:
  
  1. Transpose the Matrix: 
     - We swap elements across the main diagonal of the matrix (the line from the top-left to the bottom-right). 
     - This is done using a nested loop where `i` represents the row and `j` represents the column. We swap `matrix[i][j]` with `matrix[j][i]` for all elements above the main diagonal (`j > i`).
  
  2. Reverse Each Row:
     - After transposing, each row represents what the columns were originally.  
     - We then reverse the elements in each row to achieve the final 90-degree clockwise rotation.
  */
  
  /*
  Time and Space Complexity:
  
  Time Complexity: O(N^2), where N is the size of the matrix. We iterate through the entire matrix twice.
  
  Space Complexity: O(1). We modify the input matrix in place, using only constant extra space.
  */
  