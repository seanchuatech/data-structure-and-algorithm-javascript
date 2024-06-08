/*
https://leetcode.com/problems/first-missing-positive/

Given an unsortedinteger array nums. Return the smallest positive integer that is not present in nums.

You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.
*/

function firstMissingPositive(nums) {
    const n = nums.length;
    
    // Step 1: Move positive integers to their correct positions
    for (let i = 0; i < n; i++) {
        while (
        nums[i] > 0 &&
        nums[i] <= n &&
        nums[i] !== nums[nums[i] - 1]
        ) {
        [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]]; // Swap
        }
    }
    
    // Step 2: Find the first missing positive integer
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
        return i + 1;
        }
    }
    
    return n + 1; // If all numbers from 1 to n are present, the answer is n + 1
}

/*
Explanation:

1. Reorganize the Array:
    -The goal is to place each positive integer num at index num - 1. For example, 1 should be at index 0, 2 at index 1, and so on.
    -We iterate through the array and use a while loop to swap elements until the correct placement is achieved.
    -The while loop conditions ensure that:
        -The number is positive (nums[i] > 0).
        -The number is within the valid index range (nums[i] <= n).
        -The number is not already in its correct position (nums[i] !== nums[nums[i] - 1]).

2. Find the Missing Positive:
    -After rearranging, we iterate again through the array.
    -The first index i where nums[i] is not equal to i + 1 indicates the missing positive integer.
    -If the entire array is in order (1, 2, 3,...n), the first missing positive is n + 1. */

/* Example Usage: */
const nums1 = [1,2,0];
const result1 = firstMissingPositive(nums1);
console.log(result1); // Output: 3

const nums2 = [3,4,-1,1];
const result2 = firstMissingPositive(nums2);
console.log(result2); // Output: 2

const nums3 = [7,8,9,11,12];
const result3 = firstMissingPositive(nums3);
console.log(result3); // Output: 1

/*
Time and Space Complexity:

Time Complexity: O(n) - We iterate through the array twice, but each element is swapped at most once.

Space Complexity: O(1) - The algorithm uses constant extra space for the index variable.
*/