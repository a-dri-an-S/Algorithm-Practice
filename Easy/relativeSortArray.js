// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.
// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

const relativeSortArray = (arr1, arr2) => {
    let newArr1 = arr2.map(num => arr1.filter(n => n === num)).flat();
    let newArr2 = arr1.filter(n => !arr2.includes(n)).sort((a, b) => a - b);

    return newArr1.concat(newArr2);
}

// 1. Declare newArr1 and set it to array that includes all numbers in arr2
//  - Map through arr2 and filter every number out of arr1 found in arr2 into sub arrays, flatten array
// 2. Declare newArr2 and set it to every number that is not included in arr2
//  - Filter numbers out of arr1 that are not included in arr2 and sort in ascending order
// 3. return concatenation of newArr1 and newArr 2