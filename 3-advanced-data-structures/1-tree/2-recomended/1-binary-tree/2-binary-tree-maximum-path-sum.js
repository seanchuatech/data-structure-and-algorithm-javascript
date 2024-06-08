/*
[https://leetcode.com/problems/binary-tree-maximum-path-sum/](https://leetcode.com/problems/binary-tree-maximum-path-sum/)

A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connectingthem. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.
*/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
  
  function maxPathSum(root) {
    let maxSum = -Infinity; // Initialize to negative infinity to handle negative values
  
    function maxPathSumHelper(node) {
      if (!node) return 0; // Base case: null node contributes 0 to the path sum
  
      // Calculate the maximum path sum from the left and right subtrees, considering only the positive contributions
      const leftGain = Math.max(0, maxPathSumHelper(node.left));
      const rightGain = Math.max(0, maxPathSumHelper(node.right));
  
      // Calculate the maximum path sum through the current node, including both subtrees
      const priceNewpath = node.val + leftGain + rightGain;
  
      // Update the global maximum path sum if needed
      maxSum = Math.max(maxSum, priceNewpath);
  
      // Return the maximum path sum that can be extended upwards from the current node (including only one subtree)
      return node.val + Math.max(leftGain, rightGain);
    }
  
    maxPathSumHelper(root); // Start the recursive traversal from the root
    return maxSum; // Return the overall maximum path sum found
  }
  
  /* Example Usage: */
  // Constructing the tree from Example 1
  const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
  console.log(maxPathSum(root)); // Output: 6
  
  // Constructing the tree from Example 2
  const root2 = new TreeNode(-10, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
  console.log(maxPathSum(root2)); // Output: 42
  
  /*
  Explanation:
  
  1. `maxSum`: A global variable to store the overall maximum path sum. Initialized to negative infinity to handle negative values.
  
  2. `maxPathSumHelper` (Recursive Function):
     - This function recursively calculates the maximum path sum for the subtree rooted at the given `node`.
     - Base case: If `node` is null, return 0 (no contribution to the path sum).
     - Calculate gains from left and right subtrees:
       - `leftGain` and `rightGain` are the maximum path sums we can get by extending from the left and right children, respectively.
       - We take `Math.max(0, ...)` to ensure we only consider positive contributions.
     - Calculate `priceNewpath`: This is the maximum path sum passing through the current node, including contributions from both subtrees.
     - Update `maxSum` if `priceNewpath` is greater than the current `maxSum`.
     - Return the maximum gain we can pass up to the parent: This is either the current node's value plus the maximum of the left and right gains, or 0 if both gains are negative.
  
  3. Initial Call and Return:
     - We start the recursion by calling `maxPathSumHelper` with the root node.
     - Finally, we return the value of `maxSum`, which is the maximum path sum found across the entire tree.
  */
  
  /*
  Time and Space Complexity:
  
  Time Complexity: O(n) - We visit each node in the tree exactly once.
  
  Space Complexity: O(h) - The recursion depth is equal to the height of the tree. In the worst case (a skewed tree), the height can be equal to the number of nodes (n), resulting in O(n) space complexity due to the recursive calls.
  */
  