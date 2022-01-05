// You are given an integer array arr. You can choose a set of integers and remove all the occurrences of these integers in the array.

// Return the minimum size of the set so that at least half of the integers of the array are removed.

const minSetSize = function(arr) {
    const half = arr.length / 2;
    let length = arr.length;
    let counts = new Map();
    let removed = 0;
    
    for (const num of arr) {
        if (counts.has(num)) {
            counts.set(num, counts.get(num) + 1);
        } else {
            counts.set(num, 1);
        }
    }
    
    counts = [...counts].sort((a, b) => b[1] - a[1]);
    
    for (const count of counts) {
        length -= count[1];
        removed++;
        
        if (length <= half) {
            return removed;
        }
        
    }
    
};

// 1. Declare half and set it to length of arr, divided by 2
//  - Use length to obtain number of elements in array
// 2. Declare length and set it to length of arr
//  - Use length to obtain number of elements in array
// 3. Declare counts and set it to an empty map object
//  - Use new Map() constructor to create map object
// 4. Declare removed and set it to 0
// 5. Use for loop to iterate through arr (num = current value in array)
//  - If counts has num, add 1 to value of num in counts
//  - Use has() method to check if map has specific key
//  - Use set() method to add key/value pair to map object
//  - Use get() method to get value of key in map object
//  - Else, set key/value pair of {num: 1} to counts
//  - Use set() method to add key/value pair to map object
// 6. Set counts equal to counts sorted by its values in descending order
//  - Use the spread syntax to deconstruct key/value pair sub arrays into an empty array
//  - Use sort() method to sort array
// 7. Use for loop to iterate through counts (count = current value in array)
//  - Set length equal to itself subtracted by value in current pair
//  - Increment removed by 1
//  - If length is less than or equal to half, return removed