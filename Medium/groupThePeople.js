// There are n people that are split into some unknown number of groups. Each person is labeled with a unique ID from 0 to n - 1.
// You are given an integer array groupSizes, where groupSizes[i] is the size of the group that person i is in. For example, if groupSizes[1] = 3, then person 1 must be in a group of size 3.
// Return a list of groups such that each person i is in a group of size groupSizes[i].
// Each person should appear in exactly one group, and every person must be in a group. If there are multiple answers, return any of them. It is guaranteed that there will be at least one valid solution for the given input.

const groupThePeople = function(groupSizes) {
    const grouped = [];
    const groupSize = [...new Set(groupSizes)]
        .sort((a, b) => a - b);
    
    for (let i = 0; i < groupSize.length; i++) {
        const group = [];
        
        for (let j = 0; j < groupSizes.length; j++) {
            if (groupSizes[j] === groupSize[i]) {
                group.push(j);
            }
        }
        
        while (group.length > 0) {
            grouped.push(group.splice(0, groupSize[i]));
        }
    };
    
    return grouped;
};

// 1. Declare grouped and set it to an empty array
// 2. Declare groupSize and set it an array of unique group numbers in ascending order
//  - Use new Set() to return a collection of unique values extracted from groupSizes array
//  - Use spread syntax to unpack those unique values into an empty array
//  - Use sort() method to sort the values in ascending order (a - b)
// 3. Use for loop to iterate through groupSize array
//  - Declare group and set it to an empty array
// 4. Use nested for loop to iterate through groupSizes array
//  - If current groupSize value at index-j is equal to current groupSizes value at index-i, append index-j to group array with push() method
// 5. Use a nested while loop to loop until group length is less tan or equal to 0
//  - Append subgroup of length groupSize to grouped array
//      - Use splice to obtain subarray starting at index-0 to index-groupSize[i] (current group size)
//      - Append subarray to grouped array with push() method
// 6. Return grouped array