// Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

const  findSpecialInteger = (arr) => {
    let count = 0;
    let maxNum = 0;
    let maxPercent;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            maxNum = Math.max(count, maxNum)
            if (maxNum === count) {
                maxPercent = arr[i]
            }
            count = 0
        } else {
            count++
        }
    }
    
    return maxPercent
};


// 2. Declare maxPercent without setting any value
// 3. Declare maxNum & count and set them both to 0
// 4. Use for loop to iterate through arr array
// 5. If current num is not equal to next num (on the right), perform the following
//  - Set maxNum equal to largest number between count and maxNum via Math.max method
//  - If maxNum is equal to current count, set maxPercent to current num
//  - Reset count to 0
// 6. Else, increment count by 1
// 7. Return maxPercent