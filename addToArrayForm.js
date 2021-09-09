// The array-form of an integer num is an array representing its digits in left to right order.
// For example, for num = 1321, the array form is [1,3,2,1].
// Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.

const addToArrayForm = function(num, k) {
    const arrNum = parseInt(num.join(''))
    const ans = (arrNum + k).toString().split('')
    return ans.map(char => parseInt(char))
};

// 1. Declare arrNum and set it to number dervied from num arr
//  - Use join() method to join num elements into a string
//  - Use parseInt to conver that numerical string into an integer
// 2. Declare ans and set it to an array of numerical chars after the summation of arrNum and k
//  - Sum arrNum and k and convert to string with toString() method
//  - Use split() method to turn string into array of individual numerical chars
// 3. Iterate and modify ans array with map() method, convert every numerical char into an integer
