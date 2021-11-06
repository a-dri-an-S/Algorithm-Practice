// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

const searchInsert = function(nums, target) {
    if (nums.includes(target)) return nums.indexOf(target);
        
    for (let i = 0; i < nums.length; i++) {
        if (target < nums[i]) {
            return i;
        }        
    }
    
    return nums.length;
};

// 1. If target is included in nums array, return index of target in nums
//  - Use includes() method to check if target is found in nums array
//  - Use indexOf() method to get the index of target in nums array
// 2. If condition is not met, iterate through nums array with a for loop and check the following at every index:
//  - If target is less than current value at index i (nums[i]), return i
// 3. If conditions are not met, then return length of nums array to return index