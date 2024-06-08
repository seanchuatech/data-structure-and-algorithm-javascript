/*
[https://leetcode.com/problems/top-k-frequent-elements/](https://leetcode.com/problems/top-k-frequent-elements/)

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
*/

function topKFrequent(nums, k) {
    const freqMap = new Map(); // Map to store frequencies of each number
    const minHeap = new MinPriorityQueue(); // Min-heap to track top k frequent elements
  
    // Count frequencies
    for (const num of nums) {
      freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
  
    // Build min-heap of top k frequent elements
    for (const [num, freq] of freqMap) {
      minHeap.enqueue(num, freq);
      if (minHeap.size() > k) {
        minHeap.dequeue(); // Remove the element with the lowest frequency if the heap size exceeds k
      }
    }
  
    // Extract the top k elements from the min-heap
    const result = [];
    while (minHeap.size() > 0) {
      result.push(minHeap.dequeue().element);
    }
    return result.reverse(); // Reverse to get elements in descending order of frequency
  }
  
  /* Example Usage: */
  const nums1 = [1, 1, 1, 2, 2, 3];
  const k1 = 2;
  console.log(topKFrequent(nums1, k1)); // Output: [1, 2]
  
  const nums2 = [1];
  const k2 = 1;
  console.log(topKFrequent(nums2, k2)); // Output: [1]
  
  /*
  Explanation:
  
  1. Frequency Map:
     - Create a `freqMap` to count the frequency of each number in the `nums` array.
  
  2. Min-Heap (Priority Queue):
     - Create a `minHeap` priority queue. It will store pairs of (number, frequency), sorted by frequency in ascending order. The min-heap will always contain the k elements with the highest frequencies encountered so far.
  
  3. Build Min-Heap:
     - Iterate through the `freqMap`.
     - For each number-frequency pair:
       - Enqueue it into the `minHeap`.
       - If the heap size exceeds k, dequeue the element with the smallest frequency. This keeps only the k most frequent elements in the heap.
  
  4. Extract Results:
     - Dequeue all elements from the `minHeap`. Since it's a min-heap, the elements will be dequeued in ascending order of frequency.
     - Reverse the dequeued elements to get the final result in descending order of frequency.
  */
  
  
  /*
  Time and Space Complexity:
  
  Time Complexity: O(n log k) 
      - Building the frequency map takes O(n) time.
      - Inserting and potentially deleting elements from the min-heap of size k takes O(log k) time per element.
      - Overall: O(n) + O(n log k) = O(n log k)
  
  Space Complexity: O(n)
      - The frequency map can store up to n unique elements.
      - The min-heap can store up to k elements.
      - In the worst case (all elements are unique): O(n) + O(n) = O(n)
  */
  