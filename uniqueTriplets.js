// A string is good if there are no repeated characters.
// Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.
// Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

const uniqueTriplets = s => {
    let tripletCount = 0;
    for (let i = 0; i < s.length; i++) {
        if ([...new Set(s.slice(i , 3 + i))].length === 3) {
            tripletCount++
        }
    }
    return tripletCount;
}

// 1. Declare tripletCount and set it to 0
// 2. Use for loop to loop through s string
// 3. If triplet substring is all unique characters, increment count by 1
//  - Slice string at i and three spaces to the right
//  - Get unique characters of substring via Set and spread inside of an array
//  - Get length of unique substring and if equals to 3; increment tripletCount by 1
// 4. Return tripletCount  