// You are given a 0-indexed integer array nums. You are also given an integer key, which is present in nums.
// For every unique integer target in nums, count the number of times target immediately follows an occurrence of key in nums. In other words, count the number of indices i such that:
//     0 <= i <= n - 2,
//     nums[i] == key and,
//     nums[i + 1] == target.
// Return the target with the maximum count. The test cases will be generated such that the target with maximum count is unique.

const mostFrequent = function(nums, key) {
    let map = new Map();
    
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === key) {
            const target = nums[i + 1];
            if (!map.has(target)) {
                map.set(target, 1);
            } else {
                map.set(target, map.get(target) + 1);
            }
        }
    }
    
    map = [...map].sort((a, b) => b[1] - a[1]);
    
    return map[0][0];
};

// 1. Declare map and set it to an empty Map object
// 2. Use for loop to iterate through nums array until 2nd to last element is reached
//  - If current element at index-i is equal to key variable, perform the following:
//      - Declare target and set it to element 1 index up from i (i + 1)
//      - If map DOESN'T have key of target, add key/value pair of (target, 1) to map object
//          - Use has() method to check if map object has key
//          - Use set() to add key/value pair to map object
//      - Else, add updated key/value pair with value incremented by 1
//          - Use set() to add key/value pair to map object
//          - Use get() to get value of key in map object
//  - End For Loop
// 3. Set map equal to map object deconstructed into an array and sorted in descending order
//  - Use the spread syntax to deconstruct map object into an array of subarray, key/value pairs
//  - Use the sort() method to sort the array in descending order
// 4. Return the first value of the first subarray in map (map[0][0]) 