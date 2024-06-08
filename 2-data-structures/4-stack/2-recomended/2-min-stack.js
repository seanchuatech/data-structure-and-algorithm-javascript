/*
[https://leetcode.com/problems/min-stack/](https://leetcode.com/problems/min-stack/)

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
*/
class MinStack {
    constructor() {
      this.stack = []; // Main stack to store elements
      this.minStack = []; // Auxiliary stack to keep track of minimum values
    }
  
    push(val) {
      this.stack.push(val);
      // Push the current min value onto the minStack
      if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) { 
        this.minStack.push(val);
      }
    }
  
    pop() {
      const popped = this.stack.pop();
      // If the popped value was the minimum, also pop from the minStack
      if (popped === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
      }
    }
  
    top() {
      return this.stack[this.stack.length - 1]; 
    }
  
    getMin() {
      return this.minStack[this.minStack.length - 1];
    }
  }
  
  /* Example Usage: */
  const minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  console.log(minStack.getMin()); // return -3
  minStack.pop();
  console.log(minStack.top());    // return 0
  console.log(minStack.getMin()); // return -2
  
  
  /*
  Explanation:
  
  * Two Stacks:
      - `stack`: This is the main stack that stores all the elements.
      - `minStack`: This auxiliary stack stores the minimum values encountered so far.  
        - When pushing, we push the current value onto `minStack` if it's less than or equal to the current minimum.
        - When popping, if the popped value is the current minimum, we pop from `minStack` as well.
        - This way, the top of `minStack` always holds the current minimum in the main `stack`.
  
  * Operations:
      - `push(val)`:
        - Pushes `val` onto the main `stack`.
        - If `val` is less than or equal to the current minimum (`this.minStack[this.minStack.length - 1]`), push `val` onto `minStack`.
  
      - `pop()`:
        - Pops the top element from the main `stack`.
        - If the popped element was the minimum, pop from the `minStack` as well.
  
      - `top()`:
        - Returns the top element of the main `stack`.
  
      - `getMin()`:
        - Returns the top element of the `minStack` (which is the current minimum).
  */
  
  
  /*
  Time and Space Complexity:
  
  Time Complexity: O(1) for all operations: `push`, `pop`, `top`, and `getMin`.
  
  Space Complexity: O(n) - In the worst case, we might store all elements in both the `stack` and `minStack`.
  */
  