// You are given a string title consisting of one or more words separated by a single space, where each word consists of English letters. Capitalize the string by changing the capitalization of each word such that:
//     If the length of the word is 1 or 2 letters, change all letters to lowercase.
//     Otherwise, change the first letter to uppercase and the remaining letters to lowercase.
// Return the capitalized title.

const capitalizeTitle = function(title) {
    title = title.split(" ");
    
    for (let i = 0; i < title.length; i++) {
        if (title[i].length > 2) {
            title[i] = title[i][0].toUpperCase() + title[i].substr(1).toLowerCase();
        } else {
            title[i] = title[i].toLowerCase();
        }
    }
    
    return title.join(" ");
};

// 1. Set title equal to title split at the " ", into an array of words
//  - Use split() method to split string into an array of strings
// 2. Use for loop to iterate through title array
// 3. If current string length in title array is greater than 2, perform the following:
//  - Set current string equal to first character capitalized and the rest lower cased
//      - Use toUpperCase() to capitalize first character
//      - Use substr() to get sub string from current string, starting at index-1 of string to end of string
//      - Use toLowerCase() to lower case characters sub string
// 4. Else, set current string equal to itself, lower cased
//  - Use toLowerCase() to lower case characters in string
// 5. When loop is done, join strings in title with " " in between each string (convert back to sentence)
//  - Use join() to join strings together