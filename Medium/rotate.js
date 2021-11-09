// Given an array, rotate the array to the right by k steps, where k is non-negative.

const rotate = function(nums, k) {
    const lastStep = (k % nums.length);
    const idx = nums.length - lastStep;
    const sub = nums.splice(idx);
    nums.splice(0, 0, ...sub);
    
};

// 1. Declare lastStep and set it to integer that represents index after k steps
//  - Use the % operator to get the remainder to represent index
// 2. Declare idx and set it to length of nums subtracted by lastStep
// 3. Declare sub and set it to subarray spliced from nums
//  - Use splice() method to remove subarray from nums starting at idx
// 4. Append sub array to nums
//  - Use splice method to add sub to nums starting at index-0
//  - Use spread syntax to unpack sub array into nums 