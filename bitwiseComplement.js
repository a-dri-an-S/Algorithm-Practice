// The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.
// For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
// Given an integer n, return its complement.

const bitwiseComplement = n => {
    let arr = [];
    const bit = n.toString(2).split("")
    bit.forEach(el => {
        el === "1" ? arr.push(0) : arr.push(1)
    })
    const invNum = arr.join("")
    return parseInt(invNum, 2)
};

// 1. Declare arr and set it to an empty array
// 2. Declare bit and set it to an array of n converted to binary via toString w/ radix 2 & split into individual nums
// 3. Use forEach method to iterate through array and perform the following:
//  - If current el is equal to "1", push 0 into arr, else push 1
// 4. Declare invNum and set it to array joined into a string via join method
// 5. Return num by taking binary string and converting it to base -10 num via parseInt with radix 2
