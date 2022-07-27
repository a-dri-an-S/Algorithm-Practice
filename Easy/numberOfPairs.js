// You are given a 0-indexed integer array nums. In one operation, you may do the following:
//     Choose two integers in nums that are equal.
//     Remove both integers from nums, forming a pair.
// The operation is done on nums as many times as possible.
// Return a 0-indexed integer array answer of size 2 where answer[0] is the number of pairs that are formed and answer[1] is the number of leftover integers in nums after doing the operation as many times as possible.

const numberOfPairs = function(nums) {
    let count = 0;
    
    for (let i = 0; i < nums.length -1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            
            if (nums[i] === nums[j]) {
                nums.splice(j, 1);
                nums.splice(i, 1);
                count++
                i--;
            }
        }
    }
    return [count, nums.length]
};

// 1. Declare count and set it to 0
// 2. Use a for loop to iterate through nums array
// 3. Use a nested for loop to iterate through nums array starting up 1 element from previous loop
// 4. IF value at nums[i] IS EQUAL TO value at nums[j], perform the following:
// 5. Remove value at j-index
//  - Use the splice() method to remove value
// 6. Remove value at i-index
//  - Use the splice() method to remove value
// 7. Increment count by 1
// 8. Decrement index-i by 1
// 9. After loops end, return an array with count at index-0 and remaining element count of nums at index-1
//  - Use the length property to return number of elements left over in nums