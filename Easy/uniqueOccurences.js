// Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

const uniqueOccurences = arr => {
    let counts = {};

    arr.forEach(i => {
        if (counts[i] === undefined) {
            counts[i] = 0;
        }
        counts[i]++
    })

    let vals = Object.values(counts);
    let uniqueVals = [...new Set(vals)];

    return vals.every((a, b) => a === uniqueVals[b])
}

// 1. Declare counts and set is as an empty object
// 2. Iterate through array with "forEach" array method
// 3. If counts[i] === undefined (doesn't exist), create counts[i] and set it to 0
// 4. Increment i in counts
// 5. Declare val and set values in counts object
// 6. Declare uniqueVals and array of unique values from vals via set()
// 7. Iterate through vals with every array method and check if val[a] === uniqueVals[b], Returns Boolean