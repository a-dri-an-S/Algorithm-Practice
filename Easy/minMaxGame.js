// You are given a 0-indexed integer array nums whose length is a power of 2.
// Apply the following algorithm on nums:
//     1. Let n be the length of nums. If n == 1, end the process. Otherwise, create a new 0-indexed integer array newNums of length n / 2.
//     2. For every even index i where 0 <= i < n / 2, assign the value of newNums[i] as min(nums[2 * i], nums[2 * i + 1]).
//     3. For every odd index i where 0 <= i < n / 2, assign the value of newNums[i] as max(nums[2 * i], nums[2 * i + 1]).
//     4. Replace the array nums with newNums.
//     5. Repeat the entire process starting from step 1.
// Return the last number that remains in nums after applying the algorithm.


const minMaxGame = function(nums) {
    
    while (nums.length > 1) {
        let isMin = true;

        for (let i = 0; i < nums.length; i++) {
            if (isMin) {
                const min = Math.min(nums[i], nums[i + 1]);
                if (nums[i] === min) {
                    nums.splice(i + 1, 1);
                } else {
                    nums.splice(i, 1);
                }
            } else {
                const max = Math.max(nums[i], nums[i + 1]);
                if (nums[i] === max) {
                    nums.splice(i + 1, 1);
                } else {
                    nums.splice(i, 1);
                }
            }
            
            isMin = !isMin;
        }
    }
    
    return nums[0];
};

// 1. Use a while loop to loop while length of nums IS GREATER THAN 1
// 2. Declare isMin and set it to true
// 3. Use a for loop to iterate through nums
// 4. If isMin IS EQUAL TO TRUE, perform the following:
// 5. Declare min and set it to smallest integer between nums[i] and nums[i + 1]
//  - Use Math.min to get the smallest integer of the two
// 6. If current integer at nums[i] IS EQUAL TO min, remove the other integer from arr
//  - Use the splice() method to remove the other integer
// 7. Else, remove current integer from arr
//  -Use the splice() method to remove current integer
// 8. Else, if isMin is EQUAL TO false, perform the following:
// 9. Declare max and set it to the largest integer between nums[i] and nums[i + 1]
//  - Use Math.max() to get the largest integer between the two
// 10. If current integer at nums[i] IS EQUAL TO max, remove the other integer from arr
//  - Use the splice() method to remove the other integer
// 11. Else, remove current integer from arr
//  -Use the splice() method to remove current integer
// 12. Set isMin equal to the opposite of current boolean value
//  - Use the ! operand to set it equal to its opposite
// 13. When both loops end, return integer at index-0 of arr 