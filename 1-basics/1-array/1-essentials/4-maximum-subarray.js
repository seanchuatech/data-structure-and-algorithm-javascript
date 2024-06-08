/*
https://leetcode.com/problems/maximum-subarray/description/

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.
*/

function maxSubArray(nums) {
    let maxSum = -Infinity; // Initialize to negative infinity to handle all negative arrays
    let currentSum = 0;
    
    for (let num of nums) {
        // Decide whether to start a new subarray or extend the current one
        currentSum = Math.max(num, currentSum + num);
    
        // Update the maxSum if the currentSum is greater
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}
    
/*
Explanation:

1. Initialization:
    -maxSum is set to -Infinity to handle the case where all elements in the array are negative.
    -currentSum is set to 0 to track the sum of the current subarray being considered.

2. Iteration:
    -We iterate through each number (num) in the nums array.
    -At each step, we make a decision:
        -If adding the current num to currentSum would result in a larger sum, we extend the current subarray.
        -If the current num is greater than the sum we would get by extending the subarray, we start a new subarray beginning with the current num.
        -We update maxSum if the currentSum becomes greater than the previously seen maxSum.

3. Return:
    -After iterating through the entire array, maxSum holds the maximum sum of any contiguous subarray. */

/* Example Usage: */

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubArray(nums);
console.log(result); // Output: 6

/*
Time and Space Complexity:

Time Complexity: O(n), where n is the length of the input array nums. We iterate through the array only once.

Space Complexity: O(1). We use only a constant amount of extra space to store variables (maxSum and currentSum).
*/