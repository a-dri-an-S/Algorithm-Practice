// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

const isAnagram = (s, t) => {
    const sSorted = s.split("").sort().join("");
    const tSorted = t.split("").sort().join("");
    return sSorted === tSorted
};

// 1. Declare sSorted and set it to s, split into an array, sorted alphabetically and joined back together as string
// 2. Declare tSorted and set it to t, split into an array, sorted alphabetically and joined back together as string
// 3. Return sSorted is equal to tSorted, if they contain same characters in same amount, return true, else false

