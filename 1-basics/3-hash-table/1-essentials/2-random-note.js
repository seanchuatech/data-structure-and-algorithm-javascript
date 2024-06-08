/*
https://leetcode.com/problems/ransom-note/

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
*/
function canConstruct(ransomNote, magazine) {
    // Create a hash map (object) to store character counts in the magazine
    const magazineChars = {};
    for (const char of magazine) {
    magazineChars[char] = (magazineChars[char] || 0) + 1;
    }
    
    // Iterate through characters in the ransom note
    for (const char of ransomNote) {
        // If the character doesn't exist in the magazine or has been used up, return false
        if (!magazineChars[char] || magazineChars[char] === 0) {
        return false;
        }
        magazineChars[char]--; // Decrement the character count in the magazine
    }
    
    // If all characters in the ransom note are found in the magazine, return true
    return true;
}

/*
Explanation:

1. Count Magazine Characters: We create a hash map magazineChars to store the count of each character in the magazine string.

2. Check Ransom Note Characters: We iterate through each character in the ransomNote string.
    -For each character, we check if it exists in the magazineChars map and if its count is greater than 0. If either condition is not met, we return false.
    -Otherwise, we decrement the count of that character in the magazineChars map.

3. Return True: If we successfully iterate through all characters in the ransomNote without encountering any issues, we return true.
*/

/* Example Usage: */
const ransomNote1 = "a";
const magazine1 = "b";
const result1 = canConstruct(ransomNote1, magazine1);
console.log(result1); // Output: false

const ransomNote2 = "aa";
const magazine2 = "ab";
const result2 = canConstruct(ransomNote2, magazine2);
console.log(result2); // Output: false

const ransomNote3 = "aa";
const magazine3 = "aab";
const result3 = canConstruct(ransomNote3, magazine3);
console.log(result3); // Output: true

/*
Time and Space Complexity:

Time Complexity: O(m + n) - We iterate through both strings once (m = length of ransomNote, n = length of magazine).

Space Complexity: O(m) - In the worst case (all characters in magazine are unique), the magazineChars map will store m unique characters.
*/