/*
[https://leetcode.com/problems/same-tree/](https://leetcode.com/problems/same-tree/)

Given the roots of two binary trees p and q, write a function to check if they are the same or not.
*/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
  
  function isSameTree(p, q) {
    // Base case: both nodes are null
    if (p === null && q === null) {
      return true;
    }
  
    // If either node is null (but not both), or if their values are different, they are not the same
    if (p === null || q === null || p.val !== q.val) {
      return false;
    }
  
    // Recursively check if the left and right subtrees are the same
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
  
  
  /* Example Usage: */
  // Constructing the trees from Example 1
  const p1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
  const q1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
  console.log(isSameTree(p1, q1)); // Output: true
  
  // Constructing the trees from Example 2
  const p2 = new TreeNode(1, new TreeNode(2));
  const q2 = new TreeNode(1, null, new TreeNode(2));
  console.log(isSameTree(p2, q2)); // Output: false
  
  /*
  Explanation:
  
  1. Base Case:
     - If both `p` and `q` are null, it means we've reached the end of both trees simultaneously, and they are structurally the same.
     - Return `true` in this case.
  
  2. Check for Inequality:
     - If only one of `p` or `q` is null, or if their values differ, the trees are not the same.
     - Return `false` in this case.
  
  3. Recursive Check:
     - If the current nodes are not null and have the same value, recursively check:
       - If the left subtrees of `p` and `q` are the same (`isSameTree(p.left, q.left)`).
       - If the right subtrees of `p` and `q` are the same (`isSameTree(p.right, q.right)`).
       - Return `true` only if both left and right subtrees are the same.
  
  Intuition:
  
  This approach works by simultaneously traversing both trees and comparing their nodes at each level. If we reach the end of both trees together and all node values have matched, the trees are identical.
  */
  
  
  /*
  Time and Space Complexity:
  
  Time Complexity: O(n) - We visit each node in the trees once.
  
  Space Complexity: O(h), where h is the height of the taller tree. In the worst case (a skewed tree), the height can be equal to the number of nodes (n), resulting in O(n) space complexity due to the recursive calls.
  */
  