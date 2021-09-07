// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

const climbStairs = (n) => {
    let prev = 0
    let current = 1
    let pastCurrent;
    
    for (let i = 1; i <= n; i++) {
        pastCurrent = current
        current += prev
        prev = pastCurrent
    }
    
    return current
};

// 1. Declare prev and set it to 0
// 2. Declare current and set it to 1
// 3. Declare pastCurrent and set it to nothing
// 4. Use for loop to create loop, from 1 to n, incrementing by 1
// 5. Set pastCurrent to current
// 6. Sum current and prev, set it to current
// 7. Set prev to pastCurrent
// 8. Return current