// You are given a 0-indexed integer array nums and two integers key and k. A k-distant index is an index i of nums for which there exists at least one index j such that |i - j| <= k and nums[j] == key.

// Return a list of all k-distant indices sorted in increasing order.

const findKDistantIndices = function(nums, key, k) {
    let jIdx = [];
    let kDistantIdxs = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === key) {
            jIdx.push(i);
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        for (const j of jIdx) {
            const abs = Math.abs(i - j);
            if (abs <= k) {
                kDistantIdxs.push(i);
                break;
            }
        }
    }
    
    return kDistantIdxs
};

// 1. Declare jIdx & kDistantIdxs and set them to both to an empty array
// 2. Use a for loop to iterate through nums array
//  - If value at index-i is equal to key, append i to jIdx array
//      - Use push() to append array
// 3. Use for loop to iterate through nums array
// 4. Use a nested for loop to iterate through jIdx
//  - Declare abs and set it to absolute value between index-i and index-j
//      - Use Math.abs to get absolute value
//  - If abs is less than or equal to k, append index-i to kDistantIdxs and break
//      - Use push() to append to array
// 5. After loops end, return kDistantIdxs
