/*
[https://leetcode.com/problems/evaluate-reverse-polish-notation/](https://leetcode.com/problems/evaluate-reverse-polish-notation/)

Given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.
*/
function evalRPN(tokens) {
    const stack = [];
    const operators = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => Math.trunc(a / b) // Truncate towards zero for integer division
    };
  
    for (const token of tokens) {
      if (token in operators) {
        const num2 = stack.pop();
        const num1 = stack.pop();
        const result = operators[token](num1, num2);
        stack.push(result);
      } else {
        stack.push(parseInt(token, 10)); // Convert token to integer and push
      }
    }
  
    return stack.pop(); // The final result is the only element left in the stack
  }
  
  /* Example Usage: */
  const tokens1 = ["2", "1", "+", "3", "*"];
  const result1 = evalRPN(tokens1);
  console.log(result1); // Output: 9
  
  const tokens2 = ["4", "13", "5", "/", "+"];
  const result2 = evalRPN(tokens2);
  console.log(result2); // Output: 6
  
  const tokens3 = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
  const result3 = evalRPN(tokens3);
  console.log(result3); // Output: 22
  
  
  /*
  Explanation:
  
  1. Stack and Operators:
     - `stack`: An array is used as a stack to store operands (numbers) and intermediate results.
     - `operators`: A dictionary (object) is created to map operator symbols to their corresponding functions. This makes the code more readable and easier to maintain.
  
  2. Iterating Through Tokens:
     - The code iterates through each `token` in the `tokens` array.
     - **Number:** If the `token` is a number (not an operator), it's converted to an integer using `parseInt` and pushed onto the `stack`.
     - **Operator:** If the `token` is an operator:
       - The top two numbers (`num2` and `num1`) are popped from the `stack`.
       - The corresponding operator function is looked up in the `operators` dictionary and applied to `num1` and `num2`.
       - The result of the operation is pushed back onto the `stack`.
  
  3. Returning the Result:
     - After processing all tokens, the final result of the expression is the only element remaining in the `stack`. It is popped and returned.
  
  Key Improvements:
  
  - **JavaScript-Specific:** The code is adapted to JavaScript syntax and conventions.
  - **Integer Division:** The division operator (`/`) is handled using `Math.trunc(a / b)` to ensure integer division (truncation towards zero).
  - **parseInt with Radix:**  `parseInt(token, 10)` is used to explicitly specify base-10 conversion when parsing the number tokens.
  
  Time and Space Complexity:
  
  Time Complexity: O(n) - Each token is processed once.
  Space Complexity: O(n) - In the worst case (all numbers), the stack can grow to the size of the input array.
  */
  