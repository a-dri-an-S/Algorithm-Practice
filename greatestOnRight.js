// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
// After doing so, return the array.

const replaceElements = arr => {
    for (let i = 0; i <= arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                arr[i] = arr[j]
            }
        }
    }
    arr.shift();
    arr.push(-1)
    return arr;
}

// 1. loop through array, arr[i]
// 2. loop through array again starting at index 1, arr[j]
// 3. if arr[j] is greater than arr[i], set arr[i] = arr[j] **GREATEST ELEMENT TO THE RIGHT**
// 4. shift (remove) at index 0, push -1 to end of array
// 5. return array