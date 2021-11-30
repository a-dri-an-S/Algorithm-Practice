// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

// You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

const singleNumber = function(nums) {
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 2);
            i--;
        }
    }
    
    return nums;
};

// 1. Use sort() method to sort the nums array in ascending order
// 2. Use for loop to iterate through nums array (index-i)
//  - If current value (nums[i]) in equal to next value (nums[i + 1]), remove the 2 values with splice() method
//  - Decrement i by 1
//  - End Loop
// 3. Return nums