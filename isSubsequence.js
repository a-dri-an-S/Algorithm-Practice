// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

const isSubsequence = function(s, t) {
    let str = [];
    let index = 0;
    
    for (let i = 0; i < t.length; i++) {
        if (!s.includes(t[i])) {
            t = t.replaceAll(t[i], "") 
        }
    }
    
    for (let i = 0; i < s.length; i++) {    
        for (let j = index; j < t.length; j++) {
            if (s[i] === t[j]) {
                str.push(t[j])
                index = j + 1
                break
            }
        }
    }

    return str.join("") === s
};

// 1. Declare str and set it to an empty array
// 2. Declare index and set it to 0
// 3. Use for loop to iterate through "t" string
// 4. If current char in t is not included in "s" string, set t = to t with all current chars of t removed via replaceAll() method
// 5. Use for loop to iterate through "s" string
// 6. Use nested for loop to iterate through modified "t" string
// 7. If current s char is equal to current t char
//  - Push current char of t into str array
//  - Set index equal to current index of t string + 1 (new index for j loop) and break
// 8. Return true or false if str array joined to string (via join() method) is equal to s string
