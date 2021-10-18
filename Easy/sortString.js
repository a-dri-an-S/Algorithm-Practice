// Given a string s. You should re-order the string using the following algorithm:
//     Pick the smallest character from s and append it to the result.
//     Pick the smallest character from s which is greater than the last appended character to the result and append it.
//     Repeat step 2 until you cannot pick more characters.
//     Pick the largest character from s and append it to the result.
//     Pick the largest character from s which is smaller than the last appended character to the result and append it.
//     Repeat step 5 until you cannot pick more characters.
//     Repeat the steps from 1 to 6 until you pick all characters from s.
// In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.
// Return the result string after sorting s with this algorithm.

const sortString = function(s) {
    s = s.split("").sort().join("");
    let sortedString = "";
    let forward = true;
    
    while (s.length > 0) {
        if (forward) {
            const increase = [...new Set(s)];
            
            for (const char of increase) {
                if (s.includes(char)) {
                    sortedString += char;
                    s = s.replace(char, '');
                }
            }
            forward = false;
            
        } else {
            const decrease = [...new Set(s)].reverse();
            
            for (const char of decrease) {
                if (s.includes(char)) {
                    sortedString += char;
                    s = s.replace(char, '');
                }
            }
            forward = true;
        }
    }
    
    return sortedString;
    
};

// 1. Set s equal to s string with characters in string in ascending order
//  - Use split("") method to split s string into an array of single characters
//  - Use sort() method to sort them in ascending order
//  - Use join("") method to convert array into a string
// 2. Declare sortedString and set it to an empty string
// 3. Declare forward and set it to true
// 4. Use while loop to create loop until s length is less than or equal to 0
// 5. If forward is true:
//  - Declare increase and set it to an array of unique characters in s string
//      - Use new Set() to return all unique characters 
//      - Use spread syntax to unpack characters into an empty array
//  - Use for loop to iterate through increase array
//      - If s includes current char
//          - Add char to sortedString
//          - Replace current char in s with an empty string (remove char ) and set it equal to s with replace() method
//  - Set forward equal to false
// 6. Else:
//  - Declare decrease and set it to an array of unique characters in s string, reversed
//      - Use new Set() to return all unique characters 
//      - Use spread syntax to unpack characters into an empty array
//         - Use reverse() to reverse array
//  - Use for loop to iterate through decrease array
//      - If s includes current char
//          - Add char to sortedString
//          - Replace current char in s with an empty string (remove char ) and set it equal to s with replace() method
//  - Set forward equal to true
// 7. When conditions are met and loop finishes, return sortedString
