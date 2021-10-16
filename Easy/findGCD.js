// Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.
// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

const findGCD = function(nums) {
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    let maxDivisor = -Infinity;
    
    for (let i = 1; i <= min; i++) {
        if (min % i === 0 && max % i === 0){
            maxDivisor = Math.max(maxDivisor, i);
        }
    }
    return maxDivisor;
};

// 1. Declare min and set it to the smallest integer in nums array with Math.min() function
// 2. Declare max and set it to the largest integer in nums array with Math.max() function
// 3. Declare maxDivisor and set it to -Infinity
// 4. Use for loop to increment by 1, starting at 1, until min is reached
// 5. If min and max are both divisiable by 1, set maxDivisor equal to the largest divisor
//  - Use Math.max to check the largest divisor between maxDivisor and current i
// 6. Return maxDivisor