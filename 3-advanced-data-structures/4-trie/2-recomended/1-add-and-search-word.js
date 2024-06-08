/*
[https://leetcode.com/problems/design-add-and-search-words-data-structure/](https://leetcode.com/problems/design-add-and-search-words-data-structure/)

Design a data structure that supports adding new words and finding if a string matches any previously added string.
*/
class WordDictionary {
    constructor() {
        this.trie = {};
    }

    addWord(word) {
        let node = this.trie;
        for (const char of word) {
            if (!node[char]) {
                node[char] = {};
            }
            node = node[char];
        }
        node.isWord = true; 
    }

    search(word) {
        return this._searchHelper(word, this.trie);
    }

    // Recursive helper function for search
    _searchHelper(word, node) {
        for (let i = 0; i < word.length; i++) {
            const char = word[i];

            if (char === '.') {
                // If it's a wildcard, check all possible paths
                for (const child in node) {
                    if (this._searchHelper(word.slice(i + 1), node[child])) {
                        return true;
                    }
                }
                return false; // No match found for any path
            } else if (!node[char]) {
                return false; // Character not found in this path
            } else {
                node = node[char]; // Move to the next level in the trie
            }
        }

        return node.isWord; // Check if it's a complete word at the end
    }
}

/* Example Usage: */
const wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
console.log(wordDictionary.search("pad")); // return False
console.log(wordDictionary.search("bad")); // return True
console.log(wordDictionary.search(".ad")); // return True
console.log(wordDictionary.search("b..")); // return True


/*
Explanation:

1. Trie Data Structure:
    - `trie`: The core data structure used to store words. Each node in the trie represents a character, and paths from the root to nodes marked as `isWord` represent complete words.

2. `addWord(word)`:
    - Inserts a word into the trie.
    - Starts from the root.
    - For each character in the word, it checks if a corresponding node exists in the trie.
    - If not, a new node is created.
    - Moves to the next node (or creates a new one) for the next character.
    - Marks the last node as a word end (`isWord = true`) if the entire word is inserted.

3. `search(word)`:
    - Uses a helper function `_searchHelper` for recursive search.
    - Passes the `word` and the root of the `trie` to `_searchHelper`.

4. `_searchHelper(word, node)`:
    - Base case: If the word is empty and the current node is a word end (`node.isWord`), return true (word found).
    - Iterates through the characters of the word:
      - If the current character is '.', (wildcard), recursively search for the rest of the word in all the children of the current node. If any of the recursive calls return true, return true.
      - If the current character is not found in the current node's children, return false (no match).
      - Otherwise, move to the child node corresponding to the current character.
    - If the entire word is processed and the current node is a word end, return true.

Time and Space Complexity:

Time Complexity:
    - `addWord(word)`: O(m), where m is the length of the word.
    - `search(word)`: In the worst case, it can be O(m * 26^n), where m is the length of the word and n is the number of '.' characters. This is because each '.' can branch into 26 possible paths. In the average case, it will be much faster.

Space Complexity: O(N), where N is the total number of characters in all words added to the dictionary. 
*/
