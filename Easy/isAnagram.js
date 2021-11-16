// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

const isAnagram = (s, t) => {
    const sSorted = s.split("").sort().join("");
    const tSorted = t.split("").sort().join("");
    return sSorted === tSorted
};

// 1. Declare sSorted and set it to s, split into an array, sorted alphabetically and joined back together as string
// 2. Declare tSorted and set it to t, split into an array, sorted alphabetically and joined back together as string
// 3. Return sSorted is equal to tSorted, if they contain same characters in same amount, return true, else false

// HASH-TABLE

const isAnagram = function(s, t) {
    let count = {};
    
    for (const char of s) {
        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }
    
    for (const char of t) {
        if (count[char]) {
            count[char]--;
        } else {
            return false
        }
    }
    
    count = Object.values(count);
    
    for (const val of count) {
        if (val !== 0) {
            return false
        }
    }
    
    return true;
};

// 1. Declare count and set it to an empty object
// 2. Use for loop to iterate through s string
//  - If count[char] exists (is key in count object), increment its value by 1
//  - Else, add char to count object and set its value equal to 1
// 3. Use for loop to iterate through t string
//  - If count[char] exists (is key in count object), decrement its value by 1
//  - Else, return false
// 4. Set count equal to an array of values from count object
//  - Use Object.values() method to extract values from count object
// 5. Use for loop to iterate through count array
//  - If current val is not equal to 0, return false
// 6. If loop ends and conditions are not met, return true