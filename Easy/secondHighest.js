// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.
// An alphanumeric string is a string consisting of lowercase English letters and digits.

const secondHighest = (s) => {
    const allNums = s.replace(/[a-z]/g, '').split("")
    const digits = [...new Set(allNums)].sort((a, b) => b - a)

    return digits[1] === undefined ? -1 : Number(digits[1])
}

// 1. Declare allNums and set it to an array of digits
//  - Use replace() method and regex to remove all letters
//  - Split string of nums into individual digits via split()
// 2. Declare digits and set it to an array of unique digits, sorted in descending order
//  - Place allNums into new Set to get unique digits and deconstruct into array with spread operator
//  - Use sort() method to sort in descending order
// 3. If element at index 1 doesn't exists (undefined), return -1
//  - Else, return element at index 1, as number with Number() constructor, for number conversion