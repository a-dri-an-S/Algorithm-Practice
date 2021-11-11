// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Hash Table Solution
const twoSum = function(nums, target) {
    const hash = {};
    
    for (let i = 0; i < nums.length; i++) {
        const check = target - nums[i];
        
        if (check in hash) {
            return [hash[check], i];
        }
        hash[nums[i]] = i;
    }
};

// 1. Declare hash and set it to an empty object
// 2. Use for loop to iterate through nums array
//  - Declare check and set it to the difference of target - nums[i] (current value)
//  - If check is in the hash object, return an array with index-0 equal to value of check in hash object and index-1 equal to current index-i
//  - Add key value pair to hash object
//      - Set key as current value
//      - Set value to current index

