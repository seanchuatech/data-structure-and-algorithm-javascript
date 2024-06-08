/*
[https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)

Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
*/

// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }
  
  function lowestCommonAncestor(root, p, q) {
    let current = root;
  
    while (current !== null) {
      if (p.val < current.val && q.val < current.val) {
        current = current.left; // Both p and q are in the left subtree
      } else if (p.val > current.val && q.val > current.val) {
        current = current.right; // Both p and q are in the right subtree
      } else {
        return current; // p and q are on different sides or one is equal to current
      }
    }
  
    return null; // This should not happen in a valid BST
  }
  
  /* Example Usage: */
  // Constructing the tree from Example 1
  const root = new TreeNode(6);
  root.left = new TreeNode(2);
  root.right = new TreeNode(8);
  root.left.left = new TreeNode(0);
  root.left.right = new TreeNode(4);
  root.right.left = new TreeNode(7);
  root.right.right = new TreeNode(9);
  root.left.right.left = new TreeNode(3);
  root.left.right.right = new TreeNode(5);
  
  const p = root.left; // Node with value 2
  const q = root.right; // Node with value 8
  const lca = lowestCommonAncestor(root, p, q);
  console.log(lca.val); // Output: 6
  
  /*
  Explanation:
  
  1. Iterative Traversal: The solution iterates through the BST starting from the `root`.
  
  2. Comparing with `p` and `q`: In each iteration, we compare the `current` node's value with the values of `p` and `q`.
  
  3. Traversing Down the Tree:
     - If both `p.val` and `q.val` are smaller than `current.val`, the LCA must be in the left subtree, so we move `current` to its left child.
     - If both `p.val` and `q.val` are greater than `current.val`, the LCA must be in the right subtree, so we move `current` to its right child.
     - If neither of the above conditions is true, it means we have found the LCA:
       - Either `p` or `q` is equal to the `current` node, in which case it's the LCA by definition.
       - Or, `p` and `q` are in different subtrees of the `current` node, making `current` the LCA.
  
  4. Returning LCA or Null:
     - We return the `current` node (the LCA) if found.
     - In a valid BST, we should always find the LCA. The `return null` line is for completeness in case of unexpected input.
  */
  
  /*
  Time and Space Complexity:
  
  Time Complexity: O(h), where h is the height of the BST. In the worst case (a skewed tree), the height could be n, resulting in O(n) time complexity.
  
  Space Complexity: O(1) - We use constant extra space for the `current` pointer.
  */
  