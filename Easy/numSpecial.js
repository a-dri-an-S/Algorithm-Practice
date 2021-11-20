// Given a rows x cols matrix mat, where mat[i][j] is either 0 or 1, return the number of special positions in mat.
// A position (i,j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).

const numSpecial = function(mat) {
    const rows = [];
    const cols = [];
    let count = 0;
    
    for (let i = 0; i < mat.length; i++) {
        rows.push(0);
        
        for (let j = 0; j < mat[i].length; j++) {
            if (i === 0) {
                cols.push(mat[i][j]);
            } else if (i > 0 && mat[i][j] === 1) {
                cols[j] += 1;
            }
            
            if (mat[i][j] === 1) {
                rows[i] += 1;
            }
        }
    }
    
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 1 && rows[i] === 1 && cols[j] === 1) {
                count++;
            }
        }
    }
    
    return count;
};

// 1. Declare rows and cols and set both to an empty array
// 2. Declare count and set it to 0
// 3. Use for loop to iterate through mat array (index-i)
//  - Append 0 to rows array with push() method
// 4. Use nested for loop to iterate through subarrays in mat array (index-j)
//  - If index-i is equal to 0, append value at index-j to cols array
//  - Else if, index-i is greater than 0 AND current value (mat[i][j]) is equal to 1, increment value at index-j of cols array by 1
//  - If current value (mat[i][j]) is equal to 1, increment value at index-i of rows array by 1
//  - End Loop
// 5. Use for loop to iterate through mat array (index-i)
// 6. Use nested for loop to iterate through subarrays of mat array (index-j)
//  - If current value (mat[i][j]) is equal to 1 AND value at index-i of rows array is equal to 1 AND value at index-j of cols array is equal to 1, increment count by 1
//  - End Loop
// 7. Return count