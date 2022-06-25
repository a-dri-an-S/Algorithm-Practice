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

// with filter 
// const percentageLetter = function(s, letter) {
//     const count = [...s].filter(el => el === letter).length;
//     const sCount = s.length;
//     return parseInt((count / sCount) * 100);
// };

// 1. Declare count and set it number of letter in s string
//  - Use the spread operator to split s into individual strings into an empty array
//  - Use the filter() method to filter out all the strings EQUAL TO letter in the array
//  - Use the length property to get count of filtered strings
// 2. Declare sCount and set it to length of s (individual string count)
// 3. Return percentage rounded down to nearest integer
//  - Divide count by sCount multiplied by 100 to get percentage
//  - Use parseInt() function to return integer

// two-pointer
const percentageLetter = function(s, letter) {
    let count = 0;
    const sCount = s.length;
    let j = sCount - 1;
    
    for (let i = 0; i < sCount; i++) {
        if (i === j && s[j] === letter) return Math.trunc(((count + 1) / sCount) * 100);
        if (i > j) break;
        if (s[i] === letter) count++;
        if (s[j] === letter) count++;
        j--;
        
        
    }
    return Math.trunc((count / sCount) * 100);
};

// 1. Declare count and set it to 0;
// 2. Declare sCount and set it to length of s (character count)
// 3. Declare j and set it to sCount - 1 (last index of s)
// 4. Use a for loop to iterate through s, incrementing by 1 index
// 5. if i IS EQUAL TO j (same index) AND character at index-j IS EQUAL TO LETTER, return the percentage as an integer
//  - Divide count by sCount multiplied by 100 to get percentage
//  - Use Math.trunc() function to remove decimals from percentage
// 6. If i IS GREATER THAN j, break for loop
// 7. If character at index-i is equal to letter, increment count by 1
// 8. If character at index-j is equal to letter, increment count by 1
// 9. Decrement j by 1
// 10 . After for loop ends, Return percentage as an integer
//  - Divide count by sCount multiplied by 100 to get percentage
//  - Use Math.trunc() function to remove decimals from percentage