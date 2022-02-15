// You are given a 0-indexed integer array nums. Rearrange the values of nums according to the following rules:

//     Sort the values at odd indices of nums in non-increasing order.
//         For example, if nums = [4,1,2,3] before this step, it becomes [4,3,2,1] after. The values at odd indices 1 and 3 are sorted in non-increasing order.
//     Sort the values at even indices of nums in non-decreasing order.
//         For example, if nums = [4,1,2,3] before this step, it becomes [2,1,4,3] after. The values at even indices 0 and 2 are sorted in non-decreasing order.

// Return the array formed after rearranging the values of nums.

const sortEvenOdd = function(nums) {
    const ans = [];
    
    if (nums.length < 3) return nums;
    
    const even = nums.filter((el, idx) => idx % 2 === 0);
    const odd = nums.filter((el, idx) => idx % 2 !== 0);
    
    even.sort((a, b) => a - b); // non-decreasing
    odd.sort((a, b) => b - a); // non-increasing
    
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            ans.push(...even.splice(0, 1));
        } else {
            ans.push(...odd.splice(0, 1));
        }
    }
    
    return ans;
};

// 1. Declare ans and set it to an empty array
// 2. If nums has less than 2 elements, return nums
//  - Use length property to check for amount of elements contained within array

// 3. Declare even and filter out all the even indexed numbers in nums
//  - Use filter() method to filter even indexed elements
//  - Use the % operator to check if index is divisible by 2
// 4. Declare odd and filter out all the odd indexed numbers in nums
//  - Use filter() method to filter even indexed elements
//  - Use the % operator to check if index is NOT divisible by 2
// 5. Sort even in non-decreasing order
//  - Use sort() method to sort from smallest to largest integer
// 6. Sort odd in non-increasing order
//  - Use sort() method to sort from largest to smallest
// 7. Use for loop to create loop until i is equal to length of nums, starting at 0
//  - If i is divisible by 2, push first element spliced from even array
//      - Use push() method to append current value to ans array
//      - Use splice() method to remove first element from even array
//      - Use spread operator to unpack value from array
//  - Else, push first element spliced from odd array
//      - Use push() method to append current value to ans array
//      - Use splice() method to remove first element from odd array
//      - Use spread operator to unpack value from array
// 8. Return ans