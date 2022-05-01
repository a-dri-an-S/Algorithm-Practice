// You are given a 0-indexed integer array nums. An index i is part of a hill in nums if the closest non-equal neighbors of i are smaller than nums[i]. Similarly, an index i is part of a valley in nums if the closest non-equal neighbors of i are larger than nums[i]. Adjacent indices i and j are part of the same hill or valley if nums[i] == nums[j].
// Note that for an index to be part of a hill or valley, it must have a non-equal neighbor on both the left and right of the index.
// Return the number of hills and valleys in nums.

const countHillValley = function(nums) {
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice (i, 1);
            i--;
        }
    }
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > nums[i +1] && nums[i +1] < nums[i + 2]) count++;
        if (nums[i] < nums[i +1] && nums[i +1] > nums[i + 2]) count++;
    }
    
    return count;
};

// 1. Declare count and set it to 0;
// 2. Use a for loop to iterate through nums array
// 3. If element at current index-1 is EQUAL TO element at index-i + 1, remove from nums array and decrement index-i by 1
//  - Use the splice method to remove element from nums array at index-i
// - Decrement i by 1
// 4. Use a for loop to iterate through nums array until second to last element is reached in nums array
// 5. If nums at current index-1 is GREATER THAN AND nums a index-i + 1 is LESS THAN nums at index-1 + 2, increment count by 1
// 6. If nums at current index-1 is LESS THAN AND nums a index-i + 1 is GREATER THAN nums at index-1 + 2, increment count by 1
// 7. After last for loop ends, return count