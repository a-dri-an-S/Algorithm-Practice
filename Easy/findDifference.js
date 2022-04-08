// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:
//     answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
//     answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

const findDifference = function(nums1, nums2) {
    nums1 = [...new Set(nums1)];
    nums2 = [...new Set(nums2)];
    const answer = [[],[]];
    
    for (const num of nums1) {
        if (!nums2.includes(num)) {
            answer[0].push(num)
        }
    }
    for (const num of nums2) {
        if (!nums1.includes(num)) {
            answer[1].push(num)
        }
    }
    
    return answer;
};

// 1. Set nums1 equal to an array of unique elements from nums1
//  - Use Set() object to get unique elements
//  - Use spread syntax to unpack Set into an empty array
// 2. Set nums2 equal to an array of unique elements from nums2
//  - Use Set() object to get unique elements
//  - Use spread syntax to unpack Set into an empty array
// 3. Declare answer and set it to an empty array, with 2 empty subarrays
// 4. Use a for of loop to iterate through nums1 array
//  - If nums2 DOESNT include current num, append num to subarray at index-0 of answer
//      - Use push() method to append to array
// 5. Use a for of loop to iterate through nums2 array
//  - If nums1 DOESNT include current num, append num to subarray at index-1 of answer
//      - Use push() method to append to array
// 6. Return answer