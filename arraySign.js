// There is a function signFunc(x) that returns:
//     1 if x is positive.
//     -1 if x is negative.
//     0 if x is equal to 0.
// You are given an integer array nums. Let product be the product of all values in the array nums.
// Return signFunc(product).

const arraySign = nums => {
    let product = 1;
     for (let num of nums) {
        if (num > 0) {
            product *= 1
        } else if (num < 0) {
            product *= -1
        } else {
            product *= 0
        }
    }
    return product
}

// 1. Declare product and set it equal to 1
// 2. Use for loop to iterate through nums array
// 3. If num is greater than 0, multiply product by 1
// 4. If num is less than 0, multiply product by -1
// 3. Else multiply product by 0
// 4. Return Product

// One Liner
const arraySign = nums => nums.map(num => num > 0 ? 1 : num < 0 ? -1 : 0).reduce((a, b) => a * b)