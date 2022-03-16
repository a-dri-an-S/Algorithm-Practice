// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

// You should rearrange the elements of nums such that the modified array follows the given conditions:

//     Every consecutive pair of integers have opposite signs.
//     For all integers with the same sign, the order in which they were present in nums is preserved.
//     The rearranged array begins with a positive integer.

// Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

const rearrangeArray = function(nums) {
    const neg = nums.filter(num => num < 0);
    const pos = nums.filter(num => num > 0);
    const arr = [];
    
    while (neg.length > 0 && pos.length > 0) {
        arr.push(pos.shift());
        arr.push(neg.shift());
    }
    
    return arr;
};

// 1. Declare neg and set it to all the negative integers in nums array
//  - Use the filter method to filter out all the integers that are less than 0
// 2. Declare pos and set it to all the positive integers in nums array
//  - Use the filter method to filter out all the integers that are greater than 0
// 3. Declare arr and set it to an empty array
// 4. Use a while loop to create loop while length of neg and pos are greater than 0
//  - Append element at index-0 of pos to arr
//      - Use the shift() method to remove the element at index-0
//      - Use the push() method to append to arr
//  - Append element at index-0 of neg to arr
//      - Use the shift() method to remove the element at index-0
//      - Use the push() method to append to arr
// 5. When loop ends, return arr
