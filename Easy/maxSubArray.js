// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.

const maxSubArray = function(nums) {
    let max = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        let sum = 0
        for (let j = i; j < nums.length; j++) {
            sum += nums[j]
            max = Math.max(sum, max)
        }
    }
    return max
};

// 1. Declare max and set it to -Infinity (smallest possible number in JS)
// 2. Use for loop to itereate through nums array
// 3. Declare sum and set it to 0
// 4. Use nested for loop to iterate through nums array, starting at current i
// 5. Let sum equal to sum + currnt num in nested loop (num[j])
// 6. Let max equal to largest between max and sum with Math.max() function
// 7. Return max