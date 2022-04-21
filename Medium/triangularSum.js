// You are given a 0-indexed integer array nums, where nums[i] is a digit between 0 and 9 (inclusive).
// The triangular sum of nums is the value of the only element present in nums after the following process terminates:
//     Let nums comprise of n elements. If n == 1, end the process. Otherwise, create a new 0-indexed integer array newNums of length n - 1.
//     For each index i, where 0 <= i < n - 1, assign the value of newNums[i] as (nums[i] + nums[i+1]) % 10, where % denotes modulo operator.
//     Replace the array nums with newNums.
//     Repeat the entire process starting from step 1.
// Return the triangular sum of nums.

const triangularSum = function(nums) {
    let sumArr = [];

    while (nums.length > 1) {
        for (let i = 0; i < nums.length - 1; i++) {
            const sum = (nums[i] + nums[i + 1]) % 10;
            sumArr.push(sum);
        }
        nums = sumArr;
        sumArr = [];
    }
    return nums[0];
};

// 1. Declare sumArr and set it to an empty array
// 2. Use a while loop to loop until nums.length is equal to 1
// 3. Use a nested for loop to iterate through nums array until it reaches 2nd to last element
// 4. Declare sum and set it to the remainder of the sum between current element and next element, divided by 10
//  - Sum current element and next element
//  - Use the modulo operator to get the remainder of the element sum divided by 10
// 5. Appens sum to sumArr
// 6. After for loop ends, set nums equal to sumArr
// 7. Set sumArr equal to an empty array
// 8. After while loop ends, return first element of nums