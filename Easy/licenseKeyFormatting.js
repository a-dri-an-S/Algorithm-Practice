// You are given a license key represented as a string s that consists of only alphanumeric characters and dashes. The string is separated into n + 1 groups by n dashes. You are also given an integer k.
// We want to reformat the string s such that each group contains exactly k characters, except for the first group, which could be shorter than k but still must contain at least one character. Furthermore, there must be a dash inserted between two groups, and you should convert all lowercase letters to uppercase.
// Return the reformatted license key.

const licenseKeyFormatting = function(s, k) {
    let count = k
    const chars = s.split('')
    .filter(el => el !== '-')
    .map(char => char.toUpperCase())
    .reverse()
    
    for (let i = 0; i < chars.length; i++) {
        count--
        if (count === 0 && i !== chars.length - 1) {
            chars.splice(i + 1, 0, '-')
            count = k + 1
        }
    }
    return chars.reverse().join('')
};

// 1. Declare count and set it to k
// 2. Declare chars and set it to an array of alphanumeric characters extracted from "s" string
//  - Split "s" via split method into individual characters
//  - Use filter() method to remove '-' from array
//  - Use map method to modify the array and set all filtered characters to upper case with toUpperCase() method
//  - Use reverse() method to reverse the order of the array
// 3. Use for loop to iterate through chars array
// 4. Decrement count by 1
// 5. If count is equal to 0 & i is not equal to last index of chars:
//  - Splice in '-' one index of current index via splice() method
//  - Set count equal to k + 1
// 6. Reverse the order of chars with reverse() method and join into string via join() method to return new string

// Function w/out the use of reverse()
const licenseKeyFormatting = function(s, k) {
    let count = k
    const chars = s.split('')
    .filter(el => el !== '-')
    .map(char => char.toUpperCase())
    
    for (let i = chars.length - 1; i >= 0; i--) {
        count--
        if (count === 0 && i !== 0){ 
            chars.splice(i, 0, '-')
            count = k
        }
    }
    return chars.join('')
};