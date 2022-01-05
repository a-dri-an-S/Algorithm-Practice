// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

const topKFrequent = function(nums, k) {
    let counts = new Map();
    let ans = [];
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        
        if (counts.has(num)) {
            counts.set(num, counts.get(num) + 1);
        } else {
            counts.set(num, 1);
        }
    }
    
    counts = [...counts].sort((a, b) => b[1] - a[1]);
    
    for (let i = 0; i < k; i++) {
        ans.push(counts[i][0]);
    }
    
    return ans;
};

// 1. Declare counts and set it to an empty map object
//  - Use new Map() constructor to create a map object
// 2. Declare ans and set it to an empty array
// 3. Use a for loop to iterate through nums array
//  - Declare num and set it to current value (index-i)
//  - If counts has num, increment its value by 1
//      - Use has() method to check if counts contains specific key
//      - Use set() to add key/value pair to map object
//      - Use get() to get value of key in map object
//  - Else, add num as key with value of 1 to counts 
//      - Use set() to add key/value pair to map object
// 4. Set counts equal to itself, deconstructed into an empty array and sorted by its values in descending order
//  - Use spread syntax to deconstruct subarrays into an empty array
//  - Use sort() method to sort array
// 5. Use a for loop to create loop that loops k amount of times
//  - Append key of key/value pair to ans array
//      - Use push() method to append key to ans array
// 6. When loop ends, return ans