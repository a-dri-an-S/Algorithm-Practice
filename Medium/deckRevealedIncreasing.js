// You are given an integer array deck. There is a deck of cards where every card has a unique integer. The integer on the ith card is deck[i].

// You can order the deck in any order you want. Initially, all the cards start face down (unrevealed) in one deck.

// You will do the following steps repeatedly until all cards are revealed:

//     Take the top card of the deck, reveal it, and take it out of the deck.
//     If there are still cards in the deck then put the next top card of the deck at the bottom of the deck.
//     If there are still unrevealed cards, go back to step 1. Otherwise, stop.

// Return an ordering of the deck that would reveal the cards in increasing order.

// Note that the first entry in the answer is considered to be the top of the deck.

const deckRevealedIncreasing = function(deck) {
    if (deck.length < 3) return deck.sort((a, b) => a - b);
    
    deck.sort((a, b) => b - a);
    let arr = [];
    let length = deck.length;
    
    while (deck.length > 0) {
        if (deck.length === length) {
            const valA = deck.shift();
            arr.push(valA);
            const valB = deck.shift();
            arr.push(valB);
            const valC = deck.shift();
            arr.unshift(valC);
        } else {
            const valA = arr.pop();
            arr.unshift(valA);
            const valB = deck.shift();
            arr.unshift(valB);
        }
    }
    
    return arr;
};

// 1. If deck has less than 3 elements, return deck in ascending order
//  - Use sort() to sort array in ascending order
// 2. Sort deck in descending order
//  - Use sort() to sort array in descending order
// 3. Declare arr and set it to an empty array
// 4. Declare length and set it to length of deck
// 5. Use while loop to create loop until length of deck reaches 0
//  - If length of deck is equal to length, perform the following:
//      - Declare valA and set it to first value in deck
//          - Use shift() method to remove first element
//      - Append valA to arr using push() method
//      - Declare valB and set it to first value in deck
//          - Use shift() method to remove first element
//      - Append valB to arr using push() method
//      - Declare valC and set it to first value in deck
//          - Use shift() method to remove first element
//      - Prepend valC to arr using unshift() method
//  - Else, perform the following:
//      - following:
//      - Declare valA and set it to last value in arr
//          - Use pop() method to remove last element
//      - Prepend valA to arr using unshift() method
//      - Declare valB and set it to first value in deck
//          - Use shift() method to remove first element
//      - Prepend valC to arr using unshift() method
// 6. After while loop ends, return arr;