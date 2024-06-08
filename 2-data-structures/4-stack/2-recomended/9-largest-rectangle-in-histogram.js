/*
[https://leetcode.com/problems/largest-rectangle-in-histogram/](https://leetcode.com/problems/largest-rectangle-in-histogram/)

Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.
*/

function largestRectangleArea(heights) {
    const stack = [-1]; // Initialize with -1 to act as a base for the first bar
    let maxArea = 0;

    for (let i = 0; i <= heights.length; i++) {
        // If the current bar is shorter than or equal to the top of the stack, pop
        while (stack.length > 1 && (i === heights.length || heights[i] <= heights[stack[stack.length - 1]])) { 
            const height = heights[stack.pop()]; // Get the popped bar's height
            const width = i - stack[stack.length - 1] - 1; // Calculate width (distance between indices)
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i); // Push the current bar's index onto the stack
    }

    return maxArea;
}

/* Example Usage: */
const heights1 = [2, 1, 5, 6, 2, 3];
const largestArea1 = largestRectangleArea(heights1);
console.log(largestArea1);  // Output: 10

const heights2 = [2, 4];
const largestArea2 = largestRectangleArea(heights2);
console.log(largestArea2);  // Output: 4


/*
Explanation:

1. Monotonic Stack: The algorithm uses a monotonically increasing stack to keep track of the indices of bars.
2. Iterate and Compare:
   - We iterate through each bar's height in the `heights` array, including a "dummy" 0-height bar at the end (to process any remaining bars in the stack).
   - For each bar:
     - Pop bars from the stack as long as the current bar is shorter than or equal to the top bar in the stack.
     - For each popped bar, calculate its area (height * width), where width is the difference between the current index `i` and the index of the next smaller bar (or the end of the array if no smaller bar exists). Update `maxArea` if the calculated area is larger.
   - Push the current bar's index onto the stack.

3. Post-Loop Processing:
   - After the main loop, some bars might still be in the stack.  
   - We continue popping them, calculating their areas, and updating `maxArea` until the stack is empty.
   - The width for these remaining bars is calculated by considering the end of the array as the right boundary.

4. Return Max Area: Finally, we return the maximum area found.
*/

/*
Time and Space Complexity:

Time Complexity: O(n) - Although there are nested loops, each bar is pushed and popped at most once.
Space Complexity: O(n) - In the worst case, the stack can hold all the bar indices.
*/
