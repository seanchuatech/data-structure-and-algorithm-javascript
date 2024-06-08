/*
[https://leetcode.com/problems/remove-nth-node-from-end-of-list/](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

Given the head of a linked list, remove the nth node from the end of the list and return its head.
*/

function removeNthFromEnd(head, n) {
    // Create a dummy node before the head to handle edge cases (e.g., removing the head itself)
    const dummy = new ListNode(0);
    dummy.next = head; 
  
    let slow = dummy; // Slow pointer
    let fast = dummy; // Fast pointer
  
    // Move the fast pointer n steps ahead
    for (let i = 0; i <= n; i++) { 
      fast = fast.next;
    }
  
    // Move both pointers until the fast pointer reaches the end of the list
    while (fast !== null) {
      slow = slow.next;
      fast = fast.next;
    }
  
    // Remove the nth node from the end
    slow.next = slow.next.next;
  
    return dummy.next; // Return the head of the modified list (skipping the dummy node)
  }
  
  /* Example Usage: */
  // Create the linked list: 1 -> 2 -> 3 -> 4 -> 5
  let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
  const n = 2;
  
  const newHead = removeNthFromEnd(head, n);
  
  // Print the modified list
  let current = newHead;
  while (current) {
    console.log(current.val); 
    current = current.next;
  } // Output: 1 2 3 5
  
  
  /*
  Explanation:
  
  1. Dummy Node: A dummy node is added before the head to simplify edge cases where the node to be removed might be the head itself.
  
  2. Two Pointers: 
     - `slow` starts at the dummy node.
     - `fast` starts at the dummy node and moves `n` steps ahead. This creates a gap of `n` nodes between the two pointers.
  
  3. Traverse Together: 
     - Both `slow` and `fast` move one step at a time until `fast` reaches the end of the list (null). At this point, `slow` will be pointing to the node right before the node to be removed.
  
  4. Remove Node:
     - `slow.next = slow.next.next`  removes the nth node from the end by skipping over it.
  
  5. Return Head:
     - The function returns `dummy.next`, which is the head of the modified list (excluding the dummy node).
  */
  
  
  /*
  Time and Space Complexity:
  
  Time Complexity: O(L), where L is the length of the list. We traverse the list once.
  
  Space Complexity: O(1) - We only use constant extra space for the pointers.
  */
  