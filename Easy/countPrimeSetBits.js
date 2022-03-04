// Given two integers left and right, return the count of numbers in the inclusive range [left, right] having a prime number of set bits in their binary representation.
// Recall that the number of set bits an integer has is the number of 1's present when written in binary.
//     For example, 21 written in binary is 10101, which has 3 set bits.

const countPrimeSetBits = function(left, right) {
    let count = 0;
    
    for (let i = left; i <= right; i++) {
        
        const bin = i.toString(2);
        let bits = 0;
        let prime = true;
        
        for (const bit of bin) {
            if (bit === '1') bits++;
        }
        if (bits > 1) {
            for (let j = 2; j < bits; j++) {
                if (bits % j === 0) {
                    prime = false;
                    break;
                }
            }
            if (prime === true) count++;
        }
        
    }
    
    return count
};

// 1. Declare count and set it to 0
// 2. Use a for loop to increment by 1 from left to right
// 3. Declare bin and set it to current number in loop, converted to binary
//  - Use toString() method with a radix of 2, converts integers to binary string
// 4. Declare bits and set it to 0
// 5. Declare prime and set it to true
// 6. Use a nested for of loop to iterate through binary string
//  - If current char (bit) in string is equal to '1', increment bits by 1
// 7. If bits is greater than 1, perform the following:
// 8. Use nested for loop to increment by 1 starting at 2 to bits - 1
//  - If bits divided by j has no remainder, set prime equal to false and break loop
//      - Use the modulo operator to check for a remainder after division
// 9. After last loop ends, If prime is equal to true, increment count by 1
// 10. After all loops end, return count