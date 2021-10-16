// Given an integer array arr. You have to sort the integers in the array in ascending order by the number of 1's in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order.
// Return the sorted array.

sortByBits = arr => {
    let bitsCount = [];
    let sortedNums = [];

    for (let num of arr) {
        const bit = num.toString(2).split("").reduce((a, b) => Number(a) + Number(b), 0)
        bitsCount.push([num, bit])
    }

    bitsCount.sort((a, b) => a[0] - b[0]);
    bitsCount.sort((a, b) => a[1] - b[1]);

    for (let arr of bitsCount) {
        sortedNums.push(arr[0])
    }
    return sortedNums
}

// 1. Declare bitCounts and set it as an empty array
// 2. Declare sortedNums and set it to an empty array
// 3. Use for loop to iterate through arr array
// 4. Declare bits set it to a sum of its current num bit count
//  - transform current num into binary with toString(2), with radix set to 2
//  - Split into array via split and return sum of bits count with reduce method, converting strings to numbers for summation
// 5. Push array of current num at index 0 and bit (sum) at index 1 into bitsCount
// 6. Sort bitsCount by number in ascending order, sort by index 0 of subarray 
// 7. Sort bitsCount by bit (sum) in ascending order, sort by index 1 of subarray
// 8. Use for loop to iterate through bitCounts array
// 9. Push current num at index 0 into sortedNums
// 10. Return sortedNums

// One Liner

const sortByBits = arr => arr.map(num => [num, num.toString(2).split("").reduce((a, b) => +a + +b)])
    .sort((a, b) => a[0] - b[0]).sort((a, b) => a[1] - b[1])
    .filter(a => a.pop()).flat();