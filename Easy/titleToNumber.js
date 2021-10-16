// Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.

const titleToNumber = (columnTitle) => {
    let count = 0;
    if (columnTitle.length <= 1) {
        count = columnTitle.charCodeAt() - 64
    } else if (columnTitle.length > 1) {
        let power = columnTitle.length - 1
        for (let i = 0; i < columnTitle.length; i++) {
            count += (26 ** power) * (columnTitle[i].charCodeAt() - 64)
            power--
        }  
    }
    return count
};

// 1. Declare count and set it to 0
// 2. If columnTitle length is 1 or less, set count equal to charCode of columnTitle minus 64 (column #)
// 3. Else, declare power and set it to length of columnTitle string, minus 1
// 4. Use for loop to iterate through columnTitle string
// 5. Set count equal to itself + (26 to the power of "power") * (charCode of current char in string columnTitle minus 1)
// 6. Decrement power by 1
// 7. Return count
