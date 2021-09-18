// You are given a string word that consists of digits and lowercase English letters.
// You will replace every non-digit character with a space. For example, "a123bc34d8ef34" will become " 123  34 8  34". Notice that you are left with some integers that are separated by at least one space: "123", "34", "8", and "34".
// Return the number of different integers after performing the replacement operations on word.
// Two integers are considered different if their decimal representations without any leading zeros are different.

var numDifferentIntegers = function(word) {
    const numArr = word.split(/[a-z]/g)
    .filter(el => el !== '')
    .map(str => BigInt(str));
    
    return [...new Set(numArr)].length
};

// 1. Declare numArr and set it to an array of integers extracted from "word" string
//  - Split word at the letters with split() method and regex to split at the letters a-z
//  - Use filter to filter out all empty string from array
//  - Use map to modify array and convert strings to number with BigInt() method to handle large numbers
// 2. Return number of unique integers
//  - Place numArr in Set() object to retrieve unique values from array
//  - Deconstruct unique values inside an empty array with spread syntax (...)
//  - Use length to return amount of integers in array