// You are given an integer array nums where the largest integer is unique.
// Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

const dominantIndex = (nums) => {
    const maxNum = Math.max(...nums)
    
    if (nums.length === 1) return 0
    
    for (let num of nums) {
        if (maxNum / num < 2 && num !== maxNum) {
            return -1
        }
    }
    return nums.indexOf(maxNum)
};

// 1. Declare maxNum and set it to largest integer in nums array via Math.max() function and spread operator
// 2. If nums array contains 1 integer (length equal to 1), return 0
// 3. Use for loop to iterate through nums array
// 4. If maxNum / current num is less than 2 & is no maxNum, return -1
// 5. If conditions aren't met, return index of maxNum in nums array with indexOf() method