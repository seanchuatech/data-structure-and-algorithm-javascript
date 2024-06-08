/*
[https://leetcode.com/problems/insert-interval/](https://leetcode.com/problems/insert-interval/)

You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascendingorder by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert new order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.
*/
function insert(intervals, newInterval) {
    const mergedIntervals = [];
    let i = 0; 

    // Add intervals before the new interval 
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        mergedIntervals.push(intervals[i]);
        i++;
    }

    // Merge overlapping intervals
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval = [
            Math.min(newInterval[0], intervals[i][0]),
            Math.max(newInterval[1], intervals[i][1])
        ];
        i++;
    }
    mergedIntervals.push(newInterval); 

    // Add remaining intervals
    while (i < intervals.length) {
        mergedIntervals.push(intervals[i]);
        i++;
    }

    return mergedIntervals;
}

/* Example Usage: */
const intervals1 = [[1, 3], [6, 9]];
const newInterval1 = [2, 5];
const result1 = insert(intervals1, newInterval1);
console.log(result1); // Output: [[1, 5], [6, 9]]

const intervals2 = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]];
const newInterval2 = [4, 8];
const result2 = insert(intervals2, newInterval2);
console.log(result2); // Output: [[1, 2], [3, 10], [12, 16]]

/*
**Explanation:**

1. **Initialization:** Create an empty array `mergedIntervals` to store the merged intervals.
2. **Adding Intervals Before the New Interval:** Iterate through `intervals` as long as the current interval's end is less than the `newInterval`'s start. This adds all non-overlapping intervals that come before the `newInterval`.
3. **Merging Overlapping Intervals:** While the current interval in `intervals` overlaps with the `newInterval`, merge them by updating the `newInterval`'s start and end. Increment `i` to move to the next interval in `intervals`.
4. **Adding the New Interval:** Add the merged `newInterval` to the `mergedIntervals`.
5. **Adding Remaining Intervals:** Add the remaining intervals from `intervals` that come after the merged `newInterval`.
6. **Return:** Return the `mergedIntervals` array.

**Time Complexity:**

-   O(n), where n is the length of `intervals`. In the worst case, we iterate through the entire `intervals` array once.

**Space Complexity:**

-   O(n) in the worst case, when the new interval doesn't overlap with any existing interval, so we have to create a new array to store all the intervals.
*/
