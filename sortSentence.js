// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.
// A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.
//     For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
// Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

const sortSentence = s => s.split(" ")
    .map(str => {
        const num = str.match(/[0-9]+/g);
        const word = str.match(/[a-zA-Z]+/g);
        return [num, word]
    })
    .sort((a, b) => a[0] - b[0])
    .filter(arr => arr.shift())
    .flat(2)
    .join(" ");

// 1. Split s string into an array of words
// 2. Map array and return a sub array of extracted num at index 0, word at index 1
//  - Declare num and set it to current str and regex to match integers 0-9, extracts current number in string
//  - Declare word ans set it to current str, use regex to match a-zA-Z, extract word containing only letters
// 3. Sort array at index 0 of subarray in ascending order
// 4. Filter index 0 of every subarray, return only words
// 5. Flatten array by depth of 2
// 6. Join array with space between each word to return sorted sentence
