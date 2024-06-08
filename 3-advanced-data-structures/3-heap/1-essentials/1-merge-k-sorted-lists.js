/*
[https://leetcode.com/problems/merge-k-sorted-lists/](https://leetcode.com/problems/merge-k-sorted-lists/)

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.
*/

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  
  // Merge Two Lists (Helper Function)
  function mergeTwoLists(list1, list2) {
    const dummyHead = new ListNode(0);
    let tail = dummyHead;
  
    while (list1 && list2) {
      if (list1.val < list2.val) {
        tail.next = list1;
        list1 = list1.next;
      } else {
        tail.next = list2;
        list2 = list2.next;
      }
      tail = tail.next;
    }
  
    tail.next = list1 || list2; // Append the remaining nodes
    return dummyHead.next;
  }
  
  // Merge K Lists
  function mergeKLists(lists) {
    if (lists.length === 0) return null; // Base case: no lists
  
    let interval = 1;
    while (interval < lists.length) {
      for (let i = 0; i < lists.length - interval; i += interval * 2) {
        lists[i] = mergeTwoLists(lists[i], lists[i + interval]);
      }
      interval *= 2;
    }
    return lists[0];
  }
  
  
  /* Example Usage: */
  // Create the linked lists
  const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
  const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
  const list3 = new ListNode(2, new ListNode(6));
  
  const lists = [list1, list2, list3];
  const result = mergeKLists(lists);
  let curr = result;
  while (curr !== null) {
    console.log(curr.val);
    curr = curr.next;
  } // Output: 1 1 2 3 4 4 5 6
  
  /*
  Explanation:
  
  1. Merge Two Lists (Helper Function):
     - This function merges two sorted linked lists and returns the head of the merged list.
  
  2. Merge K Lists:
     - Base Case: If there are no lists, return null.
     - Divide and Conquer: 
       - Set an interval.
       - Repeatedly merge pairs of lists that are `interval` distance apart.
       - Double the interval after each round of merging.
       - Continue until only one list remains.
     - Return the first list, which is the merged and sorted result.
  */
  
  
  /*
  Time and Space Complexity:
  
  Time Complexity: O(N log k), where N is the total number of nodes across all lists, and k is the number of lists.
  
  - Merging two lists of size m and n takes O(m + n) time.
  - In each pass, we merge k lists into k/2 lists, then k/4 lists, and so on.
  - This process takes log k passes.
  - Since the total number of nodes is N, the total time is O(N log k).
  
  Space Complexity: O(1) - We only use constant extra space for the `mergeTwoLists` function and a few variables.
  */
  