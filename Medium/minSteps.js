// Given two equal-size strings s and t. In one step you can choose any character of t and replace it with another character.
// Return the minimum number of steps to make t an anagram of s.
// An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.

const minSteps = function(s, t) {
    
    for (const char of s) {
        if (t.includes(char)) {
            t = t.replace(char, '');
        }
    }
    
    return t.length;
};

// 1. Use for loop to iterate through 's' string
//  - If t includes current char in s, replace char in t with empty string '' and set t equal to that string
// 2. Return length of t string