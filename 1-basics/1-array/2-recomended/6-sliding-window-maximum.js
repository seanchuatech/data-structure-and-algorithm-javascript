/*
https://leetcode.com/problems/sliding-window-maximum/

You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.
*/

function maxSlidingWindow(nums, k) {
    const result = [];
    const deque = []; // Use a deque to store indices of potential maximum elements
    
    for (let i = 0; i < nums.length; i++) {
        // Remove indices that are out of the window
        while (deque.length > 0 && deque[0] < i - k + 1) {
        deque.shift(); // Remove from the front
        }
        
        // Remove indices whose corresponding values are smaller than the current value
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
        deque.pop(); // Remove from the back
        }
        
        deque.push(i); // Add the current index to the deque
        
        // Add the maximum element in the current window to the result
        if (i >= k - 1) {
        result.push(nums[deque[0]]);
        }
    }
    
    return result;
}
    
/*
Explanation:

1. Deque Initialization: We initialize a deque (double-ended queue) to store indices of potential maximum elements within the sliding window. The deque will always be sorted in descending order of the corresponding values in nums.

2. Iteration:
    -We iterate through the nums array. For each element:
        -We remove indices from the front of the deque that are no longer within the sliding window (i.e., their positions are less than i - k + 1).
        -We remove indices from the back of the deque whose corresponding values in nums are smaller than the current element (nums[i]). This is because these elements can never be the maximum in any future window.
        -We add the current index i to the back of the deque.

3. Result Calculation:
    -When the current index i is greater than or equal to k - 1, it means we have a full window of size k. We add the value of the element at the front of the deque (which is the maximum element in the current window) to the result array.

4. Return: After processing the entire array, we return the result array containing the maximum elements for each sliding window.
*/

/* Example Usage: */
const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
const result = maxSlidingWindow(nums, k);
console.log(result); // Output: [3, 3, 5, 5, 6, 7]

/*
Time and Space Complexity:

Time Complexity: O(n) - Each element in the array is processed at most twice (once when it's added to the deque and once when it's removed), resulting in linear time complexity.

Space Complexity: O(k) - The deque stores at most k indices at any given time, representing the elements in the current sliding window.
*/