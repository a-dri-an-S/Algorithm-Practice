// You are given a string s consisting of lowercase English letters, and an integer k.
// First, convert s into an integer by replacing each letter with its position in the alphabet (i.e., replace 'a' with 1, 'b' with 2, ..., 'z' with 26). Then, transform the integer by replacing it with the sum of its digits. Repeat the transform operation k times in total.
// For example, if s = "zbax" and k = 2, then the resulting integer would be 8 by the following operations:
//     Convert: "zbax" ➝ "(26)(2)(1)(24)" ➝ "262124" ➝ 262124
//     Transform #1: 262124 ➝ 2 + 6 + 2 + 1 + 2 + 4 ➝ 17
//     Transform #2: 17 ➝ 1 + 7 ➝ 8
// Return the resulting integer after performing the operations described above.

const getLucky = (s, k) => {
    let alphaNum = s.split("")
    .map(char => (char.charCodeAt() - 96)
        .toString()
        .split("")).flat();
    
    for (let i = k; i > 0; i--) {
        if (i <= 1) {
            alphaNum = alphaNum.reduce((a, b) => +a + +b)
        } else {
            alphaNum = alphaNum.reduce((a, b) => +a + +b).toString().split("")
            alphaNum = alphaNum
        }
    }
    return alphaNum
};

// 1. Declare alphaNum and set it to an array of nums based on the following operations:
// 2. Split s into an array of letters and iterate through it with the map method
// 3. Get the charCode of each char and subtract by 96 to get its alphabetical position
// 4. Turn that num into a string and split it into a single character
// 5. Flatten array at 1 depth to return an array of single characters 
// 6. Use for loop to loop until k reaches 0
// 7. If i is one or less, sum chars in alphaNum array via reduce method and converting chars from string to num and set it equal to itself
// 8. Else, sum via reduce method, convert sum to string and split into single chars
// 9. Return alphaNum sum