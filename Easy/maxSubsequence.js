// You are given an integer array nums and an integer k. You want to find a subsequence of nums of length k that has the largest sum.
// Return any such subsequence as an integer array of length k.
// A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

const maxSubsequence = function(nums, k) {
    const n = nums.length - k;
    
    for (let i = 1; i <= n; i++) {
        nums.splice(nums.indexOf(Math.min(...nums)), 1);
    }
    
    return nums;
};

// 1. Declare n and set it to length of nums array, subtracted by k
// 2. Use for loop to create loop, starting at 1 and incrementing by 1 until n is reached
//  - Remove lowest value in array
//      - Use spread syntax to destructure nums array in Math.min() function to get lowest value
//      - Use indexOf() method to get the index of the lowest value
//      - Use splice() method to remove lowest value from nums array
// - End loop
// 3. Return nums