/* 
https://leetcode.com/problems/insert-delete-getrandom-o1/description/

Implement the RandomizedSet class:
-RandomizedSet() Initializes the RandomizedSet object.
-bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
-bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
-int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.

You must implement the functions of the class such that each function works in average O(1) time complexity.

Example 1:
Input
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
Output
[null, true, false, true, 2, true, false, 2]

Explanation
RandomizedSet randomizedSet = new RandomizedSet();
randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
randomizedSet.insert(2); // 2 was already in the set, so return false.
randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.
 

Constraints:

-231 <= val <= 231 - 1
At most 2 * 105 calls will be made to insert, remove, and getRandom.
There will be at least one element in the data structure when getRandom is called.
*/
class RandomizedSet {
    constructor() {
      this.map = new Map();   // Map to store values and their corresponding indices
      this.list = [];         // List to store values in insertion order
    }
  
    insert(val) {
      if (this.map.has(val)) return false; // Already exists
  
      this.list.push(val);                // Add to the end of the list
      this.map.set(val, this.list.length - 1); // Store index in the map
      return true;
    }
  
    remove(val) {
      if (!this.map.has(val)) return false; // Doesn't exist
  
      // Swap the element to remove with the last element for O(1) deletion
      const indexToRemove = this.map.get(val);
      const lastVal = this.list.pop(); 
      
      // If the last value wasn't the one we wanted to remove, update its index
      if (lastVal !== val) { 
        this.list[indexToRemove] = lastVal;
        this.map.set(lastVal, indexToRemove);
      }
  
      this.map.delete(val); // Remove from the map
      return true;
    }
  
    getRandom() {
      const randomIndex = Math.floor(Math.random() * this.list.length);
      return this.list[randomIndex];
    }
  }
  
/*
Explanation:

* Map and List: We use two data structures:
- Map (this.map): Stores the value as the key and its index in the list as the value. This allows O(1) lookup for existence checks and getting the index for removal.
- List (this.list): Stores the values in the order they were inserted. This allows O(1) random access for `getRandom`.

* insert(val):
- If the value already exists, return false.
- Otherwise, add the value to the end of the list and store its index in the map.

* remove(val):
- If the value doesn't exist, return false.
- Get the index of the value from the map.
- To remove efficiently, swap the value to remove with the last value in the list (this overwrites the value to be removed).
- Update the index of the swapped value in the map.
- Remove the value from the map.

* getRandom():
- Generate a random index within the bounds of the list.
- Return the element at that index.
*/

// Example usage
let randomizedSet = new RandomizedSet();
randomizedSet.insert(1);
randomizedSet.remove(2);
randomizedSet.insert(2);
randomizedSet.getRandom();
randomizedSet.remove(1);
randomizedSet.insert(2);
randomizedSet.getRandom();

/* 
Time Complexity:

All operations (insert, remove, getRandom) have an average time complexity of O(1) due to the use of a map and a list.
*/