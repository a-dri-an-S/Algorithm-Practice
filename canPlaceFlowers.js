// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

const canPlaceFlowers = function(flowerbed, n) {
    let count = n;
    
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i + 1] !== 1 && flowerbed[i - 1] !== 1 && flowerbed[i] !== 1) {
            flowerbed[i] = 1
            n--
        }
    }
    return n <= 0
};

// 1. Declare count and set it to n
// 2. Use for loop to iterate through flowerbed array
// 3. If current index is not equal to 0 & index on the left + right are also not equal to 1, set current index equal to 1 and decrement n by 1
// 4. If n is less than or equal to 0, return true, else return false