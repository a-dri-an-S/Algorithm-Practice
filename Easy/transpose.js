// Given a 2D integer array matrix, return the transpose of matrix.
// The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

const transpose = matrix => {
    let newMatrix = [];
    
    for (let i = 0; i < matrix[0].length; i++) {
        let arr = []
        for (let j = 0; j < matrix.length; j++) {
            arr.push(matrix[j][i])
        }
        newMatrix.push(arr)
    }
    return newMatrix
};

// 1. Declare newMatrix and set it to an empty array
// 2. Use for loop to iterate through array at length of matrix subarray
// 3. Declare arr and set it to an empty array
// 4. Use nested for loop to iterate through matrix at length of matrix
// 5. Push element at current index for loop i and for loop j
// 6. Push arr array into newMatrix array
// 7. Return newMatrix