// A parentheses string is valid if and only if:
//     It is the empty string,
//     It can be written as AB (A concatenated with B), where A and B are valid strings, or
//     It can be written as (A), where A is a valid string.
// You are given a parentheses string s. In one move, you can insert a parenthesis at any position of the string.
//     For example, if s = "()))", you can insert an opening parenthesis to be "(()))" or a closing parenthesis to be "())))".
// Return the minimum number of moves required to make s valid.

const minAddToMakeValid = function(s) {
    let left = 0;
    let right = 0;
    
    for (const char of s) {
        if (char === "(") {
            left++;
        }
        if (char === ")") {
            left > 0 ? left-- : right++;
        }
    }
    return left + right;
};

// 1. Declare left and right and set both variables to 0
// 2. Use for loop to iterate through "s" string
//  - If char is equal to "(", increment left by 1
//  - If char is equal to ")", check if left is greater than 0
//      - If left is greater than 0, decrement left by 1, else increment right by 1
// 3. Add left to right and return its sum