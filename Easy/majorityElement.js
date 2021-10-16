// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

const majorityElement = nums => {
    nums.sort((a, b) => a - b)
    let majEl;
    let maxCount = 0
    let count = 0
    
    for (let i = 0; i < nums.length ; i++) {
        if (nums[i] !== nums[i + 1]) {
            maxCount = Math.max(count, maxCount)
            if (maxCount === count) {
                majEl = nums[i]
            }
            count = 0
        } else {
            count++
        }
    }
    return majEl
};

// 1. Sort nums array in ascending order via sort method
// 2. Declare majEl without setting any value
// 3. Declare maxCount & count and set them both to 0
// 4. Use for loop to iterate through nums array
// 5. If current num is not equal to next num (on the right), perform the following
//  - Set maxCount equal to largest number between count and maxCount via Math.max method
//  - If maxCount is equal to current count, set majEl to current num
//  - Reset count to 0
// 6. Else, increment count by 1
// 7. Return majEl

// SOLUTION #2
const majorityElement = function(nums) {
    const count = {}
    
    for (let num of nums) {
        if (count[num] ===  undefined) {
            count[num] = 0
        }
        count[num]++
    }
    const counts = Object.entries(count).sort((a, b) => b[1] - a[1])
    return counts[0][0]
};

// 1. Declare count and set it to an empty object
// 2. Use for loop to iterate through nums array
// 3. If current num is not found in object (undefined), add it to counts object and set it to 0
// 4. Increment num in counts object by 1
// 5. Declare counts and set it to an array of key pair values via Object.entries method, then sort it in descending order based on value with sort method
// 6. Return count at index[0][0] to get element with most occurrences