// There are n people in a line queuing to buy tickets, where the 0th person is at the front of the line and the (n - 1)th person is at the back of the line.
// You are given a 0-indexed integer array tickets of length n where the number of tickets that the ith person would like to buy is tickets[i].
// Each person takes exactly 1 second to buy a ticket. A person can only buy 1 ticket at a time and has to go back to the end of the line (which happens instantaneously) in order to buy more tickets. If a person does not have any tickets left to buy, the person will leave the line.
// Return the time taken for the person at position k (0-indexed) to finish buying tickets.

const timeRequiredToBuy = function(tickets, k) {
    let time = 0;
    
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[k] <= tickets[i] && i <= k) {
            time += tickets[k];
        } else if (tickets[k] <= tickets[i] && i > k) {
            time += (tickets[k] - 1);
        } else if (tickets[k] > tickets[i]) {
            time += tickets[i];
        }
    }
    
    return time;
};

// 1. Declare time and set it to 0
// 2. Use for loop to iterate through tickets array
//  - If value at position k (tickets[k]) is less than or equal to current value (tickets[i]) AND index-i is less than or equal to index-k, add value at position k to time (time taken to buy n-tickets)
//  - Else if, value at position k (tickets[k]) is less than or equal to current value (tickets[i]) AND index-i is greater than k, add values at index-i subtracted by one to time (time taken to buy n-tickets after position k)
//  - Else if, value a position k is greater than value at index-i, add value at index-i to time (time taken to buy n-tickets)
//  - End Loop
// 3. Return time