// Given a list of strings words and a string pattern, return a list of words[i] that match pattern. You may return the answer in any order.
// A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we get the desired word.
// Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.

const findAndReplacePattern = function(words, pattern) {
    let arr = [];
    let patternArr = [];
    
    let num = 1;
    for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] >= num.toString()) {
            pattern = pattern.replaceAll(pattern[i], num.toString());
            num++;
        }
    }
    
    for (let i = 0; i < words.length; i++) {
        let num = 1;
        let word = words[i];
        for (let j = 0; j < word.length; j++) {
            if (word[j] >= num.toString()) {
                word = word.replaceAll(word[j], num.toString());
                num++;
            }
        }
        arr.push([words[i], word]);
    }
    
    for (const sub of arr) {
        if (sub[1] === pattern) {
            patternArr.push(sub[0]);
        }
    }
    
    return patternArr;
};