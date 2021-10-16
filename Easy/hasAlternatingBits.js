// Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

const hasAlternatingBits = n => {
    const binary = n.toString(2).split("");
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === binary[i + 1]) {
            return false
        }
    }
    return true
};

// 1. Declare binary and set it to num, transformed into binary, split into array 
//  - Use toString(2) to turn num to binary
//  - Use split("") to split binary string into chars
// 2. Use for loop to iterate through binary array
// 3. If, current num is equal to next num (to the right), return false
// 4. If condition isn't met in for loop, return true