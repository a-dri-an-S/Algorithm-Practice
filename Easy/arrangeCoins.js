// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.
// Given the integer n, return the number of complete rows of the staircase you will build.

const arrangeCoins = function(n) {
    let stairHeight = 1;
    let stairCount = 0;
    
    while (n > 0) {
        n -= stairHeight;
        if (n >= 0) {
            stairCount++;
            stairHeight++;
        }
    }

    return stairCount;
};

// 1. Declare stairHeight and set it to 1
// 2. Declare stairCount and set it to 0
// 3. Use while loop to loop until n is less than 0
// 4. Subtract stairHeight from n and set n equal to the difference
// 5. If n is less than or equal to 0, increment stairCount and stairHeight by 1
// 6. Return stairCount