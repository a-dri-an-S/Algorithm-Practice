// Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

const countOdds = (low, high) => {
    let count = 0;
    
    while (low <= high) {
        if (low % 2 !== 0) {
            count++
        }
        low++
    }
    return count;
};

// 1. Declare count and set it to 0
// 2. Use while loop to create loop high number is reached, moving in increments of 1
// 3. If low is not divisible by 2. increment count by 1
// 4. Increment low by 1
// 5. Return count