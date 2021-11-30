// There are n soldiers standing in a line. Each soldier is assigned a unique rating value.
// You have to form a team of 3 soldiers amongst them under the following rules:
// Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
// A team is valid if: (rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n).
// Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).

const numTeams = function(rating) {
    let count = 0;
    
    for (let i = 0; i < rating.length - 2; i++) {
        for (let j = i + 1; j < rating.length - 1; j++) {
            for (let k = j + 1; k < rating.length; k++) {
                if (rating[i] < rating[j] && rating[j] < rating[k]) {
                    count++;
                } else if (rating[i] > rating[j] && rating[j] > rating[k]) {
                    count++;
                }
            }
        }
    }
    return count;
};

// 1. Declare count and set it to 0;
// 2. Use for loop to iterate through rating array (index-i);
// 3. Use nested for loop to iterate through rating array starting +1 index from previous loop (index-j)
// 4. Use 2nd nested for loop to iterate through rating array starting +1 index from previous loop (index-k)
//  - If value at index-i is less than value at index-j AND value at index-j is less than value at index-k, increment count by 1
//  - Else if, value at index-i is greater than value at index-j AND value at index-j is greater than value at index-k, increment count by 1
// -End loop(s)
// 5. Return count