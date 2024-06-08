/*
https://leetcode.com/problems/group-anagrams/

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

function groupAnagrams(strs) {
    const anagramGroups = {};
    
    for (const str of strs) {
    // Create a key for each anagram group by sorting the string's characters.
    const sortedStr = str.split('').sort().join('');
    
    // Add the string to its corresponding anagram group in the map.
    anagramGroups[sortedStr] ? anagramGroups[sortedStr].push(str) : anagramGroups[sortedStr] = [str];
    }
    
    // Return the values of the map (the anagram groups) as an array.
    return Object.values(anagramGroups);
}

/*
Explanation:

1. Anagram Groups Map (anagramGroups): This object will store anagram groups, where the keys are sorted versions of the strings, and the values are arrays containing the original anagrams.

2. Iterate through Strings: We iterate over each string str in the strs array.

3. Generate Key: For each str, we create a unique key sortedStr by:
    -Splitting the string into an array of characters.
    -Sorting the characters alphabetically.
    -Joining the sorted characters back into a string.
    -This sortedStr acts as a fingerprint for all anagrams of str.

4. Group Anagrams:
    -We check if sortedStr (the key) already exists in anagramGroups.
    -If it does, it means we've encountered an anagram of str before, so we push str into the existing group.
    -If not, we create a new group for str and add it as the first element.

Return Groups:  Finally, we extract the values (arrays of anagrams) from the anagramGroups map and return them as the result.
/

/ Example Usage: */
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(strs);
console.log(result); // Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

/*
Time and Space Complexity:

Time Complexity: O(n * k log k), where n is the length of strs and k is the maximum length of a string in strs. Sorting each string takes O(k log k).

Space Complexity: O(n * k) - In the worst case, each string is a unique anagram, and we store all of them in the anagramGroups map.
*/