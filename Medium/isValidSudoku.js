// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

const isValidSudoku = function(board) {
    let rows = {"0": [], "1": [], "2": [], "3": [], "4": [], "5": [], "6": [], "7": [], "8": []};
    let cols = {"0": [], "1": [], "2": [], "3": [], "4": [], "5": [], "6": [], "7": [], "8": []};
    let grids = {"0": [], "1": [], "2": [], "3": [], "4": [], "5": [], "6": [], "7": [], "8": []};
    
    let gridCheck = 0;
    let x = 0;
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const num = board[i][j];
            
            if (num !== ".") {
                rows[i].push(num);
                cols[j].push(num);
                
                if (j >= 0 && j <= 2 ) {
                    grids[x].push(num);
                } else if (j >= 3 && j <= 5) {
                    grids[x + 1].push(num);
                } else if (j >= 6 && j <= 8) {
                    grids[x + 2].push(num);
                }
            }
        }
        
        gridCheck++;
        if (gridCheck === 3) {
            gridCheck = 0;
            x += 3;
        }
    }
    
    rows = Object.values(rows);
    cols = Object.values(cols);
    grids = Object.values(grids);
    
    for (let i = 0; i < board.length; i++) {
        const row = [...new Set(rows[i])];
        const col = [...new Set(cols[i])];
        const grid = [...new Set(grids[i])];
        
        if (row.length !== rows[i].length) return false;
        if (col.length !== cols[i].length) return false;
        if (grid.length !== grids[i].length) return false;
    }
    
    return true;
};

// 1. Declare rows, cols and grids and set them to objects with key value pairs where the key is the # of the row, col or grid and the values are empty arrays
// 2. Declare gridCheck and x and set both to 0
// 3. Use for loop to iterate through board matrix
// 4. Use nested for loop to iterate through current array of board matrix
//  - Declare num and set it value at array of index-i , and element at index-j
//  - If current num is not equal to ".", perform the following:
//      - Append num to corresponding i-th index row and j-th index col. Use push() method to append
//  - If j is greater than or equal to 0 and less then or equal to 2, append num to grids at index-x
//  - If j is greater than or equal to 3 and less then or equal to 6, append num to grids at index-x + 1
//  - If j is greater than or equal to 6 and less then or equal to 8, append num to grids at index-x + 2
//  - Complete Loop
// 5. Once nested loop finishes, perform the following:
//  - Increment gridCheck by 1
//  - If gridCheck is equal to 3, perform the following:
//      - Set gridCheck equal to 0
//      - Set x equal to x + 3
//  - Complete Loop
// 6. Set rows equal to an array of only values from rows object
//  - Use Object.values method to extract values from rows object
// 7. Set cols equal to an array of only values from cols object
//  - Use Object.values method to extract values from cols object
// 8. Set grids equal to an array of only values from grids object
//  - Use Object.values method to extract values from grids object
// 9. Use for loop to iterate through rows, cols and grids
//  - Declare row and set it to an array of unique values from rows array at current index-i
//      - Use Set to extract unique values from array at index-i of rows
//  - Declare col and set it to an array of unique values from cols array at current index-i
//      - Use Set to extract unique values from array at index-i of cols
//  - Declare grid and set it to an array of unique values from grids array at current index-i
//      - Use Set to extract unique values from array at index-i of grids
//  - If row length is not equal to length of array at index-i of rows, return false
//  - If col length is not equal to length of array at index-i of cols, return false
//  - If grid length is not equal to length of array at index-i of grids, return false
// 10. If none of the above conditions are met, return true