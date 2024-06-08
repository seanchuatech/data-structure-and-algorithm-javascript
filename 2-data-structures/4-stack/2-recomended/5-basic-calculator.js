/*
[https://leetcode.com/problems/basic-calculator/](https://leetcode.com/problems/basic-calculator/)

Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().
*/

function calculate(s) {
    const stack = [];
    let operand = 0;
    let sign = 1; // 1 for positive, -1 for negative

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (!isNaN(char)) { // Digit
            operand = operand * 10 + parseInt(char, 10);
        } else if (char === "+" || char === "-") {
            // Apply previous sign and operand to the result, reset for the next number
            stack.push(sign * operand); 
            operand = 0;
            sign = char === "+" ? 1 : -1; 
        } else if (char === "(") {
            // Push current result and sign onto stack, reset for the new expression
            stack.push(sign);
            stack.push("(");
            sign = 1; 
        } else if (char === ")") {
            // Evaluate the expression inside the parentheses
            stack.push(sign * operand); 
            operand = 0;
            let result = 0;
            while (stack[stack.length - 1] !== "(") { // Pop until opening parenthesis is reached
                result += stack.pop();
            }
            stack.pop(); // Discard the opening parenthesis
            result *= stack.pop(); // Multiply by the sign before the parenthesis
            stack.push(result);
        }
    }
    
    // Apply any remaining operand and sign
    stack.push(sign * operand);

    // Sum up all remaining values in the stack
    return stack.reduce((acc, val) => acc + val, 0);
}


/* Example Usage: */
console.log(calculate("1 + 1")); // 2
console.log(calculate(" 2-1 + 2 ")); // 3
console.log(calculate("(1+(4+5+2)-3)+(6+8)")); // 23


/*
Explanation:

1. Stack: 
   - We use a stack to keep track of operands and signs (for handling parentheses).

2. Parsing the String:
   - Iterate over each character in the string `s`.
   - Digits: Build the current operand (`operand`) from consecutive digits.
   - '+' or '-': 
     - Push the previous operand multiplied by its sign onto the stack.
     - Reset the `operand` and update the `sign` for the next number.
   - '(': 
     - Push the current sign onto the stack to be used when the corresponding ')' is encountered.
     - Push a marker '(' onto the stack to indicate the start of a new expression.
     - Reset the `sign` to 1 for the new expression.
   - ')':
     - Push the current operand multiplied by its sign onto the stack.
     - Evaluate the expression inside the parentheses:
       - Pop elements from the stack until the opening '(' is found, accumulating the result.
       - Multiply the result by the sign that was pushed before the opening '('.
       - Push the evaluated result back onto the stack.

3. Final Calculation:
   - After processing all characters, if any operand remains, push it onto the stack with its corresponding sign.
   - Sum up all values remaining in the stack to get the final result.
*/


/*
Time and Space Complexity:

Time Complexity: O(n) - We iterate through the string once.

Space Complexity: O(n) - In the worst case (nested parentheses), the stack can grow to the size of the input string.
*/
