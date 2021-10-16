// In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.
// Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.

const isAlienSorted = (words, order) => {
    let isLanguage = true;
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = 0; j < words[i].length; j++) {
            const current = order.indexOf(words[i][j]);
            const next = order.indexOf(words[i + 1][j]);
            if (current === next) {
                continue;
            } else if (current > next) {
                isLanguage = false;
                break;
            } else {
                break;
            }
        } 
    }
    return isLanguage;
};

// 1. Declare isLanguage and set it to true
// 2. Use for loop to iterate through words array, until 2nd to last value is reached
// 3. Use nest for loop to iterate through current word in words array
// 4. Declare current and set it to index of current char[j] in current word[i] in order string w/ indexOf method
// 5. Declare next and set it to index of current char[j] in next word[i + 1] in order string w/ indexOf method
// 6. If current index is equal to next index, continue
// 7. Else if, current index is greater than next index, set isLanguage to false and break;
// 8. Else if, current is less then next, break
// 9. Return isLanguage (boolean)