// Given an array of integers arr, a lucky integer is an integer which has a frequency in the array equal to its value.
// Return a lucky integer in the array. If there are multiple lucky integers return the largest of them. If there is no lucky integer return -1.

const findLucky = function(arr) {
    const sorted = arr.sort((a, b) => a - b)
    let counts = [-1];
    let consecNum = 0;
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] !== sorted[i + 1]) {
            consecNum++;
            if (consecNum === sorted[i]) {
                counts.push(consecNum);
            }
            consecNum = 0;
        } else if (sorted[i] === sorted[i + 1]) {
            consecNum++
        }
    }
    return Math.max(...counts)
        
};

// 1. Declare sorted as arr sorted in ascending order via sort array method
// 2. Declare counts and set it to an array with a single element of -1
// 3. Declare consecNum and set it to 0
// 4. Use for loop to iterate through sorted array
// 5. If current num is not equal to next num (to the right of array), increment consecNum by 1
// 6. And If, consecNum count is equal to current num, push consecNum into counts array
// 7. Reset consecNum to 0
// 8. Else If, current num is equal to next num, increment consecNum by 1
// 9. Return largest consec lucky num by spreading counts in Math.max
