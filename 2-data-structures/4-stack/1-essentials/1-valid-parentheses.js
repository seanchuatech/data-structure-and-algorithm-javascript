/*
[https://leetcode.com/problems/valid-parentheses/](https://leetcode.com/problems/valid-parentheses/)

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
*/

function isValid(s) {
    const stack = [];
    const mapping = {
        ")": "(",
        "}": "{",
        "]": "["
    };
    for (const char of s) {
        if (mapping[char]) {
            // If it's a closing bracket
            const topElement = stack.pop(); // Pop the top element from the stack
            if (topElement !== mapping[char]) {
                return false; // Mismatch: top element doesn't match the expected opening bracket
            }
        } else {
            stack.push(char); // If it's an opening bracket, push it onto the stack
        }
    }
    return stack.length === 0; // Valid if the stack is empty at the end
}

/* Example Usage: */
console.log(isValid("()"));  // True
console.log(isValid("()[]{}"));  // True
console.log(isValid("(]"));  // False
console.log(isValid("([)]"));  // False
console.log(isValid("{[]}"));  // True

/*
Explanation:

1. Initialize:
   - `stack`: An array to simulate a stack data structure.
   - `mapping`: A map to store the corresponding opening bracket for each closing bracket.

2. Iterate Through String:
   - For each character `char` in the string `s`:
     - If `char` is a closing bracket (exists in `mapping`):
       - Pop the top element from the `stack`.
       - If the popped element doesn't match the expected opening bracket (`mapping[char]`), return `false`.
     - If `char` is an opening bracket, push it onto the `stack`.

3. Final Check:
   - After processing all characters, if the stack is empty, it means all brackets were properly opened and closed. Return `true`.
   - If the stack is not empty, it means there are unmatched opening brackets, so return `false`.
*/

/*
Time and Space Complexity:

Time Complexity: O(n) - We process each character in the string once.

Space Complexity: O(n) - In the worst case (all opening brackets), the stack will store all characters of the string.
*/
