// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

const repeatedSubstringPattern = (s) => {
    
    if (s.length === 1) return false
    
    for (let i = 0; i < s.length / 2; i++) {
        const sub = s.slice(0, i + 1)
        const splitStr = s.split(sub)
        .filter(el => el !== '')
        .length
        if (splitStr === 0) {
            return true
        }
    }
    return false
};

// 1. If length of s is equal to 1, return false
// 2. Use for loop to iterate through half of "s" string, incrementing by 1
// 3. Declare sub and set it to a substring of s via slice() w/ index starting at 0 and ending a i + 1
// 4. Declare splitStr and set it an integer based off of the following conditions
//  - Split s via split() method at every sub
//  - Filter out all empty strings via filter() method
//  - Get length of filtered array as an integer with .length property
// 5. If splitStr is equal to 0, return true
// 6. If no conditions are met, return false