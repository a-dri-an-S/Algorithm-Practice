// Given an array of integers nums, calculate the pivot index of this array.
// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
// Return the leftmost pivot index. If no such index exists, return -1.

const pivotIndex = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        const leftSub = nums.slice(0, i).reduce((a, b) => a + b, 0)
        const rightSub = nums.slice(i + 1, nums.length + 1).reduce((a, b) => a + b, 0)
        
        if (leftSub === rightSub) {
            return i
        }
    }
    return -1
};

// 1. Use for loop to itereate through nums array
// 2. Declare leftSub and set it to a subarray of itegers from 0-index to current i-index, sumed with reduce() method
// 3. Declare rigthSub and set it to a subArray of integers from next index (i + 1) to end of array, sume with reduce() method
// 4. If leftSub is equal to rightSub, return current index (i)
// 5. If no conditions are met, return -1