// Given an integer n and an integer start.
// Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.
// Return the bitwise XOR of all elements of nums.

const xorOperation = function(n, start) {
    let ans = 0;
    
    for (let i = 0; i < n; i++) {
        const val = (2 * i) + start;
        ans ^= (val);
    }
    
    return ans;
};

// 1. Declare ans and set it to 0
// 2. Use for loop to create loop starting at i = 0, incrementing by 1 until n is reached
//  - Declare val and set it to 2 multiplied by i, then added to start value
//  - Set ans equal to the bitwise XOR between ans and val
// - End loop
// 3. Return ans