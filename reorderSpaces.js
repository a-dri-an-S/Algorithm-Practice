// You are given a string text of words that are placed among some number of spaces. Each word consists of one or more lowercase English letters and are separated by at least one space. It's guaranteed that text contains at least one word.
// Rearrange the spaces so that there is an equal number of spaces between every pair of adjacent words and that number is maximized. If you cannot redistribute all the spaces equally, place the extra spaces at the end, meaning the returned string should be the same length as text.
// Return the string after rearranging the spaces.

const reorderSpaces = function(text) {
    const spaces = text.split("").filter(el => el === ' ');
    const spacesCount = spaces.length;
    
    const words = text.split(" ").filter(el => el !== '');
    const wordsCount = words.length;
    
    const newText = [];
    
    if (wordsCount === 1) {
        newText.push(...words);
        newText.push(...spaces);
        return newText.join("");
    }
    
    const spaceAmounts = spacesCount / (wordsCount - 1);
    
    for (let i = 0; i < words.length; i++) {
        if (i === words.length - 1) {
            newText.push(words[i]);
        } else {
            newText.push(words[i]);
            for (let j = 1; j <= spaceAmounts; j++) {
                newText.push(" ");
            }
        }
    }
    
    const usedSpaces = newText.filter(el => el === ' ').length;
    const remainingSpaces = spacesCount - usedSpaces;
    
    if (remainingSpaces > 0) {
        for (let i = 1; i <= remainingSpaces; i++) {
            newText.push(" ");
        }
    }
    
    return newText.join("");
};

// 1. Declare spaces and set it to an array of only spaces ' '
//  - Use split("") to split string into array of chars
//  - Use filter() to filter out all spaces ' '
// 2. Declare spacesCount and set it to spaces.length to get length count of spaces
// 3. Declare words and set it to an array of only spaces words, strings with no spaces
//  - Use split(" ") to split string at the empty spaces ' '
//  - Use filter() to filter out all strings
// 4. Declare wordsCount and set it to words.length to get length count of words
// 5. Declare newText and set it to an empty array
// 6. If wordsCount is equal to 1:
//  - Use spread syntax to unpack values in words array and append to newText array with push() method
//  - Use spread syntax to unpack values in spaces array and append to newText array with push() method
//  - Join newText to string with join("") method and return string
// 7. Declare spaceAmounts and set it to spaceCounts divided wordsCount subtracted by 1
// 8. Use for loop to iterate through words array
//  - If current i is equal to last index (words.length - 1)
//      - Append current word to newText array with push() method
//  - Else 
//      - Append current word to newText array with push() method
//      - Use for loop to create loop starting at 1 and incrementing by 1 until spaceAmounts is reached
//          - within loop, append ' ' an empty space to newText array with push() method
// 9. Declare usedSpaces and set it to the amount of empty spaces in newText array
//  - Use filter to filter out all empty spaces ' '
//  - Then, use length to get the amount of spaces in filtered array
// 10. Declare remainingSpaces and set it to spacesCount subtracted by usedSpaces
// 11. If remainingSpaces is greater than 0
//  - Use for loop to create loop starting at 1 and incrementing by 1 until remainingSpaces is reached
//      - within loop, append ' ' an empty space to newText array with push() method
// 12. Use join("") method to return string