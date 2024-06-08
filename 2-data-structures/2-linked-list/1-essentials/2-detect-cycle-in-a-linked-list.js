/*
[https://leetcode.com/problems/linked-list-cycle/](https://leetcode.com/problems/linked-list-cycle/)

Given head, the head of a linked list, determine if the linked list has a cycle in it.
*/

function hasCycle(head) {
    if (!head || !head.next) return false; // Empty or single-node list cannot have a cycle
  
    let slow = head;  // Slow pointer moves one step at a time
    let fast = head;  // Fast pointer moves two steps at a time
  
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
  
      if (slow === fast) { // Collision means there's a cycle
        return true;
      }
    }
  
    return false; // No collision, no cycle
  }
  
  /* Example Usage: */
  // Create a sample linked list with a cycle
  let head = new ListNode(3);
  head.next = new ListNode(2);
  head.next.next = new ListNode(0);
  head.next.next.next = new ListNode(-4);
  head.next.next.next.next = head.next; // Create a cycle (pos = 1)
  
  console.log(hasCycle(head)); // Output: true
  
  
  /*
  Explanation:
  
  1. Two Pointers: 
     - The solution uses two pointers, a slow pointer (`slow`) and a fast pointer (`fast`).
     - The `slow` pointer moves one node at a time, while the `fast` pointer moves two nodes at a time.
  
  2. Cycle Detection:
     - If there is a cycle in the linked list, the `fast` pointer will eventually catch up to the `slow` pointer. This is because the `fast` pointer is moving twice as fast and will eventually "lap" the `slow` pointer if they are both moving within a loop.
  
  3. Collision Condition:
     - Inside the `while` loop, we check if the `slow` and `fast` pointers point to the same node (`slow === fast`). If they do, it indicates a cycle, and we return `true`.
  
  4. No Cycle Condition:
     - The loop continues as long as `fast` is not null and `fast.next` is not null.  If `fast` reaches the end of the list (null), it means there's no cycle, and we return `false`.
  */
  
  /*
  Time and Space Complexity:
  
  Time Complexity: O(n) - In the worst case, we iterate through the entire list once (or until we find a cycle).
  
  Space Complexity: O(1) - We use only a constant amount of space to store the two pointers.
  */
  