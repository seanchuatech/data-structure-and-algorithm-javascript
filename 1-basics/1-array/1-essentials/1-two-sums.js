/* 
https://leetcode.com/problems/two-sum/

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/

function twoSum(nums, target) {
    // Create a hash map (JavaScript object) to store numbers and their indices.
    // The number itself will be the key, and its index in the 'nums' array will be the value.
    const numMap = {}; 
  
    // Iterate through each number in the 'nums' array
    for (let i = 0; i < nums.length; i++) {
      // Calculate the complement (the number needed to add to the current number to reach the target).
      const complement = target - nums[i]; 
  
      // Check if we've seen the complement before (meaning it's in our hash map)
      if (complement in numMap) {
        // If we have, we found the two numbers that add up to the target!
        // Return their indices.
        return [numMap[complement], i]; 
      }
  
      // If we haven't seen the complement, add the current number and its index to the hash map.
      // This way, we can quickly find it if its complement shows up later in the array.
      numMap[nums[i]] = i; 
    }
  
    // If we reach this point, it means no solution was found. 
    // Since the problem states there's always a solution, this line is here for completeness.
    return null; 
  }
  
/*
Key Points and Explanations:

-Hash Map (numMap):  Think of this like a dictionary. It lets us quickly look up whether a specific number has been seen before in the array, along with its index.

-Complement: This is the "other half" of the number pair we're looking for.  For example, if the target is 9 and the current number is 2, the complement is 7.

-numMap.has(complement):  This checks if the complement we need already exists in our hash map.

-numMap.get(complement):  If the complement exists, this retrieves its index from the hash map.

-numMap.set(nums[i], i): This adds the current number and its index to the hash map, so we can find it later if its complement is encountered.
*/

/* Example Usage */
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1]

