/*
[https://leetcode.com/problems/reorder-list/](https://leetcode.com/problems/reorder-list/)

You are given the head of a singly linked-list. The list can be represented as:
L0 → L1 → … → Ln - 1 → Ln

Reorder the list to be on the following form:
L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
*/

function reorderList(head) {
    if (!head || !head.next) return; // Handle empty list or single node
  
    // 1. Find the middle node using slow and fast pointers
    let slow = head, fast = head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    
    // 2. Reverse the second half of the list
    let prev = null, curr = slow, nextNode;
    while (curr) {
      nextNode = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextNode;
    }
  
    // 3. Merge the two halves in alternating order
    let first = head, second = prev;
    while (second.next) {
      nextNode = first.next;
      first.next = second;
      first = nextNode;
  
      nextNode = second.next;
      second.next = first;
      second = nextNode;
    }
  }
  
  /* Example Usage: */
  // Create linked list: 1 -> 2 -> 3 -> 4
  let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
  reorderList(head);
  // Print the reordered list: 1 -> 4 -> 2 -> 3
  let current = head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
  
  
  
  /*
  Explanation:
  
  1. Find Middle:
     - Use slow and fast pointers. The slow pointer moves one step, while the fast pointer moves two steps at a time.
     - When the fast pointer reaches the end, the slow pointer will be at the middle.
  
  2. Reverse Second Half:
     - Reverse the second half of the linked list using the standard reversal technique (with prev, curr, and nextNode pointers).
  
  3. Merge Alternating:
     - Use two pointers (`first` and `second`) to traverse the first and reversed second halves of the list.
     - In each iteration, take the next node from the first half and insert it after the current node in the second half.
     - Update pointers and continue until the second half has no more nodes to insert.
  */
  
  
  /*
  Time and Space Complexity:
  
  Time Complexity: O(n) - We traverse the list twice (once to find the middle, once to merge).
  
  Space Complexity: O(1) - We use a constant amount of space for the pointers.
  */
  