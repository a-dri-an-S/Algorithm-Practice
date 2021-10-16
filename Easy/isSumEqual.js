// The letter value of a letter is its position in the alphabet starting from 0 (i.e. 'a' -> 0, 'b' -> 1, 'c' -> 2, etc.).
// The numerical value of some string of lowercase English letters s is the concatenation of the letter values of each letter in s, which is then converted into an integer.
//     For example, if s = "acb", we concatenate each letter's letter value, resulting in "021". After converting it, we get 21.
// You are given three strings firstWord, secondWord, and targetWord, each consisting of lowercase English letters 'a' through 'j' inclusive.
// Return true if the summation of the numerical values of firstWord and secondWord equals the numerical value of targetWord, or false otherwise.

const isSumEqual = (firstWord, secondWord, targetWord) => {
    const word1 = Number(firstWord.split("").map(i => i.charCodeAt() - 97).join(""));
    const word2 = Number(secondWord.split("").map(i => i.charCodeAt() - 97).join(""));
    const target = Number(targetWord.split("").map(i => i.charCodeAt() - 97).join(""));
    return word1 + word2 === target;
}

// 1. Declare word1 and set as a Number based on the following:
//  - Split firstWord into an array of single chars
//  - Map through array and set chars to numerical values and join into string
// 2. Declare word2 and set as a Number based on the following:
//  - Split secondWord into an array of single chars
//  - Map through array and set chars to numerical values and join into string
// 3. Declare target and set as a Number based on the following:
//  - Split targetWord into an array of single chars
//  - Map through array and set chars to numerical values and join into string
// 4. Sum Word1 & word2 and check if it is equal to target, return boolean
