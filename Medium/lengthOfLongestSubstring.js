// Given a string s, find the length of the longest substring without repeating characters.

const lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    
    for (let i = 0; i < s.length; i++) {
        let str = "";
        
        for (let j = i; j < s.length; j++) {
            if (!str.includes(s[j])) {
                str += s[j];
            } else {
                break;
            }
        }
        maxLength = Math.max(maxLength, str.length);
    }
    return maxLength;
};

// 1. Declare maxLength and set it to 0
// 2. Use for loop to iterate through s string
//  - Declare str and set it to am empty string;
// 3. Use nested for loop to iterate through s string
//  - If str doesn't include value at index-j of s string, add values to str
//  - Else break loop
// 4. After nested loop stops, set maxLenth equal to the largest integer between maxLength and length of string'
//  - Use Math.max() method to obtain largest value between the two
// 5. When loop stops, return maxLength