// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes.
// Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.
//     For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
// Return the number of different transformations among all words we have.

const morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

const uniqueMorseCode = words => {
    const morse = words.map(word => word.split("")
        .map(c => morseCode[c.charCodeAt() - 97])
        .join("")
    )
    return [...new Set(morse)].length
}

// 1. Declare morseCode and set it to an array of morse code in alphabetical order.
//  - Declared morseCode outside of function for cleaner code, better readability
// 2. Declare morse and set it to an array of string in words array transformed into morse code
//  - Map words and split each string into subarray of single chars
//  - Map through each split string and transform each char into morse code by getting character code of "c" and subtracting 97 (char code "a") to match index of letter in morseCode array
// 3. Join back into string
// 4. Place morse array into new Set to extract unique morse code strings, spread into an array and return count via length