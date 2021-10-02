// You are given a 2D integer array logs where each logs[i] = [birthi, deathi] indicates the birth and death years of the ith person.
// The population of some year x is the number of people alive during that year. The ith person is counted in year x's population if x is in the inclusive range [birthi, deathi - 1]. Note that the person is not counted in the year that they die.
// Return the earliest year with the maximum population.

const maximumPopulation = function(logs) {
    const popsObj = {};
    
    for (const log of logs) {
        popsObj[log[0]] = 0;
        for (const years of logs) {
            if (years[0] <= log[0] && log[0] < years[1]) {
                popsObj[log[0]]++;
            }
        }
    }
    
    const pops = Object.entries(popsObj);
    
    pops.sort((a, b) => b[1] - a[1]);

    return parseInt(pops[0][0]);
};

// 1. Declare popsObj and set it to an empty object
// 2. Use for loop to iterate through logs array
// 3. Use nested for loop to iterate through logs a second time
// 4. Add birth year of current subarray in log (log[0]) to popsObj and set its value to 0
// 5. If birth year is less than or equal to current birth year (years[0] <= log[0]) and current birth year is less than death year (log[0] < years[1]), increment value of current birth year by 1
// 6. Declare pops and set it to an array of subarray's containing key value pairs of popsObj extracted via Object.entires() method;
// 7. Sort pops array by the values in descending order
// 8. Return the year at index-0 of index-0 of pops array and convert it to a number with parseInt()