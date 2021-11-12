// In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.
// You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.
// The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.
// If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

const matrixReshape = function(mat, r, c) {
    const arr = []
    if (r * c !== mat.flat().length) {
        return mat
    } else {
        const flattened = mat.flat();
        for (let i = 0; i < r; i++) {
            arr.push(flattened.splice(0, c))
        }
    }
    return arr
};

// 1. Declare arr and set it to an empty array
// 2. If row (r) * column (c) is not equal to mat's element count (mat.flat().length), return original matrix (mat)
// 3. Else, Perform the following
//  - Declare flattened and set it to mat.flat() to remove all subarray's at 1 depth
//  - Use for loop to create a loop based off of amount of rows
//  - Splice from 0 to column amount (c) in flatten array and push into array
// 4. Return array 

// Solution #2
var matrixReshape = function(mat, r, c) {
    const cells = mat.flat();
    if (cells.length !== r * c) return mat;
    
    const matrix = [];
    let idx = 0;
    
    for (let i = 0; i < r; i++) {
        let col = 0;
        let row = [];

        while (col < c) {
            row.push(cells[idx]);
            idx++;
            col++;
        }
        matrix.push(row);
    }
    
    return matrix;
};

// 1. Declare cells and set it to mat matrix transformed into a single array with flat() method
// 2. If length of cells is not equal to the product of r and c, return mat
// 3. Declare matrix and set it to an empty array
// 4. Declare idx and set it to 0
// 5. Use for loop to create loop for making rows
//  - Declare col and set it to 0
//  - Declare row and set it to an empty array
// 6. Use a while loop to create loop until col is greater than or equal to c
//  - Append value at index-idx of cells array into arr array with push() method;
//  - Increment idx and col by 1
// 7. When while loop ends, Append row array to matrix array with push() method
// 8. When for loop ends, return matrix