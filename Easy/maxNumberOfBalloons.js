// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

var maxNumberOfBalloons = function(text) {
    let word = "balloon";
    let newWord = "";
    let count = 0;
    
    while (text.includes("b")) {
        for (let i = 0; i < word.length; i++) {
            if (text.includes(word[i])) {
                newWord += word[i];
                text = text.replace(word[i], '');
            }
            if (i === word.length - 1 && word === newWord) {
                newWord = '';
                count++;
            }
        }
    }
    return count;
};

// 1. Declare word and set it to "balloon"
// 2. Declare newWord and set it to an empty string
// 3. Declare count and set it to 0
// 4. Use while loop to create loop until text string no longer contains the letter "b"
// 5. Use for loop to iterate through word string
// 6. If text includes current char at index-i
//  - Set newWord equal to newWord + current char at index-i
//  - Set text equal to text with current char removed with replace() method
// 7. If at last index and word is equal to newWord
//  - Set newWord equal to an empty string 
//  - Increment count by 1
// 8. Return count