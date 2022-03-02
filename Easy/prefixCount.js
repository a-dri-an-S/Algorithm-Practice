// You are given an array of strings words and a string pref.
// Return the number of strings in words that contain pref as a prefix.
// A prefix of a string s is any leading contiguous substring of s.

const prefixCount = function(words, pref) {
    let count = 0;
    let check = false;
    
    for (const word of words) {
        for (let i = 0; i < pref.length; i++) {
            if (word[i] !== pref[i]) {
                check = false;
                break;
            } else {
                check = true;
            }
        }
        if (check === true) {
            count++
        }
    }
    return count;
};

// 1. Declare count and set it to 0
// 2. Declare check and set it to false
// 3. Use for loop to iterate through words array
// 4. Use nested for loop to iterate through pref string
//  - If character of current word at index-i is NOT EQUAL to character of pref at current index-i, perform the following:
//      - Set check equal to false
//      - Break loop
//  - Else, set check equal to true
// 5. After nested loop runs, if check IS EQUAL to true, increment count by 1
// 6. After loop ends, return count

// USING SUBSTR TO EXTRACT STRING

const prefixCount = function(words, pref) {
    let count = 0;
    let i = 0;
    
    while (idx < words.length) {
        if (words[i].substr(0, pref.length) === pref) {
            count++;
        }
        i++;
    }
    
    return count;
};

// 1. Declare count and idx and set both to 0
// 2. Use while loop to create loop while idx < words.length
//  - If prefix of current word at index-i IS EQUAL to pref, increment count by 1
//      - Use substr to get prefix of word, starting at index-0, with length matching length of pref
//  - Increment i by 1
// 3. When while loop ends, return count