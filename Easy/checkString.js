// Given a string s consisting of only the characters 'a' and 'b', return true if every 'a' appears before every 'b' in the string. Otherwise, return false.

const checkString = function(s) {
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'b' && s[i + 1] === 'a') return false;
    }
    
    return true;
};

// 1. Use a for loop to iterate through s
// 2. If value at index-i (current) is equal to 'b' AND value at index-i + 1 (next) is equal to 'a', return false
// 3. If above condition is not met and loop ends, return true