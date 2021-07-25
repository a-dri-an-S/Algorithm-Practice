// There is a robot starting at position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.
// The move sequence is represented by a string, and the character moves[i] represents its ith move. Valid moves are R (right), L (left), U (up), and D (down). If the robot returns to the origin after it finishes all of its moves, return true. Otherwise, return false.

const judgeCircle = moves => {
    let x = 0, y = 0;

    for (let i in moves) {
        switch(moves[i]) {
            case "U":
                y++;
                break;
            case "D":
                y--;
                break;
            case "L":
                x--;
                break;
            case "R":
                x++;
                break;
            default:
                break;
        }
    }
    return x === 0 && y === 0;
}

// 1. Declare x & y, assign them to 0 (start points on x + y axis)
// 2. Iterate through string
// 3. Use switch statement to increment or decrement on x/y axis, depending on movement & direction
// 4. if x & y are both equal to 0 (starting point), return true 