// Given an array of integers arr, replace each element with its rank.
// The rank represents how large the element is. The rank has the following rules:
// Rank is an integer starting from 1.
// The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
// Rank should be as small as possible.

const arrayRankTransform = (arr) => {
    let newArr = [];
    const arrSorted = [...new Set([...arr])].sort((a, b) => a - b);
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arrSorted.length; j++) {
            if (arr[i] === arrSorted[j]) {
                newArr.push(j + 1)
            }
        }
    }
    return newArr
};

// 1. Declare newArr and set it to an empty array
// 2. Declare arrSorted and set it to unique characters in arr, sorted in ascending order
//  - Spread arr into new Set to make both a copy of arr and to extract all unique characters
//  - Sort new array in ascending order via sort method
// 3. Use for loop to iterate through arr array
// 4. Use nested for loop to iterate through arrSorted array
// 5. If arr at current i is equal to arrSorted at current j, push j + i (rank = index + 1)
// 6. Return newArr