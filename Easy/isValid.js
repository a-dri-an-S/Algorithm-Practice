// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

const isValid = function(s) {
    const length = s.length / 2;
    
    for (let i = 0; i < length; i++) {
            if (s.includes('()')) {
                s = s.replace('()', '');
            } else if (s.includes('[]')) {
                s = s.replace('[]', '');
            } else if (s.includes('{}', '')) {
                s = s.replace('{}', '');
            }
        
            if (s.length === 0) {
                return true
            }
        }
    
    return false
};

// 1. Declare length and set it to length of s, divided by 2
// 2. Use for loop to create loop moving in increments of 1 until length is reached
// 3. If s includes '()', remove '()' from s string
//  - Use replace() to remove '()' by replacing it with an empty string
//  - Set s equal to new string
// 4. If s includes '[]', remove '[]' from s string
//  - Use replace() to remove '[]' by replacing it with an empty string
//  - Set s equal to new string
//3. If s includes '{}', remove '{}' from s string
//  - Use replace() to remove '{}' by replacing it with an empty string
//  - Set s equal to new string
// 4. If s length is equal to 0, return true
// 5. If none of the above conditions are met and loop has finished, return false