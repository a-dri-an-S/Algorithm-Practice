// In a deck of cards, each card has an integer written on it.
// Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:
//     Each group has exactly X cards.
//     All the cards in each group have the same integer.

const hasGroupsSizeX = function(deck) {
    const groups = {};
    let ans = false;
    
    if (deck.length === 1) return ans;
    
    for (let card of deck) {
        if (groups[card] === undefined) {
            groups[card] = 0;
        }
        groups[card]++;
    }
    
    const groupCount = Object.values(groups);
    let check = true;
    let i = 2;
    
    while (check) {
        let bool = [];
        
        for (let num of groupCount) {
            if (num % i === 0) {
                bool.push(true)
            } else {
                bool.push(false)
            }
        }
        
        if (bool.includes(false)) {
            i++
        } else {
            ans = true
            check = false;
        }
        
        if (i === 10) {
            check = false;
        }
    }
    
    return ans;
};

// 1. Declare groups and set it to an empty object
// 2. Declare ans and set it to false
// 3. If deck length is equal to 1, return ans
// 4. Use for loop to iterate through deck array
//  - If current card is not a key in object (undefined), add key to object and set it to 0
//  - increment value of current key in groups object by 1
// 5. Declare groupCount and set it to values extracted from groups object
//  - Use Object.values() method to extract the values from groups object in form of array
// 6. Declare check and set it to true
// 7. Declare i and set it to 2
// 8. Use while loop to create loop until check is false
// - Declare bool and set it to an empty array
//  9. Use a nested for loop within while loop and iterate through groupCount array
//  - If current num % i has no remainder (equal to 0), append true to bool array with push() method
//  - Else, append false to bool array with push() method
//  - After for loop finishes, check if bool array includes false
//      - If true, increment i by 1
//      - Else, set ans to true and check to false
//  - If i is equal to 10, set check equal to false
// 10. When while loop has finished, return ans 