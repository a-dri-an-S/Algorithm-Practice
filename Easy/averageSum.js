// Given an array of unique integers salary where salary[i] is the salary of the employee i.
// Return the average salary of employees excluding the minimum and maximum salary.

const average = salary => {
    let sum = 0;
    salary.sort((a, b) => a - b);
    for (let i = 1; i < salary.length - 1; i++) {
        sum += salary[i]
    }
    return sum / (salary.length - 2)
}

// 1. Declare sum and set it to 0
// 2. sort salary in increasing order via array sort method
// 3. Use for loop and iterate through array starting at index 1 and ending 1 index before end of array (omit min and max salary)
// 4. Add salary[i] to sum
// 5. Return sum / length of salary - 2 (minus min and max), return average

// One Liner

const average = salary => salary.filter(sal => sal !== Math.min(...salary) && sal !== Math.max(...salary)).reduce((a , b) => a + b) / (salary.length - 2);

// 1. Filter min salary and max salary via filter array method and Math.max / Math.min functions + spread operator
// 2. Sum the remaining numbers via the reduce method
// 3. Divide sum by salary.length - 2 (omitting min and max from length) and return difference (average)