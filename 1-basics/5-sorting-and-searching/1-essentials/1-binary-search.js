/*
[https://leetcode.com/problems/binary-search/](https://leetcode.com/problems/binary-search/)

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
*/
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2); // Calculate mid-point
      
      if (nums[mid] === target) {
        return mid; // Found the target
      } else if (nums[mid] < target) {
        left = mid + 1; // Target is in the right half
      } else {
        right = mid - 1; // Target is in the left half
      }
    }
    return -1; // Target not found
  }
  
  /*
  Explanation:
  
  1. Initialize: Set `left` to 0 (the start of the array) and `right` to `nums.length - 1` (the end of the array).
  2. Loop: Continue searching as long as the `left` pointer is less than or equal to the `right` pointer.
  3. Calculate Midpoint: Find the middle index `mid` of the current search range.
  4. Check Target:
     - If `nums[mid]` is the `target`, return the index `mid`.
     - If `nums[mid]` is less than the `target`, discard the left half and search in the right half by setting `left = mid + 1`.
     - If `nums[mid]` is greater than the `target`, discard the right half and search in the left half by setting `right = mid - 1`.
  5. Target Not Found: If the loop finishes without finding the target, it means the target is not in the array, so return -1.
  */
  
  /* Example Usage: */
  const nums = [-1, 0, 3, 5, 9, 12];
  const target = 9;
  const result = search(nums, target);
  console.log(result); // Output: 4
  
  
  /*
  Time and Space Complexity:
  
  Time Complexity: O(log n) - In each iteration, we divide the search space by half.
  
  Space Complexity: O(1) - We only use constant extra space for the `left`, `right`, and `mid` variables.
  */
  