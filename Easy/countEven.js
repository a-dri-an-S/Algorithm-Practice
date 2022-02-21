// Given a positive integer num, return the number of positive integers less than or equal to num whose digit sums are even.

// The digit sum of a positive integer is the sum of all its digits.

const countEven = function (num) {
    let count = 0;

    for (let i = 1; i <= num; i++) {
        const n = i.toString().split("")
        let sum = 0;

        n.forEach(str => {
            sum += Number(str);
        });

        if (sum % 2 === 0) {
            count++;
        }
    }
    return count;
};

// 1. DEclare count and set it to 0
// 2. Use for loop to create loop, from 1 to num, incrementing by 1 (variable i)
//  - Declare n and set it to an array of single characters
//      - Use toString() to convert integer to a string
//      - Use split() method to split string into individual characters
//  - Declare sum and set it to 0
//  - Use forEach to iterate through n array
//      - For every element (str), convert str to integer and add it to sum
//          - Use Number() wrapper to convert string to integer
//  - If sum is divisible by 2, increment count by 1
//      - Use % operator to check for remainder. If no remainder (0), then integer is even
// 3. After loop ends, return count