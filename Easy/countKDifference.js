// Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.
// The value of |x| is defined as:
// x if x >= 0.
// -x if x < 0.

const countKDifference = function(nums, k) {
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
       for (let j = i + 1; j < nums.length; j++) {
           if (Math.abs(nums[i] - nums[j]) === k) count++
       }
    }
    return count
};

// 1. Declare count and set it to 0
// 2. Use for loop to iterate through nums array
// 3. Use nested for loop to iterate through nums array starting i index over from i
// 4. If absolute difference between nums[i] & nums[j] is equal to k, increment count by 1
// 5. Return count