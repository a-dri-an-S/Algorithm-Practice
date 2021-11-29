// A substring is a contiguous (non-empty) sequence of characters within a string.
// A vowel substring is a substring that only consists of vowels ('a', 'e', 'i', 'o', and 'u') and has all five vowels present in it.
// Given a string word, return the number of vowel substrings in word.

const countVowelSubstrings = function(word) {
    const vowels = ["a", "e", "i", "o", "u"];
    let vowelCheck = new Set();
    let count = 0;
    
    for (let i = 0; i < word.length; i++) {
        for (let j = i; j < word.length; j++) {
            if (!vowels.includes(word[j])) {
                break;
            } else {
                vowelCheck.add(word[j]);
                if (vowelCheck.size === 5) {
                    count++;
                }
            }
        }
        vowelCheck = new Set();
    }
    return count;
};

// 1. Declare vowels and set it to an array of consisting of all vowels (a-u)
// 2. vowelCheck and set it to an empty Set object
// 3. Declare count and set it to 0
// 4. Use for loop to iterate through word string (index-i)
// 5. Use nested for loop to iterate through word string w/ start position at current index-i (index-j)
//  - If vowels doesn't include current value at index-j, break loop
//  - Else, perform the following:
//      - Add current value to vowelCheck object
//      - If vowelCheck size is equal to 5 (contains all vowels), increment count by 1
//  - End nested loop
//  - Set vowelCheck to an empty Set object
//  - End loop
// 6. Return count