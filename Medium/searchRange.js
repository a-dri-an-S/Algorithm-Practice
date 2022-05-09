// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.

const searchRange = function(nums, target) {
    let minIndex = -1;
    let maxIndex = -1;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target && minIndex === -1) {
            minIndex = i;
        }
        if (nums[i] === target && nums[i + 1] !== target) {
            maxIndex = i;
        }
    }
    
    return [minIndex, maxIndex];
};

// 1. Declare minIndex and maxIndex, set both to -1
// 2. Use a for loop to iterate through nums array
// 3. If current element (nums[i]) IS EQUAL TO target AND minIndex IS EQUAL TO -1, set minIndex equal to current index-i
// 4. If current element (nums[i]) IS EQUAL TO target AND element at index-i + 1 IS NOT EQUAL TO target, set maxIndex equal to current index-i
// 5. When loop ends return an array of minIndex and maxIndex in that order
