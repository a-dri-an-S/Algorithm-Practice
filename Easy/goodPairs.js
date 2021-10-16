// Given an array of integers nums.
// A pair (i,j) is called good if nums[i] == nums[j] and i < j.
// Return the number of good pairs.

const goodPairs = nums => {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <nums.length; j++) {
            if (nums[i] === nums[j] && i < j) {
                count++
            }
        }
    }
    return count;
}

// 1. declare count and set it to 0
// 2. loop through array with for loop, index i
// 3. loop through array with for loop, index j = i + 1, for adjacent pair
// 4. if nums[i] === nums[j] && i < j, increment count by 1
// 5. return count