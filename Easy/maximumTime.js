// You are given a string time in the form of hh:mm, where some of the digits in the string are hidden (represented by ?).
// The valid times are those inclusively between 00:00 and 23:59.
// Return the latest valid time you can get from time by replacing the hidden digits.

const maximumTime = function(time) {
    time = [...time];
    
    if (time[4] === "?") {
        time[4] = '9';
    }
    if (time[3] === "?") {
        time[3] = '5';
    }
    if (time[1] === "?") {
        if (time[0] < 2) {
            time[1] = '9';
        } else {
            time[1] = '3';
        }
    }
    if (time[0] === "?") {
        if (time[1] < 4) {
            time[0] = '2';
        } else {
            time[0] = '1';
        }
    }

    
    return time.join('');
};

// 1. Set time equal to itself destructured into an array
//  - Use the spread syntax to destructure time string
// 2. If value at index-4 is equal to "?", set the value at index-4 to '9'
// 3. If value at index-3 is equal to "?", set the value at index-3 to '5'
// 4. If value at index-1 is equal to "?", check for the following:
//  - If value at index-0 is less than 2, set the value at index-1 to '9'
//  - Else, set the value at index-1 to '3'
// 5. If value at index-0 is equal to "?", check for the following:
//  - If value at index-1 is less than 4, set the value at index-0 to '2'
//  - Else, set the value at index-0 to '1'
// 6. Return time array converted to string
//  - Use join('') to concat chars to string