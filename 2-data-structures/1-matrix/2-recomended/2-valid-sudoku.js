/*
[https://leetcode.com/problems/valid-sudoku/](https://leetcode.com/problems/valid-sudoku/)

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

1. Each row must contain the digits 1-9 without repetition.
2. Each column must contain the digits 1-9 without repetition.
3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
*/

function isValidSudoku(board) {
    // Helper function to check if a set has duplicates (excluding '.')
    function hasDuplicates(set) {
      return set.size !== [...set].filter(num => num !== '.').length; 
    }
  
    // Check each row
    for (let row = 0; row < 9; row++) {
      if (hasDuplicates(new Set(board[row]))) return false;
    }
  
    // Check each column
    for (let col = 0; col < 9; col++) {
      const column = [];
      for (let row = 0; row < 9; row++) {
        column.push(board[row][col]);
      }
      if (hasDuplicates(new Set(column))) return false;
    }
  
    // Check each 3x3 sub-box
    for (let blockRow = 0; blockRow < 3; blockRow++) {
      for (let blockCol = 0; blockCol < 3; blockCol++) {
        const subBox = [];
        for (let row = blockRow * 3; row < blockRow * 3 + 3; row++) {
          for (let col = blockCol * 3; col < blockCol * 3 + 3; col++) {
            subBox.push(board[row][col]);
          }
        }
        if (hasDuplicates(new Set(subBox))) return false;
      }
    }
  
    return true; // If no duplicates found in any check, the board is valid
  }
  
  /* Example Usage: */
  const board1 = [
      ["5","3",".",".","7",".",".",".","."],
      ["6",".",".","1","9","5",".",".","."],
      [".","9","8",".",".",".",".","6","."],
      ["8",".",".",".","6",".",".",".","3"],
      ["4",".",".","8",".","3",".",".","1"],
      ["7",".",".",".","2",".",".",".","6"],
      [".","6",".",".",".",".","2","8","."],
      [".",".",".","4","1","9",".",".","5"],
      [".",".",".",".","8",".",".","7","9"]
  ];
  
  const board2 = [
      ["8","3",".",".","7",".",".",".","."],
      ["6",".",".","1","9","5",".",".","."],
      [".","9","8",".",".",".",".","6","."],
      ["8",".",".",".","6",".",".",".","3"],
      ["4",".",".","8",".","3",".",".","1"],
      ["7",".",".",".","2",".",".",".","6"],
      [".","6",".",".",".",".","2","8","."],
      [".",".",".","4","1","9",".",".","5"],
      [".",".",".",".","8",".",".","7","9"]
  ];
  
  console.log(isValidSudoku(board1)); // Output: true
  console.log(isValidSudoku(board2)); // Output: false
  