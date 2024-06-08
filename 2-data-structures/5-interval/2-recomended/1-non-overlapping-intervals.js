/*
[https://leetcode.com/problems/non-overlapping-intervals/](https://leetcode.com/problems/non-overlapping-intervals/)

Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
*/
function eraseOverlapIntervals(intervals) {
    // Sort intervals based on their starting times (ascending)
    intervals.sort((a, b) => a[0] - b[0]);
  
    let count = 0; 
    let prevEnd = intervals[0][1]; // End of the first interval
  
    for (let i = 1; i < intervals.length; i++) {
      const [currStart, currEnd] = intervals[i];
      // Check for overlapping intervals
      if (currStart < prevEnd) {
        // Overlap found, remove the interval with later end time
        count++;
        prevEnd = Math.min(prevEnd, currEnd); 
      } else {
        // No overlap, update prevEnd
        prevEnd = currEnd;
      }
    }
  
    return count;
  }
  
  /* Example Usage: */
  const intervals1 = [[1, 2], [2, 3], [3, 4], [1, 3]];
  const minRemovals1 = eraseOverlapIntervals(intervals1);
  console.log(minRemovals1); // Output: 1
  
  const intervals2 = [[1, 2], [1, 2], [1, 2]];
  const minRemovals2 = eraseOverlapIntervals(intervals2);
  console.log(minRemovals2); // Output: 2
  
  const intervals3 = [[1, 2], [2, 3]];
  const minRemovals3 = eraseOverlapIntervals(intervals3);
  console.log(minRemovals3); // Output: 0
  
  
  /*
  Explanation:
  
  1. Sorting:
  - We sort the intervals by their starting times. This ensures that we process them in order, making it easier to detect overlaps.
  
  2. Greedy Approach:
  - Initialize a `count` variable to track the number of removals needed.
  - Keep track of the end time of the previous non-overlapping interval (`prevEnd`).
  - Iterate through the sorted intervals:
     - If the current interval's `start` time is less than `prevEnd` (overlap):
       - Increment `count` to indicate a removal is needed.
       - Update `prevEnd` to the minimum of the current interval's `end` time and the previous `prevEnd`. This allows us to keep the interval that ends earlier, maximizing the chances of fitting in more intervals later.
     - If the current interval's `start` time is greater than or equal to `prevEnd` (no overlap):
       - Update `prevEnd` to the current interval's `end` time.
  
  3. Return Count:
  - After processing all intervals, the `count` variable holds the minimum number of intervals that need to be removed to eliminate overlaps.
  */
  
  
  /*
  Time and Space Complexity:
  
  Time Complexity: O(n log n) due to sorting.
  
  Space Complexity: O(1) - We use only constant extra space to store variables like `count` and `prevEnd`. 
  */
  