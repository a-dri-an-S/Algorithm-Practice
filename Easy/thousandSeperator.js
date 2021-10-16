// Given an integer n, add a dot (".") as the thousands separator and return it in string format.

const thousandSeparator = n => {
    const nStr = n.toString();
    let newStrArr = [];
    let count = 0;
    
    if (nStr.length < 4) {
        return nStr
    } else {
        for (let i = nStr.length - 1; i >= 0; i--) {
            
            if (count === 3) {
                newStrArr.unshift(".")
                count = 0;
            }
            count++
            newStrArr.unshift(nStr[i])
        }
    }
    return newStrArr.join("")
};

// 1. Declare nStr and set it to number converted to string via toString() method
// 2. Declare newStr ans set it to an empty array
// 3. Declare count and set it to 0
// 4. If nStr's length is less than 4, return nStr
// 5. Else, Use a for loop to iterate through nStr in reverse (from right to left)
// 6. If, count is equal to 3, add "." to index 0 of newStrArr via unshift() method and reset count to 0
// 7. Increment count by 1 and add current num in nStr to index 0 of newStrArr via unshift() method
// 8. Join newStrArr into string via join() method and return