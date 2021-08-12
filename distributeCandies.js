// Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them

const distributeCandies = candyType => Math.min([...new Set(candyType)].length, candyType.length / 2)

// 1. Place the following values inside of Math.min to return amount of candies
//  - Candy types dervived from new Set, spread into an array
//  - Half of the candies allowed on diet by getting length of candyType and dividing it by two