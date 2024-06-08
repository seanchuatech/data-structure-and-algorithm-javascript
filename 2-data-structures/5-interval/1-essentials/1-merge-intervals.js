/*
[https://leetcode.com/problems/merge-intervals/](https://leetcode.com/problems/merge-intervals/)

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
*/
function merge(intervals) {
    // Sort intervals based on their starting times
    intervals.sort((a, b) => a[0] - b[0]);
  
    const mergedIntervals = []; 
    let currentInterval = intervals[0]; // Start with the first interval
  
    for (let i = 1; i < intervals.length; i++) {
      const nextInterval = intervals[i];
  
      // Check if the current and next intervals overlap
      if (nextInterval[0] <= currentInterval[1]) { 
        // If they overlap, merge them by updating the end time of the current interval
        currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]); 
      } else {
        // If they don't overlap, add the current interval to the result and move to the next
        mergedIntervals.push(currentInterval);
        currentInterval = nextInterval;
      }
    }
  
    mergedIntervals.push(currentInterval); // Add the last interval
    return mergedIntervals;
  }
  
  
  /* Example Usage: */
  const intervals1 = [[1, 3], [2, 6], [8, 10], [15, 18]];
  const merged1 = merge(intervals1);
  console.log(merged1); // Output: [[1, 6], [8, 10], [15, 18]]
  
  const intervals2 = [[1, 4], [4, 5]];
  const merged2 = merge(intervals2);
  console.log(merged2); // Output: [[1, 5]]
  
  
  /*
  Explanation:
  
  1. Sorting:
  - Sort the intervals by their starting times. This ensures that we process them in order, making it easier to detect overlaps.
  
  2. Merging Logic:
  - Create an empty array `mergedIntervals` to store the results.
  - Start with the first interval as the `currentInterval`.
  - Iterate through the remaining intervals:
    - If the `nextInterval` starts before the `currentInterval` ends (overlap):
       - Merge them by updating the `currentInterval`'s end time to the maximum of the two end times.
    - If the `nextInterval` starts after the `currentInterval` ends (no overlap):
       - Add the `currentInterval` to `mergedIntervals`.
       - Set the `nextInterval` as the new `currentInterval`.
  
  3. Add the Last Interval:
  - After the loop, add the `currentInterval` to `mergedIntervals`, as it might not have been added during the loop.
  
  Time and Space Complexity:
  
  Time Complexity: O(n log n) due to sorting.
  
  Space Complexity: O(n) in the worst case, when none of the intervals overlap. In this case, we would store all intervals in the `mergedIntervals` array.
  */
  