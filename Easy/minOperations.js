// You are given a string s consisting only of the characters '0' and '1'. In one operation, you can change any '0' to '1' or vice versa.
// The string is called alternating if no two adjacent characters are equal. For example, the string "010" is alternating, while the string "0100" is not.
// Return the minimum number of operations needed to make s alternating.

const minOperations = s => {
    let oneCount = 0;
    let zeroCount = 0
    
    const oneArr = new Array(s.length).fill("0")
    .map((num, i) => i % 2 === 0 ? "1" : "0");
    const zeroArr = new Array(s.length).fill("0")
    .map((num, i) => i % 2 === 0 ? "0" : "1");
    
    oneArr.forEach((char, i) => {
        if (s[i] !== char) {
            oneCount++
        }
    })
    zeroArr.forEach((char, i) => {
        if (s[i] !== char) {
            zeroCount++
        }
    })
    
    return Math.min(oneCount, zeroCount)
};

// 1. Declare oneCount & zeroCount and set it to 0
// 2. Declare oneArr and set it to an array of alternating "1's" & "0's" starting with "1"
//  - Create new Array filled w/ "0"'s with a length of "s"
//  - Iterate through array w/ map method, if current index is divisible by 2, return "1", else "0"
// 3. Declare zeroArr and set it to an array of alternating "1's" & "0's" starting with "0"
//  - Create new Array filled w/ "0"'s with a length of "s"
//  - Iterate through array w/ map method, if current index is divisible by 2, return "0", else "1"
// 4. Iterate through oneArr with forEach method, if current index of s is equal to char, increment oneCount by 1
// 5. Iterate through zeroArr with forEach method, if current index of s is equal to char, increment zeroCount by 1
// 6. Return smallest count between oneCount and zerCount with Math.min
