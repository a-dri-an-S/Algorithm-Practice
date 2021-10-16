// Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.
// An integer m is a divisor of n if there exists an integer k such that n = k * m.

const isThree = (n) => {
    let count = 1;
    
    for (let i = 2; i <= n; i++) {
        if (Number.isInteger(n / i)) {
            count++
        }
    }
    return count === 3 ? true : false;
};

// 1. Declare count and set it to 1
// 2. Use for loop to create loop, starting at 2 and incrementing by 1 until n is reached
// 3. If n / i is not an integer (not a divisor), increment count  by 1
// 4. If count is equal to 3, return true, else false