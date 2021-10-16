// A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.
// Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.

const arithmeticProgression = arr => {
    arr.sort((a, b) => a - b);
    let progression = [];

    for (let i = 0; i < arr.length; i++) {
        progression.push(arr[i] - arr[i + 1])
    }
    return [...new Set(progression)].length === 1
}

// 1. Sort arr via sort array method in increasing order
// 2. Declare progression and set it to an empty array
// 3. Use for loop to iterate through arr
// 4. Push arr[i] - arr[i + 1] for arithmetic progression
// 5. Return true if there is only one unique arithmetic progression, else false
//  - Check for unique arithmetic progression via new Set() and spread in array to return number of unique arithmetic progressions in array