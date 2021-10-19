// Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.
// Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.

const isPathCrossing = function(path) {
    let start = [0, 0];
    let points = ['00'];
    
    for (let dir of path) {
        if (dir === "N") start[1]++;
        else if (dir === "S") start[1]--;
        else if (dir === "E") start[0]++;
        else if (dir === "W") start[0]--;
        
        const currPoint = start.join("");
        if (points.includes(currPoint)) {
            return true;
        } 
        
        points.push(currPoint);
    }
    
    return false;
};

// 1. Declare start and set it to an array of [0, 0]
// 2. Declare points and set it to an array with ['00'] as the initial value
// 3. Use for loop to iterate through path string
//  - If current char "dir" in path is equal to "N", increment value at index-1 of start by 1
//  - If current char "dir" in path is equal to "S", decrement value at index-1 of start by 1
//  - If current char "dir" in path is equal to "E", increment value at index-0 of start by 1
//  - If current char "dir" in path is equal to "W", decrement value at index-0 of start by 1
//  - Declare currPoint and set it to start array converted to string with join("") method
//  - Use includes() array method to check if currPoints string is included inside of points array, if included return true
//  - Append currPoint to points array with push() method
// 4. If none of the above conditions are met, return false