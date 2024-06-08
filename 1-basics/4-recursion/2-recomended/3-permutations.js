/*
[https://leetcode.com/problems/permutations/](https://leetcode.com/problems/permutations/)

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
*/
function permute(nums) {
    const results = []; // Array to store the permutations
  
    function backtrack(perm = []) {
      // Base case: If the permutation length matches the number of elements, add it to results
      if (perm.length === nums.length) {
        results.push([...perm]); // Create a copy to avoid reference issues
        return;
      }
  
      for (let i = 0; i < nums.length; i++) {
        // Check if the current number is already in the permutation
        if (perm.includes(nums[i])) continue;
  
        perm.push(nums[i]);       // Add the number to the permutation
        backtrack(perm);         // Recursively generate permutations with the remaining numbers
        perm.pop();             // Remove the last number (backtracking) to try other possibilities
      }
    }
  
    backtrack();
    return results;
  }
  
  
  /* Example Usage: */
  const nums = [1, 2, 3];
  const permutations = permute(nums);
  console.log(permutations); 
  // Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
  
  
  /*
  Explanation:
  
  1. `results` Array: This array is used to store all the permutations that are found.
  
  2. `backtrack` Function:
     - This is a recursive function that builds up permutations one element at a time.
     - `perm`: The current permutation being constructed. It starts empty and is built up as we go deeper into the recursion.
  
  3. Base Case:
     - If the length of the `perm` array is equal to the length of the original `nums` array, it means we've used all the numbers and have a complete permutation.  We make a copy of the `perm` array using the spread operator (`...perm`) and push it into the `results` array.  We make a copy because JavaScript passes arrays by reference, and we don't want changes later in the recursion to affect the permutation we just stored.
     - The function then returns to the previous level of recursion.
  
  4. Recursive Step:
     - The function iterates over the `nums` array. For each number:
       - It checks if the current number is already in the `perm` array. If so, it skips this number and moves on to the next.
       - If the number is not in the `perm` array, it adds the number to the end of `perm`.
       - It then calls itself recursively (`backtrack(perm)`) to find all permutations that can be made by adding numbers to the end of this new `perm`.
       - After the recursive call returns, it removes the last number it added to `perm` (using `perm.pop()`). This is called "backtracking" - it undoes the previous decision so that we can try a different number in that position.
  
  
  5. Initial Call: The `backtrack` function is initially called with an empty array `[]` as the argument. This starts the process of building up all the permutations.
  */
  
  
  /*
  Time and Space Complexity:
  
  Time Complexity: O(n * n!) - There are n! (n factorial) permutations of n unique elements, and generating each permutation takes O(n) time.
  
  Space Complexity: O(n) - This is due to the recursion depth, as the call stack can go up to n levels deep. We also store up to n! permutations in the `results` array.
  */
  