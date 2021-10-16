// The Tribonacci sequence Tn is defined as follows: 
// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
// Given n, return the value of Tn.

const tribonacci = function(n) {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
    
    let sum = 0;
    let firstSum = 1;
    let secondSum = 1;
    let thirdSum = 0;
    
    for (let i = 3; i <= n; i++) {
        sum = thirdSum + secondSum + firstSum;
        thirdSum = secondSum;
        secondSum = firstSum
        firstSum = sum;
    }
    return sum;
};

// 1. If n is equal to 0, return 0
// 2. If n is equal to 1 or 2, return 1
// 3. Declare sum and set it to 0
// 4. Declare firtSum + secondSum and set both equal to 1
// 5. Declare thirdSum and set it to 0
// 6. Use for loop to create loop, starting at 3 and incrementing by 1 until n is reached
// 7. Set sum equal to thirdSum + secondSum + firstSum
// 8. Set thirdSum equal to secondSum
// 9. Set secondSum equal to firstSum
// 10. Set firstSum = sum
// 11. Once loop is done, return sum