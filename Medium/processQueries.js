// Given the array queries of positive integers between 1 and m, you have to process all queries[i] (from i=0 to i=queries.length-1) according to the following rules:
// In the beginning, you have the permutation P=[1,2,3,...,m].
// For the current i, find the position of queries[i] in the permutation P (indexing from 0) and then move this at the beginning of the permutation P. Notice that the position of queries[i] in P is the result for queries[i].
// Return an array containing the result for the given queries.

const processQueries = function(queries, m) {
    let answer = [];
    const arr = new Array(m).fill(0)
        .map((el, idx) => el = idx + 1);
    
    for (let i = 0; i < queries.length; i++) {
        
        for (let j = 0; j < arr.length; j++) {
            if (queries[i] === arr[j]) {
                answer.push(j);
                let el = arr.splice(j, 1)
                arr.splice(0, 0, ...el);
                break;
            }
        }
    }
    return answer;
};

// 1. Declare answer and set it to an empty array
// 2. Declare arr and set it to an array of integers from 1 - m, in increasing order
//  - Use new Array() constructor to create an array
//  - Use fill() method to fill array with 0's
//  - Use map() method to iterate and modify array by changing the elements to its index + 1
// 3. Use for loop to iterate through queries array
// 4. Use nested for loop to iterate through arr array
//  - If current value if queries at index-i is equal to current value of arr at index-j, perform the following:
//      - Append current index-j to arr array with push method
//      - Declare el and set it to value at index-j of arr and remove from array with splice() method
//      - Use splice() method to add 'el' back to to arr array at index-0
//      - break loop
// 5. When queries for loop is complete, return answer;