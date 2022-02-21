// Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) where 0 <= i < j < n, such that nums[i] == nums[j] and (i * j) is divisible by k. 

const countPairs = function(nums, k) {
    let count = 0;
    const indices = [];
    
    if ([...new Set(nums)].length === nums.length) return 0;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (i !== j && nums[i] === nums[j]) {
                const divisible = (i * j) % k;
                if (divisible === 0) {
                    count++;
                }
                
            }
        }
    }
    return count / 2;
};

// 1. Declare count and set it to 0
// 2. Declare indices and set it to an empty array
// 3. If nums array has all unique numbers, return 0
//  - Use new Set() to create a set object and check for unique characters
//  - Use spread operator (...) to unpack values, please those values into an empty array
//  - Use length property to check for amount of characters in array
// 4. Use for loop to iterate through nums array (index-i)
// 5. Use a nested for loop to iterate through nums array, starting 1 index over from i (index-j)
//  - If index-i IS NOT EQUAL to index-j AND value at index-i IS EQUAL to value at index-j, perform the following:
//      - Declare divisible and set it to the remainder of the product between index-i and index-j, after divided by k
//          - Use modulo operator to check for remainder
//      - If divisible is equal to 0, increment count by 1
// 6. After loops end, return count