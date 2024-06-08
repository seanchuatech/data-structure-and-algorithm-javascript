/*
[https://leetcode.com/problems/subsets-ii/](https://leetcode.com/problems/subsets-ii/)

Given an integer array `nums` that may contain duplicates, return all possible subsets (the power set).
*/

function subsetsWithDup(nums) {
    nums.sort((a, b) => a - b); // Sort the input array to handle duplicates
    const results = [];
  
    function backtrack(start, currentSubset = []) {
      results.push([...currentSubset]); // Add a copy of the current subset
  
      for (let i = start; i < nums.length; i++) {
        // Skip duplicates to avoid generating duplicate subsets
        if (i > start && nums[i] === nums[i - 1]) continue;
  
        currentSubset.push(nums[i]);         // Include the current element in the subset
        backtrack(i + 1, currentSubset);    // Recursively generate subsets with the remaining elements
        currentSubset.pop();                // Backtrack: remove the current element to explore other options
      }
    }
  
    backtrack(0); // Start backtracking from the first element
    return results;
}

/* Example Usage: */
const nums = [1, 2, 2];
const subsets = subsetsWithDup(nums);
console.log(subsets); 
// Output: [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]] (order may vary)

/*
Time and Space Complexity:

Time Complexity: O(n * 2^n) - The same as the basic subsets problem. Even though we skip duplicates, in the worst case, we might still need to explore all combinations.

Space Complexity: O(n) - Due to the recursion depth, the maximum size of the call stack is n. Additionally, the space used to store the subsets in the `results` array is O(2^n). 
*/
