// Given a binary string s ​​​​​without leading zeros, return true​​​ if s contains at most one contiguous segment of ones. Otherwise, return false.

var checkOnesSegment = function(s) {
    s = s.split('')
    let count = 0
    let maxCount = 0
    const onesCount = s.filter(el => el === '1').length
    
    s.forEach(el => {
        if (el === '1') {
            count++
            maxCount = Math.max(maxCount, count)
        } else {
            count = 0
        }
    })
    return maxCount === onesCount
};

// 1. Set s eqaul to itself split into an array via split() method
// 2. Declare count and maxCount and set both equal to 0
// 3. Declare onesCount and set it to the number of 1's in s array
//  - Use filter to filter out all the 1's and length to return number of 1's in filtered array
// 4. Use forEach to iterate through s array
// 5. If current el is equal to '1'
//  - Increment count by 1
//  - set maxCount equal to largest number between itself and count via Math.max() function
// 6. Else, set count to 0
// 7. If maxCount is equal to onesCount, return true, else return false