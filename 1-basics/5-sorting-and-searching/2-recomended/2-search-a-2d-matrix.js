/*
[https://leetcode.com/problems/search-a-2d-matrix/](https://leetcode.com/problems/search-a-2d-matrix/)

You are given an m x n integer matrix matrix with the following two properties:

- Each row is sorted in non-decreasing order.
- The first integer of each row is greater than the last integer of the previous row.

Given an integer target, return true if target is in matrixor false otherwise.

You must write a solution in O(log(m * n)) time complexity.
*/

function searchMatrix(matrix, target) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let left = 0;
    let right = rows * cols - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // Calculate the middle index
        const row = Math.floor(mid / cols); // Calculate the row index
        const col = mid % cols; // Calculate the column index

        if (matrix[row][col] === target) {
            return true; // Target found
        } else if (matrix[row][col] < target) {
            left = mid + 1; // Search in the upper right half
        } else {
            right = mid - 1; // Search in the lower left half
        }
    }
    
    return false; // Target not found
}


/* Example Usage: */
const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
];
const target = 3;
const result = searchMatrix(matrix, target);
console.log(result); // Output: true


/*
Explanation:

1. Virtual 1D Array: We treat the 2D matrix as a virtual 1D array, where the element at `matrix[row][col]` is at index `row * cols + col` in the 1D array.

2. Binary Search: We apply binary search on this virtual 1D array. 

3. Calculate Row and Column: In each iteration, we calculate the row (`row = mid / cols`) and column (`col = mid % cols`) indices of the middle element (`mid`).

4. Compare with Target:
   - If the element at `matrix[row][col]` is equal to the `target`, we return `true`.
   - If it's smaller, the target must be in the upper right half of the matrix, so we update `left = mid + 1`.
   - If it's larger, the target must be in the lower left half of the matrix, so we update `right = mid - 1`.

5. Target Not Found: If the loop finishes without finding the target, it means the target is not in the matrix, so we return `false`.


Time and Space Complexity:

Time Complexity: O(log(m * n)) - Standard binary search complexity on the virtual 1D array of size m * n.

Space Complexity: O(1) - We only use a constant amount of space for variables.
*/
