// You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.
// Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.

const areAlmostEqual = function(s1, s2) {
    if (s1 === s2) return true;
    
    for (let i = 0; i < s2.length; i++) {
        const char1 = s2[i];
        
        for (let j = i + 1; j < s2.length; j++) {
            let str = [...s2];
            const char2 = s2[j];
            str.splice(i, 1, char2)
            str.splice(j, 1, char1);
            str = str.join("")

            if (str === s1) return true;
        }
    }
    
    return false;
};

// 1. If s1 is equal to s2, return true
// 2. Use for loop to loop through s2 string
//  - Declare char1 and set it to current value at index-i of s2
// 3. Use nested for loop to iterate through s2 string starting at position i+1
//  - Declare str and set it to s2 destructured with the spread syntax inside of an empty array (breaks string into chars)
//  - Declare char2 and set it to current value at index-j of s2
//  - With splice() method, remove char at index-i and replace it with char2
//  - With splice() method, remove char at index-j and replace it with char1
//  - Set str equal to str converted to string with join("") method
//  - If str is euqal ti s1, return true
// 4. If none of the above conditions are met, return false