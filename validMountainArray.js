// Given an array of integers arr, return true if and only if it is a valid mountain array.
// Recall that arr is a mountain array if and only if:
//     arr.length >= 3
//     There exists some i with 0 < i < arr.length - 1 such that:
//         arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
//         arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

const validMountainArray = function(arr) {
    let asc  = true;
    let desc = false;
    const peak = Math.max(...arr);
    
    if (arr.length < 3) return false;
    if (arr[0] === peak) return false;
    if (arr[arr.length - 1] === peak) return false;
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === peak) {
            asc = false;
            desc = true;
        }
        if (arr[i] < arr[i+1] && !asc) {
            return false;
        }
        if ( arr[i] > arr[i + 1] && !desc) {
            return false;
        }
        if (arr[i] === arr[i + 1]) {
            return false;
        }
    }
    
    return true;
};

// 1. Declare asc and set it to true
// 2. Declare desc and set it to false
// 3. Declare peak and set it to largest integer in arr array via Math.max() function and deconstructing assignment to unpack values from array
// 4. If arr.length is less than 3, return false
// 5. If first value in array is equal to peak, return false
// 6. If last value in array is equal to peak, return false
// 7. Use for loop to iterate through arr array, incrementing by 1 until 2nd to last value is reached
// 8. If current value (i) is equal to peak
//  - Set asc equal to false
//  - Set desc equal to true
// 9. If current value (i) is less than next value (i + 1) & asc is false, return false
// 10 . If current value (i) is greater than next value (i + 1) & desc is false, return false
// 11. If current value (i) is equal to next value (i + 1), return false
// 12. If none of the above conditions are met, return true