// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.
// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

const nextGreaterElement = (nums1, nums2) => {
    let arr = new Array(nums1.length).fill(-1);

    for (let i = 0; i < nums1.length; i++) {
        for (let j = nums2.indexOf(nums1[i]) + 1; j < nums2.length; j++) {
            if (nums2[j] > nums1[j]) {
                arr[i] = nums2[j];
                break;
            }
        }
    }
    return arr;
}

// 1. Declare arr and set it to an array with a length of nums1 filled with -1
// 2. Use a for loop to iterate through nums1, starting at index 0
// 3. Use a nested for loop to iterate nums2 starting one space to the right of current nums1 index
// 4. If if current num in nums2 is greater than current num in nums1
//  - set current index in arr set to current num in nums2 & break
// 5. Return arr