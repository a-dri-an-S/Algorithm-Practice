// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).
// Note:
//     Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
//     In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.

const hammingWeight = (n) => {
    let count = 0;
    const bitArr = n.toString(2).split("");
    
    for (let i  = 0; i < bitArr.length; i++) {
        if (bitArr[i] === "1") {
            count++
        }
    }
    return count
};

// 1. Declare count and set it to 0
// 2. Declare bitArr and set it to array of n bits
//  - Covert n to string with toString method w/ radix 2 to keep string binary
//  - Use split() method to split n string into individual bits
// 3. Use for loop to iterate through bitArr array
// 4. If current bit is equal to "1", increment count by 1
// 5. Return count