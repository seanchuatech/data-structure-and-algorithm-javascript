/*
[https://leetcode.com/problems/word-break/](https://leetcode.com/problems/word-break/)

Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
*/

function wordBreak(s, wordDict) {
    const wordSet = new Set(wordDict);  // Use a Set for faster word lookup
    const dp = new Array(s.length + 1).fill(false); // dp[i] represents if s.substring(0, i) can be segmented
    dp[0] = true; // Base case: empty string is always segmentable

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            // Check if the substring from j to i is in the wordSet and if the substring from 0 to j is segmentable
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                break; // No need to check further for this i
            }
        }
    }

    return dp[s.length]; // The last element in dp tells us if the entire string can be segmented
}

/* Example Usage: */
const s1 = "leetcode";
const wordDict1 = ["leet", "code"];
console.log(wordBreak(s1, wordDict1)); // Output: true

const s2 = "applepenapple";
const wordDict2 = ["apple", "pen"];
console.log(wordBreak(s2, wordDict2)); // Output: true

const s3 = "catsandog";
const wordDict3 = ["cats", "dog", "sand", "and", "cat"];
console.log(wordBreak(s3, wordDict3)); // Output: false


/*
Explanation:

1. DP Table:
    - Create a DP table `dp` of size `s.length + 1`. 
    - `dp[i]` represents whether the substring `s.substring(0, i)` can be segmented into words from `wordDict`.

2. Base Case:
    - Set `dp[0]` to `true`, as an empty string can always be segmented.

3. Iterate and Check Substrings:
    - For each index `i` from 1 to `s.length`:
        - Iterate from index `j` = 0 to `i - 1`:
            - If `dp[j]` is true (meaning the substring from 0 to `j` can be segmented) AND the substring from `j` to `i` is present in the `wordSet`, then the substring from 0 to `i` can also be segmented.
            - Set `dp[i]` to `true` and break the inner loop (no need to check further for this `i`).

4. Return Result:
    - Return the value of `dp[s.length]`, which indicates whether the entire string `s` can be segmented.

Time and Space Complexity:

Time Complexity: O(n^2) - Where n is the length of the input string `s`. The two nested loops contribute to this complexity.

Space Complexity: O(n) - We use a DP array of size n + 1 and a set to store the words in the dictionary.
*/
