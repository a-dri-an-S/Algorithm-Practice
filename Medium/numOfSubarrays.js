// Given an array of integers arr and two integers k and threshold.
// Return the number of sub-arrays of size k and average greater than or equal to threshold.

const numOfSubarrays = function(arr, k, threshold) {
    let count = 0;
    
    for (let i = 0; i <= arr.length - k ; i++) {
        let curr = 0;
        for (let j = i; j <= k; j++) {
            curr += arr[j];
        }
        curr /= k;
        if (curr >= threshold) {
            count++
        }
        
    }
    return count;
};

// 1. Declare count and set it to 0
// 2. Use for loop to iterate through arr array until kth last element is reached
//  - Declare curr and set it to 0
//  - Use nested for loop to create loop that iterates k amount of times
//      - Add value at current index (arr[j]) to curr
//      - End for loop
//  - Set curr equal to itself divided by k
//  - If curr is greater than or equal to threshold, increment count by 1
// 3. Return count