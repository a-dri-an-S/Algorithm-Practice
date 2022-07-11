// You are given a string s, where every two consecutive vertical bars '|' are grouped into a pair. In other words, the 1st and 2nd '|' make a pair, the 3rd and 4th '|' make a pair, and so forth.
// Return the number of '*' in s, excluding the '*' between each pair of '|'.
// Note that each '|' will belong to exactly one pair.

const countAsterisks = function(s) {
    let arr = s.split("|");
    let count = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            [...arr[i]].forEach(el => {
                if (el === "*") count++;
            })
        }
    }
    
    return count;
};

// 1. Declare arr and set it to an array of strings split from s at the "|"
//  - Returns an array of sub strings from s that are in between "|"
// 2. Declare count and set it to 0
// 3. Use a for loop to iterate through arr
// 4. If i is an even number or 0, perform the following:
//  - Use the % operator to check for remainder between i and 2, if there is no remainder it is an even number
// 5. Iterate through current substring and increment by 1 if current character is an "*"
//  - Use the spread operator to unpack arr[i] into an empty array
//  - Use the forEach() method to iterate through arr[i] array
//  - If current element is EQUAL TO an "*", increment count by 1
// 6. After all loops end, return count
