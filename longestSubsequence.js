// Given an unsorted array of integers nums, return the length of the longest continuous increasing subsequence (i.e. subarray). The subsequence must be strictly increasing.
// A continuous increasing subsequence is defined by two indices l and r (l < r) such that it is [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] and for each l <= i < r, nums[i] < nums[i + 1].

const findLengthOfLCIS = function(nums) {
    let count = 1;
    let max = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i + 1]) {
            count++
        } else {
            max = Math.max(max, count)
            count = 1
        }
    }
    return max
};

// 1. Declare count and set it to 1
// 2. Declare max and set it to 0
// 3. Use for loop to iterate through nums array
// 4. If current num (nums[i]) is less then next num (nums[i + 1]), increment count by 1
// 5. Else, set max = largest int between max and count via Math.max() function and set count equal to 1
// 6. Return max