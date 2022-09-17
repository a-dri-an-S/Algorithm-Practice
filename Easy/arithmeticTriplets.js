// You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:
//     i < j < k,
//     nums[j] - nums[i] == diff, and
//     nums[k] - nums[j] == diff.
// Return the number of unique arithmetic triplets.

const arithmeticTriplets = function(nums, diff) {
    let count = 0;
    
    const iLoop = nums.length - 2; 
    const jLoop = nums.length - 1;
    const kLoop = nums.length;
    
    for (let i = 0; i < iLoop; i++) {
        for (let j = i + 1; j < jLoop; j++) {
            const diffA = nums[j] - nums[i];
            for (let k = j + 1; k < kLoop; k++) {
                const diffB = nums[k] - nums[j];
                if (diffA === diff && diffB === diff) {
                    count++;
                }
            }
        }
    }
    
    return count;
};

// 1. Declare count and set it to 0
// 2. Declare iLoop and set it to nums.length - 2
// 3. Declare jLoop and set it to nums.length - 1
// 4. Declare kLoop and set it to nums.length