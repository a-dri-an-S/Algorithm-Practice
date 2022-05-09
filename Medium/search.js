// There is an integer array nums sorted in ascending order (with distinct values).
// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
// You must write an algorithm with O(log n) runtime complexity.

const search = function(nums, target) {
    let index = -1;
    let j = nums.length - 1;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            index = i;
            break;
        }
        if (nums[j] === target) {
            index = j;
            break;
        }
        if (j === i) {
            break;
        }
        j--;
    }
    
    return index;
};

// 1. Declare index and set it to -1
// 2. Declare j and set it to the last index of nums array
//  - Use the length property to get count of elements in array and subtract by 1 (0-index)
// 3. Use a for loop to iterate through nums array
// 4. If element at index-1 IS EQUAL TO target, set index equal to i, break loop
// 5. If element at index-j IS EQUAL TO  target, set index equal to j, break loop
// 6. If j IS EQUAL TO i, break loop
// 7. Decrement j by 1
// 8. After loop ends, return index