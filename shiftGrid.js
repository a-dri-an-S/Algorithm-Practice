// Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.
// In one shift operation:
// Element at grid[i][j] moves to grid[i][j + 1].
// Element at grid[i][n - 1] moves to grid[i + 1][0].
// Element at grid[m - 1][n - 1] moves to grid[0][0].
// Return the 2D grid after applying shift operation k times.

const shiftGrid = function(grid, k) {
    let gridFlat = grid.flat()
    let sortedGrid = []
    
    for (let i = 1; i <= k; i++) {
        gridFlat.unshift(gridFlat.pop())
    }
    
    while (gridFlat.length > 0) {
        sortedGrid.push(gridFlat.splice(0, grid[0].length))
    }
    
    return sortedGrid
};

// 1. Declare gridFlat and set it to grid with subarray's removed at 1 depth via flat method
// 2. Declare sortedGrid and set it to an empty array
// 3. Use for loop until k is reached, i <= k, moving in increments of 1
// 4. Inside for loop, place last num in index at index 0 by way of pop() method for removal and unshift() method for adding back to frton
// 5. Use while loop to iterate through gridFlat loop until there are 0 elements remaining
// 6. Inside while loop, splice from index 0 to length of subarray in grid and push it into sortedGrid array
// 7. Return sortedGrid array