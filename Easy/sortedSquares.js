// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

const sortedSquares = nums => nums.map(num => Math.abs(num) ** 2).sort((a, b) => a - b);

// 1. Iterate through nums via the "map" array method
// 2. For every num, return the square of every absolute num
// 3. Sort in in increasing order and return

// Two-Pointers

const sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    const squares = nums.map(num => num**2);
    const result = [];
    
    for (let i = 0; i < squares.length; i++) {

        if (squares[left] < squares[right]) {
            result.unshift(squares[right]);
            right--;
        } else {
            result.unshift(squares[left]);
            left++;
        }
    }
    return result;
};

// 1. Declare left and set it to 0;
// 2. Declare right and set it to last index of nums array
//  - nums.length - 1 returns last index because of 0-index
// 3. Declare squares and set it to values in nums array squared
//  - Use map to iterate through nums array and modify by multiplying every value by the power of 2 (num**2);
// 4. Declare result and set it to an empty array
// 5. Use for loop to iterate through squares array
// 6. If value at squares[left] is less than value at squares[right]
//  - Prepend value squares[right] to result array with unshift() method
//  - Decrement right by 1
// 7. Else 
//  - Prepend value squares[left] to result array with unshift() method
//  - Increment left by 1
// 8. Return result.