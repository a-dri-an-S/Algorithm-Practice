// Write a function that reverses a string. The input string is given as an array of characters s.

// TWO-POINTER SOLUTION
const reverseString = function(s) {
    let left = 0; 
    let right = s.length - 1;
    const loop = Math.ceil(s.length / 2);
    
    for (let i = 0; i < loop; i++) {
        if (left !== right) {
            const charA = s[left];
            const charB = s[right];
            
            s[left] = charB;
            s[right] = charA;
            
            left++;
            right--;
        } 
    }
};

// 1. Declare left and set it to 0
// 2. Declare right and set it to length of s - 1 (last index)
// 3. Declare loop and set it to length of s divided by 2, rounded up
//  - Use Math.ceil() method to round up
// 4. Use for loop to create loop, starting at i = 0 and incrementing by 1 until loop is reached
// 5. If left is not equal to right, perform the following:
//  - Declare charA and set it to value at index-left of s
//  - Declare charB and set it to value at index-right of s
//  - Set value at index-left equal to charB
//  - Set value at index-right equal to charA
//  - Increment left by 1
//  - Decrement right by 1