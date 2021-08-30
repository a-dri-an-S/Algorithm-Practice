// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

const intersect = (nums1, nums2) => {
    let arr = [];
    
    for (let n1 of nums1) {
        if (nums2.includes(n1)) {
            arr.push(n1)
            nums2.splice(nums2.indexOf(n1), 1)
        }
    }
    return arr
};

// 1. Declare arr and set it to an empty array
// 2. Use for loop to iterate through nums1 array
// 3. If current num is included inside of nums2 array
//  - Push current n1 into arr array
//  - Remove current n1 in nums2 via splice method by getting index of n1 inside of nums2
// 4. Return arr