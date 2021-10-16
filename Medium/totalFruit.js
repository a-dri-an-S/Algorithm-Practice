// You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.
// You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:
//     You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
//     Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
//     Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// Given the integer array fruits, return the maximum number of fruits you can pick.

const totalFruit = function(fruits) {
    let count = 0;
    
    const fruitTypes = [...new Set(fruits)];
    
    if (fruitTypes.length < 3) return fruits.length;
    
    for (let i = 0; i < fruits.length; i++) {

        const baskets = [];
        let basketA = undefined;
        let basketB = undefined;

        for (let j = i; j < fruits.length; j++) {

            if (basketA === undefined) {
                basketA = fruits[j];
            } else if (basketB === undefined && basketA !== fruits[j]) {
                basketB = fruits[j]
            }

            if (basketA === fruits[j] || basketB === fruits[j]) {
                baskets.push(fruits[j]);
            } else if (basketA !== fruits[j] || basketB !== fruits[j]){
                break;
            }

        }
        
        const fruitAmount = baskets.length;
        count = Math.max(count, fruitAmount);
            
    }
    
    return count;
};

// 1. Declare count and set it to 0
// 2. Declare fruitTypes and set it to unique values in fruits array with new Set() to extract unique values and spread syntax to unpack values into an empty array
// 3. If fruitTypes has less than 3 values (length less than 3), return number of values in fruit array (length of fruit)
// 4. Declare a for loop to iterate through fruits array
// 5. Declare baskets and set it to an empty array
// 6. Declare basketA and  basketB and set both to undefined
// 7. Use nested for loop to iterate through fruit array
//  - If basketA is equal to undefined, set basketA equal to current value at index-j of fruits array
//  - Else if, basketB is equal to undefined and basketA is not equal to undefined, set basketB equal to current value at index-j of fruits array
// - If basketA or basketB are equal to current value at index-j, append value to baskets array with push() method
//  - Else if, basketA or basketB do NOT equal to current value at index-j, break loop
// 8. Declare fruitAmount and set it to baskets length (amount of values in array)
// 9. Set count equal to largest number between count and fruitAmount with Math.max() function
// 10. Return count