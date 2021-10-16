// A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.
// You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).
// Return the number of indices where heights[i] != expected[i].

const heightChecker = heights => {
    let count = 0;
    let sorted = heights.slice().sort((a, b) => a - b);
    for (let i in heights) {
        if (heights[i] !== sorted[i]) {
            count++
        }
    }
    return count;
}

// 1. Declare count and assign it to 0
// 2. Declare sorted and set it to a copy of heights (via slice) and sort in ascending order
// 3. Iterate through string with for loop
// 4. if heights[i] is not equal to sorted[i], increment count ()
// 5. Return count