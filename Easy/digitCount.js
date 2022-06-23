// You are given a 0-indexed string num of length n consisting of digits.
// Return true if for every index i in the range 0 <= i < n, the digit i occurs num[i] times in num, otherwise return false.

const digitCount = function(num) {
    let arr = [];
    
    for (const n of num) {
        if (arr[n] === undefined) {
            arr[n] = 1;
        } else {
            arr[n] += 1;
        }
    }
    
    for (let i = 0; i < num.length; i++) {
        if (num[i] != arr[i] && num[i] !== "0") {
            return false
        } else if (num[i] === "0" && arr[i] !== undefined) {
            return false;
        }
    }
    
    return true;
};

// 1. Declare arr and set it to an empty array
// 2. Use a for loop to iterate through num string
// 3. If current char (n) as index of arr is equal to undefined, set that index of arr to 1
// 4. Else, increment index-n of arr by 1
// 5. Use a separate for loop to iterate through num a 2nd time
// 6. If index-i of num IS NOT EQUAL TO index-i of arr AND index-i of num IS NOT EQUAL TO "0", return false
// 7. Else if index-i of num IS EQUAL TO "0" AND index-i of arr IS NOT EQUAL TO undefined, return false
// 8. If no conditions are met and loop ends, return true