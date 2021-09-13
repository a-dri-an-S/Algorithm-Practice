// Given an integer n, return true if it is a power of four. Otherwise, return false.
// An integer n is a power of four, if there exists an integer x such that n == 4x.

const isPowerOfFour = function(n) {
    
    while (n > 1) {
        n /= 4
    }
    
    return n === 1 ? true :  false;
};

// 1. Use while loop to create loop until n is less than 2
// 2. Set n equal to n divided by 4
// 3. If n is equal to 1 return true, else return false