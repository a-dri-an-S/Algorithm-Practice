// Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets.
// A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:
//     0 <= i < j < k < arr.length
//     |arr[i] - arr[j]| <= a
//     |arr[j] - arr[k]| <= b
//     |arr[i] - arr[k]| <= c
// Where |x| denotes the absolute value of x.
// Return the number of good triplets.

const countGoodTriplets = (arr, a , b, c) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if ( Math.abs(arr[i] - arr[j]) <= a && 
                    Math.abs(arr[j] - arr[k]) <= b && 
                    Math.abs(arr[i] - arr[k]) <= c ) {
                    count++
                }
            }
        }
    }
    return count++
};

// 1. Declare count and set it to 0
// 2. First loop through array starting at index 0; i = 0
// 3. Second loop through array starting at i + 1
// 4. Third loop through array starting at i + 2
// 5. if triplets pass conditions for "good triplet"; increment count by 1
// 6. return count