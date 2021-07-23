// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

const shuffle = (nums, n) => {
    let shuffArr = [];
    for (let i = 0; i < n; i++) {
        shuffArr.push(nums[i])
        shuffArr.push(nums[i + n])
    }
    return shuffArr;
}; 

// 1. declare shuffArr as an empty array
// 2. loop through array using for loop to n index
// 3. push value at i index
// 4. push value at i + n index
// 5. return shuffArray 