// You are given a string s, return the number of segments in the string. 
// A segment is defined to be a contiguous sequence of non-space characters.

const countSegments = function(s) {
    const str = s.split(" ").filter(el => el !== '')
    return str.length
};

// 1. Declare str and set it to an array of only words extracted from s string
//  - Use split() method to split at each space
//  - Use filter() method to filter out all the empty strings
// 2. Return length of str array (amount of segments in string)