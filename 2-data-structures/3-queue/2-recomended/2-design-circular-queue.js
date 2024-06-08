/*
[https://leetcode.com/problems/design-circular-queue/](https://leetcode.com/problems/design-circular-queue/)
Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle, and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".

One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.
*/
class MyCircularQueue {
    constructor(k) {
        this.queue = Array(k).fill(null);  
        this.headIndex = 0;             
        this.count = 0;                 
        this.capacity = k;             
    }

    enQueue(value) {
        if (this.isFull()) {
            return false; 
        }
        
        const tailIndex = (this.headIndex + this.count) % this.capacity; 
        this.queue[tailIndex] = value;
        this.count++;
        return true;
    }

    deQueue() {
        if (this.isEmpty()) {
            return false;
        }
        this.queue[this.headIndex] = null; 
        this.headIndex = (this.headIndex + 1) % this.capacity; 
        this.count--;
        return true;
    }

    Front() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.queue[this.headIndex];
    }

    Rear() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.queue[(this.headIndex + this.count - 1) % this.capacity]; 
    }

    isEmpty() {
        return this.count === 0;
    }

    isFull() {
        return this.count === this.capacity;
    }
}

/* Example Usage: */
let myCircularQueue = new MyCircularQueue(3);
console.log(myCircularQueue.enQueue(1)); // return True
console.log(myCircularQueue.enQueue(2)); // return True
console.log(myCircularQueue.enQueue(3)); // return True
console.log(myCircularQueue.enQueue(4)); // return False
console.log(myCircularQueue.Rear());     // return 3
console.log(myCircularQueue.isFull());   // return True
console.log(myCircularQueue.deQueue());  // return True
console.log(myCircularQueue.enQueue(4)); // return True
console.log(myCircularQueue.Rear());     // return 4


/*
**Explanation:**

1. **Initialization:** The constructor initializes an array of size `k` filled with nulls to represent the circular queue. `headIndex` points to the front of the queue, and `count` tracks the number of elements.

2. **`enQueue(value)`:**
   - If the queue is full, it returns `false`.
   - Otherwise, it calculates the `tailIndex` (where the element will be inserted) using the formula `(headIndex + count) % capacity`.
   - The value is inserted at `tailIndex`, `count` is incremented, and it returns `true`.

3. **`deQueue()`:**
   - If the queue is empty, it returns `false`.
   - Otherwise, it sets the element at `headIndex` to `null` and increments `headIndex` modulo `capacity` (to wrap around).
   - It decrements `count` and returns `true`.

4. **`Front()` and `Rear()`:**
   - If the queue is empty, they return -1.
   - Otherwise, they return the elements at the `headIndex` and `tailIndex`, respectively. `tailIndex` is calculated as `(headIndex + count - 1) % capacity`.

5. **`isEmpty()` and `isFull()`:**
   - Return `true` if the queue is empty or full, respectively.

**Time Complexity:**

- All operations take O(1) time.

**Space Complexity:**

- O(k), where k is the size of the queue.
*/
