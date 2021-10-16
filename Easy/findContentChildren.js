// Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.
// Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

const findContentChildren = (g, s) => {
    g.sort((a, b) => a - b, 0)
    s.sort((a, b) => a - b, 0)
    let count = 0;
    
    for (let i = 0; i < g.length; i++) {
        for (let j = 0; j < s.length; j++) {
            
            if (g[i] <= s[j]) {
                s.splice(j, 1)
                count++
                break;
            }
        }
    }
    return count
};

// 1. Sort both "g" and "s" array in ascending order with sort method
// 2. Declare count and set it to 0
// 3. Use for loop to iterate through "g" array in increments of 1
// 4. Use nested for loop to iterate through "s" array in increments of 1
// 5. If current num in "g" is less than or equal current num in "g" (cookie size larger than child's greed)
//  - Remove num in "s" of current index with splice() method (remove cookie size)
//  - Increment count by 1 (child count) and break loop
// 6. Return count (child count)