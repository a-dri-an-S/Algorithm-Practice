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

// TWO POINTERS

const moveZeroes = function(nums) {
    let addIdx = nums.length - 1;
    
    for (let rmvIdx = 0; rmvIdx < addIdx; rmvIdx++) {
        if (nums[rmvIdx] === 0) {
            let zero = nums.splice(rmvIdx, 1);
            nums.splice(addIdx, 0, zero);
            rmvIdx--;
            addIdx--;
        }        
    }
    
};

// 1. Declare addIdx and set it to length of nums array by 1
//  - Index to add zero to
// 2. Use for loop to iterate through nums array, starting at index-0 (rmxIdx), incrementing by 1 until addIdx is reached
// 3. If value at current index of nums array is equal to 0:
//  - Declare zero and set it to value at current index(rmvIdx) removed from nums array
//      - Use splice() method to remove value at current index (rmvIdx)
//  - Add zero to nums array at addIdx 
//      - Use splice() method to add zero to addIdx
//  - Decrement rmvIdx by 1
//  - Decrement addIdx by 1
