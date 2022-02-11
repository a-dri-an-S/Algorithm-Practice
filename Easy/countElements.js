// Given an integer array nums, return the number of elements that have both a strictly smaller and a strictly greater element appear in nums.

const countElements = function(nums) {
    let count = 0;
    const minNum = Math.min(...nums);
    const maxNum = Math.max(...nums);
    
    for (let num of nums) {
        if (num > minNum && num < maxNum) {
            count++
        }
    }
    
    return count;
};

// 1. Declare count and set it to 0
// 2. Declare minNum and set it to smallest number in nums array
//  - Use ... spread operator to 'unpack' elements (not contained within array)
//  - Use Math.min() method to get smallest number 
// 3. Declare maxNum and set it to largest number in nums array
//  - Use ... spread operator to 'unpack' elements (not contained within array)
//  - Use Math.max() method to get largest number 
// 4. Use for of loop to iterate through nums array (num = current value)
//  - If num is greater than minNum AND num is less than maxNum, increment count by 1
// 5. Return count