// You are given an array nums of non-negative integers. nums is considered special if there exists a number x such that there are exactly x numbers in nums that are greater than or equal to x.
// Notice that x does not have to be an element in nums.
// Return x if the array is special, otherwise, return -1. It can be proven that if nums is special, the value for x is unique.

const specialArray = nums => {
    let x = -1;
    
    for (let i = 1; i <= nums.length; i++) {
        let count = 0
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] >= i) {
                count++
            }
        }
        if (i === count) {
            x = i
            break;
        }
    }
    return x
};

// 1. Declare x and set it to -1
// 2. Use for loop to loop until i is greater than nums.length
// 3. Declare count and set it to 0
// 4. Use nested for loop to iterate through nums array
// 5. Within nested for loop, If current num is greater or equal to current i, increment count by 1
// 6. Within first loop, if current i is equal to count, set x to i and break
// 7. Return x