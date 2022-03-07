// A cell (r, c) of an excel sheet is represented as a string "<col><row>" where:
//     <col> denotes the column number c of the cell. It is represented by alphabetical letters.
//         For example, the 1st column is denoted by 'A', the 2nd by 'B', the 3rd by 'C', and so on.
//     <row> is the row number r of the cell. The rth row is represented by the integer r.
// You are given a string s in the format "<col1><row1>:<col2><row2>", where <col1> represents the column c1, <row1> represents the row r1, <col2> represents the column c2, and <row2> represents the row r2, such that r1 <= r2 and c1 <= c2.
// Return the list of cells (x, y) such that r1 <= x <= r2 and c1 <= y <= c2. The cells should be represented as strings in the format mentioned above and be sorted in non-decreasing order first by columns and then by rows.

const cellsInRange = function(s) {
    const startLetter = s[0].charCodeAt();
    const endLetter = s[3].charCodeAt();
    const startNum = s[1];
    const endNum = s[4];
    const arr = [];
    
    for (let i = startLetter; i <= endLetter; i++ ) {
        const char = String.fromCharCode(i);
        
        for (let j = startNum; j <= endNum; j++) {
            const cell = char + j.toString();
            arr.push(cell);
        }
    }
    
    return arr;
};

// 1. Declare startLetter and set it to charCode of the char at index-0 of s string
//  - Use charCodeAt() to get the UTF-16 code unit
// 2. Declare endLetter and set it to charCode of the char at index-3 of s string
//  - Use charCodeAt() to get the UTF-16 code unit
// 3. Declare startNum and set it to element at index-1
// 4. Declare endNum and set it to element at index-4
// 5. Declare arr and set it to an empty array
// 6. Use a for loop to create loop starting at startLetter and incrementing by 1 until endLetter is reached
//  - Declare char and set it to the char at current charCode
//      - Use String.fromCharCode() method to get the char at the given char code (integer)
// 7. Use nested for loop to to create loop starting at startNum, incrementing by 1 until endNum is reached
//  - Declare cell and set it to current char concatenated to current j, converted to string
//      - Use toString to convert integer to string
//  - Append cell to arr array
//      - Use push() method to append cell to arr array
//  - When both loops end, return arr