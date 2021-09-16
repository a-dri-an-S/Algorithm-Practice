// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

const validPalindrome = function(s) {
    
    if (s === [...s].reverse().join("")) {
        return true
    }
    
    for (let i = 0; i < s.length; i++) {
        const left = s.slice(0, i);
        const right = s.slice(i + 1, s.length)
        const newStr = left + right
        const reversed = [...newStr].reverse().join("")
        
        if (newStr === reversed) {
            return true
        }
    }
    
    return false
};

// 1. If "s" string is equal to "s" reversed, return true
//  - Deconstruct "s" string into an empty array w/ spread operator
//  - Reverse array with reverse() method
//  - Use join() method to join array back to string
//  - Check s is strict equals to reversed "s", return true if conditions are met
// 2. Use for loop to iterate through s string
// 3. Declare left and set it to "s" sliced at 0-index to currennt (i) index
// 4. Declare right and set it to "s" sliced at i+1 index to end of string
// 5. Declare newStr and set it to left concatenated to right
// 6. Declare reversed and set it to newStr reversed
//  - Deconstruct newStr into an empty array with spread operator
//  - Reverse array with reverse() method
//  - Join array into string with join() method
// 7. If newStr is equal to reversed, return true
// 8. If no contitions are met after loop, return false