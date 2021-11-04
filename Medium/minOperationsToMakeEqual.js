// You have an array arr of length n where arr[i] = (2 * i) + 1 for all valid values of i (i.e. 0 <= i < n).
// In one operation, you can select two indices x and y where 0 <= x, y < n and subtract 1 from arr[x] and add 1 to arr[y] (i.e. perform arr[x] -=1 and arr[y] += 1). The goal is to make all the elements of the array equal. It is guaranteed that all the elements of the array can be made equal using some operations.
// Given an integer n, the length of the array. Return the minimum number of operations needed to make all the elements of arr equal.

const minOperations = function(n) {
    let count = new Set();
    let arr = new Array(n).fill(0)
        .map((el, idx) => (2 * idx) + 1);
    
    let targetInt = arr[Math.floor(n/2)];
    if (n % 2 === 0) targetInt -= 1;
    
    for (const int of arr) {
        let diff = Math.abs(targetInt - int);
        count.add(diff)
    }
    
    return [...count].reduce((a, b) => a + b, 0);
};

// 1. Declare count and set it to an empty set
// 2. Declare arr and set it to an array where arr[i] = (2 * i) + 1
//  - Use new Array() constructor to create an array of n length
//  - Use fill() method to fill array with 0's
//  - Use map() method to iterate through the array so that each element is modified in the following way: (2 * idx) + 1
// 3. Declare targetInt and set it to the middle element in the arr array
//  - To find middle idx, divide n by 2 and use Math.floor() function to find the int that is less than or equal to quotient
//  - Use the result as an index to find the middle int in arr array
// 4. If n % 2 has a remainder of 0, subtract 1 from targetInt 
// 5. Use for loop to iterate through arr array
//  - Declare diff and set it the the absolute difference between current int (value in arr) and targetInt with the Math.abs() function
//  - Add diff to count set
// 6. Return the minimum operations to set all values equal
//  - Deconstruct (unpack) count values into an empty array with the spread syntax
//  - Use reduce function to sum all values in array
//  - Return sum