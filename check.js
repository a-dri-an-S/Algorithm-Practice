// Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.
// There may be duplicates in the original array.
// Note: An array A rotated by x positions results in an array B of the same length such that A[i] == B[(i+x) % A.length], where % is the modulo operation.

const check = function(nums) {
    const numsArr = [...nums];
    const sorted = [...nums].sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length; i++) {
        numsArr.push(...numsArr.splice(0, 1));

        const equalsCheck = []
        
        for (let j = 0; j < numsArr.length; j++) {
            if (numsArr[j] !== sorted[j]) {
                equalsCheck.push(false)
            } else {
                equalsCheck.push(true);
            }
        }
        const bool = [...new Set(equalsCheck)];
        
        if (!bool.includes(false)) {
            return true;
        }
    }
    return false;
};

// 1. Declare numsArr and set it to a copy of nums by using spread syntax to unpack into empty array
// 2. Declare sorted set it to a copy of nums sorted in ascending order
//  - Use spread syntax to unpack nums into am empty array
//  - Use sort() method to sort the array in ascending order (a - b)
// 3. Use for loop to iterate through nums array
//  - Splice value at index-0 and append to numsArr array
//  - Declare equalsCheck and set it to an empty array
//  - Use nested for loop to iterate through numsArr array
//      - If current j-index numsArr value is NOT equal to current j-index sorted value, append false to equalsCheck array with push() method
//      - Else, append true to equalsCheck array with push() method
//  - Declare bool and set it to an array of unique values in equalsCheck array
//      - Use new Set() to return unique values and spread syntax to unpack inside of an empty array
//  - If, bool doesn't include false, return true
//      - use includes() method to check if array includes false value
// 4. If none of the above conditions are met, return false