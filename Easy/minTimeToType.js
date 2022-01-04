// There is a special typewriter with lowercase English letters 'a' to 'z' arranged in a circle with a pointer. A character can only be typed if the pointer is pointing to that character. The pointer is initially pointing to the character 'a'.

const minTimeToType = function(word) {
    let seconds = 0;
    
    for (let i = 0; i < word.length - 1; i++) {
        if (i === 0) {
            const char1 = word[i].charCodeAt() - 96;
            
            const forward = Math.abs(1 - char1);
            const backward = Math.abs(26 - char1) + 1;
            
            seconds += Math.min(forward, backward) + 1;
        }
        
        const charA = word[i].charCodeAt() - 96;
        const charB = word[i + 1].charCodeAt() - 96;
        
        const directionA = Math.abs(charA - charB);
        const directionB = Math.abs(1 - Math.min(charA, charB)) + Math.abs(26 - Math.max(charA, charB)) + 1;
        
        seconds += Math.min(directionA, directionB) + 1;
    }
    
    return seconds
};

// 1. Declare seconds and ste it to 0
// 2. Use for loop to iterate through word
// 3. If current index is equal to 0, perform the following:
//  - Declare char1 and set it to current values character code, subtracted by 96
//      - Use charCodeAt() to obtain character code
//      - Subtract 96 to get position in alphabet
//  - Declare forward and set it to absolute value of 1 subtracted by char1
//      - Use Math.abs() method to get absolute value
//  - Declare backward and set it to absolute value of 26 subtracted by char1
//      - Use Math.abs() method to get absolute value
//  - Add smallest value between forward / backward and 1 to seconds
//      - Use Math.min() to get smallest value between the two
// 4. Declare charA and set it to position in alphabet of current char in word
//  - Use charCodeAt() to set character code
//  - Subtract 96 to get position in alphabet
// 5. Declare charB and set it to position in alphabet of next char in word
//  - Use charCodeAt() to set character code
//  - Subtract 96 to get position in alphabet
// 6. Declare directionA and set it to distance between charA and charB without crossing from a to z
//  - Use Math.abs() method to get distance between charA and charB
// 7. Declare directionB and set it to distance between charA and charB when crossing from 'a' to 'z'
//  - Use Math.min() to get distance between smallest letter position to 'a'
//  - Use Math.max() to get distance between largest character position to 'z'
// 8. Add smallest value between directionA / directionB + 1 to seconds 
//  - Use Math.min() to get smallest value
// 9. After loop ends, return seconds