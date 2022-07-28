// You are given a string num representing a large integer. An integer is good if it meets the following conditions:
//     It is a substring of num with length 3.
//     It consists of only one unique digit.
// Return the maximum good integer as a string or an empty string "" if no such integer exists.
// Note:
//     A substring is a contiguous sequence of characters within a string.
//     There may be leading zeroes in num or a good integer.

const largestGoodInteger = function(num) {
    let largestThree = "";
    
    for (let i = 0; i < num.length - 2; i++) {
        if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
            let currThree = num.slice(i, i + 3);
            if (largestThree < currThree) largestThree = currThree;
            i += 2;
        }
    }
    
    return largestThree;
};

// 1. Declare largestThree and set it to an empty string
// 2. Use a for loop to iterate through num
// 3. If current value at index-i is equal to value at index-i + 1 AND current value at index-i is equal to value at index-i + 2, perform the following:
// 4. Declare currThree and set it to a substring starting at index-i, up 2 indices from ith index
//  - Use the slice() method to obtain substring
// 5. If largestString IS LESS THAN currThree, set largestThree equal to currThree
// 6. Increment i by 2
// 7. After loop ends, return largestThree