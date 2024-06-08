/*
https://leetcode.com/problems/longest-palindromic-substring/

Given a string s, return the longest palindromic substring in s.
*/

function longestPalindrome(s) {
    let longest = ''; // Initialize the longest palindrome as an empty string
    
    // Function to expand around center
    function expandAroundCenter(left, right) {
        // While the pointers are within bounds and the characters match
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            // Expand outward
            left--;
            right++;
        }
    
        // Return the expanded palindrome substring (excluding the last mismatched characters)
        return s.slice(left + 1, right); 
    }
    
    // Check for palindromes centered at each position and between adjacent positions
    for (let i = 0; i < s.length; i++) {
        const oddPalindrome = expandAroundCenter(i, i); // odd-length palindromes
        const evenPalindrome = expandAroundCenter(i, i + 1); // even-length palindromes
    
        // Update longest if a longer palindrome is found
        if (oddPalindrome.length > longest.length) {
            longest = oddPalindrome;
        }
        if (evenPalindrome.length > longest.length) {
            longest = evenPalindrome;
        }
    }
    
    return longest;
}

/*
Explanation:

1. Initialize: We initialize a variable longest to store the longest palindromic substring found so far.

2. expandAroundCenter Function:
    -Takes two indices, left and right, representing the center of a potential palindrome.
    -Expands outward from the center as long as the characters at the pointers match and the pointers are within the bounds of the string.
    -Returns the expanded palindromic substring (excluding the last mismatched characters).

3. Iteration and Palindrome Checks:
    -We iterate through each position i in the string.
    -For each i, we call expandAroundCenter twice:
        -Once with left and right both at i to check for odd-length palindromes.
        -Once with left at i and right at i + 1 to check for even-length palindromes.
    -If either palindrome is longer than the current longest, we update longest.

4. Return Longest Palindrome: Finally, we return the longest palindromic substring found.
*/

/* Example Usage: */
const s1 = "babad";
const result1 = longestPalindrome(s1);
console.log(result1); // Output: "bab"

const s2 = "cbbd";
const result2 = longestPalindrome(s2);
console.log(result2); // Output: "bb"

/*
Time and Space Complexity:

Time Complexity: O(n^2) - In the worst case, we might expand around the center of every character.

Space Complexity: O(1) - We use a constant amount of space to store variables and the resulting string.
*/