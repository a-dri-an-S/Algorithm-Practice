// Given two strings s and part, perform the following operation on s until all occurrences of the substring part are removed:
// Find the leftmost occurrence of the substring part and remove it from s.
// Return s after removing all occurrences of part.
// A substring is a contiguous sequence of characters in a string.

const removeOccurrences = function(s, part) {
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === part[0]) {
            const sub = s.slice(i, i + part.length);
            if (sub === part) {
                s = s.slice(0, i) + s.slice(i + part.length);
                i = -1;
            }
        }
    }

    return s;
};

// 1. Use for loop to iterate through s string
//  - If current value in s (s[i]) is equal to first character in part string (part[0]), perform the following:
//      - Declare sub and set it equal to substring of s starting at current index (index-i) and is the length of part
//          - Use slice() method to obtain substring from s
//      - If sub is equal to part, perform the following:
//          - Set s equal to s with sub removed from s string
//              - Use slice() method to add substring before and after sub, together
//  - End loop
// 2. Return s