// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
// A shift on s consists of moving the leftmost character of s to the rightmost position.
//     For example, if s = "abcde", then it will be "bcdea" after one shift.

const rotateString = (s, goal) => {
    let str = s.split("")
    
    for (let i = 0; i < s.length; i++) {
        if (str.join("") !== goal) {
            str.push(str.shift())
        } else if (str.join("") === goal) {
            return true;
        } 
    }
    return false
};

// 1. Declare str and set it to an array of string "s" split into individual chars via split() method
// 2. Use for loop to iterate through s string
// 3. If str joined to string is not equal to goal string
//  - Shift front element to the back of str array via shift() and push() methods
// 4. Else if, str joined to string is equal to goal string, return true
// 5. If no conditions are met, return false