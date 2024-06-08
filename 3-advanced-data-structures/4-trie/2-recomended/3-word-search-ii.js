/*
[https://leetcode.com/problems/word-search-ii/](https://leetcode.com/problems/word-search-ii/)

Given an m x n board of characters and a list of strings words, return all words on the board.
*/

// TrieNode class to represent a node in the Trie
class TrieNode {
    constructor() {
      this.children = {};     // Map of characters to child TrieNodes
      this.isWord = false;    // Flag to indicate if this node represents the end of a word
    }
  }
  
  // Trie class for building and storing the word dictionary
  class Trie {
    constructor() {
      this.root = new TrieNode(); // Initialize the root node
    }
  
    insert(word) {
      let node = this.root;
      for (const char of word) {
        // If the character doesn't exist in the children map, create a new node for it
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        // Move to the child node representing the current character
        node = node.children[char];
      }
      // Mark the last node as the end of a word
      node.isWord = true;
    }
  }
  
  function findWords(board, words) {
    // Create a Trie and insert all words from the dictionary
    const trie = new Trie();
    for (const word of words) {
      trie.insert(word);
    }
  
    const rows = board.length;
    const cols = board[0].length;
    const result = new Set(); // Use a Set to store unique words found
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false)); // 2D array to track visited cells
  
    // Depth-First Search (DFS) function to explore the board
    function dfs(row, col, node, currentWord) {
      // Base cases: out of bounds, visited cell, or character not found in the Trie
      if (row < 0 || col < 0 || row >= rows || col >= cols || visited[row][col] || !node.children[board[row][col]]) {
        return; 
      }
  
      // Mark the current cell as visited
      visited[row][col] = true;
  
      // Update the current node in the Trie and the current word
      node = node.children[board[row][col]];
      currentWord += board[row][col];
  
      // Check if the current word is a complete word in the Trie
      if (node.isWord) {
        result.add(currentWord); 
      }
  
      // Recursively explore the neighboring cells
      dfs(row + 1, col, node, currentWord); // down
      dfs(row - 1, col, node, currentWord); // up
      dfs(row, col + 1, node, currentWord); // right
      dfs(row, col - 1, node, currentWord); // left
  
      // Backtrack: unmark the current cell for future exploration
      visited[row][col] = false; 
    }
  
    // Iterate through all cells in the board and start DFS from each cell
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        dfs(r, c, trie.root, ""); // Start DFS from the root of the Trie with an empty word
      }
    }
  
    // Convert the set of unique words into an array and return it
    return Array.from(result); 
  }
  
  /* Example Usage: */
  const board = [
    ["o", "a", "a", "n"],
    ["e", "t", "a", "e"],
    ["i", "h", "k", "r"],
    ["i", "f", "l", "v"],
  ];
  const words = ["oath", "pea", "eat", "rain"];
  console.log(findWords(board, words)); // Output: ["eat","oath"] (order may vary)
  
/*
Explanation:

**Trie:**

- Builds a Trie data structure from the `words` list for efficient prefix searching.
- Each node in the trie represents a character, and paths from the root to nodes marked as `isWord` represent complete words.

**DFS (Depth-First Search):**

- Starts from each cell on the `board`.
- Explores in all four directions (up, down, left, right) recursively.
- Keeps track of the `currentWord` being built.
- Checks if the `currentWord` is a complete word in the Trie. If so, it adds it to the `result` set (to avoid duplicates).
- Marks visited cells to prevent revisiting.
- Backtracks by unmarking cells after exploring.

**Time Complexity:**

- O(m * n * 4^L), where m and n are the dimensions of the board, and L is the maximum word length.
- In the worst case, we might explore all paths of length L from each cell.

**Space Complexity:**

- O(N), where N is the total number of characters in all words, to store the Trie. 
- The recursion depth can also go up to L in the worst case.
*/