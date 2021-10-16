// Given the array nums, obtain a subsequence of the array whose sum of elements is strictly greater than the sum of the non included elements in such subsequence. 
// If there are multiple solutions, return the subsequence with minimum size and if there still exist multiple solutions, return the subsequence with the maximum total sum of all its elements. A subsequence of an array can be obtained by erasing some (possibly zero) elements from the array. 
// Note that the solution with the given constraints is guaranteed to be unique. Also return the answer sorted in non-increasing order.

const minSubsequence = nums => {
    const sorted = nums.sort((a, b) => b - a);

    for (let i = 0; i < sorted.length; i++) {

        const minSub = sorted.slice(0, i + 1);
        const remainingSub = sorted.slice(i + 1, sorted.length)

        const minSubSum = minSub.reduce((a, b) => a + b, 0)
        const remainingSubSum = remainingSub.reduce((a, b) => a + b, 0)

        if (minSubSum > remainingSubSum) {
            return minSub
        }
    }
}

// 1. Declare sorted and set it to nums sorted in decreasing order
// 2. Use for loo]p to iterate through sorted array
// 3. Declare minSub and set it to slice of sorted array from index 0 - current index
// 4. Declare remainingSub and set it to slice of sorted array from current index to end of array
// 5. Declare minSubSum and set it to sum of minSub via reduce method
// 6. Declare remainingSubSum and set it to sum of remainingSub via reduce method
// 7. If minSubSum is greater than remainingSubSum, return minSub