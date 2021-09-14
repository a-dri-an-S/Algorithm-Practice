// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

const plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9 && i !== 0) {
            digits[i] = 0;   
        } else if (digits[i] !== 9) {
            digits[i]++
            break;
        } else if (digits[0] === 9) {
            digits[0] = 0;
            digits.unshift(1)
        }
    }
    return digits
};

// 1. Use for loop to iterate through digits array, starting from the last index, moving to the left by 1
// 2. If current digit is equal to 9 and index is not 0, set current digit equal to 0
// 3. Else if, current digit is not equal to 9, increment current digit by 1 and break
// 4. Else if, digit at index 0 is equal to 9, set digit to 0 and add 1 to beginning of array with unshift() method
// 5. Return digits array