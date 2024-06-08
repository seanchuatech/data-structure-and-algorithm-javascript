/*
[https://leetcode.com/problems/sudoku-solver/](https://leetcode.com/problems/sudoku-solver/)

Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

1. Each of the digits 1-9 must occur exactly once in each row.
2. Each of the digits 1-9 must occur exactly once in each column.
3. Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.

The '.' character indicates empty cells.
*/

function solveSudoku(board) {
    // Helper function to check if placing 'num' at (row, col) is valid
    function isValid(row, col, num) {
      // Check if 'num' exists in the current row
      for (let x = 0; x < 9; x++) {
        if (board[row][x] === num) return false;
      }
      // Check if 'num' exists in the current column
      for (let x = 0; x < 9; x++) {
        if (board[x][col] === num) return false;
      }
      // Check if 'num' exists in the 3x3 sub-box
      const startRow = 3 * Math.floor(row / 3); // Starting row of the sub-box
      const startCol = 3 * Math.floor(col / 3); // Starting column of the sub-box
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i + startRow][j + startCol] === num) return false;
        }
      }
      return true; // Valid placement
    }
  
    // Recursive backtracking function to solve Sudoku
    function solve() {
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          // Find an empty cell
          if (board[row][col] === '.') { 
            // Try placing numbers 1-9
            for (let num = '1'; num <= '9'; num++) {
              if (isValid(row, col, num)) {
                board[row][col] = num;
  
                // If placing this number leads to a solution, return true
                if (solve()) { 
                  return true;
                } else {
                  board[row][col] = '.'; // No solution with this number, reset and backtrack
                }
              }
            }
            return false; // No valid number found for this cell, trigger backtracking
          }
        }
      }
      return true; // All cells filled, Sudoku solved
    }
  
    solve(); // Start solving
  }
  
  
  /* Example Usage: */
  const board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ];
  solveSudoku(board);
  console.log(board); 
  
  
  /*
  Explanation:
  
  1. `isValid` Function:
  - This helper function checks whether it is valid to place a number (`num`) at a given position (`row`, `col`) on the Sudoku board.
  - It checks the row, column, and the corresponding 3x3 sub-box to ensure that `num` doesn't already exist in any of them.
  - Returns `true` if the placement is valid, `false` otherwise.
  
  2. `solve` Function (Recursive Backtracking):
  - This function recursively tries to fill the empty cells of the Sudoku board.
  - It iterates through each cell:
    - If the cell is empty (`.`), it tries to place each digit from '1' to '9'.
    - If a valid digit is found using the `isValid` function, it is placed in the cell.
    - The function then recursively calls itself (`solve()`) to attempt to solve the rest of the board.
      - If the recursive call returns `true`, it means a solution was found, so it also returns `true`.
      - If not, it resets the current cell to '.' (backtracking) and tries the next digit.
    - If no valid digit is found for the cell, the function returns `false` to trigger backtracking at a higher level.
  - If all cells are filled and no conflicts are found, the function returns `true`, indicating a successful solution.
  */
  
  
  /*
  Time and Space Complexity:
  
  Time Complexity: O(9^(n * n)), where n is the size of the grid. For a standard 9x9 Sudoku, it's O(9^81). However, in practice, the pruning due to the isValid check significantly reduces the runtime.
  
  Space Complexity: O(1) - The algorithm modifies the input board in place, using constant extra space for the `isValid` and `solve` function calls on the recursion stack.
  */
  