// Given an integer n, return true if it is a power of three. Otherwise, return false.
// An integer n is a power of three, if there exists an integer x such that n == 3x.

const isPowerOfThree = (n) => {
    while (n > 2) {
        n /= 3
    }
    return n === 1 ? true : false;
};

// 1. Create loop with while loop until n is less than 2
// 2. Set n equal to n / 3
// 3. If n is equal to 1, return true else return false