// Give a binary string s, return the number of non-empty substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.

// Substrings that occur multiple times are counted the number of times they occur.

const countBinarySubstrings = function(s) {
    let count = 0;
    let prevLength = 0;
    let currentLength = 1;
    
    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] !== s[i]) {
            count += Math.min(prevLength, currentLength);
            prevLength = currentLength;
            currentLength = 1;
        } else {
            currentLength++;
        }
    }
    count += Math.min(prevLength, currentLength);
    
    return count;
};

// 1. Declare count and set it to 0
// 2. Declare prevLength and set it to 0;
// 3. Declare currentLength and set it to 1
// 4. Use for loop to iterate through s string
//  - If current value at index-i IS NOT EQUAL to value at index-i - 1, perform the following:
//      - Add min value between prevLength and currentLength to count
//          - Use Math.min() method to check for smallest value between the two values
//      - Set prevLength equal to currentLength
//      - Set current length equal to 1
//  - Else, increment currentLength by 1
// 5. When loop ends, add min value between prevLength and currentLength to count
//  - Use Math.min() method to check for smallest value between the two values
// 6. Return count;