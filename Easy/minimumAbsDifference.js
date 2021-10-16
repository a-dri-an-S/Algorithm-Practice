// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements. 
// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows
//     a, b are from arr
//     a < b
//     b - a equals to the minimum absolute difference of any two elements in arr

const minimumAbsDifference = arr => {
    let minDifference = Infinity;
    let minDiffArr = [];
    arr.sort((a, b) => a - b)

    for (let i = 0; i < arr.length - 1; i++) {
        if (Math.abs(arr[i]) - arr[i + 1] < minDifference) {
            minDifference = Math.abs(arr[i] - arr[i + 1])
        }
    }

    for (let i = 0 ; i < arr.length; i++) {
        if (Math.abs(arr[i] - arr[i + 1]) === minDifference) {
            minDiffArr.push([arr[i], arr[i + 1]])
        }
    }
    return minDiffArr;
}

// 1. Declare minDifference and set it to Infinity (largest number)
// 2. Declare minDiffArr and set it to an empty array
// 3. Sort array via sort method it increasing order
// 4. Use for loop to iterate through arr array
// 5. If absolute difference of pair is less than minDifference, set difference to minDifference
// 6. Use for loop to iterate through arr array a second time
// 7. If absolute difference of pair is equal to minDifference, push array of pair into minDifArr
// 8. Return minDiffArr