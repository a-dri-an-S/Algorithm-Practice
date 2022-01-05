// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

const findKthLargest = (nums, k) => nums.sort((a, b) => b - a)[k - 1];

// 1. Sort nums in descending order
//  - Use sort() method to sort nums array
// 2. Return value at index k - 1 (since arrays are 0-indexed)