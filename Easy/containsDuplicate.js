// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

const containsDuplicate = function(nums) {
    return [...new Set(nums)].length !== nums.length;
};

// 1. Place nums in Set to return unique characters, spread into an array
// 2. Get length of array and check if its not equal to length of nums
// 3. Return boolean

// Set Object Solution
const containsDuplicate = function(nums) {
    const set = new Set();
    
    for (const num of nums) {
        if (set.has(num)) return true;
        set.add(num);
    }
    return false;
};

// 1. Declare set and set it to an empty Set() object
// 2. Use for loop to iterate through nums array
//  - If set contains current num (value at current position in array), return true
//      - Use has() method to check if set contains current value
//  - Add num (value at current position) to set with add() method
// 3. If loop ends and there are no duplicates, return false