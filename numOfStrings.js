// Given an array of strings patterns and a string word, return the number of strings in patterns that exist as a substring in word.
// A substring is a contiguous sequence of characters within a string.

const numOfStrings = function(patterns, word) {
    let count = 0;
    
    for (let el of patterns) {
        if (word.includes(el)) count++
    }
    
    return count;
};

// 1. Declare count and set it to 0
// 2. Use for loop to iterate through patterns array
// 3. If word contains pattern (el), increment count by 1
// 4. Return count