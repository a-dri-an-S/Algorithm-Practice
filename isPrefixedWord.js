// Given a sentence that consists of some words separated by a single space, and a searchWord, check if searchWord is a prefix of any word in sentence.
// Return the index of the word in sentence (1-indexed) where searchWord is a prefix of this word. If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1.
// A prefix of a string s is any leading contiguous substring of s.

const isPrefixOfWord = (sentence, searchWord) => {
    const arrWords = sentence.split(" ")
    for (let i = 0; i < arrWords.length; i++) {
        if (searchWord === arrWords[i].slice(0, searchWord.length)) {
            return i + 1;
            break;
        }
    }
    return -1;
};

// 1. Declare arrWords and set it to an array of words via split, sentence split at the spaces
// 2. User for loop to iterate through arrWords array
// 3. If searchWord is equal to prefix (current arrWord sliced at 0 to length of search word)
// 4. Return index of word (1-indexed)
// 5. If no prefixed word exists, Return -1