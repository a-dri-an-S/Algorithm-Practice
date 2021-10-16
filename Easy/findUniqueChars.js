// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

const firstUniqChar = (s) => {
    let charCount = {}
    let uniqueChars;
    
    for (let char of s) {
        if (charCount[char] === undefined) {
            charCount[char] = 0;
        }
        charCount[char]++
    }
    
    uniqueChars = Object.entries(charCount)
    .filter(arr => arr[1] === 1).flat()
    .filter(el => el !== 1)
    
    for (let i in s) {
        if (uniqueChars.includes(s[i])) {
            return i
        } 
    }
    return -1
};

// 1. Declare charCount and set it to an empty object
// 2. Declare uniqueChars
// 3. Use for loop to iterate through s string
// 4. If current char is not a key in object, add to object and set its value to 0
// 5. Increment key in charCount object by 1
// 6. Set uniqueChars to array of unique chars by performing the following:
//  - Place charCount object inside of Object.entries() method to return array of subarrays w/ key pair values
//  - Filter out (remove) subarrays that dont have 1's at values (index 1) with filter() method
//  - Flatten array at 1 depth with flat() method
//  - Filter out (remove) all elements that are i's (not letters), retain array of all unique chars
// 7. Use for loop to iterate through s string
// 8. If uniqueChars array includes current s[i], return i
// 9. If no conditions are met, return -1