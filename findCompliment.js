// The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.
//     For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
// Given an integer num, return its complement.

const findComplement = num => {
    let arr = [];
    const binArr = num.toString(2).split("");
    for (let i = 0; i < binArr.length; i++) {
        if (binArr[i] === '0') {
            arr.push(1)
        }
        if (binArr[i] === '1') {
            arr.push(0)
        }
    }
    return parseInt(arr.join(''), 2)
}

// 1. Declare arr and set it to an empty array
// 2. Declare binArr and set it to num converted to binary number via toString with radix 2 (binary conversion) and split into an array
// 3. Use for loop to iterate through binArr array
// 4. If current val is equal to '0', push 1 to arr
// 5. If current val is equal to '1', push 0 to arr
// 6. Return arr joined to string inside of parseInt, with radix 2 as second argument to convert binary to integer

// One-Liner
var findComplement = num => parseInt(num.toString(2).split("").map(i => i === '0' ? 1 : i === '1' ? 0 : null).join(''), 2);
