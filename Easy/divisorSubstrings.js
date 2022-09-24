// The k-beauty of an integer num is defined as the number of substrings of num when it is read as a string that meet the following conditions:

//     It has a length of k.
//     It is a divisor of num.

// Given integers num and k, return the k-beauty of num.

// Note:

//     Leading zeros are allowed.
//     0 is not a divisor of any value.

// A substring is a contiguous sequence of characters in a string.

const divisorSubstrings = function(num, k) {
    let count = 0;
    
    const str = num.toString()
    
    for (let i = 0; i < str.length - (k - 1); i++) {
        let divisor = Number(str.substr(i, k));
        
        if (num % divisor === 0) {
            count++;
        }
        
    }
    
    return count;
};

// 1. Declare count and set it to 0
// 2. Declare str and set it to num converted to a string
// 3. Use a for loop to iterate through str, stopping k-1 indices before the end of str
// 4. Declare divisor and set it to an integer subtracted from str, starting at index-i that is k length
//  - Use substr() to extract a string starting at index-i to length k
//  - Use the Number() wrapper to convert sub string to an integer
// 5. If num is divisible by divisor, increment count by 1
//  - Use the modulo to get remainder of num and divisor
//  - check if reminder is EQUAL TO 0
// 6. After loop ends, return count