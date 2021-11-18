// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

const rob = function(nums) {
    let curr = 0;
    let prev = 0;
    
    for (const num of nums) {
        const temp = curr;
        curr = Math.max(num + prev, curr);
        prev = temp;
    }
    
    return curr;
};

// 1. Declare curr, prev and set both to 0
// 2. Use for loop to iterate through nums array
//  - Declare temp and set it to curr
//  - Set curr equal to the largest number between  sum of num (current value in nums array) + prev and curr
//  - Use Math.max() function to return the largest between the two
//  - Set prev equal to temp
// 3. Return curr