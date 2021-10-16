// Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the distance from index i to the closest occurrence of character c in s.
// The distance between two indices i and j is abs(i - j), where abs is the absolute value function.

const shortestToChar = (s, c) => {
    let index = s.split("")
        .map((char, i) => char === c ? i : '')
        .filter(el => el !== '');

    return s.split("").map((char, i) => {
        if (char === c) {
            return 0
        } else {
            let min = Infinity;
            for (let j = 0; j < index.length; j++) {
                min = Math.min(min, Math.abs(i - index[j]))
            }
            return min;
        }
    })
}

// 1. Declare index and set it to an array of index where c occurs in s string
//  - Split into an array
//  - Map through array and fill with index where c occurs, else fill with empty string
//  - Use filter method to filter out empty string to return only indexes of c occurrence in s string
// 2. Return array of shortest distances to char c in s string
//  - Split s into an array
//  - map through split string and declare variables char for character and i for index
//  - If char is equal to c, return 0
//  - else, Declare min and set it to Infinity
//  - Use for loop to iterate through index array
//  - let min equal shortest distance via Math.min by checking min value against current distance value
//  - Finally, return min