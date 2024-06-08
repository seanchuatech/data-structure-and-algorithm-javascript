/*
[https://leetcode.com/problems/merge-two-sorted-lists/](https://leetcode.com/problems/merge-two-sorted-lists/)

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  
  function mergeTwoLists(list1, list2) {
    if (!list1) return list2; // If list1 is empty, return list2
    if (!list2) return list1; // If list2 is empty, return list1
  
    let dummyHead = new ListNode(0); // Create a dummy head for the merged list
    let current = dummyHead; // Pointer to track the current node in the merged list
  
    while (list1 && list2) {
      if (list1.val <= list2.val) {
        current.next = list1; // Append the smaller node to the merged list
        list1 = list1.next;   // Move the pointer of the smaller list
      } else {
        current.next = list2;
        list2 = list2.next;
      }
      current = current.next; // Move the merged list pointer
    }
  
    // Append the remaining nodes from either list1 or list2
    current.next = list1 || list2; 
  
    return dummyHead.next; // Return the head of the merged list (skipping the dummy node)
  }
  
  /* Example Usage: */
  // Create the linked lists
  const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
  const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
  
  const mergedList = mergeTwoLists(list1, list2);
  let current = mergedList;
  while (current) {
    console.log(current.val); 
    current = current.next;
  }
  // Output: 1 1 2 3 4 4
  
  
  /*
  Explanation:
  
  1. Dummy Node: A dummy node is created to simplify the process and handle edge cases.
  2. Comparison and Appending: We iterate through both lists simultaneously. In each iteration:
     - We compare the values of the current nodes in `list1` and `list2`.
     - The node with the smaller value is appended to the `mergedList` using the `current` pointer.
     - The corresponding list's pointer is moved to the next node.
     - The `current` pointer is advanced to the newly appended node.
  3. Remaining Nodes: After one of the lists becomes empty, we directly append the remaining nodes from the other list to the end of `mergedList`. This is valid because both lists are sorted.
  4. Return: Finally, we return `dummyHead.next`, which is the head of the actual merged list. 
  */
  
  /*
  Time and Space Complexity:
  
  Time Complexity: O(m + n), where m and n are the lengths of `list1` and `list2` respectively.
  
  Space Complexity: O(1) - We use a constant amount of extra space for the dummy node and pointers.
  */
  