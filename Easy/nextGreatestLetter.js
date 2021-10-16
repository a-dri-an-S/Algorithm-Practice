// Given a characters array letters that is sorted in non-decreasing order and a character target, return the smallest character in the array that is larger than target.
// Note that the letters wrap around.
// For example, if target == 'z' and letters == ['a', 'b'], the answer is 'a'.

const nextGreatestLetter = (letters, target) => {
    let targetCode = target.charCodeAt()
    let min = Infinity;
    
    for (let letter of letters) {
        const letterCode = letter.charCodeAt();
        if (letterCode > targetCode) {
            min = Math.min(letterCode, min)
        }
    }
    
    if (min === Infinity) {
        letters.forEach(el => {
            min = Math.min(el.charCodeAt(), min)
        })
    }

    return String.fromCharCode(min)
};

// 1. Declare targtCode and set it to the character code of target w/ charCodeAt() funciton
// 2. Declare min and set it to Infinity (largets number)
// 3. Use for loop to iterate through letters array
// 4. Declare letterCode and set it to character code of current letter
// 5. If letterCode is less than targetCode, set min equal to smallest integer between letterCode and min
// 6. If min is equal to Infinity, use forEach() method to iterare through letters array and set min equal to smallest integer between current element's character code and min
// 7. Use fromCharCode() method to transform integer (min) to char