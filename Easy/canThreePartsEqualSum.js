// Given an array of integers arr, return true if we can partition the array into three non-empty parts with equal sums.

// Formally, we can partition the array if we can find indexes i + 1 < j with (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1])

const canThreePartsEqualSum = function(arr) {
    let leftSum = 0;
    let rightSum = arr.reduce((a, b) => a + b, 0);
    
    for (let i = 0; i < arr.length - 1; i++) {
        leftSum += arr[i];
        rightSum -= arr[i];
        const rightSums = rightSum / 2;
        
        if (leftSum === rightSums) {
            const subArr = arr.slice(i + 1);
            let subLeftSum = 0;
            let subRightSum = subArr.reduce((a, b) => a + b, 0);
            
            for (let j = 0; j < subArr.length - 1; j++) {
                subLeftSum += subArr[j];
                subRightSum -= subArr[j];
                
                if (subLeftSum === subRightSum) return true;
            }
        }
    }
    return false;
};

// 1. Declare leftSum and set it 0
// 2. Declare rightSum and set it to sum of all numbers in arr
//  - Use reduce() method to sum all elements together
// 3. Use a for loop to iterate through arr until 2nd to last element is reached
//  - Set leftSum equal current element added to leftSum
//  - set rightSum equal to current element subtracted from rightSum
//  - Declare rightSums and set it equal to rightSum divided by 2
//  - If leftSum is equal to rightSums, perform the following:
//      - Declare subArr and set it to subarray 1 index over from current
//          - Use slice() method to extract subarray from arr
//      - Declare subLeftSum and set it to 0
//      - Declare subRightSum and set it to sum of all numbers in subArr
//          - Use reduce() method to sum all elements together
//      - Use for loop to iterate through subArr until 2nd to last element is reached
//          - Set subLeftSum equal current element added to subLeftSum
//          - set subRightSum equal to current element subtracted from subRightSum
//          - If subLeftSum is equal to subRightSum, return true
// 4. If all loops end and no conditions are met, return false
