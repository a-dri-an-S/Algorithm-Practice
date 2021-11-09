// Given an array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.
// Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length.
// The tests are generated such that there is exactly one solution. You may not use the same element twice.

var twoSum = (numbers, target) => {
    let arr = []
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                arr.push(i + 1, j + 1);
                break;
            }
        }
    }
    return arr
};

// 1. Declare arr and set it to an empty array
// 2. Use for loop to iterate through numbers array
// 3. Use nested for loop to iterate through numbers array starting at index i + 1
// 4. If sum of numbers[i] & numbers[j] is equal to target value, push current i+1 and current j+1 and break
// 5. Return arr

// Two-Pointers

const twoSum = function(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        const left = numbers[i];
        
        for (let j = i + 1; j < numbers.length; j++) {
            const right  = numbers[j];
            
            if ((left + right) === target) {
                return [(i + 1), (j + 1)];
            }
        }
    }
};

// 1. Use for loop to iterate through numbers array
//  - Declare left and set it to value at index-i of numbers array
// 2. Use nested for loop to iterate through numbers array starting at index-i + 1
//  - Declare right and set it to value at index-j of numbers array
//  - If sum of left and right is equal to target:
//  - Return array with value index-0 equal to index-i + 1 and value at index-1 equal to index-j + 1 (index-left, index-right)