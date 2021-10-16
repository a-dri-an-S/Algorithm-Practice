// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

const isNumericalPalindrome= x => {
    const reversedNum = Number(('' + x).split().reverse().join(''));
    return reversedNum === x;
}

// 1. Declare reversedNum and set it to a Number based on the following:
//  - Turn number into string
//  - Split string into an array
//  - Reverse array and join into string
//  - Turn string into number or NaN
// 2. Check if reversedNum is equal to x, return boolean 