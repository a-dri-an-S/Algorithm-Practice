// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

const fib = function(n) {
    let sum = 0;
    let n1 = 0;
    let n2 = 1;
    
    if (n === 0) return 0
    if (n === 1) return 1
    
    for (let i = 2; i <= n; i++ ) {
        sum = n1 + n2;
        n1 = n2;
        n2 = sum;
    }
    
    return sum;
};

// 1. Declare sum and set it to 0
// 2. Declare n1 and set it to 0
// 3. Declare n2 and set it to 1
// 4. If num is equal to 0, return 0
// 5. If num is equal to 1, return 1
// 6. Use for loop, starting at 2 and increment by 1 until n is reached
// 7. Set sum equal to n1 + n2
// 8. Set n1 equal to n2
// 9. Set n2 equal to sum
// 10. Return sum