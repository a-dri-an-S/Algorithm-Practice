// A distinct string is a string that is present only once in an array.
// Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".
// Note that the strings are considered in the order in which they appear in the array.

// Hash Map Solution

const kthDistinct = function(arr, k) {
    let hash = new Map();
    
    for (const char of arr) {
        if (hash.has(char)) {
            hash.set(char, hash.get(char) + 1);
        } else {
            hash.set(char, 1);
        }
    }
    
    for (const pair of hash) {
        if (k === 1 && pair[1] === 1) return pair[0];
        if (pair[1] === 1) k--; 
    }
    
    return "";
};

// 1. Declare has and set it to an empty Map object
//  - Use new Map() constructor to create a new map object
// 2. Use for loop to iterate through arr array
//  - If hash has current value (char) in arr, RESET hash and increment its value by 1
//      - Use has() method to check if hash HAS key (char) in hash map
//      - Use set() method to set the key pair value in hash
//      - Use get() method to retrieve value of (char) in hash map and increment its value by 1
//  - Else, set char (key) & 1 (value) in hash map with set() method
//  - End Loop
// 3. Use for loop to iterate through hash map
//  - If k is equal to 1 AND value of current key/value pair (pair) is equal to 1, return key of current key/value pair (pair)
//  - If current value in current key/value pair (pair) is equal to 1, decrement k by 1
//  - End Loop
// 4. If no conditions are met in last loop, return an empty string ""