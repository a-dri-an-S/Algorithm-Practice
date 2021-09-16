// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

const longestCommonPrefix = (strs) => {
    let prefix = ""
    for (let i = 0; i < strs[0].length; i++) {
        const arr = []
        for (let j = 0; j < strs.length; j++) {
            arr.push(strs[j][i])
        }
        const check = [...new Set(arr)]
        if (check.length === 1) {
            prefix += check[0]
        } else if (check.length > 1) {
            break;
        }
    }
    return prefix
};

// 1. Declare prefix and set it to an empty string
// 2. Use for loop to iterate through string in strs at index 0, incrementing by 1
// 3. Declare arr and set it to an empty array
// 4. Use nested for loop to iterate through strs array, incrementing by 1
// 5. Push char of strs[j][i] into arr array
// 6. Declare check and set it to unique characters extracted from arr array, deconstructed into an empty array
// 7. If check contains only 1 unique character (length equal to 1) add character at index 0 to prefix string
// 8. If check contains more than 1 unique character (length greater than 1), break loop
// 9. Return prefix string