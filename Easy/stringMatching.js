// Given an array of string words. Return all strings in words which is substring of another word in any order. 
// String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].

const stringMatching = words => {
    let arr = [];

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (words[i].length < words[j].length) {
                if (words[j].includes(words[i])) {
                    arr.push(words[i])
                }
            }
        }
    }
    return [...new Set(arr)];
}

// 1. Declare arr and set it to an empty array
// 2. Use for loop to iterate through words array, i
// 3. Use a nested for loop to iterate through words array, j
// 4. If, words in loop i have less characters than words in loop j &
// 5. If words in loop j include words in loop i, push into arr array
// 6. Place array into new Set to return unique words and spread into array

