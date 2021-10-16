const countBalls = (lowLimit, highLimit) => {
    let boxes = {};
    for (let i = lowLimit; i <= highLimit; i++) {
        if (i < 10) {
            boxes[i] = 1;
        } else {
            let sum = Number(i).toString().split("").reduce((a, b) => +a + +b)
            if (boxes[sum] === undefined) {
                boxes[sum] = 0;
            }
            boxes[sum]++
        }
    }
    return Math.max(...Object.values(boxes));
}

// 1. Declare boxes and set it to an empty object
// 2. Use for loop to increment by 1 from lowLimit to highLimit
// 3. if number is below 10, add number to boxes object, set it to 1
// 4. if number 10 or above, number doesn't already exist in object, create and assign it to 0 & increment by 1
// 5. Increment by 1 if already exists
// 6. Spread object values in Math.max to return max number of balls in boxes