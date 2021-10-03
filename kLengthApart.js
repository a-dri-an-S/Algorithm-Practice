// Given an array nums of 0s and 1s and an integer k, return True if all 1's are at least k places away from each other, otherwise return False.

const kLengthApart = function(nums, k) {
    const spaceCounts = [];
    let count = 0;
    
    for (const num of nums) {
        if (num === 0) {
            count++;
        } else {
            spaceCounts.push(count);
            count = 0;
        }
    }
    
    spaceCounts.shift();
    const minSpace = Math.min(...spaceCounts);
    
    return minSpace >= k
};

// 1. Declare spaceCounts and set it to an empty array
// 2. Declare count and set it to 0
// 3. Use for loop to iterate through nums array
// 4. If current num is equal to 0, increment count by 1
// 5. Else add count to last index of spaceCounts array with push() method and reset count to 0
// 6. Remove first element of spaceCounts with shift() method
// 7. Declare minSpace and set it to the smallest value in spaceCounts array by destructuring array in Math.min() function
// 8. If minSpace is greater than or equal to k, return true, else return false