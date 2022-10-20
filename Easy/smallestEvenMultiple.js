// Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n. 

const smallestEvenMultiple = function(n) {
    if (n % 2 !== 0) {
        return n * 2;
    } else {
        return n;    
    }
};

// 1. If n is not a multiple of 2
//  - Use modulo operator to check if n divided by 2 produces a remainder greater than 0 (check if multiple)
// 2. return product of n multiplied by 2
// 3. Else return n