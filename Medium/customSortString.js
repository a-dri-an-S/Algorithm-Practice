// You are given two strings order and s. All the words of order are unique and were sorted in some custom order previously.
// Permute the characters of s so that they match the order that order was sorted. More specifically, if a character x occurs before a character y in order, then x should occur before y in the permuted string.
// Return any permutation of s that satisfies this property.

const customSortString = function(order, s) {
    let str = "";
    
    for (const i of order) {
        for (const j of s) {
            if (i === j) {
                str += j;
                s = s.replace(i, '');
            }
        }
    }
    str += s
    
    return str;
};

// 1. Declare str and set it to an empty string ("")
// 2. Use for loop to iterate through order order string (index-i)
// 3. Use nested for loop to iterate through s string (index-j)
//  - If value at index-i is equal to value at index-j, perform the following:
//      - Add value at index-j to str
//      - remove value in s string with replace() method, replace character with empty string
//  - End loop
// 4. Add remainder of s to string
// 5. Return str