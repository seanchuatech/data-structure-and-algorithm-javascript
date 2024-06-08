/*
https://leetcode.com/problems/product-of-array-except-self/description/

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
*/

function productExceptSelf(nums) {
    const n = nums.length;
    const answer = new Array(n); // Initialize the output array with the same length as nums
    
    // Calculate prefix products (products of elements before index i)
    answer[0] = 1; // Base case: no elements before index 0
    for (let i = 1; i < n; i++) {
    answer[i] = answer[i - 1] * nums[i - 1];
    }
    
    // Calculate postfix products (products of elements after index i) and multiply with prefix products
    let postfixProduct = 1; // Base case: no elements after the last index
    for (let i = n - 1; i >= 0; i--) {
    answer[i] *= postfixProduct;
    postfixProduct *= nums[i]; // Update postfixProduct for the next iteration
    }
    
    return answer;
}
/*
Explanation:

1. Prefix Products: We calculate prefix products (products of elements before the current index) and store them in the answer array.

2. Postfix Products and Calculation: We then iterate through the array in reverse, calculating postfix products (products of elements after the current index) and multiplying them with the corresponding prefix products already stored in the answer array. This gives us the desired product of all elements except the current element.
/
/ Example Usage: */
const nums = [1, 2, 3, 4];
const result = productExceptSelf(nums);
console.log(result); // Output: [24, 12, 8, 6]

/*
Time and Space Complexity:

Time Complexity: O(n), as we iterate through the array twice.

Space Complexity: O(1) (excluding the output array). We only use a constant amount of extra space to store variables (postfixProduct). The output array is not considered extra space for space complexity analysis.
*/