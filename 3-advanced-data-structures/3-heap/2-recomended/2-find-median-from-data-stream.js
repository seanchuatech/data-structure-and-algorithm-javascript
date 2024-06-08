/*
[https://leetcode.com/problems/find-median-from-data-stream/](https://leetcode.com/problems/find-median-from-data-stream/)

The median is the middle value in an ordered integer list. 
*/
class MedianFinder {
    constructor() {
        this.minHeap = new MinPriorityQueue(); // To store the larger half of the numbers
        this.maxHeap = new MaxPriorityQueue(); // To store the smaller half of the numbers
    }

    addNum(num) {
        this.maxHeap.enqueue(num); // Add to max heap

        // Balance the heaps to maintain roughly equal size
        if (this.maxHeap.size() > this.minHeap.size() + 1) {
            this.minHeap.enqueue(this.maxHeap.dequeue().element);
        } else if (this.minHeap.size() > 0 && this.maxHeap.front().element > this.minHeap.front().element) {
            const maxHeapTop = this.maxHeap.dequeue().element;
            const minHeapTop = this.minHeap.dequeue().element;
            this.maxHeap.enqueue(minHeapTop);
            this.minHeap.enqueue(maxHeapTop);
        }
    }

    findMedian() {
        if (this.maxHeap.size() > this.minHeap.size()) {
            return this.maxHeap.front().element; // If maxHeap is larger, the median is at its top
        } else {
            return (this.maxHeap.front().element + this.minHeap.front().element) / 2; // Average of the top elements
        }
    }
}

/* Example Usage: */
const medianFinder = new MedianFinder();
medianFinder.addNum(1);
medianFinder.addNum(2);
console.log(medianFinder.findMedian()); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3);
console.log(medianFinder.findMedian()); // return 2.0

/*
Explanation:
1. Two Heaps: We use two heaps to store the numbers:
    - `maxHeap`: Stores the smaller half of the numbers in descending order.
    - `minHeap`: Stores the larger half of the numbers in ascending order.
2. addNum(num):
    - Add the new number `num` to the `maxHeap`.
    - Rebalance the heaps:
        - If `maxHeap` becomes too large, remove the largest element from `maxHeap` and insert it into `minHeap`.
        - If the top of `maxHeap` becomes greater than the top of `minHeap`, swap their top elements.
3. findMedian():
    - If the total number of elements is odd, the median is the top of the `maxHeap`.
    - If the total number of elements is even, the median is the average of the tops of both heaps.
*/


/*
Follow Up:

* Optimization for [0, 100] range: Use a frequency array of size 101 to count the occurrences of each number. Then, calculate the median by iterating through the frequency array.

* Optimization for 99% of numbers in [0, 100] range:
    - Use the frequency array approach for the [0, 100] range.
    - For the remaining 1% of numbers outside the range, use two additional heaps (one min-heap, one max-heap) to track them.
    - When calculating the median, combine the information from the frequency array and the additional heaps.
*/


/*
Time and Space Complexity:

Time Complexity:
    - addNum: O(log n) (due to heap insertions)
    - findMedian: O(1)

Space Complexity: O(n) - We store all elements in the heaps.

*/
