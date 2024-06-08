/*
[https://leetcode.com/problems/kth-smallest-element-in-a-bst/](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)

Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
*/

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
  
  // Iterative solution using in-order traversal with stack
  function kthSmallest(root, k) {
    const stack = [];
    let node = root;
  
    while (node || stack.length) {
      while (node) {
        stack.push(node);
        node = node.left; // Go to the leftmost node
      }
      node = stack.pop();
      k--;
      if (k === 0) return node.val; // Found the kth smallest
      node = node.right; // Move to the right subtree
    }
  
    return -1; // k is larger than the number of nodes (shouldn't happen in this problem)
  }
  
  
  /* Example Usage: */
  // Constructing the tree from Example 1
  const root1 = new TreeNode(3);
  root1.left = new TreeNode(1);
  root1.right = new TreeNode(4);
  root1.left.right = new TreeNode(2);
  
  console.log(kthSmallest(root1, 1)); // Output: 1
  
  // Constructing the tree from Example 2
  const root2 = new TreeNode(5);
  root2.left = new TreeNode(3);
  root2.right = new TreeNode(6);
  root2.left.left = new TreeNode(2);
  root2.left.right = new TreeNode(4);
  root2.left.left.left = new TreeNode(1);
  
  console.log(kthSmallest(root2, 3)); // Output: 3
  
  /*
  Explanation:
  
  1. In-order Traversal:
     - We perform an in-order traversal of the BST using a stack to simulate recursion.
     - In-order traversal visits nodes in ascending order (left, root, right).
  
  2. Finding kth Smallest:
     - We maintain a counter `k` to keep track of how many nodes we've visited.
     - In each iteration:
       - We go to the leftmost node by pushing nodes onto the stack.
       - When we reach a null node (leftmost), we pop the top node from the stack. This is the next node to be visited in in-order traversal.
       - We decrement `k`. If `k` becomes 0, we've found the kth smallest element and return its value.
       - Then, we move to the right subtree of the popped node.
  
  
  Time and Space Complexity:
  
  Time Complexity: O(H + k), where H is the height of the BST. In the worst case (skewed tree), the height could be n (number of nodes), leading to O(n) time complexity.
  
  Space Complexity: O(H) - In the worst case, the stack can hold all the nodes along a single path from the root to a leaf, which is the height of the tree.
  */
  
  
  /* Follow-up: Optimization for Frequent Updates */
  
  // If the BST is frequently modified, we can optimize by storing the size (number of nodes) in each node's left subtree.
  // This allows us to efficiently determine if the kth smallest element is in the left or right subtree.
  