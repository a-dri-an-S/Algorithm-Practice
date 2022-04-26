// Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers, return the list of integers that are present in each array of nums sorted in ascending order. 

const intersection = function(nums) {
    let arr = [];
    const uniqueNums = [...new Set(nums.flat())];
    
    for (const num of uniqueNums) {
        let containsNum = true;
        
        for (const subArr of nums) {
            if (!subArr.includes(num)) {
                containsNum = false;
                break;
            }
        }
        if (containsNum) {
            arr.push(num);
        }
    }
    return arr.sort((a, b) => a - b);
};

// 1. Declare arr and set it to an empty array
// 2. Declare uniqueNums and set it to an array of all unique integers in nums array
//  - Use flat() method to remove all subarrays at 1-depth
//  - Use Set object to return all unique integers in flattened nums array
//  - Use the spread syntax to unpack Set object into an empty array
// 3. Use a for of loop to iterate through uniqNums array
// 4. Declare containsNum and set it to true value
// 5. Use a nested for of loop to iterate through nums array
// 6. If subArr DOESN'T INCLUDE current value of uniqueNums (num), set containsNum equal to false and break loop
// 7. After nested for loop runs, if containsNum is true, append num to arr
//  - Use the push() method to append arr array
// 8. After top loop ends return arr, sorted in ascending order
//  - Use the sort() method to sort arr in ascending order
