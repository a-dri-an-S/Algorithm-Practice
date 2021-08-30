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