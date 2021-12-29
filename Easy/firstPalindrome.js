// Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".
// A string is palindromic if it reads the same forward and backward.

const firstPalindrome = function(words) {
    
    for (const word of words) {
        let left = 0;
        let right = word.length - 1;
        
        while (left < right) {
            if (word[left] === word[right]) {
                left++;
                right--;
            } else {
                break;
            }
        }
        
        if (left >= right) {
            return word
        }
        
    }
    
    return "";
};

// 1. Use for loop to iterate through words array
// 2. Declare left and set it to 0 (first index)
// 3. Declare right and set it to length of current word, minus 1 (last index) 
// 4. Use while loop to create loop while left is less than right
//  - If char at left index is equal to char at right index of current word, increment left by 1 and decrement right by 1
//  - Else, break loop
//  - If left is greater than or equal to right, return word (current word in array)
// 5. If conditions above are not met, return empty string ""