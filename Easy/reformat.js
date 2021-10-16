// Given alphanumeric string s. (Alphanumeric string is a string consisting of lowercase English letters and digits).
// You have to find a permutation of the string where no letter is followed by another letter and no digit is followed by another digit. That is, no two adjacent characters have the same type.
// Return the reformatted string or return an empty string if it is impossible to reformat the string.

const reformat = function(s) {
    const nums = s.replace(/[a-z]/g, "");
    const letters = s.replace(/[0-9]/g, "")
    let newString = "";
    
    if (Math.abs(nums.length - letters.length) > 1) {
        return ""

    } else {
        if (nums.length > letters.length) {
            for (let i = 0; i < letters.length; i++) {
                newString += (nums[i] + letters[i])
            }
            newString += nums[nums.length - 1]

        } else if (nums.length < letters.length) {
            for (let i = 0; i < nums.length; i++) {
                newString += (letters[i] + nums[i])
            }
            newString += letters[letters.length - 1]

        } else {
            for (let i = 0; i < nums.length; i++) {
                newString += (letters[i] + nums[i])
            }
        }
    }
    return newString
};

// 1. Declare nums and set to a string of only nums by finding letters a-z via regex and replacing them with "" via replace() method
// 2. Declare letters and set to a string of only letters by finding nums 0-9 via regex and replacing them with "" via replace() method
// 3. Declare newString and set it to an empty string
// 4. If nums or letters has more than one extra characters, return an empty string
// 5. Else, If nums has one more character than letters
//  - Use for loop to iterate through letters string
//  - Concat current num to current letter, and concat that to newString
//  - Concat the last num to newString
// 6. Else, If letters has one more character than nums
//  - Use for loop to iterate through nums string
//  - Concat current letter to current num, and concat that to newString
//  - Concat the last letter to newString
// 7. Else, If letters and nums have same amount of characters
//  - Use for loop to iterate through nums string
//  - Concat current letter to current num, and concat that to newString
// 8. Return newString