// We distribute some number of candies, to a row of n = num_people people in the following way:
// We then give 1 candy to the first person, 2 candies to the second person, and so on until we give n candies to the last person.
// Then, we go back to the start of the row, giving n + 1 candies to the first person, n + 2 candies to the second person, and so on until we give 2 * n candies to the last person.
// This process repeats (with us giving one more candy each time, and moving to the start of the row after we reach the end) until we run out of candies.  The last person will receive all of our remaining candies (not necessarily one more than the previous gift).
// Return an array (of length num_people and sum candies) that represents the final distribution of candies.

const distributeCandies = function(candies, num_people) {
    let people = new Array(num_people).fill(0);
    let candy = 1;
    
    while (candies > 0) {
        for (let i = 0; i < people.length; i++) {
            if (candies <= candy) {
                people[i] += candies;
                candies = 0;
                break;
            } else {
                people[i] += candy;
                candies -= candy;
                candy++;
            }
        }
    }
    
    return people;
};

// 1. Declare people and set it to an array of num_people length filled with 0's
//  - Use new Array() constructor to create array of num_people length
//  - Use fill() method to fill it with 0's
// 2. Declare candy and set it to 1
// 3. Use while loop to create a loop while candies is greater than 0
// 4. Use a nested for loop to iterate through people array
//  - If candies is less than or equal to candy, perform the following:
//      - Set people[i] (current value) equal to itself + candies
//      - Set candies equal to 0
//      - Break loop
//  - Else
//      - Set people[i] (current value) to itself + candy
//      - Set candies equal to itself - candy
//      - Increment candy by 1
// 5. When loops end, return people