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

// HASHMAP SOLUTION

const intersect = function(nums1, nums2) {
    let hash = {};
    let arr = [];
    
    for (const num of nums1) {
        if (!hash[num]) {
            hash[num] = 0;
        }
        hash[num]++;
    }
    
    for (const num of nums2) {
        if (hash[num] > 0) {
            arr.push(num);
            hash[num]--;
        }
    }
    return arr;
};

// 1. Declare hash and set it to an empty object
// 2. Declare arr and set it to an empty array
// 3. Use for loop to iterate through nums1 array
//  - If current value (num) is not in hash object (is false), add num to hash and set its value to 0
//  - Increment num in hash by 1
// 4. Use for loop to iterate through nums2 array
//  - If value of current num in hash object is greater than 0
//      - Append num to arr array with push() method
//      - Decrement num is hash by 1
// 5. Return arr