// An array is monotonic if it is either monotone increasing or monotone decreasing.
// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].
// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

const isMonotonic = function(nums) {
    let inc = true;
    let dec = true; 
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i + 1]) {
            dec = false;
        }
        if (nums[i] > nums[i + 1]) {
            inc = false;
        }
    }
    
    return inc || dec
};

// 1. Declare inc and dec and set both to true
// 2. Use for loop to iterate through nums array
// 3. If current nums is less then next num (to the right), set dec to false
// 3. If current nums is greater then next num (to the right), set inc to false
// 4. Return inc || dec
//  - If either are true, it will return true, else it will return false