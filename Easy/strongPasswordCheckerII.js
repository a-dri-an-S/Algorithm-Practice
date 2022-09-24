// A password is said to be strong if it satisfies all the following criteria:

//     It has at least 8 characters.
//     It contains at least one lowercase letter.
//     It contains at least one uppercase letter.
//     It contains at least one digit.
//     It contains at least one special character. The special characters are the characters in the following string: "!@#$%^&*()-+".
//     It does not contain 2 of the same character in adjacent positions (i.e., "aab" violates this condition, but "aba" does not).

// Given a string password, return true if it is a strong password. Otherwise, return false.

const strongPasswordCheckerII = function(password) {
    let ruleChecker = {
        "isLowerCase": false,
        "isUpperCase": false,
        "isDigit": false,
        "isSpecialChar": false
    };
    
    if (password.length < 8) {
        return false;
    }
    
    for (let i = 0; i < password.length; i++) {
        if (i !== 0 && password[i] === password[i - 1]) {
            return false;
        }
        
        if (/[a-z]/.test(password[i])) {
            ruleChecker["isLowerCase"] = true;
            
        } else if (/[A-Z]/.test(password[i])) {
            ruleChecker["isUpperCase"] = true;
            
        } else if (/[0-9]/.test(password[i])) {
            ruleChecker["isDigit"] = true;
            
        } else if (/[-!@#$%^&*()+]+/.test(password[i])) {
            ruleChecker["isSpecialChar"] = true;
            
        }
    }
    
    for (const bool of Object.values(ruleChecker)) {
        if (bool === false) {
            return false;
        }
    }
    
    return true;
};

// 1. Declare ruleChecker and set it to an object of key/value pairs equal to false
// 2. If password length is less than 8, return false
// 3. Use a for loop to iterate through password string
// 4. If current index-i is NOT EQUAL TO 0 AND char at index-i IS EQUAL TO char at index-i-1, return false

// 5. If char at current index-i is lower case, set "isLowerCase" key equal to true
//  - Use regex /[a-z]/ and test() method to check if char is lower case
// 6. If char at current index-i is upper case, set "isUpperCase" key equal to true
//  - Use regex /[A-Z]/ and test() method to check if char is upper case
// 7. If char at current index-i is a digit, set "isDigit" key equal to true
//  - Use regex /[0-9]/ and test() method to check if char is a digit
// 8. If char at current index-i is a special character, set "isSpecialChar" key equal to true
//  - Use regex /[-!@#$%^&*()+]+/ and test() method to check if char is upper case

// 9. Use for loop to iterate through values of ruleChecker object
//  - Use the Object.values() method to return the values in an array
// 10. If current element (bool) is EQUAL TO  false, return false
// 11. If all values in true, return true