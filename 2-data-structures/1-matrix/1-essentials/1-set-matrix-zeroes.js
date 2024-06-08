/*
[https://leetcode.com/problems/set-matrix-zeroes/](https://leetcode.com/problems/set-matrix-zeroes/)

Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's. You must do it in place.
*/
function setZeroes(matrix) {
    const m = matrix.length; // number of rows
    const n = matrix[0].length; // number of columns
    let firstRowHasZero = false;

    // Step 1: Find rows and columns with zeros, mark them in the first row/column
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[0][j] = 0; // Mark the corresponding column in the first row
                if (i > 0) {
                    matrix[i][0] = 0; // Mark the corresponding row in the first column
                } else {
                    firstRowHasZero = true; // If a zero is found in the first row, mark a flag
                }
            }
        }
    }

    // Step 2: Set rows and columns to zero except the first row and column
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0; // Set to 0 if the corresponding row or column is marked
            }
        }
    }

    // Step 3: Set the first column to zero if the first row had a zero
    if (matrix[0][0] === 0) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }

    // Step 4: Set the first row to zero if needed
    if (firstRowHasZero) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }
}


/* Example Usage: */
const matrix1 = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
setZeroes(matrix1);
console.log(matrix1); // Output: [[1, 0, 1], [0, 0, 0], [1, 0, 1]]

const matrix2 = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
setZeroes(matrix2);
console.log(matrix2); // Output: [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]


/*
Explanation:

1. First Pass: 
   - We iterate through the matrix, looking for '0' elements.
   - When a '0' is found at position (i, j), we mark the first element of the corresponding row (`matrix[i][0]`) and column (`matrix[0][j]`) as 0.
   - We use `firstRowHasZero` to track if any '0' is found in the first row itself.

2. Second Pass:
   - We iterate from the second row and second column onwards.
   - If either the first element of the row (`matrix[i][0]`) or the first element of the column (`matrix[0][j]`) is 0, it means that the entire row/column needs to be set to 0.

3. Handling the First Row and Column:
   - If the first element of the matrix (`matrix[0][0]`) was marked as 0, it means the entire first row needs to be set to 0.
   - If the `firstRowHasZero` flag is true, it means a zero was found in the first row, so we set the entire first row to 0.


Time and Space Complexity:

Time Complexity: O(m * n) - We traverse the matrix twice.

Space Complexity: O(1) - We use constant extra space to store a few variables.
*/
