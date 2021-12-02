// The power of an integer x is defined as the number of steps needed to transform x into 1 using the following steps:

// if x is even then x = x / 2
// if x is odd then x = 3 * x + 1
// For example, the power of x = 3 is 7 because 3 needs 7 steps to become 1 (3 --> 10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1).

// Given three integers lo, hi and k. The task is to sort all integers in the interval [lo, hi] by the power value in ascending order, if two or more integers have the same power value sort them by ascending order.

// Return the k-th integer in the range [lo, hi] sorted by the power value.

// Notice that for any integer x (lo <= x <= hi) it is guaranteed that x will transform into 1 using these steps and that the power of x is will fit in 32 bit signed integer.

const getKth = function(lo, hi, k) {
    let obj = {};
    
    for (let i = lo; i <= hi; i++) {
        let curr = i;
        let count = 0;
        obj[i] = count;
        
        while (curr !== 1) {
            if (curr % 2 === 0) {
                curr = curr / 2;
                count++
            } else {
                curr = 3 * curr + 1;
                count++
            }
        }
        obj[i] = count;
        
    }
    
    obj = Object.entries(obj);
    
    obj.sort((a, b) => a[1] - b[1]);
    
    return obj[k - 1][0];
};

// 1. Declare obj and set it to an empty object
// 2. Use for loop to create loop starting from lo(lowest value) to hi (highest value), while incrementing by 1
//  - Declare curr and set it to current i in loop
//  - Declare count and set it to 0
//  - Add key/pair value to count, where key is i and value is 0
//  - Use a while loop to create loop until curr is equal to 1
//      - If curr is divisable by 2 (curr % 2 is equal to 0), perform the following:
//          - Set curr equal to curr divided by 2
//          - Increment count by 1
//      - Else
//          - Set curr equal to curr multiplied by 3, plus 1
//          - Increment count by 1
//      - End while loop
//  - Set key of i in obj to count (value of key in obj)
//  - End for loop
// 3. Set object equal to an array of key/value pairs extracted from obj
//  - Use Object.entires() method to obtain key/value pairs in separate subarrays
// 4. Sort the obj array into ascending order based off of values of key/value pairs
//  - Use sort() method to sort array
// 5. Return key at the kth position in obj array
//  - Subtract 1 from k to get the index of the key
//  - Return the 0-index of the (kth - 1)-index to obtain key
