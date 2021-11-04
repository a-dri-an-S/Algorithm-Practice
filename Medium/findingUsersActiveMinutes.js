// You are given the logs for users' actions on LeetCode, and an integer k. The logs are represented by a 2D integer array logs where each logs[i] = [IDi, timei] indicates that the user with IDi performed an action at the minute timei.
// Multiple users can perform actions simultaneously, and a single user can perform multiple actions in the same minute.
// The user active minutes (UAM) for a given user is defined as the number of unique minutes in which the user performed an action on LeetCode. A minute can only be counted once, even if multiple actions occur during it.
// You are to calculate a 1-indexed array answer of size k such that, for each j (1 <= j <= k), answer[j] is the number of users whose UAM equals j.
// Return the array answer as described above.

const findingUsersActiveMinutes = function(logs, k) {
    const users = {};
    const minutes = new Array(k).fill(0);
    
    for (const log of logs) {
        const user = log[0];
        const minute = log[1];
        if (users[user] === undefined) {
            users[user] = new Set();
        }
        users[user].add(minute);
    }
    
    const vals = Object.values(users);
    
    for (const val of vals) {
        const idx = val.size - 1;
        minutes[idx]++
    }
    
    return minutes;
};

// 1. Declare users and set it to an empty object
// 2. Declare minutes and set it to an array of length k with all values equal to 0
//  - Use new Array constructor to create an array of length k
//  - Use fill() method to fill array with all 0's
// 3. Use for loop to iterate through logs array
//  - Declare user and set it to value at index-0 of current log (subarray)
//  - Declare minutes and set it to value at index-1 of current log (subarray)
//  - IF current user is not a key in users object, add key and set its value to an empty set via new Set() constructor
//  - Add current minute to set of current user in users object
// 4. Declare vals and set it to an array of values extracted from users object via Object.values() function
// 5. Use for loop to iterate through vals array
//  - Declare idx and set it to size of current set (val), subtracted by 1
//  - Increment value at idx of minutes by 1
// 6. Return minutes