// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.
// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).
// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

const islandPerimeter = function(grid) {
    let perimeter = 0;
    
    for (let i = 0; i < grid.length; i++) {
        if (!grid[i].includes(1) && perimeter > 0) return perimeter
        
        for (let j = 0 ; j < grid[i].length; j++) {
            let cell = grid[i][j];
            const left = j - 1;
            const right = j + 1;
            const top = i - 1;
            const bottom = i + 1;
            
            if (cell === 1) {
                cell = 4;
                
                if (grid[i][left] !== undefined && grid[i][left] === 1) {
                    cell--;
                }
                if (grid[i][right] !== undefined && grid[i][right] === 1) {
                    cell--;                
                }
                if (grid[top] !== undefined && grid[top][j] === 1) {
                    cell--;
                } 
                if (grid[bottom] !== undefined && grid[bottom][j] === 1) {
                    cell--  ;                  
                }
                perimeter += cell;
            }
        }
    }
    return perimeter;
};

// 1. Declare perimeter and set it to 0
// 2. Use for loop to iterate through grid array
// 3. If current grid subarray (grid[i]) doesn't include 1's, return perimeter
// 4. Use nested for loop to iterate through grid[i] subarray
// 5. Declare cell and set it to grid[i][j], current cell in matrix
// 6. Declare left and set it to current j - 1
// 7. Declare right and set it to current j + 1
// 8. Declare top and set it to current i - 1
// 9. Declare bottom and set it to current i + 1
// 10. If current cell is equal to 1, set cell equal to 4
// 11. If cell to the left is not undefined and equal to 1, decrement cell by 1
// 12. If cell to the right is not undefined and equal to 1, decrement cell by 1
// 13. If top row is not undefined and cell on top is equal to 1, decrement cell by 1
// 14. If bottom row is not undefined and cell on them bottom is equal to 1, decrement cell by 1
// 15. Sum together perimeter to itself and cell
// 16. Return perimeter
