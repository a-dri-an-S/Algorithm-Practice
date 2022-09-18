// You are given a 0-indexed string s consisting of only lowercase English letters, where each letter in s appears exactly twice. You are also given a 0-indexed integer array distance of length 26.

// Each letter in the alphabet is numbered from 0 to 25 (i.e. 'a' -> 0, 'b' -> 1, 'c' -> 2, ... , 'z' -> 25).

// In a well-spaced string, the number of letters between the two occurrences of the ith letter is distance[i]. If the ith letter does not appear in s, then distance[i] can be ignored.

// Return true if s is a well-spaced string, otherwise return false.

const checkDistances = function(s, distance) {
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
    for (let i = 0; i < alphabet.length; i++) {
        if (s.includes(alphabet[i])) {
            let indices = [];
            
            for (let j = 0; j < s.length; j++) {
                if (alphabet[i] === s[j]) {
                    indices.push(j);
                }
            }
            
            let currDistance = indices.reduce((a, b) => b - a, 0) - 1;
            
            if (distance[i] !== currDistance) {
                return false;
            }
        }
    }
        return true;
};

// 1. Declare alphabet and set it to an array filled with individuals letters of the alphabet in ascending order
// 2. Use a for loop to iterate through alphabet array (index-i)
// 3. If s string includes current letter of the alphabet (index-i), perform the following:
// 4. Declare indices and set it to an empty array
// 5. Use a nested for loop to iterate through s string (index-j)
// 6. If letter at index-i of alphabet is equal to letter at index-j of s, append index-j to indices array
//  - Use the .push() method to append index to array
// 7. Declare currDistance and set it to the distance between both integers in indices array
//  - Use the reduce method to subtract integer-a from integer-b
//  - Subtract 1 to get the distance
// 8. If integer at index-i IS NOT EQUAL TO currDistance, return false
// 9. If loop for loop ends without a return false, return true