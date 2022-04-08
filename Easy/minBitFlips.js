// A bit flip of a number x is choosing a bit in the binary representation of x and flipping it from either 0 to 1 or 1 to 0.

//     For example, for x = 7, the binary representation is 111 and we may choose any bit (including any leading zeros not shown) and flip it. We can flip the first bit from the right to get 110, flip the second bit from the right to get 101, flip the fifth bit from the right (a leading zero) to get 10111, etc.

// Given two integers start and goal, return the minimum number of bit flips to convert start to goal.

const minBitFlips = function(start, goal) {
    start = start.toString(2).split('').reverse();
    goal = goal.toString(2).split('').reverse();
        
    let minCount = 0;
    const maxLength = Math.max(start.length, goal.length);
    
    for (let i = 0; i < maxLength; i++) {
        if (start[i] === undefined) {
            start.push('0');
        } else if (goal[i] === undefined) {
            goal.push('0');    
        }
        
        if (start[i] !== goal[i]) {
            minCount++;
        }
    }
    
    return minCount;
};

// 1. Set start equal to an array of binary representation of start int, split into bits and reversed
//  - Use toString(2) method with a radix of 2 to convert integer to binary form
//  - Use split('') method to split binary string splits into an array of binary bits
//  - Use reverse() method to reverse array
// 2. Set goal equal to an array of binary representation of goal int, split into bits and reversed
//  - Use toString(2) method with a radix of 2 to convert integer to binary form
//  - Use split('') method to split binary string splits into an array of binary bits
//  - Use reverse() method to reverse array
// 3. Declare minCount and set it to 0;
// 4. Declare maxLength and set it to longest length between start and goal
//  - Use length property to get the element count of the array
//  - Use Math.max() method to get the largest of the two values
// 5. Use a for loop to create loop, with i starting at 0, until i is equal to maxLength
//  - If current value of start (start[i]) is undefined, append '0' to start array
//      - Use push() method to append value to array
//  - Else, if current value of goal (goal[i]) is undefined, append '0' to start array
//      - Use push() method to append value to array
//  - If current value of start IS NOT EQUAL to current value of goal, increment minCount by 1
// 6. Return minCount