// You are given a positive integer num consisting of exactly four digits. Split num into two new integers new1 and new2 by using the digits found in num. Leading zeros are allowed in new1 and new2, and all the digits found in num must be used.
//     For example, given num = 2932, you have the following digits: two 2's, one 9 and one 3. Some of the possible pairs [new1, new2] are [22, 93], [23, 92], [223, 9] and [2, 329].
// Return the minimum possible sum of new1 and new2.

const minimumSum = function(num) {
    num = num.toString().split("");
    num = num.sort();
    
    const num1 = Number(num[0] + num[2]);
    const num2 = Number(num[1] + num[3]);
    
    return num1 + num2;
    
};

// 1. Set num equal to itself, converted to an array of characters
//  - Use toString() method to convert integer to string
//  - Use split() method to split string into individual characters
// 2. Set num equal to itself, sorted in ascending order
//  - Use sort() method to sort array
// 3. Declare num1 and set it equal to 1st + 3rd element in num array and convert to number
//  - Use Number() function to convert string to number
// 4. Declare num2 and set it equal to 2nd + 4th element in num array and convert to number
//  - Use Number() function to convert string to number
// 5. Return sum of num1 + num2