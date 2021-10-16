// Given two integer arrays of equal length target and arr.
// In one step, you can select any non-empty sub-array of arr and reverse it. You are allowed to make any number of steps.
// Return True if you can make arr equal to target, or False otherwise.

const canBeEqual = (target, arr) => {
    target.sort((a, b) => a - b);
    arr.sort((a, b) => a - b);
    return target.every((val, index) => val === arr[index])
}

// 1. Sort target in ascending order
// 2. Sort arr in ascending order
// 3. Iterate through target array with every method and check if values at every index are of equal value and return 