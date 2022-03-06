// Given an integer array nums and an integer k, modify the array in the following way:
//     choose an index i and replace nums[i] with -nums[i].
// You should apply this process exactly k times. You may choose the same index i multiple times.
// Return the largest possible sum of the array after modifying it in this way.

const largestSumAfterKNegations = function(nums, k) {
    
    while (k > 0) {
        const num = Math.min(...nums);
        const idx = nums.indexOf(num);
        nums[idx] = -nums[idx];
        k--;
    }
    
    return nums.reduce((a, b) => a + b, 0);
};

// 1. Use a while loop to create loop while k is greater than 0
//  - Declare num and set it to smallest number is nums array
//      - Use Math.min() function to return the smallest number
//      - Use spread syntax to destructure nums into Math.min()
//  - Declare idx and set it to the index of the smallest number
//      - Use indexOf to get the index of num (smallest number) in nums array
//  - Set value at nums[idx] equal to itself as a negative value (or positive if current value is < 0)
//  - Decrement k by 1
// - End while loop
// 2. Return the sum of nums array
//  - Use reduce() method to sum all values in nums array