// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Do not return anything, modify nums1 in-place instead.

var merge = function(nums1, m, nums2, n) {
    nums1.splice(m)
    nums2.splice(n)
    nums1.push(...nums2)
    nums1.sort((a, b) => a - b)
};

// 1. Splice m length from nums1 starting at index 0
// 2. Splice n length from nums2 starting at index 0
// 3. Push num2 deconstructed with spread operator to nums1 array with push() method
// 4. Sort nums1 array in ascending order with sort() method