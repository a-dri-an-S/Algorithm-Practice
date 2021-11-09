// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

const reverseWords = function(s) {
    const words = s.split(" ");
    
    for (let i = 0; i < words.length; i++) {
        let word = words[i].split("");
        let left = 0;
        let right = word.length - 1;
        
        for (let j = 0; j < (word.length / 2); j++) {
            if (left !== right) {
                const a = word[left];
                const b = word[right];
                
                word[left] = b;
                word[right] = a;
                
                left++;
                right--;
            }
        }
        words[i] = word.join("");
        
    }
    
    return words.join(" ");
};

// 1. Declare words and set it to an array of substrings from s string
//  - Use split() method to split s string into an array of substrings split at the whitespace " "
// 2. Use for loop to iterate words array
//  - Declare word and set it to current string at index-i split into an array of single chars
//      - Use split() method to split string into single chars
//  - Declare left ans set it to 0
//  - Declare right and set it ot length of current string at index-i, minus 1 (lest index of string)
// 3. Use nested for loop to create loop, incrementing by 1 until half of word length is reached
//  - If left is not equal to right, perform the following
//      - Declare a and set it to value of word at index-left
//      - Declare b and set it to value of word at index-right
//      - Set value of word at index-left to b
//      - Set value of word at index-right to a
//      - Increment left by 1
//      - Decrement right by 1
//  - When loop ends, set value of words at index-i equal to word converted to string
//  - Use join() method to convert word array to string
// 4. When outer for loop is complete, return words converted to string with whitespace's
//  - Use join() to join values in words array with whitespace (" ") in between