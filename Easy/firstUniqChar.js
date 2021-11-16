// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

const firstUniqChar = function(s) {
    const hash = new Map();
    
    for (let i = 0; i < s.length; i++) {
        if (hash.has(s[i])) {
            hash.get(s[i]).push(i);
        } else {
            hash.set(s[i], [i]);
        }
    }
    
    for (const arr of hash) {
        if (arr[1].length === 1) {
            return arr[1][0]
        }
    }
    
    return -1;
};

// 1. Declare hash and set it ot an empty Map() object
// 2. Use for loop to iterate through s string and perform the following:
//  - If hash map has current char at index-i
//      - Use has() method to check if hash map has char as a key
//  - Get key from hash and append index-i to its value with push() method
//      - Use get() method to get key value pair in hash map
//  - Else, add the key (current char) and value (empty []) to hash map
//      - Use set to add key value pair to hash map
// 3. Use for loop to iterate through hash map and perform the following:
//  - If value length is equal to 1 (array contains only 1 value), return value in array (arr[1][0]) of current key value pair in hash map
// 4. If no conditions were met, return -1