/*
LeetCode Problem: Letter Combinations of a Phone Number 
https://leetcode.com/problems/letter-combinations-of-a-phone-number/

Given a string containing digits from 2-9 inclusive, return all possible letter combinations 
that the number could represent. Return the answer in any order.
*/

function letterCombinations(digits) {
    if (!digits) return []; // Handle empty input

    const digitToLetters = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    };

    const result = [];

    function backtrack(combination, nextDigits) {
        if (nextDigits.length === 0) {
            result.push(combination); // Base case: all digits processed
            return;
        }

        const currentDigit = nextDigits[0];
        const letters = digitToLetters[currentDigit];

        for (const letter of letters) {
            backtrack(combination + letter, nextDigits.slice(1)); // Recursively build combinations
        }
    }

    backtrack('', digits); // Start backtracking with an empty combination
    return result;
}

/*
Explanation:

1. Digit-to-Letters Map: A dictionary (`digitToLetters`) is created to map each digit to its corresponding letters as shown in the image.

2. Backtracking:
   - The function `backtrack` recursively builds letter combinations.
   - It takes two arguments:
     - `combination`: The current combination of letters being built.
     - `nextDigits`: The remaining digits to process.
   - Base case: If there are no more digits to process, add the `combination` to the `result` array.
   - Recursive step:
     - Get the first digit from `nextDigits`.
     - Get the corresponding letters from the `digitToLetters` map.
     - For each letter:
       - Add the letter to the current `combination`.
       - Recursively call `backtrack` with the updated combination and the remaining digits (excluding the first digit).

3. Initial Call: The function starts by calling `backtrack` with an empty combination (`''`) and the entire input string `digits`.
*/


/* Example Usage: */
const digits = "23";
const combinations = letterCombinations(digits);
console.log(combinations); 
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]


/*
Time and Space Complexity:

Time Complexity: O(3^m * 4^n), where m is the number of digits that map to 3 letters and n is the number of digits that map to 4 letters.

Space Complexity: O(3^m * 4^n) - The maximum length of the `result` array and the recursion depth.
*/