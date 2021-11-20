// Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

const largestPerimeter = function(nums) {
    nums.sort((a ,b) => b - a);
    
    for (let i = 0; i < nums.length - 2; i++) {
        
        if (nums[i] < nums[i + 1] + nums[i + 2]) {
            return nums[i] +  nums[i + 1] + nums[i + 2];
        }
    }
    return 0;
};

// 1. Use sort() method to sort the array in descending order (largest to smallest)
// 2. Use for loop to iterate through nums array (stop 2 indexes before end of array)
//  - If current value (nums[i]) is less than the sum of the next two values (nums[i + 1 ] & nums[i + 2]), return the sum of all 3 values (nums[i], nums[i + 1], nums[i + 2])
// - End Loop
// 3. If no such conditions are met, return 0