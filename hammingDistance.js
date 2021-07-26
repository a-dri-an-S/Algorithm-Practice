// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
// Given two integers x and y, return the Hamming distance between them.

const hammingDistance = (x, y) => {
    let count = 0;
    let bitX = x.toString(2).split("");
    let bitY = y.toString(2).split("");
    
    while (bitX.length < bitY.length) {
        bitX.unshift('0')
    }
    while (bitX.length > bitY.length) {
        bitY.unshift('0')
    }

    for (let i = 0; i < bitX.length; i++) {
        if (bitX[i] !== bitY[i]) {
            count++
        }
    }
    return count;
}

// 1. Declare count and set it to 0
// 2. Declare bitX & bitY, set 2 as radix in toString for binary value and split into an array
// 3. if bitX is longer in bit length, add 0 to front via unshift until lengths are the same 
// 4. if bitY is longer in bit length, add 0 to front via unshift until lengths are the same 
// 5. use for loop to iterate through bitX
// 6. if bits are not equal at i index, increment count by 1
// 7. return count