// Given a 0-indexed integer array nums, determine whether there exist two subarrays of length 2 with equal sum. Note that the two subarrays must begin at different indices.

// Return true if these subarrays exist, and false otherwise.

// A subarray is a contiguous non-empty sequence of elements within an array.

const findSubarrays = (nums) => {
    
    for (let i = 0; i < nums.length - 2; i++) {
        let sumA = nums[i] + nums[i + 1];
        
        for (let j = i + 1; j < nums.length - 1; j++) {
            let sumB = nums[j] + nums[j + 1];
            if (sumA === sumB) {
                return true;
            }
        }
    }
    return false;
};

// 1. Use a for loop to iterate through nums array, stopping 2 indices from the end (index-i)
// 2. Declare sumA and set it to sum between number at index-i and index-i+1 from nums array
// 3. Use a nested for loop to iterate through nums array, starting 1 index up from previous loop (index-i) and ending 1 index from the end (index-j)
// 4. Declare sumB and sum between number at index-j and index-j+1 from nums array
// 5. If sumA is EQUALS TO sumB, return true
// 6. If loop ends with no return, return false