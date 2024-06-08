/*
[https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.
*/

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
  
  function buildTree(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null; // Base case: empty tree
  
    const rootVal = preorder[0];  // The first element in preorder is the root
    const root = new TreeNode(rootVal);
  
    // Find the index of the root in inorder
    const rootIndex = inorder.indexOf(rootVal);
  
    // Recursively build left and right subtrees
    root.left = buildTree(preorder.slice(1, rootIndex + 1), inorder.slice(0, rootIndex));
    root.right = buildTree(preorder.slice(rootIndex + 1), inorder.slice(rootIndex + 1));
  
    return root;
  }
  
  /* Example Usage: */
  const preorder = [3, 9, 20, 15, 7];
  const inorder = [9, 3, 15, 20, 7];
  
  const root = buildTree(preorder, inorder);
  console.log(root); // Output (Structure): TreeNode { val: 3, left: TreeNode { val: 9, ... }, right: TreeNode { val: 20, ... } }
  
  
  /*
  Explanation:
  
  1. Base Case:
     - If either `preorder` or `inorder` is empty, we've reached the end of a branch and return `null` (no node).
  
  2. Root Node Creation:
     - The first element in `preorder` is always the root of the current (sub)tree.
     - We create a new `TreeNode` with this value and store it in `root`.
  
  3. Finding Root Index in Inorder:
     - We search for the `rootVal` in the `inorder` array to find its position (`rootIndex`).  
     - This allows us to determine which elements in `inorder` belong to the left subtree and which belong to the right subtree.
  
  4. Recursive Calls:
     - Left Subtree: We recursively call `buildTree` with:
       - The portion of `preorder` starting from index 1 up to `rootIndex + 1`.  
       - The portion of `inorder` before `rootIndex`.
     - Right Subtree: We recursively call `buildTree` with:
       - The portion of `preorder` starting from `rootIndex + 1`.
       - The portion of `inorder` after `rootIndex`.
  
  5. Return Root: We return the constructed `root` node, which will be used to connect the left and right subtrees at the higher level of recursion.
  */

  /* 
  Key points:
    -Preorder traversal: gives you the root of the tree and the order of the root's children
    -Inorder traversal: tells you which elements are in the left subtree and which are in the right subtree, relative to the root.

By combining this information, the algorithm can reconstruct the tree. Please let me know if you have any other questions.
  */
  