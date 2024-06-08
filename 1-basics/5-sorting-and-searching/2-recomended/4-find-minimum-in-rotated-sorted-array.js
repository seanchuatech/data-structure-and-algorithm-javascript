/*
[https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)

Suppose an array of length n sorted in ascending order is rotated between 1 and n times.

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time. 
*/
function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
  
      // if the mid element is greater than the right element, then the smallest value is in the right side
      if (nums[mid] > nums[right]) {
        left = mid + 1; 
      } else {
        right = mid;  // the smallest value is in the left side (or it's mid itself)
      }
    }
  
    return nums[left]; // left and right converge to the smallest element
  }
  
  /*
  Explanation:
  
  1. Initialization:
     - `left` is set to 0 (the start of the array).
     - `right` is set to `nums.length - 1` (the end of the array).
  
  2. Binary Search:
     - The `while` loop continues as long as `left` is strictly less than `right`, meaning there is still a search space to consider.
     - `mid` calculates the middle index.
  
  3. Comparison and Range Adjustment:
     - If `nums[mid] > nums[right]`: This means the array is rotated and the smallest element is in the right half. We update `left = mid + 1` to search in the right half.
     - Otherwise (`nums[mid] <= nums[right]`): The smallest element could be in the left half (including `mid`). We update `right = mid` to search in the left half.
  
  4. Return Minimum:
     - Eventually, `left` and `right` will converge to the index of the smallest element. We return `nums[left]` (or `nums[right]`, since they will be the same).
  */
  
  /* Example Usage: */
  const nums1 = [3, 4, 5, 1, 2];
  const result1 = findMin(nums1);
  console.log(result1); // Output: 1
  
  const nums2 = [4, 5, 6, 7, 0, 1, 2];
  const result2 = findMin(nums2);
  console.log(result2); // Output: 0
  
  
  /*
  Time and Space Complexity:
  
  Time Complexity: O(log n) due to the binary search nature of the algorithm.
  
  Space Complexity: O(1) as we use a constant amount of space for variables.
  */
  