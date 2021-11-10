// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.

const maxSubArray = function(nums) {
    let max = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        let sum = 0
        for (let j = i; j < nums.length; j++) {
            sum += nums[j]
            max = Math.max(sum, max)
        }
    }
    return max
};

// 1. Declare max and set it to -Infinity (smallest possible number in JS)
// 2. Use for loop to itereate through nums array
// 3. Declare sum and set it to 0
// 4. Use nested for loop to iterate through nums array, starting at current i
// 5. Let sum equal to sum + currnt num in nested loop (num[j])
// 6. Let max equal to largest between max and sum with Math.max() function
// 7. Return max

// KADANE'S ALGORITHM

const maxSubArray = function(nums) {
    let currSum = 0;
    let maxSum = -Infinity;
    const size = nums.length; 
        
    for (const num of nums) {
        currSum += num;
        maxSum = Math.max(maxSum, currSum);
        if (currSum < 0) currSum = 0;
    }
    
    return maxSum;
};

// 1. Declare currSum and set it to 0
// 2. Declare maxSum and set it to -Infinity (smallest number)
// 3. Declare size and set it length of nums array
// 4. Use for loop to iterate through nums array
//  - Set currSum equal to currSum + num (current value in nums array)
//  - Set maxSum equal to largest number between maxSum and currSum
//      - Use Math.max to get largest number between maxSum and currSum
//  - If currSum is less than 0, set currSum equal to 0
// 5. When loop ends, return maxSum