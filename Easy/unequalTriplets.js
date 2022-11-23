// You are given a 0-indexed array of positive integers nums. Find the number of triplets (i, j, k) that meet the following conditions:
//     0 <= i < j < k < nums.length
//     nums[i], nums[j], and nums[k] are pairwise distinct.
//         In other words, nums[i] != nums[j], nums[i] != nums[k], and nums[j] != nums[k].
// Return the number of triplets that meet the conditions.

const unequalTriplets = function (nums) {
    const length = nums.length;
    let count = 0;

    for (let i = 0; i < length - 2; i++) {
        for (let j = i + 1; j < length - 1; j++) {
            for (let k = j + 1; k < length; k++) {
                const numI = nums[i];
                const numJ = nums[j];
                const numK = nums[k];

                if (numI !== numJ && numI !== numK && numJ !== numK) {
                    count++
                }
            }
        }
    }

    return count;
};

// 1. Declare length and set it to length of nums array, set as constant
//  - Use the length property to get # of elements in nums array
// 2. Declare count and set it to 0
// 3. Use a for loop to iterate through nums array, until 3rd to last element is reached, index-i
// 4. Use a nested for loop to iterate through nums array, until 2nd to last element is reached, index-j
// 5. Use a nested for loop to iterate through nums array, until last element is reached, index-k
// 6. Declare numI and set it to element at nums[i]
// 7. Declare numJ and set it to element at nums[J]
// 8. Declare numK and set it to element at nums[K]
// 9. If numI IS NOT EQUALS TO numJ AND numI IS NOT EQUAL TO numK AND numJ IS NOT EQUAL TO numK, then increment count by 1
// 10. After loop ends, return count
