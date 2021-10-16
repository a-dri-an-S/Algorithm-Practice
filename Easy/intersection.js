// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

const intersection = (nums1, nums2) => {
    let arr = [];
    let set = new Set(nums2)
    
    for (let  i = 0; i < nums1.length; i++) {
        if (set.has(nums1[i])) {
            arr.push(nums1[i])
            set.delete(nums1[i])
        }
    }
    return arr;
};

// 1. Declare arr and set it to an empty array
// 2. Declare set and set it to unique nums2 elements in a set
// 3. Use for loop to iterate through nums1 array
// 4. If set has current nums1 element
//  - Push current nums1 element into arr
//  - Delete current nums1 element from set
// 5. Return arr