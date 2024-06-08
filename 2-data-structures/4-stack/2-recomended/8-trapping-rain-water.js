/*
[https://leetcode.com/problems/trapping-rain-water/](https://leetcode.com/problems/trapping-rain-water/)

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
*/

function trap(height) {
    let left = 0,
      right = height.length - 1;
    let maxLeft = 0,
      maxRight = 0;
    let trappedWater = 0;
  
    while (left < right) {
      // Check if the left bar is shorter or equal to the right bar
      if (height[left] <= height[right]) {
        // If the left bar is taller than or equal to maxLeft, update maxLeft
        if (height[left] >= maxLeft) { 
          maxLeft = height[left];
        } else {
          // Calculate trapped water and add to the total
          trappedWater += maxLeft - height[left]; 
        }
        left++; // Move left pointer to the next bar
      } else {
        // If the right bar is taller than or equal to maxRight, update maxRight
        if (height[right] >= maxRight) {
          maxRight = height[right];
        } else {
          // Calculate trapped water and add to the total
          trappedWater += maxRight - height[right];
        }
        right--; // Move right pointer to the previous bar
      }
    }
  
    return trappedWater;
  }
  
  
  /* Example Usage: */
  const height1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
  console.log(trap(height1)); // Output: 6
  
  const height2 = [4, 2, 0, 3, 2, 5];
  console.log(trap(height2)); // Output: 9
  
  
  /*
  Explanation:
  
  1. Two Pointers: The solution uses two pointers, `left` and `right`, starting at the beginning and end of the elevation map respectively.
  2. Max Heights:
     - `maxLeft`: Stores the maximum height encountered so far from the left side.
     - `maxRight`: Stores the maximum height encountered so far from the right side.
  3. Iteration: While `left < right`:
     - If the height at the `left` pointer is less than or equal to the height at the `right` pointer:
       - If `height[left]` is greater than or equal to `maxLeft`, update `maxLeft`.
       - Otherwise, it means water can be trapped. Calculate the amount of trapped water as `maxLeft - height[left]` and add it to `trappedWater`.
       - Move the `left` pointer to the right.
     - Else (height at `right` pointer is smaller):
       - Similar to the above case, but update `maxRight` and calculate trapped water as `maxRight - height[right]`.
       - Move the `right` pointer to the left.
  4. Return: After the loop terminates, return the total `trappedWater`.
  
  Intuition:
  
  - The amount of water a bar can trap depends on the minimum of the maximum height to its left and right.
  - By using two pointers, we efficiently track the potential boundaries (maxLeft and maxRight) for water to be trapped.
  - We only move the pointer with the smaller height since that side can potentially contribute to more trapped water if we find a higher bar on that side later.
  
  Time and Space Complexity:
  
  Time Complexity: O(n) - We visit each bar in the heightmap once.
  
  Space Complexity: O(1) - We use constant extra space for the pointers and max height variables.
  */
  