// We define the usage of capitals in a word to be right when one of the following cases holds:
//     All letters in this word are capitals, like "USA".
//     All letters in this word are not capitals, like "leetcode".
//     Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

const detectCapitalUse = (word) => {
    let count = 0
    
    word.split("").forEach(char => {
        if (char === char.toUpperCase()) {
            count++
        }
    })
    
    return word[0] === word[0].toUpperCase() && count === 1 ? true :
        count === word.length ? true :
        count === 0 ?  true :  
        false
};

// 1. Declare count and set it to 0
// 2. Split word into array via split() method
// 3. Use forEach method to iterate through word array
// 4. If first letter is upper case and count is equal to 1, return true
// 5. Else If, count is equal to word length (all caps) , return true
// 6. Else if, count is qual to zero (all lower case), return true
// 7. Else , return false