/*
https://leetcode.com/problems/lru-cache/

Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
*/

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map(); // Store key-value pairs
        this.head = null; // Head of the doubly linked list
        this.tail = null; // Tail of the doubly linked list
    }
    
    get(key) {
        if (!this.map.has(key)) return -1; // Key not found
        
        const node = this.map.get(key);
        this.removeNode(node);            // Remove from current position
        this.addToHead(node);             // Add to the head (most recently used)
        return node.value;
    }
    
    put(key, value) {
        if (this.map.has(key)) {
            const node = this.map.get(key);
            node.value = value;             // Update value if key exists
            this.removeNode(node);
            this.addToHead(node);
        } else {
            const newNode = { key, value }; // Create a new node
            this.map.set(key, newNode);     // Add to the map
            this.addToHead(newNode);
        
            if (this.map.size > this.capacity) { // Evict LRU if capacity is exceeded
                this.map.delete(this.tail.key);
                this.removeNode(this.tail);
            }
        }
    }
    
    removeNode(node) {
        if (node.prev) {
            node.prev.next = node.next; 
        } else {
            this.head = node.next; // If removing head, update head
        }
        if (node.next) {
            node.next.prev = node.prev;
        } else {
            this.tail = node.prev; // If removing tail, update tail
        }
    }
    
    addToHead(node) {
        node.next = this.head;
        node.prev = null;
        if (this.head) {
            this.head.prev = node;
        }
        this.head = node;
        if (!this.tail) {
            this.tail = node; // If list was empty, set tail as well
        }
    }
}

/*
Explanation:

-Data Structures:
    -Map (this.map): Stores key-value pairs for O(1) lookup.
    -Doubly Linked List: Maintains the order of items based on usage. Head is the most recently used, and tail is the least recently used.

-get(key):
    -If key doesn't exist, return -1.
    -Otherwise, get the node from the map.
    -Update its position to the head of the list (making it the most recently used).

-put(key, value):
    -If key exists, update its value and move it to the head.
    -If key doesn't exist:
    -Create a new node and add it to the head.
    -If the cache is full, remove the tail (LRU) from both the map and the list.

-removeNode(node) & addToHead(node): Helper functions for manipulating the linked list.

*/

/* Example Usage: */
let lRUCache = new LRUCache(2);
lRUCache.put(1, 1);
lRUCache.put(2, 2);
lRUCache.get(1);

lRUCache.put(3, 3);
lRUCache.get(2);

lRUCache.put(4, 4);
lRUCache.get(1);

lRUCache.get(3);

lRUCache.get(4);

/*
Time and Space Complexity:

Time Complexity: O(1) for both get and put operations on average.

Space Complexity: O(capacity) - The maximum size of the map and the linked list is limited by the capacity of the cache.
*/