// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.
// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.

const reverseStr = function(s, k) {
    const chars = s.split("")
    let turn = true
    
    for (let i = 0; i < chars.length; i += k) {
        if (turn) {
            const reversed = chars.splice(i, k).reverse()
            chars.splice(i, 0, ...reversed)
            turn = false
        } else {
            turn = true
        }
    }
    return chars.join("")
};

// 1. Declare chars and set it to string "s" split into an array of individual chars via split() method
// 2. Declare turn and set it to true
// 3. Use for loop to iterate through chars array, moving in steps of k
// 4. Is turn is true
//  - Declare reversed and set it to a subarray of chars spliced between current i index with k amount of elements with splice method and reversed with reverse method
//  - Place reverse elements back into chars array with splice method at current i index, with reversed deconstructed with spread operator
//  - Set turn equal to false
// 5. Else, set turn equal to true
// 6. Return chars jointed to string with join method