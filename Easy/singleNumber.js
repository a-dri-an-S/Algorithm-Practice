// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

const singleNumber = nums => {
    let counts = {};

    for (let num of nums) {
        if (counts[num] === undefined) {
            counts[num] = 0;
        }
        counts[num]++
    }

    return Object.entries(counts).sort((a, b) => a[1] - b[1])[0][0]
}

// 1. Declare counts and set it to an empty object
// 2. Use for loop to iterate through nums array
// 3. If num is not found in object, add it to object and set it to 0
// 4. Increment num in counts object by 1
// 5. Extract key value pairs from counts and sort the array by increasing values, Return key at [0][0]