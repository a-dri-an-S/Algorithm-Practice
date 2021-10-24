// Your friend is typing his name into a keyboard. Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.
// You examine the typed characters of the keyboard. Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.

const isLongPressedName = function(name, typed) {
    const nameArr = [];
    const typedArr = [];
    
    name.split("").forEach((char) => {
        if (nameArr[nameArr.length - 1]?.includes(char)) {
            nameArr[nameArr.length - 1].push(char)
        } else {
            nameArr.push([char]);     
        }   
    })
    
    typed.split("").forEach((char) => {
        if (typedArr[typedArr.length - 1]?.includes(char)) {
            typedArr[typedArr.length - 1].push(char)
        } else {
            typedArr.push([char]);     
        }
    })
    
    const length = Math.max(typedArr.length, nameArr.length);
    
    for (let i = 0; i < length; i++) {
        if (!nameArr[i]) return false;
        if (!typedArr[i]) return false;
        
        if (typedArr[i].includes(nameArr[i][0]) && 
            typedArr[i].length >= nameArr[i].length) {
            continue;
        } else {
            return false
        }
    }
    
    return true
};

// 1. Declare nameArr and set it to an empty array
// 2. Declare typedArr and set it to an empty array
// 3. Use forEach() method to iterate through name string and perform the following:
//  - Split name into an array to use forEach method
//  - If subarray at last index of nameArr array includes current char, append char to subarray with push() method
//      - optional chaining is used to return a falsey value (undefined) in the event subarray does not exist
//  - Else, append char in array to namedArr array with push() method 
// 4. Use forEach() method to iterate through typed string and perform the following:
//  - Split typed into an array to use forEach method
//  - If subarray at last index of typedArr array includes current char, append char to subarray with push() method
//      - optional chaining is used to return a falsey value (undefined) in the event subarray does not exist
//  - Else, append char in array to typedArr array with push() method 
// 5. Declare length and set it to integer of longest length between nameArr and typedArr
//  - Use Math.max() function to check longest length between nameArr and typedArr
// 6. Use for loop to create loop until length is reach, starting at 0 and incrementing by 1
//  - If current subarray of nameArr is falsey (undefined), return false
//  - If current subarray of typedArr is falsey (undefined), return false
// - If current subArr of typedArr includes value at index-0 of current nameArr array AND length of typedArr subarray is greater than or equal to length of nameArr subarray, continue
//  - If those conditions are not met, return false
// 7. If all conditions are passed, return true