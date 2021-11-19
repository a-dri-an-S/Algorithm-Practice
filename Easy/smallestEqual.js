// Given a 0-indexed integer array nums, return the smallest index i of nums such that i mod 10 == nums[i], or -1 if such index does not exist.
// x mod y denotes the remainder when x is divided by y.

const smallestEqual = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (i % 10 === nums[i]) return i;
    }
    return -1
};

// 1. Use for loop to iterate through nums array
//  - If current index-i modulo 10 (% 10) si equal to value at current index, return i
//  - If no conditions are met, end loop
// 2. Return -1