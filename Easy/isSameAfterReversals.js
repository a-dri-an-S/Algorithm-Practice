// Reversing an integer means to reverse all its digits.
//     For example, reversing 2021 gives 1202. Reversing 12300 gives 321 as the leading zeros are not retained.
// Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2. Return true if reversed2 equals num. Otherwise return false.

const isSameAfterReversals = function(num) {
    num = num.toString();
    
    if (num.length === 1) {
        return true;
    }
    
    if (num[num.length - 1] === '0') {
        return false;
    }
    
    return true;    
};

// 1. Set num equal to num converted from number to string
//  - Use toString() method for string conversion
// 2. If length of num is equal to 1, return true
//  - Use length property to get the amount of characters in num
// 3. If the last value of num is equal to '0', return false
//  - Use length property to get the amount of characters in num and subtract by 1 to get last index
// 4. If neither condition is met, return true
