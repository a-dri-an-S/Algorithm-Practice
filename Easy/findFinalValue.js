// You are given an array of integers nums. You are also given an integer original which is the first number that needs to be searched for in nums.
// You then do the following steps:
//     If original is found in nums, multiply it by two (i.e., set original = 2 * original).
//     Otherwise, stop the process.
//     Repeat this process with the new number as long as you keep finding the number.
// Return the final value of original.

const findFinalValue = function(nums, original) {
    let num = original;
    
    while (nums.includes(num)) {
        num *= 2;
        
        if (!nums.includes(num)) {
            return num;
        }
    }
    
    return original;
};

// 1. Declare num and set it to original
// 2. Use while loop to create loop while nums contains/includes num
//  - Use includes() method to check if nums array contains num
// 3. Set num equal to num, multiplied by 2
// 4. If nums doesn't include num, return num
// 5. If conditional statement in while loop is false, return original