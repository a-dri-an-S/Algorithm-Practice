// A sequence of numbers is called arithmetic if it consists of at least two elements, and the difference between every two consecutive elements is the same. More formally, a sequence s is arithmetic if and only if s[i+1] - s[i] == s[1] - s[0] for all valid i.
// You are given an array of n integers, nums, and two arrays of m integers each, l and r, representing the m range queries, where the ith query is the range [l[i], r[i]]. All the arrays are 0-indexed.
// Return a list of boolean elements answer, where answer[i] is true if the subarray nums[l[i]], nums[l[i]+1], ... , nums[r[i]] can be rearranged to form an arithmetic sequence, and false otherwise

const checkArithmeticSubarrays = function(nums, l, r) {
    const bools = [];
    
    for (let i = 0; i < l.length; i++) {
        const subArr = nums.slice(l[i], r[i] + 1);
        let difference = [];
        subArr.sort((a, b) => a - b);
        
        for (let j = 0; j < subArr.length - 1; j++) {
            const diff = subArr[j + 1] - subArr[j];
            difference.push(diff);
        }
        
        difference = [...new Set(difference)];
        
        if (difference.length === 1) {
            bools.push(true)
        } else {
            bools.push(false);
        }
    }
    return bools;
};

// 1. Declare bools and set it to an empty array
// 2. Use for loop to iterate through l array
// 3. Declare subArr and set it to a subarray of nums starting at index-l and ending at index-r
//  - Use slice to extract subarray at given positions
// 4. Declare difference and set it to an empty array 
// 5. Use sort() method to sort subarray in ascending order
// 6. Use nested for loop to iterate through subarray array
// 7. Declare diff and set it to the difference between value at index-j+1 and value at index-j of subArr array
// 8. Append diff to difference array with push() method
// 9. After nested loop ends, set difference equal to unique values in difference
// - use Set() constructor to obtain unique values of difference array
//  - use spread syntax to unpack unique values into an empty array
// 10. If difference has only 1 unique value (length equal to 1), return true, else return false
// 11. After loop ends, return bools