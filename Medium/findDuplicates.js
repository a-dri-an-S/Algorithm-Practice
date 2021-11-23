// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

const findDuplicates = function(nums) {
    const hash = {}
    const arr = []
    
    for (const num of nums) {
        if (hash[num]) {
            arr.push(num);
        } else {
            hash[num] = num;
        }
    }
    
    return arr;
};

// 1. Declare hash and set it to an empty object
// 2. Declare arr and set it ot an empty array
// 3. Use for loop to iterate through nums array
//  - If current value (num) is a key in hash object, append num to array with push() method
//  - Else, add num to hash with a value of num 
// - End Loop
// 4. Return arr