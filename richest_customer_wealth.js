// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

const maximumWealth = accounts => {
    const customerWealth = accounts.map(acc => acc.reduce((a, b) => a + b));
    return Math.max(...customerWealth);
}

// 1. map through accounts array
// 2. sum each secondary array w/ reduce method
// 3. return largest wealth with Math.max and spread operator

const maximumWealth = accounts => {
    let largestWealth = 0;
    for (let acct in accounts) {
        const customerWealth = accounts[acct].reduce((a, b) => a + b);
        if (customerWealth > largestWealth) {
            largestWealth = customerWealth
        }
    }
    return largestWealth
}

// 1. declare variable largest wealth and set it to 0
// 2. loop through accounts array
// 3. sum subarray with reduce method
// 4. if current wealth > largest wealth, set current wealth as new largest wealth
// 5. return largest wealth