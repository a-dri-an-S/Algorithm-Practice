// Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).
// The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

const maxScore = (s) => {
    let maxSum = 0;
    
    for (i = 0; i < s.length - 1; i++) {
        
        const left = s.slice(0, i + 1).split("")
        .filter(el => el === '0').length
        const right = s.slice(i + 1, s.length).split("")
        .filter(el => el === '1').length
        
        maxSum = Math.max(maxSum, left + right)
    }
    return maxSum
};

// 1. Declare maxSum and set it to 0
// 2. Use for loop to iterate through s string until 2nd to last character is reached
// 3. Declare left and set it to num of 0's in sliced string
//  - Extract string at 0 to current i + 1 via slice() method
//  - Split string into array of individual characters via split() method
//  - Filter out all the 0's with the filter method
//  - Obtain number of 0's filtered out by length of array
// 4. Declare right and set it to num of 1's in sliced string
//  - Extract string at current i + 1 to length of s via slice() method
//  - Split string into array of individual characters via split() method
//  - Filter out all the 1's with the filter method
//  - Obtain number of 1's filtered out by length of array
// 5. Set maxSum equal to max sum via Math.max() byt comparing current sum to maxSum
// 6. Return maxSum