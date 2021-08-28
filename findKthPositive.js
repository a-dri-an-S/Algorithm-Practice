// Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
// Find the kth positive integer that is missing from this array.

const findKthPositive = (arr, k) => {
    const nums = new Array(arr[arr.length- 1] + k)
    .fill(0)
    .map((num, i) => i + 1)
    let newArr = [];
    
    for (let num of nums) {
        if (!arr.includes(num)) {
            newArr.push(num)
        }
    }
    return newArr[k - 1]
};

// 1. Declare nums and set it to an array of nums in scending order from 1 to max num in arr array + k
//  - Create new Array with constructor w/ max num in arr array + k spaces
//  - Fill array with 0's w/ fill() method
//  - Iterate through array with map() method and mutate it by returning index + 1 to fill with nums in ascending order
// 2. Declare newArr and set it to an empty array
// 3. Use for loop to iterate through nums array
// 4. If arr doesn't include num current num, push it into newArr
// 5. Return newArr at index k - 1 to retrieve missing number at position k

const findKthPositive = (arr, k) => {
    let count = k
    for (let i = 1; i <= arr[arr.length - 1] + k; i++) {
        if (!arr.includes(i)) {
            count--
        }
        if (count === 0) {
            return i
        }
    }
};

// 1. Declare count and set it to k
// 2. Use for loop to create loop starting at index 1 to max num in arr + k, incrementing by 1 at each iteration
// 3. If current i is not included in arr array, decrement count by 1
// 4. If count is equal to 0, return i