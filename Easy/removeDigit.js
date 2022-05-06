// You are given a string number representing a positive integer and a character digit.

// Return the resulting string after removing exactly one occurrence of digit from number such that the value of the resulting string in decimal form is maximized. The test cases are generated such that digit occurs at least once in number.

const removeDigit = function(number, digit) {
    let max = "0";
    
    for (let i = 0; i < number.length; i++) {
        if (number[i] === digit) {
            let str = number.substr(0, i) + number.substr(i + 1);
            if (max < str) {
                max = str;
            }
        }
    }
    
    return max;
};

// 1. Declare max and set it to "0";
// 2. Use a for loop to iterate through number string
// 3. If current char at index-i IS EQUAL TO digit, perform the following:
// 4. Declare string and set it to a new string with char at index-i removed
//  - Use the substr() function to get a substring from index-0 to current-i and a second substring from index-i+1 to end of string
//  - Add both substrings together to make a new string
// 5. If max IS LESS THAN str, set max equal to str
// 6. When for loop ends, return max