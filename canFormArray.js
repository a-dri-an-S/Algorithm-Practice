// You are given an array of distinct integers arr and an array of integer arrays pieces, where the integers in pieces are distinct. Your goal is to form arr by concatenating the arrays in pieces in any order. However, you are not allowed to reorder the integers in each array pieces[i].
// Return true if it is possible to form the array arr from pieces. Otherwise, return false.

const canFormArray = function(arr, pieces) {
    let sorted = [];
    let ans = true;
    
    for (const i in arr) {
        const int = arr[i];

        for (const j in pieces) {
            const sub = pieces[j];

            if (sub.includes(int)) {
                sorted.push(...pieces.splice(j, 1))
            }
        }
    }
    
    sorted = sorted.flat();
    
    for (const idx in arr) {
        if (arr[idx] !== sorted[idx]) {
            ans = false;
        }
    }
    
    return ans;
};

// 1. Declare sorted and set it to an empty array
// 2. Declare ans and set it to true
// 3. Use for loop to iterate through arr array
// 4. Declare int and set it to current value in arr array
// 5. Use nested for loop to iterate through pieces array
// 6. Declare sub and set it to current value in pieces array
// 7. If current sub includes current int push current pieces value to sorted array
//  - Use splice() function to remove current value in pieces array
//  - Push removed value to sorted array via push() method
// 8. Set sorted equal to itself flattened (sub-array elements concatenated into itself) by 1 depth via flat() method
// 9. Use for loop to iterate through arr array
// 10. If current value of arr array is not equal to current value of sorted array, set ans equal to false
// 11. Return ans