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


// SOLUTION #2

const specialArray = function(nums) {
    let x = -1;
    let i = 1
    
    while (i <= nums.length) {
        let count = 0
        nums.forEach(num => {
            num >= i ? count++ : null;
        })
        i === count ? x = i : null;
        i++
    }
    return x
};

// 1. Declare x and set it to -1
// 2. Declare i and set it to 1
// 3. Use while loop and loop until i is equal to nums.length
// 4. Declare count and set it to 0
// 5. Use forEach method to iterate through nums array and perform the following:
//  - Ternary statement: if current num >= current i; increment count by 1, else null
// 6. Ternary statement: If i is equal to count, set x = 1, else null
// 7. Increment i by 1 to continue loop
// 8. Return x