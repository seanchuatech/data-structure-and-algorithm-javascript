/*
[https://leetcode.com/problems/implement-stack-using-queues/](https://leetcode.com/problems/implement-stack-using-queues/)

Implement a last-in-first-out (LIFO) stack using only two queues.
*/

class MyStack {
    constructor() {
      this.q1 = []; // Primary queue
      this.q2 = []; // Auxiliary queue for temporary storage
    }
  
    push(x) {
      this.q2.push(x); // Push the new element to the back of q2
      while (this.q1.length > 0) {
        this.q2.push(this.q1.shift()); // Move all elements from q1 to q2 (reverses order)
      }
      [this.q1, this.q2] = [this.q2, this.q1]; // Swap q1 and q2, so the new element is at the front of q1
    }
  
    pop() {
      return this.q1.shift(); // Remove and return the top element (front of q1)
    }
  
    top() {
      return this.q1[0]; // Return the top element (front of q1)
    }
  
    empty() {
      return this.q1.length === 0; // Check if q1 is empty
    }
  }
  
  /* Example Usage: */
  let myStack = new MyStack();
  myStack.push(1);
  myStack.push(2);
  console.log(myStack.top()); // return 2
  console.log(myStack.pop()); // return 2
  console.log(myStack.empty()); // return False
  
  
  /*
  Explanation:
  
  * Two Queues: The class uses two queues, `q1` and `q2`, to simulate a stack.
  * `push(x)`:
      - The new element `x` is added to the back of `q2`.
      - All elements from `q1` are moved to `q2`. This reverses their order, effectively placing the new element at the front.
      - `q1` and `q2` are swapped so that the new element is now at the front of `q1`.
  * `pop()`:
      - Removes and returns the front element of `q1` (which is the top of the stack).
  * `top()`:
      - Returns the front element of `q1` without removing it.
  * `empty()`:
      - Checks if `q1` is empty.
  
  Time and Space Complexity:
  
  - Time Complexity:
      - `push(x)`: O(n) (due to transferring elements between queues)
      - `pop()`, `top()`, `empty()`: O(1) 
  - Space Complexity: O(n) - Both queues can store up to n elements in the worst case.
  */
  