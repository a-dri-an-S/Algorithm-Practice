// Given an array of integers nums, half of the integers in nums are odd, and the other half are even.
// Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.
// Return any answer array that satisfies this condition.

const sortArrayByParityII = function(nums) {
    let sorted = [];
    let even = nums.filter(i => i % 2 === 0);
    let odd = nums.filter(i => i % 2 !== 0);
    for (let i = 0; i < nums.length / 2; i++) {
        sorted.push(even[i]);
        sorted.push(odd[i]);
    }
    return sorted;
};

// 1. Declare sorted and set it to an empty array
// 2. Declare even and set it to all the even numbers via the filter array method
//  - If i % 2 has no remainder, filter
// 3. Declare odd and set it to all the odd numbers via the filter array method
//  - If i % 2 has a remainder, filter
// 4. Use for loop to increment by 1 until i is equal to half of nums array
// 5. In for loop, push even[i] & push odd[i]
// 6. Return sorted array by alternating even and odd