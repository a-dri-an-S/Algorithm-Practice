// You are given a non-negative integer array nums. In one operation, you must:

//     Choose a positive integer x such that x is less than or equal to the smallest non-zero element in nums.
//     Subtract x from every positive element in nums.

// Return the minimum number of operations to make every element in nums equal to 0.

const minimumOperations = function(nums) {
    let count = 0;
    
    while (nums.length > 0) {
        if (nums.includes(0)) {
            nums = nums.filter(el => el !== 0);
        }
        
        if (nums.length === 0) {
            return count;
        } else {
            let minEl = Math.min(...nums);
            
            for (let i = 0; i < nums.length; i++) {
                nums[i] -= minEl;
            }    
            count++;
        }
    }
    return count;
};

// 1. Declare count and set it to 0
// 2. Use while loop to create loop until nums contains 0 elements
//  - Use .length property to get amount of elements in array
// 3. If nums contains 0, remove all 0's from array
//  - Use the .includes method to check if nums array contains 0
//  - Use the .filter method to remove all 0's from nums array
// 4. If nums contains no elements, return count
//  - Use .length property to get amount of elements in nums array
// 5. Else, iterate through nums array and subtract smallest element from all elements and increment count by 1
//  - Declare minEl and set it to the smallest element in nums array
//      - Use the Math.min() function to get the smallest element
//      - Use the ... spread operator to unpack nums array
//  - Use the for loop to iterate through nums array
//      - Set current element nums[i] equal to itself, subtracted by minEl
//  - When loop ends, increment count by 1
//  6. When while loop ends, return count