/*
https://leetcode.com/problems/3sum/

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/

function threeSum(nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    const result = [];
    
    for (let i = 0; i < nums.length - 2; i++) { // Fix the first element of the triplet
        if (i > 0 && nums[i] === nums[i - 1]) { // Skip duplicates for the first element
        continue;
        }
        
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
            
                // Skip duplicates for the second and third elements
                while (left < right && nums[left] === nums[left - 1]) {
                left++;
                }
                while (left < right && nums[right] === nums[right + 1]) {
                right--;
                }
            } else if (sum < 0) {
                left++;
            } else { // sum > 0
                right--;
            }
        }
    }
    
    return result;
}
    
/*
Explanation:
1. Sort the Array: We sort the array to efficiently eliminate duplicate triplets. Sorting also allows us to use the two-pointer approach.

2. Fix First Element: Iterate through the array up to the third-to-last element.

3. Skip Duplicates: If the current element is the same as the previous one, skip it to avoid duplicate triplets.

4. Two-Pointer Approach: Use two pointers (left and right) to find the other two elements in the triplet.

5. Calculate Sum: Calculate the sum of the three elements.

6. Check and Update Pointers:
    -If the sum is 0, we've found a triplet. Add it to the result, move both pointers, and skip duplicates to avoid redundancy.
    -If the sum is less than 0, move the left pointer to try a larger value.
    -If the sum is greater than 0, move the right pointer to try a smaller value.

7. Return the Result: After all iterations, return the array containing the unique triplets. */

/* Example Usage: */
const nums = [-1, 0, 1, 2, -1, -4];
const result = threeSum(nums);
console.log(result); // Output: [[-1,-1,2],[-1,0,1]]

/*
Time and Space Complexity:

Time Complexity: O(n^2), where n is the length of the input array nums. The sorting takes O(n log n), and the nested loops take O(n^2).

Space Complexity: O(n) or O(log n) depending on the sorting algorithm used. The space used to store the result triplets is not considered as extra space.
*/