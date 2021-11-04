// There are 3n piles of coins of varying size, you and your friends will take piles of coins as follows:
//     In each step, you will choose any 3 piles of coins (not necessarily consecutive).
//     Of your choice, Alice will pick the pile with the maximum number of coins.
//     You will pick the next pile with maximum number of coins.
//     Your friend Bob will pick the last pile.
//     Repeat until there are no more piles of coins.
// Given an array of integers piles where piles[i] is the number of coins in the ith pile.
// Return the maximum number of coins which you can have.

const maxCoins = function(piles) {
    let me = 0;
    let isMe = false;
    
    const twoThirds = (piles.length / 3) * 2;
    piles.sort((a, b) => b - a);

    for (let i = 0; i < twoThirds; i++) {
        if (!isMe) {
            isMe = true;
        } else {
            me += piles[i];
            isMe = false;
        }
    } 
    
    return me;
};

// 1. Declare me and set it to 0
// 2. Declare isMe and set it to false
// 3. Declare twoThirds and set it ot two thirds length of piles array
//  - Divide piles length by 3 and multiply quotient by 2
// 4. Sort piles in descending order with sort() method
// 5. Use for loop to iterate through twoThirds of piles array, incrementing by 1
//  - If isMe is false, set it to true
//  - Else, add current piles[i] to me and set isMe to false
// 6. Return me