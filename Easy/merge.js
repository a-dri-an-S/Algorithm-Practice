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

// TWO-POINTERS
const merge = function(nums1, m, nums2, n) {
    nums1.splice(m);
    let i = 0;
    let j = 0;
    
    while (m+n > 0) {
        if (nums2[j] <= nums1[i]) {
            nums1.splice(i, 0, nums2[j]);
            j++;
            i++;
            n--;
        } else {
            i++;
            m--;
        }
    }
    
    while (n > 0) {
        nums1.splice(i, 0, nums2[j]);
        j++;
        n--;
    }
};

// 1. Remove value of nums1 array starting at index-m to end of array
//  - Use splice() method to remove values starting at index-m
// 2. Declare i and j and set both to 0
// 3. While sum of m and n is greater than 0, perform the following:
// 4. If value at index-j of nums2 (nums2[j]) is less than or equal to value at index-i of nums1 (nums1[j]):
//  - Add nums2[j] at index-i to nums1 array
//      - Use splice() method to add nums2[j] at index-i to nums1 array
//  - Increment i and j by 1
//  - Decrement n by 1
// 5. Else:
//  - Increment i by 1
//  - Decrement m by 1
// 6. While n is greater than 0
//  - Add nums2[j] at index-i to nums1 array
//      - Use splice() method to add nums2[j] at index-i to nums1 array
//  - Increment j by 1
//  - Decrement n by 1
