// Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x.

const isPowerOfTwo = (n) => {
    let product = -Infinity
    let powerOf = 0;
    
    while (product <= n) {
        product = Math.pow(2, powerOf)
        if (n === product) {
            return true
        }
        powerOf++
    }
    return false
};

// 1. Declare product and set it to -Infinity
// 2. Declare powerOf and set it to 0
// 3. Use while loop to loop until product is greater than integer n
// 4. Set product equal product of 2 to the power of current powerOf integer
// 5. If n is equal to product, return true
// 6. Increment powerOf by 1
// 7. Return false if no conditions are met

// 2nd Solution

const isPowerOfTwo = function(n) {
    if (n === 1) return true;
    
    while (n > 1) {
        n /= 2;
        if (n === 1) return true
    }
    
    return false;
};

// 1. If n is equal to 1, return true
// 2. Use while loop to loop while n is greater than 1
//  - Set n equal to n divided by 2
//  - If n is equal to 1, return true
// 3. Return false