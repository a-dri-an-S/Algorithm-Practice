// We have n chips, where the position of the ith chip is position[i].
// We need to move all the chips to the same position. In one step, we can change the position of the ith chip from position[i] to:
//     position[i] + 2 or position[i] - 2 with cost = 0.
//     position[i] + 1 or position[i] - 1 with cost = 1.
// Return the minimum cost needed to move all the chips to the same position.

const minCostToMoveChips = function(position) {
    let odd = 0
    let even = 0;
    
    for (const chip of position) {
        if (chip % 2 === 0) odd++
        else even++
    }
    
    return odd > even ? even : odd;
};

// 1. Declare odd, even and set both to 0
// 2. Use for loop to iterate through positions
//  - If current chip is an odd number, increment odd by 1
//      - Use the modulo operator to check for a remainder when divided by 2
//  - Else, increment even by 1
// 3. If odd is greater than even, return even, else return odd
//  - Use the conditional ternary operator to check whether condition is true or not and return the appropriate result 