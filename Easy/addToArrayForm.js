// The array-form of an integer num is an array representing its digits in left to right order.
// For example, for num = 1321, the array form is [1,3,2,1].
// Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.

const addToArrayForm = function(num, k) {
    num = BigInt(num.map(int => int.toString()).join(""));
    k = BigInt(k);
    
    const sum = num + k;
    
    return [...sum.toString()];
};

// 1. Set num equal to a BigInt primitive
//  - Use map to modify num array and convert all values from integers to strings
//  - Use join() method to join num array into a string
//  - Use BigInt() constructor to convert string to a bigint primitive
// 2. Set k equal to k converted to a bigint primitive with BigInt() constructor
// 3. Declare sum and set it to the sum between num and k
// 4. Return an array of single strings obtained from sum
//  - Use toString() method to convert bigint into a string
//  - Use spread syntax to unpack string into an empty array
