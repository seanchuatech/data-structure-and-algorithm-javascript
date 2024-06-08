/*
[https://leetcode.com/problems/median-of-two-sorted-arrays/](https://leetcode.com/problems/median-of-two-sorted-arrays/)

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
*/

function findMedianSortedArrays(nums1, nums2) {
    // Ensure nums1 is the shorter array for optimization
    if (nums1.length > nums2.length) {
      [nums1, nums2] = [nums2, nums1];
    }
  
    const m = nums1.length;
    const n = nums2.length;
  
    let low = 0;
    let high = m;
  
    while (low <= high) {
      // Partition nums1: partitionX = (low + high) / 2
      // Partition nums2: partitionY = (m + n + 1) / 2 - partitionX
      const partitionX = Math.floor((low + high) / 2); 
      const partitionY = Math.floor((m + n + 1) / 2) - partitionX;
  
      const maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
      const minRightX = partitionX === m ? Infinity : nums1[partitionX];
      const maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
      const minRightY = partitionY === n ? Infinity : nums2[partitionY];
  
      if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
        // Found the correct partitions
        if ((m + n) % 2 === 0) {
          // Even combined length: average of the two middle elements
          return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2; 
        } else {
          // Odd combined length: the max of the two left sides
          return Math.max(maxLeftX, maxLeftY);
        }
      } else if (maxLeftX > minRightY) {
        // Too many elements on the left side of nums1, need to move partitionX towards the left
        high = partitionX - 1;
      } else {
        // Too many elements on the right side of nums1, need to move partitionX towards the right
        low = partitionX + 1;
      }
    }
  }
  
  /* Example Usage: */
  const nums1 = [1, 3];
  const nums2 = [2];
  const median = findMedianSortedArrays(nums1, nums2);
  console.log(median); // Output: 2.00000
  
  
  /*
  Explanation:
  
  1. Partitioning: The core idea is to find a partition in both arrays such that all elements before the partition in `nums1` are smaller than or equal to all elements after the partition in `nums2`, and vice versa.
  
  2. Binary Search: We use binary search on the smaller array (`nums1`) to find the correct partition. The goal is to find `partitionX` and `partitionY` such that the condition in step 1 is satisfied.
  
  3. Finding Max and Min: For each partition, we find the maximum element on the left side (`maxLeftX` and `maxLeftY`) and the minimum element on the right side (`minRightX` and `minRightY`).
  
  4. Checking Partitions: We check if the partitions are valid:
     - If they are (`maxLeftX <= minRightY && maxLeftY <= minRightX`), we calculate the median based on whether the combined length is even or odd.
     - Otherwise, we adjust the search range:
       - If `maxLeftX > minRightY`, we need to move `partitionX` to the left.
       - If `maxLeftY > minRightX`, we need to move `partitionX` to the right.
  
  5. Loop Termination: The loop continues until we find the correct partitions.
  
  
  Time and Space Complexity:
  
  Time Complexity: O(log(min(m, n))) - We perform binary search on the smaller array, so the time complexity is logarithmic in the smaller size.
  
  Space Complexity: O(1) - We use a constant amount of space for variables.
  */
  