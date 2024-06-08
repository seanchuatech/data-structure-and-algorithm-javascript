/*
[https://leetcode.com/problems/validate-binary-search-tree/](https://leetcode.com/problems/validate-binary-search-tree/)

Given the root of a binary tree, determine if it is a valid binary search tree (BST).
*/

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
  
  function isValidBST(root) {
    function isValidBSTHelper(node, lowerBound, upperBound) {
      if (node === null) return true; // Base case: an empty tree is a BST
      if (node.val <= lowerBound || node.val >= upperBound) return false; // Violates BST property
  
      // Recursively check left and right subtrees with updated bounds
      return (
        isValidBSTHelper(node.left, lowerBound, node.val) && // Check left subtree
        isValidBSTHelper(node.right, node.val, upperBound)   // Check right subtree
      );
    }
  
    // Start the recursive validation with initial bounds of -Infinity and Infinity
    return isValidBSTHelper(root, -Infinity, Infinity);
  }
  
  /* Example Usage: */
  // Constructing the tree from Example 1
  const root1 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
  console.log(isValidBST(root1)); // Output: true
  
  // Constructing the tree from Example 2
  const root2 = new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6)));
  console.log(isValidBST(root2)); // Output: false
  
  
  /*
  Explanation:
  
  1. Recursive Helper Function (`isValidBSTHelper`):
     - This function recursively checks the validity of a subtree.
     - It takes three arguments:
       - `node`: The current node being checked.
       - `lowerBound`: The lower bound of valid values for the current subtree.
       - `upperBound`: The upper bound of valid values for the current subtree.
     - Base Case: If the current node is null, it's considered a valid BST (an empty tree is always valid).
     - BST Check: If the node's value is outside the valid bounds (<= `lowerBound` or >= `upperBound`), it's not a BST, so return `false`.
     - Recursive Calls: Recursively call `isValidBSTHelper` for the left and right subtrees, updating the bounds to ensure the BST property is maintained:
       - For the left subtree, the upper bound becomes the current node's value.
       - For the right subtree, the lower bound becomes the current node's value.
  
  2. `isValidBST` Function:
     - This is the main function that initiates the recursive validation.
     - It calls `isValidBSTHelper` with the root node and initial bounds of negative and positive infinity, allowing any value for the root.
  */
  
  /*
  Time and Space Complexity:
  
  Time Complexity: O(n) - Each node is visited once during the traversal.
  Space Complexity: O(n) - In the worst case (a skewed tree), the maximum depth of recursion is equal to the number of nodes (n), so the call stack uses O(n) space.
  */
  