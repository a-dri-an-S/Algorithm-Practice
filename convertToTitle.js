// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

const convertToTitle = function(colNum) {
    let colLetterArr = [];
    
    while (colNum > 0) { 
        
        if (colNum > 26) {
            
            let letterNum = colNum % 26;
            
            if (letterNum === 0) {
                letterNum = 26;
                colNum = colNum - 1;
            }
            
            const letter = String.fromCharCode(letterNum + 64);
            colLetterArr.push(letter);
            
        } else {
            
            const letter = String.fromCharCode(colNum + 64);
            colLetterArr.push(letter);
            colNum = 0
            
        }
        
        colNum = Math.floor(colNum / 26);
        
    } 
    
    return colLetterArr.reverse().join("");
};

// 1. Declare colLetterArr and set it to an empty array
// 2. use while loop to create loop until colCheck is greater than 0
// 3. If colNum is greater than 26: 
//  - Declare letNum and set it equal to the remainder of colCheck divided by 26 with modulo operator 
//  - If letterNum is equal to 0
//      - Set letterNum equal to 26;
//      - Set colNum equal to colNum subtracted by 1
//  - Declare letter and set it to char fromCharCode(letterNum + 64) as a string
//      - Add 64 to letterNum to return char code of an uppercase letter with String.fromCharCode();
//  - Push letter colLetterArr with push() method
// 4. Else:
//  - Declare letter and set it to char fromCharCode(colNum + 64) as a string
//      - Add 64 to colNum to return char code of an uppercase letter with String.fromCharCode();
//  - Push letter colLetterArr with push() method
//  - Set colNum equal to 0
// 5. Set colCheck equal to colCheck divided by 26 rounded down with Math.floor() function
// 6. Return colLetterArr, reversed and join back to string with reverse() method and join("") method
