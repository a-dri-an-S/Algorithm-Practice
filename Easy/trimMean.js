// Given an integer array arr, return the mean of the remaining integers after removing the smallest 5% and the largest 5% of the elements.


const trimMean = (arr) => {
    const sorted = arr.sort((a, b) => a - b)
    const percent = arr.length * .05
    sorted.splice(0, percent)
    sorted.splice(arr.length - percent)
    return sorted.reduce((a, b) => a + b) / sorted.length
};

// 1. Declare sorted and set it to arr sorted in ascending order
// 2. Declare percent and set it to 5% of arr (arr.length * .05)
// 3. Remove 5% of front with splice method
// 4. Remove %5 of back with splice method
// 5. Return mean by dividing sum from arr via reduce method by its length