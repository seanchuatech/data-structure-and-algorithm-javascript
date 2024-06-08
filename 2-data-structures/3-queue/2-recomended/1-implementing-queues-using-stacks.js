/*
[https://leetcode.com/problems/implement-queue-using-stacks/](https://leetcode.com/problems/implement-queue-using-stacks/)

Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).
*/

class MyQueue {
    constructor() {
      this.inputStack = [];    // Stack to handle incoming elements
      this.outputStack = [];   // Stack to reverse the order for dequeue
    }
  
    push(x) {
      this.inputStack.push(x);  // Push elements onto the input stack
    }
  
    pop() {
      this.peek();             // Ensure the output stack has the correct order
      return this.outputStack.pop(); // Remove from the front (top of output stack)
    }
  
    peek() {
      if (this.outputStack.length === 0) { // If the output stack is empty
        while (this.inputStack.length > 0) {
          this.outputStack.push(this.inputStack.pop()); // Transfer elements from input to output, reversing order
        }
      }
      return this.outputStack[this.outputStack.length - 1]; // Peek at the top of the output stack (front of queue)
    }
  
    empty() {
      return this.inputStack.length === 0 && this.outputStack.length === 0; // Both stacks need to be empty for the queue to be empty
    }
  }
  
  /* Example Usage: */
  const myQueue = new MyQueue();
  myQueue.push(1); // queue is: [1]
  myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
  console.log(myQueue.peek()); // return 1
  console.log(myQueue.pop()); // return 1, queue is [2]
  console.log(myQueue.empty()); // return false
  
  /*
  Explanation:
  
  * Two Stacks: We use two stacks (`inputStack` and `outputStack`) to implement the queue.
  
  * `push(x)`:
     - Pushes the new element `x` onto the `inputStack`.
  
  * `peek()`:
     - If `outputStack` is empty, we transfer all elements from `inputStack` to `outputStack`. This reverses the order, placing the oldest element at the top of `outputStack`.
     - Returns the top element of `outputStack` (which is the front of the queue).
  
  * `pop()`:
     - Calls `peek()` to ensure the correct order of elements in `outputStack`.
     - Removes and returns the top element from `outputStack` (the front of the queue).
  
  * `empty()`:
     - Checks if both stacks are empty to determine if the queue is empty.
  */
  
  
  /*
  Time Complexity:
  
  - Amortized O(1) for all operations. While a single `peek` or `pop` might take O(n) if it triggers the transfer of elements between stacks, the total cost over many operations is still O(n), leading to an amortized cost of O(1) per operation.
  
  Space Complexity: O(n) - Both stacks can store up to n elements in the worst case.
  */
  