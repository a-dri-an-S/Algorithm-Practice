// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
// You are given an array of strings sentences, where each sentences[i] represents a single sentence.
// Return the maximum number of words that appear in a single sentence.

const mostWordsFound = function(sentences) {
    let count = 0;
    
    for (const sentence of sentences) {
        const curr = sentence.split(" ").length;
        if (curr > count) count = curr;
    }
    return count;
};

// 1. Declare count and set it to 0
// 2. Use for loop to iterate through sentences array
//  - Declare curr and set it to number of words in current sentence
//      - Use split() method to split sentence string into an array of words split at the " "
//      - Use length to retrieve the number of words in array
//  - If curr is greater than count, set count equal to curr
// 3. Return count