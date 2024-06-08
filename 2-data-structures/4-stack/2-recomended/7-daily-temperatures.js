/*
[https://leetcode.com/problems/daily-temperatures/](https://leetcode.com/problems/daily-temperatures/)

Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day toget a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.
*/

function dailyTemperatures(temperatures) {
    const n = temperatures.length;
    const answer = new Array(n).fill(0); // Initialize with 0s
    const stack = []; // Monotonically decreasing stack (stores indices)

    for (let i = 0; i < n; i++) {
        // Pop elements from the stack that are smaller than the current temperature
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            answer[prevIndex] = i - prevIndex; // Calculate the number of days to wait
        }

        stack.push(i); // Push the current index onto the stack
    }

    return answer;
}


/* Example Usage: */
const temperatures1 = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures1));
// Output: [1, 1, 4, 2, 1, 1, 0, 0]

const temperatures2 = [30, 40, 50, 60];
console.log(dailyTemperatures(temperatures2));
// Output: [1, 1, 1, 0]

const temperatures3 = [30, 60, 90];
console.log(dailyTemperatures(temperatures3));
// Output: [1, 1, 0]


/*
Explanation:

1. Monotonic Stack: The solution utilizes a monotonic stack (in this case, a decreasing stack) to keep track of indices of days where we are waiting for a warmer temperature.

2. Iterate and Compare:
   - We iterate through the `temperatures` array.
   - For each temperature, we compare it with the temperature at the index on top of the stack.
   - If the current temperature is higher:
     - Pop elements from the stack until we find a temperature that is higher than or equal to the current one.
     - For each popped index, calculate the waiting days (`i - prevIndex`) and store it in `answer`.
   - Push the current index onto the stack.

3. Return: After processing all temperatures, the `answer` array contains the number of days to wait for a warmer temperature for each day.
*/


/*
Time and Space Complexity:

Time Complexity: O(n) - Each element is pushed onto the stack and popped at most once.

Space Complexity: O(n) - The stack can hold all indices in the worst case (e.g., decreasing temperatures).
*/
