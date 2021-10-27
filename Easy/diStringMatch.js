// A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:
//     s[i] == 'I' if perm[i] < perm[i + 1], and
//     s[i] == 'D' if perm[i] > perm[i + 1].
// Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.

const diStringMatch = function(s) {
    let arr = new Array(s.length + 1)
        .fill(0)
        .map((val, idx) => {
            return val = idx;
        });
    
    [...s].forEach((val, idx) => {
        if (val === "D") {
            const num = arr.pop();
            arr.splice(idx, 0, num);
        }
    });

    return arr;
};

// 1. Declare arr and set it to an array of nums in increasing order from 0 to length of "s" string
//  - Use new Array() constructor to create an array of length s + 1
//  - Fill that array with fill() method with 0 at every index
//  - Use map to iterate and modify array to convert values of 0 to its respective index
// 2. Use forEach to iterate through s to perform the following:
//  - To iterate through "s" string, use spread syntax to unpack string into single chars inside of an empty array
//  - if current val is equal to "D", declare num and set it to value at last index of arr array and remove with pop() method
//  - Use splice to add num to current index of arr array
// 3. When forEach loop has finished, return arr array
