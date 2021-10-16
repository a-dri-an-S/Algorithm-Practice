// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

const findDisappearedNumbers = (nums) => {
    let newArr = [];
    for (let i = 1; i <= nums.length; i++) {
        if (!nums.includes(i)) {
            newArr.push(i)
        }
    }
    return newArr
};

// 1. Declare newArr and set it to an empty array
// 2. Use for loop to create loop until i is greater than num array length while incrementing by 1
// 3. If current nums (i) is not included inside of nums array. push i into newArr
// 4. Return arr