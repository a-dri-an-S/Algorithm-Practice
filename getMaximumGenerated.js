// You are given an integer n. An array nums of length n + 1 is generated in the following way:
// nums[0] = 0
// nums[1] = 1
// nums[2 * i] = nums[i] when 2 <= 2 * i <= n
// nums[2 * i + 1] = nums[i] + nums[i + 1] when 2 <= 2 * i + 1 <= n
// Return the maximum integer in the array nums​​​.

const getMaximumGenerated = function(n) {
    let arr = []
    let count = 1
    
    for (let i = 0; i <= n; i++) {
        if (i === 0) arr.push(0)
        if (i === 1) arr.push(1)
        
        if (i % 2 === 0 && i !== 0) {
            arr.push(arr[count])
        } else if (i % 2 !== 0 && i !== 1){
            arr.push(arr[count] + arr[count + 1])
            count++
        }
    }
    return Math.max(...arr)
};

// 1. Declare arr and set it to an empty array
// 2. Declare count and set it to 1
// 3. Use for loop to create loop from 0 to n, incrementing by 1
// 4. If i is equal to 0, push 0 to arr
// 5. If i is equal to 1, push 1 to arr
// 6. If i is divisible by 2 and not 0, push arr[count] into arr array
//  - "count" is derived from 2 * count = i
// 7. If i is not divisible by 2 and not equal to 1, push arr[count, count + 1] into arr array and increment count by 1
// - "count" changes with every even number, why we increment by 1 after odd i's
// 8. return Max num in arr array with Math.max()function and spread operator, spreading arr array in Math.max