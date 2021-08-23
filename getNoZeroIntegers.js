// Given an integer n. No-Zero integer is a positive integer which doesn't contain any 0 in its decimal representation.
// Return a list of two integers [A, B] where:
// A and B are No-Zero integers.
// A + B = n
// It's guarateed that there is at least one valid solution. If there are many valid solutions you can return any of them.

const getNoZeroIntegers = (n) => {
    let arr = []
    let sum = n
    for (let i = 1; i < Infinity; i++) {
        sum -= i
        let sumStr = sum.toString()
        let iStr = i.toString();
        if (!iStr.includes('0') && !sumStr.includes('0')) {
            arr.push(i, sum);
            break;
        }
        sum = n
    }
    return arr
};

// 1. Declare arr and set it to an empty array
// 2. Declare sum and set it to n
// 3. Use For Loop to loop to Infinity by increments of 1, until conditions are met:
// 4. Set sum = itself minus i
// 5. Declare sumStr and it to to sum converted to string via toStringMethod
// 6. Declare iStr and it to to i converted to string via toStringMethod
// 7. If iStr & sumStr don't include any 0's, push i & sum into arr and break
// 8. Return arr