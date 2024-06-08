/*
[https://leetcode.com/problems/basic-calculator-ii/](https://leetcode.com/problems/basic-calculator-ii/)

Given a string s which represents an expression, evaluate this expression and return its value. 
*/

function calculate(s) {
    const stack = [];
    let currentNumber = 0;
    let operation = '+'; // Start with '+' to handle the first number

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (!isNaN(char) && char !== ' ') {
            currentNumber = currentNumber * 10 + parseInt(char, 10);
        }

        // If we reach an operator or the end of the string, process the current number and operation
        if (isNaN(char) || i === s.length - 1) {
            switch (operation) {
                case '+':
                    stack.push(currentNumber);
                    break;
                case '-':
                    stack.push(-currentNumber);
                    break;
                case '*':
                    stack.push(stack.pop() * currentNumber);
                    break;
                case '/':
                    stack.push(Math.trunc(stack.pop() / currentNumber)); // Truncate division result
                    break;
            }
            operation = char; // Update the operation for the next number
            currentNumber = 0; // Reset the current number
        }
    }

    // Sum all the numbers in the stack for the final result
    return stack.reduce((sum, num) => sum + num, 0);
}


/* Example Usage: */
console.log(calculate("3+2*2")); // 7
console.log(calculate(" 3/2 ")); // 1
console.log(calculate(" 3+5 / 2 ")); // 5

/*
Explanation:

1. Stack and Initialization:
   - We use a `stack` to keep track of numbers and intermediate results.
   - `currentNumber`:  Starts at 0 and accumulates digits as we traverse the string.
   - `operation`:  Keeps track of the current pending operation. It's initialized to '+' to handle the first number (which is effectively added to 0).

2. Iterating and Parsing:
   - We loop through each character (`char`) in the input string `s`.
   - Digits: If `char` is a digit (and not a space), build the `currentNumber`.
   - Operators or End of String: When we encounter an operator (+, -, *, /) or reach the end of the string, we process the current number and the pending operation:
     - Pop the last number from the stack (`stack.pop()`).
     - Perform the calculation based on the `operation`, and push the result back onto the stack.
     - Update the `operation` to the current character.
     - Reset the `currentNumber` to 0.

3. Calculating Final Result:
   - After processing all characters, the stack contains the final results of all the calculations.
   - Sum up all the numbers in the stack using `reduce` to get the overall result.


Time and Space Complexity:

Time Complexity: O(n) - We process each character in the string once.

Space Complexity: O(n) - In the worst case (all numbers), the stack can grow to the size of the input array.
*/
