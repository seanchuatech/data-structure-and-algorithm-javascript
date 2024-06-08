/*
https://leetcode.com/problems/minimum-window-substring/

Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
*/

function minWindow(s, t) {
    let left = 0,
    right = 0,
    minLength = Infinity,
    start = -1,
    need = {},
    window = {};
    
    // Create a hashmap (need) to store the frequency of characters in 't'
    for (const char of t) {
    need[char] = (need[char] || 0) + 1;
    }
    
    let valid = 0; // Count of valid characters found in the window
    
    while (right < s.length) {
        const char = s[right];
        right++;
        
        if (need[char]) {
        window[char] = (window[char] || 0) + 1;
        if (window[char] === need[char]) {
            valid++; // Increment valid if a character in 't' is found and its count matches the need
        }
        }
        
        // When we have all the characters from 't' in the window
        while (valid === Object.keys(need).length) {
        // Update minimum window if the current window is smaller
        if (right - left < minLength) {
            start = left;
            minLength = right - left;
        }
        
        const d = s[left];
        left++; // Shrink the window
        
        if (need[d]) {
            if (window[d] === need[d]) {
            valid--; // Decrement valid if the count of the character at 'left' matches the need
            }
            window[d]--;
        }
        }
    }
    
    return minLength === Infinity ? "" : s.substring(start, start + minLength); // Return minimum window or empty string
}

/*
Explanation:

1. Count Characters in 't': We use a hashmap need to store the count of each character in the string t.

2. Sliding Window: We use a sliding window approach with two pointers (left and right) to track the current window. We also have a valid counter to keep track of how many characters in the current window match the need hashmap.

3. Expanding Window: We keep expanding the window (right++) until we have all the required characters from t in the window (valid === Object.keys(need).length).

4. Shrinking Window: Once we have a valid window, we shrink it from the left (left++) until it's no longer valid. While shrinking, we keep track of the minimum window length.

5. Return Minimum Window: After processing the entire string, we return the minimum window substring found. If no such window exists, we return an empty string.
/

/ Example Usage: */
const s = "ADOBECODEBANC";
const t = "ABC";
const result = minWindow(s, t);
console.log(result); // Output: "BANC"

/*
Time and Space Complexity:

Time Complexity: O(m + n) - We iterate through both strings 's' and 't' once.

Space Complexity: O(m + n) - The need and window hashmaps can store at most m + n characters.
*/