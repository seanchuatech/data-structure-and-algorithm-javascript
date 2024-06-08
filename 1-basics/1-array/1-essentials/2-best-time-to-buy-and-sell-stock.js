/* 
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/

function maxProfit(prices) {
    let minPrice = Infinity; // Initialize minPrice to positive infinity
    let maxProfit = 0;      // Start with no profit
  
    for (let price of prices) {
      // Update the minimum price if we find a lower one
      minPrice = Math.min(minPrice, price); 
  
      // Calculate potential profit with current price and the lowest price seen so far
      const potentialProfit = price - minPrice;
  
      // Update maxProfit if we find a higher profit
      maxProfit = Math.max(maxProfit, potentialProfit);
    }
  
    return maxProfit; 
  }

/* 
Explanation:

1. Initialization:
    -minPrice is set to Infinity. This ensures the first price encountered is considered the minimum initially.
    -maxProfit is set to 0, as we haven't found any profit yet.

2. Iteration:
    -We loop through each price in the prices array.
    -For each price, we do the following:
        -Update minPrice to the current price if it's lower than the existing minPrice.
        -Calculate potentialProfit by subtracting the current minPrice from the current price.
        -Update maxProfit to potentialProfit if it's higher than the existing maxProfit.

3. Return:
    -After processing all prices, the maxProfit variable will hold the maximum achievable profit. We return this value.

Why This Works (Greedy Approach):
    -The idea is to keep track of the lowest price encountered so far (minPrice).
    -For each subsequent day, we see if selling the stock at the current price (price) would yield a higher profit than any previous transaction.
    -If it does, we update the maxProfit.
    -By the end of the loop, maxProfit will hold the highest profit possible.
*/

/* Example Usage: */

const prices = [7, 1, 5, 3, 6, 4];
const maxProfitValue = maxProfit(prices);
console.log(maxProfitValue); // Output: 5

/* 
Time and Space Complexity:

Time Complexity: O(n), where n is the length of the input array prices. We iterate through the array only once.

Space Complexity: O(1), as we use a constant amount of space to store variables (minPrice and maxProfit).
*/