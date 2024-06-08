/*
[https://leetcode.com/problems/k-closest-points-to-origin/](https://leetcode.com/problems/k-closest-points-to-origin/)

Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).
*/

class MaxPriorityQueue {
    constructor() {
      this.heap = [];
    }
  
    enqueue(element, priority) {
      this.heap.push({ element, priority });
      this.bubbleUp();
    }
  
    dequeue() {
      const max = this.heap[0];
      const end = this.heap.pop();
      if (this.heap.length > 0) {
        this.heap[0] = end;
        this.sinkDown();
      }
      return max;
    }
  
    front() {
      return this.heap[0];
    }
  
    size() {
      return this.heap.length;
    }
  
    bubbleUp() {
      let index = this.heap.length - 1;
      const element = this.heap[index];
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        const parent = this.heap[parentIndex];
        if (element.priority <= parent.priority) break;
        this.heap[parentIndex] = element;
        this.heap[index] = parent;
        index = parentIndex;
      }
    }
  
    sinkDown() {
      let index = 0;
      const length = this.heap.length;
      const element = this.heap[0];
      while (true) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let swap = null;
  
        if (leftChildIndex < length) {
          const leftChild = this.heap[leftChildIndex];
          if (leftChild.priority > element.priority) {
            swap = leftChildIndex;
          }
        }
        if (rightChildIndex < length) {
          const rightChild = this.heap[rightChildIndex];
          if (
            (swap === null && rightChild.priority > element.priority) ||
            (swap !== null && rightChild.priority > this.heap[swap].priority)
          ) {
            swap = rightChildIndex;
          }
        }
        if (swap === null) break;
        this.heap[index] = this.heap[swap];
        this.heap[swap] = element;
        index = swap;
      }
    }
  }
  
  function kClosest(points, k) {
    const maxHeap = new MaxPriorityQueue();
  
    for (const point of points) {
      const distance = Math.sqrt(point[0] * point[0] + point[1] * point[1]); // Calculate distance from origin
  
      // If the heap is not full, or the distance is less than the max distance in the heap
      if (maxHeap.size() < k || distance < maxHeap.front().priority) {
        maxHeap.enqueue(point, distance); // Add the point
        if (maxHeap.size() > k) {
          maxHeap.dequeue(); // Remove the farthest point if the heap exceeds k
        }
      }
    }
  
    // Return the points from the heap (closest k points)
    return maxHeap.heap.map((item) => item.element);
  }
  
  /* Example Usage: */

  const points1 = [[1, 3], [-2, 2]];
const k1 = 1;
console.log(kClosest(points1, k1)); // Output: [[-2, 2]]

const points2 = [[3, 3], [5, -1], [-2, 4]];
const k2 = 2;
console.log(kClosest(points2, k2)); // Output: [[3, 3], [-2, 4]] (Order may vary)


/*
Explanation:

1. Max Heap:
    - Create a max-heap (`maxHeap`) that stores points along with their distances from the origin.
    - The heap is ordered based on distance, with the farthest point at the top.

2. Iterate through Points:
    - For each point in the `points` array:
        - Calculate its Euclidean distance from the origin.
        - If the heap has less than `k` elements, add the point and its distance to the heap.
        - If the heap is full and the new point's distance is smaller than the largest distance in the heap (the root), remove the root and add the new point.

3. Return Closest Points:
    - After iterating through all points, the max-heap contains the `k` closest points.
    - Return these points by extracting them from the heap.

Time and Space Complexity:

Time Complexity: O(n log k) 
    - Calculating distances: O(n)
    - Heap operations (enqueue and dequeue): O(log k) each, and we do this for n points.
    - Overall: O(n) + O(n log k) = O(n log k)

Space Complexity: O(k) - The max-heap stores up to k elements.
*/
