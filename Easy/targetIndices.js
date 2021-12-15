// You are given a 0-indexed integer array nums and a target element target.
// A target index is an index i such that nums[i] == target.
// Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

const targetIndices = function(nums, target) {
    nums.sort((a, b) => a - b);
    const indices = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            indices.push(i);
        };
    }
    
    return indices;
};

// 1. Sort nums array in ascending order (non-decreasing)
//  - Use sort() method to sort array
// 2. Declare indices and set it to an empty array
// 3. Use for loop to iterate through nums array
//  - If current value in nums (nums[i]) is equal to target, append index-i to indices array
//      -Use push() method to append i to indices
//  - End loop
// 4. Return indices