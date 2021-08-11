// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

const firstRow = "qwertyuiop";
const secondRow = "asdfghjkl";
const thirdRow = "zxcvbnm";

const findWords = words => words.map(word => word.toLowerCase().split("")
    .map(char => {
        return firstRow.includes(char) ? 1 :
        secondRow.includes(char) ? 2 : 3
    }))
    .map(arr => [...new Set(arr)].length)
    .map((num, i) => {
        if (num === 1) {
            return words[i]
        }
    })
    .filter(i => i !== undefined)

// 1. Declare firstRow, secondRow & thirdRow and declare them each characters in a keyboard row as a string
// 2. Iterate through words array and modify it with map method
// 3. In mapped array, toLowerCase each string and split it as individual characters
// 4. Within each array in mapped array, check each char for the following and return
//  - If, current char is included in firstRow, return 1  
//  - If, current char is included in secondRow, return 2  
//  - If, current char is included in thirdRow, return 3  
// 5. Map through that modified array and place each array in a Set to get unique characters, spread into an array and return the length
// 6. Map through last modified array and check for the following
//  - if current num (array length) is equal to 1 (all chars in single keyboard row), return the word at that index, words[i], else it will return undefined
// 7. Filter out all the undefined values to return all words with chars in a single keyboard row