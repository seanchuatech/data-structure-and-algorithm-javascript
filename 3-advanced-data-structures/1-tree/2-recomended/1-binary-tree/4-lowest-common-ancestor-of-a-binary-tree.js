/*
[https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)

Given the roots of two binary trees p and q, write a function to check if they are the same or not.
*/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
  
  function lowestCommonAncestor(root, p, q) {
    // Base case: If the current node is null, return null (no LCA found).
    if (!root) return null;
  
    // If the current node is either p or q, it is the LCA.
    if (root === p || root === q) return root;
  
    // Recursively search for p and q in the left and right subtrees.
    const leftLCA = lowestCommonAncestor(root.left, p, q);
    const rightLCA = lowestCommonAncestor(root.right, p, q);
  
    // If we found p or q in both subtrees, the current node is the LCA.
    if (leftLCA && rightLCA) return root;
  
    // If we found p or q in the left subtree, return the LCA from the left subtree.
    if (leftLCA) return leftLCA;
  
    // If we found p or q in the right subtree, return the LCA from the right subtree.
    if (rightLCA) return rightLCA;
  
    // If neither p nor q was found in either subtree, return null (shouldn't happen if p and q are in the tree).
    return null;
  }
  
  // Example usage (same as the Python code)
  function createTreeFromList(nums) {
    if (!nums) {
      return null;
    }
    const root = new TreeNode(nums[0]);
    const queue = [root];
    let i = 1;
  
    while (i < nums.length) {
      const node = queue.shift(); // Dequeue instead of pop(0)
      if (nums[i] !== null) {
        node.left = new TreeNode(nums[i]);
        queue.push(node.left);
      }
      i++;
      if (i < nums.length && nums[i] !== null) {
        node.right = new TreeNode(nums[i]);
        queue.push(node.right);
      }
      i++;
    }
  
    return root;
  }
  
  const root1 = createTreeFromList([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
  const p1 = root1.left; // Node with value 5
  const q1 = root1.right.left; // Node with value 1
  const lca1 = lowestCommonAncestor(root1, p1, q1);
  console.log(lca1.val); // Output: 3
  
  const p2 = root1.left; // Node with value 5
  const q2 = root1.left.right.right; // Node with value 4
  const lca2 = lowestCommonAncestor(root1, p2, q2);
  console.log(lca2.val); // Output: 5
  
  const root2 = createTreeFromList([1, 2]);
  const p3 = root2; // Node with value 1
  const q3 = root2.left; // Node with value 2
  const lca3 = lowestCommonAncestor(root2, p3, q3);
  console.log(lca3.val); // Output: 1
  
  
  /*
  **Explanation:**
  
  1. **Base Case:** If the current node is `null`, return `null` (no LCA found).
  
  2. **Check for p or q:** If the current node is either `p` or `q`, it is the LCA. Return the node itself.
  
  3. **Recursive Check:** Recursively search for `p` and `q` in the left and right subtrees:
     - If both subtrees return a non-null node, it means `p` and `q` are in different subtrees, and the current node is the LCA.
     - If only one subtree returns a non-null node, it means both `p` and `q` are in that subtree, and the returned node is the LCA.
  
  4. **Return LCA or Null:**
     - Return the `current` node (the LCA) if found.
     - If neither `p` nor `q` was found in either subtree, return `null` (this shouldn't happen if `p` and `q` are in the tree).
  
  **Time and Space Complexity:**
  
  **Time Complexity:** O(n), where n is the number of nodes in the tree. In the worst case, we might visit every node.
  
  **Space Complexity:** O(h), where h is the height of the tree. In the worst case (a skewed tree), the height could be equal to the number of nodes (n), so the space complexity becomes O(n) due to the recursive calls.
  */
  