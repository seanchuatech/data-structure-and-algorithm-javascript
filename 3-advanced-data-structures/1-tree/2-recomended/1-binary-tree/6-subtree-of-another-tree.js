/*
[https://leetcode.com/problems/subtree-of-another-tree/](https://leetcode.com/problems/subtree-of-another-tree/)

Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
*/
// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
  
  function isSubtree(root, subRoot) {
    if (!root) return false; // If the main tree is empty, it cannot contain the subtree
  
    // Check if the current node and its subtree match the subRoot
    if (isSameTree(root, subRoot)) return true;
    
    // Recursively check the left and right subtrees of the main tree
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
  }
  
  // Helper function to check if two trees are identical
  function isSameTree(p, q) {
    if (!p && !q) return true; // Both are null, they are the same
    if (!p || !q || p.val !== q.val) return false; // One is null or values differ, they are not the same
    
    // Recursively check left and right subtrees
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
  
  /* Example Usage: */
  // Constructing the trees from Example 1
  const root1 = new TreeNode(3);
  root1.left = new TreeNode(4);
  root1.right = new TreeNode(5);
  root1.left.left = new TreeNode(1);
  root1.left.right = new TreeNode(2);
  
  const subRoot1 = new TreeNode(4);
  subRoot1.left = new TreeNode(1);
  subRoot1.right = new TreeNode(2);
  
  console.log(isSubtree(root1, subRoot1)); // Output: true
  
  
  /*
  Explanation:
  
  1. `isSubtree` Function:
  - This function recursively checks if `subRoot` is a subtree of `root`.
  - It has three cases:
     - If `root` is null, return false (an empty tree cannot contain any subtree).
     - If `isSameTree(root, subRoot)` returns true, it means the current node and its subtree are identical to the `subRoot`, so return true.
     - Otherwise, recursively check if the `subRoot` is a subtree of either the left or right subtree of `root`.
  
  2. `isSameTree` Function:
  - This helper function checks if two trees are identical.
  - It has two base cases:
     - If both `p` and `q` are null, they are considered identical.
     - If only one of them is null, or if their values differ, they are not identical.
  - If the current nodes are not null and have the same value, it recursively checks if the left and right subtrees of both nodes are also identical.
  
  Time and Space Complexity:
  
  Time Complexity: O(m * n), where m is the number of nodes in the `root` tree, and n is the number of nodes in the `subRoot` tree. In the worst case, we might have to check for subtree match at every node of the main tree.
  
  Space Complexity: O(m) in the worst case, due to the recursion stack. The depth of the recursion can go up to the height of the main tree, which is O(m) in the worst case of a skewed tree.
  */
  