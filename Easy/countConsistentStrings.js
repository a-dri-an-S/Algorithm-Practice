// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.
// Return the number of consistent strings in the array words.

const countConsistentStrings = (allowed, words) => words.map(word => {
    for (let s of allowed) {
        word = word.replaceAll(s, '')
    }
    return word
}).filter(el => el === '').length

// 1. Iterate through words array with the map method
// 2. Use for loop to iterate through allowed string
// 3. Replace All characters in word that are current char of allowed (s) and set it equal to itself
// 4. Return word with all allowed chars removed
// 5. Filter out all words that are empty strings and return the length to get count