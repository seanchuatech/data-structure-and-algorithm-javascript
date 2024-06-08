/*
[https://leetcode.com/problems/invert-binary-tree/](https://leetcode.com/problems/invert-binary-tree/)

Given the root of a binary tree, invert the tree, and return its root.
*/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
  
  // Recursive Solution
  function invertTree(root) {
    if (!root) return null; // Base case: if node is null, return null
  
    // Swap the left and right children
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]; 
    
    return root; // Return the root after swapping
  }
  
  
  /* Example Usage: */
  // Constructing the tree from Example 1
  const root = new TreeNode(4, 
    new TreeNode(2, new TreeNode(1), new TreeNode(3)),
    new TreeNode(7, new TreeNode(6), new TreeNode(9))
  );
  
  const invertedRoot = invertTree(root);
  // (Print the inverted tree here - this depends on your tree traversal method)
  // Example: inorderTraversal(invertedRoot); could be used to print node values in order.
  
  /*
  Explanation:
  
  1. Recursive Approach: This solution uses a recursive approach to traverse the tree.
  2. Base Case: If the current node is null, there's nothing to invert, so we return null.
  3. Swap Children: For each node, we swap its left and right children. Then, we recursively call `invertTree` on the left and right children to invert their subtrees. 
  4. Return Root: After the recursion completes, we return the original `root` node, which is now the root of the inverted tree.
  */
  
  /*
  Time and Space Complexity:
  
  Time Complexity: O(n) - We visit each node in the tree exactly once.
  Space Complexity: O(h) - The recursion depth is equal to the height of the tree. In the worst case (a skewed tree), the height could be equal to the number of nodes (n), so the space complexity becomes O(n).
  */
  