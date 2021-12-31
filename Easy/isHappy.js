// Write an algorithm to determine if a number n is happy.
// A happy number is a number defined by the following process:
//     Starting with any positive integer, replace the number by the sum of the squares of its digits.
//     Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
//     Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

const isHappy = function(n) {
    let count = 0;
    
    while (n ==! 1 || count < 6) {
        let sum = 0;
        n = n.toString().split("");

        for (let num of n) {
            num = Number(num) ** 2;
            sum += num;
        }
        n = sum;
        
        if (n === 1) {
            return true
        }
        count++;
    }
    
    return false;
};

// 1. Declare count and set it to 0
// 2. Use while loop to create loop while n is not equal to 1 OR count is less than 6
//  - Declare sum and set it to 0
//  - Set n equal to n converted to a string and split into an array of single chars
//      - Use toString() method to convert number to string
//      - Use split("") to split string into array of single chars
// 3. Use nested for loop to iterate through n array
//  - Set num (current value) equal to num to the power of 2
//      - Use Number() function to convert string to number
//  - Set sum equal to sum + num
//  - End for loop
// 4. Set n equal to sum
// 5. If n is equal to 1, return true
// 6. Increment count by 1
// 7. If count is greater than or equal to 6, end while loop
// 8. If n is never equal to 1, return false