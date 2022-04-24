// There is an n x n grid, with the top-left cell at (0, 0) and the bottom-right cell at (n - 1, n - 1). You are given the integer n and an integer array startPos where startPos = [startrow, startcol] indicates that a robot is initially at cell (startrow, startcol).

// You are also given a 0-indexed string s of length m where s[i] is the ith instruction for the robot: 'L' (move left), 'R' (move right), 'U' (move up), and 'D' (move down).

// The robot can begin executing from any ith instruction in s. It executes the instructions one by one towards the end of s but it stops if either of these conditions is met:

//     The next instruction will move the robot off the grid.
//     There are no more instructions left to execute.

// Return an array answer of length m where answer[i] is the number of instructions the robot can execute if the robot begins executing from the ith instruction in s.

const executeInstructions = function(n, startPos, s) {
    const numOfMoves = [];
    
    for (let i = 0; i < s.length; i++) {
        let moves = 0;
        let position = [...startPos];
        
        for (let j = i; j < s.length; j++) {
            if (s[j] === "R" && position[1] < n - 1) {
                moves++;
                position[1]++;
            } else if (s[j] === "R" && position[1] === n - 1) {
                break;
            }
            
            if (s[j] === "L" && position[1] > 0) {
                moves++;
                position[1]--;
            } else if (s[j] === "L" && position[1] === 0) {
                break;
            }
            
            if (s[j] === "D" && position[0] < n - 1) {
                moves++;
                position[0]++;
            } else if (s[j] === "D" && position[0] === n - 1) {
                break;
            }
            
            if (s[j] === "U" && position[0] > 0) {
                moves++;
                position[0]--;
            } else if (s[j] === "U" && position[0] === 0) {
                break;
            }
        }
        numOfMoves.push(moves);
    }
    return numOfMoves;
};

// 1. Declare numOfMoves and set it to an empty array
// 2. Use a for loop to iterate through s string
// 3. Within for loop, declare moves and set it to 0
// 4. Within for loop, declare position and set it to a copy of startPos
//  - Use the spread syntax to unpack startPos into an empty array (copy)
// 5. Use a nested for loop to iterate through s string, starting at position i (from top for loop)
// 6. If current char (s[j]) of s is "R" AND position at index-1 is less than n - 1(less than edge of grid), increment both moves and position[1] by 1
// 7. Else if, current char (s[j]) of s is "R" and position at index-1 is equal to n - 1 (edge of grid), break loop
// 8. If current char (s[j]) of s is "L" AND position at index-1 is greater than 0(greater than edge of grid), increment moves by 1 and decrement position[1] by 1
// 9. Else if, current char (s[j]) of s is "L" and position at index-1 is equal to 0 (edge of grid), break loop
// 10. If current char (s[j]) of s is "D" AND position at index-0 is less than n - 1(less than edge of grid), increment both moves and position[0] by 1
// 11. Else if, current char (s[j]) of s is "D" and position at index-0 is equal to n - 1 (edge of grid), break loop
// 12. If current char (s[j]) of s is "U" AND position at index-0 is greater than 0(greater than edge of grid), increment moves by 1 and decrement position[0] by 1
// 13. Else if, current char (s[j]) of s is "U" and position at index-0 is equal to 0 (edge of grid), break loop
// 14. After nested loop ends/breaks, append moves to numOfMoves
//  - Use push() method to append to array
// 15. After top loop ends, return numOfMoves