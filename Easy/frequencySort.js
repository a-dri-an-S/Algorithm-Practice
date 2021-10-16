// Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.
// Return the sorted array.

const frequencySort = nums => {
    let counts = {};
    let countSorted;
    let sortedNums = [];

    for (num of nums) {
        if (counts[num] === undefined) {
            counts[num] = 0;
        }
        counts[num]++
    }
    countSorted = Object.entries(counts).sort((a, b) => b[0] - a[0]).sort((a, b) => a[1] - b[1]);
    for (let arr of countSorted) {
        while (arr[1] > 0) {
            sortedNums.push(arr[0])
            arr[1]--
        }
    }
    return sortedNums;
}

// 1. Declare counts and set it to an empty object
// 2. Declare countSorted
// 3. Declare sortedNums and set it to an empty array
// 4. Use for loop to iterate through nums array
// 5. If num is not in counts object, create count and set it to 0
// 6. When num, increment by 1 to count frequency of current num
// 7. Set countSorted equal to the following conditions:
// - Extract key pair values into array with Object.entries method
// - Sort array by keys in decreasing order
// - Sort array by values in increasing order
// 8. Use for loop to iterate through countSorted array
// 9. Use while loop to iterate through arr of countSorted
//  - while current value is greater than 0, push current key into sortedNums
//  - Decrement current value by 1
// 10. Return sortedNums