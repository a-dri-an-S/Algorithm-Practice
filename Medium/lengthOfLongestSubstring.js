// Given a string s, find the length of the longest substring without repeating characters.

const lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    
    for (let i = 0; i < s.length; i++) {
        let str = "";
        
        for (let j = i; j < s.length; j++) {
            if (!str.includes(s[j])) {
                str += s[j];
            } else {
                break;
            }
        }
        maxLength = Math.max(maxLength, str.length);
    }
    return maxLength;
};

// 1. Declare maxLength and set it to 0
// 2. Use for loop to iterate through s string
//  - Declare str and set it to am empty string;
// 3. Use nested for loop to iterate through s string
//  - If str doesn't include value at index-j of s string, add values to str
//  - Else break loop
// 4. After nested loop stops, set maxLenth equal to the largest integer between maxLength and length of string'
//  - Use Math.max() method to obtain largest value between the two
// 5. When loop stops, return maxLength

// SLIDING WINDOW METHOD

const lengthOfLongestSubstring = function(s) {
    let word = new Set();
    let maxLength = 0;
    let length = 0;
    let left = 0;
    let right = 0;
    
    while (right < s.length) {
        while (word.has(s[right])) {
            word.delete(s[left]);
            left++;
        }
        word.add(s[right]);
        length = right - left + 1;
        
        if (length > maxLength) {
            maxLength = length
        }
        right++;
    }
    return maxLength;
};

// 1. Declare word and set it to an empty set
//  - Create set with Set() constructor
// 2. Declare length and maxLength and set both to 0
// 3. Declare left and right and set both to 0
// 4. Use while loop to loop until right is greater than length of s
// 5. Use a nested for loop to loop if word set contains char at index-right of s string. If conditions met, perform the following:
//  - Delete char at index-left of s string in word set
//  - Increment left by 1
// 6. Add char at index-right of s string to word set
// 7. Set length equal to right - left + 1 (returns total number of unique characters)
// 8. If length is greater than maxLength, set maxLength equal to length
// 9. Increment right by 1
// 10. When while loop ends, return maxLength