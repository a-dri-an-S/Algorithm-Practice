// The Leetcode file system keeps a log each time some user performs a change folder operation.
// The operations are described below:
// "../" : Move to the parent folder of the current folder. (If you are already in the main folder, remain in the same folder).
// "./" : Remain in the same folder.
// "x/" : Move to the child folder named x (This folder is guaranteed to always exist).
// You are given a list of strings logs where logs[i] is the operation performed by the user at the ith step.
// The file system starts in the main folder, then the operations in logs are performed.
// Return the minimum number of operations needed to go back to the main folder after the change folder operations.

const minOperations = function(logs) {
    let count = 0;
    
    for (let i = 0; i < logs.length; i++) {
        if (logs[i] === "../" && count > 0) {
            count--
        } else if (logs[i] === "../" && count <= 0) {
            continue
        } else if (logs[i] === "./") {
            continue
        } else {
            count++
        }
    }
    return count > 0 ? count : 0
};

// 1. Declare count and set it to 0
// 2. Use for loop to iterate through logs
// 3. If current string in logs is equal to "../" and the count is greater than 0, decrement count by 1
// 4. Else if current string in logs is equal to "../" and the count is less than or equal to 0, continue with loop
// 5. Else if current string in logs is equal to "./", continue with loop
// 6. Else increment count by 1
// 7. If count is greater than 0, return count, else return 0