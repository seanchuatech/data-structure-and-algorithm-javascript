/*
https://leetcode.com/problems/generate-parentheses/

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
*/
function generateParenthesis(n) {
    const result = [];
    
    // Backtracking function
    function backtrack(currentStr = "", open = 0, close = 0) {
    // Base case: When both open and close brackets are used up, add to result
    if (currentStr.length === 2 * n) {
        result.push(currentStr);
    return;
    }
    
    // Recursion: 
    if (open < n) { 
      backtrack(currentStr + '(', open + 1, close); // Add an opening bracket if we haven't used all of them
    }
    if (close < open) { 
      backtrack(currentStr + ')', open, close + 1); // Add a closing bracket only if it won't make the string invalid
    }
    }
    
    backtrack();
    return result;
}

/*
Explanation:

1. Backtracking: The solution uses a backtracking approach to recursively generate valid parentheses combinations.

2. Function Parameters:
    currentStr: The current string being built.
    open: Count of open parentheses used so far.
    close: Count of close parentheses used so far.

3. Base Case:
    -If the length of the currentStr reaches 2 * n (all parentheses have been used), add it to the result array.

4. Recursive Steps:
    -If we still have open parentheses left to use (open < n), add an opening parenthesis and recursively call the backtrack function.
    -If the number of close parentheses used is less than the number of open parentheses (close < open), add a closing parenthesis and recursively call the backtrack function. This ensures that we always maintain a valid sequence.

5. Trigger Backtracking: The initial call to backtrack starts the process with an empty string and both open and close counts set to 0. */

/* Example Usage: */
const n1 = 3;
const result1 = generateParenthesis(n1);
console.log(result1); // Output: ["((()))","(()())","(())()","()(())","()()()"]

const n2 = 1;
const result2 = generateParenthesis(n2);
console.log(result2); // Output: ["()"]

/*
Time and Space Complexity:

Time Complexity: O(4^n / sqrt(n)) - This is a Catalan number-related problem, and the time complexity is exponential. Each valid combination has n open and n close parentheses, and there are 2 choices at each step (add open or close). However, we prune invalid sequences, reducing the complexity slightly.

Space Complexity: O(n) - Due to the recursive call stack and the storage of results. In the worst case, the depth of the recursion can be n, and each call stores a string of length at most 2n. Additionally, the space for the result array can be O(4^n / sqrt(n)).
*/