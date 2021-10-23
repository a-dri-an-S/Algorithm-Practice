// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

const checkStraightLine = function(coor) {
    let slopes = [];
    let vert = coor.map(x => x[0]);
    let horz = coor.map(y => y[1]);
    
    for (let i = 0; i < coor.length - 1; i++) {
        const y1 = coor[i][1];
        const y2 = coor[i + 1][1];
        const x1 = coor[i][0];
        const x2 = coor[i + 1][0];
        const slope = (y2- y1) / (x2 - x1);
        
        slopes.push(slope);      
    }
    
    slopes = [...new Set(slopes)];
    vert = [...new Set(vert)];
    horz = [...new Set(horz)];
    
    if (slopes.length === 1) return true;
    if (vert.length === 1) return true;
    if (horz.length === 1) return true;
    
    return false;
};

// 1. Declare slopes and set it to an empty array
// 2. Declare vert and set it to an array of only x-coordinates
//  - Use map() method to iterate and modify coor array by returning values at index-0
// 3. Declare horz and set it to an array of only y-coordinates
//  - Use map() method to iterate and modify coor array by returning values at index-1
// 4. Use for loop to iterate through coor array 
//  - Declare y1 and set it to value at index-1 of current subarray at index-i of coor
//  - Declare y2 and set it to value at index-1 of subarray at index-i + 1 of coor
//  - Declare x1 and set it to value at index-0 of current subarray at index-i of coor
//  - Declare x2 and set it to value at index-0 of subarray at index-i + 1 of coor
//  - Declare slope and use the slope formula to get the slope between two points
//  - Append slope to slopes array with push() method
// 5. Set slopes equal to an array of unique values obtained from slopes array
//  - use Set() constructor to obtain object of unique values from slopes array
//  - use spread syntax to unpack those unique values into an empty array
// 6. Set vert equal to an array of unique values obtained from vert array
//  - use Set() constructor to obtain object of unique values from vert array
//  - use spread syntax to unpack those unique values into an empty array
// 5. Set horz equal to an array of unique values obtained from horz array
//  - use Set() constructor to obtain object of unique values from horz array
//  - use spread syntax to unpack those unique values into an empty array
// 7. If slopes length is equal to 1 (1 unique value), return true
// 8. If vert length is equal to 1 (1 unique value), return true
// 9. If horz length is equal to 1 (1 unique value), return true
// 10. If none of the above conditions are met, return false