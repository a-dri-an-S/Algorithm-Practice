// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

const sortedSquares = nums => nums.map(num => Math.abs(num) ** 2).sort((a, b) => a - b);

// 1. Iterate through nums via the "map" array method
// 2. For every num, return the square of every absolute num
// 3. Sort in in increasing order and return