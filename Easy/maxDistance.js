// There are n houses evenly lined up on the street, and each house is beautifully painted. You are given a 0-indexed integer array colors of length n, where colors[i] represents the color of the ith house.
// Return the maximum distance between two houses with different colors.
// The distance between the ith and jth houses is abs(i - j), where abs(x) is the absolute value of x.

const maxDistance = function(colors) {
    let distance = 0;
    
    for (let i = 0; i < colors.length - 1; i++) {
        
        for (let j = i + 1; j < colors.length; j++) {
            
            if (colors[i] !== colors[j]) {
                let curr = j - i;
                
                if (curr > distance) distance = curr;
            } 
        }
    }
    return distance;
};

// 1. Declare distance and set it to 0
// 2. Use for loop to iterate through colors array (index-i)
// 3. Use nested for loop to iterate through colors array starting 1 index to the right of previous loop (index-j)
//  - If value at index-i is not equal to value at index-j, perform the following:
//      - Declare curr and set it to difference between j and i
//      - If curr is greater than distance, set distance equal to curr
// 4. Return distance