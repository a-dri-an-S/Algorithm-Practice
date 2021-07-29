// Given a binary array nums, return the maximum number of consecutive 1's in the array.

const maxConsecutiveOnes = nums => {
    let count = 0;
    let max = 0;

    for (let num of nums) {
        if (num === 1) {
            count++
            max = Math.max(count, max)
        } else {
            count = 0;
        }
    }
    return max;
}

// 1. Declare "count" and "max" and set both to 0.
// 2. Iterate through nums array with for loop
// 3. If num is equal to 1
//  - Increment count by 1
//  - Check for max count with Math.max, set it to max
// 4. If num is equal to 0; reset count to 0
// 5. Return max (max count of 1s)