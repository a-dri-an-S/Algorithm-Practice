// You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.
// A substring is a contiguous sequence of characters within a string.

const largestOddNumber = (num) => {
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] % 2 === 0) {
            num = num.slice(0, i)
        } else {
            return num
        }
    }
    return num
};

// 1. Use for loop to iterate through num string in reverse, decrementing by 1 (moving right to left)
// 2. If current num is even (divisible by 2), set num = num minus even digit at end of string via slice method, slicing 0 to current index
// 3. Else, return num
// 4. Return num