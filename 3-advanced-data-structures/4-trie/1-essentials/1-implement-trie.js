/*
[https://leetcode.com/problems/implement-trie-prefix-tree/](https://leetcode.com/problems/implement-trie-prefix-tree/)

A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. 
*/

class TrieNode {
    constructor() {
        this.children = new Map();
        this.isWordEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char);
        }
        node.isWordEnd = true;
    }

    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                return false; // Character not found in the Trie
            }
            node = node.children.get(char);
        }
        return node.isWordEnd; // Check if it's a complete word
    }

    startsWith(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children.has(char)) {
                return false; // Prefix not found
            }
            node = node.children.get(char);
        }
        return true; // Prefix exists
    }
}

/* Example Usage: */
const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));   // return True
console.log(trie.search("app"));     // return False
console.log(trie.startsWith("app")); // return True
trie.insert("app");
console.log(trie.search("app"));     // return True


/*
Explanation:

1. TrieNode:
   - `children`: A map (or object in JavaScript) to store references to child nodes. The key is the character, and the value is the corresponding child node.
   - `isWordEnd`: A boolean flag to indicate if the current node marks the end of a complete word.

2. Trie:
   - `root`: The root node of the trie.

3. insert(word):
   - Start from the root node.
   - For each character in the `word`:
     - If the character doesn't exist as a child, create a new `TrieNode` for it.
     - Move to the child node corresponding to the character.
   - After processing all characters, mark the last node as a word end (`isWordEnd = true`).

4. search(word):
   - Start from the root node.
   - For each character in the `word`:
     - If the character is not found in the current node's children, return `false`.
     - Move to the child node corresponding to the character.
   - After processing all characters, return the `isWordEnd` flag of the last node.

5. startsWith(prefix):
   - Similar to `search(word)`, but only check if the prefix exists in the trie. Return `true` if the last node is reached (doesn't need to be a complete word).


Time and Space Complexity:

Time Complexity:
   - `insert`, `search`, and `startsWith`: O(m), where m is the length of the word or prefix.

Space Complexity: 
   - O(N), where N is the total number of characters in all words inserted in the trie. In the worst case, each character could create a new node.
*/
