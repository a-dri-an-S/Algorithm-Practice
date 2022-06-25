// Given a string s and a character letter, return the percentage of characters in s that equal letter rounded down to the nearest whole percent.

// const percentageLetter = function(s, letter) {
//     let count = 0;
//     const sCount = s.length;
    
//     for (const char of s) {
//         if (char === letter) count++;
//     }
    
//     return Math.floor((count / sCount) * 100);
// };

// 1. Declare count and set it to 0
// 2. Declare sCount and set it to length of s (character count);
// 3. Use a for of loop to iterate s 
// 4. If current character (char) in s IS EQUAL TO letter, increment count by 1
// 5. Divide count by sCount and multiply by 100 to get percentage. Use Math.floor() method to return the rounded down percentage.

const percentageLetter = function(s, letter) {
    const count = [...s].filter(el => el === letter).length;
    const sCount = s.length;
    return parseInt((count / sCount) * 100);
};

// 1. Declare count and set it number of letter in s string
//  - Use the spread operator to split s into individual strings into an empty array
//  - Use the filter() method to filter out all the strings EQUAL TO letter in the array
//  - Use the length property to get count of filtered strings
// 2. Declare sCount and set it to length of s (individual string count)
// 3. Return percentage rounded down to nearest integer
//  - Divide count by sCount multiplied by 100 to get percentage
//  - Use parseInt() function to return integer

