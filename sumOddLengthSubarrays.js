// Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.
// A subarray is a contiguous subsequence of the array.
// Return the sum of all odd-length subarrays of arr.

const sumOddLengthSubarrays = arr => {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            const subArr = arr.slice(j, j, + (i + 1));
            if (subArr.length % 2 !== 0) {
                newArr.push(subArr)
            }
        }
    }
    return newArr.flat().reduce((a, b) => a + b)
}

// 1. Declare newArr and set it to an empty array
// 2. Use for loop to iterate through array from left to right, starting at index 0
// 3. Use a nested for loop to iterate through array starting at index 0, decrementing each loop length by 1
// 4. Declare subArr and set it to subarray based on current index + conditions
//  - Slice at j (starting point) and with each i iteration, adding 1 element to each subarr
// 5. If subArr.length is odd, push it into newArr
// 6. Remove all subarray brackets in newArr with flat() method and return sum with reduce method