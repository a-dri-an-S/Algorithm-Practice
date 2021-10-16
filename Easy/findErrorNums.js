// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.
// You are given an integer array nums representing the data status of this set after the error.
// Find the number that occurs twice and the number that is missing and return them in the form of an array.

const findErrorNums = (nums) => {
    let mismatch = [];
    let single = []
    
    for (let i = 0; i < nums.length; i++) {
        if (!single.includes(nums[i])) {
            single.push(nums[i])  
        }  else if (single.includes(nums[i])) {
            mismatch.push(nums[i])
        }
     }
    
    for (let i = 1; i <= nums.length; i++) {
        if (!single.includes(i)) {
            mismatch.push(i)
        }
    }
    
    return mismatch;
};

// 1. Declare mismatch + single and set both to an empty array
// 2. Use for loop to iterate through nums array
// 3. If current num is not included in single array, push current num into single array w/ push() method
// 4. Else if, current num is included in single array, push current num into mismatch array w/ push() method
// 5. Use for loop to create loop, incrememnting by 1 until nums.length is reached
// 6. If single doesn't include current i, push current i into mismatch array
// 7. Return mismatch array