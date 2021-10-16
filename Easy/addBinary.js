// Given two binary strings a and b, return their sum as a binary string.

const addBinary = function(a, b) {
    const numA = BigInt('0b' + a);
    const numB = BigInt('0b' + b);
    const sum = numA + numB;
    const binary = sum.toString(2);

    return binary;
};

// 1. Declare numA and set it to a bigint integer with BigInt()
//  - Prepend 'Ob' to the front of the binary string to allow bigint conversion
// 2. Declare numB and set it to a bigint integer 'a' with BigInt()
//  - Prepend 'Ob' to the front of the binary string 'b' to allow bigint conversion
// 3. Declare num and set it to a sum between numA and numB
// 4. Declare binary and set it to a binary string by converting sum bigint integer to binary via toString(2) w/ radix 2 for binary conversion
// 4. Return binary