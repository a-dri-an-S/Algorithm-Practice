// You are given an array of integers stones where stones[i] is the weight of the ith stone.
// We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:
//     If x == y, both stones are destroyed, and
//     If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// At the end of the game, there is at most one stone left.
// Return the smallest possible weight of the left stone. If there are no stones left, return 0.

const lastStoneWeight = stones => {
    stones.sort((a, b) => b - a);
    
    while (stones.length > 1) {
        stones.push(stones.splice(0, 2).reduce((a, b)=> a - b))
        stones.sort((a, b) => b - a)
    }
    return stones
};

// 1. Sort stones array in descending order with sort method
// 2. Use while loop to iterate through stones array until stones.length is 1 or less
// 3. Splice first to elements in stones array with splice method and subtract with the reduce method, push back into stones array
// 4. Re-sort through stones array in descending order
// 5. Return stones array

