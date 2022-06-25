// Given a string s and a character letter, return the percentage of characters in s that equal letter rounded down to the nearest whole percent.

const percentageLetter = function(s, letter) {
    let count = 0;
    const sCount = s.length;
    
    for (const char of s) {
        if (char === letter) count++;
    }
    
    return Math.floor((count / sCount) * 100);
};

// 1. Declare count and set it to 0
// 2. Declare sCount and set it to length of s (character count);
// 3. Use a for of loop to iterate s 
// 4. If current character (char) in s IS EQUAL TO letter, increment count by 1
// 5. Divide count by sCount and multiply by 100 to get percentage. Use Math.floor() method to return the rounded down percentage.