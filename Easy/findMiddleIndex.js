// Given a 0-indexed integer array nums, find the leftmost middleIndex (i.e., the smallest amongst all the possible ones).

// A middleIndex is an index where nums[0] + nums[1] + ... + nums[middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ... + nums[nums.length-1].

// If middleIndex == 0, the left side sum is considered to be 0. Similarly, if middleIndex == nums.length - 1, the right side sum is considered to be 0.

// Return the leftmost middleIndex that satisfies the condition, or -1 if there is no such index.

const findMiddleIndex = function(nums) {
    
    for (let i = 0; i < nums.length; i++) {
        const before = nums.slice(0, i).reduce((a, b) => a + b, 0);
        const after = nums.slice(i + 1, nums.length + 1).reduce((a, b) => a + b, 0);
        
        if (before === after) return i;
    }
    
    return -1;
};

// 1. Use for loop to iterate through nums array
// 2. Declare before and set it to the sum of values before current index-i
//  - Use slice() method to get a subarray of values before index-i
//  - Use reduce() method to get a sum of sliced subarray
// 3. Declare after and set it to the sum of values before after index-i
//  - Use slice() method to get a subarray of values after index-i
//  - Use reduce() method to get a sum of sliced subarray
// 4. If before is equal to after, return current index-i
// 5. If the above conditions are not met, return -1
