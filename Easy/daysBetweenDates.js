// Write a program to count the number of days between two dates.
// The two dates are given as strings, their format is YYYY-MM-DD as shown in the examples.

var daysBetweenDates = function(date1, date2) {
    const [yearA, monthA, dayA] = date1.split("-")
    .map(val => Number(val));
    const [yearB, monthB, dayB] = date2.split("-")
    .map(val => Number(val));
    
    const dateA = new Date(yearA, monthA - 1, dayA);
    const dateB = new Date(yearB, monthB - 1, dayB);
    
    const daysPassed = Math.abs(dateB - dateA) / 1000 / 86400;
    
    return daysPassed;
};

// 1. Declare yearA, monthA, dayA and set them to values in date1 string, split into an array via split(), split at the "-", in the respective indices
// 2. Declare yearB, monthB, dayB and set them to values in date1 string, split into an array via split(), split at the "-", in the respective indices
// 3. Declare dateA and set it to date object for given yearA, monthA and dayA
//  - JS date object months are 0-indexed, so 1 is subtracted 
// 4. Declare dateB and set it to date object for given yearB, monthB and dayB
//  - JS date object months are 0-indexed, so 1 is subtracted 
// 5. Declare daysPassed and set it equal to days passed between earliest date and latest date
//  - Use Math.abs to obtain absolute difference between dateA and dateB, which returns number of milliseconds in difference
//  - Divide by 1000 to get the amount of seconds
//  - Divide by 86400 to get the amount of days
//      - 86400 are the amount of milliseconds in a day
// 6. Return daysPassed;