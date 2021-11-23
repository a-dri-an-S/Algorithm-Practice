// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

const dailyTemperatures = function(temperatures) {
    let arr = [];
    
    for (let i = 0; i < temperatures.length; i++) {
        let day = 1;
        
        for (let j = i + 1; j <= temperatures.length; j++) {
            if (temperatures[i] < temperatures[j]) {
                arr.push(day);
                break;
            }
            if (temperatures[i] >= temperatures[j]) {
                day++;
            }
            if (j === temperatures.length) {
                arr.push(0);
            }
        }
    }
    
    return arr;
};

// 1. Declare arr and set it to an empty array
// 2. Use for loop to iterate through temperatures array (index-1)
//  - Declare day and set it to 1
// 3. Use nested for loop to iterate through temperature array with starting point 1 index over from first for loop (index-j)
//  - If value at index-i is less than value at index-j of temperature array, append day to arr with push() method and break loop
//  - If value at index-i is greater than or equal to value at index-j, increment day by 1
//  - If j is equal to length of temperatures array, append 0 to arr with push() method
//  - End Nested for loop
//  - End for loop
// 4. Return arr