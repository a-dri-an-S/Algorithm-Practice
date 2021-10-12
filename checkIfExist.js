// Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).
// More formally check if there exists two indices i and j such that :
//     i != j
//     0 <= i, j < arr.length
//     arr[i] == 2 * arr[j]


const checkIfExist = function(arr) {
    let exists = false;
    
    for (let i = 0; i < arr.length; i++) {
        const N = arr[i];
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                const M = arr[j];
                const product = M * 2;
                if (product === N) {
                    exists = true;
                }
            }
        }
    }
    return exists;
};

// 1. Declare exists and set it to false
// 2. Use for loop to iterate through arr array
// 3. Declare N and set it to value at current index-i of arr array
// 4. Use nested loop to iterate through arr array a second time
// 5. If current index-i is equal to current index-j
//  - Declare M and set it value at current index-j of arr array
//  - Declare product and set it to M multiplied by 2
//  - If product is equal to N, set exists equal to true
// 6. Return exists
