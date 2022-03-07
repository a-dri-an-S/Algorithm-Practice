// You are given an integer array digits, where each element is a digit. The array may contain duplicates.
// You need to find all the unique integers that follow the given requirements:
//     The integer consists of the concatenation of three elements from digits in any arbitrary order.
//     The integer does not have leading zeros.
//     The integer is even.
// For example, if the given digits were [1, 2, 3], integers 132 and 312 follow the requirements.
// Return a sorted array of the unique integers.

const findEvenNumbers = function(digits) {
    const asec = [...digits].sort((a, b) => a - b);
    const desc = [...digits].sort((a, b) => b - a);
    const min = Number(asec[0].toString() + asec[1].toString() + asec[2].toString());
    const max = Number(desc[0].toString() + desc[1].toString() + desc[2].toString());
    const arr = [];
    
    for (let int = min; int <= max; int++) {
        if (int > 99 && int % 2 === 0) {
            const intStr = int.toString();
            const arrCheck = [...digits];
            let check = true;
            
            for (const char of intStr) {
                const num = Number(char);
                if (arrCheck.includes(num)) {
                    const idx = arrCheck.indexOf(num);
                    arrCheck.splice(idx, 1);
                } else {
                    check = false;
                    break;
                }
            }
            
            if (check) {
                const num = Number(intStr[0] + intStr[1] + intStr[2]);
                arr.push(num);
            }
        }
    }
    
    return arr;
};

// 1. Declare asec and set it to a copy of digits, sorted in ascending order
//  - Use spread syntax to destructure digits into an empty array, creating a copy of digits
//  - Use sort() method to sort the array in ascending order
// 2. Declare desc and set it to a copy of digits, sorted in descending order
//  - Use spread syntax to destructure digits into an empty array, creating a copy of digits
//  - Use sort() method to sort the array in descending order
// 3. Declare min and set it to first 3 values of asec, concatenated and converted to an integer
//  - Use toString() to convert integers to strings
//  - Use Number to convert concatenated strings to an integer
// 4. Declare max and set it to first 3 values of desc, concatenated and converted to an integer
//  - Use toString() to convert integers to strings
//  - Use Number to convert concatenated strings to an integer
// 5. Declare arr and set it to an empty array
// 6. Use a for loop to create loop starting at min, incrementing by 1 until max is reached
//  - If current int is greater than 99 AND the int even, perform the following:
//      - Use the modulo operator to check if int is divisible by 2 (remainder is equal to 0)
//  - Declare intStr and set it to current int converted to string
//      - Use toString to convert integer to string
//  - Declare arrCheck and set it to a copy of digits
//      - Use the spread syntax to deconstruct digits into an empty array
//  - Declare check and set it to true
// 7. Use a nested for loop to iterate through intStr
//  - Declare num and set it to char converted to an integer
//      - Use Number() wrapper to convert string to an integer
//  - If arrCheck contains num, perform the following:
//      - Use includes to check if the arrCheck contains char
//  - Declare idx and set it to the index of num in arrCheck
//      - Use indexOf() to check for the index of the first occurrence of num
//  - Remove num from arrCheck
//      - Use splice to remove the integer at index-idx and remove 1
//  - Else, set check equal to false and break loop
// 8. If check is truthy, perform the following:
//  - Declare num and set it first 3 elements of intStr, concatenated together and converted to an integer
//      - Use Number() wrapper to convert string to integer
//  - Append num to arr
//      - Use push() to append num to arr
// After loops end, return arr