/*
https://leetcode.com/problems/contains-duplicate/

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

function containsDuplicate(nums) {
    // Create a Set to keep track of unique values.
    const uniqueNums = new Set();
    
    // Iterate through the array.
    for (const num of nums) {
    // If the Set already contains the number, return true (duplicate found).
    if (uniqueNums.has(num)) {
    return true;
    }
    // Otherwise, add the number to the Set.
    uniqueNums.add(num);
    }
    
    // If no duplicates were found after iterating through the entire array, return false.
    return false;
}
    
/*
Explanation:

1. Create a Set: We use a Set data structure to efficiently store unique values. Sets have constant-time lookups (set.has(value)), making duplicate checks fast.

2. Iterate and Check: We iterate through each element (num) in the nums array.

3. Duplicate Check: For each num, we check if it's already in the uniqueNums set:
    -If it is, it means we found a duplicate, and we return true.
    -If not, we add the num to the uniqueNums set to mark it as seen.

4. Return False (No Duplicates): If the loop finishes without finding any duplicates, we return false.
*/

/* Example Usage: */
const nums = [1, 2, 3, 1];
const result = containsDuplicate(nums);
console.log(result); // Output: true

/*
Time and Space Complexity:

Time Complexity: O(n) - We iterate through the array once. Set operations (set.has and set.add) have average-case constant time complexity.

Space Complexity: O(n) - In the worst case (all elements are unique), we'll store all elements in the uniqueNums set.
*/