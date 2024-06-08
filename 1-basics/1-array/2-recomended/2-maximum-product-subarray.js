/*
https://leetcode.com/problems/maximum-product-subarray/

Given an integer array nums, find a contiguous subarray (containing at least one number) which has the largest product and return its product.
*/

function maxProduct(nums) {
    let maxProduct = nums[0];
    let minProduct = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
    // Store previous max and min values before updating
    let tempMax = Math.max(nums[i], nums[i] * maxProduct, nums[i] * minProduct);
    let tempMin = Math.min(nums[i], nums[i] * maxProduct, nums[i] * minProduct);

    // Update max and min products for the current position
    maxProduct = tempMax;
    minProduct = tempMin;

    // Update overall result if the current max product is higher
    result = Math.max(result, maxProduct);
    }

    return result;
}

/*
Explanation:

1. Initialization:
    -maxProduct, minProduct, and result are initialized to the first element of nums. This is because a single element can be considered a subarray.

2. Iteration:
    -We iterate through the array, starting from the second element.
    -At each step, we calculate two potential maximum products:
        -nums[i]: The current element itself could be the maximum.
        -nums[i] * maxProduct: Extending the previous maximum product subarray.
        -nums[i] * minProduct: If the previous subarray had a negative product, multiplying by a negative current element could lead to the maximum.
    -We also calculate the minimum product in the same way, as it could become the maximum if multiplied by a subsequent negative number.
    -We update maxProduct and minProduct for the current position.
    -We update result if the current maxProduct is larger.

3. Return:
    -After iterating through the array, result will hold the maximum product of any contiguous subarray. */

/* Example Usage: */
const nums1 = [2, 3, -2, 4];
const result1 = maxProduct(nums1);
console.log(result1); // Output: 6

const nums2 = [-2, 0, -1];
const result2 = maxProduct(nums2);
console.log(result2); // Output: 0

/*
Time and Space Complexity:

Time Complexity: O(n) - We iterate through the array once.

Space Complexity: O(1) - We use a constant amount of space to store variables (maxProduct, minProduct, result, tempMax, and tempMin).
*/