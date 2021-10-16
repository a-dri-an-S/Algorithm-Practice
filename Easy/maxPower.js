// The power of the string is the maximum length of a non-empty substring that contains only one unique character.
// Given a string s, return the power of s.

const maxPower = s => {
    let max = 0
    let count = 1;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            count++
        } else {
            max = Math.max(max, count)
            count = 1;
        }
    }
    return max
};

// 1. Declare max and set it to 0
// 2. Declare count and set it to 1
// 3. Use for loop to iterate through s string
// 4. If current i is equal to next i (to the right), increment count by 1
// 5. Else, set max to largest num between max and count via Math.max method & reset count to 1
// 6. Return max