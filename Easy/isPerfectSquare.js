// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// One-Liner
const isPerfectSquare = (num) => Number.isInteger(Math.sqrt(num));

// 1. Get square root of num with Math.sqrt() function and check if it is an integer with isInteger() function

// Without Math.sqrt built-in function
const isPerfectSquare = function(num) {
    let product = 0
    let baseNum = 1;
    
    while (product < num) {
        product = baseNum ** 2
        baseNum++
    }
    
    return product === num
};

// 1. Declare product and set it to 0
// 2. Declare baseNum and set it to 1
// 3. While product is less than num, set product equal to current baseNum to the power of 2 and increment baseNum by 1
// 4. Return true if product is equal to num, else return false