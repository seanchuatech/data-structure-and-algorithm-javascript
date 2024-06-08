/*
[https://leetcode.com/problems/serialize-and-deserialize-binary-tree/](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
*/

// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }
  
  // Serialization
  function serialize(root) {
    if (!root) return "#"; // Null node marker
    return `${root.val},${serialize(root.left)},${serialize(root.right)}`; // Preorder traversal with comma separation
  }
  
  // Deserialization
  function deserialize(data) {
    const values = data.split(",");
    let index = 0;
  
    function buildTree() {
      if (values[index] === "#") { // Null node
        index++;
        return null;
      }
  
      const node = new TreeNode(parseInt(values[index], 10));
      index++;
      node.left = buildTree();
      node.right = buildTree();
      return node;
    }
  
    return buildTree(); // Build the tree recursively
  }
  
  /* Example Usage: */
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.right.left = new TreeNode(4);
  root.right.right = new TreeNode(5);
  
  const serialized = serialize(root);
  console.log(serialized); // Output: "1,2,#,#,3,4,#,#,5,#,#"
  
  const deserialized = deserialize(serialized);
  // Here you would typically traverse the 'deserialized' tree 
  // to verify it matches the original 'root' tree.
  
  
  
  /*
  Explanation:
  
  Serialization:
  1. Base Case: If the current node is null, we mark it with a special character '#' and return it.
  2. Recursive Preorder Traversal: We traverse the tree in preorder (root, left, right), concatenating the node's value and the serialized representations of its left and right subtrees, separated by commas.
  
  Deserialization:
  1. Split Data: We split the serialized string `data` into an array of values using the comma separator.
  2. Build Tree Function (Recursive): The `buildTree` function recursively reconstructs the tree:
     - Base Case: If the current value is '#', it's a null node, so we increment the `index` and return `null`.
     - Create Node: Otherwise, we create a new `TreeNode` with the parsed integer value.
     - Recurse: We recursively call `buildTree` to construct the left and right subtrees.
  3. Return Root: The initial call to `buildTree` returns the root of the reconstructed tree.
  */
  
  
  /*
  Time and Space Complexity:
  
  Serialization:
  - Time Complexity: O(n) - Each node is visited once during the preorder traversal.
  - Space Complexity: O(n) - The string representing the serialized tree can have at most 2*n-1 nodes in the worst case (a skewed tree).
  
  Deserialization:
  - Time Complexity: O(n) - We visit each node in the serialized string once to reconstruct the tree.
  - Space Complexity: O(n) - In the worst case, we might need to store all the nodes in the reconstructed tree, and the recursion stack can also go up to the height of the tree (which can be n in a skewed tree).
  
  Key Points:
  
  - Preorder Traversal:  Preorder traversal allows us to serialize the tree in a way that we can easily reconstruct it.
  - Null Node Marker: The '#' character is crucial to mark null nodes so that we can rebuild the correct structure during deserialization.
  - Recursive Approach: Both serialization and deserialization are implemented recursively, which makes the code concise.
  */
  