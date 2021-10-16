// You are given an array of strings words (0-indexed).
// In one operation, pick two distinct indices i and j, where words[i] is a non-empty string, and move any character from words[i] to any position in words[j].
// Return true if you can make every string in words equal using any number of operations, and false otherwise.

const makeEqual = function(words) {
    const letterCount = {};
    
    if (words.length === 1) return true;
    
    for (const word of words) {
        for (const letter of word) {
            if (letterCount[letter] === undefined) {
                letterCount[letter] = 0;
            }
            letterCount[letter]++;
        }
    }
    
    const vals = Object.values(letterCount);

    for (const val of vals) {
        if (val < words.length) return false;
        if (val % words.length !== 0) return false;
    }
    
    return true;
};

// 1. Declare letterCount and set it to an empty object
// 2. Use for loop to iterate through words array
// 3. Use nested for loop to iterate through current word in words array
// 4. If current letter is not a key in letterCount object, add letter as key and set its value to 0
// 5. Increment letter in letterCount by 1
// 6. Declare vals and set it to an array of values extracted from letterCount object via Object.values() method
// 7. Use for loop to itereate through vals array
// 8. If current val is less than words length (amount of words in array), return false
// 9. If val divided by words.length has a remainder (val % words.length !== 0), return false
//10. If no conditions are met, return true