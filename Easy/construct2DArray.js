// You are given a 0-indexed 1-dimensional (1D) integer array original, and two integers, m and n. You are tasked with creating a 2-dimensional (2D) array with m rows and n columns using all the elements from original.
// The elements from indices 0 to n - 1 (inclusive) of original should form the first row of the constructed 2D array, the elements from indices n to 2 * n - 1 (inclusive) should form the second row of the constructed 2D array, and so on.
// Return an m x n 2D array constructed according to the above procedure, or an empty 2D array if it is impossible.

const construct2DArray = function(original, m, n) {
    const twoDArray = [];
    
    if (m * n !== original.length) return twoDArray;
    
    for (let i = 0; i < original.length; i += n) {
        twoDArray.push(original.slice(i, i + n));
    }
    return twoDArray;
};

// 1. Declare twoDArray and set it to an empty array
// 2. If product of m and n is not equal to the length original array, return empty twoDArray
// 3. Use for loop to iterate through original array, incrementing in steps of n
// 4. Use slice() to obtain subarray at current i-index to n + i-index and push into twoDArray with push() method
// 5. Return twoDArray 