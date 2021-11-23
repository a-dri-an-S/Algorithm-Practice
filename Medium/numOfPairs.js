// Given an array of digit strings nums and a digit string target, return the number of pairs of indices (i, j) (where i != j) such that the concatenation of nums[i] + nums[j] equals target.

const numOfPairs = function(nums, target) {
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j && nums[i] + nums[j] === target) {
                count++
            }
        }
    }
    
    return count;
};

// 1. Declare count and set it to 0
// 2. Use for loop to iterate through nums array (index-i)
// 3. Use nested for loop to iterate through nums array (index-j)
//  - If i is not equal to j AND sum of nums[i], nums[j] is equal to target, increment count by 1
//  - END LOOP
// 4. Return count