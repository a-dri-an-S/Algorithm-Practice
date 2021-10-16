// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

const containsNearbyDuplicate = (nums, k) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && i !== j && Math.abs(i - j) <= k) {
                return true
            }
        }
    }
    return false
};;

// 1. Use for loop to iterate nums array, i
// 2. Use nested for loop to iterate through nums array starting at index i + 1, j
// 3. If current num of loop i is equal to current num in loop j and i is not equal to j & absolute of i - j is less than or equal to k, return true
// 4. If no conditions are met, return false