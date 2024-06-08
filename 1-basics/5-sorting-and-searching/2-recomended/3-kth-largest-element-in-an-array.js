/*
[https://leetcode.com/problems/kth-largest-element-in-an-array/](https://leetcode.com/problems/kth-largest-element-in-an-array/)

Given an integer array nums and an integer k, return the kth largest element in the array.
*/

function findKthLargest(nums, k) {
    const minHeap = new MinPriorityQueue(); // Create a min-heap (priority queue)
  
    for (const num of nums) {
      minHeap.enqueue(num); // Add each element to the min-heap
      if (minHeap.size() > k) {
        minHeap.dequeue(); // Remove the smallest element if the heap size exceeds k
      }
    }
  
    return minHeap.front().element; // The top of the min-heap is the kth largest element
  }
  
  /*
  Explanation:
  
  1. Min-Heap: We use a min-heap to keep track of the k largest elements encountered so far.  The min-heap ensures that the smallest of these k elements is always at the top.
  
  2. Iterate and Enqueue: We iterate through the `nums` array and add each element to the `minHeap`.
  
  3. Maintain Heap Size: If the heap size exceeds `k`, we remove the smallest element (which is the root of the min-heap) using `minHeap.dequeue()`. This maintains the heap size at `k` and ensures that it always contains the k largest elements.
  
  4. Return Top Element: After processing the entire array, the top of the `minHeap` will contain the kth largest element, which is returned.
  */
  
  /* Example Usage: */
  const nums1 = [3, 2, 1, 5, 6, 4];
  const k1 = 2;
  const result1 = findKthLargest(nums1, k1);
  console.log(result1); // Output: 5
  
  const nums2 = [3, 2, 3, 1, 2, 4, 5, 5, 6];
  const k2 = 4;
  const result2 = findKthLargest(nums2, k2);
  console.log(result2); // Output: 4
  
  
  /*
  Time and Space Complexity:
  
  Time Complexity: O(n log k) - Each insertion and deletion in a min-heap of size k takes O(log k) time.  We perform this for n elements.
  
  Space Complexity: O(k) - The min-heap stores at most k elements at any time.
  */
  
  /* 
  Important Note: The code above assumes that you have a MinPriorityQueue class available in your JavaScript environment. This class is a standard implementation of a min-heap priority queue. If it's not available, you'll need to implement it yourself or use a library that provides it.
  */