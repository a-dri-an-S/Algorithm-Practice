// Given a string licensePlate and an array of strings words, find the shortest completing word in words.
// A completing word is a word that contains all the letters in licensePlate. Ignore numbers and spaces in licensePlate, and treat letters as case insensitive. If a letter appears more than once in licensePlate, then it must appear in the word the same number of times or more.
// For example, if licensePlate = "aBc 12c", then it contains letters 'a', 'b' (ignoring case), and 'c' twice. Possible completing words are "abccdef", "caaacab", and "cbca".
// Return the shortest completing word in words. It is guaranteed an answer exists. If there are multiple shortest completing words, return the first one that occurs in words.

const shortestCompletingWord = (licensePlate, words) => {
    const letters = licensePlate.replace(/[^a-zA-Z]+/g, '').toLowerCase().split("")
    let arr = [];
    
    for (let word of words){
        let count = 0;
        let copy = word;
        
        for (let char of letters) {
            if (copy.includes(char)) {
                copy = copy.replace(char, '')
                count++
            }
        }
        arr.push([word, count])
    }
    arr.sort((a, b) => a[0].length - b[0].length).sort((a, b) => b[1] - a[1])
    return arr[0][0];
};

// 1. Declare letters and set it to an array of only letters extracted from licensePlace string
//  - Use replace method to replace all chars that are not letter with use of regex and replacing with empty string (remove)
//  - Use toLowerCase() to make all letters lower case and split() to split into array of chars
// 2. Declare arr and set it to an empty array
// 3. User for loop to iterate through words array
// 4. Declare count and set it to 0
// 5. Declare copy and set it to current word
// 6. Use nest for loop to iterate letters array
// 7. If copy includes current char
//  - set copy equal to copy with current char replaced with empty string (removed) via replace method
//  - increment count by 1
// 8. Push subarray [current word, current count] into arr array
// 9. Sort arr by length of each word in ascending order
// 10 Sort arr by count in descending order
// 11. Return first word in arr array at index [0][0]