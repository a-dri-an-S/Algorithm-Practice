// You want to water n plants in your garden with a watering can. The plants are arranged in a row and are labeled from 0 to n - 1 from left to right where the ith plant is located at x = i. There is a river at x = -1 that you can refill your watering can at.
// Each plant needs a specific amount of water. You will water the plants in the following way:
// Water the plants in order from left to right.
// After watering the current plant, if you do not have enough water to completely water the next plant, return to the river to fully refill the watering can.
// You cannot refill the watering can early.
// You are initially at the river (i.e., x = -1). It takes one step to move one unit on the x-axis.
// Given a 0-indexed integer array plants of n integers, where plants[i] is the amount of water the ith plant needs, and an integer capacity representing the watering can capacity, return the number of steps needed to water all the plants.

const wateringPlants = function(plants, capacity) {
    let can  = capacity;
    let steps = 0;
    
    for (let i = 0; i < plants.length; i++) {
        if (plants[i] <= can) {
            can -= plants[i];
            steps++;
        } else if (plants[i] > can) {
            steps += (i * 2) + 1;
            can = capacity - plants[i];
        }
    }
    
    return steps;
};

// 1. Declare can and set it to capacity
// 2. Declare steps and set it to 0
// 3. Use for loop to iterate through plants array
//  - If current value at index-i is less than or equal to can (water capacity), perform the following:
//      - Subtract value from can
//      - Increment steps by 1
//  - Else if value at index-i is greater than can, perform the following:
//      - Set steps equal to current index-i, multiplied by 2, plus 1, plus steps
//          - i * 2, the steps taking to backtrack to -1 position outside of array and back to current index
//          - Add 1 for current plant
//      - Set can equal to capacity subtracted by current value in index
//          - Watering can refilled and used to water current plant
//  - End Loop
// 4. Return steps