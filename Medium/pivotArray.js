// You are given a 0-indexed integer array nums and an integer pivot. Rearrange nums such that the following conditions are satisfied:

//     Every element less than pivot appears before every element greater than pivot.
//     Every element equal to pivot appears in between the elements less than and greater than pivot.
//     The relative order of the elements less than pivot and the elements greater than pivot is maintained.
//         More formally, consider every pi, pj where pi is the new position of the ith element and pj is the new position of the jth element. For elements less than pivot, if i < j and nums[i] < pivot and nums[j] < pivot, then pi < pj. Similarly for elements greater than pivot, if i < j and nums[i] > pivot and nums[j] > pivot, then pi < pj.

// Return nums after the rearrangement.

const pivotArray = function(nums, pivot) {
    let lessThan = [];
    let moreThan = [];
    let pivotNum = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) {
            lessThan.push(nums[i]);
        }
        if (nums[i] > pivot) {
            moreThan.push(nums[i]);
        }
        if (nums[i] === pivot) {
            pivotNum.push(nums[i]);
        }
    }
    
    return [...lessThan, ...pivotNum, ...moreThan];
};

// 1. Declare lessThan, moreThan, pivotThan and set them all to an empty array
// 2. Use a for loop to iterate through nums array
//  - If element at index-i is less than pivot, append element to lessThan array
//      - Use push() method to append value
//  - If element at index-i is greater than pivot, append element to moreThan array
//      - Use push() method to append value
//  - If element at index-i is equal to pivot, append element to pivotNum array
//      - Use push() method to append value
// 3. Return array with lessThan, moreThan, pivotNum unpacked in that order
//  - Use the spread syntax to unpack arrays