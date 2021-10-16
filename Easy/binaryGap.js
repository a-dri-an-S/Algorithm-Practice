// Given a positive integer n, find and return the longest distance between any two adjacent 1's in the binary representation of n. If there are no two adjacent 1's, return 0.
// Two 1's are adjacent if there are only 0's separating them (possibly no 0's). The distance between two 1's is the absolute difference between their bit positions. For example, the two 1's in "1001" have a distance of 3.

const binaryGap = n => {
    const binary = n.toString(2);
    let maxGap = 0;
    let count = 0;
    
    for (let bit of binary) {
        if (bit === '0') {
            count++
        } else {
            maxGap = Math.max(maxGap, count)
            count = 1
        }
    }
    
    return maxGap
};

// 1. Declare binary and set it to num (n) to binary via toString(2) method with radix 2 as argument
// 2. Declare maxGap and set it to 0
// 3. Declare count and set it to 0
// 4. Use for loop to iterate through binary string
// 5. If current bit is equal to 0, increment count by 1
// 6. Else, set maxGap equal to the larger number between max Gap and count via Math.max() and set count to 1
// 7. Return maxGap 