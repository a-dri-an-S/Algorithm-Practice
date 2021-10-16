// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

const reverseWordsInString = s => {
    let words = s.split(" ");
    return words.map(word => word.split("").reverse().join("")).join(" ")
}

// 1. Split string into individual words via split and declare it to variable words
// 2. Map through array of words & perform the following to each word
  // - split words by letter
  // - reverse array of letters
  // - join back to string
// 3. Join array with space between each word