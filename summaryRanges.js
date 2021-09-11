// You are given a sorted unique integer array nums.
// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.
// Each range [a,b] in the list should be output as:
//     "a->b" if a != b
//     "a" if a == b


const summaryRanges = (nums) => {
    let subRange = [];
    let ranges = [];
    
    nums.forEach((num, i) => {
        if (num + 1 === nums[i + 1]) {
            subRange.push(num);
        } else if (num + 1 !== nums[i + 1]) {
            subRange.push(num);
            ranges.push(subRange)
            subRange = [];
        }
    })

    return ranges.map(range => {
        const min = Math.min(...range);
        const max = Math.max(...range);
        return min === max ? `${range[0]}` : `${min}->${max}`
    })
};

// 1. Declare subRange + ranges and set both to an empty array
// 2. Use forEach method to iterate through nums array
// 3. If current num + 1 is equal to next num (nums[i + 1]), push current num into subRange array
// 4. Else if, current num + 1 does not equal to next num
//  - Push current num to subRange array
//  - Push subRange into ranges array
//  - Set subRange array to an empty array 
// 5. Use map to iterate and modify ranges array to return the following:
//  - Declare min and set it to the smallest integer in range array w/ Math.min() function
//  - Declare max and set it to the largest integer in range array w/ Math.max() function
//  - If min is equal to max, return integer as string at 0-index in range array inside a template literal 
//  - Else, return "min->max" inside a template literal