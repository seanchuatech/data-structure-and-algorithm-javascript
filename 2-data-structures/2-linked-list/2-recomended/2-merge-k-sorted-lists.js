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
  
  // Merge two lists (helper function)
  function mergeTwoLists(list1, list2) {
    const dummyHead = new ListNode(0); // Create a dummy head for the merged list
    let current = dummyHead;
  
    while (list1 && list2) {
      if (list1.val <= list2.val) {
        current.next = list1;
        list1 = list1.next;
      } else {
        current.next = list2;
        list2 = list2.next;
      }
      current = current.next;
    }
  
    current.next = list1 || list2; // Append the remaining nodes
    return dummyHead.next;
  }
  
  function mergeKLists(lists) {
    if (lists.length === 0) return null;
    let interval = 1;
  
    // Merge lists in pairs until a single list remains
    while (interval < lists.length) {
      for (let i = 0; i < lists.length - interval; i += interval * 2) {
        lists[i] = mergeTwoLists(lists[i], lists[i + interval]); 
      }
      interval *= 2;
    }
  
    return lists[0];
  }
  /*
  Explanation:
  
  1. Base Cases:
      - If the input list of lists is empty, there's nothing to merge, so return null.
      - If there's only one list in the input, return that list as it's already sorted.
  
  2. Merge in Pairs:
      - Use a loop to merge the lists in pairs. In each iteration, merge lists[i] and lists[i + interval] and store the result back in lists[i].
      - Start with an interval of 1 (merge adjacent lists).
      - Double the interval in each iteration until the interval is greater than or equal to the number of lists.
  
  3. Return Merged List:
      - After the loop completes, the first list in the lists array will contain the final merged and sorted list. Return it.
  */
  
  /* Example Usage: */
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
  Time and Space Complexity:
  
  Time Complexity: O(N log k), where N is the total number of nodes in all lists and k is the number of lists.
  
  Space Complexity: O(1) - The algorithm uses a constant amount of extra space for merging lists.
  */
  