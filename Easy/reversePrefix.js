// Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.
// For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
// Return the resulting string.

const reversePrefix = function(word, ch) {
    const index = word.indexOf(ch)
    const prefixReversed = word.slice(0, index + 1)
    .split("").reverse().join("")
    const str = word.slice(index + 1)
    
    return prefixReversed.concat(str)
    
};

// 1. Declare index and set it to the index of char in word string with indexOf() method
// 2. Declare prefixedReversed and set it to word at index-0 to index of char + 1, reversed
//  - Use slice() method to extract prefix starting at index-0 to index of char + 1
//  - Use split("") method to split string into an array of chars
//  - Use reverse() method to reverse the array
//  - Use join("") method to join array back into string
// 3. Declare str and set it to word starting at index of char + 1 to end of string
// 4. Return prefixReversed concated to str