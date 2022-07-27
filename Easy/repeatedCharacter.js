// Given a string s consisting of lowercase English letters, return the first letter to appear twice.

// Note:

//     A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
//     s will contain at least one letter that appears twice.

const repeatedCharacter = function(s) {
    let arr = [];
    
    for (const char of s) {
        if (!arr.includes(char)) {
            arr.push(char)
        } else {
            return char
        }
    }
};

// 1. Declare arr and set it to sn empty array
// 2. Use a for of loop to iterate through s
// 3. If arr DOESN'T INCLUDE current value (char), then append char to arr
//  - Use the includes() method to check if contained within arr
//  - Use the push() method to append value to arr
// 4. Else, return char