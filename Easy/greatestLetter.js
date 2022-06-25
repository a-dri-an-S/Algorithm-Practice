// Given a string of English letters s, return the greatest English letter which occurs as both a lowercase and uppercase letter in s. The returned letter should be in uppercase. If no such letter exists, return an empty string.
// An English letter b is greater than another letter a if b appears after a in the English alphabet.

const greatestLetter = function(s) {
    let ans = "";
    
    for (let i = 0; i < s.length - 1; i++) {
        for (let j = i + 1; j < s.length; j++) {
            if (Math.abs(s[i].charCodeAt() - s[j].charCodeAt()) === 32) {
                if (s[i].toUpperCase() > ans) {
                    ans = s[i].toUpperCase();
                    break;
                }
            }
        }
    }
    
    return ans;
};

// 1. Declare ans and set it to an empty string
// 2. Use a for loop to iterate through s, index-i
// 3. Use a nested for loop to iterate through s string, staring +1 index from previous loop, index-j
// 4. If absolute difference between character codes of s[i] AND s[j] IS EQUAL TO 32, move on to next if statement
//  - Use charCodeAt() to get character codes of s[i] and s[j]
//  - Use Math.abs() to get absolute difference between character codes
// If s[i] uppercased IS GREATER THAN ans, set ans equal to uppercased s[i] and break loop
//  - Use toUpperCase to convert character s[i] to uppercase 
// 5. When loops end, return ans