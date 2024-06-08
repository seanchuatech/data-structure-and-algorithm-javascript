/*
[https://leetcode.com/problems/implement-queue-using-stacks/](https://leetcode.com/problems/implement-queue-using-stacks/)

Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).
*/

class MyQueue {
    constructor() {
      this.inputStack = []; // Stack to handle incoming elements (push)
      this.outputStack = []; // Stack to hold elements in the correct order for pop/peek
    }
  
    push(x) {
      this.inputStack.push(x);
    }
  
    peek() {
      if (this.outputStack.length === 0) { // If the output stack is empty
        this.shiftStacks(); // Transfer elements from input to output, reversing order
      }
      return this.outputStack[this.outputStack.length - 1]; // Peek at the top of the output stack (front of queue)
    }
  
    pop() {
      this.peek(); // Ensure the output stack has the correct order
      return this.outputStack.pop(); // Remove from the front (top of output stack)
    }
  
    empty() {
      return this.inputStack.length === 0 && this.outputStack.length === 0;
    }
  
    // Helper function to transfer elements from input to output stack
    shiftStacks() {
      while (this.inputStack.length > 0) {
        this.outputStack.push(this.inputStack.pop());
      }
    }
  }
  
  /* Example Usage: */
  const myQueue = new MyQueue();
  myQueue.push(1);
  myQueue.push(2);
  console.log(myQueue.peek()); // 1
  console.log(myQueue.pop()); // 1
  console.log(myQueue.empty()); // false
  
  /*
  Explanation:
  
  * Two Stacks:
      - `inputStack`: Used for pushing new elements.
      - `outputStack`: Used for popping and peeking at the front of the queue.
  
  * `push(x)`:
      - Simply push the new element onto `inputStack`.
  
  * `peek()`:
      - If `outputStack` is empty, transfer elements from `inputStack` to `outputStack` to get the correct FIFO order.
      - Return the top element of `outputStack`.
  
  * `pop()`:
      - Call `peek()` to ensure correct order in `outputStack`.
      - Pop and return the top element from `outputStack`.
  
  * `empty()`:
      - Check if both stacks are empty.
  
  * Amortized O(1):
      - While a single `peek` or `pop` might take O(n) (when the output stack is empty), over a series of n operations, the total time is still O(n). 
      - This is because each element is moved between the stacks only once.
  */
  
  
  /*
  Time and Space Complexity:
  
  Time Complexity:
      - Amortized O(1) per operation.
      - Worst case O(n) for a single peek() or pop() operation when outputStack is empty.
  
  Space Complexity: O(n) - We use two stacks that can each store up to n elements in the worst case.
  */
  