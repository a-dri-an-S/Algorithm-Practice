// An n x n matrix is valid if every row and every column contains all the integers from 1 to n (inclusive).

// Given an n x n integer matrix matrix, return true if the matrix is valid. Otherwise, return false.

const checkValid = function(matrix) {
    const rows = [];
    const cols = [];
    
    for (let i = 0; i < matrix.length; i++) {
        const row = new Set();
        for (let j = 0; j < matrix[i].length; j++) {
            // add row elements
            row.add(matrix[i][j]);
            
            // add col elements
            if (cols[j] === undefined) {
                const col = new Set();
                col.add(matrix[i][j]);
                cols.push(col);
            } else {
                cols[j].add(matrix[i][j]);
            }
        }
        rows.push(row);
    }
    
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].size !== matrix.length || cols[i].size !== matrix.length) return false;
    }
    
    return true
};

// 1. Declare rows and cols and set both to an empty array
// 2. Use for loop to iterate through matrix rows (index-i)
//  - Declare row and set it to an empty Set object
// 3. Use for loop to iterate through matrix cells (index-j)
//  - Add current value at matrix[i][j] to current row iteration of matrix array
//      - Use add() method to add value to row Set
//  - If cols at current j-index is undefined, perform the following:
//      - Declare col and set it to an empty Set
//      - Add current value at matrix[i][j] to col Set
//          - Use add() method to add value to row Set
//      - Append col Set to cols array
//          - Use push() method to append col Set to cols array
//  - Else, add current value at matrix[i][j] to col Set at index-j of cols array
//      - Use add() method to add value to col Set
//  - End Nested For Loop
//  - Append row Set to rows array
//      - Use push() method to append row Set to rows array
// - End Loop
// 4. Use for loop to iterate through rows array (cols array would work, as well)
//  - If current rows Set size at index-i IS NOT EQUAL to matrix length OR current cols Set size at index-i IS NOT EQUAL to matrix length, return false
//      - Use size property to check for element count in Set
//      - Use length property to check for element count in array
// If no conditions were met in the last loop, return true