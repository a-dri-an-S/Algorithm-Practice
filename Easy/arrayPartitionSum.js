// Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

const arrayPairSum = nums => {
    let sum = 0;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i += 2) {
        sum += Math.min(nums[i], nums[i + 1])
    }
    return sum;
}

// 1. Declare sum and set it to 0;
// 2. Sort nums in ascending order
// 3. Use for loop to iterate through array and move in multiples of 2, (move by pair)
// 4. add smallest # of the pair to sum via Math.min
// 5. return sum