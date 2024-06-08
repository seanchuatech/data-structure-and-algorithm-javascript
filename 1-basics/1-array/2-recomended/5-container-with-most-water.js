/*
https://leetcode.com/problems/container-with-most-water/description/

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the containercontains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
*/

function maxArea(height) {
    let maxWater = 0;
    let left = 0;
    let right = height.length - 1;
    
    while (left < right) {
        const currentArea = Math.min(height[left], height[right]) * (right - left);
        maxWater = Math.max(maxWater, currentArea);
        
        if (height[left] < height[right]) {
        left++; // Move the left pointer if the left line is shorter
        } else {
        right--; // Move the right pointer if the right line is shorter or equal
        }
    }
    
    return maxWater;
}
    
/*
Explanation:

1. Two Pointers: The solution employs a two-pointer approach. We start with left pointing to the beginning of the array and right pointing to the end.

2. Calculate Area: In each iteration, we calculate the area formed by the lines at the current left and right positions. The area is determined by the shorter line's height multiplied by the distance between the lines.

3. Update Max Water: We update the maxWater variable if the calculated currentArea is greater than the existing maxWater.

4. Move Pointers:
    -If the left line is shorter, we move the left pointer to the right.
    -If the right line is shorter (or equal), we move the right pointer to the left.
    -This strategy ensures that we are always considering potentially larger areas by moving the pointer of the shorter line towards the center.
Repeat: We repeat steps 2-4 until the left and right pointers meet.

Return Max Water:  Finally, we return the maximum area stored in maxWater.
*/

/* Example Usage: */
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const maxAreaValue = maxArea(height);
console.log(maxAreaValue); // Output: 49

/*
Time and Space Complexity:

Time Complexity: O(n) - We iterate through the array once.

Space Complexity: O(1) - We use a constant amount of space to store variables (maxWater, left, and right).
*/