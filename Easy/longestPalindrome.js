// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

const longestPalindrome = function(s) {
    const counts = {};
    
    for (let char of s) {
        if (counts[char] === undefined) {
            counts[char] = 0;
        }
        counts[char]++;
    }
    const vals = Object.values(counts).sort((a, b) => b - a);

    let palindromeCount = 0
    let firstOdd = true
    
    for (let val of vals) {
        if (val % 2 === 0) {
            palindromeCount += val;
            
        } else if (val > 2 && val % 2 !== 0 && firstOdd) {
            palindromeCount += val;
            firstOdd = false;
            
        } else if (val > 2 && val % 2 !== 0) {
            palindromeCount += (val - 1);
            
        } else if (val === 1 && firstOdd) {
            palindromeCount += val;
            firstOdd = false;
        }
    }
    
    return palindromeCount;
};

// 1. Declare counts and set it to an empty object
// 2. Use for loop to iterate through s string
// 3. If current char is not a key in object (undefined), set it as key with a value of 0
// 4. Increment value of key in counts object of current char
// 5. Declare vals and set it to an array of values extracted from counts object via Object.values() function
// 6. Declare palindromeCount and set it to 0
// 7. Declare firstOdd and set it to true
// 8. Use for loop to iterate through vals array
// 9. If val modulo 2 has a remainder of 0 (is even), add val to palindromeCount
// 10. Else if, val is greater than 2 & val modulo 2 has a remainder other than 0 (is odd) & firstOdd is true
//  - Add val to palindromeCount
//  - Set firstOdd to false
// 11. Else If, val is greater than 2 & val modulo 2 has a remainder other than 0 (is odd)
//  - Add val - 1 to palindromeCount
// 12. Else If, val is equal to 1 and firstOdd is true
//  - Add val to palindromeCount
//  - Set firstOdd to false
// 13. After loop ends, return palindromeCount