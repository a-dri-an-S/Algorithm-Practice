// Given a string s and an array of strings words, determine whether s is a prefix string of words.
// A string s is a prefix string of words if s can be made by concatenating the first k strings in words for some positive k no larger than words.length.
// Return true if s is a prefix string of words, or false otherwise.

const isPrefixString = (s, words) => {
    let str = ""
    let ans = false;
    for (let word of words) {
        str += word
        if (str === s) {
            ans = true
        }
    }
    return ans
};

// 1. Declare str and set it to an empty string
// 2. Declare ans and set it to false
// 3. Use for loop to iterate through words array
// 4. Add (concat) current word to str
// 5. Is str is equal to s, set ans equal to true
// 6. Return ans