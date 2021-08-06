// You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.
// A row i is weaker than a row j if one of the following is true:
//     The number of soldiers in row i is less than the number of soldiers in row j.
//     Both rows have the same number of soldiers and i < j.
// Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

const KWeakestRows = (mat, k) => mat.map((arr, i) => [i, arr.reduce((a, b) => a + b)])
    .sort((a, b) => a[1] - b[1])
    .splice(0, k)
    .map(arr => arr[0]);

// 1. Iterate through mat with map method and modify w/ new subarray containing [index, sum of subarray], sum via reduce method
// 2. Sort through modified array, sorting sums in subarray in ascending order
// 3. Splice the first kth subarrays
// 4. Modify once more with map to include only the indices of array
// 5. Returns array of indices, weakest rows in matrix