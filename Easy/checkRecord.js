// You are given a string s representing an attendance record for a student where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:
//     'A': Absent.
//     'L': Late.
//     'P': Present.
// The student is eligible for an attendance award if they meet both of the following criteria:
//     The student was absent ('A') for strictly fewer than 2 days total.
//     The student was never late ('L') for 3 or more consecutive days.
// Return true if the student is eligible for an attendance award, or false otherwise.

const checkRecord = function(s) {
    let absenceCount = 0;
    let lateCount = 0;
    let maxLate = 0;
    
    for (let char of s) {
        if (char === "A") {
            absenceCount++
        }
        if (char === "L") {
            lateCount++
            maxLate = Math.max(lateCount, maxLate)
        } else {
            lateCount = 0
        }
    }
    
    return (absenceCount > 1 || maxLate > 2) ? false : true;
};

// 1. Declare absenceCount, lateCount and maxLate and set them all equal to 0
// 2. Use for loop to iterate through s string
// 3. If current char is equal to "A", increment absenceCount by 1
// 4. If current char is equal to "L", increment lateCount by 1
//  - Also, set maxLate equal to largest between lateCount and maxLate via Math.max() method
// 5. Else, reset lateCount = 0
// 6. If either absenceCount is greater than 1 or if maxLate is greater than 2, return false, else return true