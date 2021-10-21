// Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

const wordPattern = function(pattern, s) {
    let obj = {};
    s = s.split(" ");
    
    if (pattern.length !== s.length) return false;
    
    for (const i in pattern) {
        if (obj[pattern[i]] === undefined) {
            obj[pattern[i]] = s[i];
        } 
        if (obj[pattern[i]] !== s[i]) {
            return false;
        }
    }
    
    const keys = [...new Set(Object.keys(obj))];
    const vals = [...new Set(Object.values(obj))];
    
    if (keys.length !== vals.length) return false;
    
    return true;
};

// 1. Declare obj and set it to an empty object
// 2. Declare s and set it to s split() into an array at the " " of the string
// 3. If length of pattern is not equal length of s, return false
// 4. Use for loop to iterate through pattern array
//  - If current char is pattern is not a key in obj (is undefined), add key to object and set it equal current string in s array (s[i])
//  - Is value of key in obj already has a value and is not equal to current value in s array, return false 
// 5. Declare keys and set it to unique keys in obj object
//  - Use Object.keys to obtain keys in obj object
//  - Use new Set() to return only unique keys and spread syntax to unpack keys into an empty array
// 6. Declare vals and set it to unique values in obj object
//  - Use Object.values to obtain values in obj object
//  - Use new Set() to return only unique values and spread syntax to unpack values into an empty array
// 7. If keys length is not equal to vals length (more values than keys), return false
// 8. If none of the above conditions are met, return true