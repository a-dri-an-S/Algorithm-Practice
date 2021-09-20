// There is a programming language with only four operations and one variable X:
// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.
// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

const finalValueAfterOperations = function(operations, x = 0) {
    operations.forEach(op => {
        op.includes("-") ? x-- : x++
    });
    return x
};

// 1. Use forEach() methd to iterate through operations array
// 2. If current op includes "-", decrement x by 1, else increment x by 1
// 3. Return x