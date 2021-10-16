// The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).
//     For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
// Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.
// Return the maximum such product difference.

const maxProductDifference = nums => {
    nums.sort((a, b) => a - b)
    return (nums[nums.length - 2] * nums[nums.length - 1]) - (nums[0] * nums[1])
};

// 1. Sort nums in ascending orders
// 2. return difference between product of last 2 numbers in array & product of first 2 numbers in array