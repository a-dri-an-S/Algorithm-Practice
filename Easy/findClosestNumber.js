// Given an integer array nums of size n, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.

const findClosestNumber = function(nums) {
    nums.sort((a, b) => a - b);
    let closestZero = Infinity;
    let largestNum = -Infinity;
    
    for (const num of nums) {
        const abs = Math.abs(num);
        closestZero = Math.min(closestZero, abs);
        
        if (abs === closestZero) {
            largestNum = Math.max(largestNum, num);
        } else {
            break;
        }
    }
    
    return largestNum;
};

// 1. Sort nums array in ascending order
//  - Use the sort() method to sort array
// 2. Declare closestZero and set it to Infinity
// 3. Declare largestNum and set it to -Infinity
// 4. Use a for of loop to iterate through nums array
// 5. Declare abs and set it to the absolute value of current num of nums array
//  - Use Math.abs() function to get the absolute value
// 6. Set closestZero equal smallest integer between closestZero and abs
//  - Use Math.min() function to return smallest integer
// 7. If abs IS EQUALS TO closestZero, set largestNum equal to largest integer between largestNum and num
//  - Use Math.max() function to return largest integer
// 8. Else, break loop
// 9. After loop ends, return largestNum