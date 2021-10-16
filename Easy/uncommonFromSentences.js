// A sentence is a string of single-space separated words where each word consists only of lowercase letters.
// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
// Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

const uncommonFromSentences = function(s1, s2) {
    const arrWords = (s1 + " " + s2).split(" ")
    let counts = {};
    arrWords.forEach(word => {
        if (counts[word] === undefined) {
            counts[word] = 0
        }
        counts[word]++
    })
    return Object.entries(counts)
        .filter(arr => arr[1] === 1)
        .flat()
        .filter(i => i !== 1)
}

// 1. Declare arrWords and set it to s1 and s2 set to single string and split into an array
//  - Concat s1 to s1 with " " in between and split with split method at every " "
// 2. Declare counts and set it to an empty object
// 3. Iterate through arr words via forEach method
// 4. If word is not in counts object, declare it within counts object and set it to 0
// 5. Increment current word by 1 inside of counts object
// 6. Extract words and counts via Object.entries method
// 7. Filter all counts from array that are equal to 1 via filter method
// 8. Remove arrays at 1 depth with flat method
// 9. Filter out values that are not equal to 1 and return array of uncommon words