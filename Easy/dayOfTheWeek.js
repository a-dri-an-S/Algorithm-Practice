// Given a date, return the corresponding day of the week for that date.
// The input is given as three integers representing the day, month and year respectively.
// Return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.

const dayOfTheWeek = (day, month, year) => ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date(year, month - 1, day).getDay()];

// 1. Create array filled with days of the week starting with Sunday (index 0) to Saturday (index 6)
// 2. Get day by its index by performing the following
//  - Get date by creating new Date() and year, month and day as arguments. Subtract month by 1 since months are 0 index (January index 0 - December index 11)
//  - getDay() to extract index of day
// 3. Return day of the week 