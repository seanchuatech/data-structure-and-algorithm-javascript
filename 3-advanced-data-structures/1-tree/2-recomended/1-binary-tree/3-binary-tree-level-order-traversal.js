/*
[https://leetcode.com/problems/binary-tree-level-order-traversal/](https://leetcode.com/problems/binary-tree-level-order-traversal/)

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
*/

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
  
  function levelOrder(root) {
    if (!root) return [];
  
    const result = [];
    const queue = [root]; // Start with the root node in the queue
  
    while (queue.length > 0) {
      const levelSize = queue.length;  // Get the number of nodes in the current level
      const currentLevel = [];        // Array to store values of the current level
  
      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift();  // Dequeue a node from the front
        currentLevel.push(node.val); // Add its value to the current level's array
  
        if (node.left) queue.push(node.left);    // Enqueue left child if it exists
        if (node.right) queue.push(node.right);   // Enqueue right child if it exists
      }
  
      result.push(currentLevel); // Add the current level's values to the result
    }
  
    return result;
  }
  
  /* Example Usage: */
  // Constructing the tree from Example 1
  const root = new TreeNode(3);
  root.left = new TreeNode(9);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(15);
  root.right.right = new TreeNode(7);
  
  console.log(levelOrder(root)); 
  // Output: [[3], [9, 20], [15, 7]]
  
  
  /*
  Explanation:
  
  1. Queue Initialization: 
     - We initialize an empty array `result` to store the level order traversal.
     - We initialize a queue `queue` and add the root node to it. The queue will help us process nodes level by level.
  
  2. Level-wise Traversal:
     - We iterate while the queue is not empty.
     - In each iteration, we process one level of the tree.
     - `levelSize`: Stores the number of nodes in the current level.
     - `currentLevel`:  An array to store the values of the nodes in the current level.
     - We iterate `levelSize` times:
       - Dequeue a node from the front of the queue.
       - Add its value to `currentLevel`.
       - Enqueue its left and right children (if they exist).
  
  3. Building Result: After processing each level, we push the `currentLevel` array (containing the values of that level) into the `result` array.
  
  4. Return Result: We return the `result` array, which now contains the level order traversal of the binary tree.
  */
  
  /*
  Time and Space Complexity:
  
  Time Complexity: O(n) - We visit each node in the tree exactly once.
  
  Space Complexity: O(n) - In the worst case (a perfect binary tree), the queue will hold all the nodes of the last level, which can be up to n/2 nodes.
  */
  