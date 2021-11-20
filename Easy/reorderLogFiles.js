// You are given an array of logs. Each log is a space-delimited string of words, where the first word is the identifier.

// There are two types of logs:

// Letter-logs: All words (except the identifier) consist of lowercase English letters.
// Digit-logs: All words (except the identifier) consist of digits.
// Reorder these logs so that:

// The letter-logs come before all digit-logs.
// The letter-logs are sorted lexicographically by their contents. If their contents are the same, then sort them lexicographically by their identifiers.
// The digit-logs maintain their relative ordering.
// Return the final order of the logs.

const reorderLogFiles = function(logs) {
    let digits = [];
    let letters = [];
    
    logs.forEach(log => {
        if (Number.isInteger(Number(log[log.length - 1]))) {
            digits.push(log);
        } else {
            log = log.split(" ");
            letters.push([log[0], log.slice(1).join(" ")]);
        } 
    }); 
    
    letters = letters.sort((a, b) => a[0] < b[0] ? -1 : 1)
        .sort((a, b) => a[1] < b[1] ? -1 : 1);
    
    letters = letters.map(arr => arr.join(" "));
    
    return letters.concat(digits);
};

// 1. Declare digits and letters and set both to am empty array
// 2. Use forEach() method to iterate through logs array
//  - If last character of current sentence(log) in logs array is a number, append current sentence to digits array
//      - Use the isInteger() method to check if characters is an integer
//      - Use push() to append value to digits array
//  - Else, perform the following:
//      - Set current sentence(log) equal to an array of sub strings extracted from log
//          - Use split() method to split string into an array of sub strings split at every space " "
//      - Append a subarray to letter array consisting of the following:
//          - Value at index-0 is equal to value at index-0 of log 
//          - Value at index-i is equal to array at index-1 to end joined into a string
//              - Use splice() method to extract array from log starting at index-1
//              - Use join() method to join sliced array into a string with spaces " " in between values
// 3. Set letters equal to letters sorted in ascending order at both indices, first sorted at index-0, second at index-1
//  - Use sort() method to sort letters array based on values at index-0, chain a second sort() method to sort letters at index-1
// 4. Set letters equal to letters with subarrays joined to strings
//  - Use map() method to iterate and modify letters array.
//  - Use join() method to join subarrays (arr) into a string with a space " " between values
// 5. Return digits array concatenated to letters array