// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.
// Return the sorted string. If there are multiple answers, return any of them.

const frequencySort = function(s) {
    let hash = {};
    let str = "";
    
    for (const char of s) {
        if (hash[char]) {
            hash[char]++;
        } else {
            hash[char] = 1;
        }
    }
    
    hash = Object.entries(hash);
    hash.sort((a, b) => b[1] - a[1]);
    
    for (const arr of hash) {
        for (let i = 1; i <= arr[1]; i++) {
            str += arr[0];
        }
    }
    
    return str;
};

// 1. Declare hash and set it to an empty object
// 2. Declare str and set it to an empty string ("")
// 3. Use for loop to iterate through s string
//  - If current value in s (char) is a key in hash (is truthy), increment value of key in hash object
//  - Else, Add char as key to hash and set its value to 1
//  - End Loop
// 4. Set hash equal to an array of key/value pairs in hash object
//  - Use Object.entries() method to extract key/value pairs into subarrays within an array
//  - Sort hash by its the 2nd element of each subarray in descending order (2nd element is value of key/value pairs)
// 5. Use for loop to iterate through hash array
// 6. Use nested for loop to iterate through the values (2nd elements) of each subarray
//  - Add key (first element) to str
//  - End loop
// 7. Return str