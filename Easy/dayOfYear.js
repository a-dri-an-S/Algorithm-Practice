// Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year.

const dayOfYear = function(date) {
    date = date.split("-");
    
    const year = Number(date[0]);
    const month = Number(date[1]) - 1;
    const day = Number(date[2]);
    
    const currDay = new Date(year, month, day);
    const newYear = new Date(year, 0, 0);
    
    const seconds = (currDay - newYear) / 1000;
    const days = seconds / 86400;
    
    return days;
    
};

// 1. set date equal to date split at every "-" and converted to array with split() method
// 2. Declare year and set it to value at index-0 of date array converted to number with Number() function
// 3. Declare month and set it to value at index-1 of date array converted to number with Number() function subtracted by 1
//  - Months are 0-index in the javascript Date object
// 4. Declare day and set it to value at index-2 of date array converted to number with Number() function
// 5. Declare current year and set it to Date object with year, month and day added within date object.
//  - This will return the number of milliseconds that have passed since Jan. 1, 1970
// 6. Declare newYear and set it to the Date object with year, 1st month, 1st day (at midnight) added within date object
// 7. Declare seconds and set it to currDay subtracted by newYear. Then divide by 1000.
//  - This will convert milliseconds to seconds
// 8. Declare days and divide seconds by 86400
//  - 86440 are the number of seconds in a day
// 9. Return days