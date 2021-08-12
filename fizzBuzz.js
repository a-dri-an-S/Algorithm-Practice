// Given an integer n, return a string array answer (1-indexed) where:
//     answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
//     answer[i] == "Fizz" if i is divisible by 3.
//     answer[i] == "Buzz" if i is divisible by 5.
//     answer[i] == i if non of the above conditions are true.

const fizzBuzz = n => {
    let arr = [];
    for (let i = 1; i <= n ; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push("FizzBuzz")
        } else if (i % 3 === 0) {
            arr.push("Fizz")
        } else if (i % 5 === 0) {
            arr.push("Buzz")
        } else {
            arr.push(i.toString())
        }
    }
    return arr
};

// 1. Declare arr and set it to 0
// 2. Use for loop to create loop to iterate through numbers 1 - n
// 3. If current n is divisible by 3 and 5, push "FizzBuzz" into arr
// 4. Else, if current n is only divisible by 3, push "Fizz" into arr   
// 5. Else, if current n is only divisible by 5, push "Buzz" into arr
// 6. Else push current n as string into arr
// 7. Return arr