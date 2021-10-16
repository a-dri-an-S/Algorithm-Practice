// Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.
// He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, he will put in $1 more than the day before. On every subsequent Monday, he will put in $1 more than the previous Monday.
// Given n, return the total amount of money he will have in the Leetcode bank at the end of the nth day.

var totalMoney = function(n) {
    let sum = 0;
    let count = 1;
    let dollar = 0;
    
    for (let i = 0; i < n; i++) {
        if (count === 7) {
            sum += (count + dollar)
            count = 1;
            dollar++
        } else {
            sum += (count + dollar)
            count++
        }
    }
    return sum
};

// 1. Declare sum, dollar and set both to 0/
// 2. Declare count and set it to 1
// 3. Use for loop to loop until n is reached, i < n
// 4. If the count is equal to 7
//  - Add sum to current day amount + dollar increment
//  - Reset count back to 1
//  - Increment dollar account by 1
// 5. Else, add sum to current day amount + dollar increment and increment count by 1
// 6. Return sum