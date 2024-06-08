/*
[https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)

Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth smallest element in the matrix. 
*/

function kthSmallest(matrix, k) {
    const n = matrix.length; // Number of rows/columns

    // Define the range within which the kth smallest element will lie
    let low = matrix[0][0], high = matrix[n - 1][n - 1];

    while (low < high) {
        const mid = low + Math.floor((high - low) / 2); 
        let count = 0, j = n - 1;

        // Count how many elements are smaller than or equal to mid
        for (let i = 0; i < n; i++) {
            while (j >= 0 && matrix[i][j] > mid) { 
                j--; // Move left until we find an element <= mid
            }
            count += j + 1; // Add the count of elements in this row
        }

        if (count < k) {
            low = mid + 1; // If there are fewer than k elements less than or equal to mid, kth smallest is larger than mid
        } else {
            high = mid; // If there are at least k elements less than or equal to mid, kth smallest is smaller than or equal to mid
        }
    }

    return low; // low is now equal to the kth smallest element
}


/* Example Usage: */
const matrix = [
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15],
];
const k = 8;
const result = kthSmallest(matrix, k);
console.log(result); // Output: 13

/*
Explanation:

1. Range: The smallest element is the top-left corner of the matrix and the largest is the bottom-right. We start with this range `[matrix[0][0], matrix[n - 1][n - 1]]`.

2. Binary Search: We apply binary search on this range to find the kth smallest. 

3. Counting Smaller Elements: In each iteration, for the middle value `mid`, we count how many elements in the matrix are less than or equal to it.
    - We start from the top-right corner of the matrix.
    - For each row, we move left until we find an element less than or equal to `mid`. The number of elements we pass by are all greater than `mid`, and the remaining elements in that row are less than or equal to `mid`. We add this count to a variable `count`.

4. Adjusting Search Range:
   - If `count` is less than `k`, the kth smallest element must be greater than `mid`, so we update `low = mid + 1`.
   - If `count` is greater than or equal to `k`, the kth smallest element must be smaller than or equal to `mid`, so we update `high = mid`.

5. Termination: The loop continues until `low` and `high` converge. At this point, `low` (or `high`) will be the kth smallest element.
*/


/*
Time and Space Complexity:

Time Complexity: O(n log(max - min)), where n is the dimension of the matrix, and max and min are the maximum and minimum elements in the matrix. The binary search takes O(log(max - min)), and for each mid value, we traverse at most n elements in each row.

Space Complexity: O(1) - We only use constant extra space for the `low`, `high`, `mid`, `count`, and `j` variables.
*/
