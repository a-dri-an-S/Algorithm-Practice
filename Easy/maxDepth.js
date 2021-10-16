// A string is a valid parentheses string (denoted VPS) if it meets one of the following:
//     It is an empty string "", or a single character not equal to "(" or ")",
//     It can be written as AB (A concatenated with B), where A and B are VPS's, or
//     It can be written as (A), where A is a VPS.
// We can similarly define the nesting depth depth(S) of any VPS S as follows:
//     depth("") = 0
//     depth(C) = 0, where C is a string with a single character not equal to "(" or ")".
//     depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's.
//     depth("(" + A + ")") = 1 + depth(A), where A is a VPS.
// For example, "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.
// Given a VPS represented as string s, return the nesting depth of s.

const maxDepth = s => {
    const par = s.split("").filter(el => el === "(" || el === ")");
    let max = 0;
    let count = 0;

    for (let p of par) {
        p === "(" ? count++ : count--
        max = Math.max(max, count)
    }
    return max
}

// 1. Declare par and set it to an array of parentheses filtered from string
//  - Split s into an array of single characters
//  - Use filter method to filter starting and end parentheses
// 2. Declare max and set it to 0
// 3. Declare count and set it to 0
// 4. Use for loop to iterate through par array
// 5. If p is equal to "(" increment by 1, else decrement by 1
// 6. Max is equal to max depth via Math max and comparing current count to max count
// 7. Return max