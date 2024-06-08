/*
https://leetcode.com/problems/combinations/

Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].
*/

function combine(n, k) {
    const results = [];
    
    function backtrack(start, comb = []) {
        // Base case: if the combination has k elements, add it to the results
        if (comb.length === k) {
            results.push([...comb]); // Create a copy of the combination to avoid modification
        return;
        }
        
        // Iterate through numbers from start to n
        for (let i = start; i <= n; i++) {
        comb.push(i); // Add the current number to the combination
        backtrack(i + 1, comb); // Recursively explore combinations starting from the next number
        comb.pop(); // Remove the last number (backtracking step) to try other combinations
        }
    }
    
    backtrack(1);
    return results;
}

/*
Explanation:
1. results array: Stores all the valid combinations.

2. backtrack function: This recursive function does the following:
    -Takes a start index (the number to start considering) and a comb array (the current combination).
    -Base case: If comb has k elements, it's a valid combination, so add a copy to results.
    -Recursive step:
        -Iterate from start to n.
        -Add the current number i to comb.
        -Recursively call backtrack with the next start index (i + 1) and the updated comb.
        -Remove the last number from comb (backtracking) to try other possibilities.

3. Initial Call: Start the backtracking process from 1. */

/* Example Usage: */
const n = 4;
const k = 2;
const combinations = combine(n, k);
console.log(combinations);
// Output: [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]

/*
Time and Space Complexity:

Time Complexity: O(k * C(n, k)), where C(n, k) is the binomial coefficient (n choose k). This is because we generate all possible combinations.

Space Complexity: O(k) - Due to the recursion depth, the maximum size of the call stack is k. Additionally, the space used to store the combinations in the results array is O(C(n, k)).
*/