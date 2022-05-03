// You are given a string array words and a string s, where words[i] and s comprise only of lowercase English letters.
// Return the number of strings in words that are a prefix of s.
// A prefix of a string is a substring that occurs at the beginning of the string. A substring is a contiguous sequence of characters within a string.

const countPrefixes = function(words, s) {
    let count = 0;
    
    for (const prefix of words) {
        const sub = s.substr(0, prefix.length);
        if (sub === prefix) count++;
    }
    
    return count;
};

// 1. Declare count and set it to 0
// 2. Use a for of loop to iterate through words array
// 3. Declare sub and set it to substring of s string, starting at index-0 to length of current element in words (prefix)
//  - Use the substr() function to get the substring of a given string
// 4. If sub IS EQUALS TO prefix, increment count by 1
// 5. After loop ends, return count