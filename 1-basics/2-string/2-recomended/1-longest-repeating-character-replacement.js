/*
https://leetcode.com/problems/longest-repeating-character-replacement/

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform thisoperation at most k times.
Return the length of the longest substring containing the same letter you can get after performing the above operations.
*/

function characterReplacement(s, k) {
    let maxLength = 0;
    let maxFreq = 0;
    const charCount = new Map();
    let start = 0;
    
    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        charCount.set(char, (charCount.get(char) || 0) + 1);
        maxFreq = Math.max(maxFreq, charCount.get(char));
    
        // Shrink the window if necessary to maintain the constraint:
        // (windowLength - mostFrequentCharCount) <= k
        while (end - start + 1 - maxFreq > k) {
            charCount.set(s[start], charCount.get(s[start]) - 1);
            start++;
        }
    
        maxLength = Math.max(maxLength, end - start + 1);
    }
    
    return maxLength;
}

/*
Explanation:

1. Sliding Window: The solution employs a sliding window approach with two pointers, start and end. The window expands as end moves forward, and it shrinks (if necessary) from the start.

2. Character Count Map: A hash map (charCount) is used to track the frequency of each character within the current window.

3. Max Frequency: We maintain a variable maxFreq to store the maximum frequency of any character in the current window.

4. Window Expansion: The window expands by incrementing the end pointer.  We update the character count and maxFreq accordingly.

5. Window Shrinkage: If the window's length minus the maxFreq exceeds k (meaning we need more than k replacements to make all characters the same), we shrink the window by incrementing the start pointer and updating the charCount.

6. Max Length Update: At each step, we update the maxLength if the current window's length is greater.

7. Return: Finally, we return the maximum length found.
*/

/* Example Usage: */
const s1 = "ABAB";
const k1 = 2;
const result1 = characterReplacement(s1, k1);
console.log(result1); // Output: 4

const s2 = "AABABBA";
const k2 = 1;
const result2 = characterReplacement(s2, k2);
console.log(result2); // Output: 4

/*
Time and Space Complexity:

Time Complexity: O(n) - We iterate through the string once.
Space Complexity: O(26) -> O(1) - The map stores at most 26 characters (uppercase English letters).
*/
