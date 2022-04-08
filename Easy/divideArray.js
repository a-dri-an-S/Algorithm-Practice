// You are given an integer array nums consisting of 2 * n integers.

// You need to divide nums into n pairs such that:

//     Each element belongs to exactly one pair.
//     The elements present in a pair are equal.

// Return true if nums can be divided into n pairs, otherwise return false.

const divideArray = function(nums) {
    nums.sort((a, b) => a - b);
    let pairs = nums.length / 2;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            i++;
            pairs--;
        }
    }
    
    return pairs === 0;
};

// 1. Sort num in ascending order
//  - Use sort() method to sort array
// 2. Declare pairs and set it length of nums divided by 2
//  - Use length property to get element count of nums array
// 3. Use for loop to iterate though nums array
//  - If current value of nums IS EQUAL TO next value of nums, perform the following:
//      - Increment i by 1
//      - Decrement pairs by 1
// 4. If pairs is equal to 0, return true, else return false