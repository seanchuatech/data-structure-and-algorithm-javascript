/*
https://leetcode.com/problems/find-all-anagrams-in-a-string/

Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.
*/

function findAnagrams(s, p) {
    const result = [];
    const need = {};
    const window = {};
    
    // Create a map (need) to store the character counts in p.
    for (const char of p) {
        need[char] = (need[char] || 0) + 1;
    }
    
    let left = 0, right = 0, valid = 0; // Initialize pointers and valid count
    
    while (right < s.length) {
        const char = s[right];
        right++; // Expand the window
    
        if (need[char]) {
            window[char] = (window[char] || 0) + 1;
            if (window[char] === need[char]) {
                valid++; // If the count in the window matches the need, increment valid
            }
        }
    
        // If window length equals p length, check for anagram
        while (right - left >= p.length) {
            if (valid === Object.keys(need).length) {
                result.push(left); // Found an anagram, push the starting index to the result
            }
    
            const d = s[left];
            left++; // Shrink the window
    
            if (need[d]) {
                if (window[d] === need[d]) {
                    valid--; // If the count in the window matches the need, decrement valid
                }
                window[d]--;
            }
        }
    }
    return result;
}
    
/*
Explanation:

1. Count Characters in 'p': Create a hash map need to store the count of each character in the string p.

2. Sliding Window:
    -Initialize two pointers left and right to define the sliding window, and valid to count matching characters.
    -Expand the window by moving right to the right. Update window (character counts in the current window) and valid accordingly.
    -When the window size matches p's length, check if it's an anagram by comparing valid with the number of unique characters in need. If it is, add the starting index left to the result.
    -Shrink the window by moving left to the right and update window and valid.
3. Repeat: Continue expanding and shrinking the window until the end of s is reached. */

/* Example Usage: */
const s = "cbaebabacd";
const p = "abc";
const result = findAnagrams(s, p);
console.log(result); // Output: [0, 6]

/*
Time and Space Complexity:

Time Complexity: O(n) - We iterate through the string 's' once.
Space Complexity: O(1) - The need and window maps have at most 26 keys (English alphabets).
*/
    