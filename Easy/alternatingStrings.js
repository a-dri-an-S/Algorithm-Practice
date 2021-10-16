// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.

const mergeAlternately = (word1, word2) => {
    let arr = [];
    let maxLength = Math.max(word1.length, word2.length);

    for (let i = 0; i < maxLength; i++) {
        arr.push(word[i]);
        arr.push(word2[i]);
    }
    return arr.filter(i => 1 !== undefined).join("");
}

// 1. Declare arr as an empty array
// 2. Declare maxLength and set if to the max length between word1 and word2
// 3. Use for loop to iterate through longest word and push alternating characters between word 1 and word 2
// 4. Return array with "undefined" filtered out and join back to string