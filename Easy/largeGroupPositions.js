// In a string s of lowercase letters, these letters form consecutive groups of the same character.
// For example, a string like s = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z", and "yy".
// A group is identified by an interval [start, end], where start and end denote the start and end indices (inclusive) of the group. In the above example, "xxxx" has the interval [3,6].
// A group is considered large if it has 3 or more characters.
// Return the intervals of every large group sorted in increasing order by start index.

const largeGroupPositions = (s) => {
    let arr = [];
    let subArr = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[i + 1]) {
            if (subArr.length > 1) {
                subArr.push(i)
                arr.push([Math.min(...subArr), Math.max(...subArr)]);
            } else {
                subArr = [];
            }
        } 
        if (s[i] === s[i + 1]) {
            subArr.push(i)
        }
    }
    return arr
};

// 1. Declare arr and subArr and set it to an empty array
// 2. Use for loop to iterate through s string, moving in increments of 1
// 3. If current letter is not equal (same) as the next letter at index i + 1, perform the following:
// 4. If subArr length is greater than 1
//  - Push current index into subArr array with push method
//  - Push [start of index, end of index] of sub string.  Obtain indexes with Math.min() and Math.max() functions and subArray destructuring (spread operator)
// 5. Else set subArr to an empty array
// 6. If current letter is equal to next letter at index i + 1, push current index into subArr array
// 7. Return arr