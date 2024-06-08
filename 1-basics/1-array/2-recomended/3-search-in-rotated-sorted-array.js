/*
https://leetcode.com/problems/search-in-rotated-sorted-array/

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ...,nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.
*/

function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
        // Found the target
        if (nums[mid] === target) {
        return mid;
        }
    
        // Determine which half is sorted
        if (nums[mid] >= nums[left]) {
        // Left half is sorted
        if (target >= nums[left] && target < nums[mid]) {
            right = mid - 1; // Search in the left half
        } else {
            left = mid + 1; // Search in the right half
        }
        } else {
        // Right half is sorted
        if (target > nums[mid] && target <= nums[right]) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
        }
    }
    
    // Target not found
    return -1;
}

/*
Explanation:

1. Binary Search: The solution uses a modified binary search approach. Instead of searching in a fully sorted array, we search in a rotated sorted array.

2. Determine Sorted Half: In each iteration, we first determine if the left or right half of the subarray is sorted by comparing nums[mid] with nums[left].

3. Narrow Search: Based on whether the target lies within the sorted half or not, we discard one half of the subarray and continue the search in the other half.

4. Repeat: We repeat steps 2 and 3 until we either find the target or the search space is exhausted.
*/
    
/* Example Usage: */
const nums = [4, 5, 6, 7, 0, 1, 2];
const target = 0;
const result = search(nums, target);
console.log(result); // Output: 4
    
/*
Time and Space Complexity:

Time Complexity: O(log n), where n is the length of the array nums. This is because we are effectively dividing the search space in half at each step, similar to binary search.

Space Complexity: O(1). We use only a constant amount of space to store variables (left, right, and mid).
*/