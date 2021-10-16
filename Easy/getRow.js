// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

const getRow = function(rowIndex) {
    let row = [1, 1];
    
    if (rowIndex === 0) return [1];
    if (rowIndex === 1) return row;
    
    for (let i = 2; i <= rowIndex; i++) {
        let currentRow = [1];
        
        for (let j = 0; j < row.length - 1; j++) {
            const sum = row[j] + row[j + 1];
            currentRow.push(sum);
        }
        currentRow.push(1);
        row = currentRow;
    }
    return row;
};

// 1. Declare row and set it to an array with two values in each index
// 2. If rowIndex is equal to 0, return an array with a value of 1 at index-0
// 3. If rowIndex is equal to 1, return row
// 4. Create loop with for loop starting at 2 and incrementing by 1 until rowIndex is reached
// 5. Declare currentRow and set it to an array with a value of 1 at index-0
// 6. Use nested for loop to iterate through row array, starting at index-0 and incrementing by 1 until 2nd to last value is reached
// 7. Declare sum and set it to a sum between current value in row array and next value in row array
// 8. Push sum to currentRow array with push() method
// 9. When loop is finished, push 1 to currentRow array with push () method
// 10. Set row equal to currentRow
// 11. When loop is complete, return row