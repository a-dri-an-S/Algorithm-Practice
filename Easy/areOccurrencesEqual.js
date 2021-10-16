// Given a string s, return true if s is a good string, or false otherwise.
// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency)

const areOccurrencesEqual = s => {
    let count = {};

    for (let char of s) {
        if (count[char] === undefined) {
            count[char] = 0
        }
        count[char]++
    }

    return [...new Set(Object.values(count))].length === 1 ? true : false;
}

// 1. Declare count and set it to an empty array
// 2. Use for loop to iterate through "s" string
// 3. If char is not found in count object, add it to object and set it to 0
// 4. When char is in count object, increment char by 1
// 5. Return a boolean under the following conditions
//  - Take count object and place it inside of Object.values to extract all values into an array
//  - Place that array of values in new Set to return unique values and spread of an array
//  - If the length of unique values is equal to 1, return true else return false