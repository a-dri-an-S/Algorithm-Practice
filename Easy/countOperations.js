// You are given two non-negative integers num1 and num2.
// In one operation, if num1 >= num2, you must subtract num2 from num1, otherwise subtract num1 from num2.
//     For example, if num1 = 5 and num2 = 4, subtract num2 from num1, thus obtaining num1 = 1 and num2 = 4. However, if num1 = 4 and num2 = 5, after one operation, num1 = 4 and num2 = 1.
// Return the number of operations required to make either num1 = 0 or num2 = 0.

const countOperations = function(num1, num2) {
    let count = 0;
    
    if (num1 === 0 || num2 === 0) return 0;
    
    while (num1 > 0 || num2 > 0) {
        if (num1 > num2) {
            num1 -= num2;
            count++;
        } else {
            num2 -= num1;
            count++;
        }
        
        if (num1 <= 0 || num2 <= 0) {
            break;
        }
    }
    
    return count;
};

// 1. Declare count and set it to 0
// 2. If num1 OR num2 are equal to 0, return 0
// 3. While num1 OR num2 are greater than 0, perform the following:
//  - If num1 is greater than num2, set num1 equal to num1 - num2 and increment count by 1
//  - Else, set num2 equal to num2 - num1 and increment count by 1
//  - If num1 OR num2 are less than or equal to 0, break the loop
// 4. Return count