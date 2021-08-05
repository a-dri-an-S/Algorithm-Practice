// A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.
//     For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
// A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.
// Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.
// Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

const removeOuterParentheses = s => {
    let count = 0;
    let parenthArr = [];
    let splitString = s.split("")

    for (let i = 0.; i < splitString.length; i++) {
        if (splitString[i] === "(") {
            count++
        } else {
            count--
        }

        if (count === 0) {
            parenthArr.push(splitString.splice(0, i + 1))
            i = -1
        }
    }
    return parenthArr.map(arr => {
        arr.shift(); arr.pop();
        return arr.join("")
    }).join("")
}

// 1. Declare count and set it to 0
// 2. Declare parenthArr and set it to an empty array
// 3. Declare splitString and set it to an array of single chars split from string "s"
// 4. Use for loop to iterate through splitString array
// 5. If current char is "(" increment by 1, else decrement by 1
// 5. If current count is 0
//  - Splice at index 0 up to current index
//  - Push spliced array into parenthArr
//  - Reset i to -1 for next iteration
// 6. Iterate through parethArr and modify with map method
// 7. Shift and pop at current arr, removes outer most parentheses
// 8. Return arr joined into string with join method
// 9. Join & Return modified parenthArr array into string