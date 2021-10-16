// Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.
// A substring is a contiguous sequence of characters within a string.

const maxLengthBetweenEqualCharacters = function(s) {
    let maxLength = -1;
    
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (s[i] === s[j] && j !== i) {
                const sub = s.slice(i, j + 1);
                maxLength = Math.max(maxLength, sub.length - 2);
            }
            
        }
    }
    return maxLength; 
};

// 1. Declare maxLength and set it to -1
// 2. Use for loop to iterate through s string
// 3. Use nested for loop to iterate through s string, starting at the current position of the first loop (i === j)
// 4. If char of s at index-i ie equal to char of s at index-j and j is not equal to i
//  - Declare sub and set it to a substring of s starting at index-i to index-j + 1 via slice() method
//  - Set maxLength equal to the longest substring length with Math.max() function
//      * remove first and last char from length of sub by subtracting 2
// 5. Return maxLength