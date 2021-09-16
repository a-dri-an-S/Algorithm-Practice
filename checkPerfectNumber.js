// A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.
// Given an integer n, return true if n is a perfect number, otherwise return false.

const checkPerfectNumber = function(num) {
    let sum = 0
    
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i
        }
    }
    return sum === num
};

// 1. Declare sum and set it to 0
// 2. Use for loop to create loop, incrementing by 1 until num / 2 is reached
// 3. If num divided by current i has no remainder (num % 1 === 0), set sum equal to sum + i
// 4. If sum is equal to num return true, else return false