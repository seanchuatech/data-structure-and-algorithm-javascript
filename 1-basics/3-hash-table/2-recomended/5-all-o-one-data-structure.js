/*
https://leetcode.com/problems/all-oone-data-structure/

Design a data structure to store the strings' count with the ability to return the strings with minimum and maximum counts.
*/

class AllOne {
    constructor() {
        this.map = new Map();        // key: string, value: Node
        this.countMap = new Map();   // key: count, value: Set of keys (strings)
        this.head = null;            // Head of the doubly linked list
        this.tail = null;            // Tail of the doubly linked list
    }
    
    inc(key) {
        if (!this.map.has(key)) {   // If key is not in the map, add a new node with count 1
            this.addNode(key, 1);
        } else {                   // If key exists, increase the count and adjust its position in the linked list
            const node = this.map.get(key);
            this.changeFrequency(node, node.count + 1);
        }
    }
    
    dec(key) {
        const node = this.map.get(key);
        if (node.count === 1) {    // If count reaches 0, remove the node
            this.removeNode(node);
            this.map.delete(key);
        } else {
            this.changeFrequency(node, node.count - 1); // Otherwise, decrease the count and adjust position
        }
    }
    
    getMaxKey() {
        return this.tail ? this.tail.keys.values().next().value : ""; // Return one of the keys with max count, if any
    }
    
    getMinKey() {
        return this.head ? this.head.keys.values().next().value : ""; // Return one of the keys with min count, if any
    }
    
    // Helper functions
    
    addNode(key, count) {
        const newNode = { keys: new Set([key]), count };
        this.map.set(key, newNode);
        this.countMap.set(count, (this.countMap.get(count) || new Set()).add(key)); // Add to countMap
        
        // Find the correct position in the linked list and insert the node
        if (!this.head || count < this.head.count) {
            this.addToHead(newNode);
        } else if (!this.tail || count > this.tail.count) {
            this.addToTail(newNode);
        } else {
            let current = this.head;
            while (current.next && current.next.count < count) {
                current = current.next;
            }
            newNode.prev = current;
            newNode.next = current.next;
            if (current.next) {
                current.next.prev = newNode;
            }
            current.next = newNode;
        }
    }
    
    changeFrequency(node, newCount) {
        // Remove the node's key from the old count's set in countMap
        this.countMap.get(node.count).delete(node.keys.values().next().value);
        if (this.countMap.get(node.count).size === 0) {
            this.countMap.delete(node.count); // Remove the count from countMap if it has no more keys
        }
    
        // Update node's count and re-insert it at the correct position
        node.count = newCount;
        this.countMap.set(newCount, (this.countMap.get(newCount) || new Set()).add(node.keys.values().next().value));
        this.removeNode(node);
        this.addNode(node.keys.values().next().value, newCount);
    }
    
    // Methods to add a node at the head or tail of the linked list
    addToHead(node) { /* ... implementation ... */ }
    addToTail(node) { /* ... implementation ... */ }
    
    // Method to remove a node from the linked list
    removeNode(node) { /* ... implementation ... */ }
}

/*
Explanation:

-Data Structures:
    -map: Stores key-value pairs (string, Node) for efficient access to the node containing the string.
    -countMap: Stores count-keyset pairs (count, Set of strings) for quickly finding all strings with a given count.
    -head, tail: Pointers to the head and tail of the doubly linked list. The list is sorted by count in ascending order.

-Methods:
    -inc(key): Increases the count of a string. If it's a new string, adds it with count 1. Updates the node's position in the linked list.
    -dec(key): Decreases the count of a string. If the count becomes 0, removes the string from the data structure. Updates the node's position in the linked list.
    -getMaxKey(): Returns a string with the maximum count from the tail of the linked list.
    -getMinKey(): Returns a string with the minimum count from the head of the linked list.
    -addNode, changeFrequency, addToHead, addToTail, removeNode: Helper functions to maintain the linked list and countMap.

*/
/* 

Time Complexity: O(1) for all operations on average, due to the use of hash maps and a doubly linked list.

Space Complexity: O(n), where n is the number of unique keys stored.

**Key points**

- **Doubly Linked List:**  The doubly linked list maintains the order of nodes based on their frequency counts. The head of the list points to the node with the minimum count, and the tail points to the node with the maximum count.
- **Hash Maps:** Two hash maps are used:
    - `map`: Stores string keys and their corresponding nodes in the linked list. This allows for O(1) lookup to find a node given a string.
    - `countMap`: Stores frequency counts as keys and sets of strings (having that frequency) as values. This allows for O(1) retrieval of keys with a given count.

*/
