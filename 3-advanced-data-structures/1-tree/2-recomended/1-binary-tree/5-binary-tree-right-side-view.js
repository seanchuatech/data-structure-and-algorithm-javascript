/*
[https://leetcode.com/problems/binary-tree-right-side-view/](https://leetcode.com/problems/binary-tree-right-side-view/)

Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
*/

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
  
  function rightSideView(root) {
    if (!root) return [];
  
    const result = [];
    const queue = [root];
  
    while (queue.length > 0) {
      const levelSize = queue.length;
      result.push(queue[queue.length - 1].val); // Add the rightmost node of the current level
  
      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift();
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
  
    return result;
  }
  
  /* Example Usage: */
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.right = new TreeNode(5);
  root.right.right = new TreeNode(4);
  
  console.log(rightSideView(root));
  // Output: [1, 3, 4]
  
  
  /*
  Explanation:
  
  1. Queue & Result Initialization:
     - Create an empty array `result` to store the right-side view.
     - Create a queue `queue` and add the `root` node.
  
  2. Level Order Traversal:
     - Iterate while the `queue` is not empty:
       - Get the number of nodes in the current level (`levelSize`).
       - Add the value of the last node in the queue (rightmost node) to the `result`.
       - For each node in the current level:
         - Dequeue the node.
         - Enqueue its left and right children (if they exist) in that order. 
           (This ensures the rightmost node of the next level is processed first.)
  
  3. Return Result:
     - After processing all levels, return the `result` array containing the right-side view.
  */
  
  
  /*
  Time and Space Complexity:
  
  Time Complexity: O(n) - Each node is visited once in the level order traversal.
  Space Complexity: O(n) - In the worst case (a complete binary tree), the queue will hold all the nodes at the last level, which can be up to n/2 nodes.
  */
  