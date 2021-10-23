// You are given an integer array nums consisting of n elements, and an integer k.
// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

const findMaxAverage = function(nums, k) {
    let maxAvg = -Infinity;
    
    if (nums.length === 1) return nums[0];
    
    for (let i = 0; i < nums.length - (k - 1); i++) {
        let sum = 0;
        for (let j = i; j < (k + i); j++) {
            sum += nums[j];
        }
        let avg = sum / k;
        
        if (avg > maxAvg) {
            maxAvg = avg
        }

        
    }
    return maxAvg;      
};

// 1. Declare maxAvg and set it to -Infinity (lowest integer)
// 2. If nums length is equal to 1 (only 1 value in array), return value at index-0 of nums array
// 3. Use for loop and iterate through nums array until (kth - 1) last index is reached
// - Declare sum and set it to 0
// 4. Use nested for loop to iterate until k + i index is reached
//   - set sum equal to nums value at index-j added to current sum
// 5. Declare avg and set it to sum divided by k
// 6. If avg is greater than maxAvg, set maxAvg equal to avg
// 7. When loops complete, return maxAvg