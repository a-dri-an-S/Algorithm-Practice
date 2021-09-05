// You are given a 2D integer array ranges and two integers left and right. Each ranges[i] = [starti, endi] represents an inclusive interval between starti and endi.
// Return true if each integer in the inclusive range [left, right] is covered by at least one interval in ranges. Return false otherwise.
// An integer x is covered by an interval ranges[i] = [starti, endi] if starti <= x <= endi.

const isCovered = function(ranges, left, right) {
    let isWithinRange = 0;
    
    for (let i = left; i <= right; i++) {
        for (let range of ranges) {
            if (range[0] <= i && i <= range[1]) {
                isWithinRange++
                break;
            } 
        }
    }
    return (right - left) + 1 === isWithinRange
    
};

// 1. Declare isWithinRange and set it to 0
// 2. Use for loop to loop within the numbers of left and right, incrementing by 1
// 3. Use nested for loop ti iterate through ranges array
// 4. If current num (i) is within both numbers of ranges subArray, increment isWithinRange by 1 and break loop
// 5. If number count within left and right is equal to isWithinRange count, return true, else return false