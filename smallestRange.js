// You are given an integer array nums and an integer k.
// In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.
// The score of nums is the difference between the maximum and minimum elements in nums.
// Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

const smallestRange = (nums, k) => nums.length === 1 ? 0 :
    Math.max(...nums) - Math.min(...nums) <= 2 * k ? 0 :
    (Math.max(...nums) - Math.min(...nums)) - (2 * k);

// 1. If array consist of 1 number return 0
// 2. Else If, Max num in array - min mun in array is less than double k, return 0
// 3. Else difference of Max num - Min num subtracted by double k