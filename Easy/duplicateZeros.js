// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.
// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

const duplicateZeros = function(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0)
            arr.pop()
            i++
        }
    }
};

// 1. Use for loop to iterate through arr array
// 2. If current element (arr[i]) is equal to 0, add a 0 at i+1 via splice() method
// 3. Remove 1 element at the end of arr with pop() method and increment i by 1