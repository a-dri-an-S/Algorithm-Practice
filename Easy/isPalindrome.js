// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

const isPalindrome = function(s) {
    const str = s.toLowerCase().match(/[0-9a-z]/g);
    if (str === null) return true
    
    const reverseStr = [...str].reverse();
    
    return str.join("") === reverseStr.join("")
};

// 1. Declare str and set it to an array of only lower cased letters and numbers extracted from 's' string
//  - Use toLowerCase() method to lower case entire string
//  - Use match w/ regex to extract only integers and letters from string into array of single characters
// 2. If str is equal to null, return true
// 3. Declare reverseString and set it to a copy of str, reversed
//  - Deconstruct str into an empty array w/ spread operator and use reverse() method to reverse array
// 4. If str is equal to reverseStr, return true, else return false
//  - Use join("") on both str and reverseStr to convert back to string