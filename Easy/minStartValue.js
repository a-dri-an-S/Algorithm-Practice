// Given an array of integers nums, you start with an initial positive value startValue.
// In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).
// Return the minimum positive value of startValue such that the step by step sum is never less than 1.

const minStartValue = nums => {
    let startNum = 1;

    while (startNum) {
        let sum = startNum;

        const bools = nums.map(num => {
            if ((sum += num) > 0) {
                return true;
            } else {
                return false;
            }
        })

        if (bools.includes(false)) {
            startNum++
            sum = startNum;
        } else {
            return startNum;
            
        }
    }
}

// 1. Declare startNum and set it to 1
// 2. Use while loop to loop until given condition are met:
// 3. Declare sum and set it to startNum
// 4. Declare bools and iterate through nums array and modify with the following conditions:
// 5. If sum += current num is greater than 0, return true, else return false
// 6. If current bool array includes "false" as a value
//  - Increment startNum by 1
//  - Set sum equal to startNum
//  - Else, return startNum