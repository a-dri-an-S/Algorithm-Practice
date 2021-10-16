// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

const thirdMax = function(nums) {
    nums.sort((a, b) => b - a)
    nums = [...new Set(nums)]
    return nums[2] === undefined ? nums[0] : nums[2]
};

// 1. Sort nums array in increasing order w/ sort() method
// 2. Set nums equal to itself with only unique integers in array
//  - Use Set to return object of unique integers, deconstructed with spread syntax
// 3. If nums at index-2 is undefined, return nums at index-0 (max number), else return nums at index-2 (third largest number)