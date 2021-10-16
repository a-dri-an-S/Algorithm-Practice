const lengthOfLastWord = function(s) {
    const arr = s.split(" ").filter(el => el !== '');
    return arr[arr.length - 1].length
};

// 1. Declare arr and set it to an array of words extracted from "s" string
//  - Use split() method to split string at the " "
//  - Use filter() method to filter out all the empty ""
// 2. Return number of letters in last string
//  - Get word at last index of arr array and use length to return number of letters