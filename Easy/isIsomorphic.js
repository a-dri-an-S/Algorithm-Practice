// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

const isIsomorphic = function(s, t) {
    const strHash = new Map();
    const setS = new Set();
    const setT = new Set();
    
    for (let i = 0; i < s.length; i++) {
        if (!strHash.has(s[i])) {
            strHash.set(s[i], t[i]);
        } else if (strHash.get(s[i]) !== t[i]) {
            return false;
        }
    }
        
    for (const charSet of strHash) {
        setS.add(charSet[0]);
        setT.add(charSet[1]);
    }
        
    if (setS.size !== setT.size) {
        return false
    }
    
    return true;
};

// 1. Declare strHash and set it to an empty Map object
// 2. Declare setS and setT and set both to empty Set objects
// 3. Use for loop to iterate through s string/t string
//  - If strHash doesn't contain s[i] (current char in s-string), add key/value pair s[i] (key), t[i] (value) to strHash
//      - Use has() method to check for s[i]
//      - Use set() method to add key/value pair to map object
//  - Else if, value of s[i] (current value in string s) in strHash is not equal to t[i](current value in string t), return false
//      - Use get() method to get value of key (s[i]) in map object
// 4. Use for loop to iterate through strHash map object
//  - Add value at index-0 of current charSet ([key/value]) to setS set object
//      - Use add() method to add value to set object
//  - Add value at index-1 of current charSet ([key/value]) in map object
//      - Use add() method to add value to set object
// 5. If setS size is not equal to setT size. return false
//  - Use size to check for amount of unique values in set object
// 6. If none of the above conditions are met, return true