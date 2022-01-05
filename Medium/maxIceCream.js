// It is a sweltering summer day, and a boy wants to buy some ice cream bars.

// At the store, there are n ice cream bars. You are given an array costs of length n, where costs[i] is the price of the ith ice cream bar in coins. The boy initially has coins coins to spend, and he wants to buy as many ice cream bars as possible. 

// Return the maximum number of ice cream bars the boy can buy with coins coins.

// Note: The boy can buy the ice cream bars in any order.

const maxIceCream = function(costs, coins) {
    costs.sort((a, b) => a - b);
    let bars = 0;
    
    for (let i = 0; i < costs.length; i++) {
        coins -= costs[i];
        
        if (coins >= 0) {
            bars++;
        } else {
            return bars;
        }
    }
    return bars;
};

// 1. Sort costs array in ascending order
//  - Use sort() method to sort array
// 2. Declare bars and set it to 0
// 3. Use for loop to iterate through costs array
//  - Set coins equal to itself subtracted by value at index-i of costs
//  - If coins is greater than or equal to 0, increment bars by 1
//  - Else, return bars
// 4. If conditions aren't met, end loop and return bars