// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

const addStrings = function(num1, num2) {
    let maxNum;
    let minNum;
    
    if (num1.length >= num2.length) {
        maxNum = num1;
        minNum = num2;
    } else {
        maxNum = num2;
        minNum = num1
    }
    
    const max = [...maxNum].reverse().join("");
    const min = [...minNum].reverse().join("");
    
    const stringSum = [];
    let remainder = '0'
    
    for (let i = 0; i < max.length; i++) {
        let maxNum = max[i];
        let minNum = min[i];
        if (minNum === undefined){
            minNum = 0;        
        } 

        let sum = Number(maxNum) + Number(minNum)  + Number(remainder);
        
        if (sum > 9) {
            sum = sum.toString();
            remainder = sum[0];
            sum = sum[1];
            stringSum.push(sum);
            
        } else {
            stringSum.push(sum);
            remainder = '0'        
        }
    }
    
    if (remainder !== '0') {
        stringSum.push(remainder);
        remainder = '0';
    }
    
    return stringSum.reverse().join("");
};

// 1. Declare maxNum and minNum
// 2. If num1 length is greater than num2, set maxNum equal to num1 and minNum equal to num2
// 3. Else, set maxNum equal to num2 and minNum equal to num1
// 4. Declare max and set it to maxNum reversed
//  - Use destructuring assignment to break string into single chars inside of an array
//  - Use reverse to reverse array and join("") to join back to string
// 5. Declare min and set it to minNum reversed
//  - Use destructuring assignment to break string into single chars inside of an array
//  - Use reverse to reverse array and join("") to join back to string
// 6. Declare stringSum and set it to an empty array
// 7. Declare remainder and set it to '0'
// 8. Use for loop to iterate through max string 
// 9. Declare maxNum and set it to current char of max string
// 10. Declare minNum and set it to current char of min string
// 11. If minNum is equal to undefined , set minNum equal to 0
// 12. Declare sum and set it to maxNum to minNum and remainder
//  - Use Number() method to convert string to integer
// 13. If current sum is greater than 9
//  - Set sum equal to sum converted to string with toString() method
//  - Set remainder equal to char at index-0 of sum
//  - Set sum equal to char at index-1 of sum
//  - Append sum to stringSum array with push() method
// 14. Else, append sum to stringSum array with push() method and set remainder equal to '0'
// 15. When loop ends, if remainder is not equal to '0'
//  - Append remainder to stringSum array with push() method
//  - Set remainder equal to 0
// 16. Reverse stringSum array and join("") back to string to return sum as a string