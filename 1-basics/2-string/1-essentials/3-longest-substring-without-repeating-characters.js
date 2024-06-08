/*
https://leetcode.com/problems/longest-substring-without-repeating-characters/

Given a string s, find the length of the longest substring without repeating characters.
*/
function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    
    const charIndexMap = new Map(); // Map to store the last seen index of each character
    
    for (let end = 0; end < s.length; end++) {
        const char = s[end];
    
        // If we've seen the character before, move the start pointer to after its last occurrence.
        if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
            start = charIndexMap.get(char) + 1;
        }
    
        // Update the last seen index for the current character.
        charIndexMap.set(char, end);
    
        // Update the maximum length if the current substring is longer.
        maxLength = Math.max(maxLength, end - start + 1);
    }
    
    return maxLength;
}

/*
Explanation:

1. Sliding Window: The solution uses the sliding window technique. We maintain two pointers, start and end, to represent the current substring.

2. Character Index Map: We use a map (charIndexMap) to store the most recent index at which each character was encountered.

3. Expanding the Window: We increment the end pointer to expand the window.

4. Checking for Duplicates: If we encounter a character that is already in the map and its last seen index is within the current window, it means we have a repeating character. We update the start pointer to the position just after the last occurrence of that character, effectively shrinking the window to remove the duplicate.

5. Updating Max Length: At each step, we calculate the length of the current substring (end - start + 1) and update the maxLength if it is greater.

6. Return: Finally, we return the maximum length found.
*/

/* Example Usage: */
const s1 = "abcabcbb";
const result1 = lengthOfLongestSubstring(s1);
console.log(result1); // Output: 3

const s2 = "bbbbb";
const result2 = lengthOfLongestSubstring(s2);
console.log(result2); // Output: 1

const s3 = "pwwkew";
const result3 = lengthOfLongestSubstring(s3);
console.log(result3); // Output: 3

/*
Time and Space Complexity:

Time Complexity: O(n) - We iterate through the string once.
Space Complexity: O(min(m, n)) - The size of the map is at most the size of the character set (m) or the length of the string (n), whichever is smaller. In the case of English alphabet, it's O(1).
*/