// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

const maximumProduct = function(nums) {
    nums.sort((a, b) => b - a)
    const maxNum1 = nums[0]
    const maxNum2 = nums[1]
    const maxNum3 = nums[2]
    const minNum1 = nums[nums.length - 1]
    const minNum2 = nums[nums.length - 2]
    return Math.max((maxNum1 * maxNum2 * maxNum3), (minNum1 * minNum2 * maxNum1))  
};

// 1. Sort nums in descending order with sort method()
// 2. Declare maxNum1 and set it to the 1st index element of nums array, nums[0]
// 3. Declare maxNum2 and set it to the 2nd index element of nums array, nums[1]
// 4. Declare maxNum2 and set it to the 3rd index element of nums array, nums[2]
// 5. Declare minNum1 and set it to the last index element of nums array, nums[nums.length - 1]
// 6. Declare minNum2 and set it to the 2nd to last index element of nums array, nums[nums.length - 2]
// 7. Return largest product between (maxNum1, maxNum2, maxNum3) and (minNum1, minNum2, maxNum1)