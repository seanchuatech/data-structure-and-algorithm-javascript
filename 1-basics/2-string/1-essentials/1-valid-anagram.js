/*
https://leetcode.com/problems/valid-anagram/

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or 
phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/
function isAnagram(s, t) {
    // If the lengths of the strings are different, they cannot be anagrams.
    if (s.length !== t.length) {
        return false;   
    }
    
    // Create a hash map (object) to store character counts for string 's'.
    const charCount = {};
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1; // Increment the count for the character or initialize it to 1 if not seen before.
    }
    
    // Iterate through string 't' and decrement character counts in the hash map.
    for (const char of t) {
        if (!charCount[char]) { // If the character count becomes 0 or negative, it's not an anagram.
            return false;
        }
        charCount[char]--;
    }
    
    // If all character counts are 0, it's an anagram.
    return true;
}

/*
Explanation:

1. Length Check: We first check if the lengths of the input strings s and t are equal. If not, they cannot be anagrams, so we return false.

2. Character Count Map: We create a hash map (charCount) to store the count of each character in string s. We iterate through s and increment the count for each character we encounter.

3. Decrement Counts: We iterate through string t, and for each character, we decrement its count in the charCount map. If we encounter a character not present in the map or if its count becomes 0 or negative, it means the strings are not anagrams, so we return false.

4. Final Check and Return: After processing all characters in t, if all counts in the charCount map are 0, it means the strings are anagrams, so we return true.
/

/ Example Usage: */
const s1 = "anagram";
const t1 = "nagaram";
const result1 = isAnagram(s1, t1);
console.log(result1); // Output: true

const s2 = "rat";
const t2 = "car";
const result2 = isAnagram(s2, t2);
console.log(result2); // Output: false

/*
Time and Space Complexity:

Time Complexity: O(n) - We iterate through both strings once.

Space Complexity: O(n) - In the worst case (all characters are unique), the charCount map will store all characters of string s.

Follow-up: Unicode Characters

If the input strings contain Unicode characters, you can use the same approach with a slight modification. Instead of using a regular JavaScript object for the charCount map, you should use a Map object. This is because Map can handle keys of any type, including Unicode characters.
*/