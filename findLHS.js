// We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.
// Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.
// A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

const findLHS = (nums) => {
    nums.sort((a, b) => a - b)
    let count = 1
    let arr = []
    let subCounts = []
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1]) {
            arr.push([nums[i], count])
            count = 1
        } else if (nums[i] === nums[i + 1]) {
            count++
        }
    }
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (Math.abs(arr[i][0] - arr[i + 1][0]) === 1) {
            subCounts.push(arr[i][1] + arr[i + 1][1])
        }
    }

    return Math.max(...subCounts, 0)
};

// 1. Sort nums array in ascending order with sort method
// 2. Declare count and set it to 1
// 3. Declare arr + subCounts and set both to empty arrays
// 4. Use for loop to iterate through nums array
// 5. If current nums is not equal to next num (up 1 index)
//  - Push subarray of current num & current count into arr array 
//  - Set count to equal to 1
// 6. Else if, current num is equal to next num increment count by 1
// 7. Use for loop to iterate through arr array
// 8. If difference between min val and max val is 1 (min val: subarray[i][0], max val: subarray[i + 1][0]])
//  - Push min val count + max val count (min val count: subarray[i][1], max val count: subarray[i + 1][1]])
// 9. Return max count (max length) with Math.max() function by checking max in subCount array
//  - if array has no counts, return 0