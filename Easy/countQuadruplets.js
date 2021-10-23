// Given a 0-indexed integer array nums, return the number of distinct quadruplets (a, b, c, d) such that:
//     nums[a] + nums[b] + nums[c] == nums[d], and
//     a < b < c < d

const countQuadruplets = function(nums) {
    let count = 0;
    
    for (let a = 0; a < nums.length; a++) {
        for (let b = a + 1; b < nums.length; b++) {
            for (let c = b + 1; c <nums.length; c++) {
                for (let d = c + 1; d < nums.length; d++) {
                    if (nums[a] + nums[b] + nums[c] === nums[d]) {
                        count++
                    }
                }
            }
        }
    }
    
    return count;
};

// 1. Declare count and set it to 0
// 2. Use for loop and iterate through nums array, starting at index-0, incrementing by 1
// 3. Use a nested for loop and iterate through nums array, starting at index-1, incrementing by 1
// 4. Use a nested for loop and iterate through nums array, starting at index-2, incrementing by 1
// 5. Use a nested for loop and iterate through nums array, starting at index-3, incrementing by 1
// 6. If sum of nums[index-a] nums[index-b] & nums[index-c] is equal to nums[index-d], increment count by 1
// 7. When loops are all complete, return count