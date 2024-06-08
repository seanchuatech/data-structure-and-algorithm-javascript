/*
[https://leetcode.com/problems/reverse-linked-list/](https://leetcode.com/problems/reverse-linked-list/)

Given the head of a singly linked list, reverse the list, and return the reversed list.
*/

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
  
  // Iterative solution
  function reverseList(head) {
    let prev = null;
    let current = head;
  
    while (current !== null) {
      const nextNode = current.next;   // Store the next node
      current.next = prev;             // Reverse the current node's pointer
      prev = current;                  // Move prev to current
      current = nextNode;              // Move current to nextNode
    }
  
    return prev; // prev becomes the new head of the reversed list
  }
  
  // Recursive solution
  function reverseListRecursive(head) {
    if (head === null || head.next === null) {
      return head; // Base case: empty list or single node
    }
  
    const newHead = reverseListRecursive(head.next); // Recursive call on the rest of the list
    head.next.next = head;           // Reverse the link
    head.next = null;               // Set the original head's next to null
    return newHead;                 // Return the new head of the reversed list
  }
  
  /* Example Usage: */
  // Create a sample linked list: 1 -> 2 -> 3 -> 4 -> 5
  let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
  
  let reversedHead = reverseList(head); 
  // Print the reversed list iteratively
  while (reversedHead) {
    console.log(reversedHead.val); 
    reversedHead = reversedHead.next;
  }
  
  // Create the same sample linked list again: 1 -> 2 -> 3 -> 4 -> 5
  head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
  
  reversedHead = reverseListRecursive(head);
  // Print the reversed list iteratively (after the recursive call)
  while (reversedHead) {
    console.log(reversedHead.val); 
    reversedHead = reversedHead.next;
  }
  
  /*
  Explanation:
  
  * Iterative Solution:
      1. We use three pointers: `prev`, `current`, and `nextNode`.
      2. We iterate through the list, reversing the direction of the `next` pointers at each step.
      3. Finally, `prev` becomes the new head of the reversed list.
  
  * Recursive Solution:
      1. Base case: If the list is empty or has only one node, return the head (already reversed).
      2. Recursive step:
         - Reverse the rest of the list using recursion (`reverseListRecursive(head.next)`).
         - Change the `next` pointer of the original head's next node (`head.next.next`) to point back to the original head.
         - Set the original head's `next` pointer to null to break the original link.
         - Return the `newHead` obtained from the recursive call, which is now the head of the reversed list.
  */
  
  
  /*
  Time and Space Complexity:
  
  Time Complexity (both solutions): O(n) - We visit each node exactly once.
  
  Space Complexity:
      - Iterative: O(1) - We use a constant amount of space for the pointers.
      - Recursive: O(n) - The call stack grows proportionally to the length of the list.
  */
  