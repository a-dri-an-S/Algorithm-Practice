// Alice and Bob have a different total number of candies. You are given two integer arrays aliceSizes and bobSizes where aliceSizes[i] is the number of candies of the ith box of candy that Alice has and bobSizes[j] is the number of candies of the jth box of candy that Bob has.

// Since they are friends, they would like to exchange one candy box each so that after the exchange, they both have the same total amount of candy. The total amount of candy a person has is the sum of the number of candies in each box they have.

// Return an integer array answer where answer[0] is the number of candies in the box that Alice must exchange, and answer[1] is the number of candies in the box that Bob must exchange. If there are multiple answers, you may return any one of them. It is guaranteed that at least one answer exists.

const fairCandySwap = function(aliceSizes, bobSizes) {
    const amountA = aliceSizes.reduce((a, b) => a + b, 0);
    const amountB = bobSizes.reduce((a, b) => a + b, 0);
    
    for (let i = 0; i < aliceSizes.length; i++) {
        for (let j = 0; j < bobSizes.length; j++) {
            let candiesA = amountA;
            let candiesB = amountB;
            
            candiesA += (bobSizes[j] - aliceSizes[i]);
            candiesB += (aliceSizes[i] - bobSizes[j]);
            
            if (candiesA === candiesB) {
                return [aliceSizes[i], bobSizes[j]];
            }
        }
    }

};

// 1. Declare amountA and set it to aliceSizes array summed together
//  - Use reduce() method to sum all elements in array 
// 2. Declare amountB and set it to bobSizes array summed together
//  - Use reduce() method to sum all elements in array 
// 3. Use for loop to iterate through aliceSizes array
// 4. Use nested for loop to iterate through bobSizes array
// 5. Declare candiesA and set it equal to amountA
// 6. Declare candiesB and set it equal to amountB
// 7. Remove current alice candy and add current bob candy from candiesA
// 8. Remove current bob candy and add current alice candy from candiesB
// 9. If candiesA is equal to candiesB, return an array consisting of current value in aliceSizes array and current value in bobSizes array