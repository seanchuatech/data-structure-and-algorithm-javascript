/*
https://leetcode.com/problems/valid-palindrome/

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters includeletters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

function isPalindrome(s) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanString = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
    
    // Use two pointers to check for palindrome
    let left = 0;
    let right = cleanString.length - 1;
    
    while (left < right) {
        if (cleanString[left] !== cleanString[right]) {
            return false; // Characters at left and right don't match
        }
        left++;
        right--;
    }
    
    return true; // If the loop completes, it's a palindrome
}
/*
Explanation:

1. Cleaning the string:
    -s.replace(/[^a-z0-9]/gi, ""): Removes all characters that are not letters (a-z) or numbers (0-9). The "gi" flags make the replacement global (all occurrences) and case-insensitive.    
    -.toLowerCase(): Converts the cleaned string to lowercase.

2. Two-pointer approach:
    -left: Starts at the beginning of the cleaned string.
    -right: Starts at the end of the cleaned string.
    -The while loop continues as long as left is less than right. In each iteration:
    -If the characters at positions left and right don't match, return false.
    -Otherwise, move both pointers towards the center (left++ and right--).

3. Return true: If the loop completes without finding any mismatched characters, the string is a palindrome. */

/* Example Usage: */
const s1 = "A man, a plan, a canal: Panama";
const result1 = isPalindrome(s1);
console.log(result1); // Output: true

const s2 = "race a car";
const result2 = isPalindrome(s2);
console.log(result2); // Output: false

/*
Time and Space Complexity:

Time Complexity: O(n) - We iterate through half of the cleaned string.

Space Complexity: O(n) - In the worst case (all characters are alphanumeric), the cleanedString variable will store the entire original string. However, this is temporary space, and in the average case, it will be less than n.
*/