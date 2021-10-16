// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

const missingNumber = (nums) => {
    let num = 0;
    
    for (let i = 0; i <= nums.length; i++) {
        if (!nums.includes(i)) {
            num = i;
            break;
        }
    }
    return num
};

// 1. Declare nums and set it to 0
// 2. Use for loop to iterate until i is equal to nums length; moving in increments of 1
// 3. If nums array does not include current i, set num equal to i and break
// 4. Return num