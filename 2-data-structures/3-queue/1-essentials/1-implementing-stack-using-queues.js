/*
[https://leetcode.com/problems/implement-stack-using-queues/](https://leetcode.com/problems/implement-stack-using-queues/)

Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).
*/
class MyStack {
    constructor() {
      this.q1 = []; // Primary queue to store elements
      this.q2 = []; // Auxiliary queue for temporary storage
    }
  
    push(x) {
      this.q2.push(x);  // Push the new element into q2
      while (this.q1.length > 0) {
        this.q2.push(this.q1.shift()); // Move all elements from q1 to q2
      }
      [this.q1, this.q2] = [this.q2, this.q1]; // Swap q1 and q2 to maintain LIFO order
    }
  
    pop() {
      return this.q1.shift(); // Remove and return the top element from q1
    }
  
    top() {
      return this.q1[0]; // Return the top element from q1 (without removing)
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
  
  * Two Queues: We use two queues, `q1` and `q2`, to simulate a stack.
  * `push(x)`:
     - Push the new element `x` into `q2`.
     - Transfer all elements from `q1` to `q2`. This reverses the order of existing elements.
     - Swap `q1` and `q2`, so the newly added element is now at the front of `q1` (top of the stack).
  * `pop()`: 
     - Simply remove and return the first element from `q1` (LIFO order).
  * `top()`:
     - Return the first element of `q1` without removing it.
  * `empty()`:
     - Check if `q1` is empty.
  */
  
  
  /*
  Time and Space Complexity:
  
  Time Complexity:
     - `push()`: O(n) - We need to transfer n elements from q1 to q2.
     - `pop()`, `top()`, and `empty()`: O(1) - Constant time operations.
  
  Space Complexity: O(n) - Both queues can store up to n elements in the worst case.
  */
  
  /* Follow-up: Implementing Stack with One Queue */
  
  /*
  It's possible to implement a stack using only one queue. The idea is to make the `push` operation costly:
  
  - `push(x)`:
     - Enqueue the new element `x`.
     - Dequeue all other elements and re-enqueue them. This moves the new element to the front (top).
  
  The other operations (`pop`, `top`, `empty`) remain the same as in the two-queue implementation.
  */
  