// You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.
// We repeatedly make duplicate removals on s until we no longer can.
// Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

const removeDuplicates = function(s) {
    let stack = [];
    
    for (const char of s) {
        if (stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    
    return stack.join("");
};

// 1. Declare stack and set it to an empty array
// 2. Use for loop to iterate through s string
//  - If last element in stack array is equal to char at current index of s string, remove last element from stack array
//      - Use length property to get amount of elements in array and subtract 1 to get index
//      - Use pop() method to remove last element of array
//  - Else, append char at current index of s string to stack array
//      - Use push() method to append value to array
// - End for loop
// 3. Return stack array converted to string
//  - Use join() method to convert array to string