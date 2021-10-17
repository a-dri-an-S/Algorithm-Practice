// The pair sum of a pair (a,b) is equal to a + b. The maximum pair sum is the largest pair sum in a list of pairs.
//     For example, if we have pairs (1,5), (2,3), and (4,4), the maximum pair sum would be max(1+5, 2+3, 4+4) = max(6, 5, 8) = 8.
// Given an array nums of even length n, pair up the elements of nums into n / 2 pairs such that:
//     Each element of nums is in exactly one pair, and
//     The maximum pair sum is minimized.
// Return the minimized maximum pair sum after optimally pairing up the elements.

const minPairSum = function(nums) {
    nums.sort((a, b) => a - b);
    const pairSums = [];
    
    while (nums.length > 0) {
        const numA = nums.shift();
        const numB = nums.pop();
        const sum = numA + numB;
        
        if (!pairSums.includes(sum)) {
            pairSums.push(sum);        
        }
    }
    
    return Math.max(...pairSums);
};

// 1. Sort nums array in ascending order with sort() method
// 2. Declare pairSums and set it to an empty array
// 3. Use while loop to create loop until nums contains 0 values (nums length > 0)
//  - Declare numA and set it to value at index-0 of nums array with shift() method
//  - Declare numB and set it to value at last index of nums array with pop() method
//  - Declare sum and set it to the sum between numA and numB
//  - If current sum is not included within pairSums array , append sum to pairSums array with push() method
// 4. Return largest number in pairSums 
//  - Use spread syntax to unpack pairSums array into Math.max to return largest sum