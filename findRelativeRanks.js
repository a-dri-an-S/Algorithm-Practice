// You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.
// The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:
//     The 1st place athlete's rank is "Gold Medal".
//     The 2nd place athlete's rank is "Silver Medal".
//     The 3rd place athlete's rank is "Bronze Medal".
//     For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").
// Return an array answer of size n where answer[i] is the rank of the ith athlete.

const findRelativeRanks = (score) => {
    let sorted  = [...score].sort((a, b) => b - a)
    let sortedRanks = [];
    
    let count = 3;
    let ranks = sorted.map((num, i) => {
        if (i === 0) {
            return [num, "Gold Medal"]
        } else if (i === 1) {
            return [num, "Silver Medal"]
        } else if (i === 2) {
            return [num, "Bronze Medal"]
        } else if (i > 2) {
            count++
            return [num, count.toString()]
        }
    })
    
    for (let num of score) {
        for (let rank of ranks) {
            if (num === rank[0]) {
                sortedRanks.push(rank[1])
            }
        }
    }
    
    return sortedRanks
};

// 1. Declare sorted and set it to a copy of score, sorted in descending order
//  - Use spread operator to spread copy of score into an array
//  - Use sort array to sort in descending order
// 2. Declare sortedRanks and set it to an empty array
// 3. Declare count and set it to 3
// 4. Declare ranks and set it to an array of score + rank in subarrays
//  - Use map method to mutate sorted array
//  - If at index 0, push subarray [num, "Gold Medal"]
//  - If at index 1, push subarray [num, "Silver Medal"]
//  - If at index 2, push subarray [num, "Bronze Medal"]
//  - If at index 3 or greater, increment count by 1 and push subarray [num, count] w/ count converted to string with toString method
// 5. Use for loop to iterate through score array
// 6. Use nested for loop to iterate through ranks array
// 7. If current num of score is equal to current score of ranks (rank[0]), push rank into sortedRanks (rank[1])
// 8. Return sortedRanks