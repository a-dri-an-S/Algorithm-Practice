// Given a string s of lower and upper case English letters.
// A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:
// 0 <= i <= s.length - 2
// s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
// To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.
// Return the string after making it good. The answer is guaranteed to be unique under the given constraints.
// Notice that an empty string is also good.

const makeGood = function(s) {
    
    for (let i = 0; i < s.length - 1; i++) {
        const charCodeLeft = s[i].charCodeAt();
        const charCodeRight = s[i + 1].charCodeAt();
        const adjDiff = Math.abs(charCodeLeft - charCodeRight);
        if (adjDiff === 32) {
            const adj = s[i] + s[i + 1]
            s = s.replace(adj, '');
            i = -1;
        }
    }
    
    return s;
};

// 1. Use for loop to iterate through s string, incrementing by 1 until 2nd to last char 
// 2. Declare charCodeLeft and set it to the character code of char at index-i of s string
// 3. Declare charCodeRight and set it to the character code of char at index-i + 1 of s string
// 4. Declare adjDiff and set it to the absolute difference between charCodeLeft and charCodeRight via Math.abs() function
// 5. If adjDiff is equal to 32
//  - Declare adj and set it to char at index-i concatenated to char at index i + 1
//  - Set s equal to s with adj removed from string by replacing adj with empty string via replace() function
//  - Set i equal to -1
// 6. Return s