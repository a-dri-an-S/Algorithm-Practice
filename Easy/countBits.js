// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

const countBits = n => {
    let i = 0;
    let sums = [];

    while (i <= n) {
        let bitSum = i.toString(2).split("").reduce((a, b) => Number(a) + Number(b));
        sums.push(bitSum);
        i++
    }
    return sums;
}

// 1. Declare i and set it to 0
// 2. Declare sums and set it to an empty array
// 3. Use while loop to increment by 1 until i is equal to n
// 4. Declare bitSum and set it to the sum of 1s in i represented as a binary
//  - Turn in to binary via toString(2), radix 2 returns binary of given number
//  - Split binary number into array and return sum of 1 via reduce array method, converting strings to numbers
// 5. Push bitSum value into sums
// 6. Increment by 1
// 7. Return array of bit 1 sums