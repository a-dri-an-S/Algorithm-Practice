// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

const findMedianSortedArrays = function(nums1, nums2) {
    let arr = [...nums1, ...nums2].sort((a, b) => a - b);
    let median;
    
    if (arr.length % 2 !== 0) {
        median = arr[Math.floor(arr.length / 2)];
    } else {
        median = (arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2;
    }
    
    return median
};

// 1. Declare arr and set it to an array with nums1 and nums2 combined, sorted in ascending order
//  - Use the spread syntax to unpack both arrays into an empty array
//  - Use the sort method to sort the array in ascending order
// 2. Declare median
// 3. If length of arr is not divisible by 2, set median equal to the middle integer in arr
//  - Use length property to get element count
//  - Use modulo operator to check if length has a remainder after divided by 2 (checking for even or off element count)
//  - Use Math.floor() function to get the middle index of arr.length divided by 2
// 4. Else, set median equal the 2 middle integers in arr, summed and divided by 2
//  - Use the length property , divided by 2 to get the 2nd middle integer and subtract that by 1 to get the first middle integer
// 5. Return median