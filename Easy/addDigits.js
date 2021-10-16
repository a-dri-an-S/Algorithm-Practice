// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

const addDigits = (num) => {
    while (num > 9) {
        num = num.toString().split("").reduce((a, b) => Number(a) + Number(b));
    }
    return num
};

// 1. Create loop with while loop that continues until num is less 10 and perform the following:
//  - Convert num to string with toString method
//  - Split string into array of single chars with split method
//  - Sum array with reduce method by converting strings to Numbers
//  - Set num equal to sum
// 2. Once num is less than 10, return num
