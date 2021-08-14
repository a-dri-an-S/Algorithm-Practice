// Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false. 

const threeConsecutiveOdds = arr => {
    let ans = false;
    let count = 0;

    arr.forEach(num => {
        num % 2 !== 0 ? count++ : count = 0;
        count === 3 ? ans = true : null;
    })

    return ans
}

// 1. Declare ans and set it to false
// 2. Declare count and set it to 0
// 3. Iterate through arr array with forEach method to perform the following:
// 4. If num is not divisible by 2, increment count by 1, else set count to 0
// 5. If count is eu\qual to 3, set ans to true, else null
// 6. Return ans

