// At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.
// Note that you don't have any change in hand at first.
// Given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can provide every customer with correct change, or false otherwise.

const lemonadeChange = bills => {
    let change = { 5: 0, 10: 0, 20: 0 }
    let transaction = true;
    
    for (let bill of bills) {
        if (bill === 5) {
            change[5]++
        } else if (bill === 10 && change[5] > 0) {
            change[10]++
            change[5]--
        } else if (bill === 20 && change[10] > 0 && change[5] > 0) {
            change[20]++
            change[10]--
            change[5]--
        } else if (bill === 20 && change[5] > 2) {
            change[20]++
            change[5] -= 3
        } else {
            transaction = false
        }
    }
    return transaction
};

// 1. Declare change and set it to an object with the keys of 5, 10 & 20 all wih values 0
// 2. Declare transaction and set it to true (boolean)
// 3. Use for loop to iterate through bills array
// 4. If current bill is equal to 5, increment val of key 5 by 1
// 5. Else if, current bill is equal to 10 and key 5 is greater than 0, increment val of key 10 by 1 and decrement val of key 5 by 1
// 6. Else if, current bill is equal to 20 $ both keys 5 + 10 are greater than 0, increment val of key 20 by 1 and decrement val of both keys 5 + 10 by 1 
// 7. Else if, bill is equal to 20 and val of key 5 is greater than 2, increment val of key 20 by 1 and decrement val of key 5 by 3
// 8. If none of those conditions are met, set transaction equal to false
// 9. Return transaction 