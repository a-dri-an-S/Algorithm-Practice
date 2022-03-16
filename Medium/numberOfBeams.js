// Anti-theft security devices are activated inside a bank. You are given a 0-indexed binary string array bank representing the floor plan of the bank, which is an m x n 2D matrix. bank[i] represents the ith row, consisting of '0's and '1's. '0' means the cell is empty, while'1' means the cell has a security device.

// There is one laser beam between any two security devices if both conditions are met:

//     The two devices are located on two different rows: r1 and r2, where r1 < r2.
//     For each row i where r1 < i < r2, there are no security devices in the ith row.

// Laser beams are independent, i.e., one beam does not interfere nor join with another.

// Return the total number of laser beams in the bank.

const numberOfBeams = function(bank) {
    let count = 0;
    
    bank = bank.map(row => {
        let cam = 0;
        const arr = [...row];
        arr.forEach(cell => {
            if (cell === '1') {
                cam++
            }
        })
        return cam;
    })
    .filter(num => num > 0);
    
    if (bank.length < 2) return count;
    
    for (let i = 0; i < bank.length - 1; i++) {
        const lasers = bank[i] * bank[i + 1];
        count += lasers;
    }
    
    return count;
};

// 1. Declare count and set it to 0
// 2. Set bank equal to an array of laser counts per row, with 0 counts removed
//  - Use map() method to iterate through matrix and mutate the string to a count of '1's
//      - Declare cam and set it to 0
//      - Declare arr and set row string unpacked into an array
//          - Use the spread syntax to "deconstruct" string into individual chars
//      - Use forEach to iterate through arr
//          - If current value (cell) is equal to '1', increment cam by 1
//      - Return cam to replace string with integer
//  - Use filter() method to remove any 0 counts from bank
// 3. If bank element count is less than 2, return count (0)
//  - Use length property to get element count of bank array
// 4. Use a for loop to iterate through bank array, incrementing in 1 step, until 2nd to last element is reached
//      - Declare lasers and set it to the product of current and next value
//      - Set count equal lasers summed to count
// 5. When for loop ends. return count