// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

// SOLUTION #1
const search = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i
        }
    }
    
    return -1;
};
// 1. Use for loop to iterate through nums array
// 2. If value at current index-i (nums[i]) is equal to target, return index
// 3. If the above condition is not met, return -1 after loop ends


// SOLUTION #2
const search = function(nums, target) {
    if (nums.includes(target)) {
        return nums.indexOf(target);
    } else {
        return -1;
    }
};
// 1. If target is included in nums array, return index that target is positioned at
//  - Use includes() method to check if target is inside of nums array
//  - Use indexOf() method to find the index of target
// 2. Else, return -1