// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

const maxProfit = function(prices) {
    let maxReturn = 0;
    let minPurchase = Infinity;
    
    for (const price of prices) {
        let profit = 0;
        if (price < minPurchase) {
            minPurchase = price;
        }
        
        profit = price - minPurchase;
        
        if (profit > maxReturn) {
            maxReturn = profit;
        }
    }
    return maxReturn;
};

// 1. Declare maxReturn and set it to 0
// 2. Declare minPurchase and set it to Infinity 
// 3. Use for loop to iterate through prices array
//  - Declare profit and set it to 0
//  - If current value (price) is less than minPurchase, set minPurchase equal to price
//  - Set profit equal to the difference between price and minPurchase
//  - If profit is greater than maxReturn, set maxReturn equal to profit
// 4. Return maxReturn