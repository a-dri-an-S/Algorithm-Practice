// Given a string s, reverse the string according to the following rules:
//     All the characters that are not English letters remain in the same position.
//     All the English letters (lowercase or uppercase) should be reversed.
// Return s after reversing it.

const reverseOnlyLetters = function(s) {
    const letters = s.match(/[a-zA-Z]/gi, '');
    
    if (!letters) return s
        
    const reversed = letters.reverse();
    const arr = [];
    
    for (const char of s) {
        if (char.match(/[a-z]/i)) {
            arr.push(reversed.shift());
            
        } else {
            arr.push(char);
            
        }
    }
    
    return arr.join("");
};

// 1. Declare letters and set it to an array of only letter extracted from "s" string via match() method and regex
// 2. If letters is null or undefined, return original "s" string
// 3. Declare reversed and set it to letters in reversed order with reverse method()
// 4. Declare arr and set it to an empty array
// 5. Use for loop to iterate through s string
// 6. If current char matches regex (char is letter), push element to arr with push() at index-0 of reversed arr by extracting with shift() method 
// 7. Else, push current char into arr array with push() method
// 8. Join arr back into string with join("") method and return new string 