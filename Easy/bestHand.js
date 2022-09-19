// You are given an integer array ranks and a character array suits. You have 5 cards where the ith card has a rank of ranks[i] and a suit of suits[i].

// The following are the types of poker hands you can make from best to worst:

//     "Flush": Five cards of the same suit.
//     "Three of a Kind": Three cards of the same rank.
//     "Pair": Two cards of the same rank.
//     "High Card": Any single card.

// Return a string representing the best type of poker hand you can make with the given cards.

// Note that the return values are case-sensitive.

const bestHand = function(ranks, suits) {
    suits = new Set(suits);
    
    if (suits.size === 1) {
        return "Flush";
    } else {
        let maxCount = 0;
        
        while (ranks.length > 0) {
            const currCount = ranks.filter(rank => rank === ranks[0]).length;
            ranks = ranks.filter(rank => rank !== ranks[0]);
            maxCount = Math.max(currCount, maxCount);
        }
        
        if (maxCount >= 3) {
            return "Three of a Kind";
        } else if (maxCount === 2) {
            return "Pair";
        } else {
            return "High Card";
        }
    }
};

// 1. Set suits equal to itself wrapped in a Set object
//  - Set objects store unique values
// 2. If suite size property is equal to 1, return "Flush"
//  - size property returns amount of unique values
//  - If size is 1, all suits are the same
// 3. Else, check for all other hands by performing the following:
// 4. Declare maxCount and set it to 0;
// 5. Use while loop to create loop while value of length property of ranks array is greater than 0, perform the following:
//  - Use the length property to get number of elements in array
// 6. Declare currCount and set it to number of element at index-0 in ranks array
//  - Use the filter() method to filter all elements EQUAL to element at index-0
//  - Use the length property to get number of elements in array
// 7. Set ranks equal to itself with all elements equal to element at index-0, removed
//  - Use the filter() method to filter all elements NOT EQUAL to element at index-0
// 8. Set maxCount = largest number between currCount and maxCount
//  - Use Math.max() function to get the largest between the two values
// 9. End while loop
// 10. IF maxCount is GREATER THAN OR EQUAL TO 3, return "Three of a Kind"
// 11. Else if, macCount is EQUAL to 2, return "Pair"
// 12. Else, return "High Card"
