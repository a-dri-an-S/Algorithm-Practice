// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.
// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

const findShortestSubArray = function(nums) {
    const idxs = {};
    
    for (let i in nums) {
        if (idxs[nums[i]] === undefined) {
            idxs[nums[i]] = [];
        }
        idxs[nums[i]].push(Number(i) + 1);
    }
    
    const idxArr = Object.values(idxs);
    
    const degrees = idxArr.map(arr => {
        const length = arr.length;
        const min = Math.min(...arr);
        const max = Math.max(...arr);
        const deg = max - min + 1;
        return [deg, length];
    })
    
    degrees.sort((a, b) => a[0] - b[0])
    .sort((a, b) => b[1] - a[1]);
    
    return degrees[0][0];
    
};

// 1. Declare idxs and set it to an empty object
// 2. Use for loop to iterate through nums array
// 3. If if key nums[i] is not defined in idxs object, add it to idxs and set it to an empty array
// 4. Push current index + 1 to current nums[i] array in idxs object with push() method
// 5. Declare idxArr and set it to an array of values extracted from idxs object with Object.values() method
// 6. Declare degrees and set it to a modified idxArr with map() method
//  - Declare length and set it to current arr length
//  - Declare min and set it to smallest num in current arr with Math.min() function
//  - Declare max and set it to largest num in current arr with Math.max() function
//  - Declare deg and set it to max - min + 1
// 9. Sort degrees twice with sort() method
//  - 1st sort is in ascending order by value at 0-index in each subarray of degrees array
//  - 2nd sort is in descending order by at 1-index in each subarray of degrees array
// 10. Return value at index-0 of index-0 in degrees array, shortest length of 