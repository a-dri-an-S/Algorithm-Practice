// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it.

const generate = function(numRows) {
    const pascTri = [];
    
    for (let i = 1; i <= numRows; i++) {
        if (i === 1) {
            pascTri.push([1]);
            
        } else if (i === 2) {
            pascTri.push([1, 1]);    
            
        } else {
            const lastArr = pascTri[pascTri.length - 1];
            const arr = [1];
            
            for (let j = 0; j < lastArr.length - 1; j++) {
                const pair = lastArr.slice(j, j + 2);
                const sum = pair.reduce((a, b) => a + b, 0);
                arr.push(sum);
            }
            arr.push(1);
            pascTri.push(arr);
        }
    }
    return pascTri;
};

// 1. Declare pascTri and set it to an empty array
// 2. Use for loop to create loop that starts at 1 and increments by 1 until numRows is reached
// 3. If current-i is equal to 1, push [1] into pascTri array
// 4. Else If current-i is equal to 2, push [1, 1] into pascTri array
// 5. Else, perform the following:
// 6. Declare lastArr and set it to the last subarray in pascTri 
// 7. Declare arr and set it to an array with 1 at index-0
// 8. Use for loop to iterate through lastArr array until second to last element is reached
// 9. Declare pair and set it to a subarray of pairs in lastArr array via slice() method
// 10. Declare sum and set it to the sum of elements in subarray pair via reduce() method
// 11. Add sum to the end of arr array via push() method
// 12. Add 1 to the end of arr array via push() method
// 13. Add arr array to the end of pascTri array
// 14. Return pascTri array

