// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

const searchMatrix = function(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        let r = matrix[i].length - 1;

        for (let l = 0; l < matrix[i].length / 2; l++) {
            if (matrix[i][l] === target || matrix[i][r] === target) {
                return true;
            }
            r--;
        }
    }

    return false;
};

// 1. Use for loop to iterate through matrix array
//  - Declare r and set it to last index of array at current index-i of matrix
// 2. Use nested for loop to search through current array in matrix, starting at l = 0 and incrementing by 1 until half length of current array is reached
//  - If value on the left (l) OR value on the right (r) are equal to target, return true
//  - Decrement by 1
// 3. If condition are not met within loop, return false