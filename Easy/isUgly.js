// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

// Given an integer n, return true if n is an ugly number.

const isUgly = function(n) {
    if (n === 0) return false;
    
    while (n % 5 === 0) {
        n /= 5;
    }
    
    while (n % 3 === 0) {
        n /= 3;
    }
    
    while (n % 2 === 0) {
        n /= 2;
    }
    
    return n === 1;
};

// 1. If, n is EQUAL TO 0, return false
// 2. Use while loop to check if n is divisible by 5 and perform the following:
//  - Use the modulo operator to check if n is divisible by 5,
//  - Set n equal to n divided by 5
//  - If not divisible by 5, move on to the next while loop
// 3. Use while loop to check if n is divisible by 3 and perform the following:
//  - Use the modulo operator to check if n is divisible by 3,
//  - Set n equal to n divided by 3
//  - If not divisible by 3, move on to the next while loop
// 4. Use while loop to check if n is divisible by 2 and perform the following:
//  - Use the modulo operator to check if n is divisible by 2,
//  - Set n equal to n divided by 2
//  - If not divisible by 3, move on to the last check
// 5. If n is EQUAL TO 1, return true, else return false