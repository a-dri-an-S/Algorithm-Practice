// A shop is selling candies at a discount. For every two candies sold, the shop gives a third candy for free.
// The customer can choose any candy to take away for free as long as the cost of the chosen candy is less than or equal to the minimum cost of the two candies bought.
//     For example, if there are 4 candies with costs 1, 2, 3, and 4, and the customer buys candies with costs 2 and 3, they can take the candy with cost 1 for free, but not the candy with cost 4.
// Given a 0-indexed integer array cost, where cost[i] denotes the cost of the ith candy, return the minimum cost of buying all the candies.

const minimumCost = function(cost) {
    cost.sort((a, b) => b - a);
    let total = 0;
    
    for (let i = 0; i < cost.length; i++) {
        if ((i + 1) % 3) {
            total += cost[i];
        }
    }
    
    return total;
};

// 1. Sort cost array in descending order
//  - Use sort() method to sort array
// 2. Declare total and set it to 0
// 3. Use for loop to iterate through cost array
//  - If the nth elements position is NOT divisible by 3, add current element to total
//      - Use % operator to get falsey value IF elements position is divisible by 3
//      - We add 1 to i because array's are 0-indexed
// 4. Return total