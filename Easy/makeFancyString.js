// A fancy string is a string where no three consecutive characters are equal.
// Given a string s, delete the minimum possible number of characters from s to make it fancy.
// Return the final string after the deletion. It can be shown that the answer will always be unique.

const makeFancyString = (s) => {
    let count = 1;
    let str = ""
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            count++
        } else {
            count = 1
        }
        if (count < 3) {
            str += s[i]
        }
    }
    return str
};

// 1. Declare count and set it to 1
// 2. Use for loop to iterate through s string
// 3. Is current char (s[i]) is equal to next (s[i + 1]), increment count by 1
// 4. Else, set count to 1
// 5. If count is less than 3, concat str to itself to current char (s[i])
// 6. Return str