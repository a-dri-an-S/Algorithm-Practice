// Two strings word1 and word2 are considered almost equivalent if the differences between the frequencies of each letter from 'a' to 'z' between word1 and word2 is at most 3.
// Given two strings word1 and word2, each of length n, return true if word1 and word2 are almost equivalent, or false otherwise.
// The frequency of a letter x is the number of times it occurs in the string.

const checkAlmostEquivalent = function(word1, word2) {
    const hash1 = new Map();
    const hash2 = new Map();
    const letters = new Set();
    
    
    for (let i = 0; i < word1.length; i++) {
        if (!letters.has(word1[i])) {
            letters.add(word1[i]);
        }
        if (!letters.has(word2[i])) {
            letters.add(word2[i]);
        }
        
        if (hash1.has(word1[i])) {
            hash1.set(word1[i], hash1.get(word1[i]) + 1);
        } else {
            hash1.set(word1[i], 1);
        }
        
        if (hash2.has(word2[i])) {
            hash2.set(word2[i], hash2.get(word2[i]) + 1);
        } else {
            hash2.set(word2[i], 1);
        }
    }
    
    for (const letter of letters) {
        const wordA = hash1.get(letter) || 0;
        const wordB = hash2.get(letter) || 0;
        
        if (Math.abs(wordA - wordB) > 3) {
            return false;
        }
    }
    
    return true;
};

// 1. Declare hash1 & hash2, set both to empty Map objects
// 2. Declare letters and set it to an empty Set object
// 3. Use for loop to iterate through both word1 and word2 strings (both same length)
//  - If letters DOESN't contain current value in word1 (word1[i]), add it to letters Set object
//      - Use has() method to check it letters contains word1[i]
//      - Use add() method to ADD word1[i] to letters
//  - If letters DOESN't contain current value in word2 (word2[i]), add it to letters Set object
//      - Use has() method to check it letters contains word2[i]
//      - Use add() method to ADD word2[i] to letters
//  - If hash1 contains current value in word1 (word1[i]), increment its value by 1
//      - Use has() method to check if hash1 contains key word1[i]
//      - Use set() method to set the key/value pair to hash1 object
//      - Use get() method to get the value of key word1[i] and increment it by 1
//  - Else, use set() method to set key/value pair in hash1 with key set to word1[i] and value set to 1
//  - If hash2 contains current value in word2 (word2[i]), increment its value by 1
//      - Use has() method to check if hash2 contains key word2[i]
//      - Use set() method to set the key/value pair to hash2 object
//      - Use get() method to get the value of key word2[i] and increment it by 1
//  - Else, use set() method to set key/value pair in hash2 with key set to word2[i] and value set to 1
//  - End Loop
// 4. Use for loop to iterate through letters Set object
//  - Declare wordA and set it to value of letter (current value in letters) in hash1 object OR 0 if key/value pair does not exist
//  - Declare wordB and set it to value of letter (current value in letters) in hash2 object OR 0 if key/value pair does not exist
//  - If absolute difference between wordA and wordB is greater than 3, return false
//  - End Loop
// 5. If loop ends and no such conditions are met in the last loop, return true