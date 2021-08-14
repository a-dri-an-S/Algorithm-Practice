// Given an array of positive integers nums, return the maximum possible sum of an ascending subarray in nums.
// A subarray is defined as a contiguous sequence of numbers in an array.
// A subarray [numsl, numsl+1, ..., numsr-1, numsr] is ascending if for all i where l <= i < r, numsi < numsi+1. Note that a subarray of size 1 is ascending.

const maxAscendingSum = nums => {
    let arr = [];
    let sum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i + 1]) {
            sum += nums[i]
        } else {
            sum += nums[i]
            arr.push(sum)
            sum = 0;
        }
    }
        return Math.max(...arr)  
};

// 1. Declare arr and set it to an empty array
// 2. Declare sum and set it to 0
// 3. Use for loop to iterate through nums array 
// 4. If current num is less than next num, add current num to sum
// 5. Else, add current cum to num, push to arr array and reset sum to 0
// 6. Return max sum via Math.max