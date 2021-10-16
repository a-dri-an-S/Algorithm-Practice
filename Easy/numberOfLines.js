// You are given a string s of lowercase English letters and an array widths denoting how many pixels wide each lowercase English letter is. Specifically, widths[0] is the width of 'a', widths[1] is the width of 'b', and so on.
// You are trying to write s across several lines, where each line is no longer than 100 pixels. Starting at the beginning of s, write as many letters on the first line such that the total width does not exceed 100 pixels. Then, from where you stopped in s, continue writing as many letters as you can on the second line. Continue this process until you have written all of s.
// Return an array result of length 2 where:
//     result[0] is the total number of lines.
//     result[1] is the width of the last line in pixels.

const numberOfLines = (widths, s) => {
    const nums  = [...s].map(char => widths[char.charCodeAt() - 97]);
    let sum = 0;
    let line = 1;

    for (let num of nums) {
        if (sum <= 100) {
            sum += num;
        }
        if (sum > 100) {
            sum = num
            line++
        }
    }
    return [line, sum]
}

// 1. Declare nums and set it to an array full of pixel widths
//  - Spread string s in array and map through array
//  - For each char in nums array, get its charCode and subtract by 97, use that difference as an index to access pixel widths in widths array
// 2. Declare sum and set it to 0
// 3. Declare line and set it to 1
// 4. Use for loop to iterate through nums array
// 5. If sum is less than or equal to 100, increment sum by current num in array
// 6. If sum is greater than sum, set sum = to current num and increment line by 1
// 7. Return an array consisting of line and sum