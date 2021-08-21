// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

const containsDuplicate = function(nums) {
    return [...new Set(nums)].length !== nums.length;
};

// 1. Place nums in Set to return unique characters, spread into an array
// 2. Get length of array and check if its not equal to length of nums
// 3. Return boolean