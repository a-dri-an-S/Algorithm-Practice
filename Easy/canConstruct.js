// Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

const canConstruct = (ransomNote, magazine) => {

    for (let letter of ransomNote) {
        if (magazine.includes(letter)) {
            magazine = magazine.replace(letter, '')
        } else {
            return false;
        }
    }
    
    return true;
};

// 1. Use for loop to iterate through ransomNote string
// 2. If magazine string includes ransomNote, set magazine equal to itself with current ransomNote letter removed from string
// 3. Else return false
// 4. If magazine has all ransomNote letters, return true

// Hash-Table Solution

const canConstruct = function(ransomNote, magazine) {
    let count = {};
    
    for (const letter of magazine) {
        if (count[letter]) {
            count[letter]++;
        } else {
            count[letter] = 1;
        }
    }
    
    for (const letter of ransomNote) {
        if (count[letter] > 0) {
            count[letter]--;
        } else {
            return false;
        }
    }
    
    return true;
};

// 1. Declare count and set it to an empty object
// 2. Use for loop to iterate through magazine string
//  - If count[letter] exists, increment its value by 1
//  - Else add letter to count and set its value equal to 1
// 3. Use for loop to iterate through ransomNote string
//   - If value of count[letter] is greater than 0, decrement its value by 1
//  - Else, return false
// 4. If loop ends and no conditions are met, return false