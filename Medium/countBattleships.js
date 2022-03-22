// Given an m x n matrix board where each cell is a battleship 'X' or empty '.', return the number of the battleships on board.

// Battleships can only be placed horizontally or vertically on board. In other words, they can only be made of the shape 1 x k (1 row, k columns) or k x 1 (k rows, 1 column), where k can be of any size. At least one horizontal or vertical cell separates between two battleships (i.e., there are no adjacent battleships).

const countBattleships = function(board) {
    let rowCount = 0;
    let colCount = 0;
    const colCountArr = [];
    
    for (let i = 0; i < board.length; i++) {
        let rowLength = 0;
        
        for (let j = 0; j < board[i].length; j++) {
            // Rows
            if (board[i][j] === "X") {
                rowLength++
            }
            if (board[i][j + 1] !== "X" && rowLength > 1) {
                rowLength = 0;
                rowCount++;
            } else if (board[i][j + 1] !== "X" && rowLength === 1) {
                rowLength = 0;
            }
            
            // Cols
            if (i === 0) {
                colCountArr.push([0])
            }
            if (board[i][j] === "X" && board[i][j + 1] !== "X" && board[i][j - 1] !== "X") {
                colCountArr[j][0]++
            }
            if (board[i][j] === "." && colCountArr[j][0] > 0) {
                colCountArr[j].unshift(0);
            }
        }
        // Get count of cols
        if (i === board.length - 1) {
            for (const col of colCountArr) {
                for (const count of col) {
                    if (count > 0) {
                        colCount++
                    }
                }
            }
        }
    }
    
    return colCount + rowCount;
};

// 1. Declare rowCount, colCount and set both to 0
// 2. Declare colCountArr and set it to an empty array
// 3. Use a for loop to iterate through board array
//  - Declare rowLength and set it to 0
// 4. Use a nested for loop and iterate through subarrays in board
//  CHECKING ROWS FOR SHIPS
//  - If current value is equal to X, increment rowLength by 1
//  - If next value is NOT EQUAL to X and rowLength is greater than 1, set rowLength to 0 and increment rowCount by 1 
//      - (checking for ships horizontally positioned)
//  - Else if, next value is NOT EQUAL to X and rowLength is equal to 0, set rowLength to 0
//      - (single cell ships will get counted in cols)
//  CHECKING COLS FOR SHIPS
//  - if index-i is equal to 0, set size of colCountArr (number of columns) by appending subarrays with values set to 0
//  - If current value is equal to X and both previous and next values ARE NOT EQUAL to X, increment value by 1 at index-0 of index-j of ColCountArr
//  - If current value is equal to "." AND value at index-0 of index-j in colCountArr is greater than 0, prepend 0 to subarray
//  CHECK COUNTS OF VERTICAL SHIPS
//  - If at last index of board, perform the following:
//      - Use a for loop, nested for loop combo to iterate through colCountArr
//      - If any value is greater than 0, increment colCount by 1
// 5. When all loops are done running, return num of colCount and rowCount
