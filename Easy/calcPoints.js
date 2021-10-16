// You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect future rounds' scores.
// At the beginning of the game, you start with an empty record. You are given a list of strings ops, where ops[i] is the ith operation you must apply to the record and is one of the following:
//     An integer x - Record a new score of x.
//     "+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
//     "D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
//     "C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.
// Return the sum of all the scores on the record.

const calcPoints = ops => {
    let score = [];

    for (let op of ops) {
        if (!isNaN(+op)) {
            score.push(+op)
        } else if (op === "+") {
            score.push(score.slice(score.length - 2).reduce((a, b) => a + b))
        } else if (op === "D") {
            score.push(score.slice(score.length - 1) * 2)
        } else {
            score.pop()
        }
    }
    return score.reduce((a, b) => a + b)
};


// 1. Declare score and set it as an empty array
// 2. Use for loop to iterate through the ops array
// 3. If current op converted to number is not NaN, push +op to score
// 4. If current op is +, push sum of last 2 scores in score array
//  - Slice last two elements in score array
//  - Reduce elements and return its sum
// 5. If current op is D, push product of last score * 2
//  - Slice last element of score array and doubled it (multiple score by 2)
// 6. Else (if current op is C), remove last element from score array via pop method
// 7. Score array summed via reduce method