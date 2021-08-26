// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

const moveZeroes = function(nums) {
    let length = nums.length;
    
    for (let i = 0; i < length; i++) {
        if (nums[i] === 0) {
            nums.push(...nums.splice(i, 1))
            length--
            i--
        }
    }
};

// 1. Declare length and set it to length of nums arrays
// 2. Use for loop to iterate through nums array
// 3. If current number in nums is equal ti 0, splice nums at current index, extract 0, spread into push method and place at end of nums array
// 4. Decrement length and i by 1