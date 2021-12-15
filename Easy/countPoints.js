// There are n rings and each ring is either red, green, or blue. The rings are distributed across ten rods labeled from 0 to 9.
// You are given a string rings of length 2n that describes the n rings that are placed onto the rods. Every two characters in rings forms a color-position pair that is used to describe each ring where:
//     The first character of the ith pair denotes the ith ring's color ('R', 'G', 'B').
//     The second character of the ith pair denotes the rod that the ith ring is placed on ('0' to '9').
// For example, "R3G2B1" describes n == 3 rings: a red ring placed onto the rod labeled 3, a green ring placed onto the rod labeled 2, and a blue ring placed onto the rod labeled 1.
// Return the number of rods that have all three colors of rings on them.

const countPoints = function(rings) {
    const rods = new Map();
    let count = 0;
    
    for (let i = 1; i < rings.length; i += 2) {
        if (rods.has(rings[i])) {
            rods.get(rings[i]).add(rings[i - 1]);
        } else {
            rods.set(rings[i], new Set(rings[i - 1]));
        }
        
    }
    
    for (const rod of rods) {
        if (rod[1].size === 3) {
            count++;
        }
    }
    
    return count;
};

// 1. Declare rods and set it to an empty Map object
// 2. Declare count and set it to 0
// 3. Use for loop to iterate through rings string, starting at index-1 and incrementing by 2 
//  - If rods has current value (ith rod), add value at index-(i - 1) (color of ring) to rod Set object
//      - Use has() method to check if ith rod is in Map object
//      - Use get() method to get ith rod in Map object
//      - Use add() method to add value (ring color) to Set object of ith rod
//  - Else, add key/value pair of current ith rod (key) and value at index-(i - 1) (rod color) in Set object (value)
//      - Use set() method to add key/value pair to rods Map object
//      - Use new Set() constructor to create Set object
//  - End loop
// 4. Use for loop to iterate through rods map object
//  - if size of current value of key/value pair is equal to 3, increment count by 1
//      - Use size to get the number of unique values in Set object (3 different colors of rings)
//  - End loop
// 5. Return count