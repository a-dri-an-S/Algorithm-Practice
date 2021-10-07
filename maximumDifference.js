// Given a 0-indexed integer array nums of size n, find the maximum difference between nums[i] and nums[j] (i.e., nums[j] - nums[i]), such that 0 <= i < j < n and nums[i] < nums[j].
// Return the maximum difference. If no such i and j exists, return -1.

const maximumDifference = function(nums) {
    let max = -1;
    
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                const sum = Math.abs(nums[i] - nums[j]);
                max = Math.max(max, sum)
            }
        }
    }
    return max;
};

// 1. Declare max and set it to -1
// 2. Use for loop to iterate through nums array, incrementing by 1 until 2nd to last element in array is reached
// 3. Use a nested for loop to iterate nums array start at current i, incrementing by 1 until last element is reached
// 4. If element at index-i is less than element at index-j
//  - Declare sum and set it to the absolute difference between both elements using Math.abs() function
//  - Set max equal to largest number between max and sum using the Math.max() function
// 5. Return max