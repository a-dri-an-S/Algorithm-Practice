// A sentence is a list of tokens separated by a single space with no leading or trailing spaces. Every token is either a positive number consisting of digits 0-9 with no leading zeros, or a word consisting of lowercase English letters.
//     For example, "a puppy has 2 eyes 4 legs" is a sentence with seven tokens: "2" and "4" are numbers and the other tokens such as "puppy" are words.
// Given a string s representing a sentence, you need to check if all the numbers in s are strictly increasing from left to right (i.e., other than the last number, each number is strictly smaller than the number on its right in s).
// Return true if so, or false otherwise.

const areNumbersAscending = function(s) {
    const nums = s.split(" ")
        .filter(num => Number.isInteger(Number(num)));
    
    
    for (let i = 0; i < nums.length - 1; i++) {
        if (Number(nums[i]) >= Number(nums[i + 1])) {
            return false
        }
    }
    
    return true;
};

// 1. Declare nums and set it to an array of integers extracted from "s" string
//  - Use split() method to split the string into substrings at every " "
// - Use filter to filter out every substring that is a number by converting substrings to integers with Number() constructor and checking if they are integers with isInteger() function
// 3. Use for loop to iterate through nums array until 2nd to last value is reached
//  - If current value converted to integer is greater than or equal to value at current index + 1 converted to integer, return false
// 4. If conditions are not met, return true
