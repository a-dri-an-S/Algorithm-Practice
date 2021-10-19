// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
// Note that after backspacing an empty text, the text will continue empty.

const backspaceCompare = function(s, t) {
    
    const length = Math.max(s.length, t.length);
    
    for (let i = 0; i < length; i++) {
        if (s[i + 1] === "#" && s[i] !== undefined && s[i + 1] !== undefined) {
            const backspace = s.slice(i, i + 2);
            s = s.replace(backspace, '');
            i -= 2;
        }
        
        if (t[i + 1] === "#" && t[i] !== undefined && t[i + 1] !== undefined) {
           const backspace = t.slice(i, i + 2);
            t = t.replace(backspace, '');
            i -= 2;
        }
    }
    
    if (s.includes("#")) s = s.replace("#", '');
    if (t.includes("#")) t = t.replace("#", '');
    
    return s === t ? true : false;

};

// 1. Declare length and set it to longest string between s and t
//  - Use Math.max() function to get the largest of the two values
// 2. Use for loop through both s and t string
// 3. If next value in s string is equal to "#" & both current and next value in s string are not equal undefined: 
//  - Declare backspace and set it to a sunstring of current value and next value
//      - Use slice to extract substring from s string
//  - Set s eqaul to s with substring removed 
//      - Use replace() method to replace backspace from s string and replaced with empty string
//  - Decrement i by 2
// 4. If next value in t string is equal to "#" & both current and next value in t string are not equal undefined: 
//  - Declare backspace and set it to a sunstring of current value and next value
//      - Use slice to extract substring from t string
//  - Set t eqaul to t with substring removed 
//      - Use replace() method to replace backspace from t string and replaced with empty string
//  - Decrement i by 2
// 5. If s string includes "#", set s string equal to s with 1 "#" removed
//      - Use replace() method to replace "#" from s string and replaced with empty string
// 6. If t string includes "#", set t string equal to t with 1 "#" removed
//      - Use replace() method to replace "#" from t string and replaced with empty string
// 7. If s is equal to t, return true, else return false