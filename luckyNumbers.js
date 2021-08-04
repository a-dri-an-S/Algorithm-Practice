// Given a m * n matrix of distinct numbers, return all lucky numbers in the matrix in any order.
// A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

const luckyNumbers = matrix => {
    let luckyNum = [];
    let maxCol = [];
    const minRow = matrix.map(arr => Math.min(...arr));

    for (let c = 0; c < matrix[0].length; c++) {
        let colArr = [];
        for (let r = 0; r < MutationRecord.length; r++) {
            colArr.push(matrix[r][c])
        }
        maxCol.push(Math.max(...colArr))
    }

    for (let row of minRow) {
        if (maxCol.includes(row)) {
            luckyNum.push(row)
        }
    }
    return luckyNum;
}

// 1. Declare luckyNum and set it to an empty array
// 2. Declare maxCol and set it to an empty array
// 3. Declare minRow and set it to array of min numbers in each subarray
//  - Iterate through matrix via map method and spread subarray in Math.min to return min num
// 4. Use for loop to iterate through matrix based on subarray length (column)
// 5. Declare colArr and set it to an empty array to each iteration
// 6. Use nested for loop through matrix based on matrix length (row)
// 7. Push num based on current col into colArr to fill with all nums in col
// 8. Push max num in current colArr into maxCol array
//  - Spread current colArr into Math.max to get max num
// 9. Use for loop to iterate through minrow
// 10. if maxCol includes current min number in row, push number into luckyNum arr
// 11. Return luckyNum array