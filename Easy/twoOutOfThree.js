// Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.

var twoOutOfThree = function(nums1, nums2, nums3) {
    nums1 = [... new Set(nums1)];
    nums2 = [... new Set(nums2)];
    nums3 = [... new Set(nums3)];
    
    nums1 = nums1.concat(nums2.concat(nums3));
    
    let counts = {};
    
    for (const num of nums1) {
        if (counts[num] === undefined) {
            counts[num] = 0
        }
        counts[num]++
    }
    
    counts = Object.entries(counts)
        .filter(pairs => pairs[1] > 1)
        .map(pair => Number(pair[0]));
    
    return counts;
};

// 1 . Set nums1 equal to an array of unique values extracted from nums1 array
//  - Use new Set() tp obtain the unique values and the spead syntax to unpack them into an empty array
// 2 . Set nums2 equal to an array of unique values extracted from nums2 array
//  - Use new Set() tp obtain the unique values and the spead syntax to unpack them into an empty array
// 3 . Set nums3 equal to an array of unique values extracted from nums3 array
//  - Use new Set() tp obtain the unique values and the spead syntax to unpack them into an empty array
// 4. Set nums1 equal to nums2 concatenated to nums3 concatenated to nums1 array
// 5. Declare couts and set it to an empty array
// 6. Use for loop to iterate through nums1 array
//  - If key equal to current value in nums1 array in counts object is undefined (doesn't exist), add it to counts object and set its value to 0
//  - Increment current key in counts object by 1 
// 7. Set counts equal to the keys with values greater than 0
//  - Use Object.entries to convert object to an array of key-value pairs
//  - Use filter() method to filter out all the pairs with values that are greater than 1
//  - Use map to mutate array to only keys (values at index-0) converted to integers with Number() function
// 8. Return counts