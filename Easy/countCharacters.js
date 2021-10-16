// You are given an array of strings words and a string chars.
// A string is good if it can be formed by characters from chars (each character can only be used once).
// Return the sum of lengths of all good strings in words.

const countCharacters = (words, chars) => {
    let formedWords = [];
    for (let word of words) {
        let charz = chars;
        let arrWord = [];
        for (let char of charz) {
            if (word.includes(char)) {
                arrWord.push(char);
                word = word.replace(char, "");
            }
        }
        if (word.length === 0) {
            formedWords.push(arrWord)
        }
        charz = chars;
    }
    return formedWords.flat().length;
}

// 1. Declare formedWords and set it to an empty array
// 2. Use for loop to iterate through words array
// 3. Declare charz and set it to chars; -- used to check for characrer in string w/out affecting the original "chars"
// 4. Declare arrWord and set it to an empty array
// 5. Use for loop to iterate through charz string
// 6. If current word includes current char
//  - Push char into arrWord 
//  - Set current word to itself after char is replace / deleted from string
// 7. If length of current word is equal to 0 (all characters in word are in chars string), push arrWord into formedWords array
// 8. Reset charz to chars string for next iteration
// 9. Return length or formedWords after removing subarrays at 1 depth 