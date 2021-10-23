// Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a == c and b == d), or (a == d and b == c) - that is, one domino can be rotated to be equal to another domino.

// Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].

const numEquivDominoPairs = function(dominoes) {
    let pairs = 0;
    
    for (let i = 0; i < dominoes.length; i++) {
        const dominoA = dominoes[i];
        for (let j = i + 1; j < dominoes.length; j++) {
            const dominoB = dominoes[j];
            if ((dominoA[0] === dominoB[0] && dominoA[1] === dominoB[1]) || 
                (dominoA[0] === dominoB[1] && dominoA[1] === dominoB[0])) {
                pairs++
            }
        }
    }
    return pairs;
};

// 1. Declare pairs and set it to 0
// 2. Use for loop and iterate through dominoes array
//  - Declare dominoA and set it to subarray at index-i of dominoes
// 3. Use nested for loop to iterate through dominoes array, starting at position i + 1
// 4. Declare dominoB and set it to subarray at index-j of dominoes
//  - IF:
//      - dominoA at index-0 is equal to dominoB at index-0 and  dominoA at index-1 is equal to dominoB at index-1
//  -OR:
//      - dominoA at index-0 is equal to dominoB at index-1 and  dominoA at index-1 is equal to dominoB at index-0
//  - Increment pairs by 1
// 5. Return pairs