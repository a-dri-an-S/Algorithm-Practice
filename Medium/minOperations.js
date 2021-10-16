// You have n boxes. You are given a binary string boxes of length n, where boxes[i] is '0' if the ith box is empty, and '1' if it contains one ball.
// In one operation, you can move one ball from a box to an adjacent box. Box i is adjacent to box j if abs(i - j) == 1. Note that after doing so, there may be more than one ball in some boxes.
// Return an array answer of size n, where answer[i] is the minimum number of operations needed to move all the balls to the ith box.
// Each answer[i] is calculated considering the initial state of the boxes.

const minOperations = function(boxes) {
    const moves = [];
    
    for (let i = 0; i < boxes.length; i++) {
        let count = 0

        for (let j = 0; j < boxes.length; j++) {
            if (boxes[j] === "1") {
                count += Math.abs(i - j)
            }
        }
        
        moves.push(count);
    }
    
    return moves;
};

// 1. Declare moves and set it to an empty array
// 2. Use for loop to iterate through boxes string
//  - Declare count and set it to 0
// 3. Use nest for loop to iterate through boxes string
//  - If current-j value is equal to "1", let count equal to count added to the absolute difference between current-1 and current-j indices
// 4. Append current count to moves array with push() method
// 5. Return moves array