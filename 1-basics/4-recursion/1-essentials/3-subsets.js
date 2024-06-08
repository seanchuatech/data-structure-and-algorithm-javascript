/*
https://leetcode.com/problems/subsets/

Given an integer array nums of unique elements, return all possible subsets (the power set).
*/

function subsets(nums) {
    const results = []; // Array to store the subsets
    
    function backtrack(start, currentSubset = []) {
        results.push([...currentSubset]); // Add a copy of the current subset to the results
        
        for (let i = start; i < nums.length; i++) {
        currentSubset.push(nums[i]);       // Include the current element in the subset
        backtrack(i + 1, currentSubset);  // Recursively generate subsets with the remaining elements
        currentSubset.pop();              // Backtrack: remove the current element to explore other options
        }
    }
    
    backtrack(0); // Start backtracking from the first element
    return results;
}

/*
Explanation:

1. results array: Stores all the valid subsets.

2. backtrack function: This recursive function does the following:
        -Takes a start index (the number to start considering) and a currentSubset array (the current subset being built).
        -Adds a copy of the currentSubset to the results array.
        -Iterates from the start index to the end of the nums array.
            -For each element, it:
                -Adds the element to the currentSubset.
                -Recursively calls backtrack to explore subsets starting from the next index (i + 1).
                -Removes the element from the currentSubset (backtracking) to consider other possibilities.

3. Initial Call: Start the backtracking process from index 0 with an empty subset.
*/

/* Example Usage: */
const nums = [1, 2, 3];
const subsetsList = subsets(nums);
console.log(subsetsList);

// Output: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

/*
Time and Space Complexity:

Time Complexity: O(n * 2^n) - For each element, we have two choices (include it or not), and we have n elements.

Space Complexity: O(n) - Due to the recursion depth, the maximum size of the call stack is n. Additionally, the space used to store the subsets in the results array is O(2^n).
*/