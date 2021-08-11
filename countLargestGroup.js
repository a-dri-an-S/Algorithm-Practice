// Given an integer n. Each number from 1 to n is grouped according to the sum of its digits. 
// Return how many groups have the largest size.

const countLargestGroup = n => {
    let obj = {};
    for (let i = 1; i <= n; i++) {
        let sum = String(i).split("").reduce((a, b) => Number(a) + Number(b))
        if (obj[sum] === undefined) {
            obj[sum] = 0
        } else {
            obj[sum]++
        }
    }
    const vals = (Object.values(obj));
    return vals.filter(val => val === Math.max(...vals)).length
};

// 1. Declare obj and set it to an empty object
// 2. Use for loop to that increments by 1 up until n is reach to perform the following:
// 3. Declare sum and set it to the sum of its digits
//  - Place i into string, split string and get its sum with reduce method and converting chars to integers
// 4. If sum is not in obj (undefined), add it to obj and set it to 0
// 5. Else, increment sum in obj by 1
// 6. Declare vals and set it to all values in object in an array, via Object.values method
// 7. Return the length of max sum occurrences in vals array via filter method