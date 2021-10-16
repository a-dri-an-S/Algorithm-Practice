// For two strings s and t, we say "t divides s" if and only if s = t + ... + t  (t concatenated with itself 1 or more times)
// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

var greatestCommonDivisor = (str1, str2) => {
    let prefix = "";
    let prefixes = ['']
    
    for (let i = 0; i < str1.length; i++) {
        prefix += str1[i]
        const one = str1.split(prefix).filter(val => val !== '');
        const two = str2.split(prefix).filter(val => val !== '')
        
        if (one.length === 0 && two.length === 0) {
            prefixes.push(prefix)
        }
    }
    
    return prefixes.sort((a, b) => b.length - a.length)[0]
};

// 1. Declare prefix and set it to an empty string
// 2. Declare prefixes and set it to an array an empty "" as the value
// 3. Use for loop to iterate through str1
// 4. Set prefix equal to itself + current char in str1 (str1[i])
// 5. Declare one and set it to an array based on the following conditions
//  - Split str1 via split() method by current prefix string
//  - Filter out any strings that are not empty strings via filter method
// 6. Declare two and set it to an array based on the following conditions
//  - Split str2 via split() method by current prefix string
//  - Filter out any strings that are not empty strings via filter method
// 7. If both one & two are empty arrays (length === 0), push current prefix into prefixes array
// 8. Sort prefixes in descending order with sort() method and return value at index 0