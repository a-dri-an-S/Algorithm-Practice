// Given a non-negative integer x, compute and return the square root of x.
// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
// Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

var mySqrt = function(x) {
    let i = 0;
    
    while (i*i < x) {
        i++;        
    } 
    
    if (i*i != x) {
        i--;       
    }
    
    return i
};

// 1. Declare i and set it to 0
// 2. Use while loop to loop until i * i is greater than x and increment i by 1
// 3. If, i * i is not equal to x, decrement i by 1
// 4. Return i


// With sqrt built-in method
var mySqrt = function(x) {
    return parseInt(Math.sqrt(x))
};

// 1. Use Math.sqrt() to get square root of x
// 2. Use parseInt to return integer (no floating point numbers)